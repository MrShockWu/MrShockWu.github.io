(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-cusGroup-cusGroup-module"],{

/***/ "./src/app/@uisftech/view/message-approve/message-approve.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@uisftech/view/message-approve/message-approve.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MessageApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageApproveComponent", function() { return MessageApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageApproveComponent = /** @class */ (function () {
    function MessageApproveComponent(router, route, Commfunc, CustomeHttpService) {
        this.router = router;
        this.route = route;
        this.Commfunc = Commfunc;
        this.CustomeHttpService = CustomeHttpService;
        this.msgs = [];
        this.param = {};
        this.info = {
            groupId: '',
            groupName: '',
            createdTime: '',
            templateId: '',
            messageTempleTotalType: '',
            resultPageList: [],
            messageTempleContent: ''
        };
    }
    MessageApproveComponent.prototype.ngOnInit = function () {
        this.location_params = this.route.snapshot.params;
        this.param = {
            custGroupReportId: this.location_params.custGroupReportId,
            groupId: this.location_params.groupId,
            pageSize: 1000,
            pageNum: 1
        };
        this.queryCustGroupApproval();
        //   this.selectCustGroupInfo();
    };
    //查询短信审批信息
    MessageApproveComponent.prototype.queryCustGroupApproval = function () {
        var _this = this;
        var successFnc = function (data) {
            _this.info = data;
            var params = {
                templeId: data.templateId,
                messageTempleTotalType: data.messageTempleTotalType
            };
            _this.viewInfoTemplate(params);
        };
        this.Commfunc.interfaceComFnc(this.CustomeHttpService.queryCustGroupApproval(this.param), successFnc, this.msgs);
    };
    MessageApproveComponent.prototype.viewInfoTemplate = function (params) {
        var _this = this;
        var successFnc = function (data) {
            _this.info.messageTempleContent = data.messageTempleContent;
        };
        this.Commfunc.interfaceComFnc(this.CustomeHttpService.viewInfoTemplate(params), successFnc, this.msgs);
    };
    MessageApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-approve',
            template: "\n    <div class=\"ui-g-12\">\n    <header-title [Info]=\"title\"></header-title>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-2\">\n            \u57FA\u672C\u8D44\u6599\uFF1A\n            <hr>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-6 ui-g-offset-1\">\n            <div class=\"ui-g-2\" style=\"padding:0px;\">\n                <label for=\"\">\u7FA4\u53F7\uFF1A</label>\n            </div>\n            <div class=\"ui-g-2\">\n                <input type=\"text\" pInputText [(ngModel)]=\"location_params.groupId\" disabled=\"true\">\n                <!-- <input type=\"text\" pInputText disabled=\"true\"> -->\n            </div>\n        </div>\n        <div class=\"ui-g-3\">\n            <div class=\"ui-g-4\" style=\"padding:0px;\">\n                <label for=\"\">\u7FA4\u540D\u79F0\uFF1A</label>\n            </div>\n            <div class=\"ui-g-8\" style=\"padding:0px;\">\n                <input type=\"text\" pInputText [(ngModel)]=\"info.groupName\" disabled=\"true\">\n                <!-- <input type=\"text\" pInputText disabled=\"true\"> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-6\">\n            <div class=\"ui-g-4\" style=\"padding:0px;\">\n                <label for=\"\">\u53D1\u9001\u65F6\u95F4\uFF1A</label>\n            </div>\n            <div class=\"ui-g-8\" style=\"padding:0px;\">\n                <input type=\"text\" pInputText [(ngModel)]=\"info.createdTime\" disabled=\"true\">\n                <!-- <input type=\"text\" pInputText disabled=\"true\"> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\" style=\"padding:0px;\">\n                <label for=\"\">\u77ED\u4FE1\u5185\u5BB9\uFF1A</label>\n            </div>\n            <div class=\"ui-g-8\" style=\"padding:0px;\">\n                    <input id=\"input\" type=\"textarea\" pInputTextarea style=\"height:60px;\" [(ngModel)]=\"info.messageTempleContent\" disabled=\"true\">\n                <!-- <input type=\"text\" pInputText disabled=\"true\"> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 table\">\n\t\t<p-dataTable [value]=\"info.resultPageList\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"'100%'\">\n\t\t\t<p-headerColumnGroup>\n\t\t\t\t<p-row>\n\t\t\t\t\t<p-column header=\"\u5BA2\u6237\u53F7\" colspan=\"1\"></p-column>\n\t\t\t\t\t<p-column header=\"\u5BA2\u6237\u540D\u79F0\" colspan=\"1\"></p-column>\n\t\t\t\t\t<p-column header=\"\u8054\u7CFB\u7535\u8BDD\" colspan=\"1\"></p-column>\n\t\t\t\t</p-row>\n\t\t\t</p-headerColumnGroup>\n\t\t\t<p-column field=\"custNo\"></p-column>\n\t\t\t<p-column field=\"custName\"></p-column>\n\t\t\t<p-column field=\"custPhone\"></p-column>\n\t\t</p-dataTable>\n\t\t<!-- <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator> -->\n\t</div>\n</div>",
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomeHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomeHttpService"]])
    ], MessageApproveComponent);
    return MessageApproveComponent;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/cusGroup/cusGroup.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusGroup/cusGroup.module.ts ***!
  \********************************************************************/
/*! exports provided: OtherCusGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusGroupModule", function() { return OtherCusGroupModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cusGroup_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cusGroup.routing */ "./src/app/@uisftech/view/routing/cusGroup/cusGroup.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval2_customGroup_rating_approval2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2 */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval_customGroup_rating_approval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_holder_approval_customGroup_holder_approval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_market_scheme_market_scheme_check_market_scheme_check_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_list_approval_customGroup_list_approval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_admin_approval_customGroup_admin_approval__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_flow_custom_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/flow-custom.module */ "./src/app/pages/tzb/exam-appr-comp/custom/flow-custom.module.ts");
/* harmony import */ var app_uisftech_view_message_approve_message_approve_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/@uisftech/view/message-approve/message-approve.component */ "./src/app/@uisftech/view/message-approve/message-approve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { OtherModule } from "app/pages/tzb/other/other.module";



 //客户群营销方案审批




// import { CreateCustomGroupApprovalComponent } from 'app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component';

var OtherCusGroupModule = /** @class */ (function () {
    function OtherCusGroupModule() {
    }
    OtherCusGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _cusGroup_routing__WEBPACK_IMPORTED_MODULE_4__["OtherCusGroupRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_exam_appr_comp_custom_flow_custom_module__WEBPACK_IMPORTED_MODULE_12__["CustomWorkflowModule"],
            ],
            declarations: [
                // CreateCustomGroupApprovalComponent,
                app_pages_tzb_custom_custom_group_custom_group_view_customGroup_admin_approval_customGroup_admin_approval__WEBPACK_IMPORTED_MODULE_11__["customGroupAdminApprovalComponent"],
                app_uisftech_view_message_approve_message_approve_component__WEBPACK_IMPORTED_MODULE_13__["MessageApproveComponent"],
                app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval2_customGroup_rating_approval2__WEBPACK_IMPORTED_MODULE_5__["GroupApproval2Component"],
                app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval_customGroup_rating_approval__WEBPACK_IMPORTED_MODULE_6__["GroupApprovalComponent"],
                app_pages_tzb_custom_custom_group_custom_group_view_customGroup_holder_approval_customGroup_holder_approval__WEBPACK_IMPORTED_MODULE_7__["customGroupHolderApprovalComponent"],
                app_pages_tzb_custom_custom_group_custom_group_view_customGroup_list_approval_customGroup_list_approval__WEBPACK_IMPORTED_MODULE_9__["customGroupListApprovalComponent"],
                app_pages_tzb_custom_custom_group_market_scheme_market_scheme_check_market_scheme_check_component__WEBPACK_IMPORTED_MODULE_8__["MarketSchemeCheckComponent"],
            ],
            providers: [
                app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_10__["CusOperationHttpService"]
            ]
        })
    ], OtherCusGroupModule);
    return OtherCusGroupModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/cusGroup/cusGroup.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusGroup/cusGroup.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, OtherCusGroupRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusGroupRouting", function() { return OtherCusGroupRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval2_customGroup_rating_approval2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2 */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval_customGroup_rating_approval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_holder_approval_customGroup_holder_approval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_market_scheme_market_scheme_check_market_scheme_check_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group//market-scheme/market-scheme-check/market-scheme-check.component */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_list_approval_customGroup_list_approval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_view_customGroup_admin_approval_customGroup_admin_approval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_custom_group_custom_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.ts");
/* harmony import */ var app_uisftech_view_message_approve_message_approve_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/view/message-approve/message-approve.component */ "./src/app/@uisftech/view/message-approve/message-approve.component.ts");









