(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~credit-rrm-credi~45b71de9"],{

/***/ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--最新的我的待办页面-->\r\n<div class=\"ui-g\">\r\n\t<div class=\"ui-g-9 top_items_box\">\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')\" class=\"first_item\" [ngClass]=\"{'active_item':show ==1}\" (click)=\"apply(1)\">\r\n\t\t\t<span class=\"top_item_title\">{{custName}}的待办事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==5}\" (click)=\"apply(5)\">\r\n\t\t\t<span class=\"top_item_title\">客户联系</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==2}\" (click)=\"apply(2)\">\r\n\t\t\t<span class=\"top_item_title\">已办事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==3}\" (click)=\"apply(3)\">\r\n\t\t\t<span class=\"top_item_title\">办结事项</span>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P012')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==4}\" (click)=\"apply(4)\">\r\n\t\t\t<span class=\"top_item_title\">提醒历史</span>\r\n\t\t</div>\r\n\t\t<!-- \r\n\t\t<div *ngIf=\"permissionCheck('SID00000_P011')\" class=\"top_item\" [ngClass]=\"{'active_item':show ==6}\" (click)=\"apply(6)\">\r\n\t\t\t<span class=\"top_item_title\">电销任务</span>\r\n\t\t</div> -->\r\n\t</div>\r\n\t<div class=\"ui-g-3\">\r\n\t\t<div class=\"right_item\">\r\n\t\t\t<a href=\"/#/pages/custom-view?custNo={{custNo}}&pageNum=1&scene=0303_XWZH_View\">返回到{{custName}}({{custNo}})的客户视图</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div *ngIf=\"show == 1\">\r\n\t<app-approve-page></app-approve-page>\r\n</div>\r\n<div *ngIf=\"show == 2\">\r\n\t<work-none></work-none>\r\n</div>\r\n<div *ngIf=\"show == 3\">\r\n\t<handling-matters></handling-matters>\r\n</div>\r\n<div *ngIf=\"show == 4\">\r\n\t<app-tip-page></app-tip-page>\r\n</div>\r\n <div *ngIf=\"show == 5\">\r\n\t<coustomer-contact></coustomer-contact>\r\n</div><!--\r\n<div *ngIf=\"show == 6\">\r\n\t<handling-matters-items></handling-matters-items>\r\n</div> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  border-bottom: 2px solid #34CFE6;\n  background-color: white; }\n  .ui-g .top_items_box {\n    padding-left: 0px;\n    height: 47px;\n    margin-top: -4px;\n    line-height: 36px; }\n  .ui-g .top_items_box .top_item {\n      cursor: pointer;\n      text-align: center;\n      display: inline-block;\n      margin-left: 12px;\n      height: 38px;\n      width: 100px;\n      border-top: 1px solid #e8e8e8;\n      border-left: 1px solid #e8e8e8;\n      border-right: 1px solid #e8e8e8;\n      color: #171819;\n      font-weight: bold;\n      font-size: 14px;\n      outline: 0; }\n  .ui-g .top_items_box .first_item {\n      cursor: pointer;\n      text-align: center;\n      display: inline-block;\n      margin-left: 12px;\n      height: 38px;\n      width: 18%;\n      border-top: 1px solid #e8e8e8;\n      border-left: 1px solid #e8e8e8;\n      border-right: 1px solid #e8e8e8;\n      color: #171819;\n      font-weight: bold;\n      font-size: 14px;\n      outline: 0; }\n  .ui-g .top_items_box .active_item {\n      border-top: 2px solid #34CFE6 !important;\n      border-left: 2px solid #34CFE6 !important;\n      border-right: 2px solid #34CFE6 !important;\n      border-bottom: 2px solid #fafafa !important;\n      color: #34CFE6 !important;\n      font-weight: bold;\n      font-size: 14px; }\n  .ui-g .right_item {\n    cursor: pointer;\n    text-align: center;\n    font-size: 14px;\n    text-decoration: underline; }\n  .active {\n  border: none !important;\n  background-color: #fafafa !important;\n  color: #07374d !important;\n  border-bottom: 1px solid #e7eaec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9wZXJzb25hbC1kby9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxwZXJzb25hbC1kb1xccGVyc29uYWwtZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0M7RUFDaEMsdUJBQXVCLEVBQUE7RUFGM0I7SUFJUSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQVB6QjtNQVNZLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qiw4QkFBOEI7TUFDOUIsK0JBQStCO01BQy9CLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFVBQVUsRUFBQTtFQXJCdEI7TUF3QlksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixVQUFVO01BQ1YsNkJBQTZCO01BQzdCLDhCQUE4QjtNQUM5QiwrQkFBK0I7TUFDL0IsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsVUFBVSxFQUFBO0VBcEN0QjtNQXVDWSx3Q0FBd0M7TUFDeEMseUNBQXlDO01BQ3pDLDBDQUEwQztNQUMxQywyQ0FBMkM7TUFDM0MseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7RUE3QzNCO0lBaURRLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDBCQUEwQixFQUFBO0VBSWxDO0VBQ0ksdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL3BlcnNvbmFsLWRvL3BlcnNvbmFsLWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNENGRTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC50b3BfaXRlbXNfYm94IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICAudG9wX2l0ZW0ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTcxODE5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3RfaXRlbSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTcxODE5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlX2l0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzM0Q0ZFNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzM0Q0ZFNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzM0Q0ZFNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodF9pdGVtIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDczNzRkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZWFlYztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonaldoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaldoComponent", function() { return PersonaldoComponent; });
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



