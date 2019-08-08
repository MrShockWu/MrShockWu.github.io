(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telemarketing-telemarketing-module"],{

/***/ "./src/app/pages/tzb/custom/telemarketing/bean/telemarketing.bean.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/bean/telemarketing.bean.ts ***!
  \***************************************************************************/
/*! exports provided: TeleMarketingBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingBean", function() { return TeleMarketingBean; });
var TeleMarketingBean = /** @class */ (function () {
    function TeleMarketingBean() {
    }
    return TeleMarketingBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'客户信息'\"></header-title>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>业务类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.workEffortParentId|codeValuePie:MarketingCampaigntType}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>任务名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.taskName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>\r\n                    <a href=\"/#/pages/custom-view?custNo={{compileStr(dataList.obCustomercode)}}\" target=\"_blank\">{{dataList.obCustomercode}}</a>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.obName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>主联系人：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.amanagerName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>主联系人所属机构：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.principalLinkmanOrgName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 直销 -->\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '01'||dataList.workEffortParentId == '20'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>原贷款产品：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.bussType}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>原贷款额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.loanAmt}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>原贷款期限：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.endDate}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '01'||dataList.workEffortParentId == '20'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>产品额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.EcardCreditLmt}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- 批量预授信转授信 -->\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '17'||dataList.workEffortParentId == '22'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户群号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.groupId}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户群名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.groupName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>产品名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.productName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '17'||dataList.workEffortParentId == '22'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>主担保方式：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.guaranteeType|codeValuePie:guaranteeModeOptions}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>授信到期日期：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.endDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>信贷员建议额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.loanOfficerAdvises}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户身份证号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.idenNum}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 title\">\r\n                <span>客户号码：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.obPhone}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\">\r\n    <header-title [Info]=\"'联络结果记录'\"></header-title>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>联系类型：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"CONTACTTYPE\" [(ngModel)]=\"dataList.contactType\" disabled></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>联系方式：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"ContactWay\" [(ngModel)]=\"dataList.contactWay\" disabled></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>联系人名称：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{dataList.managerUserName}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>联系时间：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{dataList.contactTime}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>联系客户名称：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{dataList.partyNameFrom}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>客户电话号码：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{dataList.contactMechIdTo}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>他行融资家数：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"dataList.otherBank\" [disabled]=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>电销优惠活动标识：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"dataList.discounts\" [disabled]=\"true\" />\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"ui-g-12 gap-title1\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>是否外呼：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" style=\"padding:0\">\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType1\" label=\"是\" value=\"1\" [(ngModel)]=\"dataList.acall\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType1\" label=\"否\" value=\"0\" [(ngModel)]=\"dataList.acall\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>电话是否接通：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" style=\"padding:0\">\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType2\" label=\"是\" value=\"1\" [(ngModel)]=\"dataList.aisconnect\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType2\" label=\"否\" value=\"2\" [(ngModel)]=\"dataList.aisconnect\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title1\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>客户响应：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"areSponse2\" [(ngModel)]=\"dataList.response\" [disabled]=\"true\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>无法接通说明：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"AnotConnect\" [(ngModel)]=\"dataList.anotconnect\" [disabled]=\"true\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>短信通知客户经理：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType3\" label=\"通知\" value=\"1\" [(ngModel)]=\"dataList.messToManger\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType3\" label=\"不通知\" value=\"0\" [(ngModel)]=\"dataList.messToManger\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\" *ngIf=\"dataList.messToManger == '1'\">\r\n    <div class=\"ui-g-2 title-note\">\r\n        <span>短信通知客户经理内容：</span>\r\n    </div>\r\n    <div class=\"ui-g-8\">\r\n        <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"dataList.messToMangerCon\" [disabled]=\"true\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 gap-title\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>通知运营平台：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType4\" label=\"通知\" value=\"1\" [(ngModel)]=\"dataList.messToPla\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType4\" label=\"不通知\" value=\"0\" [(ngModel)]=\"dataList.messToPla\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\" *ngIf=\"dataList.messToPla == '1'\">\r\n    <div class=\"ui-g-2 title-note\">\r\n        <span>通知运营平台内容：</span>\r\n    </div>\r\n    <div class=\"ui-g-8\">\r\n        <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"dataList.messToPlaCon\" [disabled]=\"true\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 gap-title\">\r\n    <div class=\"ui-g-4 cantact-title\">\r\n        <div class=\"ui-g-5 title\">\r\n            <span>短信通知客户：</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType5\" label=\"通知\" value=\"1\" [(ngModel)]=\"dataList.messToCus\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-radioButton name=\"custType5\" label=\"不通知\" value=\"0\" [(ngModel)]=\"dataList.messToCus\" [disabled]=\"true\"></p-radioButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 gap-title\" *ngIf=\"dataList.messToCus == '1'\">\r\n    <div class=\"ui-g-2 title-note\">\r\n        <span>短信通知客户内容：</span>\r\n    </div>\r\n    <div class=\"ui-g-8\">\r\n        <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"dataList.messToCusCon\" [disabled]=\"true\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 title-note\">\r\n        <span>备注：</span>\r\n    </div>\r\n    <div class=\"ui-g-8\">\r\n        <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"dataList.remark\" [disabled]=\"true\"></textarea>\r\n    </div>\r\n</div>\r\n<!-- <contact-record-module [dataList]=\"dataList\"></contact-record-module> -->\r\n\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0;\n  background: #fff; }\n\n.functions .whole {\n    line-height: 31px;\n    padding-left: 0;\n    background: #efefef;\n    padding: 0; }\n\n.functions .whole .change {\n      display: inline-block;\n      font-size: 15px;\n      height: 40px;\n      line-height: 40px;\n      border-radius: 3px 3px 0 0;\n      color: #929292;\n      padding: 0px 30px;\n      font-weight: bold; }\n\n.active {\n  position: relative;\n  border: none !important;\n  color: #19b0c8 !important;\n  border-bottom-width: 0px;\n  background: #fafafa !important; }\n\n.active:before {\n  content: '';\n  width: 59px;\n  height: 2px;\n  background: #19b0c8;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 35%; }\n\n.padding-one {\n  padding: 1em; }\n\n.bgcolor {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n.title {\n  text-align: right;\n  padding-bottom: 0; }\n\n.talk {\n  text-align: right;\n  width: 11.5%; }\n\n.gap-name {\n  padding-bottom: 0; }\n\n.gap-name .ui-g-4 {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-4 .title {\n      padding-bottom: 0; }\n\n.gap-name .ui-g-4 .ui-g-6 {\n      padding-bottom: 0; }\n\n.gap-name .talk {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-10 {\n    padding-bottom: 0; }\n\n.gap-title {\n  padding-bottom: 0; }\n\n.gap-title .cantact-title {\n    padding-bottom: 0; }\n\n.gap-title .cantact-title .title {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.gap-title .cantact-title .ui-g-6 {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.phone {\n  float: left;\n  margin-top: 5px;\n  margin-right: 5px; }\n\nimg {\n  cursor: pointer; }\n\n.title-note {\n  text-align: right;\n  width: 14%; }\n\n.gap-title1 {\n  padding-top: 0; }\n\n.gap-title1 .cantact-title {\n    padding-bottom: 0; }\n\n.gap-title1 .cantact-title .title {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.gap-title1 .cantact-title .ui-g-6 {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkLWhpc3RvcnktZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcdGVsZW1hcmtldGluZ1xcY29udGFjdC1yZWNvcmQtaGlzdG9yeS1kZXRhaWxcXGNvbnRhY3QtcmVjb3JkLWhpc3RvcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdDQUNKLEVBQUE7O0FBRUE7RUFDSSxXQUFXO0VBQ1gscUJBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFKcEI7SUFNUSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7O0FBVGxCO01BV1kscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLDBCQUEwQjtNQUMxQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBOztBQUs3QjtFQUNJLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJO0lBQ0ksZ0NBQWdDLEVBQUE7SUFEcEM7TUFHUSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFHekI7SUFDSSxvQ0FBb0MsRUFBQTtFQUV4QztJQUNJLG1CQUFtQixFQUFBLEVBQ3RCOztBQUVMO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO01BS1ksaUJBQWlCLEVBQUE7O0FBTDdCO01BUVksaUJBQWlCLEVBQUE7O0FBUjdCO0lBWVEsaUJBQWlCLEVBQUE7O0FBWnpCO0lBZVEsaUJBQWlCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO01BS1ksaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUFOMUI7TUFTWSxpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQUkxQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO01BS1ksaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUFOMUI7TUFTWSxpQkFBaUI7TUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkLWhpc3RvcnktZGV0YWlsL2NvbnRhY3QtcmVjb3JkLWhpc3RvcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLW1lbnViYXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZsdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxyXG59XHJcblxyXG4uYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIOWIh+aNolxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLndob2xle1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLmNoYW5nZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDU5cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMzUlO1xyXG59XHJcbi5wYWRkaW5nLW9uZSB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNmU5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmdjb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgIH1cclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi50YWxre1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTEuNSU7XHJcbn1cclxuLmdhcC1uYW1le1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWxre1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuLmdhcC10aXRsZXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLmNhbnRhY3QtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBob25le1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbmltZ3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGl0bGUtbm90ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxNCU7XHJcbn1cclxuLmdhcC10aXRsZTF7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC5jYW50YWN0LXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ContactRecordHistoryDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRecordHistoryDetail", function() { return ContactRecordHistoryDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactRecordHistoryDetail = /** @class */ (function () {
    function ContactRecordHistoryDetail(teleMarketingHttpService, commfunc) {
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.commfunc = commfunc;
        this.dataList = {};
        this.msgs = []; //提示信息
        this.MarketingCampaigntType = [];
        this.isShowPhone = false;
        this.AnotConnect = [];
        this.areSponse2 = [];
        this.isShowCode = false; //根据外呼和是否接通不同，显示码值不同
        this.Property1 = false;
        this.Property2 = false;
        this.Property3 = false;
        this.CONTACTTYPE = [{ label: '请选择', value: '' }];
        this.ContactWay = [{ label: '请选择', value: '' }];
        this.codeValues(); //调用方法，获取全部码值
        this.MarketingCampaigntType = this.code['DXRASKTYPE']; //任务类型
        this.AnotConnect = this.code['AnotConnec'];
        this.areSponse2 = this.code['AreSponse2'];
        this.guaranteeModeOptions = this.code['GuaranteeMode']; //
    }
    ContactRecordHistoryDetail.prototype.ngOnInit = function () {
        // this.taskType = this.inValue.workEffortParentId;
        // this.taskName = this.inValue.taskName;
        // this.communicationEventId = this.inValue.communicationEventId;
        // this.typeCantact = this.inValue.contactType;
        // this.WayCanct = this.inValue.contactWay
        this.CONTACTTYPE.push({ label: this.inValue.contactTypeDescription, value: this.inValue.contactType });
        this.ContactWay.push({ label: this.inValue.contactWayDescription, value: this.inValue.contactWay });
        this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
        this.toDetail();
    };
    ContactRecordHistoryDetail.prototype.toDetail = function () {
        // let param = {
        //     communicationEventId: this.communicationEventId
        // }
        // this.teleMarketingHttpService.queryCustCommunicationDetail(param).subscribe(data => {
        //     if (data.returnCode.code == "success") {
        //         this.dataList = data.returnMap;
        //         // this.inValue2 = this.dataList;
        //         if (this.dataList.obDate && this.dataList.obTime) {
        //             this.dataList.obDate = this.dataList.obDate + '  ' + this.dataList.obTime;
        //         } else {
        //             this.dataList.obDate = this.dataList.obDate
        //         }
        //         if (this.dataList.messToManger == '1') {//短信通知客户经理
        //             this.Property1 = true;
        //         }
        //         if (this.dataList.messToPla == '1') {//通知运营平台
        //             this.Property2 = true;
        //         }
        //         if (this.dataList.messToCus == '1') {//短信通知客户
        //             this.Property3 = true;
        //         }
        var _this = this;
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        // })
        var param = {
            contactId: this.inValue.contactId
        };
        this.teleMarketingHttpService.queryHistoryCommunicationEventResultDetail(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.dataList = Object.assign(_this.dataList, data);
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
    //码值
    ContactRecordHistoryDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContactRecordHistoryDetail.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactRecordHistoryDetail.prototype, "inValue", void 0);
    ContactRecordHistoryDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-record-history-detail',
            template: __webpack_require__(/*! ./contact-record-history-detail.component.html */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-record-history-detail.component.scss */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.scss")],
            providers: [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        // 联络结果历史查询-详情
        ,
        __metadata("design:paramtypes", [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], ContactRecordHistoryDetail);
    return ContactRecordHistoryDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/bean/contact-record.bean.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history/bean/contact-record.bean.ts ***!
  \***************************************************************************************************/
/*! exports provided: ContactRecordBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRecordBean", function() { return ContactRecordBean; });
var ContactRecordBean = /** @class */ (function () {
    function ContactRecordBean() {
    }
    return ContactRecordBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 header\">\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>业务类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"MarketingCampaigntType\" [(ngModel)]=\"contactRecordBean.bussType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>业务名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"contactRecordBean.taskName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>联系时间：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    [locale]=\"ch\" [showOtherMonths]=\"false\" [(ngModel)]=\"obDate\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>联系人名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"contactRecordBean.oboperName\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 header\">\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>联系类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"typeCantact\" [(ngModel)]=\"contactRecordBean.contactType\" (onChange)=\"contactBtn($event)\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4\">\r\n                <span>联系方式：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"WayCanct\" [(ngModel)]=\"contactRecordBean.contactWay\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"queryHistoryCommunicationEventResultList()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" (click)=\"recler()\" label=\"重置\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 header\">\r\n        <p-dataTable [value]=\"table_list\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column field=\"bussType\" header=\"业务类型\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:MarketingCampaigntType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\"></p-column>\r\n            <p-column field=\"contactType\" header=\"联系类型\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.contactType|codeValuePie:CONTACTTYPE}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contactWay\" header=\"联系方式\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.contactWay|codeValuePie:ContactWay}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"processUserName\" header=\"联系人名称\"></p-column>\r\n            <p-column field=\"contactTime\" header=\"联系时间\">\r\n\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n<!-- 详情 -->\r\n<p-dialog *ngIf='orgTreePage' [(visible)]=\"orgTreePage\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"my-cust-overf\">\r\n    <p-header>详情</p-header>\r\n    <contact-record-history-detail [inValue]=\"inValue\"></contact-record-history-detail>\r\n</p-dialog>\r\n\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-switch {\n  text-align: center; }\n\n:host/deep/ .my-cust-overf .ui-dialog .ui-dialog-content {\n  height: 90% !important;\n  padding: 0; }\n\n.header {\n  padding: 0; }\n\n.header .ui-g-3 .ui-g-4 {\n    text-align: right;\n    padding: 0; }\n\n.header .ui-g-3 .ui-g-6 {\n    padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkLWhpc3RvcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx0ZWxlbWFya2V0aW5nXFxjb250YWN0LXJlY29yZC1oaXN0b3J5XFxjb250YWN0LXJlY29yZC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFVBQVUsRUFBQTs7QUFEZDtJQUtZLGlCQUFpQjtJQUNqQixVQUFVLEVBQUE7O0FBTnRCO0lBU1ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkLWhpc3RvcnkvY29udGFjdC1yZWNvcmQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuLXN3aXRjaHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1vdmVyZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC51aS1nLTN7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMDtcclxuICAgICAgICAudWktZy00e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ContactRecordHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRecordHistory", function() { return ContactRecordHistory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_contact_record_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/contact-record.bean */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/bean/contact-record.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactRecordHistory = /** @class */ (function () {
    function ContactRecordHistory(teleMarketingHttpService, commfunc, activatedRoute) {
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.commfunc = commfunc;
        this.activatedRoute = activatedRoute;
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.resultList = [];
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.orgTreePage = false;
        this.CONTACTTYPE = [];
        this.ContactWay = [];
        this.MarketingCampaigntType = [];
        this.contactRecordBean = new _bean_contact_record_bean__WEBPACK_IMPORTED_MODULE_4__["ContactRecordBean"]();
        this.table_list = [];
        this.msgs = []; //提示信息
        this.obDate = null;
        this.dataMapList = {};
        // dataMapLists: any = {};
        this.typeCantact = [];
        this.WayCanct = [];
        this.codeValues(); //调用方法，获取全部码值
        this.MarketingCampaigntType = this.code['DXRASKTYPE']; //任务类型
        this.CONTACTTYPE = [{ label: '请选择', value: '' }];
        this.ContactWay = [{ label: '请选择', value: '' }];
    }
    ContactRecordHistory.prototype.ngOnInit = function () {
        var _this = this;
        this.dataMapList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
        // this.dataMapLists = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('raskBean')).dataMap);
        this.contactRecordBean.bussType = this.dataMapList.workEffortParentId;
        // if (this.commfunc.getSessionDataCH('markFlag') == '2') {
        //     this.markFlag = this.commfunc.getSessionDataCH('markFlag')
        //     this.commfunc.setSessionDataCH('markFlag', this.markFlag);
        // }
        this.queryHistoryCommunicationEventResultList();
        this.cantactClick(); //查询联系类型码值
        // this.cantactWay();
        // this.queryClick();
        var paremse = {};
        this.teleMarketingHttpService.isCommunicationPost(paremse).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.paramMap.directSellingToElectricSelling == '1' && data.paramMap.custCommunicationPost == '1') {
                    _this.MarketingCampaigntType.unshift({ label: "请选择", value: " " });
                }
                else if (data.paramMap.directSellingToElectricSelling == '0' && data.paramMap.custCommunicationPost == '0') {
                    _this.MarketingCampaigntType.unshift({ label: "请选择", value: " " });
                }
                else {
                    if (data.paramMap.custCommunicationPost == '0') {
                        var TaskTypes_1 = [];
                        _this.MarketingCampaigntType.forEach(function (items) {
                            if (items.value == '16') {
                            }
                            else {
                                TaskTypes_1.push(items);
                            }
                        });
                        _this.MarketingCampaigntType = TaskTypes_1;
                    }
                    else if (data.paramMap.custCommunicationPost == '1') {
                        var TaskTypes_2 = [];
                        _this.MarketingCampaigntType.forEach(function (items) {
                            if (items.value == '01') {
                            }
                            else {
                                TaskTypes_2.push(items);
                            }
                        });
                        _this.MarketingCampaigntType = TaskTypes_2;
                    }
                }
                _this.MarketingCampaigntType = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.MarketingCampaigntType);
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
    //查询
    ContactRecordHistory.prototype.queryClick = function () {
        var _this = this;
        this.contactRecordBean.taskId = this.dataMapList.taskId;
        this.contactRecordBean.obDate = this.commfunc.transDateN(this.obDate);
        this.contactRecordBean.obCustomercode = this.dataMapList.obCustomercode;
        this.teleMarketingHttpService.queryHistoryCommunicationEventResultDetail(this.contactRecordBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.table_list = data.returnList;
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
    //详情
    ContactRecordHistory.prototype.toDetail = function (item) {
        console.log(item);
        this.orgTreePage = true;
        this.inValue = item;
    };
    //联系类型
    ContactRecordHistory.prototype.cantactClick = function () {
        var _this = this;
        var params = {
            pageNum: 1,
            pageSize: 99999999
        };
        this.teleMarketingHttpService.queryContactMechTypeList(params).subscribe(function (data) {
            var arr = data.contactMechTypeList;
            _this.typeCantact = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.typeCantact.push({ label: item.description, value: item.contactMechTypeId });
                });
            }
        });
    };
    //联系方式是根据联系类型进行判断显示
    ContactRecordHistory.prototype.contactBtn = function (event) {
        var _this = this;
        if (event.value == '') {
            this.contactRecordBean.contactWay = '';
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择联系类型' });
            return;
        }
        var params = {
            pageNum: 1,
            pageSize: 99999999,
            contactMechTypeId: event.value
        };
        this.teleMarketingHttpService.queryCommunicationEventTypeList(params).subscribe(function (data) {
            var arr = data.communicationEventTypeList;
            _this.WayCanct = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.WayCanct.push({ label: item.description, value: item.communicationEventTypeId });
                });
            }
        });
    };
    ContactRecordHistory.prototype.queryHistoryCommunicationEventResultList = function () {
        var _this = this;
        this.contactRecordBean['workEffortId'] = this.dataMapList.taskId;
        this.teleMarketingHttpService.queryHistoryCommunicationEventResultList(this.contactRecordBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var hash1_1 = {}, hash2 = {};
                if (data.resultList && data.resultList.length != 0) {
                    data.resultList.forEach(function (element) {
                        _this.CONTACTTYPE.push({ label: element.contactTypeDescription, value: element.contactType });
                        _this.ContactWay.push({ label: element.contactWayDescription, value: element.contactWay });
                    });
                    //json数组去重
                    _this.CONTACTTYPE = _this.CONTACTTYPE.reduce(function (item, next) {
                        hash1_1[next.value] ? '' : hash1_1[next.value] = true && item.push(next);
                        return item;
                    }, []);
                    _this.ContactWay = _this.ContactWay.reduce(function (item, next) {
                        hash1_1[next.value] ? '' : hash1_1[next.value] = true && item.push(next);
                        return item;
                    }, []);
                }
                _this.table_list = data.resultList;
                _this.msgs = [];
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
    //码值
    ContactRecordHistory.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //重置
    ContactRecordHistory.prototype.recler = function () {
        this.contactRecordBean = new _bean_contact_record_bean__WEBPACK_IMPORTED_MODULE_4__["ContactRecordBean"];
        this.obDate = null;
        this.contactRecordBean.bussType = this.dataMapList.workEffortTypeId;
        this.contactRecordBean.taskId = this.dataMapList.taskId;
        this.contactRecordBean.obCustomercode = this.dataMapList.obCustomercode;
    };
    ContactRecordHistory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-record-history',
            template: __webpack_require__(/*! ./contact-record-history.component.html */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.html"),
            styles: [__webpack_require__(/*! ./contact-record-history.component.scss */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.scss")],
            providers: [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_2__["TeleMarketingHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        // 联络结果历史查询
        ,
        __metadata("design:paramtypes", [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_2__["TeleMarketingHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ContactRecordHistory);
    return ContactRecordHistory;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>他行融资家数：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"teleMarketingBean.otherBank\" [disabled]=\"isShow\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>电销优惠活动标识：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"teleMarketingBean.discounts\" [disabled]=\"isShow\" />\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title1\">\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"!isShow\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>是否外呼：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType1\" label=\"是\" value=\"1\" [(ngModel)]=\"teleMarketingBean.acall\" (click)=\"changeCustType('')\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType1\" label=\"否\" value=\"0\" [(ngModel)]=\"teleMarketingBean.acall\" (click)=\"changeCustType('')\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 回显的不给修改开始 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"isShow\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>是否外呼：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType1\" label=\"是\" value=\"1\" [(ngModel)]=\"teleMarketingBean.acall\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType1\" label=\"否\" value=\"0\" [(ngModel)]=\"teleMarketingBean.acall\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 回显的不给修改结束 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"!isShow\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>电话是否接通：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType2\" label=\"是\" value=\"1\" [(ngModel)]=\"teleMarketingBean.aisconnect\" (click)=\"changeCustType('')\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType2\" label=\"否\" value=\"2\" [(ngModel)]=\"teleMarketingBean.aisconnect\" (click)=\"changeCustType('')\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 开始 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"isShow\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>电话是否接通：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType2\" label=\"是\" value=\"1\" [(ngModel)]=\"teleMarketingBean.aisconnect\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType2\" label=\"否\" value=\"2\" [(ngModel)]=\"teleMarketingBean.aisconnect\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 结束 -->\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title1\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户响应：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"areSponse\" [(ngModel)]=\"teleMarketingBean.aresponse\" [disabled]=\"isShow\" *ngIf=\"!isShowCode&&!isShowPhone\"\r\n                    (onChange)=\"change()\"></p-dropdown>\r\n                <p-dropdown [options]=\"areSponse1\" [(ngModel)]=\"teleMarketingBean.aresponse\" [disabled]=\"isShow\" *ngIf=\"isShowCode&&!isShowPhone\"\r\n                    (onChange)=\"change()\"></p-dropdown>\r\n                <p-dropdown [options]=\"areSponse2\" [(ngModel)]=\"teleMarketingBean.aresponse\" [disabled]=\"true\" *ngIf=\"isShowPhone\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>无法接通说明：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"AnotConnect\" [(ngModel)]=\"teleMarketingBean.anotconnect\" [disabled]=\"isOperte\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <!-- 直销 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"!isShow && !isShow3\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>短信通知客户经理：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType3\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToManger\" (click)=\"changeCustType('1')\"\r\n                        *ngIf=\"dataList.workEffortTypeId!='16'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType3\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToManger\" [disabled]=\"true\" *ngIf=\"dataList.workEffortTypeId=='16'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType3\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToManger\" (click)=\"changeCustType('2')\"\r\n                        *ngIf=\"dataList.workEffortTypeId!='16'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType3\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToManger\" [disabled]=\"true\" *ngIf=\"dataList.workEffortTypeId=='16'\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 不给改 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"isShow || isShow3\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>短信通知客户经理：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType3\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToManger\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType3\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToManger\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\" *ngIf=\"teleMarketingBean.messToManger=='1'\">\r\n        <div class=\"ui-g-2 title-note\">\r\n            <span>短信通知客户经理内容：</span>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"teleMarketingBean.messToMangerCon\" [disabled]=\"true\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"!isShow&&!isShow3\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>通知运营平台：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType4\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToPla\" (click)=\"changeCustType('3')\"\r\n                        *ngIf=\"dataList.workEffortTypeId!='16'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType4\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToPla\" [disabled]=\"true\" *ngIf=\"dataList.workEffortTypeId=='16'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType4\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToPla\" (click)=\"changeCustType('4')\"\r\n                        *ngIf=\"dataList.workEffortTypeId!='16'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType4\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToPla\" [disabled]=\"true\" *ngIf=\"dataList.workEffortTypeId=='16'\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 不给改 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"isShow||isShow3\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>通知运营平台：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType4\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToPla\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType4\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToPla\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\" *ngIf=\"teleMarketingBean.messToPla=='1'\">\r\n        <div class=\"ui-g-2 title-note\">\r\n            <span>通知运营平台内容：</span>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"teleMarketingBean.messToPlaCon\" [disabled]=\"isShow\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <!-- 信用卡直销默认通知 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"!isShow&&!isShow2\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>短信通知客户：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType5\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToCus\" (click)=\"changeCustType('5')\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType5\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToCus\" (click)=\"changeCustType('6')\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 不给改 -->\r\n        <div class=\"ui-g-4 cantact-title\" *ngIf=\"isShow||isShow2\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>短信通知客户：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType5\" label=\"通知\" value=\"1\" [(ngModel)]=\"teleMarketingBean.messToCus\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType5\" label=\"不通知\" value=\"0\" [(ngModel)]=\"teleMarketingBean.messToCus\" [disabled]=\"true\"></p-radioButton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- 信用卡直销不展示该字段 -->\r\n    <!-- <div class=\"ui-g-12 gap-title\" *ngIf=\"teleMarketingBean.messToCus=='1'&&dataList.workEffortTypeId=='01'\">\r\n        <div class=\"ui-g-2 title-note\">\r\n            <span>短信通知客户内容：</span>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"teleMarketingBean.messToCusCon\" [disabled]=\"isShow\"></textarea>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 title-note\">\r\n            <span>备注：</span>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"teleMarketingBean.remark\" [disabled]=\"isShow\"></textarea>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .title {\n  text-align: right; }\n\n.ui-g .title-note {\n  text-align: right;\n  width: 11.3%; }\n\n.ui-g .gap-title {\n  padding-bottom: 0; }\n\n.ui-g .gap-title .cantact-title {\n    padding-bottom: 0; }\n\n.ui-g .gap-title .cantact-title .title {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.ui-g .gap-title .cantact-title .ui-g-6 {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.ui-g .gap-title1 {\n  padding-top: 0; }\n\n.ui-g .gap-title1 .cantact-title {\n    padding-bottom: 0; }\n\n.ui-g .gap-title1 .cantact-title .title {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.ui-g .gap-title1 .cantact-title .ui-g-6 {\n      padding-bottom: 0;\n      padding-top: 0; }\n\n.ui-g .btn-switch {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkL2NvbnRhY3QtcmVjb3JkLW1vZHVsZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHRlbGVtYXJrZXRpbmdcXGNvbnRhY3QtcmVjb3JkXFxjb250YWN0LXJlY29yZC1tb2R1bGVcXGNvbnRhY3QtcmVjb3JkLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBTnBCO0VBU1EsaUJBQWlCLEVBQUE7O0FBVHpCO0lBV1ksaUJBQWlCLEVBQUE7O0FBWDdCO01BYWdCLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7O0FBZDlCO01BaUJnQixpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQWxCOUI7RUF1QlEsY0FBYyxFQUFBOztBQXZCdEI7SUF5QlksaUJBQWlCLEVBQUE7O0FBekI3QjtNQTJCZ0IsaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUE1QjlCO01BK0JnQixpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQWhDOUI7RUFxQ1Esa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3RlbGVtYXJrZXRpbmcvY29udGFjdC1yZWNvcmQvY29udGFjdC1yZWNvcmQtbW9kdWxlL2NvbnRhY3QtcmVjb3JkLW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbm90ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDExLjMlO1xyXG4gICAgfVxyXG4gICAgLmdhcC10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAuY2FudGFjdC10aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ2FwLXRpdGxlMXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAuY2FudGFjdC10aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICAuYnRuLXN3aXRjaHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ContactRecordDeploy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRecordDeploy", function() { return ContactRecordDeploy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_telemarketing_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bean/telemarketing.bean */ "./src/app/pages/tzb/custom/telemarketing/bean/telemarketing.bean.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
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





var ContactRecordDeploy = /** @class */ (function () {
    function ContactRecordDeploy(commfunc, teleMarketingHttpService, activatedRoute, router) {
        this.commfunc = commfunc;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.teleMarketingBean = new _bean_telemarketing_bean__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingBean"]();
        // @Input() inValue2: any;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Property1 = false;
        this.Property2 = false;
        this.Property3 = false;
        this.AnotConnect = []; //无法接通说明
        this.areSponse = []; //客户响应
        this.isOperte = false; //可编辑
        this.isShow = false; //可编辑
        this.isShow2 = false;
        this.isShow3 = false;
        this.resultRecord = {};
        this.isShowCode = false; //根据外呼和是否接通不同，显示码值不同，默认外呼和接通都为是
        this.isShowPhone = false;
        this.areSponse1 = [];
        this.areSponse2 = [];
        this.msgs = [];
        // customerNote(template) {
        //     this.teleMarketingHttpService.selectMsgTemplate({ templateId: template }).subscribe(data => {
        //         if (data.returnCode.code == 'success') {
        //             let str = data.resultList[0].msgContent;
        //             let t = str.replace(/\[custNo\]/g, this.dataList.obCustomercode)
        //                 .replace(/\[custName\]/g, this.dataList.obName)
        //                 .replace(/\[custPhoneNo\]/g, this.dataList.obPhone);//客户号码替换
        //             this.teleMarketingBean.messToCusCon = t;
        //         }
        //     })
        // }
        //客户号码的监听事件
        this.obPhoneWatcher = {
            parent: this,
            run: function () {
                this.init();
                this.watch();
            },
            init: function () {
                this.phoneNumber = this.current();
            },
            current: function () {
                var ret = '';
                var dataMap = JSON.parse(JSON.parse(this.parent.commfunc.getSessionDataCH('dxlc')).dataMap);
                ret = dataMap.obPhone;
                return ret;
            },
            phoneNumber: '',
            handle: null,
            watch: function () {
                var _this = this;
                this.handle = setInterval(function () {
                    var current = _this.current(); //改变的值
                    if (current != _this.phoneNumber) { //不相同时，赋予子页面改变的值
                        _this.outputData();
                        _this.phoneNumber = current;
                    }
                }, 50);
            },
            outputData: function () {
                this.parent.dataList.obPhone = this.current(); //赋予子页面改变的值
                this.parent.ManageNote();
                if (this.parent.dataList.obCustomercode && this.parent.dataList.obCustomercode != 'undefined') {
                }
                else {
                    this.parent.dataList.obCustomercode = '';
                }
                if (this.parent.dataList.obName && this.parent.dataList.obName != 'undefined') {
                }
                else {
                    this.parent.dataList.obName = '';
                }
                if (this.parent.dataList.obPhone && this.parent.dataList.obPhone != '***') {
                }
                else {
                    this.parent.dataList.obPhone = '';
                }
                this.parent.teleMarketingBean.messToPlaCon = "您好，您有一个贷款意向客户。客户号：" + this.parent.dataList.obCustomercode + ",客户姓名：" + this.parent.dataList.obName + ",联系方式：" + this.parent.dataList.obPhone; //短信通知运营平台
            },
            stopWatching: function () {
                if (this.handle) {
                    clearInterval(this.handle); //消除监听方法
                }
            }
        };
        this.codeValues(); //调用方法，获取全部码值
        this.AnotConnect = this.code['AnotConnec'];
        this.areSponse = this.code['AreSponse'];
        this.areSponse1 = this.code['AreSponse1'];
        this.areSponse2 = this.code['AreSponse2'];
        this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
    }
    ContactRecordDeploy.prototype.ngOnInit = function () {
        debugger;
        if (this.commfunc.getSessionDataCH('markFlag') == '1') {
            //未处理过的
            this.teleMarketingBean.acall = '1'; //是否外呼-默认是
            this.teleMarketingBean.aisconnect = '1'; //电话是否接通-默认是
            if (this.dataList.workEffortParentId == '01') { //直销
                this.teleMarketingBean.messToManger = '0'; //短信通知客户经理-默认通知
                this.teleMarketingBean.messToPla = '0'; //通知运营平台-默认通知
                this.teleMarketingBean.messToCus = '0'; //短信通知客户-默认不通知
                // this.changeCustType('1');//短信通知客户经理
                // this.changeCustType('3');//通知运营平台
            }
            else if (this.dataList.workEffortParentId == '16') { //信用卡直销
                this.teleMarketingBean.messToManger = '0'; //短信通知客户经理-不通知
                this.teleMarketingBean.messToPla = '0';
                this.teleMarketingBean.messToCus = '0';
            }
            else if (this.dataList.workEffortParentId == '17') { //批量预授信转授信
                this.teleMarketingBean.messToManger = '0'; //短信通知客户经理-不通知
                this.teleMarketingBean.messToPla = '0';
                this.teleMarketingBean.messToCus = '0';
            }
            // this.changeCustType('5');//短信通知客户
            this.changeCustType('');
            this.change(); //默认初始化
        }
        else {
            this.echo();
        }
        this.obPhoneWatcher.run();
    };
    ContactRecordDeploy.prototype.ngOnChanges = function () {
        this.echo();
        // this.ManageNote();
    };
    //单选按钮
    ContactRecordDeploy.prototype.changeCustType = function (item) {
        debugger;
        if (item == '1' && this.teleMarketingBean.messToManger == '1') { //短信通知客户经理-通知
            this.ManageNote();
        }
        else if (item == '2' && this.teleMarketingBean.messToManger == '0') { //短信通知客户经理-不通知
            this.teleMarketingBean.messToMangerCon = '';
        }
        if (item == '3' && this.teleMarketingBean.messToPla == '1' && !this.teleMarketingBean.messToPlaCon) { //短信通知运营平台-通知
            if (this.dataList.obCustomercode && this.dataList.obCustomercode != 'undefined') {
            }
            else {
                this.dataList.obCustomercode = '';
            }
            if (this.dataList.obName && this.dataList.obName != 'undefined') {
            }
            else {
                this.dataList.obName = '';
            }
            if (this.dataList.obPhone && this.dataList.obPhone != '***') {
            }
            else {
                this.dataList.obPhone = '';
            }
            this.teleMarketingBean.messToPlaCon = "您好，您有一个贷款意向客户。客户号：" + this.dataList.obCustomercode + ",客户姓名：" + this.dataList.obName + ",联系方式：" + this.dataList.obPhone; //短信通知运营平台
        }
        else if (item == '4' && this.teleMarketingBean.messToPla == '0') { //短信通知运营平台-不通知
            this.teleMarketingBean.messToPlaCon = '';
        }
        // if (this.dataList.workEffortTypeId=='16'&&item == '5' && this.teleMarketingBean.messToCus == '1') {//信用卡直销
        //     this.customerNote('');
        // }else if (this.dataList.workEffortTypeId!='16'&&item == '5' && this.teleMarketingBean.messToCus == '1') {//短信通知客户-通知直销业务
        //     this.customerNote('0020');
        // } else if (item == '6' && this.teleMarketingBean.messToCus == '0') {//短信通知客户-不通知
        //     this.teleMarketingBean.messToCusCon = '';
        // }
        // 外呼为是，接通为是
        if (item == '' && this.teleMarketingBean.acall == '1' && this.teleMarketingBean.aisconnect == '1') {
            this.isOperte = true;
            this.isShowCode = false;
            this.isShowPhone = false;
            this.teleMarketingBean.aresponse = null; //客户响应
            this.teleMarketingBean.anotconnect = null; //无法接通说明
            // 外呼为否，接通为否
        }
        else if (item == '' && this.teleMarketingBean.acall == '1' && this.teleMarketingBean.aisconnect == '2') { //无法接通说明为必输项
            this.isOperte = false;
            this.isShowPhone = true;
            this.teleMarketingBean.aresponse = this.areSponse2[this.areSponse2.length - 1].value; //客户响应把无法接通写在这个数组的最后一个默认为无法接通
            //外呼为否，接通为否
        }
        else if (item == '' && this.teleMarketingBean.acall == '0') {
            this.teleMarketingBean.aisconnect = '2';
            this.isOperte = true;
            this.isShowCode = true; //判断客户响应选择的码值显示不同
            this.isShowPhone = false;
            this.teleMarketingBean.aresponse = null; //客户响应
            this.teleMarketingBean.anotconnect = null; //无法接通说明
        }
    };
    //码值
    ContactRecordDeploy.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContactRecordDeploy.prototype.echo = function () {
        debugger;
        if (this.inValue && this.inValue.showflag == '1' && this.commfunc.getSessionDataCH('markFlag') == '1') { //待重拨
            this.outValue.emit(this.teleMarketingBean);
        }
        if (this.commfunc.getSessionDataCH('markFlag') == '2') { //已处理(全部置灰)
            this.isOperte = true;
            this.isShow = true;
            if (this.teleMarketingBean.anotconnect) { //外呼为是，接通为否
                //如果无法接通说明有值的话
                this.isShowPhone = true;
            }
            // 外呼为是，接通为是
            if (this.teleMarketingBean.acall == '1' && this.teleMarketingBean.aisconnect == '1') {
                this.isShowCode = false;
                this.isShowPhone = false;
                // 外呼为否，接通为否
            }
            else if (this.teleMarketingBean.acall == '0' && this.teleMarketingBean.aisconnect == '2') {
                this.isShowCode = true; //判断客户响应选择的码值显示不同
                this.isShowPhone = false;
            }
            this.resultRecord = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
            this.teleMarketingBean = this.resultRecord;
            console.log(this.teleMarketingBean);
        }
    };
    ContactRecordDeploy.prototype.change = function () {
        if (this.dataList.workEffortParentId == '01' || this.dataList.workEffortParentId == '20') {
            this.isShow2 = true;
            this.teleMarketingBean.messToCus = '0';
        }
        if (this.dataList.workEffortParentId == '16' || this.dataList.workEffortParentId == '21') {
            this.isShow3 = true;
        }
        if (this.dataList.workEffortParentId == '17' || this.dataList.workEffortParentId == '22') { //批量预授信(激活)
            this.isShow2 = true;
            this.isShow3 = true;
            if (this.teleMarketingBean.aresponse == '0401') { //意向办理
                this.teleMarketingBean.messToCus = '1';
            }
            else {
                this.teleMarketingBean.messToCus = '0';
            }
        }
    };
    //短信通知客户经理内容/通知客户
    ContactRecordDeploy.prototype.ManageNote = function () {
        var _this = this;
        this.teleMarketingHttpService.selectMsgTemplate({ templateId: '0022' }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var str = data.resultList[0].msgContent;
                if (_this.dataList.obCustomercode) {
                }
                else {
                    _this.dataList.obCustomercode = '';
                }
                if (_this.dataList.obName) {
                }
                else {
                    _this.dataList.obName = '';
                }
                if (_this.dataList.obPhone && _this.dataList.obPhone != '***') {
                }
                else {
                    _this.dataList.obPhone = '';
                }
                var t = str.replace(/\[custNo\]/g, _this.dataList.obCustomercode)
                    .replace(/\[custName\]/g, _this.dataList.obName)
                    .replace(/\[custPhoneNo\]/g, _this.dataList.obPhone); //客户号码替换
                _this.teleMarketingBean.messToMangerCon = t;
            }
        });
    };
    ContactRecordDeploy.prototype.ngOnDestroy = function () {
        this.obPhoneWatcher.stopWatching(); //退出此页面时运行
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactRecordDeploy.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContactRecordDeploy.prototype, "outValue", void 0);
    ContactRecordDeploy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-record-module',
            template: __webpack_require__(/*! ./contact-record-module.component.html */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.html"),
            styles: [__webpack_require__(/*! ./contact-record-module.component.scss */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        // 联络结果记录-配置化的界面
        ,
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_3__["TeleMarketingHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactRecordDeploy);
    return ContactRecordDeploy;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>联系类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"CONTACTTYPE\" [(ngModel)]=\"teleMarketingBean.contactType\" (onChange)=\"contactBtn($event)\" [disabled]=\"!showBtn\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>联系方式：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"ContactWay\" [(ngModel)]=\"teleMarketingBean.contactWay\" [disabled]=\"!showBtn\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>联系人名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.amanagerName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>联系时间：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{teleMarketingBean.obDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>联系客户名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.obName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户电话号码：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.obPhone}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-one bgcolor\" style=\"padding:0;\">\r\n        <contact-record-module [inValue]=\"inValue\" (outValue)=\"outValue($event)\" #ContactRecordDeploy></contact-record-module>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"sub('1')\" label=\"提交\" *ngIf=\"showBtn\"></button>\r\n        <button pButton type=\"button\" class=\"icoColor\" label=\"设为重拨\" (click)=\"sub('0')\" *ngIf=\"showBtn\"></button>\r\n        <!-- <button pButton type=\"button\" class=\"icoColor\" label=\"设为重拨\" *ngIf=\"showBtn&&isClickYL\"></button> -->\r\n        <button pButton type=\"button\" class=\"icoColor\" label=\"中止\" *ngIf=\"showBtn\" (click)=\"stop()\"></button>\r\n        <button pButton type=\"button\" (click)=\"returnClick()\" label=\"返回\"></button>\r\n        <button pButton type=\"button\" (click)=\"eleconsig()\" label=\"电子签约\" *ngIf=\"showBtns\" [disabled]=\"iseleconsig\"></button>\r\n    </div>\r\n</div>\r\n<!-- 提示 -->\r\n\r\n<p-growl [(value)]=\"msgs\" baseZIndex=\"1\"></p-growl>\r\n\r\n<!-- 提示是否确定重拨 -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 模态框 -->\r\n<p-dialog *ngIf=\"reasonDisplay\" [(visible)]=\"reasonDisplay\" [positionTop]=\"50\" width=\"900\" modal=\"true\" class=\"reasonDialog\">\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\" appValidation>请填写中止原因：</label>\r\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"中止原因\" [(ngModel)]=\"stopReason\"></textarea>\r\n        <div class=\"ui-g-12 text-c\">\r\n            <button pButton type=\"button\" label=\"保存\" (click)=\"stop2()\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .title {\n  text-align: right; }\n\n.ui-g .title-note {\n  text-align: right;\n  width: 11.3%; }\n\n.ui-g .gap-title {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.ui-g .gap-title .cantact-title {\n    padding-bottom: 0; }\n\n.ui-g .gap-title .cantact-title .title {\n      padding-bottom: 0; }\n\n.ui-g .gap-title .cantact-title .ui-g-6 {\n      padding-bottom: 0; }\n\n.ui-g .gap-title1 {\n  padding-bottom: 0; }\n\n.ui-g .gap-title1 .cantact-title {\n    padding-bottom: 0; }\n\n.ui-g .gap-title1 .cantact-title .title {\n      padding-bottom: 0; }\n\n.ui-g .gap-title1 .cantact-title .ui-g-6 {\n      padding-bottom: 0; }\n\n.ui-g .btn-switch {\n  text-align: center; }\n\n.icoColor {\n  background: #f8a900 !important;\n  cursor: pointer; }\n\n.text-c {\n  text-align: center; }\n\n.reasonDialog label {\n  display: inline-block;\n  width: 15%;\n  height: 120px;\n  vertical-align: top; }\n\n.reasonDialog textarea {\n  width: 85%;\n  height: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL2NvbnRhY3QtcmVjb3JkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcdGVsZW1hcmtldGluZ1xcY29udGFjdC1yZWNvcmRcXGNvbnRhY3QtcmVjb3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFOcEI7RUFTUSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQVZ0QjtJQVlZLGlCQUFpQixFQUFBOztBQVo3QjtNQWNnQixpQkFBaUIsRUFBQTs7QUFkakM7TUFpQmdCLGlCQUFpQixFQUFBOztBQWpCakM7RUFzQlEsaUJBQWlCLEVBQUE7O0FBdEJ6QjtJQXdCWSxpQkFBaUIsRUFBQTs7QUF4QjdCO01BMEJnQixpQkFBaUIsRUFBQTs7QUExQmpDO01BNkJnQixpQkFBaUIsRUFBQTs7QUE3QmpDO0VBa0NRLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLDhCQUE4QjtFQUM5QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRVEscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBTDNCO0VBUVEsVUFBVTtFQUNWLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vdGVsZW1hcmtldGluZy9jb250YWN0LXJlY29yZC9jb250YWN0LXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbm90ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDExLjMlO1xyXG4gICAgfVxyXG4gICAgLmdhcC10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLmNhbnRhY3QtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ2FwLXRpdGxlMSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLmNhbnRhY3QtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXN3aXRjaCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y4YTkwMCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dC1jIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlYXNvbkRpYWxvZyB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContactRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRecord", function() { return ContactRecord; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var _bean_telemarketing_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/telemarketing.bean */ "./src/app/pages/tzb/custom/telemarketing/bean/telemarketing.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_record_module_contact_record_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-record-module/contact-record-module.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telemarketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../telemarketing.component */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.ts");
/* harmony import */ var _customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../customCenter/customer-distribution/bean/business-information.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_custom_group_bean_AppproResult_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/custom-group/bean/AppproResult.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/AppproResult.bean.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ContactRecord = /** @class */ (function () {
    function ContactRecord(teleMarketingHttpService, commfunc, activatedRoute, router, confirmationService) {
        var _this = this;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.commfunc = commfunc;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.confirmationService = confirmationService;
        this.iseleconsig = false;
        this.showBtns = false;
        this.teleMarketingBean = new _bean_telemarketing_bean__WEBPACK_IMPORTED_MODULE_2__["TeleMarketingBean"]();
        this.appproResultBean = new _customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_9__["AppproResultBean"]();
        // teleMarketingBean: any = {};
        this.msgs = [];
        this.ContactType = [];
        this.custBasic = {};
        this.CONTACTTYPE = [];
        this.ContactWay = [];
        this.tapeInfo = {};
        this.ex = [];
        this.bussinessMap = new app_pages_tzb_exam_appr_comp_custom_custom_group_bean_AppproResult_bean__WEBPACK_IMPORTED_MODULE_10__["BussinessMap"]();
        this.setDate = {};
        this.obDate = new Date();
        this.showBtn = false;
        this.isClickYL = false; //可点
        this.reasonDisplay = false;
        this.isTelemarketingList = false; //经办人是否是当前登录人
        //客户号码的监听事件
        this.obPhoneWatcher = {
            parent: this,
            run: function () {
                this.init();
                this.watch();
            },
            init: function () {
                this.phoneNumber = this.current();
            },
            current: function () {
                var ret = '';
                var dataMap = JSON.parse(JSON.parse(this.parent.commfunc.getSessionDataCH('dxlc')).dataMap);
                ret = dataMap.obPhone;
                return ret;
            },
            phoneNumber: '',
            handle: null,
            watch: function () {
                var _this = this;
                this.handle = setInterval(function () {
                    var current = _this.current(); //改变的值
                    if (current != _this.phoneNumber) { //不相同时，赋予子页面改变的值
                        _this.outputData();
                        _this.phoneNumber = current;
                    }
                }, 50);
            },
            outputData: function () {
                this.parent.dataList.obPhone = this.current(); //赋予子页面改变的值
            },
            stopWatching: function () {
                if (this.handle) {
                    clearInterval(this.handle); //消除监听方法
                }
            }
        };
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.userName = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName;
        this.bpmalldata = JSON.parse(this.commfunc.getSessionDataCH('bpmalldata'));
        this.dataList2 = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
        if (this.commfunc.getSessionDataCH('bpmalldata')) {
            var params = {
                'workEffortId': this.bpmalldata.varMap.dataMap.workEffortIdParent,
            };
            this.teleMarketingHttpService.queryCreditData(params).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    _this.businessType = data.creditMap.businessType;
                    _this.creditType = data.creditMap.creditType;
                    _this.custRequestNo = data.creditMap.custRequestNo;
                    _this.dzqy();
                    if (_this.businessType == '01' && _this.creditType == '0001') {
                        _this.showBtns = true;
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
                }
            });
        }
        // if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
        //     this.littleClassName = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassName;
        //     this.bigClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).bigClassNo;
        //     this.littleClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassNo;
        //     this.bigClassName = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).bigClassName;
        //     this.Historyflag = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).Historyflag;
        // }
    }
    ContactRecord.prototype.ngOnInit = function () {
        var _this = this;
        if (this.commfunc.getSessionDataCH('markFlag') == '2') { //已处理的数据
            this.markFlag = this.commfunc.getSessionDataCH('markFlag');
            // this.showBtn = false;
            if (JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap) {
                this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
                if (this.dataList.obDate && this.dataList.obTime) {
                    this.teleMarketingBean.obDate = this.dataList.obDate + '  ' + this.dataList.obTime;
                }
                else {
                    this.teleMarketingBean.obDate = this.dataList.obDate;
                }
            }
            if (this.dataList.contactType) {
                //联系类型
                var params_1 = {
                    pageNum: 1,
                    pageSize: 99999999,
                    contactMechTypeId: this.dataList.contactType,
                };
                this.teleMarketingHttpService.queryContactMechTypeList(params_1).subscribe(function (data) {
                    var arr1 = data.contactMechTypeList;
                    if (arr1) {
                        _this.CONTACTTYPE.push({ label: arr1[0].description, value: arr1[0].contactMechTypeId });
                        _this.teleMarketingBean.contactType = arr1[0].contactMechTypeId;
                    }
                });
            }
            if (this.dataList.contactWay) {
                //联系方式
                var param = {
                    pageNum: 1,
                    pageSize: 99999999,
                    communicationEventTypeId: this.dataList.contactWay,
                };
                this.teleMarketingHttpService.queryCommunicationEventTypeList(param).subscribe(function (data) {
                    var arr = data.communicationEventTypeList;
                    if (arr) {
                        _this.ContactWay.push({ label: arr[0].description, value: arr[0].communicationEventTypeId });
                        _this.teleMarketingBean.contactWay = arr[0].communicationEventTypeId;
                    }
                });
            }
        }
        else { //未处理
            if (this.obDate) {
                this.teleMarketingBean.obDate = this.commfunc.transDateN(this.obDate);
            }
            this.cantactClick();
            if (JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap) {
                this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
                this.taskId = JSON.parse(this.commfunc.getSessionDataCH('dxlc')).taskId;
            }
            // this.showBtn = true;
        }
        var params = {
            workEffortId: this.dataList.taskId,
            workEffortParentId: this.dataList.workEffortParentId,
            workEffortTypeId: this.dataList.workEffortTypeId
        };
        this.teleMarketingHttpService.queryCustCommunicationWorkList(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.returnList[0].createPartyId == _this.userId) { //登录人是经办人时
                    _this.showBtn = true;
                }
                if (data.returnList[0].taskStatus) { //未处理
                    var markFlag = void 0;
                    switch (data.returnList[0].taskStatus) {
                        case '1' || '12': //已处理\中止
                            markFlag = 2;
                        default: markFlag = 1;
                    }
                    _this.commfunc.setSessionDataCH('markFlag', markFlag);
                    _this.contactRecordDeploy.ngOnInit();
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
        this.obPhoneWatcher.run(); //初始化
    };
    ContactRecord.prototype.outValue = function (event) {
        debugger;
        console.log(this.dataList);
        console.log(event);
        this.teleMarketingBean = jquery__WEBPACK_IMPORTED_MODULE_7__["extend"](event, this.dataList, this.teleMarketingBean); //合并对象
        this.bussinessMap['dataMap'] = this.teleMarketingBean;
        console.log(this.dataList);
        this.subMintBtn();
    };
    //提交
    ContactRecord.prototype.sub = function (num) {
        this.inValue = { showflag: '1' };
        this.index = num;
    };
    ContactRecord.prototype.eleconsig = function () {
        var _this = this;
        if (this.businessType == '01' && this.creditType == '0001') {
            this.confirmationService.confirm({
                message: '该客户进行电子签约?',
                accept: function () {
                    var pamse = {
                        'custRequestNo': _this.custRequestNo,
                    };
                    _this.teleMarketingHttpService.creationContractDitel(pamse).subscribe(function (data) {
                        if (data.returnCode.code === 'success') {
                            _this.dzqy();
                            _this.msgs = [];
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
                }
            });
        }
    };
    ContactRecord.prototype.dzqy = function () {
        var _this = this;
        var pams = {
            custRequestNo: this.custRequestNo,
        };
        this.teleMarketingHttpService.selectContractDitel(pams).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.signStatus = data.infoList[0].signStatus;
                _this.agreementId = data.infoList[0].agreementId;
                _this.seqno = data.infoList[0].seqNo;
                if (_this.signStatus == '02' || _this.signStatus == '01' || _this.signStatus == '03') {
                    _this.iseleconsig = true;
                }
                else if (_this.signStatus == '04' || _this.signStatus == '') {
                    _this.iseleconsig = false;
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误:', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    ContactRecord.prototype.subMintBtn = function () {
        var _this = this;
        if (this.teleMarketingBean.acall == '1' && this.teleMarketingBean.aisconnect == '1') { //外呼为是，接通为是
            if (!this.teleMarketingBean.aresponse) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '客户响应不能为空' });
                return;
            }
        }
        if (this.teleMarketingBean.acall == '1' && this.teleMarketingBean.aisconnect == '2') { //外呼为是，接通为否
            if (!this.teleMarketingBean.anotconnect) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '无法接通原因说明不能为空' });
                return;
            }
        }
        if (this.teleMarketingBean.acall == '0') { //外呼为否
            if (!this.teleMarketingBean.aresponse) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '客户响应不能为空' });
                return;
            }
        }
        this.tapeInfo = JSON.parse(this.commfunc.getSessionDataCH('tapeInfo')); //录音文件名
        this.setDate = JSON.parse(this.commfunc.getSessionDataCH('setDate')); //流水号
        if (this.setDate) {
            this.teleMarketingBean.aconnectid = this.setDate.aconnectid; //流水号
            // this.teleMarketingBean.obDate = this.setDate.obDate;
        }
        if (this.tapeInfo) {
            this.teleMarketingBean.aucid = this.tapeInfo.aucid; //录音文件名
        }
        console.log(this.tapeInfo);
        this.teleMarketingBean.oboperid = this.userId;
        this.teleMarketingBean.oboperName = this.userName;
        var obTime = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('HH:mm:ss');
        this.teleMarketingBean.obTime = obTime;
        if (this.index == '1') { //提交
            // this.isClickYL = true;
            this.teleMarketingBean.flag = '1';
            this.addCustBtn();
        }
        else if (this.index == '0') {
            this.teleMarketingBean.flag = '0';
            this.confirmationService.confirm({
                message: '确认要重拨吗',
                accept: function () {
                    // this.isClickYL = true;//重拨
                    _this.addCustBtn();
                },
            });
        }
    };
    //重拨和提交的接口
    ContactRecord.prototype.addCustBtn = function () {
        var _this = this;
        this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
        this.teleMarketingBean.obPhone = this.dataList.obPhone;
        var abusinesscode = '';
        if (this.dataList.workEffortParentId) {
            switch (this.dataList.workEffortParentId) {
                case '01' || '20':
                    abusinesscode = '010104';
                    break; //枢纽直销
                case '16' || '21':
                    abusinesscode = '010105';
                    break; //信用卡直销 
                case '17' || '22':
                    abusinesscode = '010701';
                    break; //批量预授信
            }
        }
        this.teleMarketingBean['abusinesscode'] = abusinesscode;
        this.teleMarketingHttpService.addCustCommunication(this.teleMarketingBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (_this.index == '1') {
                    _this.bpmNext(); //是提交的时候调next接口
                }
                else {
                    // this.isClickYL = false;//重拨
                    _this.commfunc.clearSession('tapeInfo'); //录音文件名
                    _this.commfunc.clearSession('setDate'); //流水号
                    _this.router.navigate(['/pages/tzb/custom/teleMarketing/telemarketing-list', { bussType: _this.dataList.workEffortParentId }]);
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                // this.isClickYL = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            // this.isClickYL = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //联系类型
    ContactRecord.prototype.cantactClick = function () {
        var _this = this;
        var params = {
            pageNum: 1,
            pageSize: 99999999
        };
        this.teleMarketingHttpService.queryContactMechTypeList(params).subscribe(function (data) {
            var arr = data.contactMechTypeList;
            _this.CONTACTTYPE = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.CONTACTTYPE.push({ label: item.description, value: item.contactMechTypeId });
                });
            }
        });
    };
    //联系方式是根据联系类型进行判断显示
    ContactRecord.prototype.contactBtn = function (event) {
        var _this = this;
        if (event.value == '') {
            this.teleMarketingBean.contactWay = '';
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择联系类型' });
            return;
        }
        var params = {
            pageNum: 1,
            pageSize: 99999999,
            contactMechTypeId: event.value
        };
        this.teleMarketingHttpService.queryCommunicationEventTypeList(params).subscribe(function (data) {
            var arr = data.communicationEventTypeList;
            _this.ContactWay = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.ContactWay.push({ label: item.description, value: item.communicationEventTypeId });
                });
            }
        });
    };
    //next 接口
    ContactRecord.prototype.bpmNext = function () {
        var _this = this;
        this.appproResultBean.bussinessMap = this.bussinessMap;
        this.appproResultBean.userId = this.userId;
        this.appproResultBean.taskId = this.taskId;
        this.teleMarketingHttpService.bpmNextTask(this.appproResultBean).subscribe(function (data) {
            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (data.returnCode.code == 'success') {
                _this.ex = [];
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_1 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                }
                // this.isClickYL = false;
                _this.commfunc.clearSession('markFlag');
                _this.commfunc.clearSession('tapeInfo'); //录音文件名
                _this.commfunc.clearSession('setDate'); //流水号
                _this.returnClick(); //返回上一页
                // window.history.go(-1)
                // this.router.navigate(['/pages/tzb/custom/teleMarketing/outer-rask']);
            }
            else {
                _this.ex = [];
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_2 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                }
                // this.isClickYL = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.ex = [];
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            // this.isClickYL = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //点击返回
    ContactRecord.prototype.returnClick = function () {
        /**
        * 从任务池跳转过来的
        */
        if (this.commfunc.getSessionDataCH('taskpooltype') && this.commfunc.getSessionDataCH('taskpooltype').toString() == 'false') {
            this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page9/task-pool'], { queryParams: { flag: '5', totalNum: '10' } });
        }
        else {
            console.log(this.activatedRoute.snapshot.params);
            this.router.navigate(['/pages/tzb/custom/teleMarketing/telemarketing-list', this.activatedRoute.snapshot.params]);
        }
    };
    //中止
    ContactRecord.prototype.stop = function () {
        this.reasonDisplay = true;
    };
    ContactRecord.prototype.stop2 = function () {
        var _this = this;
        if (!this.stopReason) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '中止原因必输' });
            return;
        }
        var params = {
            workEffortId: this.dataList.taskId,
            reason: this.stopReason
        };
        this.teleMarketingHttpService.terminateCommunication(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.reasonDisplay = false;
                setTimeout(function () {
                    _this.router.navigate(['/pages/tzb/custom/teleMarketing/telemarketing-list']);
                }, 500);
                _this.msgs = [];
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
    ContactRecord.prototype.ngOnDestroy = function () {
        this.obPhoneWatcher.stopWatching();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ContactRecordDeploy'),
        __metadata("design:type", _contact_record_module_contact_record_module_component__WEBPACK_IMPORTED_MODULE_6__["ContactRecordDeploy"])
    ], ContactRecord.prototype, "contactRecordDeploy", void 0);
    ContactRecord = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-record',
            template: __webpack_require__(/*! ./contact-record.component.html */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.html"),
            styles: [__webpack_require__(/*! ./contact-record.component.scss */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.scss")],
            providers: [_telemarketing_component__WEBPACK_IMPORTED_MODULE_8__["TeleMarketingComponent"], _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"], _contact_record_module_contact_record_module_component__WEBPACK_IMPORTED_MODULE_6__["ContactRecordDeploy"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        })
        // 联络结果记录
        ,
        __metadata("design:paramtypes", [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], ContactRecord);
    return ContactRecord;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts ***!
  \*******************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    addCustCommunication: 'addCustCommunication',
    queryLoanDetailInfo: 'queryLoanDetailInfo',
    queryPreCreditDetailInfo: 'queryPreCreditDetailInfo',
    terminateCommunication: 'terminateCommunication',
    BZ_11003000105_02: 'BZ_11003000105_02',
    queryHistoryCommunicationEventResultDetail: 'queryHistoryCommunicationEventResultDetail',
    selectCustBriefInfo: 'selectCustBriefInfo',
    queryContactMechTypeList: 'queryContactMechTypeList',
    queryCommunicationEventTypeList: 'queryCommunicationEventTypeList',
    queryHistoryCommunicationEventResultList: 'queryHistoryCommunicationEventResultList',
    queryCustCommunicationList: 'queryCustCommunicationList',
    queryCustCommunicationDetail: 'queryCustCommunicationDetail',
    getSoftphoneInfo: 'getSoftphoneInfo',
    bpmNextTask: 'bpmNextTask',
    creationContractDitel: 'creationContractDitel',
    queryCustCommunicationWorkList: 'queryCustCommunicationWorkList',
    custCommunicationExport: 'custCommunicationExport',
    selectMsgTemplate: 'selectMsgTemplate',
    queryCustContactNumbers: 'queryCustContactNumbers',
    isCommunicationPost: 'isCommunicationPost',
    batchAllotCommunication: 'batchAllotCommunication',
    batchActivate: 'batchActivate',
    signAffirm: 'signAffirm',
    queryCreditData: 'queryCreditData',
    selectContractDitel: 'selectContractDitel',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TeleMarketingHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingHttpService", function() { return TeleMarketingHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telemarketing.constant */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeleMarketingHttpService = /** @class */ (function () {
    function TeleMarketingHttpService(httpService) {
        this.httpService = httpService;
    }
    //电销批量分配 by zj 20190615
    TeleMarketingHttpService.prototype.batchAllotCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].batchAllotCommunication, params);
    };
    //电销批量激活 by zj 20190615
    TeleMarketingHttpService.prototype.batchActivate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].batchActivate, params);
    };
    TeleMarketingHttpService.prototype.queryCreditData = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCreditData, params);
    };
    //电销
    TeleMarketingHttpService.prototype.addCustCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].addCustCommunication, params);
    };
    //查询贷款产品信息
    TeleMarketingHttpService.prototype.queryLoanDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryLoanDetailInfo, params);
    };
    TeleMarketingHttpService.prototype.signAffirm = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].signAffirm, params);
    };
    TeleMarketingHttpService.prototype.creationContractDitel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].creationContractDitel, params);
    };
    TeleMarketingHttpService.prototype.selectContractDitel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectContractDitel, params);
    };
    //查询单笔批量预授信信息
    TeleMarketingHttpService.prototype.queryPreCreditDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPreCreditDetailInfo, params);
    };
    //外呼业务禁拨名单查询
    TeleMarketingHttpService.prototype.BZ_11003000105_02 = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].BZ_11003000105_02, params);
    };
    //中止联系事件
    TeleMarketingHttpService.prototype.terminateCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].terminateCommunication, params);
    };
    //新增联络历史详情查询
    TeleMarketingHttpService.prototype.queryHistoryCommunicationEventResultDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryHistoryCommunicationEventResultDetail, params);
    };
    //客户信息
    TeleMarketingHttpService.prototype.selectCustBriefInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectCustBriefInfo, params);
    };
    TeleMarketingHttpService.prototype.queryContactMechTypeList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryContactMechTypeList, params);
    };
    TeleMarketingHttpService.prototype.queryCommunicationEventTypeList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCommunicationEventTypeList, params);
    };
    TeleMarketingHttpService.prototype.queryHistoryCommunicationEventResultList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryHistoryCommunicationEventResultList, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationList, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationDetail, params);
    };
    TeleMarketingHttpService.prototype.getSoftphoneInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getSoftphoneInfo, params);
    };
    TeleMarketingHttpService.prototype.bpmNextTask = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].bpmNextTask, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationWorkList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationWorkList, params);
    };
    TeleMarketingHttpService.prototype.custCommunicationExport = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].custCommunicationExport, params);
    };
    TeleMarketingHttpService.prototype.selectMsgTemplate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectMsgTemplate, params);
    };
    //客户号码查询
    TeleMarketingHttpService.prototype.queryCustContactNumbers = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustContactNumbers, params);
    };
    //校验是否是登录人电销
    TeleMarketingHttpService.prototype.isCommunicationPost = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].isCommunicationPost, params);
    };
    TeleMarketingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TeleMarketingHttpService);
    return TeleMarketingHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/outer-rask/bean/outer-rask.bean.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/outer-rask/bean/outer-rask.bean.ts ***!
  \***********************************************************************************/
