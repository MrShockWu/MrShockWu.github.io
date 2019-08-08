(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operationChangeRecord-operationChangeRecord-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'机构查询'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6 ui-mp-6\">\r\n            <label class=\"inputLayout\">机构编码：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"partyManageBean.orgId\">\r\n        </div>\r\n        <div class=\"ui-g-6 ui-mp-6\">\r\n            <label>机构名称：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"partyManageBean.orgName\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n\r\n    <!-- table -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\" (onRowSelect)=\"onRowSelect($event)\"  selectionMode=\"single\" [(selection)]=\"selectedCar2\" dataKey=\"orgName\">\r\n            <p-column field=\"orgId\" header=\"机构编码\"></p-column>\r\n            <p-column field=\"orgName\" header=\"机构名称\"></p-column>\r\n            <p-column field=\"superiorManageOrg\" header=\"上级机构编码\"></p-column>\r\n            <p-column field=\"superiorManageOrgName\" header=\"上级机构名称\"></p-column>\r\n            <p-column field=\"orgType\" header=\"机构类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.orgType | codeValuePie:orgType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operatingLevel\" header=\"机构级别\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.operatingLevel | codeValuePie:operatingLevel}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"orgStatus\" header=\"机构状态\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.orgStatus | codeValuePie:orgStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"location\" header=\"位置描述\"></p-column>\r\n            <p-column field=\"legalFlag\" header=\"法人标志\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.legalFlag | codeValuePie:legalFlag}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\" rows=\"{{partyManageBean.rowNum}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px; }\n\n.module .btnLocation {\n  margin-top: 40px;\n  margin-bottom: 50px; }\n\n.module input {\n  width: 25% !important; }\n\n.setOrg {\n  min-height: 400px;\n  max-height: 600px; }\n\n:host/deep/ .ui-dropdown {\n  width: 25% !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvYWRtaW5pc3Rlci10cmVlMS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxvcGVyYXRpb25DaGFuZ2VSZWNvcmRcXGFkbWluaXN0ZXItdHJlZTFcXGFkbWluaXN0ZXItdHJlZTEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQixFQUFBOztBQUZ4QjtFQUtRLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFOM0I7RUFTUSxxQkFBcUIsRUFBQTs7QUFHN0I7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUNKLEVBQUE7O0FBQ0E7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2Uvb3BlcmF0aW9uQ2hhbmdlUmVjb3JkL2FkbWluaXN0ZXItdHJlZTEvYWRtaW5pc3Rlci10cmVlMS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSB7XHJcbiAgICAucm93TG9jYXRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5idG5Mb2NhdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5zZXRPcmd7XHJcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdministerTree1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministerTree1", function() { return AdministerTree1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var _bean_administer_tree_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/administer-tree.bean */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/bean/administer-tree.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { OrgStatus, OrgTypes, OperatingLevel, LegalFlag } from '../../constant/common.codeValue';





var AdministerTree1 = /** @class */ (function () {
    function AdministerTree1(commonHttpService, confirmationService, commfunc, uisftechCommonHttpService) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.selectAllValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        //机构类型
        this.orgType = [];
        //机构状态
        this.orgStatus = [];
        //机构级别
        this.operatingLevel = [];
        //法人标识
        this.legalFlag = [];
        this.partyManageBean = new _bean_administer_tree_bean__WEBPACK_IMPORTED_MODULE_5__["PartyManageBean"]();
        //机构类型
        this.partyType = [];
        //机构状态 
        this.partyStatus = [];
        // 机构等级
        this.partyLevel = [];
        //每页多少条
        this.pageSize = '10';
        //提示信息
        this.msgs = [];
        //模态框的标题
        this.headerTitle = "机构同步";
        //模态框是否显示
        this.display = false;
        this.first = 0;
        this.postList = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.orgType = this.code['OrgTypes'];
        this.orgStatus = this.code['OrgStatus'];
        this.operatingLevel = this.code['OperatingLevel'];
        this.legalFlag = this.code['LegalFlag'];
    }
    AdministerTree1.prototype.ngOnInit = function () {
        this.partyManageBean.rowNum = '10';
        this.partyManageBean.startRow = '1';
        this.queryClick();
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.query();
            }
        };
    };
    AdministerTree1.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //onchange事件
    AdministerTree1.prototype.doChose = function (event) {
        this.partyManageBean.orgName = this.returnValue(event.value, 'value', 'label');
    };
    AdministerTree1.prototype.doChose1 = function (event) {
        this.partyManageBean.orgId = this.returnValue(event.value, 'label', 'value');
    };
    AdministerTree1.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    //查询
    AdministerTree1.prototype.queryClick = function () {
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
    AdministerTree1.prototype.query = function () {
        var _this = this;
        this.partyManageBean.flag = '0';
        this.first = 0;
        this.partyManageBean.startRow = "1";
        this.commonHttpService.queryOrgByCombConditionsLevel(this.partyManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orgInfoList;
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
    /**
     *
     * @param event 机构同步
     */
    //分页
    AdministerTree1.prototype.paginate = function (event) {
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
    // 重置
    AdministerTree1.prototype.reset = function () {
        this.partyManageBean.orgName = '',
            this.partyManageBean.orgId = '';
    };
    AdministerTree1.prototype.onRowSelect = function (event) {
        this.postList = [];
        this.postList.push(event.data);
        this.selectAllValue.emit(this.postList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AdministerTree1.prototype, "selectAllValue", void 0);
    AdministerTree1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'administer-tree1',
            template: __webpack_require__(/*! ./administer-tree1.html */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.html"),
            styles: [__webpack_require__(/*! ./administer-tree1.scss */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_6__["CommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        /**
         * 机构对应关系
         */
        ,
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_6__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_4__["UisftechCommonHttpService"]])
    ], AdministerTree1);
    return AdministerTree1;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/bean/administer-tree.bean.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/bean/administer-tree.bean.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PartyManageBean, queryOrgByOrgIdAndRelationshipBean, orgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyManageBean", function() { return PartyManageBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOrgByOrgIdAndRelationshipBean", function() { return queryOrgByOrgIdAndRelationshipBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgList", function() { return orgList; });
var PartyManageBean = /** @class */ (function () {
    function PartyManageBean() {
    }
    return PartyManageBean;
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

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 functions\">\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID01058_P002')\" [routerLink]=\"[ '/pages/tzb/back-manage/base-manage/operation-change-record/post-change']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n            (click)=\"apply(1)\">\r\n            岗位变更记录\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID01058_P001')\" [routerLink]=\"['/pages/tzb/back-manage/base-manage/operation-change-record/record-query']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n            (click)=\"apply(2)\">\r\n            审批权限变更记录\r\n        </a>\r\n    </span>\r\n</div>\r\n<div class=\"ui-g-12 padding-one\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #fafafa  !important;\n  color: #003f5c !important; }\n\n.padding-one {\n  padding: 0; }\n\n.bgcolor {\n  background: #fafafa; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxcb3BlcmF0aW9uQ2hhbmdlUmVjb3JkXFxvcGVyYXRpb25DaGFuZ2VSZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0NBQ0osRUFBQTs7QUFFQTtFQUNJLFdBQVc7RUFDWCxxQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFVBQVMsRUFBQTs7QUFHYjtFQUNJLG1CQUFvQixFQUFBOztBQUd4QjtFQUNJO0lBQ0ksZ0NBQWdDLEVBQUE7SUFEcEM7TUFHUSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFHekI7SUFDSSxvQ0FBb0MsRUFBQTtFQUV4QztJQUNJLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvb3BlcmF0aW9uQ2hhbmdlUmVjb3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLW1lbnViYXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZsdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxyXG59XHJcblxyXG4uYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIOWIh+aNolxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy1vbmUge1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcblxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhIDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: operationChangeRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationChangeRecordComponent", function() { return operationChangeRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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



var operationChangeRecordComponent = /** @class */ (function () {
    function operationChangeRecordComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.show = 1;
    }
    operationChangeRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.permissionCheck('SID01058_P002')) {
            this.show = 1;
        }
        else if (this.permissionCheck('SID01058_P001')) {
            this.router.navigate(["pages/tzb/back-manage/base-manage/operation-change-record/record-query"]);
            this.show = 2;
        }
        setTimeout(function () {
            _this.judgStatu();
        });
    };
    operationChangeRecordComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //判断当前路由 改变样式active
    operationChangeRecordComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'post-change') {
                _this.show = 1;
            }
            else if (v === 'record-query') {
                _this.show = 2;
            }
        });
    };
    //绑定权限id
    operationChangeRecordComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    operationChangeRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'operation-change-record',
            template: __webpack_require__(/*! ./operationChangeRecord.component.html */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.html"),
            styles: [__webpack_require__(/*! ./operationChangeRecord.component.scss */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], operationChangeRecordComponent);
    return operationChangeRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: operationChangeRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationChangeRecordModule", function() { return operationChangeRecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _operationChangeRecord_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operationChangeRecord.routing */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.routing.ts");
/* harmony import */ var _operationChangeRecord_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operationChangeRecord.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.ts");
/* harmony import */ var _record_query_record_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record-query/record-query.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.ts");
/* harmony import */ var _post_change_post_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-change/post-change.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.ts");
/* harmony import */ var _administer_tree1_administer_tree1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./administer-tree1/administer-tree1 */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/administer-tree1/administer-tree1.ts");
/* harmony import */ var _select_post1_select_post1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-post1/select-post1.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var operationChangeRecordModule = /** @class */ (function () {
    function operationChangeRecordModule() {
    }
    operationChangeRecordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _operationChangeRecord_routing__WEBPACK_IMPORTED_MODULE_4__["operationChangeRecordRouting"]
            ],
            declarations: [
                _operationChangeRecord_component__WEBPACK_IMPORTED_MODULE_5__["operationChangeRecordComponent"],
                _record_query_record_query_component__WEBPACK_IMPORTED_MODULE_6__["RecordQueryComponent"],
                _post_change_post_change_component__WEBPACK_IMPORTED_MODULE_7__["PostChangeComponent"],
                _administer_tree1_administer_tree1__WEBPACK_IMPORTED_MODULE_8__["AdministerTree1"],
                _select_post1_select_post1_component__WEBPACK_IMPORTED_MODULE_9__["SelectPost1"]
            ]
        })
    ], operationChangeRecordModule);
    return operationChangeRecordModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.routing.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.routing.ts ***!
  \*****************************************************************************************************/
/*! exports provided: routes, operationChangeRecordRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationChangeRecordRouting", function() { return operationChangeRecordRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operationChangeRecord_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operationChangeRecord.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/operationChangeRecord.component.ts");
/* harmony import */ var _record_query_record_query_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record-query/record-query.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.ts");
/* harmony import */ var _post_change_post_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-change/post-change.component */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.ts");




var routes = [
    {
        path: '',
        component: _operationChangeRecord_component__WEBPACK_IMPORTED_MODULE_1__["operationChangeRecordComponent"],
        children: [
            { path: '', redirectTo: 'post-change', pathMatch: 'full' },
            {
                path: 'post-change',
                component: _post_change_post_change_component__WEBPACK_IMPORTED_MODULE_3__["PostChangeComponent"]
            },
            {
                path: 'record-query',
                component: _record_query_record_query_component__WEBPACK_IMPORTED_MODULE_2__["RecordQueryComponent"],
            },
        ]
    },
];
var operationChangeRecordRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/bean/postchange.bean.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/bean/postchange.bean.ts ***!
  \********************************************************************************************************/
/*! exports provided: PostChangeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostChangeBean", function() { return PostChangeBean; });
var PostChangeBean = /** @class */ (function () {
    function PostChangeBean() {
    }
    return PostChangeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\" *ngIf=\"permissionCheck('SID01058_P002')\">\r\n\t<div class=\"ui-g-12 query\">\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>申请人：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.tellerName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"userClick(1)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>申请人机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.orgName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"orgClick(1)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>申请人原机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.oldOrgName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"orgClick(2)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class=\"ui-g-12 query query-name\">\r\n\t\t<div class=\"ui-g-4 tite\">\r\n\t\t\t<label class=\"ui-g-4\">变更时间：</label>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t\t    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n\t\t\t\t至\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t\t    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>原岗位：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.oldPostName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"postClick(1)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>现岗位：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.postName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"postClick(2)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 query query-name\">\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>操作人：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"postChangeBean.operateTellerName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"userClick(2)\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)='clickQuery()'></button>\r\n\t\t<button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 base-table\">\r\n\t\t<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n\t\t\t<p-column field=\"tellerName\" header='申请人'></p-column>\r\n\t\t\t<p-column field=\"oldOrgName\" header='申请人原机构'></p-column>\r\n\t\t\t<p-column field=\"orgName\" header='申请人机构'></p-column>\r\n\t\t\t<p-column field=\"applyDate\" header='变更时间'></p-column>\r\n\t\t\t<p-column field=\"\" header='原岗位'>\r\n\t\t\t\t<ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<div *ngFor=\"let item of car.oldPostList\">{{item}}</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"postName\" header='现岗位'>\r\n\t\t\t\t<ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<div *ngFor=\"let item of car.newPostList\">{{item}}</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"operateTellerName\" header=\"操作人\"></p-column>\r\n\t\t</p-dataTable>\r\n\r\n\t\t<p-paginator first={{first}} rows=\"{{postChangeBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\r\n</div>\r\n<p-dialog [(visible)]=\"Display\" *ngIf=\"Display\" (onHide)=\"close()\" modal=\"modal\" width=\"1000\" [responsive]=\"true\" [positionTop]=10>\r\n\t<div>\r\n\t\t<queryUser *ngIf=\"userDisplay\" (outValue)=\"userValueCall($event)\"></queryUser>\r\n\t\t<administer-tree1 *ngIf=\"orgDisplay\" (selectAllValue)=\"orgValueCall($event)\"></administer-tree1>\r\n\t\t<select-post1  *ngIf=\"postDisplay\" (outValue)=\"queryPostCall($event)\"></select-post1>\r\n\t</div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query {\n  padding-bottom: 0; }\n  .query input {\n    width: 86%; }\n  .query .ui-g-4 {\n    text-align: right; }\n  .query .ui-g-4 .querytitle {\n      width: 32%;\n      float: left;\n      text-align: right;\n      height: 28px;\n      line-height: 28px; }\n  .query .ui-g-4 .queryinputbtn {\n      width: 56%;\n      float: left;\n      display: flex;\n      padding-left: 12px; }\n  .query .ui-g-4 .queryinputbtn .queryinputOrg {\n        border-right: none;\n        border-radius: 3px 0 0 3px;\n        width: 85% !important;\n        min-width: 69px !important; }\n  .query .ui-g-4 .queryinputbtn .clickspan {\n        width: 14%;\n        height: 23px;\n        cursor: pointer; }\n  .query .ui-g-8 {\n    text-align: left; }\n  .btn {\n  text-align: center; }\n  .btn button {\n    margin: 30px; }\n  .table {\n  text-align: center; }\n  :host/deep/ .ui-dropdown {\n  width: 86% !important; }\n  :host/deep/ .ui-calendar {\n  width: 40% !important; }\n  @media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 45.5%;\n    min-width: 100px !important; } }\n  .query-name {\n  padding-top: 0;\n  padding-bottom: 0; }\n  .query-name .tite {\n    padding-top: 0; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  :host/deep/ .ui-dropdown .ui-dropdown-label.ui-inputtext {\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvcG9zdC1jaGFuZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxcb3BlcmF0aW9uQ2hhbmdlUmVjb3JkXFxwb3N0LWNoYW5nZVxccG9zdC1jaGFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdRLFVBQVUsRUFBQTtFQUhsQjtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO01BUVksVUFBVTtNQUNWLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGlCQUFpQixFQUFBO0VBWjdCO01BZVksVUFBVTtNQUNWLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFsQjlCO1FBb0JnQixrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEIsRUFBQTtFQXZCMUM7UUEwQmdCLFVBQVU7UUFDVixZQUFZO1FBQ1osZUFBZSxFQUFBO0VBNUIvQjtJQWlDUSxnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtFQUNJLHFCQUFxQixFQUFBO0VBRXpCO0VBRUs7SUFDRyxZQUFZO0lBQ1osMkJBQTJCLEVBQUEsRUFDOUI7RUFFTDtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUZyQjtJQUlRLGNBQWMsRUFBQTtFQUl0QjtFQUNJLHNCQUFzQixFQUFBO0VBRTFCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvcG9zdC1jaGFuZ2UvcG9zdC1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlcnkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgIH1cclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC5xdWVyeXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXVlcnlpbnB1dGJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NiU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLWctOCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA4NiUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDQ1LjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ucXVlcnktbmFtZXtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudGl0ZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsLnVpLWlucHV0dGV4dCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PostChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostChangeComponent", function() { return PostChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_postchange_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/postchange.bean */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/bean/postchange.bean.ts");
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
 * 岗位变更
 */
var PostChangeComponent = /** @class */ (function () {
    function PostChangeComponent(commonHttpService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.postChangeBean = new _bean_postchange_bean__WEBPACK_IMPORTED_MODULE_5__["PostChangeBean"]();
        this.msgs = []; //提示信息
        this.tableData = [];
        this.first = 0; //分页控制
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"]; //讲英文转化为中文
        this.startDate = null; //申请开始日期
        this.endDate = null; //申请结束日期
        this.oldPostList = [];
        this.newPostList = [];
    }
    PostChangeComponent.prototype.ngOnInit = function () {
        this.postChangeBean.pageSize = 10;
        this.postChangeBean.pageNum = 1;
        this.query();
    };
    PostChangeComponent.prototype.clickQuery = function () {
        this.postChangeBean.pageNum = 1;
        this.postChangeBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    PostChangeComponent.prototype.query = function () {
        var _this = this;
        if (this.commfunc.transDateN(this.startDate)) {
            this.postChangeBean.startDate = this.commfunc.transDateN(this.startDate) + ' ' + '00:00:00';
        }
        if (this.commfunc.transDateN(this.endDate)) {
            this.postChangeBean.endDate = this.commfunc.transDateN(this.endDate) + ' ' + '23:59:59';
        }
        this.commonHttpService.queryPostchangeInfo(this.postChangeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.total = data.total;
                if (data.postChangeInfoList && data.postChangeInfoList.length > 0) {
                    data.postChangeInfoList.forEach(function (item) {
                        if (item['oldPostInfo']) {
                            item['oldPostList'] = item['oldPostInfo'].split(',');
                        }
                        if (item['newPostInfo']) {
                            item['newPostList'] = item['newPostInfo'].split(',');
                        }
                    });
                    _this.tableData = data.postChangeInfoList;
                }
                else {
                    _this.tableData = []; //列表为空时避免一直显示数据加载中
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //重置
    PostChangeComponent.prototype.reset = function () {
        this.postChangeBean = new _bean_postchange_bean__WEBPACK_IMPORTED_MODULE_5__["PostChangeBean"]();
        this.startDate = null;
        this.endDate = null;
        // this.postChangeBean.pageNum = 1;
        // this.postChangeBean.pageSize = 10;
        // this.first = 0;
    };
    PostChangeComponent.prototype.userClick = function (param) {
        this.param = param;
        this.Display = true;
        this.userDisplay = true;
    };
    //申请人回调
    PostChangeComponent.prototype.userValueCall = function (event) {
        this.Display = false;
        this.userDisplay = false;
        if (this.param == 1) { //申请人
            this.postChangeBean.tellerName = event[0].tellerName;
            this.postChangeBean.tellerId = event[0].tellerId;
        }
        else { //操作人
            this.postChangeBean.operateTellerName = event[0].tellerName;
            this.postChangeBean.operateTellerId = event[0].tellerId;
        }
    };
    PostChangeComponent.prototype.orgClick = function (num) {
        this.orgIndex = num;
        this.Display = true;
        this.orgDisplay = true;
    };
    //机构号回调
    PostChangeComponent.prototype.orgValueCall = function (event) {
        this.Display = false;
        this.orgDisplay = false;
        if (this.orgIndex == 1) { //申请人机构
            this.postChangeBean.orgId = event[0].orgId;
            this.postChangeBean.orgName = event[0].orgName;
        }
        else { //申请人原机构
            this.postChangeBean.oldOrgId = event[0].orgId;
            this.postChangeBean.oldOrgName = event[0].orgName;
        }
    };
    PostChangeComponent.prototype.postClick = function (num) {
        this.index = num;
        this.Display = true;
        this.postDisplay = true;
    };
    PostChangeComponent.prototype.queryPostCall = function (event) {
        this.Display = false;
        this.postDisplay = false;
        if (this.index == 1) { //原岗位
            this.postChangeBean.oldPostId = event[0].postId;
            this.postChangeBean.oldPostName = event[0].postName;
        }
        else { //现岗位
            this.postChangeBean.postId = event[0].postId;
            this.postChangeBean.postName = event[0].postName;
        }
    };
    PostChangeComponent.prototype.close = function () {
        this.userDisplay = false;
        this.orgDisplay = false;
        this.postDisplay = false;
    };
    //分页
    PostChangeComponent.prototype.paginate = function (event) {
        var rows = event.rows;
        //每页显示的条数
        this.postChangeBean.pageSize = rows;
        //当前页
        var currentPage = event.page + 1;
        this.postChangeBean.pageNum = currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
    };
    //绑定权限id
    PostChangeComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PostChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'post-change',
            template: __webpack_require__(/*! ./post-change.component.html */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.html"),
            styles: [__webpack_require__(/*! ./post-change.component.scss */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/post-change/post-change.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_4__["CommonHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], PostChangeComponent);
    return PostChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\" *ngIf=\"permissionCheck('SID01058_P001')\">\r\n\t<div class=\"ui-g-12 query\">\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>申请人：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"applyByUserLoginName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"userClick()\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"querytitle\">\r\n\t\t\t\t<label>申请人机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"applyByOrgName\" disabled/>\r\n\t\t\t\t<div class=\"clickspan\" (click)=\"orgClick()\">\r\n\t\t\t\t\t<span>...</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<label class=\"ui-g-4\">查询时间：</label>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"dateFrom\" [maxDate]=\"dateEnd\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n\t\t\t\t至\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"dateEnd\" [minDate]=\"dateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 query query-name\">\r\n\t\t<div class=\"ui-g-4 tite\">\r\n\t\t\t<span class=\"ui-g-4\">原权限：</span>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"oldPermission\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4 tite\">\r\n\t\t\t<span class=\"ui-g-4\">现权限：</span>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"newPermission\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)='clickQuery()'></button>\r\n\t\t<button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 base-table\">\r\n\t\t<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n\t\t\t<p-column field=\"operateId\" header='操作编号'></p-column>\r\n\t\t\t<p-column field=\"externalId\" header='关联标识'></p-column>\r\n\t\t\t<p-column field=\"externalIdType\" header='关联类型'>\r\n\t\t\t\t<ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>{{car.externalIdType | codeValuePie:externalIdTypes}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"operateType\" header='操作类型'>\r\n\t\t\t\t<ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>{{car.operateType | codeValuePie:operateTypeList}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<!-- <p-column field=\"fromOperateRecode\" [style]=\"{'width':'300px'}\" header='原操作记录'></p-column>\r\n      <p-column field=\"toOperateRecode\" [style]=\"{'width':'300px'}\" header='目标操作记录'></p-column> -->\r\n\t\t\t<p-column field=\"applyDate\" header='申请日期'></p-column>\r\n\t\t\t<p-column field=\"applyByUserLogin\" header='申请人工号'></p-column>\r\n\t\t\t<p-column field=\"applyByOrgId\" header='申请人机构号'></p-column>\r\n\t\t\t<p-column field=\"reviewByUserLogin\" header='审批人工号'></p-column>\r\n\t\t\t<p-column field=\"reviewDate\" header=\"审批日期\"></p-column>\r\n\t\t</p-dataTable>\r\n\r\n\t\t<p-paginator first={{first}} rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\r\n</div>\r\n<p-dialog [(visible)]=\"Display\" *ngIf=\"Display\" (onHide)=\"close()\" modal=\"modal\" width=\"1000\" [responsive]=\"true\" [positionTop]=10 >\r\n\t<div>\r\n\t\t<queryUser *ngIf=\"userDisplay\" (outValue)=\"userValueCall($event)\"></queryUser>\r\n\t\t<!-- <app-vouvher-tree *ngIf=\"orgDisplay\" (selectAllValue)=\"orgValueCall($event)\"></app-vouvher-tree> -->\r\n\t\t<administer-tree1 *ngIf=\"orgDisplay\" (selectAllValue)=\"orgValueCall($event)\"></administer-tree1>\r\n\t</div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query {\n  padding-bottom: 0; }\n  .query input {\n    width: 86%; }\n  .query .ui-g-4 {\n    text-align: right; }\n  .query .ui-g-4 .querytitle {\n      width: 32%;\n      float: left;\n      text-align: right;\n      height: 28px;\n      line-height: 28px; }\n  .query .ui-g-4 .queryinputbtn {\n      width: 56%;\n      float: left;\n      display: flex;\n      padding-left: 12px; }\n  .query .ui-g-4 .queryinputbtn .queryinputOrg {\n        border-right: none;\n        border-radius: 3px 0 0 3px;\n        width: 85% !important;\n        min-width: 69px !important; }\n  .query .ui-g-4 .queryinputbtn .clickspan {\n        width: 14%;\n        height: 23px;\n        cursor: pointer; }\n  .query .ui-g-8 {\n    text-align: left; }\n  .btn {\n  text-align: center; }\n  .btn button {\n    margin: 30px; }\n  .query-name {\n  padding-top: 0;\n  padding-bottom: 0; }\n  .query-name .tite {\n    padding-top: 0; }\n  .table {\n  text-align: center; }\n  :host/deep/ .ui-dropdown {\n  width: 86% !important; }\n  :host/deep/ .ui-calendar {\n  width: 40% !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  :host/deep/ .ui-dropdown .ui-dropdown-label.ui-inputtext {\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvcmVjb3JkLXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXG9wZXJhdGlvbkNoYW5nZVJlY29yZFxccmVjb3JkLXF1ZXJ5XFxyZWNvcmQtcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdRLFVBQVUsRUFBQTtFQUhsQjtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO01BUVksVUFBVTtNQUNWLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGlCQUFpQixFQUFBO0VBWjdCO01BZVksVUFBVTtNQUNWLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFsQjlCO1FBb0JnQixrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEIsRUFBQTtFQXZCMUM7UUEwQmdCLFVBQVU7UUFDVixZQUFZO1FBQ1osZUFBZSxFQUFBO0VBNUIvQjtJQWlDUSxnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsWUFBWSxFQUFBO0VBR3BCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBRnJCO0lBSVEsY0FBYyxFQUFBO0VBSXRCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtFQUNJLHFCQUFxQixFQUFBO0VBRXpCO0VBQ0ksc0JBQXNCLEVBQUE7RUFFMUI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL29wZXJhdGlvbkNoYW5nZVJlY29yZC9yZWNvcmQtcXVlcnkvcmVjb3JkLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXJ5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICB9XHJcbiAgICAudWktZy00IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAucXVlcnl0aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS1nLTgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLnF1ZXJ5LW5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLnRpdGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgfVxyXG59XHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsLnVpLWlucHV0dGV4dCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RecordQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordQueryComponent", function() { return RecordQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecordQueryComponent = /** @class */ (function () {
    function RecordQueryComponent(commonHttpService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.msgs = []; //提示信息
        this.tableData = [];
        this.first = 0; //分页控制
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"]; //讲英文转化为中文
        this.externalIdType = 'PERMISSION'; //操作类型
        this.dateFrom = null; //申请开始日期
        this.dateEnd = null; //申请结束日期
        this.codeValues(); //调用方法，获取全部码值
        this.externalIdTypes = this.code['externalIdType'];
        this.operateTypeList = this.code['operateTypeList']; //操作类型
    }
    RecordQueryComponent.prototype.ngOnInit = function () {
        this.pageSize = '10';
        this.pageNum = '1';
        this.query();
        this.externalIdTypesChange();
    };
    //码值
    RecordQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    RecordQueryComponent.prototype.externalIdTypesChange = function () {
        this.elementDisplay = this.externalIdType;
        this.fromOperateRecode = this.oldPermission ? JSON.stringify([{ oldPermission: this.oldPermission }]) : '';
        this.toOperateRecode = this.newPermission ? JSON.stringify([{ newPermission: this.newPermission }]) : '';
    };
    RecordQueryComponent.prototype.clickQuery = function () {
        this.pageNum = '1';
        this.first = 0;
        this.query();
    };
    RecordQueryComponent.prototype.query = function () {
        var _this = this;
        this.externalIdTypesChange();
        var params = {
            externalIdType: this.externalIdType,
            applyByUserLogin: this.applyByUserLogin,
            applyByOrgId: this.applyByOrgId,
            dateFrom: this.commfunc.transDateN(this.dateFrom),
            dateEnd: this.commfunc.transDateN(this.dateEnd),
            fromOperateRecode: this.fromOperateRecode,
            toOperateRecode: this.toOperateRecode,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.commonHttpService.queryOperateRecode(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.total = data.result.total;
                if (data.result.operateRecodeList && data.result.operateRecodeList.length > 0) {
                    data.result.operateRecodeList.forEach(function (item) {
                        if (item['applyDate']) {
                            item['applyDate'] = _this.commfunc.transDateN(new Date(item['applyDate']));
                        }
                        if (item['reviewDate']) {
                            item['reviewDate'] = _this.commfunc.transDateN(new Date(item['reviewDate']));
                        }
                    });
                    _this.tableData = data.result.operateRecodeList;
                }
                else {
                    _this.tableData = []; //列表为空时避免一直显示数据加载中
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询成功' });
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
    //重置
    RecordQueryComponent.prototype.reset = function () {
        this.externalIdType = 'PERMISSION';
        this.applyByUserLogin = '';
        this.applyByOrgId = '';
        this.dateFrom = null;
        this.dateEnd = null;
        this.applyByUserLoginName = '';
        this.applyByOrgName = '';
        this.oldPermission = '';
        this.newPermission = '';
    };
    RecordQueryComponent.prototype.userClick = function () {
        this.Display = true;
        this.userDisplay = true;
    };
    //申请人回调
    RecordQueryComponent.prototype.userValueCall = function (event) {
        this.Display = false;
        this.userDisplay = false;
        this.applyByUserLoginName = event[0].tellerName;
        this.applyByUserLogin = event[0].tellerId;
    };
    RecordQueryComponent.prototype.orgClick = function () {
        this.Display = true;
        this.orgDisplay = true;
    };
    //机构号回调
    RecordQueryComponent.prototype.orgValueCall = function (event) {
        this.Display = false;
        this.orgDisplay = false;
        this.applyByOrgId = event[0].orgId;
        this.applyByOrgName = event[0].orgName;
    };
    RecordQueryComponent.prototype.close = function () {
        this.userDisplay = false;
        this.orgDisplay = false;
        this.postDisplay = false;
    };
    //分页
    RecordQueryComponent.prototype.paginate = function (event) {
        var rows = event.rows;
        //每页显示的条数
        this.pageSize = rows + '';
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum = currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
    };
    //绑定权限id
    RecordQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    RecordQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recordQueryComponent',
            template: __webpack_require__(/*! ./record-query.component.html */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.html"),
            styles: [__webpack_require__(/*! ./record-query.component.scss */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/record-query/record-query.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_4__["CommonHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], RecordQueryComponent);
    return RecordQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/bean/select-post.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/bean/select-post.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SelectPostBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPostBean", function() { return SelectPostBean; });
var SelectPostBean = /** @class */ (function () {
    function SelectPostBean() {
    }
    return SelectPostBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6 \">\r\n\t\t\t<div class=\"ui-g-6 title\">\r\n\t\t\t\t<label>岗位编号：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"selectPostBean.postId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6 \">\r\n\t\t\t<div class=\"ui-g-6 title\">\r\n\t\t\t\t<label>岗位名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"selectPostBean.postName\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn-swith\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)='query()'></button>\r\n\t\t<button pButton type=\"button\" label=\"重置\" (click)='newQuery()'></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\" (onRowSelect)=\"onRowSelect($event)\"  selectionMode=\"single\"\r\n\t\t[(selection)]=\"selectedCar2\" dataKey=\"postName\">\r\n\t\t\t<!-- <p-column header=\"选择\" field=\"\" [style]=\"{'width':'100px'}\">\r\n\t\t\t\t<ng-template let-item=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\r\n\t\t\t\t\t<p-radioButton name=\"{{ri}}\" [value]='item.postId' [(ngModel)]=\"selectedCities\" (onClick)=\"checkClick2(item,$event)\"></p-radioButton>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column> -->\r\n\t\t\t<p-column field=\"postId\" header=\"岗位编号\"></p-column>\r\n\t\t\t<p-column field=\"postName\" header=\"岗位名称\"></p-column>\r\n\t\t\t<p-column field=\"description\" header=\"岗位描述\"></p-column>\r\n\t\t</p-dataTable>\r\n\t\t<p-paginator [first]=\"first\" rows=\"{{selectPostBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<!-- <div class=\"ui-g-12 btn-swith\">\r\n\t\t<button pButton type=\"button\" label=\"确定\"  (click)='reClick()'></button>\r\n\t</div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-swith {\n  text-align: center; }\n\n.title {\n  text-align: right; }\n\n.temp-name {\n  display: inline-block;\n  width: 71px;\n  height: 28px;\n  text-align: center;\n  line-height: 28px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #f8a900;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.temp-name:hover {\n  background-color: #e39b00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9vcGVyYXRpb25DaGFuZ2VSZWNvcmQvc2VsZWN0LXBvc3QxL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXG9wZXJhdGlvbkNoYW5nZVJlY29yZFxcc2VsZWN0LXBvc3QxXFxzZWxlY3QtcG9zdDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL29wZXJhdGlvbkNoYW5nZVJlY29yZC9zZWxlY3QtcG9zdDEvc2VsZWN0LXBvc3QxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zd2l0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRlbXAtbmFtZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhOTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGVtcC1uYW1lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzOWIwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SelectPost1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPost1", function() { return SelectPost1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/select-post.bean */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/bean/select-post.bean.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//岗位





/**
 * 岗位选择
 */
var SelectPost1 = /** @class */ (function () {
    function SelectPost1(commfunc, cusOperationHttpService) {
        this.commfunc = commfunc;
        this.cusOperationHttpService = cusOperationHttpService;
        this.fileDisplay = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.selectedCities = [];
        this.checkListPro = [];
        this.selectPostBean = new _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__["SelectPostBean"]();
        //提示信息
        this.msgs = [];
        this.first = 0; //分页控制
        this.postList = [];
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
    }
    SelectPost1.prototype.ngOnInit = function () {
        this.marketingCampaignId = this.inValue,
            this.selectPostBean.pageNum = 1;
        this.selectPostBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    SelectPost1.prototype.toDetail = function (item) {
        this.fileDisplay = true;
    };
    //单选值
    SelectPost1.prototype.checkClick2 = function (item, event) {
        this.checkListPro = [item];
    };
    //查询
    SelectPost1.prototype.query = function () {
        this.selectPostBean.pageNum = 1;
        this.selectPostBean.pageSize = 10;
        this.first = 0;
        this.queryClick();
    };
    SelectPost1.prototype.queryClick = function () {
        var _this = this;
        this.cusOperationHttpService.queryPostById(this.selectPostBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.postInfoList;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //重置
    SelectPost1.prototype.newQuery = function () {
        this.selectPostBean = new _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__["SelectPostBean"]();
        this.querySecleReset();
    };
    //页码重置
    SelectPost1.prototype.querySecleReset = function () {
        this.selectPostBean.pageSize = 10;
        this.selectPostBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //分页
    SelectPost1.prototype.paginate = function (event) {
        //每页显示的条数
        this.selectPostBean.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.selectPostBean.pageNum = currentPage;
        this.first = event.page * this.selectPostBean.pageSize;
        //调用查询的方法
        this.queryClick();
    };
    SelectPost1.prototype.onRowSelect = function (event) {
        this.postList = [];
        this.postList.push(event.data);
        this.outValue.emit(this.postList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectPost1.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectPost1.prototype, "outValue", void 0);
    SelectPost1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-post1',
            template: __webpack_require__(/*! ./select-post1.component.html */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.html"),
            styles: [__webpack_require__(/*! ./select-post1.component.scss */ "./src/app/pages/tzb/common/base-manage/operationChangeRecord/select-post1/select-post1.component.scss")],
            providers: [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]],
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]])
    ], SelectPost1);
    return SelectPost1;
}());



/***/ })

}]);
//# sourceMappingURL=operationChangeRecord-operationChangeRecord-module.js.map