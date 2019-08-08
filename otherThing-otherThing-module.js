(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otherThing-otherThing-module"],{

/***/ "./src/app/pages/tzb/custom/otherThing/otherThing.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/otherThing.component.ts ***!
  \*********************************************************************/
/*! exports provided: OtherThingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherThingComponent", function() { return OtherThingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherThingComponent = /** @class */ (function () {
    function OtherThingComponent() {
    }
    OtherThingComponent.prototype.ngOnInit = function () { };
    OtherThingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'otherThing',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], OtherThingComponent);
    return OtherThingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/otherThing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/otherThing.module.ts ***!
  \******************************************************************/
/*! exports provided: OtherThingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherThingModule", function() { return OtherThingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _otherThing_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otherThing.routing */ "./src/app/pages/tzb/custom/otherThing/otherThing.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _workTask_workTask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workTask/workTask.component */ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.ts");
/* harmony import */ var _workType_workType_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workType/workType.component */ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.ts");
/* harmony import */ var _workTask_workTaskAdd_workTaskAdd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workTask/workTaskAdd/workTaskAdd.component */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.ts");
/* harmony import */ var _otherThing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./otherThing.component */ "./src/app/pages/tzb/custom/otherThing/otherThing.component.ts");
/* harmony import */ var _workTask_workTaskUpdate_workTaskUpdate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workTask/workTaskUpdate/workTaskUpdate.component */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OtherThingModule = /** @class */ (function () {
    function OtherThingModule() {
    }
    OtherThingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _otherThing_routing__WEBPACK_IMPORTED_MODULE_4__["OtherThingRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                _workTask_workTask_component__WEBPACK_IMPORTED_MODULE_6__["WorkTaskComponent"],
                _workType_workType_component__WEBPACK_IMPORTED_MODULE_7__["WorkTypeComponent"],
                _workTask_workTaskAdd_workTaskAdd_component__WEBPACK_IMPORTED_MODULE_8__["WorkTaskAddComponent"],
                _otherThing_component__WEBPACK_IMPORTED_MODULE_9__["OtherThingComponent"],
                _workTask_workTaskUpdate_workTaskUpdate_component__WEBPACK_IMPORTED_MODULE_10__["WorkTaskUpdateComponent"]
            ],
            providers: []
        })
    ], OtherThingModule);
    return OtherThingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/otherThing.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/otherThing.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routes, OtherThingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherThingRouting", function() { return OtherThingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workTask_workTask_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workTask/workTask.component */ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.ts");
/* harmony import */ var _workType_workType_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workType/workType.component */ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.ts");
/* harmony import */ var _workTask_workTaskAdd_workTaskAdd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workTask/workTaskAdd/workTaskAdd.component */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.ts");




var routes = [
    {
        path: '',
        children: [
            {
                path: 'workTask',
                component: _workTask_workTask_component__WEBPACK_IMPORTED_MODULE_1__["WorkTaskComponent"],
                children: [
                    {
                        path: 'workTaskAdd',
                        component: _workTask_workTaskAdd_workTaskAdd_component__WEBPACK_IMPORTED_MODULE_3__["WorkTaskAddComponent"]
                    }
                ]
            },
            {
                path: 'workType',
                component: _workType_workType_component__WEBPACK_IMPORTED_MODULE_2__["WorkTypeComponent"]
            }
        ]
    }
];
var OtherThingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskAdd.bean.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/bean/taskAdd.bean.ts ***!
  \***************************************************************************/
