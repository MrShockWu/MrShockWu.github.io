(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-setting-task-setting-module"],{

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\" appValidation>年份:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addTaskArrangement.year\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label appValidation>度量指标:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown type=\"text\" [style]=\"{'text-align':'left'}\" placeholder=\"请输入相应的度量指标\" [(ngModel)]=\"addTaskArrangement.signType\"\r\n                    [options]=\"MetricIndex\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addTaskArrangement.higherOrgId\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addTaskArrangement.higherOrgName\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\" appValidation>机构/人员编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalNumber\" />\r\n                <div (click)=\"chooseOrg()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构/人员名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"OraganOrPersonalName\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n        <h3>月份任务值设置(万元)</h3>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">1月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.janTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">2月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.febTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">3月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.marTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">4月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.aprTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">5月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.mayTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">6月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.junTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">7月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.julTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">8月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.augTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">9月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.septTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">10月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.octTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">11月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.noveTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">12月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.decTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">年份任务值(万元):</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"addTaskArrangement.yearTask\" readonly>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\" style=\"text-align:center;\">\r\n    <button pButton type=\"button\" (click)=\"sure()\" label=\"确定\"></button>\r\n    <!-- <button pButton type=\"button\" (click)=\"cancel()\" label=\"取消\"></button> -->\r\n</div>\r\n\r\n<!-- 机构树结构 -->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"spe\">\r\n    <div style=\"display:flex\">\r\n        <org-tree-component *ngIf=\"orgTreeDisplay\" (outValue)=\"treeCall($event)\" class=\"component\"></org-tree-component>\r\n        <app-query-user-list *ngIf=\"personPage\" (outValue)=\"perInfor($event)\" [in-value]=\"userInValue\" class=\"component\"></app-query-user-list>\r\n    </div>\r\n    <div class=\"sure\">\r\n        <button pButton type=\"button\" (click)=\"clo()\" label=\"确定\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  float: right; }\n\n.clickspan {\n  margin-top: -24px;\n  width: 4%;\n  z-index: 100;\n  height: 23px;\n  position: absolute;\n  margin-left: 19%; }\n\n.sure {\n  text-align: center;\n  margin-top: 5%; }\n\n.spe .component {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3Rhc2stc2V0dGluZy90YXNrLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGFjaGlldmVtZW50LXRhc2tcXHRhc2stc2V0dGluZ1xcdGFzay1hZGRcXHRhc2stYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHbEI7RUFFUSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2FjaGlldmVtZW50LXRhc2svdGFzay1zZXR0aW5nL3Rhc2stYWRkL3Rhc2stYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2xpY2tzcGFuIHtcclxuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgd2lkdGg6IDQlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5JTtcclxufVxyXG5cclxuLnN1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5zcGUge1xyXG4gICAgLmNvbXBvbmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.addTaskArrangement = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["AddTaskArrangement"]();
        this.taskAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //单机事件
        this.orgTreeDisplay = false;
        this.personPage = false;
        this.msgs = []; //提示信息
    }
    TaskAddComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.MetricIndex = this.code['BdAchievementYe']; //我的业绩
        this.addTaskArrangement.year = this.commfunc.getCurrentDate().substring(0, 4);
        // this.MetricIndex = [
        //     { label: '存款规模', value: '1' },
        //     { label: '贷款规模', value: '2' },
        //     { label: 'FTP利润', value: '3' },
        //     { label: '不良贷款', value: '7' },
        // ]
        this.addTaskArrangement.higherOrgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        this.addTaskArrangement.higherOrgName = JSON.parse(top.sessionStorage.chName).orgName;
        this.addTaskArrangement.assignUserId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.addTaskArrangement.janTask = "0";
        this.addTaskArrangement.febTask = "0";
        this.addTaskArrangement.marTask = "0";
        this.addTaskArrangement.aprTask = "0";
        this.addTaskArrangement.mayTask = "0";
        this.addTaskArrangement.junTask = "0";
        this.addTaskArrangement.julTask = "0";
        this.addTaskArrangement.augTask = "0";
        this.addTaskArrangement.septTask = "0";
        this.addTaskArrangement.octTask = "0";
        this.addTaskArrangement.noveTask = "0";
        this.addTaskArrangement.decTask = "0";
    };
    TaskAddComponent.prototype.clo = function () {
        this.orgTreeDisplay = false;
    };
    //码值
    TaskAddComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //。。。选择按钮
    TaskAddComponent.prototype.chooseOrg = function () {
        document.body.style.overflow = 'hidden';
        this.orgTreeDisplay = true;
        //this.personPage = true;
        this.userInValue = this.OraganOrPersonalNumber;
    };
    //机构树回掉
    TaskAddComponent.prototype.treeCall = function (param) {
        document.body.style.overflow = 'auto';
        if (param != null) {
            this.OraganOrPersonalNumber = param.orgId;
            this.OraganOrPersonalName = param.orgName;
            this.userInValue = this.OraganOrPersonalNumber;
            this.addTaskArrangement.taskOrgId = param.orgId;
            this.addTaskArrangement.taskOrgName = param.orgName;
            this.taskOrgId = param.orgId;
            this.addTaskArrangement.taskUserId = "";
            this.addTaskArrangement.taskUserName = "";
            this.personPage = true;
        }
    };
    TaskAddComponent.prototype.perInfor = function (item) {
        document.body.style.overflow = 'auto';
        if (item.length != null) {
            this.OraganOrPersonalNumber = item[0].tellerId;
            this.OraganOrPersonalName = item[0].tellerName;
            this.addTaskArrangement.taskUserId = this.OraganOrPersonalNumber;
            this.addTaskArrangement.taskUserId = item[0].tellerId;
            this.addTaskArrangement.taskUserName = item[0].tellerName;
            this.addTaskArrangement.taskOrgId = "";
            this.addTaskArrangement.taskOrgName = "";
        }
        this.clo();
    };
    TaskAddComponent.prototype.choosePer = function () {
        document.body.style.overflow = 'hidden';
        this.personPage = true;
    };
    TaskAddComponent.prototype.sure = function () {
        if (this.addTaskArrangement.year.length !== 4) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请写出正确的年份！" });
            return;
        }
        else if (this.addTaskArrangement.year == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "年份不能为空！" });
            return;
        }
        if (!this.addTaskArrangement.signType) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的度量指标" });
            return;
        }
        if (!this.OraganOrPersonalNumber) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的机构/人员编号！" });
            return;
        }
        if (!this.OraganOrPersonalName) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的机构/人员名称！" });
            return;
        }
        this.do();
    };
    TaskAddComponent.prototype.amount = function () {
        this.addTaskArrangement.yearTask = parseInt(this.addTaskArrangement.janTask) + parseInt(this.addTaskArrangement.febTask) + parseInt(this.addTaskArrangement.marTask) + parseInt(this.addTaskArrangement.aprTask) + parseInt(this.addTaskArrangement.mayTask) + parseInt(this.addTaskArrangement.junTask) + parseInt(this.addTaskArrangement.julTask) + parseInt(this.addTaskArrangement.augTask) + parseInt(this.addTaskArrangement.septTask) + parseInt(this.addTaskArrangement.octTask) + parseInt(this.addTaskArrangement.noveTask) + parseInt(this.addTaskArrangement.decTask) + '';
    };
    TaskAddComponent.prototype.formTaskList = function (obj) {
        var objTemp = {};
        objTemp['taskType'] = obj.taskType;
        objTemp['taskAmt'] = String(obj.taskAmt);
        this.addTaskArrangement['taskList'].push(objTemp);
    };
    TaskAddComponent.prototype.do = function () {
        var _this = this;
        this.addTaskArrangement['taskUserId'] = this.OraganOrPersonalNumber;
        this.addTaskArrangement['taskUserName'] = this.OraganOrPersonalName;
        this.addTaskArrangement['taskOrgId'] = this.addTaskArrangement.higherOrgId;
        this.addTaskArrangement['taskOrgName'] = this.addTaskArrangement.higherOrgName;
        this.addTaskArrangement['taskList'] = [];
        var arrTemp = [{ taskType: '00', taskAmt: this.addTaskArrangement.yearTask }, { taskType: '01', taskAmt: this.addTaskArrangement.janTask }, { taskType: '02', taskAmt: this.addTaskArrangement.febTask }, { taskType: '03', taskAmt: this.addTaskArrangement.marTask }, { taskType: '04', taskAmt: this.addTaskArrangement.aprTask }, { taskType: '05', taskAmt: this.addTaskArrangement.mayTask }, { taskType: '06', taskAmt: this.addTaskArrangement.junTask }, { taskType: '07', taskAmt: this.addTaskArrangement.julTask }, { taskType: '08', taskAmt: this.addTaskArrangement.augTask }, { taskType: '09', taskAmt: this.addTaskArrangement.septTask }, { taskType: '10', taskAmt: this.addTaskArrangement.octTask }, { taskType: '11', taskAmt: this.addTaskArrangement.noveTask }, { taskType: '12', taskAmt: this.addTaskArrangement.decTask }];
        arrTemp.forEach(function (element) {
            _this.formTaskList(element);
        });
        this.httpService.addTaskArrangement(this.addTaskArrangement).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var param = {
                    year: _this.addTaskArrangement.year,
                    signType: _this.addTaskArrangement.signType,
                    OraganOrPersonalNumber: _this.OraganOrPersonalNumber,
                    OraganOrPersonalName: _this.OraganOrPersonalName,
                    taskOrgId: _this.taskOrgId,
                    taskUserId: _this.addTaskArrangement.taskUserId,
                };
                _this.taskAdd.emit(param);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskAddComponent.prototype, "taskAdd", void 0);
    TaskAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.html"),
            styles: [__webpack_require__(/*! ./task-add.component.scss */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__["AchievementHttpService"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">年份:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"year\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label>度量指标:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"signType1\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"higherOrgId\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"OrganizationName\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构/人员编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalNumber\" disabled>\r\n\r\n                <!-- <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalNumber\" />\r\n                <div class=\"clickspan\">\r\n                    <a (click)=\"chooseOrg()\" class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构/人员名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalName\" disabled>\r\n                <!-- <input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"OraganOrPersonalName\"> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n        <h3>月份任务值设置(万元)</h3>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">1月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"janTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">2月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"febTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">3月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"marTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">4月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"aprTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">5月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"mayTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">6月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"junTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">7月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"julTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">8月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"augTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">9月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"septTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">10月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"octTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">11月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"noveTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">12月:</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" pInputText [(ngModel)]=\"decTask\" (input)=\"amount()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 header-titler\">\r\n            <label for=\"\">年份任务值(万元):</label>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"number\" placeholder=\"0\" pInputText [(ngModel)]=\"yearTask\" readonly>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 contener\">\r\n        <button pButton type=\"button\" (click)=\"sure()\">确定</button>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contener {\n  text-align: center; }\n\n.header-titler {\n  text-align: right;\n  margin-top: 2px; }\n\n.clickspan {\n  position: absolute;\n  width: 70px;\n  margin-left: 26%;\n  height: 25px; }\n\n.header-titler {\n  text-align: right;\n  margin-top: 10px; }\n\n.dian {\n  position: absolute;\n  margin-top: -8px;\n  margin-left: -5px; }\n\n.contener {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3Rhc2stc2V0dGluZy90YXNrLW1vZGlmeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGFjaGlldmVtZW50LXRhc2tcXHRhc2stc2V0dGluZ1xcdGFzay1tb2RpZnlcXHRhc2stbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2FjaGlldmVtZW50LXRhc2svdGFzay1zZXR0aW5nL3Rhc2stbW9kaWZ5L3Rhc2stbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmNsaWNrc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC8vbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmhlYWRlci10aXRsZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZGlhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG4uY29udGVuZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TaskModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModifyComponent", function() { return TaskModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UpdateTaskArrangement } from './bean/ModifyTaskArrangement.bean';


var TaskModifyComponent = /** @class */ (function () {
    function TaskModifyComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.updatetaskArrangement = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["UpdateTaskArrangement"]();
        this.taskModify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //单机事件
        this.msgs = [];
        this.taskList = [];
    }
    TaskModifyComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.MetricIndex = this.code['BdAchievementYe']; //我的业绩
        this.year = this.inValue.year;
        this.signType = this.inValue.signType;
        for (var _i = 0, _a = this.MetricIndex; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.signType == item.value) {
                this.signType1 = item.label;
            }
        }
        // if (this.signType == "1") {
        // 	this.signType1 = "存款规模"
        // } else if (this.signType == "2") {
        // 	this.signType1 = "贷款规模"
        // } else if (this.signType == "3") {
        // 	this.signType1 = "FTP利润"
        // } else if (this.signType == "4") {
        // 	this.signType1 = "不良贷款"
        // }
        this.higherOrgId = this.inValue.higherOrgId;
        this.OrganizationName = this.inValue.OrganizationName;
        this.OraganOrPersonalNumber = this.inValue.OraganOrPersonalNumber;
        this.OraganOrPersonalName = this.inValue.OraganOrPersonalName;
        this.taskId = this.inValue.taskId;
        this.yearTask = this.inValue.taskList[0].taskAmt;
        this.janTask = this.inValue.taskList[1].taskAmt;
        this.febTask = this.inValue.taskList[2].taskAmt;
        this.marTask = this.inValue.taskList[3].taskAmt;
        this.aprTask = this.inValue.taskList[4].taskAmt;
        this.mayTask = this.inValue.taskList[5].taskAmt;
        this.junTask = this.inValue.taskList[6].taskAmt;
        this.julTask = this.inValue.taskList[7].taskAmt;
        this.augTask = this.inValue.taskList[8].taskAmt;
        this.septTask = this.inValue.taskList[9].taskAmt;
        this.octTask = this.inValue.taskList[10].taskAmt;
        this.noveTask = this.inValue.taskList[11].taskAmt;
        this.decTask = this.inValue.taskList[12].taskAmt;
        this.taskOrgId = this.inValue.taskOrgId;
        this.taskUserId = this.inValue.taskUserId;
    };
    //码值
    TaskModifyComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TaskModifyComponent.prototype.amount = function () {
        this.yearTask = parseInt(this.janTask) + parseInt(this.febTask) + parseInt(this.marTask) + parseInt(this.aprTask) + parseInt(this.mayTask) + parseInt(this.junTask) + parseInt(this.julTask) + parseInt(this.augTask) + parseInt(this.septTask) + parseInt(this.octTask) + parseInt(this.noveTask) + parseInt(this.decTask);
    };
    TaskModifyComponent.prototype.formTaskList = function (obj) {
        var objTemp = {};
        objTemp['taskType'] = obj.taskType;
        objTemp['taskAmt'] = String(obj.taskAmt);
        this.updatetaskArrangement['taskList'].push(objTemp);
    };
    TaskModifyComponent.prototype.sure = function () {
        var _this = this;
        this.updatetaskArrangement['taskUserId'] = this.OraganOrPersonalNumber;
        this.updatetaskArrangement['taskUserName'] = this.OraganOrPersonalName;
        this.updatetaskArrangement['taskOrgId'] = this.higherOrgId;
        this.updatetaskArrangement['taskOrgName'] = this.OraganOrPersonalName;
        this.updatetaskArrangement['signType'] = this.signType;
        this.updatetaskArrangement['taskList'] = [];
        this.updatetaskArrangement.taskId = this.taskId;
        this.updatetaskArrangement.yearTask = this.yearTask + '';
        var arrTemp = [{ taskType: '00', taskAmt: this.yearTask }, { taskType: '01', taskAmt: this.janTask }, { taskType: '02', taskAmt: this.febTask }, { taskType: '03', taskAmt: this.marTask }, { taskType: '04', taskAmt: this.aprTask }, { taskType: '05', taskAmt: this.mayTask }, { taskType: '06', taskAmt: this.junTask }, { taskType: '07', taskAmt: this.julTask }, { taskType: '08', taskAmt: this.augTask }, { taskType: '09', taskAmt: this.septTask }, { taskType: '10', taskAmt: this.octTask }, { taskType: '11', taskAmt: this.noveTask }, { taskType: '12', taskAmt: this.decTask }];
        arrTemp.forEach(function (element) {
            _this.formTaskList(element);
        });
        this.httpService.updateTaskArrangement(this.updatetaskArrangement).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var param = {
                    year: _this.year,
                    signType: _this.signType,
                    OraganOrPersonalNumber: _this.OraganOrPersonalNumber,
                    OraganOrPersonalName: _this.OraganOrPersonalName,
                    taskOrgId: _this.taskOrgId,
                    taskUserId: _this.taskUserId,
                };
                _this.taskModify.emit(param);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskModifyComponent.prototype, "taskModify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskModifyComponent.prototype, "inValue", void 0);
    TaskModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-modify',
            template: __webpack_require__(/*! ./task-modify.component.html */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.html"),
            styles: [__webpack_require__(/*! ./task-modify.component.scss */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__["AchievementHttpService"]])
    ], TaskModifyComponent);
    return TaskModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\" appValidation>年份:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskArrangement.year\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label appValidation>度量指标:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown type=\"text\" [style]=\"{'text-align':'left'}\" placeholder=\"请输入相应的度量指标\" [(ngModel)]=\"taskArrangement.signType\" [options]=\"MetricIndex\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"taskArrangement.higherOrgId\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"OrganizationName\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\" appValidation>机构/人员编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalNumber\" />\r\n                <div (click)=\"chooseOrg()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 header-titler\">\r\n                <label for=\"\">机构/人员名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"OraganOrPersonalName\" readonly>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 contener\">\r\n        <button pButton type=\"button\" (click)=\"search()\">查 询</button>\r\n        <button pButton type=\"button\" (click)=\"reset()\"> 重 置</button>\r\n        <div class=\"add\" (click)=\"add()\">新增</div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-headerColumnGroup>\r\n                <p-row>\r\n                    <p-column header=\"度量指标\" rowspan=\"2\" [style]=\"{'width':'75px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"机构编号\" rowspan=\"2\" [style]=\"{'width':'75px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"机构名称\" rowspan=\"2\" [style]=\"{'width':'75px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"机构/人员编号\" rowspan=\"2\" [style]=\"{'width':'100px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"机构/人员名称\" rowspan=\"2\" [style]=\"{'width':'100px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"年任务\" rowspan=\"2\" [style]=\"{'width':'60px', height:'83px'}\"></p-column>\r\n                    <p-column header=\"月任务\" colspan=\"12\" [style]=\"{'width':'1074px'}\"></p-column>\r\n                    <p-column header=\"操作\" rowspan=\"2\" [style]=\"{'width':'120px', height:'83px'}\"></p-column>\r\n                </p-row>\r\n                <p-row>\r\n                    <p-column header=\"1月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"2月\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column header=\"3月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"4月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"5月\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column header=\"6月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"7月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"8月\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column header=\"9月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"10月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                    <p-column header=\"11月\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column header=\"12月\" [style]=\"{'width':'100px'}\"> </p-column>\r\n                </p-row>\r\n            </p-headerColumnGroup>\r\n\r\n            <p-column [style]=\"{'width':'75px', height:'83px'}\" field=\"signType\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.signType | codeValuePie: MetricIndex}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'75px', height:'83px'}\" field=\"higherOrgId\"></p-column>\r\n            <p-column [style]=\"{'width':'75px', height:'83px'}\" field=\"higherOrgName\"></p-column>\r\n            <p-column [style]=\"{'width':'100px', height:'83px'}\" field=\"taskOrgUserId\"></p-column>\r\n            <p-column [style]=\"{'width':'100px', height:'83px'}\" field=\"taskOrgUserName\"></p-column>\r\n            <p-column [style]=\"{'width':'60px', height:'83px'}\" field=\"yearTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[0]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"janTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[1]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"febTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[2]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"marTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[3]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"aprTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[4]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"mayTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[5]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"junTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[6]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"julTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[7]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"augTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[8]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"septTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[9]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"octTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[10]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"noveTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[11]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'90px', height:'83px'}\" field=\"decTask\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.taskList[12]['taskAmt']}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'120px',height:'83px'}\">\r\n                <ng-template let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelUpdateIco\" (click)=\"modify(car)\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)=\"delete(car)\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{taskArrangement.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <task-add (taskAdd)=\"taskAdd($event)\" *ngIf=\"showNum==1\"></task-add>\r\n        <task-modify (taskModify)=\"taskModify($event)\" *ngIf=\"showNum==2\" [inValue]=\"ModifyValue\"></task-modify>\r\n\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"spe\">\r\n    <div style=\"display:flex\">\r\n        <org-tree-component *ngIf='orgTreeDisplay' (outValue)=\"treeCall($event)\" class=\"component\"></org-tree-component>\r\n        <app-query-user-list *ngIf=\"personPage\" (outValue)=\"perInfor($event)\" [in-value]=\"userInValue\" class=\"component\"></app-query-user-list>\r\n    </div>\r\n    <div class=\"sure\">\r\n        <button pButton type=\"button\" (click)=\"sure()\" label=\"确定\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-titler {\n  text-align: right;\n  margin-top: 2px; }\n\n.contener {\n  text-align: center; }\n\n.input-whith {\n  float: left;\n  margin-left: -8px;\n  width: 124%; }\n\n.clickspan {\n  margin-top: 5px;\n  margin-left: 0;\n  width: 14%;\n  height: 23px; }\n\n.queryinputOrg {\n  border-right: none;\n  border-radius: 3px 0 0 3px;\n  width: 85% !important;\n  min-width: 69px !important; }\n\n:host/deep/ .my-cust-overf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n.a-hand {\n  cursor: pointer; }\n\n.clickspan {\n  position: absolute;\n  width: 82px;\n  margin-top: -25px;\n  margin-left: 18%; }\n\n.add {\n  float: right;\n  width: 60px;\n  height: 25px;\n  padding-top: 5px;\n  color: #fef8e6;\n  background-color: #fec61e; }\n\n.sure {\n  text-align: center;\n  margin-top: 5%; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.spe .component {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3Rhc2stc2V0dGluZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGFjaGlldmVtZW50LXRhc2tcXHRhc2stc2V0dGluZ1xcdGFzay1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUVRLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay90YXNrLXNldHRpbmcvdGFzay1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jb250ZW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC13aGl0aCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgd2lkdGg6IDEyNCU7XHJcbn1cclxuXHJcbi5jbGlja3NwYW4ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4ucXVlcnlpbnB1dE9yZyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1vdmVyZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmEtaGFuZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja3NwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICNmZWY4ZTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVjNjFlO1xyXG59XHJcblxyXG4uc3VyZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwZSB7XHJcbiAgICAuY29tcG9uZW50IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TaskSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSettingComponent", function() { return TaskSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TaskArrangement } from './bean/taskArrangement.bean';


var TaskSettingComponent = /** @class */ (function () {
    function TaskSettingComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.taskArrangement = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["QueryTaskArrangement"]();
        this.delTaskArrangement = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["DelTaskArrangement"]();
        this.display = false;
        this.display1 = false;
        this.orgTreeDisplay = false;
        this.personPage = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = []; //提示信息
        this.tableData = []; //表格数据
        this.first = 0; //分页控制
        this.transList = [];
    }
    TaskSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeVal();
        this.MetricIndex = this.code['BdAchievementYe']; //我的业绩
        this.taskArrangement.year = this.commfunc.getCurrentDate().substring(0, 4);
        // this.MetricIndex = [
        // 	{ label: '存款规模', value: '1' },
        // 	{ label: '贷款规模', value: '2' },
        // 	{ label: 'FTP利润', value: '3' },
        // 	{ label: '不良贷款', value: '7' },
        // ]
        this.taskArrangement.higherOrgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        this.OrganizationName = JSON.parse(sessionStorage.chName).orgName;
        this.taskArrangement.assignUserId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.newMethod();
        setTimeout(function () {
            _this.tableData = [];
        });
    };
    TaskSettingComponent.prototype.newMethod = function () {
        // this.taskArrangement.pageSize = 10;
        // this.taskArrangement.pageNum = 1;
    };
    TaskSettingComponent.prototype.ngOnChanges = function () {
        if (this.OraganOrPersonalNumber != null) {
            this.userInValue = this.OraganOrPersonalNumber;
        }
    };
    //码值
    TaskSettingComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TaskSettingComponent.prototype.add = function () {
        this.display = true;
        this.showNum = 1;
        this.headerTitle = "任务新增";
    };
    TaskSettingComponent.prototype.modify = function (cor) {
        if (parseInt(cor.year) < parseInt(this.commfunc.getCurrentDate().substring(0, 4))) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: '提示', detail: "选择年份小于今年的任务信息不可修改!" });
            return;
        }
        this.display = true;
        this.showNum = 2;
        this.headerTitle = "任务修改";
        var param = {
            year: this.taskArrangement.year,
            signType: this.taskArrangement.signType,
            higherOrgId: this.taskArrangement.higherOrgId,
            taskOrgId: cor.taskOrgUserId,
            taskUserId: cor.taskUserId,
            OrganizationName: this.OrganizationName,
            OraganOrPersonalNumber: this.OraganOrPersonalNumber,
            OraganOrPersonalName: this.OraganOrPersonalName,
            taskList: cor.taskList,
            taskId: cor.taskId,
            janTask: cor.janTask,
            febTask: cor.febTask,
            marTask: cor.marTask,
            aprTask: cor.aprTask,
            mayTask: cor.mayTask,
            junTask: cor.junTask,
            julTask: cor.julTask,
            augTask: cor.augTask,
            septTask: cor.septTask,
            octTask: cor.octTask,
            noveTask: cor.noveTask,
            decTask: cor.decTask
        };
        this.ModifyValue = param;
    };
    TaskSettingComponent.prototype.delete = function (cor) {
        var _this = this;
        // this.taskArrangement.pageSize = 10;
        // this.taskArrangement.pageNum = 1;
        this.first = 0;
        this.delTaskArrangement.taskId = cor.taskId;
        this.httpService.delTaskArrangement(this.delTaskArrangement).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.do();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "任务设置删除成功！" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    TaskSettingComponent.prototype.search = function () {
        if (this.taskArrangement.year.length !== 4) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择正确的日期！" });
            return;
        }
        else if (this.taskArrangement.year == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "所选择的日期不能为空！" });
            return;
        }
        if (!this.taskArrangement.signType) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的度量指标！" });
            return;
        }
        if (!this.OraganOrPersonalNumber) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的机构/人员编号！" });
            return;
        }
        if (!this.OraganOrPersonalName) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择相应的机构/人员名称！" });
            return;
        }
        this.do();
    };
    TaskSettingComponent.prototype.reset = function () {
        this.taskArrangement.year = '';
        this.taskArrangement.signType = '';
        // this.OrganizationNumber = '';
        // this.OrganizationName = '';
        this.OraganOrPersonalNumber = '';
        this.OraganOrPersonalName = '';
        //    this.taskArrangement.taskOrgId='';
        //    this.taskArrangement.taskUserId='';
    };
    //选择机构
    TaskSettingComponent.prototype.chooseOrg = function () {
        document.body.style.overflow = 'hidden';
        this.orgTreeDisplay = true;
        this.userInValue = this.OraganOrPersonalNumber;
    };
    //机构树回调
    TaskSettingComponent.prototype.treeCall = function (param) {
        document.body.style.overflow = 'auto';
        if (param != null) {
            this.OraganOrPersonalNumber = param.orgId;
            this.OraganOrPersonalName = param.orgName;
            this.taskArrangement.taskOrgId = this.OraganOrPersonalNumber; //机构编号
            this.userInValue = this.OraganOrPersonalNumber;
            this.taskArrangement.taskUserId = "";
            this.personPage = true;
        }
    };
    //机构人回调
    TaskSettingComponent.prototype.perInfor = function (item) {
        document.body.style.overflow = 'auto';
        if (item.length != null) {
            this.OraganOrPersonalNumber = item[0].tellerId;
            this.OraganOrPersonalName = item[0].tellerName;
            this.taskArrangement.taskUserId = this.OraganOrPersonalNumber;
            this.taskArrangement.taskOrgId = "";
        }
        this.sure();
    };
    TaskSettingComponent.prototype.do = function () {
        var _this = this;
        this.httpService.queryTaskArrangement(this.taskArrangement).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                for (var i = 0; i < data.taskList.length; i++) {
                    // if (data.taskList[i].signType == "1") {
                    // 	data.taskList[i].signType = "存款规模";
                    // } else if (data.taskList[i].signType == "2") {
                    // 	data.taskList[i].signType = "贷款规模";
                    // } else if (data.taskList[i].signType == "3") {
                    // 	data.taskList[i].signType = "FTP利润";
                    // } else if (data.taskList[i].signType == "7") {
                    // 	data.taskList[i].signType = "不良贷款";
                    // }
                    if (data.taskList[i].taskUserId) {
                        data.taskList[i].taskOrgUserId = data.taskList[i].taskUserId;
                    }
                    if (data.taskList[i].taskOrgUserName) {
                        data.taskList[i].taskOrgUserName = data.taskList[i].taskOrgUserName;
                    }
                }
                _this.total = data.totalCount;
                if (data.taskList && data.taskList.length != 0) {
                    _this.tableData = data.taskList;
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // paginate(event) {
    // 	this.taskArrangement.pageSize = event.rows * 1;
    // 	let currentPage = event.page + 1;
    // 	this.taskArrangement.pageNum = currentPage;
    // 	this.first = (currentPage - 1) * this.taskArrangement.pageSize;
    // 	this.do();
    // }
    TaskSettingComponent.prototype.sure = function () {
        this.orgTreeDisplay = false;
    };
    TaskSettingComponent.prototype.taskAdd = function (param) {
        this.taskArrangement.year = param.year;
        this.taskArrangement.signType = param.signType;
        this.OraganOrPersonalNumber = param.OraganOrPersonalNumber;
        this.OraganOrPersonalName = param.OraganOrPersonalName;
        if (param.taskUserId == '') {
            this.taskArrangement.taskUserId = '';
            this.taskArrangement.taskOrgId = param.taskOrgId;
        }
        else {
            this.taskArrangement.taskUserId = param.taskUserId;
            this.taskArrangement.taskOrgId = '';
        }
        // this.taskArrangement.pageSize = 10;
        // this.taskArrangement.pageNum = 1;
        this.first = 0;
        this.display = false;
        this.do();
    };
    TaskSettingComponent.prototype.taskModify = function (param) {
        this.taskArrangement.year = param.year;
        this.taskArrangement.signType = param.signType;
        this.OraganOrPersonalNumber = param.OraganOrPersonalNumber;
        this.OraganOrPersonalName = param.OraganOrPersonalName;
        if (param.taskUserId == null) {
            this.taskArrangement.taskUserId = '';
            this.taskArrangement.taskOrgId = param.taskOrgId;
        }
        else {
            this.taskArrangement.taskUserId = param.taskUserId;
            this.taskArrangement.taskOrgId = '';
        }
        // this.taskArrangement.pageSize = 10;
        // this.taskArrangement.pageNum = 1;
        this.first = 0;
        this.display = false;
        this.do();
    };
    TaskSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-setting',
            template: __webpack_require__(/*! ./task-setting.component.html */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.html"),
            styles: [__webpack_require__(/*! ./task-setting.component.scss */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_5__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_5__["AchievementHttpService"]])
    ], TaskSettingComponent);
    return TaskSettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TaskSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSettingModule", function() { return TaskSettingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _task_setting_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-setting.routing */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.routing.ts");
