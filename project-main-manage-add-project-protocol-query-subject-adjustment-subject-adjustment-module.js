(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-main-manage-add-project-protocol-query-subject-adjustment-subject-adjustment-module"],{

/***/ "./src/app/pages/tzb/custom/overdue/common/localData.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/localData.ts ***!
  \**************************************************************/
/*! exports provided: LocalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return LocalData; });
var LocalData = /** @class */ (function () {
    function LocalData(commfunc) {
        this.commfunc = commfunc;
        this.flags = [];
    }
    LocalData.prototype.clearSessionData = function () {
        var session = window.sessionStorage;
        // session.removeItem('overdue-baseInfo');
        session.removeItem('overdue-selfDebtInfo');
        session.removeItem('overdue-overdueFinancialCondition');
        session.removeItem('overdue-realityCreditPurpose');
        session.removeItem('overdue-overdueReasonAnalyze');
        session.removeItem('overdue-bondsmanCondition');
        session.removeItem('overdue-clearScheme');
        session.removeItem('overdue-workCarryOutCondition');
        session.removeItem('overdue-catenaMoralRisk');
        session.removeItem('overdue-workEvaluteResume');
        session.removeItem('overdue-complianceAnalyze');
        session.removeItem('overdue-duteousManageEvalute');
    };
    LocalData.prototype.getOperatingLevel = function () {
        var ret = '';
        var t = this.getOverdueConfidential();
        if (t) {
            ret = t.operatingLevel;
        }
        return ret;
    };
    LocalData.prototype.getOverdueConfidential = function () {
        var ret = null;
        ret = this.getTemporaryData("overdue-confidential");
        return ret;
    };
    LocalData.prototype.setTemporaryData = function (key, val) {
        this.commfunc.setSessionDataCH(key, JSON.stringify(val));
    };
    LocalData.prototype.getTemporaryData = function (key) {
        var t = this.commfunc.getSessionDataCH(key);
        var ret = null;
        if (t) {
            try {
                ret = JSON.parse(t);
            }
            catch (ex) {
                console.error(ex);
                throw ex;
            }
        }
        return ret;
    };
    LocalData.prototype.setCommonHeader = function (val) {
        this.setTemporaryData('commonHeader', val);
    };
    LocalData.prototype.getCommonHeader = function () {
        return this.getTemporaryData('commonHeader');
    };
    return LocalData;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/msg.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/msg.ts ***!
  \********************************************************/
/*! exports provided: CommonlyMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonlyMessage", function() { return CommonlyMessage; });
var CommonlyMessage = /** @class */ (function () {
    function CommonlyMessage() {
        this.msgs = [];
    }
    CommonlyMessage.prototype.logicError = function (message) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: '提示', detail: message });
    };
    CommonlyMessage.prototype.logicSuccess = function (message) {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: message });
    };
    CommonlyMessage.prototype.combineMsgs = function (msgs) {
        var ret = '';
        if (msgs && msgs.length) {
            var len = msgs.length;
            if (len > 1) {
                for (var i = 0; i < len - 1; i++) {
                    ret += msgs[i] + '<br>';
                }
                ret += msgs[len - 1];
            }
            else {
                ret = msgs[0];
            }
        }
        return ret;
    };
    return CommonlyMessage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 part\">\r\n    <header-title *ngIf=\"lei=='110'\" [Info]=\"'供应链合作协议要素调整'\"></header-title>\r\n    <header-title *ngIf=\"lei=='999'\" [Info]=\"'合作协议要素调整'\"></header-title>\r\n    <div class=\"main-part ui-g-12\">\r\n        <div class=\"ui-g-6 ui-g-offset-3\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"tit ui-g-5\">合作项目编号:</div>\r\n                    <div class=\" ui-g-7\">{{projectId}}</div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"tit ui-g-5\">要素调整:</div>\r\n                    <div class=\" ui-g-7\">\r\n                        <p-dropdown [disabled]=\"isRecover\" [options]=\"adjustElementList\" [(ngModel)]=\"adjustElement\" (onChange)=\"change()\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12\" style=\"border-bottom:1px solid #bdbdbd;height:30px;\">&nbsp;</div> -->\r\n            <div class=\"ui-g-12 before-adjust\">\r\n                <b>调整前：</b>\r\n                <div class=\"ui-g-12\">\r\n                    <ng-template #beforeContainer></ng-template>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12\" style=\"border-bottom:1px solid #bdbdbd;height:30px;\">&nbsp;</div> -->\r\n            <div class=\"ui-g-12 after-adjust\">\r\n                <b>调整后：</b>\r\n                <div class=\"ui-g-12\">\r\n                    <ng-template #afterContainer></ng-template>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12\" style=\"border-bottom:1px solid #bdbdbd;height:30px;\">&nbsp;</div> -->\r\n            <div class=\"ui-g-12\">\r\n                <b>&nbsp;</b>\r\n                <div class=\"ui-g-2\" style=\"text-align:right;\">\r\n                    <span style=\"color:red!important;\">*</span>调整原因：</div>\r\n                <div class=\"ui-g-9\">\r\n                    <textarea maxlength=\"255\" placeholder=\"最多输入255字\" rows=\"5\" pInputTextarea [(ngModel)]=\"adjustReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2\" style=\"text-align:right;\">\r\n                    <span style=\"color:red!important;\">*</span>调整意见：</div>\r\n                <div class=\"ui-g-9\">\r\n                    <textarea maxlength=\"255\" placeholder=\"最多输入255字\" rows=\"5\" pInputTextarea [(ngModel)]=\"adjustOpinion\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"提交\" (click)=\"SelectPersonCover()\"></button>\r\n        <button pButton type=\"button\" label=\"返回\" (click)='goback()'></button>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>\r\n<!-- <p-growl [(value)]=\"msgss\"></p-growl> -->\r\n\r\n\r\n<p-dialog header=\"添加\" *ngIf=\"domAdjust && domAdjust.productFlag\" [(visible)]=\"domAdjust && domAdjust.productFlag\" width=\"800\"\r\n    [responsive]=\"true\" [contentStyle]=\"{height:800}\">\r\n    <associated-products (outValue)=\"productFixer.addProductCall($event)\"></associated-products>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"selectPerson.examineDisplay\" header=\"提交给\" [(visible)]=\"selectPerson.examineDisplay\">\r\n    <app-examine-approval [inValue]=\"selectPerson.extableData\" (outDisplay)=\"selectPerson.outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n\r\n<div class=\"ui-g-12\" style='margin-top:50px;' *ngIf=\"isRecover\">\r\n    <flow-path></flow-path>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part {\n  background: #fff;\n  padding-top: 10px; }\n\n.tit {\n  text-align: right;\n  line-height: 22px; }\n\n.ui-newtit {\n  text-align: right;\n  width: 23.6%;\n  float: left;\n  padding: 0.5em; }\n\n.ui-newtext {\n  width: 70%;\n  float: left;\n  padding: 0.5em; }\n\n.ui-newtext textarea {\n    resize: none;\n    height: 100px; }\n\n:host /deep/ .ui-fileupload .ui-fileupload-buttonbar.ui-widget-header.ui-corner-top {\n  background: #fff !important; }\n\n.btn {\n  text-align: center;\n  margin-top: 30px; }\n\n.btn .iscolor {\n    background: #ffc900; }\n\n.btn .iscolor:hover {\n      background: #ffc900; }\n\n:host /deep/ .ui-g-1, .ui-g-2, .ui-g-3, .ui-g-4, .ui-g-5, .ui-g-6, .ui-g-7, .ui-g-8, .ui-g-9, .ui-g-10, .ui-g-11, .ui-g-12 {\n  padding: 0.2em 0.5em; }\n\n:host /deep/ .ui-g-6 {\n  padding: 0.05em !important; }\n\n.ui-g-12 {\n  background-color: #fafafa; }\n\n.ui-g-12 .ui-md-6 {\n  display: flex; }\n\n.ui-g-12 label {\n  display: block;\n  width: 30%;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n\n.colorImport {\n  color: #0094D2;\n  cursor: pointer; }\n\n:host/deep/.ui-growl.ui-widget {\n  z-index: 2000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2UtYWRkL3Byb2plY3QtcHJvdG9jb2wtcXVlcnkvc3ViamVjdC1hZGp1c3RtZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxccHJvamVjdC1tYWluLW1hbmFnZVxccHJvamVjdC1tYWluLW1hbmFnZS1hZGRcXHByb2plY3QtcHJvdG9jb2wtcXVlcnlcXHN1YmplY3QtYWRqdXN0bWVudFxcc3ViamVjdC1hZGp1c3RtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFhLEVBQUE7O0FBSGpCO0lBS1EsWUFBWTtJQUNaLGFBQWEsRUFBQTs7QUFHckI7RUFDSSwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWUsRUFBQTs7QUFGbkI7SUFJUSxtQkFBbUIsRUFBQTs7QUFKM0I7TUFNWSxtQkFBbUIsRUFBQTs7QUFJL0I7RUFDSSxvQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSwwQkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHNUI7RUFDRyxhQUFhLEVBQUE7O0FBR2hCO0VBQ0csY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHcEI7RUFDRyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvcHJvamVjdC1tYWluLW1hbmFnZS9wcm9qZWN0LW1haW4tbWFuYWdlLWFkZC9wcm9qZWN0LXByb3RvY29sLXF1ZXJ5L3N1YmplY3QtYWRqdXN0bWVudC9zdWJqZWN0LWFkanVzdG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcblxyXG4udGl0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG4udWktbmV3dGl0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjMuNiU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6MC41ZW07XHJcbn1cclxuLnVpLW5ld3RleHR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOjAuNWVtO1xyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC51aS1maWxldXBsb2FkIC51aS1maWxldXBsb2FkLWJ1dHRvbmJhci51aS13aWRnZXQtaGVhZGVyLnVpLWNvcm5lci10b3B7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIC5pc2NvbG9ye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYzkwMDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjpob3N0IC9kZWVwLyAudWktZy0xLCAudWktZy0yLCAudWktZy0zLCAudWktZy00LCAudWktZy01LCAudWktZy02LCAudWktZy03LCAudWktZy04LCAudWktZy05LCAudWktZy0xMCwgLnVpLWctMTEsIC51aS1nLTEye1xyXG4gICAgcGFkZGluZzowLjJlbSAwLjVlbTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvICAudWktZy02e1xyXG4gICAgcGFkZGluZzogMC4wNWVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLWctMTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuIC51aS1nLTEyIC51aS1tZC02IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiAudWktZy0xMiBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuIC5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3JJbXBvcnQge1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8udWktZ3Jvd2wudWktd2lkZ2V0e1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: SubjectAdjustment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectAdjustment", function() { return SubjectAdjustment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_adjust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/adjust */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/adjust.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_selectPerson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/selectPerson */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/selectPerson.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_domFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/domFactory */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/domFactory.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/tzb/customCenter/http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// 查询轨迹






var SubjectAdjustment = /** @class */ (function () {
    function SubjectAdjustment(httpService, router, activatedRoute, http, commfunc, httpWork, resolver, msgService, customService, customCenterHttpService) {
        this.httpService = httpService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.commfunc = commfunc;
        this.httpWork = httpWork;
        this.resolver = resolver;
        this.msgService = msgService;
        this.customService = customService;
        this.customCenterHttpService = customCenterHttpService;
        this.afterXX = '';
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__["CommonlyMessage"]();
        this.selectPerson = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_selectPerson__WEBPACK_IMPORTED_MODULE_9__["SelectPerson"](this.commfunc, this.httpWork, this.commonlyMessage, this.router);
        this.projectId = '';
        this.userId = '';
        this.custId = '';
        this.adjustElement = ''; // 调整类型
        this.adjustReason = ''; // 调整原因
        this.adjustOpinion = ''; // 调整原因
        this.taskId = '';
        this.msgss = [];
        this.isRecover = false;
        this.theRequest = [];
        this.isConmit = false;
        this.objectHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_14__["ObjectHelper"]();
        this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_16__["LocalData"](this.commfunc);
        this.mainFlowNo = '';
        this.productFixer = {
            parent: this,
            origin: [],
            changedProduct: [],
            setOrigin: function (list) {
                this.origin = this.parent.objectHelper.objectDeepCopy(list);
            },
            isNeedFixProduct: function (list) {
                var flag = false;
                var t = list.filter(function (x) { return x.elementEnName == 'productId'; });
                if (t && t.length > 1) {
                    flag = true;
                }
                return flag;
            },
            getCombinedValue: function (list, key) {
                var ret = '';
                if (list && list.length) {
                    list.forEach(function (element) {
                        ret += element[key] + ',';
                    });
                    ret = ret.substr(0, ret.length - 1);
                }
                return ret;
            },
            getCombinedList: function (list, key, displayKey) {
                var allItems = this.getCombinedValue(list, key);
                var item = this.parent.objectHelper.objectDeepCopy(list[0]);
                item[key] = allItems;
                item.displayFlag1 = displayKey;
                return item;
            },
            columns: function () {
                return this.parent.isRecover ? ['elementValueBefore', 'elementValueAfter', 'elementDescBefore', 'elementDescAfter'] : ['elementValue', 'elementValue', 'elementDesc', 'elementDesc'];
            },
            fixProduct: function (list) {
                var ret = [];
                var columns = this.columns();
                if (list && list.length > 1) {
                    // 调整前
                    var ids = list.filter(function (x) { return x.elementEnName == 'productId' && x.displayFlag1 != '1'; });
                    var t = this.getCombinedList(ids, columns[0], '0');
                    ret.push(t);
                    var names = list.filter(function (x) { return x.elementEnName == 'productName' && x.displayFlag1 != '1'; });
                    t = this.getCombinedList(names, columns[0], '0');
                    ret.push(t);
                    // 调整后
                    ids = list.filter(function (x) { return x.elementEnName == 'productId' && x.displayFlag1 != '0'; });
                    t = this.getCombinedList(ids, columns[1], '1');
                    ret.push(t);
                    names = list.filter(function (x) { return x.elementEnName == 'productName' && x.displayFlag1 != '0'; });
                    t = this.getCombinedList(names, columns[1], '1');
                    ret.push(t);
                }
                return ret;
            },
            isProductExist: function (productId) {
                var ret = false;
                var products = this.origin;
                if (products && products.length) {
                    var t = products.filter(function (item) { return item.elementValue == productId; });
                    if (t && t.length) {
                        ret = true;
                    }
                }
                return ret;
            },
            getBeforeProduct: function (list) {
                var ret = [];
                if (list && list.length) {
                    var t = list.filter(function (x) { return x.displayFlag1 != '1'; });
                    if (t && t.length) {
                        ret = this.parent.objectHelper.objectDeepCopy(t);
                    }
                }
                return ret;
            },
            addProductCall: function (event) {
                var products = this.parent.objectHelper.objectDeepCopy(this.origin);
                var errorMsg = '';
                var columns = this.columns();
                if (this.parent.isRecover) {
                    products = this.getBeforeProduct(products);
                }
                if (event && event.length) {
                    for (var i = 0, len = event.length; i < len; i++) {
                        var element = event[i];
                        if (this.isProductExist(element.productId)) {
                            errorMsg = '不可以添加已经存在的产品';
                            break;
                        }
                        var num = products.length / 2 + 1;
                        if (num > 3) {
                            errorMsg = '产品数量不可以大于3';
                            break;
                        }
                        var sourceId = this.parent.objectHelper.objectDeepCopy(products[0]);
                        sourceId.displayFlag1 = '1';
                        sourceId[columns[3]] = element.productId;
                        sourceId.elementEnName = "productId";
                        sourceId.elementName = "产品编号";
                        sourceId.elementNum = "5";
                        sourceId.elementType = "4";
                        sourceId[columns[1]] = element.productId;
                        sourceId.rowNum = num;
                        if (this.parent.isRecover) {
                            sourceId[columns[0]] = '';
                            sourceId[columns[2]] = '';
                        }
                        products.push(sourceId);
                        var sourceName = this.parent.objectHelper.objectDeepCopy(products[0]);
                        sourceName.displayFlag1 = '1';
                        sourceName[columns[3]] = element.productName;
                        sourceName.elementEnName = "productName";
                        sourceName.elementName = "产品名称";
                        sourceName.elementNum = "10";
                        sourceName.elementType = "3";
                        sourceName[columns[1]] = element.productName;
                        sourceName.rowNum = num;
                        if (this.parent.isRecover) {
                            sourceName[columns[0]] = '';
                            sourceName[columns[2]] = '';
                        }
                        products.push(sourceName);
                    }
                }
                if (errorMsg) {
                    this.parent.commonlyMessage.logicError(errorMsg);
                }
                else {
                    var p = this.parent.objectHelper.objectDeepCopy(products);
                    var result = this.fixProduct(p);
                    var t = result.filter(function (item) { return item.elementEnName == 'productId' && item.displayFlag1 == '1'; })[0];
                    var allIds = t[columns[1]];
                    this.parent.domAdjust.dispatcher({
                        key: 'productId',
                        val: allIds,
                        type: '2'
                    });
                    t = result.filter(function (item) { return item.elementEnName == 'productName' && item.displayFlag1 == '1'; })[0];
                    var allNames = t[columns[1]];
                    this.parent.domAdjust.dispatcher({
                        key: 'productName',
                        val: allNames,
                        type: '2'
                    });
                    this.parent.domAdjust.productFlag = false;
                    this.changedProduct = this.parent.objectHelper.objectDeepCopy(products);
                }
            }
        };
    }
    ;
    SubjectAdjustment.prototype.ngOnInit = function () {
        this.codeValues();
        this.initFunc();
    };
    // 初始化函数
    SubjectAdjustment.prototype.initFunc = function () {
        var _this = this;
        // this.userId = JSON.parse(this.commfunc.getSessionData('officeOrgId'));
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            if (_this.activatedRoute.snapshot.params.mainFlowNo) {
                _this.mainFlowNo = _this.activatedRoute.snapshot.params.mainFlowNo;
            }
            // 审批流程
            if (_this.activatedRoute.snapshot.params.from == 'reminder-do') {
                var t = _this.commfunc.getSessionDataCH('change-detail-from-reminder-do');
                t = JSON.parse(t);
                _this.detilell = t['dataMap'];
                _this.detilells = JSON.parse(_this.detilell);
                _this.projectId = _this.detilells['bizPkFieldMap']['projectId'];
                _this.adjustElement = _this.detilells['bizPkFieldMap']['adjustElement'];
                _this.adjustSeqno = _this.detilells['bizPkFieldMap']['adjustSeqno'];
                _this.adjustReason = _this.detilells['bizPkFieldMap']['adjustReason'];
                _this.adjustOpinion = _this.detilells['bizPkFieldMap']['adjustOpinion'];
                _this.adjustInfo = _this.detilells['bizPkFieldMap']['adjustInfo'];
                _this.taskId = _this.activatedRoute['snapshot']['params']['taskId'];
                _this.isRecover = true;
                _this.queryAdjustElement(function () {
                    _this.loadConfig1();
                });
            }
            else {
                // 第一次要素调整
                _this.projectId = queryParams['projectId'];
                _this.custId = queryParams['custId'];
                // this.taskId = queryParams['taskId'];
                _this.lei = queryParams['lei'];
                _this.queryAdjustElement(function () {
                    _this.loadConfig();
                });
            }
        });
    };
    SubjectAdjustment.prototype.queryAdjustElement = function (callback) {
        var _this = this;
        var param = { "projectId": this.projectId };
        this.http.queryAdjustElement(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                var list = data['elementMap']['adjustList'];
                var i = 'adjustValue';
                _this.ZHEn(list, i);
                // this.adjustElementList = this.fixAdjustElement(data['elementMap']['adjustList']);
                if (callback)
                    callback();
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        });
    };
    // 要素中文排序
    SubjectAdjustment.prototype.ZHEn = function (a, i) {
        function getval(option) {
            if (!i)
                return option;
            var k = option;
            i.split('.').filter(function (item) {
                k = k[item];
            });
            return k + '';
        }
        a = a.sort(function (it1, it2) {
            return getval(it1).localeCompare(getval(it2), 'zh-CN');
        });
        this.adjustElementList = this.fixAdjustElement(a);
    };
    SubjectAdjustment.prototype.fixAdjustElement = function (list) {
        var ret = [];
        if (list && list.length) {
            ret.push({ label: '请选择', value: '' });
            list.forEach(function (element) {
                var obj = {
                    label: element.adjustValue,
                    value: element.adjustKey
                };
                ret.push(obj);
            });
        }
        return ret;
    };
    SubjectAdjustment.prototype.loadConfig1 = function () {
        var _this = this;
        var param = { "adjustSeqno": this.adjustSeqno };
        this.http.coopEleAdjustHistoryDetailQuery(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                var list = data.coopEleAdjustHistoryMap.adjustInfo;
                _this.productFixer.setOrigin(list);
                if (_this.adjustElement == '013' && _this.productFixer.isNeedFixProduct(list)) {
                    list = _this.productFixer.fixProduct(list);
                }
                // this.bean = data.coopEleAdjustHistoryMap;
                _this.domAdjust = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_adjust__WEBPACK_IMPORTED_MODULE_6__["DomAdjust"](_this.httpService, _this.resolver, _this.msgService);
                _this.domAdjust.configCover(list, { custId: '', commonlyMessage: null, isRecover: _this.isRecover, adjustElement: _this.adjustElement, projectId: _this.projectId });
                _this.specialDataOperateForSupply();
                _this.domFactory = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_domFactory__WEBPACK_IMPORTED_MODULE_10__["DomFactory"]();
                _this.domFactory.loadBasicData({
                    beforeContainer: _this.beforeContainer,
                    afterContainer: _this.afterContainer,
                    domAdjust: _this.domAdjust,
                    isDisabled: false
                });
                var before = _this.beforeDecorate(_this.domAdjust.before); //by huj++
                var after = _this.afterDecorate(_this.domAdjust.after); //by huj++
                _this.domFactory.generatorDom(before, 1); //by huj++
                _this.domFactory.generatorDom(after, 2); //by huj++
                _this.domAdjust.recoverDataMap();
                _this.adjustReason = data.coopEleAdjustHistoryMap.adjustReason;
                _this.adjustOpinion = data.coopEleAdjustHistoryMap.adjustOpinion;
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        });
    };
    SubjectAdjustment.prototype.loadConfig = function () {
        var _this = this;
        var param = { "projectId": this.projectId, "adjustElement": this.adjustElement };
        this.http.coopProjectElementQuery(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                var list = data.beforeAdjustList;
                _this.productFixer.setOrigin(list);
                if (_this.adjustElement == '013' && _this.productFixer.isNeedFixProduct(list)) {
                    list = _this.productFixer.fixProduct(list);
                }
                _this.domAdjust = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_tool_adjust__WEBPACK_IMPORTED_MODULE_6__["DomAdjust"](_this.httpService, _this.resolver, _this.msgService);
                _this.domAdjust.configCover(list, { custId: _this.custId, commonlyMessage: _this.commonlyMessage, adjustElement: _this.adjustElement, projectId: _this.projectId });
                _this.specialDataOperateForSupply();
                var before = _this.beforeDecorate(_this.domAdjust.before); //by huj++
                var after = _this.afterDecorate(_this.domAdjust.after); //by huj++
                _this.generatorDom(before, 1); //by huj++
                _this.generatorDom(after, 2); //by huj++
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        });
    };
    SubjectAdjustment.prototype.beforeDecorate = function (before) {
        var _this = this;
        before.forEach(function (element, index) {
            if (element.elementType === '3' || element.elementType === '1'
                || element.elementType === '2') {
                element.id = _this.adjustElement + '_' + element.elementEnName + '_before_' + index;
            }
        });
        return before;
    };
    SubjectAdjustment.prototype.afterDecorate = function (after) {
        var _this = this;
        after.forEach(function (element, index) {
            if (element.elementType === '3' || element.elementType === '1'
                || element.elementType === '2') {
                element.id = _this.adjustElement + '_' + element.elementEnName + '_after_' + index;
            }
        });
        return after;
    };
    // 获取供应链模式变更初始值
    SubjectAdjustment.prototype.getModeChangeInitData = function () {
        var ret = {
            middleAccountNumber: 0
        };
        if (this.adjustElement == '014') {
            var temp = this.domAdjust.before.filter(function (x) { return x.elementNumber == '1'; });
            if (temp && temp.length) {
                ret.middleAccountNumber = temp[0].elementValue;
            }
            var temp1 = this.domAdjust.after.filter(function (x) { return x.elementNumber == '1'; });
            if (temp1 && temp1.length) {
                temp1[0].elementValue = temp[0].elementValue;
            }
        }
        return ret;
    };
    // DOM Factory
    SubjectAdjustment.prototype.generatorDom = function (list, type) {
        var _this = this;
        if (list && list.length) {
            list.forEach(function (element) {
                switch (element.elementType) {
                    case '1':
                        _this.createDropdown(element, type);
                        break;
                    case '2':
                        _this.createNumber(element, type);
                        break;
                    case '3':
                        _this.createInput(element, type);
                        break;
                    case '4':
                        _this.createProduct(element, type);
                        break;
                    case '5':
                        break;
                    case '6':
                        break;
                    case '7':
                        break;
                    case '8':
                        _this.createCalender(element, type);
                        break;
                    case '9':
                        break;
                }
            });
        }
    };
    // 生成 Dom
    SubjectAdjustment.prototype.createDom = function (element, type, callback) {
        var val;
        var title = element.elementName;
        var key = element.elementEnName;
        var container = null;
        var flag = element.displayFlag1;
        var initCommand = element.initCommand; //by huj++
        // id, by huj++
        var id = element.id;
        if (type == 1) {
            val = element.elementValue;
            container = this.beforeContainer;
        }
        else {
            val = null;
            if (this.adjustElement == '013') {
                val = element.elementValue;
            }
            if (this.adjustElement == '014') {
                val = element.elementValue;
            }
            container = this.afterContainer;
        }
        callback({
            val: val,
            title: title,
            type: type,
            key: key,
            isNeedCallServe: element.frontElementCheckServe ? true : false,
            flag: flag,
            initCommand: initCommand,
            id: id //by huj++
            // callType: element.frontElementCheckServe ? element.frontElementCheckServe.split(',')[0] : '',
        }, container);
    };
    // 创建 文本框
    SubjectAdjustment.prototype.createInput = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createInput(param, container);
        });
    };
    // 创建 数字框
    SubjectAdjustment.prototype.createNumber = function (element, type) {
        var _this = this;
        //  this._decorateForNumber(element, type, () => {
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createNumber(param, container);
        });
        //  })
    };
    SubjectAdjustment.prototype._decorateForNumber = function (element, type, callback) {
        if (this.adjustElement == '014' && type == 2) {
            if (element.elementEnName == 'payPeriod') {
                var temp = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'payPeriod'; });
                if (temp && temp.length) {
                    element.elementValue = temp[0].elementValue;
                }
            }
            if (element.elementEnName == 'middleAccountNumber') {
                var temp = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'middleAccountNumber'; });
                if (temp && temp.length) {
                    element.elementValue = temp[0].elementValue;
                }
            }
        }
        callback(element, type);
    };
    // 创建 日历
    SubjectAdjustment.prototype.createCalender = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createCalender(param, container);
        });
    };
    // 创建 下拉框
    SubjectAdjustment.prototype.createDropdown = function (element, type) {
        var _this = this;
        //this._decorateForDropdown(element, type, () => {   //by huj--
        this.createDom(element, type, function (param, container) {
            var options = [];
            if (type == 1) {
                options = [{ label: element.elementDesc, value: element.elementValue }];
            }
            else {
                options = _this.fixOptions(element.listElement);
            }
            //by huj start
            // if (this.adjustElement == '014' && type == 2
            // ) {
            //     this.domAdjust.after[3].frontElementCheckServe = '4,Disabled:true,middleAccountNumber';
            //     if (element.elementValue == '0' && element.elementEnName == 'havemiddleAccount') {
            //         this.domAdjust.after[4].initCommand = 'Disabled:true';
            //     }
            // }
            // by  huj end 
            param['options'] = options;
            _this.domAdjust.createDropdown(param, container);
        });
        //});
    };
    SubjectAdjustment.prototype._decorateForDropdown = function (element, type, callback) {
        if (this.adjustElement == '014' && type == 2) {
            if (element.elementEnName == 'havemiddleAccount') {
                debugger;
                var temp = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'havemiddleAccount'; });
                if (temp && temp.length) {
                    element.listElement.push({ optionKey: temp[0].elementValue, optionValue: temp[0].elementDesc });
                    element.elementValue = temp[0].elementValue;
                    element.elementDesc = temp[0].elementDesc;
                }
            }
        }
        callback(element, type);
    };
    // 创建 产品
    SubjectAdjustment.prototype.createProduct = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createProduct(param, container);
        });
    };
    // 对下拉框数据进行处理
    SubjectAdjustment.prototype.fixOptions = function (list) {
        var ret = [];
        if (list && list) {
            ret.push({ label: '请选择', value: '' });
            list.forEach(function (element) {
                var obj = {};
                obj['label'] = element.optionValue;
                obj['value'] = element.optionKey;
                ret.push(obj);
            });
        }
        return ret;
    };
    // 要素调整事件
    SubjectAdjustment.prototype.change = function () {
        this.clearContainer();
        this.loadConfig();
    };
    // 清空 DOM 容器
    SubjectAdjustment.prototype.clearContainer = function () {
        this.beforeContainer.clear();
        this.afterContainer.clear();
    };
    SubjectAdjustment.prototype.specialDataOperateForSupply = function () {
        // 供应链模式变更
        // ----------------------------------特殊处理 start-------------------------
        var platformIdentify = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'havemiddleAccount'; });
        platformIdentify = platformIdentify && platformIdentify.length ? platformIdentify[0].elementValue : '';
        var payPeriod = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'payPeriod'; });
        payPeriod = payPeriod && payPeriod.length ? payPeriod[0].elementValue : 0;
        var havemiddleAccount = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'havemiddleAccount'; });
        havemiddleAccount = havemiddleAccount && havemiddleAccount.length ? havemiddleAccount[0].elementValue : '';
        var middleAccountNumber = this.domAdjust.before.filter(function (x) { return x.elementEnName == 'middleAccountNumber'; });
        middleAccountNumber = middleAccountNumber && middleAccountNumber.length ? middleAccountNumber[0].elementValue : '';
        this.domAdjust.decorateForAfterDataMap(this.adjustElement, {
            platformIdentify: platformIdentify,
            payPeriod: payPeriod,
            havemiddleAccount: havemiddleAccount,
            middleAccountNumber: middleAccountNumber
        });
        // ----------------------------------特殊处理 end-------------------------
    };
    // 选人
    SubjectAdjustment.prototype.SelectPersonCover = function () {
        debugger;
        this.domAdjust.getBeforeAndAfter(this.adjustElement);
        var N = this.domAdjust.afterAdjust;
        if (typeof N != 'number' && !N) {
            this.commonlyMessage.logicError('请填写调整数据');
            return;
        }
        else if (!this.adjustReason) {
            this.commonlyMessage.logicError('请填写调整原因');
            return;
        }
        else if (!this.adjustOpinion) {
            this.commonlyMessage.logicError('请填写调整意见');
            return;
        }
        if (this.isRecover) {
            this.selectPerson.loadData({
                userId: this.userId,
                taskId: this.taskId,
                adjustElement: this.adjustElement,
                beforeAdjust1: this.domAdjust.beforeAdjust,
                afterAdjust1: this.domAdjust.afterAdjust,
            });
            this.afterXX = this.domAdjust.afterAdjust;
        }
        else {
            this.selectPerson.loadData({
                userId: this.userId,
                //taskId: this.taskId,
                adjustElement: this.adjustElement,
                beforeAdjust1: this.domAdjust.beforeAdjust,
                afterAdjust1: this.domAdjust.afterAdjust.toString(),
            });
            this.afterXX = this.domAdjust.afterAdjust.toString();
        }
        this.selectPerson.selectNextPerson();
    };
    // 提交
    SubjectAdjustment.prototype.submitFunc = function (callback) {
        var _this = this;
        debugger;
        var params;
        if (this.adjustElement == '013') {
            params = this.domAdjust.getPostProducts(this.productFixer.changedProduct);
        }
        else {
            params = this.domAdjust.getPostData();
        }
        params['projectId'] = this.projectId;
        params['unitFlag'] = 2;
        params['adjustElement'] = this.adjustElement;
        params['adjustReason'] = this.adjustReason;
        params['adjustOpinion'] = this.adjustOpinion;
        if (this.isRecover) {
            params['adjustSeqno'] = this.adjustSeqno;
        }
        console.log(params);
        this.http.coopProjectElementAdjust(params).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
                callback();
                _this.goback();
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
            // 删除之前选中的人
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
                delete s.extParam.specifyNextOpers;
                delete s.extParam.specifyNextNode;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
        });
    };
    // 获取新流水号
    SubjectAdjustment.prototype.getNewSerialNumer = function (callback) {
        var _this = this;
        var param = {};
        this.customCenterHttpService.createGlobalSeqNo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.setSerialNumber(data.globalSeqNo);
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
            }
            else {
            }
            callback();
        }, function (error) {
            callback();
        });
    };
    // 设置流水号
    SubjectAdjustment.prototype.setSerialNumber = function (serialNum) {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader['globalSeqNo'] = serialNum;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
    };
    // submit Factory
    SubjectAdjustment.prototype.submit = function (callback) {
        var _this = this;
        if (this.isRecover) {
            this.setSerialNumber(this.mainFlowNo);
            this.submitFunc(callback);
        }
        else {
            this.getNewSerialNumer(function () {
                _this.submitFunc(callback);
            });
        }
    };
    // 弹出框回调
    SubjectAdjustment.prototype.outValueCall = function (e) {
        var _this = this;
        var persons = '';
        var specifyNextNode = '';
        e.forEach(function (el) {
            persons += el['tellerId'] + ',';
            specifyNextNode = el.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = persons;
        commonHeader.extParam['specifyNextNode'] = specifyNextNode;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit(function () {
            if (_this.isRecover) {
                var params = void 0;
                if (_this.adjustElement == '004') {
                    params = {
                        userId: _this.userId,
                        taskId: _this.taskId,
                        bussinessMap: {
                            specifyNextOpers: persons,
                            specifyNextNode: specifyNextNode,
                            userId: JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId,
                            adjustElement: _this.adjustElement,
                            beforeAdjust: _this.domAdjust.beforeAdjust,
                            afterAdjust: _this.afterXX,
                            beforeGuarantyStyle: _this.domAdjust.beforeGuarantyStyle,
                            afterGuarantyStyle: _this.domAdjust.afterGuarantyStyle
                        }
                    };
                }
                else {
                    params = {
                        userId: _this.userId,
                        taskId: _this.taskId,
                        bussinessMap: {
                            specifyNextOpers: persons,
                            specifyNextNode: specifyNextNode,
                            userId: JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId,
                            adjustElement: _this.adjustElement,
                            beforeAdjust: _this.domAdjust.beforeAdjust,
                            afterAdjust: _this.afterXX,
                        }
                    };
                }
                _this.pushToNext(params);
            }
        });
    };
    // 提交到下一步
    SubjectAdjustment.prototype.pushToNext = function (params) {
        var _this = this;
        this.customService.bpmNextTask(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        }, function (err) {
            _this.commonlyMessage.logicError("调用服务失败！");
        });
    };
    //码值
    SubjectAdjustment.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    // 页面销毁
    SubjectAdjustment.prototype.ngOnDestory = function () {
        this.domAdjust.destroy();
    };
    // 页面返回
    SubjectAdjustment.prototype.goback = function () {
        // 跳转大额与供应链区分
        if (this.lei == '110') {
            this.router.navigate(['/pages/tzb/custom-center/project-main-manage/ProjectProtocolQuery'], { queryParams: { index: 1 } });
        }
        else if (this.lei == '999') {
            this.router.navigate(['/pages/tzb/custom-center/project-main-manage/project-main-manage-add-qita'], { queryParams: { index: 2 } });
        }
        else {
            setTimeout(function () {
                window.history.go(-1);
            }, 500);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("beforeContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], SubjectAdjustment.prototype, "beforeContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("afterContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], SubjectAdjustment.prototype, "afterContainer", void 0);
    SubjectAdjustment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "subject-adjustment",
            template: __webpack_require__(/*! ./subject-adjustment.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.html"),
            styles: [__webpack_require__(/*! ./subject-adjustment.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.scss")],
            // providers: [MessageService2]
            // 查询轨迹
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_11__["ProcessInstanceManagementService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__["MessageService"], app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"], app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_15__["CustomCenterHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_3__["ProjectHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_15__["CustomCenterHttpService"]])
    ], SubjectAdjustment);
    return SubjectAdjustment;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.module.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.module.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: SubjectAdjustmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectAdjustmentModule", function() { return SubjectAdjustmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.ts");
/* harmony import */ var _templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/adjust-input.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.routing */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.routing.ts");
/* harmony import */ var _templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/adjust-number.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component.ts");
/* harmony import */ var _templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/adjust-calendar.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component.ts");
/* harmony import */ var _templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/adjust-dropdown.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component.ts");
/* harmony import */ var _common_customerCenterCommon_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/customerCenterCommon.module */ "./src/app/pages/tzb/customCenter/common/customerCenterCommon.module.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_create_custom_group_group_product_group_product_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件

//页面











var SubjectAdjustmentModule = /** @class */ (function () {
    function SubjectAdjustmentModule() {
    }
    SubjectAdjustmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_routing__WEBPACK_IMPORTED_MODULE_7__["SubjectAdjustRouting"],
                _common_customerCenterCommon_module__WEBPACK_IMPORTED_MODULE_11__["CustomerCenterCommonModule"],
                app_pages_tzb_custom_custom_group_create_custom_group_group_product_group_product_module__WEBPACK_IMPORTED_MODULE_13__["GroupProductModule"]
            ],
            declarations: [
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_component__WEBPACK_IMPORTED_MODULE_5__["SubjectAdjustment"],
            ],
            entryComponents: [
                _templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_6__["AdjustInputComponent"],
                _templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_8__["AdjustNumberComponent"],
                _templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_9__["AdjustCalendarComponent"],
                _templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["AdjustDropdownComponent"],
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_12__["AdjustProductComponent"],
            ],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__["AuthorityService"]
            ],
            exports: [
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_component__WEBPACK_IMPORTED_MODULE_5__["SubjectAdjustment"],
            ]
        })
    ], SubjectAdjustmentModule);
    return SubjectAdjustmentModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.routing.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.routing.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: SubjectAdjustRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectAdjustRouting", function() { return SubjectAdjustRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/subject-adjustment.component.ts");


var routes = [
    {
        path: '',
        component: app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_subject_adjustment_component__WEBPACK_IMPORTED_MODULE_1__["SubjectAdjustment"],
    }
];
var SubjectAdjustRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/selectPerson.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/selectPerson.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: SelectPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPerson", function() { return SelectPerson; });
var SelectPerson = /** @class */ (function () {
    function SelectPerson(commfunc, customService, commonlyMessage, router) {
        this.commfunc = commfunc;
        this.customService = customService;
        this.commonlyMessage = commonlyMessage;
        this.router = router;
        this.userId = '';
        this.taskId = '';
        this.adjustElement = '';
        this.beforeAdjust1 = '';
        this.afterAdjust1 = '';
        this.examineDisplay = false;
        this.extableData = [];
    }
    SelectPerson.prototype.loadData = function (obj) {
        this.userId = obj.userId;
        this.taskId = obj.taskId;
        this.adjustElement = obj.adjustElement;
        this.beforeAdjust1 = obj.beforeAdjust1;
        this.afterAdjust1 = obj.afterAdjust1;
    };
    SelectPerson.prototype.selectNextPerson = function () {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (commonHeader.extParam.postId) {
            this.postId = commonHeader.extParam.postId;
        }
        // 删除之前选中的人
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.specifyNextNode;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
        var param = {
            userIdMap: {
                userId: this.userId,
                userPost: this.postId,
            },
            proxessDesc: '合作审批',
            taskId: this.taskId,
            processCode: "RUM0007",
            bussinessMap: {
                adjustElement: this.adjustElement,
                beforeAdjust: this.beforeAdjust1,
                afterAdjust: this.afterAdjust1
            }
        };
        // this.outVal = data['result']['nextOutData'][0]['selectUserList'];
        this.customService.bpmFindNextNodeInfo(param).subscribe(function (data) {
            // this.examineDisplay = true;
            if (data.returnCode.code == 'success') {
                debugger;
                if (data.result.nextOutData && data.result.nextOutData) {
                    var waitSelectUserList = data.result.nextOutData;
                    _this.extableData = [];
                    _this.extableData = waitSelectUserList;
                    // console.log(waitSelectUserList)
                    var a = commonHeader.extParam.specifyNextOpers;
                    if (!a) {
                        if (_this.extableData && _this.extableData.length && _this.extableData[0].selectUserList && _this.extableData[0].selectUserList.length) {
                            _this.examineDisplay = true;
                        }
                        else {
                            _this.examineDisplay = false;
                        }
                    }
                }
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        }, function (error) {
            _this.commonlyMessage.logicError("调用服务失败！");
        });
    };
    SelectPerson.prototype.outDisplayCall = function (e) {
        this.dealPerShow = e;
        this.examineDisplay = false;
    };
    return SelectPerson;
}());



/***/ })

}]);
//# sourceMappingURL=project-main-manage-add-project-protocol-query-subject-adjustment-subject-adjustment-module.js.map