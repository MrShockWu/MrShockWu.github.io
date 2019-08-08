(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-marking-marking-module"],{

/***/ "./src/app/@uisftech/view/routing/marking/marking.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/marking/marking.module.ts ***!
  \******************************************************************/
/*! exports provided: OtherMarkingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherMarkingModule", function() { return OtherMarkingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marking_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marking.routing */ "./src/app/@uisftech/view/routing/marking/marking.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_escrow_custom_escrow_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-escrow/custom-escrow.module */ "./src/app/pages/tzb/custom/custom-marketing/custom-escrow/custom-escrow.module.ts");
/* harmony import */ var _pages_tzb_custom_marketing_marketing_project_marketing_project_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pages/tzb/custom/marketing/marketing-project/marketing-project.module */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.module.ts");
/* harmony import */ var _pages_tzb_custom_marketing_marketing_activite_marketing_activite_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pages/tzb/custom/marketing/marketing-activite/marketing-activite.module */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-activite.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ApplyExamineComponent } from "app/pages/tzb/custom/custom-marketing/custom-apply/custom-manager/apply-examine/apply-examine.component";
// import { MarketingModule } from '../../../custom/marketing/marketing.module';



var OtherMarkingModule = /** @class */ (function () {
    function OtherMarkingModule() {
    }
    OtherMarkingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _marking_routing__WEBPACK_IMPORTED_MODULE_4__["OtherMakingRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                // MarketingModule,
                app_pages_tzb_custom_custom_marketing_custom_escrow_custom_escrow_module__WEBPACK_IMPORTED_MODULE_5__["CusEscrowModule"],
                _pages_tzb_custom_marketing_marketing_project_marketing_project_module__WEBPACK_IMPORTED_MODULE_6__["MarketProjectModule"],
                _pages_tzb_custom_marketing_marketing_activite_marketing_activite_module__WEBPACK_IMPORTED_MODULE_7__["MarketingActiviteModule"]
            ],
            declarations: [
            // ApplyExamineComponent
            ],
            providers: []
        })
    ], OtherMarkingModule);
    return OtherMarkingModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/marking/marking.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/marking/marking.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routes, OtherMakingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherMakingRouting", function() { return OtherMakingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_apply_custom_manager_apply_examine_apply_examine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-apply/custom-manager/apply-examine/apply-examine.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-apply/custom-manager/apply-examine/apply-examine.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cust_manage_exam_cust_manage_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cust-manage-exam/cust-manage-exam.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cust-manage-exam/cust-manage-exam.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_escrow_escrow_department_manager_department_pending_escrow_department_pending_escrow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-escrow/escrow-department-manager/department-pending-escrow/department-pending-escrow.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-escrow/escrow-department-manager/department-pending-escrow/department-pending-escrow.component.ts");
/* harmony import */ var app_pages_tzb_custom_marketing_marketing_project_marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.ts");
/* harmony import */ var app_pages_tzb_custom_marketing_marketing_activite_marketing_activity_detail_marketing_activity_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail/marketing-activity-detail.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail/marketing-activity-detail.component.ts");






// import { CheckDetailComponent } from "../../../custom/marketing/marketing-activity-manage/check-detail/check-detail.component";
var routes = [
    {
        path: 'a/b/c/d/e/h/j/a/:marketingProgramId',
        component: app_pages_tzb_custom_marketing_marketing_project_marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_4__["MarketingProgramDetail"]
    },
    {
        path: 'a/b/c/d/e/h/j/a/i/:marketingCampaignId',
        component: app_pages_tzb_custom_marketing_marketing_activite_marketing_activity_detail_marketing_activity_detail_component__WEBPACK_IMPORTED_MODULE_5__["MarketingActivityDetail"]
    },
    {
        //客户管理
        path: 'a/b/c/:operationType/:approveNo/:batchNo/:scheduleId/:taskCategoryId',
        component: app_pages_tzb_custom_custom_marketing_custom_apply_custom_manager_apply_examine_apply_examine_component__WEBPACK_IMPORTED_MODULE_1__["ApplyExamineComponent"]
    },
    //  {
    //   //客户管理
    //   path: 'a/b/c/:operationType/:approveNo/:batchNo',
    //   component: ApplyExamineComponent
    // },
    {
        //客户管理
        path: 'a/b/c/:operationType/:approveNo/:batchNo',
        component: app_pages_tzb_custom_custom_marketing_custom_manage_cust_manage_exam_cust_manage_exam_component__WEBPACK_IMPORTED_MODULE_2__["CustManageExamComponent"]
    },
    {
        path: 'a/b/c/d/:nextSqlId',
        component: app_pages_tzb_custom_custom_marketing_custom_escrow_escrow_department_manager_department_pending_escrow_department_pending_escrow_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentPendingEscrowComponent"]
    },
];
var OtherMakingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-marking-marking-module.js.map