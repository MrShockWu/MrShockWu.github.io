(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-manage-user-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/bean/pageS.bean.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/bean/pageS.bean.ts ***!
  \*****************************************************************************/
/*! exports provided: pageSBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSBean", function() { return pageSBean; });
var pageSBean = /** @class */ (function () {
    function pageSBean() {
    }
    return pageSBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 输入框 -->\r\n<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">柜员姓名：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"userManageBean.tellerName\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"right\">柜员号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"userManageBean.tellerId\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6 \" id=\"orgId\">\r\n            <label class=\"inputLayout\">所属机构号：</label>\r\n            <p-dropdown [options]=\"list1\" filter=\"filter\" (onChange)=\"doChose($event)\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"userManageBean.orgId\"\r\n                placeholder=\"请选择\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6 \" id=\"orgName\">\r\n            <label class=\"right\">所属机构名称：</label>\r\n            <p-dropdown [options]=\"list\" filter=\"filter\" (onChange)=\"doChose1($event)\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"userManageBean.orgName\"\r\n                placeholder=\"请选择\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">柜员状态：</label>\r\n            <p-dropdown [options]=\"tellerStatus\" placeholder=\"请选择\" class=\"textAlignLeft\" [(ngModel)]=\"userManageBean.tellerStatus\"></p-dropdown>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" (click)=\"query()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" (click)=\"reset()\" label=\"重置\"></button>\r\n        <button pButton type=\"button\" label=\"柜员同步\" (click)=\"followMe()\" *ngIf=\"permissionCheck('SID02060_P0149')\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"tellerId\" header=\"柜员号\"></p-column>\r\n            <p-column field=\"tellerName\" header=\"柜员姓名\"></p-column>\r\n            <p-column field=\"tellerStatus\" header=\"柜员状态\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.tellerStatus | codeValuePie:tellerStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"email\" header=\"联系邮箱\"></p-column>\r\n            <p-column field=\"mobileNum\" header=\"联系电话\"></p-column>\r\n            <p-column field=\"orgId\" header=\"所属机构号\"></p-column>\r\n            <!-- <p-column field=\"people\" header=\"人力归属机构\"></p-column> -->\r\n            <p-column field=\"orgName\" header=\"所属机构名称\"></p-column>\r\n            <p-column field=\"departmentId\" header=\"所属部门编号\"></p-column>\r\n            <p-column field=\"departmentName\" header=\"所属部门名称\"></p-column>\r\n            <p-column field=\"teamId\" header=\"所属团队编号\"></p-column>\r\n            <p-column field=\"teamName\" header=\"所属团队名称\"></p-column>\r\n            <p-column field=\"signature\" header=\"是否手动修改\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.signature | codeValuePie:code['signatures']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"color\" header=\"操作\" *ngIf=\"permissionCheck('SID02060_P0150')\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <!-- <button pButton type=\"button\" (click)=\"allotRole(car)\" label=\"详情\"></button>\r\n                    <span class=\"tabelDetailIco\" (click)='allotRole(car)'>详情</span> -->\r\n                    <span class=\"tabelUpdateIco\" (click)='update(item)'>修改</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"800\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <!-- <party-manager-detail (outValue)=\"outValue($event)\" [inValue]=\"inValue\"></party-manager-detail> -->\r\n        <app-user-in-step *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></app-user-in-step>\r\n        <app-user-message-update *ngIf=\"showModel=='2'\" (outValue)=\"updateCall($event)\" [inValue]=\"updateValue\"></app-user-message-update>\r\n\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px; }\n\n.module .btnLocation {\n  margin-top: 40px;\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n.module .right {\n  width: 15%;\n  display: inline-block;\n  text-align: right; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/.ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS91c2VyLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFx1c2VyLW1hbmFnZVxcdXNlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZSxFQUFBOztBQUZ2QjtFQUtRLGdCQUFnQjtFQUNoQixtQkFBa0IsRUFBQTs7QUFOMUI7RUFTUSxxQkFBcUIsRUFBQTs7QUFUN0I7RUFZUSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQixFQUFBOztBQUV4QjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvdXNlci1tYW5hZ2UvdXNlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnJvd0xvY2F0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiB9XHJcbiA6aG9zdC9kZWVwLy51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagePage", function() { return UserManagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_user_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/user.manage.bean */ "./src/app/pages/tzb/common/base-manage/user-manage/bean/user.manage.bean.ts");
/* harmony import */ var _bean_pageS_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/pageS.bean */ "./src/app/pages/tzb/common/base-manage/user-manage/bean/pageS.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





// import { TellerStatus } from '../../constant/common.codeValue';


var UserManagePage = /** @class */ (function () {
    function UserManagePage(commonHttpService, confirmationService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        this.precredit = '用户管理';
        this.userManageBean = new _bean_user_manage_bean__WEBPACK_IMPORTED_MODULE_1__["UserManageBean"]();
        this.pageSBean = new _bean_pageS_bean__WEBPACK_IMPORTED_MODULE_2__["pageSBean"]();
        //每页多少条
        this.pageSize = '10';
        //提示信息
        this.msgs = [];
        // 所属机构
        this.status = [];
        // 员工状态
        this.opera = [];
        //模态框的标题
        this.headerTitle = "柜员同步";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        this.tellerStatus = [];
        this.first = 0;
        this.inpFlag = true; //模糊查询
        this.codeValues(); //调用方法，获取全部码值
        this.tellerStatus = this.code['TellerStatus'];
    }
    UserManagePage.prototype.ngOnInit = function () {
        this.userManageBean = new _bean_user_manage_bean__WEBPACK_IMPORTED_MODULE_1__["UserManageBean"]();
        this.userManageBean.pageSize = '10';
        this.userManageBean.pageNum = '1';
        this.orgquery('', '');
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.query();
            }
        };
    };
    //码值
    UserManagePage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    UserManagePage.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    // //机构模糊查询
    UserManagePage.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgId = document.getElementById('orgId').getElementsByTagName('input')[1].value;
                var orgName = document.getElementById('orgName').getElementsByTagName('input')[1].value;
                // this.orgquery($event.path[0].value);
                _this.orgquery(orgId, orgName);
            }, 1000);
        }
    };
    UserManagePage.prototype.orgquery = function (orgId, orgName) {
        var _this = this;
        // this.org = JSON.parse(this.commfunc.getSessionData('officeOrgId'));
        var param = {
            // orgId:/\w/.test(event)?event:'',
            // orgName:/\w/.test(event)?'':event,
            orgId: orgId,
            orgName: orgName,
            pageSize: '30'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
                _this.queryClick();
            }
        });
    };
    //onchange事件
    UserManagePage.prototype.doChose = function (event) {
        this.userManageBean.orgName = this.returnValue(event.value, 'label', 'value');
    };
    UserManagePage.prototype.doChose1 = function (event) {
        this.userManageBean.orgId = this.returnValue(event.value, 'value', 'label');
    };
    /**
  * 转换值
  * @param param  值
  * @param colum  字段
  */
    UserManagePage.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    //查询
    UserManagePage.prototype.queryClick = function () {
        var _this = this;
        var param = {
            tellerName: this.userManageBean.tellerName,
            tellerId: this.userManageBean.tellerId,
            orgId: this.userManageBean.orgName,
            orgName: this.userManageBean.orgId,
            tellerStatus: this.userManageBean.tellerStatus,
            pageNum: this.userManageBean.pageNum,
            pageSize: this.userManageBean.pageSize
        };
        this.commonHttpService.queryTellerByCombConditionsLevel(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: "success", summary: '提示', detail: data.returnCode.message });
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
    UserManagePage.prototype.query = function () {
        var _this = this;
        this.first = 0;
        this.userManageBean.pageNum = '1';
        var param = {
            tellerName: this.userManageBean.tellerName,
            tellerId: this.userManageBean.tellerId,
            orgId: this.userManageBean.orgName,
            orgName: this.userManageBean.orgId,
            tellerStatus: this.userManageBean.tellerStatus,
            pageNum: this.userManageBean.pageNum,
            pageSize: this.userManageBean.pageSize
        };
        this.commonHttpService.queryTellerByCombConditionsLevel(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: "success", summary: '提示', detail: data.returnCode.message });
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
    // 重置
    UserManagePage.prototype.reset = function () {
        this.userManageBean.tellerName = '';
        this.userManageBean.tellerId = '';
        this.userManageBean.tellerStatus = '';
        this.userManageBean.orgId = '';
        this.userManageBean.orgName = '';
    };
    // 增加
    UserManagePage.prototype.followMe = function () {
        this.headerTitle = '柜员同步';
        this.display = true;
        this.showModel = '1';
    };
    //添加后返回的值
    UserManagePage.prototype.addCall = function (param) {
        this.display = param;
        // this.userManageBean.pageNum = '1';
        this.queryClick();
    };
    //分页
    UserManagePage.prototype.paginate = function (event) {
        this.rows = event.rows + '';
        //每页显示的条数
        this.userManageBean.pageSize = this.rows;
        //当前页
        this.currentPage = event.page + 1 + '';
        this.userManageBean.pageNum = this.currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.queryClick();
        // this.userManageBean.pageNum = '1';
    };
    //修改
    UserManagePage.prototype.update = function (item) {
        this.headerTitle = '修改柜员信息';
        this.display = true;
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改的回调
    UserManagePage.prototype.updateCall = function (param) {
        this.display = param;
        this.userManageBean.pageNum = this.currentPage;
        this.queryClick();
    };
    //按钮权限
    UserManagePage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    UserManagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-manage',
            template: __webpack_require__(/*! ./user-manage.component.html */ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.html"),
            styles: [__webpack_require__(/*! ./user-manage.component.scss */ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], UserManagePage);
    return UserManagePage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-manage.module.ts ***!
  \********************************************************************************/
/*! exports provided: UserManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManageModule", function() { return UserManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-manage.component */ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.ts");
/* harmony import */ var _user_manage_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-manage.routing */ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.routing.ts");
/* harmony import */ var _user_message_update_user_message_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-message-update/user-message-update.component */ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { UserInStepComponent } from "./user-in-step/user-in-step.component";
// import { UserMangeDetail } from "./user-manage-detail/user-manage-detail";

// import { UserMangeDetail } from './user-manage-detail/user-manage-detail';
var UserManageModule = /** @class */ (function () {
    function UserManageModule() {
    }
    UserManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _user_manage_routing__WEBPACK_IMPORTED_MODULE_5__["UserManageRouting"],
            ],
            declarations: [
                _user_manage_component__WEBPACK_IMPORTED_MODULE_4__["UserManagePage"],
                // UserInStepComponent,
                // UserMangeDetail,
                _user_message_update_user_message_update_component__WEBPACK_IMPORTED_MODULE_6__["UserMessageUpdateComponent"]
            ],
            providers: []
        })
    ], UserManageModule);
    return UserManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-manage.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: routes, UserManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManageRouting", function() { return UserManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-manage.component */ "./src/app/pages/tzb/common/base-manage/user-manage/user-manage.component.ts");