/*! exports provided: TaskAddBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddBean", function() { return TaskAddBean; });
var TaskAddBean = /** @class */ (function () {
    function TaskAddBean() {
    }
    return TaskAddBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskCategoryListQry.bean.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/bean/taskCategoryListQry.bean.ts ***!
  \***************************************************************************************/
/*! exports provided: TaskCategoryListQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCategoryListQryBean", function() { return TaskCategoryListQryBean; });
//列表查询
var TaskCategoryListQryBean = /** @class */ (function () {
    function TaskCategoryListQryBean() {
    }
    return TaskCategoryListQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskModify.bean.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/bean/taskModify.bean.ts ***!
  \******************************************************************************/
/*! exports provided: TaskModifyBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModifyBean", function() { return TaskModifyBean; });
var TaskModifyBean = /** @class */ (function () {
    function TaskModifyBean() {
    }
    return TaskModifyBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 工作任务维护 -->\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 workTaskPage\">\r\n        <header-title [Info]=\"'工作任务维护'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>任务名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskCategoryListQryBean.taskCategoryName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>所属系统:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"subSysIdQry\" [(ngModel)]=\"taskCategoryListQryBean.subSysId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>流程编码:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskCategoryListQryBean.processCode\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"statusIdQry\" [(ngModel)]=\"taskCategoryListQryBean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>类型大类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskBigTypeQry\" [(ngModel)]=\"taskCategoryListQryBean.taskTypeParentId\" (onChange)=\"taskBigChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>类型小类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskSmallTypeQry\" [(ngModel)]=\"taskCategoryListQryBean.taskTypeId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>事项大类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsBigTypeQry\" [(ngModel)]=\"taskCategoryListQryBean.itemsTypeParentId\" (onChange)=\"itemsBigChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>事项小类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsSmallTypeQry\" [(ngModel)]=\"taskCategoryListQryBean.itemsTypeId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>是否在工作任务展示:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskCategoryListQryBean.isShow\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>是否需要回调服务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskCategoryListQryBean.isCallBack\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 center\">\r\n                <span>是否自动任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskCategoryListQryBean.isAutoTask\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <button class=\"btn_1\" pButton type=\"button\" label=\"新增\" *ngIf=\"permissionCheck('SID01070_P0167')\" (click)=\"workTaskAdd()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"taskdata\" [emptyMessage]=\"tabMesg\" [scrollable]=\"true\" [responsive]=\"true\">\r\n            <p-column field=\"taskCategoryName\" header=\"任务名称\"></p-column>\r\n            <p-column field=\"taskType\" header=\"任务类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.taskType|codeValuePie:workTaskTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"itemsTypeParentId\" header=\"事项大类\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.itemsTypeParentId|codeValuePie:itemsTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"itemsTypeId\" header=\"事项小类\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.itemsTypeId|codeValuePie:itemsTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isAutoTask\" header=\"是否自动任务\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.isAutoTask|codeValuePie:yesOrNoItems}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isSkip\" header=\"是否跳过\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.isSkip|codeValuePie:yesOrNoItems}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"statusId\" header=\"任务状态\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.statusId|codeValuePie:statusOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"processCode\" header=\"流程编号\"></p-column>\r\n            <p-column field=\"processChildCode\" header=\"任务节点\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelUpdateIco\" (click)=\"workTaskUpdate(col)\" *ngIf=\"permissionCheck('SID01070_P0168')\">修改</span>\r\n                        <span class=\"tabelDeleteIco\" (click)=\"workTaskDelete(col)\" *ngIf=\"permissionCheck('SID01070_P0169')\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{taskCategoryListQryBean.pageSize}}\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"workTaskaddPage\" [(visible)]=\"workTaskaddPage\" modal=\"true\" width=\"900\" height=\"800\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <workTaskAdd [inValue]=\"inValueAdd\" (outValue)=\"addCall($event)\"></workTaskAdd>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"workTaskUpdatePage\" [(visible)]=\"workTaskUpdatePage\" modal=\"true\" width=\"900\" height=\"800\">\r\n    <p-header>\r\n        {{updateHeader}}\r\n    </p-header>\r\n    <workTaskUpdate [inValue]=\"inValueUpdate\" (outValue)=\"updateCall($event)\"></workTaskUpdate>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workcenter {\n  text-align: center; }\n\n.btn {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.center {\n  text-align: right; }\n\n.btn_1 {\n  background: #e6b800; }\n\n.btn_1:hover {\n    background: #dbaf00; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdGhlclRoaW5nL3dvcmtUYXNrL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3RoZXJUaGluZ1xcd29ya1Rhc2tcXHdvcmtUYXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0MscUJBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRHZCO0lBR1EsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL290aGVyVGhpbmcvd29ya1Rhc2svd29ya1Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya2NlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRuXzF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZiODAwO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGJhZjAwO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskComponent", function() { return WorkTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_taskModify_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/taskModify.bean */ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskModify.bean.ts");
/* harmony import */ var _bean_taskAdd_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/taskAdd.bean */ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskAdd.bean.ts");
/* harmony import */ var _bean_taskCategoryListQry_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/taskCategoryListQry.bean */ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskCategoryListQry.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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









var WorkTaskComponent = /** @class */ (function () {
    function WorkTaskComponent(confirmationService, httpService, commfunc, router) {
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.first = 0; //分页控制
        this.msgs = [];
        this.applymgs = [
            { label: '请选择', value: '' }, { label: '是', value: '0' }, { label: '否', value: '1' },
        ];
        this.statusIdQry = [
            { label: '请选择', value: '' }, { label: '正常', value: '0' }, { label: '停用', value: '1' },
        ];
        this.subSysIdQry = [
        // { label: '请选择', value: '' },
        // { label: '客户运营平台', value: 'COP' },
        // { label: '统一计价平台', value: 'UVP' },
        // { label: '产品运营平台', value: 'POP' },
        // { label: '客户管理系统', value: 'CRM' },
        ];
        this.RelationTaskList = [];
        this.relationshow = false;
        this.flow = false;
        this.workTaskaddPage = false;
        this.workTaskUpdatePage = false;
        this.selfTaskN = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        this.selfTaskY = false;
        this.taskcodeshow = false;
        this.taskBigTypeQry = []; //查询任务大类
        this.taskSmallTypeQry = []; //查询任务小类
        this.itemsBigTypeQry = []; //查询事项大类
        this.itemsSmallTypeQry = []; //查询事项小类
        this.taskModifyBean = new _bean_taskModify_bean__WEBPACK_IMPORTED_MODULE_1__["TaskModifyBean"]();
        this.taskAddBean = new _bean_taskAdd_bean__WEBPACK_IMPORTED_MODULE_2__["TaskAddBean"]();
        this.taskCategoryListQryBean = new _bean_taskCategoryListQry_bean__WEBPACK_IMPORTED_MODULE_3__["TaskCategoryListQryBean"]();
        this.taskBig();
        this.itemsBig();
    }
    WorkTaskComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.statusOptions = this.code['StatusWorkTask'];
        this.yesOrNoItems = this.code['YesOrNo'];
        this.itemsTypeOptions = this.code['ItemsType'];
        this.workTaskTypeOptions = this.code['WorkTaskBigType'];
        this.taskCategoryListQryBean.pageSize = 10;
        this.taskCategoryListQryBean.pageNum = 1;
        this.updateHeader = "修改";
        this.addHeader = "新增";
        this.taskdata = [];
    };
    //翻页
    WorkTaskComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.taskCategoryListQryBean.pageSize = event.rows * 1;
        //当前页
        this.taskCategoryListQryBean.pageNum = event.page + 1;
        this.first = event.page * this.taskCategoryListQryBean.pageSize;
        this.taskQuery();
    };
    //任务大类
    WorkTaskComponent.prototype.taskBig = function () {
        var _this = this;
        var item = {
            taskTypeKey: 'taskType'
        };
        this.httpService.taskTypeQry(item).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.taskBigTypeQry = [{ label: '请选择', value: '' },];
            arr.forEach(function (param) {
                _this.taskBigTypeQry.push({ label: param.taskTypeName, value: param.taskTypeId });
            });
        });
    };
    //任务大类切换
    WorkTaskComponent.prototype.taskBigChange = function () {
        var _this = this;
        if (this.taskCategoryListQryBean.taskTypeParentId && this.taskCategoryListQryBean.taskTypeParentId != '') {
            var params = {
                taskTypeParentId: this.taskCategoryListQryBean.taskTypeParentId,
                taskTypeKey: 'taskType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.taskSmallTypeQry = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.taskSmallTypeQry.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.taskSmallTypeQry = [{ label: '请选择', value: '' },];
        }
    };
    //事项大类
    WorkTaskComponent.prototype.itemsBig = function () {
        var _this = this;
        var param = {
            taskTypeKey: 'itemsType'
        };
        this.httpService.taskTypeQry(param).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsBigTypeQry = [{ label: '请选择', value: '' }, { label: '查询', value: '04' },];
            arr.forEach(function (item) {
                _this.itemsBigTypeQry.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
    };
    //事项大类切换
    WorkTaskComponent.prototype.itemsBigChange = function () {
        var _this = this;
        if (this.taskCategoryListQryBean.itemsTypeParentId && this.taskCategoryListQryBean.itemsTypeParentId != '') {
            var params = {
                taskTypeParentId: this.taskCategoryListQryBean.itemsTypeParentId,
                taskTypeKey: 'itemsType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.itemsSmallTypeQry = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.itemsSmallTypeQry.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.itemsSmallTypeQry = [{ label: '请选择', value: '' },];
        }
    };
    WorkTaskComponent.prototype.showNumAdd = function () {
        if (this.taskAddBean.orderNo.length > 2) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '最多输入两位' });
            return;
        }
    };
    WorkTaskComponent.prototype.showNumUpdate = function () {
        if (this.taskModifyBean.orderNo.length > 2) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '最多输入两位' });
            return;
        }
    };
    WorkTaskComponent.prototype.queryFirst = function () {
        this.taskCategoryListQryBean.pageSize = 10;
        this.taskCategoryListQryBean.pageNum = 1;
        this.first = 0;
        this.taskQuery();
    };
    //查询
    WorkTaskComponent.prototype.taskQuery = function () {
        var _this = this;
        this.httpService.taskCategoryQry(this.taskCategoryListQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.taskdata = data.taskCategoryList;
                _this.totalNum = data.total;
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
    WorkTaskComponent.prototype.workTaskAdd = function () {
        this.workTaskaddPage = true;
    };
    WorkTaskComponent.prototype.workTaskUpdate = function (item) {
        this.workTaskUpdatePage = true;
        this.inValueUpdate = item;
    };
    WorkTaskComponent.prototype.workTaskDelete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确认删除?',
            header: '删除',
            icon: 'fa fa-trash',
            accept: function () {
                var param = { taskCategoryId: item.taskCategoryId };
                _this.httpService.taskDel(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '删除成功' });
                        _this.taskQuery();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
            },
            reject: function () {
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '取消删除', detail: '已取消删除' }];
            }
        });
    };
    //按钮权限
    WorkTaskComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    WorkTaskComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    WorkTaskComponent.prototype.addCall = function (event) {
        if (event == '新增成功') {
            this.queryFirst();
            this.workTaskaddPage = false;
        }
        else {
            this.workTaskaddPage = false;
        }
    };
    WorkTaskComponent.prototype.updateCall = function (event) {
        if (event == '修改成功') {
            this.queryFirst();
            this.workTaskUpdatePage = false;
        }
        else {
            this.workTaskUpdatePage = false;
        }
    };
    WorkTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workTask',
            template: __webpack_require__(/*! ./workTask.component.html */ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.html"),
            styles: [__webpack_require__(/*! ./workTask.component.scss */ "./src/app/pages/tzb/custom/otherThing/workTask/workTask.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], WorkTaskComponent);
    return WorkTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/bean/taskAdd.bean.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/bean/taskAdd.bean.ts ***!
  \***************************************************************************************/
/*! exports provided: TaskAddBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddBean", function() { return TaskAddBean; });
var TaskAddBean = /** @class */ (function () {
    function TaskAddBean() {
    }
    return TaskAddBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'工作任务维护新增'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.taskCategoryName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务URL：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.url\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务大类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskBigType\" [(ngModel)]=\"taskAddBean.taskTypeParentId\" (onChange)=\"taskBigChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务小类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskSmallType\" [(ngModel)]=\"taskAddBean.taskType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>事项大类：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsBigType\" [(ngModel)]=\"taskAddBean.itemsTypeParentId\" (onChange)=\"itemsBigChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>事项小类：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsSmallType\" [(ngModel)]=\"taskAddBean.itemsTypeId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否在工作任务展示:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskAddBean.isShow\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>排序:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.orderNo\" (blur)=\"showNumAdd()\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否自动任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskAddBean.isAutoTask\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否回调任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskAddBean.isCallBack\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>服务名:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.serviceName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>方法名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.methodName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>入参BEAN:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.inputBean\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>所属系统:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"subSysIdQry\" [(ngModel)]=\"taskAddBean.subSysId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否关联任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskAddBean.isParentTask\" (onChange)=\"changethis()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>关联任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"RelationTaskList\" [(ngModel)]=\"taskAddBean.taskCategoryRel\" filter=\"filter\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>流程编号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.processCode\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否跳过:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskAddBean.isSkip\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务节点:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.processChildCode\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务节点名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskAddBean.processName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务状态：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"statusIdQry\" [(ngModel)]=\"taskAddBean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"taskAddSave()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"addCancel()\"></button>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  text-align: right; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdGhlclRoaW5nL3dvcmtUYXNrL3dvcmtUYXNrQWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3RoZXJUaGluZ1xcd29ya1Rhc2tcXHdvcmtUYXNrQWRkXFx3b3JrVGFza0FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjs7RUFHUSxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL290aGVyVGhpbmcvd29ya1Rhc2svd29ya1Rhc2tBZGQvd29ya1Rhc2tBZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WorkTaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskAddComponent", function() { return WorkTaskAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bean_taskAdd_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/taskAdd.bean */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/bean/taskAdd.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkTaskAddComponent = /** @class */ (function () {
    function WorkTaskAddComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.taskcodeshow = false;
        this.relationshow = false;
        this.flow = false;
        this.selfTaskY = false;
        this.selfTaskN = false;
        this.first = 0; //分页控制
        this.msgs = [];
        this.applymgs = [
            { label: '请选择', value: '' }, { label: '是', value: '0' }, { label: '否', value: '1' },
        ];
        this.taskBigType = []; //任务大类
        this.itemsBigType = []; //事项大类
        this.taskSmallType = []; //任务小类
        this.itemsSmallType = []; //事项小类
        this.statusIdQry = [
            { label: '请选择', value: '' }, { label: '正常', value: '0' }, { label: '停用', value: '1' },
        ];
        this.subSysIdQry = [
        // { label: '请选择', value: '' },
        // { label: '客户运营平台', value: 'COP' },
        // { label: '统一计价平台', value: 'UVP' },
        // { label: '产品运营平台', value: 'POP' },
        // { label: '客户管理系统', value: 'CRM' },
        ];
        this.RelationTaskList = []; //关联任务
        this.taskAddBean = new _bean_taskAdd_bean__WEBPACK_IMPORTED_MODULE_4__["TaskAddBean"]();
    }
    WorkTaskAddComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.statusOptions = this.code['StatusWorkTask'];
        this.yesOrNoItems = this.code['YesOrNo'];
        this.itemsTypeOptions = this.code['ItemsType'];
        this.workTaskTypeOptions = this.code['WorkTaskBigType'];
        this.subSysIdQry = this.code['SubSysIdQry'];
        this.taskBig();
        this.itemsBig();
    };
    //是否关联任务
    WorkTaskAddComponent.prototype.changethis = function () {
        var _this = this;
        if (this.taskAddBean.isParentTask == '0') {
            this.relationshow = true;
            this.flow = false;
            this.taskcodeshow = true;
            this.httpService.taskCategoryListQry({}).subscribe(function (data) {
                data.taskCategoryList.forEach(function (item, i) {
                    _this.RelationTaskList.push({ label: item.taskCategoryName, value: item.taskCategoryId });
                });
            });
        }
        else if (this.taskAddBean.isParentTask == '1') {
            this.relationshow = false;
            this.flow = true;
            this.taskcodeshow = true;
        }
        else {
            this.taskcodeshow = false;
            this.flow = false;
            this.relationshow = false;
        }
    };
    //任务大类
    WorkTaskAddComponent.prototype.taskBig = function () {
        var _this = this;
        var item = {
            taskTypeKey: 'taskType'
        };
        this.httpService.taskTypeQry(item).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.taskBigType = [{ label: '请选择', value: '' },];
            arr.forEach(function (param) {
                _this.taskBigType.push({ label: param.taskTypeName, value: param.taskTypeId });
            });
        });
    };
    //任务大类切换
    WorkTaskAddComponent.prototype.taskBigChange = function () {
        var _this = this;
        if (this.taskAddBean.taskTypeParentId && this.taskAddBean.taskTypeParentId != '') {
            var params = {
                taskTypeParentId: this.taskAddBean.taskTypeParentId,
                taskTypeKey: 'taskType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.taskSmallType = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.taskSmallType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.taskSmallType = [{ label: '请选择', value: '' },];
        }
    };
    //事项大类
    WorkTaskAddComponent.prototype.itemsBig = function () {
        var _this = this;
        var param = {
            taskTypeKey: 'itemsType'
        };
        this.httpService.taskTypeQry(param).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsBigType = [{ label: '请选择', value: '' }, { label: '查询', value: '04' },];
            arr.forEach(function (item) {
                _this.itemsBigType.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
    };
    //事项大类切换
    WorkTaskAddComponent.prototype.itemsBigChange = function () {
        var _this = this;
        if (this.taskAddBean.itemsTypeParentId && this.taskAddBean.itemsTypeParentId != '') {
            var params = {
                taskTypeParentId: this.taskAddBean.itemsTypeParentId,
                taskTypeKey: 'itemsType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.itemsSmallType = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.itemsSmallType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.itemsSmallType = [{ label: '请选择', value: '' },];
        }
    };
    WorkTaskAddComponent.prototype.showNumAdd = function () {
        if (this.taskAddBean.orderNo.length > 2) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '最多输入两位' });
            return;
        }
    };
    //码值
    WorkTaskAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    WorkTaskAddComponent.prototype.taskAddSave = function () {
        var _this = this;
        this.httpService.taskAdd(this.taskAddBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '新增成功' });
                _this.outValue.emit('新增成功');
                _this.taskAddBean = new _bean_taskAdd_bean__WEBPACK_IMPORTED_MODULE_4__["TaskAddBean"]();
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
    WorkTaskAddComponent.prototype.addCancel = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkTaskAddComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkTaskAddComponent.prototype, "outValue", void 0);
    WorkTaskAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workTaskAdd',
            template: __webpack_require__(/*! ./workTaskAdd.component.html */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.html"),
            styles: [__webpack_require__(/*! ./workTaskAdd.component.scss */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskAdd/workTaskAdd.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], WorkTaskAddComponent);
    return WorkTaskAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'工作任务维护修改'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.taskCategoryName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务URL：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.url\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务大类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskBigTypeUpdate\" [(ngModel)]=\"taskModifyBean.taskTypeParentId\" (onChange)=\"taskBigChange(taskModifyBean.taskTypeParentId)\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务小类:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"taskSmallTypeUpdate\" [(ngModel)]=\"taskModifyBean.taskType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>事项大类：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsBigTypeUpdate\" [(ngModel)]=\"taskModifyBean.itemsTypeParentId\" (onChange)=\"itemsBigChange(taskModifyBean.itemsTypeParentId)\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>事项小类：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"itemsSmallTypeUpdate\" [(ngModel)]=\"taskModifyBean.itemsTypeId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否在工作任务展示:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskModifyBean.isShow\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>排序:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.orderNo\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否自动任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskModifyBean.isAutoTask\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否回调任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskModifyBean.isCallBack\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>服务名:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.serviceName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>方法名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.methodName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>入参BEAN:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.inputBean\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>所属系统:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"subSysIdQry\" [(ngModel)]=\"taskModifyBean.subSysId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否关联任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskModifyBean.isParentTask\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>关联任务:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"RelationTaskList\" [(ngModel)]=\"taskModifyBean.taskCategoryRel\" filter=\"filter\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务流程：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.processCode\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>是否跳过:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"applymgs\" [(ngModel)]=\"taskModifyBean.isSkip\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务节点:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.processChildCode\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务节点名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskModifyBean.processName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>任务状态：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"statusIdQry\" [(ngModel)]=\"taskModifyBean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"updateSave()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"updateCancel()\"></button>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  text-align: right; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdGhlclRoaW5nL3dvcmtUYXNrL3dvcmtUYXNrVXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3RoZXJUaGluZ1xcd29ya1Rhc2tcXHdvcmtUYXNrVXBkYXRlXFx3b3JrVGFza1VwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjs7RUFHUSxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL290aGVyVGhpbmcvd29ya1Rhc2svd29ya1Rhc2tVcGRhdGUvd29ya1Rhc2tVcGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: WorkTaskUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskUpdateComponent", function() { return WorkTaskUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bean_taskModify_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/taskModify.bean */ "./src/app/pages/tzb/custom/otherThing/workTask/bean/taskModify.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkTaskUpdateComponent = /** @class */ (function () {
    function WorkTaskUpdateComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.taskcodeshow = false;
        this.relationshow = false;
        this.flow = false;
        this.selfTaskY = false;
        this.selfTaskN = false;
        this.first = 0; //分页控制
        this.msgs = [];
        this.applymgs = [
            { label: '请选择', value: '' }, { label: '是', value: '0' }, { label: '否', value: '1' },
        ];
        this.taskBigTypeUpdate = []; //修改任务大类
        this.taskSmallTypeUpdate = []; //修改任务小类
        this.itemsBigTypeUpdate = []; //修改事项大类
        this.itemsSmallTypeUpdate = []; //修改事项小类
        this.statusIdQry = [
            { label: '请选择', value: '' }, { label: '正常', value: '0' }, { label: '停用', value: '1' },
        ];
        this.subSysIdQry = [
        // { label: '请选择', value: '' },
        // { label: '客户运营平台', value: 'COP' },
        // { label: '统一计价平台', value: 'UVP' },
        // { label: '产品运营平台', value: 'POP' },
        // { label: '客户管理系统', value: 'CRM' },
        ];
        this.RelationTaskList = []; //关联任务
        this.taskModifyBean = new _bean_taskModify_bean__WEBPACK_IMPORTED_MODULE_4__["TaskModifyBean"]();
    }
    WorkTaskUpdateComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.statusOptions = this.code['StatusWorkTask'];
        this.yesOrNoItems = this.code['YesOrNo'];
        this.itemsTypeOptions = this.code['ItemsType'];
        this.workTaskTypeOptions = this.code['WorkTaskBigType'];
        this.subSysIdQry = this.code['SubSysIdQry'];
        this.taskModifyBean = this.inValue;
        console.log(this.inValue);
        this.workTaskUpdate(this.inValue);
        this.taskBigChange(this.inValue.taskTypeParentId);
        this.itemsBigChange(this.inValue.itemsTypeParentId);
    };
    WorkTaskUpdateComponent.prototype.workTaskUpdate = function (item) {
        var _this = this;
        var params = {
            taskTypeParentId: item.taskTypeParentId,
            taskTypeKey: 'taskType'
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.taskBigTypeUpdate = [];
            arr.forEach(function (item) {
                _this.taskBigTypeUpdate.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
        var param = {
            taskTypeParentId: item.itemsTypeParentId,
            taskTypeKey: 'itemsType'
        };
        this.httpService.taskTypeQry(param).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsBigTypeUpdate = [];
            arr.forEach(function (item) {
                _this.itemsBigTypeUpdate.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
    };
    //是否关联任务
    WorkTaskUpdateComponent.prototype.changethis = function () {
        var _this = this;
        if (this.taskModifyBean.isParentTask == '0') {
            this.relationshow = true;
            this.flow = false;
            this.taskcodeshow = true;
            this.httpService.taskCategoryListQry({}).subscribe(function (data) {
                data.taskCategoryList.forEach(function (item, i) {
                    _this.RelationTaskList.push({ label: item.taskCategoryName, value: item.taskCategoryId });
                });
            });
        }
        else if (this.taskModifyBean.isParentTask == '1') {
            this.relationshow = false;
            this.flow = true;
            this.taskcodeshow = true;
        }
        else {
            this.taskcodeshow = false;
            this.flow = false;
            this.relationshow = false;
        }
    };
    //任务大类
    WorkTaskUpdateComponent.prototype.taskBig = function () {
        var _this = this;
        var item = {
            taskTypeKey: 'taskType'
        };
        this.httpService.taskTypeQry(item).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.taskBigTypeUpdate = [{ label: '请选择', value: '' },];
            arr.forEach(function (param) {
                _this.taskBigTypeUpdate.push({ label: param.taskTypeName, value: param.taskTypeId });
            });
        });
    };
    //任务大类切换
    WorkTaskUpdateComponent.prototype.taskBigChange = function (item) {
        var _this = this;
        if (item && item != '') {
            var params = {
                taskTypeParentId: item,
                taskTypeKey: 'taskType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.taskSmallTypeUpdate = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.taskSmallTypeUpdate.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.taskSmallTypeUpdate = [{ label: '请选择', value: '' },];
        }
    };
    //事项大类
    WorkTaskUpdateComponent.prototype.itemsBig = function () {
        var _this = this;
        var param = {
            taskTypeKey: 'itemsType'
        };
        this.httpService.taskTypeQry(param).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsBigTypeUpdate = [{ label: '请选择', value: '' }, { label: '查询', value: '04' },];
            arr.forEach(function (item) {
                _this.itemsBigTypeUpdate.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
    };
    //事项大类切换
    WorkTaskUpdateComponent.prototype.itemsBigChange = function (item) {
        var _this = this;
        if (item && item != '') {
            var params = {
                taskTypeParentId: item,
                taskTypeKey: 'itemsType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.itemsSmallTypeUpdate = [{ label: '请选择', value: '' },];
                arr.forEach(function (item) {
                    _this.itemsSmallTypeUpdate.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
        else {
            this.itemsSmallTypeUpdate = [{ label: '请选择', value: '' },];
        }
    };
    WorkTaskUpdateComponent.prototype.showNumAdd = function () {
        if (this.taskModifyBean.orderNo.length > 2) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '最多输入两位' });
            return;
        }
    };
    //码值
    WorkTaskUpdateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    WorkTaskUpdateComponent.prototype.updateCancel = function () {
        this.outValue.emit(false);
    };
    WorkTaskUpdateComponent.prototype.updateSave = function () {
        var _this = this;
        this.httpService.taskModify(this.taskModifyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '修改成功' });
                _this.outValue.emit('修改成功');
                _this.taskModifyBean = new _bean_taskModify_bean__WEBPACK_IMPORTED_MODULE_4__["TaskModifyBean"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkTaskUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkTaskUpdateComponent.prototype, "outValue", void 0);
    WorkTaskUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workTaskUpdate',
            template: __webpack_require__(/*! ./workTaskUpdate.component.html */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.html"),
            styles: [__webpack_require__(/*! ./workTaskUpdate.component.scss */ "./src/app/pages/tzb/custom/otherThing/workTask/workTaskUpdate/workTaskUpdate.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], WorkTaskUpdateComponent);
    return WorkTaskUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/bean/QueryListTaskType.bean.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/bean/QueryListTaskType.bean.ts ***!
  \*************************************************************************************/
/*! exports provided: QueryListTaskTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryListTaskTypeBean", function() { return QueryListTaskTypeBean; });
//查询
var QueryListTaskTypeBean = /** @class */ (function () {
    function QueryListTaskTypeBean() {
    }
    return QueryListTaskTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/bean/UpdateTaskType.bean.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/bean/UpdateTaskType.bean.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateTaskTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskTypeBean", function() { return UpdateTaskTypeBean; });
//修改
var UpdateTaskTypeBean = /** @class */ (function () {
    function UpdateTaskTypeBean() {
    }
    return UpdateTaskTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/bean/batchDeleteTaskType.bean.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/bean/batchDeleteTaskType.bean.ts ***!
  \***************************************************************************************/
/*! exports provided: BatchDeleteTaskTypeBean, taskTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchDeleteTaskTypeBean", function() { return BatchDeleteTaskTypeBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskTypeList", function() { return taskTypeList; });
var BatchDeleteTaskTypeBean = /** @class */ (function () {
    function BatchDeleteTaskTypeBean() {
    }
    return BatchDeleteTaskTypeBean;
}());

var taskTypeList = /** @class */ (function () {
    function taskTypeList() {
    }
    return taskTypeList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/bean/insertTaskType.bean.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/bean/insertTaskType.bean.ts ***!
  \**********************************************************************************/
/*! exports provided: InsertTaskTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTaskTypeBean", function() { return InsertTaskTypeBean; });
//新增
var InsertTaskTypeBean = /** @class */ (function () {
    function InsertTaskTypeBean() {
    }
    return InsertTaskTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/workType.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 工作类型维护 -->\r\n<div class=\"ui-g-12 typePage boxShadow\">\r\n    <header-title [Info]=\"'工作类型维护'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3 workright\">\r\n            <span>类型名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"queryListTaskTypeBean.taskTypeName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <button class=\"btn_1\" pButton type=\"button\" label=\"新增\" *ngIf=\"permissionCheck('SID01069_P0164')\" (click)=\"typeAdd()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"typedata\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"taskTypeId\" header=\"工作类型ID\"></p-column>\r\n            <p-column field=\"taskTypeName\" header=\"工作类型名称\"></p-column>\r\n            <p-column field=\"taskTypeParentId\" header=\"上级类型\"></p-column>\r\n            <p-column field=\"taskTypeKey\" header=\"类型标识\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelUpdateIco\" (click)=\"typeUpdate(col)\" *ngIf=\"permissionCheck('SID01069_P0165')\">修改</span>\r\n                        <span class=\"tabelDeleteIco\" (click)=\"typeDelete(col)\" *ngIf=\"permissionCheck('SID01069_P0166')\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{queryListTaskTypeBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"typeAddPage\" [(visible)]=\"typeAddPage\" modal=\"true\" width=\"900\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>类型名称：</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" name=\"taskTypeName\" formControlName=\"taskTypeName\" pInputText [(ngModel)]=\"insertTaskTypeBean.taskTypeName\"\r\n                    />\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['taskTypeName'].valid&&userform.controls['taskTypeName'].dirty\">必输项!</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>类型标识：</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" name=\"taskTypeKey\" formControlName=\"taskTypeKey\" pInputText [(ngModel)]=\"insertTaskTypeBean.taskTypeKey\"\r\n                        (blur)=\"myFunction()\" />\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['taskTypeKey'].valid&&userform.controls['taskTypeKey'].dirty\">必输项!</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>是否子类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"chooseType\" [(ngModel)]=\"typeYES\" (onChange)=\"checkThis()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\" *ngIf=\"typeParent\">\r\n                <span>上级类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\" *ngIf=\"typeParent\">\r\n                <p-dropdown [options]=\"isStatus\" [(ngModel)]=\"insertTaskTypeBean.taskTypeParentId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"addSave()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"addCancel()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"typeUpdatePage\" [(visible)]=\"typeUpdatePage\" modal=\"true\" width=\"900\" height=\"600\">\r\n    <p-header>\r\n        {{updateHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>类型名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"updateTaskTypeBean.taskTypeName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>类型标识：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText disabled [(ngModel)]=\"updateTaskTypeBean.taskTypeKey\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>是否子类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"chooseType\" [(ngModel)]=\"typeYES\" (onChange)=\"checkThis()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\" *ngIf=\"typeParent\">\r\n                <span>上级类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\" *ngIf=\"typeParent\">\r\n                <p-dropdown [options]=\"isStatus\" [(ngModel)]=\"updateTaskTypeBean.taskTypeParentId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"updateSave()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"updateCancel()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-confirmDialog></p-confirmDialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/workType.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".typePage .workright {\n  text-align: right; }\n\n.typePage .table {\n  text-align: center; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.tit {\n  text-align: right; }\n\n.btn_1 {\n  background: #e6b800; }\n\n.btn_1:hover {\n    background: #dbaf00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdGhlclRoaW5nL3dvcmtUeXBlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3RoZXJUaGluZ1xcd29ya1R5cGVcXHdvcmtUeXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1Esa0JBQWtCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0MscUJBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRHZCO0lBR1EsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL290aGVyVGhpbmcvd29ya1R5cGUvd29ya1R5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZVBhZ2V7XHJcbiAgICAud29ya3JpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcblx0d29yZC13cmFwOmJyZWFrLXdvcmQ7XHJcbn1cclxuLnRpdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG5fMXtcclxuICAgIGJhY2tncm91bmQ6ICNlNmI4MDA7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkYmFmMDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/otherThing/workType/workType.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTypeComponent", function() { return WorkTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_QueryListTaskType_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/QueryListTaskType.bean */ "./src/app/pages/tzb/custom/otherThing/workType/bean/QueryListTaskType.bean.ts");
/* harmony import */ var _bean_UpdateTaskType_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/UpdateTaskType.bean */ "./src/app/pages/tzb/custom/otherThing/workType/bean/UpdateTaskType.bean.ts");
/* harmony import */ var _bean_insertTaskType_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/insertTaskType.bean */ "./src/app/pages/tzb/custom/otherThing/workType/bean/insertTaskType.bean.ts");
/* harmony import */ var _bean_batchDeleteTaskType_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/batchDeleteTaskType.bean */ "./src/app/pages/tzb/custom/otherThing/workType/bean/batchDeleteTaskType.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WorkTypeComponent = /** @class */ (function () {
    function WorkTypeComponent(confirmationService, httpService, fb, commfunc) {
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.first = 0;
        this.chooseType = [
            { label: '请选择', value: '' }, { label: '是', value: '0' }, { label: '否', value: '1' }
        ];
        this.isStatus = [];
        this.applymgs = [
            { label: '请选择', value: '' }, { label: '申请', value: '1' }, { label: '审批', value: '2' }
        ];
        this.typeParent = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"];
        this.msgs = [];
        this.queryListTaskTypeBean = new _bean_QueryListTaskType_bean__WEBPACK_IMPORTED_MODULE_1__["QueryListTaskTypeBean"]();
        this.updateTaskTypeBean = new _bean_UpdateTaskType_bean__WEBPACK_IMPORTED_MODULE_2__["UpdateTaskTypeBean"]();
        this.insertTaskTypeBean = new _bean_insertTaskType_bean__WEBPACK_IMPORTED_MODULE_3__["InsertTaskTypeBean"]();
        this.batchDeleteTaskTypeBean = new _bean_batchDeleteTaskType_bean__WEBPACK_IMPORTED_MODULE_4__["BatchDeleteTaskTypeBean"]();
        this.userform = fb.group({
            taskTypeKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taskTypeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    WorkTypeComponent.prototype.ngOnInit = function () {
        this.queryListTaskTypeBean.pageSize = 10;
        this.queryListTaskTypeBean.pageNum = 1;
        this.updateHeader = "修改";
        this.addHeader = "新增";
        this.typedata = [];
    };
    WorkTypeComponent.prototype.checkThis = function () {
        if (this.typeYES == '0') {
            this.typeParent = true;
        }
        else {
            this.typeParent = false;
        }
    };
    //翻页
    WorkTypeComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryListTaskTypeBean.pageSize = event.rows * 1;
        //当前页
        this.queryListTaskTypeBean.pageNum = event.page + 1;
        this.first = event.page * this.queryListTaskTypeBean.pageSize;
        this.querytask();
    };
    WorkTypeComponent.prototype.queryFirst = function () {
        this.queryListTaskTypeBean.pageSize = 10;
        this.queryListTaskTypeBean.pageNum = 1;
        this.first = 0;
        this.querytask();
    };
    //工作类型查询
    WorkTypeComponent.prototype.querytask = function () {
        var _this = this;
        this.httpService.queryListTaskType(this.queryListTaskTypeBean).subscribe(function (data) {
            _this.typedata = data.taskTypeList;
            _this.total = data.totalNum;
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    WorkTypeComponent.prototype.typeAdd = function () {
        this.typeAddPage = true;
    };
    WorkTypeComponent.prototype.typeUpdate = function (item) {
        this.typeUpdatePage = true;
        this.updateTaskTypeBean = item;
        this.checkThis();
    };
    //工作类型删除
    WorkTypeComponent.prototype.typeDelete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确认删除?',
            header: '删除',
            icon: 'fa fa-trash',
            accept: function () {
                var arr = [];
                arr.push(item);
                _this.batchDeleteTaskTypeBean.taskTypeList = arr;
                _this.httpService.batchDeleteTaskType(_this.batchDeleteTaskTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '删除成功' });
                        _this.querytask();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: '取消删除', detail: '已取消删除' }];
            }
        });
    };
    //工作类型维护新增保存
    WorkTypeComponent.prototype.addSave = function () {
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
        this.httpService.insertTaskType(this.insertTaskTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '保存成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.typeAddPage = false;
        this.insertTaskTypeBean.taskTypeName = '';
        this.insertTaskTypeBean.taskTypeKey = '';
        this.insertTaskTypeBean.taskTypeParentId = '';
    };
    WorkTypeComponent.prototype.addCancel = function () {
        this.typeAddPage = false;
        this.insertTaskTypeBean.taskTypeName = '';
        this.insertTaskTypeBean.taskTypeKey = '';
        this.insertTaskTypeBean.taskTypeParentId = '';
    };
    //工作类型维护修改
    WorkTypeComponent.prototype.updateSave = function () {
        var _this = this;
        // this.updateTaskTypeBean = this.updateMMM;
        this.httpService.updateTaskType(this.updateTaskTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '修改成功' });
                _this.querytask();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.typeUpdatePage = false;
    };
    WorkTypeComponent.prototype.updateCancel = function () {
        this.typeUpdatePage = false;
    };
    WorkTypeComponent.prototype.myFunction = function () {
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
        var item = {
            taskTypeKey: this.insertTaskTypeBean.taskTypeKey
        };
        this.httpService.taskTypeQry(item).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.isStatus = [];
            _this.isStatus.push({ label: '请选择', value: '' });
            arr.forEach(function (item) {
                _this.isStatus.push({ label: item.taskTypeName, value: item.taskTypeId });
            });
        });
    };
    //按钮权限
    WorkTypeComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    WorkTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workType',
            template: __webpack_require__(/*! ./workType.component.html */ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.html"),
            styles: [__webpack_require__(/*! ./workType.component.scss */ "./src/app/pages/tzb/custom/otherThing/workType/workType.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], WorkTypeComponent);
    return WorkTypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=otherThing-otherThing-module.js.map