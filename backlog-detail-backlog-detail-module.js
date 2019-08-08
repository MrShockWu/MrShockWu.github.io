(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backlog-detail-backlog-detail-module"],{

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--最新的我的待办页面-->\r\n<div class='ui-g'>\r\n\t<div class=\"ui-g-12 top_items_box\" *ngIf=\"!worknone\">\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')&&mission=='1'\" class=\"top_item\" [ngClass]=\"{'active_item':show ==1}\" [routerLink]=\"['./btn-page10/approve-page']\"\r\n\t\t (click)=\"apply(1)\" [queryParams]=\"{ flag: '1',totalNum:mission }\">\r\n\t\t\t<span class=\"top_item_title\">我的待办</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')&&mission=='2'\" class=\"top_item\" [ngClass]=\"{'active_item':show ==1}\" [routerLink]=\"['./btn-page10/workdesk-page']\"\r\n\t\t (click)=\"apply(1)\" [queryParams]=\"{ flag: '1',totalNum:mission }\">\r\n\t\t\t<span class=\"top_item_title\">我的待办</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012_P212')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==2}\" [routerLink]=\"['./btn-page6/work-none']\"\r\n\t\t (click)=\"apply(2)\" [queryParams]=\"{ flag: '2',totalNum:'7' }\">\r\n\t\t\t<span class=\"top_item_title\">已办事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012_P213')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==3}\" [routerLink]=\"['./btn-page7/handling-matters']\"\r\n\t\t (click)=\"apply(3)\" [queryParams]=\"{ flag: '3',totalNum:'7' }\">\r\n\t\t\t<span class=\"top_item_title\">办结事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012_P214')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==4}\" [routerLink]=\"['./btn-page8/tip-page']\"\r\n\t\t (click)=\"apply(4)\" [queryParams]=\"{ flag: '4',totalNum:'8' }\">\r\n\t\t\t<span class=\"top_item_title\">提醒历史</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P013')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==5}\" [routerLink]=\"['./btn-page9/task-pool']\"\r\n\t\t (click)=\"apply(5)\" [queryParams]=\"{ flag: '5',totalNum:'10' }\">\r\n\t\t\t<span class=\"top_item_title\">任务池</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"ui-g-12 top_items_box\" *ngIf=\"worknone\">\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012_P212')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==2}\" [routerLink]=\"['./btn-page2/work-none']\"\r\n\t\t (click)=\"apply(2)\" [queryParams]=\"{ flag: '2',totalNum:'7',none: 'Y'}\">\r\n\t\t\t<span class=\"top_item_title\">已办事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012_P213')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==3}\" [routerLink]=\"['./btn-page3/handling-matters']\"\r\n\t\t (click)=\"apply(3)\" [queryParams]=\"{ flag: '3',totalNum:'7',none: 'Y' }\">\r\n\t\t\t<span class=\"top_item_title\">办结事项</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  border-bottom: 2px solid #34CFE6;\n  background-color: white; }\n  .ui-g .top_items_box {\n    padding-left: 0px;\n    height: 47px;\n    margin-top: -4px;\n    line-height: 36px; }\n  .ui-g .top_items_box .top_item {\n      cursor: pointer;\n      text-align: center;\n      display: inline-block;\n      margin-left: 12px;\n      height: 38px;\n      width: 100px;\n      border-top: 1px solid #e8e8e8;\n      border-left: 1px solid #e8e8e8;\n      border-right: 1px solid #e8e8e8;\n      color: #171819;\n      font-weight: bold;\n      font-size: 14px;\n      outline: 0; }\n  .ui-g .top_items_box .active_item {\n      border-top: 2px solid #34CFE6 !important;\n      border-left: 2px solid #34CFE6 !important;\n      border-right: 2px solid #34CFE6 !important;\n      border-bottom: 2px solid #fafafa !important;\n      color: #34CFE6 !important;\n      font-weight: bold;\n      font-size: 14px; }\n  .active {\n  border: none !important;\n  background-color: #fafafa !important;\n  color: #07374d !important;\n  border-bottom: 1px solid #e7eaec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYmFja2xvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0M7RUFDaEMsdUJBQXVCLEVBQUE7RUFGM0I7SUFJUSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQVB6QjtNQVNZLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qiw4QkFBOEI7TUFDOUIsK0JBQStCO01BQy9CLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFVBQVUsRUFBQTtFQXJCdEI7TUF3Qlksd0NBQXdDO01BQ3hDLHlDQUF5QztNQUN6QywwQ0FBMEM7TUFDMUMsMkNBQTJDO01BQzNDLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBSzNCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2JhY2tsb2ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNENGRTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC50b3BfaXRlbXNfYm94IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICAudG9wX2l0ZW0ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTcxODE5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZV9pdGVtIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzRDRkU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwNzM3NGQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlYWVjO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BacklogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogDetailComponent", function() { return BacklogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
//待办及提醒事项查看全部详情



var BacklogDetailComponent = /** @class */ (function () {
    function BacklogDetailComponent(commfunc, router, activatedRouter) {
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.show = 1;
        this.worknone = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // 是否为管理岗
        if (this.user.extParam.managePermission == 'Y') {
            this.mission = '1';
        }
        else {
            this.mission = '2';
        }
    }
    BacklogDetailComponent.prototype.ngOnInit = function () {
        this.judgStatu();
    };
    BacklogDetailComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    BacklogDetailComponent.prototype.apply = function (num) {
        this.show = num;
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        if (this.commfunc.getSessionDataCH('bussinessWhere')) {
            this.commfunc.clearSession('bussinessWhere');
        }
    };
    BacklogDetailComponent.prototype.judgStatu = function () {
        var url = window.location.href;
        if (url.indexOf('?') != -1) {
            var a = url.split('?');
            if (a[0].indexOf('backlog-details') == -1) {
                if (this.commfunc.getSessionDataCH('month')) {
                    this.commfunc.clearSession('month');
                }
            }
            var b = a[1].split('&');
            var c = b[0].split('=');
            this.show = c[1];
            if (b[2]) {
                var d = b[2].split('=');
                if (d[1] == 'Y') {
                    this.worknone = true;
                    this.activatedRouter.queryParams.subscribe(function (params) {
                        if (params.startDate) {
                            var arr = params.startDate.split('.');
                            var arr1 = params.endDate.split('.');
                            var session = window.sessionStorage;
                            var arrlist = {
                                startDate: arr[0] + '-' + arr[1] + '-' + arr[2],
                                endDate: arr1[0] + '-' + arr1[1] + '-' + arr1[2]
                            };
                            session.setItem('month', JSON.stringify(arrlist));
                        }
                    });
                }
            }
        }
    };
    //按钮权限
    BacklogDetailComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BacklogDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backlog-detail',
            template: __webpack_require__(/*! ./backlog-detail.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.html"),
            styles: [__webpack_require__(/*! ./backlog-detail.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BacklogDetailComponent);
    return BacklogDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.routing.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.routing.ts ***!
  \***************************************************************************************/
/*! exports provided: routes, BackLogDetailRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogDetailRouting", function() { return BackLogDetailRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backlog_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backlog-detail.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.ts");


var routes = [
    {
        path: '',
        component: _backlog_detail_component__WEBPACK_IMPORTED_MODULE_1__["BacklogDetailComponent"],
        children: [
            {
                path: 'btn-page',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page2',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page3',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page4',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page5',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page6',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page7',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page8',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page9',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            }, {
                path: 'btn-page10',
                loadChildren: './btn-page/btn-page.module#BtnPageModule'
            },
        ]
    }
];
var BackLogDetailRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog.detail.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog.detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: BacklogDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogDetailModule", function() { return BacklogDetailModule; });
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _backlog_detail_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backlog-detail.routing */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.routing.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_backlog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/backlog-detail.component.ts");
/* harmony import */ var _btn_page_credit_page_credit_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btn-page/credit-page/credit-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {HandlePageComponent} from '../handle-page/handle-page.component';
var BacklogDetailModule = /** @class */ (function () {
    function BacklogDetailModule() {
    }
    BacklogDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__["FrameworkModule"],
                _backlog_detail_routing__WEBPACK_IMPORTED_MODULE_3__["BackLogDetailRouting"]
            ],
            declarations: [
                app_pages_tzb_custom_reminder_do_backlog_detail_backlog_detail_component__WEBPACK_IMPORTED_MODULE_4__["BacklogDetailComponent"],
                _btn_page_credit_page_credit_page_component__WEBPACK_IMPORTED_MODULE_5__["CreditPageComponent"]
            ],
            providers: []
        })
    ], BacklogDetailModule);
    return BacklogDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: BtnPageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPageBean", function() { return BtnPageBean; });
var BtnPageBean = /** @class */ (function () {
    function BtnPageBean() {
    }
    return BtnPageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\">\r\n  <div class=\"ui-g-12 base-table\">\r\n      <p-dataTable [value]=\"list\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n        <p-column header=\"事项名称\" field=\"scheduleName\"></p-column>\r\n        <p-column header=\"数量\" field=\"num\"></p-column>\r\n        <p-column header=\"操作\" field=\"\">\r\n            <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <span (click)='toDisposeSchedule(item)' class=\"tabelDealIco\" >处理</span>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <p-paginator first={{first}} rows=\"{{btnPageBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div> -->\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-12 {\n  background: #f7f8f9; }\n  .module .ui-g-12 .ui-g-6 {\n    display: flex; }\n  .module .ui-g-12 .ui-g-6 label {\n      display: block;\n      width: 30%;\n      text-align: right;\n      padding: 0 20px; }\n  .module .ui-g-12 .ui-g-6 .input-name {\n      width: 100% !important; }\n  .module .ui-g-12 .ui-g-6 .items-name {\n      width: 100% !important; }\n  .module .btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9jcmVkaXQtcGFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYnRuLXBhZ2VcXGNyZWRpdC1wYWdlXFxjcmVkaXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBO0VBRjNCO0lBSVcsYUFBYSxFQUFBO0VBSnhCO01BTWUsY0FBYztNQUNkLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBVDlCO01BWWdCLHNCQUFzQixFQUFBO0VBWnRDO01BZWUsc0JBQXNCLEVBQUE7RUFmckM7RUFvQlEsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL2NyZWRpdC1wYWdlL2NyZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmOGY5O1xyXG4gICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LW5hbWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLml0ZW1zLW5hbWV7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CreditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditPageComponent", function() { return CreditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/btnPage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口






/**
 * 审批事项
 */
var CreditPageComponent = /** @class */ (function () {
    function CreditPageComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"];
        this.littleEvent = [];
        this.btnPageBean = new _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__["BtnPageBean"]();
        this.itemsSmallType = [];
        this.list = []; //接收后台数据
        //提示信息
        this.msgs = [];
        this.userId = '';
        this.display = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.littleEvent = this.code['ScheduleType'];
    }
    CreditPageComponent.prototype.ngOnInit = function () {
        this.btnPageBean.scheduleTypeId = this.activatedRouter.snapshot.params['scheduleTypeId'];
        // this.itemsBigChange();
        this.btnPageBean.scheduleName = this.activatedRouter.snapshot.params['scheduleName'];
        // this.queryClick();
        this.doQuery();
    };
    //点击查询
    CreditPageComponent.prototype.doQuery = function () {
        var _this = this;
        var params = {};
        this.customeHttpService.loanScheduleCountByTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = data.resultList;
                _this.total = data.resultList[0].num;
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
    //事项大类切换
    // itemsBigChange() {
    //   let params = {
    //   }
    //   this.cusOperationHttpService.taskTypeQry(params).subscribe(data => {
    //     let arr = data.taskTypeList;
    //     this.itemsSmallType = [{ label: '请选择', value: '' }];
    //     if (arr) {
    //       arr.forEach(item => {
    //         this.itemsSmallType.push({ label: item.taskTypeName, value: item.taskTypeId });
    //       });
    //     }
    //   })
    // }
    //信贷工作任务处理
    CreditPageComponent.prototype.toDisposeSchedule = function (item) {
        var _this = this;
        //新建时间戳和页面
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        this.commfunc.createBlank(target);
        //审批事项中的信贷
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = user.userId;
        this.targetId = user.targetId;
        var params = {
            userId: this.userId,
            sysCode: '122',
            casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
            serverName: 'ywsn',
            validateType: '0',
            extraInfo: 'ywsn',
            encryptType: 'HS256',
        };
        this.customeHttpService.tokenApply(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var token = data.tokenCode;
                if (_this.targetId == '101010') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_XIN"];
                }
                else if (_this.targetId == '101011') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_XIN_C"];
                }
                var url = _this.HTTPIPDress + 'plats/FrontController?urlParam=' + item.url + '&suid=' + _this.userId + '&token=' + token;
                // console.log(url)
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
    //码值
    CreditPageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CreditPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-page',
            template: __webpack_require__(/*! ./credit-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.html"),
            styles: [__webpack_require__(/*! ./credit-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/credit-page/credit-page.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], CreditPageComponent);
    return CreditPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=backlog-detail-backlog-detail-module.js.map