var routes = [
    { path: '', component: _user_manage_component__WEBPACK_IMPORTED_MODULE_1__["UserManagePage"] }
];
var UserManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\" appValidation>柜员号：</label>\r\n      <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"userManageBean.tellerId\" disabled formControlName=\"tellerId\" name=\"tellerId\">\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['tellerId'].valid&&userform.controls['tellerId'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','tellerId')\"> 柜员号不能为空！</p>\r\n        <!-- <p [hidden]=\"!userform.hasError('pattern','paramValue')\"> 请输入6位至20位以上大写或小写字母或数字或下划线!</p> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\" appValidation>柜员名称:</label>\r\n      <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"userManageBean.tellerName\" formControlName=\"tellerName\" name=\"tellerName\">\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['tellerName'].valid&&userform.controls['tellerName'].dirty\">\r\n        <!-- <p [hidden]=\"!userform.hasError('pattern','tellerName')\"> 柜员名称必须为2-6位中文且不能有空格！</p> -->\r\n        <p [hidden]=\"!userform.hasError('required','tellerName')\"> 柜员名称不能为空！</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\" appValidation>柜员状态：</label>\r\n      <!-- <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"commonParamsBean.status\"> -->\r\n      <p-dropdown [options]=\"tellerStatus\" [(ngModel)]=\"userManageBean.tellerStatus\" formControlName=\"tellerStatus\" name=\"tellerStatus\"\r\n        disabled=\"userManageBean.tellerStatus\"></p-dropdown>\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['tellerStatus'].valid&&userform.controls['tellerStatus'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','tellerStatus')\">柜员状态不能为空！</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" id=\"org\">\r\n      <label class=\"labelWidth\" appValidation>所属机构号：</label>\r\n      <!-- <p-dropdown [options]=\"list1\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"userManageBean.orgId\" placeholder=\"请选择\" filter=\"filter\"  (onChange)=\"doChose($event)\"></p-dropdown> -->\r\n        <p-dropdown [options]=\"list1\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"userManageBean.orgId\" [editable]='true' filter=\"filter\"  (onChange)=\"doChose($event)\" formControlName=\"orgId\" name=\"orgId\"></p-dropdown>\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgId'].valid&&userform.controls['orgId'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','orgId')\">所属机构号不能为空！</p>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\" appValidation>所属机构名称：</label>\r\n      <p-dropdown [options]=\"list\" [(ngModel)]=\"userManageBean.orgName\" filter=\"filter\" [editable]='true' (onChange)=\"doChose1($event)\"\r\n        formControlName=\"orgName\" name=\"orgName\" disabled=\"userManageBean.orgName\"></p-dropdown>\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty\">\r\n        所属机构名称不能为空！\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">所属部门编号</label>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"userManageBean.departmentId\" formControlName=\"departmentId\" name=\"departmentId\"> -->\r\n      <p-dropdown [options]=\"departmentId\" [(ngModel)]=\"userManageBean.departmentId\" filter=\"filter\" [editable]='true' (onChange)=\"doChose2($event)\"\r\n        formControlName=\"departmentId\" name=\"departmentId\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">所属部门名称</label>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"userManageBean.departmentName\" formControlName=\"departmentName\" name=\"departmentName\"> -->\r\n      <p-dropdown [options]=\"departmentName\" [(ngModel)]=\"userManageBean.departmentName\" filter=\"filter\" [editable]='true' (onChange)=\"doChose3($event)\"\r\n        formControlName=\"departmentName\" name=\"departmentName\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">所属团队编号</label>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"userManageBean.teamId\" formControlName=\"teamId\" name=\"teamId\"> -->\r\n      <p-dropdown [options]=\"teamId\" [(ngModel)]=\"userManageBean.teamId\" filter=\"filter\" [editable]='true' (onChange)=\"doChose4($event)\"\r\n        formControlName=\"teamId\" name=\"teamId\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">所属团队名称</label>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"userManageBean.teamName\" formControlName=\"teamName\" name=\"teamName\"> -->\r\n      <p-dropdown [options]=\"teamName\" [(ngModel)]=\"userManageBean.teamName\" filter=\"filter\" [editable]='true' (onChange)=\"doChose5($event)\"\r\n        formControlName=\"teamName\" name=\"teamName\"></p-dropdown>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">联系邮箱：</label>\r\n      <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"userManageBean.email\" formControlName=\"email\" name=\"email\">\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['email'].valid&&userform.controls['email'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('pattern','email')\">请输入正确格式的邮箱！</p>\r\n        <!-- <p [hidden]=\"!userform.hasError('required','email')\">联系邮箱不能为空！</p> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <label class=\"labelWidth\">联系电话：</label>\r\n      <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"userManageBean.mobileNum\" formControlName=\"mobileNum\" name=\"mobileNum\">\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['mobileNum'].valid&&userform.controls['mobileNum'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('pattern','mobileNum')\">请输入正确格式的手机号！</p>\r\n        <!-- <p [hidden]=\"!userform.hasError('required','mobileNum')\">联系电话不能为空！</p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\"></div>\r\n      <div class=\"ui-g-3\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n      </div>\r\n      <div class=\"ui-g-2\">\r\n        <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelWidth {\n  display: inline-block;\n  text-align: right;\n  width: 38%; }\n\ninput {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS91c2VyLW1hbmFnZS91c2VyLW1lc3NhZ2UtdXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXHVzZXItbWFuYWdlXFx1c2VyLW1lc3NhZ2UtdXBkYXRlXFx1c2VyLW1lc3NhZ2UtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFTLEVBQUE7O0FBRWI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvdXNlci1tYW5hZ2UvdXNlci1tZXNzYWdlLXVwZGF0ZS91c2VyLW1lc3NhZ2UtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsV2lkdGh7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOjM4JTtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UserMessageUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessageUpdateComponent", function() { return UserMessageUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_user_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/user.manage.bean */ "./src/app/pages/tzb/common/base-manage/user-manage/bean/user.manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
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





// import { TellerStatus } from '../../../constant/common.codeValue';

var UserMessageUpdateComponent = /** @class */ (function () {
    function UserMessageUpdateComponent(commonHttpService, confirmationService, commfunc, fb) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userManageBean = new _bean_user_manage_bean__WEBPACK_IMPORTED_MODULE_2__["UserManageBean"]();
        this.tellerStatus = [];
        //提示信息
        this.msgs = [];
        this.orgFlag = false;
        this.departmentFlag = false;
        this.teamFlag = false;
        this.inpFlag = true; //机构模糊查询
        this.codeValues(); //调用方法，获取全部码值
        this.tellerStatus = this.code['TellerStatus'];
    }
    UserMessageUpdateComponent.prototype.ngOnInit = function () {
        this.orgquery('');
        this.userform = this.fb.group({
            'orgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'tellerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // 'roleDescribe':new FormControl('',[Validators.pattern(/^[\u4e00-\u9fa5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,255}$/),Validators.required])
            'orgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([\w\.-]+@([\w-]+\.)[a-zA-Z]{2,3}|[\u65e0]?)$/)]),
            'mobileNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{11}$/)]),
            "tellerStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "tellerId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "departmentId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            "departmentName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            "teamName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            "teamId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        // this.userManageBean = Object.assign({}, this.inValue);
        this.userManageBean = JSON.parse(JSON.stringify(this.inValue));
        this.orgId = this.inValue.orgId;
        this.orgName = this.inValue.orgName;
        // this.userManageBean.orgName = this.orgId;
        // this.userManageBean.orgId = this.orgName;
    };
    //码值
    UserMessageUpdateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // ngOnChanges() {
    //   this.fuzhi();
    // }
    // fuzhi() {
    // }
    //机构模糊查询
    UserMessageUpdateComponent.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var org = document.getElementById('org').getElementsByTagName('input')[2].value;
                _this.orgquery(org);
                // this.orgquery($event.path[0].value)
            }, 1000);
        }
    };
    UserMessageUpdateComponent.prototype.orgquery = function (event) {
        var _this = this;
        var param = {
            orgId: event,
            pageSize: '30'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.orgList = data.orgList;
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    //所属部门标号模糊查询
    UserMessageUpdateComponent.prototype.queryTeamId = function () {
        var _this = this;
        var param = {
            orgId: /\w/.test(this.userManageBean.orgId) ? this.userManageBean.orgId : this.userManageBean.orgName,
            relationshipType: "-1",
            operatingLevel: this.operatingLevel
        };
        this.commonHttpService.queryOrgByOrgIdAndRelationship(param).subscribe(function (data) {
            if (data.orgList) {
                // this.team = data.orgList;
                _this.departmentId = _this.listToLabelvalue(data.orgList, 'orgId', 'orgName').departmentArr;
                _this.departmentName = _this.listToLabelvalue(data.orgList, 'orgName', 'orgId').departmentArr;
                _this.teamId = _this.listToLabelvalue(data.orgList, 'orgId', 'orgName').teamArr;
                _this.teamName = _this.listToLabelvalue(data.orgList, 'orgName', 'orgId').teamArr;
            }
        });
    };
    //后台返回变成下拉框的值
    UserMessageUpdateComponent.prototype.listToLabelvalue = function (data, label, value) {
        if (data === void 0) { data = []; }
        var tempObj = {};
        var departmentArr1 = [];
        var teamArr1 = [];
        if (data) {
            data.forEach(function (item) {
                var tempObj = {};
                tempObj['label'] = item[label];
                tempObj['value'] = item[value];
                if (item.operatingLevel == 'TEAM') {
                    teamArr1.push(tempObj);
                }
                else {
                    departmentArr1.push(tempObj);
                }
            });
        }
        return tempObj = {
            departmentArr: departmentArr1,
            teamArr: teamArr1
        };
    };
    UserMessageUpdateComponent.prototype.lookOpLevel = function () {
        for (var i in this.orgList) {
            if (this.orgList[i].orgId == this.userManageBean.orgName || this.orgList[i].orgId == this.userManageBean.orgId) {
                this.operatingLevel = this.orgList[i].operatingLevel + '_DT';
                this.queryTeamId();
                return;
            }
        }
    };
    //onchange事件
    UserMessageUpdateComponent.prototype.doChose = function (event) {
        this.userManageBean.orgName = this.returnValue1(event.value, 'label', 'value', this.list);
        this.lookOpLevel();
        this.orgFlag = true;
    };
    UserMessageUpdateComponent.prototype.doChose1 = function (event) {
        this.userManageBean.orgId = this.returnValue1(event.value, 'value', 'label', this.list);
        this.orgFlag = true;
    };
    UserMessageUpdateComponent.prototype.doChose2 = function (event) {
        this.userManageBean.departmentName = this.returnValue1(event.value, 'label', 'value', this.departmentName);
        this.departmentFlag = true;
    };
    UserMessageUpdateComponent.prototype.doChose3 = function (event) {
        this.userManageBean.departmentId = this.returnValue1(event.value, 'value', 'label', this.departmentName);
        this.departmentFlag = true;
    };
    UserMessageUpdateComponent.prototype.doChose4 = function (event) {
        this.userManageBean.teamName = this.returnValue1(event.value, 'label', 'value', this.teamName);
        this.teamFlag = true;
    };
    UserMessageUpdateComponent.prototype.doChose5 = function (event) {
        this.userManageBean.teamId = this.returnValue1(event.value, 'value', 'label', this.teamName);
        this.teamFlag = true;
    };
    /**
  * 转换值
  * @param param  值
  * @param colum  字段
  */
    UserMessageUpdateComponent.prototype.returnValue1 = function (param, colum, valueColum, list) {
        var value = "";
        list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    //确定
    UserMessageUpdateComponent.prototype.preserveClick = function () {
        var _this = this;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        if (this.orgFlag || this.departmentFlag || this.teamFlag) {
            if (this.orgFlag) {
                this.orgId1 = this.userManageBean.orgName;
                this.orgName1 = this.userManageBean.orgId;
            }
            else {
                this.orgId1 = this.userManageBean.orgId;
                this.orgName1 = this.userManageBean.orgName;
            }
            if (this.departmentFlag) {
                this.departmentId1 = this.userManageBean.departmentName;
                this.departmentName1 = this.userManageBean.departmentId;
            }
            else {
                this.departmentId1 = this.userManageBean.departmentId;
                this.departmentName1 = this.userManageBean.departmentName;
            }
            if (this.teamFlag) {
                this.teamId1 = this.userManageBean.teamName;
                this.teamName1 = this.userManageBean.teamId;
            }
            else {
                this.teamId1 = this.userManageBean.teamId;
                this.teamName1 = this.userManageBean.teamName;
            }
            this.param = {
                tellerId: this.userManageBean.tellerId,
                tellerName: this.userManageBean.tellerName,
                tellerStatus: this.userManageBean.tellerStatus,
                orgId: this.orgId1,
                orgName: this.orgName1,
                departmentId: this.departmentId1,
                departmentName: this.departmentName1,
                teamId: this.teamId1,
                teamName: this.teamName1,
                email: this.userManageBean.email,
                mobileNum: this.userManageBean.mobileNum,
            };
            // return this.param
        }
        else {
            this.param = this.userManageBean;
        }
        //提交服务
        this.commonHttpService.updateTellerInfo(this.param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                // this.userManageBean = new UserManageBean();
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.userManageBean.pageNum = '1';
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //取消
    UserMessageUpdateComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserMessageUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserMessageUpdateComponent.prototype, "outValue", void 0);
    UserMessageUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-message-update',
            template: __webpack_require__(/*! ./user-message-update.component.html */ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.html"),
            styles: [__webpack_require__(/*! ./user-message-update.component.scss */ "./src/app/pages/tzb/common/base-manage/user-manage/user-message-update/user-message-update.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserMessageUpdateComponent);
    return UserMessageUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-manage-user-manage-module.js.map