var routes = [
    {
        //群名单增加
        path: 'custApprove/:applyType/:batchId/:groupId',
        component: app_pages_tzb_custom_custom_group_custom_group_view_customGroup_list_approval_customGroup_list_approval__WEBPACK_IMPORTED_MODULE_5__["customGroupListApprovalComponent"]
    },
    {
        //群营销方案修改
        path: 'a/b/c/d/e/f/g/j/groupPlan/:groupId/:planId/:applyType',
        component: app_pages_tzb_custom_custom_group_market_scheme_market_scheme_check_market_scheme_check_component__WEBPACK_IMPORTED_MODULE_4__["MarketSchemeCheckComponent"]
    },
    {
        //创建客户群10
        path: 'a/b/c/d/e/f/g/j/:groupId/:applyType',
        component: app_pages_tzb_exam_appr_comp_custom_custom_group_custom_group_component__WEBPACK_IMPORTED_MODULE_7__["CreateCustomGroupApprovalComponent"]
    },
    {
        //群星级修改8
        path: 'approval/b/c/d/e/:groupId/:groupLevel/:groupAfterLevel',
        component: app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval_customGroup_rating_approval__WEBPACK_IMPORTED_MODULE_2__["GroupApprovalComponent"]
    },
    {
        //修改客户群9
        path: 'a/b/c/d/e/f/:groupId/:roleType/:role',
        component: app_pages_tzb_custom_custom_group_custom_group_view_customGroup_holder_approval_customGroup_holder_approval__WEBPACK_IMPORTED_MODULE_3__["customGroupHolderApprovalComponent"]
    },
    {
        //修改客户群7
        path: 'a/b/c/d/e/:groupId/:roleType',
        component: app_pages_tzb_custom_custom_group_custom_group_view_customGroup_admin_approval_customGroup_admin_approval__WEBPACK_IMPORTED_MODULE_6__["customGroupAdminApprovalComponent"]
    },
    {
        //群星级新增6
        path: 'approval2/b/c/d/:groupId/:groupLevel',
        component: app_pages_tzb_custom_custom_group_custom_group_view_customGroup_rating_approval2_customGroup_rating_approval2__WEBPACK_IMPORTED_MODULE_1__["GroupApproval2Component"]
    },
    {
        //群短信4
        path: 'a/b/:custGroupReportId/:groupId',
        component: app_uisftech_view_message_approve_message_approve_component__WEBPACK_IMPORTED_MODULE_8__["MessageApproveComponent"]
    },
];
var OtherCusGroupRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group ui-g-12 module\" [style]=\"{'text-align':'center'}\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3 ui-md-2 text_right text-right\">群号:</div>\r\n    <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupId\" disabled='true'></div>\r\n    <div class=\"ui-g-3 ui-md-2 text_right text-right\">群名称:</div>\r\n    <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupName\" disabled='true'></div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn-batch-import\">\r\n    <span>当前{{header_1}}</span>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <!-- <header-title [Info]=\"groupClientImport\"></header-title> -->\r\n    <div class=\"form-group\">\r\n      <div class=\"ui-g-12 tab\">\r\n         <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\"  [value]=\"change_prev\" id=\"groupTable\">\r\n          <p-column header=\"客群区域\" [style]=\"{'text-align':'center'}\" *ngIf=\"isContactPerson\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"change_prev[i].groupZone\" class=\"customGroupInput\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户号\" [style]=\"{'text-align':'center'}\" *ngIf=\"isCust\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userId\" class=\"customGroupInput\" >\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"联系人工号\" [style]=\"{'text-align':'center'}\" *ngIf=\"isYuanG\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userId\" class=\"customGroupInput\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户姓名\" [style]=\"{'text-align':'center'}\" *ngIf=\"isCust\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userName\" class=\"customGroupInput\" >\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"联系人姓名\" [style]=\"{'text-align':'center'}\" *ngIf=\"isYuanG\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userName\" class=\"customGroupInput\">\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 btn-batch-import\">\r\n        <span>调整后{{header_1}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <!-- <header-title [Info]=\"groupClientImport\"></header-title> -->\r\n        <div class=\"form-group\">\r\n          <div class=\"ui-g-12 tab\">\r\n             <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\" [value]=\"change_after\" id=\"groupTable2\">\r\n              <p-column header=\"客群区域\" [style]=\"{'text-align':'center'}\" *ngIf=\"isContactPerson\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"change_after[i].groupZone\" class=\"customGroupInput\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"客户号\" [style]=\"{'text-align':'center'}\" *ngIf=\"isCust\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userId\" class=\"customGroupInput\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"联系人工号\" [style]=\"{'text-align':'center'}\" *ngIf=\"isYuanG\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userId\" class=\"customGroupInput\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"客户姓名\" [style]=\"{'text-align':'center'}\" *ngIf=\"isCust\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userName\" class=\"customGroupInput\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"联系人姓名\" [style]=\"{'text-align':'center'}\" *ngIf=\"isYuanG\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userName\" class=\"customGroupInput\">\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6 ui-md-2 text_right text-right\">调整原因:</div>\r\n            <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"remark\" disabled='true'></div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6 ui-md-2 text_right text-right\">所属机构:</div>\r\n            <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"orgId\" disabled='true'></div>\r\n          </div>\r\n          <!-- <div class=\"ui-g-12 btn-submit\">\r\n       <button pButton type=\"button\" label=\"驳回\" (click)=\"confirm(1)\"></button> \r\n       <button pButton type=\"button\" label=\"提交审批\" (click)=\"confirm(0)\"></button>\r\n    </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.customGroupInput {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtYWRtaW4tYXBwcm92YWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGN1c3RvbS1ncm91cC12aWV3XFxjdXN0b21Hcm91cC1hZG1pbi1hcHByb3ZhbFxcY3VzdG9tR3JvdXAtYWRtaW4tYXBwcm92YWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUNKLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2N1c3RvbS1ncm91cC12aWV3L2N1c3RvbUdyb3VwLWFkbWluLWFwcHJvdmFsL2N1c3RvbUdyb3VwLWFkbWluLWFwcHJvdmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJhdGNoLWltcG9ydDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG4uY3VzdG9tR3JvdXBJbnB1dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: customGroupAdminApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customGroupAdminApprovalComponent", function() { return customGroupAdminApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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






var customGroupAdminApprovalComponent = /** @class */ (function () {
    function customGroupAdminApprovalComponent(httpService, route, commfunc) {
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.change_prev = [];
        this.change_after = [];
        this.CustGroupInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupInfoBean"];
        this.isYuanG = false;
        this.isCust = false;
        this.theRequest = [];
        this.arrayList = [];
    }
    customGroupAdminApprovalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = location.href; //获取url中？后面的参数
        if (url.indexOf(";") != -1) {
            var str = url.substr(1);
            var strs = str.split(";");
            for (var i_1 = 0; i_1 < strs.length; i_1++) {
                this.theRequest[strs[i_1].split("=")[0]] = (strs[i_1].split("=")[1]);
            }
        }
        this.theRequest.doResult = decodeURI(this.theRequest.doResult);
        this.location_params = this.route.snapshot.params;
        // this.header_1 = this.location_params.header_1;
        this.isContactPerson = this.location_params.roleType == 1 ? true : false;
        var i = this.location_params.roleType;
        if (i == 1 || i == 2 || i == 4) {
            this.arrayList = JSON.parse(this.commfunc.getSessionDataCH('groupContactor'));
        }
        else {
            this.arrayList = JSON.parse(this.route.snapshot.params['dataMap']);
        }
        if (i == 4) {
            this.header_1 = '群评价人';
        }
        else if (i == 5) {
            this.header_1 = '群主';
        }
        else if (i == 3) {
            this.header_1 = '群指导师傅';
        }
        else if (i == 1) {
            this.header_1 = '群联系人';
        }
        else {
            this.header_1 = '群介绍人';
        }
        if (i == 1 || i == 5 || i == 3) {
            this.isYuanG = true;
            this.isCust = false;
        }
        else {
            this.isYuanG = false;
            this.isCust = true;
        }
        // this.selectGroupAdminInfo(1); // 调整前
        // this.selectGroupAdminInfo(3)
        // if (this.theRequest.doResult && this.theRequest.doResult == '1') { // 判断-是否否决
        //     this.selectGroupAdminInfo(4); // 否决后
        // } else {
        //     this.selectGroupAdminInfo(3); // 未否决
        // }
        if (this.arrayList.batchOld.length > 0) {
            this.arrayList.batchOld.forEach(function (element) {
                _this.change_prev.push({
                    userId: element.userId,
                    userName: element.userName,
                    groupZone: element.groupZone
                });
            });
        }
        else {
            setTimeout(function () {
                _this.change_prev = [];
            });
        }
        if (this.arrayList.batchNew.length > 0) {
            this.arrayList.batchNew.forEach(function (element) {
                _this.change_after.push({
                    userId: element.userId,
                    userName: element.userName,
                    groupZone: element.groupZone
                });
            });
            this.remark = this.arrayList.batchNew[0].updateReason; //调整原因
        }
        else {
            setTimeout(function () {
                _this.change_after = [];
            });
        }
        this.selectCustGroupInfo();
    };
    customGroupAdminApprovalComponent.prototype.selectGroupAdminInfo = function (statusId) {
        var _this = this;
        var params = {};
        if (statusId == '1') {
            params = {
                groupId: this.route.snapshot.params['groupId'],
                roleType: this.route.snapshot.params['roleType'],
                statusId: statusId,
            };
        }
        if (statusId == '3') {
            params = {
                batchId: this.arrayList.batchId,
                groupId: this.arrayList.groupId,
                roleType: this.arrayList.roleType,
            };
        }
        // 客户群管理人员再查询
        this.httpService.selectGroupAdminInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (statusId == 1) {
                    _this.change_prev = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_prev.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
                else if (statusId == 3) {
                    _this.change_after = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_after.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                    _this.remark = data.updateReason; // 调整原因
                    // if(this.remark == undefined || this.remark == '' || this.remark == null){
                    //     this.selectGroupAdminInfo(4);
                    // }
                }
                // else if (statusId == 4) {
                //     this.change_after = [];
                //     if (data.roleList != null) {
                //         data.roleList.forEach(item => {
                //             this.change_after.push({
                //                 userId: item.userId,
                //                 userName: item.userName,
                //                 groupZone: item.groupZone
                //             })
                //         });
                //     }
                //     this.remark = data.updateReason; // 调整原因
                // }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupAdminApprovalComponent.prototype.confirm = function (apply_result) {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            roleType: this.location_params.roleType,
            remark: this.remark,
            apprResult: apply_result,
            roleList: this.change_prev,
            applyRoleList: this.change_after
        };
        // 客户群管理人员变更申请
        this.httpService.updateGroupAdminStatus(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '变更成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupAdminApprovalComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.CustGroupInfoBean = data;
                _this.groupId = data.groupId;
                _this.groupName = data.groupName;
                _this.queryPartyGroupListByPartyId(_this.CustGroupInfoBean.orgId);
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
    // 根据机构id查询机构名称
    customGroupAdminApprovalComponent.prototype.queryPartyGroupListByPartyId = function (orgId) {
        var _this = this;
        var params = {
            partyIdList: [orgId]
        };
        this.httpService.queryPartyGroupListByPartyId(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.orgId = data.partyGroupList[0].groupName;
            }
        });
    };
    customGroupAdminApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-admin-approval',
            template: __webpack_require__(/*! ./customGroup-admin-approval.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.html"),
            styles: [__webpack_require__(/*! ./customGroup-admin-approval.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-approval/customGroup-admin-approval.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], customGroupAdminApprovalComponent);
    return customGroupAdminApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group ui-g-12 module\" [style]=\"{'text-align':'center'}\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3 ui-md-2 text_right text-right\">群号:</div>\r\n        <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupGradeInfoBean.groupId\"></div>\r\n        <div class=\"ui-g-3 ui-md-2 text_right text-right\">群名称:</div>\r\n        <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupGradeInfoBean.groupName\"></div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3 ui-md-2 text_right text-right\">当前群主：:</div>\r\n        <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"grounpId\"></div>\r\n        <div class=\"ui-g-3 ui-md-2 text_right text-right\">调整后群主:</div>\r\n        <div class=\"ui-g-3 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"grounpName\"></div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6 ui-md-2 text_right text-right\">删除原因:</div>\r\n        <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"remark\"></div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6 ui-md-2 text_right text-right\">所属机构:</div>\r\n        <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"remark\"></div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6 ui-md-2 text_right text-right\">建群时间:</div>\r\n        <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"remark\"></div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12 btn-submit\">\r\n       <button pButton type=\"button\" label=\"驳回\" (click)=\"confirm(1)\"></button> \r\n       <button pButton type=\"button\" label=\"提交审批\" (click)=\"confirm(0)\"></button>\r\n    </div> -->\r\n<!-- </div> -->\r\n<!-- </div>\r\n</div> -->\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtaG9sZGVyLWFwcHJvdmFsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAtdmlld1xcY3VzdG9tR3JvdXAtaG9sZGVyLWFwcHJvdmFsXFxjdXN0b21Hcm91cC1ob2xkZXItYXBwcm92YWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9jdXN0b21Hcm91cC1ob2xkZXItYXBwcm92YWwvY3VzdG9tR3JvdXAtaG9sZGVyLWFwcHJvdmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJhdGNoLWltcG9ydDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: customGroupHolderApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customGroupHolderApprovalComponent", function() { return customGroupHolderApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var customGroupHolderApprovalComponent = /** @class */ (function () {
    function customGroupHolderApprovalComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.groupGradeInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["GroupGradeInfoBean"];
    }
    customGroupHolderApprovalComponent.prototype.ngOnInit = function () {
        this.location_params = this.route.snapshot.params;
        this.header_1 = this.location_params.header_1;
        this.isContactPerson = this.location_params.roleType == 1 ? true : false;
        this.selectGroupAdminInfo(1);
        this.selectGroupAdminInfo(3);
    };
    customGroupHolderApprovalComponent.prototype.selectGroupAdminInfo = function (statusId) {
        var _this = this;
        var params = {
            groupId: this.route.snapshot.params['groupId'],
            roleType: this.route.snapshot.params['roleType'],
        };
        // 客户群管理人员再查询
        this.httpService.selectGroupAdminInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (statusId == 1) {
                    _this.change_prev = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_prev.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
                else if (statusId == 3) {
                    _this.change_after = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_after.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupHolderApprovalComponent.prototype.confirm = function (apply_result) {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            roleType: this.location_params.roleType,
            remark: this.remark,
            apprResult: apply_result,
            roleList: this.change_prev,
            applyRoleList: this.change_after
        };
        // 客户群管理人员变更申请
        this.httpService.updateGroupAdminStatus(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '变更成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupHolderApprovalComponent.prototype.selectGroupGradeInfo = function () {
        var _this = this;
        // 客户群评级查询 
        this.httpService.selectGroupGradeInfo({ groupId: this.location_params.groupId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //传参
                _this.groupGradeInfoBean = data;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    customGroupHolderApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-holder-approval',
            template: __webpack_require__(/*! ./customGroup-holder-approval.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.html"),
            styles: [__webpack_require__(/*! ./customGroup-holder-approval.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-holder-approval/customGroup-holder-approval.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], customGroupHolderApprovalComponent);
    return customGroupHolderApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div *ngIf=\"this.applyType == 0\" class=\"ui-g-12\">\r\n        <header-title [Info]=\"'客户名单删除审批'\"></header-title>\r\n    </div>\r\n    <div *ngIf=\"this.applyType != 0\" class=\"ui-g-12\">\r\n        <header-title [Info]=\"'客户名单新增审批'\"></header-title>\r\n    </div>\r\n    <div class=\"basis-group ui-g-12 module\" [style]=\"{'text-align':'center'}\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3 ui-md-2 text_right text-right\">群号:</div>\r\n            <div class=\"ui-g-3 ui-md-2\">\r\n                <label class=\"groupNumStyle\" (click)=\"toCustGroupView()\" *ngIf=\"property\">{{groupId}}</label>\r\n                <label *ngIf=\"!property\">{{groupId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-3 ui-md-2 text_right text-right\">群名称:</div>\r\n            <div class=\"ui-g-3 ui-md-2\">\r\n                <label>{{groupName}}</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tab ui-g-12\" *ngIf=\"groupUploadFlag != '1'\">\r\n        <p-dataTable [value]=\"list_arr\" [emptyMessage]=\"tableMesg\" scrollWidth=\"1760px\" [style]=\"{'text-align':'center'}\">\r\n            <p-column header=\"户序号\" [style]=\"{'width':'185px'}\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <label style=\"cursor:pointer;\" (click)=\"toHouseholdInfo(col)\">{{col.doorNum}}</label>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'185px'}\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <label *ngIf=\"isQl(col)\">{{col.custNo}}</label>\r\n                    <!-- <label>{{col.custNo}}</label> -->\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column header=\"关联关系\" [style]=\"{'width':'185px'}\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.relType | codeValuePie : relType}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"relDesc\" header=\"详细信息\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"contacts\" header=\"联系人\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column header=\"证件类型\" [style]=\"{'width':'185px'}\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.idenType | codeValuePie : idenType}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"idenNum\" header=\"证件号码\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"address\" header=\"客户地址\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"telNum\" header=\"手机号码\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"industry\" header=\"所属行业\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"targetCustFlag\" header=\"是否目标客户\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"effFlag\" header=\"是否有效客户\" [style]=\"{'width':'185px'}\"></p-column>\r\n            <p-column field=\"description\" header=\"备注\" [style]=\"{'width':'185px'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 submitbtn\" *ngIf=\"groupUploadFlag == '1' && taskCode == 'KHQ_HTZX_SP'\">\r\n    <button pButton label=\"名单附件下载\" (click)=\"listAttachDownload()\"></button>\r\n    <button pButton label=\"批量导入名单\" (click)=\"importList()\"></button>\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 批量导入 -->\r\n<p-dialog [(visible)]=\"batchDisplay\" *ngIf=\"batchDisplay\" modal=\"modal\" width=\"800\" height=\"800\">\r\n    <header-title [Info]=\"title1\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <pre>\r\n          Excel文件格式说明：\r\n          Excel文件中潜在客户名称为必输项。\r\n          Excel文件最大不能超过2000行记录。\r\n          更多注意事项请查看模板中的“填报说明”。\r\n          请先下载模板：\r\n          <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custListImport.xls\" target=\"_blank\">下载模板</a>\r\n      </pre>\r\n        <div class=\"ui-g-12\">\r\n            <strong>批量创建（Ecxel导入）</strong>\r\n            <br/>\r\n            <label for=\"\">文件导入</label>\r\n            <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n            </p-fileUpload>\r\n            <div *ngIf=\"files.length>0\">\r\n                <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 导入结果返回显示 -->\r\n<p-dialog [(visible)]=\"addDisplay\" *ngIf=\"addDisplay\" modal=\"modal\" width=\"800\">\r\n    <header-title [Info]=\"title2\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <span>成功条数：</span>\r\n            <span>{{custGroupListBean.successNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>失败条数：</span>\r\n            <span>{{custGroupListBean.failNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table-area tab\">\r\n        <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"custGroupListBean.failInfoList\">\r\n            <p-column header=\"行号\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.rowNum}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"成功/失败\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.executeFlag == 'S' ? '成功' : '失败'}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"失败原因\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.failReason}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .title {\n  padding: 0; }\n  .ui-g .title .header-title {\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n  .ui-g .title .header-title .title-right {\n      display: flex; }\n  .ui-g .title .header-title .title-right .line {\n        width: 1px;\n        height: 19px;\n        display: inline-block;\n        margin-right: 7px; }\n  .ui-g .title .header-title .title-right .text {\n        flex: 1;\n        height: 20px;\n        font-size: 14px;\n        line-height: 20px;\n        display: block;\n        font-weight: bold; }\n  .ui-g .title .header-title #custom_bottom_btn button {\n      width: 100px !important;\n      white-space: nowrap;\n      padding: 0px; }\n  .ui-g #custListNum span {\n  display: inline-block;\n  width: 80px;\n  box-sizing: border-box;\n  padding: 3px;\n  text-align: center; }\n  .ui-g #custListNum span:nth-child(odd) {\n    background: #0094D2;\n    color: #fff; }\n  .ui-g .tab {\n  overflow-x: auto;\n  padding: 0;\n  height: 450px;\n  text-align: center; }\n  @media screen and (max-width: 1571px) {\n  * {\n    font-size: 12px !important; }\n    * span.sbtn {\n      background-size: auto 100%; } }\n  .submitbtn {\n  text-align: center; }\n  .err-color {\n  color: rgba(255, 0, 0, 0.94); }\n  .groupNumStyle {\n  color: #19b0c8;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtbGlzdC1hcHByb3ZhbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXZpZXdcXGN1c3RvbUdyb3VwLWxpc3QtYXBwcm92YWxcXGN1c3RvbUdyb3VwLWxpc3QtYXBwcm92YWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLFVBQVUsRUFBQTtFQUhsQjtJQUtZLFdBQVc7SUFNWCxhQUFhO0lBRWIsOEJBQThCLEVBQUE7RUFiMUM7TUFnQmdCLGFBQWEsRUFBQTtFQWhCN0I7UUFrQm9CLFVBQVU7UUFDVixZQUFZO1FBR1oscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBdkJyQztRQTBCb0IsT0FBTztRQUNQLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQS9CckM7TUFvQ29CLHVCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBO0VBdENoQztFQXVEWSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUEzRDlCO0lBNkRnQixtQkFBbUI7SUFDbkIsV0FBVSxFQUFBO0VBOUQxQjtFQW9FUSxnQkFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBRWIsa0JBQWtCLEVBQUE7RUFTdEI7RUFESjtJQUVRLDBCQUF5QixFQUFBO0lBRmpDO01BSVksMEJBQXlCLEVBQUEsRUFDNUI7RUFVVDtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksNEJBQTRCLEVBQUE7RUFHaEM7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtbGlzdC1hcHByb3ZhbC9jdXN0b21Hcm91cC1saXN0LWFwcHJvdmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZyB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIC8vIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgLy8gY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogN3B4IDAgN3B4IDIwcHg7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdENkQ2O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIC50aXRsZS1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNjdXN0b21fYm90dG9tX2J0bntcclxuICAgICAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYnV0dG9uIHtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNjdXN0TGlzdE51bXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRhYntcclxuICAgICAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgICAgICAvLyBidXR0b257XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOjEwMHB4IWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuKntcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NzFweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3Bhbi5zYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmF1dG8gMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuLy8gfVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnItY29sb3Ige1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjk0KTtcclxufVxyXG5cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.ts ***!
  \************************************************************************************************************************/
/*! exports provided: customGroupListApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customGroupListApprovalComponent", function() { return customGroupListApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var customGroupListApprovalComponent = /** @class */ (function () {
    function customGroupListApprovalComponent(httpService, route, commfunc) {
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.property = true;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.list_arr = [];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"]; //上传模板
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; //下载模板
        this.fileList = []; //上传文件列表
        this.files = []; //
        this.custGroupListBean = new app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupListBean"](); //客户群名单
        this.batchDisplay = false; //批量导入
        this.addDisplay = false; //返回结果
        this.title1 = '客户群名单批量导入';
        this.title2 = '客户群名单导入结果';
        this.CustGroupInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["CustGroupInfoBean"];
        this.codeValues();
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
    }
    customGroupListApprovalComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['markFlag'] && this.route.snapshot.params['markFlag'] == '2') {
            this.property = false;
        }
        this.location_params = this.route.snapshot.params;
        this.groupUploadFlag = this.location_params.groupUploadFlag;
        this.globalSeqNoImage = this.location_params.globalSeqNoImage;
        this.applyType = this.location_params.applyType;
        this.taskCode = this.location_params.taskCode;
        // this.header_1 = this.location_params.header_1;
        this.isContactPerson = this.location_params.roleType == 1 ? true : false;
        var i = this.location_params.roleType;
        if (i == 4) {
            this.header_1 = '群评价人';
        }
        else if (i == 5) {
            this.header_1 = '群主';
        }
        else if (i == 3) {
            this.header_1 = '群指导师傅';
        }
        else if (i == 1) {
            this.header_1 = '群联系人';
        }
        else {
            this.header_1 = '群介绍人';
        }
        this.selectCustGroupInfo();
        this.selectCustGroupList();
    };
    customGroupListApprovalComponent.prototype.selectGroupAdminInfo = function (statusId) {
        var _this = this;
        var params = {
            groupId: this.route.snapshot.params['groupId'],
            roleType: this.route.snapshot.params['roleType'],
            statusId: statusId,
        };
        // 客户群管理人员再查询
        this.httpService.selectGroupAdminInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (statusId == 1) {
                    _this.change_prev = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_prev.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
                else if (statusId == 3) {
                    _this.change_after = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_after.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupListApprovalComponent.prototype.confirm = function (apply_result) {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            roleType: this.location_params.roleType,
            remark: this.remark,
            apprResult: apply_result,
            roleList: this.change_prev,
            applyRoleList: this.change_after
        };
        // 客户群管理人员变更申请
        this.httpService.updateGroupAdminStatus(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '变更成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupListApprovalComponent.prototype.selectCustGroupList = function () {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            listType: 1,
            batchId: this.location_params.batchId,
            pageNum: 1,
            pageSize: 10000
        };
        // 客户群信息查询
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.CustGroupInfoBean = data;
                _this.list_arr = data.custList;
                _this.list_arr.forEach(function (item, i) {
                    if (_this.list_arr[i].targetCustFlag && _this.list_arr[i].targetCustFlag != '') {
                        if (_this.list_arr[i].targetCustFlag == 1) {
                            _this.list_arr[i].targetCustFlag = '是';
                        }
                        else if (_this.list_arr[i].targetCustFlag == 0) {
                            _this.list_arr[i].targetCustFlag = '否';
                        }
                    }
                    if (_this.list_arr[i].effFlag && _this.list_arr[i].effFlag != '') {
                        if (_this.list_arr[i].effFlag == 1) {
                            _this.list_arr[i].effFlag = '是';
                        }
                        else if (_this.list_arr[i].effFlag == 0) {
                            _this.list_arr[i].effFlag = '否';
                        }
                    }
                });
                _this.list_arr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](_this.list_arr);
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
    }; // 判断是否临时客户
    customGroupListApprovalComponent.prototype.isQl = function (col) {
        if (col.custNo.search(/^QL/)) {
            return true;
        }
        return false;
    };
    customGroupListApprovalComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            status: 3,
            batchId: this.location_params.batchId,
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupId = data.groupId;
                _this.groupName = data.groupName;
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
    //名单附件下载
    customGroupListApprovalComponent.prototype.listAttachDownload = function () {
        // let a = encodeURI(this.custGroupInfoBean.groupName);
        // let b = `groupId=${this.custGroupInfoBean.groupId};groupName=${a}`;
        // window.open('/#/pages/tzb/custom/custom-group/custom-group-view/custom-image-query;' + b);
        if (!this.globalSeqNoImage || this.globalSeqNoImage == 'undefined') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无此附件' }];
            return;
        }
        //获取用户名及ID
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var orgName = chName.orgName;
        var userName = chName.userName;
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var datas = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (datas.length < 2) {
            datas = "0" + datas;
        }
        var QUERY_TIME = '' + year + month;
        window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_YXKQ"] + "SunIAS_V7/SunIASRequestServlet.do?UID=MOBILE&OrgID=" + orgID + "&OrgName=" + orgName + "&OrgOwner=" + orgID + "&right=0100000&PWD=cyg&UserID=" + userId + "&UserName=" + userName + "&AppID=SA&info1=BUSI_SERIAL_NO:" + this.globalSeqNoImage + ";OBJECT_NAME:APP1009;FILELEVEL:33;RIGHT:1111111;OBJECT_NAME:APP1009;QUERY_TIME:" + QUERY_TIME);
    };
    //批量导入名单
    customGroupListApprovalComponent.prototype.importList = function () {
        this.batchDisplay = true;
    };
    // 客户群名单批量导入关闭
    customGroupListApprovalComponent.prototype.closebatch = function () {
        this.batchDisplay = false;
    };
    // 客户群名单返回结果模态框
    customGroupListApprovalComponent.prototype.returnCustGroupList = function () {
        this.addDisplay = false;
    };
    //返回客户群
    customGroupListApprovalComponent.prototype.toCustGroupView = function () {
        if (this.applyType == 0) {
            return;
        }
        var groupId = this.commfunc.compileStr(this.groupId);
        var a = 'groupId=' + groupId;
        window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a);
    };
    //批量导入
    customGroupListApprovalComponent.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
        this.custGroupListBean = new app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupListBean"]();
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.length > 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
                return;
            }
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return;
            }
            this.custGroupListBean.groupId = this.groupId;
            this.custGroupListBean.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        //不需要审批
        var param = this.custGroupListBean;
        this.custGroupListBean.groupApplyFlag = '1';
        this.httpService.batchCustGroupList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.successNum = data.successNum;
                _this.custGroupListBean.failNum = data.failNum;
                if (parseInt(data.successNum) > 0) {
                    _this.commfunc.setSessionDataCH('groupBatchId', data.batchId);
                }
                data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; }); //
                _this.custGroupListBean.failInfoList = data.failInfoList;
                _this.batchDisplay = false;
                _this.addDisplay = true;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '导入失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //码值
    customGroupListApprovalComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    customGroupListApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-list-approval',
            template: __webpack_require__(/*! ./customGroup-list-approval.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.html"),
            styles: [__webpack_require__(/*! ./customGroup-list-approval.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-approval/customGroup-list-approval.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"]])
    ], customGroupListApprovalComponent);
    return customGroupListApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group ui-g-12 module\" [style]=\"{'text-align':'center'}\" >  \r\n  <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3 ui-md-2 text_right text-right\">群号:</div>\r\n      <div class=\"ui-g-3 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.groupId\"></div>\r\n      <div class=\"ui-g-3 ui-md-2 text_right text-right\">群名称:</div>\r\n      <div class=\"ui-g-3 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.groupName\"></div>\r\n  </div>  \r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3 ui-md-2 text_right text-right\">群主:</div>\r\n    <div class=\"ui-g-3 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.ownerName\"></div>\r\n    <div class=\"ui-g-3 ui-md-2 text_right text-right\">当前信用星级:</div>\r\n    <div class=\"ui-g-3 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.groupLevel\"></div>\r\n  </div>  \r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6 ui-md-2 text_right text-right\">调整后信用星级:</div>\r\n    <div class=\"ui-g-6 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.groupAfterLevel\"></div>\r\n  </div> \r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6 ui-md-2 text_right text-right\">失效日期:</div>\r\n    <div class=\"ui-g-6 ui-md-2\"> <input readonly=\"readonly\" type=\"text\" pInputText [(ngModel)]=\"obj_info.endDate\"></div>\r\n  </div>  \r\n</div>   \r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtcmF0aW5nLWFwcHJvdmFsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAtdmlld1xcY3VzdG9tR3JvdXAtcmF0aW5nLWFwcHJvdmFsXFxjdXN0b21Hcm91cC1yYXRpbmctYXBwcm92YWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9jdXN0b21Hcm91cC1yYXRpbmctYXBwcm92YWwvY3VzdG9tR3JvdXAtcmF0aW5nLWFwcHJvdmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJhdGNoLWltcG9ydDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: GroupApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupApprovalComponent", function() { return GroupApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupApprovalComponent = /** @class */ (function () {
    function GroupApprovalComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        //
        this.obj_info = {
            groupLevel: '',
            groupAfterLevel: '',
            endDate: '',
            groupName: '',
            groupId: '',
            ownerName: ''
        };
    }
    GroupApprovalComponent.prototype.ngOnInit = function () {
        this.location_params = this.route.snapshot.params;
        this.selectGroupGradeInfo();
        this.selectCustGroupInfo();
        this.groupLevel = ['无', '一星', '二星', '三星', '四星', '五星'];
    };
    GroupApprovalComponent.prototype.selectGroupGradeInfo = function () {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
        };
        // 客户群管理人员再查询
        this.httpService.selectGroupGradeInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.obj_info = {
                    groupLevel: _this.groupLevel[data.groupLevel],
                    groupAfterLevel: _this.groupLevel[_this.location_params.groupAfterLevel],
                    endDate: data.endDate,
                };
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    GroupApprovalComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.obj_info['groupName'] = data.groupName;
                _this.obj_info['groupId'] = _this.location_params.groupId;
                _this.obj_info['ownerName'] = data.ownerName;
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
    GroupApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-rating-approval',
            template: __webpack_require__(/*! ./customGroup-rating-approval.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.html"),
            styles: [__webpack_require__(/*! ./customGroup-rating-approval.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval/customGroup-rating-approval.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], GroupApprovalComponent);
    return GroupApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group ui-g-12 module\" *ngIf=\"rateFlag\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"cunstomGroupName\"></header-title>\r\n        <div class=\"form-group\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>群号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input class=\"input-css\" id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.groupId\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>群名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupName\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>有效客户数:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.effCustNum\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>有效客户覆盖率:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.effCustRate\" readonly=\"readonly\">\r\n                        <label>%</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>授信客户数:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.creditCustNum\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>授信客户覆盖率:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.creditCustRate\" readonly=\"readonly\">\r\n                        <label>%</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>目标客户数:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.targetCustNum\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>不良贷款金额:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.badLoanBal\" readonly=\"readonly\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>授信业务不良率:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupGradeInfoBean.creditBadRate\" readonly=\"readonly\">\r\n                        <label>%</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <!-- 群等级 -->\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>信用星级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <p-dropdown [options]=\"groupLevel\" [(ngModel)]=\"groupLevel2\" [style]=\"{'width':'290px'}\" readonly=\"readonly\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <label>{{groupGradeInfoBean.createUserId}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <label>{{groupGradeInfoBean.createOrgId}}</label>\r\n                    </div>\r\n                </div>\r\n                <!-- 数据字典（目前写死） -->\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>经办日期:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <label>{{groupGradeInfoBean.createDate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-md-offset-2\">\r\n                    <div class=\"ui-g-12 ui-md-4 label-css\">\r\n                        <label>失效日期:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8 input-css\">\r\n                        <label>{{groupGradeInfoBean.endDate}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group .form-group .label-css {\n  text-align: center; }\n\n.basis-group .form-group .input-css {\n  text-align: left; }\n\n.basis-group .btn-submit {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtcmF0aW5nLWFwcHJvdmFsMi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXZpZXdcXGN1c3RvbUdyb3VwLXJhdGluZy1hcHByb3ZhbDJcXGN1c3RvbUdyb3VwLXJhdGluZy1hcHByb3ZhbDIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGtCQUFrQixFQUFBOztBQUg5QjtFQU1ZLGdCQUFnQixFQUFBOztBQU41QjtFQVVRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtcmF0aW5nLWFwcHJvdmFsMi9jdXN0b21Hcm91cC1yYXRpbmctYXBwcm92YWwyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaXMtZ3JvdXB7XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAubGFiZWwtY3Nze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1jc3N7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWJtaXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: GroupApproval2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupApproval2Component", function() { return GroupApproval2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupApproval2Component = /** @class */ (function () {
    function GroupApproval2Component(httpService, routerInfo, router, confirmationService) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.cunstomGroupName = "XXX客户群";
        this.cunstomRatingAdjust = "群评级调整";
        this.cunstomRating = "群评级";
        this.msgs = []; //提示信息
        this.groupGradeInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["GroupGradeInfoBean"](); // 客户群评级查询
        this.rateFlag = true; //是否已评级，默认已评级
        // 管道码值
        // public CODEVALUE: any =  CODEVALUE;
        // 控件
        this.sysGroupLevel = []; //系统星级
        this.groupLevel = []; //当前星级
        this.adjustGroupLevel = []; //调整星级
        // 链接中间量
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
    }
    GroupApproval2Component.prototype.ngOnInit = function () {
        // 初始化
        // route传参
        this.groupId = this.routerInfo.snapshot.params.groupId; //群名称    groupLevel  
        this.groupLevel2 = this.routerInfo.snapshot.params.groupLevel; //群名称    groupLevel  
        // 当前群评星级,调整返回
        this.groupLevel = [
            { label: '无', value: '' },
            { label: '一星', value: '1' },
            { label: '二星', value: '2' },
            { label: '三星', value: '3' },
            { label: '四星', value: '4' },
            { label: '五星', value: '5' },
        ];
        // 系统建议星级
        this.sysGroupLevel = [
            { label: '无', value: '' },
            { label: '一星', value: '1' },
            { label: '二星', value: '2' },
            { label: '三星', value: '3' },
            { label: '四星', value: '4' },
            { label: '五星', value: '5' },
        ];
        //  // 调整星级
        this.adjustGroupLevel = [
            { label: '无', value: '' },
            { label: '一星', value: '1' },
            { label: '二星', value: '2' },
            { label: '三星', value: '3' },
            { label: '四星', value: '4' },
            { label: '五星', value: '5' },
        ];
        // this.params = this.routerInfo.snapshot.params;
        // this.preSet();
        this.selectGroupGradeInfo();
        this.selectCustGroupInfo();
    };
    GroupApproval2Component.prototype.preSet = function () {
        // 调试用
        this.selectGroupGradeInfo();
        // this.rateFlag = false;
    };
    GroupApproval2Component.prototype.selectGroupGradeInfo = function () {
        var _this = this;
        // 客户群评级查询 
        this.httpService.selectGroupGradeInfo({ groupId: this.groupId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //传参
                _this.groupGradeInfoBean = data;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    GroupApproval2Component.prototype.selectCustGroupInfo = function () {
        var _this = this;
        var params = {
            groupId: this.groupId
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupName = data.groupName;
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
    GroupApproval2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-rating-approval2',
            template: __webpack_require__(/*! ./customGroup-rating-approval2.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.html"),
            styles: [__webpack_require__(/*! ./customGroup-rating-approval2.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-rating-approval2/customGroup-rating-approval2.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], GroupApproval2Component);
    return GroupApproval2Component;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n    <!-- 头部 -->\r\n    <div class=\"ui-g-12 boxShadow\">\r\n        <!-- 主体内容 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12\">\r\n                <!-- 二级标题 -->\r\n                <header-title [Info]=\"title1\"></header-title>\r\n            </div>\r\n            <div id=\"top\" class=\"ui-g-12\" style=\"height:100px;\"></div>\r\n\r\n            <!-- 基本情况 -->\r\n            <div class=\"ui-g-12\">\r\n                <!-- 制作人员 -->\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label>制作人员：</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-3 ui-g-offset-5\">\r\n                        <label>编制日期：</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <!-- <p-calendar [(ngModel)]=\"createDate\" [disabled]=\"editFlag\"></p-calendar> -->\r\n                        <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 水平分割 0-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-3 \">\r\n                        <label appValidation>营销方案名：</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.marketPlanName\" pInputText [disabled]=\"editFlag\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 水平分割 1-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <!-- 基本情况 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12\">\r\n                        <label class=\"basicInfo\">基本情况</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3 centerText\">\r\n                            <label>客户群类型</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9 centerText\">\r\n                            <div class=\"ui-g-6 paddingNone\">\r\n                                <p-radioButton name=\"groupname\" value=\"1\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                                <span>行业客户群</span>\r\n                            </div>\r\n                            <div class=\"ui-g-6 paddingNone\">\r\n                                <p-radioButton name=\"groupname\" value=\"2\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                                <span>非行业客户群</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <textarea cols=\"180\" rows=\"10\" [(ngModel)]=\"groupMarketPlanInfoBean.baseInfo\" [disabled]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 2-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <!-- 群联系人 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12\">\r\n                        <label class=\"basicInfo\">群联系人</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10 centerText\">\r\n                    <div class=\"ui-g-12 centerText tab\">\r\n                        <p-dataTable [value]=\"groupAdminInfoBean.roleList\" [emptyMessage]=\"tableMesg\">\r\n                            <p-column header=\"序号\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    {{i+1}}\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"groupZone\" header=\"客群区域\"></p-column>\r\n                            <p-column field=\"userId\" header=\"联系人工号\"></p-column>\r\n                            <p-column field=\"userName\" header=\"联系人姓名\"></p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 3-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 \">\r\n                <!-- 中间单位 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12 \">\r\n                        <label class=\"basicInfo\">中间单位</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">中间单位</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.channelInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label appValidation>关键人</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.keymanInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">管理关系及合作意向</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.intentionInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 4-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 \">\r\n                <!-- 客户细分 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12  \">\r\n                        <label class=\"basicInfo\">客户细分</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\" class=\"operationInfolabel\">生产经营性客户细分</label>\r\n                        </div>\r\n                        <div class=\"ui-g-10\">\r\n                            <!-- <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.operationInfo\" [disabled]=\"editFlag\"></textarea> -->\r\n                            <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <th *ngFor=\"let itemL of dataList\" class=\"ead\">\r\n                                            {{itemL.subdibisionName}}\r\n                                        </th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let itemH of dataList1;let i1 = index\">\r\n                                        <td class=\"ead\">{{itemH.subdibisionName}}</td>\r\n                                        <td *ngFor=\"let item of data;let i2 =index\">\r\n                                            <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [disabled]=\"editFlag\" [(ngModel)]=\"paramList[i2][i1].valueType\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\" class=\"operationInfolabel\">非生产经营性客户细分</label>\r\n                        </div>\r\n                        <div class=\"ui-g-10\">\r\n                            <!-- <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.unoperationInfo\" [disabled]=\"editFlag\"></textarea> -->\r\n                            <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <th *ngFor=\"let item1 of dataList2\" class=\"ead\">\r\n                                            {{item1.subdibisionName}}\r\n                                        </th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let item2 of dataList3;let i11 = index\">\r\n                                        <td class=\"ead\">{{item2.subdibisionName}}</td>\r\n                                        <td *ngFor=\"let item of undata;let i22 =index\">\r\n                                            <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [disabled]=\"editFlag\" [(ngModel)]=\"unparamList[i22][i11].valueType\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label appValidation>细分需求</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.needInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 5-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 tab\">\r\n                <!-- 主要同业竞争 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12  \">\r\n                        <label class=\"basicInfo\" appValidation>主要同业竞争</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10 centerText \" *ngIf=\"editFlag\">\r\n                    <p-dataTable [value]=\"groupMarketPlanInfoBean.bankList\" [emptyMessage]=\"tableMesg\">\r\n                        <p-column field=\"name\" header=\"银行\" [style]=\"{'width':'20%'}\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].bankName\" [disabled]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"优势产品和服务\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].advantageDesc\" [disabled]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"我行竞争机会\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].chanceDesc\" [disabled]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n                <div class=\"ui-g-10\" *ngIf=\"!editFlag\">\r\n                    <div class=\"ui-g-12 rightText\">\r\n                        <span (click)=\"addbankListArray()\" class=\"icoColor\">添加</span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 centerText\">\r\n                        <p-dataTable [value]=\"groupMarketPlanInfoBean.bankList\" [emptyMessage]=\"tableMesg\">\r\n                            <p-column field=\"name\" header=\"银行\" [style]=\"{'width':'20%'}\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].bankName\" [disabled]=\"editFlag\">\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"优势产品和服务\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].advantageDesc\" [disabled]=\"editFlag\">\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"我行竞争机会\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].chanceDesc\" [disabled]=\"editFlag\">\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                    <div class=\"table-button\">\r\n                                        <span (click)=\"delbankListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 6-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 \">\r\n                <!-- 开发目标 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12  \">\r\n                        <label class=\"basicInfo\" appValidation>开发目标</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10 centerText\">\r\n                    <textarea cols=\"180\" rows=\"12\" [(ngModel)]=\"groupMarketPlanInfoBean.targetInfo\" [disabled]=\"editFlag\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 7-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 \">\r\n                <!-- 获客产品方案 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12  \">\r\n                        <label class=\"basicInfo\">获客产品方案</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label appValidation>主打产品</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.mainProdInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">交叉销售</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.crossSaleInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label appValidation>授信产品参考方案</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.creditProdInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label appValidation>授信风险点及规避方式</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.riskInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!-- 水平分割 8-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 textareaBorder tab\">\r\n                <!-- 获客营销活动方案 -->\r\n                <div class=\"ui-g-2 basicUi\">\r\n                    <div class=\"ui-g-12  \">\r\n                        <label class=\"basicInfo\" appValidation>获客营销活动方案</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10 centerText\" *ngIf=\"editFlag\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">礼品标准</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.giftInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 centerText \">\r\n                        <p-dataTable [value]=\"groupMarketPlanInfoBean.activityList\" [emptyMessage]=\"tableMesg\">\r\n                            <p-column field=\"name\" header=\"活动名称\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityName\" [disabled]=\"!editFlag\"></textarea>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"活动描述\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityDesc\" [disabled]=\"!editFlag\"></textarea>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-10 \" *ngIf=\"!editFlag\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">礼品标准</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.giftInfo\" [disabled]=\"editFlag\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 rightText\">\r\n                        <span (click)=\"addactivityListArray()\" class=\"icoColor\">添加</span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 centerText \">\r\n                        <p-dataTable [value]=\"groupMarketPlanInfoBean.activityList\" [emptyMessage]=\"tableMesg\">\r\n                            <p-column field=\"name\" header=\"活动名称\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityName\"></textarea>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"活动描述\">\r\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                    <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityDesc\"></textarea>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                    <div class=\"table-button\">\r\n                                        <span (click)=\"delactivityListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 水平分割 9-->\r\n            <div class=\"ui-g-12 paddingNone\">\r\n                <hr>\r\n            </div>\r\n            <div class=\"ui-g-12 heightSet\">\r\n                <!-- 制作人员 -->\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label>创建人：</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-3 ui-g-offset-5\">\r\n                        <label>创建日期：</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <!-- <p-calendar [(ngModel)]=\"createDate\" [disabled]=\"editFlag\"></p-calendar> -->\r\n                        <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rightText {\n  text-align: right !important; }\n\n.centerText {\n  text-align: center !important; }\n\n.defaultText {\n  text-align: left !important; }\n\n.paddingNone {\n  padding: 0px !important; }\n\n.borderShow {\n  border: 1px solid #ccc; }\n\n.basicUi {\n  font-size: 16px !important; }\n\n@media screen and (min-width: 1571px) {\n    .basicUi {\n      letter-spacing: 5px !important; } }\n\n.basicUi .basicInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 200px !important;\n    width: 200px !important;\n    line-height: 200px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #0094D2 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n\n@media screen and (max-width: 1571px) {\n      .basicUi .basicInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n\n.basicUi .basicoperationInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 600px !important;\n    width: 200px !important;\n    line-height: 600px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #19b0c8 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n\n@media screen and (max-width: 1571px) {\n      .basicUi .basicoperationInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n\n.operationInfolabel {\n  overflow: auto; }\n\n.operationInfolabel label {\n    background-color: #19b0c8 !important;\n    display: inline-block !important;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    color: #fff;\n    text-align: center;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    border-radius: 2%; }\n\nlabel {\n  font-weight: bold; }\n\n.content {\n  overflow: auto;\n  padding-bottom: 100px; }\n\n.content label {\n    background-color: #0094D2 !important;\n    display: inline-block !important;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    color: #fff;\n    text-align: center;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    border-radius: 2%; }\n\n.content .tab input {\n    border: none;\n    width: 100%; }\n\n.content .tab input:focus {\n    border: 1px solid #aaaaaa; }\n\n.content textarea {\n    width: 100%; }\n\n@media screen and (max-width: 1571px) {\n  * {\n    font-size: 12px !important; }\n    * span {\n      background-size: auto 100%; } }\n\n.marginTop {\n  margin-top: 10px; }\n\n.heightSet {\n  height: 300px;\n  padding-top: 40px; }\n\n.textareaBorder textarea {\n  border: none;\n  width: 100%; }\n\n.textareaBorder textarea:focus {\n  border: 1px solid #aaaaaa; }\n\n.boxShadow {\n  width: 90%;\n  margin: 20px 5% 0 5%; }\n\n.boxShadow:first-child {\n  margin-top: 0px; }\n\ntable {\n  width: 100% !important;\n  height: 100px !important;\n  text-align: center;\n  table-layout: fixed; }\n\n.ead {\n  background: #19b0c8; }\n\n.operationInfoinput {\n  min-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbWFya2V0LXNjaGVtZS9tYXJrZXQtc2NoZW1lLWNoZWNrL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxtYXJrZXQtc2NoZW1lXFxtYXJrZXQtc2NoZW1lLWNoZWNrXFxtYXJrZXQtc2NoZW1lLWNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQTJCLEVBQUE7O0FBRy9CO0VBRUksNkJBQTRCLEVBQUE7O0FBR2hDO0VBRUksMkJBQTBCLEVBQUE7O0FBRzlCO0VBRUksdUJBQXNCLEVBQUE7O0FBRzFCO0VBRUksc0JBQXNCLEVBQUE7O0FBRzFCO0VBS0ksMEJBQXdCLEVBQUE7O0FBSHhCO0lBRko7TUFHUSw4QkFBNkIsRUFBQSxFQXlDcEM7O0FBNUNEO0lBUVEsZ0NBQStCO0lBQy9CLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1Qiw0QkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7O0FBQ2pCO01BbEJSO1FBbUJZLHVCQUFzQjtRQUN0QixzQkFBcUI7UUFDckIsNEJBQTJCO1FBQzNCLDBCQUF5QixFQUFBLEVBRWhDOztBQXhCTDtJQTJCUSxnQ0FBK0I7SUFDL0IsNkJBQTRCO0lBQzVCLHdCQUF1QjtJQUN2Qix1QkFBc0I7SUFDdEIsNkJBQTRCO0lBQzVCLDRCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0Msb0NBQW9DO0lBQ3BDLHNCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTs7QUFDakI7TUFyQ1I7UUFzQ1ksdUJBQXNCO1FBQ3RCLHNCQUFxQjtRQUNyQiw0QkFBMkI7UUFDM0IsMEJBQXlCLEVBQUEsRUFFaEM7O0FBRUw7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1Esb0NBQW9DO0lBQ3BDLGdDQUErQjtJQUMvQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRnpCO0lBSVEsb0NBQW9DO0lBQ3BDLGdDQUErQjtJQUMvQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxpQkFBaUIsRUFBQTs7QUFaekI7SUFnQlksWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFqQnZCO0lBb0JZLHlCQUF5QixFQUFBOztBQXBCckM7SUF3QlEsV0FBVSxFQUFBOztBQU1kO0VBREo7SUFFUSwwQkFBeUIsRUFBQTtJQUZqQztNQUlZLDBCQUEwQixFQUFBLEVBQzdCOztBQUlUO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdyQjtFQUVRLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSG5CO0VBTVEseUJBQXlCLEVBQUE7O0FBR2pDO0VBRUksVUFBUztFQUNULG9CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL21hcmtldC1zY2hlbWUvbWFya2V0LXNjaGVtZS1jaGVjay9tYXJrZXQtc2NoZW1lLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0VGV4dCB7XHJcbiAgICAvLyDlj7Plr7npvZBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlclRleHQge1xyXG4gICAgLy8g5rC05bmz5bGF5LitXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVmYXVsdFRleHQge1xyXG4gICAgLy8g6buY6K6k5bem5a+56b2QXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmdOb25lIHtcclxuICAgIC8vIOa2iOmZpHBhZGRpbmdcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJTaG93IHtcclxuICAgIC8vIOaYvuekuui+ueahhlxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmJhc2ljVWkge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NzFweCkge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOjE2cHghaW1wb3J0YW50O1xyXG4gICAgLmJhc2ljSW5mbyB7XHJcbiAgICAgICAgLy8g5bembGFiZWxcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2shaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDIgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NzFweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFzaWNvcGVyYXRpb25JbmZvIHtcclxuICAgICAgICAvLyDlt6ZsYWJlbFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5vcGVyYXRpb25JbmZvbGFiZWx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyJTsgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICB9XHJcbiAgICAudGFiIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4qIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NzFweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1hcmdpblRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaGVpZ2h0U2V0IHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRleHRhcmVhQm9yZGVyIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcclxuICAgIH1cclxufVxyXG4uYm94U2hhZG93IHtcclxuICAgIC8vIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjoyMHB4IDUlIDAgNSU7XHJcbn1cclxuLmJveFNoYWRvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbi5lYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG59XHJcbi5vcGVyYXRpb25JbmZvaW5wdXR7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MarketSchemeCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSchemeCheckComponent", function() { return MarketSchemeCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../bean/selectGroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/market-scheme/bean/selectGroupAdminInfo.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { Customtools } from "app/pages/tzb/custom/http/customUtil";
var MarketSchemeCheckComponent = /** @class */ (function () {
    function MarketSchemeCheckComponent(httpService, routerInfo, router, confirmationService, messageService, 
    // private commonFunc: Customtools,
    fb) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.fb = fb;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        // 标题
        // title: string = 'xxx客户群';
        this.title1 = '营销方案审批';
        // 中间量
        this.groupName = '';
        this.groupId = '';
        //  groupOwnerflag: any = 1;
        // 全局可编辑状态
        this.editFlag = true;
        // 隐藏修改删除提交
        this.normalFlag = true;
        // bean
        this.groupMarketPlanInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["GroupMarketPlanInfoBean"](); //客户群营销方案详情
        this.groupAdminInfoBean = new _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_5__["GroupAdminInfoBean"](); //客户群管理人员查询
        // 群联系人列表
        this.customGroupContacts = []; //联系人列表中间量
        // 中间单位
        this.channelInfoArr = []; //中间单位
        // 客户细分
        this.customDetailArr = []; //客户细分
        // 获客产品方案
        this.customProductArr = []; //获客产品方案
        //获客活动List
        this.customMarketPlanArr = []; //获客活动List
        // 礼品标准列表中间量
        this.activityNameArr = []; //礼品标准列表中间量
        // 控件
        this.msgs = [];
        this.selectedValue = '1'; // 群类型回显中间量
        this.tionInfo = ''; //客户细分
        this.message = { msg: [] };
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.dataList = []; //生产行
        this.dataList1 = []; //生产列
        this.dataList2 = []; //非生产行
        this.dataList3 = []; //非生产列
        this.data = [];
        this.undata = [];
        this.paramList = new Array();
        this.unparamList = new Array();
        this.userform = fb.group({
            pointerType: [''],
            bussType: [''],
        });
    }
    MarketSchemeCheckComponent.prototype.ngOnInit = function () {
        this.preSet(); //初始化
        // this.selectGroupMarketPlanInfo();//客户群营销方案详情查询
        this.selectGroupAdminInfo(); //客户群管理人员查询
        this.queryClick();
    };
    //列表查询
    MarketSchemeCheckComponent.prototype.queryClick = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.resultList ? data.resultList : [];
                _this.data = _this.dataList.slice(1);
                _this.queryClick1();
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
    MarketSchemeCheckComponent.prototype.queryClick1 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList1 = data.resultList ? data.resultList : [];
                _this.data.forEach(function (element, i1) {
                    _this.paramList[i1] = [];
                    _this.dataList1.forEach(function (element1, i) {
                        var obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '0' };
                        _this.paramList[i1][i] = obj;
                    });
                });
                _this.queryClick2();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList1 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeCheckComponent.prototype.queryClick2 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList2 = data.resultList ? data.resultList : [];
                _this.undata = _this.dataList2.slice(1);
                _this.queryClick3();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList2 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeCheckComponent.prototype.queryClick3 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList3 = data.resultList ? data.resultList : [];
                _this.undata.forEach(function (element2, i11) {
                    _this.unparamList[i11] = [];
                    _this.dataList3.forEach(function (element3, i0) {
                        var zxc = { dimensionId: element2.subdibisionId, indicatorsId: element3.subdibisionId, valueType: '', bussType: '1' };
                        _this.unparamList[i11][i0] = zxc;
                    });
                });
                _this.selectGroupMarketPlanInfo();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList3 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeCheckComponent.prototype.preSet = function () {
        // 链接传参 
        if (this.routerInfo.snapshot.params.groupId) {
            this.groupId = this.routerInfo.snapshot.params.groupId;
        }
        if (this.routerInfo.snapshot.params.planId) {
            this.groupMarketPlanInfoBean.planId = this.routerInfo.snapshot.params.planId;
        }
        this.groupMarketPlanInfoBean.groupId = this.groupId; //营销方案群号
        this.groupAdminInfoBean.groupId = this.groupId; //管理人员群号
        // 管理人员
        this.groupAdminInfoBean.roleType = '1'; //群联系人类型
        this.groupAdminInfoBean.statusId = '1'; //正常状态
        // 初始化
        // this.groupMarketPlanInfoBean.statusId = '3';
    };
    MarketSchemeCheckComponent.prototype.reAssignment = function () {
        //重赋值
        for (var i in this.groupMarketPlanInfoBean.linkmanList) {
            this.groupMarketPlanInfoBean.linkmanList[i] = {
                // 联系人重赋值
                serialNum: '',
                areaName: this.groupMarketPlanInfoBean.linkmanList[i].areaName,
                linkMan: this.groupMarketPlanInfoBean.linkmanList[i].linkMan,
                ContactsItem1: this.customGroupContacts[i].ContactsItem1,
                customItem1: this.customGroupContacts[i].customItem1,
            };
        }
        this.activityNameArr = [];
        for (var i in this.groupMarketPlanInfoBean.activityList) {
            // 获客活动List礼品标准
            this.activityNameArr.push(this.groupMarketPlanInfoBean.activityList[i].activityName);
        }
        this.customMarketPlanArr = [
            // 获客活动List
            {
                name: '礼品标准',
                context: this.activityNameArr.toString(),
            },
        ];
        for (var i in this.groupMarketPlanInfoBean.activityList) {
            // 获客活动List活动方案
            var n = parseInt(i) + 1;
            this.customMarketPlanArr.push({ name: "\u6D3B\u52A8\u65B9\u6848" + n, context: this.groupMarketPlanInfoBean.activityList[i].activityDesc }); // 获客活动List重赋值
        }
    };
    MarketSchemeCheckComponent.prototype.selectGroupMarketPlanInfo = function () {
        var _this = this;
        // 客户群营销方案详情查询
        this.httpService.selectGroupMarketPlanInfo(this.groupMarketPlanInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupMarketPlanInfoBean = data;
                // 赋值
                _this.groupName = _this.groupMarketPlanInfoBean.groupName;
                // 群类型内容回显
                _this.groupMarketPlanInfoBean.bankList = data.bankList; //同业List
                _this.groupMarketPlanInfoBean.activityList = data.activityList; //活动List
                _this.selectedValue = _this.groupMarketPlanInfoBean.groupType; //群类型中间量赋值
                // this.reAssignment();//重赋值
                //生产经营性客户细分
                _this.data.forEach(function (element, i1) {
                    _this.paramList[i1] = [];
                    _this.dataList1.forEach(function (element1, i) {
                        var obj;
                        _this.groupMarketPlanInfoBean.operationInfoList.forEach(function (element3) {
                            if ((element3.dimensionId == element.subdibisionId) && (element3.indicatorsId == element1.subdibisionId)) {
                                obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: element3.value, bussType: '0' };
                            }
                        });
                        if (obj) {
                            _this.paramList[i1][i] = obj;
                        }
                        else {
                            _this.paramList[i1][i] = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '0' };
                        }
                    });
                });
                //非生产经营性客户细分
                _this.undata.forEach(function (element, i1) {
                    _this.unparamList[i1] = [];
                    _this.dataList3.forEach(function (element1, i) {
                        var obj;
                        _this.groupMarketPlanInfoBean.unoperationInfoList.forEach(function (element3) {
                            if ((element3.dimensionId == element.subdibisionId) && (element3.indicatorsId == element1.subdibisionId)) {
                                obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: element3.value, bussType: '1' };
                            }
                        });
                        if (obj) {
                            _this.unparamList[i1][i] = obj;
                        }
                        else {
                            _this.unparamList[i1][i] = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '1' };
                        }
                    });
                });
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询详情失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    MarketSchemeCheckComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 客户群管理人员查询
        this.httpService.selectGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupAdminInfoBean = data;
                _this.groupAdminInfoBean.roleList = data.roleList;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    MarketSchemeCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'market-scheme-check',
            template: __webpack_require__(/*! ./market-scheme-check.component.html */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.html"),
            styles: [__webpack_require__(/*! ./market-scheme-check.component.scss */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-check/market-scheme-check.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], MarketSchemeCheckComponent);
    return MarketSchemeCheckComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routing-cusGroup-cusGroup-module.js.map