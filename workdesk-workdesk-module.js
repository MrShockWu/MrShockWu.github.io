(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workdesk-workdesk-module"],{

/***/ "./src/app/@uisftech/view/workdesk/bean/workdesk.bean.ts":
/*!***************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/bean/workdesk.bean.ts ***!
  \***************************************************************/
/*! exports provided: WorkTaskSummaryBean, DeskCustomerQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskSummaryBean", function() { return WorkTaskSummaryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskCustomerQuery", function() { return DeskCustomerQuery; });
var WorkTaskSummaryBean = /** @class */ (function () {
    function WorkTaskSummaryBean() {
    }
    return WorkTaskSummaryBean;
}());

var DeskCustomerQuery = /** @class */ (function () {
    function DeskCustomerQuery() {
    }
    return DeskCustomerQuery;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/common-function/common-function.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 add\">\r\n    <div class=\"ui-g-12 addListPage\" *ngFor=\"let item of functionList\">\r\n        <div class=\"ui-g-12 title\">\r\n            <img src=\"../../../../../../assets/layout/images/titYJ.png\">{{item.description}}</div>\r\n        <div class=\"ui-g-12\">\r\n            <p-checkbox *ngFor=\"let temp of item.items\" class=\"ui-g-4\" binary=\"true\" value={{temp.sourceId}} label={{temp.description}} [(ngModel)]=\"temp.CheckBox\"\r\n                (onChange)=\"checkAdd($event,temp)\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 addListBtn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)=\"createOrStorePublicAuthority(functionList)\"></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/common-function/common-function.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add {\n  padding: 0px;\n  max-height: 600px;\n  overflow: auto; }\n  .add .addListPage {\n    border-bottom: 1px dashed #ccc; }\n  .add .addListPage .title {\n      padding: 0px;\n      height: 40px;\n      line-height: 40px;\n      text-align: left; }\n  .add .addListPage .title > img {\n        margin-right: 8px; }\n  .add .tit {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n  .add .tit span {\n      cursor: pointer; }\n  .addListBtn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHVpc2Z0ZWNoL3ZpZXcvd29ya2Rlc2svY29tbW9uLWZ1bmN0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXEB1aXNmdGVjaFxcdmlld1xcd29ya2Rlc2tcXGNvbW1vbi1mdW5jdGlvblxcY29tbW9uLWZ1bmN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFIbEI7SUFLUSw4QkFBOEIsRUFBQTtFQUx0QztNQU9ZLFlBQVk7TUFDWixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBO0VBVjVCO1FBWWdCLGlCQUFpQixFQUFBO0VBWmpDO0lBaUJRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0VBbkJ2QjtNQXFCWSxlQUFlLEVBQUE7RUFJM0I7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0B1aXNmdGVjaC92aWV3L3dvcmtkZXNrL2NvbW1vbi1mdW5jdGlvbi9jb21tb24tZnVuY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAuYWRkTGlzdFBhZ2Uge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgID5pbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hZGRMaXN0QnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/common-function/common-function.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CommonFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctionComponent", function() { return CommonFunctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonFunctionComponent = /** @class */ (function () {
    function CommonFunctionComponent(commfunc, httpService) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.checkAddList = [];
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    CommonFunctionComponent.prototype.ngOnInit = function () {
        this.leng = this.inValue.length * 1;
        this.commonFunction();
    };
    //常用功能--李聪
    CommonFunctionComponent.prototype.commonFunction = function () {
        var _this = this;
        var param = { tellerId: this.userId };
        this.httpService.getWebAppSourceList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.functionList = data.webAppSourceList;
                for (var _i = 0, _a = data.webAppSourceList; _i < _a.length; _i++) {
                    var i = _a[_i];
                    for (var _b = 0, _c = i.items; _b < _c.length; _b++) {
                        var item = _c[_b];
                        for (var _d = 0, _e = _this.inValue; _d < _e.length; _d++) {
                            var j = _e[_d];
                            if (item.sourceId == j.authorityId) {
                                item['CheckBox'] = true;
                            }
                        }
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //修改常用功能
    CommonFunctionComponent.prototype.createOrStorePublicAuthority = function (items) {
        var _this = this;
        var arrList = [];
        items.forEach(function (item) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var temp = _a[_i];
                if (temp.CheckBox) {
                    var arr = {
                        authorityId: temp.sourceId,
                        authorityName: temp.description,
                        url: temp.linkUrl
                    };
                    arrList.push(arr);
                }
            }
        });
        var param = {
            userId: this.userId,
            authorityList: arrList
        };
        this.httpService.createOrStorePublicAuthority(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CommonFunctionComponent.prototype.checkAdd = function (item, temp) {
        var _this = this;
        if (item == true) {
            // temp.CheckBox = false;
            // return;
            if (this.leng < 8) {
                this.leng = this.leng + 1;
                this.checkAddList.push(item);
            }
            else {
                temp.CheckBox = false;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: "最多选择八个" });
            }
        }
        else {
            this.leng = this.leng - 1;
            this.checkAddList.forEach(function (tep, i) {
                if (item.taskCategoryId == tep.taskCategoryId) {
                    _this.checkAddList.splice(i, 1);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonFunctionComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommonFunctionComponent.prototype, "outValue", void 0);
    CommonFunctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'common-function',
            template: __webpack_require__(/*! ./common-function.component.html */ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.html"),
            styles: [__webpack_require__(/*! ./common-function.component.scss */ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"]])
    ], CommonFunctionComponent);
    return CommonFunctionComponent;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/workdesk.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/workdesk.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"workdesk\">\r\n\t<div class=\"cont\">\r\n\t\t<!-- 客户查询 -->\r\n\t\t<div class=\"ui-g-12 header-title boxShadow padding-zero header-title-fir\" *ngIf=\"permissionCheck('SID00007_P001')\">\r\n\t\t\t<span class=\"line\" style=\"display:inline-block\"></span>\r\n\t\t\t<div class=\"header-left\">\r\n\t\t\t\t<span class=\"text header-text\">客户快捷查询</span>\r\n\t\t\t\t<div class=\"header-query-more\">\r\n\t\t\t\t\t<p-dropdown [options]=\"customerTypes\" [(ngModel)]=\"customerType\" (onChange)=\"change()\"></p-dropdown>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header-query-less\">\r\n\t\t\t\t\t<p-dropdown disabled [options]=\"customerAttrs\" [(ngModel)]=\"customerAttr\" *ngIf=\"customerType!='01'\"></p-dropdown>\r\n\t\t\t\t\t<p-dropdown [options]=\"customerAttrsTwo\" [(ngModel)]=\"customerAttr\" *ngIf=\"customerType=='01'\"></p-dropdown>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header-query-more header-quert-input\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入搜索内容\" [(ngModel)]=\"customerInt\" (keydown)=\"customKeyDown($event)\">\r\n\t\t\t\t\t<img src=\"../../../../../assets/layout/images/searchMore.png\" (click)=\"queryData()\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"header-right\">\r\n\t\t\t\t<span class=\"text\">客群快捷查询</span>\r\n\t\t\t\t<div class=\"header-query-more\">\r\n\t\t\t\t\t<p-dropdown [options]=\"guests\" [(ngModel)]=\"guest\" (onChange)=\"guestChange()\"></p-dropdown>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header-query-less\">\r\n\t\t\t\t\t<p-dropdown disabled [options]=\"guestAttrs\" [(ngModel)]=\"guestAttr\" *ngIf=\"guest!='00'\"></p-dropdown>\r\n\t\t\t\t\t<p-dropdown [options]=\"guestAttrsTwo\" [(ngModel)]=\"guestAttr\" *ngIf=\"guest=='00'\"></p-dropdown>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header-query-more header-quert-input\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入搜索内容\" [(ngModel)]=\"guestInt\" (keydown)=\"guestKeyDown($event)\">\r\n\t\t\t\t\t<img src=\"../../../../../assets/layout/images/searchMore.png\" (click)=\"guestQuery()\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\" style=\"padding: 0 0;\">\r\n\t\t\t<!-- 主面板 -->\r\n\t\t\t<div class=\"ui-g-9\" style=\"padding: 0 0;margin-top:.5em;display: flex;flex-direction: column;\">\r\n\t\t\t\t<div class=\"remind-header\">\r\n\t\t\t\t\t<span class=\"line-s\" style=\"padding:0!important;\"></span>\r\n\t\t\t\t\t<span (click)='changeTip(0)' [ngClass]=\"{'on':tip=='0'}\">审批事项\r\n\t\t\t\t\t\t<a class='weibiao' *ngIf=\"workblank1&&workblank1!=0\">{{workblank1}}</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"cont\"></span>\r\n\t\t\t\t\t<span (click)='changeTip(1)' [ngClass]=\"{'on':tip=='1'}\">工作任务\r\n\t\t\t\t\t\t<a class='weibiao' *ngIf=\"workblank2&&workblank2!=0\">{{workblank2}}</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"cont\"></span>\r\n\t\t\t\t\t<span (click)='changeTip(2)' [ngClass]=\"{'on':tip=='2'}\">客户联系\r\n\t\t\t\t\t\t<a class='weibiao' *ngIf=\"workblank3&&workblank3!=0\">{{workblank3}}</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- 待办及提醒事项 -->\r\n\t\t\t\t<div *ngIf=\"showFlag\" class=\"ui-g-12 workrove\" (mouseenter)=\"hoverin()\" (mouseleave)=\"hoverout()\">\r\n\t\t\t\t\t<span (click)='hoverleft()' *ngIf=\"hoverType&&testlength!=0\" class=\"icon iconfont leftright\" style=\"left:10px;\">&#xe60a;</span>\r\n\t\t\t\t\t<span (click)='hoverright()' *ngIf=\"hoverType&&testright\" class=\"icon iconfont leftright\" style=\"right:10px;\">&#xe61f;</span>\r\n\r\n\t\t\t\t\t<div *ngIf=\"Tmap1.length>0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\" (click)='ToDoApp(Tmap1[0].littleClassNo,tip)'>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap1[0].littleClassName}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmaplength1}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let itm of Tmap1;let i= index\" (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"font-size:12px;\" title=\"{{itm.createDate}}\">{{itm.handledate}}</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexb}}\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexc\">| {{itm.varMap.bussinessSave.query_Indexc}}</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexa}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"!itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.processName}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-customer\"></span> {{itm.workCreaterName}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"Tmap2.length>0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\" (click)='ToDoApp(Tmap2[0].littleClassNo,tip)'>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap2[0].littleClassName}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmaplength2}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let itm of Tmap2;let i= index\" (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"font-size:12px;\" title=\"{{itm.createDate}}\">{{itm.handledate}}</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexb}}\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexc\">| {{itm.varMap.bussinessSave.query_Indexc}}</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexa}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"!itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.processName}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-customer\"></span> {{itm.workCreaterName}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"Tmap3.length>0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\" (click)='ToDoApp(Tmap3[0].littleClassNo,tip)'>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap3[0].littleClassName}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmaplength3}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let itm of Tmap3;let i= index\" (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"font-size:12px;\" title=\"{{itm.createDate}}\">{{itm.handledate}}</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexb}}\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.bussinessSave.query_Indexc\">| {{itm.varMap.bussinessSave.query_Indexc}}</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!itm.varMap.bussinessSave.query_Indexb\">{{itm.varMap.bussinessSave.query_Indexa}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" *ngIf=\"!itm.varMap.bussinessSave\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.processName}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-customer\"></span> {{itm.workCreaterName}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- 客户联系 -->\r\n\t\t\t\t<div *ngIf=\"showFlagC\" class=\"ui-g-12 workrove\" (mouseenter)=\"hoverin()\" (mouseleave)=\"hoverout()\">\r\n\t\t\t\t\t<span (click)='left()' *ngIf=\"showFlagrLeft\" class=\"icon iconfont leftright\" style=\"left:5px;\">&#xe60a;</span>\r\n\t\t\t\t\t<span (click)='right()' *ngIf=\"showFlagrRight\" class=\"icon iconfont leftright\" style=\"right:5px;\">&#xe61f;</span>\r\n\t\t\t\t\t<div *ngIf=\"Tmap4.length > 0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\">\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap4[0].time}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmap4[0].sysnum}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li [ngClass]=\"{'isout1':itm.chaoshi&&itm.chaoshi=='Y'&&Tmap4[0].time=='今天'}\" *ngFor=\"let itm of Tmap4[0].list;let i= index;\"\r\n\t\t\t\t\t\t\t (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-clock\"></span>\r\n\t\t\t\t\t\t\t\t\t{{itm.date}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.marketingContactTheme | codeValuePie:linkageTheme:','}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span>\r\n\t\t\t\t\t\t\t\t\t{{itm.varMap.dataMap.obCustomercode}} | {{itm.varMap.dataMap.obName}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.remark1}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" style=\"width:20px!important;\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='2'\" class=\"icon iconfont \">&#xe670;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='1'\" class=\"icon iconfont \">&#xe704;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='0'\" class=\"icon iconfont \">&#xe687;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='3'\" class=\"icon iconfont \">&#xe67f;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='4'\" class=\"icon iconfont \">&#xe66a;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='5'\" class=\"icon iconfont \">&#xe69a;</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"Tmap5.length > 0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\">\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap5[0].time}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmap5[0].sysnum}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let itm of Tmap5[0].list;let i= index\" (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-clock\"></span>\r\n\t\t\t\t\t\t\t\t\t{{itm.date}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.marketingContactTheme | codeValuePie:linkageTheme:','}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span> {{itm.varMap.dataMap.obCustomercode}} | {{itm.varMap.dataMap.obName}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.remark1}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" style=\"width:20px!important;\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='2'\" class=\"icon iconfont \">&#xe670;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='1'\" class=\"icon iconfont \">&#xe704;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='0'\" class=\"icon iconfont \">&#xe687;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='3'\" class=\"icon iconfont \">&#xe67f;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='4'\" class=\"icon iconfont \">&#xe66a;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='5'\" class=\"icon iconfont \">&#xe69a;</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"Tmap6.length > 0\" class=\"ui-g-4 deal-div-root\">\r\n\t\t\t\t\t\t<div class=\"title-div1-root\">\r\n\t\t\t\t\t\t\t<div class=\"title-div1-context\">{{Tmap6[0].time}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title-div1-num\">{{Tmap6[0].sysnum}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"context-ul\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let itm of Tmap6[0].list;let i= index\" (click)='doUrgent(itm,i)'>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" [ngClass]=\"{'isout':itm.isTimeout=='1'||itm.isTimeout=='2'}\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-clock\"></span>\r\n\t\t\t\t\t\t\t\t\t{{itm.date}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.marketingContactTheme | codeValuePie:linkageTheme:','}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tags\"></span> {{itm.varMap.dataMap.obCustomercode}} | {{itm.varMap.dataMap.obName}}\r\n\t\t\t\t\t\t\t\t\t<br> {{itm.varMap.dataMap.remark1}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"infomation\" style=\"width:20px!important;\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='2'\" class=\"icon iconfont \">&#xe670;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='1'\" class=\"icon iconfont \">&#xe704;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='0'\" class=\"icon iconfont \">&#xe687;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='3'\" class=\"icon iconfont \">&#xe67f;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='4'\" class=\"icon iconfont \">&#xe66a;</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"itm.varMap.dataMap.marketingContactWay=='5'\" class=\"icon iconfont \">&#xe69a;</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span title=\"紧急\" *ngIf=\"itm.taskUrgent=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">急</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"追回\" *ngIf=\"itm.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">追</span>\r\n\t\t\t\t\t\t\t\t\t<span title=\"被退回\" *ngIf=\"itm.workType=='4'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:5px;font-size:13px!important;\">退</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- 常用功能 -->\r\n\t\t\t\t<div style='background: white;width:100%;margin-top: 8px;'>\r\n\t\t\t\t\t<div style='background: white;width:100%;height:36px;border-bottom:1px solid #d9d9d9;line-height:36px;display:flex;flex-direction:row;font-weight: bold;margin-bottom:10px;align-items: center;'>\r\n\t\t\t\t\t\t<span style=\"padding:0!important;margin-right:11px;\" class=\"line-s\"></span>\r\n\t\t\t\t\t\t<span style='flex:1;color: #333;font-size: 14px;font-weight: bold;'>常用功能</span>\r\n\t\t\t\t\t\t<span (click)=\"commonFunction()\" class=\"icon iconfont tzbicon-setting\" style=\"font-size:16px;cursor: pointer;\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style=\"display:flex;flex-direction:row;background: white;cursor: pointer;\">\r\n\t\t\t\t\t\t<div (click)='nav(item)' style='width:20%;box-sizing:border-box;padding:5px;' *ngFor=\"let item of functionList\">\r\n\t\t\t\t\t\t\t<div class=\"panel-content-block\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-content-block-img\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-content-block-img\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-dealt-list\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-content-block-title\">{{item.authorityName}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div style='width:20%;box-sizing:border-box;padding:5px;' (click)=\"commonFunction()\">\r\n\t\t\t\t\t\t\t<div class=\"panel-content-block\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-content-block-btn\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"color:#ccc!important;\" class=\"icon iconfont tzbicon-jiahao\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- 侧面板 -->\r\n\t\t\t<div class=\"ui-g-3\" style=\"padding:0;height:100%;display: flex;flex-direction: column;padding-left: .5em;padding-top: .5em;\">\r\n\t\t\t\t<div style='flex:1;background: white;margin-bottom:8px;font-size:14px;'>\r\n\t\t\t\t\t<div style='height:36px;border-bottom:1px solid #d9d9d9;line-height:36px;display:flex;flex-direction:row;margin: 0 5px;font-weight: bold;margin-bottom:10px;'>\r\n\t\t\t\t\t\t<span style=\"padding:0!important;margin-right:5px;margin-top:10px\" class=\"line-s\"></span>\r\n\t\t\t\t\t\t<span style='flex:1;color: #333;margin-left:7px;'>提醒事项</span>\r\n\t\t\t\t\t\t<span (click)='toTipPage()' class=\"icon iconfont\" style=\"font-size:16px;cursor: pointer;\">&#xe637;</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul class=\"ul-new\">\r\n\t\t\t\t\t\t<li *ngFor=\"let itm of remindMsg\" (click)='toTipPage()'>\r\n\t\t\t\t\t\t\t<div class=\"ul-icon-new ul-div-new\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon iconfont tzbicon-tip\" style=\"color:#3BCCE7\"></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"margin-left:20px;\" class=\"ul-context-new ul-div-new ul-no-icon-context-new\">{{itm.scheduleName}}</div>\r\n\t\t\t\t\t\t\t<div class=\"ul-right-new ul-div-new\">[{{itm.createDate}}]</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style='flex:1;background: white;font-size:14px;'>\r\n\t\t\t\t\t<div style='height:36px;border-bottom:1px solid #d9d9d9;line-height:36px;display:flex;flex-direction:row;margin: 0 5px;font-weight: bold;margin-bottom:10px;'>\r\n\t\t\t\t\t\t<span style=\"padding:0!important;margin-right:5px;margin-top:10px\" class=\"line-s\"></span>\r\n\t\t\t\t\t\t<span style='flex:1;color: #333;margin-left:7px;'>最新动态</span>\r\n\t\t\t\t\t\t<span (click)='newsbtn()' class=\"icon iconfont \" style=\"font-size:16px;cursor: pointer;\">&#xe637;</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul class=\"ul-new\">\r\n\t\t\t\t\t\t<li *ngFor=\"let pro of newMsgs\" (click)=\"btnClick(pro,'05')\">\r\n\t\t\t\t\t\t\t<div class=\"ul-context-new ul-div-new\">{{pro.sendMsgContent}}</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"daat.indexOf(pro.createdStamp)=='-1'\" class=\"ul-right-new ul-div-new\">[{{pro.createdStamp}}]</div>\r\n\t\t\t\t\t\t\t<div style=\"text-align:center;\" *ngIf=\"daat.indexOf(pro.createdStamp)!='-1'\" class=\"ul-right-new ul-div-new\">[今天]</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--业绩-->\r\n\t\t<div class=\"yj boxShadow\" *ngIf=\"permissionCheck('SID00007_P002')\">\r\n\t\t\t<div class=\"header-title\" style=\"position:relative\">\r\n\t\t\t\t<span class=\"line\"></span>\r\n\t\t\t\t<span class=\"text\" style=\"display:inline-block;width:20px;\">业绩</span>\r\n\t\t\t\t<div style=\"position:absolute;left:46px;top:12px;\">\r\n\t\t\t\t\t<span *ngIf=\"showOrgName\" class=\"orgName\" (click)=\"toPerformanceOrg()\" style=\"cursor:pointer;\">{{neworgName}}</span>\r\n\t\t\t\t\t<span *ngIf=\"showUserName\" class=\"name orgName\" (click)=\"toPerformance()\" style=\"cursor:pointer;\">{{userName}}</span>\r\n\t\t\t\t\t<span class=\"dataTime orgName\">数据日期:{{this.datenew}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"headerTitBtn\">\r\n\t\t\t\t\t<span class=\"span-box-qy\" (click)=\"dataCaliberUpload()\" *ngIf=\"permissionCheck('SID00007_P002_P005')\">\r\n\t\t\t\t\t\t<span class=\"iconfont tzbicon-tijiao\"></span>\r\n\t\t\t\t\t\t<span class=\"span-title1-qy\">数据口径上传</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"span-box-qy\" (click)=\"dataCaliberDownload()\">\r\n\t\t\t\t\t\t<span class=\"iconfont tzbicon-wenhao\"></span>\r\n\t\t\t\t\t\t<span class=\"span-title1-qy\">数据口径</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"span-box-qy\" (click)=\"outthis('1')\" *ngIf=\"permissionCheck('SID00007_P002_P001')\">\r\n\t\t\t\t\t\t<img class=\"span-img-qy\" src=\"../../../../../assets/layout/images/downloadout1.png\" alt=\"\">\r\n\t\t\t\t\t\t<span class=\"span-title1-qy\">导出</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"span-box-qy\" (click)=\"toSet()\" *ngIf=\"permissionCheck('SID00007_P002_P002')\">\r\n\t\t\t\t\t\t<img class=\"span-img-qy\" src=\"../../../../../assets/layout/images/zidingyi1.png\" alt=\"\">\r\n\t\t\t\t\t\t<span class=\"span-title2-qy\">设置</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"span-box-qy\" (click)=\"toHistory()\" *ngIf=\"permissionCheck('SID00007_P002_P003')\">\r\n\t\t\t\t\t\t<img class=\"span-img-qy\" src=\"../../../../../assets/layout/images/historyimg1.png\" alt=\"\">\r\n\t\t\t\t\t\t<span class=\"span-title3-qy\">历史</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<!-- <span class=\"tabelOutIco\" (click)=\"outthis()\" style=\"margin-right:5px;cursor: pointer;\" *ngIf=\"permissionCheck('SID00007_P002_P001')\">导出</span>\r\n\t\t\t\t\t\t<span class=\"tabelBySetIco\" (click)=\"toSet()\" style=\"margin-right:5px;cursor: pointer;\" *ngIf=\"permissionCheck('SID00007_P002_P002')\">设置</span>\r\n\t\t\t\t\t\t<span class=\"tabelHistoryIco\" (click)=\"toHistory()\" style=\"margin-right:5px;cursor: pointer;\" *ngIf=\"permissionCheck('SID00007_P002_P003')\">历史</span> -->\r\n\t\t\t\t\t<!-- <span class=\"tabelMoreIco\" (click)=\"toPerformance()\" style=\"margin-right:5px;cursor: pointer;\">更多</span>\r\n\t\t\t\t\t\t<span class=\"tabelMoreIco\" (click)=\"toPerformanceOrg()\" style=\"margin-right:15px;cursor: pointer;\">更多</span> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<span *ngIf=\"permissionCheck('SID00007_P002_P004')\">\r\n\t\t\t\t\t<span *ngIf=\"morePerson\" class=\"workDesksA\" (click)=\"toPerformance()\">更多</span>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"permissionCheck('SID00007_P002_P004')\">\r\n\t\t\t\t\t<span *ngIf=\"moreAdmin\" class=\"workDesksA\" (click)=\"toPerformanceOrg()\">更多</span>\r\n\t\t\t\t</span>\r\n\t\t\t\t<img src=\"../../../../../assets/layout/images/wodeskMore.png\" class=\"wodeskMoreA\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"bigTable padding-zero-five\">\r\n\t\t\t\t<div class=\"tabletitle\">\r\n\t\t\t\t\t<div class=\"row tabletitle-height1\">\r\n\t\t\t\t\t\t<span class=\"tit\">指&nbsp;&nbsp;&nbsp;标</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t<span class=\"tit\">数&nbsp;&nbsp;&nbsp;值</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t<span class=\"tit\">较上月增量</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t<span class=\"tit\">较年初增量</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t<span class=\"tit\">较去年同期</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- 不要删 -->\r\n\t\t\t\t\t<!-- <div class=\"row RankPage tabletitle-height2\">\r\n\t\t\t\t\t\t\t<span class=\"tit\">排&nbsp;&nbsp;&nbsp;名</span>\r\n\t\t\t\t\t\t\t<p class=\"rankShow\">{{rankName}}</p>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<!-- 不要删 -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"datable\">\r\n\t\t\t\t\t<div class=\"row tabletitle-height1\">\r\n\t\t\t\t\t\t<span class=\"tit\" *ngFor=\"let item of titList\">{{item.indicatorAlias}}({{item.unit}})</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n\t\t\t\t\t\t<span *ngFor=\"let item of dataList\" (click)=\"showLine(item)\" class=\"datable-tr-one shuzhi text-r\">{{item.value}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n\t\t\t\t\t\t<span *ngFor=\"let item of LastMonthList\" class=\"datable-tr-two text-r\">{{item.value}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n\t\t\t\t\t\t<span *ngFor=\"let item of LastYearList\" class=\"datable-tr-one text-r\">{{item.value}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n\t\t\t\t\t\t<span *ngFor=\"let item of LastPeriodList\" class=\"datable-tr-two text-r\">{{item.value}}</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- 不要删 -->\r\n\t\t\t\t\t<!-- <div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t\t<span *ngFor=\"let item of rank\" class=\"datable-tr-one\">{{item.value}}</span>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<!-- 不要删 -->\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 折线图 -->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" header=\"\" modal=\"modal\" title=\"在模态框外任意位置单击鼠标即可关闭折线图\" closable=\"true\" dismissableMask=\"true\">\r\n\t<div class=\"lineChart boxShadow\">\r\n\t\t<!-- <button pButton class=\"cancel_btn\" label=\"关闭\" (click)=\"hideChart()\"></button> -->\r\n\t\t<div echarts [options]=\"FTPOption\"></div>\r\n\t</div>\r\n</p-dialog>\r\n\r\n<div class=\"foot\" *ngIf=\"disUrgentcont\">\r\n\t<p class=\"foot-title\">\r\n\t\t<span style=\"flex:11;\">{{titlefig}}</span>\r\n\t\t<span *ngIf=\"!disUrgent1\" style=\"flex:1; text-align:center;cursor: pointer;\">\r\n\t\t\t<span (click)=\"close()\" class=\"icon iconfont tzbicon-navclose\"></span>\r\n\t\t</span>\r\n\t</p>\r\n\t<div class=\"foot-cont\">\r\n\t\t<p style=\"color:red;\">{{Urgentheader}}</p>\r\n\t\t<div *ngIf=\"workUrgent.length>0\">\r\n\t\t\t<a (click)=\"doUrgent(item)\" *ngFor=\"let item of workUrgent\" title='{{item.createDate}} {{item.bigClassName}} {{item.littleClassName}} {{item.workCreaterName}}'>\r\n\t\t\t\t<span>{{item.createDate}}</span>\r\n\t\t\t\t<span>{{item.bigClassName}}</span>\r\n\t\t\t\t<span>{{item.littleClassName}}</span>\r\n\t\t\t\t<span>{{item.workCreaterName}}</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<p *ngIf=\"disUrgent1\" style=\"text-align:center;color:red; position: absolute;bottom:3px;width:100%;\">任务处理完毕，方能关闭此窗口</p>\r\n\t</div>\r\n</div>\r\n<div id='yinying' *ngIf=\"disUrgent\"></div>\r\n\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n\t\t<button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n\r\n<!-- <div>\r\n\t\t<button (click)='abc()'>交叉销售名单</button>\r\n\t</div> -->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" appendTo=\"body\" modal=\"modal\" [(visible)]=\"orgTreeDisplay\" width=\"800\" [responsive]=\"true\"\r\n [positionTop]=10>\r\n\t<p-header>最新消息</p-header>\r\n\t<!-- <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component> -->\r\n\t<app-new-activity-page [inValue]=\"upDateValue\" (outValue)=\"addCall($event)\"></app-new-activity-page>\r\n</p-dialog>\r\n\r\n<!-- 客户查询 -->\r\n<!-- 查看详情 -->\r\n<p-dialog *ngIf=\"detailDisplay\" [(visible)]=\"detailDisplay\" class=\"my-cust-overf\" modal=\"modal\" [positionTop]=10 (onHide)=\"onHideClose()\"\r\n width=\"800\" appendTo=\"body\" [responsive]=\"true\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-look-customs *ngIf=\"lookDisplay\" (outValue)=\"addCall($event)\" [in-value]=\"inValue\" [key-label]=\"keyValue\" [kind-do]=\"kindDo\"></app-look-customs>\r\n\t<app-customer-list *ngIf=\"listDisplay\" (outValue)=\"addCallList($event)\" [isFuzzyQuery]=\"isFuzzyQuery\" [listValue]=\"listInValue\"></app-customer-list>\r\n</p-dialog>\r\n<!-- 客户群查询 -->\r\n<p-dialog modal=\"modal\" [(visible)]=\"guestDisplay\" class=\"my-cust-overf\" *ngIf=\"guestDisplay\" [positionTop]=10 width=\"800\"\r\n appendTo=\"body\" [responsive]=\"true\">\r\n\r\n\t<p-header>客户群列表</p-header>\r\n\t<app-custom-group-query [quickquery]=\"quickquery\" [guestMsg]=\"guestMsg\"></app-custom-group-query>\r\n</p-dialog>\r\n\r\n<!-- 常用功能维护 -->\r\n<div class=\"common\">\r\n\t<p-dialog *ngIf=\"commonFuntion\" modal=\"modal\" [(visible)]=\"commonFuntion\" [responsive]=\"true\" [positionTop]=10>\r\n\t\t<p-header>常用功能维护</p-header>\r\n\t\t<common-function [inValue]=\"functionAll\" (outValue)=\"commonFuntionCall($event)\"></common-function>\r\n\t</p-dialog>\r\n</div>\r\n\r\n<!-- 数据口径上传 -->\r\n<p-dialog *ngIf=\"uploadDisplay\" [(visible)]=\"uploadDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"true\">\r\n\t<p-fileUpload accept=\".pdf\" invalidFileTypeMessageDetail=\"只能上传pdf\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n\t cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n\t</p-fileUpload>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/workdesk.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/workdesk.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-ms-clear,\n::-ms-reveal {\n  display: none; }\n\n.line-s {\n  width: 3px;\n  height: 17px;\n  display: inline-block;\n  background-color: #19b0c8;\n  margin-right: -5px;\n  padding: 0; }\n\n.workdesk .my-cust-overf {\n  width: 80%; }\n\n.workdesk .header-title-fir {\n  margin-top: 5px; }\n\n.workdesk .header-left,\n.workdesk .header-right {\n  width: 49%;\n  display: block;\n  line-height: 20px; }\n\n.workdesk .header-left span,\n  .workdesk .header-right span {\n    display: inline-block;\n    vertical-align: middle; }\n\n.workdesk .header-left div,\n  .workdesk .header-right div {\n    display: inline-block;\n    margin-left: 15px;\n    text-align: left; }\n\n.workdesk .header-left div.header-query-more,\n    .workdesk .header-right div.header-query-more {\n      width: 20%;\n      position: relative;\n      vertical-align: middle; }\n\n.workdesk .header-left div.header-query-more.header-quert-input,\n      .workdesk .header-right div.header-query-more.header-quert-input {\n        height: 22px;\n        line-height: 22px;\n        border-radius: 5px;\n        font-size: 15px;\n        border: 1px solid #d2d2d2; }\n\n.workdesk .header-left div.header-query-more.header-quert-input input,\n        .workdesk .header-right div.header-query-more.header-quert-input input {\n          height: 16px;\n          line-height: 16px;\n          font-size: 15px;\n          -webkit-appearance: button;\n          outline: none;\n          text-indent: 5px;\n          width: calc(100% - 20px);\n          width: -moz-calc(100% - 20px);\n          text-overflow: ellipsis;\n          border: none; }\n\n.workdesk .header-left div.header-query-more.header-quert-input input:focus,\n          .workdesk .header-right div.header-query-more.header-quert-input input:focus {\n            border: none; }\n\n.workdesk .header-left div.header-query-more.header-quert-input img,\n        .workdesk .header-right div.header-query-more.header-quert-input img {\n          position: absolute;\n          right: 4px;\n          width: 14px;\n          height: 14px;\n          top: 4px; }\n\n.workdesk .header-left div.header-query-less,\n    .workdesk .header-right div.header-query-less {\n      width: 10%;\n      vertical-align: middle; }\n\n.workdesk .header-left div.header-query-less label,\n      .workdesk .header-right div.header-query-less label {\n        width: 20px !important; }\n\n.workdesk .header-right {\n  float: right;\n  text-align: right; }\n\n.workdesk .header-right .header-query-more:last-child {\n    margin-right: 10px; }\n\n.workdesk .ui-dropdown {\n  min-width: 45px !important; }\n\n.workdesk dl {\n  margin-top: 0; }\n\n.workdesk .remind-header {\n  position: relative;\n  height: 38px;\n  line-height: 38px;\n  border-bottom: 1px solid #e8e8e8;\n  background-color: white;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n.workdesk .remind-header span {\n    display: inline-block;\n    line-height: 1.5em;\n    font-size: 14px;\n    font-weight: bold;\n    text-indent: 0;\n    padding: 0.2rem 1rem;\n    color: #484848;\n    position: relative;\n    cursor: pointer; }\n\n.workdesk .remind-header span .weibiao {\n      display: inline-block;\n      background: #ff6600;\n      color: white;\n      width: 28px;\n      height: 20px;\n      line-height: 20px;\n      border-radius: 20px;\n      text-align: center;\n      font-weight: 100;\n      font-size: 12px; }\n\n.workdesk .remind-header span.on {\n      color: #19b0c8 !important; }\n\n.workdesk .remind-header .cont {\n    display: inline-block;\n    width: 1px;\n    height: 10px;\n    background-color: #000;\n    padding: 0 0; }\n\n.workdesk .remind-ui {\n  list-style: none !important;\n  font-size: 14px;\n  color: #999;\n  padding-left: 15px;\n  height: 155px; }\n\n.workdesk .remind-ui li {\n    height: 34px;\n    vertical-align: middle;\n    display: flex;\n    line-height: 34px;\n    justify-content: space-between; }\n\n.workdesk .remind-ui li .remind-text {\n      display: inline-block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      vertical-align: middle;\n      flex: 5;\n      width: 70%; }\n\n.workdesk .remind-ui li .remind-new {\n      display: inline-block;\n      font-size: 12px;\n      color: #fff;\n      flex: 1;\n      max-width: 28px;\n      height: 15px;\n      margin-right: 10px; }\n\n.workdesk .remind-ui li .remind-new em {\n        border-radius: 5px;\n        background: #fa9b61;\n        display: inline-block;\n        line-height: 15px;\n        width: 100%;\n        height: 100%;\n        font-style: normal;\n        text-align: center; }\n\n.workdesk .remind-ui li .remind-time {\n      display: inline-block;\n      color: #29b0c6;\n      vertical-align: middle;\n      min-width: 100px;\n      max-width: 100px; }\n\n.workdesk .remind-ui li .remind-num {\n      display: inline-block;\n      color: #da9b61;\n      flex: 1;\n      text-align: center;\n      max-width: 60px;\n      min-width: 60px; }\n\n.workdesk .remind-ui li .remind-type {\n      display: inline-block;\n      color: #666;\n      flex: 1;\n      min-width: 70px;\n      max-width: 71px;\n      text-align: right;\n      margin-right: 5px; }\n\n.workdesk .remind-cont {\n  margin-top: 5px;\n  height: 260px;\n  padding: 10px; }\n\n.workdesk .remind-cont .remind-left,\n  .workdesk .remind-cont .remind-right {\n    width: 49.7%;\n    display: inline-block; }\n\n.workdesk .remind-cont .remind-right {\n    float: right; }\n\n.workdesk .label-logo {\n  display: inline-block; }\n\n.workdesk .label-cont {\n  height: 140px;\n  display: inline-block; }\n\n.workdesk .label-cont .label {\n    text-align: center;\n    width: 17%;\n    border: 1px solid #d2d2d2;\n    box-shadow: 2px 5px 5px #dbdada;\n    border-left: 16px solid #fff;\n    height: 44px;\n    line-height: 44px;\n    margin: 8px 0px 8px 2%;\n    display: inline-block;\n    font-size: 14px;\n    color: #333; }\n\n.workdesk .label-cont .label:nth-child(1) {\n      margin-left: 0; }\n\n.workdesk .label-cont .label:nth-child(2), .workdesk .label-cont .label:nth-child(6), .workdesk .label-cont .label:nth-child(10) {\n      border-left-color: #36d8ce; }\n\n.workdesk .label-cont .label:nth-child(1), .workdesk .label-cont .label:nth-child(7) {\n      border-left-color: #70d9fb; }\n\n.workdesk .label-cont .label:nth-child(4), .workdesk .label-cont .label:nth-child(8) {\n      border-left-color: #f9a357; }\n\n.workdesk .label-cont .label:nth-child(5), .workdesk .label-cont .label:nth-child(9) {\n      border-left-color: #67daa3; }\n\n.workdesk .label-cont .label:nth-child(3) {\n      border-left-color: #e0b7fd; }\n\n.workdesk .label-cont .label:nth-child(6) {\n      margin-left: 0; }\n\n@media screen and (max-width: 1591px) {\n  .workdesk .label {\n    margin-left: 1.5% !important; } }\n\n@media screen and (max-width: 1491px) {\n  .workdesk .label {\n    margin-left: 1% !important; } }\n\n@media screen and (max-width: 1143px) {\n  .workdesk .label {\n    margin-left: 0.5% !important; } }\n\n.workdesk .header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fbfbfb;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n\n.workdesk .header-title span.icoColor:nth-child(3) {\n    margin-right: 20px; }\n\n.workdesk .header-title span.icoColor:nth-child(4) {\n    position: relative;\n    margin-right: 40px; }\n\n.workdesk .header-title span.icoColor:nth-child(4) .img {\n      position: absolute;\n      left: 8px;\n      top: 5px; }\n\n.workdesk .header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 11px;\n    background-color: #19b0c8; }\n\n@media screen and (max-width: 1280px) {\n    .workdesk .header-title .line {\n      height: 17px; } }\n\n.workdesk .header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #484848;\n    font-weight: bold; }\n\n.workdesk .cont {\n  display: flex;\n  flex-wrap: wrap; }\n\n.workdesk .cont > div {\n    width: calc(100% - 2.5px); }\n\n.workdesk .cont .db {\n    margin-bottom: 8px;\n    background: #fbfbfb;\n    margin-right: 5px;\n    height: 285px;\n    overflow: hidden; }\n\n.workdesk .cont .db .dblist {\n      height: 122px;\n      padding-top: 10px; }\n\n.workdesk .cont .db .dblist .left {\n        position: relative;\n        margin-left: 20px;\n        padding-left: 4%;\n        border-bottom: 1px solid #dadada;\n        padding-bottom: 0; }\n\n.workdesk .cont .db .dblist .left .numSize {\n          display: block;\n          width: 22px;\n          height: 22px;\n          margin-top: 12px;\n          background-color: #f8a900;\n          border-radius: 50%;\n          line-height: 22px;\n          position: absolute;\n          top: 0;\n          color: #fff;\n          font-size: 12px;\n          letter-spacing: 0px;\n          margin-left: 65px; }\n\n.workdesk .cont .db .dblist .left img {\n          width: 70px;\n          margin-left: 8px;\n          margin-top: 12px;\n          margin-bottom: 5px; }\n\n@media screen and (max-width: 1280px) {\n          .workdesk .cont .db .dblist .left .img {\n            width: 66px; } }\n\n.workdesk .cont .db .dblist .left p {\n          text-align: center; }\n\n.workdesk .cont .db .dblist .left span {\n          display: inline-block;\n          width: 60px;\n          height: 20px;\n          text-align: center;\n          line-height: 20px;\n          border-radius: 19px;\n          font-size: 13px;\n          color: #07374d; }\n\n.workdesk .cont .db .dblist .left .index-title-qy {\n          padding-left: 17px;\n          padding-bottom: 5px;\n          cursor: pointer; }\n\n@media screen and (max-width: 1280px) {\n          .workdesk .cont .db .dblist .left .index-title-qy {\n            padding-left: 13px; } }\n\n.workdesk .cont .db .dblist .mid {\n        height: 113px;\n        border-bottom: 1px solid #dadada;\n        padding-top: 21px;\n        line-height: 37px; }\n\n.workdesk .cont .db .dblist .mid div {\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          margin: -7px 0; }\n\n.workdesk .cont .db .dblist .mid div p {\n            margin: 0;\n            flex: 1; }\n\n.workdesk .cont .db .dblist .mid div p .time {\n              font-size: 15px;\n              color: #19b0c8;\n              margin-left: 7%;\n              padding-right: 10px; }\n\n.workdesk .cont .db .dblist .mid div p .text {\n              display: inline-block;\n              width: 20%;\n              overflow: hidden;\n              text-overflow: ellipsis;\n              font-size: 15px;\n              color: #7a7a7a;\n              position: absolute;\n              white-space: nowrap; }\n\n.workdesk .cont .db .dblist .mid div p .text:hover {\n              color: #19b0c8;\n              text-decoration: underline;\n              -webkit-text-decoration-color: #19b0c8;\n                      text-decoration-color: #19b0c8;\n              cursor: pointer; }\n\n@media screen and (max-width: 1280px) {\n      .workdesk .cont .db .dblist {\n        height: 112px; } }\n\n@media screen and (max-width: 1280px) {\n    .workdesk .cont .db {\n      height: 265px; } }\n\n.workdesk .cont .kh {\n    margin-top: 5px;\n    margin-right: 5px; }\n\n.workdesk .cont .yw {\n    margin-top: 5px;\n    margin-right: 5px; }\n\n.workdesk .cont .dk {\n    margin-top: 5px; }\n\n.workdesk .cont .workrove {\n    width: 100%;\n    background-color: white;\n    padding-top: 10px;\n    height: 330px;\n    position: relative; }\n\n.workdesk .yj {\n  margin-bottom: 8px;\n  margin-top: 8px; }\n\n.workdesk .yj .yjtit {\n    display: flex;\n    flex-wrap: nowrap; }\n\n.workdesk .yj .headerTitBtn {\n    display: flex;\n    flex-wrap: wrap;\n    height: 42px; }\n\n.workdesk .yj .bigTable {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 200px;\n    padding: 0 !important; }\n\n.workdesk .yj .bigTable .tabletitle {\n      float: left;\n      width: 108px;\n      display: flex;\n      flex-direction: column; }\n\n.workdesk .yj .bigTable .tabletitle .row {\n        background-color: #19b0c8;\n        border-bottom: 1px solid #fff;\n        border-right: 1px solid #fff;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        height: 36px; }\n\n.workdesk .yj .bigTable .tabletitle .row span {\n          display: inline-block;\n          width: 100%;\n          border-left: none; }\n\n.workdesk .yj .bigTable .tabletitle .row .tit {\n          color: white;\n          text-align: center;\n          font-size: 14px; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage {\n        position: relative; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage:hover {\n          cursor: pointer; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage:hover span :hover {\n            cursor: pointer; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage:hover span :hover .rankShow {\n              display: block; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage:hover .rankShow {\n            display: block; }\n\n.workdesk .yj .bigTable .tabletitle .RankPage .rankShow {\n          left: 0;\n          top: -13px;\n          position: absolute;\n          display: none;\n          width: 40px;\n          height: 40px;\n          line-height: 40px;\n          background-color: #ccc;\n          text-align: center; }\n\n.workdesk .yj .bigTable .datable {\n      float: left;\n      width: 99%;\n      display: flex;\n      flex-direction: column;\n      overflow-x: scroll;\n      border-left: 1px solid #fff; }\n\n.workdesk .yj .bigTable .datable .row {\n        text-align: left;\n        white-space: nowrap;\n        min-width: 100%;\n        height: 36px; }\n\n.workdesk .yj .bigTable .datable .row:nth-child() {\n          background: #fafafa; }\n\n.workdesk .yj .bigTable .datable .row:nth-child(1) {\n          background: #d2f1ef; }\n\n.workdesk .yj .bigTable .datable .row span {\n          line-height: 36px;\n          width: 140px;\n          padding-left: 5px;\n          padding-right: 5px;\n          display: inline-block;\n          text-align: right;\n          border-right: 1px solid #fff; }\n\n@media screen and (max-width: 1280px) {\n          .workdesk .yj .bigTable .datable .row span {\n            border-right: 2px solid #fff; } }\n\n.workdesk .yj .bigTable .datable .row .tit {\n          height: 36px;\n          font-size: 14px;\n          background: #d2f1ef;\n          color: #005574; }\n\n.workdesk .yj .bigTable .datable .row .shuzhi:hover {\n          color: #19b0c8;\n          text-decoration: underline;\n          cursor: pointer; }\n\n.workdesk .yj .bigTable .tabletitle-height2 .text-r {\n      text-align: right !important; }\n\n.workdesk .yj .bigTable .datable-tr-one {\n      line-height: 36px !important;\n      background-color: #fafafa; }\n\n.workdesk .yj .bigTable .datable-tr-two {\n      line-height: 36px !important;\n      background: #ebebeb; }\n\n@media screen and (max-width: 1280px) {\n      .workdesk .yj .bigTable .datable-tr-two {\n        background: #e1e1e1; } }\n\n.workdesk .lineChart {\n  width: 70%;\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  z-index: 888; }\n\n:host/deep/ .boxShadow {\n  background: none; }\n\n.foot {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 400px;\n  height: 300px;\n  border-radius: 0px;\n  background: white;\n  z-index: 99999; }\n\n.foot-title {\n  width: calc(100% - 25px);\n  background: #00738a;\n  color: white;\n  margin: 0 0;\n  padding: 5px 0 5px 25px;\n  display: flex;\n  flex-direction: row; }\n\n.foot-cont {\n  width: calc(100% - 16px);\n  margin: 0 auto;\n  position: relative;\n  height: 273px; }\n\n.foot-cont a {\n  display: flex;\n  flex-direction: row;\n  width: 95%;\n  margin: 20px auto;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #000;\n  color: #484848; }\n\n.foot-cont a span {\n  flex: 1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center; }\n\n.foot-cont a:hover {\n  color: #19b0c8;\n  cursor: pointer; }\n\n.foot-cont p {\n  margin: 10px 5px;\n  font-weight: bolder; }\n\n#yinying {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #58575c;\n  z-index: 9999;\n  opacity: .8; }\n\n.label-all {\n  display: flex; }\n\n.label-all .label-cont {\n    flex: 1; }\n\n.label-all .label-logo {\n    width: 220px; }\n\n.label-all .label-logo img {\n      width: 214px;\n      margin-top: 12px;\n      margin-right: 7px; }\n\n@media screen and (max-width: 1280px) {\n    .label-all .label-logo {\n      display: none; } }\n\n.empty {\n  display: block;\n  width: 237px !important;\n  height: 83px;\n  position: relative;\n  left: 10%;\n  bottom: 10px;\n  background-image: url('empty.gif');\n  background-repeat: no-repeat; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.workDesks {\n  font-size: 14px;\n  color: #19b0c8;\n  line-height: 20px;\n  padding-left: 13px;\n  cursor: pointer; }\n\n.workDesksA {\n  font-size: 14px;\n  color: #19b0c8;\n  line-height: 20px;\n  padding-left: 13px;\n  margin-top: 4px;\n  border-left: 1px solid #dadada;\n  cursor: pointer; }\n\n.searchDiv {\n  width: 18%;\n  margin-right: 16px;\n  padding: 0px;\n  border-radius: 15px; }\n\n.wodeskMore {\n  margin-right: 20px;\n  margin-left: 8px;\n  cursor: pointer; }\n\n.wodeskMoreA {\n  margin-right: 20px;\n  margin-left: 8px;\n  margin-top: 4px;\n  cursor: pointer; }\n\n.searchInput {\n  display: block;\n  height: 23px;\n  width: 100% !important;\n  border-radius: 14px;\n  border: 1px solid #dcdcdc;\n  text-indent: 1em;\n  outline: none;\n  font-size: 13px;\n  color: #c4c4c4;\n  background-color: #fafafa; }\n\n.searchImg {\n  float: right;\n  margin-top: -21px;\n  margin-right: 7px;\n  width: 15px;\n  cursor: pointer; }\n\n.orgName {\n  font-size: 14px;\n  color: #19b0c8;\n  margin-left: 16px; }\n\n@media screen and (max-width: 1280px) {\n  .orgName {\n    font-size: 13px; } }\n\n.span-box-qy {\n  line-height: 42px;\n  margin-right: 10px;\n  cursor: pointer; }\n\n.span-box-qy .span-img-qy {\n    width: 20px;\n    vertical-align: middle; }\n\n.span-box-qy .span-title1-qy {\n    color: #19b0c8;\n    vertical-align: middle; }\n\n.span-box-qy .span-title2-qy {\n    color: #19b0c8;\n    vertical-align: middle; }\n\n.span-box-qy .span-title3-qy {\n    color: #19b0c8;\n    vertical-align: middle; }\n\n.span-box-qy :hover {\n  text-decoration: underline; }\n\n:host /deep/ .ui-dialog.ui-shadow {\n  width: 500px !important;\n  height: auto !important; }\n\n:host /deep/ .common .ui-dialog .ui-dialog-content {\n  height: 90% !important;\n  overflow: visible !important;\n  min-height: 0px !important; }\n\n:host /deep/ .common .ui-dialog.ui-shadow {\n  width: 950px !important; }\n\n:host /deep/ .ui-dropdown {\n  min-width: 90px !important; }\n\n:host /deep/ .header-query-less .ui-dropdown {\n  min-width: 45px !important; }\n\n:host /deep/ .header-query-less .ui-dropdown-label {\n  width: 50px !important; }\n\n:host /deep/ .ui-dropdown-label {\n  overflow: visible !important; }\n\n.remind-ui li:nth-child(2n+1) {\n  background: #efefef; }\n\n.iconfont {\n  color: #19b0c8; }\n\n.more-title {\n  display: inline-block;\n  color: #004257; }\n\n.more-title .active {\n    color: #34cfe6; }\n\n.tip {\n  float: right;\n  color: #ff6600; }\n\n.tip .more-title:after {\n    content: ''; }\n\n.leftright {\n  font-size: 25px;\n  color: #ccc;\n  position: absolute;\n  top: calc(50% - 15px);\n  background-color: #000;\n  opacity: .3;\n  cursor: pointer; }\n\n.deal-div-root {\n  border-right: 1px dashed #d9d9d9;\n  padding: 5px 0;\n  height: 100%; }\n\n.deal-div-root:last-child {\n    border-right: none; }\n\n.deal-div-root .title-div1-root {\n    text-align: center;\n    cursor: pointer; }\n\n.deal-div-root .title-div1-root .title-div1-context {\n      font-size: 16px;\n      color: #333; }\n\n.deal-div-root .title-div1-root .title-div1-context.active {\n        color: #34cfe6; }\n\n.deal-div-root .title-div1-root .title-div1-num {\n      padding-top: 5px;\n      color: #3BCCE7;\n      font-size: 14px; }\n\n.deal-div-root .title-div1-root .title-div1-num:before, .deal-div-root .title-div1-root .title-div1-num:after {\n        content: ' ';\n        display: inline-block;\n        width: 10%;\n        height: 2px;\n        background-color: #3BCCE7;\n        position: relative;\n        top: -4px; }\n\n.deal-div-root .context-ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 15px; }\n\n.deal-div-root .context-ul .isout1 {\n      color: red !important; }\n\n.deal-div-root .context-ul > li {\n      border-bottom: 1px solid #d9d9d9;\n      padding: 15px 0;\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-between; }\n\n.deal-div-root .context-ul > li:last-child {\n        border-bottom: none; }\n\n.deal-div-root .context-ul > li .isout {\n        color: red !important; }\n\n.deal-div-root .context-ul > li .infomation {\n        display: inline-block;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap; }\n\n.deal-div-root .context-ul > li .infomation:nth-child(1) {\n          text-align: left;\n          width: 70px; }\n\n.deal-div-root .context-ul > li .infomation:nth-child(2) {\n          flex: 1;\n          text-align: left; }\n\n.deal-div-root .context-ul > li .infomation:nth-child(3) {\n          text-align: right;\n          width: 80px; }\n\n.deal-div-root .context-ul > li .infomation:nth-child(4) {\n          padding: 3px;\n          text-align: right; }\n\n.deal-div-root .context-ul > li .infomation .iconfont {\n          font-size: 14px;\n          color: #424242; }\n\n.deal-div-root .context-ul > li .infomation .imgOrFont .img_no_display {\n          display: none; }\n\n.deal-div-root .context-ul > li .infomation .imgOrFont:hover .img_no_display {\n          display: inline-block;\n          color: #0094D2;\n          cursor: pointer;\n          font-weight: bold;\n          padding: 0px !important; }\n\n.deal-div-root .context-ul > li .infomation .imgOrFont:hover .img_display {\n          display: none; }\n\n.deal-div-root .context-ul > li:hover {\n        color: #19b0c8;\n        cursor: pointer; }\n\n.deal-div-root .context-ul > li:hover .infomation .iconfont {\n          color: #19b0c8; }\n\n.deal-div-root .context-ul > li .remark-div {\n        color: #333;\n        padding: 10px 0;\n        font-size: 13px;\n        font-weight: 600;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n\n.deal-div-root .context-ul > li.active-li .remark-div {\n        color: #3BCCE7; }\n\n.deal-div-root .context-ul > li .other-div {\n        font-size: 12px;\n        color: #828282; }\n\n.deal-div-root .context-ul > li .other-div span {\n          display: inline-block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n\n.deal-div-root .context-ul > li .other-div span i.iconfont {\n            font-size: 12px;\n            padding-right: 5px; }\n\n.deal-div-root .context-ul > li .other-div .time-span {\n          display: inline-block;\n          padding-right: 8px; }\n\n.deal-div-root .context-ul > li .other-div .user-name-span {\n          width: 30%;\n          float: right; }\n\n.panel-content-block {\n  border: 1px solid #d9d9d9;\n  height: 70px;\n  width: 100%;\n  position: relative; }\n\n.panel-content-block:hover {\n    background-color: #E3FBFF; }\n\n.panel-content-block .panel-content-block-img,\n  .panel-content-block .panel-content-block-title,\n  .panel-content-block .panel-content-block-btn {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto; }\n\n.panel-content-block .panel-content-block-icon {\n    position: absolute;\n    right: 3px;\n    top: 2px;\n    color: #d81e06; }\n\n.panel-content-block .panel-content-block-btn {\n    width: 50px;\n    height: 50px; }\n\n.panel-content-block .panel-content-block-btn .iconfont {\n      color: #e8e8e8;\n      font-size: 46px; }\n\n.panel-content-block .panel-content-block-img {\n    margin-top: 2px;\n    width: 30px;\n    height: 30px; }\n\n.panel-content-block .panel-content-block-img .iconfont {\n      color: #3BCCE7;\n      font-size: 26px; }\n\n.panel-content-block .panel-content-block-title {\n    margin-top: 40px;\n    width: 100%;\n    font-size: 13px;\n    height: 30px;\n    text-align: center; }\n\nul.ul-new {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5px;\n  color: #333; }\n\nul.ul-new > li {\n    border-bottom: 1px solid #d9d9d9;\n    position: relative;\n    height: 35px;\n    line-height: 13px; }\n\nul.ul-new > li:hover {\n      color: #19b0c8;\n      cursor: pointer; }\n\nul.ul-new > li .ul-div-new {\n      display: inline-block;\n      position: absolute;\n      top: 10px; }\n\nul.ul-new > li .ul-icon-new {\n      left: 2px; }\n\nul.ul-new > li .ul-icon-new span {\n        font-size: 16px; }\n\nul.ul-new > li .ul-context-new {\n      left: 24px;\n      width: calc(100% - 140px);\n      text-align: left;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      font-weight: 500;\n      font-size: 14px; }\n\nul.ul-new > li .ul-context-new.ul-no-icon-context-new {\n        left: 5px;\n        width: calc(100% - 140px); }\n\nul.ul-new > li .ul-right-new {\n      right: 5px;\n      width: 90px;\n      font-size: 12px !important; }\n\n@media screen and (max-width: 1281px) {\n  .deal-div-root .context-ul > li {\n    padding: 15px 0 !important; } }\n\n@media screen and (min-width: 1281px) {\n  .bigTable {\n    height: 240px !important; }\n    .bigTable .tabletitle .row {\n      height: 45px !important; }\n    .bigTable .datable .row {\n      height: 45px !important; }\n      .bigTable .datable .row span {\n        line-height: 45px !important; }\n      .bigTable .datable .row .tit {\n        height: 45px !important; }\n    .bigTable .datable-tr-one {\n      line-height: 45px !important; }\n    .bigTable .datable-tr-two {\n      line-height: 45px !important; }\n  .context-ul > li .infomation:nth-child(2) {\n    margin-left: 40px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHVpc2Z0ZWNoL3ZpZXcvd29ya2Rlc2svRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxcQHVpc2Z0ZWNoXFx2aWV3XFx3b3JrZGVza1xcd29ya2Rlc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFDSixFQUFBOztBQUNBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0VBS1EsZUFBZSxFQUFBOztBQUx2Qjs7RUFTUSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQVh6Qjs7SUFhWSxxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUE7O0FBZGxDOztJQWlCWSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQW5CNUI7O01BcUJnQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLHNCQUFzQixFQUFBOztBQXZCdEM7O1FBeUJvQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YseUJBQXlCLEVBQUE7O0FBN0I3Qzs7VUErQndCLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsZUFBZTtVQUNmLDBCQUEwQjtVQUMxQixhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLHdCQUF3QjtVQUV4Qiw2QkFBNkI7VUFDN0IsdUJBQXVCO1VBQ3ZCLFlBQVksRUFBQTs7QUF6Q3BDOztZQTJDNEIsWUFBWSxFQUFBOztBQTNDeEM7O1VBK0N3QixrQkFBa0I7VUFDbEIsVUFBVTtVQUNWLFdBQVc7VUFDWCxZQUFZO1VBQ1osUUFBUSxFQUFBOztBQW5EaEM7O01Bd0RnQixVQUFVO01BQ1Ysc0JBQXNCLEVBQUE7O0FBekR0Qzs7UUEyRG9CLHNCQUFzQixFQUFBOztBQTNEMUM7RUFp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WixpQkFBaUIsRUFBQTs7QUFWekI7TUFZWSxjQUFhO01BQ2IsZUFBZSxFQUFBOztBQWIzQjtNQW1CWSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFNBQVMsRUFBQTs7QUFyQnJCO01Bd0JZLFNBQVMsRUFBQTs7QUF4QnJCO1FBMEJnQixlQUFlLEVBQUE7O0FBMUIvQjtNQThCWSxVQUFVO01BQ1YseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBOztBQXJDM0I7UUF1Q2dCLFNBQVM7UUFDVCx5QkFBeUIsRUFBQTs7QUF4Q3pDO01BNENZLFVBQVU7TUFDVixXQUFXO01BQ1gsMEJBQXlCLEVBQUE7O0FBSXJDO0VBQ0k7SUFHUSwwQkFBMEIsRUFBQSxFQUM3Qjs7QUFHVDtFQUNJO0lBQ0ksd0JBQXVCLEVBQUE7SUFEM0I7TUFJWSx1QkFBc0IsRUFBQTtJQUpsQztNQVNZLHVCQUFzQixFQUFBO01BVGxDO1FBV2dCLDRCQUEyQixFQUFBO01BWDNDO1FBY2dCLHVCQUFzQixFQUFBO0lBZHRDO01BbUJRLDRCQUE0QixFQUFBO0lBbkJwQztNQXNCUSw0QkFBNEIsRUFBQTtFQUdwQztJQUlnQiw0QkFBMkIsRUFBQSxFQUM5QiIsImZpbGUiOiJzcmMvYXBwL0B1aXNmdGVjaC92aWV3L3dvcmtkZXNrL3dvcmtkZXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotbXMtY2xlYXIsXHJcbiA6Oi1tcy1yZXZlYWwge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbi5saW5lLXN7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgIG1hcmdpbi1yaWdodDogLTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLndvcmtkZXNrIHtcclxuICAgIC5teS1jdXN0LW92ZXJmIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci10aXRsZS1maXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbGVmdCxcclxuICAgIC5oZWFkZXItcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgJi5oZWFkZXItcXVlcnktbW9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICYuaGVhZGVyLXF1ZXJ0LWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaGVhZGVyLXF1ZXJ5LWxlc3Mge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItcmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAuaGVhZGVyLXF1ZXJ5LW1vcmU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZHJvcGRvd24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZGx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgfVxyXG4gICAgLnJlbWluZC1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAud2VpYmlhb3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjY2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgfSBcclxuICAgICAgICAgICAmLm9ue1xyXG4gICAgICAgICAgICAgICBjb2xvcjogIzE5YjBjOCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlbWluZC11aSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTVweDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzRweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAucmVtaW5kLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVtaW5kLW5ldyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYTliNjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZW1pbmQtdGltZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjBjNjtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVtaW5kLW51bSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RhOWI2MTtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlbWluZC10eXBlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzFweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVtaW5kLWNvbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLnJlbWluZC1sZWZ0LFxyXG4gICAgICAgIC5yZW1pbmQtcmlnaHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDkuNyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVtaW5kLXJpZ2h0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sYWJlbC1sb2dve1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5sYWJlbC1jb250IHtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggNXB4ICNkYmRhZGE7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDBweCA4cHggMiU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDYpLFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxMCkge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMzNmQ4Y2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSksXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNzBkOWZiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpLFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2Y5YTM1NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg1KSxcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOSkge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM2N2RhYTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMGI3ZmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDoxNTkxcHgpIHtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOjE0OTFweCkge1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOjExNDNweCkge1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBoZWlnaHQ6IDQ0cHg7ICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYSAhaW1wb3J0YW50OyAvLyBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgc3Bhbi5pY29Db2xvcjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4uaWNvQ29sb3I6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyAvLyBkaXNwbGF5OiBibG9jazsgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBzcGFuIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIuNXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRiIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgLmRibGlzdCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMnB4OyAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7IC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLm51bVNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YTkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8gLmVtcHR5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAyMzdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDgzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL2VtcHR5LmdpZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4OyAvLyBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDczNzRkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgtdGl0bGUtcXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4LXRpdGxlLXF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5taWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEzcHg7IC8vIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOyAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5kYmxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmRiIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjY1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmtoIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnl3IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRrIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud29ya3JvdmV7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC55aiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgLnlqdGl0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJUaXRCdG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJpZ1RhYmxlIHtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDsgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAudGFibGV0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDhweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAvLyBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTsgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLlJhbmtQYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiA6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmtTaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua1Nob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmtTaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgLy8gaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDJmMWVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMmYxZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNTU3NDsgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2h1emhpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYmxldGl0bGUtaGVpZ2h0MiB7XHJcbiAgICAgICAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgICAgICAgIC50ZXh0LXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGFibGUtdHItb25lIHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRhYmxlLXRyLXR3byB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgICAgICAgICAgLmRhdGFibGUtdHItdHdvIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmVDaGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIHotaW5kZXg6IDg4ODtcclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAuYm94U2hhZG93IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmZvb3R7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvLyByaWdodDogNTAlO1xyXG4gICAgLy8gYm90dG9tOiA1MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlICw1MCUpO1xyXG4gICAgei1pbmRleDo5OTk5OTtcclxufVxyXG4uZm9vdC10aXRsZXtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDczOGE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAyNXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uZm9vdC1jb250e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6MjczcHhcclxufVxyXG4uZm9vdC1jb250IGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGNvbG9yOiM0ODQ4NDg7XHJcbn1cclxuLmZvb3QtY29udCBhIHNwYW57XHJcbiAgICBmbGV4OjE7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290LWNvbnQgYTpob3ZlcntcclxuICAgIGNvbG9yOiMxOWIwYzg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvb3QtY29udCBwe1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXJcclxufVxyXG4jeWlueWluZ3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTg1NzVjO1xyXG4gICAgei1pbmRleDo5OTk5O1xyXG4gICAgb3BhY2l0eTogLjhcclxufVxyXG4ubGFiZWwtYWxse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sYWJlbC1jb250e1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtbG9nb3tcclxuICAgICAgICB3aWR0aDoyMjBweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAubGFiZWwtbG9nb3tcclxuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZW1wdHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjM3cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2xheW91dC9pbWFnZXMvZW1wdHkuZ2lmJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4vL+ihqOagvOWtl+avjeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLndvcmtEZXNrcyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4OyAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53b3JrRGVza3NBIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2hEaXYge1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi53b2Rlc2tNb3JlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53b2Rlc2tNb3JlQSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICB0ZXh0LWluZGVudDogMWVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuLnNlYXJjaEltZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcmdOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7IC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGxlZnQ6IC00OSU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAub3JnTmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA6aG9zdCAvZGVlcC8gLnVpLWRpYWxvZy1jb250ZW50IHtcclxuLy8gICAgIGhlaWdodDogNTYwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4uc3Bhbi1ib3gtcXkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuc3Bhbi1pbWctcXkge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAuc3Bhbi10aXRsZTEtcXkge1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAuc3Bhbi10aXRsZTItcXkge1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAuc3Bhbi10aXRsZTMtcXkge1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGFuLWJveC1xeSA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50XHJcbn1cclxuOmhvc3QgL2RlZXAvLmNvbW1vbiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLy5jb21tb24gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDk1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZHJvcGRvd24ge1xyXG4gICAgbWluLXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5oZWFkZXItcXVlcnktbGVzcyAudWktZHJvcGRvd24ge1xyXG4gICAgbWluLXdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5oZWFkZXItcXVlcnktbGVzcyAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC51aS1kcm9wZG93bi1sYWJlbCB7IFxyXG4gICAgb3ZlcmZsb3c6dmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5yZW1pbmQtdWkgbGk6bnRoLWNoaWxkKDJuKzEpe1xyXG4gICAgYmFja2dyb3VuZDojZWZlZmVmXHJcbn1cclxuLmljb25mb250IHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcblxyXG4ubW9yZS10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwNDI1NztcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMzRjZmU2O1xyXG4gICAgfVxyXG59XHJcbi50aXB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjojZmY2NjAwO1xyXG4gICAgLm1vcmUtdGl0bGV7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuLmxlZnRyaWdodHtcclxuICAgIGZvbnQtc2l6ZToyNXB4OyBcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZWFsLWRpdi1yb290IHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZDlkOWQ5O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtZGl2MS1yb290IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC50aXRsZS1kaXYxLWNvbnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0Y2ZlNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUtZGl2MS1udW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzNCQ0NFNztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0JDQ0U3O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRleHQtdWwge1xyXG4gICAgICAgIC5pc291dDF7XHJcbiAgICAgICAgICAgIGNvbG9yOnJlZCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgPmxpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pc291dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJlZCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm9tYXRpb257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH0mOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH0mOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbmZvbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nT3JGb250IHtcclxuICAgICAgICAgICAgICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzE5YjBjODtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIC5pbmZvbWF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uZm9udHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzE5YjBjODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlbWFyay1kaXYge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZS1saSB7XHJcbiAgICAgICAgICAgICAgICAucmVtYXJrLWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzQkNDRTc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLWRpdiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaS5pY29uZm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aW1lLXNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1uYW1lLXNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gLy8gLnBhbmVsLWNvbnRlbnQtYmxvY2stcm93IHtcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC5wYW5lbC1jb250ZW50LWJsb2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgICAgIGhlaWdodDogNzBweDsgLy8gbWFyZ2luOiAwIDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGQkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29udGVudC1ibG9jay1pbWcsXHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQtYmxvY2stdGl0bGUsXHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQtYmxvY2stYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQtYmxvY2staWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDgxZTA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29udGVudC1ibG9jay1idG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAuaWNvbmZvbnQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlOGU4ZTg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQtYmxvY2staW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAuaWNvbmZvbnQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzQkNDRTc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQtYmxvY2stdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bC51bC1uZXcge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgPmxpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWQ5ZDk7IC8vIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzE5YjBjODtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC51bC1kaXYtbmV3IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudWwtaWNvbi1uZXcge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51bC1jb250ZXh0LW5ldyB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICYudWwtbm8taWNvbi1jb250ZXh0LW5ldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVsLXJpZ2h0LW5ldyB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgxcHgpIHtcclxuICAgICAgICAuZGVhbC1kaXYtcm9vdCB7XHJcbiAgICAgICAgLmNvbnRleHQtdWwge1xyXG4gICAgICAgICAgICA+bGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICB9ICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODFweCkge1xyXG4gICAgICAgIC5iaWdUYWJsZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAudGFibGV0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRhYmxlIHtcclxuICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRhYmxlLXRyLW9uZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRhYmxlLXRyLXR3byB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZXh0LXVsIHtcclxuICAgICAgICAgICAgPmxpIHtcclxuICAgICAgICAgICAgICAgIC5pbmZvbWF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/workdesk.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/workdesk.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkdeskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkdeskPage", function() { return WorkdeskPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_workdesk_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/workdesk.bean */ "./src/app/@uisftech/view/workdesk/bean/workdesk.bean.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value */ "./src/app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var WorkdeskPage = /** @class */ (function () {
    function WorkdeskPage(router, httpService, commfunc, confirmationService, decimalPipe) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.decimalPipe = decimalPipe;
        this.disUrgent = false; //遮罩
        this.disUrgent1 = false;
        this.disUrgentcont = false; //提示信息
        this.workUrgent = [];
        this.approveUrgent = [];
        this.workblackData = [];
        this.disPlayNone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //控制模态框消失
        this.lengthFour = [0, 1, 2, 3, 4];
        this.tip = "0";
        this.morePerson = false;
        this.moreAdmin = false;
        this.msgs = [];
        this.date = new Date();
        this.display = false;
        this.list = []; //接收后台数据
        //表头
        this.titList = [];
        this.table1 = [];
        this.table2 = [];
        this.showFlag = true; // 工作任务和审批事项显示
        this.showFlagC = false; // 客户联系显示
        this.showFlagrRight = false; // 客户联系右边按钮
        this.showFlagrLeft = false; // 客户联系左边按钮
        this.page = 1;
        this.Tmap4 = [];
        this.Tmap5 = [];
        this.Tmap6 = [];
        //当前数据
        this.dataList = [];
        //较上月增量数据
        this.LastMonthList = [];
        //较年初增量数据
        this.LastYearList = [];
        //较去年同期增量
        this.LastPeriodList = [];
        //排名数据
        this.rank = [];
        this.workTaskSummaryBean = new _bean_workdesk_bean__WEBPACK_IMPORTED_MODULE_2__["WorkTaskSummaryBean"](); //待办事项
        this.depositTable = []; //当日存款明细
        this.loanTable = []; //当日贷款明细
        this.orgTreeDisplay = false; //模态框是否展示
        this.mesg = {};
        this.ch = {};
        this.cusrtomerTypes = [{ label: '客户号', value: '' }];
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["tableMessage"];
        this.quickquery = true;
        this.matter = '1';
        this.customerType = "00";
        this.deskCustomerQuery = new _bean_workdesk_bean__WEBPACK_IMPORTED_MODULE_2__["DeskCustomerQuery"]();
        this.customerTypes = [
            { label: '客户号', value: '00' },
            { label: '客户名称', value: '01' },
            { label: '身份证号码', value: '02' },
            { label: '卡号', value: '03' },
            { label: '积分卡号', value: '04' },
        ];
        this.customerAttr = 'at01';
        this.customerAttrs = [
            {
                label: '等于', value: 'at01'
            }
        ];
        this.customerAttrsTwo = [
            {
                label: '等于', value: 'at01'
            },
            {
                label: '模糊', value: 'at02'
            }
        ];
        this.guest = '00';
        this.guests = [
            { label: '客户群名称', value: '00' },
            { label: '客户群号', value: '01' },
        ];
        this.guestAttr = 'at02';
        this.guestDisplay = false;
        this.guestAttrsTwo = [
            {
                label: '模糊', value: 'at02'
            }, {
                label: '等于', value: 'at01'
            }
        ];
        this.guestAttrs = [
            {
                label: '等于', value: 'at01'
            }
        ];
        this.approvalMatters = []; //审批
        this.workTasks = []; //工作任务
        this.detailDisplay = false;
        this.listDisplay = false;
        this.lookDisplay = false;
        this.arr = [];
        this.checkss = false;
        this.waits = false;
        this.reminds = false;
        this.news = false;
        this.showOrgName = false;
        this.showUserName = false;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.outTitList = []; //导出表头
        this.uploadDisplay = false;
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_UPLOAD"] + "?fileUrl=/dataCaliber&fileName=" + encodeURI('数据口径') + '.pdf';
        this.linkageTheme = _pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__["LinkageTheme"]; // 联系主题
        this.commonFuntion = false;
        this.idData = []; //按钮map集合
        this.authorityList = [
            { authorityId: 'SID00001_P020_P002_P001', authorityName: '客户开立', url: "[\"/pages/tzb/custom/custom-marketing/cus-open/production\"]" },
            { authorityId: 'SID00001_P020_P002_P003', authorityName: '主联系人调整', url: "[\"/pages/tzb/custom/custom-marketing/cus-manage/cus-do-apply\"]" },
            { authorityId: 'SID00001_P023', authorityName: '客户高级搜索', url: "[\"/pages/tzb/custom/custom-information/advanced-search/add-search\"]" },
            { authorityId: 'SID00002_P025_P001', authorityName: '创建客户群', url: "[\"/pages/tzb/custom/custom-group/create-custom-group\"]" },
            { authorityId: 'SID00002_P025_P002', authorityName: '客群高级搜索', url: "[\"/pages/tzb/custom/custom-group/custom-group-query2\"]" }
        ];
        this.newMsgs = []; //最新动态
        this.remindMsg = []; //提醒
        this.hoverType = true;
        this.testlength = 0;
        this.Tmap1 = [];
        this.Tmap2 = [];
        this.Tmap3 = [];
        this.tmapArray = [];
        this.testright = true;
        this.workblank1 = 0;
        this.workblank2 = 0;
        this.workblank3 = 0;
        this.loandata = [];
        this.stopset = '100';
        this.arrs = [];
        this.getIdData();
        this.codeValues();
        this.indicatorsType = this.code['indicatorsType'];
        this.TodoListFunctionList = this.code['TodoListFunctionList'];
        this.ScheduleTypeId1 = this.code.ScheduleTypeId1;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
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
            // console.log(this.extParam)
        }
        this.scheduleList = [
            {
                eventType: '工作任务',
                eventName: '联系xxxxx,于明天完成',
                eventDatails: 'bdfbasfsaf',
                ReminderDate: '提醒日期',
                expirationDate: '',
                eventState: '已处理'
            }
        ];
        var time = "2017-09-09 12:25:30";
        time = moment__WEBPACK_IMPORTED_MODULE_3__(time).format("YYYY年MM月DD日HH时mm分ss秒");
        //业绩首页
        // this.depositQuery();
        // this.loanQuery();
        this.queryMessageList(); //最新动态
        this.queryCopReminderTaskSum(); //提醒事项
        this.backHistory();
        this.queryAuthority();
    }
    WorkdeskPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Urgent(); //查询代办超时
        this.nodegroup(); //查询待办事项数量徽标
        this.nowTime = this.transDateN();
        // 是否为管理岗
        if (this.extParam.managePermission == 'Y') {
            this.showOrgName = true;
            this.showUserName = false;
            this.moreAdmin = true;
            this.morePerson = false;
            // 工作台任务展示
            this.tip = 0;
            this.loanApprCountByTypeQry();
        }
        else {
            this.showOrgName = true;
            this.showUserName = true;
            this.moreAdmin = false;
            this.morePerson = true;
            // 工作台任务展示
            this.tip = 1;
            this.loanScheduleCountByTypeQry();
        }
        // if (this.extParam.orgId == 'T0000') {
        // 	this.extParam.orgId = '0000';
        // }
        this.httpService.queryOrgById({ orgId: this.extParam.orgId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.neworgName = data.orgName;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.preSet();
        //首页业绩查询
        this.httpService.queryPerformanceFirstPage({ inputParams: {} }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var temp1_1 = [], temp2_1 = [], temp3_1 = [], temp4_1 = [];
                var tempObj_1;
                data.outputParams.titleList.forEach(function (item) {
                    for (var key in data.outputParams.currDataMap) {
                        if (item.indicatorId == key) {
                            tempObj_1 = { value: data.outputParams.currDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
                            temp1_1.push(tempObj_1);
                            break;
                        }
                    }
                    for (var key in data.outputParams.lastMonthDataMap) {
                        if (item.indicatorId == key) {
                            tempObj_1 = { value: data.outputParams.lastMonthDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
                            temp2_1.push(tempObj_1);
                            break;
                        }
                    }
                    for (var key in data.outputParams.toyearBeginDataMap) {
                        if (item.indicatorId == key) {
                            tempObj_1 = { value: data.outputParams.toyearBeginDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
                            temp3_1.push(tempObj_1);
                            break;
                        }
                    }
                    for (var key in data.outputParams.lastYearNowDataMap) {
                        if (item.indicatorId == key) {
                            tempObj_1 = { value: data.outputParams.lastYearNowDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
                            temp4_1.push(tempObj_1);
                            break;
                        }
                    }
                    _this.indicatorsType.forEach(function (element) {
                        if (item.unit == element.value) {
                            item.unit = element.label;
                        }
                    });
                });
                _this.titList = data.outputParams.titleList; //表头指标
                _this.dataList = temp1_1; //数值
                _this.LastMonthList = temp2_1; //较上月增量
                _this.LastYearList = temp3_1; //较年初增量
                _this.LastPeriodList = temp4_1; //较去年同期
                _this.datenew = data.outputParams.dataDt; //数据日期
                // console.log(this.dataList);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.table1 = [
            { columna: '数值' },
            { columna: '较去年增量' },
            { columna: '较年初增量' },
            { columna: '较去年同期' },
            { columna: '排名' },
        ];
        //表头排序
        this.titList.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.sales = [
            { title: '数值', lastYearSale: '51%' },
            { title: '较上月增量', lastYearSale: '51%' },
            { title: '较年初增量', lastYearSale: '51%' },
            { title: '较去年同期增量', lastYearSale: '51%' },
            { title: '排名', lastYearSale: '51%' },
        ];
    };
    WorkdeskPage.prototype.queryMessageList = function () {
        var _this = this;
        var par = {
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
            sendChannel: "6",
            eventId: 'wf0000002',
            status: '0'
        };
        var ob = this.httpService.queryMessageList(par);
        ob.subscribe(function (data) {
            _this.daat = _this.commfunc.transDateN(_this.date);
            var a = data.messageList.splice(0, 5);
            a.forEach(function (el) {
                if (el.createdStamp) {
                    el.createdStamp = el.createdStamp.slice(0, 10);
                }
            });
            _this.newMsgs = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](a);
        });
    };
    //提醒事项
    WorkdeskPage.prototype.queryCopReminderTaskSum = function () {
        var _this = this;
        var ob = this.httpService.queryCopReminderTaskSum({});
        ob.subscribe(function (data) {
            _this.remindMsg = data.resultList.splice(0, 5);
        });
    };
    WorkdeskPage.prototype.hoverleft = function () {
        this.testlength = this.testlength - 1;
        this.dataquery(this.testlength, this.tip);
    };
    WorkdeskPage.prototype.hoverright = function () {
        this.testlength = this.testlength + 1;
        this.dataquery(this.testlength, this.tip);
    };
    WorkdeskPage.prototype.dataquery = function (i, k) {
        var _this = this;
        var arr = [];
        var arr1 = [];
        var a = i * 3;
        var b = a + 1;
        var c = a + 2;
        if (a < this.testarr.length) {
            arr.push(this.testarr[a]);
        }
        else {
            this.Tmap1 = [];
        }
        if (b < this.testarr.length) {
            arr.push(this.testarr[b]);
        }
        else {
            this.Tmap2 = [];
        }
        if (c < this.testarr.length) {
            arr.push(this.testarr[c]);
        }
        else {
            this.Tmap3 = [];
        }
        if (a == this.testarr.length || b == this.testarr.length || c == this.testarr.length) {
            this.testright = false;
        }
        else {
            this.testright = true;
        }
        var _loop_1 = function (j) {
            var pram = {
                taskPoolFlag: '3',
                pageRows: 5,
                curPage: 1,
                nodeType: k,
                itemType: arr[j].bigClassNo,
                itemNode: arr[j].littleClassNo,
                userId: JSON.parse(this_1.commfunc.getSessionData('commonHeader')).userId,
            };
            setTimeout(function () {
                _this.httpService.bpmQueryUnDoTaskList(pram).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // data.pageData.result.forEach(e => {
                        // 	e.createDate = e.createDate.slice(0, 10);
                        // });
                        var time = _this.commfunc._getNowDate();
                        console.log(_this.date, 'aa');
                        data.pageData.result.forEach(function (el) {
                            // if(el['createDate']==this.date){
                            // }
                            el['handledate'] = el.createDate.slice(5, 10);
                        });
                        if (j == 0) {
                            _this.Tmap1 = data.pageData.result;
                            console.log(_this.Tmap1, 'yyy');
                            _this.Tmaplength1 = data.pageData.totalRows;
                        }
                        else if (j == 1) {
                            _this.Tmap2 = data.pageData.result;
                            _this.Tmaplength2 = data.pageData.totalRows;
                        }
                        else if (j == 2) {
                            _this.Tmap3 = data.pageData.result;
                            _this.Tmaplength3 = data.pageData.totalRows;
                        }
                    }
                });
            });
        };
        var this_1 = this;
        for (var j = 0; j < arr.length; j++) {
            _loop_1(j);
        }
    };
    // 点击事项小类表头去待办
    WorkdeskPage.prototype.ToDoApp = function (e, k) {
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        for (var t = 0; t < this.ulData.length; t++) {
            for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                if (this.ulData[t].childpage[j].littleClassNo == e) {
                    var session = window.sessionStorage;
                    var a = t + '&' + j;
                    var b = JSON.stringify(this.ulData[t].childpage[j]);
                    session.setItem('workliuCode', a);
                    session.setItem('workliuData', b);
                    break;
                }
            }
        }
        if (k == '0') {
            this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page"], { queryParams: { flag: 1, totalNum: 1 } });
        }
        else if (k == '1') {
            this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/btn-page2/workdesk-page"], { queryParams: { flag: 1, totalNum: 2 } });
        }
    };
    //  处理客户联系数据数据
    WorkdeskPage.prototype.custcode = function () {
        var _this = this;
        var pram = {
            taskPoolFlag: '3',
            pageRows: 10000,
            curPage: 1,
            itemType: 'KHLX',
            itemNode: "0308_01",
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
        };
        this.httpService.bpmQueryUnDoTaskList(pram).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.pageData.result;
                // console.log(list)
                // 处理好的数据
                var array = [
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                    { time: '', list: [], sysnum: 0 },
                ];
                // 7天内的数据
                var qiArray = [];
                // 获取当前时间
                var time = _this.commfunc._getNowDate();
                var q = Number(time) + 7;
                // 处理时间格式
                // let list1 = list.sort((A, B) => B.varMap.dataMap.fromDate - A.varMap.dataMap.fromDate);
                // console.log(list1)
                var chaoshi = [];
                var zhengchang = [];
                var allcszc = [];
                for (var k = 0; k < list.length; k++) {
                    var e = list[k];
                    e['date'] = _this.commfunc.transDateNew(e.varMap.dataMap.fromDate);
                    e.createDate = e.varMap.dataMap.fromDate.slice(0, 10);
                    // 获取数据
                    if (e.date <= q) {
                        if (e.date == time || e.date < time) {
                            var alllength = chaoshi.length + zhengchang.length;
                            if (alllength < 4) {
                                array[0].time = '今天';
                                if (e.date < time) {
                                    e['chaoshi'] = 'Y';
                                    var a = e.date.slice(0, 4);
                                    var b = e.date.slice(4, 6);
                                    var c = e.date.slice(6, 8);
                                    e.date = b + '-' + c;
                                    chaoshi.push(e);
                                }
                                else {
                                    e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                                    zhengchang.push(e);
                                }
                            }
                            array[0].sysnum = array[0].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 1)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[1].time = e.createDate + " " + day;
                            if (array[1].list.length < 4) {
                                array[1].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[1].sysnum = array[1].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 2)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[2].time = e.createDate + " " + day;
                            if (array[2].list.length < 4) {
                                array[2].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[2].sysnum = array[2].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 3)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[3].time = e.createDate + " " + day;
                            if (array[3].list.length < 4) {
                                array[3].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[3].sysnum = array[3].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 4)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[4].time = e.createDate + " " + day;
                            if (array[4].list.length < 4) {
                                array[4].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[4].sysnum = array[4].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 5)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[5].time = e.createDate + " " + day;
                            if (array[5].list.length < 4) {
                                array[5].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[5].sysnum = array[5].sysnum + 1;
                        }
                        else if (e.date == (Number(time) + 6)) {
                            var day = _this.commfunc.getDay(e.createDate);
                            array[6].time = e.createDate + " " + day;
                            if (array[6].list.length < 4) {
                                array[6].list.push(e);
                            }
                            e.date = e.varMap.dataMap.fromDate.slice(11, 16);
                            array[6].sysnum = array[6].sysnum + 1;
                        }
                    }
                }
                allcszc = chaoshi.concat(zhengchang);
                array[0].list = array[0].list.concat(allcszc);
                // 删除空数据
                for (var i = array.length - 1; i >= 0; i--) {
                    if (!array[i].time) {
                        array.splice(i, 1);
                    }
                }
                console.log("处理好的数据");
                console.log(array);
                _this.tmapArray = array;
                var sum_1 = 0;
                _this.tmapArray.forEach(function (element) {
                    sum_1 += element.sysnum;
                });
                // 计算7天内的数据
                if (sum_1 >= 100) {
                    _this.workblank3 = '99+';
                }
                else {
                    _this.workblank3 = sum_1;
                }
                // 左右移动按钮显示
                if (_this.tmapArray.length > 3) {
                    _this.showFlagrRight = true;
                }
                else {
                    _this.showFlagrRight = false;
                }
                _this.Tmap4 = [];
                _this.Tmap5 = [];
                _this.Tmap6 = [];
                if (_this.tmapArray.length > 0) {
                    _this.Tmap4.push(_this.tmapArray[0]);
                }
                if (_this.tmapArray.length > 1) {
                    _this.Tmap5.push(_this.tmapArray[1]);
                }
                if (_this.tmapArray.length > 2) {
                    _this.Tmap6.push(_this.tmapArray[2]);
                }
                if (0 < _this.tmapArray.length && _this.tmapArray.length < 4) {
                    _this.allpage = 1;
                }
                else if (3 < _this.tmapArray.length && _this.tmapArray.length < 7) {
                    _this.allpage = 2;
                }
                else {
                    _this.allpage = 3;
                }
            }
        });
        this.page = 1;
    };
    // 客户联系左划按钮
    WorkdeskPage.prototype.left = function () {
        this.page--;
        this.Tmap4 = [];
        this.Tmap5 = [];
        this.Tmap6 = [];
        if (this.page == 2) {
            this.showFlagrRight = true;
            this.showFlagrLeft = true;
            this.Tmap4.push(this.tmapArray[3]);
            this.Tmap5.push(this.tmapArray[4]);
            this.Tmap6.push(this.tmapArray[5]);
        }
        else if (this.page == 1) {
            this.showFlagrRight = true;
            this.showFlagrLeft = false;
            this.Tmap4.push(this.tmapArray[0]);
            this.Tmap5.push(this.tmapArray[1]);
            this.Tmap6.push(this.tmapArray[2]);
        }
    };
    // 客户联系右划按钮
    WorkdeskPage.prototype.right = function () {
        // 第几页
        this.page++;
        this.Tmap4 = [];
        this.Tmap5 = [];
        this.Tmap6 = [];
        if (this.page == 2) {
            if (this.allpage == 3) {
                this.showFlagrRight = true;
                this.showFlagrLeft = true;
                this.Tmap4.push(this.tmapArray[3]);
                this.Tmap5.push(this.tmapArray[4]);
                this.Tmap6.push(this.tmapArray[5]);
            }
            else {
                this.showFlagrRight = false;
                this.showFlagrLeft = true;
                if (this.tmapArray.length == 6) {
                    this.Tmap4.push(this.tmapArray[3]);
                    this.Tmap5.push(this.tmapArray[4]);
                    this.Tmap6.push(this.tmapArray[5]);
                }
                else if (this.tmapArray.length == 5) {
                    this.Tmap4.push(this.tmapArray[3]);
                    this.Tmap5.push(this.tmapArray[4]);
                }
                else {
                    this.Tmap4.push(this.tmapArray[3]);
                }
            }
        }
        else if (this.page == 3) {
            this.showFlagrRight = false;
            this.showFlagrLeft = true;
            this.Tmap4.push(this.tmapArray[6]);
        }
    };
    WorkdeskPage.prototype.hoverin = function () {
        this.hoverType = true;
    };
    WorkdeskPage.prototype.hoverout = function () {
        this.hoverType = true;
    };
    // 工作台表头点击
    WorkdeskPage.prototype.changeTip = function (vaule) {
        this.tip = vaule;
        if (vaule == '0') {
            this.showFlag = true;
            this.showFlagC = false;
            this.loanApprCountByTypeQry();
        }
        else if (vaule == '1') {
            this.showFlag = true;
            this.showFlagC = false;
            this.loanScheduleCountByTypeQry();
        }
        else if (vaule == '2') {
            this.showFlag = false;
            this.showFlagC = true;
            this.custcode();
        }
    };
    //信贷-工作任务
    WorkdeskPage.prototype.loanScheduleCountByTypeQry = function () {
        this.workTasks = [];
        // let ob = this.httpService.loanScheduleCountByTypeQry({});
        // ob.subscribe(data => {
        // 	if (data.resultList && data.resultList.length > 0) {
        // 		data.resultList.forEach(element => {
        // 			this.workTasks.push(element)
        // 		});
        // 	}
        this.CountByTypeQry(1, this.workTasks);
        // })
    };
    //信贷-审批事项
    WorkdeskPage.prototype.loanApprCountByTypeQry = function () {
        this.approvalMatters = [];
        // let ob = this.httpService.loanApprCountByTypeQry({});
        // ob.subscribe(data => {
        // 	if (!data.resultList) return;
        // 	data.resultList.forEach(item => {
        // 		let tempObj = {};
        // 		tempObj['bigClassName'] = item.scheduleName;
        // 		tempObj['littleClassName'] = item.scheduleName;
        // 		tempObj['sysCount'] = item.countNum;
        // 		tempObj['url'] = item.url;
        // 		this.approvalMatters.push(tempObj)
        // 	});
        // })
        this.CountByTypeQry(0, this.approvalMatters);
    };
    WorkdeskPage.prototype.CountByTypeQry = function (i, arr) {
        var _this = this;
        var param = {
            taskPoolFlag: '3',
            pageRows: 10000,
            curPage: 1,
            nodeType: i,
            itemCtrl: '1',
            itemType: 'KHLX',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
        };
        this.httpService.bpmQueryUnDoTaskCountGroup(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.testarr = data.pageData.result;
                _this.testlength = 0;
                _this.approve(_this.testarr);
                setTimeout(function () {
                    _this.dataquery(_this.testlength, _this.tip);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    WorkdeskPage.prototype.approve = function (list) {
        var approvelist = [];
        var _loop_2 = function (i) {
            var element_1 = list[i];
            var filterResult = approvelist.filter(function (x) { return x.bigClassNo == element_1['bigClassNo']; });
            var exist = filterResult && filterResult.length;
            var temp = null;
            if (exist) {
                temp = {
                    littleClassName: element_1['littleClassName'],
                    littleClassNo: element_1['littleClassNo'],
                    sysCount: element_1['sysCount'],
                    timeOutCount: element_1['timeOutCount'],
                    urgentCount: element_1['urgentCount'],
                    systemCode: element_1['systemCode']
                };
                filterResult[0].childpage.push(temp);
                filterResult[0].bigsysCount = filterResult[0].bigsysCount + element_1['sysCount'];
            }
            else {
                temp = {
                    bigClassName: element_1['bigClassName'],
                    bigClassNo: element_1['bigClassNo'],
                    bigsysCount: element_1['sysCount'],
                    bigtimeOutCount: element_1['timeOutCount'],
                    bigurgentCount: element_1['urgentCount'],
                    childpage: [
                        {
                            littleClassName: element_1['littleClassName'],
                            littleClassNo: element_1['littleClassNo'],
                            sysCount: element_1['sysCount'],
                            timeOutCount: element_1['timeOutCount'],
                            urgentCount: element_1['urgentCount'],
                            systemCode: element_1['systemCode']
                        }
                    ]
                };
                approvelist.push(temp);
            }
        };
        for (var i = 0; i < list.length; i++) {
            _loop_2(i);
        }
        this.ulData = approvelist;
    };
    WorkdeskPage.prototype.doUrgent = function (item, i) {
        item['markFlag'] = '1';
        this.stopset = '100';
        if (i == 0 || i) {
            for (var j = 0; j < this.TodoListFunctionList.length; j++) {
                if (this.TodoListFunctionList[j].value == item['littleClassNo']) {
                    this.stopset = this.TodoListFunctionList[j].label;
                    break;
                }
            }
            if (i > this.stopset) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '当前事项过多，请先进入事项列表处理较早推送的事项!' });
                return;
            }
        }
        if (item.varMap.dataMap && item.varMap.dataMap['custNo'] && item.varMap.dataMap['custName']) {
            var custdata = {
                custdata: item.varMap.dataMap['custNo'],
                taskId: item.taskId,
                custname: item.varMap.dataMap['custName'],
                bigClassNo: item.bigClassNo
            };
            this.commfunc.setSessionDataCH('custdata', JSON.stringify(custdata));
        }
        this.disUrgent = false; //紧急超时遮罩
        this.commfunc.toDisposeSchedule(item);
    };
    WorkdeskPage.prototype.doUrgent1 = function (item) {
        var _this = this;
        //信贷工作任务处理
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        //审批事项中的信贷
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var userId = user.userId;
        var targetId = user.targetId;
        var params = {
            userId: this.userId,
            sysCode: '122',
            casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
            serverName: 'ywsn',
            validateType: '0',
            extraInfo: 'ywsn',
            encryptType: 'HS256',
        };
        this.httpService.tokenApply(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var token = data.tokenCode;
                if (targetId == '101010') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_HTTP_XIN"];
                }
                else if (targetId == '101011') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_HTTP_XIN_C"];
                }
                var url = _this.HTTPIPDress + 'plats/FrontController?urlParam=' + item.url + '&suid=' + userId + '&token=' + token;
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    WorkdeskPage.prototype.nodegroup = function () {
        var _this = this;
        var pram = {
            taskPoolFlag: '3',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId
        };
        this.httpService.bpmQueryUnDoNodeTypeCountGroup(pram).subscribe(function (data) {
            data.pageData.result.forEach(function (el) {
                if (el.nodeType == 'approve') {
                    if (el.sysCount < 100) {
                        _this.workblank1 = el.sysCount;
                    }
                    else {
                        _this.workblank1 = '99+';
                    }
                }
                else if (el.nodeType == 'task') {
                    if (el.sysCount < 100) {
                        _this.workblank2 = el.sysCount;
                    }
                    else {
                        _this.workblank2 = '99+';
                    }
                }
            });
        });
        this.custcode();
    };
    WorkdeskPage.prototype.Urgent = function () {
        var _this = this;
        // 初始查询任务超时
        // disUrgent遮罩
        // disUrgentcont提示信息
        var Taskparm = {
            taskPoolFlag: '3',
            timeOutFlag: '2',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId
        };
        this.httpService.bpmQueryUnDoTaskList(Taskparm).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageData.result.length > 0) {
                    _this.disUrgentcont = true;
                    _this.disUrgent1 = true;
                    _this.disUrgent = true; //紧急超时遮罩
                    _this.titlefig = '紧急任务严重超时提醒';
                    _this.Urgentheader = '您好，你有' + data.pageData.totalRows + '条任务严重超时未处理';
                    _this.workUrgent = data.pageData.result.splice(0, 4);
                }
                else {
                    var key = {
                        taskPoolFlag: '3',
                        timeOutFlag: '3',
                        userId: JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId
                    };
                    _this.httpService.bpmQueryUnDoTaskList(key).subscribe(function (data) {
                        if (data.pageData.result.length > 0) {
                            _this.disUrgentcont = true;
                            _this.disUrgent1 = false;
                            _this.disUrgent = false;
                            _this.titlefig = '紧急任务超时提醒';
                            _this.Urgentheader = '您好，你有' + data.pageData.totalRows + '条任务超时未处理';
                            _this.workUrgent = data.pageData.result.splice(0, 4);
                        }
                        else {
                            var key1 = {
                                taskPoolFlag: '3',
                                timeOutFlag: '3',
                                userId: JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId
                            };
                            _this.httpService.bpmQueryUnDoTaskList(key1).subscribe(function (data) {
                                if (data.pageData.result.length > 0) {
                                    _this.disUrgentcont = true;
                                    _this.disUrgent1 = false;
                                    _this.disUrgent = false;
                                    _this.titlefig = '紧急任务提醒';
                                    _this.Urgentheader = '您好，你有' + data.pageData.totalRows + '条紧急任务未处理';
                                    _this.workUrgent = data.pageData.result.splice(0, 4);
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    WorkdeskPage.prototype.close = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('.foot').hide();
    };
    // tempSort(list: Array<any>) {
    // 	for (let temp of list) {
    // 		if (temp.unit == '02' && temp.value != '-') {
    // 			temp.value = this.decimalPipe.transform(temp.value, '1.2-2');
    // 		}
    // 		if (temp.unit == '01' && temp.value != '-') {
    // 			temp.value = this.decimalPipe.transform(temp.value, '1.0');
    // 		}
    // 	}
    // 	return list;
    // }
    WorkdeskPage.prototype.handleChange = function (event) {
        if (event.index == '0') {
            this.matter = '1';
        }
        if (event.index == '1') {
            this.matter = '2';
        }
        if (event.index == '2') {
            this.matter = '3';
        }
    };
    WorkdeskPage.prototype.goTother = function () {
        this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/backlog-check-detail/whole"]);
    };
    WorkdeskPage.prototype.preSet = function () {
        // 初始化--2017.12.14
        var session = window.sessionStorage;
        var data = session.getItem('commonHeader');
        if (!data) {
            this.router.navigate(["/login"]);
            return;
        }
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (!this.mesg) {
        }
        this.ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
    };
    //获取码值
    //码值
    WorkdeskPage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //客户修改--当查询模式为客户名查询，增加模糊查询
    WorkdeskPage.prototype.change = function () {
        this.customerAttr = 'at01';
        this.customerInt = undefined;
    };
    //点击X，关闭模态框
    WorkdeskPage.prototype.onHideClose = function () {
        this.listDisplay = false;
        this.lookDisplay = false;
        this.detailDisplay = false;
        this.orgTreeDisplay = false;
        this.guestDisplay = false;
        document.body.style.overflow = 'auto';
    };
    //自定义功能更新
    WorkdeskPage.prototype.dataUp = function () {
        this.httpService;
    };
    //客户查询
    WorkdeskPage.prototype.queryData = function () {
        var listInValue = {};
        var type = 'at01';
        //初始化
        this.deskCustomerQuery.custNo = undefined;
        this.deskCustomerQuery.custName = undefined;
        this.deskCustomerQuery.idType = undefined;
        this.deskCustomerQuery.idNo = undefined;
        this.deskCustomerQuery.cardNo = undefined;
        this.deskCustomerQuery.deptAcctNo = undefined;
        this.deskCustomerQuery.custMajorEmpNo = undefined;
        this.deskCustomerQuery.custMajorOrgId = undefined;
        var reg = /^[0-9]*$/;
        var reg1 = /^[A-Za-z0-9]+$/;
        //// console.log(this.customerType)
        //客户号查询
        if (this.customerType == '00') {
            if (this.customerInt == null || this.customerInt == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户号！' });
                return;
            }
            if (this.customerInt != null && this.customerInt != '') {
                if (!reg.test(this.customerInt)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户号！' });
                    return;
                }
                if (this.customerInt.length != 10) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入10位数字的客户号！' });
                    return;
                }
            }
            this.deskCustomerQuery.custNo = this.customerInt;
        }
        //客户名查询
        if (this.customerType == '01') {
            if (this.customerInt == null || this.customerInt == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户名！' });
                return;
            }
            if (reg.test(this.customerInt)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户名称！' });
                return;
            }
            this.deskCustomerQuery.custName = this.customerInt;
        }
        //身份证号验证
        if (this.customerType == '02') {
            if (this.customerInt == null || this.customerInt == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入身份证号！' });
                return;
            }
            if (this.customerInt != null && this.customerInt != '') {
                var reg1_1 = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
                if (!reg1_1.test(this.customerInt)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的身份证号！' });
                    return;
                }
            }
            this.deskCustomerQuery.idType = '0';
            this.deskCustomerQuery.idNo = this.customerInt;
        }
        //卡号验证
        if (this.customerType == '03') {
            if (this.customerInt == null || this.customerInt == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入银行卡号！' });
                return;
            }
            if (this.customerInt != null && this.customerInt != '') {
                if (this.customerInt.length < 6) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的银行卡号！' });
                    return;
                }
            }
            this.deskCustomerQuery.cardNo = this.customerInt;
        }
        //积分卡号验证
        if (this.customerType == '04') {
            if (this.customerInt == null || this.customerInt == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入积分卡号！' });
                return;
            }
            this.deskCustomerQuery.deptAcctNo = this.customerInt;
        }
        if (this.customerAttr == 'at02') {
            this.isFuzzyQuery = '1';
        }
        else {
            this.isFuzzyQuery = '';
        }
        this.listInValue = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.deskCustomerQuery);
        this.keyValue = this.arr;
        this.addUpHeader = '客户列表';
        this.detailDisplay = true;
        this.listDisplay = true;
        this.lookDisplay = false;
        this.kindDo = 'look';
        document.body.style.overflow = 'hidden';
    };
    //输入回车调用方法
    WorkdeskPage.prototype.customKeyDown = function () {
        if (window.event['keyCode'] == 13) {
            this.queryData();
        }
    };
    WorkdeskPage.prototype.guestKeyDown = function () {
        if (window.event['keyCode'] == 13) {
            this.guestQuery();
        }
    };
    //客群条件修改
    WorkdeskPage.prototype.guestChange = function () {
        this.guestAttr = 'at01';
        this.guestInt = undefined;
    };
    //客群查询
    WorkdeskPage.prototype.guestQuery = function () {
        if (this.guest == '00') {
            if (this.guestInt == '' || this.guestInt == undefined) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客群号！' });
                return;
            }
        }
        if (this.guest == '01') {
            if (this.guestInt == '' || this.guestInt == undefined) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客群名！' });
                return;
            }
        }
        this.guestMsg = {
            dataType: this.guest,
            dataMsg: this.guestInt,
        };
        this.guestDisplay = true;
        document.body.style.overflow = 'hidden';
    };
    // 提醒事项更多
    WorkdeskPage.prototype.toTipPage = function () {
        this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page3/tip-page'], { queryParams: { flag: '1', totalNum: '5' } });
    };
    WorkdeskPage.prototype.btnClick = function (i, ind) {
        var _this = this;
        //判断是最新动态
        if (ind == '05') {
            this.confirmationService.confirm({
                message: i.sendMsgContent,
                accept: function () {
                    //条件
                    var param = {
                        messageId: i.messageId,
                        isRead: '1',
                        feedbackResult: '0'
                    };
                    _this.httpService.messageFeedback(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.queryMessageList();
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                    });
                }
            });
        }
    };
    // 导出
    WorkdeskPage.prototype.outthis = function (i) {
        var _this = this;
        var param = {
            inputParams: {
                exportType: i
            }
        };
        this.httpService.exportPerformance(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fileName = data.outputParams.fileName;
                _this.filePath = data.outputParams.fileUrl;
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(_this.fileName) + "&fileUrl=" + _this.filePath);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    // 点击查看按钮
    WorkdeskPage.prototype.check = function () {
        this.router.navigate(["pages/tzb/custom/reminder-do/backlog"]);
    };
    WorkdeskPage.prototype.toWork = function () {
        this.router.navigate(["pages/tzb/custom/reminder-do/work-detail"]);
    };
    // 点击查看按钮第二种
    WorkdeskPage.prototype.lookover = function () {
        this.router.navigate(["pages/tzb/custom/reminder-do/backlog-second"]);
    };
    // 查看全部按钮
    WorkdeskPage.prototype.checkAll = function () {
        this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/backlog-check-detail/whole"]);
    };
    // 点击搜索按钮
    // search () {
    // 	this.router.navigate(['/pages/tzb/custom/reminder-do/search-btn/all-page']);
    // }
    // 业绩详情展示
    WorkdeskPage.prototype.toPerformance = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-details", { titList: JSON.stringify(this.titList) }]);
    };
    // 管理更多
    WorkdeskPage.prototype.toPerformanceOrg = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-details-org"]);
    };
    // 自定义设置
    WorkdeskPage.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    // 历史业绩
    WorkdeskPage.prototype.toHistory = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-history"]);
    };
    WorkdeskPage.prototype.cundai = function () {
        this.router.navigate(["pages/tzb/other/loan-deposit-change"]);
    };
    // 展示曲线图
    WorkdeskPage.prototype.showLine = function (item) {
        var _this = this;
        // console.log(item);
        var thiss = this;
        var title = '';
        var key = '';
        var xData = [];
        var vData = [];
        var unit = '';
        var decimalPlaces = '';
        var param = {
            inputParams: {
                indicatorIdList: [item.indicatorId]
            }
        };
        this.httpService.queryLatelyPerformance(param).subscribe(function (data) {
            _this.lineTU = data.outputParams.currDataList;
            if (_this.lineTU && _this.lineTU.length != 0) {
                unit = data.outputParams.titleList[0].unit;
                decimalPlaces = data.outputParams.titleList[0].decimalPlaces;
                title = item.indicatorAlias;
                key = item.indicatorId;
                _this.lineTU.forEach(function (element, i) {
                    xData.push(element.dataDt);
                    vData.push(element[key]);
                });
                _this.indicatorsType.forEach(function (element2) {
                    if (unit == element2.value) {
                        unit = element2.label;
                    }
                });
            }
            // console.log(vData);
            var sortList = vData.map(Number).sort(function (x, y) {
                return x - y;
            });
            var min = sortList[0];
            var max = sortList[sortList.length - 1];
            //配置
            _this.FTPOption = {
                title: {
                    text: title,
                    // subtext:"副标题",
                    x: "center"
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    type: 'scroll',
                    orient: "vertical",
                    right: 100,
                    data: [title]
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataZoom: {
                            yAxisIndex: "none"
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ["line", "bar"] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    name: "月份（月）",
                    type: "category",
                    boundaryGap: 'dataMin',
                    data: xData,
                    axisLabel: {
                        interval: 0,
                        rotate: 15
                    }
                },
                yAxis: {
                    name: "单位:" + unit,
                    type: "value",
                    axisLabel: {
                        formatter: "{value}"
                    }
                },
                series: [
                    {
                        name: title,
                        type: "line",
                        data: vData,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#0000FF'
                                },
                                color: function (param) {
                                    if (param.value == max) {
                                        return '#FF0000';
                                    }
                                    else if (param.value == min) {
                                        return '#00FF00';
                                    }
                                    else {
                                        return '#0000FF';
                                    }
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: function (a) {
                                    // // console.log(a);
                                    if (parseInt(decimalPlaces) == 2) {
                                        var newstr = thiss.decimalPipe.transform(parseFloat(a.value), '1.2-2');
                                        return newstr;
                                    }
                                }
                            }
                        },
                    },
                ]
            };
        });
        this.display = true;
    };
    // 隐藏折线图
    WorkdeskPage.prototype.hideChart = function () {
        this.display = false;
    };
    /**
     * 处理按钮
     */
    WorkdeskPage.prototype.doDeal = function (item) {
        this.commfunc.doDeal(item);
    };
    //导出
    WorkdeskPage.prototype.exportOut = function () {
    };
    //审批跳转
    // this.router.navigate(['/pages/tzb/custom/reminder-do/btn-page'], { queryParams: { 'id': '3' } });
    WorkdeskPage.prototype.checks = function (item) {
        this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page'], { queryParams: { flag: '1', totalNum: '1' } });
    };
    //工作任务
    WorkdeskPage.prototype.wait = function () {
        this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page'], { queryParams: { flag: '1', totalNum: '1' } });
    };
    //提醒
    WorkdeskPage.prototype.remind = function () {
        this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page'], { queryParams: { flag: '1', totalNum: '1' } });
    };
    //更多最新消息
    WorkdeskPage.prototype.newsbtn = function (item) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        // item.forEach((element, i) => {
        // 	this.inValue = { statusId: item[i].statusId }
        // });
    };
    //最新消息的回调
    WorkdeskPage.prototype.addCall = function (param) {
        this.orgTreeDisplay = param;
        this.queryMessageList();
    };
    //搜索方法
    WorkdeskPage.prototype.search = function () {
        // this.router.navigate(['/pages/tzb/custom/reminder-do/search-btn/all-page', {searchLists:this.searchLists}]);
        if (this.searchLists == '' || this.searchLists == undefined || this.searchLists == null) {
            this.router.navigate(['/pages/tzb/custom/reminder-do/search-btn/all-page']);
            // this.msgs = [];
            // this.msgs.push({ severity: 'info', summary: 'Error Message', detail: '请输入搜索内容' });
        }
        else {
            this.router.navigate(['/pages/tzb/custom/reminder-do/search-btn/all-page', { searchLists: this.searchLists }]);
        }
    };
    WorkdeskPage.prototype.showForm = function (event) {
        var thList = document.getElementsByClassName("ui-state-default ui-unselectable-text");
        for (var i = 0; i < thList.length; i++) {
            thList[i].addEventListener("click", this.hello, false);
        }
        var e = window.event;
        var targ = e.target || e.srcElement;
    };
    WorkdeskPage.prototype.hello = function (target) {
    };
    //按钮权限
    WorkdeskPage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    WorkdeskPage.prototype.backHistory = function () {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        });
    };
    //临时按钮-页面跳转(李聪) 2018-04-13	
    //客户变动
    WorkdeskPage.prototype.cust = function () {
        this.router.navigate(['/pages/tzb/other/custom-general']);
    };
    //存贷明细
    WorkdeskPage.prototype.loan_deposits = function () {
        this.router.navigate(['/pages/tzb/other/loan-deposit-change']);
    };
    //基本搜索
    WorkdeskPage.prototype.basic = function () {
        alert('该功能尚未完成');
    };
    //存贷变动
    WorkdeskPage.prototype.modifer = function () {
        this.router.navigate(['/pages/tzb/custom/custom-information/mine-custom/custom-Assets-liability']);
    };
    //常用功能--李聪
    WorkdeskPage.prototype.commonFunction = function () {
        this.functionAll = this.functionList;
        this.commonFuntion = true;
    };
    WorkdeskPage.prototype.commonFuntionCall = function (param) {
        this.commonFuntion = param;
        this.queryAuthority();
    };
    //获取功能权限
    WorkdeskPage.prototype.queryAuthority = function () {
        var _this = this;
        var param = { userId: this.user.userId };
        this.httpService.queryAuthority(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var arr = [];
                if (data.authorityList != null && data.authorityList != null && data.authorityList.length > 0) {
                    _this.functionList = data.authorityList;
                }
                else {
                    _this.functionList = _this.authorityList;
                    _this.userId = _this.userId = JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId;
                    var param_1 = {
                        userId: _this.userId,
                        authorityList: _this.functionList
                    };
                    _this.defaultPencel(param_1);
                }
                for (var _i = 0, _a = data.authorityList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (!_this.permissionCheck(item.authorityId) && !_this.MenuSelect(item.authorityId)) {
                        arr.push(item.authorityId);
                    }
                    ;
                }
                if (arr.length > 0) {
                    _this.deleteAuthority(arr);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    WorkdeskPage.prototype.nav = function (item) {
        var url = item.url;
        this.router.navigate(JSON.parse(url));
    };
    //删除权限
    WorkdeskPage.prototype.deleteAuthority = function (item) {
        var _this = this;
        var param = {
            userId: this.user.userId,
            authorityList: item,
        };
        this.httpService.deleteAuthority(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.httpService.queryAuthority(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.functionList = data.authorityList;
                    }
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //初始化存入默认常用功能
    WorkdeskPage.prototype.defaultPencel = function (param) {
        var _this = this;
        this.httpService.createOrStorePublicAuthority(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    WorkdeskPage.prototype.getIdData = function () {
        if (JSON.parse(this.commfunc.getSessionDataCH('menu')) != null) {
            if (JSON.stringify(JSON.parse(this.commfunc.getSessionDataCH("menu")).menu) != "{}") {
                var mp = new Map();
                var butList = JSON.parse(this.commfunc.getSessionDataCH("menu")).menu;
                var rays = [];
                for (var _i = 0, butList_1 = butList; _i < butList_1.length; _i++) {
                    var i = butList_1[_i];
                    rays.push.apply(rays, this.menuitems(i));
                }
                this.idData = rays;
            }
        }
    };
    WorkdeskPage.prototype.MenuSelect = function (menuId) {
        for (var _i = 0, _a = this.idData; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.sourceId == menuId) {
                return true;
            }
        }
    };
    WorkdeskPage.prototype.menuitems = function (item) {
        this.arr.push({ 'sourceId': item.sourceId });
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var i = _a[_i];
                this.menuitems(i);
            }
        }
        return this.arr;
    };
    //获取当前时间
    WorkdeskPage.prototype.transDateN = function () {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    WorkdeskPage.prototype.dataCaliberUpload = function () {
        this.uploadDisplay = true;
    };
    WorkdeskPage.prototype.dataCaliberDownload = function () {
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI('数据口径.pdf') + "&fileUrl=/copdata/dataCaliber", '_blank');
    };
    // 上传点击,需跨域
    WorkdeskPage.prototype.onBeforeSend = function (event) {
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return;
            }
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '文件上传成功,文件名为数据口径.pdf' });
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkdeskPage.prototype, "disPlayNone", void 0);
    WorkdeskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workdesk',
            template: __webpack_require__(/*! ./workdesk.component.html */ "./src/app/@uisftech/view/workdesk/workdesk.component.html"),
            styles: [__webpack_require__(/*! ./workdesk.component.scss */ "./src/app/@uisftech/view/workdesk/workdesk.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CustomeHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]])
    ], WorkdeskPage);
    return WorkdeskPage;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/workdesk.module.ts":
/*!************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/workdesk.module.ts ***!
  \************************************************************/
/*! exports provided: workDeskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workDeskModule", function() { return workDeskModule; });
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _workdesk_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workdesk.routing */ "./src/app/@uisftech/view/workdesk/workdesk.routing.ts");
/* harmony import */ var _workdesk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workdesk.component */ "./src/app/@uisftech/view/workdesk/workdesk.component.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_view_workdesk_common_function_common_function_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/view/workdesk/common-function/common-function.component */ "./src/app/@uisftech/view/workdesk/common-function/common-function.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var workDeskModule = /** @class */ (function () {
    function workDeskModule() {
    }
    workDeskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_0__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _workdesk_routing__WEBPACK_IMPORTED_MODULE_4__["WorkDeskRouting"]
            ],
            declarations: [
                _workdesk_component__WEBPACK_IMPORTED_MODULE_5__["WorkdeskPage"],
                app_uisftech_view_workdesk_common_function_common_function_component__WEBPACK_IMPORTED_MODULE_7__["CommonFunctionComponent"],
            ],
            providers: [],
            exports: []
        })
    ], workDeskModule);
    return workDeskModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/workdesk/workdesk.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/@uisftech/view/workdesk/workdesk.routing.ts ***!
  \*************************************************************/
/*! exports provided: WorkDeskRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkDeskRouting", function() { return WorkDeskRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workdesk_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workdesk.component */ "./src/app/@uisftech/view/workdesk/workdesk.component.ts");


var routes = [
    {
        path: '',
        component: _workdesk_component__WEBPACK_IMPORTED_MODULE_1__["WorkdeskPage"],
    }
];
var WorkDeskRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=workdesk-workdesk-module.js.map