(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tzb-custom-custom-view-view-product-information-view-product-information-module"],{

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P130')\">\r\n  <div class=\"ui-g-12 tab\">\r\n    <div class=\"header-title-theme\">\r\n      <span class=\"text\">正在申请产品</span>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 padding-tb\">\r\n      <u-dataTable [value]=\"items\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n        <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tellSeqNo\" header=\"柜员流水号\" [style]=\"{'width':'200px'}\"></p-column>\r\n        <p-column field=\"clientName\" header=\"客户名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <!-- <p-column field=\"bussType\" header=\"业务类型\"></p-column> -->\r\n        <p-column field=\"bussName\" header=\"业务名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <!-- <p-column field=\"subBussType\" header=\"子业务类型\"></p-column> -->\r\n        <p-column field=\"subBussName\" header=\"子业务名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"guaranteeMode\" header=\"担保方式\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"appBranchNo\" header=\"经办机构\" [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"approveStatus\" header=\"审批状态\" [style]=\"{'width':'150px'}\"></p-column>\r\n        <!-- <p-column field=\"j\" header=\"审批结果\"></p-column> -->\r\n        <p-column field=\"k\" header=\"详情\" *ngIf=\"judgeField('X_CUST_M_P007_P130_P211')\" [style]=\"{'width':'150px'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <!-- <a style=\"cursor:pointer;\" (click)=\"showDialog(col)\">查询</a> -->\r\n            <span class=\"tabelDetailIco\" (click)='showDialog(col)'>查看详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div class=\"ui-g-12 pag\">\r\n        <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog header=\"正在申请产品详情\" [(visible)]=\"display\" modal=\"modal\" (onHide)=\"close()\" *ngIf=\"judgeField('X_CUST_M_P007_P130')\">\r\n  <div class=\"ui-g-12 container\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">申请日期：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.applyDate|timeValuePie}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">柜员流水号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.tellSeqNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">客户名称：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.clientName}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">质押金额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.pledgeAmt/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">当前信用额度：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.curCreditLmt/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">关联人信用额度：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.relaCreditLmt/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">承兑余额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.acceBalance/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">保函金额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.gtAmt/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">业务类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.bussType|codeValuePie:bussTypeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">子业务类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.subBussType|codeValuePie:subBussTypeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">转化贷款标志：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.tranLoanFlag|codeValuePie:tranLoanFlagOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">处置编号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.handleNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">转化编号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.transferNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">节能增效贷款：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.effLoanFlag|codeValuePie:effLoanFlagOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">支付类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.payType|codeValuePie:payTypeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">担保方式：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">信用类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.creditType|codeValuePie:creditTypeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">合同类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.contractType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">合同方式：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.contractMode|codeValuePie:contractModeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">合同编号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.contracNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">合同余额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.contracBalance/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">可用余额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.actualBal/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">五级分类：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.fiveType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">十级分类：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.tenType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">手工十级分类：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.manuTenType|codeValuePie:tenClassOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">利息：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.interest/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">透支利率(逾期利率)：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.overRate/1.2)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">违约利率：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.breakRate/1.2)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">复利利率：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.compositionRate/1.2)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">贷款用途：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.loanPurpuse}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">贷款用途代码：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.loanPurpuseCode}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">处理结果：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.handleResult|codeValuePie:handleResultOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">否决类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.vetoType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">审批意见：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.approveSuggestion}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">调查人：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.investigatorName}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">调查人2：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.investigatorName2}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">调查报告标识：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.investigatorFileType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">调查报告：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.investigatorFile}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">备注(摘要)：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.remark}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">经办机构：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.appBranchNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">经办日期：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.appDate|timeValuePie}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">汇票号码：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.draftNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">票据金额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.billAmt/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">审批状态：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.approveStatus|codeValuePie:approveStatusOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">审批人：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.approvalUserId|codeValuePie:appStepOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">上一审批人：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.preAppUserId|codeValuePie:appStepOptions}}</span>\r\n    </div>\r\n    <!-- <div class=\"ui-g-6\"><label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">值：</label><span class=\"ui-g-6\">{{applayForProductBean.paraValue}}</span></div> -->\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">行业投向：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.investIndustry}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">存贷款比例：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.loanDepositRate}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">二级否决类型：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.subVetoType|codeValuePie:subVetoTypeOptions}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">特殊产品：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.specialProduct}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">关联人承兑余额：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.relaAcceBalance/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">最高额合同号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.contractNoMax}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">合同余额2：</label>\r\n      <span class=\"ui-g-6\">{{(applayForProductBean.contracBalance2/1)|number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">信保基金最高额保函编号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.fundGtNoMax}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">金链条合同号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.jltContractNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">永续合同标志：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.perpetualCtrFlag}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">永续合同编号：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.perpetualCtrNo}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">延续合同标志：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.continueCtrFlag}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">建议处理方式：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.adviceProcessType}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\" class=\"ui-g-6\" style=\"text-align:right\">业务处理方式：</label>\r\n      <span class=\"ui-g-6\">{{applayForProductBean.bizHandleType}}</span>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 abtn\">\r\n      <button pButton label=\"关闭\" (click)=\"close()\"></button>\r\n    </div> -->\r\n    <div class=\"ui-g-12 btn\" style=\"text-align:center\">\r\n      <!-- <button pButton label=\"关闭\" (click)=\"close()\" ></button> -->\r\n      <span class=\"spcs\" style=\"margin-left:40%;\">\r\n        <a (click)=\"close()\" class=\"colletCooperator\">关闭</a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  padding: 0; }\n  .tab .ui-g-11 span {\n    background: #0094D2; }\n  .header-title-theme {\n  width: 100%;\n  height: 42px;\n  background-color: #ffffff;\n  padding-left: 12px;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8 !important;\n  position: relative; }\n  .header-title-theme .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .line {\n      height: 17px; } }\n  .header-title-theme .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    width: 25px;\n    font-weight: bold; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .text {\n      font-size: 15px; } }\n  .padding-tb {\n  padding: 15px 0 0 12px;\n  position: relative; }\n  .ui-g .ui-g-12 strong {\n  display: inline-block;\n  width: 120px; }\n  .ui-g .ui-g-12 .content {\n  padding: 0; }\n  .ui-g .ui-g-12 .content label {\n    display: inline-block;\n    width: 90px;\n    text-align: right; }\n  .ui-g .ui-g-12 .content span {\n    display: inline-block;\n    margin-left: 5px; }\n  .ui-g .ui-g-12 .content span a {\n      color: #999;\n      font-weight: bold;\n      text-decoration: underline; }\n  .ui-g .ui-g-12 .content span:nth-child(1) {\n      margin-left: 0; }\n  .ui-g .tab {\n  padding: 0; }\n  .ui-g .container .ui-g-4 label {\n  display: inline-block;\n  width: 100px;\n  text-align: right; }\n  .ui-g .container .split {\n  padding: 0;\n  margin: 0; }\n  .ui-g .container .btn {\n  text-align: center; }\n  .abtn {\n  text-align: center; }\n  :host/deep/ .u-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr {\n  height: 33px !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr > th {\n  padding: 0 !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-tfoot > tr > td {\n  padding-right: 0 !important; }\n  :host/deep/ .ui-dialog {\n  width: 80%; }\n  .menu {\n  width: 99%;\n  background-color: #e5e5e5;\n  border: 1px solid #c6c6c6;\n  border-radius: 3px;\n  margin: 0 auto 0.5em; }\n  .menu a {\n    position: relative;\n    color: #5d5d5d;\n    padding: 7px 22px;\n    cursor: pointer;\n    border-right: 1px solid #c6c6c6; }\n  .menu a .secondM,\n    .menu a .thirdM {\n      width: 117px;\n      position: absolute;\n      top: 20px;\n      left: 17px;\n      z-index: 1000;\n      background: white;\n      text-align: center;\n      list-style: none;\n      padding: 0;\n      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.5);\n      display: none; }\n  .menu a .secondM li,\n      .menu a .thirdM li {\n        padding: 4px 0; }\n  .menu a .secondM li a,\n        .menu a .thirdM li a {\n          border-right: 0px !important; }\n  .menu a .thirdM {\n      left: 116px;\n      top: 22px; }\n  .menu a li:hover {\n      background: #e9f7f8; }\n  .menu a:hover {\n      color: #0094D2;\n      background-color: #fafafa; }\n  .menu a:hover .secondM {\n        display: block; }\n  .menu a:hover .secondM .spe:hover .thirdM {\n          display: block; }\n  :host/deep/ .ui-paginator .ui-dropdown .ui-dropdown-label {\n  width: 50px !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  .btn .spcs {\n  background-color: #19b0c8;\n  border-radius: 6px;\n  color: #FFFFFF;\n  height: 27px;\n  line-height: 27px;\n  display: block;\n  width: 14%;\n  float: left;\n  /* padding-left: 1px; */\n  /* text-indent: 4px; */\n  margin-left: 2px;\n  text-align: center; }\n  .btn .colletCooperator {\n  cursor: pointer;\n  color: #FFFFFF; }\n  .pag {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vYXBwbGljYXRpb24tZm9yLXByb2R1Y3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFxhcHBsaWNhdGlvbi1mb3ItcHJvZHVjdFxcYXBwbGljYXRpb24tZm9yLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7RUFEZDtJQUlZLG1CQUFtQixFQUFBO0VBSS9CO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7RUFWdEI7SUFZUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7RUFFN0I7SUFsQko7TUFvQlksWUFBWSxFQUFBLEVBQ2Y7RUFyQlQ7SUEwQlEsT0FBTztJQUNQLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVyQjtJQXBDSjtNQXNDWSxlQUFlLEVBQUEsRUFDbEI7RUFHVDtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTtFQUV0QjtFQUdZLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUFKeEI7RUFPWSxVQUFVLEVBQUE7RUFQdEI7SUFTZ0IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQVhqQztJQWNnQixxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUE7RUFmaEM7TUFpQm9CLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsMEJBQTBCLEVBQUE7RUFuQjlDO01Bc0JvQixjQUFjLEVBQUE7RUF0QmxDO0VBNEJRLFVBQVUsRUFBQTtFQTVCbEI7RUFpQ2dCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFuQ2pDO0VBdUNZLFVBQVU7RUFDVixTQUFTLEVBQUE7RUF4Q3JCO0VBMkNZLGtCQUFrQixFQUFBO0VBSTlCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxxQkFBcUIsRUFBQTtFQUl6QjtFQUNJLDJCQUEyQixFQUFBO0VBSS9CO0VBQ0ksVUFBVSxFQUFBO0VBRWQ7RUFDSSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7RUFMeEI7SUFPUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsK0JBQStCLEVBQUE7RUFYdkM7O01BY1ksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtNQUNWLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsNENBQTRDO01BQzVDLGFBQWEsRUFBQTtFQXhCekI7O1FBMEJnQixjQUFjLEVBQUE7RUExQjlCOztVQTRCb0IsNEJBQTRCLEVBQUE7RUE1QmhEO01BaUNZLFdBQVc7TUFDWCxTQUFTLEVBQUE7RUFsQ3JCO01BcUNZLG1CQUFtQixFQUFBO0VBckMvQjtNQXdDWSxjQUFjO01BQ2QseUJBQXlCLEVBQUE7RUF6Q3JDO1FBMkNnQixjQUFjLEVBQUE7RUEzQzlCO1VBK0N3QixjQUFjLEVBQUE7RUFTdEM7RUFDSSxzQkFBcUIsRUFBQTtFQUV6QjtFQUNJLHNCQUFzQixFQUFBO0VBRTFCO0VBRVEseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBYjFCO0VBZ0JRLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFJdEI7RUFDSSxrQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vYXBwbGljYXRpb24tZm9yLXByb2R1Y3QvYXBwbGljYXRpb24tZm9yLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAudWktZy0xMSB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5oZWFkZXItdGl0bGUtdGhlbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5saW5lIHtcclxuICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4OiAxO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucGFkZGluZy10YiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi51aS1nIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFie1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIC51aS1nLTR7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwbGl0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFidG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keXtcclxuICAgIGhlaWdodDogMzg1cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5e1xyXG4gICAgaGVpZ2h0OiAzODVweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnByby1oZWFkZXItdGFibGUgLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5wcm8taGVhZGVyLXRhYmxlIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5wcm8taGVhZGVyLXRhYmxlIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRmb290PnRyPnRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2d7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAuNWVtO1xyXG4gICAgYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgICAgIC5zZWNvbmRNLFxyXG4gICAgICAgIC50aGlyZE0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTE3cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxN3B4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAyLjVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRoaXJkTSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDExNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZjdmODtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAuc2Vjb25kTSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5zcGV7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGlyZE0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tbGFiZWx7XHJcbiAgICB3aWR0aDo1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG57XHJcbiAgICAuc3Bjc3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDFweDsgKi9cclxuICAgICAgICAvKiB0ZXh0LWluZGVudDogNHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbGxldENvb3BlcmF0b3J7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ApplicationForProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationForProductComponent", function() { return ApplicationForProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
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





// import { TenClass,ContractMode,AppStep,ApproveStatuss,BussType,SubBussType,GuaranteeMode,TranLoanFlag,EffLoanFlag,PayType,CreditType,LoanPurpuseCode,HandleResult,SubVetoType} from '../../../constant/custView.codeValue';

var ApplicationForProductComponent = /** @class */ (function () {
    function ApplicationForProductComponent(router, httpService, route, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.display = false;
        this.pageSize = 10;
        this.pageNum = 1;
        this.totalNum = 0;
        this.first = 0;
        this.applayForProductBean = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_4__["ApplayForProductBean"]();
        this.msgs = [];
        this.guaranteeModeOptions = []; //担保方式
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.bussTypeOptions = []; //业务类型
        this.subBussTypeOptions = []; //子业务类型
        this.tranLoanFlagOptions = []; //转化贷款标志
        this.effLoanFlagOptions = []; //节能增效贷款
        this.payTypeOptions = []; //支付类型
        this.creditTypeOptions = []; //信用类型
        this.loanPurpuseCodeOptions = []; //贷款用途代码
        this.handleResultOptions = []; //处理结果
        this.subVetoTypeOptions = []; //二级否决类型
        this.approveStatusOptions = []; //审批状态
        this.appStepOptions = []; //审批阶段
        this.contractModeOptions = []; //合同方式
        this.tenClassOptions = []; //手工十级分类
        this.codeVal();
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.bussTypeOptions = this.code['BussType'];
        this.subBussTypeOptions = this.code['SubBussType'];
        this.tranLoanFlagOptions = this.code['TranLoanFlag'];
        this.effLoanFlagOptions = this.code['EffLoanFlag'];
        this.payTypeOptions = this.code['PayType'];
        this.creditTypeOptions = this.code['CreditType'];
        this.loanPurpuseCodeOptions = this.code['LoanPurpuseCode'];
        this.handleResultOptions = this.code['HandleResult'];
        this.subVetoTypeOptions = this.code['SubVetoType'];
        this.approveStatusOptions = this.code['ApproveStatuss'];
        this.appStepOptions = this.code['AppStep'];
        this.contractModeOptions = this.code['ContractMode'];
        this.tenClassOptions = this.code['TenClass'];
        //-------------------------------------------------------------------上面是码值
        this.custNo = this.commfunc.getSessionData('custNo');
        if (JSON.parse(this.commfunc.getSessionData('commonHeader'))) {
            this.appUserId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        }
    }
    ApplicationForProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = {
            appUserId: this.appUserId,
            clientNo: this.custNo,
            // appUserId:'0500',
            // clientNo:'1000000036',
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.BZ_0200300002001_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.appBranchNo = data.orgName;
                        }
                    });
                });
                _this.items = data.infoList;
                _this.pageSize = data.pageSize;
                _this.pageNum = data.pageNum;
                _this.totalNum = data.totalNum;
            }
        });
    };
    ApplicationForProductComponent.prototype.ngOnChanges = function () {
    };
    ApplicationForProductComponent.prototype.showDialog = function (param) {
        var _this = this;
        var params = {
            consumerSeqNo: param.tellSeqNo,
            appUserId: this.appUserId,
        };
        this.httpService.BZ_0200300002002_LOAN(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.applayForProductBean = data;
                _this.httpService.queryTaskByIndtstryAll({ taskTypeId: _this.applayForProductBean.investIndustry, taskTypeKey: 'indtstryType' }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.applayForProductBean.investIndustry = data.taskList[0].taskTypeName;
                    }
                });
                _this.httpService.queryTellerById({ tellerId: _this.applayForProductBean.investigatorName }).subscribe(function (data) {
                    _this.applayForProductBean.investigatorName = data.tellerName;
                });
                _this.httpService.queryTellerById({ tellerId: _this.applayForProductBean.investigatorName2 }).subscribe(function (data) {
                    _this.applayForProductBean.investigatorName2 = data.tellerName;
                });
                _this.httpService.queryOrgById({ orgId: _this.applayForProductBean.appBranchNo }).subscribe(function (data) {
                    if (data.orgName != null) {
                        _this.applayForProductBean.appBranchNo = data.orgName;
                    }
                });
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
        this.display = true;
        document.body.style.overflow = 'hidden';
    };
    ApplicationForProductComponent.prototype.close = function () {
        this.display = false;
        document.body.style.overflow = 'auto';
    };
    ApplicationForProductComponent.prototype.paginate = function (event) {
        var _this = this;
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        var param = {
            appUserId: this.appUserId,
            clientNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.BZ_0200300002001_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.appBranchNo = data.orgName;
                        }
                    });
                });
                _this.items = data.infoList;
                _this.pageSize = data.pageSize;
                _this.pageNum = data.pageNum;
                _this.totalNum = data.totalNum;
            }
        });
    };
    //权限
    ApplicationForProductComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
        // return true
    };
    ApplicationForProductComponent.prototype.toOwnOurProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    ApplicationForProductComponent.prototype.toApplForProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/appl-for-product']);
    };
    ApplicationForProductComponent.prototype.toOtherBankProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/other-bank-product']);
    };
    ApplicationForProductComponent.prototype.toRecommendedProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/recommended-product']);
    };
    ApplicationForProductComponent.prototype.tock = function () {
        if (document.querySelector('#ck') != null) {
            document.querySelector('#ck').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    ApplicationForProductComponent.prototype.toDk = function () {
        if (document.querySelector('#dk') != null) {
            document.querySelector('#dk').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    ApplicationForProductComponent.prototype.toLc = function () {
        if (document.querySelector('#lc') != null) {
            document.querySelector('#lc').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    ApplicationForProductComponent.prototype.toOtherQy = function () {
        if (document.querySelector('#otherqy') != null) {
            document.querySelector('#otherqy').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    ApplicationForProductComponent.prototype.toDj = function () {
        if (document.querySelector('#dj') != null) {
            document.querySelector('#dj').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    ApplicationForProductComponent.prototype.toMy = function () {
        if (document.querySelector('#my') != null) {
            document.querySelector('#my').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    //码值
    ApplicationForProductComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ApplicationForProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-for-product',
            template: __webpack_require__(/*! ./application-for-product.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.html"),
            styles: [__webpack_require__(/*! ./application-for-product.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ApplicationForProductComponent);
    return ApplicationForProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"distributeCustQryForm\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6 left\">\r\n      <div class=\"ui-g-6 hanzi\" appValidation>\r\n        客户号：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.custNo\" formControlName=\"custNo\" disabled>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['custNo'].valid&&distributeCustQryForm.controls['custNo'].dirty\">\r\n          客户号不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='40'\" appValidation>\r\n        最近6个月平均使用金额（元）：\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'||inValue.indProdCd=='30'\" appValidation>\r\n        日均（元）：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.avgBal\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"\r\n          formControlName=\"avgBal\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['avgBal'].valid&&distributeCustQryForm.controls['avgBal'].dirty\">\r\n          不能为空!\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-6\" appValidation>\r\n        贷款类型：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanType\"  formControlName=\"loanType\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanType'].valid&&distributeCustQryForm.controls['loanType'].dirty\">\r\n          贷款类型不能为空!\r\n        </div>\r\n      </div> -->\r\n      <div class=\"ui-g-12\" style=\"padding:0\">\r\n        \r\n                  </div>\r\n      <div class=\"ui-g-6 hanzi\" appValidation>\r\n        币种：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.currCd\"   formControlName=\"currCd\"> -->\r\n        <p-dropdown [options]=\"currencyOptions\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"otherBankingProduct.currCd\" formControlName=\"currCd\"></p-dropdown>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['currCd'].valid&&distributeCustQryForm.controls['currCd'].dirty\">\r\n          币种未输!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\">\r\n        备注：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.remark\" formControlName=\"remark\" maxlength=\"100\">\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\">\r\n        数据来源：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.dataSrc\" formControlName=\"dataSrc\" maxlength=\"100\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 right\">\r\n      <div class=\"ui-g-6 hanzi\" appValidation>\r\n        客户姓名：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.custName\" formControlName=\"custName\" disabled>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['custName'].valid&&distributeCustQryForm.controls['custName'].dirty\">\r\n          不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" appValidation>\r\n        银行名称：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.bankName\" formControlName=\"bankName\" maxlength=\"10\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['bankName'].valid&&distributeCustQryForm.controls['bankName'].dirty\">\r\n          不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='40'\" appValidation>\r\n        授信额度（元）：\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='30'\" appValidation>\r\n        贷款金额（元）：\r\n      </div>\r\n      <!-- <div class=\"ui-g-6\">\r\n        金额（元）：\r\n      </div> -->\r\n      <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='40'||inValue.indProdCd=='30'\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanAmt\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"\r\n          formControlName=\"loanAmt\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanAmt'].valid&&distributeCustQryForm.controls['loanAmt'].dirty\">\r\n          不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='30'\" appValidation>\r\n        贷款余额（元）：\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\" *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'\" appValidation>\r\n        余额（元）：\r\n      </div>\r\n      <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'||inValue.indProdCd=='30'\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanBal\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"\r\n          formControlName=\"loanBal\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanBal'].valid&&distributeCustQryForm.controls['loanBal'].dirty\">\r\n          不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 hanzi\">\r\n        登记时间：\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <p-calendar [(ngModel)]=\"otherBankingProduct.regDt\" [maxDate]=\"today\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\"\r\n          [locale]=\"ch\" dateFormat=\"yy-mm-dd\" formControlName=\"regDt\"></p-calendar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\" style=\"margin-top:250px;\">\r\n    <button pButton label=\"确定\" (click)=\"submit()\"></button>\r\n    <button pButton label=\"取消\" (click)=\"close()\"></button>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n:host/deep/ .ui-calendar {\n  width: 130px !important;\n  border-bottom: none; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 130px !important; }\n\n.ui-g-12 .left .hanzi {\n  text-align: right; }\n\n.ui-g-12 .right .hanzi {\n  text-align: right; }\n\n:host/deep/ .ui-inputtext {\n  width: 130px !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 130px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3RoZXItYmFua2luZy1wcm9kdWN0L2FkZC1vdGhlci1sb2FuL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHZpZXctcHJvZHVjdC1pbmZvcm1hdGlvblxcb3RoZXItYmFua2luZy1wcm9kdWN0XFxhZGQtb3RoZXItbG9hblxcYWRkLW90aGVyLWxvYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsdUJBQXVCLEVBQUE7O0FBRy9CO0VBR1ksaUJBQWlCLEVBQUE7O0FBSDdCO0VBUVksaUJBQWlCLEVBQUE7O0FBSTdCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vdGhlci1iYW5raW5nLXByb2R1Y3QvYWRkLW90aGVyLWxvYW4vYWRkLW90aGVyLWxvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIC51aS1pbnB1dHRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0gXHJcbi51aS1nLTEye1xyXG4gICAgLmxlZnR7XHJcbiAgICAgICAgLmhhbnppe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHR7XHJcbiAgICAgICAgLmhhbnppe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dHtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddOtherLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOtherLoanComponent", function() { return AddOtherLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CURRENCY } from '../../../../constant/custView.codeValue';



var AddOtherLoanComponent = /** @class */ (function () {
    function AddOtherLoanComponent(httpService, commfunc, fb) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.otherBankingProduct = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["OtherBankingProduct"]();
        this.msgs = [];
        this.currencyOptions = []; //币种
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"]; //日期
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"]; //校验数字
        this.today = new Date();
        this.yearRangeSmall = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["yearRangeSmall"];
        this.yearRangeBig = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["yearRangeBig"];
        this.codeVal();
        this.currencyOptions = this.code['CURRENCY'];
        this.custNo = this.commfunc.getSessionData('custNo');
    }
    AddOtherLoanComponent.prototype.ngOnInit = function () {
        this.otherBankingProduct.currCd = '1';
        this.otherBankingProduct.regDt = this.tranToday(this.today.toISOString());
    };
    AddOtherLoanComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.yearRange = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["yearRangeSmall"] + ":" + app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["yearRangeBig"];
        // this.commfunc.transDate(param.regDt)
        if (this.inValue) {
            if (this.inValue.indProdCd == '10') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanAmt': new FormControl('',  Validators.required),//	金额（贷款金额）
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '20') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanAmt': new FormControl('',  Validators.required),//	金额（贷款金额）
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '30') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '40') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanBal': new FormControl('', Validators.required ),//	余额（贷款余额）
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            this.otherBankingProduct = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["OtherBankingProduct"]();
            this.otherBankingProduct.custNo = this.custNo;
            if (this.otherBankingProduct.custNo && this.otherBankingProduct.custNo != '') {
                this.httpService.selectCustBriefInfo({ custNo: this.custNo }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.otherBankingProduct.custNo = data.custNo;
                        _this.otherBankingProduct.custName = data.custName;
                    }
                });
            }
        }
    };
    AddOtherLoanComponent.prototype.submit = function () {
        var _this = this;
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
        if (this.otherBankingProduct.dataSrc == 'BD') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '数据来源不能为BD!' }];
            return;
        }
        // this.otherBankingProduct.dataSrc='手工录入';
        if (!this.otherBankingProduct.loanAmt || this.otherBankingProduct.loanAmt == '' || this.otherBankingProduct.loanAmt == null) {
            this.otherBankingProduct.loanAmt = '0';
        }
        if (!this.otherBankingProduct.avgBal || this.otherBankingProduct.avgBal == '' || this.otherBankingProduct.avgBal == null) {
            this.otherBankingProduct.avgBal = '0';
        }
        if (!this.otherBankingProduct.loanBal || this.otherBankingProduct.loanBal == '' || this.otherBankingProduct.loanBal == null) {
            this.otherBankingProduct.loanBal = '0';
        }
        var param = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.otherBankingProduct);
        param.regDt = this.commfunc.transDate(new Date(param.regDt));
        param.indProdCd = this.inValue.indProdCd;
        if (param.indProdCd == '30') {
            if (param.loanAmt && param.loanBal && param.loanAmt < param.loanBal) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所输贷款余额不能大于贷款金额' }];
                return;
            }
        }
        this.httpService.addCustOtherProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                _this.otherBankingProduct = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["OtherBankingProduct"]();
                _this.outValue.emit('新增他行贷款');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    AddOtherLoanComponent.prototype.close = function () {
        this.outValue.emit('取消');
    };
    AddOtherLoanComponent.prototype.onKeyupNumber = function (event) {
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, event.target.value)) {
            // this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码输入有误' }];
            event.target.value = '';
        }
    };
    //16位整数或16位整数保留两位小数
    AddOtherLoanComponent.prototype.onkeyupSixtwoNum = function (event) {
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["sixthTwoNum"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '所输金额必须为0-16位正整数或0-16位正整数保留两位小数' }];
            event.target.value = '';
        }
    };
    AddOtherLoanComponent.prototype.tranToday = function (value) {
        if (value && value.length == 8) {
            var a = value.slice(0, 4);
            var b = value.slice(4, 6);
            var c = value.slice(6, 8);
            return a + '-' + b + '-' + c;
        }
        else if (value && value.length >= 10) {
            value = value.slice(0, 10);
            return value;
        }
        else {
            return "";
        }
    };
    //码值
    AddOtherLoanComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddOtherLoanComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], AddOtherLoanComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], AddOtherLoanComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], AddOtherLoanComponent.prototype, "kindDo", void 0);
    AddOtherLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-other-loan',
            template: __webpack_require__(/*! ./add-other-loan.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.html"),
            styles: [__webpack_require__(/*! ./add-other-loan.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddOtherLoanComponent);
    return AddOtherLoanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P131')\">\r\n  <div class=\"ui-g-12 tab\">\r\n    <div class=\"header-title-theme quickSearch\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P233') || judgeField('X_CUST_M_P007_P131_P234') || judgeField('X_CUST_M_P007_P131_P235') || judgeField('X_CUST_M_P007_P131_P236')\" >\r\n      <span class=\"text\">他行产品</span>\r\n      <span [ngClass]=\"{'tx-b-bg':subShowPage == 'P233'}\" class=\"subLoan\" (click)=\"changeSubLoan('P233')\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P233')\">存款</span>\r\n      <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P233') && judgeField('X_CUST_M_P007_P131_P234')\"></span>\r\n      <span [ngClass]=\"{'tx-b-bg':subShowPage == 'P234'}\" class=\"subLoan\" (click)=\"changeSubLoan('P234')\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P234')\">贷款</span>\r\n      <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P234') && judgeField('X_CUST_M_P007_P131_P235')\"></span>\r\n      <span [ngClass]=\"{'tx-b-bg':subShowPage == 'P235'}\" class=\"subLoan\" (click)=\"changeSubLoan('P235')\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P235')\">理财</span>\r\n      <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P235') && judgeField('X_CUST_M_P007_P131_P236')\"></span>\r\n      <span [ngClass]=\"{'tx-b-bg':subShowPage == 'P236'}\" class=\"subLoan\" (click)=\"changeSubLoan('P236')\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P236')\">贷记卡</span>\r\n\r\n      <!-- 存款 -->\r\n      <span class=\"clickstyle\" (click)=\"addInfo(10)\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P233') && subShowPage == 'P233' && judgeField('X_CUST_M_P007_P131_P233_P303')\">\r\n        <div class=\"icon_lists dib-box imgOrFont\">\r\n          <span class=\"icon iconfont tzbicon-plus-circle img_display\"></span>\r\n          <span class=\"img_no_display\">新增</span>\r\n        </div>\r\n      </span>\r\n\r\n      <!-- 贷款 -->\r\n      <span class=\"clickstyle\" (click)=\"addInfo(30)\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P234') && subShowPage == 'P234' && judgeField('X_CUST_M_P007_P131_P234_P306')\">\r\n        <div class=\"icon_lists dib-box imgOrFont\">\r\n          <span class=\"icon iconfont tzbicon-plus-circle img_display\"></span>\r\n          <span class=\"img_no_display\">新增</span>\r\n        </div>\r\n      </span>\r\n\r\n      <!-- 理财 -->\r\n      <span class=\"clickstyle\" (click)=\"addInfo(20)\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P235') && subShowPage == 'P235' && judgeField('X_CUST_M_P007_P131_P235_P309')\">\r\n        <div class=\"icon_lists dib-box imgOrFont\">\r\n          <span class=\"icon iconfont tzbicon-plus-circle img_display\"></span>\r\n          <span class=\"img_no_display\">新增</span>\r\n        </div>\r\n      </span>\r\n\r\n      <!-- 贷记卡 -->\r\n      <span class=\"clickstyle\" (click)=\"addInfo(40)\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P236') && subShowPage == 'P236' && judgeField('X_CUST_M_P007_P131_P236_P312')\">\r\n        <div class=\"icon_lists dib-box imgOrFont\">\r\n          <span class=\"icon iconfont tzbicon-plus-circle img_display\"></span>\r\n          <span class=\"img_no_display\">新增</span>\r\n        </div>\r\n      </span>\r\n    </div>\r\n\r\n    <!-- 1101、存款 -->\r\n    <div class=\"ui-g-12 tab-module\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P233') && subShowPage == 'P233'\">\r\n      <div class=\"ui-g-12 padding-tb\">\r\n        <u-dataTable [value]=\"aInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{ri+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"bankName\" header=\"银行名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P233_F304')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P233_F304')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P233_F305')\" field=\"loanBal\" header=\"余额（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P233_F305')\" field=\"loanBal\" header=\"余额（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"currCd\" header=\"币种\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.currCd|codeValuePie:currencyOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"regDt\" header=\"登记时间\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"dataSrc\" header=\"数据来源\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"color\" header=\"操作\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate>\r\n              <span class=\"tabelUpdateIco\" (click)='updateLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P233_P311')\">修改</span>\r\n              <span class=\"tabelDeleteIco\" (click)='deleteLoanInfo(col)'>删除</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12 pag\">\r\n          <u-paginator [first]=\"firstA\" rows=\"{{aInfopageSize}}\" totalRecords=\"{{aInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateA($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 1102、贷款 -->\r\n    <div class=\"ui-g-12 tab-module\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P234') && subShowPage == 'P234'\">\r\n      <div class=\"ui-g-12 padding-tb\">\r\n        <u-dataTable [value]=\"bInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{ri+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"bankName\" header=\"银行名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P234_F307')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P234_F307')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"loanAmt\" header=\"贷款金额（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P234_F308')\" field=\"loanBal\" header=\"贷款余额（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P234_F308')\" field=\"loanBal\" header=\"贷款余额（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"currCd\" header=\"币种\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.currCd|codeValuePie:currencyOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"regDt\" header=\"登记时间\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"dataSrc\" header=\"数据来源\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"color\" header=\"操作\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate>\r\n              <span class=\"tabelUpdateIco\" (click)='updateLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P234_P311')\">修改</span>\r\n              <span class=\"tabelDeleteIco\" (click)='deleteLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P234_P312')\">删除</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12 pag\">\r\n          <u-paginator [first]=\"firstB\" rows=\"{{bInfopageSize}}\" totalRecords=\"{{bInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateB($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 1103、理财 -->\r\n    <div class=\"ui-g-12 tab-module\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P235') && subShowPage == 'P235'\">\r\n      <div class=\"ui-g-12 padding-tb\">\r\n        <u-dataTable [value]=\"cInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{ri+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"bankName\" header=\"银行名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P235_F310')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P235_F310')\" field=\"avgBal\" header=\"日均（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P235_F311')\" field=\"loanBal\" header=\"余额（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P235_F311')\" field=\"loanBal\" header=\"余额（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"currCd\" header=\"币种\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.currCd|codeValuePie:currencyOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"regDt\" header=\"登记时间\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"dataSrc\" header=\"数据来源\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"color\" header=\"操作\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate>\r\n              <span class=\"tabelUpdateIco\" (click)='updateLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P235_P311')\">修改</span>\r\n              <span class=\"tabelDeleteIco\" (click)='deleteLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P235_P312')\">删除</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12 pag\">\r\n          <u-paginator [first]=\"firstC\" rows=\"{{cInfopageSize}}\" totalRecords=\"{{cInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateC($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 1104、贷记卡 -->\r\n    <div class=\"ui-g-12 tab-module\" *ngIf=\"judgeField('X_CUST_M_P007_P131_P236') && subShowPage == 'P236'\">\r\n      <div class=\"ui-g-12 padding-tb\">\r\n        <u-dataTable [value]=\"dInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{ri+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"bankName\" header=\"银行名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"judgeField('X_CUST_M_P007_P131_P236_F313')\" field=\"loanAmt\" header=\"授信额度（元）\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column *ngIf=\"!judgeField('X_CUST_M_P007_P131_P236_F313')\" field=\"loanAmt\" header=\"授信额度（元）\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"avgBal\" header=\"最近6个月平均使用金额（元）\" [style]=\"{'width':'220px'}\"></p-column>\r\n          <p-column field=\"currCd\" header=\"币种\" [style]=\"{'width':'180px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.currCd|codeValuePie:currencyOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"remark\" header=\"备注\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"regDt\" header=\"登记时间\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"dataSrc\" header=\"数据来源\" [style]=\"{'width':'180px'}\"></p-column>\r\n          <p-column field=\"color\" header=\"操作\" [style]=\"{'width':'120px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate>\r\n              <span class=\"tabelUpdateIco\" (click)='updateLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P236_P311')\">修改</span>\r\n              <span class=\"tabelDeleteIco\" (click)='deleteLoanInfo(col)' *ngIf=\"(col.dataSrc!='BD')&&judgeField('X_CUST_M_P007_P131_P236_P313')\">删除</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12 pag\">\r\n          <u-paginator [first]=\"firstD\" rows=\"{{dInfopageSize}}\" totalRecords=\"{{dInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateD($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- 他行产品贷款新增 -->\r\n<p-dialog *ngIf=\"addOtherLoanDisplay\" [(visible)]=\"addOtherLoanDisplay\" modal=\"modal\" (onHide)=\"addCall($event)\" width=\"850\">\r\n  <p-header>\r\n    新增\r\n  </p-header>\r\n  <app-add-other-loan (outValue)=\"addCall($event)\" [in-value]=\"inValue\" [key-label]=\"keyValue\" [kind-do]=\"kindDo\"></app-add-other-loan>\r\n</p-dialog>\r\n<!-- 他行产品贷款修改 -->\r\n<p-dialog *ngIf=\"updateOtherLoanDisplay\" [(visible)]=\"updateOtherLoanDisplay\" modal=\"modal\" (onHide)=\"addCall($event)\" width=\"850\">\r\n  <p-header>\r\n    修改\r\n  </p-header>\r\n  <app-update-other-loan (outValue)=\"addCall($event)\" [in-value]=\"inValue\" [key-label]=\"keyValue\" [kind-do]=\"kindDo\"></app-update-other-loan>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog width=\"425\" appendTo=\"body\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  padding: 0; }\n  .tab .ui-g-11 span {\n    background: #0094D2; }\n  .header-title-theme {\n  padding-left: 12px;\n  height: 42px;\n  width: 100%;\n  background-color: #ffffff;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8 !important; }\n  .header-title-theme .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .line {\n      height: 17px; } }\n  .header-title-theme .text {\n    -webkit-box-flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    padding-right: 50px;\n    font-weight: bold; }\n  .header-title-theme .advance {\n    -webkit-box-flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .text {\n      font-size: 15px; } }\n  .tab-module {\n  padding: 15px 0 0 12px;\n  position: relative; }\n  .padding-tb {\n  margin: 0;\n  padding: 0; }\n  .icoColor {\n  cursor: pointer;\n  position: absolute;\n  right: 0; }\n  .ui-g .ui-g-12 strong {\n  display: inline-block;\n  width: 80px;\n  text-align: right; }\n  .ui-g .ui-g-12 .content {\n  padding: 0; }\n  .ui-g .ui-g-12 .content span {\n    display: inline-block;\n    margin-left: 5px; }\n  .ui-g .tab {\n  padding: 0; }\n  .ui-g .tab .btn {\n    padding: 0;\n    text-align: right; }\n  :host/deep/ .u-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  .menu {\n  width: 99%;\n  background-color: #e5e5e5;\n  border: 1px solid #c6c6c6;\n  border-radius: 3px;\n  margin: 0 auto 0.5em; }\n  .menu a {\n    position: relative;\n    color: #5d5d5d;\n    padding: 7px 22px;\n    cursor: pointer;\n    border-right: 1px solid #c6c6c6; }\n  .menu a .secondM,\n    .menu a .thirdM {\n      width: 117px;\n      position: absolute;\n      top: 20px;\n      left: 17px;\n      z-index: 1000;\n      background: white;\n      text-align: center;\n      list-style: none;\n      padding: 0;\n      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.5);\n      display: none; }\n  .menu a .secondM li,\n      .menu a .thirdM li {\n        padding: 4px 0; }\n  .menu a .secondM li a,\n        .menu a .thirdM li a {\n          border-right: 0px !important; }\n  .menu a .thirdM {\n      left: 116px;\n      top: 22px; }\n  .menu a li:hover {\n      background: #e9f7f8; }\n  .menu a:hover {\n      color: #0094D2;\n      background-color: #fafafa; }\n  .menu a:hover .secondM {\n        display: block; }\n  .menu a:hover .secondM .spe:hover .thirdM {\n          display: block; }\n  :host/deep/ .ui-paginator .ui-dropdown .ui-dropdown-label {\n  width: 50px !important; }\n  .tzbicon-plus-circle {\n  color: #34CFE6;\n  font-size: 20px;\n  float: right; }\n  .tzbicon-plus-circle:hover {\n    cursor: pointer; }\n  .typeLine {\n  width: 1px;\n  height: 13px;\n  margin-left: 10px;\n  margin-right: 10px;\n  display: block;\n  background: #739aa9; }\n  .subLoan {\n  cursor: pointer; }\n  .tx-b-bg {\n  color: #34CFE6;\n  font-weight: bold; }\n  .pag {\n  text-align: center; }\n  .clickstyle {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 10px; }\n  .quickSearch {\n  position: relative; }\n  .icon {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  font-size: 20px; }\n  .imgOrFont .img_no_display {\n  display: none; }\n  .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  background: transparent;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n  display: none; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr {\n  height: 33px !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr > th {\n  padding: 0 !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-tfoot > tr > td {\n  padding-right: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3RoZXItYmFua2luZy1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHZpZXctcHJvZHVjdC1pbmZvcm1hdGlvblxcb3RoZXItYmFua2luZy1wcm9kdWN0XFxvdGhlci1iYW5raW5nLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7RUFEZDtJQUlZLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVQvQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQUU3QjtJQWpCSjtNQW1CWSxZQUFZLEVBQUEsRUFDZjtFQXBCVDtJQXVCUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBL0J6QjtJQWtDUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtFQUVuQjtJQXpDSjtNQTJDWSxlQUFlLEVBQUEsRUFDbEI7RUFJVDtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUFHZDtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUSxFQUFBO0VBR1o7RUFHWSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQixFQUFBO0VBTDdCO0VBUVksVUFBVSxFQUFBO0VBUnRCO0lBVWdCLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtFQVhoQztFQWdCUSxVQUFVLEVBQUE7RUFoQmxCO0lBa0JZLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQUs3QjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7RUFMeEI7SUFPUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsK0JBQStCLEVBQUE7RUFYdkM7O01BY1ksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtNQUNWLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsNENBQTRDO01BQzVDLGFBQWEsRUFBQTtFQXhCekI7O1FBMEJnQixjQUFjLEVBQUE7RUExQjlCOztVQTRCb0IsNEJBQTRCLEVBQUE7RUE1QmhEO01BaUNZLFdBQVc7TUFDWCxTQUFTLEVBQUE7RUFsQ3JCO01BcUNZLG1CQUFtQixFQUFBO0VBckMvQjtNQXdDWSxjQUFjO01BQ2QseUJBQXlCLEVBQUE7RUF6Q3JDO1FBMkNnQixjQUFjLEVBQUE7RUEzQzlCO1VBK0M0QixjQUFjLEVBQUE7RUFTMUM7RUFDSSxzQkFBc0IsRUFBQTtFQUcxQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBSGhCO0lBS1EsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGtCQUNKLEVBQUE7RUFFQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTtFQUViO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFHbkI7RUFFUSxhQUFhLEVBQUE7RUFGckI7RUFNWSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0VBWG5DO0VBY1ksYUFBYSxFQUFBO0VBSXpCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxxQkFBcUIsRUFBQTtFQUl6QjtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3RoZXItYmFua2luZy1wcm9kdWN0L290aGVyLWJhbmtpbmctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC51aS1nLTExIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUtdGhlbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTggIWltcG9ydGFudDtcclxuICAgIC5saW5lIHtcclxuICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NzsgLy8gd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5hZHZhbmNlIHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWItbW9kdWxlIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRiIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pY29Db2xvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLnVpLWcge1xyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5e1xyXG4gICAgaGVpZ2h0OiAzODVweDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMC41ZW07XHJcbiAgICBhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICM1ZDVkNWQ7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDIycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICAgICAgLnNlY29uZE0sXHJcbiAgICAgICAgLnRoaXJkTSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTdweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDIuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRoaXJkTSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDExNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZjdmODtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAuc2Vjb25kTSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5zcGUge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhpcmRNIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnR6Ymljb24tcGx1cy1jaXJjbGUge1xyXG4gICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50eXBlTGluZSB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICM3MzlhYTk7XHJcbn1cclxuXHJcbi5zdWJMb2FuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnR4LWItYmcge1xyXG4gICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmNsaWNrc3R5bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLnF1aWNrU2VhcmNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWdPckZvbnQge1xyXG4gICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keXtcclxuICAgIGhlaWdodDogMzg1cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5wcm8taGVhZGVyLXRhYmxlIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvLWhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvLWhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10Zm9vdD50cj50ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: OtherBankingProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBankingProductComponent", function() { return OtherBankingProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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



// import { CURRENCY } from '../../../constant/custView.codeValue';




var OtherBankingProductComponent = /** @class */ (function () {
    function OtherBankingProductComponent(httpService, commFunc, confirmationService, route, router) {
        this.httpService = httpService;
        this.commFunc = commFunc;
        this.confirmationService = confirmationService;
        this.route = route;
        this.router = router;
        this.aInfo = [];
        this.aInfopageNum = 1;
        this.aInfopageSize = 10;
        this.aInfototalNum = 0;
        this.bInfo = [];
        this.bInfopageNum = 1;
        this.bInfopageSize = 10;
        this.bInfototalNum = 0;
        this.cInfo = [];
        this.cInfopageNum = 1;
        this.cInfopageSize = 10;
        this.cInfototalNum = 0;
        this.dInfo = [];
        this.dInfopageNum = 1;
        this.dInfopageSize = 10;
        this.dInfototalNum = 0;
        this.addOtherLoanDisplay = false;
        this.updateOtherLoanDisplay = false;
        this.currencyOptions = []; //币种
        this.pageSize = 10;
        this.pageNum = 1;
        this.totalNum = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.firstA = 0;
        this.firstB = 0;
        this.firstC = 0;
        this.firstD = 0;
        this.subShowPage = '';
        this.codeVal();
        this.currencyOptions = this.code['CURRENCY'];
        //----------------------------------------------------上面是码值
        this.custNo = this.commFunc.getSessionData('custNo');
    }
    OtherBankingProductComponent.prototype.ngOnInit = function () {
        this.selectCustOtherProdInfoAInit();
        this.selectCustOtherProdInfoBInit();
        this.selectCustOtherProdInfoCInit();
        this.selectCustOtherProdInfoDInit();
        this.showFirstOtherPro();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoAInit = function () {
        this.firstA = 0;
        this.aInfopageSize = 10;
        this.aInfopageNum = 1;
        this.selectCustOtherProdInfoA();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoA = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.aInfopageSize,
            pageNum: this.aInfopageNum,
            indProdCd: '10'
        };
        this.httpService.selectCustOtherProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.aInfo = data.infoList == null ? [] : data.infoList;
                // this.aInfopageNum = data.pageNum;
                // this.aInfopageSize = data.pageSize;
                _this.aInfototalNum = data.totalNum;
            }
        });
    };
    OtherBankingProductComponent.prototype.paginateA = function (event) {
        this.aInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.aInfopageNum = currentPage;
        this.firstA = (currentPage - 1) * this.aInfopageSize;
        this.selectCustOtherProdInfoA();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoBInit = function () {
        this.firstB = 0;
        this.bInfopageSize = 10;
        this.bInfopageNum = 1;
        this.selectCustOtherProdInfoB();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoB = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.bInfopageSize,
            pageNum: this.bInfopageNum,
            indProdCd: '30'
        };
        this.httpService.selectCustOtherProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.bInfo = data.infoList == null ? [] : data.infoList;
                // this.bInfopageNum = data.pageNum;
                // this.bInfopageSize = data.pageSize;
                _this.bInfototalNum = data.totalNum;
            }
        });
    };
    OtherBankingProductComponent.prototype.paginateB = function (event) {
        this.bInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.bInfopageNum = currentPage;
        this.firstB = (currentPage - 1) * this.bInfopageSize;
        this.selectCustOtherProdInfoB();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoCInit = function () {
        this.firstC = 0;
        this.cInfopageSize = 10;
        this.cInfopageNum = 1;
        this.selectCustOtherProdInfoC();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoC = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.cInfopageSize,
            pageNum: this.cInfopageNum,
            indProdCd: '20'
        };
        this.httpService.selectCustOtherProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.cInfo = data.infoList == null ? [] : data.infoList;
                // this.cInfopageNum = data.pageNum;
                // this.cInfopageSize = data.pageSize;
                _this.cInfototalNum = data.totalNum;
            }
        });
    };
    OtherBankingProductComponent.prototype.paginateC = function (event) {
        this.cInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.cInfopageNum = currentPage;
        this.firstC = (currentPage - 1) * this.cInfopageSize;
        this.selectCustOtherProdInfoC();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoDInit = function () {
        this.firstD = 0;
        this.dInfopageSize = 10;
        this.dInfopageNum = 1;
        this.selectCustOtherProdInfoD();
    };
    OtherBankingProductComponent.prototype.selectCustOtherProdInfoD = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.dInfopageSize,
            pageNum: this.dInfopageNum,
            indProdCd: '40'
        };
        this.httpService.selectCustOtherProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dInfo = data.infoList;
                // this.dInfopageNum = data.pageNum;
                // this.dInfopageSize = data.pageSize;
                _this.dInfototalNum = data.totalNum;
            }
        });
    };
    OtherBankingProductComponent.prototype.paginateD = function (event) {
        this.dInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.dInfopageNum = currentPage;
        this.firstD = (currentPage - 1) * this.dInfopageSize;
        this.selectCustOtherProdInfoD();
    };
    OtherBankingProductComponent.prototype.addInfo = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"]({ custNo: this.custNo, indProdCd: data });
        this.addOtherLoanDisplay = true;
        document.body.style.overflow = 'hidden';
    };
    OtherBankingProductComponent.prototype.updateLoanInfo = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](data);
        this.updateOtherLoanDisplay = true;
        document.body.style.overflow = 'hidden';
    };
    OtherBankingProductComponent.prototype.deleteLoanInfo = function (data) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确认删除?',
            header: '删除',
            icon: 'fa fa-question-circle',
            accept: function () {
                var param = {
                    pk: data.pk,
                    indProdCd: data.indProdCd
                };
                _this.httpService.deleteCustOtherProdInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        if (param.indProdCd == '10') {
                            _this.selectCustOtherProdInfoA();
                        }
                        else if (param.indProdCd == '20') {
                            _this.selectCustOtherProdInfoC();
                        }
                        else if (param.indProdCd == '30') {
                            _this.selectCustOtherProdInfoB();
                        }
                        else if (param.indProdCd == '40') {
                            _this.selectCustOtherProdInfoD();
                        }
                    }
                    else {
                        data.returnCode.message ? data.returnCode.message : '调用服务失败';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                });
            }
            // ,
            // reject: () => {
            //   this.msgs = [{ severity: 'success', summary: '提示', detail: '取消删除' }];
            // }
        });
    };
    OtherBankingProductComponent.prototype.addCall = function (event) {
        if (event == '新增他行贷款' || event == '修改他行贷款') {
            this.addOtherLoanDisplay = false;
            this.updateOtherLoanDisplay = false;
            document.body.style.overflow = 'auto';
            if (this.inValue.indProdCd == '10') {
                this.selectCustOtherProdInfoA();
            }
            else if (this.inValue.indProdCd == '20') {
                this.selectCustOtherProdInfoC();
            }
            else if (this.inValue.indProdCd == '30') {
                this.selectCustOtherProdInfoB();
            }
            else if (this.inValue.indProdCd == '40') {
                this.selectCustOtherProdInfoD();
            }
        }
        else {
            this.addOtherLoanDisplay = false;
            this.updateOtherLoanDisplay = false;
            document.body.style.overflow = 'auto';
        }
    };
    //权限
    OtherBankingProductComponent.prototype.judgeField = function (fId) {
        var ret = this.commFunc.permissionFiledCheck(fId);
        return ret;
    };
    OtherBankingProductComponent.prototype.toOwnOurProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    OtherBankingProductComponent.prototype.toApplForProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/appl-for-product']);
    };
    OtherBankingProductComponent.prototype.toOtherBankProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/other-bank-product']);
    };
    OtherBankingProductComponent.prototype.toRecommendedProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/recommended-product']);
    };
    OtherBankingProductComponent.prototype.tock = function () {
        if (document.querySelector('#ck') != null) {
            document.querySelector('#ck').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    OtherBankingProductComponent.prototype.toDk = function () {
        if (document.querySelector('#dk') != null) {
            document.querySelector('#dk').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    OtherBankingProductComponent.prototype.toLc = function () {
        if (document.querySelector('#lc') != null) {
            document.querySelector('#lc').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    OtherBankingProductComponent.prototype.toOtherQy = function () {
        if (document.querySelector('#otherqy') != null) {
            document.querySelector('#otherqy').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    OtherBankingProductComponent.prototype.toDj = function () {
        if (document.querySelector('#dj') != null) {
            document.querySelector('#dj').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    OtherBankingProductComponent.prototype.toMy = function () {
        if (document.querySelector('#my') != null) {
            document.querySelector('#my').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    //码值
    OtherBankingProductComponent.prototype.codeVal = function () {
        this.commFunc.codeValue();
        var ret = this.commFunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 贷款类切换
    OtherBankingProductComponent.prototype.changeSubLoan = function (param) {
        this.subShowPage = param;
        if (param == 'P233') {
            this.selectCustOtherProdInfoAInit();
        }
        if (param == 'P234') {
            this.selectCustOtherProdInfoBInit();
        }
        if (param == 'P235') {
            this.selectCustOtherProdInfoCInit();
        }
        if (param == 'P236') {
            this.selectCustOtherProdInfoDInit();
        }
    };
    // 默认展示第一个
    OtherBankingProductComponent.prototype.showFirstOtherPro = function () {
        if (this.judgeField('X_CUST_M_P007_P131_P233')) {
            this.subShowPage = 'P233';
        }
        else if (this.judgeField('X_CUST_M_P007_P131_P234')) {
            this.subShowPage = 'P234';
        }
        else if (this.judgeField('X_CUST_M_P007_P131_P235')) {
            this.subShowPage = 'P235';
        }
        else if (this.judgeField('X_CUST_M_P007_P131_P236')) {
            this.subShowPage = 'P236';
        }
        else {
            this.subShowPage = '';
        }
    };
    OtherBankingProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-banking-product',
            template: __webpack_require__(/*! ./other-banking-product.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.html"),
            styles: [__webpack_require__(/*! ./other-banking-product.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OtherBankingProductComponent);
    return OtherBankingProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"distributeCustQryForm\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6 left\">\r\n          <div class=\"ui-g-6\" appValidation>\r\n            客户号：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.custNo\" formControlName=\"custNo\" disabled>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['custNo'].valid&&distributeCustQryForm.controls['custNo'].dirty\">\r\n              客户号不能为空!\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='40'\" appValidation>\r\n              最近6个月平均使用金额（元）：\r\n            </div>\r\n          <div class=\"ui-g-6\"  *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'||inValue.indProdCd=='30'\" appValidation>\r\n            日均（元）：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.avgBal\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"  formControlName=\"avgBal\">\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['avgBal'].valid&&distributeCustQryForm.controls['avgBal'].dirty\">\r\n                不能为空!\r\n              </div>\r\n          </div>\r\n          <!-- <div class=\"ui-g-6\" appValidation>\r\n            贷款类型：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanType\"  formControlName=\"loanType\">\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanType'].valid&&distributeCustQryForm.controls['loanType'].dirty\">\r\n              贷款类型不能为空!\r\n            </div>\r\n          </div> -->\r\n          <div class=\"ui-g-12\" style=\"padding:0\">\r\n\r\n          </div>\r\n          <div class=\"ui-g-6\" appValidation>\r\n            币种：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <!-- <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.currCd\"   formControlName=\"currCd\"> -->\r\n            <p-dropdown [options]=\"currencyOptions\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"otherBankingProduct.currCd\" formControlName=\"currCd\"></p-dropdown>        \r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['currCd'].valid&&distributeCustQryForm.controls['currCd'].dirty\">\r\n              币种未输!\r\n              </div>\r\n          </div>\r\n          <div class=\"ui-g-6\" >\r\n            备注：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.remark\"  formControlName=\"remark\" maxlength=\"100\">\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n              数据来源：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.dataSrc\"   formControlName=\"dataSrc\" maxlength=\"100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 right\">\r\n          <div class=\"ui-g-6\" appValidation>\r\n            客户姓名：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.custName\" formControlName=\"custName\" disabled>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['custName'].valid&&distributeCustQryForm.controls['custName'].dirty\">\r\n              不能为空!\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\" appValidation>\r\n              银行名称：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.bankName\" formControlName=\"bankName\" maxlength=\"10\">\r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['bankName'].valid&&distributeCustQryForm.controls['bankName'].dirty\">\r\n                不能为空!\r\n              </div>\r\n            </div>\r\n          <div class=\"ui-g-6\"  *ngIf=\"inValue.indProdCd=='40'\" appValidation>\r\n              授信额度（元）：\r\n            </div>\r\n          <div class=\"ui-g-6\"  *ngIf=\"inValue.indProdCd=='30'\" appValidation>\r\n              贷款金额（元）：\r\n            </div>\r\n          <!-- <div class=\"ui-g-6\">\r\n            金额（元）：\r\n          </div> -->\r\n          <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='40'||inValue.indProdCd=='30'\" >\r\n            <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanAmt\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"   formControlName=\"loanAmt\">\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanAmt'].valid&&distributeCustQryForm.controls['loanAmt'].dirty\">\r\n                不能为空!\r\n              </div>\r\n          </div>\r\n          <div class=\"ui-g-6\"  *ngIf=\"inValue.indProdCd=='30'\" appValidation>\r\n              贷款余额（元）：\r\n            </div>\r\n          <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'\"  appValidation>\r\n              余额（元）：\r\n            </div>\r\n            <div class=\"ui-g-6\" *ngIf=\"inValue.indProdCd=='10'||inValue.indProdCd=='20'||inValue.indProdCd=='30'\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"otherBankingProduct.loanBal\" (keyup)=\"onkeyupSixtwoNum($event)\" (blur)=\"onkeyupSixtwoNum($event)\"   formControlName=\"loanBal\">\r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!distributeCustQryForm.controls['loanBal'].valid&&distributeCustQryForm.controls['loanBal'].dirty\">\r\n                  不能为空!\r\n                </div>\r\n            </div>\r\n          <div class=\"ui-g-6\">\r\n            登记时间：\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <p-calendar [(ngModel)]=\"otherBankingProduct.regDt\"  [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\" [locale]=\"ch\" formControlName=\"regDt\" disabled=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  <div class=\"ui-g-12 btn\" style=\"margin-top:250px;\">\r\n    <button pButton label=\"确定\" (click)=\"submit()\" ></button>\r\n    <button pButton label=\"取消\" (click)=\"close()\"></button>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n:host/deep/ .ui-calendar {\n  width: 130px !important;\n  border-bottom: none; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 130px !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 130px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3RoZXItYmFua2luZy1wcm9kdWN0L3VwZGF0ZS1vdGhlci1sb2FuL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHZpZXctcHJvZHVjdC1pbmZvcm1hdGlvblxcb3RoZXItYmFua2luZy1wcm9kdWN0XFx1cGRhdGUtb3RoZXItbG9hblxcdXBkYXRlLW90aGVyLWxvYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsdUJBQXVCLEVBQUE7O0FBSS9CO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vdGhlci1iYW5raW5nLXByb2R1Y3QvdXBkYXRlLW90aGVyLWxvYW4vdXBkYXRlLW90aGVyLWxvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIC51aS1pbnB1dHRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0gXHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: UpdateOtherLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOtherLoanComponent", function() { return UpdateOtherLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {CURRENCY} from '../../../../constant/custView.codeValue';

var UpdateOtherLoanComponent = /** @class */ (function () {
    function UpdateOtherLoanComponent(httpService, commfunc, fb) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.otherBankingProduct = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["OtherBankingProduct"]();
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //日期
        this.currencyOptions = []; //币种
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"]; //校验数字
        this.yearRangeSmall = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"];
        this.yearRangeBig = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        this.codeVal();
        this.currencyOptions = this.code['CURRENCY'];
        this.custNo = this.commfunc.getSessionData('custNo');
    }
    UpdateOtherLoanComponent.prototype.ngOnInit = function () {
        // this.otherBankingProduct.currCd='1';
    };
    UpdateOtherLoanComponent.prototype.ngOnChanges = function () {
        this.yearRange = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"] + ":" + app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        if (this.inValue) {
            if (this.inValue.indProdCd == '10') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanAmt': new FormControl('',  Validators.required),//	金额（贷款金额）
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '20') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanAmt': new FormControl('',  Validators.required),//	金额（贷款金额）
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '30') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            else if (this.inValue.indProdCd == '40') {
                this.distributeCustQryForm = this.fb.group({
                    'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'avgBal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'indProdCd': new FormControl('', Validators.required),//	他行产品标志
                    'currCd': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    'loanAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    // 'loanBal': new FormControl('', Validators.required ),//	余额（贷款余额）
                    'remark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'regDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'dataSrc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                });
            }
            this.inValue.regDt = new Date(this.inValue.regDt);
            this.otherBankingProduct = this.inValue;
        }
    };
    UpdateOtherLoanComponent.prototype.submit = function () {
        var _this = this;
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
        if (this.otherBankingProduct.dataSrc == 'BD') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '数据来源不能为BD!' }];
            return;
        }
        if (this.otherBankingProduct.indProdCd == '30') {
            if (this.otherBankingProduct.loanAmt && this.otherBankingProduct.loanBal && this.otherBankingProduct.loanAmt < this.otherBankingProduct.loanBal) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所输贷款余额不能大于贷款金额' }];
                return;
            }
        }
        this.httpService.updateCustOtherProdInfo(this.otherBankingProduct).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                _this.otherBankingProduct = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["OtherBankingProduct"]();
                _this.outValue.emit('修改他行贷款');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    UpdateOtherLoanComponent.prototype.close = function () {
        this.outValue.emit('取消');
    };
    UpdateOtherLoanComponent.prototype.onKeyupNumber = function (event) {
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
            // this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码输入有误' }];
            event.target.value = '';
        }
    };
    //16位整数或16位整数保留两位小数
    UpdateOtherLoanComponent.prototype.onkeyupSixtwoNum = function (event) {
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["sixthTwoNum"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '所输金额必须为0-16位正整数或0-16位正整数保留两位小数' }];
            event.target.value = '';
        }
    };
    //码值
    UpdateOtherLoanComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateOtherLoanComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], UpdateOtherLoanComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], UpdateOtherLoanComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], UpdateOtherLoanComponent.prototype, "kindDo", void 0);
    UpdateOtherLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-other-loan',
            template: __webpack_require__(/*! ./update-other-loan.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.html"),
            styles: [__webpack_require__(/*! ./update-other-loan.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UpdateOtherLoanComponent);
    return UpdateOtherLoanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g queryCondition\">\r\n    <div class=\"left\">\r\n      <label for=\"\">开始日期：</label>\r\n      <p-calendar [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showTime('plan','start')\" (onBlur)=\"handInputDate('plan','start')\"></p-calendar>\r\n      <label for=\"\">结束日期：</label>\r\n      <p-calendar [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showTime('plan','end')\" (onBlur)=\"handInputDate('plan','end')\"></p-calendar>\r\n    </div>\r\n    <div class=\"right\">\r\n      <button pButton class=\"btn\" label=\"查询\" (click)=\"queryList()\" [disabled]=\"juege\"></button>\r\n      <button pButton class=\"btn\" label=\"近1个月\" (click)=\"queryList('1')\" [disabled]=\"juege\"></button>\r\n      <button pButton class=\"btn\" label=\"近3个月\" (click)=\"queryList('3')\" [disabled]=\"juege\"></button>\r\n      <button pButton class=\"btn\" label=\"近6个月\" (click)=\"queryList('6')\" [disabled]=\"juege\"></button>\r\n      <button pButton class=\"btn\" label=\"近12个月\" (click)=\"queryList('12')\" [disabled]=\"juege\"></button>\r\n      <p-radioButton name=\"custType\" label=\"贷方\" value=\"1\" [(ngModel)]=\"custType\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"借方\" value=\"2\" [(ngModel)]=\"custType\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"全部\" value=\"0\" [(ngModel)]=\"custType\"></p-radioButton>\r\n    </div>\r\n  </div>\r\n  <iframe width=\"100%\" height=\"670px\" [src]=\"srcUrl_1\">\r\n  </iframe>\r\n  <!-- <div>\r\n    <p-dataTable [value]=\"items\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'80px'}\">\r\n        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" >\r\n          {{ri+1}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"tranDate\" header=\"交易日期\" [style]=\"{'width':'109px'}\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.tranDate|timeValuePie}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"tranBranchId\" header=\"交易机构\" [style]=\"{'width':'109px'}\"></p-column>\r\n      <p-column field=\"drCrFlag\" header=\"借贷标志\" [style]=\"{'width':'109px'}\"></p-column>\r\n      <p-column field=\"amt\" header=\"交易金额\" [style]=\"{'width':'109px'}\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{(col.amt/1)|number:'1.2-2'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"tranName\" header=\"交易名称\" [style]=\"{'width':'109px'}\"></p-column>\r\n      <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'109px'}\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{(col.balance/1)|number:'1.2-2'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"appUserId\" header=\"经办柜员\" [style]=\"{'width':'109px'}\"></p-column>\r\n      <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'width':'109px'}\"></p-column>\r\n      <p-column field=\"oppoAccoAcctNo\" header=\"对方核算账号\" [style]=\"{'width':'180px'}\"></p-column>\r\n      <p-column field=\"clientName\" header=\"交易对手\" [style]=\"{'width':'200px'}\"></p-column>\r\n    </p-dataTable>\r\n  </div> -->\r\n  <!-- <div class=\"ui-g-12\" style=\"text-align:center\">\r\n    <button pButton label=\"关闭\" (click)=\"close()\"></button>\r\n  </div> -->\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.btn, .table {\n  text-align: center; }\n\n:host/deep/ .ui-calendar {\n  width: 130px !important; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 130px !important; }\n\n.queryCondition {\n  padding-bottom: .5em; }\n\n.queryCondition .left {\n    width: 43%; }\n\n.queryCondition .right {\n    width: 57%;\n    text-align: right;\n    padding-right: 25px; }\n\n.queryCondition .btn {\n    padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2FjY291bnQtdHJhZGluZy1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHZpZXctcHJvZHVjdC1pbmZvcm1hdGlvblxcb3duLW91ci1wcm9kdWN0XFxhY2NvdW50LXRyYWRpbmctZGV0YWlsc1xcYWNjb3VudC10cmFkaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFEM0I7SUFHUSx1QkFBdUIsRUFBQTs7QUFhL0I7RUFDSSxvQkFBb0IsRUFBQTs7QUFEeEI7SUFHUSxVQUFVLEVBQUE7O0FBSGxCO0lBTVEsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFSM0I7SUFXUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vd24tb3VyLXByb2R1Y3QvYWNjb3VudC10cmFkaW5nLWRldGFpbHMvYWNjb3VudC10cmFkaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ0biwudGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50OyAgICBcclxuICAgIC51aS1pbnB1dHRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLy8gaWZyYW1le1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4vLyAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODFweCkge1xyXG4vLyAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5xdWVyeUNvbmRpdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNTclO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: AccountTradingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTradingDetailsComponent", function() { return AccountTradingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//账户交易明细
var AccountTradingDetailsComponent = /** @class */ (function () {
    function AccountTradingDetailsComponent(httpService, commfunc, datePipe, sanitizer) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startDate = null;
        this.endDate = null;
        this.pageNum = 1;
        this.pageSize = 10;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //日期
        this.yearRangeSmall = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["yearRangeSmall"];
        this.yearRangeBig = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["yearRangeBig"];
        this.custType = '0';
        this.juege = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = this.user.userId;
        this.targetId = this.user.targetId;
        this.orgId = this.user.orgId;
    }
    AccountTradingDetailsComponent.prototype.ngOnInit = function () {
        // let s = new Date();
        // this.endDate = s;
        // let ddate = moment().add(-1, 'year').add(1, 'days').format('Y-MM-DD');
        // this.startDate = new Date(ddate);
        this.queryInit(); //默认查询
    };
    AccountTradingDetailsComponent.prototype.ngOnChanges = function () {
        this.yearRange = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["yearRangeSmall"] + ":" + app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["yearRangeBig"];
        if (this.inValue) {
        }
    };
    // 默认查询
    AccountTradingDetailsComponent.prototype.queryInit = function () {
        this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_COMIF"] + '?userId=' + this.userId + '&&targetId=' + this.targetId + '&&orgId=' + this.orgId + '&&acctNo=' + this.inValue.account);
    };
    AccountTradingDetailsComponent.prototype.queryList = function (item) {
        var _this = this;
        this.juege = true;
        if (item) {
            var s = new Date();
            this.endDate = s;
            var range = '-' + item;
            var ddate = moment__WEBPACK_IMPORTED_MODULE_7__().add(range, 'month').add(1, 'days').format('Y-MM-DD');
            this.startDate = new Date(ddate);
        }
        if (this.custType == '1') {
            this.drCrFlag = '1';
        }
        else if (this.custType == '2') {
            this.drCrFlag = '2';
        }
        else {
            this.drCrFlag = undefined;
        }
        if ((!this.startDate || this.startDate == null || this.startDate == null) && (!this.endDate || this.endDate == null || this.endDate == null)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询的开始日期和结束时间' }];
            this.juege = false;
            return;
        }
        if (this.startDate && this.startDate != null && (!this.endDate || this.endDate == null)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询结束时间' }];
            this.juege = false;
            return;
        }
        else if (this.endDate && this.endDate != null && (!this.startDate || this.startDate == null)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询起始时间' }];
            this.juege = false;
            return;
        }
        var startDate1;
        startDate1 = this.datePipe.transform(this.startDate, 'yyyyMMdd');
        var endDate = this.commfunc.transDate(this.endDate);
        if (this.drCrFlag) {
            this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_COMIF"] + '?userId=' + this.userId + '&&targetId=' + this.targetId + '&&orgId=' + this.orgId + '&&acctNo=' + this.inValue.account + '&&endDate=' + endDate + '&&startDate=' + startDate1 + '&&drCrFlag=' + this.drCrFlag);
            setTimeout(function () {
                _this.juege = false;
            }, 1000);
        }
        else {
            this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_COMIF"] + '?userId=' + this.userId + '&&targetId=' + this.targetId + '&&orgId=' + this.orgId + '&&acctNo=' + this.inValue.account + '&&endDate=' + endDate + '&&startDate=' + startDate1);
            setTimeout(function () {
                _this.juege = false;
            }, 1000);
        }
    };
    AccountTradingDetailsComponent.prototype.chectStart = function () {
        var _this = this;
        console.log(1);
        if (this.startDate && this.startDate != null && this.endDate && this.endDate != null) {
            var end_Time = moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).add(1, 'year').add(-1, 'days');
            var today_time_1 = moment__WEBPACK_IMPORTED_MODULE_7__();
            if (end_Time > today_time_1) {
                this.endDate = new Date();
            }
            else {
                this.endDate = new Date(end_Time.format("Y-MM-DD"));
            }
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).format('YMMDD') > today_time_1.format('YMMDD')) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于当前日期' }];
                setTimeout(function () {
                    _this.startDate = new Date(today_time_1.format("Y-MM-DD"));
                });
                return;
            }
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                setTimeout(function () {
                    _this.startDate = null;
                });
                return;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).add(1, 'year').add(-1, 'days').format('YMMDD') < moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate).format('YMMDD')) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                setTimeout(function () {
                    _this.startDate = null;
                });
                return;
            }
        }
    };
    AccountTradingDetailsComponent.prototype.chectEnd = function () {
        var _this = this;
        console.log(3);
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            var this_time = moment__WEBPACK_IMPORTED_MODULE_7__();
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate) > this_time) {
                this.endDate = new Date(this_time.format("Y-MM-DD"));
            }
            if (this.startDate.getTime() > this.endDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                setTimeout(function () {
                    _this.endDate = null;
                });
                return;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).add(1, 'year').add(-1, 'days').format('YMMDD') < moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate).format('YMMDD')) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                setTimeout(function () {
                    _this.endDate = null;
                });
                return;
            }
        }
    };
    // 手动输入日期
    AccountTradingDetailsComponent.prototype.handInputDate = function (param1, param2) {
        this.showTime(param1, param2);
    };
    // 开始、结束日期判断
    AccountTradingDetailsComponent.prototype.showTime = function (param1, param2) {
        var _this = this;
        if (param1 == 'plan') {
            if (this.startDate && this.endDate) {
                if (this.startDate > this.endDate) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' });
                    setTimeout(function () {
                        if (param2 == "start") {
                            _this.startDate = null;
                        }
                        else {
                            _this.endDate = null;
                        }
                    });
                }
                if (moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).add(1, 'year').add(-1, 'days').format('YMMDD') < moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate).format('YMMDD')) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                    setTimeout(function () {
                        if (param2 == "start") {
                            _this.startDate = null;
                        }
                        else {
                            _this.endDate = null;
                        }
                    });
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountTradingDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AccountTradingDetailsComponent.prototype, "outValue", void 0);
    AccountTradingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-trading-details',
            template: __webpack_require__(/*! ./account-trading-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.html"),
            styles: [__webpack_require__(/*! ./account-trading-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AccountTradingDetailsComponent);
    return AccountTradingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-details.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-details.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g queryCondition\">\r\n    <div class=\"left\">\r\n      <label for=\"\">开始日期：</label>\r\n      <p-calendar [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectStart()\" (onBlur)=\"chectStart()\"></p-calendar>\r\n      <label for=\"\">结束日期：</label>\r\n      <p-calendar [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectEnd()\" (onBlur)=\"chectEnd()\"></p-calendar>\r\n    </div>\r\n    <div class=\"right\">\r\n      <button pButton class=\"btn\" label=\"查询\" (click)=\"query()\"></button>\r\n      <button pButton class=\"btn\" label=\"本周\" (click)=\"query('C')\"></button>\r\n      <button pButton class=\"btn\" label=\"本月\" (click)=\"query('B')\"></button>\r\n      <button pButton class=\"btn\" label=\"上月\" (click)=\"query('A')\"></button>\r\n      <p-radioButton name=\"custType\" label=\"贷方\" value=\"1\" [(ngModel)]=\"custType\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"借方\" value=\"2\" [(ngModel)]=\"custType\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"全部\" value=\"0\" [(ngModel)]=\"custType\"></p-radioButton>\r\n    </div>\r\n  </div>\r\n  <iframe width=\"100%\" height=\"670px\" [src]=\"srcUrl_1\">\r\n  </iframe>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.btn, .table {\n  text-align: center; }\n\n:host/deep/ .ui-calendar {\n  width: 130px !important; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 130px !important; }\n\n.queryCondition {\n  padding-bottom: .5em; }\n\n.queryCondition .left {\n    width: 43%; }\n\n.queryCondition .right {\n    width: 57%;\n    text-align: right;\n    padding-right: 25px; }\n\n.queryCondition .btn {\n    padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2Fzc2V0LWZsb3ctZGlyZWN0aW9uLWRldGFpbHMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFxvd24tb3VyLXByb2R1Y3RcXGFzc2V0LWZsb3ctZGlyZWN0aW9uLWRldGFpbHNcXGFzc2V0LWZsb3ctZGlyZWN0aW9uLWRldGFpbHNjb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QixFQUFBOztBQUQzQjtJQUdRLHVCQUF1QixFQUFBOztBQWEvQjtFQUNJLG9CQUFvQixFQUFBOztBQUR4QjtJQUdRLFVBQVUsRUFBQTs7QUFIbEI7SUFNUSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBOztBQVIzQjtJQVdRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uL293bi1vdXItcHJvZHVjdC9hc3NldC1mbG93LWRpcmVjdGlvbi1kZXRhaWxzL2Fzc2V0LWZsb3ctZGlyZWN0aW9uLWRldGFpbHNjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRuLC50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgLnVpLWlucHV0dGV4dHtcclxuICAgICAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4vLyBpZnJhbWV7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLnF1ZXJ5Q29uZGl0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA1NyU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: AssetFlowDirectionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetFlowDirectionDetailsComponent", function() { return AssetFlowDirectionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
// 资金流入流出详情 - fanhualing
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssetFlowDirectionDetailsComponent = /** @class */ (function () {
    function AssetFlowDirectionDetailsComponent(httpService, commfunc, datePipe, sanitizer) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.startDate = null;
        this.endDate = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.custType = '0';
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = this.user.userId;
        this.targetId = this.user.targetId;
        this.orgId = this.user.orgId;
    }
    AssetFlowDirectionDetailsComponent.prototype.ngOnInit = function () {
        this.query(this.inValue.demogPeriod);
    };
    // 上月、本月、本周
    AssetFlowDirectionDetailsComponent.prototype.query = function (type) {
        if (type == 'A') { // 上月
            var start = moment__WEBPACK_IMPORTED_MODULE_7__().subtract('month', 1).format('YYYY-MM') + '-01';
            var end = moment__WEBPACK_IMPORTED_MODULE_7__(start).subtract('month', -1).add('days', -1).format('YYYY-MM-DD');
            this.startDate = new Date(start);
            this.endDate = new Date(end);
        }
        else if (type == 'B') { // 本月
            var start = moment__WEBPACK_IMPORTED_MODULE_7__().add('month', 0).format('YYYY-MM') + '-01';
            var end = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
            this.startDate = new Date(start);
            this.endDate = new Date(end);
        }
        else if (type == 'C') { // 本周
            var weekOfday = parseInt(moment__WEBPACK_IMPORTED_MODULE_7__().format('d')); // 今天是这周的第几天，周日为一周的第一天
            var start = moment__WEBPACK_IMPORTED_MODULE_7__().subtract(weekOfday, 'days').format('YYYY-MM-DD'); // 周一日期
            var end = moment__WEBPACK_IMPORTED_MODULE_7__().add(7 - weekOfday - 1, 'day').format('YYYY-MM-DD'); // 周六日期
            this.startDate = new Date(start);
            this.endDate = new Date(end);
        }
        this.queryData();
    };
    // 查询
    AssetFlowDirectionDetailsComponent.prototype.queryData = function () {
        if ((!this.startDate || this.startDate == null) && (!this.endDate || this.endDate == null)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询的开始日期和结束时间' }];
            return;
        }
        if (this.startDate && this.startDate != null && (!this.endDate || this.endDate == null)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询结束时间' }];
            return;
        }
        else if (this.endDate && this.endDate != null && (!this.startDate || this.startDate == null)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入查询起始时间' }];
            return;
        }
        // 借贷标志 D借 C贷
        if (this.custType == '1') {
            this.drCrFlag = 'C';
        }
        else if (this.custType == '2') {
            this.drCrFlag = 'D';
        }
        else {
            this.drCrFlag = undefined;
        }
        var startTime = this.commfunc.transDateN(this.startDate);
        var endTime = this.commfunc.transDateN(this.endDate);
        if (this.drCrFlag) {
            this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_ASSET"] + '?userId=' + this.userId + '&&targetId=' + this.targetId + '&&orgId=' + this.orgId + '&&custNo=' + this.inValue.custNo + '&&endDate=' + endTime + '&&startDate=' + startTime + '&&drCrFlag=' + this.drCrFlag);
        }
        else {
            this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_ASSET"] + '?userId=' + this.userId + '&&targetId=' + this.targetId + '&&orgId=' + this.orgId + '&&custNo=' + this.inValue.custNo + '&&endDate=' + endTime + '&&startDate=' + startTime);
        }
    };
    // 选择开始日期
    AssetFlowDirectionDetailsComponent.prototype.chectStart = function () {
        var _this = this;
        if (this.startDate && this.startDate != null && this.endDate && this.endDate != null) {
            var end_Time = moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).add(1, 'year').add(-1, 'days');
            var today_time_1 = moment__WEBPACK_IMPORTED_MODULE_7__();
            if (end_Time > today_time_1) {
                this.endDate = new Date();
            }
            else {
                this.endDate = new Date(end_Time.format("Y-MM-DD"));
            }
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate).format('YMMDD') > today_time_1.format('YMMDD')) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于当前日期' }];
                setTimeout(function () {
                    _this.startDate = new Date(today_time_1.format("Y-MM-DD"));
                });
                return;
            }
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                setTimeout(function () {
                    _this.startDate = null;
                });
                return;
            }
        }
    };
    // 选择结束日期
    AssetFlowDirectionDetailsComponent.prototype.chectEnd = function () {
        var _this = this;
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            var this_time = moment__WEBPACK_IMPORTED_MODULE_7__();
            if (moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate) > this_time) {
                this.endDate = new Date(this_time.format("Y-MM-DD"));
            }
            if (this.startDate.getTime() > this.endDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                setTimeout(function () {
                    _this.endDate = null;
                });
                return;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssetFlowDirectionDetailsComponent.prototype, "inValue", void 0);
    AssetFlowDirectionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'asset-flow-direction-details',
            template: __webpack_require__(/*! ./asset-flow-direction-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-details.component.html"),
            styles: [__webpack_require__(/*! ./asset-flow-direction-detailscomponent.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AssetFlowDirectionDetailsComponent);
    return AssetFlowDirectionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/bean/contract-signing.bean.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/bean/contract-signing.bean.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ContractSigningBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSigningBean", function() { return ContractSigningBean; });
var ContractSigningBean = /** @class */ (function () {
    function ContractSigningBean() {
    }
    return ContractSigningBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 contract-signing\">\r\n    <div class=\"ui-g-4\">\r\n        <label>客户名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.custName\" readonly>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>积分卡号：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.cardNo\" readonly>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>积分余额：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.jiFenBalance\" readonly>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>发卡日期：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.startTime\" readonly>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>抵扣方式：</label>\r\n        <p-dropdown [options]=\"deductions\" [readonly]=\"true\" [(ngModel)]=\"contractSigningBean.diKouMethod\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>存款累计方式：</label>\r\n        <p-dropdown [(ngModel)]=\"contractSigningBean.cunKuanMethod\" [readonly]=\"true\" [options]=\"depositSumTypeOptions\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>协储员姓名（工号）：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.xieChuNo\" readonly>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n        <label>机构名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"contractSigningBean.orgName\" readonly>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"积分明细查询\" (click)=\"showDialog(1)\"></button>\r\n    <button pButton label=\"积分有效期查询\" (click)=\"showDialog(2)\"></button>\r\n</div>\r\n\r\n<p-dialog header=\"{{title}}\" [(visible)]=\"display\">\r\n    <!-- <p-header>{{title}}</p-header> -->\r\n    <integral-subsidiary *ngIf=\"subsidiaryDisplay\"></integral-subsidiary>\r\n    <integral-period *ngIf=\"periodDisplay\"></integral-period>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contract-signing {\n  padding-right: 5%; }\n  @media screen and (max-width: 1350px) {\n    .contract-signing {\n      padding-right: 2%; } }\n  .contract-signing label {\n    display: inline-block;\n    width: calc(50% - 3px);\n    text-align: right; }\n  .contract-signing .ui-inputtext {\n    width: calc(50% - 3px) !important; }\n  :host/deep/ .ui-dropdown {\n  width: 49% !important; }\n  .btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2NvbnRyYWN0LXNpZ25pbmcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFxvd24tb3VyLXByb2R1Y3RcXGNvbnRyYWN0LXNpZ25pbmdcXGNvbnRyYWN0LXNpZ25pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTtFQUNqQjtJQUZKO01BR1EsaUJBQWlCLEVBQUEsRUFVeEI7RUFiRDtJQU1RLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7RUFSekI7SUFXUSxpQ0FBaUMsRUFBQTtFQUl6QztFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vd24tb3VyLXByb2R1Y3QvY29udHJhY3Qtc2lnbmluZy9jb250cmFjdC1zaWduaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LXNpZ25pbmcge1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gM3B4KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDNweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA0OSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ContractSigningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSigningComponent", function() { return ContractSigningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_contract_signing_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/contract-signing.bean */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/bean/contract-signing.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//贷款明细信息
var ContractSigningComponent = /** @class */ (function () {
    function ContractSigningComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.msgs = []; //提示信息
        this.contractSigningBean = new _bean_contract_signing_bean__WEBPACK_IMPORTED_MODULE_4__["ContractSigningBean"]();
        this.display = false;
        this.subsidiaryDisplay = false; //积分明细
        this.periodDisplay = false;
        this.depositSumTypeOptions = []; //存款累计方式
        this.codeVal();
        this.depositSumTypeOptions = this.code['depositSumTypeBigCus']; //存款累计方式
        this.cunKuanMethods = this.code['accumlativeDeposit'];
        this.deductions = this.code.deductionMode;
    }
    //码值
    ContractSigningComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContractSigningComponent.prototype.ngOnInit = function () {
        this.cardDetailQuery();
    };
    //初始化
    ContractSigningComponent.prototype.preset = function () {
    };
    //模态框
    ContractSigningComponent.prototype.showDialog = function (i) {
        console.log(this.inValue.cardNo);
        if (i == 1) {
            this.router.navigate(['/pages/tzb/custom/custom-information/mine-custom/integral-info-query/customer-integral-query', { ss: this.contractSigningBean.cardNo, aa: this.contractSigningBean.custName, cc: this.contractSigningBean.custNo }]);
        }
        else {
            this.router.navigate(['/pages/tzb/custom/custom-information/mine-custom/integral-info-query/integral-date-query', { ss: this.contractSigningBean.cardNo, aa: this.contractSigningBean.custName, cc: this.contractSigningBean.custNo }]);
        }
    };
    //卡明细
    ContractSigningComponent.prototype.cardDetailQuery = function () {
        var _this = this;
        var param = {
            custNo: this.inValue.custId,
            pageNum: 1,
            pageSize: 10
        };
        this.httpService.cardDetailQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.contractSigningBean = data.resultList[0];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContractSigningComponent.prototype, "inValue", void 0);
    ContractSigningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contract-signing',
            template: __webpack_require__(/*! ./contract-signing.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.html"),
            styles: [__webpack_require__(/*! ./contract-signing.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContractSigningComponent);
    return ContractSigningComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 contract-signing\">\r\n    <div class=\"ui-g-4\">\r\n        <label>积分日期：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"custName\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uL293bi1vdXItcHJvZHVjdC9jb250cmFjdC1zaWduaW5nL2ludGVncmFsLXBlcmlvZC9pbnRlZ3JhbC1wZXJpb2QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: IntegralPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegralPeriodComponent", function() { return IntegralPeriodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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




//贷款明细信息
var IntegralPeriodComponent = /** @class */ (function () {
    function IntegralPeriodComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.msgs = []; //提示信息
    }
    IntegralPeriodComponent.prototype.ngOnInit = function () {
    };
    //初始化
    IntegralPeriodComponent.prototype.preset = function () {
    };
    //卡明细
    IntegralPeriodComponent.prototype.jiFenEffectQuery = function () {
        var _this = this;
        var param = {};
        //还款信息
        this.httpService.jiFenEffectQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    IntegralPeriodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'integral-period',
            template: __webpack_require__(/*! ./integral-period.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.html"),
            styles: [__webpack_require__(/*! ./integral-period.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IntegralPeriodComponent);
    return IntegralPeriodComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 contract-signing\">\r\n    <div class=\"ui-g-4\">\r\n        <label>积分明细：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"custName\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uL293bi1vdXItcHJvZHVjdC9jb250cmFjdC1zaWduaW5nL2ludGVncmFsLXN1YnNpZGlhcnkvaW50ZWdyYWwtc3Vic2lkaWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: IntegralSubsidiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegralSubsidiaryComponent", function() { return IntegralSubsidiaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//贷款明细信息
var IntegralSubsidiaryComponent = /** @class */ (function () {
    function IntegralSubsidiaryComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.msgs = []; //提示信息
    }
    IntegralSubsidiaryComponent.prototype.ngOnInit = function () {
    };
    //初始化
    IntegralSubsidiaryComponent.prototype.preset = function () {
    };
    //卡明细
    IntegralSubsidiaryComponent.prototype.jiFenDetailQuery = function () {
        var _this = this;
        var param = {};
        //还款信息
        this.httpService.jiFenDetailQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    IntegralSubsidiaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'integral-subsidiary',
            template: __webpack_require__(/*! ./integral-subsidiary.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.html"),
            styles: [__webpack_require__(/*! ./integral-subsidiary.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IntegralSubsidiaryComponent);
    return IntegralSubsidiaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/bean/credit-card-details.bean.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/bean/credit-card-details.bean.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CreditCardDetailsBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDetailsBean", function() { return CreditCardDetailsBean; });
var CreditCardDetailsBean = /** @class */ (function () {
    function CreditCardDetailsBean() {
    }
    return CreditCardDetailsBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-10\">\r\n            <label for=\"\">开始日期：</label>\r\n            <p-calendar [(ngModel)]=\"startDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\"\r\n                [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectStart($event)\" (onBlur)=\"chectStart1($event)\" *ngIf=\"!showHideStart\"></p-calendar>\r\n            <p-calendar [(ngModel)]=\"startDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\"\r\n                [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectStart($event)\" (onBlur)=\"chectStart1($event)\" *ngIf=\"showHideStart\"></p-calendar>\r\n            <label for=\"\">结束日期：</label>\r\n            <p-calendar [(ngModel)]=\"endDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\" [showIcon]=\"true\"\r\n                dateFormat=\"yy-mm-dd\" (onSelect)=\"chectEnd($event)\" (onBlur)=\"chectEnd1($event)\" *ngIf=\"!showHideEnd\"></p-calendar>\r\n            <p-calendar [(ngModel)]=\"endDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" [yearRange]=\"yearRange\" [showIcon]=\"true\"\r\n                dateFormat=\"yy-mm-dd\" (onSelect)=\"chectEnd($event)\" (onBlur)=\"chectEnd1($event)\" *ngIf=\"showHideEnd\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-2 dialog-btn\">\r\n            <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        </div>\r\n    </div>\r\n    <iframe [src]=\"srcUrl_1\">\r\n    </iframe>\r\n    <!-- <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"dataTable\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"cardNo\" header=\"卡号(含主、副卡)\"></p-column>\r\n            <p-column field=\"tradeDate\" header=\"交易日期\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.tradeDate|timeValuePie}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tradeTime\" header=\"交易时间\"></p-column>\r\n            <p-column field=\"tradeType\" header=\"交易类型\"></p-column>\r\n            <p-column field=\"tradeTypeDescribe\" header=\"交易类型描述\"></p-column>\r\n            <p-column field=\"tradeMoney\" header=\"交易金额(元)\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.tradeMoney/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tradeAbstract\" header=\"交易摘要\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows={{creditCardDetailsBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div> -->\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.btn, .table {\n  text-align: center; }\n\n:host/deep/ .ui-calendar {\n  width: 130px !important; }\n\n:host/deep/ .ui-calendar .ui-inputtext {\n    width: 130px !important; }\n\niframe {\n  width: 100%; }\n\n@media screen and (max-width: 1280px) {\n    iframe {\n      height: 500px; } }\n\n@media screen and (min-width: 1281px) {\n    iframe {\n      height: 600px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2NyZWRpdGNhcmQtZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFx2aWV3LXByb2R1Y3QtaW5mb3JtYXRpb25cXG93bi1vdXItcHJvZHVjdFxcY3JlZGl0Y2FyZC1kZXRhaWxzXFxjcmVkaXRjYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFEM0I7SUFHUSx1QkFBdUIsRUFBQTs7QUFHL0I7RUFDSSxXQUFXLEVBQUE7O0FBQ1g7SUFGSjtNQUdRLGFBQWEsRUFBQSxFQUtwQjs7QUFIRztJQUxKO01BTVEsYUFBYSxFQUFBLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2NyZWRpdGNhcmQtZGV0YWlscy9jcmVkaXRjYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ0biwudGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50OyAgICBcclxuICAgIC51aS1pbnB1dHRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODFweCkge1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CreditCardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDetailsComponent", function() { return CreditCardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_credit_card_details_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/credit-card-details.bean */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/bean/credit-card-details.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreditCardDetailsComponent = /** @class */ (function () {
    function CreditCardDetailsComponent(httpService, commfunc, router, datePipe, sanitizer) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //日期
        this.maxDate = null;
        this.minDate = null;
        this.first = 0;
        this.dataTable = [];
        this.showHideStart = false;
        this.showHideEnd = false;
        this.yearRangeSmall = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"];
        this.yearRangeBig = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        this.creditCardDetailsBean = new _bean_credit_card_details_bean__WEBPACK_IMPORTED_MODULE_4__["CreditCardDetailsBean"]();
        this.orgId = '';
        this.userId = '';
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.targetId) {
            this.targetId = this.user.targetId;
        }
    }
    CreditCardDetailsComponent.prototype.ngOnInit = function () {
        this.yearRange = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"] + ":" + app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        this.creditCardDetailsBean.pageNum = 1;
        this.creditCardDetailsBean.pageSize = 10;
        var s = new Date();
        this.endDate = s;
        var one_day = 24 * 60 * 60 * 1000;
        // let m = `${s.getFullYear() - 1}-${s.getMonth() + 1}-${s.getDate() + 1}`;
        var ddate = moment__WEBPACK_IMPORTED_MODULE_6__().add(-3, 'month').format('Y-MM-DD');
        var three_before = new Date(ddate).getTime() + one_day;
        this.startDate = new Date(three_before);
        var temp = {
            commonHeader: this.user,
            cardNo: this.inValue.cardNum,
            startDate: this.startDate,
            endDate: this.endDate
        };
        console.log(temp + '   qqqq' + this.startDate);
        this.params = encodeURIComponent(JSON.stringify(temp));
        var depositUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CREDIT_CARD"] + "?params=" + this.params + "&&serviceId=CeCardTradeDetailStaticPages";
        this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(depositUrl);
    };
    CreditCardDetailsComponent.prototype.ngOnChanges = function () {
        this.creditCardDetailsBean.cardNo = this.inValue.cardNum;
    };
    //按钮权限
    CreditCardDetailsComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    CreditCardDetailsComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //翻页
    CreditCardDetailsComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.creditCardDetailsBean.pageSize = event.rows * 1;
        //当前页
        this.creditCardDetailsBean.pageNum = event.page + 1;
        this.first = event.page * event.rows;
        this.query();
    };
    CreditCardDetailsComponent.prototype.queryFirst = function () {
        this.creditCardDetailsBean.pageNum = 1;
        this.creditCardDetailsBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    CreditCardDetailsComponent.prototype.query = function () {
        var temp = {
            commonHeader: this.user,
            cardNo: this.inValue.cardNum,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.params = encodeURIComponent(JSON.stringify(temp));
        var depositUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CREDIT_CARD"] + "?params=" + this.params + "&&serviceId=CeCardTradeDetailStaticPages";
        this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(depositUrl);
    };
    //时间
    CreditCardDetailsComponent.prototype.chectStart = function (event) {
        var str = new Date(this.startDate);
        var year_later = str.getFullYear() * 1 + 1;
        var one_year;
        var one_day = 24 * 60 * 60 * 1000;
        if (year_later / 4 == 0 && (year_later / 100 != 0 || year_later / 400 == 0)) {
            one_year = 366 * 24 * 60 * 60 * 1000;
        }
        else {
            one_year = 365 * 24 * 60 * 60 * 1000;
        }
        if (event && event != null && event != '') {
            var end_Time = str.getTime() + one_year - one_day;
            var today_time = new Date().getTime();
            if (end_Time > today_time) {
                this.endDate = new Date();
            }
            else {
                this.endDate = new Date(end_Time);
            }
            if (str.getTime() > today_time) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于当前日期' }];
                this.startDate = new Date(today_time);
                return;
            }
        }
    };
    CreditCardDetailsComponent.prototype.chectStart1 = function (event) {
        if (this.startDate && this.startDate != null && this.startDate != '' && this.endDate && this.endDate != '' && this.endDate != null) {
            var str = new Date(this.startDate);
            var year_later = str.getFullYear() * 1 + 1;
            var one_year = void 0;
            var one_day = 24 * 60 * 60 * 1000;
            if (year_later / 4 == 0 && (year_later / 100 != 0 || year_later / 400 == 0)) {
                one_year = 366 * 24 * 60 * 60 * 1000;
            }
            else {
                one_year = 365 * 24 * 60 * 60 * 1000;
            }
            var end_Time = str.getTime() + one_year - one_day;
            var today_time = new Date().getTime();
            if (end_Time > today_time) {
                this.endDate = new Date();
            }
            else {
                this.endDate = new Date(end_Time);
            }
            if (str.getTime() > this.endDate.getTime()) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.startDate = event;
                return;
            }
            if ((this.endDate.getTime() - str.getTime()) >= one_year) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.startDate = event;
                return;
            }
            if (str.getTime() > today_time) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于当前日期' }];
                this.startDate = new Date(today_time);
                return;
            }
        }
    };
    CreditCardDetailsComponent.prototype.chectEnd = function (event) {
        if (event && event != null && event != '' && this.startDate && this.startDate != '' && this.startDate != null) {
            var str = new Date(this.startDate);
            var year_later = str.getFullYear() * 1 + 1;
            var one_year = void 0;
            var one_day = 24 * 60 * 60 * 1000;
            if (year_later / 4 == 0 && (year_later / 100 != 0 || year_later / 400 == 0)) {
                one_year = 366 * 24 * 60 * 60 * 1000;
            }
            else {
                one_year = 365 * 24 * 60 * 60 * 1000;
            }
            var this_time = new Date();
            if (this.endDate.getTime() > this_time.getTime()) {
                this.endDate = this_time;
            }
            if (str.getTime() > event.getTime()) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.endDate = event;
                return;
            }
            if ((event.getTime() - str.getTime()) >= one_year) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.endDate = event;
                return;
            }
        }
    };
    CreditCardDetailsComponent.prototype.chectEnd1 = function (event) {
        if (this.endDate && this.endDate != null && this.endDate != '' && this.startDate && this.startDate != '' && this.startDate != null) {
            var str = new Date(this.startDate);
            var year_later = str.getFullYear() * 1 + 1;
            var one_year = void 0;
            var one_day = 24 * 60 * 60 * 1000;
            if (year_later / 4 == 0 && (year_later / 100 != 0 || year_later / 400 == 0)) {
                one_year = 366 * 24 * 60 * 60 * 1000;
            }
            else {
                one_year = 365 * 24 * 60 * 60 * 1000;
            }
            var this_time = new Date();
            if (this.endDate.getTime() > this_time.getTime()) {
                this.endDate = this_time;
            }
            if (str.getTime() > this.endDate.getTime()) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询起始时间不能大于结束日期' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.endDate = event;
                return;
            }
            if ((this.endDate.getTime() - str.getTime()) >= one_year) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '查询结束时间与起始日期间隔不能超过一年' }];
                this.showHideStart = !this.showHideStart;
                event = '';
                this.endDate = event;
                return;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreditCardDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreditCardDetailsComponent.prototype, "outValue", void 0);
    CreditCardDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'creditcard-details',
            template: __webpack_require__(/*! ./creditcard-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.html"),
            styles: [__webpack_require__(/*! ./creditcard-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], CreditCardDetailsComponent);
    return CreditCardDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g-12\">\r\n  承兑信息：\r\n</div> -->\r\n<div class=\"nopad ui-g-12\">\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      合同编号:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.contractNo}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      票据金额:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{(inValue.billAmt/1)|number:'1.2-2'}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      敞口金额:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{(inValue.gapAmt/1)|number:'1.2-2'}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"nopad ui-g-12\">\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      余额:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{(inValue.balance/1)|number:'1.2-2'}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      签发行行号:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.billBankId}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      十级分类:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.tenType|codeValuePie:tenClassOptions}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"nopad ui-g-12\">\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      经办日期:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.appDate|timeValuePie}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      经办人:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.appUserId}}\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-4\">\r\n    <div class=\"ui-g-6 label\">\r\n      合同状态:\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      {{inValue.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\" style=\"overflow-x:scroll\">\r\n  <p-dataTable [value]=\"holdDepositInfo\" [emptyMessage]=\"tabMesg\">\r\n    <p-column header=\"序号\">\r\n      <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        {{ri+1}}\r\n      </ng-template>\r\n    </p-column>\r\n    <!-- <p-column field=\"clientName\" header=\"出票人全称\"></p-column> -->\r\n    <p-column field=\"billBankId\" header=\"签发行\"></p-column>\r\n    <p-column field=\"interrstAcctNo\" header=\"账号\"></p-column>\r\n    <p-column field=\"payeeName\" header=\"收款人全称\"></p-column>\r\n    <p-column field=\"payeeBankName\" header=\"收款人开户银行\"></p-column>\r\n    <p-column field=\"payeeAcctNo\" header=\"收款人账号\"></p-column>\r\n    <p-column field=\"draftNo\" header=\"汇票号码\"></p-column>\r\n    <p-column field=\"billAmt\" header=\"汇票金额（元）\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        {{(col.billAmt/1)|number:'1.2-2'}}\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"billSignDate\" header=\"出票日期\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        {{col.billSignDate|timeValuePie}}\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"matureDate\" header=\"到期日期\">\r\n      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n        {{col.matureDate|timeValuePie}}\r\n      </ng-template>\r\n    </p-column>\r\n  </p-dataTable>\r\n\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <p-paginator [first]=\"holdDepositInfoFirst\" rows=\"{{holdDepositInfopageSize}}\" totalRecords=\"{{holdDepositInfototalNum}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .tab {\n  padding: 0; }\n  .ui-g .tab .ui-g-11 span {\n    background: #80CEEF; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  .nopad {\n  padding: 0 !important; }\n  .nopad .label {\n    text-align: right;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2RlcG9zaXQtZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFx2aWV3LXByb2R1Y3QtaW5mb3JtYXRpb25cXG93bi1vdXItcHJvZHVjdFxcZGVwb3NpdC1kZXRhaWxzXFxkZXBvc2l0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7RUFGbEI7SUFLZ0IsbUJBQW1CLEVBQUE7RUFLbkM7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0kscUJBQXFCLEVBQUE7RUFEekI7SUFHUSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vd24tb3VyLXByb2R1Y3QvZGVwb3NpdC1kZXRhaWxzL2RlcG9zaXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC50YWJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAudWktZy0xMXtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MENFRUY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm5vcGFke1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgLmxhYmVse1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: DepositDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositDetailsComponent", function() { return DepositDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {HeTongZhuangTai,TenClass} from '../../../../constant/custView.codeValue';
//承兑详情
var DepositDetailsComponent = /** @class */ (function () {
    function DepositDetailsComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageNum = 1;
        this.pageSize = 1000;
        // 承兑明细分页
        this.holdDepositInfoFirst = 0;
        this.holdDepositInfototalNum = 0;
        this.holdDepositInfopageSize = 10;
        this.holdDepositInfopageNum = 1;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.heTongZhuangTaiOptions = []; //合同状态
        this.tenClassOptions = []; //十级分类
        this.codeVal();
        this.heTongZhuangTaiOptions = this.code['HeTongZhuangTai'];
        this.tenClassOptions = this.code['TenClass'];
    }
    DepositDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.inValue.appUserId && this.inValue.appUserId != '' && this.inValue.appUserId != null) {
            this.httpService.queryTellerById({ tellerId: this.inValue.appUserId }).subscribe(function (data) {
                if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                    _this.inValue.appUserId = data.tellerName;
                }
            });
        }
        this.selectHoldDepositInfo();
    };
    DepositDetailsComponent.prototype.selectHoldDepositInfo = function () {
        var _this = this;
        var param = {
            contractNo: this.inValue.contractNo,
            pageNum: this.holdDepositInfopageNum,
            pageSize: this.holdDepositInfopageSize,
        };
        var param1 = {
            contractNo: this.inValue.contractNo,
            clientNo: this.inValue.clientNo,
            tranType: '0',
            billCategory: '1',
            pageNum: this.holdDepositInfopageNum,
            pageSize: this.holdDepositInfopageSize,
        };
        //如果合同状态是未执行（01）
        if (this.inValue.contractStatus == '01') {
            this.httpService.BZ_0300300004415_LOAN(param).subscribe(function (data) {
                // this.holdDepositInfopageNum=data.pageNum;
                // this.holdDepositInfopageSize=data.pageSize;
                _this.holdDepositInfototalNum = data.totalNum;
                _this.holdDepositInfo = data.infoList == null ? [] : data.infoList;
            });
        }
        else {
            this.httpService.BZ_0200300000301_LOAN(param1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.holdDepositInfopageNum=data.pageNum;
                    // this.holdDepositInfopageSize=data.pageSize;
                    _this.holdDepositInfototalNum = data.totalNum;
                    data.infoList.forEach(function (item) {
                        item['draftNo'] = item.billNo;
                        item['billBankId'] = item.billBankName;
                        item['billSignDate'] = item.billDate;
                        item['matureDate'] = item.billPayDate;
                    });
                    _this.holdDepositInfo = data.infoList == null ? [] : data.infoList;
                }
            });
        }
    };
    DepositDetailsComponent.prototype.paginate = function (event) {
        // 分页
        this.holdDepositInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdDepositInfopageNum = currentPage;
        this.holdDepositInfoFirst = (currentPage - 1) * this.holdDepositInfopageSize;
        this.selectHoldDepositInfo();
    };
    //码值
    DepositDetailsComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DepositDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DepositDetailsComponent.prototype, "outValue", void 0);
    DepositDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-details',
            template: __webpack_require__(/*! ./deposit-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.html"),
            styles: [__webpack_require__(/*! ./deposit-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], DepositDetailsComponent);
    return DepositDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 tab\">\r\n      <div class=\"ui-g-1\">贷款类</div>\r\n      <div class=\"ui-g-11\">\r\n        <span>贷款总余额：{{totalloanBalance}}万元</span>\r\n      </div>\r\n      <p-dataTable [value]=\"holdLoanInfo\" [emptyMessage]=\"tabMesg\">\r\n        <p-column header=\"序号\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"contractNum\" header=\"合同编号\"></p-column>\r\n        <p-column header=\"借据编号\">\r\n          <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n            <a (click)=\"showDialog1()\">{{col.iousNum}}</a>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"operationVariety\" header=\"业务品种\"></p-column>\r\n        <p-column field=\"subBusinessType\" header=\"子业务类型\"></p-column>\r\n        <p-column field=\"mainGuaranteeMode\" header=\"主担保方式\"></p-column>\r\n        <p-column field=\"startDate\" header=\"起贷日期\"></p-column>\r\n        <p-column field=\"endDate\" header=\"止贷日期\"></p-column>\r\n        <p-column field=\"loanAmount\" header=\"贷款金额\"></p-column>\r\n        <p-column field=\"loanBalance\" header=\"贷款余额\"></p-column>\r\n        <p-column field=\"normalRates\" header=\"正常利率\"></p-column>\r\n        <p-column field=\"overdueRates\" header=\"逾期利率\"></p-column>\r\n        <p-column field=\"normalBal\" header=\"正常余额\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"keepBal\" header=\"关注余额\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"secondBal\" header=\"次级余额\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"questionBal\" header=\"可疑余额\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"lossBal\" header=\"损失余额\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"tenthLevelClassification\" header=\"十级分类\"></p-column>\r\n        <p-column field=\"monthFtp\" header=\"本月FTP（折前）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"lastMonthFtp\" header=\"上月FTP（折前）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"yearFtp\" header=\"本年FTP（折前）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"lastYearFtp\" header=\"上年FTP（折前）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"sixMonthFtp\" header=\"前推6个月FTP（折前）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"monthFtpDiscount\" header=\"本月FTP（折后）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"lastMonthFtpDiscount\" header=\"上月FTP（折后）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"yearFtpDiscount\" header=\"本年FTP（折号）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"lastYearFtpDiscount\" header=\"上年FTP（折后）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"sixMonthFtpDiscount\" header=\"前推6个月FTP（折后）\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"dueFlag\" header=\"逾期标志\" *ngIf=\"holdLoanInfoToAll\" ></p-column>\r\n        <p-column field=\"investigator\" header=\"调查人\"></p-column>\r\n      </p-dataTable>\r\n      <p-paginator [rows]=\"holdLoanInfopageSize\" [totalRecords]=\"holdLoanInfototalNum\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .tab {\n  padding: 0; }\n  .ui-g .tab span {\n    background: #80CEEF; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L2xvYW4tYWxsLWRldGFpbHMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFxvd24tb3VyLXByb2R1Y3RcXGxvYW4tYWxsLWRldGFpbHNcXGxvYW4tYWxsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7RUFGbEI7SUFJWSxtQkFBbUIsRUFBQTtFQUkvQjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi9vd24tb3VyLXByb2R1Y3QvbG9hbi1hbGwtZGV0YWlscy9sb2FuLWFsbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWd7XHJcbiAgICAudGFie1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzgwQ0VFRjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: LoanAllDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanAllDetailsComponent", function() { return LoanAllDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { SubBussType, HeTongZhuangTai, FlagSign} from '../../../../constant/custView.codeValue';                                                                                       
var LoanAllDetailsComponent = /** @class */ (function () {
    function LoanAllDetailsComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.pageNum = 1;
        this.pageSize = 10;
        this.holdLoanInfo = []; //贷款
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.codeVal();
        this.subBussTypeOptions = this.code['SubBussType'];
        this.heTongZhuangTaiOptions = this.code['HeTongZhuangTai'];
        this.flagSignOptions = this.code['FlagSign'];
        this.custNo = this.commfunc.getSessionData('custNo');
    }
    LoanAllDetailsComponent.prototype.ngOnInit = function () {
        this.selectHoldLoanInfo();
    };
    LoanAllDetailsComponent.prototype.selectHoldLoanInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        this.httpService.selectHoldLoanInfo(param).subscribe(function (data) {
            _this.holdLoanInfopageNum = data.pageNum;
            _this.holdLoanInfopageSize = data.pageSize;
            _this.holdLoanInfototalNum = data.totalNum;
            _this.totalloanBalance = data.totalloanBalance;
            _this.holdLoanInfo = data.prodInfoList; //贷款
        }); //贷款
    };
    LoanAllDetailsComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectHoldLoanInfo();
    };
    //码值
    LoanAllDetailsComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    LoanAllDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-all-details',
            template: __webpack_require__(/*! ./loan-all-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.html"),
            styles: [__webpack_require__(/*! ./loan-all-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], LoanAllDetailsComponent);
    return LoanAllDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 tab\">\r\n    <div class=\"ui-g-12\">\r\n      <label for=\"\">理财类</label>\r\n    </div>\r\n    <p-dataTable [value]=\"holdMoneyManagementInfo\"  [emptyMessage]=\"tabMesg\">\r\n      <p-column header=\"序号\">\r\n        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{ri+1}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"cardNum\" header=\"卡号/折号\"></p-column>\r\n      <p-column field=\"productStartDate\" header=\"产品募集起始日\"></p-column>\r\n      <p-column field=\"productEndDate\" header=\"产品募集终止日\"></p-column>\r\n      <p-column field=\"startDate\" header=\"投资开始日期\"></p-column>\r\n      <p-column field=\"endDate\" header=\"产品到期日期\"></p-column>\r\n      <p-column field=\"subscriptionAmount\" header=\"认购金额（元）\"></p-column>\r\n      <p-column field=\"urrency\" header=\"币种\"></p-column>\r\n      <p-column field=\"expectedYield\" header=\"预期收益\"></p-column>\r\n      <p-column field=\"issue\" header=\"期次\"></p-column>\r\n      <p-column field=\"productCode\" header=\"产品代码\"></p-column>\r\n      <p-column field=\"productStatus\" header=\"产品状态\"></p-column>\r\n      <p-column field=\"mainContact\" header=\"主联系人\"></p-column>\r\n      <p-column field=\"openAccountOrg\" header=\"开户机构\"></p-column>\r\n      <p-column field=\"mainContactOrg\" header=\"主联系人机构\"></p-column>\r\n      <p-column field=\"assId\" header=\"协储员号\"></p-column>\r\n      <p-column field=\"holdingState\" header=\"持有状态\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator [rows]=\"holdMoneyManagementInfopageNum\" [totalRecords]=\"holdMoneyManagementInfototalNum\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .tab {\n  padding: 0; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L21vbmV5LW1hbmFnZXJtZW50LWRldGFpbHMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFxvd24tb3VyLXByb2R1Y3RcXG1vbmV5LW1hbmFnZXJtZW50LWRldGFpbHNcXG1vbmV5LW1hbmFnZXJtZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uL293bi1vdXItcHJvZHVjdC9tb25leS1tYW5hZ2VybWVudC1kZXRhaWxzL21vbmV5LW1hbmFnZXJtZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZ3tcclxuICAgIC50YWJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: MoneyManagermentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyManagermentDetailsComponent", function() { return MoneyManagermentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoneyManagermentDetailsComponent = /** @class */ (function () {
    function MoneyManagermentDetailsComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.pageSize = 10;
        this.pageNum = 1;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.custNo = this.commfunc.getSessionData('custNo');
    }
    MoneyManagermentDetailsComponent.prototype.ngOnInit = function () {
        this.selectHoldMoneyManagementInfo();
    };
    MoneyManagermentDetailsComponent.prototype.selectHoldMoneyManagementInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.httpService.selectHoldMoneyManagementInfo(param).subscribe(function (data) {
            _this.holdMoneyManagementInfopageNum = data.pageNum;
            _this.holdMoneyManagementInfopageSize = data.pageSize;
            _this.holdMoneyManagementInfototalNum = data.totalNum;
            _this.holdMoneyManagementInfo = data.prodInfoList;
        });
    };
    MoneyManagermentDetailsComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectHoldMoneyManagementInfo();
    };
    MoneyManagermentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'money-managerment-details',
            template: __webpack_require__(/*! ./money-managerment-details.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.html"),
            styles: [__webpack_require__(/*! ./money-managerment-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], MoneyManagermentDetailsComponent);
    return MoneyManagermentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g pro-info-page\">\r\n  <div class=\"assetmodule\">\r\n    <div class=\"liability\">\r\n      <div class=\"ui-g-12 header-title-theme\">\r\n        <span class=\"text\">资产负债统计</span>\r\n      </div>\r\n      <div class=\"ui-g-12 table-padding\" *ngIf=\"judgeField('X_CUST_M_P007_128')\">\r\n        <div class=\"asset-liability-table\">\r\n          <div class=\"data-row-title\">\r\n            <div class=\"data-col-one\">\r\n              <span class=\"data-col-one-title\">类型</span>\r\n            </div>\r\n            <div class=\"data-col\">余额(元)</div>\r\n            <div class=\"data-col\">比上日</div>\r\n            <div class=\"data-col\">比上月末</div>\r\n            <div class=\"data-col\">比年初</div>\r\n          </div>\r\n          <div class=\"data-row\">\r\n            <div class=\"data-col-one\">\r\n              <span class=\"card-type-bg\">存款</span>\r\n            </div>\r\n            <div class=\"data-col\">{{(salesBean.depositBal/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.depositBalCLast/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.depositBalCMonthEnd/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.depositBalCYearBegin/1)|number:'1.2-2'}}</div>\r\n          </div>\r\n          <div class=\"data-row\">\r\n            <div class=\"data-col-one\">\r\n              <span class=\"card-type-bg\">理财</span>\r\n            </div>\r\n            <div class=\"data-col\">{{(salesBean.financingBal/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.financingBalCLast/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.financingBalCMonthEnd/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.financingBalCYearBegin/1)|number:'1.2-2'}}</div>\r\n          </div>\r\n          <div class=\"data-row\">\r\n            <div class=\"data-col-one\">\r\n              <span class=\"card-type-bg\">\r\n                贷款\r\n              </span>\r\n            </div>\r\n            <div class=\"data-col\">{{(salesBean.loanBal/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.loanBalCLast/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.loanBalCMonthEnd/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.loanBalCYearBegin/1)|number:'1.2-2'}}</div>\r\n          </div>\r\n          <div class=\"data-row\">\r\n            <div class=\"data-col-one\">\r\n              <span class=\"card-type-bg\">\r\n                信用卡\r\n              </span>\r\n            </div>\r\n            <div class=\"data-col\">{{(salesBean.creditCardBal/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.creditCardBalCLast/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.creditCardBalCMonthEnd/1)|number:'1.2-2'}}</div>\r\n            <div class=\"data-col\">{{(salesBean.creditCardBalCYearBegin/1)|number:'1.2-2'}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 table-padding\" *ngIf=\"!judgeField('X_CUST_M_P007_128')\">\r\n        <div class=\"asset-liability-table\">\r\n          <img src=\"../../../../../../../assets/layout/images/360view/asset_no_qx.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"flow\">\r\n      <div class=\"ui-g-12 header-title-theme quickSearch\">\r\n        <span class=\"text\">资产流动方向</span>\r\n        <span class=\"clickstyle\" (click)=\"showDialogFlowDetail()\" *ngIf=\"judgeField('X_CUST_M_P007_P132_01_01')\">\r\n          <div class=\"icon_lists dib-box imgOrFont\">\r\n            <span class=\"icon iconfont tzbicon-record img_display\"></span>\r\n            <span class=\"img_no_display\">详情</span>\r\n          </div>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 asset-flow-direction\" *ngIf=\"judgeField('X_CUST_M_P007_P132_01')\">\r\n        <div class=\"tx-qh\">\r\n          <span class=\"total\">\r\n            资金净流入\r\n            <span class=\"num\">{{amtNetting | formatMoneyValuePie}}</span>元\r\n          </span>\r\n          <span class=\"range\">\r\n            <span class=\"tx-a\" [ngClass]=\"{'tx-a-bg':showCharts == 'A'}\" (click)=\"changeRange('A')\">上月</span>\r\n            <span class=\"tx-a\" [ngClass]=\"{'tx-a-bg':showCharts == 'B'}\" (click)=\"changeRange('B')\">本月</span>\r\n            <span class=\"tx-a\" [ngClass]=\"{'tx-a-bg':showCharts == 'C'}\" (click)=\"changeRange('C')\">本周</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"tx-hj\">\r\n          <span class=\"total2\">\r\n            流入合计\r\n            <span class=\"num\">{{amtNettingIn | formatMoneyValuePie}}</span>元\r\n            <br/> 流出合计\r\n            <span class=\"num\">{{amtNettingOut | formatMoneyValuePie}}</span>元\r\n          </span>\r\n        </div>\r\n        <div echarts [options]=\"assetOption\" (mouseover)=\"displayAllName($event)\"></div>\r\n      </div>\r\n      <div class=\"ui-g-12 asset-flow-direction\" *ngIf=\"!judgeField('X_CUST_M_P007_P132_01')\">\r\n        <div class=\"ui-g-12 img_asset\">\r\n          <img src=\"../../../../../../../assets/layout/images/360view/asset_no_qx.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 hold-product-page\">\r\n    <div class=\"product-name\">\r\n      <ul class=\"parent-ul\">\r\n        <span *ngFor=\"let item of ulData;let i = index;\">\r\n          <li *ngIf=\"judgeField(item.processCode)\" class=\"{{item.active ? 'active' : ''}}\">\r\n            <div (click)=\"parentLiClick(i,item.typeNum)\">{{item.label}}</div>\r\n            <ul *ngIf=\"item.children\" class=\"children\">\r\n              <span *ngFor=\"let itemChild of item.children;let child_i = index;\">\r\n                <li *ngIf=\"judgeField(itemChild.processCode)\" (click)=\"childLiClick(i, child_i, itemChild.typeNum)\" class=\"{{itemChild.active ? 'active' : ''}} {{itemChild.isGroup ? 'group' : ''}} {{itemChild.num ? 'num' : 'no-num'}}\">\r\n                  <p>{{itemChild.label}}</p>\r\n                  <span class=\"active2\" *ngIf=\"itemChild.flag\"></span>\r\n                  <span *ngIf=\"itemChild.num\">{{itemChild.num}}</span>\r\n                </li>\r\n              </span>\r\n            </ul>\r\n          </li>\r\n        </span>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"product-detail\">\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '1'\">\r\n        <div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P227_17') || judgeField('X_CUST_M_P007_P129_P227_15')\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">存款</span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '101'}\" class=\"subLoan\" (click)=\"changeSubLoan('101')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P227_17')\">存款信息</span>\r\n            <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P227_17')\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '102'}\" class=\"subLoan\" (click)=\"changeSubLoan('102')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P227_17')\">关联存款信息</span>\r\n\r\n            <span class=\"bodyBgColor money-style\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P227_15') && subShowPage == '101'\">总可用积数：{{(totalAvailableCardinality/1)|number:'1.2-2'}}</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(1)\" *ngIf=\"subShowPage == '101' && judgeField('X_CUST_M_P007_P129_P227_17')\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '101' && judgeField('X_CUST_M_P007_P129_P227_17')\">\r\n            <u-dataTable [value]=\"holdDepositInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-headerColumnGroup>\r\n                <p-row>\r\n                  <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\"></p-column>\r\n                  <p-column header=\"账号\" [style]=\"{'width':'150px','text-align':'center'}\"></p-column>\r\n                  <p-column header=\"卡号\" [style]=\"{'width':'180px','text-align':'center'}\"></p-column>\r\n                  <p-column header={{list.label}} [style]=\"{'width':'170px','text-align':'right'}\" *ngFor=\"let list of holdDepositInfodataTable\"></p-column>\r\n                </p-row>\r\n              </p-headerColumnGroup>\r\n              <p-column [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"account\" [style]=\"{'width':'150px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <a class=\"ck\" (click)=\"showDialog1(col,1)\">{{col.account}}</a>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"cardId\" [style]=\"{'width':'180px','text-align':'center'}\"></p-column>\r\n              <p-column [style]=\"{'width':'170px','text-align':'right'}\" field={{list.value}} *ngFor=\"let list of holdDepositInfodataTable\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <span *ngIf=\"(list.value == 'assitUserId') && (col.assitUserId != null) && (col.assitUserId.split(',').length <= 2)\">{{col.assitUserId}}</span>\r\n                  <span class=\"linkcol\" *ngIf=\"(list.value == 'assitUserId') && (col.assitUserId != null) && (col.assitUserId !=null && col.assitUserId.split(',').length > 2)\">\r\n                    <a title=\"{{col.assitUserId}}\">{{col.assitUserId.split(',')[0]}},{{col.assitUserId.split(',')[1]}}...</a>\r\n                  </span>\r\n                  <span *ngIf=\"(list.value == 'assitUserName') && (col.assitUserName != null) && (col.assitUserName.split(',').length <= 2)\">{{col.assitUserName}}</span>\r\n                  <span class=\"linkcol\" *ngIf=\"(list.value == 'assitUserName') && (col.assitUserName != null) && (col.assitUserName !=null && col.assitUserName.split(',').length > 2)\">\r\n                    <a title=\"{{col.assitUserName}}\">{{col.assitUserName.split(',')[0]}},{{col.assitUserName.split(',')[1]}}...</a>\r\n                  </span>\r\n                  <span *ngIf=\"list.value != 'assitUserId' && list.value != 'assitUserName'\">{{col[list.value]}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-footerColumnGroup *ngIf=\"holdDepositInfo\">\r\n                <p-row>\r\n                  <p-column footer=\"合计\" [style]=\"{'width':'50px' ,'text-align':'center'}\"></p-column>\r\n                  <p-column footer=\"\" [style]=\"{'width':'150px','text-align':'center'}\"></p-column>\r\n                  <p-column footer=\"\" [style]=\"{'width':'180px','text-align':'center'}\"></p-column>\r\n                  <p-column *ngFor=\"let list of holdDepositInfodataTable\" [style]=\"{'width':'170px','text-align':'right'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"footer\">\r\n                      <span *ngIf=\"list.value == 'balance'\">{{totalBalance}}</span>\r\n                      <span *ngIf=\"list.value == 'monthDailyAverage'\">{{totalContributionCardinalNumber}}</span>\r\n                      <span *ngIf=\"list.value == 'yearDailyAverage'\">{{totalYearAdditionalCardinality}}</span>\r\n                      <span *ngIf=\"list.value == 'availableCardinality'\">{{totalAvailableCardinality}}</span>\r\n                    </ng-template>\r\n                  </p-column>\r\n                </p-row>\r\n              </p-footerColumnGroup>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdDepositInfoFirst\" rows=\"{{holdDepositInfopageSize}}\" totalRecords=\"{{holdDepositInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldDepositInfo($event)\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '102' && judgeField('X_CUST_M_P007_P129_P227_17')\">\r\n            <u-dataTable [value]=\"creditRelationshipList\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column field=\"account\" header=\"账号\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"cardId\" header=\"卡号\" [style]=\"{'width':'200px'}\"></p-column>\r\n              <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"status\" header=\"账户状态\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"currency\" header=\"币种\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"acctNum\" header=\"科目号\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"depositPeriod\" header=\"存期\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"\" header=\"账户余额\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"openDate\" header=\"开户日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"closeDate\" header=\"注销日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"lastYearAdditionalCardinality\" header=\"上年总附加积数\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"yearAdditionalCardinality\" header=\"本年总附加积数\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"lastAvailableCardinality\" header=\"上年可用积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"availableCardinality\" header=\"本年可用积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"contributionCardinalNum\" header=\"贡献积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"assActorId\" header=\"协储员\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"assActor\" header=\"协储员名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"\" header=\"本月日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.monthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"上月日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.lastMonthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"本年日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.yearDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"上年日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.lastY_yearthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"first\" [rows]=\"creditRelationshipPageSize\" [totalRecords]=\"creditRelationshipTotal\" (onPageChange)=\"paginate($event)\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 贷款 showPage == '2'-->\r\n      <!-- <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '2' && (holdLoanInfo.length>0||holdDiscountInfo.length>0||holdAcceptInfo.length>0||holdBackletterInfo.length>0||loanNumInfo.length>0)\"></div> -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '2'\">\r\n        <div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">贷款</span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '201'}\" class=\"subLoan\" (click)=\"changeSubLoan('201')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\">贷款台账</span>\r\n            <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '202'}\" class=\"subLoan\" (click)=\"changeSubLoan('202')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\">授信合同</span>\r\n            <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '203'}\" class=\"subLoan\" (click)=\"changeSubLoan('203')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311')\">最高额合同</span>\r\n            <span class=\"typeLine\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P311') && judgeField('X_CUST_M_P007_P129_P228_P315')\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '204'}\" class=\"subLoan\" (click)=\"changeSubLoan('204')\" *ngIf=\"judgeField('X_CUST_M_P007_P129_P228_P315')\">贷款账号</span>\r\n\r\n            <span class=\"bodyBgColor money-style\" *ngIf=\"subShowPage == '201' && (holdLoanInfo.length>0)&&judgeField('X_CUST_M_P007_P129_P228_P311')\">总余额：{{(totalloanBalance/1)|number:'1.2-2'}}元</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(2)\" *ngIf=\"subShowPage == '201' && (holdLoanInfo.length>0)&&judgeField('X_CUST_M_P007_P129_P228_P311')\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n\r\n          <!-- 贷款台账 -->\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '201' && judgeField('X_CUST_M_P007_P129_P228_P311')\">\r\n            <u-dataTable [value]=\"holdLoanInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contractNum\" header=\"合同编号\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n              <p-column header=\"借据编号\" [style]=\"{'width':'150px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <a class=\"dk\" (click)=\"showDialog2(col)\">{{col.iousNum}}</a>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdLoanInfodataTable\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdLoanInfoFirst\" rows=\"{{holdLoanInfopageSize}}\" totalRecords=\"{{holdLoanInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateHoldLoanInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- 授信合同 -->\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '202' && judgeField('X_CUST_M_P007_P129_P228_P311')\">\r\n            <u-dataTable [value]=\"creditContractList\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"clientName\" header=\"客户名称\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"contractNo\" header=\"合同编号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"bussType\" header=\"业务类型\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n              </p-column>\r\n              <p-column field=\"creditLimt\" header=\"授信额度\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.creditLimt | formatMoneyValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"usedLmt\" header=\"当前已用额度\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.usedLmt | formatMoneyValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"effectDate\" header=\"生效日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.effectDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"ineffectDate\" header=\"失效日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.ineffectDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"guaranteeMode\" header=\"担保方式\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n              </p-column>\r\n              <p-column field=\"contractStatus\" header=\"状态\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n              </p-column>\r\n              <p-column field=\"appUserId\" header=\"经办人\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"appBranchNo\" header=\"经办机构\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"creditContractFirst\" rows=\"{{creditContractPageSize}}\" totalRecords=\"{{creditContractTotal}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateCreditContract($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- 最高额合同 -->\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '203' && judgeField('X_CUST_M_P007_P129_P228_P311')\">\r\n            <u-dataTable [value]=\"maximumContractList\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"clientName\" header=\"客户名称\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"contractNo\" header=\"合同编号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"guaranteeMode\" header=\"主担保方式\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contracAmt\" header=\"合同金额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.contracAmt | formatMoneyValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contracBalance\" header=\"合同余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.contracBalance | formatMoneyValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"guaranteeStartDate\" header=\"担保起始日期\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"contractStatus\" header=\"合同状态\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.contractStatus|codeValuePie:heTongOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"appUserName\" header=\"经办人\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"appBranchName\" header=\"经办机构\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"maximumContractFirst\" rows=\"{{maximumContractPageSize}}\" totalRecords=\"{{maximumContractTotal}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateMaximumContract($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- 贷款账号信息 -->\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '204' && judgeField('X_CUST_M_P007_P129_P228_P315')\">\r\n            <u-dataTable [value]=\"loanNumInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"acctNo\" header=\"账号\" [style]=\"{'width':'180px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n                  <a class=\"ck\" (click)=\"showDialog1(col,2)\">{{col.acctNo}}</a>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"acctStatus\" header=\"账户状态\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"acctName\" header=\"账户名称\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"ccy\" header=\"币种\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"glCode\" header=\"科目号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"openBranch\" header=\"开户机构\" [style]=\"{'width':'180px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"openDate\" header=\"开户日期\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"closeDate\" header=\"注销日期\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"assistantUserIdAllOut\" header=\"协储员号\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <span *ngIf=\"(col.assistantUserIdAllOut != null) && (col.assistantUserIdAllOut.split(',').length <= 2)\">{{col.assistantUserIdAllOut}}</span>\r\n                  <span class=\"linkcol\" *ngIf=\"(col.assistantUserNmAllOut !=null && col.assistantUserNmAllOut.split(',').length > 2)\">\r\n                    <a title=\"{{col.assistantUserIdAllOut}}\">{{col.assistantUserIdAllOut.split(',')[0]}},{{col.assistantUserIdAllOut.split(',')[1]}}...</a>\r\n                  </span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"assistantUserNmAllOut\" header=\"协储员名称\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <span *ngIf=\"(col.assistantUserNmAllOut != null) && (col.assistantUserNmAllOut.split(',').length <= 2)\">{{col.assistantUserNmAllOut}}</span>\r\n                  <span class=\"linkcol\" *ngIf=\"(col.assistantUserNmAllOut !=null && col.assistantUserNmAllOut.split(',').length > 2)\">\r\n                    <a title=\"{{col.assistantUserNmAllOut}}\">{{col.assistantUserNmAllOut.split(',')[0]}},{{col.assistantUserNmAllOut.split(',')[1]}}...</a>\r\n                  </span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"loanNumInfoFirst\" rows=\"{{loanNumInfopageSize}}\" totalRecords=\"{{loanNumInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateloanNumInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 理财 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '3'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">理财</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(4)\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"holdMoneyManagementInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\" (onSort)=\"doSort($event)\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdMoneyManagementInfodataTable\" [sortable]=\"list.value == 'productStartDate' || list.value == 'productEndDate' || list.value == 'startDate' || list.value == 'endDate'  || list.value == 'subscriptionAmount' || list.value == 'expectedYield' || list.value == 'issue'\"\r\n                [style]=\"{'width':'175px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdMoneyManagementInfoFirst\" rows=\"{{holdMoneyManagementInfopageSize}}\" totalRecords=\"{{holdMoneyManagementInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldMoneyManagementInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 信用卡 -->\r\n      <div class=\"ui-g-12 tab \" *ngIf=\"showPage == '5'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">信用卡</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(5)\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"holdBankCardInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column *ngFor=\"let list of holdBankCardInfodataTable\" header={{list.label}} field={{list.value}} [style]=\"{'width':'150px','text-align':'right'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <span class=\"ck\" (click)=\"showDetails(col)\" *ngIf=\"list.value == 'cardNum'\">{{col.cardNum}}</span>\r\n                  <span *ngIf=\"list.value == 'cardStat'\">{{col.cardStat|codeValuePie:cardStatOptions}}</span>\r\n                  <span *ngIf=\"list.value == 'openCardDate'\">{{col.openCardDate|timeValuePie}}</span>\r\n                  <span *ngIf=\"list.value == 'ovdueAmt'\">{{(col.ovdueAmt/1)|number:'1.2-2'}}</span>\r\n                  <span *ngIf=\"list.value == 'odPrin'\">{{(col.odPrin/1)|number:'1.2-2'}}</span>\r\n                  <span *ngIf=\"list.value == 'authCrdtLimit'\">{{(col.authCrdtLimit/1)|number:'1.2-2'}}</span>\r\n                  <span *ngIf=\"list.value != 'cardNum' && list.value != 'cardStat' && list.value != 'openCardDate' && list.value != 'ovdueAmt' && list.value != 'odPrin' && list.value != 'authCrdtLimit'\">{{col[list.value]}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdBankCardInfoFirst\" rows=\"{{holdBankCardInfopageSize}}\" totalRecords=\"{{holdBankCardInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldBankCardInfo($event)\" *ngIf=\"holdBankCardInfo.length>0\"\r\n                [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 签约类 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '4'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme\">\r\n            <span class=\"text\">签约服务类</span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"holdFreeBankInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"signType\" header=\"签约类型\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.signType|codeValuePie:qySignTypeOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"signDt\" header=\"签约日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.signDt|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"surrDt\" header=\"解约日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.surrDt|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"marketPers\" header=\"经办柜员\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"belongOrg\" header=\"归属机构\" [style]=\"{'width':'180px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"status\" header=\"签约状态\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.status|codeValuePie:qyStatusOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"操作\" [style]=\"{'width':'100px','text-align':'center'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span class=\"tabelDetailIco\" (click)=\"detail(col)\" *ngIf=\"col.signType=='04'\">详情</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdFreeBankInfoFirst\" rows=\"{{holdFreeBankInfopageSize}}\" totalRecords=\"{{holdFreeBankInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldFreeBankInfo($event)\" *ngIf=\"holdFreeBankInfo.length>0\"\r\n                [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 贷款利息抵用券 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == 'mm'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme\">\r\n            <span class=\"text\">贷款利息抵用券</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 tab\">\r\n          <u-dataTable [value]=\"qryRelationItems\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n            [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"couponId\" header=\"抵用券编号\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"partyId\" header=\"客户号\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"partyName\" header=\"客户名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"couponTypeId\" header=\"抵用券类型编号\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"couponTypeName\" header=\"抵用券类型名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"couponAmount\" header=\"面值\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"effectiveDate\" header=\"生效日期\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"expirationDate\" header=\"失效日期\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"deductibleDate\" header=\"抵扣日期\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"duebillNo\" header=\"抵扣借据\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"statusId\" header=\"状态\" [style]=\"{'width':'180px'}\"></p-column>\r\n          </u-dataTable>\r\n          <div class=\"ui-g-12 pag\">\r\n            <u-paginator rows=\"{{qryRelationItemsPageSize}}\" totalRecords=\"{{qryRelationItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n              (onPageChange)=\"paginateQryRelationItems($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 国际业务类 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '6'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">国际业务类</span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '601'}\" class=\"subLoan\" (click)=\"changeSubLoan('601')\">福费廷</span>\r\n            <span class=\"typeLine\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '602'}\" class=\"subLoan\" (click)=\"changeSubLoan('602')\">贸易融资</span>\r\n            <span class=\"typeLine\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '603'}\" class=\"subLoan\" (click)=\"changeSubLoan('603')\">出口贴现</span>\r\n            <span class=\"typeLine\"></span>\r\n            <span [ngClass]=\"{'tx-b-bg':subShowPage == '604'}\" class=\"subLoan\" (click)=\"changeSubLoan('604')\">信用证</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(6)\" *ngIf=\"subShowPage == '601'\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(7)\" *ngIf=\"subShowPage == '602'\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(8)\" *ngIf=\"subShowPage == '603'\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '601'\">\r\n            <u-dataTable [value]=\"holdForfaitingInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdForfaitingInfodataTable\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdForfaitingInfoFirst\" rows=\"{{holdForfaitingInfopageSize}}\" totalRecords=\"{{holdForfaitingInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldForfaitingInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '602'\">\r\n            <u-dataTable [value]=\"holdTradeFinancingInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdTradeFinancingInfodataTable\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdTradeFinancingInfoFirst\" rows=\"{{holdTradeFinancingInfopageSize}}\" totalRecords=\"{{holdTradeFinancingInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldTradeFinancingInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '603'\">\r\n            <u-dataTable [value]=\"holdCktxInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdCktxInfodataTable\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdCktxInfoFirst\" rows=\"{{holdCktxInfopageSize}}\" totalRecords=\"{{holdCktxInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateHoldCktxInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"subShowPage == '604'\">\r\n            <u-dataTable [value]=\"holdCreditLetterInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contractNum\" header=\"合同编号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"mainGuaranteeMode\" header=\"主担保方式\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.mainGuaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"issueType\" header=\"签发类型\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.issueType|codeValuePie:qianFaClassOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"shipmentDate\" header=\"预定装船日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.shipmentDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"paymentDate\" header=\"预定付汇日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.paymentDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"urrency\" header=\"币种\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.urrency|codeValuePie:currencyOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"issuingAmount\" header=\"开证金额含溢装金额\" [style]=\"{'width':'180px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.issuingAmount/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"currentBalance\" header=\"当前余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.currentBalance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"investigator\" header=\"调查人\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdCreditLetterInfoFirst\" rows=\"{{holdCreditLetterInfopageSize}}\" totalRecords=\"{{holdCreditLetterInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldCreditLetterInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 贴现 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '8'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme quickSearch\">\r\n            <span class=\"text\">贴现</span>\r\n            <span class=\"clickstyle\" (click)=\"checkAll(3)\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-filters img_display\"></span>\r\n                <span class=\"img_no_display\">选择字段</span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"holdDiscountInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of holdDiscountInfodataTable\" [style]=\"{'width':'150px','text-align':'right'}\"></p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdDiscountInfoFirst\" rows=\"{{holdDiscountInfopageSize}}\" totalRecords=\"{{holdDiscountInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldDiscountInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 承兑  -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '7'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme\">\r\n            <span class=\"text\">承兑</span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\" *ngIf=\"showPage == '7'\">\r\n            <u-dataTable [value]=\"holdAcceptInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contractNo\" header=\"合同编号\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <a style=\"cursor:pointer\" (click)=\"showDialogCd(col)\">{{col.contractNo}}</a>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"billAmt\" header=\"票面金额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.billAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"gapAmt\" header=\"敞口金额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.gapAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"balance\" header=\"当前余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"billBankId\" header=\"签发行行号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"tenType\" header=\"十级分类\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.tenType|codeValuePie2:tenClassOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"appDate\" header=\"经办日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.appDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"appUserId\" header=\"经办人\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"contractStatus\" header=\"合同状态\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.contractStatus|codeValuePie:heTongOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdAcceptInfoFirst\" rows=\"{{holdAcceptInfopageSize}}\" totalRecords=\"{{holdAcceptInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateHoldAcceptInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 保函 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '9'\">\r\n        <div class=\"ui-g-12 tab\">\r\n          <div class=\"header-title-theme\">\r\n            <span class=\"text\">保函</span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"holdBackletterInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\"\r\n              [emptyMessage]=\"tabMesg\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{ri+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"contractNum\" header=\"合同编号\" [style]=\"{'width':'120px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"mainGuaranteeMode\" header=\"主担保方式\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.mainGuaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n                </ng-template>'width':'50px'\r\n              </p-column>\r\n              <p-column field=\"settlementAccount\" header=\"结算账号\" [style]=\"{'width':'180px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"containingType\" header=\"保函类型\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.containingType|codeValuePie:baoHanClassOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"urrency\" header=\"币种\" [style]=\"{'width':'100px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.urrency|codeValuePie:currencyOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"backletterAmount\" header=\"保函金额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.backletterAmount/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"startDate\" header=\"开始日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.startDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"maturityDate\" header=\"到期日期\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.maturityDate|timeValuePie}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"maturityBalance\" header=\"当前余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.maturityBalance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"gapAmt\" header=\"缺口余额\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{(col.gapAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"operator\" header=\"经办人\" [style]=\"{'width':'100px','text-align':'right'}\"></p-column>\r\n              <p-column field=\"holdingState\" header=\"合同状态\" [style]=\"{'width':'120px','text-align':'right'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.holdingState|codeValuePie:heTongOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12 pag\">\r\n              <u-paginator [first]=\"holdBackletterInfoFirst\" rows=\"{{holdBackletterInfopageSize}}\" totalRecords=\"{{holdBackletterInfototalNum}}\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateHoldBackletterInfo($event)\" [style]=\"{'position':'relative','z-index':0}\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 正在申请产品 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '10'\">\r\n        <app-application-for-product *ngIf=\"showPage == '10'\"></app-application-for-product>\r\n      </div>\r\n\r\n      <!-- 他行产品 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '11'\">\r\n        <app-other-banking-product *ngIf=\"showPage == '11'\"></app-other-banking-product>\r\n      </div>\r\n\r\n      <!-- 推荐产品 -->\r\n      <div class=\"ui-g-12 tab\" *ngIf=\"showPage == '12'\">\r\n        <app-recommended-product *ngIf=\"showPage == '12'\"></app-recommended-product>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog header=\"贷款详情\" *ngIf=\"display1\" [(visible)]=\"display1\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <loan-details [inValue]=\"inValue\" (outValue)=\"addCall($event)\"></loan-details>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"\" *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <p-header>\r\n    {{title}}\r\n  </p-header>\r\n  <account-trading-details [inValue]=\"inValue\" *ngIf=\"display\" (outValue)=\"addCall($event)\"></account-trading-details>\r\n  <!-- <deposit-details></deposit-details> -->\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"flowDisplay\" [(visible)]=\"flowDisplay\" modal=\"modal\" (onHide)=\"flowDisplayCall($event)\">\r\n  <p-header>\r\n    资金流入流出详情\r\n  </p-header>\r\n  <asset-flow-direction-details [inValue]=\"inValue\" *ngIf=\"flowDisplay\"></asset-flow-direction-details>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"选择表头显示字段\" [(visible)]=\"chooseDisplay\" modal=\"modal\" width=\"85%\" [responsive]=\"false\" class=\"dialog\" (onHide)=\"addCall($event)\">\r\n  <div class='ui-g-12'>\r\n    <div class=\"ui-g-12 deposit\" *ngIf=\"showCheckbox=='1'\">\r\n      <!-- <h4>存款字段</h4> -->\r\n      <div class=\"ui-g-12 margin-bottom\" *ngFor=\"let item of depositList;let i = index\">\r\n        <div class=\"ui-g-12 padding-0 category\">\r\n          <p-checkbox binary=\"true\" [(ngModel)]=\"item.isCheck\" label={{item.label}} (onChange)=\"doAllSelect(item,i)\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-3 padding-0\" *ngFor=\"let list of holdDepositInfoCodes[i]\">\r\n          <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,1,i)\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='2'\">\r\n      <h4>贷款字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdLoanInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,2)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='3'\">\r\n      <h4>贴现字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdDiscountInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,3)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='4'\">\r\n      <h4>理财字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdMoneyManagementInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,4)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 deposit\" *ngIf=\"showCheckbox=='5'\">\r\n      <!-- 信用卡 -->\r\n      <div class=\"ui-g-12 margin-bottom\" *ngFor=\"let item of holdBankCardList;let i = index\">\r\n        <div class=\"ui-g-12 padding-0 category\">\r\n          <p-checkbox binary=\"true\" [(ngModel)]=\"item.isCheck\" label={{item.label}} (onChange)=\"selectBigItem(item,i)\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-3 padding-0\" *ngFor=\"let list of holdBankCardInfoCodes[i]\">\r\n          <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,5,i)\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='6'\">\r\n      <h4>福费廷字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdForfaitingInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,6)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='7'\">\r\n      <h4>贸易融资字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdTradeFinancingInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,7)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"showCheckbox=='8'\">\r\n      <h4>出口贴现字段</h4>\r\n      <div class=\"ui-g-3\" *ngFor=\"let list of holdCktxInfoCode\">\r\n        <p-checkbox binary=\"true\" [(ngModel)]=\"list.isCheck\" label={{list.label}} (onChange)=\"doSelect(list,8)\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"text-align:center\">\r\n    <button pButton (click)=\"saveTitle()\">保存</button>\r\n    <button pButton (click)=\"resetFirst()\">恢复默认</button>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\" style=\"margin-top:8px;\">\r\n    操作说明：如需要自定义表头顺序，请去除所有勾选，然后按照顺序勾选需要显示的字段，再点击保存。\r\n  </div> -->\r\n</p-dialog>\r\n<p-dialog header=\"承兑信息\" *ngIf=\"displayCd\" [(visible)]=\"displayCd\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <deposit-details [inValue]=\"inValue\" (outValue)=\"addCall($event)\" *ngIf=\"displayCd\"></deposit-details>\r\n</p-dialog>\r\n<p-dialog header=\"信用卡交易明细\" *ngIf=\"showCreditCard\" [(visible)]=\"showCreditCard\" modal=\"true\" (onHide)=\"closeCredit()\">\r\n  <creditcard-details [inValue]=\"creditValue\" (outValue)=\"creditshow($event)\"></creditcard-details>\r\n</p-dialog>\r\n<p-dialog header=\"积分卡详情\" *ngIf=\"showContractSigning\" [(visible)]=\"showContractSigning\" modal=\"true\">\r\n  <contract-signing [inValue]=\"scorecardValue\"></contract-signing>\r\n</p-dialog>\r\n<p-dialog header=\"存款\" *ngIf=\"showDeposit\" [(visible)]=\"showDeposit\" modal=\"true\" (onHide)=\"closeDeposit()\">\r\n  <iframe [src]=\"srcUrl_1\">\r\n  </iframe>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 99%;\n  background-color: #e5e5e5;\n  border: 1px solid #c6c6c6;\n  border-radius: 3px;\n  margin: 0 auto 0.5em; }\n  .menu a {\n    position: relative;\n    color: #5d5d5d;\n    padding: 7px 22px;\n    cursor: pointer;\n    border-right: 1px solid #c6c6c6; }\n  .menu a .secondM,\n    .menu a .thirdM {\n      width: 117px;\n      position: absolute;\n      top: 15px;\n      left: 17px;\n      z-index: 1000;\n      background: white;\n      text-align: center;\n      list-style: none;\n      padding: 0;\n      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.5);\n      display: none; }\n  .menu a .secondM li,\n      .menu a .thirdM li {\n        padding: 4px 0; }\n  .menu a .secondM li a,\n        .menu a .thirdM li a {\n          border-right: 0px !important; }\n  .menu a .thirdM {\n      left: 116px;\n      top: 22px; }\n  .menu a li:hover {\n      background: #e9f7f8; }\n  .menu a:hover {\n      color: #0094D2;\n      background-color: #fafafa; }\n  .menu a:hover .secondM {\n        display: block; }\n  .menu a:hover .secondM .spe:hover .thirdM {\n          display: block; }\n  .ui-g .ui-g-12 strong {\n  display: inline-block;\n  width: 90px;\n  text-align: right; }\n  .ui-g .ui-g-12 .content {\n  padding: 0; }\n  .ui-g .ui-g-12 .content label {\n    display: inline-block;\n    width: 90px;\n    text-align: right; }\n  .ui-g .ui-g-12 .content span {\n    display: inline-block;\n    margin-left: 5px; }\n  .ui-g .ui-g-12 .content span a {\n      font-weight: bold; }\n  .ui-g .ui-g-12 .content span:nth-child(1) {\n      margin-left: 0; }\n  .ui-g .tab {\n  padding: 0; }\n  .ui-g .tab .ui-g-11 span {\n    background: #0094D2; }\n  .ui-g .btn {\n  text-align: center; }\n  :host/deep/ .u-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  :host/deep/ .ui-dialog {\n  width: 80%; }\n  .dialog-btn {\n  padding: 0; }\n  .titFont {\n  font-size: 14px;\n  font-weight: bold; }\n  .boxShadow {\n  margin-bottom: 10px; }\n  .boxShadow .bodyBgColor {\n    background: transparent !important;\n    color: #19b0c8 !important;\n    margin-right: 0.7em;\n    font-weight: bold;\n    font-size: 14px; }\n  .boxShadow .showSelected {\n    margin-top: -30px;\n    float: right; }\n  .boxShadow .ck,\n  .boxShadow .dk {\n    text-decoration: none;\n    color: #19b0c8;\n    border: 0 none;\n    cursor: pointer; }\n  .secondMenu {\n  color: #424242 !important;\n  font-weight: bold;\n  font-size: 14px; }\n  :host/deep/.tableContent1 {\n  background-color: #fafafa !important; }\n  :host/deep/.tableContent2 {\n  background: #f7f7f9 !important; }\n  :host/deep/.ui-datatable .ui-datatable-thead > tr > .tableTitle {\n  background: #19b0c8 !important;\n  width: 13%;\n  border: 1px solid white !important; }\n  :host/deep/.ui-datatable .ui-datatable-thead > tr > .tableTitle span {\n    color: #ffffff !important; }\n  :host/deep/ .ui-datatable .ui-datatable-thead > tr > th.tableContent1 {\n  background: #fafafa !important;\n  font-size: 14px;\n  color: #6d6d6d; }\n  :host/deep/ .ui-datatable .ui-datatable-thead > tr > th.tableContent1 span {\n    color: #6d6d6d; }\n  :host/deep/ .ui-datatable .ui-datatable-thead > tr > th.tableContent2 {\n  background: #e1e1e1 !important; }\n  :host/deep/ .ui-datatable .ui-datatable-thead > tr > th.tableContent2 span {\n    color: #6d6d6d; }\n  :host/deep/.container tbody .ui-widget-content {\n  height: 0 !important; }\n  .position-relative {\n  position: relative; }\n  .position-absolute1 {\n  position: absolute;\n  right: 2px;\n  top: 11px; }\n  .padding-0 {\n  padding: 0; }\n  .category {\n  font-weight: bold;\n  margin-bottom: 5px; }\n  .margin-bottom {\n  margin-bottom: 15px; }\n  .padding-tb {\n  padding: 15px 0 0 12px;\n  position: relative; }\n  .moreThis {\n  color: #19b0c8;\n  vertical-align: middle;\n  font-weight: bold;\n  float: right;\n  position: relative;\n  left: -10px;\n  cursor: pointer; }\n  .moreThis:hover {\n    text-decoration: underline; }\n  .deposit .ui-g-3 {\n  width: 20%; }\n  .deposit .ui-chkbox-label {\n  margin: 0; }\n  .booleandisabled {\n  cursor: inherit !important; }\n  .booleandisabled:hover a {\n    height: 100% !important;\n    padding: 0 !important; }\n  .booleandisabled:hover a:hover {\n      color: #5d5d5d; }\n  :host/deep/ .ui-inputtext {\n  width: 50px !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  padding: 1em 1em;\n  height: 90% !important; }\n  iframe {\n  width: 100%; }\n  @media screen and (max-width: 1280px) {\n    iframe {\n      height: 500px; } }\n  @media screen and (min-width: 1281px) {\n    iframe {\n      height: 600px; } }\n  .cards .thead tr td {\n  background-color: #d2f1ef !important; }\n  .cards thead td:nth-child(1), .cards tbody td:nth-child(1) {\n  width: 5%; }\n  .cards tbody:nth-child(even) {\n  background: #ebebeb !important; }\n  .cards td {\n  word-break: break-word;\n  box-sizing: border-box;\n  height: 35px !important;\n  box-sizing: border-box;\n  padding: .25em .5em; }\n  .pro-info-page .assetmodule {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex; }\n  .pro-info-page .assetmodule .liability {\n    width: 65%;\n    float: left;\n    margin: 0;\n    padding: 0;\n    background: #fff;\n    margin-right: 10px; }\n  .pro-info-page .assetmodule .liability .table-padding {\n      padding-left: 12px;\n      padding-right: 12px; }\n  .pro-info-page .assetmodule .liability .asset-liability-table {\n      text-align: center; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-row-title {\n        width: 100%;\n        background: #f0f0f0;\n        height: 33px;\n        display: flex;\n        line-height: 33px; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-col {\n        width: 21%;\n        text-align: left; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-col-one {\n        width: 16%;\n        text-align: left;\n        padding-left: 2%; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-col-one .card-type-bg {\n          color: #fff;\n          display: inline-block;\n          width: 50px;\n          height: 18px;\n          line-height: 18px;\n          background: #34cfe6;\n          border-radius: 20px;\n          text-align: center; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-col-one .data-col-one-title {\n          width: 50px;\n          text-align: center;\n          display: inline-block; }\n  .pro-info-page .assetmodule .liability .asset-liability-table .data-row {\n        width: 100%;\n        height: 33px;\n        border-bottom: 1px solid #e8e8e8;\n        display: flex;\n        line-height: 33px; }\n  .pro-info-page .assetmodule .flow {\n    width: 35%;\n    margin: 0;\n    padding: 0;\n    background: #fff; }\n  .pro-info-page .hold-product-page {\n  background: #fff;\n  margin-top: 10px;\n  display: flex;\n  padding-left: 0; }\n  .pro-info-page .hold-product-page .product-name {\n    width: 15%;\n    box-sizing: border-box;\n    border-right: 2px solid #ededed; }\n  .pro-info-page .hold-product-page .product-detail {\n    width: 85%;\n    margin-bottom: 10px; }\n  .pro-info-page .hold-product-page .product-detail .bodyBgColor {\n      background: transparent !important;\n      color: #19b0c8 !important;\n      margin-right: 0.7em;\n      font-weight: bold;\n      font-size: 14px; }\n  .pro-info-page .hold-product-page .product-detail .showSelected {\n      margin-top: -30px;\n      float: right; }\n  .pro-info-page .hold-product-page .product-detail .ck,\n    .pro-info-page .hold-product-page .product-detail .dk {\n      text-decoration: none;\n      color: #19b0c8;\n      border: 0 none;\n      cursor: pointer; }\n  .li-bg {\n  background: #d5faff; }\n  .li-bg-a {\n  color: #3fd2e8 !important; }\n  .icon {\n  cursor: pointer;\n  position: absolute;\n  right: 10px; }\n  .imgOrFont .img_no_display {\n  display: none; }\n  .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  background: transparent;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n  display: none; }\n  .signBtnClick {\n  cursor: pointer; }\n  .clickstyle {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 10px; }\n  .quickSearch {\n  position: relative; }\n  .header-title-theme {\n  padding-left: 12px;\n  height: 42px;\n  width: 100%;\n  background-color: #ffffff;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8 !important; }\n  .header-title-theme .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .line {\n      height: 17px; } }\n  .header-title-theme .text {\n    -webkit-box-flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    padding-right: 50px;\n    font-weight: bold; }\n  .header-title-theme .advance {\n    -webkit-box-flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px; }\n  .header-title-theme .proColor {\n    padding-left: 1%;\n    color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .text {\n      font-size: 15px; } }\n  .tzbicon-filters {\n  color: #34CFE6;\n  font-size: 20px; }\n  .tzbicon-record {\n  color: #34CFE6;\n  font-size: 20px; }\n  .tzbicon-more {\n  color: #34CFE6;\n  font-size: 20px; }\n  .asset-flow-direction {\n  height: 205px;\n  margin: 0;\n  padding: 0; }\n  .asset-flow-direction div:nth-child(3) {\n    height: 180px; }\n  .asset-flow-direction .img_asset {\n    text-align: center;\n    margin-top: 30px; }\n  .circle {\n  display: inline-block;\n  width: 16px;\n  height: 10px;\n  border-radius: 5px; }\n  .bg-g {\n  margin-left: 10px;\n  background-color: #5bb01a; }\n  .bg-r {\n  background-color: #e93f33; }\n  .tx-aglin {\n  margin-top: -40px;\n  text-align: center; }\n  .tx-hj {\n  width: 100%;\n  position: relative;\n  margin-top: 5px; }\n  .tx-hj .total2 {\n    position: absolute;\n    top: 140px;\n    padding-left: 12px;\n    font-size: 12px; }\n  .tx-hj .total2 .num {\n      color: #34CFE6;\n      font-weight: bold; }\n  .tx-qh {\n  width: 100%;\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 5px; }\n  .tx-qh .total {\n    width: 60%;\n    display: inline-block;\n    text-align: left;\n    padding-left: 12px; }\n  .tx-qh .total .num {\n      color: #34CFE6;\n      font-weight: bold; }\n  .tx-qh .range {\n    float: right;\n    padding-right: 10px; }\n  .tx-qh .range .tx-a {\n      padding-left: 8px; }\n  .tx-qh .range .tx-a:hover {\n        cursor: pointer; }\n  .tx-qh .range .tx-a-bg {\n      color: #34CFE6;\n      font-weight: bold; }\n  .typeLine {\n  width: 1px;\n  height: 13px;\n  margin-left: 10px;\n  margin-right: 10px;\n  display: block;\n  background: #739aa9; }\n  .subLoan {\n  cursor: pointer; }\n  .tx-b-bg {\n  color: #34CFE6;\n  font-weight: bold; }\n  ul.parent-ul {\n  list-style-type: none;\n  width: 90%;\n  padding-left: 12px;\n  margin-top: 0; }\n  ul.parent-ul li {\n    line-height: 29px;\n    padding: 7px;\n    padding-right: 0;\n    padding-left: 0;\n    margin-left: 0;\n    cursor: pointer; }\n  ul.parent-ul li div {\n      color: #333;\n      padding-left: 5px; }\n  ul.parent-ul li div:after {\n        font-family: \"iconfont\";\n        content: \"\\e629\";\n        display: inline-block;\n        float: right;\n        margin-right: 8px; }\n  ul.parent-ul li ul.children {\n      display: none; }\n  ul.parent-ul li.active div:after {\n      content: \"\\e8fb\"; }\n  ul.parent-ul li.active ul.children {\n      display: block;\n      list-style-type: none;\n      padding: 0; }\n  ul.parent-ul li.active ul.children li {\n        line-height: 15px;\n        padding-left: 15px;\n        margin-top: 7px;\n        position: relative; }\n  ul.parent-ul li.active ul.children li p {\n          display: inline-block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          padding: 0;\n          margin: 0;\n          height: 100%;\n          line-height: 13px;\n          width: 80%;\n          color: #666; }\n  ul.parent-ul li.active ul.children li .active2 {\n          display: block;\n          width: 8px;\n          height: 8px;\n          border-radius: 20px;\n          background-color: #ffcb05;\n          position: absolute;\n          top: 36%;\n          right: 12%; }\n  ul.parent-ul li.active ul.children li.group {\n          color: #a9a8a8;\n          padding-left: 5px; }\n  ul.parent-ul li.active ul.children li.num > span {\n          float: right;\n          margin-right: 10px;\n          color: #333; }\n  ul.parent-ul li.active ul.children li.no-num > p {\n          color: #9c9c9c; }\n  ul.parent-ul li.active ul.children li:not(.group).no-num:after {\n          font-family: \"iconfont\";\n          content: \"\\e61f\";\n          display: inline-block;\n          float: right;\n          margin-right: 8px;\n          font-size: 12px; }\n  ul.parent-ul li.active ul.children li:not(.group).active {\n          background-color: #34CFE6;\n          border-radius: 50px;\n          color: #fff; }\n  ul.parent-ul li.active ul.children li:not(.group).active > span {\n            color: #fff; }\n  ul.parent-ul li.active ul.children li:not(.group).active > p {\n          color: #fff; }\n  ul.parent-ul > li.active ul.children > li > span {\n  color: #fff; }\n  .pag {\n  text-align: center; }\n  .money-style {\n  padding-left: 50px; }\n  .xuhao {\n  width: 50px;\n  text-align: center; }\n  .table-defined {\n  background: red; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr {\n  height: 33px !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr > th {\n  padding: 0 !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-tfoot > tr > td {\n  padding-right: 0 !important; }\n  .linkcol {\n  color: #0094D2;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vb3duLW91ci1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHZpZXctcHJvZHVjdC1pbmZvcm1hdGlvblxcb3duLW91ci1wcm9kdWN0XFxvd24tb3VyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7RUFMeEI7SUFPUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsK0JBQStCLEVBQUE7RUFYdkM7O01BY1ksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtNQUNWLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsNENBQTRDO01BQzVDLGFBQWEsRUFBQTtFQXhCekI7O1FBMEJnQixjQUFjLEVBQUE7RUExQjlCOztVQTRCb0IsNEJBQTRCLEVBQUE7RUE1QmhEO01BaUNZLFdBQVc7TUFDWCxTQUFTLEVBQUE7RUFsQ3JCO01BcUNZLG1CQUFtQixFQUFBO0VBckMvQjtNQXdDWSxjQUFjO01BQ2QseUJBQXlCLEVBQUE7RUF6Q3JDO1FBMkNnQixjQUFjLEVBQUE7RUEzQzlCO1VBK0M0QixjQUFjLEVBQUE7RUFTMUM7RUFHWSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQixFQUFBO0VBTDdCO0VBUVksVUFBVSxFQUFBO0VBUnRCO0lBVWdCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFaakM7SUFlZ0IscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBaEJoQztNQW1Cb0IsaUJBQWlCLEVBQUE7RUFuQnJDO01Bc0JvQixjQUFjLEVBQUE7RUF0QmxDO0VBNEJRLFVBQVUsRUFBQTtFQTVCbEI7SUErQmdCLG1CQUFtQixFQUFBO0VBL0JuQztFQW9DUSxrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLFVBQVUsRUFBQTtFQUdkO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7RUFEdkI7SUFHUSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBUHZCO0lBVVEsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtFQVhwQjs7SUFzQlEscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBSXZCO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFZbkI7RUFDSSxvQ0FBb0MsRUFBQTtFQUd4QztFQUNJLDhCQUE4QixFQUFBO0VBR2xDO0VBQ0ksOEJBQThCO0VBQzlCLFVBQVU7RUFDVixrQ0FBa0MsRUFBQTtFQUh0QztJQUtRLHlCQUF5QixFQUFBO0VBSWpDO0VBQ0ksOEJBQThCO0VBQzlCLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFIbEI7SUFLUSxjQUFjLEVBQUE7RUFJdEI7RUFDSSw4QkFBOEIsRUFBQTtFQURsQztJQUdRLGNBQWMsRUFBQTtFQUlyQjtFQUNHLG9CQUFvQixFQUFBO0VBR3hCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTtFQUdiO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTtFQVBuQjtJQVNRLDBCQUEwQixFQUFBO0VBSWxDO0VBRVEsVUFBVSxFQUFBO0VBRmxCO0VBS1EsU0FBUyxFQUFBO0VBSWpCO0VBQ0ksMEJBQTBCLEVBQUE7RUFEOUI7SUFLWSx1QkFBdUI7SUFDdkIscUJBQXFCLEVBQUE7RUFOakM7TUFRZ0IsY0FBYyxFQUFBO0VBTTlCO0VBQ0ksc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxXQUFXLEVBQUE7RUFDWDtJQUZKO01BR1EsYUFBYSxFQUFBLEVBS3BCO0VBSEc7SUFMSjtNQU1RLGFBQWEsRUFBQSxFQUVwQjtFQUVEO0VBR1ksb0NBQW9DLEVBQUE7RUFIaEQ7RUFRWSxTQUFTLEVBQUE7RUFSckI7RUF5Q1EsOEJBQTZCLEVBQUE7RUF6Q3JDO0VBNENRLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTtFQUkzQjtFQUVRLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWEsRUFBQTtFQUxyQjtJQU9ZLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFaOUI7TUFjZ0Isa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0VBZm5DO01Ba0JnQixrQkFBa0IsRUFBQTtFQWxCbEM7UUFvQm9CLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGFBQWE7UUFDYixpQkFBaUIsRUFBQTtFQXhCckM7UUEyQm9CLFVBQVU7UUFDVixnQkFBZ0IsRUFBQTtFQTVCcEM7UUErQm9CLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCLEVBQUE7RUFqQ3BDO1VBbUN3QixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixtQkFBbUI7VUFDbkIsa0JBQWtCLEVBQUE7RUExQzFDO1VBNkN3QixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLHFCQUFxQixFQUFBO0VBL0M3QztRQW1Eb0IsV0FBVztRQUNYLFlBQVk7UUFDWixnQ0FBZ0M7UUFDaEMsYUFBYTtRQUNiLGlCQUFpQixFQUFBO0VBdkRyQztJQTREWSxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQS9ENUI7RUFtRVEsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZSxFQUFBO0VBdEV2QjtJQXdFWSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLCtCQUErQixFQUFBO0VBMUUzQztJQTZFWSxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7RUE5RS9CO01BZ0ZnQixrQ0FBa0M7TUFDbEMseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBcEYvQjtNQXVGZ0IsaUJBQWlCO01BQ2pCLFlBQVksRUFBQTtFQXhGNUI7O01BbUdnQixxQkFBcUI7TUFDckIsY0FBYztNQUNkLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUFNL0I7RUFHSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFHZjtFQUVRLGFBQWEsRUFBQTtFQUZyQjtFQU1ZLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7RUFYbkM7RUFjWSxhQUFhLEVBQUE7RUFLekI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7RUFFYjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVQvQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQUU3QjtJQWpCSjtNQW1CWSxZQUFZLEVBQUEsRUFDZjtFQXBCVDtJQXVCUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBRWQsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBaEN6QjtJQW1DUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtFQXhDdkI7SUEyQ1EsZ0JBQWU7SUFDZixjQUFjLEVBQUE7RUFHbEI7SUEvQ0o7TUFpRFksZUFBZSxFQUFBLEVBQ2xCO0VBK0RUO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFlbkI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBR25CO0VBQ0ksYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUFIZDtJQUtRLGFBQWEsRUFBQTtFQUxyQjtJQVFRLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0kseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUhuQjtJQUtRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQVJ2QjtNQVVZLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQUs3QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBSnRCO0lBTVEsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFUMUI7TUFXWSxjQUFjO01BQ2QsaUJBQWlCLEVBQUE7RUFaN0I7SUFnQlEsWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBakIzQjtNQW1CWSxpQkFBaUIsRUFBQTtFQW5CN0I7UUFxQmdCLGVBQWUsRUFBQTtFQXJCL0I7TUF5QlksY0FBYztNQUNkLGlCQUFpQixFQUFBO0VBSzdCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUpqQjtJQU1RLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBWHZCO01BYVksV0FBVztNQUNYLGlCQUFpQixFQUFBO0VBZDdCO1FBZ0JnQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osaUJBQWlCLEVBQUE7RUFwQmpDO01Bd0JZLGFBQWEsRUFBQTtFQXhCekI7TUE2Qm9CLGdCQUFnQixFQUFBO0VBN0JwQztNQWlDZ0IsY0FBYztNQUNkLHFCQUFxQjtNQUNyQixVQUFVLEVBQUE7RUFuQzFCO1FBcUNvQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQXhDdEM7VUEwQ3dCLHFCQUFxQjtVQUNyQixnQkFBZ0I7VUFDaEIsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixVQUFVO1VBQ1YsU0FBUztVQUNULFlBQVk7VUFDWixpQkFBaUI7VUFDakIsVUFBVTtVQUNWLFdBQVcsRUFBQTtFQW5EbkM7VUFzRHdCLGNBQWM7VUFDZCxVQUFVO1VBQ1YsV0FBVztVQUNYLG1CQUFtQjtVQUNuQix5QkFBeUI7VUFDekIsa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixVQUFVLEVBQUE7RUE3RGxDO1VBZ0V3QixjQUFjO1VBQ2QsaUJBQWlCLEVBQUE7RUFqRXpDO1VBb0V3QixZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLFdBQVcsRUFBQTtFQXRFbkM7VUF5RXdCLGNBQWMsRUFBQTtFQXpFdEM7VUE0RXdCLHVCQUF1QjtVQUN2QixnQkFBZ0I7VUFDaEIscUJBQXFCO1VBQ3JCLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsZUFBZSxFQUFBO0VBakZ2QztVQXVGd0IseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixXQUFXLEVBQUE7RUF6Rm5DO1lBNkY0QixXQUFXLEVBQUE7RUE3RnZDO1VBa0d3QixXQUFXLEVBQUE7RUFRbkM7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNJLGtCQUNKLEVBQUE7RUFFQTtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksZUFBZSxFQUFBO0VBSW5CO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxxQkFBcUIsRUFBQTtFQUl6QjtFQUNJLDJCQUEyQixFQUFBO0VBSS9CO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uL293bi1vdXItcHJvZHVjdC9vd24tb3VyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwLjVlbTtcclxuICAgIGEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMjJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgICAgICAuc2Vjb25kTSxcclxuICAgICAgICAudGhpcmRNIHtcclxuICAgICAgICAgICAgd2lkdGg6IDExN3B4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMi41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGhpcmRNIHtcclxuICAgICAgICAgICAgbGVmdDogMTE2cHg7XHJcbiAgICAgICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTlmN2Y4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIC5zZWNvbmRNIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLnNwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGlyZE0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS1nIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLnVpLWctMTEge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keXtcclxuICAgIGhlaWdodDogMzg1cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmRpYWxvZy1idG4ge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRpdEZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib3hTaGFkb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5ib2R5QmdDb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC43ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnNob3dTZWxlY3RlZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfSAvLyAuc2hvd1NlbGVjdGVkMSB7XHJcbiAgICAvLyAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAvLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICAgIHRvcDogLTMycHg7XHJcbiAgICAvLyB9XHJcbiAgICAuY2ssXHJcbiAgICAuZGsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWNvbmRNZW51IHtcclxuICAgIGNvbG9yOiAjNDI0MjQyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLy8gI2NrLFxyXG4vLyAjZGssXHJcbi8vICNsYyxcclxuLy8gI290aGVycXksXHJcbi8vICNkaixcclxuLy8gI290aGVycXkge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDQzcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtNDNweDtcclxuLy8gfVxyXG46aG9zdC9kZWVwLy50YWJsZUNvbnRlbnQxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udGFibGVDb250ZW50MiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPi50YWJsZVRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMyU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoLnRhYmxlQ29udGVudDEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoLnRhYmxlQ29udGVudDIge1xyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMSAhaW1wb3J0YW50O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLy5jb250YWluZXIgdGJvZHkgLnVpLXdpZGdldC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucG9zaXRpb24tYWJzb2x1dGUxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucGFkZGluZy10YiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW9yZVRoaXMge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVwb3NpdCB7XHJcbiAgICAudWktZy0zIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgLnVpLWNoa2JveC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm9vbGVhbmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50OyAvLyBiYWNrZ3JvdW5kOiAjM0IzQTNBICFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzNCM0EzQSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktaW5wdXR0ZXh0IHtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAxZW07XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgxcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gICAgLnRoZWFkIHtcclxuICAgICAgICB0ciB0ZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgIH0gLy8gdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDkpIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGQ6bnRoLWNoaWxkKDEwKSB7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIEBleHRlbmQgdGhlYWQ7XHJcbiAgICB9XHJcbiAgICB0Ym9keTpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWIhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGQge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IC8v5YWB6K645o2i6KGMXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm8taW5mby1wYWdlIHtcclxuICAgIC5hc3NldG1vZHVsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAubGlhYmlsaXR5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAudGFibGUtcGFkZGluZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hc3NldC1saWFiaWxpdHktdGFibGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmRhdGEtcm93LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhdGEtY29sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjElO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0YS1jb2wtb25lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10eXBlLWJnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNGNmZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEtY29sLW9uZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0YS1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbG93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ob2xkLXByb2R1Y3QtcGFnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1kZXRhaWwge1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAuYm9keUJnQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN2VtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3dTZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfSAvLyAuc2hvd1NlbGVjdGVkMSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgLy8gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgLy8gICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLy8gICAgIHRvcDogLTMycHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLmNrLFxyXG4gICAgICAgICAgICAuZGsge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxpLWJnIHtcclxuICAgIC8vIG1hcmdpbjogMCAtMTBweCAwIC01MHB4O1xyXG4gICAgLy8gcGFkZGluZzogN3B4IDIwcHggN3B4IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDVmYWZmO1xyXG59XHJcblxyXG4ubGktYmctYSB7XHJcbiAgICBjb2xvcjogIzNmZDJlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmltZ09yRm9udCB7XHJcbiAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfZGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2lnbkJ0bkNsaWNrIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsaWNrc3R5bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLnF1aWNrU2VhcmNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyLXRpdGxlLXRoZW1lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4ICFpbXBvcnRhbnQ7XHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTc7XHJcbiAgICAgICAgLy8gd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5hZHZhbmNle1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnByb0NvbG9ye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxJTtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIC5oZWFkZXItdGl0bGUtdGhlbWUge1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiA0MnB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTggIWltcG9ydGFudDtcclxuLy8gICAgIC5saW5lIHtcclxuLy8gICAgICAgICB3aWR0aDogM3B4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTlweDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4vLyAgICAgICAgIC5saW5lIHtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIC50ZXh0IHtcclxuLy8gICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4vLyAgICAgICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBjb2xvcjogIzAwNDI1NzsgLy8gd2lkdGg6IDgwcHg7XHJcbi8vICAgICAgICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5hZHZhbmNlIHtcclxuLy8gICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4vLyAgICAgICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMjgwcHgpIHtcclxuLy8gICAgICAgICAudGV4dCB7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHIudWktZGF0YXRhYmxlLWV2ZW57XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRye1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTggIWltcG9ydGFudDtcclxuLy8gfVxyXG4udHpiaWNvbi1maWx0ZXJzIHtcclxuICAgIGNvbG9yOiAjMzRDRkU2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udHpiaWNvbi1yZWNvcmQge1xyXG4gICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCAudWktY29sdW1uLXRpdGxle1xyXG4vLyAgICAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6aG9zdC9kZWVwLyAudWktcGFnaW5hdG9yIC51aS1wYWdpbmF0b3ItcGFnZXMgYS51aS1zdGF0ZS1hY3RpdmV7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjZmU2O1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvIC51aS1wYWdpbmF0b3J7XHJcbi8vICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7IFxyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjojZjBmMGYwICFpbXBvcnRhbnQ7IFxyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcclxuLy8gICAgIC8vIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG4udHpiaWNvbi1tb3JlIHtcclxuICAgIGNvbG9yOiAjMzRDRkU2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYXNzZXQtZmxvdy1kaXJlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAyMDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZ19hc3NldCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5iZy1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYjAxYTtcclxufVxyXG5cclxuLmJnLXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5M2YzMztcclxufVxyXG5cclxuLnR4LWFnbGluIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udHgtaGoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAudG90YWwyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM0Q0ZFNjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udHgtcWgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLnRvdGFsIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAubnVtIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYW5nZSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgLnR4LWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnR4LWEtYmcge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM0Q0ZFNjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udHlwZUxpbmUge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzM5YWE5O1xyXG59XHJcblxyXG4uc3ViTG9hbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50eC1iLWJnIHtcclxuICAgIGNvbG9yOiAjMzRDRkU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnVsLnBhcmVudC11bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGxpIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzOyAvLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImljb25mb250XCI7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTYyOVwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWwuY2hpbGRyZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZThmYlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmNoaWxkcmVuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E5YThhODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYubnVtPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYubm8tbnVtPnAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzljOWM5YztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoLmdyb3VwKS5uby1udW06YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJpY29uZm9udFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTYxZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoLmdyb3VwKS5hY3RpdmUgLy8gJjpub3QoLmdyb3VwKTpob3ZlciBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNENUZBRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMzRDRkU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDRkU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgLy8gJjpub3QoLmdyb3VwKS5uby1udW06YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+c3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguZ3JvdXApLmFjdGl2ZT5wIC8vICY6bm90KC5ncm91cCk6aG92ZXI+cCBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudWwucGFyZW50LXVsPmxpLmFjdGl2ZSB1bC5jaGlsZHJlbj5saT5zcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucGFnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ubW9uZXktc3R5bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ueHVoYW8ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1kZWZpbmVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5wcm8taGVhZGVyLXRhYmxlIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvLWhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvLWhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10Zm9vdD50cj50ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlua2NvbCB7XHJcbiAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OwnOurProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnOurProductComponent", function() { return OwnOurProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.constant */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { CardType,CardStat,QySignType, QyStatus, SignStatus, SignType, BussType, holdCktxInfoCode, CURRENCY, ALL_IDEN_TYPE, QianFaClass, BaoHanClass, StatusType, HeTongZhuangTai, TenClass, FlagSign, GuaranteeMode, SubBussType, holdLoanInfoCode, holdDepositInfoCode, holdDiscountInfoCode, holdMoneyManagementInfoCode, holdBankCardInfoCode, holdForfaitingInfoCode, holdTradeFinancingInfoCode } from '../../../constant/custView.codeValue';









var OwnOurProductComponent = /** @class */ (function () {
    function OwnOurProductComponent(router, httpService, route, commfunc, sanitizer, decimalPipe, httpService1) {
        var _this = this;
        this.router = router;
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.sanitizer = sanitizer;
        this.decimalPipe = decimalPipe;
        this.httpService1 = httpService1;
        this.sales = [1];
        this.salesBean = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_5__["SalesBean"]();
        this.custAsLnStatInfoBean = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_5__["CustAsLnStatInfoBean"]();
        this.display = false;
        this.display1 = false;
        this.display2 = false;
        this.isdetail = false;
        this.pageNum = 1;
        this.pageSize = 10;
        // 存款-页码
        this.holdDepositInfoFirst = 0;
        this.holdDepositInfopageSize = 10;
        this.holdDepositInfopageNum = 1;
        this.holdDepositInfototalNum = 0;
        // 贷款台账
        this.holdLoanInfoFirst = 0;
        this.holdLoanInfopageSize = 10;
        this.holdLoanInfopageNum = 1;
        this.holdLoanInfototalNum = 0;
        // 贴现
        this.holdDiscountInfoFirst = 0;
        this.holdDiscountInfopageSize = 10;
        this.holdDiscountInfopageNum = 1;
        this.holdDiscountInfototalNum = 0;
        // 承兑
        this.holdAcceptInfoFirst = 0;
        this.holdAcceptInfopageSize = 10;
        this.holdAcceptInfopageNum = 1;
        this.holdAcceptInfototalNum = 0;
        // 保函
        this.holdBackletterInfoFirst = 0;
        this.holdBackletterInfopageSize = 10;
        this.holdBackletterInfopageNum = 1;
        this.holdBackletterInfototalNum = 0;
        // 信用证
        this.holdCreditLetterInfoFirst = 0;
        this.holdCreditLetterInfopageSize = 10;
        this.holdCreditLetterInfopageNum = 1;
        this.holdCreditLetterInfototalNum = 0;
        // 理财
        this.holdMoneyManagementInfoFirst = 0;
        this.holdMoneyManagementInfopageSize = 10;
        this.holdMoneyManagementInfopageNum = 1;
        this.holdMoneyManagementInfototalNum = 0;
        // 信用卡
        this.holdBankCardInfoFirst = 0;
        this.holdBankCardInfopageSize = 10;
        this.holdBankCardInfopageNum = 1;
        this.holdBankCardInfototalNum = 0;
        // 签约类
        this.holdFreeBankInfoFirst = 0;
        this.holdFreeBankInfopageSize = 10;
        this.holdFreeBankInfopageNum = 1;
        this.holdFreeBankInfototalNum = 0;
        // 福费挺
        this.holdForfaitingInfoFirst = 0;
        this.holdForfaitingInfopageSize = 10;
        this.holdForfaitingInfopageNum = 1;
        this.holdForfaitingInfototalNum = 0;
        // 贸易融资
        this.holdTradeFinancingInfoFirst = 0;
        this.holdTradeFinancingInfopageSize = 10;
        this.holdTradeFinancingInfopageNum = 1;
        this.holdTradeFinancingInfototalNum = 0;
        // 出口贴现
        this.holdCktxInfoFirst = 0;
        this.holdCktxInfopageSize = 10;
        this.holdCktxInfopageNum = 1;
        this.holdCktxInfototalNum = 0;
        this.holdDepositInfo = []; //存款
        this.holdLoanInfo = []; //贷款
        this.holdDiscountInfo = []; //贴现
        this.holdAcceptInfo = []; //承兑
        this.holdBackletterInfo = []; //保函
        this.holdCreditLetterInfo = []; //信用证
        this.holdMoneyManagementInfo = []; //理财
        this.holdBankCardInfo = []; //银行卡
        this.holdFreeBankInfo = []; //签约服务
        this.holdElectronicContractInfo = []; //电子合同
        this.holdForfaitingInfo = []; //福费延
        this.holdTradeFinancingInfo = []; //贸易融资
        this.holdCktxInfo = []; //出口贴现
        this.holdDepositInfoToAll = false;
        this.holdLoanInfoToAll = false;
        this.holdDepositInfoCode = []; //存款字段
        this.holdDepositInfodataTable = [];
        this.holdLoanInfoCode = []; //贷款字段
        this.holdLoanInfodataTable = [];
        this.holdDiscountInfoCode = []; //贴现字段
        this.holdDiscountInfodataTable = [];
        this.holdMoneyManagementInfoCode = []; //理财字段
        this.holdMoneyManagementInfodataTable = [];
        this.holdBankCardInfoCode = []; //银行卡字段
        this.holdBankCardInfodataTable = [];
        this.holdForfaitingInfoCode = []; //福费延字段
        this.holdForfaitingInfodataTable = [];
        this.holdTradeFinancingInfoCode = []; //贸易融资字段
        this.holdTradeFinancingInfodataTable = [];
        this.holdCktxInfoCode = []; //出口贴现字段
        this.holdCktxInfodataTable = [];
        this.chooseDisplay = false; //模态框
        this.showCheckbox = 1; //用于展示字段复选框
        this.type = '单位:元';
        this.subBussTypeOptions = []; //子业务类型
        this.guaranteeModeOptions = []; //主担保方式
        this.flagSignOptions = []; //逾期标志
        this.tenClassOptions = []; //十级分类
        this.heTongOptions = []; //合同状态
        this.holdStatusType = []; //状态
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.baoHanClassOptions = []; //保函类型
        this.qianFaClassOptions = []; //签发类型
        this.allIdenTypeOptions = []; //证件类型
        this.currencyOptions = []; //币种 
        this.bussTypeOptions = []; //业务品种
        this.signTypeOptions = []; //签约方式
        this.signStatusOptions = []; //签约状态
        this.qySignTypeOptions = []; //签约类签约类型
        this.qyStatusOptions = []; //签约类签约状态
        this.cardTypeOptions = []; //卡类别
        this.cardStatOptions = []; //卡状态
        this.displayCd = false;
        this.holdDepositInfoClass = false; //存款类按钮样式控制
        this.dkClass = true; //贷款类样式控制
        this.holdLoanInfoClass = false; //贷款按钮样式控制
        this.holdDiscountInfoClass = false; //贴现按钮样式控制
        this.holdAcceptInfoClass = false; //承兑按钮样式控制
        this.holdBackletterInfoClass = false; //保函按钮样式控制  
        this.holdMoneyManagementInfoClass = false; //理财按钮样式控制
        this.holdFreeBankInfoClass = false; //签约服务类
        this.holdBankCardInfoClass = false; //信用卡
        this.intoAccountInfoClass = false; //账户分成
        this.gjywClass = true; //国际业务类
        this.productStatusOptions = []; //理财类产品状态
        this.msgs = [];
        this.showCreditCard = false; //信用卡交易明细
        this.showDeposit = false; //存款
        // 贷款账号
        this.loanNumInfo = [];
        this.loanNumInfoFirst = 0;
        this.loanNumInfopageSize = 10;
        this.loanNumInfopageNum = 1;
        this.loanNumInfototalNum = 0;
        this.qryRelationItems = []; //抵用券查询列表
        this.intoAccountInfo = []; //账户分成信息
        this.showContractSigning = false; //签约服务类-积分卡明细
        this.arrTemp1 = [];
        this.arrTemp2 = [];
        this.arrTemp3 = [];
        this.depositList = [
            { label: '账户基本信息', isCheck: false },
            { label: '归属信息', isCheck: false },
            { label: '日均', isCheck: false },
            { label: '积数', isCheck: false },
            { label: 'FTP', isCheck: false },
        ];
        this.arrBankTemp1 = [];
        this.arrBankTemp2 = [];
        this.arrBankTemp3 = [];
        this.holdBankCardList = [
            { label: '账户基本信息', isCheck: false },
            { label: '归属信息', isCheck: false },
            { label: '担保信息', isCheck: false },
            { label: 'FTP', isCheck: false },
        ];
        this.holdDepositInfoCodes = [[], [], [], [], []]; //存款字段所属的类
        this.holdBankCardInfoCodes = [[], [], [], []]; //信用卡字段所属的类
        this.showPage = '1';
        this.subShowPage = '';
        this.folder1Flag = true;
        this.subfolder1Flag = false;
        this.showCharts = 'B';
        this.showSubLoan = '1';
        this.otherProSign = '1201';
        this.tt = false;
        // 最高额合同
        this.maximumContractList = [];
        this.maximumContractTotal = 0;
        this.maximumContractPageSize = 10;
        this.maximumContractPageNum = 1;
        this.maximumContractFirst = 0;
        // 授信合同
        this.creditContractList = [];
        this.creditContractTotal = 0;
        this.creditContractPageSize = 10;
        this.creditContractPageNum = 1;
        this.creditContractFirst = 0;
        this.creditContractBussType = [];
        this.creditContractStatus = [];
        this.flowDisplay = false;
        this.arrLiuRu = [];
        this.arrLiuChu = [];
        this.arrLow = [];
        this.frozenValue = '300px';
        // 账户存款信息
        this.first = 0;
        this.creditRelationshipPageNum = 1;
        this.creditRelationshipPageSize = 10;
        this.creditRelationshipTotal = 0;
        this.creditRelationshipList = [];
        this.glckBool = false;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.codeVal();
        this.holdDepositInfoCode = this.code['holdDepositInfoCode']; //存款类表头字段
        this.creditContractBussType = this.code['CreditContractBussType'];
        this.holdLoanInfoCode = this.code['holdLoanInfoCode'];
        this.holdDiscountInfoCode = this.code['holdDiscountInfoCode'];
        this.holdMoneyManagementInfoCode = this.code['holdMoneyManagementInfoCode'];
        this.holdBankCardInfoCode = this.code['HoldBankCardInfoCode'];
        this.holdForfaitingInfoCode = this.code['holdForfaitingInfoCode'];
        this.holdTradeFinancingInfoCode = this.code['holdTradeFinancingInfoCode'];
        this.holdCktxInfoCode = this.code['holdCktxInfoCode'];
        this.subBussTypeOptions = this.code['SubBussType'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.flagSignOptions = this.code['FlagSign'];
        this.tenClassOptions = this.code['TenClass'];
        this.heTongOptions = this.code['HeTongZhuangTai'];
        this.holdStatusType = this.code['StatusType'];
        this.baoHanClassOptions = this.code['BaoHanClass'];
        this.qianFaClassOptions = this.code['QianFaClass'];
        this.allIdenTypeOptions = this.code['ALL_IDEN_TYPE'];
        this.currencyOptions = this.code['CURRENCY'];
        this.bussTypeOptions = this.code['BussType'];
        this.signTypeOptions = this.code['SignType'];
        this.signStatusOptions = this.code['SignStatus'];
        this.qySignTypeOptions = this.code['QySignType'];
        this.qyStatusOptions = this.code['QyStatus'];
        this.cardTypeOptions = this.code['CardType'];
        this.cardStatOptions = this.code['CardStat'];
        this.productStatusOptions = this.code['PRODUCT_STATUS'];
        this.holdintoAccountInfodataTable = this.code['holdintoAccountInfodataTable'];
        //-------------------------------------------------------上面是码值
        this.currencyOptions.splice(0, 1); //币种
        this.currencyOptions = this.currencyOptions;
        this.custNo = this.commfunc.getSessionData('custNo');
        if (!this.custName) {
            this.selectCustName();
        }
        // this.custNo='1000789055';
        this.holdDepositInfoCode.forEach(function (item) {
            item.isCheck = false;
            // if (item.value == "account") {
            //   item.isCheck = true;
            //   this.holdDepositInfodataTable.push(item)
            // }
            // if (item.value == "cardId") {
            //   item.isCheck = true;
            //   this.holdDepositInfodataTable.push(item)
            // }
            if (item.value == "status") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "currency") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "acctNum") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "depositPeriod") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "balance") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "openDate") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "closeDate") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "assitUserId") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "assitUserName") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "orgId") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "monthDailyAverage") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "lastMonthDailyAverage") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "yearDailyAverage") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "lastY_yearthDailyAverage") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "l6mAvgBal") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "availableCardinality") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            if (item.value == "lastAvailableCardinality") {
                item.isCheck = true;
                _this.holdDepositInfodataTable.push(item);
            }
            _this.arrTemp2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.holdDepositInfodataTable);
            switch (item.value) { //存款类分类
                case 'account':
                case 'cardId':
                case 'status':
                case 'keepFlag':
                case 'currency':
                case 'acctNum':
                case 'depositPeriod':
                case 'balance':
                case 'openDate':
                case 'closeDate':
                    {
                        _this.holdDepositInfoCodes[0].push(item);
                    }
                    break;
                case 'assitUserId':
                case 'assitUserName':
                case 'orgId':
                    {
                        _this.holdDepositInfoCodes[1].push(item);
                    }
                    break;
                case 'monthDailyAverage':
                case 'lastMonthDailyAverage':
                case 'yearDailyAverage':
                case 'lastY_yearthDailyAverage':
                case 'l6mAvgBal':
                    {
                        _this.holdDepositInfoCodes[2].push(item);
                    }
                    break;
                case 'availableCardinality':
                case 'lastAvailableCardinality':
                case 'yearAdditionalCardinality':
                case 'lastYearAdditionalCardinality':
                case 'contributionCardinalNum':
                    {
                        _this.holdDepositInfoCodes[3].push(item);
                    }
                    break;
                case 'monthFtp':
                case 'lastMonthFtp':
                case 'yearFtp':
                case 'lastYearFtp':
                case 'sixMonthFtp':
                case 'monthFtpDiscount':
                case 'lastMonthFtpDiscount':
                case 'yearFtpDiscount':
                case 'lastYearFtpDiscount':
                case 'sixMonthFtpDiscount':
                    {
                        _this.holdDepositInfoCodes[4].push(item);
                    }
                    break;
            }
        });
        // this.holdDepositInfoCode=Array.from(new Set(this.holdDepositInfoCode));
        this.holdLoanInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'operationVariety') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'subBusinessType') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'mainGuaranteeMode') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'startDate') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'endDate') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'loanAmount') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'loanBalance') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'normalRates') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'overdueRates') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'tenthLevelClassification') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'investigator') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
            if (item.value == 'holdingState') {
                item.isCheck = true;
                _this.holdLoanInfodataTable.push(item);
            }
        });
        // this.holdLoanInfoCode=Array.from(new Set(this.holdLoanInfoCode));
        this.holdDiscountInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'contractNum') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'iousNum') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'settlementAccount') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'dfno') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'faceAmount') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'issueDate') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'maturityDate') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'interestRates') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            if (item.value == 'monthFtp') {
                item.isCheck = true;
                _this.holdDiscountInfodataTable.push(item);
            }
            // if (item.value == 'holdingState') {
            //   item.isCheck = true;
            //   this.holdDiscountInfodataTable.push(item)
            // }
        });
        this.holdMoneyManagementInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'cardNum') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'orgId') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'productStartDate') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'productEndDate') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'startDate') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'endDate') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'subscriptionAmount') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'urrency') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'expectedYield') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'issue') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'productCode') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'prodName') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'productStatus') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'mainContact') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'openAccountOrg') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'mainContactOrg') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
            if (item.value == 'assId') {
                item.isCheck = true;
                _this.holdMoneyManagementInfodataTable.push(item);
            }
        });
        // this.holdMoneyManagementInfoCode=Array.from(new Set(this.holdMoneyManagementInfoCode));
        this.holdBankCardInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'cardNum') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'proudctName') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'cardStat') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'authCrdtLimit') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'odPrin') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'openCardDate') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'loanDateEnd') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'ovdueCd') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'ovdueAmt') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'ovdueTerm') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'teller') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'guarantor') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'ftpmProfitA') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            if (item.value == 'ftpyProfitA') {
                item.isCheck = true;
                _this.holdBankCardInfodataTable.push(item);
            }
            _this.arrBankTemp2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.holdBankCardInfodataTable);
            // 信用卡分类
            switch (item.value) {
                case 'cardNum': //卡号
                case 'proudctName': //产品名称
                case 'cardStat': //卡状态
                case 'authCrdtLimit': //授信额度
                case 'odPrin': //透支金额
                case 'openCardDate': //开卡日期
                case 'loanDateEnd': //到期日期
                case 'ovdueCd': //是否逾期
                case 'ovdueAmt': //逾期金额
                case 'ovdueTerm':
                    { //逾期期数
                        _this.holdBankCardInfoCodes[0].push(item); // 账户基本信息
                    }
                    break;
                case 'teller': //协储员
                case 'cardOwnerOrgId':
                    { //开卡机构
                        _this.holdBankCardInfoCodes[1].push(item); // 归属信息
                    }
                    break;
                case 'guarantor': //担保人客户号
                case 'guarantorName':
                    { //担保人名称
                        _this.holdBankCardInfoCodes[2].push(item); // 担保信息
                    }
                    break;
                case 'ftpmProfitP': //本月FTP（折前）
                case 'ftplMProfitP': //上月FTP（折前）
                case 'ftpyProfitP': //本年FTP（折前）
                case 'ftplyProfitP': //上年FTP（折前）
                case 'ftplM6ProfitP': //前推6个月（折前）
                case 'ftpmProfitA': //本月FTP（折后）
                case 'ftplmProfitA': //上月FTP（折后）
                case 'ftpyProfitA': //本年FTP（折后）
                case 'ftplyProfitA': //上年FTP（折后）
                case 'ftplM6ProfitA':
                    { //前推6个月（折后）
                        _this.holdBankCardInfoCodes[3].push(item); //FTP
                    }
                    break;
            }
        });
        // this.holdBankCardInfoCode=Array.from(new Set(this.holdBankCardInfoCode));
        this.holdForfaitingInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'contractNum') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'iousNum') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'settlementAccount') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'dfno') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'faceAmount') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'issueDate') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'maturityDate') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'interestRates') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'monthFtp') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
            if (item.value == 'operator') {
                item.isCheck = true;
                _this.holdForfaitingInfodataTable.push(item);
            }
        });
        // this.holdForfaitingInfoCode=Array.from(new Set(this.holdForfaitingInfoCode));
        this.holdTradeFinancingInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'contractNum') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'iousNum') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'operationVariety') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'mainGuaranteeMode') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'startLoanDate') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'endLoanDate') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'loanAmount') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'normalRates') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'overdueRates') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'urrency') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'loanBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'normalBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'attentionBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'secondaryBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'doubtfulBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'lossBal') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'monthFtp') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'lateFlag') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
            if (item.value == 'investigator') {
                item.isCheck = true;
                _this.holdTradeFinancingInfodataTable.push(item);
            }
        });
        // this.holdTradeFinancingInfoCode=Array.from(new Set(this.holdTradeFinancingInfoCode));
        this.holdCktxInfoCode.forEach(function (item) {
            item.isCheck = false;
            if (item.value == 'contractNum') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'iousNum') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'settlementAccount') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'dfno') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'faceAmount') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'issueDate') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'maturityDate') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'interestRates') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'monthFtp') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
            if (item.value == 'operator') {
                item.isCheck = true;
                _this.holdCktxInfodataTable.push(item);
            }
        });
        this.qryUserSettingInfo(''); //初始化-查询表头字段
    }
    OwnOurProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ulData = [
            {
                label: '持有我行产品', processCode: 'X_CUST_M_P007_P129',
                children: [
                    { label: '存款', processCode: 'X_CUST_M_P007_P129_P227', typeNum: '1' },
                    { label: '贷款', processCode: 'X_CUST_M_P007_P129_P228', typeNum: '2' },
                    { label: '理财', processCode: 'X_CUST_M_P007_P129_P229', typeNum: '3' },
                    { label: '签约类', processCode: 'X_CUST_M_P007_P129_P230', typeNum: '4' },
                    { label: '信用卡', processCode: 'X_CUST_M_P007_P129_P231', typeNum: '5' },
                    { label: '国际业务', processCode: 'X_CUST_M_P007_P129_P232', typeNum: '6' },
                    { label: '承兑', processCode: 'X_CUST_M_P007_P129_P228_P313', typeNum: '7' },
                    { label: '贴现', processCode: 'X_CUST_M_P007_P129_P228_P312', typeNum: '8' },
                    { label: '保函', processCode: 'X_CUST_M_P007_P129_P228_P314', typeNum: '9' }
                ]
            },
            { label: '正在申请产品', processCode: 'X_CUST_M_P007_P130', typeNum: '10' },
            { label: '他行产品', processCode: 'X_CUST_M_P007_P131', typeNum: '11' },
            { label: '推荐产品', processCode: 'X_CUST_M_P007_P132', typeNum: '12' },
        ];
        this.qryRelationItemsPageNum = 1;
        this.qryRelationItemsPageSize = 10;
        this.queryVoucher(); //抵用券查询
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (!this.custName) {
            this.selectCustName();
        }
        var this_item = {
            clientFlag: '0',
            clientNo: this.custNo,
        };
        this.httpService.BZ_0200300000101_LOAN(this_item).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalloanBalance = data.loanBalance;
            }
        }); //贷款总余额
        // 存款
        var param = {
            custNo: this.custNo,
            pageNum: this.holdDepositInfopageNum,
            pageSize: this.holdDepositInfopageSize,
        };
        this.httpService.selectCustAsLnChangeInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.prodBal == null) {
                        item.prodBal = '-';
                    }
                    else {
                        item.prodBal = (item.prodBal / 1).toFixed(2);
                    }
                    if (item.lastBal == null) {
                        item.lastBal = '-';
                    }
                    else {
                        item.lastBal = (item.lastBal / 1).toFixed(2);
                    }
                    if (item.monthEndBal == null) {
                        item.monthEndBal = '-';
                    }
                    else {
                        item.monthEndBal = (item.monthEndBal / 1).toFixed(2);
                    }
                    if (item.yearBeginBal == null) {
                        item.yearBeginBal = '-';
                    }
                    else {
                        item.yearBeginBal = (item.yearBeginBal / 1).toFixed(2);
                    }
                }
                data.infoList.forEach(function (item) {
                    if (item.prodType == '11') {
                        _this.salesBean.depositBal = item.prodBal;
                        _this.salesBean.depositBalCLast = item.lastBal;
                        _this.salesBean.depositBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.depositBalCYearBegin = item.yearBeginBal;
                    }
                    else if (item.prodType == '12') {
                        _this.salesBean.financingBal = item.prodBal;
                        _this.salesBean.financingBalCLast = item.lastBal;
                        _this.salesBean.financingBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.financingBalCYearBegin = item.yearBeginBal;
                    }
                    else if (item.prodType == '21') {
                        _this.salesBean.loanBal = item.prodBal;
                        _this.salesBean.loanBalCLast = item.lastBal;
                        _this.salesBean.loanBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.loanBalCYearBegin = item.yearBeginBal;
                    }
                    else if (item.prodType == '22') {
                        _this.salesBean.acceptanceBal = item.prodBal;
                        _this.salesBean.acceptanceBalCLast = item.lastBal;
                        _this.salesBean.acceptanceBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.acceptanceBalCYearBegin = item.yearBeginBal;
                    }
                    else if (item.prodType == '24') {
                        _this.salesBean.guaranteeBal = item.prodBal;
                        _this.salesBean.guaranteeBalCLast = item.lastBal;
                        _this.salesBean.guaranteeBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.guaranteeBalCYearBegin = item.yearBeginBal;
                    }
                    else if (item.prodType == '25') {
                        _this.salesBean.creditCardBal = item.prodBal;
                        _this.salesBean.creditCardBalCLast = item.lastBal;
                        _this.salesBean.creditCardBalCMonthEnd = item.monthEndBal;
                        _this.salesBean.creditCardBalCYearBegin = item.yearBeginBal;
                    }
                });
                _this.totalBalance = data.totalBalance;
                _this.totalAvailableCardinality = data.totalAvailableCardinality;
                _this.totalYearAdditionalCardinality = data.totalYearDailyAverage; //本年日均
                _this.totalContributionCardinalNumber = data.totalMonthDailyAverage; //本月日均
                // this.holdDepositInfopageNum = data.pageNum;
                // this.holdDepositInfopageSize = data.pageSize;
                _this.holdDepositInfototalNum = data.totalNum;
                _this.holdDepositInfo = data.prodInfoList == null ? [] : data.prodInfoList; //存款 
                if (!_this.holdDepositInfo || _this.holdDepositInfo.length == 0) {
                    _this.holdDepositInfoClass = true;
                }
                else {
                    _this.holdDepositInfoChange();
                }
                _this.showCircle(_this.holdDepositInfo, '1');
            }
            setTimeout(function () {
                _this.selectHoldLoanInit(); // 贷款台账
                _this.BZ_1100300000709_NEW_CXInit(); // 贷款账号
                _this.queryCreditContractInit(); // 授信合同
                _this.queryMaximumContractInit(); // 最高额合同
                _this.selectHoldForfaitingInfoTxInit(); // 贴现
                _this.BZ_0300300004417_LOANInit(); //承兑合同
                _this.selectHoldBackletterInfoInit(); //保函
                _this.selectHoldMoneyManagementInfoInit(); // 理财
                _this.holdBankCardInit(); // 信用卡
                _this.selectHoldAgrmtInfoInit(); // 签约服务
                _this.holdForfaitingInit(); // 福费廷
                _this.selectHoldTradeFinancingInfoInit(); // 贸易融资
                _this.selectHoldCktxInfoInit(); // 出口贴现
                _this.holdCreditLetterInfoInit(); // 信用证
            }, 1000);
        });
        this.showHideBrief();
        this.showEcharts('B');
    };
    OwnOurProductComponent.prototype.ngOnChanges = function () {
    };
    //
    OwnOurProductComponent.prototype.showHideBrief = function () {
        var s = window.location.href;
        this.parentLiClick(0);
        this.childLiClick(0, 0, this.ulData[0].children[0].typeNum, 'init');
        if (s.includes('pages/custom-view/view-product-information/own-our-product')) { //持有我行产品
            if (this.route.snapshot.params['numcheck']) {
                var typeNum = this.route.snapshot.params['numcheck'];
                this.towhichPage(typeNum);
            }
            else {
                this.showPage = '1';
                this.subShowPage = '101';
            }
        }
        else if (s.includes('pages/custom-view/view-product-information/appl-for-product')) { //正在申请产品
            this.showPage = '8';
        }
        else if (s.includes('pages/custom-view/view-product-information/other-bank-product')) { //他行产品
            this.showPage = '9';
        }
        else if (s.includes('pages/custom-view/view-product-information/recommended-product')) { //推荐产品
            this.showPage = '10';
        }
    };
    OwnOurProductComponent.prototype.toOwnOurProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    OwnOurProductComponent.prototype.toApplForProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/appl-for-product']);
    };
    OwnOurProductComponent.prototype.toOtherBankProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/other-bank-product']);
    };
    OwnOurProductComponent.prototype.toRecommendedProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/recommended-product']);
    };
    OwnOurProductComponent.prototype.tock = function () {
        if (document.getElementById('ck') != null) {
            var s = document.getElementById('ck').offsetTop;
            document.getElementById('ck').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toDk = function () {
        if (document.getElementById('dk') != null) {
            var s = document.getElementById('dk').offsetTop;
            document.getElementById('dk').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toLc = function () {
        if (document.getElementById('lc') != null) {
            var s = document.getElementById('lc').offsetTop;
            document.getElementById('lc').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toOtherQy = function () {
        if (document.getElementById('otherqy') != null) {
            var s = document.getElementById('otherqy').offsetTop;
            document.getElementById('otherqy').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toDj = function () {
        if (document.getElementById('dj') != null) {
            var s = document.getElementById('dj').offsetTop;
            document.getElementById('dj').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toMy = function () {
        if (document.getElementById('my') != null) {
            var s = document.getElementById('my').offsetTop;
            document.getElementById('my').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    OwnOurProductComponent.prototype.toAcSp = function () {
        if (document.getElementById('acSp') != null) {
            var s = document.getElementById('acSp').offsetTop;
            document.getElementById('acSp').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    // 资金流动详情
    OwnOurProductComponent.prototype.showDialogFlowDetail = function () {
        this.inValue = {
            custNo: this.custNo,
            demogPeriod: this.showCharts,
        };
        this.flowDisplay = true;
    };
    // 资金流动详情模态框关闭
    OwnOurProductComponent.prototype.flowDisplayCall = function () {
        this.flowDisplay = false;
    };
    OwnOurProductComponent.prototype.showDialog1 = function (data, index) {
        this.inValue = data;
        this.display = true;
        if (index == 1) {
            this.title = '账户交易信息查询';
        }
        else {
            this.inValue['account'] = data.acctNo;
            this.title = '贷款账户交易明细';
        }
        document.body.style.overflow = 'hidden';
    };
    OwnOurProductComponent.prototype.showDialog2 = function (data) {
        this.inValue = { duebillNo: data.iousNum, custNo: data.custNo, contractNum: data.contractNum, subBusinessType: data.subBusinessType, seqNo: data.seqNo };
        this.display1 = true;
        document.body.style.overflow = 'hidden';
    };
    OwnOurProductComponent.prototype.showDialog3 = function () {
        this.display2 = true;
    };
    // ------ 存款 -------
    OwnOurProductComponent.prototype.selectCustAsLnChangeInit = function () {
        this.holdDepositInfoFirst = 0;
        this.holdDepositInfopageNum = 1;
        this.holdDepositInfopageSize = 10;
        this.selectCustAsLnChange();
    };
    OwnOurProductComponent.prototype.selectCustAsLnChange = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdDepositInfopageNum,
            pageSize: this.holdDepositInfopageSize
        };
        this.httpService.selectCustAsLnChangeInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.glckBool = false;
                _this.totalBalance = data.totalBalance;
                _this.totalAvailableCardinality = data.totalAvailableCardinality;
                _this.totalYearAdditionalCardinality = data.totalYearDailyAverage; //本年日均
                _this.totalContributionCardinalNumber = data.totalMonthDailyAverage; //本月日均
                // this.holdDepositInfopageNum = data.pageNum;
                // this.holdDepositInfopageSize = data.pageSize;
                _this.holdDepositInfototalNum = data.totalNum;
                _this.holdDepositInfo = data.prodInfoList == null ? [] : data.prodInfoList; //存款
                _this.holdDepositInfoChange();
            }
            else {
                _this.glckBool = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.glckBool = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        }); //存款
    };
    OwnOurProductComponent.prototype.paginateHoldDepositInfo = function (event) {
        if (!this.glckBool) {
            this.glckBool = true;
            // 分页
            this.holdDepositInfopageSize = event.rows * 1;
            var currentPage = event.page + 1;
            this.holdDepositInfopageNum = currentPage;
            this.holdDepositInfoFirst = (currentPage - 1) * this.holdDepositInfopageSize;
            this.selectCustAsLnChange();
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '正在加载，请勿频繁操作！' });
        }
    };
    // ------ 贷款 -------
    OwnOurProductComponent.prototype.selectHoldLoanInit = function () {
        this.holdLoanInfoFirst = 0;
        this.holdLoanInfopageNum = 1;
        this.holdLoanInfopageSize = 10;
        this.selectHoldLoan();
    };
    OwnOurProductComponent.prototype.selectHoldLoan = function () {
        var _this = this;
        var paramDk = {
            custNo: this.custNo,
            pageNum: this.holdLoanInfopageNum,
            pageSize: this.holdLoanInfopageSize,
        };
        this.httpService.selectHoldLoanInfo(paramDk).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.holdLoanInfo = data.prodInfoList == null ? [] : data.prodInfoList; //贷款
                if (!_this.holdLoanInfo.length || _this.holdLoanInfo.length == 0) {
                    _this.holdLoanInfoClass = true;
                }
                else {
                    _this.holdLoanInfoClass = false;
                    _this.dkClass = false;
                }
                _this.holdLoanInfoChange();
                _this.showCircle(_this.holdLoanInfo, '2');
                _this.holdLoanInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldLoanInfo = function (event) {
        var _this = this;
        this.holdLoanInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdLoanInfopageNum = currentPage;
        this.holdLoanInfoFirst = (currentPage - 1) * this.holdLoanInfopageSize;
        this.selectHoldLoan();
        var this_item = {
            clientFlag: '0',
            clientNo: this.custNo,
        };
        this.httpService.BZ_0200300000101_LOAN(this_item).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalloanBalance = data.loanBalance;
            }
        });
    };
    // ------ 贷款账号信息 -------
    OwnOurProductComponent.prototype.BZ_1100300000709_NEW_CXInit = function () {
        this.loanNumInfoFirst = 0;
        this.loanNumInfopageNum = 1;
        this.loanNumInfopageSize = 10;
        this.BZ_1100300000709_NEW_CX();
    };
    OwnOurProductComponent.prototype.BZ_1100300000709_NEW_CX = function () {
        var _this = this;
        var temp = {
            operationType: '0',
            clientNo: this.custNo,
            pageNum: this.loanNumInfopageNum,
            pageSize: this.loanNumInfopageSize,
        };
        this.httpService.BZ_1100300000709_NEW_CX(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_1 = function (item) {
                    _this.httpService.queryOrgById({ orgId: item.openBranch }).subscribe(function (data) {
                        if (data.orgName && data.orgName != null) {
                            item.openBranch = data.orgName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
                if (data.infoList && data.infoList.length != 0) {
                    data.infoList.filter(function (item, i) {
                        if (item.closeDate == '1899-12-31') {
                            return item.closeDate = '----';
                        }
                        return item.closeDate;
                    });
                }
                _this.loanNumInfo = data.infoList;
                _this.loanNumInfototalNum = data.totalNum;
                _this.showCircle(_this.loanNumInfo, '2');
            }
        });
    };
    OwnOurProductComponent.prototype.paginateloanNumInfo = function (event) {
        this.loanNumInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.loanNumInfopageNum = currentPage;
        this.loanNumInfoFirst = (currentPage - 1) * this.loanNumInfopageSize;
        this.BZ_1100300000709_NEW_CX();
    };
    // -------贴现----------
    OwnOurProductComponent.prototype.selectHoldForfaitingInfoTxInit = function () {
        this.holdDiscountInfoFirst = 0;
        this.holdDiscountInfopageNum = 1;
        this.holdDiscountInfopageSize = 10;
        this.selectHoldForfaitingInfoTx();
    };
    OwnOurProductComponent.prototype.selectHoldForfaitingInfoTx = function () {
        var _this = this;
        var param_tx = {
            custNo: this.custNo,
            pageNum: this.holdDiscountInfopageNum,
            pageSize: this.holdDiscountInfopageSize,
            tranType: '0',
            billCategory: '1',
            bussType: '020001'
        };
        this.httpService.selectHoldForfaitingInfo(param_tx).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.holdDiscountInfo = data.prodInfoList == null ? [] : data.prodInfoList; //贴现
                if (!_this.holdDiscountInfo.length || _this.holdDiscountInfo.length == 0) {
                    _this.holdDiscountInfoClass = true;
                }
                else {
                    _this.holdDiscountInfoClass = false;
                    _this.dkClass = false;
                }
                _this.holdDiscountInfoChange();
                _this.showCircle(_this.holdDiscountInfo, '8');
                // this.holdDiscountInfopageNum = data.pageNum;
                // this.holdDiscountInfopageSize = data.pageSize;
                _this.holdDiscountInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldDiscountInfo = function (event) {
        this.holdDiscountInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdDiscountInfopageNum = currentPage;
        this.holdDiscountInfoFirst = (currentPage - 1) * this.holdDiscountInfopageSize;
        this.selectHoldForfaitingInfoTx();
    };
    // -------承兑---------
    OwnOurProductComponent.prototype.BZ_0300300004417_LOANInit = function () {
        this.holdAcceptInfoFirst = 0;
        this.holdAcceptInfopageNum = 1;
        this.holdAcceptInfopageSize = 10;
        this.BZ_0300300004417_LOANQuery();
    };
    OwnOurProductComponent.prototype.BZ_0300300004417_LOANQuery = function () {
        var _this = this;
        var param_cd = {
            clientNo: this.custNo,
            contractStatus: '0',
            pageNum: this.holdAcceptInfopageNum,
            pageSize: this.holdAcceptInfopageSize,
            clientFlag: '0',
        };
        this.httpService.BZ_0300300004417_LOAN(param_cd).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['appUserId'] }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                            item['appUserId'] = data.tellerName;
                        }
                    });
                });
                _this.holdAcceptInfo = data.infoList; //承兑合同
                if (!_this.holdAcceptInfo.length || _this.holdAcceptInfo.length == 0) {
                    _this.holdAcceptInfoClass = true;
                    // this.holdAcceptInfo = [];
                }
                else {
                    _this.holdAcceptInfoClass = false;
                    _this.dkClass = false;
                }
                _this.showCircle(_this.holdAcceptInfo, '7');
                // this.holdAcceptInfopageSize = data.pageSize;
                // this.holdAcceptInfopageNum = data.pageNum;
                _this.holdAcceptInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldAcceptInfo = function (event) {
        this.holdAcceptInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdAcceptInfopageNum = currentPage;
        this.holdAcceptInfoFirst = (currentPage - 1) * this.holdAcceptInfopageSize;
        this.BZ_0300300004417_LOANQuery();
    };
    // 保函
    OwnOurProductComponent.prototype.selectHoldBackletterInfoInit = function () {
        this.holdBackletterInfoFirst = 0;
        this.holdBackletterInfopageNum = 1;
        this.holdBackletterInfopageSize = 10;
        this.selectHoldBackletterInfo();
    };
    OwnOurProductComponent.prototype.selectHoldBackletterInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdBackletterInfopageNum,
            pageSize: this.holdBackletterInfopageSize,
        };
        this.httpService.selectHoldBackletterInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.prodInfoList.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['operator'] }).subscribe(function (data) {
                        item['operator'] = data.tellerName;
                    });
                });
                _this.holdBackletterInfo = data.prodInfoList == null ? [] : data.prodInfoList; //保函
                if (!_this.holdBackletterInfo.length || _this.holdBackletterInfo.length == 0) {
                    _this.holdBackletterInfoClass = true;
                }
                else {
                    _this.holdBackletterInfoClass = false;
                    _this.dkClass = false;
                }
                // this.holdBackletterInfopageSize = data.pageSize;
                // this.holdBackletterInfopageNum = data.pageNum;
                _this.holdBackletterInfototalNum = data.totalNum;
                _this.showCircle(_this.holdBackletterInfo, '9');
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldBackletterInfo = function (event) {
        this.holdBackletterInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdBackletterInfopageNum = currentPage;
        this.holdBackletterInfoFirst = (currentPage - 1) * this.holdBackletterInfopageSize;
        this.selectHoldBackletterInfo();
    };
    // -----信用证-----
    OwnOurProductComponent.prototype.holdCreditLetterInfoInit = function () {
        this.holdCreditLetterInfoFirst = 0;
        this.holdCreditLetterInfopageNum = 1;
        this.holdCreditLetterInfopageSize = 10;
        this.holdCreditLetterInfoQuery();
    };
    OwnOurProductComponent.prototype.holdCreditLetterInfoQuery = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdCreditLetterInfopageNum,
            pageSize: this.holdCreditLetterInfopageSize,
        };
        this.httpService.selectHoldCreditLetterInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.prodInfoList.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['investigator'] }).subscribe(function (data) {
                        item['investigator'] = data.tellerName;
                    });
                });
                _this.holdCreditLetterInfo = data.prodInfoList == null ? [] : data.prodInfoList; //信用证
                // this.holdCreditLetterInfopageSize = data.pageSize;
                // this.holdCreditLetterInfopageNum = data.pageNum;
                _this.holdCreditLetterInfototalNum = data.totalNum;
                _this.showCircle(_this.holdCreditLetterInfo, '6');
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldCreditLetterInfo = function (event) {
        this.holdCreditLetterInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdCreditLetterInfopageNum = currentPage;
        this.holdCreditLetterInfoFirst = (currentPage - 1) * this.holdCreditLetterInfopageSize;
        this.holdCreditLetterInfoQuery();
    };
    // -------理财--------
    OwnOurProductComponent.prototype.paginateHoldMoneyManagementInfo = function (event) {
        this.holdMoneyManagementInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdMoneyManagementInfopageNum = currentPage;
        this.holdMoneyManagementInfoFirst = (currentPage - 1) * this.holdMoneyManagementInfopageSize;
        this.selectHoldMoneyInfo();
    };
    // -------信用卡-------
    OwnOurProductComponent.prototype.holdBankCardInit = function () {
        this.holdBankCardInfoFirst = 0;
        this.holdBankCardInfopageSize = 10;
        this.holdBankCardInfopageNum = 1;
        this.holdBankCard();
    };
    OwnOurProductComponent.prototype.holdBankCard = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdBankCardInfopageNum,
            pageSize: this.holdBankCardInfopageSize,
        };
        this.httpService.selectCecardGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_2 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.cardOwnerOrgId }).subscribe(function (data) {
                        if (data.orgName && data.orgName != null) {
                            item.cardOwnerOrgId = data.orgName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_2(item);
                }
                _this.holdBankCardInfo = data.infoList == null ? [] : data.infoList;
                _this.holdBankCardInfo.forEach(function (element, i) {
                    if (element.guaranteeType == '101') { //担保方式为保证
                        if (!element.guarantor || element.guarantor == '') {
                            delete _this.holdBankCardInfo[i].guarantor;
                        }
                    }
                });
                if (!_this.holdBankCardInfo.length || _this.holdBankCardInfo.length == 0) {
                    _this.holdBankCardInfoClass = true;
                }
                _this.showCircle(_this.holdBankCardInfo, '5');
                //信用卡
                // this.holdBankCardInfoChange();
                // this.holdBankCardInfopageSize = data.pageSize;
                // this.holdBankCardInfopageNum = data.pageNum;
                _this.holdBankCardInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldBankCardInfo = function (event) {
        this.holdBankCardInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdBankCardInfopageNum = currentPage;
        this.holdBankCardInfoFirst = (currentPage - 1) * this.holdBankCardInfopageSize;
        this.holdBankCard();
    };
    // ------签约类-------
    OwnOurProductComponent.prototype.selectHoldAgrmtInfoInit = function () {
        this.holdFreeBankInfoFirst = 0;
        this.holdFreeBankInfopageSize = 10;
        this.holdFreeBankInfopageNum = 1;
        this.selectHoldAgrmtInfo();
    };
    OwnOurProductComponent.prototype.selectHoldAgrmtInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdFreeBankInfopageNum,
            pageSize: this.holdFreeBankInfopageSize,
        };
        this.httpService.selectHoldAgrmtInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['marketPers'] }).subscribe(function (data) {
                        item['marketPers'] = data.tellerName;
                    });
                    _this.httpService.queryOrgById({ orgId: item.belongOrg }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.belongOrg = data.orgName;
                        }
                    });
                });
                _this.holdFreeBankInfo = data.infoList; //签约服务
                if (_this.holdFreeBankInfo[0].signType == '04') {
                    _this.isdetail = true;
                }
                else {
                    _this.isdetail = false;
                }
                if (!_this.holdFreeBankInfo.length || _this.holdFreeBankInfo.length == 0) {
                    _this.holdFreeBankInfoClass = true;
                }
                _this.showCircle(_this.holdFreeBankInfo, '4');
                // this.holdFreeBankInfopageSize = data.pageSize;
                // this.holdFreeBankInfopageNum = data.pageNum;
                _this.holdFreeBankInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldFreeBankInfo = function (event) {
        this.holdFreeBankInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdFreeBankInfopageNum = currentPage;
        this.holdFreeBankInfoFirst = (currentPage - 1) * this.holdFreeBankInfopageSize;
        this.selectHoldAgrmtInfo();
    };
    OwnOurProductComponent.prototype.paginateHoldElectronicContractInfo = function (event) {
        var _this = this;
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectHoldElectronicContractInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.prodInfoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.managementInstitution }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.managementInstitution = data.orgName;
                        }
                    });
                });
                _this.holdElectronicContractInfo = data.prodInfoList; //电子合同
                _this.holdElectronicContractInfopageSize = data.pageSize;
                _this.holdElectronicContractInfopageNum = data.pageNum;
                _this.holdElectronicContractInfototalNum = data.totalNum;
            }
        }); //电子合同
    };
    // ------福费挺------
    OwnOurProductComponent.prototype.holdForfaitingInit = function () {
        this.holdForfaitingInfoFirst = 0;
        this.holdForfaitingInfopageSize = 10;
        this.holdForfaitingInfopageNum = 1;
        this.holdForfaitingInfoQuery();
    };
    OwnOurProductComponent.prototype.holdForfaitingInfoQuery = function () {
        var _this = this;
        var param_fft = {
            custNo: this.custNo,
            pageNum: this.holdForfaitingInfopageNum,
            pageSize: this.holdForfaitingInfopageSize,
            tranType: '0',
            billCategory: '',
            bussType: '060012'
        };
        this.httpService.selectHoldForfaitingInfo(param_fft).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.holdForfaitingInfo = data.prodInfoList == null ? [] : data.prodInfoList; //福费挺
                if (_this.holdForfaitingInfo.length && _this.holdForfaitingInfo.length != 0) {
                    _this.gjywClass = false;
                }
                _this.holdForfaitingInfoChange();
                _this.showCircle(_this.holdForfaitingInfo, '6');
                // this.holdForfaitingInfopageSize = data.pageSize;
                // this.holdForfaitingInfopageNum = data.pageNum;
                _this.holdForfaitingInfototalNum = data.totalNum;
            }
        }); //福费挺
    };
    OwnOurProductComponent.prototype.paginateHoldForfaitingInfo = function (event) {
        this.holdForfaitingInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdForfaitingInfopageNum = currentPage;
        this.holdForfaitingInfoFirst = (currentPage - 1) * this.holdForfaitingInfopageSize;
        this.holdForfaitingInfoQuery();
    };
    // --------贸易融资--------
    OwnOurProductComponent.prototype.selectHoldTradeFinancingInfoInit = function () {
        this.holdTradeFinancingInfoFirst = 0;
        this.holdTradeFinancingInfopageSize = 10;
        this.holdTradeFinancingInfopageNum = 1;
        this.selectHoldTradeFinancingInfo();
    };
    OwnOurProductComponent.prototype.selectHoldTradeFinancingInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.holdTradeFinancingInfopageNum,
            pageSize: this.holdTradeFinancingInfopageSize,
        };
        this.httpService.selectHoldTradeFinancingInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.holdTradeFinancingInfo = data.prodInfoList == null ? [] : data.prodInfoList; //贸易融资
                if (_this.holdTradeFinancingInfo.length && _this.holdTradeFinancingInfo.length != 0) {
                    _this.gjywClass = false;
                }
                _this.holdTradeFinancingInfoChange();
                _this.showCircle(_this.holdTradeFinancingInfo, '6');
                // this.holdTradeFinancingInfopageSize = data.pageSize;
                // this.holdTradeFinancingInfopageNum = data.pageNum;
                _this.holdTradeFinancingInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldTradeFinancingInfo = function (event) {
        this.holdTradeFinancingInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdTradeFinancingInfopageNum = currentPage;
        this.holdTradeFinancingInfoFirst = (currentPage - 1) * this.holdTradeFinancingInfopageSize;
        this.selectHoldTradeFinancingInfo();
    };
    // -------出口贴现---------
    OwnOurProductComponent.prototype.selectHoldCktxInfoInit = function () {
        this.holdCktxInfoFirst = 0;
        this.holdCktxInfopageSize = 10;
        this.holdCktxInfopageNum = 1;
        this.selectHoldCktxInfo();
    };
    OwnOurProductComponent.prototype.selectHoldCktxInfo = function () {
        var _this = this;
        var param_cktx = {
            custNo: this.custNo,
            pageNum: this.holdCktxInfopageNum,
            pageSize: this.holdCktxInfopageSize,
            tranType: '0',
            billCategory: '',
            bussType: '060010'
        };
        this.httpService.selectHoldForfaitingInfo(param_cktx).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.holdCktxInfo = data.prodInfoList == null ? [] : data.prodInfoList;
                if (_this.holdCktxInfo.length && _this.holdCktxInfo.length != 0) {
                    _this.gjywClass = false;
                }
                _this.holdCktxInfoChange();
                _this.showCircle(_this.holdCktxInfo, '6');
                // this.holdCktxInfopageNum = data.pageNum;
                // this.holdCktxInfopageSize = data.pageSize;
                _this.holdCktxInfototalNum = data.totalNum;
            }
        });
    };
    OwnOurProductComponent.prototype.paginateHoldCktxInfo = function (event) {
        this.holdCktxInfopageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.holdCktxInfototalNum = currentPage;
        this.holdCktxInfoFirst = (currentPage - 1) * this.holdCktxInfopageSize;
        this.selectHoldCktxInfo();
    };
    //签约服务类详情
    OwnOurProductComponent.prototype.detail = function (col) {
        this.showContractSigning = true;
        this.scorecardValue = col;
    };
    //选择字段
    OwnOurProductComponent.prototype.checkAll = function (data) {
        this.showCheckbox = data;
        this.chooseDisplay = !this.chooseDisplay;
        document.body.style.overflow = 'hidden';
        if (data == 1) { //存款
            this.qryUserSettingInfo('');
        }
        else if (data == 5) { // 信用卡
            this.qryUserSettingInfo('');
        }
    };
    //模态框-单个复选框
    OwnOurProductComponent.prototype.doSelect = function (data, param, ind) {
        var _this = this;
        if (param == 1) { //存款
            if (data.isCheck) {
                this.arrTemp2.push(data);
                this.categoryEcho();
            }
            else {
                this.arrTemp2 = this.arrTemp2.filter(function (item) {
                    return item.value != data.value;
                });
                this.depositList[ind].isCheck = false;
            }
        }
        else if (param == 2) {
            if (data.isCheck) {
                this.holdLoanInfodataTable.push(data);
            }
            else {
                this.holdLoanInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdLoanInfodataTable.splice(i, 1);
                    }
                });
            }
        }
        else if (param == 3) {
            if (data.isCheck) {
                this.holdDiscountInfodataTable.push(data);
            }
            else {
                this.holdDiscountInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdDiscountInfodataTable.splice(i, 1);
                    }
                });
            }
        }
        else if (param == 4) {
            if (data.isCheck) {
                this.holdMoneyManagementInfodataTable.push(data);
            }
            else {
                this.holdMoneyManagementInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdMoneyManagementInfodataTable.splice(i, 1);
                    }
                });
            }
        }
        else if (param == 5) {
            if (data.isCheck) {
                this.arrBankTemp2.push(data);
                this.categoryBankEcho();
            }
            else {
                this.arrBankTemp2 = this.arrBankTemp2.filter(function (item) {
                    return item.value != data.value;
                });
                this.holdBankCardList[ind].isCheck = false;
            }
        }
        else if (param == 6) {
            if (data.isCheck) {
                this.holdForfaitingInfodataTable.push(data);
            }
            else {
                this.holdForfaitingInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdForfaitingInfodataTable.splice(i, 1);
                    }
                });
            }
        }
        else if (param == 7) {
            if (data.isCheck) {
                this.holdTradeFinancingInfodataTable.push(data);
            }
            else {
                this.holdTradeFinancingInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdTradeFinancingInfodataTable.splice(i, 1);
                    }
                });
            }
        }
        else if (param == 8) {
            if (data.isCheck) {
                this.holdCktxInfodataTable.push(data);
            }
            else {
                this.holdCktxInfodataTable.forEach(function (item, i) {
                    if (item.value == data.value) {
                        _this.holdCktxInfodataTable.splice(i, 1);
                    }
                });
            }
        }
    };
    //存款大类的选择
    OwnOurProductComponent.prototype.doAllSelect = function (item, index) {
        var _this = this;
        this.flag = item.isCheck;
        this.arrTemp1 = []; //当前大类
        this.arrTemp3 = []; //初始小类
        this.holdDepositInfoCodes[index].forEach(function (element, i) {
            element.isCheck = _this.flag;
            _this.arrTemp1.push(element);
        });
        this.arrTemp2.forEach(function (element) {
            delete element.isCheck;
            element.isCheck = _this.flag;
            _this.arrTemp3.push(element);
        });
        this.arrTemp1.forEach(function (element, i) {
            if (_this.flag) { //该类为true
                if (JSON.stringify(_this.arrTemp3).indexOf(JSON.stringify(element)) == -1) { //检验小类字段不包含该类里面的字段
                    _this.arrTemp2.push(element);
                }
            }
            else {
                _this.arrTemp2 = _this.arrTemp2.filter(function (item) {
                    return item.value != element.value;
                });
            }
        });
        this.arrTemp2.forEach(function (element, i) {
            _this.arrTemp2[i].isCheck = true;
        });
    };
    // 信用卡选择大类
    OwnOurProductComponent.prototype.selectBigItem = function (item, index) {
        var _this = this;
        this.flag = item.isCheck;
        this.arrBankTemp1 = []; //当前大类
        this.arrBankTemp3 = []; //初始小类
        this.holdBankCardInfoCodes[index].forEach(function (element, i) {
            element.isCheck = _this.flag;
            _this.arrBankTemp1.push(element);
        });
        this.arrBankTemp2.forEach(function (element) {
            delete element.isCheck;
            element.isCheck = _this.flag;
            _this.arrBankTemp3.push(element);
        });
        this.arrBankTemp1.forEach(function (element, i) {
            if (_this.flag) { //该类为true
                if (JSON.stringify(_this.arrBankTemp3).indexOf(JSON.stringify(element)) == -1) { //检验小类字段不包含该类里面的字段
                    _this.arrBankTemp2.push(element);
                }
            }
            else {
                _this.arrBankTemp2 = _this.arrBankTemp2.filter(function (item) {
                    return item.value != element.value;
                });
            }
        });
        this.arrBankTemp2.forEach(function (element, i) {
            _this.arrBankTemp2[i].isCheck = true;
        });
    };
    OwnOurProductComponent.prototype.addCall = function (event) {
        this.display = false;
        this.display1 = false;
        this.displayCd = false;
        document.body.style.overflow = 'auto';
    };
    //存款类转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdDepositInfoChange = function () {
        for (var _i = 0, _a = this.holdDepositInfo; _i < _a.length; _i++) {
            var item = _a[_i];
            item['balance'] = this.decimalPipe.transform(item['balance'], '1.2-2');
            item['monthDailyAverage'] = this.decimalPipe.transform(item['monthDailyAverage'], '1.2-2');
            item['lastMonthDailyAverage'] = this.decimalPipe.transform(item['lastMonthDailyAverage'], '1.2-2');
            item['yearDailyAverage'] = this.decimalPipe.transform(item['yearDailyAverage'], '1.2-2');
            item['lastY_yearthDailyAverage'] = this.decimalPipe.transform(item['lastY_yearthDailyAverage'], '1.2-2');
            item['l6mAvgBal'] = this.decimalPipe.transform(item['l6mAvgBal'], '1.2-2');
            item['monthFtp'] = this.decimalPipe.transform(item['monthFtp'], '1.2-2');
            item['lastMonthFtp'] = this.decimalPipe.transform(item['lastMonthFtp'], '1.2-2');
            item['yearFtp'] = this.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = this.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = this.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = this.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = this.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = this.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = this.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = this.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
            // this.httpService.queryTellerById({ tellerId: item['operator'] }).subscribe(data => {
            //   item['operator'] = data.tellerName;
            // });
            item['openDate'] = this.tranDate(item['openDate']);
            item['closeDate'] = this.tranDate(item['closeDate']);
        }
    };
    //贷款类转码或转金额保留两位小数
    OwnOurProductComponent.prototype.holdLoanInfoChange = function () {
        var _this = this;
        var _loop_3 = function (i) {
            this_1.holdLoanInfo[i]['subBusinessType'] = this_1.codeValue(this_1.holdLoanInfo[i]['subBusinessType'], this_1.subBussTypeOptions);
            this_1.holdLoanInfo[i]['holdingState'] = this_1.codeValue(this_1.holdLoanInfo[i]['holdingState'], this_1.heTongOptions);
            this_1.holdLoanInfo[i]['dueFlag'] = this_1.codeValue(this_1.holdLoanInfo[i]['dueFlag'], this_1.flagSignOptions);
            this_1.holdLoanInfo[i]['tenthLevelClassification'] = this_1.codeValue(this_1.holdLoanInfo[i]['tenthLevelClassification'], this_1.tenClassOptions);
            this_1.holdLoanInfo[i]['mainGuaranteeMode'] = this_1.codeValue(this_1.holdLoanInfo[i]['mainGuaranteeMode'], this_1.guaranteeModeOptions);
            this_1.holdLoanInfo[i]['normalRates'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['normalRates'] / 1.2, '1.2-2');
            this_1.holdLoanInfo[i]['overdueRates'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['overdueRates'] / 1.2, '1.2-2');
            this_1.holdLoanInfo[i]['loanAmount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['loanAmount'], '1.2-2');
            this_1.holdLoanInfo[i]['loanBalance'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['loanBalance'], '1.2-2');
            this_1.holdLoanInfo[i]['normalBal'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['normalBal'], '1.2-2');
            this_1.holdLoanInfo[i]['keepBal'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['keepBal'], '1.2-2');
            this_1.holdLoanInfo[i]['secondBal'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['secondBal'], '1.2-2');
            this_1.holdLoanInfo[i]['questionBal'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['questionBal'], '1.2-2');
            this_1.holdLoanInfo[i]['lossBal'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['lossBal'], '1.2-2');
            this_1.holdLoanInfo[i]['monthFtp'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['monthFtp'], '1.2-2');
            this_1.holdLoanInfo[i]['lastMonthFtp'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['lastMonthFtp'], '1.2-2');
            this_1.holdLoanInfo[i]['yearFtp'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['yearFtp'], '1.2-2');
            this_1.holdLoanInfo[i]['lastYearFtp'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['lastYearFtp'], '1.2-2');
            this_1.holdLoanInfo[i]['sixMonthFtp'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['sixMonthFtp'], '1.2-2');
            this_1.holdLoanInfo[i]['monthFtpDiscount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['monthFtpDiscount'], '1.2-2');
            this_1.holdLoanInfo[i]['lastMonthFtpDiscount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['lastMonthFtpDiscount'], '1.2-2');
            this_1.holdLoanInfo[i]['yearFtpDiscount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['yearFtpDiscount'], '1.2-2');
            this_1.holdLoanInfo[i]['lastYearFtpDiscount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['lastYearFtpDiscount'], '1.2-2');
            this_1.holdLoanInfo[i]['sixMonthFtpDiscount'] = this_1.decimalPipe.transform(this_1.holdLoanInfo[i]['sixMonthFtpDiscount'], '1.2-2');
            this_1.httpService.queryTellerById({ tellerId: this_1.holdLoanInfo[i]['investigator'] }).subscribe(function (data) {
                _this.holdLoanInfo[i]['investigator'] = data.tellerName;
            });
            this_1.holdLoanInfo[i]['startDate'] = this_1.tranDate(this_1.holdLoanInfo[i]['startDate']);
            this_1.holdLoanInfo[i]['endDate'] = this_1.tranDate(this_1.holdLoanInfo[i]['endDate']);
        };
        var this_1 = this;
        for (var i = 0; i < this.holdLoanInfo.length; i++) {
            _loop_3(i);
        }
    };
    //贴现转码或转金额保留两位小数
    OwnOurProductComponent.prototype.holdDiscountInfoChange = function () {
        var _loop_4 = function (item) {
            item['faceAmount'] = this_2.decimalPipe.transform(item['faceAmount'], '1.2-2');
            item['interestRates'] = this_2.decimalPipe.transform(item['interestRates'] / 1.2, '1.2-2');
            item['monthFtp'] = this_2.decimalPipe.transform(item['monthFtp'], '1.2-2');
            item['lastMonthFtp'] = this_2.decimalPipe.transform(item['lastMonthFtp'], '1.2-2');
            item['yearFtp'] = this_2.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = this_2.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = this_2.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = this_2.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = this_2.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = this_2.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = this_2.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = this_2.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
            this_2.httpService.queryTellerById({ tellerId: item['operator'] }).subscribe(function (data) {
                if (data.tellerName != null) {
                    item['operator'] = data.tellerName;
                }
            });
            item['issueDate'] = this_2.tranDate(item['issueDate']);
            item['maturityDate'] = this_2.tranDate(item['maturityDate']);
            // item['holdingState'] = this.codeValue(item['holdingState'], this.heTongOptions);
        };
        var this_2 = this;
        for (var _i = 0, _a = this.holdDiscountInfo; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_4(item);
        }
    };
    //理财转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdMoneyManagementInfoChange = function () {
        var _this = this;
        this.holdMoneyManagementInfo.forEach(function (item) {
            item['productStartDate'] = _this.tranDate(item['productStartDate']);
            item['productEndDate'] = _this.tranDate(item['productEndDate']);
            item['startDate'] = _this.tranDate(item['startDate']);
            item['endDate'] = _this.tranDate(item['endDate']);
            item['subscriptionAmount'] = _this.decimalPipe.transform(item['subscriptionAmount'], '1.2-2');
            item['productStatus'] = _this.codeValue(item['productStatus'], _this.productStatusOptions);
        });
    };
    //银行卡转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdBankCardInfoChange = function () {
        var _this = this;
        this.holdBankCardInfo.forEach(function (item) {
            item['guarantorIdType'] = _this.codeValue(item['guarantorIdType'], _this.allIdenTypeOptions);
            item['openCardDate'] = _this.tranDate(item['openCardDate']);
            item['creditLimit'] = _this.decimalPipe.transform(item['creditLimit'], '1.2-2');
            item['overdueAmount'] = _this.decimalPipe.transform(item['overdueAmount'], '1.2-2');
            item['overdraftAmount'] = _this.decimalPipe.transform(item['overdraftAmount'], '1.2-2');
            item['monthFtp'] = _this.decimalPipe.transform(item['monthFtp'], '1.2-2');
            item['yearFtp'] = _this.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = _this.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = _this.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = _this.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = _this.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = _this.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = _this.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = _this.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
        });
    };
    //福费挺转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdForfaitingInfoChange = function () {
        var _this = this;
        this.holdForfaitingInfo.forEach(function (item) {
            item['faceAmount'] = _this.decimalPipe.transform(item['faceAmount'], '1.2-2');
            item['issueDate'] = _this.tranDate(item['issueDate']);
            item['maturityDate'] = _this.tranDate(item['maturityDate']);
            item['interestRates'] = _this.decimalPipe.transform(item['interestRates'] / 1.2, '1.2-2');
            item['monthFtp'] = _this.decimalPipe.transform(item['monthFtp'], '1.2-2');
            _this.httpService.queryTellerById({ tellerId: item['operator'] }).subscribe(function (data) {
                item['operator'] = data.tellerName;
            });
            item['yearFtp'] = _this.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = _this.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = _this.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = _this.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = _this.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = _this.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = _this.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = _this.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
        });
    };
    //贸易融资转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdTradeFinancingInfoChange = function () {
        var _this = this;
        this.holdTradeFinancingInfo.forEach(function (item) {
            item['mainGuaranteeMode'] = _this.codeValue(item['mainGuaranteeMode'], _this.guaranteeModeOptions);
            item['operationVariety'] = _this.codeValue(item['operationVariety'], _this.bussTypeOptions);
            item['urrency'] = _this.codeValue(item['urrency'], _this.currencyOptions);
            item['startLoanDate'] = _this.tranDate(item['startLoanDate']);
            item['endLoanDate'] = _this.tranDate(item['endLoanDate']);
            item['loanAmount'] = _this.decimalPipe.transform(item['loanAmount'], '1.2-2');
            item['normalRates'] = _this.decimalPipe.transform(item['normalRates'] / 1.2, '1.2-2');
            item['overdueRates'] = _this.decimalPipe.transform(item['overdueRates'] / 1.2, '1.2-2');
            item['loanBal'] = _this.decimalPipe.transform(item['loanBal'], '1.2-2');
            item['normalBal'] = _this.decimalPipe.transform(item['normalBal'], '1.2-2');
            item['attentionBal'] = _this.decimalPipe.transform(item['attentionBal'], '1.2-2');
            item['secondaryBal'] = _this.decimalPipe.transform(item['secondaryBal'], '1.2-2');
            item['doubtfulBal'] = _this.decimalPipe.transform(item['doubtfulBal'], '1.2-2');
            item['lossBal'] = _this.decimalPipe.transform(item['lossBal'], '1.2-2');
            item['monthFtp'] = _this.decimalPipe.transform(item['monthFtp'], '1.2-2');
            item['lastMonthFtp'] = _this.decimalPipe.transform(item['lastMonthFtp'], '1.2-2');
            item['yearFtp'] = _this.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = _this.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = _this.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = _this.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = _this.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = _this.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = _this.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = _this.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
            _this.httpService.queryTellerById({ tellerId: item['investigator'] }).subscribe(function (data) {
                item['investigator'] = data.tellerName;
            });
            item['lateFlag'] = _this.codeValue(item['lateFlag'], _this.flagSignOptions);
        });
    };
    //出口贴现转码或金额保留两位小数
    OwnOurProductComponent.prototype.holdCktxInfoChange = function () {
        var _this = this;
        this.holdCktxInfo.forEach(function (item) {
            item['faceAmount'] = _this.decimalPipe.transform(item['faceAmount'], '1.2-2');
            item['issueDate'] = _this.tranDate(item['issueDate']);
            item['maturityDate'] = _this.tranDate(item['maturityDate']);
            item['interestRates'] = _this.decimalPipe.transform(item['interestRates'] / 1.2, '1.2-2');
            item['monthFtp'] = _this.decimalPipe.transform(item['monthFtp'], '1.2-2');
            _this.httpService.queryTellerById({ tellerId: item['operator'] }).subscribe(function (data) {
                item['operator'] = data.tellerName;
            });
            item['yearFtp'] = _this.decimalPipe.transform(item['yearFtp'], '1.2-2');
            item['lastYearFtp'] = _this.decimalPipe.transform(item['lastYearFtp'], '1.2-2');
            item['sixMonthFtp'] = _this.decimalPipe.transform(item['sixMonthFtp'], '1.2-2');
            item['monthFtpDiscount'] = _this.decimalPipe.transform(item['monthFtpDiscount'], '1.2-2');
            item['lastMonthFtpDiscount'] = _this.decimalPipe.transform(item['lastMonthFtpDiscount'], '1.2-2');
            item['yearFtpDiscount'] = _this.decimalPipe.transform(item['yearFtpDiscount'], '1.2-2');
            item['lastYearFtpDiscount'] = _this.decimalPipe.transform(item['lastYearFtpDiscount'], '1.2-2');
            item['sixMonthFtpDiscount'] = _this.decimalPipe.transform(item['sixMonthFtpDiscount'], '1.2-2');
        });
    };
    //转码
    OwnOurProductComponent.prototype.codeValue = function (val, arr) {
        if (arr === void 0) { arr = []; }
        var temp = "";
        if (arr.length > 0) {
            arr.forEach(function (item) {
                if (item['value'] == val) {
                    temp = item['label'];
                }
            });
        }
        return temp;
    };
    //保留两位小数
    OwnOurProductComponent.prototype.toTwoNum = function (data) {
        data = data.toFixed(2);
        return data;
    };
    //转换日期
    OwnOurProductComponent.prototype.tranDate = function (value) {
        if (value && value.length == 8) {
            var a = value.slice(0, 4);
            var b = value.slice(4, 6);
            var c = value.slice(6, 8);
            return a + '-' + b + '-' + c;
        }
        else if (value && value.length >= 10) {
            value = value.slice(0, 10);
            return value;
        }
        else {
            return "";
        }
    };
    OwnOurProductComponent.prototype.showDialogCd = function (data) {
        this.displayCd = true;
        document.body.style.overflow = 'hidden';
        this.inValue = data;
    };
    //权限
    OwnOurProductComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
        // return true
    };
    //码值
    OwnOurProductComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //修改表头
    OwnOurProductComponent.prototype.updateUserSettingInfo = function (item, list) {
        // let arrTemp = [];
        // if (item == '02') {//贷款
        //   this.loanDefaultFieldList.forEach(element1 => {
        //     list.forEach(element2 => {
        //       if (element1.value == element2.value) {
        //         arrTemp.push(element2);
        //       }
        //     });
        //   });
        // } else {
        //   arrTemp = list;
        // }
        var _this = this;
        var paramAdd = {
            ownerId: this.userId,
            custId: this.custNo,
            setType: item,
            setContent: list
        };
        this.httpService.updateUserSettingInfo(paramAdd).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.qryUserSettingInfo(item);
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //查询表头
    OwnOurProductComponent.prototype.qryUserSettingInfo = function (item) {
        var _this = this;
        var paramSel = {
            ownerId: this.userId,
            custId: this.custNo,
            setType: item
        };
        this.httpService.qryUserSettingInfo(paramSel).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (item == '') { //初始化
                    for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                        var quryItem = _a[_i];
                        if (quryItem.setType == '01') { //存款
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdDepositInfodataTable = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](quryItem.setContent); //表头字段
                                _this.arrTemp2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](quryItem.setContent); //
                                for (var _b = 0, _c = _this.holdDepositInfoCode; _b < _c.length; _b++) { //存款类的所有字段
                                    var itemCode = _c[_b];
                                    itemCode.isCheck = false;
                                    for (var _d = 0, _e = _this.holdDepositInfodataTable; _d < _e.length; _d++) { //
                                        var itemTable = _e[_d];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                                _this.categoryEcho(); //根据存储字段来判断所属类
                            }
                        }
                        else if (quryItem.setType == '02') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdLoanInfodataTable = quryItem.setContent;
                                for (var _f = 0, _g = _this.holdLoanInfoCode; _f < _g.length; _f++) {
                                    var itemCode = _g[_f];
                                    itemCode.isCheck = false;
                                    for (var _h = 0, _j = _this.holdLoanInfodataTable; _h < _j.length; _h++) {
                                        var itemTable = _j[_h];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                        else if (quryItem.setType == '03') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdDiscountInfodataTable = quryItem.setContent;
                                for (var _k = 0, _l = _this.holdDiscountInfoCode; _k < _l.length; _k++) {
                                    var itemCode = _l[_k];
                                    itemCode.isCheck = false;
                                    for (var _m = 0, _o = _this.holdDiscountInfodataTable; _m < _o.length; _m++) {
                                        var itemTable = _o[_m];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                        else if (quryItem.setType == '04') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdMoneyManagementInfodataTable = quryItem.setContent;
                                for (var _p = 0, _q = _this.holdMoneyManagementInfoCode; _p < _q.length; _p++) {
                                    var itemCode = _q[_p];
                                    itemCode.isCheck = false;
                                    for (var _r = 0, _s = _this.holdMoneyManagementInfodataTable; _r < _s.length; _r++) {
                                        var itemTable = _s[_r];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                        else if (quryItem.setType == '05') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdBankCardInfodataTable = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](quryItem.setContent); //表头字段
                                _this.arrBankTemp2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](quryItem.setContent); //
                                for (var _t = 0, _u = _this.holdBankCardInfoCode; _t < _u.length; _t++) { //信用卡的所有字段
                                    var itemCode = _u[_t];
                                    itemCode.isCheck = false;
                                    for (var _v = 0, _w = _this.holdBankCardInfodataTable; _v < _w.length; _v++) { //
                                        var itemTable = _w[_v];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                                _this.categoryBankEcho(); //根据存储字段来判断所属类
                            }
                        }
                        else if (quryItem.setType == '06') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdForfaitingInfodataTable = quryItem.setContent;
                                for (var _x = 0, _y = _this.holdForfaitingInfoCode; _x < _y.length; _x++) {
                                    var itemCode = _y[_x];
                                    itemCode.isCheck = false;
                                    for (var _z = 0, _0 = _this.holdForfaitingInfodataTable; _z < _0.length; _z++) {
                                        var itemTable = _0[_z];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                        else if (quryItem.setType == '07') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdTradeFinancingInfodataTable = quryItem.setContent;
                                for (var _1 = 0, _2 = _this.holdTradeFinancingInfoCode; _1 < _2.length; _1++) {
                                    var itemCode = _2[_1];
                                    itemCode.isCheck = false;
                                    for (var _3 = 0, _4 = _this.holdTradeFinancingInfodataTable; _3 < _4.length; _3++) {
                                        var itemTable = _4[_3];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                        else if (quryItem.setType == '08') {
                            if (quryItem.setContent && quryItem.setContent != null && quryItem.setContent.length > 0) {
                                _this.holdCktxInfodataTable = quryItem.setContent;
                                for (var _5 = 0, _6 = _this.holdCktxInfoCode; _5 < _6.length; _5++) {
                                    var itemCode = _6[_5];
                                    itemCode.isCheck = false;
                                    for (var _7 = 0, _8 = _this.holdCktxInfodataTable; _7 < _8.length; _7++) {
                                        var itemTable = _8[_7];
                                        if (itemCode.value == itemTable.value) {
                                            itemCode.isCheck = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (item == '01') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdDepositInfodataTable = data.infoList[0].setContent;
                        for (var _9 = 0, _10 = _this.holdDepositInfoCode; _9 < _10.length; _9++) {
                            var itemCode = _10[_9];
                            itemCode.isCheck = false;
                            for (var _11 = 0, _12 = _this.holdDepositInfodataTable; _11 < _12.length; _11++) {
                                var itemTable = _12[_11];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '02') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdLoanInfodataTable = data.infoList[0].setContent;
                        for (var _13 = 0, _14 = _this.holdLoanInfoCode; _13 < _14.length; _13++) {
                            var itemCode = _14[_13];
                            itemCode.isCheck = false;
                            for (var _15 = 0, _16 = _this.holdLoanInfodataTable; _15 < _16.length; _15++) {
                                var itemTable = _16[_15];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '03') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdDiscountInfodataTable = data.infoList[0].setContent;
                        for (var _17 = 0, _18 = _this.holdDiscountInfoCode; _17 < _18.length; _17++) {
                            var itemCode = _18[_17];
                            itemCode.isCheck = false;
                            for (var _19 = 0, _20 = _this.holdDiscountInfodataTable; _19 < _20.length; _19++) {
                                var itemTable = _20[_19];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '04') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdMoneyManagementInfodataTable = data.infoList[0].setContent;
                        for (var _21 = 0, _22 = _this.holdMoneyManagementInfoCode; _21 < _22.length; _21++) {
                            var itemCode = _22[_21];
                            itemCode.isCheck = false;
                            for (var _23 = 0, _24 = _this.holdMoneyManagementInfodataTable; _23 < _24.length; _23++) {
                                var itemTable = _24[_23];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '05') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdBankCardInfodataTable = data.infoList[0].setContent;
                        for (var _25 = 0, _26 = _this.holdBankCardInfoCode; _25 < _26.length; _25++) {
                            var itemCode = _26[_25];
                            itemCode.isCheck = false;
                            for (var _27 = 0, _28 = _this.holdBankCardInfodataTable; _27 < _28.length; _27++) {
                                var itemTable = _28[_27];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '06') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdForfaitingInfodataTable = data.infoList[0].setContent;
                        for (var _29 = 0, _30 = _this.holdForfaitingInfoCode; _29 < _30.length; _29++) {
                            var itemCode = _30[_29];
                            itemCode.isCheck = false;
                            for (var _31 = 0, _32 = _this.holdForfaitingInfodataTable; _31 < _32.length; _31++) {
                                var itemTable = _32[_31];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '07') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdTradeFinancingInfodataTable = data.infoList[0].setContent;
                        for (var _33 = 0, _34 = _this.holdTradeFinancingInfoCode; _33 < _34.length; _33++) {
                            var itemCode = _34[_33];
                            itemCode.isCheck = false;
                            for (var _35 = 0, _36 = _this.holdTradeFinancingInfodataTable; _35 < _36.length; _35++) {
                                var itemTable = _36[_35];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
                else if (item == '08') {
                    if (data.infoList && data.infoList != null && data.infoList.length > 0 && data.infoList[0].setContent && data.infoList[0].setContent.length > 0) {
                        _this.holdCktxInfodataTable = data.infoList[0].setContent;
                        for (var _37 = 0, _38 = _this.holdCktxInfoCode; _37 < _38.length; _37++) {
                            var itemCode = _38[_37];
                            itemCode.isCheck = false;
                            for (var _39 = 0, _40 = _this.holdCktxInfodataTable; _39 < _40.length; _39++) {
                                var itemTable = _40[_39];
                                if (itemCode.value == itemTable.value) {
                                    itemCode.isCheck = true;
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    /**
    * 排序(根据字段在公共参数的顺序)
    */
    OwnOurProductComponent.prototype.listSort = function (list, sortList) {
        var arr = [];
        if (list && list.length != 0 && sortList && sortList.length != 0) {
            list.forEach(function (element) {
                sortList.forEach(function (element2) {
                    if (element.value == element2.value) {
                        arr.push(element);
                    }
                });
            });
            return arr;
        }
    };
    //保存
    OwnOurProductComponent.prototype.saveTitle = function () {
        if (this.showCheckbox == '1') { //存款类
            this.holdDepositInfodataTable = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.arrTemp2);
            this.holdDepositInfodataTable = this.listSort(this.holdDepositInfoCode, this.holdDepositInfodataTable);
            this.updateUserSettingInfo('01', this.holdDepositInfodataTable);
        }
        else if (this.showCheckbox == '2') { //贷款类字段
            this.holdLoanInfodataTable = this.listSort(this.holdLoanInfoCode, this.holdLoanInfodataTable);
            this.updateUserSettingInfo('02', this.holdLoanInfodataTable);
        }
        else if (this.showCheckbox == '3') {
            this.updateUserSettingInfo('03', this.holdDiscountInfodataTable);
        }
        else if (this.showCheckbox == '4') { //理财类字段
            this.holdMoneyManagementInfodataTable = this.listSort(this.holdMoneyManagementInfoCode, this.holdMoneyManagementInfodataTable);
            this.updateUserSettingInfo('04', this.holdMoneyManagementInfodataTable);
        }
        else if (this.showCheckbox == '5') {
            this.holdBankCardInfodataTable = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.arrBankTemp2);
            this.holdBankCardInfodataTable = this.listSort(this.holdBankCardInfoCode, this.holdBankCardInfodataTable);
            this.updateUserSettingInfo('05', this.holdBankCardInfodataTable);
        }
        else if (this.showCheckbox == '6') {
            this.updateUserSettingInfo('06', this.holdForfaitingInfodataTable);
        }
        else if (this.showCheckbox == '7') {
            this.updateUserSettingInfo('07', this.holdTradeFinancingInfodataTable);
        }
        else if (this.showCheckbox == '8') {
            this.updateUserSettingInfo('08', this.holdCktxInfodataTable);
        }
        this.chooseDisplay = false;
    };
    //重置
    OwnOurProductComponent.prototype.selectTitle = function () {
        if (this.showCheckbox == '1') {
            this.qryUserSettingInfo('01');
        }
        else if (this.showCheckbox == '2') {
            this.qryUserSettingInfo('02');
        }
        else if (this.showCheckbox == '3') {
            this.qryUserSettingInfo('03');
        }
        else if (this.showCheckbox == '4') {
            this.qryUserSettingInfo('04');
        }
        else if (this.showCheckbox == '6') {
            this.qryUserSettingInfo('06');
        }
        else if (this.showCheckbox == '7') {
            this.qryUserSettingInfo('07');
        }
        else if (this.showCheckbox == '8') {
            this.qryUserSettingInfo('08');
        }
    };
    //恢复默认
    OwnOurProductComponent.prototype.resetFirst = function () {
        var _this = this;
        if (this.showCheckbox == '1') {
            this.depositList = [
                { label: '账户基本信息', isCheck: false },
                { label: '归属信息', isCheck: false },
                { label: '日均', isCheck: true },
                { label: '积数', isCheck: false },
                { label: 'FTP', isCheck: false },
            ];
            this.holdDepositInfodataTable = [];
            this.holdDepositInfoCode.forEach(function (item) {
                item.isCheck = false;
                // if (item.value == "account") {
                //   item.isCheck = true;
                //   this.holdDepositInfodataTable.push(item)
                // }
                // if (item.value == "cardId") {
                //   item.isCheck = true;
                //   this.holdDepositInfodataTable.push(item)
                // }
                if (item.value == "status") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "currency") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "acctNum") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "depositPeriod") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "balance") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "openDate") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "closeDate") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "assitUserId") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "assitUserName") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "orgId") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "monthDailyAverage") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "lastMonthDailyAverage") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "yearDailyAverage") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "lastY_yearthDailyAverage") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "l6mAvgBal") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "availableCardinality") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
                if (item.value == "lastAvailableCardinality") {
                    item.isCheck = true;
                    _this.holdDepositInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('01', this.holdDepositInfodataTable);
        }
        else if (this.showCheckbox == '2') {
            this.holdLoanInfodataTable = [];
            this.holdLoanInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'operationVariety') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'subBusinessType') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'mainGuaranteeMode') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'startDate') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'endDate') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'loanAmount') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'loanBalance') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'normalRates') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'overdueRates') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'holdingState') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'tenthLevelClassification') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'dueFlag') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
                if (item.value == 'investigator') {
                    item.isCheck = true;
                    _this.holdLoanInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('02', this.holdLoanInfodataTable);
        }
        else if (this.showCheckbox == '3') {
            this.holdDiscountInfodataTable = [];
            this.holdDiscountInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'contractNum') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'iousNum') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'settlementAccount') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'dfno') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'faceAmount') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'issueDate') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'maturityDate') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'interestRates') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'operator') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                if (item.value == 'monthFtp') {
                    item.isCheck = true;
                    _this.holdDiscountInfodataTable.push(item);
                }
                // if (item.value == 'holdingState') {
                //   item.isCheck = true;
                //   this.holdDiscountInfodataTable.push(item)
                // }
            });
            this.updateUserSettingInfo('03', this.holdDiscountInfodataTable);
        }
        else if (this.showCheckbox == '4') {
            this.holdMoneyManagementInfodataTable = [];
            this.holdMoneyManagementInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'cardNum') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'orgId') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'productStartDate') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'productEndDate') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'startDate') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'endDate') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'subscriptionAmount') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'urrency') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'expectedYield') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'issue') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'productCode') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'prodName') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'productStatus') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'mainContact') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'openAccountOrg') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'mainContactOrg') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
                if (item.value == 'assId') {
                    item.isCheck = true;
                    _this.holdMoneyManagementInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('04', this.holdMoneyManagementInfodataTable);
        }
        else if (this.showCheckbox == '5') {
            this.holdBankCardList = [
                { label: '账户基本信息', isCheck: false },
                { label: '归属信息', isCheck: false },
                { label: '担保信息', isCheck: false },
                { label: 'FTP', isCheck: false },
            ];
            this.holdBankCardInfodataTable = [];
            this.holdBankCardInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'cardNum') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'proudctName') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'cardStat') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'authCrdtLimit') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'odPrin') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'openCardDate') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'loanDateEnd') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'ovdueCd') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'ovdueAmt') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'ovdueTerm') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'teller') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'guarantor') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'ftpmProfitA') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                if (item.value == 'ftpyProfitA') {
                    item.isCheck = true;
                    _this.holdBankCardInfodataTable.push(item);
                }
                _this.updateUserSettingInfo('05', _this.holdBankCardInfodataTable);
            });
        }
        else if (this.showCheckbox == '6') {
            this.holdForfaitingInfodataTable = [];
            this.holdForfaitingInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'contractNum') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'iousNum') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'settlementAccount') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'dfno') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'faceAmount') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'issueDate') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'maturityDate') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'interestRates') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'monthFtp') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
                if (item.value == 'operator') {
                    item.isCheck = true;
                    _this.holdForfaitingInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('06', this.holdForfaitingInfodataTable);
        }
        else if (this.showCheckbox == '7') {
            this.holdTradeFinancingInfodataTable = [];
            this.holdTradeFinancingInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'contractNum') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'iousNum') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'operationVariety') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'mainGuaranteeMode') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'startLoanDate') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'endLoanDate') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'loanAmount') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'normalRates') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'overdueRates') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'urrency') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'loanBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'normalBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'attentionBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'secondaryBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'doubtfulBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'lossBal') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'monthFtp') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'lateFlag') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
                if (item.value == 'investigator') {
                    item.isCheck = true;
                    _this.holdTradeFinancingInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('07', this.holdTradeFinancingInfodataTable);
        }
        else if (this.showCheckbox == '8') {
            this.holdCktxInfodataTable = [];
            this.holdCktxInfoCode.forEach(function (item) {
                item.isCheck = false;
                if (item.value == 'contractNum') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'iousNum') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'settlementAccount') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'dfno') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'faceAmount') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'issueDate') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'maturityDate') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'interestRates') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'monthFtp') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
                if (item.value == 'operator') {
                    item.isCheck = true;
                    _this.holdCktxInfodataTable.push(item);
                }
            });
            this.updateUserSettingInfo('08', this.holdCktxInfodataTable);
        }
        this.chooseDisplay = false;
    };
    /**
      * 回显-存款类的类
      */
    OwnOurProductComponent.prototype.categoryEcho = function () {
        for (var i = 0; i < this.holdDepositInfoCodes.length; i++) {
            this.depositList[i].isCheck = false;
            var arrTempLength = this.holdDepositInfoCodes[i].length;
            var length_1 = 0;
            for (var _i = 0, _a = this.holdDepositInfoCodes[i]; _i < _a.length; _i++) {
                var itemCode = _a[_i];
                for (var _b = 0, _c = this.arrTemp2; _b < _c.length; _b++) { //this.holdDepositInfodataTable
                    var itemTable = _c[_b];
                    if (itemCode.value == itemTable.value) {
                        length_1++;
                    }
                }
            }
            if (length_1 == arrTempLength) {
                this.depositList[i].isCheck = true;
            }
        }
        // console.log(this.depositList);
    };
    /**
    * 回显-信用卡的类
    */
    OwnOurProductComponent.prototype.categoryBankEcho = function () {
        for (var i = 0; i < this.holdBankCardInfoCodes.length; i++) {
            this.holdBankCardList[i].isCheck = false;
            var arrTempLength = this.holdBankCardInfoCodes[i].length;
            var length_2 = 0;
            for (var _i = 0, _a = this.holdBankCardInfoCodes[i]; _i < _a.length; _i++) {
                var itemCode = _a[_i];
                for (var _b = 0, _c = this.arrBankTemp2; _b < _c.length; _b++) { //this.holdDepositInfodataTable
                    var itemTable = _c[_b];
                    if (itemCode.value == itemTable.value) {
                        length_2++;
                    }
                }
            }
            if (length_2 == arrTempLength) {
                this.holdBankCardList[i].isCheck = true;
            }
        }
    };
    //信用卡
    OwnOurProductComponent.prototype.showDetails = function (data) {
        this.creditValue = data;
        this.showCreditCard = true;
    };
    //信用卡交易明细
    OwnOurProductComponent.prototype.creditshow = function (event) {
        this.showCreditCard = false;
    };
    OwnOurProductComponent.prototype.closeCredit = function () {
        this.showCreditCard = false;
        document.body.style.overflow = 'auto';
    };
    //存款
    OwnOurProductComponent.prototype.showMore = function () {
        this.showDeposit = true;
        var temp = {
            commonHeader: this.user,
            custNo: this.custNo,
        };
        var params = encodeURIComponent(JSON.stringify(temp));
        var depositUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CREDIT_CARD"] + "?params=" + params + "&&serviceId=DepoProductDetailStaticPages";
        this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(depositUrl);
    };
    //关闭存款
    OwnOurProductComponent.prototype.closeDeposit = function () {
        this.showDeposit = false;
        document.body.style.overflow = 'auto';
    };
    //抵用券查询
    OwnOurProductComponent.prototype.queryVoucher = function () {
        var _this = this;
        var param = {
            partyId: this.custNo,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.httpService.queryCustomerDiscountCoupon(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.qryRelationItems = data.partyCouponList;
                _this.qryRelationItemstotalNum = data.totalCount;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //抵用券查询翻页
    OwnOurProductComponent.prototype.paginateQryRelationItems = function (event) {
        this.pageSize = event.rows * 1;
        this.pageNum = event.page + 1;
        this.queryVoucher();
    };
    //账户分成信息查询
    OwnOurProductComponent.prototype.divideIntoClientNoInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo
        };
        this.httpService.divideIntoClientNoInfo(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.intoAccountInfo = data.infoList;
                if (!_this.intoAccountInfo.length || _this.intoAccountInfo.length == 0) {
                    _this.intoAccountInfoClass = true;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 存款类、贷款、承兑、贴现、保函...菜单切换
    OwnOurProductComponent.prototype.towhichPage = function (indexI, indexJ) {
        this.subShowPage = '';
        this.showPage = indexI;
        if (indexI == '1') {
            this.subShowPage = '101';
            if (!indexJ) {
                this.selectCustAsLnChangeInit();
            }
        }
        if (indexI == '2') {
            this.subShowPage = '201';
            this.selectHoldLoanInit(); // 贷款台账
            this.BZ_1100300000709_NEW_CXInit(); // 贷款账号
            this.queryCreditContractInit(); // 授信合同
            this.queryMaximumContractInit(); // 最高额合同
        }
        if (indexI == '3') {
            this.selectHoldMoneyManagementInfoInit();
        }
        if (indexI == '4') {
            this.selectHoldAgrmtInfoInit();
        }
        if (indexI == '5') {
            this.holdBankCardInit();
        }
        if (indexI == '6') {
            this.subShowPage = '601';
            this.holdForfaitingInit(); // 福费廷
            this.selectHoldTradeFinancingInfoInit(); // 贸易融资
            this.selectHoldCktxInfoInit(); // 出口贴现
            this.holdCreditLetterInfoInit(); // 信用证
        }
        if (indexI == '7') {
            this.BZ_0300300004417_LOANInit();
        }
        if (indexI == '8') {
            this.selectHoldForfaitingInfoTxInit();
        }
        if (indexI == '9') {
            this.selectHoldBackletterInfoInit();
        }
    };
    OwnOurProductComponent.prototype.changeImg = function () {
        this.folder1Flag = !this.folder1Flag;
        this.subfolder1Flag = true;
    };
    OwnOurProductComponent.prototype.changeImgsubfolder1 = function () {
        this.subfolder1Flag = !this.subfolder1Flag;
    };
    // 资金流动方向
    OwnOurProductComponent.prototype.showEcharts = function (demogPeriod) {
        var _this = this;
        this.arrLow = [];
        var flowInfo = {
            custNo: this.custNo,
            demogPeriod: demogPeriod,
        };
        var thiss = this;
        this.httpService.selectAssertFlowInfo(flowInfo).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.amtNetting = null;
                _this.amtNettingIn = null;
                _this.amtNettingOut = null;
                var amtOutList = [], amtOutNameList = [];
                var amtInList = [], amtInNameList = [];
                _this.arrLiuRu = [];
                _this.arrLiuChu = [];
                // 根据push规则,先计算流出,后计算流入,顺序不可更改
                // 流出
                var outMap = data.outMap;
                if (outMap) {
                    _this.amtNettingOut = outMap.amtOutAll;
                    amtOutList.push(outMap.amtOutA == null ? 0 : outMap.amtOutA, outMap.amtOutB == null ? 0 : outMap.amtOutB, outMap.amtOutC == null ? 0 : outMap.amtOutC);
                    amtOutNameList.push(outMap.amtOutANm == null ? '' : outMap.amtOutANm, outMap.amtOutBNm == null ? '' : outMap.amtOutBNm, outMap.amtOutCNm == null ? '' : outMap.amtOutCNm);
                    _this.sort(amtOutList, amtOutNameList, 'out');
                }
                // 流入
                var inMap = data.inMap;
                if (inMap) {
                    // 资金净流入
                    _this.amtNetting = inMap.amtNetting;
                    _this.amtNettingIn = inMap.amtInAll;
                    amtInList.push(inMap.amtInA == null ? 0 : inMap.amtInA, inMap.amtInB == null ? 0 : inMap.amtInB, inMap.amtInC == null ? 0 : inMap.amtInC);
                    amtInNameList.push(inMap.amtInANm == null ? '' : inMap.amtInANm, inMap.amtInBNm == null ? '' : inMap.amtInBNm, inMap.amtInCNm == null ? '' : inMap.amtInCNm);
                    _this.sort(amtInList, amtInNameList, 'in');
                }
                _this.assetOption = {
                    title: {
                        textStyle: {
                            fontSize: '14',
                            color: '#333',
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: '#34CFE6',
                        formatter: function (params) {
                            var nameIn = params[0].axisValueLabel; // 交易对手名称
                            var typeIn = params[0].seriesName; // 流入 or 流出
                            var numIn = params[0].value; //金额
                            var nameOut = params[1].axisValueLabel; // 交易对手名称
                            var typeOut = params[1].seriesName; // 流入 or 流出
                            var numOut = params[1].value; //金额
                            if (params[0].seriesName == '流入' && params[0].value == 0) { //流出
                                var result = nameOut + "<br/>";
                                result += params[1].marker + (typeOut + ":" + numOut + "\u5143");
                                return result;
                            }
                            else { //流入
                                var result = nameIn + "<br/>";
                                result += params[0].marker + (typeIn + ":" + numIn + "\u5143");
                                return result;
                            }
                        }
                    },
                    legend: {
                        data: ['流入', '流出'],
                        top: '80%',
                    },
                    xAxis: {
                        type: "value",
                    },
                    yAxis: {
                        type: "category",
                        data: _this.arrLow,
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            formatter: function (value) {
                                return (value.length > 4 ? (value.slice(0, 4) + '...') : value);
                            }
                        },
                        triggerEvent: true,
                    },
                    grid: {
                        left: 90,
                        top: 0,
                    },
                    series: [
                        {
                            name: "流入",
                            type: "bar",
                            stack: '总量',
                            label: {
                                normal: {
                                    show: false,
                                    color: '#fff',
                                    formatter: function (params) {
                                        if (params.value > 0 || params.value < 0) {
                                            return params.value;
                                        }
                                        else {
                                            return '';
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#e93f33',
                                }
                            },
                            data: _this.arrLiuRu,
                        },
                        {
                            name: "流出",
                            type: "bar",
                            stack: '总量',
                            label: {
                                normal: {
                                    show: false,
                                    color: '#fff',
                                    formatter: function (params) {
                                        if (params.value > 0 || params.value < 0) {
                                            return params.value;
                                        }
                                        else {
                                            return '';
                                        }
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#5bb01a',
                                }
                            },
                            data: _this.arrLiuChu,
                        },
                    ],
                };
            }
        });
    };
    // 排序
    OwnOurProductComponent.prototype.sort = function (amtList, amtNameList, type) {
        var amtSortList = [], amtSortNameList = [];
        var amtInMin = amtList[0], amtInMax = amtList[0], min = 0, max = 0;
        var a = [0, 1, 2], mid;
        for (var i = 1; i < amtList.length; i++) {
            if (amtList[i] < amtInMin) {
                min = i;
                amtInMin = amtList[i];
            }
            if (amtList[i] > amtInMax) {
                max = i;
                amtInMax = amtList[i];
            }
        }
        if (min != max) {
            a.forEach(function (element) {
                if (element != min && element != max) {
                    mid = element;
                }
            });
            amtSortList.push(amtList[min], amtList[mid], amtList[max]);
            this.arrLow.push(amtNameList[min], amtNameList[mid], amtNameList[max]);
        }
        else {
            amtSortList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](amtList);
            this.arrLow.push(amtNameList[0], amtNameList[1], amtNameList[2]);
        }
        if (type == 'in') {
            // 流入
            this.arrLiuRu = [];
            this.arrLiuRu.push(0, 0, 0, amtSortList[0], amtSortList[1], amtSortList[2]);
        }
        else {
            this.arrLiuChu = [];
            this.arrLiuChu.push(amtSortList[0], amtSortList[1], amtSortList[2], 0, 0, 0);
        }
    };
    // 切换
    OwnOurProductComponent.prototype.changeRange = function (param) {
        this.showCharts = param;
        this.showEcharts(param);
    };
    // 贷款类切换
    OwnOurProductComponent.prototype.changeSubLoan = function (param) {
        this.subShowPage = param;
        if (param == '101' || param == '102') { // 注: 存款信息和存款关联信息不能同时查
            if (!this.glckBool) {
                this.glckBool = true;
                if (param == '101') {
                    this.selectCustAsLnChangeInit();
                }
                if (param == '102') {
                    this.queryInit();
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '正在加载，请勿频繁操作！' });
            }
        }
        else if (param == '201') { // 注: 贷款台账
            this.selectHoldLoanInit();
        }
        else if (param == '202') { // 注: 授信合同
            this.queryCreditContractInit();
        }
        else if (param == '203') { // 注: 最高额合同
            this.queryMaximumContractInit(); // 最高额合同
        }
        else if (param == '204') { // 注: 贷款账号
            this.BZ_1100300000709_NEW_CXInit();
        }
        else if (param == '601') {
            this.holdForfaitingInit(); // 福费廷
        }
        else if (param == '602') {
            this.selectHoldTradeFinancingInfoInit(); // 贸易融资
        }
        else if (param == '603') {
            this.selectHoldCktxInfoInit(); // 出口贴现
        }
        else if (param == '604') {
            this.holdCreditLetterInfoInit(); // 信用证
        }
    };
    OwnOurProductComponent.prototype.queryInit = function () {
        this.first = 0;
        this.creditRelationshipPageSize = 10;
        this.creditRelationshipPageNum = 1;
        this.selectRelationCustAsLnChangeInfo();
    };
    //排序
    OwnOurProductComponent.prototype.doSort = function (event) {
        var column = '';
        var order = '';
        if (event.field == 'productStartDate') {
            column = 'raiseStartDt';
        }
        else if (event.field == 'productEndDate') {
            column = 'raiseEndDt';
        }
        else if (event.field == 'startDate') {
            column = 'startDt';
        }
        else if (event.field == 'endDate') {
            column = 'dueDt';
        }
        else if (event.field == 'subscriptionAmount') {
            column = 'finaAmt';
        }
        else if (event.field == 'expectedYield') {
            column = 'incomeRate';
        }
        else if (event.field == 'issue') {
            column = 'term';
        }
        else {
            column = undefined;
        }
        if (event.order == -1) {
            order = '1';
        }
        else if (event.order == 1) {
            order = '0';
        }
        else {
            order = undefined;
        }
        this.holdMoneyManagementInfopageColumn = column;
        this.holdMoneyManagementInfopageOrder = order;
        this.selectHoldMoneyManagementInfoInit();
    };
    // ------- 理财 ---------
    OwnOurProductComponent.prototype.selectHoldMoneyManagementInfoInit = function () {
        this.holdMoneyManagementInfoFirst = 0;
        this.holdMoneyManagementInfopageSize = 10;
        this.holdMoneyManagementInfopageNum = 1;
        this.selectHoldMoneyInfo();
    };
    OwnOurProductComponent.prototype.selectHoldMoneyInfo = function () {
        var _this = this;
        var columnNameList = [];
        if (this.holdMoneyManagementInfopageColumn && this.holdMoneyManagementInfopageOrder) {
            columnNameList.push({ column: this.holdMoneyManagementInfopageColumn, order: this.holdMoneyManagementInfopageOrder });
        }
        var param = {
            custNo: this.custNo,
            pageSize: this.holdMoneyManagementInfopageSize,
            pageNum: this.holdMoneyManagementInfopageNum,
            columnNameList: columnNameList,
        };
        this.httpService.selectHoldMoneyManagementInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.prodInfoList.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['mainContact'] }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != null) {
                            item['mainContact'] = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.mainContactOrg }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.mainContactOrg = data.orgName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.openAccountOrg }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.openAccountOrg = data.orgName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.orgId }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.orgId = data.orgName;
                        }
                    });
                    item['cardNum'] = item.cardDecimal;
                });
                _this.holdMoneyManagementInfo = data.prodInfoList == null ? [] : data.prodInfoList; //理财
                if (!_this.holdMoneyManagementInfo.length || _this.holdMoneyManagementInfo.length == 0) {
                    _this.holdMoneyManagementInfoClass = true;
                }
                _this.showCircle(_this.holdMoneyManagementInfo, '3');
                _this.holdMoneyManagementInfoChange();
                _this.holdMoneyManagementInfototalNum = data.totalNum;
            }
        });
    };
    // 切换
    OwnOurProductComponent.prototype.parentLiClick = function (index, typeNum) {
        var _this = this;
        this.ulData[index].active = !this.ulData[index].active;
        this.ulData.forEach(function (parentElement, parentIndex) {
            if (parentElement['children']) {
                _this.ulData[parentIndex].children.forEach(function (element, i) {
                    _this.ulData[parentIndex].children[i].active = false;
                });
            }
        });
        if (typeNum) {
            this.towhichPage(typeNum);
        }
    };
    OwnOurProductComponent.prototype.childLiClick = function (parentIndex, childIndex, typeNum, type) {
        var _this = this;
        if (!this.ulData[parentIndex].children[childIndex].isGroup) {
            this.ulData[parentIndex].children[childIndex].active = true;
            this.ulData[parentIndex].children.forEach(function (element, i) {
                if (childIndex != i) {
                    _this.ulData[parentIndex].children[i].active = false;
                }
            });
            this.towhichPage(typeNum, type);
        }
    };
    //分页
    OwnOurProductComponent.prototype.paginateMaximumContract = function (event) {
        this.maximumContractPageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.maximumContractPageNum = currentPage;
        this.maximumContractFirst = (currentPage - 1) * this.maximumContractPageSize;
        this.queryMaximumContract();
    };
    OwnOurProductComponent.prototype.paginateCreditContract = function (event) {
        this.creditContractPageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.creditContractPageNum = currentPage;
        this.creditContractFirst = (currentPage - 1) * this.creditContractPageSize;
        this.queryCreditContract();
    };
    // 查询最高额合同
    OwnOurProductComponent.prototype.queryMaximumContractInit = function () {
        this.maximumContractFirst = 0;
        this.maximumContractPageNum = 1;
        this.maximumContractPageSize = 10;
        this.queryMaximumContract();
    };
    OwnOurProductComponent.prototype.queryMaximumContract = function () {
        var _this = this;
        var maximumContract = {
            clientNo: this.custNo,
            pageNum: this.maximumContractPageNum,
            pageSize: this.maximumContractPageSize
        };
        this.httpService.BZ_0200300002614_LOAN(maximumContract).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.maximumContractList = data.infoList == null ? [] : data.infoList;
                _this.maximumContractTotal = data.totalNum;
                _this.showCircle(_this.maximumContractList, '2');
            }
        });
    };
    // 查询当前时间
    OwnOurProductComponent.prototype.selectCustName = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
        };
        var erro = '';
        var params = this.httpService1.handleParams(param);
        jquery__WEBPACK_IMPORTED_MODULE_10__["ajax"]({
            url: app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_CUS"] + app_pages_tzb_custom_http_custom_operation_custom_operation_http_constant__WEBPACK_IMPORTED_MODULE_12__["API"].selectCustBriefInfo,
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
                    _this.custName = data.custName;
                }
                else {
                    erro = data.returnCode.message;
                }
            },
            error: function (err) {
                erro = '调用服务失败';
            }
        });
        if (erro != '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: erro });
            return;
        }
    };
    OwnOurProductComponent.prototype.queryCreditContractInit = function () {
        this.creditContractFirst = 0;
        this.creditContractPageNum = 1;
        this.creditContractPageSize = 10;
        this.queryCreditContract();
    };
    // 授信合同
    OwnOurProductComponent.prototype.queryCreditContract = function () {
        var _this = this;
        var creditContract = {
            clientNo: this.custNo,
            // custName: this.custName,
            pageNum: this.creditContractPageNum,
            pageSize: this.creditContractPageSize
        };
        this.httpService.BZ_0200300002629_LOAN(creditContract).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.creditContractList = data.infoList == null ? [] : data.infoList;
                _this.creditContractTotal = data.totalNum;
                _this.showCircle(_this.creditContractList, '2');
            }
        }); // 授信合同
    };
    // 鼠标移入方法
    OwnOurProductComponent.prototype.displayAllName = function (event) {
    };
    // 是否显示标记
    OwnOurProductComponent.prototype.showCircle = function (data, index) {
        if (data && data.length > 0) {
            this.ulData[0].children[index - 1]['flag'] = true;
        }
    };
    //统一授信关联关系的账户存款信息
    OwnOurProductComponent.prototype.selectRelationCustAsLnChangeInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.creditRelationshipPageNum,
            pageSize: this.creditRelationshipPageSize,
        };
        this.httpService.selectRelationCustAsLnChangeInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.glckBool = false;
                _this.creditRelationshipList = data.prodInfoList;
                _this.creditRelationshipTotal = data.totalNum;
                if (_this.creditRelationshipList && _this.creditRelationshipList.length != 0) {
                    _this.creditRelationshipList.forEach(function (element) {
                        if (element.openDate && element.openDate.length == 8) {
                            element.openDate = element.openDate.substring(0, 4) + "-" + element.openDate.substring(4, 6) + "-" + element.openDate.substring(6, 8);
                        }
                        if (element.closeDate && element.closeDate.length == 8) {
                            element.closeDate = element.closeDate.substring(0, 4) + "-" + element.closeDate.substring(4, 6) + "-" + element.closeDate.substring(6, 8);
                        }
                    });
                }
            }
            else {
                _this.glckBool = false;
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.glckBool = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    OwnOurProductComponent.prototype.paginate = function (event) {
        if (!this.glckBool) {
            this.glckBool = true;
            // 分页
            this.creditRelationshipPageSize = event.rows;
            var currentPage = event.page + 1;
            this.creditRelationshipPageNum = currentPage;
            this.first = (currentPage - 1) * this.creditRelationshipPageSize;
            this.selectRelationCustAsLnChangeInfo(); // 查询
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '正在加载，请勿频繁操作！' });
        }
    };
    OwnOurProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-own-our-product',
            template: __webpack_require__(/*! ./own-our-product.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.html"),
            styles: [__webpack_require__(/*! ./own-our-product.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"],
            app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]])
    ], OwnOurProductComponent);
    return OwnOurProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P132')\">\r\n  <div class=\"ui-g-12 tab\" *ngIf=\"judgeField('X_CUST_M_P007_P132_P237')\">\r\n    <div class=\"header-title-theme\">\r\n      <span class=\"text\">当前推荐产品</span>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-tb\">\r\n      <u-dataTable [value]=\"custRecomProdInfo\" class=\"pro-header-table\" scrollable=\"true\" scrollHeight=\"385px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\">\r\n        <p-column header=\"序号\" [style]=\"{'width':'50px','text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"custName\" header=\"客户姓名\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"certNum\" header=\"证件号码\" [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"prodType\" header=\"产品类型\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"prodNum\" header=\"产品编号\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"prodName\" header=\"产品名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"recStartDt\" header=\"推荐起始日\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"recReasons\" header=\"推荐理由\" [style]=\"{'width':'180px'}\"></p-column>\r\n      </u-dataTable>\r\n      <div class=\"ui-g-12 pag\">\r\n        <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  padding: 0; }\n  .tab .ui-g-11 span {\n    background: #0094D2; }\n  .header-title-theme {\n  width: 100%;\n  height: 42px;\n  background-color: #ffffff;\n  padding-left: 12px;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8 !important;\n  position: relative; }\n  .header-title-theme .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .line {\n      height: 17px; } }\n  .header-title-theme .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    width: 25px;\n    font-weight: bold; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .text {\n      font-size: 15px; } }\n  .padding-tb {\n  padding: 15px 0 0 12px;\n  position: relative; }\n  .ui-g .ui-g-12 strong {\n  display: inline-block;\n  width: 120px;\n  text-align: right; }\n  .ui-g .content {\n  padding: 0; }\n  .ui-g .content label {\n    display: inline-block;\n    width: 120px;\n    text-align: right; }\n  .ui-g .btn {\n  text-align: center; }\n  :host/deep/ .u-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  .menu {\n  width: 99%;\n  background-color: #e5e5e5;\n  border: 1px solid #c6c6c6;\n  border-radius: 3px;\n  margin: 0 auto 0.5em; }\n  .menu a {\n    position: relative;\n    color: #5d5d5d;\n    padding: 7px 22px;\n    cursor: pointer;\n    border-right: 1px solid #c6c6c6; }\n  .menu a .secondM,\n    .menu a .thirdM {\n      width: 117px;\n      position: absolute;\n      top: 20px;\n      left: 17px;\n      z-index: 1000;\n      background: white;\n      text-align: center;\n      list-style: none;\n      padding: 0;\n      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.5);\n      display: none; }\n  .menu a .secondM li,\n      .menu a .thirdM li {\n        padding: 4px 0; }\n  .menu a .secondM li a,\n        .menu a .thirdM li a {\n          border-right: 0px !important; }\n  .menu a .thirdM {\n      left: 116px;\n      top: 22px; }\n  .menu a li:hover {\n      background: #e9f7f8; }\n  .menu a:hover {\n      color: #0094D2;\n      background-color: #fafafa; }\n  .menu a:hover .secondM {\n        display: block; }\n  .menu a:hover .secondM .spe:hover .thirdM {\n          display: block; }\n  :host/deep/ .ui-paginator .ui-dropdown .ui-dropdown-label {\n  width: 50px !important; }\n  .pag {\n  text-align: center; }\n  :host/deep/ .ui-datatable-scrollable-body {\n  height: 385px; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr {\n  height: 33px !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-thead > tr > th {\n  padding: 0 !important; }\n  :host/deep/ .pro-header-table .u-datatable .ui-datatable-tfoot > tr > td {\n  padding-right: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vcmVjb21tZW5kZWQtcHJvZHVjdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFx2aWV3LXByb2R1Y3QtaW5mb3JtYXRpb25cXHJlY29tbWVuZGVkLXByb2R1Y3RcXHJlY29tbWVuZGVkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7RUFEZDtJQUlZLG1CQUFtQixFQUFBO0VBSS9CO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7RUFWdEI7SUFZUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7RUFFN0I7SUFsQko7TUFvQlksWUFBWSxFQUFBLEVBQ2Y7RUFyQlQ7SUEwQlEsT0FBTztJQUNQLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVyQjtJQXBDSjtNQXNDWSxlQUFlLEVBQUEsRUFDbEI7RUFHVDtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTtFQUV0QjtFQUdZLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFMN0I7RUFTUSxVQUFVLEVBQUE7RUFUbEI7SUFXWSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBYjdCO0VBaUJRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGFBQWEsRUFBQTtFQUVqQjtFQUNJLFVBQVU7RUFDVix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTtFQUx4QjtJQU9RLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTtFQVh2Qzs7TUFjWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDViw0Q0FBNEM7TUFDNUMsYUFBYSxFQUFBO0VBeEJ6Qjs7UUEwQmdCLGNBQWMsRUFBQTtFQTFCOUI7O1VBNEJvQiw0QkFBNEIsRUFBQTtFQTVCaEQ7TUFpQ1ksV0FBVztNQUNYLFNBQVMsRUFBQTtFQWxDckI7TUFxQ1ksbUJBQW1CLEVBQUE7RUFyQy9CO01Bd0NZLGNBQWM7TUFDZCx5QkFBeUIsRUFBQTtFQXpDckM7UUEyQ2dCLGNBQWMsRUFBQTtFQTNDOUI7VUErQ3dCLGNBQWMsRUFBQTtFQVV0QztFQUNJLHNCQUFxQixFQUFBO0VBR3pCO0VBQ0ksa0JBQ0osRUFBQTtFQUVBO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxxQkFBcUIsRUFBQTtFQUl6QjtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vcmVjb21tZW5kZWQtcHJvZHVjdC9yZWNvbW1lbmRlZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnVpLWctMTEge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5NEQyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaGVhZGVyLXRpdGxlLXRoZW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAtbXMtZmxleDogMTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NztcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBhZGRpbmctdGIge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDAgMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udWktZyB7XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgc3Ryb25ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5e1xyXG4gICAgaGVpZ2h0OiAzODVweDtcclxufVxyXG4ubWVudSB7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwLjVlbTtcclxuICAgIGEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMjJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgICAgICAuc2Vjb25kTSxcclxuICAgICAgICAudGhpcmRNIHtcclxuICAgICAgICAgICAgd2lkdGg6IDExN3B4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMi41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aGlyZE0ge1xyXG4gICAgICAgICAgICBsZWZ0OiAxMTZweDtcclxuICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWY3Zjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgLnNlY29uZE0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAuc3Ble1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhpcmRNIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1wYWdpbmF0b3IgLnVpLWRyb3Bkb3duIC51aS1kcm9wZG93bi1sYWJlbHtcclxuICAgIHdpZHRoOjUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDM4NXB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvLWhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnByby1oZWFkZXItdGFibGUgLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnByby1oZWFkZXItdGFibGUgLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGZvb3Q+dHI+dGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: RecommendedProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedProductComponent", function() { return RecommendedProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecommendedProductComponent = /** @class */ (function () {
    function RecommendedProductComponent(router, httpService, route, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.pageSize = 10;
        this.pageNum = 1;
        this.totalNum = 0;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //日期
        this.historypageNum = 1;
        this.historypageSize = 10;
        this.statusIdOptions = []; //推荐产品推荐状态
        this.statusId = '';
        this.codeVal();
        this.statusIdOptions = this.code['STATUS_Id'];
        this.custNo = this.commfunc.getSessionData('custNo');
    }
    RecommendedProductComponent.prototype.ngOnInit = function () {
        this.selectCustRecomProdInfo();
        this.selectPartyCommendProdInfo();
    };
    RecommendedProductComponent.prototype.ngOnChanges = function () {
    };
    RecommendedProductComponent.prototype.selectCustRecomProdInfo = function () {
        var _this = this;
        var param = {
            // custNo:'1300002112',
            custNo: this.custNo,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.httpService.selectCustRecomProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custRecomProdInfo = data.infoList;
                _this.pageSize = data.pageSize;
                _this.pageNum = data.pageNum;
                _this.totalNum = data.totalNum;
            }
        });
    };
    RecommendedProductComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectCustRecomProdInfo();
    };
    RecommendedProductComponent.prototype.selectPartyCommendProdInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.historypageNum,
            pageSize: this.historypageSize,
            statusId: this.statusId,
            startDtA: this.startDtA,
            endDtA: this.endDtA,
            startDtB: this.startDtB,
            endDtB: this.endDtB,
        };
        this.httpService.selectPartyCommendProdInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.historyCustRecomendProduct = data.infoList;
            }
            else {
                // this.msgs = [];
                // this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    RecommendedProductComponent.prototype.paginateS = function (event) {
        this.historypageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.historypageNum = currentPage;
        this.selectPartyCommendProdInfo();
    };
    RecommendedProductComponent.prototype.reset = function () {
        this.statusId = '';
        this.startDtA = null;
        this.endDtA = null;
        this.startDtB = null;
        this.endDtB = null;
    };
    //权限
    RecommendedProductComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
    };
    RecommendedProductComponent.prototype.toOwnOurProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    RecommendedProductComponent.prototype.toApplForProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/appl-for-product']);
    };
    RecommendedProductComponent.prototype.toOtherBankProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/other-bank-product']);
    };
    RecommendedProductComponent.prototype.toRecommendedProduct = function () {
        this.router.navigate(['pages/custom-view/view-product-information/recommended-product']);
    };
    RecommendedProductComponent.prototype.tock = function () {
        if (document.querySelector('#ck') != null) {
            document.querySelector('#ck').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    RecommendedProductComponent.prototype.toDk = function () {
        if (document.querySelector('#dk') != null) {
            document.querySelector('#dk').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    RecommendedProductComponent.prototype.toLc = function () {
        if (document.querySelector('#lc') != null) {
            document.querySelector('#lc').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    RecommendedProductComponent.prototype.toOtherQy = function () {
        if (document.querySelector('#otherqy') != null) {
            document.querySelector('#otherqy').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    RecommendedProductComponent.prototype.toDj = function () {
        if (document.querySelector('#dj') != null) {
            document.querySelector('#dj').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    RecommendedProductComponent.prototype.toMy = function () {
        if (document.querySelector('#my') != null) {
            document.querySelector('#my').scrollIntoView();
            var s = window.scrollY;
            window.scrollTo(100, s - 50);
        }
    };
    //码值
    RecommendedProductComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    RecommendedProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommended-product',
            template: __webpack_require__(/*! ./recommended-product.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.html"),
            styles: [__webpack_require__(/*! ./recommended-product.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], RecommendedProductComponent);
    return RecommendedProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <!-- <div class=\"ui-g-12\">\r\n    <button pButton label=\"持有我行产品\" (click)=\"toOwnOurProduct()\" ></button>\r\n    <button pButton label=\"正在申请产品\" (click)=\"toApplForProduct()\" ></button>\r\n    <button pButton label=\"他行产品\" (click)=\"toOtherBankProduct()\"></button>\r\n    <button pButton label=\"推荐产品\" (click)=\"toRecommendedProduct()\" ></button>\r\n  </div> -->\r\n  <div class=\"ui-g-12 bg-m\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  min-height: 400px; }\n  .ui-g .bg-m {\n    margin: 0;\n    padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcdmlldy1wcm9kdWN0LWluZm9ybWF0aW9uXFx2aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUIsRUFBQTtFQUZyQjtJQUlPLFNBQVM7SUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L3ZpZXctcHJvZHVjdC1pbmZvcm1hdGlvbi92aWV3LXByb2R1Y3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZ3tcclxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgLmJnLW17XHJcbiAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ViewProductInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductInformationComponent", function() { return ViewProductInformationComponent; });
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



var ViewProductInformationComponent = /** @class */ (function () {
    function ViewProductInformationComponent(route, router, commfunc) {
        this.route = route;
        this.router = router;
        this.commfunc = commfunc;
    }
    ViewProductInformationComponent.prototype.ngOnInit = function () {
    };
    ViewProductInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-product-information',
            template: __webpack_require__(/*! ./view-product-information.component.html */ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.html"),
            styles: [__webpack_require__(/*! ./view-product-information.component.scss */ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], ViewProductInformationComponent);
    return ViewProductInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewProductInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductInformationModule", function() { return ViewProductInformationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _view_product_information_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-product-information.routing */ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _view_product_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-product-information.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.ts");
/* harmony import */ var _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./own-our-product/own-our-product.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.ts");
/* harmony import */ var _application_for_product_application_for_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application-for-product/application-for-product.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/application-for-product/application-for-product.component.ts");
/* harmony import */ var _other_banking_product_other_banking_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./other-banking-product/other-banking-product.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/other-banking-product.component.ts");
/* harmony import */ var _recommended_product_recommended_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recommended-product/recommended-product.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/recommended-product/recommended-product.component.ts");
/* harmony import */ var _own_our_product_account_trading_details_account_trading_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./own-our-product/account-trading-details/account-trading-details.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/account-trading-details/account-trading-details.component.ts");
/* harmony import */ var _own_our_product_deposit_details_deposit_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./own-our-product/deposit-details/deposit-details.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/deposit-details/deposit-details.component.ts");
/* harmony import */ var _own_our_product_loan_all_details_loan_all_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./own-our-product/loan-all-details/loan-all-details.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/loan-all-details/loan-all-details.component.ts");
/* harmony import */ var _own_our_product_money_managerment_details_money_managerment_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./own-our-product/money-managerment-details/money-managerment-details.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/money-managerment-details/money-managerment-details.component.ts");
/* harmony import */ var _other_banking_product_add_other_loan_add_other_loan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./other-banking-product/add-other-loan/add-other-loan.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/add-other-loan/add-other-loan.component.ts");
/* harmony import */ var _other_banking_product_update_other_loan_update_other_loan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./other-banking-product/update-other-loan/update-other-loan.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/other-banking-product/update-other-loan/update-other-loan.component.ts");
/* harmony import */ var _own_our_product_creditcard_details_creditcard_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./own-our-product/creditcard-details/creditcard-details.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/creditcard-details/creditcard-details.component.ts");
/* harmony import */ var _own_our_product_contract_signing_contract_signing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./own-our-product/contract-signing/contract-signing.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/contract-signing.component.ts");
/* harmony import */ var _own_our_product_contract_signing_integral_subsidiary_integral_subsidiary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-subsidiary/integral-subsidiary.component.ts");
/* harmony import */ var _own_our_product_contract_signing_integral_period_integral_period_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./own-our-product/contract-signing/integral-period/integral-period.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/contract-signing/integral-period/integral-period.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_view_view_product_information_own_our_product_asset_flow_direction_details_asset_flow_direction_detailscomponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/asset-flow-direction-details/asset-flow-direction-detailscomponent.ts");
/* harmony import */ var app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // 客户运营平台 http










// import { LoanDetailsComponent } from "./own-our-product/loan-details/loan-details.component";











var ViewProductInformationModule = /** @class */ (function () {
    function ViewProductInformationModule() {
    }
    ViewProductInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _view_product_information_routing__WEBPACK_IMPORTED_MODULE_5__["ViewProductInformationRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__["FrameworkModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_24__["UDataTableModule"],
                app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_23__["UPaginatorModule"],
            ],
            declarations: [
                _view_product_information_component__WEBPACK_IMPORTED_MODULE_7__["ViewProductInformationComponent"],
                _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_8__["OwnOurProductComponent"],
                _application_for_product_application_for_product_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationForProductComponent"],
                _other_banking_product_other_banking_product_component__WEBPACK_IMPORTED_MODULE_10__["OtherBankingProductComponent"],
                _recommended_product_recommended_product_component__WEBPACK_IMPORTED_MODULE_11__["RecommendedProductComponent"],
                _own_our_product_account_trading_details_account_trading_details_component__WEBPACK_IMPORTED_MODULE_12__["AccountTradingDetailsComponent"],
                app_pages_tzb_custom_custom_view_view_product_information_own_our_product_asset_flow_direction_details_asset_flow_direction_detailscomponent__WEBPACK_IMPORTED_MODULE_22__["AssetFlowDirectionDetailsComponent"],
                _own_our_product_deposit_details_deposit_details_component__WEBPACK_IMPORTED_MODULE_13__["DepositDetailsComponent"],
                // LoanDetailsComponent,
                _own_our_product_loan_all_details_loan_all_details_component__WEBPACK_IMPORTED_MODULE_14__["LoanAllDetailsComponent"],
                _own_our_product_money_managerment_details_money_managerment_details_component__WEBPACK_IMPORTED_MODULE_15__["MoneyManagermentDetailsComponent"],
                _other_banking_product_add_other_loan_add_other_loan_component__WEBPACK_IMPORTED_MODULE_16__["AddOtherLoanComponent"],
                _other_banking_product_update_other_loan_update_other_loan_component__WEBPACK_IMPORTED_MODULE_17__["UpdateOtherLoanComponent"],
                _own_our_product_creditcard_details_creditcard_details_component__WEBPACK_IMPORTED_MODULE_18__["CreditCardDetailsComponent"],
                _own_our_product_contract_signing_contract_signing_component__WEBPACK_IMPORTED_MODULE_19__["ContractSigningComponent"],
                _own_our_product_contract_signing_integral_subsidiary_integral_subsidiary_component__WEBPACK_IMPORTED_MODULE_20__["IntegralSubsidiaryComponent"],
                _own_our_product_contract_signing_integral_period_integral_period_component__WEBPACK_IMPORTED_MODULE_21__["IntegralPeriodComponent"]
            ],
            providers: [
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CusViewHttpService"]
            ]
        })
    ], ViewProductInformationModule);
    return ViewProductInformationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.routing.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.routing.ts ***!
  \***********************************************************************************************************/
/*! exports provided: routes, ViewProductInformationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductInformationRouting", function() { return ViewProductInformationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_product_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product-information.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/view-product-information.component.ts");
/* harmony import */ var _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./own-our-product/own-our-product.component */ "./src/app/pages/tzb/custom/custom-view/view-product-information/own-our-product/own-our-product.component.ts");



var routes = [
    {
        path: '', component: _view_product_information_component__WEBPACK_IMPORTED_MODULE_1__["ViewProductInformationComponent"],
        children: [
            {
                path: '', redirectTo: 'own-our-product', pathMatch: 'full'
            },
            {
                path: 'own-our-product', component: _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_2__["OwnOurProductComponent"],
            },
            {
                path: 'appl-for-product', component: _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_2__["OwnOurProductComponent"]
            },
            {
                path: 'other-bank-product', component: _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_2__["OwnOurProductComponent"]
            },
            {
                path: 'recommended-product', component: _own_our_product_own_our_product_component__WEBPACK_IMPORTED_MODULE_2__["OwnOurProductComponent"]
            }
        ]
    }
];
var ViewProductInformationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=tzb-custom-custom-view-view-product-information-view-product-information-module.js.map