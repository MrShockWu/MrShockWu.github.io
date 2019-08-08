(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["association-relation-manager-association-relation-manager-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">当事人客户号：</label>\r\n  <input type=\"text\" pInputText [(ngModel)]=\"pepCode\" >\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">起始日期：</label>\r\n  <p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\"></p-calendar>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">终止日期：</label>\r\n  <p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\"></p-calendar>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button pButton type=\"text\"  label=\"重置\" (click) =\"restClick()\"></button>\r\n  <button pButton type=\"text\"   label=\"查询\" (click) = \"queryClick()\" ></button>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <p-dataTable [value]=\"items\">\r\n    <p-column field=\"custNo\" header=\"当事人客户号\"></p-column>\r\n    <p-column field=\"custName\" header=\"当事人名称\"></p-column>\r\n    <p-column field=\"relationshipCustNo\" header=\"关系人客户号\"></p-column>\r\n    <p-column field=\"relationshipCustName\" header=\"关系人名称\"></p-column>\r\n    <p-column field=\"parentTypeName\" header=\"关系类型\"></p-column>\r\n    <p-column field=\"relationshipName\" header=\"子关系类型\"></p-column>\r\n    <p-column field=\"whetherReductionNumber\" header=\"是否可冲减积数\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.whetherReductionNumber|codeValuePie:panduan}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"reductionNumberType\" header=\"积数冲减控制方式\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.reductionNumberType|codeValuePie:reductionNumberType}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"userOrgId\" header=\"所属机构\"></p-column>\r\n    <p-column field=\"statusId\" header=\"状态\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.statusId|codeValuePie:asociationStatusOptions}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"k\" header=\"更改类型\"></p-column>\r\n    <p-column field=\"updateDate\" header=\"更改日期\"></p-column>\r\n  </p-dataTable>\r\n  <!-- 分页 -->\r\n  <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1jaGFuZ2UtcmVjb3JkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlclxcYXNzb2NpYXRpb24tY2hhbmdlLXJlY29yZFxcYXNzb2NpYXRpb24tY2hhbmdlLXJlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1jaGFuZ2UtcmVjb3JkL2Fzc29jaWF0aW9uLWNoYW5nZS1yZWNvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy00IHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgXHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: AssociationChangeRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationChangeRecordComponent", function() { return AssociationChangeRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
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



// import { ReductionStatus, AsociationStatus,DomPanduan, ReductionNumberTypeShow } from '../../../../constant/custView.codeValue';
// import { Commfunc } from 'app/@uisftech/common/service/commonFun';

var AssociationChangeRecordComponent = /** @class */ (function () {
    function AssociationChangeRecordComponent(messageService, httpService, commfunc) {
        this.messageService = messageService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.title = '关联关系变更记录';
        // public asociationStatusOptions :any = ReductionStatus;
        // public reductionNumberType :any = ReductionNumberTypeShow;
        // public panduan :any = DomPanduan;
        //提示信息
        this.msgs = [];
    }
    AssociationChangeRecordComponent.prototype.ngOnInit = function () {
        this.statusId = 'all';
        this.pageSize = 10;
        this.pageNum = 1;
        // this.items=[
        //   {
        //     custNo:1300000001,
        //     custName:'王小明',
        //     relationshipCustNo:1300000002,
        //     relationshipCustName:'王二明',
        //     relationshipType:'家庭关系',
        //     f:'兄弟',
        //     whetherReductionNumber:'是',
        //     h:'客户',
        //     i:'台州银行洪家支行',
        //     statusId:'已建立',
        //     k:'新建',
        //     l:'2017/08/08'
        //   },
        //   {
        //     custNo:1300000001,
        //     custName:'王小明',
        //     relationshipCustNo:1300000002,
        //     relationshipCustName:'王二明',
        //     relationshipType:'家庭关系',
        //     f:'兄弟',
        //     whetherReductionNumber:'是',
        //     h:'客户',
        //     i:'台州银行洪家支行',
        //     statusId:'已建立',
        //     k:'新建',
        //     l:'2017/08/08'
        //   }
        // ]
        this.queryClick();
    };
    // 数据查询
    AssociationChangeRecordComponent.prototype.queryClick = function () {
        var _this = this;
        var param = {
            "pageNum": this.pageNum,
            "pageSize": this.pageSize,
            // "statusId": this.statusId,
            "custNo": this.pepCode || "1000000036",
            "lastStartDate": this.commfunc.transDateN(this.startDate),
            "lastEndDate": this.commfunc.transDateN(this.endDate)
        };
        //日期
        //  this.postsManageBean.introductionDate = this.commfunc.transDateN(this.postsManageBean.introductionDate) + ' 00:00:00';
        //  this.postsManageBean.releaseDate = this.commfunc.transDateN(this.postsManageBean.releaseDate);
        this.httpService.selectPartyRelationship(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.items = [];
                data.partyRelationshipList.forEach(function (v) {
                    _this.items.push(v);
                });
                _this.msgs = [];
                _this.msgs.push({ severity: "success", summary: "提示", detail: "查询成功" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: "fail", summary: "提示", detail: "查询失败" });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: "error", summary: "错误", detail: "调用服务失败" });
        });
    };
    // 查询条件重置
    AssociationChangeRecordComponent.prototype.restClick = function () {
        this.pepCode = "";
        this.startDate = "";
        this.endDate = "";
        this.queryClick();
    };
    // 分页功能
    AssociationChangeRecordComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows;
        this.pageNum = event.page + 1;
        //             rows:10       pageCount: 1
        this.queryClick();
        // this.pageNum = 1;
    };
    AssociationChangeRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-change-record',
            template: __webpack_require__(/*! ./association-change-record.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.html"),
            styles: [__webpack_require__(/*! ./association-change-record.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AssociationChangeRecordComponent);
    return AssociationChangeRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"distributeCustQryForm\">\r\n  <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>客户号：</label>\r\n        <input type=\"text\" pInputText (keyup)=\"keyupNumber($event,'custNo')\" (blur)=\"selectCustBriefInfo($event,'custNo')\" maxlength=\"10\"\r\n          [(ngModel)]=\"addPartyRelationshipBean.custNo\" formControlName=\"custNo\">\r\n      </div>\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!showEmpty1\">\r\n        当事人客户号不能为空!\r\n      </div>\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!show1\">\r\n        当事人客户号输入有误!\r\n      </div>\r\n      <!-- <button type=\"button\" pButton icon=\"ui-icon-search\" label=\" \"></button> -->\r\n    </div>\r\n    <!-- <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>关系人客户号：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.relationshipCustNo\" formControlName=\"relationshipCustNo\">\r\n      </div>\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['relationshipCustNo'].valid&&distributeCustQryForm.controls['relationshipCustNo'].dirty\">\r\n        关系人客户号不能为空!\r\n      </div>\r\n    </div> -->\r\n    <div class=\"ui-g-6 first\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>客户名称：</label>\r\n        <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.custName\" formControlName=\"custName\" disabled>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>关联客户号：</label>\r\n        <input type=\"text\" pInputText (keyup)=\"keyupNumber($event,'relationshipCustNo')\" (blur)=\"selectCustBriefInfo($event,'relationshipCustNo')\"\r\n          maxlength=\"10\" [(ngModel)]=\"addPartyRelationshipBean.relationshipCustNo\" formControlName=\"relationshipCustNo\">\r\n      </div>\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!showEmpty\">\r\n        关联客户号不能为空!\r\n      </div>\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!show\">\r\n        关联客户号输入有误!\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>关联客户名称：</label>\r\n        <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.relationshipCustName\" formControlName=\"relationshipCustName\"\r\n          disabled>\r\n      </div>\r\n      <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['relationshipCustName'].valid&&distributeCustQryForm.controls['relationshipCustName'].dirty\">\r\n        关联客户名称不能为空!\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>关联关系类型：</label>\r\n        <p-dropdown [options]=\"parentId\" [(ngModel)]=\"addPartyRelationshipBean.parentTypeId\" formControlName=\"parentTypeId\" (onChange)=\"doSelet(1)\"></p-dropdown>\r\n      </div>\r\n      <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['parentTypeId'].valid&&distributeCustQryForm.controls['parentTypeId'].dirty\">\r\n        关联关系类型不能为空!\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <div>\r\n        <label for=\"\" appValidation>关联关系子类型：</label>\r\n        <p-dropdown [options]=\"relationship\" [(ngModel)]=\"addPartyRelationshipBean.relationshipType\" formControlName=\"relationshipType\"\r\n          (onChange)=\"doSelet(2)\"></p-dropdown>\r\n      </div>\r\n      <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['relationshipType'].valid&&distributeCustQryForm.controls['relationshipType'].dirty\">\r\n        关联关系子类型不能为空!\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否可冲减积数：</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherReductionNumber\" formControlName=\"whetherReductionNumber\"\r\n        [disabled]='!whether'></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">积数冲减控制方式：</label>\r\n      <p-dropdown [options]=\"reductionNumberType\" [(ngModel)]=\"addPartyRelationshipBean.reductionNumberType\" formControlName=\"reductionNumberType\"\r\n        [disabled]='true'></p-dropdown>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">详情描述：</label>\r\n      <input type=\"text\" pInputText maxlength=\"100\" [(ngModel)]=\"addPartyRelationshipBean.comments\" formControlName=\"comments\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否统一授信:</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherUnifiedCredit\" formControlName=\"whetherUnifiedCredit\"\r\n        [disabled]='!whetherCredit'></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否可冲减积数：</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherReductionNumber\" formControlName=\"whetherReductionNumber\"\r\n        (onChange)=\"doSelet(3)\" [disabled]='!whether'></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">积数冲减控制方式：</label>\r\n      <p-dropdown [options]=\"reductionNumberType\" [(ngModel)]=\"addPartyRelationshipBean.reductionNumberType\" formControlName=\"reductionNumberType\"\r\n        [disabled]='true'></p-dropdown>\r\n    </div> -->\r\n    <!-- <div class=\"ui-g-6\">\r\n      <label for=\"\">是否行内授信客户:</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherCreditCustomers\" formControlName=\"whetherCreditCustomers\"></p-dropdown>\r\n    </div> -->\r\n  <!-- </div> -->\r\n  <div class=\"ui-g-12 secondrow\">\r\n      <div class=\"ui-g-6\">\r\n        <div>\r\n          <label for=\"\" appValidation>是否可冲减积数：</label>\r\n          <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherReductionNumber\" formControlName=\"whetherReductionNumber\"\r\n            (onChange)=\"doSelet(3)\" [disabled]='!whether'></p-dropdown>\r\n        </div>\r\n        <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['whetherReductionNumber'].valid&&distributeCustQryForm.controls['whetherReductionNumber'].dirty\">\r\n          是否可冲减积数不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div>\r\n          <label for=\"\">积数冲减控制方式：</label>\r\n          <p-dropdown [options]=\"reductionNumberType\" [(ngModel)]=\"addPartyRelationshipBean.reductionNumberType\" formControlName=\"reductionNumberType\"\r\n            [disabled]='true'></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <!-- <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">授信金额:</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.creditNumber\" formControlName=\"creditDecimal\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">名单制记录:</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.listSystemRecord\" formControlName=\"listSystemRecord\">\r\n    </div>\r\n  </div> -->\r\n  <!-- <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否有效客户:</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherValid\" formControlName=\"whetherValid\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">详细描述:</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.comments\" formControlName=\"comments\">\r\n    </div> -->\r\n  <!-- </div> -->\r\n\r\n  <div class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>创建人:</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"principalLinkman\" formControlName=\"principalLinkman\" disabled>\r\n      </div>\r\n      <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['principalLinkman'].valid&&distributeCustQryForm.controls['principalLinkman'].dirty\">\r\n        创建人不能为空!\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"first-query\">\r\n        <label for=\"\" appValidation>创建机构:</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"principalLinkmanOrg\" formControlName=\"principalLinkmanOrg\" disabled>\r\n      </div>\r\n      <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['principalLinkmanOrg'].valid&&distributeCustQryForm.controls['principalLinkmanOrg'].dirty\">\r\n        创建机构不能为空!\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeId == '0102'||addPartyRelationshipBean.parentTypeId == '0104'\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">投资金额：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investAmt\" formControlName=\"investAmt\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">投资占比（%）：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investRate\" formControlName=\"investRate\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeId == '0102'||addPartyRelationshipBean.parentTypeId == '0104'\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">投资日期：</label>\r\n      <p-calendar [(ngModel)]=\"addPartyRelationshipBean.investDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1950:2030\" formControlName=\"investDate\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否实际控制人：</label>\r\n      <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherCtrlPerson\" formControlName=\"whetherCtrlPerson\"></p-dropdown>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"提交审核\" (click)=\"submitBtn()\"></button>\r\n    <button pButton label=\"返回\" (click)=\"reset()\"></button>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 .requireLabel, .ui-g-12 .requireLabel {\n  width: 378px;\n  text-align: right; }\n\n.ui-g-4 .requireDiv, .ui-g-12 .requireDiv {\n  width: 320px;\n  text-align: right; }\n\n.ui-g-4 label, .ui-g-12 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.secondrow {\n  padding: 0;\n  margin: 0; }\n\n.secondrow .first label {\n    padding-top: 2%; }\n\n.btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1hZGQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGFzc29jaWF0aW9uLXJlbGF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1tYW5hZ2VyXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1hZGRcXGFzc29jaWF0aW9uLXJlbGF0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFIekI7RUFNUSxZQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBUHpCO0VBVVEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUZiO0lBS1ksZUFBZSxFQUFBOztBQUkzQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1hZGQvYXNzb2NpYXRpb24tcmVsYXRpb24tYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWctNCwudWktZy0xMntcclxuICAgIC5yZXF1aXJlTGFiZWx7XHJcbiAgICAgICAgd2lkdGg6IDM3OHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnJlcXVpcmVEaXZ7XHJcbiAgICAgICAgd2lkdGg6MzIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5zZWNvbmRyb3d7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLmZpcnN0e1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: AssociationRelationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationAddComponent", function() { return AssociationRelationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
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


// import { SelectPartyRelationshipBean } from '../bean/selectPartyRelationship.bean';

// import { Panduan, ReductionNumberType } from '../../../../constant/custView.codeValue';





var AssociationRelationAddComponent = /** @class */ (function () {
    function AssociationRelationAddComponent(httpService, fb, commfunc, router) {
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.router = router;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outValueBean = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
        this.panduan = [];
        this.reductionNumberType = [];
        this.parentId = [];
        this.relationship = [];
        //提示信息
        this.msgs = [];
        this.show1 = true; //当事人输入控制
        this.showEmpty1 = true;
        this.show = true; //关系人输入控制
        this.showEmpty = true;
        this.whether = true;
        this.whetherCredit = true;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.aaaa = false;
        this.codeVal();
        this.panduan = this.code['Panduan'];
        this.reductionNumberType = this.code['ReductionNumberType'];
        //-------------------------------------------------上面是码值
        // this.distributeCustQryForm = fb.group({
        //   custNo: ['', Validators.required],
        // })
    }
    AssociationRelationAddComponent.prototype.ngOnInit = function () {
        //给个默认值
        // this.addPartyRelationshipBean.parentTypeId = '0101';
        // let param = { queryType: '2', relationshipType: this.relationshipType,parentTypeId:this.parentTypeId}
        // let ob = this.httpService.selectPartyRelationshipType(param);
        // ob.subscribe(data => {
        //   // this.items = data.partyRelationshipTypeList;
        var _this = this;
        //   this.parentId = this.commfunc.toChange(data.partyRelationshipTypeList,'relationshipName','relationshipType')
        // })
        this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
        this.principalLinkman = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName; //创建人名称    
        this.principalLinkmanOrg = JSON.parse(this.commfunc.getSessionDataCH('chName')).orgName; //创建机构
        this.addPartyRelationshipBean.userOrgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId; //创建机构Id
        this.addPartyRelationshipBean.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId; //创建人Id
        var param = { queryType: '2', relationshipType: this.relationshipType, parentTypeId: this.parentTypeId };
        var ob = this.httpService.selectPartyRelationshipType(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.partyRelationshipTypeList = _this.commfunc.toChange(data.partyRelationshipTypeList, 'relationshipName', 'relationshipType');
                data.partyRelationshipTypeList.unshift({ label: '请选择', value: '' });
                _this.parentId = data.partyRelationshipTypeList;
            }
        });
        this.distributeCustQryForm = this.fb.group({
            'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'relationshipCustNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'relationshipCustName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'parentTypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'relationshipType': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'whetherReductionNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'reductionNumberType': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'whetherUnifiedCredit': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            // 'whetherCreditCustomers': new FormControl(''),//是否行内授信客户
            'creditNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            // 'listSystemRecord': new FormControl(''),//名单制记录
            // 'whetherValid': new FormControl(''),//是否有效客户
            'comments': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'principalLinkman': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'principalLinkmanOrg': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'investAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'investRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'investDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'whetherCtrlPerson': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        // this.doSelet();
    };
    AssociationRelationAddComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
        // this.addPartyRelationshipBean.custNo = this.inValue.custNo;
        var param = { queryType: '2', relationshipType: this.relationshipType, parentTypeId: this.parentTypeId };
        var ob = this.httpService.selectPartyRelationshipType(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.partyRelationshipTypeList = _this.commfunc.toChange(data.partyRelationshipTypeList, 'relationshipName', 'relationshipType');
                data.partyRelationshipTypeList.unshift({ label: '请选择', value: '' });
                _this.parentId = data.partyRelationshipTypeList;
            }
        });
    };
    //联动
    AssociationRelationAddComponent.prototype.doSelet = function (data) {
        var _this = this;
        if (data == 1) {
            if (this.addPartyRelationshipBean.parentTypeId < '0200') {
                this.addPartyRelationshipBean.whetherUnifiedCredit = '1'; //是否统一授信
                // this.addPartyRelationshipBean.whetherReductionNumber='1';//是否可冲减积数
                // this.addPartyRelationshipBean.reductionNumberType='1';//积数冲减控制方式
                this.whetherCredit = false;
                this.whether = false;
            }
            else {
                // this.addPartyRelationshipBean.reductionNumberType='0';//积数冲减控制方式                
                this.addPartyRelationshipBean.whetherUnifiedCredit = ''; //是否统一授信
                // this.addPartyRelationshipBean.whetherReductionNumber='';//是否可冲减积数                
                this.whetherCredit = true;
                this.whether = true;
            }
            // let param = { parentTypeId: this.addPartyRelationshipBean.parentTypeId, queryType: '2', relationshipType: this.addPartyRelationshipBean.relationshipType }
            var param = { parentTypeId: this.addPartyRelationshipBean.parentTypeId, queryType: '2' };
            var ob = this.httpService.selectPartyRelationshipType(param);
            ob.subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.relationship = [];
                    data.partyRelationshipTypeList = _this.commfunc.toChange(data.partyRelationshipTypeList, 'relationshipName', 'relationshipType');
                    data.partyRelationshipTypeList.unshift({ label: '请选择', value: '' });
                    _this.relationship = data.partyRelationshipTypeList;
                }
            });
        }
        else if (data == 2) {
            var typeId = this.addPartyRelationshipBean.relationshipType;
            if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
                this.addPartyRelationshipBean.whetherReductionNumber = '1'; //是否可冲减积数
                this.addPartyRelationshipBean.reductionNumberType = '1'; //冲减积数控制方式
                this.whether = false;
            }
            else {
                this.addPartyRelationshipBean.whetherReductionNumber = '';
                this.addPartyRelationshipBean.reductionNumberType = '';
                this.whether = true;
            }
            if (this.relationship.length > 0) {
                for (var _i = 0, _a = this.relationship; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.value == this.addPartyRelationshipBean.relationshipType) {
                        this.addPartyRelationshipBean.relationshipName = item.label;
                    }
                }
            }
        }
        else {
            if (this.addPartyRelationshipBean.whetherReductionNumber == '1') {
                this.addPartyRelationshipBean.reductionNumberType = '0';
            }
            else {
                this.addPartyRelationshipBean.reductionNumberType = '';
            }
        }
    };
    //提交按钮
    AssociationRelationAddComponent.prototype.submitBtn = function () {
        var _this = this;
        if (!this.addPartyRelationshipBean.custNo) {
            this.showEmpty1 = false;
        }
        if (!this.addPartyRelationshipBean.relationshipCustNo) {
            this.showEmpty = false;
        }
        //校验的
        for (var i in this.distributeCustQryForm.controls) {
            this.distributeCustQryForm.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.distributeCustQryForm.controls) {
            if (!this.distributeCustQryForm.controls[i].valid) {
                return;
            }
        }
        this.outValueBean.emit(this.addPartyRelationshipBean);
        this.waitSelUserList = this.commfunc.query('111000', { relationshipType: this.addPartyRelationshipBean.relationshipType });
        this.outVal = this.waitSelUserList.waitSelUserList;
        this.aaaa = this.waitSelUserList.display;
        console.log(this.aaaa);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.specifyNextOpers;
        console.log(a);
        if (this.aaaa == true && (a == undefined || a == '' || a == null)) {
            this.outValue.emit({ outVal: this.outVal, aaaa: this.aaaa });
        }
        else {
            // if (this.addPartyRelationshipBean.relationshipType == '040101' || '040102' || '040199') {
            //this.addPartyRelationshipBean.weakIdenFlag = '1';//强弱关联标识，后台改造完毕后删除
            // } else {
            // this.addPartyRelationshipBean.weakIdenFlag = '3';//强弱关联标识，后台改造完毕后删除
            // }
            // if(this.addPartyRelationshipBean.relationshipType == '01'&&this.addPartyRelationshipBean.custNo != this.addPartyRelationshipBean.relationshipCustNo ){//关系为本人，客户号必须等于关联客户号
            //  return;
            //}
            var ob = this.httpService.addPartyRelationship(this.addPartyRelationshipBean);
            ob.subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_1 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                    }
                    _this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation', data.dataMap]);
                    _this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    _this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
                }
                else {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_2 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_3 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_3));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        // // if (this.addPartyRelationshipBean.relationshipType == '040101' || '040102' || '040199') {
        // //   this.addPartyRelationshipBean.weakIdenFlag = '1';//强弱关联标识，后台改造完毕后删除
        // // } else {
        // //   this.addPartyRelationshipBean.weakIdenFlag = '3';//强弱关联标识，后台改造完毕后删除
        // // }
        // // if(this.addPartyRelationshipBean.relationshipType == '01'&&this.addPartyRelationshipBean.custNo != this.addPartyRelationshipBean.relationshipCustNo ){//关系为本人，客户号必须等于关联客户号
        // //   return;
        // // }
        // if (!this.addPartyRelationshipBean.custNo) {
        //   this.showEmpty1 = false;
        // }
        // if (!this.addPartyRelationshipBean.relationshipCustNo) {
        //   this.showEmpty = false;
        // }
        // //校验的
        // for (const i in this.distributeCustQryForm.controls) {
        //   this.distributeCustQryForm.controls[i].markAsDirty();
        // }
        // //处理是否提交
        // for (const i in this.distributeCustQryForm.controls) {
        //   if (!this.distributeCustQryForm.controls[i].valid) {
        //     return;
        //   }
        // }
        // let ob = this.httpService.addPartyRelationship(this.addPartyRelationshipBean);
        // ob.subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     // this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation', data.dataMap]);
        //     this.outValue.emit(false);
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        //     this.addPartyRelationshipBean = new AddPartyRelationshipBean();
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //   }
        // }, error => {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        // })
    };
    // //取消
    AssociationRelationAddComponent.prototype.reset = function () {
        this.outValue.emit('取消');
        // this.router.navigate(['pages/tzb/custom/association-relation/association-relation-manager/association-relation-list']);
        // this.addPartyRelationshipBean = new AddPartyRelationshipBean();
    };
    //根据客户输入的关系人客户号 请求关系人名称，主联系人和归属机构
    AssociationRelationAddComponent.prototype.selectCustBriefInfo = function (event, data) {
        this.show1 = true;
        this.show = true;
        if (data == 'custNo') {
            if (!this.addPartyRelationshipBean.custNo) {
                this.showEmpty1 = false;
                return;
            }
            this.queryInfo(this.addPartyRelationshipBean.custNo, data);
        }
        else {
            if (!this.addPartyRelationshipBean.relationshipCustNo) {
                this.showEmpty = false;
                return;
            }
            this.queryInfo(this.addPartyRelationshipBean.relationshipCustNo, data);
        }
    };
    //查询的方法
    AssociationRelationAddComponent.prototype.queryInfo = function (date, type) {
        var _this = this;
        var param = {
            custNo: date
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (type == 'custNo') {
                    _this.showEmpty1 = true;
                    _this.addPartyRelationshipBean.custName = data.custName;
                    // this.principalLinkman = data.principalLinkmanName;
                    // this.principalLinkmanOrg = data.principalLinkmanOrgName;
                }
                else {
                    _this.showEmpty = true;
                    _this.addPartyRelationshipBean.relationshipCustName = data.custName;
                    // this.principalLinkman = data.principalLinkmanName;
                    // this.principalLinkmanOrg = data.principalLinkmanOrgName;
                }
            }
            else {
                if (date == _this.addPartyRelationshipBean.custNo) {
                    // this.show1 = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
                else {
                    // this.show = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    AssociationRelationAddComponent.prototype.keyupNumber = function (event, date) {
        if (date == 'custNo') {
            this.showEmpty1 = true;
            this.show1 = true;
        }
        else {
            this.showEmpty = true;
            this.show = true;
        }
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
            event.target.value = '';
        }
    };
    ;
    //码值
    AssociationRelationAddComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssociationRelationAddComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssociationRelationAddComponent.prototype, "outValueBean", void 0);
    AssociationRelationAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation-add',
            template: __webpack_require__(/*! ./association-relation-add.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.html"),
            styles: [__webpack_require__(/*! ./association-relation-add.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AssociationRelationAddComponent);
    return AssociationRelationAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">当事人客户号：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">关系人客户号：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">状态：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">关系类型：</label>\r\n  <p-dropdown [options]=\"types\" [(ngModel)]=\"selectType\"></p-dropdown>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">子关系类型：</label>\r\n  <p-dropdown [options]=\"types\" [(ngModel)]=\"selectType\"></p-dropdown>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n  <label for=\"\">当事人角色：</label>\r\n  <p-dropdown [options]=\"types\" [(ngModel)]=\"selectType\"></p-dropdown>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button type=\"button\" pButton  label=\"重置\"></button>\r\n  <button type=\"button\" pButton label=\"查询\"></button>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <p-dataTable [value]=\"items\">\r\n    <p-column field=\"a\" header=\"当事人客户号\"></p-column>\r\n    <p-column field=\"b\" header=\"当事人名称\"></p-column>\r\n    <p-column field=\"c\" header=\"关系人客户号\"></p-column>\r\n    <p-column field=\"d\" header=\"关系人名称\"></p-column>\r\n    <p-column field=\"e\" header=\"关系类型\"></p-column>\r\n    <p-column field=\"f\" header=\"子关系类型\"></p-column>\r\n    <p-column field=\"g\" header=\"当事人角色\"></p-column>\r\n    <p-column field=\"h\" header=\"是否积数冲减\"></p-column>\r\n    <p-column field=\"i\" header=\"积数冲减方式\"></p-column>\r\n    <p-column field=\"j\" header=\"所属机构\"></p-column>\r\n    <p-column field=\"k\" header=\"状态\"></p-column>\r\n    <p-column header=\"操作\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        <a href=\"\"><button pButton type=\"button\" label=\"删除\"></button></a>\r\n      </ng-template>\r\n    </p-column>\r\n  </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1kZWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGFzc29jaWF0aW9uLXJlbGF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1tYW5hZ2VyXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1kZWxcXGFzc29jaWF0aW9uLXJlbGF0aW9uLWRlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1kZWwvYXNzb2NpYXRpb24tcmVsYXRpb24tZGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWctNCB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICB9XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: AssociationRelationDelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationDelComponent", function() { return AssociationRelationDelComponent; });
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

var AssociationRelationDelComponent = /** @class */ (function () {
    function AssociationRelationDelComponent() {
        this.title = "关联关系删除";
    }
    AssociationRelationDelComponent.prototype.ngOnInit = function () {
        this.types = [];
        this.types.push({ label: 'Select City', value: null });
        this.types.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.types.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.types.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.types.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.types.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.items = [
            {
                a: 1300000001,
                b: '王小明',
                c: 1300000002,
                d: '王二明',
                e: '家庭关系',
                f: '兄弟',
                g: '弟弟',
                h: '是',
                i: '客户',
                j: '台州银行洪家支行',
                k: '状态'
            },
            {
                a: 1300000001,
                b: '王小明',
                c: 1300000002,
                d: '王二明',
                e: '家庭关系',
                f: '兄弟',
                g: '弟弟',
                h: '是',
                i: '客户',
                j: '台州银行洪家支行',
                k: '状态'
            },
        ];
    };
    AssociationRelationDelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation-del',
            template: __webpack_require__(/*! ./association-relation-del.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.html"),
            styles: [__webpack_require__(/*! ./association-relation-del.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssociationRelationDelComponent);
    return AssociationRelationDelComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\" >客户号：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.custNo\">\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">客户名称：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.custName\">\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">是否统一授信：</label>\r\n    <p-dropdown [options]=\"panduan\" [(ngModel)]=\"selectPartyRelationshipBean.whetherUnifiedCredit\"></p-dropdown>\r\n  </div>\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">关系人客户号：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.relationshipCustNo\">\r\n  </div> -->\r\n\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">关系人名称：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.relationshipCustName\">\r\n  </div> -->\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">是否有效客户：</label>\r\n    <p-dropdown [options]=\"panduan\" [(ngModel)]=\"selectPartyRelationshipBean.whetherValid\"></p-dropdown>\r\n  </div> -->\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">关联关系类型：</label>\r\n    <p-dropdown [options]=\"parentId\" [(ngModel)]=\"selectPartyRelationshipBean.parentTypeId\" (onChange)=\"doSelet()\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">关联关系子类型：</label>\r\n    <p-dropdown [options]=\"relationship\" [(ngModel)]=\"selectPartyRelationshipBean.relationshipType\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">是否可冲减积数：</label>\r\n    <p-dropdown [options]=\"panduan\" [(ngModel)]=\"selectPartyRelationshipBean.whetherReductionNumber\"></p-dropdown>\r\n  </div>\r\n<!-- </div>\r\n<div class=\"ui-g-12 seconderow\"> -->\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">创建人：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.userId\">\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">经办机构：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.userOrgId\">\r\n  </div>\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">审批状态：</label>\r\n    <p-dropdown [options]=\"reductionStatus\" [(ngModel)]=\"selectPartyRelationshipBean.statusId\"></p-dropdown>\r\n  </div> -->\r\n<!-- </div>\r\n<div class=\"ui-g-12 seconderow\"> -->\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">审批状态：</label>\r\n    <input pInputText type=\"text\" [(ngModel)]=\"selectPartyRelationshipBean.statusId\">\r\n  </div> -->\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">创建开始时间：</label>\r\n    <p-calendar [(ngModel)]=\"createStartDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\"\r\n      [locale]=\"ch\"></p-calendar>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"padding:0;margin:0\">\r\n\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">创建结束时间：</label>\r\n    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [(ngModel)]=\"createEndDate\"\r\n      [locale]=\"ch\"></p-calendar>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">状态：</label>\r\n    <p-dropdown [options]=\"reductionStatus\" [(ngModel)]=\"selectPartyRelationshipBean.statusId\"></p-dropdown>\r\n  </div>\r\n<!-- </div>\r\n<div class=\"ui-g-12 seconderow\"> -->\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">更新开始时间：</label>\r\n    <p-calendar [(ngModel)]=\"lastStartDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\"\r\n      [locale]=\"ch\"></p-calendar>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"padding:0;margin:0\">\r\n      \r\n        </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">更新结束时间：</label>\r\n    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [(ngModel)]=\"lastEndDate\"\r\n      [locale]=\"ch\"></p-calendar>\r\n  </div>\r\n<!-- </div> -->\r\n<div class=\"ui-g-12 btn\">\r\n  <button type=\"button\" pButton label=\"查询\" (click)=\"query()\"></button>\r\n  <button type=\"button\" pButton label=\"重置\" (click)=\"reset()\"></button>\r\n</div>\r\n<!-- <div class=\"ui-g-12 addBtn\">\r\n  <span class=\"icoColor\" style=\"margin-bottom:5px;\" (click)=\"addClick()\">新增</span>\r\n  < <button pButton type=\"button\" label=\"新增\" class=\"addBtn\" (click)=\"addClick()\" class=></button>>\r\n</div> -->\r\n<div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%\">\r\n  <p-dataTable [value]=\"items\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n    <p-column field=\"custNo\" header=\"客户号\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\" class=\"name\">{{col.custNo}}</a>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n    <p-column field=\"relationshipCustNo\" header=\"关联客户号\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\" class=\"name\">{{col.relationshipCustNo}}</a>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"relationshipCustName\" header=\"关联客户名称\"></p-column>\r\n    <!-- <p-column field=\"whetherValid\" header=\"是否有效 \" >\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.whetherValid|codeValuePie:panduan}}</span>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <p-column header=\"关联关系类型\" field=\"parentTypeName\"></p-column>\r\n    <p-column field=\"relationshipName\" header=\"关联关系子类型\"></p-column>\r\n    <p-column field=\"comments\" header=\"详情描述\"></p-column>\r\n    <p-column field=\"whetherUnifiedCredit\" header=\"是否统一授信\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.whetherUnifiedCredit|codeValuePie:domPanduan}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"whetherReductionNumber\" header=\"是否可冲减积数\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.whetherReductionNumber|codeValuePie:domPanduan}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"reductionNumberType\" header=\"积数冲减控制方式\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.reductionNumberType|codeValuePie:reductionNumberType}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <!-- <p-column field=\"whetherCreditCustomers\" header=\"是否行内授信客户\" >\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.whetherCreditCustomers|codeValuePie:panduan}}</span>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <!-- <p-column field=\"creditNumber\" header=\"授信金额\" ></p-column>\r\n    <p-column field=\"listSystemRecord\" header=\"名单制记录\" ></p-column>\r\n    <p-column field=\"userId\" header=\"账户余额\"></p-column>\r\n    <p-column field=\"userOrgId\" header=\"总可用积数\" ></p-column> -->\r\n    <!-- <p-column field=\"applyType\" header=\"申请类型\" ></p-column> -->\r\n    <p-column field=\"statusId\" header=\"状态\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.statusId|codeValuePie:reductionStatus}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <!-- <p-column field=\"statusId\" header=\"审批状态\">\r\n      <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n        <span>{{item.statusId|codeValuePie:reductionStatus}}</span>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <!-- <p-column field=\"createDate\" header=\"创建时间\" ></p-column>\r\n    <p-column field=\"updateDate\" header=\"更新时间\"></p-column> -->\r\n    <p-column field=\"userName\" header=\"创建人\"></p-column>\r\n    <p-column field=\"userOrgName\" header=\"创建机构\"></p-column>\r\n    <p-column header=\"操作\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        <!-- <a><span (click)=\"detail(car)\">详情</span></a>> -->\r\n        <span (click)=\"detail(col)\" class=\"tabelDetailIco\">详情</span>\r\n        <!-- <span (click)=\"modifyClick(col)\" class=\"tabelUpdateIco\" *ngIf=\"col.statusId=='1'\">修改</span>\r\n        <span (click)=\"deleteClick(col)\" class=\"tabelDeleteIco\" *ngIf=\"col.statusId=='1'||col.statusId=='4'||col.relationshipType=='06'\">删除</span> -->\r\n      </ng-template>\r\n    </p-column> \r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  \r\n  <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n<!--弹出框-->\r\n<!-- 个人详情 -->\r\n<p-dialog *ngIf=\"detailDisplay\"  [(visible)]=\"detailDisplay\" modal=\"modal\">\r\n  <p-header>\r\n    关联关系详情\r\n  </p-header>\r\n  <app-relation-detail [inValue]=\"detailValue\" (outValue)=\"detailsCall($event)\"></app-relation-detail>\r\n</p-dialog>\r\n<!--企业详情-->\r\n<!-- <p-dialog [(visible)]=\"comDetailDisplay\" width=\"900\" modal=\"modal\">\r\n  <p-header>\r\n    关联关系详情\r\n  </p-header>\r\n  <app-company-relation-detail [inValue]=\"detailValue\" (outValue)=\"detailsCall($event)\"></app-company-relation-detail>\r\n</p-dialog> -->\r\n<p-dialog *ngIf=\"display\"  [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <app-association-relation-add *ngIf=\"showModel=='1'\" (outValueBean)=\"addCallBean($event)\" (outValue)=\"addCall($event)\"></app-association-relation-add>\r\n    <app-association-relation-modify *ngIf=\"showModel=='2'\" (outValueBean)=\"addCallBean($event)\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></app-association-relation-modify>\r\n    <app-association-relation-modify *ngIf=\"showModel=='3'\" (outValueBean)=\"addCallBean($event)\" (outValue)=\"deleteCall($event)\"></app-association-relation-modify>\r\n  </div>\r\n</p-dialog>\r\n<!-- 删除-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog *ngIf=\"aaaa\" header=\"提交给\" [(visible)]=\"aaaa\">\r\n  <app-examine-approval  [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seconderow {\n  padding: 0;\n  margin: 0; }\n\n.ui-g-4 label {\n  display: inline-block;\n  width: 150px;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n.addBtn {\n  text-align: right;\n  margin-right: 20px; }\n\n:host/deep/ .ui-datatable table {\n  table-layout: inherit;\n  white-space: nowrap; }\n\n@media screen and (max-width: 1205px) {\n  .ui-g-4 {\n    width: 50%; } }\n\n:host/deep/ .ui-inputtext {\n  width: 59% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 59% !important; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 100% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 59% !important; }\n\n:host/deep/ .ui-dropdown .ui-inputtext {\n    width: 100% !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1saXN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlclxcYXNzb2NpYXRpb24tcmVsYXRpb24tbGlzdFxcYXNzb2NpYXRpb24tcmVsYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBRWI7RUFFUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBRUw7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxxQkFBcUIsRUFBQTs7QUFEekI7SUFHUSxzQkFBc0IsRUFBQTs7QUFHOUI7RUFDSSxxQkFBcUIsRUFBQTs7QUFEekI7SUFHUSxzQkFBc0IsRUFBQTs7QUFHOUI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9hc3NvY2lhdGlvbi1yZWxhdGlvbi9hc3NvY2lhdGlvbi1yZWxhdGlvbi1tYW5hZ2VyL2Fzc29jaWF0aW9uLXJlbGF0aW9uLWxpc3QvYXNzb2NpYXRpb24tcmVsYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRlcm93e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udWktZy00IHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbn1cclxuLmFkZEJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGV7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwNXB4KSB7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dHtcclxuICAgIHdpZHRoOiA1OSUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgICB3aWR0aDogNTklICFpbXBvcnRhbnQ7XHJcbiAgICAudWktaW5wdXR0ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDU5JSAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWlucHV0dGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: AssociationRelationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationListComponent", function() { return AssociationRelationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_selectPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/selectPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/bean/selectPartyRelationship.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Panduan,DomPanduan, RelationshipType, ParentTypeId, StatusId, ReductionStatus,ReductionNumberTypeShow } from '../../../../constant/custView.codeValue';







var AssociationRelationListComponent = /** @class */ (function () {
    function AssociationRelationListComponent(cusViewHttpService, confirmationService, startTime, router, commfunc, httpService) {
        this.cusViewHttpService = cusViewHttpService;
        this.confirmationService = confirmationService;
        this.startTime = startTime;
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "关联关系查询";
        this.detailDisplay = false; //关联个人详情
        // public comDetailDisplay: boolean = false;//企业详情
        this.panduan = [];
        this.domPanduan = [];
        this.reductionNumberType = [];
        // public relationshipType: any = RelationshipType;
        this.parentId = [];
        this.relationship = [];
        // public parentTypeId: any = ParentTypeId;
        this.statusId = [];
        this.reductionStatus = [];
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //每页多少条
        this.pageSize = 10;
        this.pageNum = 1;
        this.createStartDate = '';
        this.createEndDate = '';
        this.lastStartDate = '';
        this.lastEndDate = '';
        //提示信息
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["AddPartyRelationshipBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        this.selectPartyRelationshipBean = new _bean_selectPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["SelectPartyRelationshipBean"]();
        this.aaaa = false;
        this.codeVal();
        this.panduan = this.code['Panduan'];
        this.domPanduan = this.code['DomPanduan'];
        this.reductionNumberType = this.code['ReductionNumberTypeShow'];
        this.statusId = this.code['StatusId'];
        this.reductionStatus = this.code['ReductionStatus'];
    }
    AssociationRelationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectPartyRelationshipBean.pageSize = 10;
        this.selectPartyRelationshipBean.pageNum = 1;
        //关系类型，子关系类型
        var param = { relationshipType: this.relationshipType, parentTypeId: this.parentTypeId, queryType: '1' };
        var ob = this.cusViewHttpService.selectPartyRelationshipType(param);
        ob.subscribe(function (data) {
            var items = data.partyRelationshipTypeList;
            _this.parentId = _this.startTime.toChange(items, 'relationshipName', 'relationshipType');
            _this.parentId.unshift({ label: '请选择', value: '' });
        });
        this.query();
    };
    //重置按钮
    AssociationRelationListComponent.prototype.reset = function () {
        this.createStartDate = null;
        this.createEndDate = null;
        this.lastStartDate = null;
        this.lastEndDate = null;
        this.selectPartyRelationshipBean = new _bean_selectPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["SelectPartyRelationshipBean"]();
        this.selectPartyRelationshipBean.pageSize = 10;
        this.selectPartyRelationshipBean.pageNum = 1;
    };
    //查询按钮
    AssociationRelationListComponent.prototype.query = function () {
        var _this = this;
        if (this.createStartDate) {
            this.selectPartyRelationshipBean.createStartDate = this.startTime.transDateN(this.createStartDate);
        }
        if (this.createEndDate) {
            this.selectPartyRelationshipBean.createEndDate = this.startTime.transDateN(this.createEndDate);
        }
        if (this.lastStartDate) {
            this.selectPartyRelationshipBean.lastStartDate = this.startTime.transDateN(this.lastStartDate);
        }
        if (this.lastEndDate) {
            this.selectPartyRelationshipBean.lastEndDate = this.startTime.transDateN(this.lastEndDate);
        }
        var ob = this.cusViewHttpService.selectPartyRelationship(this.selectPartyRelationshipBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items = data.partyRelationshipList;
                _this.total = data.totalNum;
                // this.msgs.push({ severity: 'success', summary: '提示', detail:data.returnCode.message });
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
    //联动
    AssociationRelationListComponent.prototype.doSelet = function () {
        var _this = this;
        var param = { parentTypeId: this.selectPartyRelationshipBean.parentTypeId, queryType: '2', relationshipType: this.selectPartyRelationshipBean.relationshipType };
        var ob = this.cusViewHttpService.selectPartyRelationshipType(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.relationship = [];
                data.partyRelationshipTypeList = _this.startTime.toChange(data.partyRelationshipTypeList, 'relationshipName', 'relationshipType');
                data.partyRelationshipTypeList.unshift({ label: '请选择', value: '' });
                _this.relationship = data.partyRelationshipTypeList;
            }
        });
    };
    //跳转到个人视图
    AssociationRelationListComponent.prototype.toCustView = function (data) {
        this.startTime.setSessionData('custNo', data.relationshipCustNo);
        this.router.navigate(['pages/custom-view']).then(function (item) {
            // this.globalState.notifyDataChanged('event:custom-view-refresh',{'custNo': data.relationshipCustNo});
            window.location.reload();
        });
    };
    //新增按钮事件
    AssociationRelationListComponent.prototype.addClick = function () {
        this.headerTitle = '关联关系新增';
        this.display = true;
        this.showModel = '1';
    };
    //新增的回调
    AssociationRelationListComponent.prototype.addCall = function (param) {
        if (param == false) {
            this.display = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            if (param != '取消') {
                this.msgs = [{ severity: 'success', summary: '提示', detail: '新增成功' }];
            }
        }
        else {
            console.log(param);
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
        // this.display = false;
        // this.selectPartyRelationshipBean.pageNum = 1;
        // this.query();
        // if(param!='取消'){
        //   this.msgs=[{ severity: 'success', summary: '提示', detail: '新增成功' }];    
        // }
    };
    // 详情
    AssociationRelationListComponent.prototype.detail = function (car) {
        // let param = {
        //   custNo: car.relationshipCustNo
        // }
        // this.cusViewHttpService.selectCustBriefInfo(param).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     // if (data.custType == '1') {
        //       this.detailDisplay = true;
        //       this.detailValue = _.clone(car);
        //     // } else if (data.custType == '2') {
        //     //   this.comDetailDisplay = true;
        //     //   this.detailValue = _.clone(car);
        //     // }
        //   }
        // })
        this.detailDisplay = true;
        this.detailValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](car);
    };
    //详情的回调
    AssociationRelationListComponent.prototype.detailsCall = function (param) {
        // this.comDetailDisplay = param;
        this.detailDisplay = param;
        this.query();
        document.body.style.overflow = 'auto';
    };
    //修改按钮事件
    AssociationRelationListComponent.prototype.modifyClick = function (item) {
        this.headerTitle = '关联关系修改';
        this.display = true;
        this.showModel = '2';
        this.updateValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](item);
    };
    //修改的回调
    AssociationRelationListComponent.prototype.updateCall = function (param) {
        if (param == false) {
            this.display = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            this.msgs = [{ severity: 'success', summary: '提示', detail: '修改成功' }];
        }
        else if (param == '取消') {
            this.display = false;
        }
        else {
            console.log(param);
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //删除按钮事件
    AssociationRelationListComponent.prototype.deleteClick = function (car) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.waitSelUserList = _this.commfunc.query('301000', { relationshipType: _this.addPartyRelationshipBean.relationshipType });
                var outVal = _this.waitSelUserList.waitSelUserList;
                var aaaa = _this.waitSelUserList.display;
                console.log(_this.aaaa);
                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                var a = commonHeader.extParam.specifyNextOpers;
                console.log(a);
                if (_this.aaaa == true && (a == undefined || a == '' || a == null)) {
                    // this.outVal.emit({outVal:this.outVal,aaaa:this.aaaa});
                    _this.outVal = outVal;
                    _this.aaaa = aaaa;
                }
                else {
                    var ob = _this.httpService.deletePartyRelationship(param);
                    ob.subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                            if (s.extParam.specifyNextOpers) {
                                delete s.extParam.specifyNextOpers;
                                var commonHeader_1 = s;
                                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                            }
                            // this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation', data.dataMap]);
                            _this.outValue.emit(false);
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                            _this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["AddPartyRelationshipBean"]();
                        }
                        else {
                            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                            if (s.extParam.specifyNextOpers) {
                                delete s.extParam.specifyNextOpers;
                                var commonHeader_2 = s;
                                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                            }
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader_3 = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_3));
                        }
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                    });
                }
            }
        });
        //条件
        var param = { custNo: car.custNo, relationshipCustNo: car.relationshipCustNo, relationshipType: car.relationshipType, weakIdenFlag: car.weakIdenFlag };
        this.cusViewHttpService.deletePartyRelationship(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var param_1 = data.dataMap;
                // this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation',param]);
                _this.msgs = [];
                _this.query();
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    AssociationRelationListComponent.prototype.deleteCall = function (param) {
        if (param == false) {
            this.display = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            if (param != '取消') {
                this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功' }];
            }
        }
        else {
            console.log(param);
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //分页
    AssociationRelationListComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.selectPartyRelationshipBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.selectPartyRelationshipBean.pageNum = currentPage;
        //调用查询的方法
        this.query();
        this.selectPartyRelationshipBean.pageNum = 1;
    };
    AssociationRelationListComponent.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.aaaa = event;
        this.display = false;
    };
    AssociationRelationListComponent.prototype.outValueCall = function (event) {
        var _this = this;
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.startTime.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        console.log(commonHeader);
        this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.cusViewHttpService.addPartyRelationship(this.outValBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_4 = s;
                    _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_4));
                }
                _this.aaaa = false;
                _this.display = false;
                // this.outValue.emit(false);
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                // this.addPartyRelationshipBean = new AddPartyRelationshipBean();
            }
            else {
                var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_5 = s;
                    _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_5));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader_6 = s;
                _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_6));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    AssociationRelationListComponent.prototype.addCallBean = function (event) {
        this.outValBean = event;
    };
    //码值
    AssociationRelationListComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssociationRelationListComponent.prototype, "outValue", void 0);
    AssociationRelationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation-list',
            template: __webpack_require__(/*! ./association-relation-list.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.html"),
            styles: [__webpack_require__(/*! ./association-relation-list.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"]])
    ], AssociationRelationListComponent);
    return AssociationRelationListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-manager.module.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-manager.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: AssociationRelationManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationManagerModule", function() { return AssociationRelationManagerModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _association_relation_manager_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./association-relation-manager.routing */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-manager.routing.ts");
/* harmony import */ var _association_change_record_association_change_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./association-change-record/association-change-record.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.ts");
/* harmony import */ var _association_relation_add_association_relation_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./association-relation-add/association-relation-add.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.ts");
/* harmony import */ var _association_relation_del_association_relation_del_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./association-relation-del/association-relation-del.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.ts");
/* harmony import */ var _association_relation_list_association_relation_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./association-relation-list/association-relation-list.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.ts");
/* harmony import */ var _association_relation_modify_association_relation_modify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./association-relation-modify/association-relation-modify.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AssociationRelationManagerModule = /** @class */ (function () {
    function AssociationRelationManagerModule() {
    }
    AssociationRelationManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _association_relation_manager_routing__WEBPACK_IMPORTED_MODULE_5__["AssociationRelationManagerRouting"]
            ],
            declarations: [
                _association_change_record_association_change_record_component__WEBPACK_IMPORTED_MODULE_6__["AssociationChangeRecordComponent"],
                _association_relation_add_association_relation_add_component__WEBPACK_IMPORTED_MODULE_7__["AssociationRelationAddComponent"],
                _association_relation_del_association_relation_del_component__WEBPACK_IMPORTED_MODULE_8__["AssociationRelationDelComponent"],
                _association_relation_list_association_relation_list_component__WEBPACK_IMPORTED_MODULE_9__["AssociationRelationListComponent"],
                _association_relation_modify_association_relation_modify_component__WEBPACK_IMPORTED_MODULE_10__["AssociationRelationModifyComponent"]
            ],
            providers: []
        })
    ], AssociationRelationManagerModule);
    return AssociationRelationManagerModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-manager.routing.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-manager.routing.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: AssociationRelationManagerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationManagerRouting", function() { return AssociationRelationManagerRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _association_change_record_association_change_record_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./association-change-record/association-change-record.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record/association-change-record.component.ts");
