(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-manage-team-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/bean/tean-manage.bean.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/bean/tean-manage.bean.ts ***!
  \***********************************************************************************/
/*! exports provided: TeamManageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManageBean", function() { return TeamManageBean; });
var TeamManageBean = /** @class */ (function () {
    function TeamManageBean() {
        this.orgType = '3'; //机构类型 默认团队
    }
    return TeamManageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构编号：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" class=\"requireInp\" name=\"orgId\" formControlName=\"orgId\" size=\"20\" pInputText [(ngModel)]=\"teamManageBean.orgId\">\r\n                </div>\r\n            </div>\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgId'].valid&&userform.controls['orgId'].dirty\">\r\n                <p [hidden]=\"!userform.hasError('required','orgId')\"> 机构编号不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','orgId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构名称：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" class=\"requireInp\" name=\"orgName\" formControlName=\"orgName\" size=\"20\" pInputText [(ngModel)]=\"teamManageBean.orgName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty\">\r\n                <p [hidden]=\"!userform.hasError('required','orgName')\"> 机构名称不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','orgName')\"> 机构名称必须为1-20位中文且不能有空格!</p>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构类型：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown name=\"orgType\" formControlName=\"orgType\" size=\"20\" [options]=\"orgType\" [(ngModel)]=\"teamManageBean.orgType\" disabled>\r\n                    </p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 \" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgType'].valid&&userform.controls['orgType'].dirty\">\r\n                请选择机构类型!\r\n            </div>\r\n\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构状态：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"orgStatus\" [(ngModel)]=\"teamManageBean.orgStatus\" name=\"orgStatus\" formControlName=\"orgStatus\" size=\"20\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgStatus'].valid&&userform.controls['orgStatus'].dirty\">\r\n                请选择机构状态!\r\n            </div>\r\n\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>上级机构编号：</div>\r\n                <div class=\"ui-g-8\" id=\"orgAddId\">\r\n                    <p-dropdown [options]=\"list1\" (keyup)=\"inpquery($event)\" class=\"textAlignLeft\" [(ngModel)]=\"superiorManageOrg\" placeholder=\"请选择\" filter=\"filter\" [lazy]='true'\r\n                         name=\"superiorManageOrg\" formControlName=\"superiorManageOrg\" (onChange)=\"doChose($event)\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 \" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['superiorManageOrg'].valid&&userform.controls['superiorManageOrg'].dirty\">\r\n                请选择上级机构编号!\r\n            </div>\r\n\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>上级机构名称：</div>\r\n                <div class=\"ui-g-8\" id=\"orgAddName\">\r\n                    <p-dropdown [style]=\"{'width':'20%'}\" [options]=\"list\" (keyup)=\"inpquery($event)\" class=\"textAlignLeft\" [(ngModel)]=\"superiorManageName\" placeholder=\"请选择\"\r\n                        filter=\"filter\" [lazy]='true'  name=\"superiorManageName\" formControlName=\"superiorManageName\"\r\n                        (onChange)=\"doChose1($event)\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['superiorManageName'].valid&&userform.controls['superiorManageName'].dirty\">\r\n                请选择上级机构名称!\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"closeBtn()\"></button>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".requireInp {\n  width: 45%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host /deep/ .ui-dropdown {\n  width: 45% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS90ZWFtLW1hbmFnZS90ZWFtLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFx0ZWFtLW1hbmFnZVxcdGVhbS1hZGRcXHRlYW0tYWRkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3RlYW0tbWFuYWdlL3RlYW0tYWRkL3RlYW0tYWRkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZUlucHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.ts ***!
  \*******************************************************************************/
/*! exports provided: TeamAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAdd", function() { return TeamAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/tean-manage.bean */ "./src/app/pages/tzb/common/base-manage/team-manage/bean/tean-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { OrgStatus, OrgTypes } from '../../../constant/common.codeValue';

var TeamAdd = /** @class */ (function () {
    function TeamAdd(commonHttpService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //实体
        //提示信息
        this.msgs = [];
        //  add_title: string = '产品线管理新增';
        //机构状态下拉引入
        this.orgStatus = [];
        this.orgType = [];
        this.teamManageBean = new _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_2__["TeamManageBean"]();
        this.inpFlag = true;
        this.codeValues(); //调用方法，获取全部码值
        this.orgStatus = this.code['OrgStatus'];
        this.orgType = this.code['OrgTypes'];
    }
    TeamAdd.prototype.ngOnInit = function () {
        this.teamManageBean.operatingLevel = '0';
        this.userform = this.fb.group({
            'orgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'orgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'orgType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            // 'operatingLevel': new FormControl('', Validators.required),
            'orgStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'superiorManageOrg': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'superiorManageName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        // this.queryOrgId()
        this.orgquery('', '');
    };
    //码值
    TeamAdd.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TeamAdd.prototype.inpquery = function (event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgAddId = document.getElementById('orgAddId').getElementsByTagName('input')[1].value;
                var orgAddName = document.getElementById('orgAddName').getElementsByTagName('input')[1].value;
                _this.orgquery(orgAddId, orgAddName);
                // this.orgquery($event.path[0].value)
            }, 1000);
        }
    };
    //机构模糊查询
    TeamAdd.prototype.orgquery = function (orgId, orgName) {
        var _this = this;
        var param = {
            orgId: orgId,
            orgName: orgName,
            pageSize: 30,
            OrgStatus: '0'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                // this.teamManageBean.rowNum = data.total
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    // 保存 增加确定
    TeamAdd.prototype.preserveClick = function () {
        //校验的
        var _this = this;
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //提交服务
        this.teamManageBean.operatingLevel = 'TEAM';
        this.teamManageBean.superiorManageOrg = this.superiorManageName;
        this.teamManageBean.superiorManageName = this.superiorManageOrg;
        this.commonHttpService.createOrg(this.teamManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                // this.postsManageBean = new PostsManageBean();
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    TeamAdd.prototype.closeBtn = function () {
        this.outValue.emit(false);
    };
    //onchange事件
    TeamAdd.prototype.doChose = function (event) {
        this.superiorManageName = this.returnValue(event.value, 'label', 'value');
        // this.list.value = this.list1.label
    };
    TeamAdd.prototype.doChose1 = function (event) {
        this.superiorManageOrg = this.returnValue(event.value, 'value', 'label');
    };
    /**
     * 转换值
     * @param param  值
     * @param colum  字段
     */
    TeamAdd.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TeamAdd.prototype, "outValue", void 0);
    TeamAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'team-add',
            template: __webpack_require__(/*! ./team-add.html */ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.html"),
            styles: [__webpack_require__(/*! ./team-add.scss */ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], TeamAdd);
    return TeamAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-manage.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\" [formGroup]=\"userform\">\r\n            <label class=\"inputLayout\">上级机构编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText formControlName=\"superiorManageOrg\" name=\"superiorManageOrg\" [(ngModel)]=\"teamManageBean.superiorManageOrg\">\r\n            <div class=\"reuqiredLabel\" style=\"color:red;padding-left:56%;\" *ngIf=\"!userform.controls['superiorManageOrg'].valid&&userform.controls['superiorManageOrg'].dirty\">\r\n                <p *ngIf=\"userform.hasError('specialSymbol','superiorManageOrg')\">上级编号不支持特殊字符</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\" [formGroup]=\"userform\">\r\n            <label style=\"width:125px;display:inline-block;text-align:right\">上级机构名称：</label>\r\n            <input id=\"input\" type=\"text\" formControlName=\"superiorManageOrgName\" name=\"superiorManageOrgName\" pInputText [(ngModel)]=\"teamManageBean.superiorManageOrgName\">\r\n            <div class=\"reuqiredLabel\" style=\"color:red;padding-left:12%;\" *ngIf=\"!userform.controls['superiorManageOrgName'].valid&&userform.controls['superiorManageOrgName'].dirty\">\r\n                <p *ngIf=\"userform.hasError('specialSymbol','superiorManageOrgName')\">上级机构名称不支持特殊字符</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\" [formGroup]=\"userform\">\r\n            <label class=\"inputLayout\">机构编号：</label>\r\n            <input id=\"input\" type=\"text\" formControlName=\"orgId\" name=\"orgId\" pInputText [(ngModel)]=\"teamManageBean.orgId\">\r\n            <div class=\"reuqiredLabel\" style=\"color:red;padding-left:56%;\" *ngIf=\"!userform.controls['orgId'].valid&&userform.controls['orgId'].dirty\">\r\n                <p *ngIf=\"userform.hasError('specialSymbol','orgId')\">机构编号不支持特殊字符</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\" [formGroup]=\"userform\">\r\n            <label style=\"width:125px;display:inline-block;text-align:right\">机构名称：</label>\r\n            <input id=\"input\" type=\"text\" formControlName=\"orgName\" name=\"orgName\" pInputText [(ngModel)]=\"teamManageBean.orgName\">\r\n            <div class=\"reuqiredLabel\" style=\"color:red;padding-left:12%;\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty\">\r\n                <p *ngIf=\"userform.hasError('specialSymbol','orgName')\">机构名称不支持特殊字符</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">机构状态：</label>\r\n            <p-dropdown [options]=\"orgStatus\" [style]=\"{'width':'10%'}\" [(ngModel)]=\"teamManageBean.orgStatus\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n    <span class=\"icoColor\" style=\"margin-left:92%;\" (click)=\"add()\" *ngIf=\"permissionCheck('SID01056_P0129')\">新增</span>\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"orgId\" header=\"机构编号\"></p-column>\r\n            <p-column field=\"orgName\" header=\"机构名称\"></p-column>\r\n            <p-column field=\"superiorManageOrg\" header=\"上级机构编号\"></p-column>\r\n            <p-column field=\"superiorManageOrgName\" header=\"上级机构名称\"></p-column>\r\n            <p-column field=\"orgType\" header=\"机构类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.orgType | codeValuePie:orgType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operatingLevel\" header=\"机构级别\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.operatingLevel | codeValuePie:operatingLevel}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"orgStatus\" header=\"机构状态\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.orgStatus | codeValuePie:orgStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"roleType\" header=\"支行类型\"></p-column> -->\r\n            <p-column field=\"legalFlag\" header=\"法人标志\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.legalFlag | codeValuePie:legalFlag}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!-- <button pButton type=\"button\" label=\"分配权限\" (click)=\"allot(item)\"></button>\r\n                    <button pButton type=\"button\" label=\"复制\" (click)=\"copy(item)\"></button> -->\r\n                    <span class=\"tabelUpdateIco\" (click)='update(item)' *ngIf=\"permissionCheck('SID01056_P0130')\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)='delete(item)' *ngIf=\"permissionCheck('SID01056_P0131')\">删除</span>\r\n                    <!-- <button pButton type=\"button\" label=\"修改\" (click)=\"update(item)\"></button> -->\r\n                    <!-- <button id='displayButton' pButton type=\"button\" label=\"删除\" (click)=\"delete(item)\"></button> -->\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\" rows=\"{{teamManageBean.rowNum}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <team-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></team-add>\r\n        <team-update *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></team-update>\r\n        <select-product-component *ngIf=\"showModel=='5'\"></select-product-component>\r\n        <!-- <queryUser *ngIf=\"showModel=='6'\" (outValue)=\"treeCall($event)\"></queryUser> -->\r\n    </div>\r\n</p-dialog>\r\n<!-- <button (click)=\"product()\">产品</button> -->\r\n<!-- <button (click)=\"orgTree()\">机构树</button><input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\"> -->\r\n<!-- 删除-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-manage.module.ts ***!
  \********************************************************************************/
/*! exports provided: TeamManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManageModule", function() { return TeamManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _team_manage_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-manage.routing */ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.routing.ts");
/* harmony import */ var _team_manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-manage */ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.ts");
/* harmony import */ var _team_add_team_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-add/team-add */ "./src/app/pages/tzb/common/base-manage/team-manage/team-add/team-add.ts");
/* harmony import */ var _team_update_team_update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-update/team-update */ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TeamManageModule = /** @class */ (function () {
    function TeamManageModule() {
    }
    TeamManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _team_manage_routing__WEBPACK_IMPORTED_MODULE_4__["TeamManageRouting"]
            ],
            declarations: [
                _team_manage__WEBPACK_IMPORTED_MODULE_5__["TeamManage"],
                _team_add_team_add__WEBPACK_IMPORTED_MODULE_6__["TeamAdd"],
                _team_update_team_update__WEBPACK_IMPORTED_MODULE_7__["TeamUpdate"],
            ],
            providers: []
        })
    ], TeamManageModule);
    return TeamManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-manage.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: routes, TeamManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManageRouting", function() { return TeamManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-manage */ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.ts");


var routes = [
    { path: '', component: _team_manage__WEBPACK_IMPORTED_MODULE_1__["TeamManage"] }
];
var TeamManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-manage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\ninput {\n  width: 25% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 25% !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS90ZWFtLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFx0ZWFtLW1hbmFnZVxcdGVhbS1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvdGVhbS1tYW5hZ2UvdGVhbS1tYW5hZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiB9XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-manage.ts ***!
  \*************************************************************************/
/*! exports provided: TeamManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManage", function() { return TeamManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/tean-manage.bean */ "./src/app/pages/tzb/common/base-manage/team-manage/bean/tean-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { OrgTypes, OrgStatus, OperatingLevel, LegalFlag } from '../../constant/common.codeValue';




var TeamManage = /** @class */ (function () {
    function TeamManage(commonHttpService, confirmationService, commfunc, fb) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        // @Input() inValue: any;
        this.precredit = ' 营销团队管理';
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.teamManageBean = new _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_1__["TeamManageBean"]();
        //每页多少条
        this.rowNum = '10';
        //提示信息
        this.msgs = [];
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        // orgType: any[] = OrgTypes;
        this.orgStatus = [];
        this.first = 0;
        this.codeValues(); //调用方法，获取全部码值
        this.orgStatus = this.code['OrgStatus'];
    }
    TeamManage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'superiorManageOrg': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'superiorManageOrgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'orgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'orgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]]))
        });
        this.teamManageBean.rowNum = '10';
        this.teamManageBean.startRow = '1';
        this.teamManageBean.operatingLevel = 'team';
        this.teamManageBean.orgStatus = '0';
        this.query();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    TeamManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TeamManage.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //查询
    TeamManage.prototype.query = function () {
        var _this = this;
        //校验
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //校验是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.teamManageBean.flag = '0'; //后台服务需要模糊查询标识
        this.teamManageBean.operatingLevel = 'TEAM'; //后台服务需要机构级别默认
        // this.teamManageBean.orgStatus='0';//机构状态默认
        this.commonHttpService.queryOrgByCombConditions(this.teamManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableData = data.orgInfoList;
                _this.total = data.rowCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.code });
                _this.teamManageBean.startRow = '1';
                if (data.orgInfoList.orgStatus == '1') {
                    var stamp = document.getElementById('displayButton');
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    TeamManage.prototype.queryClick = function () {
        var _this = this;
        this.first = 0;
        this.teamManageBean.pageNum = '1';
        this.teamManageBean.flag = '0'; //后台服务需要模糊查询标识
        this.teamManageBean.operatingLevel = 'TEAM'; //后台服务需要机构级别默认
        // this.teamManageBean.orgStatus='0';//机构状态默认
        this.commonHttpService.queryOrgByCombConditions(this.teamManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableData = data.orgInfoList;
                _this.total = data.rowCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.code });
                _this.teamManageBean.startRow = '1';
                if (data.orgInfoList.orgStatus == '1') {
                    var stamp = document.getElementById('displayButton');
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    TeamManage.prototype.paginate = function (event) {
        //每页显示的条数
        this.teamManageBean.rowNum = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.teamManageBean.startRow = currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
        // this.teamManageBean.startRow = '1';
    };
    //修改
    TeamManage.prototype.update = function (item) {
        this.headerTitle = '修改营销团队';
        this.display = true;
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改的回调
    TeamManage.prototype.updateCall = function (param) {
        this.display = param;
        // this.teamManageBean = new TeamManageBean();
        // this.teamManageBean.rowNum = "10";
        // this.teamManageBean.startRow = "1";
        this.teamManageBean.orgStatus = '0';
        this.query();
    };
    //删除
    TeamManage.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { orgId: item.orgId, orgStatus: '1' };
                _this.commonHttpService.maintainOrgStatus(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //添加
    TeamManage.prototype.add = function () {
        this.headerTitle = '创建营销团队';
        this.display = true;
        this.showModel = 1;
    };
    //添加的回调函数
    TeamManage.prototype.addCall = function (param) {
        this.display = param;
        // this.teamManageBean.startRow = '1';
        this.teamManageBean.orgStatus = '0';
        this.query();
    };
    // 重置
    TeamManage.prototype.reset = function () {
        this.teamManageBean.orgId = '';
        this.teamManageBean.orgName = '';
        this.teamManageBean.superiorManageOrg = '';
        this.teamManageBean.superiorManageOrgName = '';
        this.teamManageBean.orgStatus = '';
    };
    //返回的值
    TeamManage.prototype.outValue = function (param) {
        this.display = param.display;
    };
    TeamManage.prototype.product = function () {
        this.display = true;
        this.showModel = '5';
    };
    TeamManage.prototype.orgTree = function () {
        this.headerTitle = '机构树';
        this.display = true;
        this.showModel = '6';
    };
    TeamManage.prototype.treeCall = function (param) {
        this.display = false;
        this.treeOrgName = param.orgName;
    };
    TeamManage.prototype.aa = function () {
    };
    //按钮权限
    TeamManage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    TeamManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'team-manage',
            styles: [__webpack_require__(/*! ./team-manage.scss */ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.scss")],
            template: __webpack_require__(/*! ./team-manage.html */ "./src/app/pages/tzb/common/base-manage/team-manage/team-manage.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], TeamManage);
    return TeamManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\">机构编号：</div>\r\n                <div class=\"ui-g-8\"> <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"teamManageBean.orgId\" disabled name=\"orgId\" formControlName=\"orgId\"></div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\">机构名称：</div>\r\n                <div class=\"ui-g-8\"> <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"teamManageBean.orgName\" name=\"orgName\" formControlName=\"orgName\"></div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty\">\r\n                <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n                <p [hidden]=\"!userform.hasError('required','orgName')\"> 机构名称不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','orgName')\"> 机构名称必须为1-20位中文且不能有空格!</p>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构类型：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown size=\"20\" [options]=\"orgType\" [(ngModel)]=\"teamManageBean.orgType\" name=\"orgType\" formControlName=\"orgType\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgType'].valid&&userform.controls['orgType'].dirty\">\r\n                请选择机构类型!\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>机构状态：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"orgStatus\" [(ngModel)]=\"teamManageBean.orgStatus\" name=\"orgStatus\" formControlName=\"orgStatus\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['orgStatus'].valid&&userform.controls['orgStatus'].dirty\">\r\n                请选择机构状态!\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\" appValidation>上级机构编号：</div>\r\n                <div class=\"ui-g-8\" id=\"orgUptId\">\r\n                    <p-dropdown [options]=\"list1\" (keyup)=\"inpquery($event)\" class=\"textAlignLeft\" [(ngModel)]=\"superiorManageOrg\" placeholder=\"请选择\" filter=\"filter\" [lazy]='true'\r\n                         name=\"superiorManageOrg\" formControlName=\"superiorManageOrg\" (onChange)=\"doChose($event)\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['superiorManageOrg'].valid&&userform.controls['superiorManageOrg'].dirty\">\r\n                请选择上级机构编号!\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\" style=\"text-align:right\"  appValidation>上级机构名称：</div>\r\n                <div class=\"ui-g-8\" id=\"orgUptName\">\r\n                    <p-dropdown [options]=\"list\" (keyup)=\"inpquery($event)\" class=\"textAlignLeft\" [(ngModel)]=\"superiorManageName\" placeholder=\"请选择\" filter=\"filter\" [lazy]='true'\r\n                         name=\"superiorManageName\" formControlName=\"superiorManageName\" (onChange)=\"doChose1($event)\"></p-dropdown>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['superiorManageName'].valid&&userform.controls['superiorManageName'].dirty\">\r\n                    请选择上级管理机构!\r\n                </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[type=\"text\"] {\n  width: 45% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 45% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS90ZWFtLW1hbmFnZS90ZWFtLXVwZGF0ZS90ZWFtLXVwZGF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3RlYW0tbWFuYWdlL3RlYW0tdXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXHRlYW0tbWFuYWdlXFx0ZWFtLXVwZGF0ZVxcdGVhbS11cGRhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvdGVhbS1tYW5hZ2UvdGVhbS11cGRhdGUvdGVhbS11cGRhdGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlt0eXBlPVwidGV4dFwiXSB7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24ge1xuICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7IH1cblxuLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuYnRuIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAzMHB4OyB9XG4iLCJbdHlwZT1cInRleHRcIl17XHJcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.ts ***!
  \*************************************************************************************/
/*! exports provided: TeamUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamUpdate", function() { return TeamUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/tean-manage.bean */ "./src/app/pages/tzb/common/base-manage/team-manage/bean/tean-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OrgStatus, OrgTypes } from '../../../constant/common.codeValue';


var TeamUpdate = /** @class */ (function () {
    function TeamUpdate(commonHttpService, commfunc, fb) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.teamManageBean = new _bean_tean_manage_bean__WEBPACK_IMPORTED_MODULE_1__["TeamManageBean"]();
        //机构状态下拉引入
        this.orgStatus = [];
        this.orgType = [];
        this.inpFlag = true;
        this.codeValues(); //调用方法，获取全部码值
        this.orgStatus = this.code['OrgStatus'];
        this.orgType = this.code['OrgTypes'];
    }
    TeamUpdate.prototype.ngOnInit = function () {
        this.orgquery('', '');
        this.userform = this.fb.group({
            'orgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'orgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'orgType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            // 'operatingLevel': new FormControl('', Validators.required),
            'orgStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'superiorManageOrg': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'superiorManageName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    };
    TeamUpdate.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TeamUpdate.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    TeamUpdate.prototype.fuzhi = function () {
        this.teamManageBean = this.inValue;
        this.superiorManageOrg = this.inValue.superiorManageOrg;
    };
    //机构模糊查询
    TeamUpdate.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgUptId = document.getElementById('orgUptId').getElementsByTagName('input')[1].value;
                var orgUptName = document.getElementById('orgUptName').getElementsByTagName('input')[1].value;
                _this.orgquery(orgUptId, orgUptName);
                // this.orgquery($event.path[0].value)
            }, 1000);
        }
    };
    TeamUpdate.prototype.orgquery = function (orgId, orgName) {
        var _this = this;
        var param = {
            orgId: orgId,
            orgName: orgName,
            pageSize: 30,
            OrgStatus: '0'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                // this.teamManageBean.rowNum = data.total
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    TeamUpdate.prototype.queryOrgId = function () {
        var _this = this;
        var param = {
            pageSize: 30,
            pageNum: 1,
            OrgStatus: '0'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                // this.teamManageBean.rowNum = data.total
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    //onchange事件
    TeamUpdate.prototype.doChose = function (event) {
        this.superiorManageName = this.returnValue(event.value, 'label', 'value');
        // this.list.value = this.list1.label
    };
    TeamUpdate.prototype.doChose1 = function (event) {
        this.superiorManageOrg = this.returnValue(event.value, 'value', 'label');
    };
    /**
     * 转换值
     * @param param  值
     * @param colum  字段
     */
    TeamUpdate.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    //提交
    TeamUpdate.prototype.preserveClick = function () {
        //校验的
        var _this = this;
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.teamManageBean.operatingLevel = 'TEAM';
        if (this.superiorManageName) {
            this.teamManageBean.superiorManageOrg = this.superiorManageName;
        }
        else {
            this.teamManageBean.superiorManageOrg = this.superiorManageOrg;
        }
        this.commonHttpService.modifyOrg(this.teamManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //取消
    TeamUpdate.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TeamUpdate.prototype, "outValue", void 0);
    TeamUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'team-update',
            template: __webpack_require__(/*! ./team-update.html */ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.html"),
            styles: [__webpack_require__(/*! ./team-update.scss */ "./src/app/pages/tzb/common/base-manage/team-manage/team-update/team-update.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TeamUpdate);
    return TeamUpdate;
}());



/***/ })

}]);
//# sourceMappingURL=team-manage-team-manage-module.js.map