/*! exports provided: OuterRaskBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterRaskBean", function() { return OuterRaskBean; });
var OuterRaskBean = /** @class */ (function () {
    function OuterRaskBean() {
    }
    return OuterRaskBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'外拨业务任务列表'\"></header-title>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务类型：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <p-dropdown [options]=\"TaskType\" [(ngModel)]=\"bussType\" (onChange)=\"BussType($event)\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务名称：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.taskName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务状态：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <p-dropdown [options]=\"TaskStatus\" [(ngModel)]=\"outerRaskBean.taskStatus\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"isShowPage\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">任务发布日期：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"fromDate\" [maxDate]=\"thruDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n                至\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"thruDate\" [minDate]=\"fromDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">发布天数：</div>\r\n            <div class=\"ui-g-8\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.iussDays\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">客户来源：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"custSource\" [(ngModel)]=\"outerRaskBean.customerSource\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"isShowPage\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">有无点击：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isClick\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">有无申请：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isApplyFor\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">申请审批状态：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"approve\" [(ngModel)]=\"outerRaskBean.approveStatus\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户号：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obCustomercode\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户名称：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">手机号码：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obPhone\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电话是否外呼：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.acall\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电话是否接通：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isconnet\" [(ngModel)]=\"outerRaskBean.aisconnect\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户响应：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"areSponse2\" [(ngModel)]=\"outerRaskBean.aresponse\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">无法接通原因：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"AnotConnect\" [(ngModel)]=\"outerRaskBean.anotconnect\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电销人员：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.oboperName\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">外拨次数：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.callCounts\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">外呼日期：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"onchange1()\"\r\n                [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n            至\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"onchange1()\" [showOtherMonths]=\"false\"\r\n                class=\"calendar-data\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">备注：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.remark\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\" *ngIf=\"!isShowPage\">\r\n        <div class=\"ui-g-4 tit\">是否授信：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isCredit\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"!isShowPage\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">授信日期：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    [locale]=\"ch\" [showOtherMonths]=\"false\" [(ngModel)]=\"creditDate\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n        <span class=\"icoColor\" (click)=\"resetClick()\">重置</span>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:right\">\r\n        <span class=\"icoColor2\" (click)=\"raskQuery()\">导出excel表格</span>\r\n    </div>\r\n    <!-- 直销业务 -->\r\n    <div class=\"ui-g-12 base-table\" *ngIf=\"!isShowPage\">\r\n        <p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column field=\"\" header=\"任务类型\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:TaskType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"taskStatus\" header=\"任务状态\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.taskStatus|codeValuePie:TaskStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"obCustomercode\" header=\"客户号\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"obName\" header=\"客户姓名\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obPhone\" header=\"手机号码\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"acall\" header=\"电话是否外呼\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.acall|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aisconnect\" header=\"电话是否接通\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aisconnect|codeValuePie:isconnet}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aresponse\" header=\"客户响应\" [style]=\"{'width':'127px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aresponse|codeValuePie:areSponse2}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"anotconnect\" header=\"无法接通原因\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.anotconnect|codeValuePie:AnotConnect}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"oboperName\" header=\"电销人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"callCounts\" header=\"外拨次数\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obDate\" header=\"外呼时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'70px','overflow':'hidden','white-space':'nowrap','text-overflow':'ellipsis'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a class=\"colorImport\" title=\"{{col.remark}}\">{{col.remark}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n            <p-column field=\"isCredit\" header=\"是否授信\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isCredit|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditDate\" header=\"授信日期\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"createDate\" header=\"任务创建日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{outerRaskBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <!-- 信用卡直销 -->\r\n    <div class=\"ui-g-12 base-table\" *ngIf=\"isShowPage\">\r\n        <p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column field=\"\" header=\"任务类型\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:TaskType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"taskStatus\" header=\"任务状态\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.taskStatus|codeValuePie:TaskStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"fromDate\" header=\"任务发布日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"iussDays\" header=\"发布天数\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"customerSource\" header=\"客户来源\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.customerSource|codeValuePie:custSource}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isClick\" header=\"有无点击\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isClick|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isApplyFor\" header=\"有无申请\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isApplyFor|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"approveStatus\" header=\"申请审批状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.approveStatus|codeValuePie:approve}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"obCustomercode\" header=\"客户号\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"obName\" header=\"客户姓名\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obPhone\" header=\"手机号码\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"acall\" header=\"电话是否外呼\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.acall|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aisconnect\" header=\"电话是否接通\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aisconnect|codeValuePie:isconnet}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aresponse\" header=\"客户响应\" [style]=\"{'width':'127px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aresponse|codeValuePie:areSponse2}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"anotconnect\" header=\"无法接通原因\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.anotconnect|codeValuePie:AnotConnect}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"oboperName\" header=\"电销人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"callCounts\" header=\"外拨次数\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obDate\" header=\"外呼时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'70px','overflow':'hidden','white-space':'nowrap','text-overflow':'ellipsis'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a class=\"colorImport\" title=\"{{col.remark}}\">{{col.remark}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{outerRaskBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n.icoColor2 {\n  display: inline-block;\n  text-align: center;\n  line-height: 26px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #f8a900;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px;\n  min-width: 160px;\n  min-height: 26px; }\n\n.icoColor2:hover {\n  background-color: #e39b00; }\n\n.tit {\n  text-align: right; }\n\n:host/deep/ .calendar-data .ui-calendar {\n  border-radius: 5px;\n  width: 46.7%;\n  min-width: 100px;\n  border-bottom: none; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  padding: 1em 1em;\n  height: 90% !important; }\n\n.colorImport:hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL291dGVyLXJhc2svRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx0ZWxlbWFya2V0aW5nXFxvdXRlci1yYXNrXFxvdXRlci1yYXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vdGVsZW1hcmtldGluZy9vdXRlci1yYXNrL291dGVyLXJhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb0NvbG9yMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE5MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5pY29Db2xvcjI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzOWIwMDtcclxufVxyXG5cclxuLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhbGVuZGFyLWRhdGEgLnVpLWNhbGVuZGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA0Ni43JTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xyXG4gICAgaGVpZ2h0OiA5MCUhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvckltcG9ydDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OutRask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutRask", function() { return OutRask; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/outer-rask.bean */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/bean/outer-rask.bean.ts");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OutRask = /** @class */ (function () {
    function OutRask(commfunc, router, teleMarketingHttpService, customeHttpService, activatedRoute) {
        this.commfunc = commfunc;
        this.router = router;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRoute = activatedRoute;
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.TaskType = [];
        this.dataList = [];
        this.isPanduan = []; //判断是否
        this.AnotConnect = [];
        this.areSponse = [];
        this.first = 0; //分页控制
        this.startDate = null;
        this.endDate = null;
        this.outerRaskBean = new _bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_4__["OuterRaskBean"]();
        this.msgs = []; //提示信息
        this.TaskStatus = []; //任务状态
        this.isconnet = []; //是否接通
        this.DOWNLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"];
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.areSponse2 = [];
        this.approve = [];
        this.custSource = [];
        this.isShowPage = false;
        this.codeValues(); //调用方法，获取全部码值
        this.TaskType = this.code['DXRASKTYPE']; //任务类型
        this.isPanduan = this.code['IsPanduan']; //判断是否
        this.isconnet = this.code['ISCONNET']; //电话是否接通
        this.AnotConnect = this.code['AnotConnec'];
        this.areSponse2 = this.code['AreSponse2'];
        this.TaskStatus = this.code['TASKSTATUS']; //任务状态
        this.approve = this.code['APPROVE']; //申请状态
        this.custSource = this.code['CUSTSOURCE']; //客户来源
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        // this.littleClassName = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassName;
        // this.bigClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).bigClassNo;
        // this.littleClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassNo;
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('dxlc')) {
            this.commfunc.clearSession('dxlc');
        }
        if (this.commfunc.getSessionDataCH('tapeInfo')) {
            this.commfunc.clearSession('tapeInfo'); //录音文件名
        }
        if (this.commfunc.getSessionDataCH('setDate')) {
            this.commfunc.clearSession('setDate'); //流水号
        }
    }
    OutRask.prototype.ngOnInit = function () {
        var _this = this;
        var paremse = {};
        this.teleMarketingHttpService.isCommunicationPost(paremse).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.paramMap.directSellingToElectricSelling == '1' && data.paramMap.custCommunicationPost == '1') {
                    _this.TaskType.unshift({ label: "请选择", value: " " });
                    _this.bussType = '';
                    _this.outerRaskBean.workEffortTypeId = null;
                    _this.bussTypes = '';
                    _this.workEffortParentIds = null;
                }
                else if (data.paramMap.directSellingToElectricSelling == '0' && data.paramMap.custCommunicationPost == '0') {
                    _this.TaskType.unshift({ label: "请选择", value: " " });
                    _this.bussType = '';
                    _this.outerRaskBean.workEffortTypeId = null;
                    _this.bussTypes = '';
                    _this.workEffortParentIds = null;
                }
                else {
                    if (data.paramMap.custCommunicationPost == '0') {
                        var TaskTypes_1 = [];
                        _this.TaskType.forEach(function (items) {
                            if (items.value == '16') {
                            }
                            else {
                                TaskTypes_1.push(items);
                            }
                        });
                        _this.TaskType = TaskTypes_1;
                        _this.bussType = '01';
                        _this.outerRaskBean.workEffortTypeId = '14';
                        _this.bussTypes = '01';
                        _this.workEffortParentIds = '14';
                    }
                    else if (data.paramMap.custCommunicationPost == '1') {
                        var TaskTypes_2 = [];
                        _this.TaskType.forEach(function (items) {
                            if (items.value == '01') {
                            }
                            else {
                                TaskTypes_2.push(items);
                            }
                        });
                        _this.TaskType = TaskTypes_2;
                        _this.bussType = '16';
                        _this.outerRaskBean.workEffortTypeId = '14';
                        _this.bussTypes = '16';
                        _this.workEffortParentIds = '14';
                    }
                }
                _this.bussType = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.bussType);
                _this.TaskType = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.TaskType);
                _this.CheckTask();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
        if (this.activatedRoute.snapshot.queryParams['flag'] == '2') {
            this.whFlag = '2'; //历史
        }
        else {
            this.whFlag = '1'; //历史
        }
    };
    //校验是否电销后查询
    OutRask.prototype.CheckTask = function () {
        var _this = this;
        if (this.commfunc.getSessionDataCH('raskBean')) {
            var parems_1 = JSON.parse(this.commfunc.getSessionDataCH('raskBean'));
            parems_1['commonHeader'] = '';
            this.teleMarketingHttpService.queryCustCommunicationWorkList(parems_1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.totalNum = data.totalCount;
                    _this.dataList = data.returnList;
                    _this.outerRaskBean = parems_1;
                    _this.outerRaskBean.pageNum = parems_1.pageNum;
                    _this.outerRaskBean.pageSize = parems_1.pageSize;
                    _this.first = (parems_1.pageNum - 1) * parems_1.pageSize;
                    _this.bussTypes = parems_1.workEffortParentId;
                    _this.bussType = parems_1.workEffortParentId;
                    _this.workEffortParentIds = parems_1.workEffortTypeId;
                    _this.raskbean = _this.outerRaskBean;
                    var parmeess = {
                        value: _this.bussType
                    };
                    _this.BussType(parmeess);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
                _this.commfunc.clearSession('raskBean');
            }, function (error) {
                _this.commfunc.clearSession('raskBean');
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else {
            var parmeess = {
                value: this.bussType
            };
            this.BussType(parmeess);
            this.queryClick();
        }
    };
    OutRask.prototype.BussType = function (event) {
        console.log(1);
        switch (event.value) {
            case '16':
                //信用卡直销
                this.isShowPage = true;
                break;
            default:
                this.isShowPage = false;
        }
        this.startDate = null;
        this.endDate = null;
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.outerRaskBean = new _bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_4__["OuterRaskBean"]();
        // this.dataList=[];//切换把表格清空
        if (event.value) {
            if (event.value == '01') {
                this.outerRaskBean.workEffortTypeId = '14';
            }
            else if (event.value == '16') {
                this.outerRaskBean.workEffortTypeId = '14';
            }
            else {
                this.outerRaskBean.workEffortTypeId = null;
            }
        }
        else {
            this.outerRaskBean.workEffortTypeId = null;
        }
    };
    //查询按钮
    OutRask.prototype.queryClick = function () {
        this.outerRaskBean.pageNum = 1;
        this.outerRaskBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //查询
    OutRask.prototype.query = function () {
        var _this = this;
        if (this.bussType) {
            this.outerRaskBean.workEffortParentId = this.bussType;
        }
        else {
            this.outerRaskBean.workEffortParentId = null;
        }
        this.outerRaskBean.endDate = this.commfunc.transDate(this.endDate);
        this.outerRaskBean.startDate = this.commfunc.transDate(this.startDate);
        this.outerRaskBean.creditDate = this.commfunc.transDateN(this.creditDate);
        this.outerRaskBean.fromDate = this.commfunc.transDateN(this.fromDate);
        this.outerRaskBean.thruDate = this.commfunc.transDateN(this.thruDate);
        this.teleMarketingHttpService.queryCustCommunicationWorkList(this.outerRaskBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.totalNum = data.totalCount;
                _this.dataList = data.returnList;
                _this.raskbean = _this.outerRaskBean;
            }
            else {
                _this.totalNum = 0;
                _this.dataList = [];
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.totalNum = 0;
            _this.dataList = [];
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //重置
    OutRask.prototype.resetClick = function () {
        this.startDate = null;
        this.endDate = null;
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.outerRaskBean = new _bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_4__["OuterRaskBean"]();
        this.querySecleReset();
    };
    //页码重置
    OutRask.prototype.querySecleReset = function () {
        this.outerRaskBean.pageNum = 1;
        this.outerRaskBean.pageSize = 10;
        this.first = 0;
        this.bussType = this.bussTypes;
        this.outerRaskBean.workEffortTypeId = this.workEffortParentIds;
        this.query();
    };
    OutRask.prototype.paginate = function (event) {
        //每页显示的条数
        this.outerRaskBean.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.outerRaskBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.outerRaskBean.pageSize;
        this.query();
    };
    //开始日期
    OutRask.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始时间不能大于结束时间' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    //结束日期
    OutRask.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始时间不能大于结束时间' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //手动输入日期时，失去焦点时进行判断
    OutRask.prototype.onchange1 = function () {
        this.showDataStart();
    };
    OutRask.prototype.onchange2 = function () {
        this.showDataEnd();
    };
    //码值
    OutRask.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //电销详情
    OutRask.prototype.toDetail = function (item) {
        var _this = this;
        console.log(item);
        if (item.taskStatus == '2') { //已处理要调历史中的接口
            var param = {
                isAllNode: false,
                itemName: this.littleClassName,
                itemNode: this.littleClassNo,
                itemType: this.bigClassNo,
                userId: this.userId,
                processId: item.processId,
            };
            this.customeHttpService.bpmQueryTaskOnlyList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.pageData.result.length > 0) {
                        var paramItem = data.pageData.result[0].varMap.dataMap;
                        var param_1 = {
                            taskId: data.pageData.result[0].taskId,
                            dataMap: JSON.stringify(paramItem),
                        };
                        _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                        _this.commfunc.setSessionDataCH('markFlag', '2');
                        _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_1));
                        _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record']);
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else { //未处理和待重拨
            //(待办任务捡入检出接口)
            var param = {
                workEffortId: item.workEffortId,
            };
            this.customeHttpService.queryWorkEffortDetailInfo(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    var workEffortParentIds_1 = data.workEffortParentId;
                    if (data.currentStatusId == '1') {
                        var params = {
                            createPartyId: _this.userId,
                            workEffortId: data.workEffortId,
                        };
                        _this.customeHttpService.updateWorkEffortCommInfo(params).subscribe(function (data) {
                            if (data.returnCode.code == "success") {
                                var param_2 = {
                                    processId: item.processId,
                                };
                                _this.customeHttpService.bpmQueryUnDoTaskList(param_2).subscribe(function (data) {
                                    if (data.returnCode.code == "success") {
                                        if (data.pageData.result.length > 0) {
                                            if (data.pageData.result[0].varMap.dataMap.workEffortTypeId != workEffortParentIds_1) {
                                                data.pageData.result[0].varMap.dataMap.workEffortTypeId = workEffortParentIds_1;
                                            }
                                            var paramItem = data.pageData.result[0].varMap.dataMap;
                                            var param_3 = {
                                                taskId: data.pageData.result[0].taskId,
                                                dataMap: JSON.stringify(paramItem),
                                            };
                                            _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                                            _this.commfunc.setSessionDataCH('markFlag', '1');
                                            _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_3));
                                            _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record']);
                                        }
                                    }
                                    else {
                                        _this.msgs = [];
                                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                                    }
                                }, function (error) {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                                });
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                        });
                    }
                    else {
                        if (data.createPartyId != _this.userId) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'info', summary: '提示', detail: '该任务已被领取!' });
                        }
                        else {
                            //未处理和待重拨
                            var param_4 = {
                                processId: item.processId,
                            };
                            _this.customeHttpService.bpmQueryUnDoTaskList(param_4).subscribe(function (data) {
                                if (data.returnCode.code == "success") {
                                    if (data.pageData.result.length > 0) {
                                        if (data.pageData.result[0].varMap.dataMap.workEffortTypeId != workEffortParentIds_1) {
                                            data.pageData.result[0].varMap.dataMap.workEffortTypeId = workEffortParentIds_1;
                                        }
                                        var paramItem = data.pageData.result[0].varMap.dataMap;
                                        var param_5 = {
                                            taskId: data.pageData.result[0].taskId,
                                            dataMap: JSON.stringify(paramItem),
                                        };
                                        _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                                        _this.commfunc.setSessionDataCH('markFlag', '1');
                                        _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_5));
                                        _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record']);
                                    }
                                }
                                else {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                                }
                            }, function (error) {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                            });
                        }
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
    };
    //导出excel
    OutRask.prototype.raskQuery = function () {
        var _this = this;
        if (this.bussType) {
            this.outerRaskBean.workEffortParentId = this.bussType;
        }
        else {
            this.outerRaskBean.workEffortParentId = null;
        }
        this.outerRaskBean.endDate = this.commfunc.transDate(this.endDate);
        this.outerRaskBean.startDate = this.commfunc.transDate(this.startDate);
        this.outerRaskBean.creditDate = this.commfunc.transDateN(this.creditDate);
        // this.outerRaskBean.workEffortParentId = this.bussType;
        this.teleMarketingHttpService.custCommunicationExport(this.outerRaskBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                window.open(_this.DOWNLOAD + "?fileName=" + encodeURI(data.fileName) + "&fileUrl=" + data.fileUrl, "_self");
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    OutRask = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outer-rask',
            template: __webpack_require__(/*! ./outer-rask.component.html */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.html"),
            styles: [__webpack_require__(/*! ./outer-rask.component.scss */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_5__["TeleMarketingHttpService"]]
        })
        //外拨业务列表查询-暂时还未定怎么做
        ,
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_5__["TeleMarketingHttpService"],
            _uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OutRask);
    return OutRask;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'外拨业务任务列表'\"></header-title>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务类型：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <p-dropdown [options]=\"TaskType\" [(ngModel)]=\"bussType\" (onChange)=\"bussTypeChange($event)\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务名称：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.taskName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 tit\">任务状态：</div>\r\n        <div class=\"ui-g-8\" style=\"padding-right:0\">\r\n            <p-dropdown [options]=\"TaskStatus\" [(ngModel)]=\"outerRaskBean.taskStatus\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"isShowPage == '16'\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">任务发布日期：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"fromDate\" [maxDate]=\"thruDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n                至\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"thruDate\" [minDate]=\"fromDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">发布天数：</div>\r\n            <div class=\"ui-g-8\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.iussDays\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">客户来源：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"custSource\" [(ngModel)]=\"outerRaskBean.customerSource\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"isShowPage == '16'\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">有无点击：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isClick\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">有无申请：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isApplyFor\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">申请审批状态：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"approve\" [(ngModel)]=\"outerRaskBean.approveStatus\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户号：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obCustomercode\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户名称：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obName\" />\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-4\" style=\"padding:0\" *ngIf=\"isShowPage == '17'\">\r\n        <div class=\"ui-g-4 tit\">主联系人：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.mainContactorName\" (click)=\"showDialog()\"/>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-4\" style=\"padding:0\" *ngIf=\"isShowPage == '17'\">\r\n        <div class=\"ui-g-4 tit\">客户群号：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.groupId\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">手机号码：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.obPhone\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电话是否外呼：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.acall\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电话是否接通：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isconnet\" [(ngModel)]=\"outerRaskBean.aisconnect\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">客户响应：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"areSponse2\" [(ngModel)]=\"outerRaskBean.aresponse\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">无法接通原因：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"AnotConnect\" [(ngModel)]=\"outerRaskBean.anotconnect\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">电销人员：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.oboperName\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">外拨次数：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.callCounts\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">外呼日期：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"onchange1()\"\r\n                [showOtherMonths]=\"false\" class=\"calendar-data\"></p-calendar>\r\n            至\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"onchange1()\" [showOtherMonths]=\"false\"\r\n                class=\"calendar-data\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 tit\">备注：</div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"outerRaskBean.remark\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding:0\" *ngIf=\"isShowPage == '01'\">\r\n        <div class=\"ui-g-4 tit\">是否授信：</div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isPanduan\" [(ngModel)]=\"outerRaskBean.isCredit\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"isShowPage == '01'\">\r\n        <div class=\"ui-g-4\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 tit\">授信日期：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    [locale]=\"ch\" [showOtherMonths]=\"false\" [(ngModel)]=\"creditDate\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查 询\" (click)=\"queryClick()\"></button>\r\n        <button pButton type=\"button\" label=\"重 置\" class=\"icoColor\" (click)=\"resetClick()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:right\">\r\n        <!-- <button pButton type=\"button\" label=\"批量分配\" (click)=\"batchDistribute()\" *ngIf=\"commonHeader.extParam.managePermission == 'Y'\"></button> -->\r\n        <button pButton type=\"button\" label=\"批量激活\" (click)=\"batchActive()\" *ngIf=\"permissionCheck('SID00050_018_P001')\"></button>\r\n        <button pButton type=\"button\" label=\"导出excel表格\" class=\"icoColor\" (click)=\"raskQuery()\"></button>\r\n    </div>\r\n\r\n    <!-- 直销业务 -->\r\n    <div class=\"ui-g-12 base-table\" *ngIf=\"isShowPage == '01'\">\r\n        <p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column [style]=\"{'width':'80px'}\">\r\n                <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n                    <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"任务类型\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:TaskType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"taskStatus\" header=\"任务状态\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.taskStatus|codeValuePie:TaskStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"obCustomercode\" header=\"客户号\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"obName\" header=\"客户姓名\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obPhone\" header=\"手机号码\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"acall\" header=\"电话是否外呼\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.acall|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aisconnect\" header=\"电话是否接通\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aisconnect|codeValuePie:isconnet}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aresponse\" header=\"客户响应\" [style]=\"{'width':'127px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aresponse|codeValuePie:areSponse2}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"anotconnect\" header=\"无法接通原因\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.anotconnect|codeValuePie:AnotConnect}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"oboperName\" header=\"电销人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"callCounts\" header=\"外拨次数\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obDate\" header=\"外呼时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'70px','overflow':'hidden','white-space':'nowrap','text-overflow':'ellipsis'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a class=\"colorImport\" title=\"{{col.remark}}\">{{col.remark}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isCredit\" header=\"是否授信\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isCredit|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditDate\" header=\"授信日期\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"createDate\" header=\"任务创建日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDetail(item)\" class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{outerRaskBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <!-- 信用卡直销 -->\r\n    <div class=\"ui-g-12 base-table\" *ngIf=\"isShowPage == '16'\">\r\n        <p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column [style]=\"{'width':'80px'}\">\r\n                <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n                    <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"营销活动名称\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"任务类型\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:TaskType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"taskStatus\" header=\"任务状态\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.taskStatus|codeValuePie:TaskStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"fromDate\" header=\"任务发布日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"iussDays\" header=\"发布天数\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"customerSource\" header=\"客户来源\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.customerSource|codeValuePie:custSource}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isClick\" header=\"有无点击\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isClick|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isApplyFor\" header=\"有无申请\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.isApplyFor|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"approveStatus\" header=\"申请审批状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.approveStatus|codeValuePie:approve}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"obCustomercode\" header=\"客户号\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"obName\" header=\"客户姓名\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obPhone\" header=\"手机号码\" [style]=\"{'width':'127px'}\"></p-column>\r\n            <p-column field=\"acall\" header=\"电话是否外呼\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.acall|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aisconnect\" header=\"电话是否接通\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aisconnect|codeValuePie:isconnet}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aresponse\" header=\"客户响应\" [style]=\"{'width':'127px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aresponse|codeValuePie:areSponse2}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"anotconnect\" header=\"无法接通原因\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.anotconnect|codeValuePie:AnotConnect}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"oboperName\" header=\"电销人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"callCounts\" header=\"外拨次数\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obDate\" header=\"外呼时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'70px','overflow':'hidden','white-space':'nowrap','text-overflow':'ellipsis'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a class=\"colorImport\" title=\"{{col.remark}}\">{{col.remark}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{outerRaskBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <!-- 预授信转授信 -->\r\n    <div class=\"ui-g-12 base-table\" *ngIf=\"isShowPage == '17'\">\r\n        <p-dataTable [value]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column [style]=\"{'width':'80px'}\">\r\n                <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n                    <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"任务类型\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.workEffortParentId|codeValuePie:TaskType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"任务名称\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"taskStatus\" header=\"任务状态\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.taskStatus|codeValuePie:TaskStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"obCustomercode\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"obName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <!-- <p-column field=\"\" header=\"主联系人\" [style]=\"{'width':'100px'}\"></p-column> -->\r\n            <p-column field=\"groupId\" header=\"客户群号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"obPhone\" header=\"手机号码\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"acall\" header=\"电话是否外呼\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.acall|codeValuePie:isPanduan}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aisconnect\" header=\"电话是否接通\" [style]=\"{'width':'70px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aisconnect|codeValuePie:isconnet}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"aresponse\" header=\"客户响应\" [style]=\"{'width':'127px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.aresponse|codeValuePie:areSponse2}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"anotconnect\" header=\"无法接通原因\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.anotconnect|codeValuePie:AnotConnect}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"oboperName\" header=\"电销人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"callCounts\" header=\"外拨次数\" [style]=\"{'width':'70px'}\"></p-column>\r\n            <p-column field=\"obDate\" header=\"外呼时间\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'70px','overflow':'hidden','white-space':'nowrap','text-overflow':'ellipsis'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a class=\"colorImport\" title=\"{{col.remark}}\">{{col.remark}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"是否授信\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"\" header=\"授信日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"\" header=\"任务创建日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{outerRaskBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!--选择员工-->\r\n<p-dialog [(visible)]=\"choosePeople\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        员工列表\r\n    </p-header>\r\n    <queryUser *ngIf=\"choosePeople\" (outValue)=\"workerCall($event)\"></queryUser>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" appendTo=\"body\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n.icoColor {\n  background: #f8a900 !important;\n  cursor: pointer; }\n\n.tit {\n  text-align: right; }\n\n:host/deep/ .calendar-data .ui-calendar {\n  border-radius: 5px;\n  width: 46.7%;\n  min-width: 100px;\n  border-bottom: none; }\n\n.colorImport:hover {\n  cursor: pointer; }\n\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .content {\n  overflow: inherit !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL3RlbGVtYXJrZXRpbmctbGlzdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHRlbGVtYXJrZXRpbmdcXHRlbGVtYXJrZXRpbmctbGlzdFxcdGVsZW1hcmtldGluZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFPdkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL3RlbGVtYXJrZXRpbmctbGlzdC90ZWxlbWFya2V0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGE5MDAgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhbGVuZGFyLWRhdGEgLnVpLWNhbGVuZGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA0Ni43JTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbi8vICAgICBwYWRkaW5nOiAxZW0gMWVtO1xyXG4vLyAgICAgaGVpZ2h0OiA5MCUhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb2xvckltcG9ydDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY29udGFjdC10cmFjay1mIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TelemarketingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelemarketingList", function() { return TelemarketingList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_custom_telemarketing_outer_rask_bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/telemarketing/outer-rask/bean/outer-rask.bean */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/bean/outer-rask.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TelemarketingList = /** @class */ (function () {
    function TelemarketingList(commfunc, router, teleMarketingHttpService, customeHttpService, activatedRoute, confirmationService) {
        this.commfunc = commfunc;
        this.router = router;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRoute = activatedRoute;
        this.confirmationService = confirmationService;
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.TaskType = [];
        this.dataList = [];
        this.isPanduan = []; //判断是否
        this.AnotConnect = [];
        this.areSponse = [];
        this.first = 0; //分页控制
        this.startDate = null;
        this.endDate = null;
        this.outerRaskBean = new app_pages_tzb_custom_telemarketing_outer_rask_bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_8__["OuterRaskBean"]();
        this.msgs = []; //提示信息
        this.TaskStatus = []; //任务状态
        this.isconnet = []; //是否接通
        this.DOWNLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"];
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.areSponse2 = [];
        this.approve = [];
        this.custSource = [];
        this.isShowPage = '01';
        this.checkAll = false;
        this.chooseData = [];
        this.choosePeople = false;
        this.codeValues(); //调用方法，获取全部码值
        this.TaskType = this.code['DXRASKTYPE']; //任务类型
        this.isPanduan = this.code['IsPanduan']; //判断是否
        this.isconnet = this.code['ISCONNET']; //电话是否接通
        this.AnotConnect = this.code['AnotConnec'];
        this.areSponse2 = this.code['AreSponse2'];
        this.TaskStatus = this.code['TASKSTATUS']; //任务状态
        this.approve = this.code['APPROVE']; //申请状态
        this.custSource = this.code['CUSTSOURCE']; //客户来源
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = this.commonHeader.userId;
        // this.littleClassName = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassName;
        // this.bigClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).bigClassNo;
        // this.littleClassNo = JSON.parse(this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')).littleClassNo;
        // if (this.commfunc.getSessionDataCH('markFlag')) {
        //     this.commfunc.clearSession('markFlag');
        // }
        // if (this.commfunc.getSessionDataCH('taskId')) {
        //     this.commfunc.clearSession('taskId');
        // }
        // if (this.commfunc.getSessionDataCH('dxlc')) {
        //     this.commfunc.clearSession('dxlc');
        // }
        // if (this.commfunc.getSessionDataCH('tapeInfo')) {
        //     this.commfunc.clearSession('tapeInfo');//录音文件名
        // }
        // if (this.commfunc.getSessionDataCH('setDate')) {
        //     this.commfunc.clearSession('setDate');//流水号
        // }
        if (this.commfunc.getSessionDataCH('taskpooltype') && this.commfunc.getSessionDataCH('taskpooltype').toString() == 'false') { //
            this.commfunc.clearSession('taskpooltype');
        }
    }
    TelemarketingList.prototype.ngOnInit = function () {
        var _this = this;
        var paremse = {};
        this.teleMarketingHttpService.isCommunicationPost(paremse).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.paramMap.directSellingToElectricSelling == '1' && data.paramMap.custCommunicationPost == '1') {
                    _this.TaskType.unshift({ label: "请选择", value: " " });
                    _this.bussType = '';
                    // this.outerRaskBean.workEffortTypeId = null;
                    _this.bussTypes = '';
                    _this.workEffortParentIds = null;
                }
                else if (data.paramMap.directSellingToElectricSelling == '0' && data.paramMap.custCommunicationPost == '0') {
                    _this.TaskType.unshift({ label: "请选择", value: " " });
                    _this.bussType = '';
                    // this.outerRaskBean.workEffortTypeId = null;
                    _this.bussTypes = '';
                    _this.workEffortParentIds = null;
                }
                else {
                    if (data.paramMap.custCommunicationPost == '0') {
                        var TaskTypes_1 = [];
                        _this.TaskType.forEach(function (items) {
                            if (items.value == '16') {
                            }
                            else {
                                TaskTypes_1.push(items);
                            }
                        });
                        _this.TaskType = TaskTypes_1;
                        _this.TaskType.unshift({ label: "请选择", value: " " });
                        _this.bussType = '01';
                        // this.outerRaskBean.workEffortTypeId = '14';
                        _this.bussTypes = '01';
                        _this.workEffortParentIds = '14';
                    }
                    else if (data.paramMap.custCommunicationPost == '1') {
                        var TaskTypes_2 = [];
                        _this.TaskType.forEach(function (items) {
                            if (items.value == '01') {
                            }
                            else {
                                TaskTypes_2.push(items);
                            }
                        });
                        _this.TaskType = TaskTypes_2;
                        _this.TaskType.unshift({ label: "请选择", value: " " });
                        _this.bussType = '16';
                        // this.outerRaskBean.workEffortTypeId = '14';
                        _this.bussTypes = '16';
                        _this.workEffortParentIds = '14';
                    }
                }
                _this.bussType = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](_this.bussType);
                _this.TaskType = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](_this.TaskType);
                //外拨业务列表传递参数
                _this.activatedRoute.params.subscribe(function (params) {
                    console.log(params);
                    if (params) {
                        if (params.bussType && params.bussType != 'undefined') {
                            _this.bussType = params.bussType;
                        }
                        if (params.taskStatus && params.taskStatus != 'undefined') {
                            _this.outerRaskBean.taskStatus = params.taskStatus;
                        }
                        if (params.pageNum && params.pageNum != 'undefined') {
                            _this.outerRaskBean.pageNum = params.pageNum;
                        }
                        if (params.pageSize && params.pageSize != 'undefined') {
                            _this.outerRaskBean.pageSize = params.pageSize;
                        }
                        _this.first = (parseInt(params.pageNum) - 1) * parseInt(params.pageSize);
                        _this.query();
                    }
                });
                // this.CheckTask();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
        // if (this.activatedRoute.snapshot.queryParams['flag'] == '2') {
        //     this.whFlag = '2'; //历史
        // } else {
        //     this.whFlag = '1'; //历史
        // }
    };
    //校验是否电销后查询
    TelemarketingList.prototype.CheckTask = function () {
        var _this = this;
        if (this.commfunc.getSessionDataCH('raskBean')) {
            var parems_1 = JSON.parse(this.commfunc.getSessionDataCH('raskBean'));
            parems_1['commonHeader'] = '';
            this.teleMarketingHttpService.queryCustCommunicationWorkList(parems_1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.totalNum = data.totalCount;
                    _this.dataList = data.returnList;
                    _this.outerRaskBean = parems_1;
                    _this.outerRaskBean.pageNum = parems_1.pageNum;
                    _this.outerRaskBean.pageSize = parems_1.pageSize;
                    _this.first = (parems_1.pageNum - 1) * parems_1.pageSize;
                    _this.bussTypes = parems_1.workEffortParentId;
                    _this.bussType = parems_1.workEffortParentId;
                    _this.workEffortParentIds = parems_1.workEffortTypeId;
                    _this.raskbean = _this.outerRaskBean;
                    var parmeess = {
                        value: _this.bussType
                    };
                    _this.bussTypeChange(parmeess);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
                _this.commfunc.clearSession('raskBean');
            }, function (error) {
                _this.commfunc.clearSession('raskBean');
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else {
            var parmeess = {
                value: this.bussType
            };
            this.bussTypeChange(parmeess);
            this.queryClick();
        }
    };
    TelemarketingList.prototype.bussTypeChange = function (event) {
        switch (event.value) {
            case '01' || '20': // 直销
                this.isShowPage = '01';
                break;
            case '16' || '21': // 信用卡直销
                this.isShowPage = '16';
                break;
            case '17' || '22': // 预授信转授信业务
                this.isShowPage = '17';
                break;
        }
        this.startDate = null;
        this.endDate = null;
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.outerRaskBean = new app_pages_tzb_custom_telemarketing_outer_rask_bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_8__["OuterRaskBean"]();
        // this.dataList=[];//切换把表格清空
        // this.outerRaskBean.workEffortTypeId = '14';
        // if (event.value) {
        //     if (event.value == '01') {
        //         this.outerRaskBean.workEffortTypeId = '14';
        //     } else if (event.value == '16') {
        //         this.outerRaskBean.workEffortTypeId = '14';
        //     } else if (event.value == '17') {
        //         this.outerRaskBean.workEffortTypeId = '14';
        //     } else {
        //         this.outerRaskBean.workEffortTypeId = null;
        //     }
        // } else {
        //     this.outerRaskBean.workEffortTypeId = null;
        // }
    };
    //查询按钮
    TelemarketingList.prototype.queryClick = function () {
        this.outerRaskBean.pageNum = 1;
        this.outerRaskBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //查询
    TelemarketingList.prototype.query = function () {
        var _this = this;
        this.doClearCheck();
        if (this.bussType) {
            this.outerRaskBean.workEffortParentId = this.bussType;
        }
        else {
            this.outerRaskBean.workEffortParentId = null;
        }
        this.outerRaskBean.endDate = this.commfunc.transDate(this.endDate);
        this.outerRaskBean.startDate = this.commfunc.transDate(this.startDate);
        this.outerRaskBean.creditDate = this.commfunc.transDateN(this.creditDate);
        this.outerRaskBean.fromDate = this.commfunc.transDateN(this.fromDate);
        this.outerRaskBean.thruDate = this.commfunc.transDateN(this.thruDate);
        this.outerRaskBean.workEffortTypeId = '14';
        this.teleMarketingHttpService.queryCustCommunicationWorkList(this.outerRaskBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.totalNum = data.totalCount;
                _this.dataList = data.returnList;
                _this.raskbean = _this.outerRaskBean;
            }
            else {
                _this.totalNum = 0;
                _this.dataList = [];
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.totalNum = 0;
            _this.dataList = [];
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //重置
    TelemarketingList.prototype.resetClick = function () {
        this.startDate = null;
        this.endDate = null;
        this.creditDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.outerRaskBean = new app_pages_tzb_custom_telemarketing_outer_rask_bean_outer_rask_bean__WEBPACK_IMPORTED_MODULE_8__["OuterRaskBean"]();
        this.querySecleReset();
        this.doClearCheck();
    };
    //页码重置
    TelemarketingList.prototype.querySecleReset = function () {
        this.outerRaskBean.pageNum = 1;
        this.outerRaskBean.pageSize = 10;
        this.first = 0;
        this.bussType = this.bussTypes;
        // this.outerRaskBean.workEffortTypeId = this.workEffortParentIds;
        this.query();
    };
    TelemarketingList.prototype.paginate = function (event) {
        //每页显示的条数
        this.outerRaskBean.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.outerRaskBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.outerRaskBean.pageSize;
        this.query();
    };
    //开始日期
    TelemarketingList.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始时间不能大于结束时间' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    //结束日期
    TelemarketingList.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始时间不能大于结束时间' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //手动输入日期时，失去焦点时进行判断
    TelemarketingList.prototype.onchange1 = function () {
        this.showDataStart();
    };
    TelemarketingList.prototype.onchange2 = function () {
        this.showDataEnd();
    };
    //码值
    TelemarketingList.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //电销详情
    TelemarketingList.prototype.toDetail = function (item) {
        var _this = this;
        console.log(item);
        debugger;
        if (item.taskStatus == '2') { //已处理要调历史中的接口
            var param = {
                isAllNode: false,
                itemName: this.littleClassName,
                itemNode: this.littleClassNo,
                itemType: this.bigClassNo,
                // userId: this.userId,
                processId: item.processId,
            };
            this.customeHttpService.bpmQueryTaskOnlyList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.pageData.result.length > 0) {
                        var paramItem = data.pageData.result[0].varMap.dataMap;
                        var param_1 = {
                            taskId: data.pageData.result[0].taskId,
                            dataMap: JSON.stringify(paramItem),
                        };
                        _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                        _this.commfunc.setSessionDataCH('markFlag', '2');
                        _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_1));
                        _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record', { bussType: _this.bussType, taskStatus: _this.outerRaskBean.taskStatus, pageNum: _this.outerRaskBean.pageNum, pageSize: _this.outerRaskBean.pageSize }]);
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else { //未处理和待重拨
            var param = {
                workEffortId: item.workEffortId,
            };
            this.customeHttpService.queryWorkEffortDetailInfo(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    // let workEffortParentIds = data.workEffortParentId;
                    if (data.currentStatusId == '1') {
                        // let params = {
                        //     createPartyId: this.userId,
                        //     workEffortId: data.workEffortId,
                        // }
                        // this.customeHttpService.updateWorkEffortCommInfo(params).subscribe(data => {
                        //     if (data.returnCode.code == "success") {
                        var param_2 = {
                            processId: item.processId,
                        };
                        _this.customeHttpService.bpmQueryUnDoTaskList(param_2).subscribe(function (data) {
                            if (data.returnCode.code == "success") {
                                if (data.pageData.result.length > 0) {
                                    // if (data.pageData.result[0].varMap.dataMap.workEffortTypeId != workEffortParentIds) {
                                    //     data.pageData.result[0].varMap.dataMap.workEffortTypeId = workEffortParentIds;
                                    // }
                                    var paramItem = data.pageData.result[0].varMap.dataMap;
                                    var param_3 = {
                                        taskId: data.pageData.result[0].taskId,
                                        dataMap: JSON.stringify(paramItem),
                                    };
                                    _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                                    _this.commfunc.setSessionDataCH('markFlag', '1');
                                    _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_3));
                                    _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record', { bussType: _this.bussType, taskStatus: _this.outerRaskBean.taskStatus, pageNum: _this.outerRaskBean.pageNum, pageSize: _this.outerRaskBean.pageSize }]);
                                }
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                        });
                        //     } else {
                        //         this.msgs = [];
                        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        //     }
                        // }, error => {
                        //     this.msgs = [];
                        //     this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                        // })
                    }
                    else {
                        // if (data.createPartyId != this.userId) {
                        //     this.msgs = [];
                        //     this.msgs.push({ severity: 'info', summary: '提示', detail: '该任务已被领取!' });
                        // } else {
                        //未处理和待重拨
                        var param_4 = {
                            processId: item.processId,
                        };
                        _this.customeHttpService.bpmQueryUnDoTaskList(param_4).subscribe(function (data) {
                            if (data.returnCode.code == "success") {
                                if (data.pageData.result.length > 0) {
                                    // if (data.pageData.result[0].varMap.dataMap.workEffortTypeId != workEffortParentIds) {
                                    //     data.pageData.result[0].varMap.dataMap.workEffortTypeId = workEffortParentIds;
                                    // }
                                    var paramItem = data.pageData.result[0].varMap.dataMap;
                                    var param_5 = {
                                        taskId: data.pageData.result[0].taskId,
                                        dataMap: JSON.stringify(paramItem),
                                    };
                                    _this.commfunc.setSessionDataCH('raskBean', JSON.stringify(_this.raskbean));
                                    _this.commfunc.setSessionDataCH('markFlag', '1');
                                    _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(param_5));
                                    _this.router.navigate(['/pages/tzb/custom/teleMarketing/contact-record', { bussType: _this.bussType, taskStatus: _this.outerRaskBean.taskStatus, pageNum: _this.outerRaskBean.pageNum, pageSize: _this.outerRaskBean.pageSize }]);
                                }
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                        });
                    }
                    // }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
    };
    //导出excel
    TelemarketingList.prototype.raskQuery = function () {
        var _this = this;
        if (this.bussType) {
            this.outerRaskBean.workEffortParentId = this.bussType;
        }
        else {
            this.outerRaskBean.workEffortParentId = null;
        }
        this.outerRaskBean.endDate = this.commfunc.transDate(this.endDate);
        this.outerRaskBean.startDate = this.commfunc.transDate(this.startDate);
        this.outerRaskBean.creditDate = this.commfunc.transDateN(this.creditDate);
        // this.outerRaskBean.workEffortParentId = this.bussType;
        this.teleMarketingHttpService.custCommunicationExport(this.outerRaskBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                window.open(_this.DOWNLOAD + "?fileName=" + encodeURI(data.fileName) + "&fileUrl=" + data.fileUrl, "_self");
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    // 批量分配
    TelemarketingList.prototype.batchDistribute = function () {
        if (this.chooseData.length < 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请勾选分配任务' }];
            return;
        }
        var bool = true;
        // 只有任务状态为【未处理】待办任务才能被分配
        for (var i = 0; i < this.chooseData.length; i++) {
            if (this.chooseData[i].taskStatus != '1') {
                bool = false;
                break;
            }
        }
        if (bool) {
            this.choosePeople = true;
            this.flag = 'batchDistribute';
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '只有任务状态为【未处理】待办任务才能被分配' }];
        }
    };
    // 批量激活
    TelemarketingList.prototype.batchActive = function () {
        var _this = this;
        if (this.chooseData.length < 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请勾选激活任务' }];
            return;
        }
        var bool = true;
        // 只有任务状态为【已处理】或【已中止】待办任务才能被激活
        for (var i = 0; i < this.chooseData.length; i++) {
            if (this.chooseData[i].taskStatus != '2' && this.chooseData[i].taskStatus != '12') {
                bool = false;
                break;
            }
        }
        if (bool) {
            // this.choosePeople = true;
            // this.flag = 'batchActive';
            var a_1 = [];
            this.chooseData.forEach(function (el) {
                a_1.push(el.workEffortId);
            });
            var pram_1 = {
                workEffortId: a_1,
                userId: this.ownerUser
            };
            this.confirmationService.confirm({
                message: '确认要激活?',
                header: '提示',
                accept: function () {
                    _this.teleMarketingHttpService.batchActivate(pram_1).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            // 跳转营销活动页面
                            var items = {
                                marketingCampaignId: data.marketingCampaignId,
                                flagCopy: '2',
                                expCondNum: '14',
                                isDisabled: '1'
                            };
                            _this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/create-marketing-activite/basic-element', items]);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '只有任务状态为【已处理】或【已中止】才能被激活' }];
        }
    };
    //全选按钮
    TelemarketingList.prototype.checkAllClick = function () {
        this.chooseData = [];
        if (this.dataList) {
            for (var i = 0; i < this.dataList.length; i++) {
                if (this.checkAll == true) {
                    this.dataList[i].checkBox = true;
                    this.chooseData.push(this.dataList[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataList[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    TelemarketingList.prototype.checkBoxClick = function (i, data) {
        var _this = this;
        if (data.checkBox) {
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (this.chooseData.length == this.dataList.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    // 关闭-员工模态框
    TelemarketingList.prototype.workerCall = function (item) {
        var _this = this;
        this.choosePeople = false;
        if (item.length > 0) {
            this.ownerUser = item[0].tellerId;
            this.ownerUserName = item[0].tellerName;
        }
        var a = [];
        this.chooseData.forEach(function (el) {
            a.push(el.workEffortId);
        });
        var pram = {
            workEffortId: a,
            userId: this.ownerUser
        };
        if (this.flag == 'batchDistribute') {
            // 批量分配
            this.confirmationService.confirm({
                message: '确认将' + this.chooseData.length + '条任务分配于' + item[0].orgName + '员工' + item[0].tellerName + '?',
                accept: function () {
                    _this.teleMarketingHttpService.batchAllotCommunication(pram).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.query();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    });
                }
            });
        }
        // else if (this.flag == 'batchActive') {
        //     //批量激活方法
        //     this.confirmationService.confirm({
        //         message: '确认要激活?',
        //         header: '提示',
        //         accept: () => {
        //             this.teleMarketingHttpService.batchActivate(pram).subscribe(data => {
        //                 if (data.returnCode.code == "success") {
        //                     // 跳转营销活动页面
        //                     let items = {
        //                         marketingCampaignId: data.marketingCampaignId,
        //                         flagCopy: '2',
        //                         expCondNum: '14',
        //                         isDisabled: '1'
        //                     }
        //                     this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/create-marketing-activite/basic-element', items]);
        //                 } else {
        //                     this.msgs = [];
        //                     this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
        //                 }
        //             })
        //         }
        //     })
        // }
        else if (this.flag == 'search') {
            this.outerRaskBean.mainContactorId = item[0].tellerId;
            this.outerRaskBean.mainContactorName = item[0].tellerName;
        }
    };
    //主联系人-模态框
    TelemarketingList.prototype.showDialog = function () {
        this.choosePeople = true;
        this.flag = 'search';
    };
    //清除全选勾选框+单选框
    TelemarketingList.prototype.doClearCheck = function () {
        this.chooseData = [];
        this.checkAll = false;
    };
    //按钮权限
    TelemarketingList.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    TelemarketingList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'telemarketing-list',
            template: __webpack_require__(/*! ./telemarketing-list.component.html */ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.html"),
            styles: [__webpack_require__(/*! ./telemarketing-list.component.scss */ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_4__["TeleMarketingHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]]
        })
        //外拨业务列表查询-暂时还未定怎么做
        ,
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_4__["TeleMarketingHttpService"],
            _uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]])
    ], TelemarketingList);
    return TelemarketingList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'客户信息'\"></header-title>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>业务类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.workEffortParentId |codeValuePie:MarketingCampaigntType}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>任务名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.taskName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>\r\n                    <a href=\"/#/pages/custom-view?custNo={{compileStr(dataList.obCustomercode)}}\" target=\"_blank\">{{dataList.obCustomercode}}</a>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.obName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>主联系人：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.amanagerName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>主联系人所属机构：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.principalLinkmanOrgName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 直销 -->\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '01'||dataList.workEffortParentId == '21'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>原贷款产品：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.bussType}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>原贷款额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.loanAmt}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>原贷款期限：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.endDate}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '01'||dataList.workEffortParentId == '21'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>产品额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.EcardCreditLmt}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- 批量预授信转授信 -->\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '17'||dataList.workEffortParentId == '22'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户群号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.groupId}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户群名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.groupName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>产品名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.productName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\" *ngIf=\"dataList.workEffortParentId == '17'||dataList.workEffortParentId == '22'\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>主担保方式：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.guaranteeType|codeValuePie:guaranteeModeOptions}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>授信到期日期：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.endDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>信贷员建议额度：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.loanOfficerAdvises}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户身份证号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataList.idenNum}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户号码：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-8\" style=\"padding:0\">\r\n                    <p-dropdown id=\"dro\" [disabled]=\"!showBtn\" [options]=\"stepList\" [(ngModel)]=\"dataList.obPhone\" placeholder=\"请先选择号码\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4\" style=\"padding:0\">\r\n                    <div style=\"margin: 0px;display: none;\">时间:\r\n                        <span id=\"TalkTime\">00:00:00</span>\r\n                    </div>\r\n                    <div id=\"logindiv\" style=\"margin: 0px;display:block;\">\r\n                        <img src=\"../../../../../assets/layout/images/phone.png\" alt=\"\" (click)=\"login_call('1')\" *ngIf=\"showBtn\" class=\"imgName\">\r\n                        <img src=\"../../../../../assets/layout/images/phone3.png\" alt=\"\" *ngIf=\"!showBtn\">\r\n                    </div>\r\n                    <div id=\"callenddiv\" style=\"margin: 0px;display: none;\">\r\n                        <img src=\"../../../../../assets/layout/images/phone2.png\" alt=\"\" (click)=\"callend()\" class=\"imgName\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 functions\">\r\n    <div class=\"ui-g-12 whole\">\r\n        <span>\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/teleMarketing/contact-record']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"apply(1)\">\r\n                联络结果记录\r\n            </a>\r\n        </span>\r\n        <span>\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/teleMarketing/contact-record-history']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n                (click)=\"apply(2)\">\r\n                联络结果历史查询\r\n            </a>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 padding-one module\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <object classid=\"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93\" width=1px height=1px>\r\n        <!-- <param name=\"archive\" value=\"http://\"+urlParam+\"/assets/phone/caf.jar\" /> -->\r\n        <param name=\"archive\" value=\"http://xwzhuat.tzbtest.ins/assets/phone/caf.jar\" />\r\n        <param name=\"code\" value=\"com.pactera.caf.core.CAF\" />\r\n        <param name=\"name\" value=\"Pactera VTA Applet\" />\r\n        <param name=\"image\" value=\"caf.gif\" />\r\n        <param name=\"boxmessage\" value=\"loading\" />\r\n        <param name=\"boxborder\" value=\"false\" />\r\n        <param name=\"type\" value=\"application/x-java-applet;jpi-version=1.7\" />\r\n        <param name=\"scriptable\" value=\"true\" />\r\n        <param name=\"mayscript\" value=\"true\" />\r\n        <param name=\"log\" value=\"caf\" />\r\n        <param name=\"permissions\" value=\"all-permissions\" />\r\n    </object>\r\n</div>\r\n\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" width=\"425\" #cd class=\"confirmDialog\">\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"继续拨打\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"取消\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0;\n  background: #fff; }\n\n.functions .whole {\n    line-height: 31px;\n    padding-left: 0;\n    background: #efefef;\n    padding: 0; }\n\n.functions .whole .change {\n      display: inline-block;\n      font-size: 15px;\n      height: 40px;\n      line-height: 40px;\n      border-radius: 3px 3px 0 0;\n      color: #929292;\n      padding: 0px 30px;\n      font-weight: bold; }\n\n.active {\n  position: relative;\n  border: none !important;\n  color: #19b0c8 !important;\n  border-bottom-width: 0px;\n  background: #fafafa !important; }\n\n.active:before {\n  content: '';\n  width: 59px;\n  height: 2px;\n  background: #19b0c8;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 35%; }\n\n.padding-one {\n  padding: 1em; }\n\n.bgcolor {\n  background: #f7f7f7;\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n.title {\n  text-align: right;\n  padding-bottom: 0; }\n\n.talk {\n  text-align: right;\n  width: 11.5%; }\n\n.gap-name {\n  padding-bottom: 0; }\n\n.gap-name .ui-g-4 {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-4 .title {\n      padding-bottom: 0; }\n\n.gap-name .ui-g-4 .ui-g-6 {\n      padding-bottom: 0; }\n\n.gap-name .talk {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-10 {\n    padding-bottom: 0; }\n\n.phone {\n  float: left;\n  margin-top: 5px;\n  margin-right: 5px; }\n\n.imgName {\n  cursor: pointer; }\n\na {\n  color: #0094D2; }\n\n:host/deep/ .confirmDialog .ui-dialog.ui-confirmdialog.ui-shadow {\n  width: 900px !important;\n  height: 400px !important; }\n\n:host/deep/ .confirmDialog .ui-dialog.ui-confirmdialog.ui-shadow .ui-g-4 {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n:host/deep/ .confirmDialog .ui-dialog.ui-confirmdialog.ui-shadow h4 {\n    padding: 0;\n    margin: 0;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcdGVsZW1hcmtldGluZ1xcdGVsZW1hcmtldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQ0FDSixFQUFBOztBQUVBO0VBQ0ksV0FBVztFQUNYLHFCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSnBCO0lBTVEsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBOztBQVRsQjtNQVdZLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTs7QUFLN0I7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdkO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtJQURwQztNQUdRLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUd6QjtJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEI7O0FBRUw7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxpQkFBaUIsRUFBQTs7QUFIekI7TUFLWSxpQkFBaUIsRUFBQTs7QUFMN0I7TUFRWSxpQkFBaUIsRUFBQTs7QUFSN0I7SUFZUSxpQkFBaUIsRUFBQTs7QUFaekI7SUFlUSxpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDSSx1QkFBdUI7RUFDdkIsd0JBQXdCLEVBQUE7O0FBRjVCO0lBSVEsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFOL0I7SUFTUSxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90ZWxlbWFya2V0aW5nL3RlbGVtYXJrZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLyAudWktbWVudWJhciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZmx0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXHJcbn1cclxuXHJcbi5iYXNpYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAud2hvbGV7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogNTlweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbn1cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmJnY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNmU5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmdjb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgIH1cclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi50YWxre1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTEuNSU7XHJcbn1cclxuLmdhcC1uYW1le1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWxre1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuLnBob25le1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbi5pbWdOYW1le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogIzAwOTREMlxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuY29uZmlybURpYWxvZyAudWktZGlhbG9nLnVpLWNvbmZpcm1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWctNCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing.component.ts ***!
  \***************************************************************************/
/*! exports provided: TeleMarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingComponent", function() { return TeleMarketingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TeleMarketingComponent = /** @class */ (function () {
    function TeleMarketingComponent(activatedRoute, teleMarketingHttpService, commfunc, router, confirmationService) {
        this.activatedRoute = activatedRoute;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.show = 1;
        this.custBasic = {};
        this.dataList = {};
        this.MarketingCampaigntType = [];
        this.voice_path = "";
        this.aconnectid = "";
        this.resultList = {}; //返回的数据
        this.showBtn = true; //拨打的状态\经办人是否是当前登录人的操作权限
        this.stepList = [];
        this.forbiddenDisplay = false;
        this.abusinesscode = [
            // { value: '010102', label: '存量营销' },
            // { value: '010103', label: '个性化营销' },
            { value: '010104', label: '枢纽直销' },
            { value: '010105', label: '信用卡直销' },
            { value: '010701', label: '批量预授信转电销' },
        ];
        this.atypecode = [
            { value: '0101', label: '营销类' },
            { value: '0107', label: '枢纽层' },
        ];
        this.codeValues(); //调用方法，获取全部码值
        this.MarketingCampaigntType = this.code['DXRASKTYPE']; //任务类型
        this.guaranteeModeOptions = this.code['GuaranteeMode']; //
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.urlParam = window.location.host;
    }
    TeleMarketingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var first = { label: '电销', value: '14' };
        this.MarketingCampaigntType.unshift(first);
        this.judgStatu();
        if (this.commfunc.getSessionDataCH('markFlag') == '2') { //已处理的数据\经办人是否是当前登录人
            this.showBtn = false;
        }
        else { //未处理
            this.showBtn = true;
        }
        this.dataList = JSON.parse(JSON.parse(this.commfunc.getSessionDataCH('dxlc')).dataMap);
        // this.taskId = JSON.parse(this.commfunc.getSessionDataCH('dxlc')).taskId;
        var params = {
            workEffortId: this.dataList.taskId,
            workEffortParentId: this.dataList.workEffortParentId,
            workEffortTypeId: this.dataList.workEffortTypeId
        };
        this.teleMarketingHttpService.queryCustCommunicationWorkList(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.returnList[0].createPartyId != _this.userId) { //登录人是经办人时
                    _this.showBtn = false;
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
        this.queryClick();
        this.queryslice();
        debugger;
        if (this.dataList.workEffortParentId == '01' || this.dataList.workEffortParentId == '20') { //直销(激活)
            this.queryLoanDetailInfo();
        }
        else if (this.dataList.workEffortParentId == '17' || this.dataList.workEffortParentId == '22') { //批量预授信转授信(激活)
            this.queryPreCreditDetailInfo();
        }
    };
    TeleMarketingComponent.prototype.queryslice = function () {
        var _this = this;
        this.stepList = [];
        if (this.dataList.obCustomercode) {
            var param = {
                custNo: this.dataList.obCustomercode,
            };
            this.teleMarketingHttpService.queryCustContactNumbers(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.acctNoteNum) {
                        var acctNoteNums = data.acctNoteNum.split(',');
                        acctNoteNums.forEach(function (item) {
                            _this.stepList.push({ label: item, value: item });
                        });
                    }
                    if (data.mobileNum && data.mobileNum != "***") {
                        _this.stepList.push({ label: data.mobileNum, value: data.mobileNum });
                    }
                    if (data.telNum && data.telNum != "***") {
                        _this.stepList.push({ label: data.telNum, value: data.telNum });
                    }
                    _this.stepList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.stepList);
                    if (_this.stepList.length == '0') {
                        if (_this.dataList.obPhone && _this.dataList.obPhone != "***") {
                            _this.stepList.push({ label: _this.dataList.obPhone, value: _this.dataList.obPhone });
                        }
                    }
                    _this.stepList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.stepList);
                    if (_this.dataList.obPhone && _this.dataList.obPhone != "***") {
                    }
                    else {
                        _this.dataList.obPhone = _this.stepList[0].value;
                    }
                    _this.dataList.obPhone = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.dataList.obPhone);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else {
            if (this.dataList.obPhone && this.dataList.obPhone != "***") {
                this.stepList.push({ label: this.dataList.obPhone, value: this.dataList.obPhone });
            }
        }
    };
    TeleMarketingComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //判断当前路由 改变样式active
    TeleMarketingComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'contact-record') {
                _this.show = 1;
            }
            else if (v === 'contact-record-history') {
                _this.show = 2;
            }
        });
    };
    //查询分机号
    TeleMarketingComponent.prototype.queryClick = function () {
        var _this = this;
        var param = {
            loginNo: this.userId
            // loginNo: '1084'
        };
        this.teleMarketingHttpService.getSoftphoneInfo(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var param_1 = {
                    ctiIp: data.ctiIp,
                    agentNo: data.agentNo,
                    aextention: data.aextention,
                    scallerno: data.scallerno
                };
                _this.commfunc.setSessionDataCH('resultList', JSON.stringify(param_1));
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
    //码值
    TeleMarketingComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TeleMarketingComponent.prototype.login_call2 = function () {
        var dataLists = JSON.parse(this.commfunc.getSessionDataCH('dxlc'));
        // let scallerno = '9';
        var scallerno = JSON.parse(this.commfunc.getSessionDataCH('resultList')).scallerno;
        dataLists.dataMap = JSON.parse(dataLists.dataMap);
        dataLists.dataMap.obPhone = this.dataList.obPhone;
        dataLists = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](dataLists);
        dataLists.dataMap = JSON.stringify(dataLists.dataMap);
        dataLists = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](dataLists);
        this.commfunc.setSessionDataCH('dxlc', JSON.stringify(dataLists));
        this.called = scallerno + this.dataList.obPhone;
        window['$caf']['phone'].open();
        window['$caf']['phone'].ready();
        window['$caf']['phone'].callout(this.called); //拨打
        this.call();
    };
    TeleMarketingComponent.prototype.login_call = function (num) {
        var _this = this;
        if (num == '1') { //客户
            var obBussCode = '';
            switch (this.dataList.workEffortParentId) { //外拨业务类型
                case '01' || '20':
                    obBussCode = '010104';
                    break; //枢纽直销
                case '16' || '21':
                    obBussCode = '010105';
                    break; //信用卡直销 
                case '17' || '22':
                    obBussCode = '010701';
                    break; //批量预授信
            }
            var param = {
                mobile: this.dataList.obPhone,
                obBussCode: obBussCode
            };
            this.teleMarketingHttpService.BZ_11003000105_02(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.flag && data.flag != '0') { //是-禁拨
                        // let MarketingCampaigntType = this.MarketingCampaigntType.filter((item) => {
                        //     return item.value == this.dataList.workEffortParentId
                        // })[0]['label'];
                        var atypecode_1 = ''; //业务类型
                        var index_1 = 1;
                        if (data.atypecode) {
                            var arrTemp = data.atypecode.split(',');
                            arrTemp.forEach(function (element) {
                                _this.atypecode.forEach(function (element2) {
                                    if (element == element2.value) {
                                        if (index_1 == 1) {
                                            atypecode_1 = atypecode_1 + element2.label;
                                        }
                                        else {
                                            atypecode_1 = atypecode_1 + ',' + element2.label;
                                        }
                                        index_1++;
                                    }
                                });
                            });
                        }
                        var abusinesscode_1 = ''; //外拨业务类型\回显
                        var index2_1 = 1;
                        if (data.abusinesscode) {
                            var arrTemp = data.abusinesscode.split(',');
                            arrTemp.forEach(function (element) {
                                _this.abusinesscode.forEach(function (element2) {
                                    if (element == element2.value) {
                                        if (index2_1 == 1) {
                                            abusinesscode_1 = abusinesscode_1 + element2.label;
                                        }
                                        else {
                                            abusinesscode_1 = abusinesscode_1 + ',' + element2.label;
                                        }
                                        index2_1++;
                                    }
                                });
                            });
                        }
                        _this.confirmationService.confirm({
                            message: "\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-12\">\n                                            <h4>\u8BE5\u53F7\u7801\u4E3A\u7981\u62E8\uFF0C\u8BF7\u786E\u8BA4</h4>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u5BA2\u6237\u59D3\u540D:<span>" + _this.dataList.obName + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u5BA2\u6237\u53F7:<span>" + _this.dataList.obCustomercode + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u624B\u673A\u53F7:<span>" + _this.dataList.obPhone + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u4E1A\u52A1\u7C7B\u578B:<span>" + atypecode_1 + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u5916\u62E8\u4E1A\u52A1:<span title=\"" + abusinesscode_1 + "\">" + abusinesscode_1 + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u751F\u6548\u65E5\u671F:<span>" + data.aenabledate + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u5931\u6548\u65E5\u671F:<span>" + data.adisabledate + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u521B\u5EFA\u4EBA:<span>" + data.aopername + "</span>\n                                        </div>\n                                        <div class=\"ui-g-4\">\n                                            \u521B\u5EFA\u65E5\u671F:<span>" + data.tscreatetime + "</span>\n                                        </div>\n                                    </div>\n                                ",
                            accept: function () {
                                _this.login_call2();
                            }
                        });
                    }
                    else {
                        _this.login_call2();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
    };
    //点击拨打按钮是调接口获取拨打次数
    TeleMarketingComponent.prototype.call = function () {
        var _this = this;
        var abusinesscode = '';
        if (this.dataList.workEffortParentId) {
            switch (this.dataList.workEffortParentId) {
                case '01' || '20':
                    abusinesscode = '010104';
                    break; //枢纽直销
                case '16' || '21':
                    abusinesscode = '010105';
                    break; //信用卡直销 
                case '17' || '22':
                    abusinesscode = '010701';
                    break; //批量预授信
            }
        }
        var param = {
            taskId: this.dataList.taskId,
            abusinesscode: abusinesscode,
            flag: '2'
        };
        this.teleMarketingHttpService.addCustCommunication(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
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
    TeleMarketingComponent.prototype.callend = function () {
        window['$caf'].phone.callend();
        window['$caf'].phone.cancelwork();
        this.divstyle('loginout');
        window['$caf'].phone.loginout();
    };
    TeleMarketingComponent.prototype.divstyle = function (type) {
        if (type == "login") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#logindiv').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#callenddiv').css('display', 'none');
        }
        else if (type == "loginout") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#logindiv').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#loginoutdiv').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#callenddiv').css('display', 'none');
        }
        else if (type == "callouting") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#logindiv').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#loginoutdiv').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#callenddiv').css('display', 'block');
        }
        else if (type == "notlogin") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#logindiv').css('display', 'block');
        }
    };
    TeleMarketingComponent.prototype.initCAF = function () {
        var AgentEvent_Hold_Type = '';
        window['$caf'].phone.config({
            // host: this.resultList.ctiIp,
            // port: 8000,
            // agentPwd: "cti-1234",
            // agentNo: this.resultList.agentNo,
            // phoneNumber: this.resultList.aextention,
            host: "10.1.97.27",
            port: 8000,
            agentPwd: "cti-1234",
            agentNo: "3001",
            phoneNumber: "4004"
        });
        window['$caf'].phone.listen(function (type, id, message) {
            if (id == "0") {
                this.divstyle("notlogin");
            }
            else if (id == "1") {
                alert("!!!!!");
                this.divstyle('login');
            }
            else if (id == "2") {
                this.divstyle('loginout');
            }
            else if (id == "5") { //挂机成功
                this.divstyle('loginout');
            }
            else if (id == "6") {
            }
            else if (id == "7") { //通话态单独处理,此处不做处理
            }
            else if (id == "8") {
                this.divstyle('rest');
            }
            else if (type == "callouting") { //外呼时间
                this.aconnectid = message;
                this.divstyle('callouting');
                this.startTime = this.commfunc.getFormatDate; //获取开始时间
            }
            else if (type == "AgentOther_PhoneAlerting") {
                this.callid = message;
                this.divstyle('AgentOther_PhoneAlerting');
            }
            else if (type == "AgentEvent_Auto_Answer") {
                this.divstyle('AgentEvent_Auto_Answer');
                this.clearClock();
                this.startClock();
            }
            else if (type == "AgentEvent_Hold") {
                if (AgentEvent_Hold_Type == '1') { //转保持
                }
                else if (AgentEvent_Hold_Type == '2') { //转咨询
                }
            }
            else if (type == "qxholdSuccess") {
            }
            else if (type == "stop_innerHelp_Success") {
            }
            else if (type == "confrence_Success") {
            }
            else if (type == "stop_confrence_Success") {
            }
            else if (type == "supervise_Success") {
            }
            else if (type == "qualitycontrol_Success") {
            }
            else if (type == "addinsert_Success") {
            }
            else if (type == "intercept_Success") {
            }
            else if (type == "anser_Success") {
            }
            else if (type == "Call_Out_Fail") {
                this.divstyle('loginout');
            }
            else if (type == 'callData') {
            }
            else if (type == 'setCallId') {
            }
            else if (type == 'cancelwork_fail') {
            }
            else if (type == 'restSuccess') {
            }
            else if (type == 'cancelrestSuccess') {
            }
            else if (type == 'AgentMediaEvent_Record') { //获取录音文件
                var startindx = message.lastIndexOf('fileName=') + 9;
                var endindx = message.lastIndexOf(".V3") + 3;
                this.voice_path = message.substring(startindx, endindx); //录音文件名
            }
            else if (type == 'callendSuccess') { //挂机事件
                alert("!!!!!!!!!!!!");
                alert(this.aconnectid); //电话记录id
                alert(this.voice_path); //录音文件名
                this.endTime = this.commfunc.getFormatDate; //获取开始时间
                var dateDiff = this.endTime - this.startTime; //时间差的毫秒数
                var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算相差天数
                var leavel = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
                var hours = Math.floor(leavel / (3600 * 1000)); //计算出小时数
                //计算相差分钟数
                var leavel2 = leavel % (3600 * 1000); //计算小时数后剩余的毫秒数
                var minutes = Math.floor(leavel2 / (3600 * 1000)); //计算相差分钟数
                //计算相差秒数
                var leavel3 = leavel2 % (60 * 1000); //计算分钟数后剩余的毫秒数
                var seconds = Math.round(leavel3 / 1000);
                this.dateTime = dayDiff + ':' + hours + ':' + minutes + ':' + seconds;
                var param = {
                    aconnectid: this.aconnectid,
                    aucid: this.voice_path,
                    obTime: this.dateTime
                };
                var paramObj = JSON.stringify(param);
                this.commfunc.setSessionDataCH('tapeInfo', paramObj);
            }
        });
    };
    TeleMarketingComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    TeleMarketingComponent.prototype.queryLoanDetailInfo = function () {
        var _this = this;
        var param = {
            custId: this.dataList.obCustomercode
        };
        this.teleMarketingHttpService.queryLoanDetailInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList['bussType'] = data.bussType;
                _this.dataList['loanAmt'] = data.loanAmt;
                _this.dataList['endDate'] = data.endDate;
                _this.dataList['EcardCreditLmt'] = data.EcardCreditLmt;
                var dxlc = JSON.parse(_this.commfunc.getSessionDataCH('dxlc'));
                dxlc['dataMap'] = JSON.stringify(_this.dataList);
                _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(dxlc));
                _this.msgs = [];
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
    TeleMarketingComponent.prototype.queryPreCreditDetailInfo = function () {
        var _this = this;
        var param = {
            workEffortId: this.dataList.taskId
        };
        this.teleMarketingHttpService.queryPreCreditDetailInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList['groupId'] = data.groupId; //客户群号
                _this.dataList['groupName'] = data.groupName; //客户群名称
                _this.dataList['productName'] = data.productName; //产品名称
                _this.dataList['guaranteeType'] = data.guaranteeType; //主担保方式
                _this.dataList['endDate'] = data.endDate; //授信到期日期
                _this.dataList['loanOfficerAdvises'] = data.loanOfficerAdvises; //信贷员建议额度(单位元)
                _this.dataList['principalLinkMan'] = data.principalLinkMan; //主联系人
                _this.dataList['principalLinkManOrg'] = data.principalLinkManOrg; //主联系人机构
                var dxlc = JSON.parse(_this.commfunc.getSessionDataCH('dxlc'));
                dxlc['dataMap'] = JSON.stringify(_this.dataList);
                _this.commfunc.setSessionDataCH('dxlc', JSON.stringify(dxlc));
                _this.msgs = [];
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
    TeleMarketingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'telemarketing',
            template: __webpack_require__(/*! ./telemarketing.component.html */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.html"),
            styles: [__webpack_require__(/*! ./telemarketing.component.scss */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.scss")],
            providers: [_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], TeleMarketingComponent);
    return TeleMarketingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing.module.ts ***!
  \************************************************************************/
/*! exports provided: TeleMarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingModule", function() { return TeleMarketingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _telemarketing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./telemarketing.routing */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.routing.ts");
/* harmony import */ var _telemarketing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telemarketing.component */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.ts");
/* harmony import */ var _contact_record_contact_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-record/contact-record.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.ts");
/* harmony import */ var _contact_record_history_contact_record_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-record-history/contact-record-history.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.ts");
/* harmony import */ var _contact_record_history_detail_contact_record_history_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-record-history-detail/contact-record-history-detail.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history-detail/contact-record-history-detail.component.ts");
/* harmony import */ var _contact_record_contact_record_module_contact_record_module_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-record/contact-record-module/contact-record-module.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record-module/contact-record-module.component.ts");
/* harmony import */ var _outer_rask_outer_rask_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./outer-rask/outer-rask.component */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.ts");
/* harmony import */ var app_pages_tzb_custom_telemarketing_telemarketing_list_telemarketing_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component */ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//电销
var TeleMarketingModule = /** @class */ (function () {
    function TeleMarketingModule() {
    }
    TeleMarketingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _telemarketing_routing__WEBPACK_IMPORTED_MODULE_5__["TeleMarketingRouting"]
            ],
            declarations: [
                _telemarketing_component__WEBPACK_IMPORTED_MODULE_6__["TeleMarketingComponent"],
                _contact_record_contact_record_component__WEBPACK_IMPORTED_MODULE_7__["ContactRecord"],
                _contact_record_history_contact_record_history_component__WEBPACK_IMPORTED_MODULE_8__["ContactRecordHistory"],
                _contact_record_history_detail_contact_record_history_detail_component__WEBPACK_IMPORTED_MODULE_9__["ContactRecordHistoryDetail"],
                _contact_record_contact_record_module_contact_record_module_component__WEBPACK_IMPORTED_MODULE_10__["ContactRecordDeploy"],
                _outer_rask_outer_rask_component__WEBPACK_IMPORTED_MODULE_11__["OutRask"],
                app_pages_tzb_custom_telemarketing_telemarketing_list_telemarketing_list_component__WEBPACK_IMPORTED_MODULE_12__["TelemarketingList"],
            ],
            providers: []
        })
    ], TeleMarketingModule);
    return TeleMarketingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/telemarketing.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/telemarketing.routing.ts ***!
  \*************************************************************************/
/*! exports provided: routes, TeleMarketingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingRouting", function() { return TeleMarketingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _telemarketing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemarketing.component */ "./src/app/pages/tzb/custom/telemarketing/telemarketing.component.ts");
/* harmony import */ var _contact_record_contact_record_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-record/contact-record.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record/contact-record.component.ts");
/* harmony import */ var _contact_record_history_contact_record_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-record-history/contact-record-history.component */ "./src/app/pages/tzb/custom/telemarketing/contact-record-history/contact-record-history.component.ts");
/* harmony import */ var _outer_rask_outer_rask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outer-rask/outer-rask.component */ "./src/app/pages/tzb/custom/telemarketing/outer-rask/outer-rask.component.ts");
/* harmony import */ var app_pages_tzb_custom_telemarketing_telemarketing_list_telemarketing_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component */ "./src/app/pages/tzb/custom/telemarketing/telemarketing-list/telemarketing-list.component.ts");






var routes = [
    {
        path: '',
        component: _telemarketing_component__WEBPACK_IMPORTED_MODULE_1__["TeleMarketingComponent"],
        children: [
            { path: '', redirectTo: 'contact-record', pathMatch: 'full' },
            {
                path: 'contact-record',
                component: _contact_record_contact_record_component__WEBPACK_IMPORTED_MODULE_2__["ContactRecord"]
            },
            {
                path: 'contact-record-history',
                component: _contact_record_history_contact_record_history_component__WEBPACK_IMPORTED_MODULE_3__["ContactRecordHistory"],
            },
        ]
    },
    {
        path: 'outer-rask',
        component: _outer_rask_outer_rask_component__WEBPACK_IMPORTED_MODULE_4__["OutRask"],
    },
    {
        path: 'telemarketing-list',
        component: app_pages_tzb_custom_telemarketing_telemarketing_list_telemarketing_list_component__WEBPACK_IMPORTED_MODULE_5__["TelemarketingList"],
    },
];
var TeleMarketingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=telemarketing-telemarketing-module.js.map