/* harmony import */ var _association_relation_add_association_relation_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./association-relation-add/association-relation-add.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-add/association-relation-add.component.ts");
/* harmony import */ var _association_relation_del_association_relation_del_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./association-relation-del/association-relation-del.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-del/association-relation-del.component.ts");
/* harmony import */ var _association_relation_list_association_relation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./association-relation-list/association-relation-list.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-list/association-relation-list.component.ts");
/* harmony import */ var _association_relation_modify_association_relation_modify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./association-relation-modify/association-relation-modify.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.ts");






var routes = [
    {
        path: '',
        children: [
            { path: 'association-change-record', component: _association_change_record_association_change_record_component__WEBPACK_IMPORTED_MODULE_1__["AssociationChangeRecordComponent"] },
            { path: 'association-relation-add', component: _association_relation_add_association_relation_add_component__WEBPACK_IMPORTED_MODULE_2__["AssociationRelationAddComponent"] },
            { path: 'association-relation-del', component: _association_relation_del_association_relation_del_component__WEBPACK_IMPORTED_MODULE_3__["AssociationRelationDelComponent"] },
            { path: 'association-relation-list', component: _association_relation_list_association_relation_list_component__WEBPACK_IMPORTED_MODULE_4__["AssociationRelationListComponent"] },
            { path: 'association-relation-modify', component: _association_relation_modify_association_relation_modify_component__WEBPACK_IMPORTED_MODULE_5__["AssociationRelationModifyComponent"] },
            { path: '', redirectTo: 'association-change-record', pathMatch: 'full' }
        ]
    }
];
var AssociationRelationManagerRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>当事人客户号：</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.custNo\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 first\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>当事人名称：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.custName\" disabled>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关系人客户号：</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.relationshipCustNo\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关系人名称：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.relationshipCustName\" disabled>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关系类型：</label>\r\n                <!-- <p-dropdown [options]=\"parentTypeId\" [(ngModel)]=\"addPartyRelationshipBean.parentTypeId\" [disabled]='true'></p-dropdown> -->\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.parentTypeName\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div>\r\n                <label for=\"\" appValidation>子关系类型：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.relationshipName\" disabled>\r\n                <!-- <p-dropdown [options]=\"relationship\" [(ngModel)]=\"addPartyRelationshipBean.relationshipType\" [disabled]='true'></p-dropdown> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">详情描述：</label>\r\n            <input type=\"text\" maxlength=\"100\" pInputText [(ngModel)]=\"addPartyRelationshipBean.comments\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">是否统一授信:</label>\r\n            <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherUnifiedCredit\" [disabled]=\"!whetherCredit\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div>\r\n                <label for=\"\" appValidation>是否可冲减积数：</label>\r\n                <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherReductionNumber\" [disabled]=\"!whether\" (onChange)=\"doSelet()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!whether1\">\r\n                是否可冲减积数不能为空!\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>积数冲减控制方式：</label>\r\n            <p-dropdown [options]=\"reductionNumberType\" [(ngModel)]=\"addPartyRelationshipBean.reductionNumberType\" [disabled]=\"true\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>创建人:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.userName\" disabled>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>创建机构:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.userOrgName\" disabled>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeId == '0102'||addPartyRelationshipBean.parentTypeId == '0104'\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资金额：</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investAmt\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资占比（%）：</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investRate\" disabled>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeId == '0102'||addPartyRelationshipBean.parentTypeId == '0104'\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资日期：</label>\r\n            <p-calendar [(ngModel)]=\"addPartyRelationshipBean.investDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1950:2030\" disabled></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">是否实际控制人：</label>\r\n            <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherCtrlPerson\" [disabled]=\"true\"></p-dropdown>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"modifySaveBtn()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"modifyCloseBtn()\"></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 .requireLabel, .ui-g-12 .requireLabel {\n  width: 350px;\n  text-align: right; }\n\n.ui-g-4 .requireDiv, .ui-g-12 .requireDiv {\n  width: 321px;\n  text-align: right; }\n\n.ui-g-4 label, .ui-g-12 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.secondrow {\n  padding: 0;\n  margin: 0; }\n\n.secondrow .first label {\n    padding-top: 2%; }\n\n.btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1tb2RpZnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGFzc29jaWF0aW9uLXJlbGF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1tYW5hZ2VyXFxhc3NvY2lhdGlvbi1yZWxhdGlvbi1tb2RpZnlcXGFzc29jaWF0aW9uLXJlbGF0aW9uLW1vZGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFIekI7RUFNUSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBUHpCO0VBVVEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUZiO0lBS1ksZUFBZSxFQUFBOztBQUkzQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24tbWFuYWdlci9hc3NvY2lhdGlvbi1yZWxhdGlvbi1tb2RpZnkvYXNzb2NpYXRpb24tcmVsYXRpb24tbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWctNCwudWktZy0xMntcclxuICAgIC5yZXF1aXJlTGFiZWx7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnJlcXVpcmVEaXZ7XHJcbiAgICAgICAgd2lkdGg6IDMyMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4uc2Vjb25kcm93e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC5maXJzdHtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: AssociationRelationModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationModifyComponent", function() { return AssociationRelationModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Panduan, ReductionNumberType, AsocialitionMainFlag, RelationshipType, ParentTypeId } from '../../../../constant/custView.codeValue';