/* harmony import */ var _task_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-setting.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.ts");
/* harmony import */ var _task_modify_task_modify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-modify/task-modify.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TaskSettingModule = /** @class */ (function () {
    function TaskSettingModule() {
    }
    TaskSettingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _task_setting_routing__WEBPACK_IMPORTED_MODULE_4__["TaskSettingRouting"]
            ],
            declarations: [
                _task_setting_component__WEBPACK_IMPORTED_MODULE_5__["TaskSettingComponent"],
                _task_modify_task_modify_component__WEBPACK_IMPORTED_MODULE_6__["TaskModifyComponent"],
                _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_7__["TaskAddComponent"]
            ],
            providers: []
        })
    ], TaskSettingModule);
    return TaskSettingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.routing.ts ***!
  \****************************************************************************************/
/*! exports provided: routes, TaskSettingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSettingRouting", function() { return TaskSettingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-setting.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-setting.component.ts");
/* harmony import */ var _task_modify_task_modify_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-modify/task-modify.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-modify/task-modify.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/pages/tzb/custom/achievement-task/task-setting/task-add/task-add.component.ts");




var routes = [
    {
        path: '',
        component: _task_setting_component__WEBPACK_IMPORTED_MODULE_1__["TaskSettingComponent"],
        children: [
            {
                path: 'task-modify',
                component: _task_modify_task_modify_component__WEBPACK_IMPORTED_MODULE_2__["TaskModifyComponent"]
            },
            {
                path: 'task-add',
                component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_3__["TaskAddComponent"]
            }
        ]
    }
];
var TaskSettingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=task-setting-task-setting-module.js.map