(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-examine-custom-group-examine-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"padding-bottom:20%;\">\r\n    <header-title [Info]=\"title\"></header-title>\r\n    <div class=\"ui-g-10 ui-g-offset-1\">\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3\">\r\n                <label>群编号:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.groupId\" disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-3 paddingNone\">\r\n                    <label>群类型:</label>\r\n                </div>\r\n                <div class=\"ui-g-6  customGroupViewDropdown\">\r\n                    <p-dropdown [options]=\"groupType\" [(ngModel)]=\"groupTypeCheck\" disabled=\"false\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-3 paddingNone\">\r\n                    <label>群状态:</label>\r\n                </div>\r\n                <div class=\"ui-g-6 customGroupViewDropdown\">\r\n                    <p-dropdown [options]=\"groupState\" [(ngModel)]=\"groupStateCheck\" disabled=\"false\" class=\"saveCustomCenter\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <label>审批人:</label>\r\n                <!-- 缺少审批人参数2017.11.30 -->\r\n                <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.groupId\" disabled=\"false\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3\">\r\n                <label>群名称:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.groupName\" disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <label>群地址:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.address\" disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <label>群主:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.ownerName\" disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <label for=\"\">群联系人：</label>\r\n                <input type=\"text\" [(ngModel)]=\"contactRoleName\" pInputText disabled=\"false\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3 \">\r\n                <label for=\"\">群介绍人：</label>\r\n                <input type=\"text\" [(ngModel)]=\"introducerRoleName\" pInputText disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <label>指导师傅:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"mentorRoleName\" disabled=\"false\">\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label>所属机构</label>\r\n                </div>\r\n                <div class=\"ui-g-8 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"orgNameArr\" [(ngModel)]=\"custGroupInfoBean.orgId\" [disabled]=\"true\" disabled=\"true\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 marginTop\" style=\"text-align:center;\">\r\n            <button pButton label=\"确定\" (click)=\"returnGroupView()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 保存comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginTop {\n  margin-top: 40px !important; }\n  .marginTop label {\n    width: 90px;\n    display: inline-block;\n    height: 28px;\n    line-height: 28px; }\n  .paddingNone {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLWV4YW1pbmUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGN1c3RvbS1ncm91cC1leGFtaW5lXFxjdXN0b20tZ3JvdXAtZXhhbWluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUF5QixFQUFBO0VBRDdCO0lBSVEsV0FBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFHekI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtZXhhbWluZS9jdXN0b20tZ3JvdXAtZXhhbWluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Ub3Age1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4IWltcG9ydGFudDtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDo5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbn1cclxuLnBhZGRpbmdOb25lIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomGroupExamineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupExamineComponent", function() { return CustomGroupExamineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
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







var CustomGroupExamineComponent = /** @class */ (function () {
    function CustomGroupExamineComponent(routerInfo, httpService, confirmationService, router, commfunc) {
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.commfunc = commfunc;
        // 标题
        this.title = '客户群';
        this.contactRoleName = []; //群联系人
        this.introducerRoleName = []; //群介绍人
        this.mentorRoleName = []; //指导师傅
        this.contactArr = []; //群联系人
        this.introducerArr = []; //群介绍人
        this.mentorRoleArr = []; //指导师傅
        this.groupStateCheck = '3'; //群状态
        this.groupTypeCheck = ''; //群类型
        // session
        this.orgName = '';
        this.orgIdTemp = '';
        this.orgNameArr = [];
        // 传参
        this.groupId = '';
        this.data = {};
        // bean
        this.custGroupInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupInfoBean"](); //客户群信息
        // 控件
        this.msgs = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.groupState = this.code['GroupState'];
        this.groupType = this.code['GroupTypeSave'];
    }
    CustomGroupExamineComponent.prototype.ngOnInit = function () {
        this.preSet();
        this.selectCustGroupInfo();
    };
    //码值
    CustomGroupExamineComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomGroupExamineComponent.prototype.preSet = function () {
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
        this.orgNameArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](tempArr);
        // 接收route传参
        if (this.routerInfo.snapshot.queryParams['id']) {
            this.groupId = this.routerInfo.snapshot.queryParams['id'];
        }
        if (this.routerInfo.snapshot.params['id']) {
            this.groupId = this.routerInfo.snapshot.params['id'];
        }
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId'];
        }
        this.custGroupInfoBean.groupId = this.groupId; //群号
        //审批人缺参注意-------------------------------
        //审批人缺参注意-------------------------------
    };
    CustomGroupExamineComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(this.custGroupInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupInfoBean = data;
                _this.custGroupInfoBean.contactList = data.contactList;
                _this.custGroupInfoBean.mentorList = data.mentorList;
                _this.title = _this.custGroupInfoBean.groupName + "\u5BA2\u6237\u7FA4"; //title
                _this.groupTypeCheck = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.custGroupInfoBean.groupType); //群类型绑定
                _this.groupStateCheck = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.custGroupInfoBean.groupStatus); //群状态绑定
                _this.contactArr = data.contactList; //群联系人
                _this.introducerArr = data.introducerList; //群介绍人
                _this.mentorRoleArr = data.mentorList; //指导师傅
                _this.selectFor(); //查询赋值
                _this.adminSelect(); //管理人员查询格式
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
    CustomGroupExamineComponent.prototype.adminSelect = function () {
        // 管理人员查询格式
        var contactArr = [];
        var introducerArr = [];
        var mentorRoleArr = [];
        for (var i in this.contactArr) {
            contactArr.push({
                userId: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.contactArr[i].roleId),
                userName: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.contactArr[i].roleName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.contactArr[i].groupZone),
                statusId: '2',
            });
        }
        for (var i in this.introducerArr) {
            introducerArr.push({
                userId: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.introducerArr[i].roleId),
                userName: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.introducerArr[i].roleName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.introducerArr[i].groupZone),
                statusId: '2',
            });
        }
        for (var i in this.mentorRoleArr) {
            mentorRoleArr.push({
                userId: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.mentorRoleArr[i].roleId),
                userName: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.mentorRoleArr[i].roleName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.mentorRoleArr[i].groupZone),
                statusId: '2',
            });
        }
        this.contactArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](contactArr);
        this.introducerArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](introducerArr);
        this.mentorRoleArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](mentorRoleArr);
    };
    CustomGroupExamineComponent.prototype.selectFor = function () {
        // 查询赋值
        this.contactRoleName = [];
        this.introducerRoleName = [];
        this.mentorRoleName = [];
        for (var i in this.contactArr) {
            if (this.contactArr[i].roleName) {
                this.contactRoleName.push(this.contactArr[i].roleName);
            }
        }
        this.contactRoleName = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.contactRoleName);
        for (var i in this.introducerArr) {
            if (this.introducerArr[i].roleName) {
                this.introducerRoleName.push(this.introducerArr[i].roleName);
            }
        }
        this.introducerRoleName = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.introducerRoleName);
        for (var i in this.mentorRoleArr) {
            if (this.mentorRoleArr[i].roleName) {
                this.mentorRoleName.push(this.mentorRoleArr[i].roleName);
            }
        }
        this.mentorRoleName = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.mentorRoleName);
    };
    CustomGroupExamineComponent.prototype.returnGroupView = function () {
        var _this = this;
        // 返回我的客户群页面
        // let param = {groupId:this.groupId,applyType:'1',taskCategoryId:''};
        // this.data = JSON.stringify(param)
        this.data = "{\"groupId\":" + this.groupId + ",\"applyType\":\"1\",\"taskCategoryId\":\"\"}";
        this.confirmationService.confirm({
            message: '跳转到审批',
            accept: function () {
                _this.router.navigate(['/pages/tzb/workflow/custom-workflow/custom-group', { scheduleId: '', taskCategoryId: '', data: _this.data }]);
            }
        });
    };
    CustomGroupExamineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-group-examine',
            template: __webpack_require__(/*! ./custom-group-examine.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.html"),
            styles: [__webpack_require__(/*! ./custom-group-examine.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]])
    ], CustomGroupExamineComponent);
    return CustomGroupExamineComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CustomGroupExamineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupExamineModule", function() { return CustomGroupExamineModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_group_examine_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-group-examine.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.routing.ts");
/* harmony import */ var _custom_group_examine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-group-examine.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//客户群组
var CustomGroupExamineModule = /** @class */ (function () {
    function CustomGroupExamineModule() {
    }
    CustomGroupExamineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _custom_group_examine_routing__WEBPACK_IMPORTED_MODULE_4__["CustomGroupExamineRouting"]
            ],
            declarations: [
                _custom_group_examine_component__WEBPACK_IMPORTED_MODULE_5__["CustomGroupExamineComponent"]
            ],
            exports: [],
            providers: []
        })
    ], CustomGroupExamineModule);
    return CustomGroupExamineModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.routing.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.routing.ts ***!
  \****************************************************************************************************/
/*! exports provided: routes, CustomGroupExamineRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupExamineRouting", function() { return CustomGroupExamineRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_group_examine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-group-examine.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-examine/custom-group-examine.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _custom_group_examine_component__WEBPACK_IMPORTED_MODULE_1__["CustomGroupExamineComponent"] //创建
    }
];
var CustomGroupExamineRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-group-examine-custom-group-examine-module.js.map