var PersonaldoComponent = /** @class */ (function () {
    function PersonaldoComponent(commfunc, router, activatedRouter, routeInfo) {
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.routeInfo = routeInfo;
        this.show = 1;
    }
    PersonaldoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (param) {
            _this.custName = param.custName;
            _this.custNo = param.custNo;
            if (param.show) {
                _this.show = param.show;
            }
        });
        this.judgStatu();
    };
    PersonaldoComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    PersonaldoComponent.prototype.apply = function (num) {
        this.show = num;
    };
    PersonaldoComponent.prototype.judgStatu = function () {
        var url = window.location.href;
        if (url.indexOf('?') != -1) {
            var a = url.split('?');
            var b = a[1].split('&');
            var c = b[0].split('=');
            this.show = c[1];
        }
    };
    //按钮权限
    PersonaldoComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PersonaldoComponent.prototype.ngOnDestory = function () {
        if (this.commfunc.getSessionDataCH('bussinessWhere')) {
            this.commfunc.clearSession('bussinessWhere');
        }
    };
    PersonaldoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-do',
            template: __webpack_require__(/*! ./personal-do.component.html */ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.html"),
            styles: [__webpack_require__(/*! ./personal-do.component.scss */ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PersonaldoComponent);
    return PersonaldoComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/reminder-do.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/reminder-do.module.ts ***!
  \********************************************************************/
/*! exports provided: RemindDoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindDoModule", function() { return RemindDoModule; });
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reminder_do_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminder-do.routing */ "./src/app/pages/tzb/custom/reminder-do/reminder-do.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _personal_do_personal_do_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-do/personal-do.component */ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.ts");
/* harmony import */ var _backlog_detail_btn_page_btn_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backlog-detail/btn-page/btn-page.module */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author 洪满义
 */





//待办及提醒
// import { BacklogDetailComponent } from "./backlog-detail/backlog-detail.component";



var RemindDoModule = /** @class */ (function () {
    function RemindDoModule() {
    }
    RemindDoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reminder_do_routing__WEBPACK_IMPORTED_MODULE_3__["ReminderDoRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _backlog_detail_btn_page_btn_page_module__WEBPACK_IMPORTED_MODULE_7__["BtnPageModule"],
            ],
            declarations: [
                _personal_do_personal_do_component__WEBPACK_IMPORTED_MODULE_6__["PersonaldoComponent"]
            ],
            providers: []
        })
    ], RemindDoModule);
    return RemindDoModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/reminder-do.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/reminder-do.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, ReminderDoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderDoRouting", function() { return ReminderDoRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_do_personal_do_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-do/personal-do.component */ "./src/app/pages/tzb/custom/reminder-do/personal-do/personal-do.component.ts");


var routes = [
    {
        path: '',
        children: [
            {
                path: 'backlog-detail',
                loadChildren: './backlog-detail/backlog.detail.module#BacklogDetailModule'
            },
            {
                path: 'backlog-details',
                loadChildren: './backlog-detail/backlog.detail.module#BacklogDetailModule'
            },
            {
                path: 'personal-do',
                component: _personal_do_personal_do_component__WEBPACK_IMPORTED_MODULE_1__["PersonaldoComponent"]
            }
        ]
    }
];
var ReminderDoRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~credit-rrm-credi~45b71de9.js.map