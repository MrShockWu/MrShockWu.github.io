(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-manage-role-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 plickList\">\r\n    <div class=\"ui-g-5 source\">\r\n        <div class=\"sourceHeader header ui-g-12\">\r\n            操作：\r\n            <label [for]=\"item.id\" *ngFor=\"let item of operTypeList\">\r\n                <input [id]=\"item.id\" type=\"checkbox\" (click)=\"checked(item.index)\">{{item.type}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 searchInp\">\r\n                <input type=\"search\" placeholder=\"根据名字模糊查询\" (keyup)=\"search($event,'source')\">\r\n            </div>\r\n            <div class=\"ui-g-12 container\">\r\n                <div class=\"item\" *ngFor=\"let item of sourceListData\"><p (click)=\"choose($event,item,0)\">{{item.contentName}}</p></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2 move\">\r\n        <div class=\"allotRight\" (click)=\"moveRight()\"></div>\r\n        <div class=\"allotAllright\" (click)=\"moveAllRight()\"></div>\r\n        <div class=\"allotLeft\" (click)=\"moveleft()\"></div>\r\n        <div class=\"allotAllleft\" (click)=\"moveAllLeft()\"></div>\r\n    </div>\r\n    <div class=\"ui-g-5 target\">\r\n        <div class=\"ui-g-12 targetHeader header\">已选字段</div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 searchInp\">\r\n                <input type=\"search\" placeholder=\"根据名字模糊查询\" (keyup)=\"search($event,'target')\">\r\n            </div>\r\n            <div class=\"ui-g-12 container\">\r\n                <div class=\"item\" *ngFor=\"let item of targetListData\" >\r\n                    <p (click)=\"choose($event,item,1)\">{{item.contentName}}</p>\r\n                    <div class=\"type\">\r\n                        <span *ngIf=\"item['contentOperationId']&&item['contentOperationId'].indexOf(1)!=-1\">新增</span>\r\n                        <span *ngIf=\"item['contentOperationId']&&item['contentOperationId'].indexOf(2)!=-1\">修改</span>\r\n                        <span *ngIf=\"item['contentOperationId']&&item['contentOperationId'].indexOf(3)!=-1\">删除</span>\r\n                        <span *ngIf=\"item['contentOperationId']&&item['contentOperationId'].indexOf(4)!=-1\">查看</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- 按钮 -->\r\n<div class='ui-g-12'>\r\n    <div class=\"ui-g-12 ui-md-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='confirmAllot()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)='cancelAllot()'></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plickList .header {\n  background: #0098b0;\n  height: 40px;\n  text-align: left;\n  padding: 0 0 0 10px;\n  line-height: 40px; }\n\n.plickList .targetHeader {\n  text-align: center; }\n\n.plickList [type='search'] {\n  width: 100%;\n  height: 30px;\n  padding-left: 10px; }\n\n.plickList .container {\n  width: 100%;\n  height: 400px;\n  text-align: center;\n  overflow: scroll; }\n\n.plickList .container p {\n    margin: 0; }\n\n.plickList .container .item {\n    margin: 0;\n    line-height: 40px;\n    cursor: pointer;\n    position: relative; }\n\n.plickList .container :hover .type {\n    display: block; }\n\n.plickList .allotRight {\n  margin-top: 152px; }\n\n.plickList .type {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: none;\n  color: #fff;\n  width: 85px; }\n\n.plickList .type span {\n    background: #0098b0;\n    line-height: 23px;\n    padding: 0 5px;\n    border-radius: 5px;\n    float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9hbGxvdC1idXNpbmVzcy1maWVsZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxyb2xlLW1hbmFnZVxcYWxsb3QtYnVzaW5lc3MtZmllbGRcXGFsbG90LWJ1c2luZXNzLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQU43QjtFQVNZLGtCQUFrQixFQUFBOztBQVQ5QjtFQVlZLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBZDlCO0VBaUJZLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQXBCNUI7SUFzQmdCLFNBQVMsRUFBQTs7QUF0QnpCO0lBeUJnQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTs7QUE1QmxDO0lBZ0NvQixjQUFjLEVBQUE7O0FBaENsQztFQXFDWSxpQkFBaUIsRUFBQTs7QUFyQzdCO0VBd0NZLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQTdDdkI7SUErQ2dCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3JvbGUtbWFuYWdlL2FsbG90LWJ1c2luZXNzLWZpZWxkL2FsbG90LWJ1c2luZXNzLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsaWNrTGlzdHtcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5OGIwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFyZ2V0SGVhZGVye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFt0eXBlPSdzZWFyY2gnXXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfTpob3ZlcntcclxuICAgICAgICAgICAgICAgIC50eXBle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGxvdFJpZ2h0e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnR5cGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOThiMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AllotBusinessFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllotBusinessFieldComponent", function() { return AllotBusinessFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
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





var AllotBusinessFieldComponent = /** @class */ (function () {
    function AllotBusinessFieldComponent(commonHttpService, confirmationService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
        this.operTypeList = []; //操作类型列表
        //模糊搜索展示的列表
        this.sourceList = [];
        this.targetList = [];
        //提示信息
        this.msgs = [];
        //未选数据列表
        this.sourceListData = [];
        //已选数据列表
        this.targetListData = [];
        //
        this.chooseList = [];
        //操作类型
        this.operType = '';
        this.operTypeList = [
            { type: '新增', id: 'add', index: '1' },
            { type: '修改', id: 'update', index: '2' },
            { type: '删除', id: 'del', index: '3' },
            { type: '查看', id: 'look', index: '4' },
        ];
    }
    AllotBusinessFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleId = this.inValue.roleId;
        var source = new Promise(function (resolve) {
            //左边数据查询
            var param = {
                pageSize: '999999',
                pageNum: '1'
            };
            _this.commonHttpService.querySpContent(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.sourceListData = data.contentList;
                    resolve({ sourceList: data.contentList });
                }
            });
        });
        var target = new Promise(function (resolve) {
            //右边数据查询
            var param1 = {
                roleTypeId: _this.roleId,
                pageSize: '999999',
                pageNum: '1'
            };
            _this.commonHttpService.querySpContentPurposeOperation(param1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.contentList) {
                        _this.targetListData = data.contentList;
                        _this.targetList = data.contentList;
                        resolve({ targetList: data.contentList });
                    }
                }
            });
        });
        var all = Promise.all([source, target]);
        all.then(function (res) {
            var sourceListData = res[0]['sourceList'];
            var targetListData = res[1]['targetList'];
            for (var i = 0; i < targetListData.length; i++) {
                for (var j = 0; j < sourceListData.length; j++) {
                    if (targetListData[i]['contentId'] == sourceListData[j]['contentId']) {
                        sourceListData.splice(j, 1);
                        break;
                    }
                }
            }
            _this.sourceList = sourceListData;
            _this.sourceListData = sourceListData;
        });
    };
    //模糊搜索
    AllotBusinessFieldComponent.prototype.search = function (event, flag) {
        var inp = event.srcElement.value;
        if (flag == 'source') {
            this.sourceList = this.sourceListData.filter(function (item) { return item['contentName'].includes(inp); });
            if (inp == '') {
                this.sourceList = this.sourceListData;
            }
        }
        else {
            this.targetList = this.targetListData.filter(function (item) { return item['contentName'].includes(inp); });
            if (inp == '') {
                this.targetList = this.targetListData;
            }
        }
    };
    //操作类型
    AllotBusinessFieldComponent.prototype.checked = function (index) {
        if (this.operType.indexOf(index) == -1) {
            this.operType += index + ",";
        }
        else {
            this.operType = this.operType.replace(index, '');
        }
    };
    //选中样式
    AllotBusinessFieldComponent.prototype.choose = function (event, item, flag) {
        if (this.operType.length == 0 && flag == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先勾选操作类型' });
            return;
        }
        var txt = event.srcElement.innerText;
        if (this.chooseList.indexOf(txt) == -1) {
            this.chooseList.push(txt);
            event.srcElement.style.backgroundColor = "rgba(198, 223, 239, 0.94)";
        }
        else {
            this.chooseList.splice(this.chooseList.indexOf(txt), 1);
            event.srcElement.style.backgroundColor = "transparent";
        }
    };
    //将数据移到另一边
    AllotBusinessFieldComponent.prototype.move = function (listData, listData1) {
        this.operType = this.operType.slice(0, this.operType.length - 1);
        var list = [];
        var list1 = [];
        for (var i = 0; i < this.chooseList.length; i++) {
            for (var j = 0; j < listData.length; j++) {
                if (this.chooseList[i] == listData[j].contentName) {
                    listData[j]['contentOperationId'] = this.operType;
                    listData1.push(listData[j]);
                    listData.splice(j, 1);
                    break;
                }
            }
        }
        list1 = listData1;
        list = listData;
        this.chooseList = [];
        return { list: list, list1: list1 };
    };
    //右移
    AllotBusinessFieldComponent.prototype.moveRight = function () {
        var data = this.move(this.sourceListData, this.targetListData);
        this.sourceList = data.list;
        this.targetList = data.list1;
    };
    //全部右移
    AllotBusinessFieldComponent.prototype.moveAllRight = function () {
        var _this = this;
        this.operType = this.operType.slice(0, this.operType.length - 1);
        this.sourceListData.forEach(function (item) {
            item['contentOperationId'] = _this.operType;
        });
        this.targetListData = this.targetListData.concat(this.sourceListData);
        this.targetList = this.targetListData;
        this.sourceList = [];
        this.sourceListData = [];
    };
    //左移
    AllotBusinessFieldComponent.prototype.moveleft = function () {
        var data = this.move(this.targetListData, this.sourceListData);
        this.sourceList = data.list1;
        this.targetList = data.list;
    };
    //全部左移
    AllotBusinessFieldComponent.prototype.moveAllLeft = function () {
        this.sourceListData = this.sourceListData.concat(this.targetListData);
        this.sourceList = this.sourceListData;
        this.targetList = [];
        this.targetListData = [];
    };
    //确定按钮
    AllotBusinessFieldComponent.prototype.confirmAllot = function () {
        var _this = this;
        var contentSpList = [];
        for (var j = 0; j < this.targetListData.length; j++) {
            var contenMap = {};
            contenMap["contentOperationId"] = this.targetListData[j]["contentOperationId"];
            contenMap["contentName"] = this.targetListData[j]["contentName"];
            contenMap["contentPurposeTypeId"] = this.targetListData[j]["contentId"];
            contenMap["roleId"] = this.roleId;
            contentSpList.push(contenMap);
        }
        var param = {
            relList: contentSpList,
            roleTypeId: this.roleId
        };
        this.commonHttpService.createSpContentPurposeOperation(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit({ display: false, message: data.returnCode.message });
                _this.targetListData = [];
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //取消按钮
    AllotBusinessFieldComponent.prototype.cancelAllot = function () {
        this.outValue.emit({ display: false });
        // this.selectFeild = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllotBusinessFieldComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AllotBusinessFieldComponent.prototype, "outValue", void 0);
    AllotBusinessFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'allot-business-field',
            template: __webpack_require__(/*! ./allot-business-field.component.html */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.html"),
            styles: [__webpack_require__(/*! ./allot-business-field.component.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], AllotBusinessFieldComponent);
    return AllotBusinessFieldComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 右上角的角色编号和名称 -->\r\n<div class=\"ui-g-12\">\r\n    <p class=\"roleIdNameP\">\r\n        <span *ngIf=\"roleId\" class=\"roleIdSpan\">角色编号：{{roleId}}</span>\r\n        <span *ngIf=\"roleName\">角色名称：{{roleName}}</span>\r\n    </p>\r\n</div>\r\n<!-- 左右数据筛选 -->\r\n\r\n<p-pickList [source]=\"power\" [target]=\"selectPower\" [responsive]=\"true\" [showSourceControls]=\"false\" [showTargetControls]=\"false\"\r\n    sourceHeader=\"显示的数据\" targetHeader=\"选中的数据\" sourceFilterPlaceholder=\"根据名字模糊查询\" targetFilterPlaceholder=\"根据名字模糊查询\" [sourceStyle]=\"{'width':'420px','height':'400px','overflow':'scroll'}\"\r\n    [targetStyle]=\"{'width':'420px','height':'400px','overflow':'scroll'}\" filterBy=\"label\" [metaKeySelection]=\"false\">\r\n    <ng-template let-col pTemplate=\"item\">\r\n        <div style=\"width:100%;text-align:center;\" class=\"ui-helper-clearfix\">\r\n            <li>{{col.label}}</li>\r\n        </div>\r\n    </ng-template>\r\n</p-pickList>\r\n\r\n<!-- 按钮 -->\r\n<div class='ui-g-12'>\r\n    <div class=\"ui-g-12 ui-md-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)='confirmAllot()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)='cancelAllot()'></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-picklist .ui-picklist-filter-container .ui-picklist-filter {\n  text-indent: 2.1em;\n  width: 100%; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  width: 50%; }\n\n.ui-g-12 {\n  text-align: right; }\n\n.ui-g-12 .roleIdNameP {\n    color: #0094d2; }\n\n.ui-g-12 .roleIdNameP .roleIdSpan {\n      padding-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9hbGxvdC1wb3dlci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxyb2xlLW1hbmFnZVxcYWxsb3QtcG93ZXJcXGFsbG90LXBvd2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtNQUtZLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9hbGxvdC1wb3dlci9hbGxvdC1wb3dlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLXBpY2tsaXN0IC51aS1waWNrbGlzdC1maWx0ZXItY29udGFpbmVyIC51aS1waWNrbGlzdC1maWx0ZXIge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDIuMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbi51aS1nLTEyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLnJvbGVJZE5hbWVQIHtcclxuICAgICAgICBjb2xvcjogIzAwOTRkMjtcclxuICAgICAgICAucm9sZUlkU3BhbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vbGl7XHJcbiAgICAvLyBsaXN0LXN0eWxlLXR5cGU6c3F1YXJlO1xyXG4vL30iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.ts ***!
  \*************************************************************************************/
/*! exports provided: AllotPower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllotPower", function() { return AllotPower; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
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





var AllotPower = /** @class */ (function () {
    function AllotPower(commonHttpService, confirmationService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
        //角色状态
        this.roleStatus = [];
        //每页多少条
        this.pageSize = 10;
        //提示信息
        this.msgs = [];
        //接受父页面传过来的值
        this.roleId = ''; //角色编号
        this.roleName = ''; //角色名称
        //接受所有分配权限的值
        this.power = [];
        //右边接受的参数
        this.selectPower = [];
    }
    AllotPower.prototype.ngOnInit = function () {
        var _this = this;
        var param = {
            pageSize: '999999',
            pageNum: '1'
        };
        this.commonHttpService.querySecurityPermissionList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.power = _this.commfunc.listToLabelvalue(data.permissionList, "permissionsDescription", "permissionsId");
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
    AllotPower.prototype.ngOnChanges = function () {
        var _this = this;
        //接受父页面传过来的值
        this.roleId = this.inValue.roleId;
        this.roleName = this.inValue.roleName;
        //根据角色编号查询对应的角色权限
        var param = {
            roleId: this.roleId,
            pageSize: '999999'
        };
        this.commonHttpService.queryPermissionsListByRoleId(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.permissionsList) {
                    _this.selectPower = _this.commfunc.listToLabelvalue(data.permissionsList, 'description', 'permissionId');
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
    // tranList(value) {
    //     let roleList = [];
    //     if (value) {
    //         value.forEach(item => {
    //             roleList.push(item.value)
    //         });
    //     }
    //     return roleList;
    // }
    //确定按钮
    AllotPower.prototype.confirmAllot = function () {
        var _this = this;
        if (this.selectPower.length != 0) {
            this.selectPower.forEach(function (item) {
                item.permissionsId = item.value;
                item.roleId = _this.roleId;
                delete item.label;
                delete item.value;
            });
        }
        else {
            this.selectPower.push({ roleId: this.roleId });
        }
        var param = { permissionsList: this.selectPower };
        // let param={permissionsList:this.tranList(this.selectPower),roleId:this.roleId}
        this.commonHttpService.maintainRolePermissions(param).subscribe(function (data) {
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
    //取消按钮
    AllotPower.prototype.cancelAllot = function () {
        this.outValue.emit(false);
        this.selectPower = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllotPower.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AllotPower.prototype, "outValue", void 0);
    AllotPower = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'allot-power',
            styles: [__webpack_require__(/*! ./allot-power.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.scss")],
            template: __webpack_require__(/*! ./allot-power.html */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], AllotPower);
    return AllotPower;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\" >\r\n            <label appValidation>角色编号:</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManageBean.roleId\" formControlName=\"roleId\" name=\"roleId\">\r\n            <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleId'].valid&&userform.controls['roleId'].dirty\">\r\n                <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n                <p [hidden]=\"!userform.hasError('required','roleId')\"> 角色编号不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','roleId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"ui-g-12\" >\r\n            <label appValidation>角色名称:</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManageBean.roleName\" formControlName=\"roleName\" name=\"roleName\">\r\n            <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleName'].valid&&userform.controls['roleName'].dirty\">\r\n                <p [hidden]=\"userform.hasError('required','roleName')\"> 角色名称必须为1-20位中文且不能有空格！</p>\r\n                <p [hidden]=\"!userform.hasError('required','roleName')\"> 角色名称不能为空！</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" >\r\n            <label appValidation>角色描述:</label>\r\n            <!-- <input id=\"input\" type=\"textare\"  pInputText style=\"height:60px;\" rows=\"50\" cols=\"5\" [(ngModel)]=\"roleManageBean.roleDescribe\" formControlName=\"roleDescribe\" name=\"roleDescribe\"> -->\r\n            <textarea [(ngModel)]=\"roleManageBean.roleDescribe\" formControlName=\"roleDescribe\" name=\"roleDescribe\" pInputTextarea rows=\"3\"\r\n                cols=\"33\" style=\"overflow:auto\" (onResize)=\"checkLen()\"></textarea>\r\n            <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleDescribe'].valid&&userform.controls['roleDescribe'].dirty\">\r\n                <p [hidden]=\"!userform.hasError('required','roleDescribe')\"> 角色描述不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','roleDescribe')\"> 角色描述可输入1-60位，可以为中英文和标点</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea {\n  width: 30% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\nlabel {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9yb2xlLWFkZC1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccm9sZS1tYW5hZ2VcXHJvbGUtYWRkLW1hbmFnZVxccm9sZS1hZGQtbWFuYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2Uvcm9sZS1tYW5hZ2Uvcm9sZS1hZGQtbWFuYWdlL3JvbGUtYWRkLW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn1cclxubGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.ts ***!
  \*********************************************************************************************/
/*! exports provided: RoleAddManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAddManage", function() { return RoleAddManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleAddManage = /** @class */ (function () {
    function RoleAddManage(commonHttpService, fb) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //  add_title: string = '产品线管理新增';   
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__["RoleManageBean"]();
        this.maxlen = 255; //默认最长长度
    }
    RoleAddManage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'roleId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'roleName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'roleDescribe': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\u4e00-\u9fa5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    // 保存
    RoleAddManage.prototype.preserveClick = function () {
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
        //提交服务
        // ;
        this.commonHttpService.createRole(this.roleManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__["RoleManageBean"]();
                _this.outValue.emit(false);
                _this.roleManageBean.pageNum = 1;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    RoleAddManage.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__["RoleManageBean"]();
    };
    //可输字数提示
    RoleAddManage.prototype.checkLen = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoleAddManage.prototype, "outValue", void 0);
    RoleAddManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-add-manage',
            template: __webpack_require__(/*! ./role-add-manage.html */ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.html"),
            styles: [__webpack_require__(/*! ./role-add-manage.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RoleAddManage);
    return RoleAddManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <label>角色编号:</label>\r\n        <input id=\"input\" type=\"text\" pInputText formControlName=\"roleId\" name=\"roleId\" [(ngModel)]=\"roleManagerBean.roleId\">\r\n        <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleId'].valid&&userform.controls['roleId'].dirty\">\r\n            <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n            <p [hidden]=\"!userform.hasError('required','roleId')\"> 角色编号不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','roleId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <label>角色名称:</label>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManagerBean.roleName\" formControlName=\"roleName\" name=\"roleName\">\r\n        <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleName'].valid&&userform.controls['roleName'].dirty\">\r\n            <p [hidden]=\"userform.hasError('required','roleName')\"> 角色名称必须为1-20位中文且不能有空格！</p>\r\n            <p [hidden]=\"!userform.hasError('required','roleName')\"> 角色名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <label>角色描述:</label>\r\n        <!-- <input id=\"input\" type=\"textare\"  pInputText [(ngModel)]=\"roleManagerBean.roleDescribe\"\r\n        formControlName=\"roleDescribe\" name=\"roleDescribe\"> -->\r\n        <textarea [(ngModel)]=\"roleManagerBean.roleDescribe\" formControlName=\"roleDescribe\" name=\"roleDescribe\" pInputTextarea rows=\"3\"\r\n            cols=\"33\" style=\"overflow:auto\"></textarea>\r\n        <div style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleDescribe'].valid&&userform.controls['roleDescribe'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','roleDescribe')\"> 角色描述不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','roleDescribe')\"> 角色描述可输入1-60位，可以位中英文和标点</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-g-offset-4\">\r\n        <p-checkbox  value=\"是否复制角色下权限\" label=\"是否复制角色下权限\" (onChange)='onChanges($event)'></p-checkbox>\r\n        <!-- <p-radioButton value=\"是否复制角色下权限\" (onChange)='onChanges(cole,$event)' label=\"是否复制角色下权限\"></p-radioButton> -->\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)='copyClick()' label=\"确定\"></button>\r\n    <button pButton type=\"button\" (click)='closeClick()' label=\"取消\"></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g input, .ui-g textarea {\n  width: 30% !important; }\n\n.ui-g label {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9yb2xlLWNvcHktbWFuYWdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXHJvbGUtbWFuYWdlXFxyb2xlLWNvcHktbWFuYWdlXFxyb2xlLWNvcHktbWFuYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxxQkFBcUIsRUFBQTs7QUFGN0I7RUFLUSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2Uvcm9sZS1tYW5hZ2Uvcm9sZS1jb3B5LW1hbmFnZS9yb2xlLWNvcHktbWFuYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZ3tcclxuICAgIGlucHV0LHRleHRhcmVhe1xyXG4gICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.ts ***!
  \***********************************************************************************************/
/*! exports provided: RoleCopyManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCopyManage", function() { return RoleCopyManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
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





var RoleCopyManage = /** @class */ (function () {
    function RoleCopyManage(commonHttpService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //数据实体
        this.roleManagerBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
        this.roleStatus = [];
        //提示信息
        this.msgs = [];
        this.isCopyPower = 'N'; //复制的权限
    }
    RoleCopyManage.prototype.ngOnInit = function () {
        //接受父页面传过来的值
        this.roleId = this.inValue.roleId;
        this.roleName = this.inValue.roleName;
        this.userform = this.fb.group({
            'roleId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'roleName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'roleDescribe': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4e00-\u9fa5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.fuzhi();
    };
    //勾选复制权限事件
    RoleCopyManage.prototype.onChanges = function (event) {
        if (event) {
            this.isCopyPower = 'Y';
        }
        else {
            this.isCopyPower = 'N';
        }
    };
    RoleCopyManage.prototype.fuzhi = function () {
        this.roleManagerBean = this.inValue;
    };
    RoleCopyManage.prototype.copyClick = function () {
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
        var param = {
            copyRoleId: this.roleId,
            roleId: this.roleManagerBean.roleId,
            roleName: this.roleManagerBean.roleName,
            roleDescribe: this.roleManagerBean.roleDescribe,
            isCopyFlag: this.isCopyPower
        };
        this.commonHttpService.copyRole(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    RoleCopyManage.prototype.closeClick = function () {
        this.outValue.emit(false);
        this.roleManagerBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoleCopyManage.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoleCopyManage.prototype, "outValue", void 0);
    RoleCopyManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-copy-manage',
            template: __webpack_require__(/*! ./role-copy-manage.html */ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.html"),
            styles: [__webpack_require__(/*! ./role-copy-manage.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], RoleCopyManage);
    return RoleCopyManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2\">角色编码</div>\r\n            <div class=\"ui-g-1\"> <input id=\"input\" type=\"text\" size=\"20\" pInputText></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2\">角色名称</div>\r\n            <div class=\"ui-g-1\"> <input id=\"input\" type=\"text\" size=\"20\" pInputText></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2\">角色状态</div>\r\n            <div class=\"ui-g-1\">\r\n                <p-dropdown [options]=\"roleStatus\" [style]=\"{'width':'170px'}\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2\">角色描述</div>\r\n            <div class=\"ui-g-1\"> <input id=\"input\" type=\"text\" size=\"20\" pInputText></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-2\"><button pButton type=\"button\" label=\"取消\"></button></div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<!-- <p-growl [(value)]=\"msgs\"></p-growl> -->"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RoleDetailsManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailsManage", function() { return RoleDetailsManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleDetailsManage = /** @class */ (function () {
    function RoleDetailsManage(httpService) {
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //数据实体
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
        this.roleStatus = [];
    }
    RoleDetailsManage.prototype.ngOnInit = function () {
        //角色状态
        this.roleStatus.push({ label: 'Select City', value: null });
        this.roleStatus.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.roleStatus.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.roleStatus.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
    };
    //选择树的结果
    RoleDetailsManage.prototype.treeClick = function (param) {
    };
    //添加的结果
    RoleDetailsManage.prototype.add = function () {
        this.outValue.emit({ display: false });
    };
    //取消
    RoleDetailsManage.prototype.reset = function () {
        this.outValue.emit({ display: false });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RoleDetailsManage.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoleDetailsManage.prototype, "outValue", void 0);
    RoleDetailsManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-details-manage',
            template: __webpack_require__(/*! ./role-details-manage.html */ "./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.html"),
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"]])
    ], RoleDetailsManage);
    return RoleDetailsManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-manage.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">角色编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManageBean.roleId\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label>角色名称：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManageBean.roleName\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"clickQuery()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"resetO()\"></button>\r\n    </div>\r\n\r\n    <span class=\"icoColor\" style=\"margin-left:92%;\" (click)=\"add()\" *ngIf=\"permissionCheck('SID01052_P0136')\">新增</span>\r\n    <!-- table -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"roleId\" header=\"角色编号\"></p-column>\r\n            <p-column field=\"roleName\" header=\"角色名称\"></p-column>\r\n            <p-column field=\"roleDescribe\" header=\"角色描述\"></p-column>\r\n            <!-- <p-column field=\"color\" header=\"创建时间\"></p-column> -->\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelDealIco\" (click)=\"allot(item)\" *ngIf=\"permissionCheck('SID01052_P0137')\">分配权限</span>\r\n                    <span class=\"tabelDealIco\" (click)=\"allotField(item)\" >分配业务</span>\r\n                    <span class=\"tabelDetailIco\" (click)=\"copy(item)\" *ngIf=\"permissionCheck('SID01052_P0138')\">复制</span>\r\n                    <span class=\"tabelUpdateIco\" (click)=\"update(item)\" *ngIf=\"permissionCheck('SID01052_P0139')\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)=\"delete(item)\" *ngIf=\"permissionCheck('SID01052_P0140')\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\" rows=\"{{roleManageBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        <!-- <p-paginator [first]=\"first\" rows=\"{{beanValue.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator> -->\r\n    </div>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <role-add-manage *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></role-add-manage>\r\n        <role-modeify-manage *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></role-modeify-manage>\r\n        <role-copy-manage *ngIf=\"showModel=='3'\" [inValue]=\"copyValue\" (outValue)=\"copyCall($event)\"></role-copy-manage>\r\n        <!-- 分配权限 -->\r\n        <allot-power *ngIf=\"showModel=='4'\" [inValue]=\"updateValue\" (outValue)=\"allotCall($event)\"></allot-power>\r\n        <allot-business-field *ngIf=\"showModel=='5'\" [inValue]=\"businessFieldValue\" (outValue)=\"allotFieldCall($event)\"></allot-business-field>\r\n    </div>\r\n</p-dialog>\r\n<!-- 删除-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-manage.module.ts ***!
  \********************************************************************************/
/*! exports provided: RoleManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManageModule", function() { return RoleManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _role_manage_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-manage.routing */ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.routing.ts");
/* harmony import */ var _role_manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.ts");
/* harmony import */ var _role_add_manage_role_add_manage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-add-manage/role-add-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-add-manage/role-add-manage.ts");
/* harmony import */ var _role_modify_manage_role_modeify_manage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-modify-manage/role-modeify-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.ts");
/* harmony import */ var _role_details_manage_role_details_manage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-details-manage/role-details-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-details-manage/role-details-manage.ts");
/* harmony import */ var _role_copy_manage_role_copy_manage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role-copy-manage/role-copy-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-copy-manage/role-copy-manage.ts");
/* harmony import */ var _allot_power_allot_power__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allot-power/allot-power */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-power/allot-power.ts");
/* harmony import */ var _allot_business_field_allot_business_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allot-business-field/allot-business-field.component */ "./src/app/pages/tzb/common/base-manage/role-manage/allot-business-field/allot-business-field.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RoleManageModule = /** @class */ (function () {
    function RoleManageModule() {
    }
    RoleManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _role_manage_routing__WEBPACK_IMPORTED_MODULE_4__["RoleManageRouting"]
            ],
            declarations: [
                _role_manage__WEBPACK_IMPORTED_MODULE_5__["RoleManage"],
                _role_add_manage_role_add_manage__WEBPACK_IMPORTED_MODULE_6__["RoleAddManage"],
                _role_modify_manage_role_modeify_manage__WEBPACK_IMPORTED_MODULE_7__["RoleModeifyManage"],
                _role_details_manage_role_details_manage__WEBPACK_IMPORTED_MODULE_8__["RoleDetailsManage"],
                _role_copy_manage_role_copy_manage__WEBPACK_IMPORTED_MODULE_9__["RoleCopyManage"],
                _allot_power_allot_power__WEBPACK_IMPORTED_MODULE_10__["AllotPower"],
                _allot_business_field_allot_business_field_component__WEBPACK_IMPORTED_MODULE_11__["AllotBusinessFieldComponent"]
            ],
            providers: []
        })
    ], RoleManageModule);
    return RoleManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-manage.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: routes, RoleManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManageRouting", function() { return RoleManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-manage */ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.ts");


var routes = [
    { path: '', component: _role_manage__WEBPACK_IMPORTED_MODULE_1__["RoleManage"] }
];
var RoleManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-manage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxyb2xlLW1hbmFnZVxccm9sZS1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSDFCO0VBTVEsbUJBQWtCLEVBQUE7O0FBTjFCO0VBU1EscUJBQXFCLEVBQUE7O0FBSzdCO0VBQ0ksV0FBVSxFQUFBOztBQUVkO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksd0JBQXdCO0VBQ3hCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9yb2xlLW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC5yb3dMb2NhdG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuTG9jYXRpb257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgICBjb2xvcjojZjAwO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiB9XHJcbiA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-manage.ts ***!
  \*************************************************************************/
/*! exports provided: RoleManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManage", function() { return RoleManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RoleManage = /** @class */ (function () {
    function RoleManage(commonHttpService, confirmationService, fb, router, commfunc, 
    //  ab: AbstractControl,
    san) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.router = router;
        this.commfunc = commfunc;
        this.san = san;
        this.precredit = '角色查询';
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"];
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_2__["RoleManageBean"]();
        //角色状态
        this.roleStatus = [];
        //每页多少条
        this.pageSize = 10;
        //提示信息
        this.msgs = [];
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //复制传参
        this.copyValue = [];
        this.first = 0;
        this.createForm();
    }
    RoleManage.prototype.ngOnInit = function () {
        this.roleManageBean.pageSize = 10;
        this.roleManageBean.pageNum = 1;
        this.queryClick();
        this.queryPower();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.clickQuery();
            }
        };
    };
    RoleManage.prototype.createForm = function () {
        this.myForm = this.fb.group({
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkTel"]]]
        });
    };
    ;
    RoleManage.prototype.postDate = function () {
        if (this.myForm.valid) {
        }
    };
    //查询
    RoleManage.prototype.queryClick = function () {
        var _this = this;
        // if (this.roleManageBean.roleId.length > 0 || this.roleManageBean.roleName.length > 0) {
        //     this.roleManageBean.pageNum = 1;
        // } else {
        //     this.roleManageBean.pageNum = this.currentPage;
        // }
        this.commonHttpService.queryRoleListInfo(this.roleManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.roleListInfo;
                _this.total = data.total;
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
    RoleManage.prototype.clickQuery = function () {
        var _this = this;
        this.roleManageBean.pageNum = 1;
        this.first = 0;
        this.commonHttpService.queryRoleListInfo(this.roleManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.roleListInfo;
                _this.total = data.total;
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
    RoleManage.prototype.queryPower = function () {
        var _this = this;
        var param = {
            pageSize: '100000',
            pageNum: '1'
        };
        this.commonHttpService.querySecurityPermissionList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.power = data.permissionList;
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
    RoleManage.prototype.resetO = function () {
        this.roleManageBean.roleId = '';
        this.roleManageBean.roleName = '';
    };
    //列表查询
    RoleManage.prototype.query = function () {
        var _this = this;
        this.commonHttpService.queryRoleInfo(this.roleManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.roleListInfo;
                _this.total = data.total;
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
    //分页
    RoleManage.prototype.paginate = function (event) {
        //每页显示的条数
        this.rows = event.rows;
        this.roleManageBean.pageSize = this.rows;
        //当前页
        this.currentPage = event.page + 1;
        this.roleManageBean.pageNum = this.currentPage;
        this.first = event.page * this.roleManageBean.pageSize;
        //调用查询的方法
        this.queryClick();
    };
    //修改
    RoleManage.prototype.update = function (item) {
        this.headerTitle = '角色修改';
        this.display = true;
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改的回调
    RoleManage.prototype.updateCall = function (param) {
        this.display = param;
        // this.roleManageBean = new RoleManageBean();
        // this.roleManageBean.pageSize = 10;
        // this.roleManageBean.pageNum = 1;
        this.queryClick();
    };
    // 复制
    RoleManage.prototype.copy = function (item) {
        this.headerTitle = '角色复制';
        // this.inValue = car.vin;
        this.display = true;
        this.showModel = '3';
        this.copyValue = item;
    };
    RoleManage.prototype.copyCall = function (param) {
        this.display = param;
        // this.roleManageBean.pageNum = 1;
        this.queryClick();
    };
    // 分配权限
    RoleManage.prototype.allot = function (item) {
        this.headerTitle = '分配权限';
        this.display = true;
        this.showModel = '4';
        this.updateValue = { roleId: item.roleId, roleName: item.roleName };
    };
    //分配权限的回调
    RoleManage.prototype.allotCall = function (param) {
        this.display = param;
        // this.roleManageBean.pageNum = 1;
        this.queryClick();
    };
    RoleManage.prototype.allotField = function (item) {
        this.headerTitle = '分配业务字段';
        this.display = true;
        this.showModel = '5';
        this.businessFieldValue = item;
    };
    RoleManage.prototype.allotFieldCall = function (param) {
        this.display = param.display;
        if (param.message) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '分配业务字段成功' });
            this.queryClick();
        }
    };
    //删除按钮
    RoleManage.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { roleId: item.roleId };
                _this.commonHttpService.deleteRole(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '删除成功' });
                        _this.queryClick();
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
    RoleManage.prototype.add = function () {
        this.headerTitle = '角色添加';
        this.display = true;
        this.showModel = '1';
    };
    //添加后返回的值
    RoleManage.prototype.addCall = function (param) {
        this.display = param;
        // this.roleManageBean.pageNum = 1;
        this.queryClick();
    };
    // 重置
    RoleManage.prototype.reset = function () {
        this.roleManageBean.roleId = "";
        // this.roleManageBean.postName = "";
    };
    //返回的值
    RoleManage.prototype.outValue = function (param) {
        this.display = param.display;
    };
    RoleManage.prototype.cc = function () {
        this.router.navigate(['/pages/tzb/uisftech-view/check']);
    };
    //按钮权限
    RoleManage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    RoleManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-manage',
            styles: [__webpack_require__(/*! ./role-manage.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.scss")],
            template: __webpack_require__(/*! ./role-manage.html */ "./src/app/pages/tzb/common/base-manage/role-manage/role-manage.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], RoleManage);
    return RoleManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g input, .ui-g textarea {\n  width: 30% !important; }\n\n.ui-g label {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9yb2xlLW1hbmFnZS9yb2xlLW1vZGlmeS1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccm9sZS1tYW5hZ2VcXHJvbGUtbW9kaWZ5LW1hbmFnZVxccm9sZS1tb2RlaWZ5LW1hbmFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEscUJBQXFCLEVBQUE7O0FBRjdCO0VBS1EsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3JvbGUtbWFuYWdlL3JvbGUtbW9kaWZ5LW1hbmFnZS9yb2xlLW1vZGVpZnktbWFuYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZ3tcclxuICAgIGlucHV0LHRleHRhcmVhe1xyXG4gICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.ts ***!
  \****************************************************************************************************/
/*! exports provided: RoleModeifyManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModeifyManage", function() { return RoleModeifyManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/role-manage-bean */ "./src/app/pages/tzb/common/base-manage/role-manage/bean/role-manage-bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleModeifyManage = /** @class */ (function () {
    function RoleModeifyManage(commonHttpService, fb) {
        this.commonHttpService = commonHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
    }
    RoleModeifyManage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'roleName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4E00-\u9FA5]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // 'roleId': new FormControl('', [Validators.pattern(/^[\w]{6,20}$/),Validators.required]),
            'roleDescribe': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\u4e00-\u9fa5a-zA-Z0-9\u3002\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014]{1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    RoleModeifyManage.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    RoleModeifyManage.prototype.fuzhi = function () {
        this.roleManageBean = this.inValue;
    };
    //提交
    RoleModeifyManage.prototype.preserveClick = function () {
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
        // 
        this.commonHttpService.modifyRole(this.roleManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.outValue.emit(false);
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
    RoleModeifyManage.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
        this.roleManageBean = new _bean_role_manage_bean__WEBPACK_IMPORTED_MODULE_1__["RoleManageBean"]();
    };
    //选择树的结果
    RoleModeifyManage.prototype.treeClick = function (param) {
    };
    //取消
    RoleModeifyManage.prototype.reset = function () {
        this.outValue.emit({ display: false });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoleModeifyManage.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoleModeifyManage.prototype, "outValue", void 0);
    RoleModeifyManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-modeify-manage',
            template: __webpack_require__(/*! ./role-modify-manage.html */ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modify-manage.html"),
            styles: [__webpack_require__(/*! ./role-modeify-manage.scss */ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modeify-manage.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RoleModeifyManage);
    return RoleModeifyManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modify-manage.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/role-manage/role-modify-manage/role-modify-manage.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\" >\r\n        <label >角色编号</label>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"roleManageBean.roleId\" disabled>\r\n    </div>\r\n    <div class=\"ui-g-12\"  [formGroup]=\"userform\">\r\n        <label appValidation>角色名称</label>\r\n        <input id=\"input\" type=\"text\" pInputText  [(ngModel)]=\"roleManageBean.roleName\" formControlName=\"roleName\" name=\"roleName\">\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleName'].valid&&userform.controls['roleName'].dirty\">   \r\n            <!-- <p [hidden]=\"!userform.hasError('message','roleName')\"> 角色名称必须为6-20位中文且不能有空格！</p> -->\r\n            <p [hidden]=\"!userform.hasError('pattern','roleName')\"> 角色名称必须为1-20位中文且不能有空格！</p>\r\n            <p [hidden]=\"!userform.hasError('required','roleName')\"> 角色名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\"  [formGroup]=\"userform\">\r\n        <label appValidation>角色描述</label>\r\n        <!-- <input id=\"input\" type=\"textare\" pInputText [(ngModel)]=\"roleManageBean.roleDescribe\" formControlName=\"roleDescribe\" name=\"roleDescribe\"> -->\r\n                \r\n        <textarea [(ngModel)]=\"roleManageBean.roleDescribe\" formControlName=\"roleDescribe\" name=\"roleDescribe\" pInputTextarea rows=\"3\" cols=\"33\"  style=\"overflow:auto\"></textarea>\r\n        \r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['roleDescribe'].valid&&userform.controls['roleDescribe'].dirty\">   \r\n            <p [hidden]=\"!userform.hasError('required','roleDescribe')\"> 角色描述不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','roleDescribe')\"> 角色描述可输入1-60位，可以为中英文和常用标点</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n    </div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ })

}]);
//# sourceMappingURL=role-manage-role-manage-module.js.map