(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-group-custom-group-module~my-custom-org-my-custom-org-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 functions\">\r\n        <a [routerLink]=\"['my-org-change']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\">群机构批量调整</a>\r\n        <a [routerLink]=\"['my-org-history']\" class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\">群机构批量调整历史</a>\r\n    </div>\r\n    <div class=\"ui-g-12 module padding-one bgcolor\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .padding-one {\n  padding: 1em; }\n  .bgcolor {\n  background: #f7f7f7; }\n  @media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n  :host/deep/.ui-dialog-mask {\n  z-index: 2222 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLW9yZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcbXktY3VzdG9tLW9yZ1xcbXktY3VzdG9tLW9yZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTtFQUU3QjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUNJLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtFQUVwQztJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEI7RUFFTDtFQUNJLHdCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLW9yZy9teS1jdXN0b20tb3JnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmN0aW9ucyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvLnVpLWRpYWxvZy1tYXNrIHtcclxuICAgIHotaW5kZXg6IDIyMjIhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyCustomOrg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCustomOrg", function() { return MyCustomOrg; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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



var MyCustomOrg = /** @class */ (function () {
    function MyCustomOrg(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.show = 1;
    }
    MyCustomOrg.prototype.ngOnInit = function () {
        var stu_1 = 1; // 群批量机构调整
        var stu_2 = 2; // 群机构批量调整历史
        if (stu_1) {
            this.show = 1;
            this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-org/my-org-change']);
        }
        else if (stu_2) {
            this.show = 2;
            this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-org/my-org-history']);
        }
    };
    MyCustomOrg.prototype.ngOnChanges = function () {
    };
    // 切换标签
    MyCustomOrg.prototype.allot = function (num) {
        this.show = num;
    };
    MyCustomOrg = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-custom-org',
            template: __webpack_require__(/*! ./my-custom-org.component.html */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.html"),
            styles: [__webpack_require__(/*! ./my-custom-org.component.scss */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyCustomOrg);
    return MyCustomOrg;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MyCustomOrgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCustomOrgModule", function() { return MyCustomOrgModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.routing */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_org_change_my_org_change_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_org_history_my_org_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MyCustomOrgModule = /** @class */ (function () {
    function MyCustomOrgModule() {
    }
    MyCustomOrgModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_routing__WEBPACK_IMPORTED_MODULE_7__["MyCustomOrgRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_component__WEBPACK_IMPORTED_MODULE_8__["MyCustomOrg"],
                app_pages_tzb_custom_custom_group_my_custom_org_my_org_change_my_org_change_component__WEBPACK_IMPORTED_MODULE_9__["MyOrgChange"],
                app_pages_tzb_custom_custom_group_my_custom_org_my_org_history_my_org_history_component__WEBPACK_IMPORTED_MODULE_10__["MyOrgHistory"],
            ],
            providers: [
                app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
                app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            ]
        })
    ], MyCustomOrgModule);
    return MyCustomOrgModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.routing.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.routing.ts ***!
  \**************************************************************************************/
/*! exports provided: routes, MyCustomOrgRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCustomOrgRouting", function() { return MyCustomOrgRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_org_change_my_org_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_org_history_my_org_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.ts");




var routes = [
    {
        path: '',
        component: app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_component__WEBPACK_IMPORTED_MODULE_1__["MyCustomOrg"],
        children: [
            { path: 'my-org-change', component: app_pages_tzb_custom_custom_group_my_custom_org_my_org_change_my_org_change_component__WEBPACK_IMPORTED_MODULE_2__["MyOrgChange"] },
            { path: 'my-org-history', component: app_pages_tzb_custom_custom_group_my_custom_org_my_org_history_my_org_history_component__WEBPACK_IMPORTED_MODULE_3__["MyOrgHistory"] },
        ]
    },
];
var MyCustomOrgRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n    <div class=\"ui-g-12 contactCsstop\">\r\n        <div class=\"ui-g-12\">\r\n            <div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\">\r\n                    <p-radioButton name=\"groupname1\" value=\"1\" label=\"手工录入\" [(ngModel)]=\"operationType\" (click)=\"singlebatch()\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-2\">\r\n                    <p-radioButton name=\"groupname1\" value=\"2\" label=\"模板导入\" [(ngModel)]=\"operationType\" (click)=\"singlebatch()\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"single\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12 contactCss\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label appValidation>群号:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"partyClassificationGroupId\" (blur)=\"partydetail()\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label appValidation>调整后群所属机构:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 org-name\">\r\n                    <input class=\"contactTrackInput\" placeholder=\"请选择群所属机构\" type=\"text\" pInputText formControlName=\"afterOrgId\" disabled>\r\n                    <div class=\"clickspan\" (click)=\"openTree()\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 contactCss\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>群名称:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"groupName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>群主:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"ownerName\" disabled>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 contactCss\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>原群所属机构:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"orgId\" disabled>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 table\" *ngIf=\"single\">\r\n        <button class=\"searchBtn\" (click)=\"add()\">添加</button>\r\n        <button class=\"resetBtn\" (click)=\"reset()\">重置</button>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"batch\">\r\n        <pre>\r\n            Excel文件格式说明：\r\n            Excel文件中群号、调整后群所属机构为必输项。\r\n            Excel文件最大不能超过200行记录。\r\n            更多注意事项请查看模板中的“填表说明”。\r\n            请先下载模板：\r\n            <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=group.xls\">下载模板</a>\r\n        </pre>\r\n        <div class=\"ui-g-12\">\r\n            <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n            </p-fileUpload>\r\n            <div *ngIf=\"files.length>0\">\r\n                <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"adjustmentOrgList\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群号\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].partyClassificationGroupId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群名称\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].groupName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群主\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].ownerName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"原群所属机构\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].orgId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"调整后群所属机构\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].afterOrgId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\" [style]=\"{'width':'300px'}\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"delete(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 table\">\r\n    <button class=\"searchBtn\" (click)=\"submit()\">提交</button>\r\n    <!-- <button class=\"resetBtn\" (click)=\"returnGroup()\">返回</button> -->\r\n</div>\r\n\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" [(visible)]=\"dealPerShow\" header=\"提交给\" class=\"contact-track-f\" modal=\"true\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!--选择机构-->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"my-cust-contactf\">\r\n    <p-header>\r\n        机构树\r\n    </p-header>\r\n    <org-tree-component [inValue]=\"inValue_data\" (outValue)=\"contacttreeCall($event)\"></org-tree-component>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  padding-bottom: 3px; }\n\n.org-name {\n  display: flex; }\n\n.contactTrackInput {\n  width: 43.4% !important;\n  border-right: none;\n  min-width: 258px !important; }\n\n.text-right {\n  text-align: right; }\n\n.table {\n  text-align: center; }\n\n.name {\n  word-break: break-all; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\na {\n  color: #19b0c8; }\n\n.clickspan {\n  width: 6%;\n  height: 23px; }\n\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .track-contact-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .trackcontactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n.trackcontactInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .track-contact-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .trackcontactPropdowna .ui-dropdown {\n    width: 76% !important; }\n  .trackcontactInput {\n    width: 76% !important; }\n  .contactTrackInput {\n    width: 69.5% !important; } }\n\n.searchBtn {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: #34cfe6;\n  color: #fff;\n  width: 60px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n:host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 1200px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-cust-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLW9yZy9teS1vcmctY2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxteS1jdXN0b20tb3JnXFxteS1vcmctY2hhbmdlXFxteS1vcmctY2hhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0kscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUVLO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0ksdUJBQXVCLEVBQUEsRUFDMUI7O0FBRUw7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFYSjtNQVlRLGdCQUFnQixFQUFBLEVBRXZCOztBQUNEO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFWSjtNQVdRLGdCQUFnQixFQUFBLEVBRXZCOztBQUNEO0VBQ0ksd0JBQXdCO0VBQ3hCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL215LWN1c3RvbS1vcmcvbXktb3JnLWNoYW5nZS9teS1vcmctY2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG4ub3JnLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdFRyYWNrSW5wdXQge1xyXG4gICAgd2lkdGg6IDQzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDI1OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmFtZSB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLmNvbnRhY3RDc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuLmNvbnRhY3RDc3N0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY29udGFjdC10cmFjay1mIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG4vLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbjpob3N0L2RlZXAvIC50cmFjay1jb250YWN0LWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMjMuMiU7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC50cmFja2NvbnRhY3RQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG4udHJhY2tjb250YWN0SW5wdXQge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvIC50cmFjay1jb250YWN0LWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLnRyYWNrY29udGFjdFByb3Bkb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50cmFja2NvbnRhY3RJbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RUcmFja0lucHV0IHtcclxuICAgICAgICB3aWR0aDogNjkuNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uc2VhcmNoQnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2ZlNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnJlc2V0QnRue1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2ZlNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG46aG9zdCAvZGVlcC8gLm15LWN1c3QtY29udGFjdGYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1jb250YWN0ZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MyOrgChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrgChange", function() { return MyOrgChange; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyOrgChange = /** @class */ (function () {
    function MyOrgChange(httpService, commonFunc, commfunc, fb, router) {
        this.httpService = httpService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.adjustmentOrgList = []; //机构集合
        this.orgTreeDisplay = false; //模态框
        this.single = false; //手工录入
        this.batch = false; //模板导入
        this.files = []; // 文件
        this.fileList = [];
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; //下载
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"]; // 上传
        this.today = new Date(); //日期
        this.groupSet = []; //群号集合
        this.dataList = []; //集合
        this.dealPerShow = false;
        this.inValue_data = 'tak';
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userform = fb.group({
            partyClassificationGroupId: [''],
            orgName: [''],
            orgId: [''],
            groupName: [''],
            ownerName: [''],
            ownerId: [''],
            afterOrgId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    MyOrgChange.prototype.ngOnInit = function () {
        this.operationType = '1';
        this.singlebatch();
    };
    // 选择机构
    MyOrgChange.prototype.openTree = function (param) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    // 关闭-机构模态框
    MyOrgChange.prototype.contacttreeCall = function (param) {
        // console.log(param);
        this.orgTreeDisplay = false;
        this.userform.get('afterOrgId').setValue(param.orgId);
    };
    //群号事件
    MyOrgChange.prototype.partydetail = function () {
        var _this = this;
        var param = {};
        param['groupId'] = this.userform.value.partyClassificationGroupId;
        this.httpService.selectCustGroupInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.userform.get('groupName').setValue(data.groupName);
                _this.userform.get('ownerName').setValue(data.ownerName);
                _this.userform.get('ownerId').setValue(data.ownerId);
                _this.userform.get('orgId').setValue(data.orgId);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //调整类型
    MyOrgChange.prototype.singlebatch = function () {
        if (this.operationType == '1') {
            this.single = true;
            this.batch = false;
            this.reset();
            this.adjustmentOrgList = [];
        }
        else if (this.operationType == '2') {
            this.single = false;
            this.batch = true;
            this.adjustmentOrgList = [];
        }
    };
    // 添加
    MyOrgChange.prototype.add = function () {
        if (!this.userform.value.partyClassificationGroupId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入群号' });
            return;
        }
        if (!this.userform.value.afterOrgId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入调整后群所属机构' });
            return;
        }
        var tempArr1 = [];
        var tempArr2 = {};
        tempArr1 = this.adjustmentOrgList;
        for (var e = 0; e < tempArr1.length; e++) {
            if (this.userform.value.partyClassificationGroupId == tempArr1[e].partyClassificationGroupId) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '手工录入群号重复' });
                return;
            }
        }
        if (this.userform.value.afterOrgId == this.userform.value.orgId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '原归属机构与调整后归属机构相同' });
            return;
        }
        tempArr2 = {
            partyClassificationGroupId: this.userform.value.partyClassificationGroupId,
            groupName: this.userform.value.groupName,
            ownerName: this.userform.value.ownerName,
            ownerId: this.userform.value.ownerId,
            orgId: this.userform.value.orgId,
            afterOrgId: this.userform.value.afterOrgId,
        };
        tempArr1.push(tempArr2);
        this.adjustmentOrgList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempArr1);
        this.reset();
    };
    //删除
    MyOrgChange.prototype.delete = function (i) {
        this.adjustmentOrgList.splice(i, 1);
        var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.adjustmentOrgList);
        this.adjustmentOrgList = tmpArr;
    };
    // 提交
    MyOrgChange.prototype.submit = function () {
        var _this = this;
        if (this.adjustmentOrgList.length == '0') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '没有数据无法提交!' });
            return;
        }
        this.waitSelUserList = this.commfunc.query('KHQ_QJGPLTZ', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var perPageShow = this.waitSelUserList.display;
            if (perPageShow == true) {
                this.dealPerShow = true;
            }
            else {
                this.dataList = [];
                this.groupSet = [];
                var param = {};
                var list = this.adjustmentOrgList;
                this.adjustmentOrgList.forEach(function (element) {
                    var obj = {};
                    var sub = {};
                    sub = element.partyClassificationGroupId;
                    obj['groupId'] = element.partyClassificationGroupId;
                    obj['groupName'] = element.groupName;
                    obj['ownerId'] = element.ownerId;
                    obj['ownerName'] = element.ownerName;
                    obj['orgId'] = element.orgId;
                    obj['afterOrgId'] = element.afterOrgId;
                    _this.groupSet.push(sub);
                    _this.dataList.push(obj);
                });
                param['groupSet'] = this.groupSet;
                param['operationType'] = this.operationType;
                param['operationOrg'] = this.user.extParam.orgId;
                param['operationTellerNo'] = this.user.userId;
                param['adjustmentOrgList'] = this.dataList;
                param['operationDateTime'] = this.commfunc.transDateN(this.today);
                this.httpService.batchAdjustmentOfGroupOrg(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.adjustmentOrgList = [];
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功！' }];
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.message ? data.returnCode.message : '提交失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    MyOrgChange.prototype.outDisplayCall = function (event) {
        this.dealPerShow = event;
    };
    MyOrgChange.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        var specifyNextNode = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.userBank;
        });
        this.dataList = [];
        this.groupSet = [];
        var param = {};
        var list = this.adjustmentOrgList;
        this.adjustmentOrgList.forEach(function (element) {
            var obj = {};
            var sub = {};
            sub = element.partyClassificationGroupId;
            obj['groupId'] = element.partyClassificationGroupId;
            obj['groupName'] = element.groupName;
            obj['ownerId'] = element.ownerId;
            obj['ownerName'] = element.ownerName;
            obj['orgId'] = element.orgId;
            obj['afterOrgId'] = element.afterOrgId;
            _this.groupSet.push(sub);
            _this.dataList.push(obj);
        });
        param['authUser'] = ss;
        param['author'] = specifyNextNode;
        param['groupSet'] = this.groupSet;
        param['operationType'] = this.operationType;
        param['operationOrg'] = this.user.extParam.orgId;
        param['operationTellerNo'] = this.user.userId;
        param['adjustmentOrgList'] = this.dataList;
        param['operationDateTime'] = this.commfunc.transDateN(this.today);
        this.httpService.batchAdjustmentOfGroupOrg(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.adjustmentOrgList = [];
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功！' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '提交失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 按模板-文件上传
    MyOrgChange.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                this.files = [];
                return;
            }
        }
        if (this.fileList[0]) {
            this.fileUrl = this.fileList[0].fileUrl;
            this.fileName = this.fileList[0].fileName;
        }
        this.analysis();
    };
    //文件解析
    MyOrgChange.prototype.analysis = function () {
        var _this = this;
        var param = {};
        param['fileUrl'] = this.fileUrl;
        param['fileName'] = this.fileName;
        this.httpService.analysisImportExcelResult(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.adjustmentOrgList = data.resultList;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '解析成功！' }];
            }
            else {
                _this.adjustmentOrgList = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '解析失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 重置
    MyOrgChange.prototype.reset = function () {
        this.userform.get('partyClassificationGroupId').setValue('');
        this.userform.get('afterOrgId').setValue('');
        this.userform.get('groupName').setValue('');
        this.userform.get('ownerName').setValue('');
        this.userform.get('orgId').setValue('');
    };
    //返回群列表
    MyOrgChange.prototype.returnGroup = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-group']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MyOrgChange.prototype, "outValue", void 0);
    MyOrgChange = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-org-change',
            template: __webpack_require__(/*! ./my-org-change.component.html */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.html"),
            styles: [__webpack_require__(/*! ./my-org-change.component.scss */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-change/my-org-change.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_2__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], MyOrgChange);
    return MyOrgChange;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n    <div class=\"ui-g-12 contactCss\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12 contactCsstop\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>群号:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"groupId\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['groupId'].valid&&userform.controls['groupId'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','groupId')\">群号不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>群主:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"ownerId\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['ownerId'].valid&&userform.controls['ownerId'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','ownerId')\">群主不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 contactCss\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>原群所属机构:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 org-name\">\r\n                    <input id=\"input\" class=\"contactTrackInput\" type=\"text\" pInputText formControlName=\"orgId\" disabled>\r\n                    <div class=\"clickspan\" (click)=\"openTree(1)\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>调整后群所属机构:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 org-name\">\r\n                    <input id=\"input\" class=\"contactTrackInput\" type=\"text\" pInputText formControlName=\"afterOrgId\" disabled>\r\n                    <div class=\"clickspan\" (click)=\"openTree(2)\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 contactCss\">\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>录入类别:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown [options]=\"operationTypeList\" class=\"trackcontactPropdowna\" formControlName=\"operationType\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text-right\">\r\n                    <label>经办时间</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-calendar formControlName=\"operationDateTimeStart\" class=\"track-contact-calendar\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\"\r\n                        (onSelect)=\"showTime('plan','start')\" (onBlur)=\"handInputDate('plan','start')\"></p-calendar>\r\n                    至\r\n                    <p-calendar formControlName=\"operationDateTimeEnd\" class=\"track-contact-calendar\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\"\r\n                        (onSelect)=\"showTime('plan','end')\" (onBlur)=\"handInputDate('plan','end')\"></p-calendar>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <button class=\"searchBtn\" (click)=\"query()\" [disabled]=\"!userform.valid\">查询</button>\r\n        <button class=\"resetBtn\" (click)=\"reset()\">重置</button>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"dataList\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"groupId\" header=\"群号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"groupName\" header=\"群名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"ownerId\" header=\"群主\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"ownerName\" header=\"群主名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"taskId\" header=\"任务编号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"orgId\" header=\"原群所属机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"afterOrgId\" header=\"调整后群所属机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"operationType\" header=\"录入类别\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.operationType | codeValuePie:operationTypeList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"ownerName\" header=\"群主名称\" [style]=\"{'width':'100px'}\"></p-column> -->\r\n            <p-column field=\"operationTellerNo\" header=\"经办人工号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"operationDateTime\" header=\"经办时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"statusId\" header=\"任务状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.statusId | codeValuePie:statuIdList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator rows={{pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12 table\">\r\n    <button class=\"resetBtn\" (click)=\"returnGroup()\">返回</button>\r\n</div> -->\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--选择机构-->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        机构树\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"contacttreeCall($event)\"></org-tree-component>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  padding-bottom: 3px; }\n\n.org-name {\n  display: flex; }\n\n.contactTrackInput {\n  width: 43.4% !important;\n  border-right: none;\n  min-width: 258px !important; }\n\n.text-right {\n  text-align: right; }\n\n.table {\n  text-align: center; }\n\n.name {\n  word-break: break-all; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\na {\n  color: #28B0C6; }\n\n.clickspan {\n  width: 6%;\n  height: 23px; }\n\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 1200px !important;\n  height: 90% !important; }\n\n:host/deep/ .track-contact-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .trackcontactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n.trackcontactInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .track-contact-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .trackcontactPropdowna .ui-dropdown {\n    width: 76% !important; }\n  .trackcontactInput {\n    width: 76% !important; }\n  .contactTrackInput {\n    width: 69.5% !important; } }\n\n.searchBtn {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: #34cfe6;\n  color: #fff;\n  width: 60px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLW9yZy9teS1vcmctaGlzdG9yeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcbXktY3VzdG9tLW9yZ1xcbXktb3JnLWhpc3RvcnlcXG15LW9yZy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksd0JBQXdCO0VBQ3hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0kscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUVLO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0ksdUJBQXVCLEVBQUEsRUFDMUI7O0FBRUw7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFYSjtNQVlRLGdCQUFnQixFQUFBLEVBRXZCOztBQUNEO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFWSjtNQVdRLGdCQUFnQixFQUFBLEVBRXZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLW9yZy9teS1vcmctaGlzdG9yeS9teS1vcmctaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuLm9yZy1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvbnRhY3RUcmFja0lucHV0IHtcclxuICAgIHdpZHRoOiA0My40JSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgbWluLXdpZHRoOiAyNThweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5jb250YWN0Q3NzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcbi5jb250YWN0Q3NzdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogIzI4QjBDNjtcclxufVxyXG4uY2xpY2tzcGFuIHtcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIGhlaWdodDogMjNweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuOmhvc3QvZGVlcC8gLnRyYWNrLWNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAyMy4yJTtcclxufVxyXG46aG9zdCAvZGVlcC8gLnRyYWNrY29udGFjdFByb3Bkb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcbi50cmFja2NvbnRhY3RJbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAvLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbiAgICAgOmhvc3QvZGVlcC8gLnRyYWNrLWNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAudHJhY2tjb250YWN0UHJvcGRvd25hIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRyYWNrY29udGFjdElucHV0IHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdFRyYWNrSW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA2OS41JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5zZWFyY2hCdG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG4ucmVzZXRCdG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: MyOrgHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrgHistory", function() { return MyOrgHistory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyOrgHistory = /** @class */ (function () {
    function MyOrgHistory(httpService, commonFunc, commfunc, fb, router) {
        this.httpService = httpService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        this.msgs = [];
        this.message = { msg: [] };
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.dataList = [];
        this.orgTreeDisplay = false; //模态框
        this.ch = app_pages_tzb_workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"]; //日期控件
        this.userform = fb.group({
            groupId: ['', app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"]],
            ownerId: ['', app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"]],
            orgId: [''],
            afterOrgId: [''],
            operationType: [''],
            operationDateTimeStart: [''],
            operationDateTimeEnd: [''],
        });
    }
    MyOrgHistory.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.statuIdList = this.code['statuIdGroup'];
        this.operationTypeList = this.code['operationTypeGroup'];
        this.queryClick();
    };
    //码值
    MyOrgHistory.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 选择机构/选择员工
    MyOrgHistory.prototype.openTree = function (i) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        this.orgTree = i;
    };
    // 关闭-机构模态框
    MyOrgHistory.prototype.contacttreeCall = function (param) {
        this.orgTreeDisplay = false;
        if (this.orgTree == '1') {
            this.userform.get('orgId').setValue(param.orgId);
        }
        else if (this.orgTree == '2') {
            this.userform.get('afterOrgId').setValue(param.orgId);
        }
    };
    // 开始、结束日期判断
    MyOrgHistory.prototype.showTime = function (param1, param2) {
        var _this = this;
        if (param1 == 'plan') {
            var operationDateTimeStart = this.commfunc.transDateN(this.userform.value.operationDateTimeStart);
            var operationDateTimeEnd = this.commfunc.transDateN(this.userform.value.operationDateTimeEnd);
            if (operationDateTimeStart && operationDateTimeEnd) {
                if (operationDateTimeStart > operationDateTimeEnd) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                    setTimeout(function () {
                        if (param2 == "start") {
                            _this.userform.value.operationDateTimeStart = null;
                        }
                        else {
                            _this.userform.value.planContactTimeTo = null;
                        }
                    });
                }
            }
        }
    };
    // 手动输入日期
    MyOrgHistory.prototype.handInputDate = function (param1, param2) {
        this.showTime(param1, param2);
    };
    //查询
    MyOrgHistory.prototype.query = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //列表查询
    MyOrgHistory.prototype.queryClick = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['pageSize'] = this.pageSize;
        param['pageNum'] = this.pageNum;
        param['operationDateTimeStart'] = this.commfunc.transDateN(this.userform.value.operationDateTimeStart);
        param['operationDateTimeEnd'] = this.commfunc.transDateN(this.userform.value.operationDateTimeEnd);
        this.httpService.adjustmentGroupOrgQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.resultList ? data.resultList : [];
                _this.totalNum = data.total;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 重置
    MyOrgHistory.prototype.reset = function () {
        this.userform.get('groupId').setValue('');
        this.userform.get('ownerId').setValue('');
        this.userform.get('orgId').setValue('');
        this.userform.get('afterOrgId').setValue('');
        this.userform.get('operationType').setValue('');
        this.userform.get('operationDateTimeStart').setValue('');
        this.userform.get('operationDateTimeEnd').setValue('');
    };
    MyOrgHistory.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        this.pageNum = event.page + 1;
        this.first = event.first;
        this.queryClick();
    };
    //返回群列表
    MyOrgHistory.prototype.returnGroup = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-group']);
    };
    MyOrgHistory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-org-history',
            template: __webpack_require__(/*! ./my-org-history.component.html */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.html"),
            styles: [__webpack_require__(/*! ./my-org-history.component.scss */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-org-history/my-org-history.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_2__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], MyOrgHistory);
    return MyOrgHistory;
}());



/***/ })

}]);
//# sourceMappingURL=default~custom-group-custom-group-module~my-custom-org-my-custom-org-module.js.map