var AssociationRelationModifyComponent = /** @class */ (function () {
    function AssociationRelationModifyComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outValueBean = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
        this.panduan = [];
        this.reductionNumberType = [];
        this.relationshipType = [];
        //提示信息
        this.msgs = [];
        this.asocialitionMainFlag = []; //强弱关联标识
        this.flag = false;
        this.showEmpty1 = true;
        this.showEmpty = true;
        this.whether = true;
        this.whether1 = true;
        this.whetherCredit = true;
        this.aaaa = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        this.codeVal();
        this.panduan = this.code['Panduan'];
        this.reductionNumberType = this.code['ReductionNumberType'];
        this.relationshipType = this.code['RelationshipType'];
        // this.parentTypeId=this.code['ParentTypeId'];
        this.asocialitionMainFlag = this.code['AsocialitionMainFlag'];
    }
    AssociationRelationModifyComponent.prototype.ngOnInit = function () {
    };
    AssociationRelationModifyComponent.prototype.ngOnChanges = function () {
        if (this.inValue) {
            this.addPartyRelationshipBean = this.inValue;
            var typeId = this.addPartyRelationshipBean.relationshipType;
            if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
                // this.addPartyRelationshipBean.whetherReductionNumber = '1';//是否可冲减积数
                // this.addPartyRelationshipBean.reductionNumberType = '1';//冲减积数控制方式
                this.whether = false;
            }
            else {
                // this.addPartyRelationshipBean.whetherReductionNumber = '';
                // this.addPartyRelationshipBean.reductionNumberType = '';
                this.whether = true;
            }
            if (this.addPartyRelationshipBean.parentTypeId < '0200') {
                // this.addPartyRelationshipBean.whetherUnifiedCredit = '1';//是否统一授信
                this.whetherCredit = false;
            }
            else {
                // this.addPartyRelationshipBean.whetherUnifiedCredit = '';//是否统一授信            
                this.whetherCredit = true;
            }
            // let param = {
            //   custNo: this.addPartyRelationshipBean.custNo
            // }
            // this.httpService.selectCustBriefInfo(param).subscribe(
            //   data => {
            //     if (data.returnCode.code == 'success') {
            //       this.addPartyRelationshipBean.custName = data.custName;
            //       this.addPartyRelationshipBean.principalLinkman = data.principalLinkmanName;
            //       this.addPartyRelationshipBean.principalLinkmanOrg = data.principalLinkmanOrgName;
            //     }
            //   }, error => {
            //     this.msgs = [];
            //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            //   })
        }
        this.copy();
    };
    AssociationRelationModifyComponent.prototype.copy = function () {
        this.addPartyRelationshipBean = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.inValue);
    };
    //联动
    // doSelet(data) {
    //this.whether1 = true;
    //let typeId = this.addPartyRelationshipBean.relationshipType;
    //if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
    //  this.addPartyRelationshipBean.whetherReductionNumber = '1';//是否可冲减积数
    // this.addPartyRelationshipBean.reductionNumberType = '1';//冲减积数控制方式
    // this.whether = false;
    //  } else {
    // this.addPartyRelationshipBean.whetherReductionNumber = '';
    // this.addPartyRelationshipBean.reductionNumberType = '';
    // this.whether = true;
    // if (this.addPartyRelationshipBean.whetherReductionNumber == '1') {
    //   this.addPartyRelationshipBean.reductionNumberType = '0';
    // } else {
    //   this.addPartyRelationshipBean.reductionNumberType = '';
    //  }
    //   }
    //  }
    //确定按钮
    AssociationRelationModifyComponent.prototype.modifySaveBtn = function () {
        // this.addPartyRelationshipBean.custNo = this.custNo;
        //if(!this.addPartyRelationshipBean.whetherReductionNumber){
        //this.whether1 = false;
        //return;
        //}
        //let ob = this.httpService.updatePartyRelationship(this.addPartyRelationshipBean);
        // ob.subscribe(data => {
        // if (data.returnCode.code == 'success') {
        //   this.msgs = [];
        // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        // this.outValue.emit(false);
        //   } else {
        //   this.msgs = [];
        //  this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message })
        // }
        // }, error => {
        //  this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' })
        // })
        // if (!this.addPartyRelationshipBean.custNo) {
        //  this.showEmpty1 = false;
        // }
        // if (!this.addPartyRelationshipBean.relationshipCustNo) {
        //   this.showEmpty = false;
        // }
        // //校验的
        // for (const i in this.distributeCustQryForm.controls) {
        //   this.distributeCustQryForm.controls[i].markAsDirty();
        // }
        //处理是否提交
        //for (const i in this.distributeCustQryForm.controls) {
        //   if (!this.distributeCustQryForm.controls[i].valid) {
        //    return;
        // }
        // }
        var _this = this;
        this.waitSelUserList = this.commfunc.query('112000', { relationshipType: this.addPartyRelationshipBean.relationshipType });
        this.outVal = this.waitSelUserList.waitSelUserList;
        this.aaaa = this.waitSelUserList.display;
        console.log(this.aaaa);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.specifyNextOpers;
        console.log(a);
        if (this.aaaa == true && (a == undefined || a == '' || a == null)) {
            this.outValue.emit({ outVal: this.outVal, aaaa: this.aaaa });
        }
        else {
            var ob = this.httpService.updatePartyRelationship(this.addPartyRelationshipBean);
            ob.subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_1 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                    }
                    _this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    _this.addPartyRelationshipBean = new _custom_view_association_relation_personal_relation_bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
                }
                else {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_2 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_3 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_3));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    //取消按钮
    AssociationRelationModifyComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit('取消');
        // this.addPartyRelationshipBean= new AddPartyRelationshipBean();
    };
    AssociationRelationModifyComponent.prototype.doSelet = function () { };
    //码值
    AssociationRelationModifyComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssociationRelationModifyComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssociationRelationModifyComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssociationRelationModifyComponent.prototype, "outValueBean", void 0);
    AssociationRelationModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation-modify',
            template: __webpack_require__(/*! ./association-relation-modify.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.html"),
            styles: [__webpack_require__(/*! ./association-relation-modify.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-relation-modify/association-relation-modify.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AssociationRelationModifyComponent);
    return AssociationRelationModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/bean/selectPartyRelationship.bean.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation-manager/bean/selectPartyRelationship.bean.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: SelectPartyRelationshipBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPartyRelationshipBean", function() { return SelectPartyRelationshipBean; });
var SelectPartyRelationshipBean = /** @class */ (function () {
    function SelectPartyRelationshipBean() {
    }
    return SelectPartyRelationshipBean;
}());



/***/ })

}]);
//# sourceMappingURL=association-relation-manager-association-relation-manager-module.js.map