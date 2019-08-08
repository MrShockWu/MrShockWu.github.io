(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-manage-posts-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>岗位编号：</label>\r\n    <input id=\"input\" type=\"text\" style=\"width:54%\" pInputText [(ngModel)]=\"postsManageBean.postId\" formControlName=\"postId\"\r\n        name=\"postId\">\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['postId'].valid&&userform.controls['postId'].dirty\">\r\n        <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n        <p [hidden]=\"!userform.hasError('required','postId')\"> 岗位编号不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','postId')\"> 请输入1位至20位大写或小写字母或数字或下划线!</p>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>岗位名称：</label>\r\n    <input id=\"input\" type=\"text\" style=\"width:54%\" pInputText [(ngModel)]=\"postsManageBean.postName\" formControlName=\"postName\"\r\n        name=\"postName\">\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['postName'].valid&&userform.controls['postName'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','postName')\"> 岗位名称不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','postName')\"> 岗位名称必须为1-20位中文且不能有空格！</p>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>岗位描述：</label>\r\n    <input id=\"input\" type=\"textare\" size=\"60\" pInputTextarea style=\"height:60px;width:54%;\" [(ngModel)]=\"postsManageBean.description\"\r\n        formControlName=\"description\" name=\"description\">\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','description')\"> 岗位描述不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','description')\"> 岗位描述可输入1-250位，可以为中英文和标点</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 extral\">\r\n    <label class=\"\" style=\"text-align:right;\" appValidation>扩展数据：</label>\r\n    <div class=\"\">\r\n        <div style='display:block' *ngFor=\"let item of extParam1\">\r\n            键：\r\n            <input type=\"text\" pInputText [(ngModel)]=\"item.key\"> 值：\r\n            <input type=\"text\" pInputText [(ngModel)]=\"item.value\">\r\n            <label class=\"tabelRemoveIco\" (click)=\"extParamRemove(item)\" style=\"width:20px;height:20px;\">减</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n        <label class=\"customGroupaddBack\" (click)=\"extParamAdd()\" style=\"width:20px;height:20px;\">加</label>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>管理权限：</label>\r\n    <p-dropdown [options]=\"managePermission\" [(ngModel)]=\"postsManageBean.managePermission\" formControlName=\"managePermission\"\r\n        name=\"managePermission\"></p-dropdown>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['managePermission'].valid&&userform.controls['managePermission'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','managePermission')\"> 管理权限不能为空！</p>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" id=\"orgName\" [formGroup]=\"userform\">\r\n    <label appValidation>所属岗位级别：</label>\r\n    <p-dropdown [options]=\"manageLevels\" [(ngModel)]=\"postsManageBean.manageLevel\" placeholder=\"请选择\" filter=\"filter\" (keyup)=\"inpquery($event)\"\r\n        formControlName=\"manageLevel\" name=\"manageLevel\"></p-dropdown>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['manageLevel'].valid&&userform.controls['manageLevel'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','manageLevel')\"> 所属岗位级别不能为空！</p>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12\" style=\"text-align:center;\" >\r\n    <label appValidation>管理级别：</label>  \r\n    <p-dropdown [options]=\"manageLevel\"  [(ngModel)]=\"postsManageBean.manageLevel\"></p-dropdown>\r\n</div> -->\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:right\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n        <button pButton type=\"button\" label=\"取消\" (click)='cancel()'></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form input, .form textarea {\n  width: 38% !important; }\n\n.form label {\n  display: inline-block;\n  width: 30%;\n  text-align: right; }\n\n.extral div {\n  display: inline-block; }\n\n.extral input {\n  width: 34%; }\n\n.extral label {\n  display: inline-block;\n  width: 26%;\n  text-align: right; }\n\n:host/deep/ .ui-dropdown {\n  width: 38% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0cy1tYW5hZ2UvcG9zdHMtYWRkLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3N0cy1tYW5hZ2VcXHBvc3RzLWFkZC1tYW5hZ2VcXHBvc3RzLWFkZC1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQixFQUFBOztBQUY3QjtFQUtRLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3pCO0VBRVEscUJBQXFCLEVBQUE7O0FBRjdCO0VBS1EsVUFDSixFQUFBOztBQU5KO0VBUVEscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdHMtbWFuYWdlL3Bvc3RzLWFkZC1tYW5hZ2UvcG9zdHMtYWRkLW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm17XHJcbiAgICBpbnB1dCx0ZXh0YXJlYXtcclxuICAgICAgICB3aWR0aDogMzglICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG4uZXh0cmFse1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAzNCVcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjYlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiAzOCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.ts ***!
  \************************************************************************************************/
/*! exports provided: PostsAddManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsAddManage", function() { return PostsAddManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/posts-manage.bean */ "./src/app/pages/tzb/common/base-manage/posts-manage/bean/posts-manage.bean.ts");
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




