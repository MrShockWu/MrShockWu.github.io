(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-distribution-customer-distribution-module"],{

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- 基本信息 -->\r\n    <div class=\"ui-g tab-conter\">\r\n        <!-- 待受理名单 -->\r\n        <div class=\"ui-g-12 tab-list blue_bg\" *ngIf=\"dataList && dataList.dataSource=='01'\">\r\n            <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n            <div class=\"ui-g-10 ui-g-offset-1\">\r\n                <div class=\"ui-g-12 row-s-list-full\">\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <!-- <div class=\"ui-g-4 first-col-list\"> -->\r\n                        任务类型：\r\n                        <!-- </div>\r\n                    <div class=\"ui-g-8 second-col-list\"> -->\r\n                        {{dataList.taskType | codeValuePie:taskType}}\r\n                        <!-- </div> -->\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <!-- <div class=\"ui-g-4 first-col-list\"> -->\r\n                        数据来源：\r\n                        <!-- </div>\r\n                    <div class=\"ui-g-8 second-col-list\"> -->\r\n                        {{dataList.marketingObjectType | codeValuePie:marketingObjectType}}\r\n                        <!-- </div> -->\r\n                    </div>\r\n                    <div *ngFor=\"let item of tableList\">\r\n                        <div class=\"ui-g-4 col-list\" *ngIf=\"item.value && item.value.length>0\">\r\n                            <!-- <div class=\"ui-g-4 first-col-list\"> -->\r\n                            <span *ngIf=\"item.value && item.value.length>0\">{{item.name}}：</span>\r\n                            <!-- </div> -->\r\n                            <!-- <div class=\"ui-g-8 second-col-list\"> -->\r\n                            <span *ngIf=\"(item.ZH) && (item.ZH.length>0)\">{{item.ZH}}</span>\r\n                            <span *ngIf=\"(!item.ZH || (item.ZH && item.ZH.length == 0)) && (item.value) && (item.value.length>0)\">{{item.value}}</span>\r\n                            <!-- <span *ngIf=\"item.value && item.value.length>0 && item.key && item.key == 'idType'\">{{item.value | codeValuePie:cert_type}}</span>\r\n                            <span *ngIf=\"item.value && item.value.length>0 && item.key && item.key != 'idType'\">{{item.value}}</span> -->\r\n                            <span class=\"tabelBIco\" style=\"margin-bottom:13px;\" *ngIf=\"item.value && item.value.length>0 && item.key && item.key == 'custNo'\"\r\n                                (click)=\"lookReport()\">查看综合信用报告</span>\r\n                            <!-- </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"ui-g-4 col-list\">\r\n                    <div class=\"ui-g-4 first-col-list\">\r\n                        主联系人:\r\n                    </div>\r\n                    <div class=\"ui-g-8 second-col-list\">\r\n                        {{dataList.principalLinkmanName}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 col-list\">\r\n                    <div class=\"ui-g-4 first-col-list\">\r\n                        主联系人机构:\r\n                    </div>\r\n                    <div class=\"ui-g-8 second-col-list\">\r\n                        {{dataList.principalLinkmanOrg}}\r\n                    </div>\r\n                </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 批量预授信单个查询明细信息 -->\r\n        <div class=\"ui-g-12 tab-list blue_bg\" *ngIf=\"dataList && dataList.dataSource=='04'\">\r\n            <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n            <div class=\"ui-g-10 ui-g-offset-1\">\r\n                <div class=\"ui-g-12 row-s-list-full\">\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            任务类型：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{dataList.taskType | codeValuePie:taskType}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            申请时间：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.acDate}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            客户号：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.custNo}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            客户名称：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.custName}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            客群号：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.groupId}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            年龄：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.age}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            信贷员建议额度(元)：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{(creditSingleDetailList.loanOfficerAdvises/1)|number:'1.2-2'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            系统建议额度(元)：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{(creditSingleDetailList.loanSystemAdvises/1)|number:'1.2-2'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            第三方评价结果：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            <span class=\"groupNumStyle\" (click)=\"toThreeView()\" style=\"cursor:pointer;\">第三方评价</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            合同种类：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.contractType | codeValuePie:htzl}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            主担保方式：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.guaranteeType | codeValuePie:guaranteeModeOptions}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            产品名称：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.productName}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            计息方式：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.rateKind | codeValuePie:countInterrstFlagOptions}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            还款方式：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.returnKind | codeValuePie:repayTypeOptions}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            到期日期：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.endDate}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 col-list\">\r\n                        <div class=\"ui-g-5 first-col-list\">\r\n                            备注：\r\n                        </div>\r\n                        <div class=\"ui-g-7 second-col-list\">\r\n                            {{creditSingleDetailList.note}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- 自助渠道贷款 -->\r\n    <div class=\"ui-g tab-conter tab-list\" *ngIf=\"dataList && dataList.dataSource=='02'&&dataList['taskType']=='11'\">\r\n        <div class=\"ui-g-10 ui-g-offset-1 blue_bg\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12\" *ngIf=\"tapTip_q&&tapTip_q['verifyState']!='1'\">\r\n                    <span class=\"list-tit\">特殊提示：</span>\r\n                    <span>身份验真未通过，请线下获取征信授权</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    申请时间：{{getCustObj.applyDate}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    客户号：{{getCustObj.custNo}}\r\n                    <span class=\"tabelBIco\" (click)=\"lookReport()\">查看综合信用报告</span>\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    客户名称：{{getCustObj.custName}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    手机号码：{{getCustObj.custPhone}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    产品名称：{{getCustObj.productName}}\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    申请金额(元)：{{getCustObj.loanAmt}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    职业：{{getCustObj.applyerType | codeValuePie:applyerType}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    经营项目/工作单位：{{getCustObj.manageItem}}\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    主联系人：{{dataList.principalLinkmanName}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    推荐人：\r\n                    <span *ngIf=\"(getCustObj.referee && getCustObj.referee != '' && getCustObj.referee != null)\">{{getCustObj.referee}}</span>\r\n                    <span *ngIf=\"!(getCustObj.referee && getCustObj.referee != '' && getCustObj.referee != null)\">无</span>\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    常在城区：{{getCustObj.oftenRegion}}\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    贷款用途： {{getCustObj.loanPurpuse}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    详细地址： {{getCustObj.detailAddress}}\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--自助渠道信用卡 -->\r\n    <div class=\"ui-g tab-conter tab-list\" *ngIf=\"dataList && dataList.dataSource=='02'&&dataList['taskType']=='10'\">\r\n        <div class=\"ui-g-10 ui-g-offset-1 blue_bg\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12\" *ngIf=\"tapTip_q&&tapTip_q['verifyState']!='1'\">\r\n                    <span class=\"list-tit\">特殊提示：</span>\r\n                    <span>身份验真未通过，请线下获取征信授权</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    申请时间：{{getCustObj.applyDate}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    客户号：{{getCustObj.custNo}}\r\n                    <span class=\"tabelBIco\" (click)=\"lookReport()\">查看综合信用报告</span>\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    客户名称： {{getCustObj.custName}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n\r\n                <div class=\"first-col\">\r\n                    手机号码： {{getCustObj.custPhone}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    申请卡系列：{{getCustObj.applycationType}}\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    申请卡种： {{getCustObj.applycationCard}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    申请金额(元)：{{getCustObj.loanAmt}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    职业：{{getCustObj.applyerType | codeValuePie:applyerType}}\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    工作单位： {{getCustObj.manageItem}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    主联系人： {{dataList.principalLinkmanName}}\r\n                </div>\r\n\r\n                <div class=\"third-col\">\r\n                    推荐人：\r\n                    <span *ngIf=\"(getCustObj.referee && getCustObj.referee != '' && getCustObj.referee != null)\">{{getCustObj.referee}}</span>\r\n                    <span *ngIf=\"!(getCustObj.referee && getCustObj.referee != '' && getCustObj.referee != null)\">无</span>\r\n                </div>\r\n\r\n                <div class=\"five-col\">\r\n                    常在城区： {{getCustObj.oftenRegion}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    详细地址：{{getCustObj.detailAddress}}\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"reportDisplay\" width=\"900\" [(visible)]=\"reportDisplay\" modal=\"true\" class=\"reportTitle\">\r\n    <p-header>综合信用报告</p-header>\r\n    <reportDetail [inValue]=\"reportCustNm\" [inValueReportId]=\"inValueReportId\"></reportDetail>\r\n</p-dialog>\r\n<div class=\"progress\" *ngIf=\"progress\">\r\n    <p-dialog *ngIf=\"progress\" width=\"300\" height=\"300\" [(visible)]=\"progress\" modal=\"true\" class=\"progressTitle\">\r\n        <!-- <p-progressSpinner [style]=\"{width:'200px',height:'200px'}\"></p-progressSpinner> -->\r\n        <p-header>综合信用报告</p-header>\r\n        <img src=\"../../../../../assets/layout/images/timg.gif\" style=\"margin-top:31px;margin-bottom:30px;\">\r\n        <span style=\"display:inline-block;width:100%;text-align:center;letter-spacing:2px\">正在加载中，请稍等...</span>\r\n    </p-dialog>\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-conter {\n  background: #fff; }\n  .tab-conter.tab-list,\n  .tab-conter .tab-list {\n    font-size: 14px;\n    color: #696969; }\n  .tab-conter.tab-list .list-tit,\n    .tab-conter .tab-list .list-tit {\n      color: #000; }\n  .tab-conter.tab-list .tip-i,\n    .tab-conter .tab-list .tip-i {\n      font-style: normal;\n      color: #2ea6c9; }\n  .btn {\n  text-align: center; }\n  .btn .icoColor {\n    background: #ffc107; }\n  .btn .icoColor:hover {\n      background: #ffc107; }\n  .blue_bg {\n  background: #e4fbf9;\n  border-radius: 5px;\n  margin-bottom: 30px; }\n  .labeldisplay {\n  display: flex; }\n  .label-left {\n  text-align: right;\n  width: 40%; }\n  .label-right {\n  text-align: left;\n  width: 60%; }\n  .label-right .btn-class1 {\n    background-color: #19b0c8;\n    display: inline-block;\n    width: 63px;\n    height: 25px;\n    line-height: 25px;\n    text-align: center;\n    color: #fff;\n    border-radius: 3px;\n    margin-right: 106px; }\n  .label-right .btn-class1:hover {\n      cursor: pointer; }\n  .right-s {\n  text-align: right; }\n  .row-s-list-full {\n  width: 100%; }\n  .col-list {\n  width: 33%;\n  display: flex;\n  height: 47px;\n  text-align: left; }\n  .col-list .first-col-list {\n    text-align: right; }\n  .row-s {\n  width: 100%;\n  display: flex;\n  height: 47px;\n  padding-left: 94px; }\n  .row-s .first-col {\n    width: 33%;\n    text-align: left; }\n  .row-s .third-col {\n    text-align: right;\n    width: 33%;\n    text-align: left; }\n  .row-s .five-col {\n    width: 33%;\n    text-align: left; }\n  :host /deep/ .reportTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n  :host /deep/ .reportTitle .ui-dialog .ui-dialog-content {\n  background: #f3f3f4; }\n  :host /deep/ .progressTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n  .progress {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  margin-top: -200px;\n  width: 400px;\n  height: 400px;\n  background: #fff;\n  text-align: center; }\n  :host/deep/.progress .ui-dialog.ui-shadow {\n  width: 600px !important;\n  height: 300px !important;\n  min-width: 0px !important;\n  min-height: 0px !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  .groupNumStyle {\n  color: #19b0c8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vYnVzaW5lc3MtaW5mb3JtYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tQ2VudGVyXFxjdXN0b21lci1kaXN0cmlidXRpb25cXGJ1c2luZXNzLWluZm9ybWF0aW9uXFxidXNpbmVzcy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCOztJQUlRLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFMdEI7O01BT1ksV0FBVyxFQUFBO0VBUHZCOztNQVVZLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUFLMUI7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLG1CQUFtQixFQUFBO0VBSDNCO01BS1ksbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQ0osRUFBQTtFQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUZkO0lBSVEseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQVozQjtNQWNZLGVBQWUsRUFBQTtFQUkzQjtFQUNJLGlCQUFpQixFQUFBO0VBUXJCO0VBQ0ksV0FBVyxFQUFBO0VBRWY7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUpwQjtJQU1RLGlCQUFpQixFQUFBO0VBU3pCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFKdEI7SUFTUSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFWeEI7SUFtQlEsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQXJCeEI7SUErQlEsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBT3hCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxtQkFBbUIsRUFBQTtFQUV2QjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBO0VBRTlCO0VBQ0ksc0JBQXNCLEVBQUE7RUFFMUI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tQ2VudGVyL2N1c3RvbWVyLWRpc3RyaWJ1dGlvbi9idXNpbmVzcy1pbmZvcm1hdGlvbi9idXNpbmVzcy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAmLnRhYi1saXN0LFxyXG4gICAgLnRhYi1saXN0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2OTY5Njk7XHJcbiAgICAgICAgLmxpc3QtdGl0IHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXAtaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZWE2Yzk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5pY29Db2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibHVlX2JnIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNGZiZjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubGFiZWxkaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYWJlbC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDQwJVxyXG59XHJcblxyXG4ubGFiZWwtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICAuYnRuLWNsYXNzMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDYzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDZweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmlnaHQtc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vLyAubGlzdC10aXR7XHJcbi8vICAgICB3aWR0aDoyMCU7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gfVxyXG4ucm93LXMtbGlzdC1mdWxse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbC1saXN0e1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLmZpcnN0LWNvbC1saXN0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNlY29uZC1jb2wtbGlzdHtcclxuICAgICBcclxuICAgIH1cclxufVxyXG4udGFiZWxSZXBvcnRJY28ge1xyXG4vLyAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ucm93LXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDk0cHg7XHJcbiAgICAuZmlyc3QtY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgLy8gd2lkdGg6IDExJTtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyAuc2Vjb25kLWNvbHtcclxuICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgLy8gICAgIHdpZHRoOiAyMiU7XHJcbiAgICAvLyB9XHJcbiAgICAudGhpcmQtY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyAuZm91ci1jb2x7XHJcbiAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIC8vICAgICB3aWR0aDogMjUlO1xyXG4gICAgLy8gfVxyXG4gICAgLmZpdmUtY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyAuc2l4LWNvbHtcclxuICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgLy8gICAgIHdpZHRoOiAyMiU7XHJcbiAgICAvLyB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5yZXBvcnRUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0VGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmNDtcclxufVxyXG46aG9zdCAvZGVlcC8gLnByb2dyZXNzVGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8ucHJvZ3Jlc3MgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgeyAgICBcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: BusinessInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessInformation", function() { return BusinessInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.constant */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.constant.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BusinessInformation = /** @class */ (function () {
    function BusinessInformation(activatedRoute, customCenterHttpService, commfunc, httpService, httpServices, commonHttpService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.customCenterHttpService = customCenterHttpService;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.httpServices = httpServices;
        this.commonHttpService = commonHttpService;
        this.router = router;
        this.TZB_HTTP_CUS1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_CUS1"];
        this.getCustObj = {};
        this.msgs = [];
        this.resultList = {};
        this.dataList = {};
        this.tableList = [];
        this.cert_type = [];
        this.applyerType = [];
        // userId: string;
        this.reportDisplay = false;
        this.progress = false;
        this.marketingObjectType = [];
        this.taskType = [];
        this.creditSingleDetailList = {};
        this.repayTypeOptions = []; //还款方式
        this.guaranteeModeOptions = []; //担保方式
        this.countInterrstFlagOptions = []; //计息标志
        this.htzl = []; //
        this.codeValues(); //调用方法，获取全部码值
        this.cert_type = this.code['CERT_TYPE'];
        this.applyerType = this.code['applyerType'];
        this.marketingObjectType = this.code['marketingObjectType'];
        this.taskType = this.code['DXRASKTYPE'];
        this.repayTypeOptions = this.code['RepayType'];
        this.guaranteeModeOptions = this.code['GuaranteeModeCustRequest'];
        this.countInterrstFlagOptions = this.code['CountInterrstFlag'];
        this.htzl = this.code['Htzl'];
        this.resultList = JSON.parse(JSON.stringify(this.activatedRoute.snapshot.params));
        if (this.commfunc.getSessionDataCH('distributeParams')) {
            this.dataMapParamIn = JSON.parse(this.commfunc.getSessionDataCH('distributeParams'));
        }
        if (this.dataMapParamIn &&
            this.dataMapParamIn != '' &&
            this.dataMapParamIn != undefined &&
            this.dataMapParamIn != null &&
            this.dataMapParamIn != 'undefined') {
            this.dataList = this.dataMapParamIn;
        }
        console.log("as");
        // dataSource=='01' 或者 dataSource=='02' 时，查询接口，数据实时更新，'03' 时从dataMapParam中取；
        if (this.resultList.dataSource == '01' || this.resultList.dataSource == '02') {
            var infoBean = {
                dataSource: this.resultList.dataSource,
                requestSeqNo: this.resultList.requestSeqNo,
                workEffortId: this.resultList.workEffortId,
            };
            this.httpServices.queryCustomerInfoByWorkEffCondition(infoBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.workEffortList && data.workEffortList.length > 0) {
                        _this.dataList['fieldList'] = data.workEffortList[0].fieldList;
                        if (_this.dataList.dataSource == '01') {
                            _this.tableList = _this.dataList['fieldList'];
                        }
                        else if (_this.dataList.dataSource == '02' && _this.dataList['taskType'] == '10') {
                            // this.getCustObj = this.dataList['fieldList'][0];
                            // 从后端获取数据
                            _this.getCustData(_this.dataList.custRequestId);
                            _this.tapTip();
                        }
                        else if (_this.dataList.dataSource == '02' && _this.dataList['taskType'] == '11') {
                            _this.getCustObj = _this.dataList['fieldList'][0];
                            _this.tapTip();
                        }
                        _this.queryBasicInfo();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
        else if (this.resultList.dataSource == '03') {
            if (this.dataList.dataSource == '01') {
                this.tableList = this.dataList['fieldList'];
            }
            else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '10') {
                this.getCustObj = this.dataList['fieldList'][0];
                this.tapTip();
            }
            else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '11') {
                this.getCustObj = this.dataList['fieldList'][0];
                this.tapTip();
            }
            this.queryBasicInfo();
        }
        else if (this.resultList.dataSource == '04') {
            this.queryBatchPreCreditSingleDetailInfo();
        }
    }
    BusinessInformation.prototype.ngOnInit = function () {
    };
    BusinessInformation.prototype.queryBasicInfo = function () {
        var _this = this;
        // 查询证件类型和证件号码
        this.httpService.selectCustBriefInfo({ custNo: this.dataList['custNo'] }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.certType = data.idenType;
                _this.certID = data.idenNum;
            }
        });
    };
    // 批量预授信单个查询明细信息
    BusinessInformation.prototype.queryBatchPreCreditSingleDetailInfo = function () {
        var _this = this;
        var param = {
            serialNo: this.dataList['serialNo'],
            pageNum: 1,
            pageSize: 10,
        };
        this.httpService.queryBatchPreCreditSingleDetailInfo(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.resultList && data.resultList.length > 0) {
                    _this.creditSingleDetailList = data.resultList[0];
                    if (_this.creditSingleDetailList.loanOfficerAdvises) {
                        _this.creditSingleDetailList.loanOfficerAdvises = _this.creditSingleDetailList.loanOfficerAdvises * 10000;
                    }
                    if (_this.creditSingleDetailList.loanSystemAdvises) {
                        _this.creditSingleDetailList.loanSystemAdvises = _this.creditSingleDetailList.loanSystemAdvises * 10000;
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //码值
    BusinessInformation.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    //特殊提示
    BusinessInformation.prototype.tapTip = function () {
        var _this = this;
        var Certtype = '';
        var CertId = '';
        if (this.dataList['fieldList'][0]['idType']) {
            Certtype = this.dataList['fieldList'][0]['idType'];
        }
        else if (this.dataList['fieldList'][0]['globalType']) {
            Certtype = this.dataList['fieldList'][0]['globalType'];
        }
        if (this.dataList['fieldList'][0]['globalId']) {
            CertId = this.dataList['fieldList'][0]['globalId'];
        }
        else if (this.dataList['fieldList'][0]['idNo']) {
            CertId = this.dataList['fieldList'][0]['idNo'];
        }
        var param = {
            custName: this.dataList['fieldList'][0]['custName'],
            idType: Certtype,
            idNo: CertId,
            phoneNo: this.getCustObj.custPhone,
            cardNo: this.getCustObj.cardNo,
        };
        this.customCenterHttpService.selectVerifyHistory(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.tapTip_q = data;
            }
        });
    };
    //待受理名单
    BusinessInformation.prototype.waitList = function () {
        var _this = this;
        var param = {
            deId: this.dataList['deId'],
            dedId: this.dataList['dedId']
        };
        this.customCenterHttpService.queryCheckCustomer(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.attrvaluelist) {
                    _this.tableList = data.attrvaluelist;
                }
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //自助渠道贷款
    BusinessInformation.prototype.loans = function () {
        var _this = this;
        var param = {
            custRequestId: this.dataList['servSeqNo']
        };
        this.customCenterHttpService.getCustRequestInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.attrvaluelist) {
                    _this.getCustObj = data;
                }
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 自主渠道贷款
    BusinessInformation.prototype.getCustData = function (custRequestId) {
        var _this = this;
        var Postparam = {
            custRequestId: custRequestId,
        };
        this.commonHttpService.getCustRequestInfo(Postparam).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.getCustObj = data;
                // if (data.postList && data.postList.length > 0) {
                //     this.getCustObj = data
                // }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //主联系人
    BusinessInformation.prototype.checkPerson = function () {
        var _this = this;
        this.customCenterHttpService.findUser({ custNo: this.dataList.custNo }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.infoList != null) {
                    if (data.infoList.length > 0) {
                        _this.manageId = data.infoList[0].manageId;
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 查看BI报告
    BusinessInformation.prototype.lookReport = function () {
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var param = { custNo: this.dataList['custNo'] };
        var params = this.commfunc.handleParams(param);
        var TZB_HTTP_CUS1 = this.TZB_HTTP_CUS1 + app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_6__["API"].creditReportCheck;
        var _self = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__["ajax"]({
            url: TZB_HTTP_CUS1,
            type: 'POST',
            data: JSON.stringify(params),
            async: false,
            headers: {
                'x-ajax': '1',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.isCreate == "1") {
                        var userName = JSON.parse(_self.commfunc.getSessionDataCH('chName')).userName;
                        _self.creatMainMsg({ custNo: _self.dataList['custNo'], modNum: data.updatedNum, custName: _self.dataList['custName'], qryUserId: _self.userId, cretType: _self.certType, cretNo: _self.certID, qryUserName: userName, crdtReportNo: data.crdtReportNo, accessWay: '1' });
                    }
                    else {
                        _self.inValueReportId = data.reportId;
                        _self.reportCustNm = _self.dataList['custNo'];
                        _self.reportDisplay = true;
                    }
                }
                else {
                    _self.msgs = [];
                    _self.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    // 生成BI报告
    BusinessInformation.prototype.creatMainMsg = function (param) {
        var _this = this;
        this.progress = true;
        var params = this.commfunc.handleParams(param);
        this.httpServices.createReportMainInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.inValueReportId = data.reportId;
                _this.reportCustNm = _this.dataList['custNo'];
                _this.progress = false;
                _this.reportDisplay = true;
            }
            else {
                _this.progress = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.progress = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    // 第三方评价结果
    BusinessInformation.prototype.toThreeView = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate', { yushouxin: '1', groupId: this.creditSingleDetailList.groupId, custNo: this.creditSingleDetailList.custNo, doorId: null, custGroupView: 1, pageNum: 1, groupName: this.creditSingleDetailList.groupName }]);
    };
    BusinessInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "business-information",
            template: __webpack_require__(/*! ./business-information.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.html"),
            styles: [__webpack_require__(/*! ./business-information.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.scss")],
            providers: [_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__["CusViewHttpService"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_9__["CommonHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BusinessInformation);
    return BusinessInformation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g tab-conter tab-list\">\r\n    <div class=\"ui-g-10 ui-g-offset-1 blue_bg\">\r\n        <div class=\"ui-g-12 row-s\">\r\n            <div class=\"first-col\">\r\n                客户群编号：\r\n            </div>\r\n            <div class=\"second-col\">\r\n                {{dataList.groupId}}\r\n            </div>\r\n            <div class=\"third-col\">\r\n                客户群名称：\r\n            </div>\r\n            <div class=\"four-col\">\r\n                {{dataList.groupName}}\r\n            </div>\r\n            <div class=\"five-col\">\r\n                客户群类型：\r\n            </div>\r\n            <div class=\"six-col\">\r\n                {{dataList.groupType}}\r\n            </div>\r\n        </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    核心企业ID号：\r\n                </div>\r\n                <div class=\"second-col\">\r\n                    {{dataList.thirdPlatformId}}\r\n                </div>\r\n                <div class=\"third-col\">\r\n                    客户号：\r\n                </div>\r\n                <div class=\"four-col\">\r\n                    {{dataList.custNo}}\r\n                </div>\r\n                <div class=\"five-col\">\r\n                    客户名称：\r\n                </div>\r\n                <div class=\"six-col\">\r\n                    {{dataList.custName}}\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    证件类型：\r\n                </div>\r\n                <div class=\"second-col\">\r\n                    {{dataList.idenType | codeValuePie:cert_type}}\r\n                </div>\r\n                <div class=\"third-col\">\r\n                    证件号码：\r\n                </div>\r\n                <div class=\"four-col\">\r\n                    {{dataList.idenNum}}\r\n                </div>\r\n                <div class=\"five-col\">\r\n                    联系号码：\r\n                </div>\r\n                <div class=\"six-col\">\r\n                    {{dataList.telNum}}\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 row-s\">\r\n                <div class=\"first-col\">\r\n                    名单入群时间：\r\n                </div>\r\n                <div class=\"second-col\">\r\n                    {{dataList.createdStamp}}\r\n                </div>\r\n                <div class=\"third-col\">\r\n                    联系地址：\r\n                </div>\r\n                <div class=\"four-col\">\r\n                    {{dataList.address}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-conter {\n  background: #fff; }\n  .tab-conter.tab-list,\n  .tab-conter .tab-list {\n    font-size: 14px;\n    color: #696969; }\n  .tab-conter.tab-list .list-tit,\n    .tab-conter .tab-list .list-tit {\n      color: #000; }\n  .tab-conter.tab-list .tip-i,\n    .tab-conter .tab-list .tip-i {\n      font-style: normal;\n      color: #2ea6c9; }\n  .btn {\n  text-align: center; }\n  .btn .icoColor {\n    background: #ffc107; }\n  .btn .icoColor:hover {\n      background: #ffc107; }\n  .blue_bg {\n  background: #e4fbf9;\n  border-radius: 5px;\n  margin-bottom: 30px; }\n  .labeldisplay {\n  display: flex; }\n  .label-left {\n  text-align: right;\n  width: 40%; }\n  .label-right {\n  text-align: left;\n  width: 60%; }\n  .label-right .btn-class1 {\n    background-color: #19b0c8;\n    display: inline-block;\n    width: 63px;\n    height: 25px;\n    line-height: 25px;\n    text-align: center;\n    color: #fff;\n    border-radius: 3px;\n    margin-right: 106px; }\n  .label-right .btn-class1:hover {\n      cursor: pointer; }\n  .right-s {\n  text-align: right; }\n  .row-s-list-full {\n  width: 100%; }\n  .col-list {\n  width: 33%;\n  display: flex;\n  height: 47px; }\n  .col-list .first-col-list {\n    text-align: right; }\n  .row-s {\n  width: 100%;\n  display: flex;\n  height: 47px; }\n  .row-s .first-col {\n    width: 11%;\n    text-align: right; }\n  .row-s .second-col {\n    width: 22%; }\n  .row-s .third-col {\n    width: 10%;\n    text-align: right; }\n  .row-s .four-col {\n    width: 25%; }\n  .row-s .five-col {\n    width: 10%;\n    text-align: right; }\n  .row-s .six-col {\n    width: 22%; }\n  :host /deep/ .reportTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n  :host /deep/ .reportTitle .ui-dialog .ui-dialog-content {\n  background: #f3f3f4; }\n  :host /deep/ .progressTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n  .progress {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  margin-top: -200px;\n  width: 400px;\n  height: 400px;\n  background: #fff;\n  text-align: center; }\n  :host/deep/.progress .ui-dialog.ui-shadow {\n  width: 600px !important;\n  height: 300px !important;\n  min-width: 0px !important;\n  min-height: 0px !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vY3VzdG9tLWluZm9ybWF0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxcY3VzdG9tZXItZGlzdHJpYnV0aW9uXFxjdXN0b20taW5mb3JtYXRpb25cXGNvc3RvbS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCOztJQUlRLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFMdEI7O01BT1ksV0FBVyxFQUFBO0VBUHZCOztNQVVZLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUFLMUI7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLG1CQUFtQixFQUFBO0VBSDNCO01BS1ksbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQ0osRUFBQTtFQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUZkO0lBSVEseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQVozQjtNQWNZLGVBQWUsRUFBQTtFQUkzQjtFQUNJLGlCQUFpQixFQUFBO0VBUXJCO0VBQ0ksV0FBVyxFQUFBO0VBRWY7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUhoQjtJQUtRLGlCQUFpQixFQUFBO0VBU3pCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFIaEI7SUFNUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFQekI7SUFXUSxVQUFVLEVBQUE7RUFYbEI7SUFlUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFoQnpCO0lBb0JRLFVBQVUsRUFBQTtFQXBCbEI7SUF3QlEsVUFBVTtJQUNWLGlCQUFpQixFQUFBO0VBekJ6QjtJQTZCUSxVQUFVLEVBQUE7RUFHbEI7RUFDSSxrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUE7RUFFOUI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3VzdG9tZXItZGlzdHJpYnV0aW9uL2N1c3RvbS1pbmZvcm1hdGlvbi9jb3N0b20taW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWNvbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgJi50YWItbGlzdCxcclxuICAgIC50YWItbGlzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgIC5saXN0LXRpdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGlwLWkge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmVhNmM5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuaWNvQ29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYmx1ZV9iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRmYmY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxhYmVsZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGFiZWwtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiA0MCVcclxufVxyXG5cclxuLmxhYmVsLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgLmJ0bi1jbGFzczEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTA2cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJpZ2h0LXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy8gLmxpc3QtdGl0e1xyXG4vLyAgICAgd2lkdGg6MjAlO1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH1cclxuLnJvdy1zLWxpc3QtZnVsbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb2wtbGlzdHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgLmZpcnN0LWNvbC1saXN0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNlY29uZC1jb2wtbGlzdHtcclxuICAgICBcclxuICAgIH1cclxufVxyXG4udGFiZWxSZXBvcnRJY28ge1xyXG4vLyAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ucm93LXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAuZmlyc3QtY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgd2lkdGg6IDExJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5zZWNvbmQtY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgIH1cclxuICAgIC50aGlyZC1jb2x7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmZvdXItY29se1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIC5maXZlLWNvbHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2l4LWNvbHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAyMiU7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5yZXBvcnRUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0VGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmNDtcclxufVxyXG46aG9zdCAvZGVlcC8gLnByb2dyZXNzVGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8ucHJvZ3Jlc3MgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgeyAgICBcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CostomInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostomInformation", function() { return CostomInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.constant */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.constant.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CostomInformation = /** @class */ (function () {
    function CostomInformation(activatedRoute, customCenterHttpService, commfunc, httpService, httpServices) {
        this.activatedRoute = activatedRoute;
        this.customCenterHttpService = customCenterHttpService;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.httpServices = httpServices;
        this.TZB_HTTP_CUS1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_CUS1"];
        this.getCustObj = {};
        this.msgs = [];
        this.resultList = {};
        this.dataList = {};
        this.tableList = [];
        this.cert_type = [];
        // userId: string;
        this.reportDisplay = false;
        this.progress = false;
        this.codeValues(); //调用方法，获取全部码值
        this.cert_type = this.code['CERT_TYPE'];
        this.resultList = this.activatedRoute.snapshot.params;
        if (this.commfunc.getSessionDataCH('distributeParams')) {
            this.dataMapParamInCus = JSON.parse(this.commfunc.getSessionDataCH('distributeParams'));
        }
        if (this.dataMapParamInCus &&
            this.dataMapParamInCus != '' &&
            this.dataMapParamInCus != undefined &&
            this.dataMapParamInCus != null &&
            this.dataMapParamInCus != 'undefined') {
            this.dataList = this.dataMapParamInCus;
        }
    }
    CostomInformation.prototype.ngOnInit = function () {
        var _this = this;
        // 查询证件类型和证件号码
        this.httpService.selectCustBriefInfo({ custNo: this.dataList['custNo'] }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.certType = data.idenType;
                _this.certID = data.idenNum;
            }
        });
    };
    //码值
    CostomInformation.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    //特殊提示
    CostomInformation.prototype.tapTip = function () {
        var _this = this;
        var param = {
            custName: this.dataList['fieldList'][0]['custName'],
            idType: '01',
            idNo: this.dataList['fieldList'][0]['globalId']
        };
        this.customCenterHttpService.selectVerifyHistory(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.tapTip_q = data;
            }
        });
    };
    //待受理名单
    CostomInformation.prototype.waitList = function () {
        var _this = this;
        var param = {
            deId: this.dataList['deId'],
            dedId: this.dataList['dedId']
        };
        this.customCenterHttpService.queryCheckCustomer(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.attrvaluelist) {
                    _this.tableList = data.attrvaluelist;
                }
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //自助渠道贷款
    CostomInformation.prototype.loans = function () {
        var _this = this;
        var param = {
            custRequestId: this.dataList['servSeqNo']
        };
        this.customCenterHttpService.getCustRequestInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.attrvaluelist) {
                    _this.getCustObj = data;
                }
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //主联系人
    CostomInformation.prototype.checkPerson = function () {
        var _this = this;
        this.customCenterHttpService.findUser({ custNo: this.dataList.custNo }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.infoList != null) {
                    if (data.infoList.length > 0) {
                        _this.manageId = data.infoList[0].manageId;
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 查看BI报告
    CostomInformation.prototype.lookReport = function () {
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var param = { custNo: this.dataList['custNo'] };
        var params = this.commfunc.handleParams(param);
        var TZB_HTTP_CUS1 = this.TZB_HTTP_CUS1 + app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_6__["API"].creditReportCheck;
        var _self = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__["ajax"]({
            url: TZB_HTTP_CUS1,
            type: 'POST',
            data: JSON.stringify(params),
            async: false,
            headers: {
                'x-ajax': '1',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.isCreate == "1") {
                        var userName = JSON.parse(_self.commfunc.getSessionDataCH('chName')).userName;
                        _self.creatMainMsg({ custNo: _self.dataList['custNo'], modNum: data.updatedNum, custName: _self.dataList['custName'], qryUserId: _self.userId, cretType: _self.certType, cretNo: _self.certID, qryUserName: userName, crdtReportNo: data.crdtReportNo, accessWay: '1' });
                    }
                    else {
                        _self.inValueReportId = data.reportId;
                        _self.reportCustNm = _self.dataList['custNo'];
                        _self.reportDisplay = true;
                    }
                }
                else {
                    _self.msgs = [];
                    _self.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    // 生成BI报告
    CostomInformation.prototype.creatMainMsg = function (param) {
        var _this = this;
        this.progress = true;
        var params = this.commfunc.handleParams(param);
        this.httpServices.createReportMainInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.inValueReportId = data.reportId;
                _this.reportCustNm = _this.dataList['custNo'];
                _this.progress = false;
                _this.reportDisplay = true;
            }
            else {
                _this.progress = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.progress = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CostomInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "costom-information",
            template: __webpack_require__(/*! ./costom-information.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.html"),
            styles: [__webpack_require__(/*! ./costom-information.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.scss")],
            providers: [_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__["CusViewHttpService"]])
    ], CostomInformation);
    return CostomInformation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customer\">\r\n    <div class=\"customer-tab-header\">\r\n        <p-tabView (onChange)=\"handleChange($event)\">\r\n            <p-tabPanel header=\"业务信息\" [selected]=\"tabIndex=='0'\">\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n    </div>\r\n    <!-- 客户信息 -->\r\n    <business-information *ngIf=\"(tabIndex=='0') && (dataList.dataSource=='01'||dataList.dataSource=='02'||dataList.dataSource=='04') \"></business-information>\r\n    <costom-information *ngIf=\"dataList.dataSource == '03'\"></costom-information>\r\n    <debt-information-list [inValue]=\"debtValue\" *ngIf=\"tabIndex=='0'\"></debt-information-list>\r\n    <div class=\"btn\" *ngIf=\"tabIndex=='0' && !isHistory\">\r\n        <button pButton type=\"button\" label=\"分配\" (click)=\"checkSerIal('01')\" *ngIf=\"resultList.perssion=='?auth=zhhz'\"></button>\r\n        <button pButton type=\"button\" label=\"转介绍\" (click)=\"checkSerIal(05,1)\" *ngIf=\"resultList.perssion!='?auth=htzx'\"></button>\r\n        <button pButton type=\"button\" label=\"分配\" (click)=\"checkSerIal(05)\" *ngIf=\"resultList.perssion=='?auth=htzx'\"></button>\r\n        <!--同意： 后台中心或有放款权限的客户经理 -->\r\n        <button pButton type=\"button\" label=\"同意\" (click)=\"checkSerIal('03')\" *ngIf=\"(resultList.perssion=='?auth=htzx') || (resultList.perssion=='?auth=khjl' && hasPermiss)\"></button>\r\n        <!--否决： 任务类型非逾期案例，并且有放款权限的客户经理 -->\r\n        <button pButton type=\"button\" label=\"否决\" (click)=\"checkSerIal('04')\" *ngIf=\"(dataList['taskType'] != '08') && ((resultList.perssion!='?auth=khjl') || (resultList.perssion=='?auth=khjl' && hasPermiss)) \"></button>\r\n        <button pButton type=\"button\" label=\"打回\" class=\"icoColor\" (click)=\"checkSerIal('2')\" *ngIf=\"isBack\"></button>\r\n    </div>\r\n    <p-dialog styleClass=\"function\" [(visible)]=\"display\" modal=\"modal\" [positionTop]=200 class=\"my-cust-overf\" *ngIf=\"display\"\r\n        (onHide)=\"close()\">\r\n        <p-header *ngIf=\"state=='04'\">否决</p-header>\r\n        <p-header *ngIf=\"state=='05' && resultList.perssion!='?auth=htzx'\">转介绍</p-header>\r\n        <p-header *ngIf=\"state=='05' && resultList.perssion=='?auth=htzx'\">分配</p-header>\r\n        <p-header *ngIf=\"state=='2'\">打回</p-header>\r\n        <!-- 否决 -->\r\n        <ul class=\"veto\" *ngIf=\"state=='04'\">\r\n            <li class=\"\">\r\n                <span class=\"veto-tip\">一级原因：</span>\r\n                <div class=\"veto-select\">\r\n                    <p-dropdown [options]=\"vetoFirsts\" [(ngModel)]=\"vetoBean.oneVetoReason\" (onChange)=\"vetoChange($event)\"></p-dropdown>\r\n                </div>\r\n            </li>\r\n            <li class=\"\">\r\n                <span class=\"veto-tip\">二级原因：</span>\r\n                <div class=\"veto-select\">\r\n                    <!-- 个人因素 -->\r\n                    <p-dropdown [options]=\"vetoOption\" [(ngModel)]=\"vetoBean.twoVetoReason\" (onChange)=\"vetoChangeTwoReson($event)\"></p-dropdown>\r\n                </div>\r\n\r\n            </li>\r\n            <li class=\"\" *ngIf=\"bzIsshow\">\r\n                <span class=\"veto-tip\">备注：</span>\r\n                <div class=\"veto-select\">\r\n                    <!-- 个人因素 -->\r\n                    <textarea rows=\"3\" pInputTextarea [(ngModel)]=\"comments\"></textarea>\r\n                </div>\r\n            </li>\r\n            <li class=\"btn\">\r\n                <button pButton type=\"button\" label=\"否决\" class=\"icoColor\" (click)=\"vetoClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </li>\r\n        </ul>\r\n        <!-- 转介绍 -->\r\n        <ul class=\"veto\" *ngIf=\"state=='05'\">\r\n            <li>\r\n                <span class=\"veto-tip turn-tip\">接收机构：</span>\r\n                <!-- <div class=\"veto-select turn-select\">\r\n                    <input type=\"text\" pInputText readonly (click)=\"turnStaff()\" [(ngModel)]=\"personName\" />\r\n                </div> -->\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                    <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <span class=\"veto-tip turn-tip\">接收人：</span>\r\n                <!-- <div class=\"veto-select turn-select\">\r\n                    <input type=\"text\" pInputText readonly (click)=\"turnPost()\" [(ngModel)]=\"postName\" />\r\n                </div> -->\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"personName_new\" disabled/>\r\n                    <div (click)=\"perShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li *ngIf=\"zjs\">\r\n                <span class=\"veto-tip turn-tip\">原因：</span>\r\n                <div class=\"veto-select turn-select\">\r\n                    <p-dropdown [options]=\"TurnReson\" [(ngModel)]=\"subApproveMapBean.info\" (onChange)=\"zjsChange($event)\"></p-dropdown>\r\n                    <!-- 下拉选项为其他时，需录入原因 -->\r\n                    <div class=\"ui-g-12\" style=\"padding-right:0;padding-left: 0;\" *ngIf=\"subApproveMapBean.info=='03'\">\r\n                        <!-- <input type=\"text\" pInputText [(ngModel)]=\"otherInfo\" /> -->\r\n                        <textarea type=\"text\" class=\"textArea\" pInputTextArea [(ngModel)]=\"otherInfo\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton type=\"button\" label=\"确定\" class=\"icoColor\" (click)=\"rurnClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </div>\r\n        </ul>\r\n        <!-- 打回 -->\r\n        <ul class=\"goBack\" *ngIf=\"state=='2'\">\r\n            <li>打回原因：</li>\r\n            <li>\r\n                <textarea pInputTextarea [(ngModel)]=\"subApproveMapBean.info\" autoResize=\"false\"></textarea>\r\n            </li>\r\n            <li class=\"btn\">\r\n                <button pButton type=\"button\" label=\"打回\" class=\"icoColor\" (click)=\"hitClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </li>\r\n        </ul>\r\n    </p-dialog>\r\n</div>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 分配员工 -->\r\n<p-dialog *ngIf=\"personDis\" [(visible)]=\"personDis\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>员工列表</p-header>\r\n    <person-choose *ngIf=\"personDis\" [personId]=\"orgId\" (outValue)=\"personDiss($event)\"></person-choose>\r\n</p-dialog>\r\n<!-- 员工 -->\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<!-- 岗位 -->\r\n<p-dialog *ngIf=\"postPage\" [(visible)]=\"postPage\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>岗位列表</p-header>\r\n    <post-choose *ngIf=\"postPage\" [personId]=\"bussinessMap.specifyNextOpers\" (outValue)=\"postInfor($event)\"></post-choose>\r\n</p-dialog>\r\n<!-- 审批选人 -->\r\n<p-dialog *ngIf=\"examineDisplay\" header=\"分配\" [(visible)]=\"examineDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=100\r\n    class=\"customer-distri-contactf\">\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"extableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"'暂无数据'\">\r\n            <p-column header=\"客户经理工号\" field=\"userId\"></p-column>\r\n            <p-column header=\"客户经理名称\" field=\"userName\"></p-column>\r\n        </p-dataTable>\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <button pButton label=\"确定\" (click)=\"doSubmit()\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog class=\"personShowStyle\" *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" baseZIndex='1' width=\"900\"\r\n    [responsive]=\"true\" [positionTop]=10>\r\n    <query-cust-org [inValue]=\"inValueOrg\" (outValue)=\"treeCall($event)\"></query-cust-org>\r\n</p-dialog>\r\n<p-dialog class=\"personShowStyle\" *ngIf=\"personShow\" [(visible)]=\"personShow\" modal=\"modal\" baseZIndex='1' width=\"900\" [responsive]=\"true\"\r\n    [positionTop]=10>\r\n    <query-cust-post [inValue]=\"inValue\" (outValue)=\"perTreeCall($event)\"></query-cust-post>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer .customer-tab-header {\n  background: #fff;\n  padding: 9px 7px 10px; }\n\n.customer .btn {\n  text-align: center;\n  margin-left: 18px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.customer .btn .icoColor {\n    background: #ffc107; }\n\n.customer .btn .icoColor:hover {\n      background: #ffc107; }\n\n.customer .veto {\n  width: 400px;\n  height: 300px;\n  margin: auto;\n  margin-top: 10px;\n  list-style-type: none;\n  color: #000;\n  padding: 1em 0;\n  zoom: 1; }\n\n.customer .veto::after {\n    content: '';\n    clear: both; }\n\n.customer .veto li {\n    margin-top: 25px;\n    height: 26px;\n    line-height: 26px; }\n\n.customer .veto li:first-child {\n      margin-top: 0; }\n\n.customer .veto li .veto-tip {\n      display: block;\n      float: left;\n      width: 100px;\n      font-size: 14px; }\n\n.customer .veto li .veto-tip.turn-tip {\n        width: 90px; }\n\n.customer .veto li .veto-select {\n      float: right;\n      width: 270px; }\n\n.customer .veto li .veto-select.turn-select {\n        width: 255px; }\n\n.customer .agree {\n  margin: auto;\n  margin-top: 70px;\n  text-align: center; }\n\n.customer .agree dt {\n    font-size: 20px; }\n\n.customer .agree dd.btn {\n    margin-top: 35px;\n    margin-left: 0; }\n\n.customer .goBack {\n  list-style-type: none;\n  margin: auto;\n  width: 477px;\n  padding: 0;\n  margin-top: 15px; }\n\n.customer .goBack textarea {\n    resize: none;\n    width: 477px;\n    height: 105px;\n    margin-top: 9px; }\n\n.customer .goBack .btn {\n    margin-top: 10px; }\n\n:host/deep/ .ui-tabview-panel {\n  padding: 0 !important; }\n\n:host/deep/ .my-cust-overf .ui-dialog.ui-shadow {\n  width: 542px !important;\n  height: 350px !important;\n  border-radius: 10px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  padding: 0 !important; }\n\n:host /deep/ .customer-distri-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .customer-distri-contactf .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .myReport .hold-product-b {\n  width: 8% !important;\n  margin: 0px;\n  margin-right: 1%; }\n\n:host/deep/ .myReport .hold-product-bl {\n  width: 8% !important;\n  margin: 0px; }\n\n:host/deep/ .myReport .contentHeight {\n  overflow: inherit !important;\n  background-color: #fff !important; }\n\n.spls {\n  padding: 0px; }\n\n.queryinputbtn {\n  float: right;\n  display: flex;\n  width: 255px; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px;\n    cursor: pointer; }\n\n:host/deep/ .personShowStyle .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.textArea {\n  width: 100%;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tQ2VudGVyXFxjdXN0b21lci1kaXN0cmlidXRpb25cXGN1c3RvbWVyLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFIN0I7RUFNUSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFUM0I7SUFXWSxtQkFBbUIsRUFBQTs7QUFYL0I7TUFhZ0IsbUJBQW1CLEVBQUE7O0FBYm5DO0VBa0JRLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPLEVBQUE7O0FBekJmO0lBMkJZLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBNUJ2QjtJQStCWSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQWpDN0I7TUFtQ2dCLGFBQWEsRUFBQTs7QUFuQzdCO01Bc0NnQixjQUFjO01BQ2QsV0FBVztNQUNYLFlBQVk7TUFFWixlQUFlLEVBQUE7O0FBMUMvQjtRQTRDb0IsV0FBVyxFQUFBOztBQTVDL0I7TUFnRGdCLFlBQVk7TUFDWixZQUFZLEVBQUE7O0FBakQ1QjtRQW9Eb0IsWUFBWSxFQUFBOztBQXBEaEM7RUEwRFEsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUE1RDFCO0lBOERZLGVBQWUsRUFBQTs7QUE5RDNCO0lBaUVZLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBbEUxQjtFQXNFUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBMUV4QjtJQTRFWSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlLEVBQUE7O0FBL0UzQjtJQWtGWSxnQkFBZ0IsRUFBQTs7QUFLNUI7RUFDSSxxQkFDSixFQUFBOztBQUVBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBRVEsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSxvQkFBb0I7RUFDcEIsV0FBVyxFQUFBOztBQVJuQjtFQVdRLDRCQUE0QjtFQUM1QixpQ0FBaUMsRUFBQTs7QUFJekM7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBSGhCO0lBS1Esa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUmxDO0lBV1EsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3VzdG9tZXItZGlzdHJpYnV0aW9uL2N1c3RvbWVyLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lciB7XHJcbiAgICAuY3VzdG9tZXItdGFiLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA5cHggN3B4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5pY29Db2xvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC52ZXRvIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICAgICAgem9vbTogMTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZldG8tdGlwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAmLnR1cm4tdGlwIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmV0by1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgJi50dXJuLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFncmVlIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRkLmJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5nb0JhY2sge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQ3N3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3N3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXctcGFuZWwge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5teS1jdXN0LW92ZXJmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA1NDJweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3VzdG9tZXItZGlzdHJpLWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmN1c3RvbWVyLWRpc3RyaS1jb250YWN0ZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXlSZXBvcnQge1xyXG4gICAgLmhvbGQtcHJvZHVjdC1iIHtcclxuICAgICAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgfVxyXG4gICAgLmhvbGQtcHJvZHVjdC1ibCB7XHJcbiAgICAgICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudEhlaWdodCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGxzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyNTVweDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucGVyc29uU2hvd1N0eWxlIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0QXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustomerDistribution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDistribution", function() { return CustomerDistribution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/business-information.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean.ts");
/* harmony import */ var app_pages_tzb_custom_custom_view_report_bean_report_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-view/report/bean/report.bean */ "./src/app/pages/tzb/custom/custom-view/report/bean/report.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _http_custom_center_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../http/custom-center.http.constant */ "./src/app/pages/tzb/customCenter/http/custom-center.http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CustomerDistribution = /** @class */ (function () {
    function CustomerDistribution(commfunc, confirmationService, customCenterHttpService, activatedRoute, httpService, commonHttpService) {
        var _this = this;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.customCenterHttpService = customCenterHttpService;
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.commonHttpService = commonHttpService;
        this.TZB_HTTP_CUS1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_HTTP_CUS1"];
        this.reportBean = new app_pages_tzb_custom_custom_view_report_bean_report_bean__WEBPACK_IMPORTED_MODULE_7__["ReportBean"]();
        this.msgs = [];
        this.vetoFirsts = []; //否决的一级原因
        this.tabIndex = '0';
        this.TurnReson = []; //转介绍原因
        this.personPage = false;
        this.vetoScrondOne = [];
        this.ex = [];
        this.resultList = {};
        this.bussinessMap = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_6__["BussinessMap"]();
        this.appproResultBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_6__["AppproResultBean"]();
        this.vetoBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_6__["VetoBean"]();
        this.subApproveMapBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_6__["SubApproveMapBean"]();
        this.dataList = {};
        this.personVeto = [];
        this.financeVeto = [];
        this.manageVeto = [];
        this.serveVeto = [];
        this.otherVeto = [];
        this.vetoOption = [];
        this.isBack = false;
        this.isHistory = false;
        this.orgTreePage = false;
        this.personShow = false;
        this.bzIsshow = false;
        this.votePost = '';
        this.postNameVeto = '';
        this.reasonOne = ''; // 否决一级原因
        this.reasonTwo = ''; // 否决二级原因
        this.zjs = true;
        this.hasPermiss = true;
        this.flag = true; //判断转介绍是否调服务
        this.resultList = this.activatedRoute.snapshot.params;
        if (this.commfunc.getSessionDataCH('distributeParams')) {
            this.dataMapParam = JSON.parse(this.commfunc.getSessionDataCH('distributeParams'));
            //续卡
            debugger;
            if (this.dataMapParam.acountNo) {
                var cardType = this.dataMapParam.acountNo.slice(13, 14);
                //'0'主卡续卡，'2'续卡附卡
                this.dataMapParam['cardType'] = cardType == '1' ? '0' : '2';
                this.dataMapParam['loanAcctNo'] = this.dataMapParam.acountNo;
            }
        }
        if (this.resultList.markFlag == '2') {
            this.isHistory = true;
        }
        if (this.resultList.perssion != '?auth=htzx') {
            this.zjs = true;
        }
        else {
            this.zjs = false;
        }
        if (this.dataMapParam &&
            this.dataMapParam != '' &&
            this.dataMapParam != undefined &&
            this.dataMapParam != null &&
            this.dataMapParam != 'undefined') {
            this.dataList = this.dataMapParam;
        }
        // dataSource=='01' 或者 dataSource=='02' 时，查询接口，数据实时更新，'03' 时从dataMapParam中取；
        if (this.resultList.dataSource == '01' || this.resultList.dataSource == '02') {
            var infoBean = {
                dataSource: this.resultList.dataSource,
                requestSeqNo: this.resultList.requestSeqNo,
                workEffortId: this.resultList.workEffortId,
            };
            this.httpService.queryCustomerInfoByWorkEffCondition(infoBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.workEffortList && data.workEffortList.length > 0) {
                        _this.dataList['fieldList'] = data.workEffortList[0].fieldList;
                        _this.queryBasicInfo();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
        else if (this.resultList.dataSource == '03') {
            this.queryBasicInfo();
        }
        else if (this.resultList.dataSource == '04') {
            this.queryBasicInfo();
        }
        this.codeValues(); //调用方法，获取全部码值
        this.TurnReson = this.code['TurnReson']; //转介绍原因
        this.vetoFirsts = this.code['VETOFIRDTS']; //一级原因
        this.personVeto = this.code['personVeto']; //二级原因-个人原因
        this.financeVeto = this.code['financeVeto']; //财务因素
        this.manageVeto = this.code['manageVeto']; //经营因素
        this.serveVeto = this.code['serveVeto']; //服务因素
        this.otherVeto = this.code['otherVeto']; //其他原因 
        if (this.resultList.taskActors && this.resultList.taskActors != '') {
            this.businessId = this.resultList.taskActors.split(',')[0] + ',' + this.resultList.taskId;
        }
    }
    CustomerDistribution.prototype.ngOnInit = function () {
        var _this = this;
        this.vetoBean.oneVetoReason = this.vetoFirsts[0].value;
        this.tabIndex = '0';
        // 判断债务信息样式头和进口
        this.debtValue = {
            isCreditCcm: false
        };
        // 获取任职机构
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (user.extParam && user.extParam.orgId) {
            this.orgId = user.extParam.orgId;
        }
        ;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var commonHeaderss = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var postIdparam = commonHeaderss.extParam['postId'];
        var Postparam = {
            pageSize: '999999',
            postId: postIdparam,
        };
        this.commonHttpService.queryVaguePostList(Postparam).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.postList && data.postList.length > 0) {
                    _this.postNameVeto = data.postList[0].postName;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        // 查询当前登陆用户是否有放款权限
        var userPermissin = {
            tellerId: this.userId,
        };
        this.commonHttpService.queryPermissionByTellerId(userPermissin).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.permissionsMap && data.permissionsMap['loanPermission'] == '1') {
                    _this.hasPermiss = true;
                }
                else {
                    _this.hasPermiss = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomerDistribution.prototype.queryBasicInfo = function () {
        var _this = this;
        if (this.dataList['taskType'] != '08') {
            if (this.dataList['dataSourceId'] == 'BR00A') {
                this.inValueOrg = 'T0000'; //台行
            }
            else if (this.dataList['dataSourceId'] == 'BR00B') {
                this.inValueOrg = 'C0000'; //村镇
            }
        }
        else {
            this.inValueOrg = '0000'; //全行
        }
        this.cardMsg = {};
        if (this.dataList.cusAssignFlag) {
            this.isBack = true;
        }
        else {
            this.isBack = false;
        }
        if (this.dataList.dataSource == '01') {
            this.dataList['fieldList'].forEach(function (e) {
                if (e['key'] == 'custNo' || e['key'] == 'custId') {
                    _this.cardMsg['custNo'] = e['value'];
                }
                if (e['key'] == 'custName') {
                    _this.cardMsg['custName'] = e['value'];
                }
                if (e['key'] == 'globalId' || e['key'] == 'idNo') {
                    _this.cardMsg['cetId'] = e['value'];
                }
                if (e['key'] == 'idType' || e['key'] == 'globalType') {
                    _this.cardMsg['cretType'] = e['value'];
                }
            });
        }
        else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '10') {
            this.cardMsg['custName'] = this.dataList['fieldList'][0]['custName'];
            if (this.dataList['fieldList'][0]['custId']) {
                this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custId'];
            }
            else if (this.dataList['fieldList'][0]['custNo']) {
                this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custNo'];
            }
            if (this.dataList['fieldList'][0]['globalId']) {
                this.cardMsg['cetId'] = this.dataList['fieldList'][0]['globalId'];
            }
            else if (this.dataList['fieldList'][0]['idNo']) {
                this.cardMsg['cetId'] = this.dataList['fieldList'][0]['idNo'];
            }
            if (this.dataList['fieldList'][0]['idType']) {
                this.cardMsg['cretType'] = this.dataList['fieldList'][0]['idType'];
            }
            else if (this.dataList['fieldList'][0]['globalType']) {
                this.cardMsg['cretType'] = this.dataList['fieldList'][0]['globalType'];
            }
        }
        else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '11') {
            this.cardMsg['custName'] = this.dataList['fieldList'][0]['custName'];
            if (this.dataList['fieldList'][0]['custId']) {
                this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custId'];
            }
            else if (this.dataList['fieldList'][0]['custNo']) {
                this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custNo'];
            }
            if (this.dataList['fieldList'][0]['globalId']) {
                this.cardMsg['cetId'] = this.dataList['fieldList'][0]['globalId'];
            }
            else if (this.dataList['fieldList'][0]['idNo']) {
                this.cardMsg['cetId'] = this.dataList['fieldList'][0]['idNo'];
            }
            if (this.dataList['fieldList'][0]['idType']) {
                this.cardMsg['cretType'] = this.dataList['fieldList'][0]['idType'];
            }
            else if (this.dataList['fieldList'][0]['globalType']) {
                this.cardMsg['cretType'] = this.dataList['fieldList'][0]['globalType'];
            }
        }
        else if (this.dataList.dataSource == '03') {
            this.cardMsg['custName'] = this.dataList['custName'];
            if (this.dataList['custId']) {
                this.cardMsg['custNo'] = this.dataList['custId'];
            }
            else if (this.dataList['custNo']) {
                this.cardMsg['custNo'] = this.dataList['custNo'];
            }
            if (this.dataList['globalId']) {
                this.cardMsg['cetId'] = this.dataList['globalId'];
            }
            else if (this.dataList['idNo']) {
                this.cardMsg['cetId'] = this.dataList['idNo'];
            }
            if (this.dataList['idType']) {
                this.cardMsg['cretType'] = this.dataList['idType'];
            }
            else if (this.dataList['globalType']) {
                this.cardMsg['cretType'] = this.dataList['globalType'];
            }
        }
        else if (this.dataList.dataSource == '04') {
            var arr = this.dataList.fieldList[0].resultList[0];
            this.cardMsg['custNo'] = arr['custNo'];
            this.cardMsg['custName'] = arr['custName'];
            this.cardMsg['cetId'] = arr['idenNum'];
            this.cardMsg['cretType'] = arr['idenType'];
            this.dataList['globalType'] = arr['idenType']; // 证件类型
            this.dataList['globalId'] = arr['idenNum']; // 证件号码
            this.dataList['loanPurpuse'] = arr['idenNum']; // 证件号码
            this.dataList['applyDate'] = arr['groupAcDate']; // 申请日期
        }
    };
    //码值
    CustomerDistribution.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomerDistribution.prototype.handleChange = function (e) {
        this.tabIndex = e.index;
        if (this.tabIndex == '0') {
        }
        else if (this.tabIndex == '1') {
            this.queryReportList();
        }
    };
    //查询报告列表
    CustomerDistribution.prototype.queryReportList = function () {
        var _this = this;
        this.reportBean.custNo = this.cardMsg['custNo'];
        this.httpService.compresiveCreditReportListQry(this.reportBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.reportList && data.reportList.length > 0) {
                    _this.inValueReportId = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](data.reportList[0]['reportId']);
                    _this.cusId = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](data.reportList[0]['custNo']);
                    _this.customerDistribute = '1';
                }
                else {
                    _this.report();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    // 综合授信分析报告--李聪--2018/05/14
    CustomerDistribution.prototype.report = function () {
        var param = { custNo: this.cardMsg['custNo'] };
        var params = this.commfunc.handleParams(param);
        var TZB_HTTP_CUS1 = this.TZB_HTTP_CUS1 + _http_custom_center_http_constant__WEBPACK_IMPORTED_MODULE_9__["API"].creditReportCheck;
        var _self = this;
        jquery__WEBPACK_IMPORTED_MODULE_5__["ajax"]({
            url: TZB_HTTP_CUS1,
            type: 'POST',
            data: JSON.stringify(params),
            async: false,
            headers: {
                'x-ajax': '1',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.isCreate == "1") {
                        var userName = JSON.parse(_self.commfunc.getSessionDataCH('chName')).userName;
                        _self.creatMainMsg({ custNo: _self.cardMsg['custNo'], modNum: data.updatedNum, custName: _self.cardMsg['custName'], qryUserId: _self.userId, cretType: _self.cardMsg['cretType'], cretNo: _self.cardMsg['cetId'], qryUserName: userName, crdtReportNo: data.crdtReportNo });
                    }
                    else {
                        _self.inValueReportId = data.reportId;
                        _self.reportCustNm = _self.cardMsg['custNo'];
                    }
                }
                else {
                    _self.msgs = [];
                    _self.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            },
            error: function (err) {
            }
        });
    };
    //上行短信失效处理
    CustomerDistribution.prototype.disabledMsgUpside = function () {
        var _this = this;
        var params = {
            businessId: this.businessId,
            custNo: this.dataList['custNo']
        };
        this.httpService.disabledMsgUpside(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.disposeSchedule();
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
    CustomerDistribution.prototype.creatMainMsg = function (param) {
        var _this = this;
        var params = this.commfunc.handleParams(param);
        this.httpService.createReportMainInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.inValueReportId = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](data.inValueReportIdBak);
                _this.cusId = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](data.cusIdBak);
                _this.customerDistribute = '1';
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
    CustomerDistribution.prototype.turnPost = function () {
        if (this.personName == null && this.personName == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选人员！' }];
        }
        else {
            this.postPage = true;
        }
    };
    CustomerDistribution.prototype.show = function (value) {
        this.bussinessMap.specifyNextOpers = undefined;
        this.treeOrgName = undefined;
        this.personName_new = undefined;
        this.subApproveMapBean.info = undefined;
        this.bussinessMap.post = undefined;
        this.subApproveMapBean.result = undefined;
        if (value == '01') {
            this.bussinessMap.approve = '10';
            this.subApproveMapBean.result = '10';
            this.agree();
        }
        else if (value == '03') { //同意
            this.bussinessMap.cusAssignFlag = '03';
            this.bussinessMap.approve = '0';
            this.subApproveMapBean.result = '0';
            if (this.resultList.perssion) {
                var ss = this.resultList.perssion;
                var arr = this.resultList.perssion.split('=');
                if (arr.length > 1) {
                    this.bussinessMap['auth'] = arr[1];
                }
            }
            this.agreeClick();
        }
        else if (value == '04') { //否决
            this.bussinessMap.cusAssignFlag = '04';
            this.bussinessMap.approve = '1';
            this.subApproveMapBean.result = '1';
            this.state = value;
            this.display = true;
        }
        else if (value == '2') { //打回
            this.bussinessMap.approve = '8';
            this.subApproveMapBean.result = '8';
            this.state = value;
            this.display = true;
        }
        else if (value == '05') { //转介绍
            // 默认当前用户所属机构
            var user3 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var user4 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
            var orgNamedefault = '';
            var orgIddefault = '';
            if (user3.orgId) {
                orgIddefault = user3.orgId;
            }
            if (user4.orgName) {
                orgNamedefault = user4.orgName;
            }
            this.treeOrgName = orgNamedefault;
            this.treeOrgId = orgIddefault;
            this.inValue = orgIddefault;
            if (this.zjs) {
                this.bussinessMap.approve = '9';
                this.subApproveMapBean.result = '9';
            }
            else {
                this.bussinessMap.approve = '10';
                this.subApproveMapBean.result = '10';
            }
            this.state = value;
            this.display = true;
            this.bussinessMap.cusAssignFlag = this.branch;
        }
    };
    //分配
    CustomerDistribution.prototype.agree = function () {
        this.personDis = true;
    };
    //next节点
    CustomerDistribution.prototype.disposeSchedule = function () {
        var _this = this;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var dataMap = this.dataList;
        dataMap['cusAssignFlag'] = this.branch;
        this.bussinessMap.cusAssignFlag = this.branch;
        this.appproResultBean.bussinessMap = this.bussinessMap;
        this.appproResultBean.bussinessMap['dataMap'] = dataMap;
        this.appproResultBean.userId = this.userId;
        this.appproResultBean.approveMap = this.subApproveMapBean;
        this.appproResultBean.taskId = this.resultList['taskId'];
        this.customCenterHttpService.bpmNextTask(this.appproResultBean).subscribe(function (data) {
            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (data.returnCode.code == 'success') {
                _this.ex = [];
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                s['globalSeqNo'] = '';
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                }
                var commonHeader_1 = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                setTimeout(function () {
                    window.history.go(-1);
                }, 500);
                _this.treeOrgName = '';
                _this.personName_new = '';
            }
            else {
                _this.ex = [];
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_2 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                }
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
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //同意
    CustomerDistribution.prototype.agreeClick = function () {
        var _this = this;
        this.branch = '03';
        var param = {
            acceptId: JSON.parse(this.commfunc.getSessionData('commonHeader'))['userId'],
            acceptName: JSON.parse(this.commfunc.getSessionDataCH('chName'))['userName'],
            acceptOrgCode: this.orgId,
            acceptOrgName: JSON.parse(this.commfunc.getSessionDataCH('chName'))['orgName'],
            dataSource: this.dataList['dataSource'],
            workEffortId: this.dataList['workEffortId'],
            workEffortTypeId: this.dataList['workEffortTypeId'],
            requestSeqNo: this.dataList['requestSeqNo'],
            custNo: this.dataList['custNo'],
            dataMap: this.dataList,
        };
        this.customCenterHttpService.acceptTask(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.branch = '03';
                _this.disabledMsgUpside();
                _this.display = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CustomerDistribution.prototype.close = function () {
        this.state = null;
        this.display = false;
        this.vetoOption = [];
        this.vetoBean.oneVetoReason = '';
        this.vetoBean.twoVetoReason = '';
        this.comments = '';
        this.bzIsshow = false;
        this.otherInfo = '';
    };
    //转介绍人员
    CustomerDistribution.prototype.turnStaff = function () {
        this.personPage = true;
        this.userInValue = '0000';
    };
    //转介绍人员回调
    CustomerDistribution.prototype.perInfor = function (item) {
        this.bussinessMap.specifyNextOpers = item[0].tellerId;
        this.personName = item[0].tellerName;
        this.postName = null;
        this.personPage = false;
    };
    //转介绍
    CustomerDistribution.prototype.rurnClick = function () {
        var _this = this;
        if (this.treeOrgName == undefined || this.treeOrgName == null || this.treeOrgName == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择接收机构!' }];
            return;
        }
        if (this.personName_new == undefined || this.personName_new == null || this.personName_new == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择接收人!' }];
            return;
        }
        if (this.zjs) {
            if (this.subApproveMapBean.info == undefined || this.subApproveMapBean.info == null || this.subApproveMapBean.info == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择转介绍原因' }];
                return;
            }
            if (this.subApproveMapBean.info == '03') {
                if (this.otherInfo == '' || this.otherInfo == undefined || this.otherInfo == null) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '请录入原因' }];
                    return;
                }
            }
            if (this.subApproveMapBean.info == '03') {
                this.subApproveMapBean.info = this.otherInfo;
            }
            else {
                this.TurnReson.forEach(function (element) {
                    if (element.value == _this.subApproveMapBean.info) {
                        _this.subApproveMapBean.info = element.label;
                    }
                });
            }
            this.subApproveMapBean.info = this.otherInfo;
        }
        this.display = false;
        if (this.flag) { //
            this.disabledMsgUpside();
        }
        else {
            this.disposeSchedule();
        }
    };
    //否决
    CustomerDistribution.prototype.vetoClick = function () {
        var _this = this;
        debugger;
        if (this.vetoBean.oneVetoReason == '' || this.vetoBean.oneVetoReason == undefined || this.vetoBean.oneVetoReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择一级原因' }];
            return;
        }
        if (this.vetoBean.twoVetoReason == '' || this.vetoBean.twoVetoReason == undefined || this.vetoBean.twoVetoReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择二级原因' }];
            return;
        }
        // 判断是否是-其他
        if (this.vetoBean.twoVetoReason == '4110') {
            if (this.comments == '' || this.comments == undefined || this.comments == null) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '备注不能为空' }];
                return;
            }
        }
        // 否决原因 
        this.vetoFirsts.forEach(function (element) {
            if (element.value == _this.vetoBean.oneVetoReason) {
                _this.reasonOne = element.label;
            }
        });
        if (!this.bzIsshow) { // 无备注-否决原因
            this.vetoOption.forEach(function (element) {
                if (element.value == _this.vetoBean.twoVetoReason) {
                    _this.reasonTwo = element.label;
                }
            });
            this.subApproveMapBean.info = this.reasonOne + ',' + this.reasonTwo;
        }
        else { // 有备注-否决原因
            this.reasonTwo = this.comments;
            this.subApproveMapBean.info = this.reasonOne + ',' + this.comments;
        }
        this.branch = '04';
        if (this.dataList['dataSource'] == '01') {
            this.vetoBean.applyDate = this.dataList['sysPushDate'];
        }
        else {
            this.vetoBean.applyDate = this.dataList['applyDate']; // 申请日期
        }
        this.vetoBean.voteId = this.userId; // 否决人工号
        this.vetoBean.voteOrg = this.orgId; // 否决人机构
        this.vetoBean.votePost = this.postNameVeto, // 否决人 岗位（否决环节）
            this.vetoBean.voteReason = this.comments, // 否决原因
            this.vetoBean.custNo = this.dataList['custNo']; // 客户号
        this.vetoBean.globalType = this.cardMsg['cretType']; // 证件类型
        this.vetoBean.globalId = this.dataList['globalId']; // 证件号码
        this.vetoBean.loanPurpuse = this.dataList['loanPurpuse']; // 贷款用途
        this.vetoBean.taskType = this.dataList['taskType']; // 任务类型
        this.vetoBean.workEffortId = this.dataList['workEffortId']; // 工作任务ID
        this.vetoBean.requestSeqNo = this.dataList['requestSeqNo'], // 请求流水号
            this.vetoBean.dataSource = this.dataList['dataSource']; // 数据来源
        this.vetoBean.bussType = this.resultList['bussType']; // 业务类型
        // this.vetoBean.operationLink = this.resultList['bussType'];// 操作环节
        this.customCenterHttpService.voteApplicant(this.vetoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList.branch = '04';
                _this.disabledMsgUpside();
                _this.display = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CustomerDistribution.prototype.vetoChange = function (event) {
        debugger;
        this.comments = '';
        this.bzIsshow = false;
        this.reasonOne = '';
        this.reasonTwo = '';
        if (event.value == '06') {
            this.vetoOption = this.personVeto;
        }
        else if (event.value == '07') {
            this.vetoOption = this.financeVeto;
        }
        else if (event.value == '08') {
            this.vetoOption = this.manageVeto;
        }
        else if (event.value == '09') {
            this.vetoOption = this.serveVeto;
        }
        else if (event.value == '10') {
            this.vetoOption = this.otherVeto;
        }
        if (event.value == '') {
            this.vetoBean.twoVetoReason = '';
            this.vetoOption = [];
        }
        else {
            this.vetoBean.twoVetoReason = this.vetoOption[0].value;
        }
    };
    // 切换二级原因
    CustomerDistribution.prototype.vetoChangeTwoReson = function (event) {
        this.comments = '';
        this.reasonTwo = '';
        if (event.value == '4110') {
            this.bzIsshow = true;
        }
        else {
            this.bzIsshow = false;
        }
    };
    // 转介绍
    CustomerDistribution.prototype.zjsChange = function (event) {
        this.otherInfo = '';
    };
    //打回原因
    CustomerDistribution.prototype.hitClick = function () {
        var _this = this;
        var info = this.subApproveMapBean.info;
        if (info == '' || info == null || info == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请输入打回原因" });
            return;
        }
        if (info.trim() == '' || info.trim() == null || info.trim() == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请输入打回原因" });
            return;
        }
        this.display = false;
        var param = {
            userId: this.userId,
            taskId: this.resultList['taskId'],
            tranType: 'B0',
            doResion: '2',
            approveInfo: this.subApproveMapBean.info,
        };
        this.msgs = [];
        this.customCenterHttpService.bpmUserTaskManage(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                commonHeader['globalSeqNo'] = '';
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doUp();
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    CustomerDistribution.prototype.doUp = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    CustomerDistribution.prototype.postInfor = function (e) {
        this.postName = e[0].postName;
        this.bussinessMap.post = e[0]['postId'];
        this.checkManager();
    };
    CustomerDistribution.prototype.checkManager = function () {
        var _this = this;
        var param = {
            postId: this.bussinessMap.post
        };
        this.msgs = [];
        this.customCenterHttpService.queryPostById(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                if (data['postInfoList'][0]['managePermission'] != 'Y') {
                    _this.branch = '01';
                }
                else {
                    _this.branch = '02';
                }
                _this.postPage = false;
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务错误！' }];
        });
    };
    //分配人员
    CustomerDistribution.prototype.personDiss = function (e) {
        var _this = this;
        this.bussinessMap.specifyNextOpers = e[0]['tellerId'];
        this.personDis = false;
        this.confirmationService.confirm({
            message: '确认要分配吗?',
            accept: function () {
                _this.branch = '01';
                _this.extableData = true;
                _this.disabledMsgUpside();
            }
        });
    };
    //查询流水号
    CustomerDistribution.prototype.checkSerIal = function (num, num2) {
        var _this = this;
        if (num2 && num2 == 1) { //转介绍
            if (this.resultList.perssion != '?auth=zhhz') {
                this.flag = false;
            }
        }
        var param = {
            globalSeqNo: this.dataList['mainFlowNo']
        };
        this.customCenterHttpService.createGlobalSeqNo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                commonHeader['globalSeqNo'] = data.globalSeqNo;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                _this.show(num);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    /**新的转介绍 */
    //转介绍机构回调
    CustomerDistribution.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.inValue = param.orgId;
    };
    //转介绍机构
    CustomerDistribution.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //转介绍员工回调
    CustomerDistribution.prototype.perTreeCall = function (event) {
        this.personShow = false;
        console.log(event);
        this.personId_new = event[0].userLoginId;
        this.personName_new = event[0].userName;
        this.bussinessMap.specifyNextOpers = event[0].userLoginId;
        this.postName = event[0].postName;
        this.bussinessMap.post = event[0]['postId'];
        this.checkManager();
    };
    //转介绍员工
    CustomerDistribution.prototype.perShow = function () {
        if (!this.inValue) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择接收机构!' });
            return;
        }
        this.personShow = true;
    };
    CustomerDistribution = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "customer-distribution",
            template: __webpack_require__(/*! ./customer-distribution.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.html"),
            styles: [__webpack_require__(/*! ./customer-distribution.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomCenterHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_8__["CusViewHttpService"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_12__["CommonHttpService"]])
    ], CustomerDistribution);
    return CustomerDistribution;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CustomerDistributionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDistributionModule", function() { return CustomerDistributionModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _customer_distribution_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-distribution.routing */ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.routing.ts");
/* harmony import */ var _customer_distribution_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-distribution.component */ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.ts");
/* harmony import */ var _business_information_business_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./business-information/business-information.component */ "./src/app/pages/tzb/customCenter/customer-distribution/business-information/business-information.component.ts");
/* harmony import */ var _debt_information_debt_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debt-information/debt-information.component */ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_customCenterCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/customCenter/customCenterCommon.module */ "./src/app/pages/tzb/customCenter/customCenterCommon.module.ts");
/* harmony import */ var _query_cust_post_query_cust_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query-cust-post/query-cust-post.component */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.ts");
/* harmony import */ var _query_cust_org_query_cust_org_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./query-cust-org/query-cust-org.component */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.ts");
/* harmony import */ var _custom_information_costom_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-information/costom-information.component */ "./src/app/pages/tzb/customCenter/customer-distribution/custom-information/costom-information.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CustomerDistributionModule = /** @class */ (function () {
    function CustomerDistributionModule() {
    }
    CustomerDistributionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _customer_distribution_routing__WEBPACK_IMPORTED_MODULE_5__["CustomerDistributionRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_customCenter_customCenterCommon_module__WEBPACK_IMPORTED_MODULE_9__["TzbCustomCenterCommonModule"]
            ],
            declarations: [
                _customer_distribution_component__WEBPACK_IMPORTED_MODULE_6__["CustomerDistribution"],
                _business_information_business_information_component__WEBPACK_IMPORTED_MODULE_7__["BusinessInformation"],
                _debt_information_debt_information_component__WEBPACK_IMPORTED_MODULE_8__["DebtInformation"],
                _query_cust_post_query_cust_post_component__WEBPACK_IMPORTED_MODULE_10__["QueryCustPost"],
                _query_cust_org_query_cust_org_component__WEBPACK_IMPORTED_MODULE_11__["QueryCustOrgTree"],
                _custom_information_costom_information_component__WEBPACK_IMPORTED_MODULE_12__["CostomInformation"]
            ],
            providers: [],
            exports: [
                _query_cust_org_query_cust_org_component__WEBPACK_IMPORTED_MODULE_11__["QueryCustOrgTree"],
                _query_cust_post_query_cust_post_component__WEBPACK_IMPORTED_MODULE_10__["QueryCustPost"]
            ]
        })
    ], CustomerDistributionModule);
    return CustomerDistributionModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.routing.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.routing.ts ***!
  \***********************************************************************************************/
/*! exports provided: routes, CustomerDistributionRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDistributionRouting", function() { return CustomerDistributionRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_distribution_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-distribution.component */ "./src/app/pages/tzb/customCenter/customer-distribution/customer-distribution.component.ts");


var routes = [
    {
        path: '',
        component: _customer_distribution_component__WEBPACK_IMPORTED_MODULE_1__["CustomerDistribution"]
    }
];
var CustomerDistributionRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"ui-g tab-conter\">\r\n        <div class=\"tab-header\">\r\n            <span>授信管理</span>\r\n        </div>\r\n        <div class=\"tab-list\">\r\n            <div class=\"ui-g-12 tab-list-conter\">\r\n                <span class=\"ui-g-6 tab-list-header\">借款主体债务信息</span>\r\n                <span class=\"ui-g-6 tab-list-right\">单位:元</span>\r\n                <div class=\"ui-g-12 table\">\r\n                    <p-dataTable [value]=\"dataTable1\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollWidth=\"100%\">\r\n                        <p-column field=\"\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"综合授信额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人已用额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人在途审批额度\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额存单质押贷款余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人承兑敞口余额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金承兑余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人欠贷金额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金保函余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人保函敞口余额\" [style]=\"{'width':'152px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人担保总额\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人的历史最高授信额度\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人已用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人在途审批额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人承兑敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联客户欠贷金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人全额承兑余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人保函敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡担保总额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行负债\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行担保\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信在途金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-list\">\r\n            <div class=\"tab-list-conter\">\r\n                <span class=\"ui-g-6 tab-list-header\">担保债务信息</span>\r\n                <span class=\"ui-g-6 tab-list-right\">单位:元</span>\r\n                <div class=\"ui-g-12 table\">\r\n                    <p-dataTable [value]=\"dataTable2\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollWidth=\"100%\">\r\n                        <p-column field=\"\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"综合授信额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人已用额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人在途审批额度\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额存单质押贷款余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人承兑敞口余额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金承兑余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人欠贷金额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金保函余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人保函敞口余额\" [style]=\"{'width':'152px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人担保总额\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人的历史最高授信额度\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人已用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人在途审批额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人承兑敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联客户欠贷金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人全额承兑余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人保函敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡担保总额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行负债\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行担保\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信在途金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-list\">\r\n            <div class=\"tab-list-conter\">\r\n                <span class=\"ui-g-6 tab-list-header\">保证人信息</span>\r\n                <span class=\"ui-g-6 tab-list-right\">单位:元</span>\r\n                <div class=\"ui-g-12 table\">\r\n                    <p-dataTable [value]=\"dataTable3\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollWidth=\"100%\">\r\n                        <p-column field=\"\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"综合授信额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人已用额度\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人在途审批额度\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额存单质押贷款余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人承兑敞口余额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金承兑余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人欠贷金额\" [style]=\"{'width':'150px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人全额保证金保函余额\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人保函敞口余额\" [style]=\"{'width':'152px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人担保总额\" [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"本人的历史最高授信额度\" [style]=\"{'width':'200px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人已用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人在途审批额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人承兑敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联客户欠贷金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人全额承兑余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人保函敞口余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡信用额度\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡逾期期数\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡透支余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人贷记卡担保总额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行负债\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"他行担保\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信余额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                        <p-column field=\"\" header=\"关联人综合授信在途金额\" [style]=\"{'width':'167px'}\"></p-column>\r\n                    </p-dataTable>\r\n                    <!-- <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-conter {\n  background: #fff;\n  margin-top: 3px; }\n  .tab-conter .tab-header span {\n    width: 106px;\n    height: 35px;\n    background: #d2f1ef;\n    border-radius: 3px;\n    color: #048cae;\n    text-decoration: underline;\n    font-size: 16px;\n    line-height: 35px;\n    text-align: center;\n    display: inline-block;\n    margin-left: 22px;\n    margin-top: 10px; }\n  .tab-conter .tab-list {\n    width: 100%;\n    margin-top: 9px;\n    border-bottom: 3px solid #f3f3f4; }\n  .tab-conter .tab-list .tab-list-header {\n      padding-left: 20px; }\n  .tab-conter .tab-list .tab-list-right {\n      text-align: right;\n      padding-right: 20px; }\n  .tab-conter .tab-list .table {\n      text-align: center !important; }\n  :host/deep/ .ui-datatable-tablewrapper {\n  overflow-x: auto; }\n  :host/deep/ .ui-datatable-tablewrapper table {\n    min-width: 1755px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vZGVidC1pbmZvcm1hdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21DZW50ZXJcXGN1c3RvbWVyLWRpc3RyaWJ1dGlvblxcZGVidC1pbmZvcm1hdGlvblxcZGVidC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFjLEVBQUE7RUFGbEI7SUFLWSxZQUFXO0lBQ1gsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYTtJQUNiLDBCQUEwQjtJQUMxQixlQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBQUE7RUFoQjNCO0lBb0JRLFdBQVc7SUFDWCxlQUFjO0lBQ2QsZ0NBQStCLEVBQUE7RUF0QnZDO01Bd0JZLGtCQUFrQixFQUFBO0VBeEI5QjtNQTJCWSxpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7RUE1Qi9CO01BK0JZLDZCQUE0QixFQUFBO0VBT3hDO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3VzdG9tZXItZGlzdHJpYnV0aW9uL2RlYnQtaW5mb3JtYXRpb24vZGVidC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6M3B4O1xyXG4gICAgLnRhYi1oZWFkZXJ7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgd2lkdGg6MTA2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNkMmYxZWY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgY29sb3I6IzA0OGNhZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFiLWxpc3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo5cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2YzZjNmNDtcclxuICAgICAgICAudGFiLWxpc3QtaGVhZGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWItbGlzdC1yaWdodHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NDNweCl7XHJcblxyXG4vLyB9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtdGFibGV3cmFwcGVye1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgXHJcbiAgICB0YWJsZXtcclxuICAgICAgICBtaW4td2lkdGg6IDE3NTVweDtcclxuICAgIH0gICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DebtInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtInformation", function() { return DebtInformation; });
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

var DebtInformation = /** @class */ (function () {
    function DebtInformation() {
        this.tabMesg = '暂无数据';
    }
    DebtInformation.prototype.OnInit = function () {
    };
    DebtInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "debt-information",
            template: __webpack_require__(/*! ./debt-information.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.html"),
            styles: [__webpack_require__(/*! ./debt-information.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/debt-information/debt-information.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DebtInformation);
    return DebtInformation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/bean/query-cust-org.bean.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/bean/query-cust-org.bean.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OrgTreeBean, queryOrgByOrgIdAndRelationshipBean, orgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgTreeBean", function() { return OrgTreeBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOrgByOrgIdAndRelationshipBean", function() { return queryOrgByOrgIdAndRelationshipBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgList", function() { return orgList; });
var OrgTreeBean = /** @class */ (function () {
    function OrgTreeBean() {
    }
    return OrgTreeBean;
}());

var queryOrgByOrgIdAndRelationshipBean = /** @class */ (function () {
    function queryOrgByOrgIdAndRelationshipBean() {
        this.orgId = ''; //机构号
        this.relationshipType = ''; //机构号
        this.orgList = []; //机构号 
    }
    return queryOrgByOrgIdAndRelationshipBean;
}());

var orgList = /** @class */ (function () {
    function orgList() {
        this.orgId = ''; //机构码
        this.orgName = ''; //机构名称
        this.location = ''; //位置描述
    }
    return orgList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 org\">\r\n    <p-tree [value]=\"date\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org {\n  visibility: show !important;\n  height: 500px; }\n\n.tree {\n  height: 300px !important;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vcXVlcnktY3VzdC1vcmcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tQ2VudGVyXFxjdXN0b21lci1kaXN0cmlidXRpb25cXHF1ZXJ5LWN1c3Qtb3JnXFxxdWVyeS1jdXN0LW9yZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vcXVlcnktY3VzdC1vcmcvcXVlcnktY3VzdC1vcmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JnIHtcclxuICAgIHZpc2liaWxpdHk6IHNob3cgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi50cmVlIHtcclxuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QueryCustOrgTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustOrgTree", function() { return QueryCustOrgTree; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var _bean_query_cust_org_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/query-cust-org.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/bean/query-cust-org.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryCustOrgTree = /** @class */ (function () {
    function QueryCustOrgTree(uisftechCommonHttpService, commfunc) {
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orgTreeBean = new _bean_query_cust_org_bean__WEBPACK_IMPORTED_MODULE_3__["OrgTreeBean"]();
        //提示信息
        this.msgs = [];
    }
    QueryCustOrgTree.prototype.ngOnInit = function () {
        if (this.inValue) {
            this.org = this.inValue;
            this.query();
        }
        else {
            this.org = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
            this.query();
        }
    };
    //选中
    QueryCustOrgTree.prototype.nodeCheck = function (event) {
        this.treeOrgName = event.node.label;
        this.orgEle = { orgId: event.node.orgId, orgName: event.node.orgName, location: event.node.location };
        this.outValue.emit(this.orgEle);
    };
    //点击加号
    QueryCustOrgTree.prototype.nodeExpend = function (event) {
        var _this = this;
        this.org = event.node.orgId;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '-1';
        if (event.node.children && event.node.children.length > 0) {
            return;
        }
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                event.node.children = _this.toTree(data.orgList);
            }
        });
    };
    QueryCustOrgTree.prototype.toTree = function (data) {
        if (data) {
            data.forEach(function (item) {
                item['label'] = item['orgName'];
                item['orgId'] = item['orgId'];
                item['location'] = item['location'];
            });
            return data;
        }
    };
    //查询
    QueryCustOrgTree.prototype.query = function () {
        var _this = this;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '0';
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.date = _this.toTree(data.orgList);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QueryCustOrgTree.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QueryCustOrgTree.prototype, "outValue", void 0);
    QueryCustOrgTree = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'query-cust-org',
            template: __webpack_require__(/*! ./query-cust-org.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.html"),
            styles: [__webpack_require__(/*! ./query-cust-org.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-org/query-cust-org.component.scss")],
            providers: [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__["UisftechCommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        })
        /**
         * 机构对应关系
         */
        ,
        __metadata("design:paramtypes", [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__["UisftechCommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], QueryCustOrgTree);
    return QueryCustOrgTree;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/bean/query-cust-post.bean.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/bean/query-cust-post.bean.ts ***!
  \***********************************************************************************************************/
/*! exports provided: QueryCustBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustBean", function() { return QueryCustBean; });
var QueryCustBean = /** @class */ (function () {
    function QueryCustBean() {
    }
    return QueryCustBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">岗位编号:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.postId\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">岗位名称:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.postName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">工号:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.userLoginId\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">员工姓名:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.userName\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" (click)=\"queryScale()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" (click)=\"reset()\" label=\"重置\"></button>\r\n    </div>\r\n    <!-- 表格 -->\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"tableData\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" dataKey=\"tellerName\">\r\n            <p-column field=\"partyId\" header=\"机构编号\"></p-column>\r\n            <p-column field=\"partyName\" header=\"机构名称\"></p-column>\r\n            <p-column field=\"postId\" header=\"岗位编号\"></p-column>\r\n            <p-column field=\"postName\" header=\"岗位名称\"></p-column>\r\n            <p-column field=\"userLoginId\" header=\"工号\"></p-column>\r\n            <p-column field=\"userName\" header=\"员工姓名\"></p-column>\r\n        </p-dataTable>\r\n\r\n        <!-- 分页 -->\r\n        <p-paginator rows=\"{{queryCustBean.pageSize}}\" totalRecords=\"{{total}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right;\n  line-height: 27px; }\n\n.btn,\n.table {\n  text-align: center; }\n\n.ui-g-3 {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vcXVlcnktY3VzdC1wb3N0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxcY3VzdG9tZXItZGlzdHJpYnV0aW9uXFxxdWVyeS1jdXN0LXBvc3RcXHF1ZXJ5LWN1c3QtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7O0VBRUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jdXN0b21lci1kaXN0cmlidXRpb24vcXVlcnktY3VzdC1wb3N0L3F1ZXJ5LWN1c3QtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmJ0bixcclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udWktZy0ze1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: QueryCustPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustPost", function() { return QueryCustPost; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var _bean_query_cust_post_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/query-cust-post.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/bean/query-cust-post.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryCustPost = /** @class */ (function () {
    function QueryCustPost(httpService) {
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queryCustBean = new _bean_query_cust_post_bean__WEBPACK_IMPORTED_MODULE_2__["QueryCustBean"]();
        this.first = 0;
        //提示信息
        this.msgs = [];
    }
    QueryCustPost.prototype.ngOnInit = function () {
        if (this.inValue) {
            this.queryCustBean.partyId = this.inValue;
        }
        this.queryCustBean.pageNum = '1';
        this.queryCustBean.pageSize = '10';
        this.queryScale();
    };
    QueryCustPost.prototype.queryScale = function () {
        this.queryCustBean.pageNum = '1';
        this.queryCustBean.pageSize = '10';
        this.first = 0;
        this.quertList();
    };
    QueryCustPost.prototype.quertList = function () {
        var _this = this;
        this.queryCustBean.flag = '0';
        this.queryCustBean.subFlag = '0';
        this.httpService.queryOrgPostTellerRelation(this.queryCustBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orgPostTellerList;
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 分页
    QueryCustPost.prototype.paginate = function (event) {
        this.queryCustBean.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.queryCustBean.pageNum = currentPage.toString();
        this.first = parseInt(this.queryCustBean.pageSize) * parseInt(this.queryCustBean.pageSize);
        this.quertList();
    };
    // 选中一行
    QueryCustPost.prototype.onRowSelect = function (event) {
        var personArr = [];
        personArr.push(event.data);
        this.outValue.emit(personArr);
    };
    // 重置
    QueryCustPost.prototype.reset = function () {
        this.queryCustBean.pageNum = '1';
        this.queryCustBean.pageSize = '10';
        this.first = 0;
        this.queryCustBean.postName = undefined;
        this.queryCustBean.postId = undefined;
        this.queryCustBean.userLoginId = undefined;
        this.queryCustBean.userName = undefined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QueryCustPost.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QueryCustPost.prototype, "inValue", void 0);
    QueryCustPost = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "query-cust-post",
            template: __webpack_require__(/*! ./query-cust-post.component.html */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.html"),
            styles: [__webpack_require__(/*! ./query-cust-post.component.scss */ "./src/app/pages/tzb/customCenter/customer-distribution/query-cust-post/query-cust-post.component.scss")],
            providers: [app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomCenterHttpService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomCenterHttpService"]])
    ], QueryCustPost);
    return QueryCustPost;
}());



/***/ })

}]);
//# sourceMappingURL=customer-distribution-customer-distribution-module.js.map