// import { ManagePermission, ManageLevel } from '../../../constant/common.codeValue';

var PostsAddManage = /** @class */ (function () {
    function PostsAddManage(commonHttpService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        // manageLevel: string = '';
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //管理权限
        this.managePermission = [];
        this.inpFlag = true; //模糊查询
        //提示信息
        this.msgs = [];
        // orgId: any;
        this.postsManageBean = new _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_2__["PostsManageBean"]();
        this.extParam1 = [];
        this.kvflag = true;
        this.codeValues(); //调用方法，获取全部码值
        this.managePermission = this.code['ManagePermission'];
        this.manageLevels = this.code['manageLevels'];
    }
    PostsAddManage.prototype.ngOnInit = function () {
        this.extParam1 = [
            { 'key': '', 'value': '' }
        ];
        this.userform = this.fb.group({
            'postName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'postId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\u4E00-\u9FA5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,250}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'managePermission': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'manageLevel': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.orgquery('');
    };
    //码值
    PostsAddManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //增加扩展数据
    PostsAddManage.prototype.extParamAdd = function () {
        this.extParam1.push({ 'key': '', 'value': '' });
    };
    //扩展数据删除
    PostsAddManage.prototype.extParamRemove = function (item) {
        if (this.extParam1.length > 1) {
            this.extParam1.splice(this.extParam1.indexOf(item), 1);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据不能为空' });
        }
    };
    //扩展数据校验
    PostsAddManage.prototype.preConfirm = function (data) {
        for (var i in data) {
            if (data[i].key == "" || data[i].value == "") {
                return true;
            }
        }
    };
    // 保存
    PostsAddManage.prototype.preserveClick = function () {
        var _this = this;
        //扩展数据为空时提示，禁止提交
        if (this.preConfirm(this.extParam1)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据不能为空' });
            return;
        }
        this.postsManageBean.extParam = this.commfunc.transformExtParamStr(this.extParam1);
        if (!(/^[\w\,\|]*$/.test(this.postsManageBean.extParam))) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据只能为字母、数字、下划线' });
            return;
        }
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
        //提交服务
        this.commonHttpService.createPost(this.postsManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
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
    //取消
    PostsAddManage.prototype.cancel = function () {
        this.outValue.emit(false);
        // this.postsManageBean = new PostsManageBean();
    };
    // //机构模糊查询
    PostsAddManage.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgName = document.getElementById('orgName').getElementsByTagName('input')[1].value;
                _this.orgquery(orgName);
            }, 1000);
        }
    };
    PostsAddManage.prototype.orgquery = function (orgName) {
        var _this = this;
        var param = {
            orgId: '',
            orgName: orgName,
            pageSize: '30'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PostsAddManage.prototype, "outValue", void 0);
    PostsAddManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-add-manage',
            styles: [__webpack_require__(/*! ./posts-add-manage.scss */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.scss")],
            template: __webpack_require__(/*! ./posts-add-manage.html */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.html"),
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], PostsAddManage);
    return PostsAddManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\" style=\"text-align:center;\">\r\n    <label>导入文件：</label>\r\n    <input id=\"input\" type=\"text\" size=\"60\" pInputText>\r\n    <button pButton type=\"button\" label=\"导入\"></button>\r\n</div>\r\n<hr style=\"border:1px solid #888;\">\r\n\r\n<!-- 表格 -->\r\n<div class=\"ui-g-12\">\r\n    <p-dataTable [value]=\"list\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"vin\" header=\"导入文件名\" [style]=\"{'width':'160px'}\"></p-column>\r\n        <p-column field=\"year\" header=\"导入成功条数\" [style]=\"{'width':'160px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"导入失败条数\" [style]=\"{'width':'160px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"导入时间\" [style]=\"{'width':'160px'}\"></p-column>\r\n        <p-column header=\"操作\" [style]=\"{'width':'160px'}\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <button pButton type=\"button\" label=\"下载导入结果文件\"></button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n<!-- 提示信息 -->\r\n<!-- <p-growl [(value)]=\"msgs\"></p-growl> -->"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.ts ***!
  \**************************************************************************************************/
/*! exports provided: PostsIntoManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsIntoManage", function() { return PostsIntoManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsIntoManage = /** @class */ (function () {
    function PostsIntoManage() {
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
    }
    PostsIntoManage.prototype.ngOnInit = function () {
        //列表
        this.list = [
            {
                vin: 'excel_20170925',
                year: '90',
                brand: '10',
                color: '2017-09-25'
            }
        ];
    };
    PostsIntoManage.prototype.treeClick = function (param) {
    };
    PostsIntoManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-into-manage',
            template: __webpack_require__(/*! ./posts-into-manage.html */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.html")
        }),
        __metadata("design:paramtypes", [])
    ], PostsIntoManage);
    return PostsIntoManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <p class=\"postIdNameP\">\r\n        <span *ngIf=\"postId\" class=\"postIdSpan\">岗位编号：{{postId}}</span>\r\n        <span *ngIf=\"postName\">岗位名称：{{postName}}</span>\r\n    </p>\r\n</div>\r\n<!-- 左右数据筛选 -->\r\n<p-pickList [source]=\"power\" [target]=\"selectPower\" [responsive]=\"true\" [showSourceControls]=\"false\" [showTargetControls]=\"false\"\r\nsourceHeader=\"显示的数据\" targetHeader=\"选中的数据\" sourceFilterPlaceholder=\"根据名字模糊查询\" targetFilterPlaceholder=\"根据名字模糊查询\" [sourceStyle]=\"{'width':'420px','height':'400px','overflow':'scroll'}\"\r\n[targetStyle]=\"{'width':'420px','height':'400px','overflow':'scroll'}\" filterBy=\"label\" [metaKeySelection]=\"false\">\r\n<ng-template let-col pTemplate=\"item\">\r\n    <div style=\"width:100%;text-align:center;\" class=\"ui-helper-clearfix\">\r\n         <li>{{col.label}}</li>\r\n    </div>\r\n</ng-template>\r\n</p-pickList>\r\n\r\n<div class='ui-g'>\r\n    <div class=\"ui-g-12 ui-md-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)='cancel()'></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/\n.ui-picklist .ui-picklist-filter-container .ui-picklist-filter {\n  text-indent: 2.1em;\n  width: 100%; }\n\n.ui-g-12 {\n  text-align: right; }\n\n.ui-g-12 .postIdNameP {\n    color: #0094d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0cy1tYW5hZ2UvcG9zdHMtbWFuYWdlLWFsbG90LXJvbGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccG9zdHMtbWFuYWdlXFxwb3N0cy1tYW5hZ2UtYWxsb3Qtcm9sZVxccG9zdHMtbWFuYWdlLWFsbG90LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUdRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdHMtbWFuYWdlL3Bvc3RzLW1hbmFnZS1hbGxvdC1yb2xlL3Bvc3RzLW1hbmFnZS1hbGxvdC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gXHJcbi51aS1waWNrbGlzdCAudWktcGlja2xpc3QtZmlsdGVyLWNvbnRhaW5lciAudWktcGlja2xpc3QtZmlsdGVyIHtcclxuICAgIHRleHQtaW5kZW50OiAyLjFlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udWktZy0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5wb3N0SWROYW1lUCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0ZDI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PostsManageAllotRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManageAllotRoleComponent", function() { return PostsManageAllotRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/posts-manage.bean */ "./src/app/pages/tzb/common/base-manage/posts-manage/bean/posts-manage.bean.ts");
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





var PostsManageAllotRoleComponent = /** @class */ (function () {
    function PostsManageAllotRoleComponent(commonHttpService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //被选中的列表集合
        this.selectedList = [];
        //接受父页面传过来的值
        this.postId = ''; //角色编号
        this.postName = ''; //角色名称
        this.postsManageBean = new _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_2__["PostsManageBean"]();
        //右边接受的参数
        this.selectPower = [];
        //接受所有分配权限的值
        this.power = [];
    }
    PostsManageAllotRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = {
            pageSize: '999999',
            pageNum: '1'
        };
        this.commonHttpService.queryRoleListInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.power = _this.commfunc.listToLabelvalue(data.roleListInfo, "roleName", "roleId");
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
    PostsManageAllotRoleComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //接受父页面传过来的值
        this.postId = this.inValue.postId;
        this.postName = this.inValue.postName;
        //查询岗位角色关系
        var param = { postId: this.postId };
        this.commonHttpService.queryPostRoleRelation(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.roleList) {
                    _this.selectPower = _this.commfunc.listToLabelvalue(data.roleList, 'groupName', 'groupId');
                }
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
        //删除左边数据里包含的右边数据
        setTimeout(function () {
            if (_this.power) {
                _this.selectPower.forEach(function (item) {
                    _this.power.forEach(function (items, i) {
                        if (items.value == item.value) {
                            _this.power.splice(i, 1);
                        }
                    });
                });
            }
        }, 500);
    };
    // 转换成list
    PostsManageAllotRoleComponent.prototype.tranList = function (value) {
        var roleList = [];
        if (value) {
            value.forEach(function (item) {
                roleList.push(item.value);
            });
        }
        return roleList;
    };
    //确定按钮事件
    PostsManageAllotRoleComponent.prototype.preserveClick = function () {
        var _this = this;
        var param = { roleList: this.tranList(this.selectPower), postId: this.postId };
        this.commonHttpService.createPostRoleRelation(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit(false);
                _this.selectPower = [];
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
    //取消按钮事件
    PostsManageAllotRoleComponent.prototype.cancel = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsManageAllotRoleComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PostsManageAllotRoleComponent.prototype, "outValue", void 0);
    PostsManageAllotRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts-manage-allot-role',
            template: __webpack_require__(/*! ./posts-manage-allot-role.component.html */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.html"),
            styles: [__webpack_require__(/*! ./posts-manage-allot-role.component.scss */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], PostsManageAllotRoleComponent);
    return PostsManageAllotRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">岗位编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"postsManageBean.postId\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label>岗位名称：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"postsManageBean.postName\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)='query()'></button>\r\n        <!-- <button pButton type=\"button\" label=\"柜员岗位导入\" (click)='into()'></button> -->\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n    <span class=\"icoColor\" style=\"margin-left:92%;\" (click)=\"add()\" *ngIf=\"permissionCheck('SID01055_P0141')\">新增</span>\r\n    <!-- <button pButton type=\"button\" label=\"新增\" (click)=\"add()\" style=\"margin-left:95%;\"></button> -->\r\n    <!-- table -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"postId\" header=\"岗位编号\"></p-column>\r\n            <p-column field=\"postName\" header=\"岗位名称\"></p-column>\r\n            <p-column field=\"description\" header=\"岗位描述\"></p-column>\r\n            <p-column field=\"extParam\" header=\"扩展数据\"></p-column>\r\n            <p-column field=\"managePermission\" header=\"岗位权限\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.managePermission | codeValuePie:managePermission}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"manageLevel\" header=\"所属岗位级别\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.manageLevel | codeValuePie:manageLevels}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"managePosition\" header=\"岗位管理\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <button pButton type=\"button\" label=\"分配角色\" (click)='allotRole(item)'></button>\r\n                </ng-template>\r\n            </p-column> -->\r\n            <!-- 不展示字段 -->\r\n            <!-- <p-column field=\"createdStamp\" header=\"创建时间\"></p-column>\r\n            <p-column field=\"createdTxStamp\" header=\"创建时间\"></p-column>\r\n            <p-column field=\"lastUpdatedStamp\" header=\"创建时间\"></p-column>\r\n            <p-column field=\"lastUpdatedTxStamp\" header=\"创建时间\"></p-column> -->\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelDealIco\" (click)='allotRole(item)' *ngIf=\"permissionCheck('SID01055_P0142')\">分配</span>\r\n                    <span class=\"tabelUpdateIco\" (click)='update(item)' *ngIf=\"permissionCheck('SID01055_P0143')\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)='delete(item)' *ngIf=\"permissionCheck('SID01055_P0144')\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\" rows=\"{{postsManageBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <posts-add-manage *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></posts-add-manage>\r\n        <posts-update-manage *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></posts-update-manage>\r\n        <posts-into-manage *ngIf=\"showModel=='3'\" (outValue)=\"details($event)\"></posts-into-manage>\r\n        <app-posts-manage-allot-role *ngIf=\"showModel=='4'\" [inValue]=\"updateValue\" (outValue)=\"allotRoleCall($event)\"></app-posts-manage-allot-role>\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PostsManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManageModule", function() { return PostsManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_manage_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-manage.routing */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.routing.ts");
/* harmony import */ var _posts_manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-manage */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.ts");
/* harmony import */ var _posts_add_manage_posts_add_manage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts-add-manage/posts-add-manage */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-add-manage/posts-add-manage.ts");
/* harmony import */ var _posts_update_manage_posts_update_manage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts-update-manage/posts-update-manage */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.ts");
/* harmony import */ var _posts_into_manage_posts_into_manage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts-into-manage/posts-into-manage */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-into-manage/posts-into-manage.ts");
/* harmony import */ var _posts_manage_allot_role_posts_manage_allot_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts-manage-allot-role/posts-manage-allot-role.component */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage-allot-role/posts-manage-allot-role.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PostsManageModule = /** @class */ (function () {
    function PostsManageModule() {
    }
    PostsManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _posts_manage_routing__WEBPACK_IMPORTED_MODULE_4__["PostsManageRouting"]
            ],
            declarations: [
                _posts_add_manage_posts_add_manage__WEBPACK_IMPORTED_MODULE_6__["PostsAddManage"],
                _posts_update_manage_posts_update_manage__WEBPACK_IMPORTED_MODULE_7__["PostsUpdateManage"],
                _posts_into_manage_posts_into_manage__WEBPACK_IMPORTED_MODULE_8__["PostsIntoManage"],
                _posts_manage__WEBPACK_IMPORTED_MODULE_5__["PostsManage"],
                _posts_manage_allot_role_posts_manage_allot_role_component__WEBPACK_IMPORTED_MODULE_9__["PostsManageAllotRoleComponent"],
            ],
            providers: []
        })
    ], PostsManageModule);
    return PostsManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: routes, PostsManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManageRouting", function() { return PostsManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-manage */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.ts");


var routes = [
    { path: '', component: _posts_manage__WEBPACK_IMPORTED_MODULE_1__["PostsManage"] }
];
var PostsManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30%; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0cy1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccG9zdHMtbWFuYWdlXFxwb3N0cy1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSDFCO0VBTVEsbUJBQWtCLEVBQUE7O0FBTjFCO0VBU1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLHFCQUFxQixFQUFBOztBQUV4QjtFQUNJLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFFNUI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdHMtbWFuYWdlL3Bvc3RzLW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC5yb3dMb2NhdG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuTG9jYXRpb257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gfVxyXG4gOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gfVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.ts ***!
  \***************************************************************************/
/*! exports provided: PostsManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManage", function() { return PostsManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/posts-manage.bean */ "./src/app/pages/tzb/common/base-manage/posts-manage/bean/posts-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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
//岗位





// import { ManagePermission, ManageLevel } from '../../constant/common.codeValue'

var PostsManage = /** @class */ (function () {
    function PostsManage(commonHttpService, confirmationService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        //管理权限
        this.managePermission = [];
        //管理级别
        // manageLevel: any = ManageLevel;
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.precredit = '岗位查询';
        this.postsManageBean = new _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_1__["PostsManageBean"]();
        //每页多少条
        this.pageSize = 10;
        //模态框的标题
        this.headerTitle = "机构详情";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //分配角色传参
        this.updateValueRole = [];
        //提示信息
        this.msgs = [];
        this.first = 0; //分页控制
        this.codeValues();
        this.managePermission = this.code["ManagePermission"];
        this.manageLevels = this.code['manageLevels'];
    }
    PostsManage.prototype.ngOnInit = function () {
        this.postsManageBean.pageSize = 10;
        this.postsManageBean.pageNum = 1;
        this.queryClick();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.query();
            }
        };
    };
    PostsManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    PostsManage.prototype.queryClick = function () {
        var _this = this;
        this.commonHttpService.queryPostById(this.postsManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.postInfoList;
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
    PostsManage.prototype.query = function () {
        var _this = this;
        this.first = 0;
        this.postsManageBean.pageNum = 1;
        this.commonHttpService.queryPostById(this.postsManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.postInfoList;
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
    //分配角色按钮事件
    PostsManage.prototype.allotRole = function (item) {
        this.headerTitle = '角色分配';
        this.display = true;
        this.showModel = '4';
        this.updateValue = { postId: item.postId, postName: item.postName };
    };
    PostsManage.prototype.allotRoleCall = function (param) {
        this.display = param;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: 'success' });
    };
    // 增加按钮事件
    PostsManage.prototype.add = function () {
        this.headerTitle = '岗位添加';
        this.display = true;
        this.showModel = '1';
    };
    //添加的回调
    PostsManage.prototype.addCall = function (param) {
        this.display = param;
        // this.postsManageBean.pageNum = 1;
        this.queryClick();
    };
    //修改按钮事件
    PostsManage.prototype.update = function (item) {
        this.headerTitle = '岗位修改';
        this.display = true;
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改的回调
    PostsManage.prototype.updateCall = function (param) {
        this.display = param;
        // this.postsManageBean.pageNum = this.currentPage;
        // this.postsManageBean = new PostsManageBean();
        this.queryClick();
    };
    //岗位导入
    PostsManage.prototype.into = function () {
        this.headerTitle = '柜员岗位导入';
        this.display = true;
        this.showModel = '3';
    };
    //删除按钮事件
    PostsManage.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { postId: item.postId };
                _this.commonHttpService.deletePost(param).subscribe(function (data) {
                    if (data.returnCode) {
                        if (data.returnCode.code == "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            _this.queryClick();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    // 重置
    PostsManage.prototype.reset = function () {
        this.postsManageBean.postId = "";
        this.postsManageBean.postName = "";
    };
    //分页
    PostsManage.prototype.paginate = function (event) {
        this.rows = event.rows * 1;
        //每页显示的条数
        this.postsManageBean.pageSize = this.rows;
        //当前页
        var currentPage = event.page + 1;
        this.postsManageBean.pageNum = currentPage;
        this.first = event.page * this.postsManageBean.pageSize;
        //调用查询的方法
        this.queryClick();
        // this.postsManageBean.pageNum = 1;
    };
    //返回的值
    PostsManage.prototype.outValue = function (param) {
        this.display = param.display;
    };
    //按钮权限
    PostsManage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PostsManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-manage',
            template: __webpack_require__(/*! ./posts-manage.html */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.html"),
            styles: [__webpack_require__(/*! ./posts-manage.scss */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-manage.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        //岗位管理
        ,
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], PostsManage);
    return PostsManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label>岗位编号：</label>\r\n    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"postsManageBean.postId\" disabled formControlName=\"postId\" name=\"postId\"\r\n        disabled>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['postId'].valid&&userform.controls['postId'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','postId')\"> 岗位编号不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','postId')\"> 请输入1位至20位大写或小写字母或数字或下划线!</p>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>岗位名称：</label>\r\n    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"postsManageBean.postName\" formControlName=\"postName\" name=\"postName\">\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['postName'].valid&&userform.controls['postName'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','postName')\"> 岗位名称不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','postName')\"> 岗位名称必须为1-20位中文且不能有空格！</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>岗位描述：</label>\r\n    <input id=\"input\" type=\"textare\" size=\"20\" pInputTextarea style=\"height:60px;\" [(ngModel)]=\"postsManageBean.description\"\r\n        formControlName=\"description\" name=\"description\">\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','description')\"> 岗位描述不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','description')\"> 岗位描述可输入1-250位，可以为中英文和标点</p>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 extral\">\r\n    <label style=\"text-align:right;\" appValidation>扩展数据：</label>\r\n    <div>\r\n        <div style='display:block' *ngFor=\"let item of extParam1\">\r\n            键：\r\n            <input type=\"text\" pInputText [(ngModel)]=\"item.key\"> 值：\r\n            <input type=\"text\" pInputText [(ngModel)]=\"item.value\">\r\n            <label class=\"tabelRemoveIco\" (click)=\"extParamRemove(item)\" style=\"width:20px;height:20px;\">减</label>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <label class=\"customGroupaddBack\" (click)=\"extParamAdd()\" style=\"width:20px;height:20px;\">加</label>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" [formGroup]=\"userform\">\r\n    <label appValidation>管理权限：</label>\r\n    <p-dropdown [options]=\"managePermission\" [(ngModel)]=\"postsManageBean.managePermission\" formControlName=\"managePermission\"\r\n        name=\"managePermission\"></p-dropdown>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['managePermission'].valid&&userform.controls['managePermission'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','managePermission')\"> 管理权限不能为空！</p>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 form\" id=\"orgName\" [formGroup]=\"userform\">\r\n    <label appValidation>所属岗位级别：</label>\r\n    <p-dropdown [options]=\"manageLevels\" [(ngModel)]=\"postsManageBean.manageLevel\" placeholder=\"请选择\" filter=\"filter\" (keyup)=\"inpquery($event)\"\r\n        formControlName=\"manageLevel\" name=\"manageLevel\"></p-dropdown>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['manageLevel'].valid&&userform.controls['manageLevel'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','manageLevel')\"> 所属岗位级别不能为空！</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 ui-md-6\" style=\"text-align:right\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n</div>\r\n<div class=\"ui-g-12 ui-md-6\">\r\n    <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form input, .form textarea {\n  width: 38% !important; }\n\n.form label {\n  display: inline-block;\n  width: 30%;\n  text-align: right; }\n\n.extral div {\n  display: inline-block; }\n\n.extral input {\n  width: 34%; }\n\n.extral label {\n  display: inline-block;\n  width: 26%;\n  text-align: right; }\n\n:host/deep/ .ui-dropdown {\n  width: 38% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0cy1tYW5hZ2UvcG9zdHMtdXBkYXRlLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3N0cy1tYW5hZ2VcXHBvc3RzLXVwZGF0ZS1tYW5hZ2VcXHBvc3RzLXVwZGF0ZS1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQixFQUFBOztBQUY3QjtFQUtRLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3pCO0VBRVEscUJBQXFCLEVBQUE7O0FBRjdCO0VBS1EsVUFDSixFQUFBOztBQU5KO0VBUVEscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdHMtbWFuYWdlL3Bvc3RzLXVwZGF0ZS1tYW5hZ2UvcG9zdHMtdXBkYXRlLW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm17XHJcbiAgICBpbnB1dCx0ZXh0YXJlYXtcclxuICAgICAgICB3aWR0aDogMzglICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG4uZXh0cmFse1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAzNCVcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjYlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiAzOCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.ts ***!
  \******************************************************************************************************/
/*! exports provided: PostsUpdateManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsUpdateManage", function() { return PostsUpdateManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/posts-manage.bean */ "./src/app/pages/tzb/common/base-manage/posts-manage/bean/posts-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var PostsUpdateManage = /** @class */ (function () {
    function PostsUpdateManage(commonHttpService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //管理权限
        this.managePermission = [];
        //提示信息
        this.msgs = [];
        this.inpFlag = true; //模糊查询
        //实体
        this.postsManageBean = new _bean_posts_manage_bean__WEBPACK_IMPORTED_MODULE_1__["PostsManageBean"]();
        this.codeValues(); //调用方法，获取全部码值
        this.managePermission = this.code['ManagePermission'];
        this.manageLevels = this.code['manageLevels'];
    }
    PostsUpdateManage.prototype.ngOnInit = function () {
        if (this.inValue.extParam == null) { //扩展数据为空时，避免点击修改页面出现错乱
            this.postsManageBean.extParam = '';
        }
        this.extParam1 = this.commfunc.transformExtParamObj(this.postsManageBean.extParam);
        this.userform = this.fb.group({
            'postName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'postId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4e00-\u9fa5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,250}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'managePermission': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'manageLevel': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.orgquery('');
    };
    //码值
    PostsUpdateManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    PostsUpdateManage.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    PostsUpdateManage.prototype.fuzhi = function () {
        this.postsManageBean = Object.assign({}, this.inValue);
    };
    //增加扩展数据
    PostsUpdateManage.prototype.extParamAdd = function () {
        this.extParam1.push({ 'key': '', 'value': '' });
    };
    //扩展数据删除
    PostsUpdateManage.prototype.extParamRemove = function (item) {
        if (this.extParam1.length > 1) {
            this.extParam1.splice(this.extParam1.indexOf(item), 1);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据不能为空' });
        }
    };
    //校验扩展数据
    PostsUpdateManage.prototype.preConfirm = function (data) {
        for (var i in data) {
            if (data[i].key == "" || data[i].value == "") {
                return true;
            }
        }
    };
    //提交
    PostsUpdateManage.prototype.preserveClick = function () {
        var _this = this;
        //扩展数据为空时提示，禁止提交
        if (this.preConfirm(this.extParam1)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据不能为空' });
            return;
        }
        this.postsManageBean.extParam = this.commfunc.transformExtParamStr(this.extParam1);
        if (!(/^[\w\,\|]*$/.test(this.postsManageBean.extParam))) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '扩展数据只能为字母、数字、下划线' });
            return;
        }
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
        this.commonHttpService.modifyPost(this.postsManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
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
    //取消
    PostsUpdateManage.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
        // this.postsManageBean = new PostsManageBean();
    };
    // //机构模糊查询
    PostsUpdateManage.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgName = document.getElementById('orgName').getElementsByTagName('input')[1].value;
                _this.orgquery(orgName);
            }, 1000);
        }
    };
    PostsUpdateManage.prototype.orgquery = function (orgName) {
        var _this = this;
        var param = {
            orgId: '',
            orgName: orgName,
            pageSize: '30'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsUpdateManage.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PostsUpdateManage.prototype, "outValue", void 0);
    PostsUpdateManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-update-manage',
            styles: [__webpack_require__(/*! ./posts-update-manage.scss */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.scss")],
            template: __webpack_require__(/*! ./posts-update-manage.html */ "./src/app/pages/tzb/common/base-manage/posts-manage/posts-update-manage/posts-update-manage.html"),
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], PostsUpdateManage);
    return PostsUpdateManage;
}());



/***/ })

}]);
//# sourceMappingURL=posts-manage-posts-manage-module.js.map