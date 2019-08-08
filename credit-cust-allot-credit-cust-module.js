(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-cust-allot-credit-cust-module"],{

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <label for=\"\" class=\"ui-g-4\">客户号：</label>\r\n            <span class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custInfo.custNo\" disabled>\r\n            </span>\r\n            <div class=\"ui-g-2\">\r\n                <span class=\" tabelBIco\" (click)=\"lookReport()\">BI报告</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 tit\">\r\n            <label for=\"\" class=\"ui-g-4\">客户名称：</label>\r\n            <span class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custInfo.custName\" disabled>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'个人信息'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">婚姻状况：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"maritalStatuss\" [(ngModel)]=\"custInfo.maritalStatus\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">教育程度：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"academic\" [(ngModel)]=\"custInfo.degree\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">税后年收入（万）：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.incomeAftertax\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">银行卡账户：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.cardNo\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">居住年限（年）：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.homeYears\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">居住状况：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"liveStatuss\" [(ngModel)]=\"custInfo.liveStatus\" disabled></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">居住地址：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.homeDetailAddr\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">居住地址邮编：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.zipCode\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'单位信息'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">单位名称：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.companyName\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">单位性质：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"companyNature\" [(ngModel)]=\"custInfo.companyNature\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">行业类型：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"industry\" [(ngModel)]=\"custInfo.industry\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">单位联系电话：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.companyPhone\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">职务：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"duty\" [(ngModel)]=\"custInfo.duty\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <!-- <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">职称：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.dutyName\" disabled>\r\n        </span>\r\n    </div> -->\r\n    <div class=\"ui-g-12 WholeName\">\r\n        <label for=\"\" class=\"ui-g-1 titeDress\">单位地址：</label>\r\n        <span class=\"ui-g-10 \">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.companyDetailAddr\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12 WholeName\">\r\n        <label for=\"\" class=\"ui-g-1 titeDress\">资产证明：</label>\r\n        <span class=\"ui-g-10 \" *ngIf=\"custInfo.assetProof=='Y'\">\r\n            <span *ngFor=\"let item of custInfo.picInfoList\">\r\n                <a *ngIf=\"item.picType=='2'\" href=\"{{item.picSerialNo}}\" target=\"_blank\">{{item.picSerialNo}}</a>\r\n            </span>\r\n        </span>\r\n        <span class=\"ui-g-10 \" *ngIf=\"custInfo.assetProof!='Y'\">\r\n            无\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'联系人信息'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">联系人姓名：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.associatesCustName\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">联系人手机号码：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.custPhone\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">与申请人关系：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"applyRelationshipList\" [(ngModel)]=\"custInfo.contactType\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'补充信息'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">电子邮箱：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"custInfo.email\" disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">卡片寄送：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"cardSend\" [(ngModel)]=\"custInfo.cardSend\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <!-- 码值未给 -->\r\n    <!-- <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">卡片激活：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"vetoOption\" [(ngModel)]=\"custInfo.cardActivation\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div> -->\r\n    <!-- <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'评分决策信息'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">决策类型：</label>\r\n        <span class=\"ui-g-6\">\r\n            <p-dropdown [options]=\"\" [(ngModel)]=\"custInfo.decisionType\" [disabled]=\"true\"></p-dropdown>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">审批优先级：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" [(ngModel)]=\"custInfo.priorityLevel\" pInputText disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-4 tit\">\r\n        <label for=\"\" class=\"ui-g-4\">建议额度：</label>\r\n        <span class=\"ui-g-6\">\r\n            <input type=\"text\" [(ngModel)]=\"custInfo.adviceLimit\" pInputText disabled>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12 WholeName\">\r\n        <label for=\"\" class=\"ui-g-1 titeDress\">负面原因1：</label>\r\n        <span class=\"ui-g-10 \">\r\n            <input type=\"text\" [(ngModel)]=\"custInfo.reasonInfoArrayList[0].reason\" pInputText disabled>\r\n        </span>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 WholeName\">\r\n        <label for=\"\" class=\"ui-g-1 titeDress\">负面原因2：</label>\r\n        <span class=\"ui-g-10 \">\r\n            <input type=\"text\" [(ngModel)]=\"custInfo.incomeInfoArrayList[0].incomeReason\" pInputText disabled>\r\n        </span>\r\n    </div> -->\r\n    <div class=\"ui-g-12 btn\" style=\"text-align:center\">\r\n        <button pButton type=\"button\" label=\"分配\" (click)=\"checkSerIal('01')\" *ngIf=\"resultList.perssion=='?auth=zhhz'\"></button>\r\n        <button pButton type=\"button\" label=\"转介绍\" (click)=\"checkSerIal(05,1)\" *ngIf=\"resultList.perssion!='?auth=htzx'\"></button>\r\n        <button pButton type=\"button\" label=\"分配\" (click)=\"checkSerIal(05)\" *ngIf=\"resultList.perssion=='?auth=htzx'\"></button>\r\n        <!--同意： 后台中心或有放款权限的客户经理 -->\r\n        <button pButton type=\"button\" label=\"同意\" (click)=\"checkSerIal('03')\" *ngIf=\"(resultList.perssion=='?auth=htzx') || (resultList.perssion=='?auth=khjl' && hasPermiss)\"></button>\r\n        <!--否决： 任务类型非逾期案例，并且有放款权限的客户经理 -->\r\n        <button pButton type=\"button\" label=\"否决\" (click)=\"checkSerIal('04')\" *ngIf=\"(dataList.taskType != '08') && ((resultList.perssion!='?auth=khjl') || (resultList.perssion=='?auth=khjl' && hasPermiss)) \"></button>\r\n        <button pButton type=\"button\" label=\"打回\" class=\"icoColor\" (click)=\"checkSerIal('2')\" *ngIf=\"isBack\"></button>\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"doUp()\"></button>\r\n    </div>\r\n    <p-dialog styleClass=\"function\" [(visible)]=\"display\" modal=\"modal\" [positionTop]=200 class=\"my-cust-overf\" *ngIf=\"display\"\r\n        (onHide)=\"close()\">\r\n        <p-header *ngIf=\"state=='04'\">否决</p-header>\r\n        <p-header *ngIf=\"state=='05' && resultList.perssion!='?auth=htzx'\">转介绍</p-header>\r\n        <p-header *ngIf=\"state=='05' && resultList.perssion=='?auth=htzx'\">分配</p-header>\r\n        <p-header *ngIf=\"state=='2'\">打回</p-header>\r\n        <!-- 否决 -->\r\n        <ul class=\"veto\" *ngIf=\"state=='04'\">\r\n            <li class=\"\">\r\n                <span class=\"veto-tip\">一级原因：</span>\r\n                <div class=\"veto-select\">\r\n                    <p-dropdown [options]=\"vetoFirsts\" [(ngModel)]=\"vetoBean.oneVetoReason\" (onChange)=\"vetoChange($event)\"></p-dropdown>\r\n                </div>\r\n            </li>\r\n            <li class=\"\">\r\n                <span class=\"veto-tip\">二级原因：</span>\r\n                <div class=\"veto-select\">\r\n                    <!-- 个人因素 -->\r\n                    <p-dropdown [options]=\"vetoOption\" [(ngModel)]=\"vetoBean.twoVetoReason\" (onChange)=\"vetoChangeTwoReson($event)\"></p-dropdown>\r\n                </div>\r\n\r\n            </li>\r\n            <li class=\"\" *ngIf=\"bzIsshow\">\r\n                <span class=\"veto-tip\">备注：</span>\r\n                <div class=\"veto-select\">\r\n                    <!-- 个人因素 -->\r\n                    <textarea rows=\"3\" pInputTextarea [(ngModel)]=\"comments\"></textarea>\r\n                </div>\r\n            </li>\r\n            <li class=\"btn\">\r\n                <button pButton type=\"button\" label=\"否决\" class=\"icoColor\" (click)=\"vetoClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </li>\r\n        </ul>\r\n        <!-- 转介绍 -->\r\n        <ul class=\"veto\" *ngIf=\"state=='05'\">\r\n            <li>\r\n                <span class=\"veto-tip turn-tip\">接收机构：</span>\r\n                <!-- <div class=\"veto-select turn-select\">\r\n                    <input type=\"text\" pInputText readonly (click)=\"turnStaff()\" [(ngModel)]=\"personName\" />\r\n                </div> -->\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                    <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <span class=\"veto-tip turn-tip\">接收人：</span>\r\n                <!-- <div class=\"veto-select turn-select\">\r\n                    <input type=\"text\" pInputText readonly (click)=\"turnPost()\" [(ngModel)]=\"postName\" />\r\n                </div> -->\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"personName_new\" disabled/>\r\n                    <div (click)=\"perShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li *ngIf=\"zjs\">\r\n                <span class=\"veto-tip turn-tip\">原因：</span>\r\n                <div class=\"veto-select turn-select\">\r\n                    <p-dropdown [options]=\"TurnReson\" [(ngModel)]=\"subApproveMapBean.info\" (onChange)=\"zjsChange($event)\"></p-dropdown>\r\n                    <!-- 下拉选项为其他时，需录入原因 -->\r\n                    <div class=\"ui-g-12\" style=\"padding-right:0;padding-left: 0;\" *ngIf=\"subApproveMapBean.info=='03'\">\r\n                        <!-- <input type=\"text\" pInputText [(ngModel)]=\"otherInfo\" /> -->\r\n                        <textarea type=\"text\" class=\"textArea\" pInputTextArea [(ngModel)]=\"otherInfo\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton type=\"button\" label=\"确定\" class=\"icoColor\" (click)=\"rurnClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </div>\r\n        </ul>\r\n        <!-- 打回 -->\r\n        <ul class=\"goBack\" *ngIf=\"state=='2'\">\r\n            <li>打回原因：</li>\r\n            <li>\r\n                <textarea pInputTextarea [(ngModel)]=\"subApproveMapBean.info\" autoResize=\"false\"></textarea>\r\n            </li>\r\n            <li class=\"btn\">\r\n                <button pButton type=\"button\" label=\"打回\" class=\"icoColor\" (click)=\"hitClick()\"></button>\r\n                <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n            </li>\r\n        </ul>\r\n    </p-dialog>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 分配员工 -->\r\n<p-dialog *ngIf=\"personDis\" [(visible)]=\"personDis\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>员工列表</p-header>\r\n    <person-choose *ngIf=\"personDis\" [personId]=\"orgId\" (outValue)=\"personDiss($event)\"></person-choose>\r\n</p-dialog>\r\n<!--审批选人 -->\r\n<p-dialog *ngIf=\"examineDisplay\" header=\"分配\" [(visible)]=\"examineDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=100\r\n    class=\"customer-distri-contactf\">\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"extableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"'暂无数据'\">\r\n            <p-column header=\"客户经理工号\" field=\"userId\"></p-column>\r\n            <p-column header=\"客户经理名称\" field=\"userName\"></p-column>\r\n        </p-dataTable>\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <button pButton label=\"确定\" (click)=\"doSubmit()\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n<!-- 员工 -->\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-dialog class=\"personShowStyle\" *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" baseZIndex='1' width=\"900\"\r\n    [responsive]=\"true\" [positionTop]=10>\r\n    <query-cust-org1 [inValue]=\"inValueOrg\" (outValue)=\"treeCall($event)\"></query-cust-org1>\r\n</p-dialog>\r\n<p-dialog class=\"personShowStyle\" *ngIf=\"personShow\" [(visible)]=\"personShow\" modal=\"modal\" baseZIndex='1' width=\"900\" [responsive]=\"true\"\r\n    [positionTop]=10>\r\n    <query-cust-post1 [inValue]=\"inValue\" (outValue)=\"perTreeCall($event)\"></query-cust-post1>\r\n</p-dialog>\r\n<!-- 岗位 -->\r\n<p-dialog *ngIf=\"postPage\" [(visible)]=\"postPage\" modal=\"modal\" [positionTop]=10 baseZIndex='1' class=\"customer-distri-contactf\">\r\n    <p-header>岗位列表</p-header>\r\n    <post-choose *ngIf=\"postPage\" [personId]=\"bussinessMap.specifyNextOpers\" (outValue)=\"postInfor($event)\"></post-choose>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"reportDisplay\" width=\"900\" [(visible)]=\"reportDisplay\" modal=\"true\" class=\"reportTitle\">\r\n    <p-header>综合信用报告</p-header>\r\n    <reportDetail [inValue]=\"reportCustNm\" [inValueReportId]=\"inValueReportId\"></reportDetail>\r\n</p-dialog>\r\n<div class=\"progress\" *ngIf=\"progress\">\r\n    <p-dialog *ngIf=\"progress\" width=\"300\" height=\"300\" [(visible)]=\"progress\" modal=\"true\" class=\"progressTitle\">\r\n        <!-- <p-progressSpinner [style]=\"{width:'200px',height:'200px'}\"></p-progressSpinner> -->\r\n        <p-header>综合信用报告</p-header>\r\n        <img src=\"../../../../../assets/layout/images/timg.gif\" style=\"margin-top:31px;margin-bottom:30px;\">\r\n        <span style=\"display:inline-block;width:100%;text-align:center;letter-spacing:2px\">正在加载中，请稍等...</span>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  text-align: right; }\n\n.titeDress {\n  width: 11%; }\n\n.ui-g-12 .tit {\n  padding: 0; }\n\n.ui-g-12 .btn {\n  text-align: center; }\n\n.ui-g-12 .btn .icoColor {\n    background: #ffc107; }\n\n.ui-g-12 .btn .icoColor:hover {\n      background: #ffc107; }\n\n.ui-g-12 .veto {\n  width: 356px;\n  margin: auto;\n  margin-top: 10px;\n  list-style-type: none;\n  color: #000;\n  padding: 1em 0;\n  zoom: 1; }\n\n.ui-g-12 .veto::after {\n    content: '';\n    clear: both; }\n\n.ui-g-12 .veto li {\n    margin-top: 25px;\n    height: 26px;\n    line-height: 26px; }\n\n.ui-g-12 .veto li:first-child {\n      margin-top: 0; }\n\n.ui-g-12 .veto li .veto-tip {\n      display: block;\n      float: left;\n      width: 75px;\n      font-size: 14px; }\n\n.ui-g-12 .veto li .veto-tip.turn-tip {\n        width: 90px; }\n\n.ui-g-12 .veto li .veto-select {\n      float: right;\n      width: 270px; }\n\n.ui-g-12 .veto li .veto-select.turn-select {\n        width: 255px; }\n\n.ui-g-12 .agree {\n  margin: auto;\n  margin-top: 70px;\n  text-align: center; }\n\n.ui-g-12 .agree dt {\n    font-size: 20px; }\n\n.ui-g-12 .agree dd.btn {\n    margin-top: 35px;\n    margin-left: 0; }\n\n.ui-g-12 .goBack {\n  list-style-type: none;\n  margin: auto;\n  width: 477px;\n  padding: 0;\n  margin-top: 15px; }\n\n.ui-g-12 .goBack textarea {\n    resize: none;\n    width: 477px;\n    height: 105px;\n    margin-top: 9px; }\n\n.ui-g-12 .goBack .btn {\n    margin-top: 10px; }\n\n.WholeName {\n  padding: 0; }\n\n:host/deep/ .ui-tabview-panel {\n  padding: 0 !important; }\n\n:host/deep/ .my-cust-overf .ui-dialog.ui-shadow {\n  width: 542px !important;\n  height: auto !important;\n  border-radius: 10px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  padding: 0 !important; }\n\n:host /deep/ .customer-distri-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .customer-distri-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/ .myReport .hold-product-b {\n  width: 8% !important;\n  margin: 0px;\n  margin-right: 1%; }\n\n:host/deep/ .myReport .hold-product-bl {\n  width: 8% !important;\n  margin: 0px; }\n\n:host/deep/ .myReport .contentHeight {\n  overflow: inherit !important;\n  background-color: #fff !important; }\n\n.spls {\n  padding: 0px; }\n\n.queryinputbtn {\n  float: right;\n  display: flex;\n  width: 255px; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px;\n    cursor: pointer; }\n\n:host/deep/ .personShowStyle .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.textArea {\n  width: 100%;\n  height: 50px; }\n\n:host /deep/ .progressTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n\n.progress {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  margin-top: -200px;\n  width: 400px;\n  height: 400px;\n  background: #fff;\n  text-align: center; }\n\n:host/deep/.progress .ui-dialog.ui-shadow {\n  width: 600px !important;\n  height: 300px !important;\n  min-width: 0px !important;\n  min-height: 0px !important; }\n\n:host /deep/ .reportTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n\n:host /deep/ .reportTitle .ui-dialog .ui-dialog-content {\n  background: #f3f3f4; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jcmVkaXQtY3VzdC1hbGxvdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21DZW50ZXJcXGNyZWRpdC1jdXN0LWFsbG90XFxjcmVkaXQtY3VzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUdRLFVBQVUsRUFBQTs7QUFIbEI7RUFNUSxrQkFBa0IsRUFBQTs7QUFOMUI7SUFRWSxtQkFBbUIsRUFBQTs7QUFSL0I7TUFVZ0IsbUJBQW1CLEVBQUE7O0FBVm5DO0VBZVEsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsT0FBTyxFQUFBOztBQXJCZjtJQXVCWSxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQXhCdkI7SUEyQlksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUE3QjdCO01BK0JnQixhQUFhLEVBQUE7O0FBL0I3QjtNQWtDZ0IsY0FBYztNQUNkLFdBQVc7TUFDWCxXQUFXO01BQ1gsZUFBZSxFQUFBOztBQXJDL0I7UUF1Q29CLFdBQVcsRUFBQTs7QUF2Qy9CO01BMkNnQixZQUFZO01BQ1osWUFBWSxFQUFBOztBQTVDNUI7UUE4Q29CLFlBQVksRUFBQTs7QUE5Q2hDO0VBb0RRLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBdEQxQjtJQXdEWSxlQUFlLEVBQUE7O0FBeEQzQjtJQTJEWSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQTVEMUI7RUFnRVEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQXBFeEI7SUFzRVksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZSxFQUFBOztBQXpFM0I7SUE0RVksZ0JBQWdCLEVBQUE7O0FBSTVCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0kscUJBQ0osRUFBQTs7QUFFQTtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUVRLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1Esb0JBQW9CO0VBQ3BCLFdBQVcsRUFBQTs7QUFSbkI7RUFXUSw0QkFBNEI7RUFDNUIsaUNBQWlDLEVBQUE7O0FBSXpDO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUhoQjtJQUtRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBOztBQVJsQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3JlZGl0LWN1c3QtYWxsb3QvY3JlZGl0LWN1c3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRpdGVEcmVzcyB7XHJcbiAgICB3aWR0aDogMTElO1xyXG59XHJcblxyXG4udWktZy0xMiB7XHJcbiAgICAvLyBwYWRkaW5nOiAwO1xyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuaWNvQ29sb3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudmV0byB7XHJcbiAgICAgICAgd2lkdGg6IDM1NnB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmV0by10aXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgJi50dXJuLXRpcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZldG8tc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgICAgICAgICYudHVybi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZ3JlZSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGR0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZC5idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ29CYWNrIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0NzdweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NzdweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLldob2xlTmFtZXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS10YWJ2aWV3LXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudFxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1vdmVyZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNTQycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3VzdG9tZXItZGlzdHJpLWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmN1c3RvbWVyLWRpc3RyaS1jb250YWN0ZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm15UmVwb3J0IHtcclxuICAgIC5ob2xkLXByb2R1Y3QtYiB7XHJcbiAgICAgICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIH1cclxuICAgIC5ob2xkLXByb2R1Y3QtYmwge1xyXG4gICAgICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRIZWlnaHQge1xyXG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3BscyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnBlcnNvblNob3dTdHlsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dEFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAucHJvZ3Jlc3NUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnByb2dyZXNzIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0VGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdCAvZGVlcC8gLnJlcG9ydFRpdGxlIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgeyAgICBcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreditCustAllot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCustAllot", function() { return CreditCustAllot; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/business-information.bean */ "./src/app/pages/tzb/customCenter/credit-cust-allot/bean/business-information.bean.ts");
/* harmony import */ var _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _custom_custom_view_report_bean_report_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom/custom-view/report/bean/report.bean */ "./src/app/pages/tzb/custom/custom-view/report/bean/report.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.constant */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.constant.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreditCustAllot = /** @class */ (function () {
    function CreditCustAllot(commfunc, confirmationService, httpService, customCenterHttpService, commonHttpService, activatedRoute) {
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.customCenterHttpService = customCenterHttpService;
        this.commonHttpService = commonHttpService;
        this.activatedRoute = activatedRoute;
        this.TZB_HTTP_CUS1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_CUS1"];
        this.reportBean = new _custom_custom_view_report_bean_report_bean__WEBPACK_IMPORTED_MODULE_9__["ReportBean"]();
        this.msgs = [];
        this.vetoFirsts = []; //否决的一级原因
        this.tabIndex = '0';
        this.TurnReson = []; //转介绍原因
        this.personPage = false;
        this.vetoScrondOne = [];
        this.ex = [];
        this.resultList = {};
        this.bussinessMap = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_4__["BussinessMap"]();
        this.appproResultBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_4__["AppproResultBean"]();
        this.vetoBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_4__["VetoBean"]();
        this.subApproveMapBean = new _bean_business_information_bean__WEBPACK_IMPORTED_MODULE_4__["SubApproveMapBean"]();
        this.dataList = {};
        this.personVeto = [];
        this.financeVeto = [];
        this.manageVeto = [];
        this.serveVeto = [];
        this.otherVeto = [];
        this.vetoOption = [];
        //信息
        // cardMsg: any;
        this.isBack = false;
        this.isHistory = false;
        this.reportDisplay = false;
        this.progress = false;
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
        this.custInfo = {};
        // 婚姻状况
        this.maritalStatuss = [];
        this.applyRelationshipList = []; //与申请人关系
        // 居住状况
        this.liveStatuss = [];
        this.academic = []; //教育程度
        this.companyNature = []; //单位性质
        this.industry = []; //行业类型
        this.duty = []; //职务
        this.cardSend = []; //卡片寄送
        this.resultList = this.activatedRoute.snapshot.params;
        // this.resultList = {
        //     perssion: '?auth=zhhz'//临时写的
        // }
        if (this.commfunc.getSessionDataCH('distributeParams')) {
            this.dataMapParam = JSON.parse(this.commfunc.getSessionDataCH('distributeParams')); //dataMap里面的值
            if (this.dataMapParam.acountNo) {
                var cardType = this.dataMapParam.acountNo.slice(13, 14);
                this.dataMapParam['cardType'] = cardType == '1' ? '1' : '2';
            }
            this.queryPage(this.dataMapParam); //客户请求编号到时候从dataMap里面取
        }
        // this.queryPage();//客户请求编号到时候从dataMap里面取
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
        // if (this.resultList.dataSource == '01' || this.resultList.dataSource == '02') {
        //     let infoBean = {
        //         dataSource: this.resultList.dataSource, // 数据来源
        //         requestSeqNo: this.resultList.requestSeqNo, // 请求流水ID
        //         workEffortId: this.resultList.workEffortId, //工作任务编号
        //     }
        //     this.httpService.queryCustomerInfoByWorkEffCondition(infoBean).subscribe(data => {
        //         if (data.returnCode.code == "success") {
        //             if (data.workEffortList && data.workEffortList.length > 0) {
        //                 this.dataList['fieldList'] = data.workEffortList[0].fieldList;
        //                 this.queryBasicInfo();
        //             }
        //         } else {
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //         }
        //     }, err => {
        //         this.msgs = [];
        //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        //     })
        // } else if (this.resultList.dataSource == '03') {
        //     this.queryBasicInfo();
        // }
        this.queryBasicInfo();
        this.codeValues(); //调用方法，获取全部码值
        this.TurnReson = this.code['TurnReson']; //转介绍原因
        this.vetoFirsts = this.code['VETOFIRDTS']; //一级原因
        this.personVeto = this.code['personVeto']; //二级原因-个人原因
        this.financeVeto = this.code['financeVeto']; //财务因素
        this.manageVeto = this.code['manageVeto']; //经营因素
        this.serveVeto = this.code['serveVeto']; //服务因素
        this.otherVeto = this.code['otherVeto']; //其他原因
        this.maritalStatuss = this.code['MARITAL_STATUS']; //婚姻状况
        this.applyRelationshipList = this.code['ContactTypeS']; //与申请人关系
        this.liveStatuss = this.code['LIVE_STATUS']; //居住状况
        this.academic = this.code['ACADEMIC']; //教育程度
        this.companyNature = this.code['ConmpanyNature']; //单位性质
        this.industry = this.code['InvolvedS']; //行业类型
        this.duty = this.code['Duty']; //职务
        this.cardSend = this.code['CardSend']; //卡片寄送
        if (this.resultList.taskActors && this.resultList.taskActors != '') {
            this.businessId = this.resultList.taskActors.split(',')[0] + ',' + this.resultList.taskId;
        }
    }
    CreditCustAllot.prototype.ngOnInit = function () {
        var _this = this;
        this.vetoBean.oneVetoReason = this.vetoFirsts[0].value;
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
    //查页面数据
    CreditCustAllot.prototype.queryPage = function (item) {
        var _this = this;
        this.customCenterHttpService.queryCustRequestDetail({ custRequestId: item.custRequestId }).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.custInfo = data;
                _this.queryCard(data);
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
    CreditCustAllot.prototype.queryBasicInfo = function () {
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
        // this.cardMsg = {};
        // if (this.dataList.dataSource == '01') {
        //     this.dataList['fieldList'].forEach(e => {
        //         if (e['key'] == 'custNo' || e['key'] == 'custId') {
        //             this.cardMsg['custNo'] = e['value'];
        //         }
        //         if (e['key'] == 'custName') {
        //             this.cardMsg['custName'] = e['value'];
        //         }
        //         if (e['key'] == 'globalId' || e['key'] == 'idNo') {
        //             this.cardMsg['cetId'] = e['value'];
        //         }
        //         if (e['key'] == 'idType' || e['key'] == 'globalType') {
        //             this.cardMsg['cretType'] = e['value'];
        //         }
        //     })
        // } else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '10') {
        //     this.cardMsg['custName'] = this.dataList['fieldList'][0]['custName'];
        //     if (this.dataList['fieldList'][0]['custId']) {
        //         this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custId']
        //     } else if (this.dataList['fieldList'][0]['custNo']) {
        //         this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custNo']
        //     }
        //     if (this.dataList['fieldList'][0]['globalId']) {
        //         this.cardMsg['cetId'] = this.dataList['fieldList'][0]['globalId']
        //     } else if (this.dataList['fieldList'][0]['idNo']) {
        //         this.cardMsg['cetId'] = this.dataList['fieldList'][0]['idNo']
        //     }
        //     if (this.dataList['fieldList'][0]['idType']) {
        //         this.cardMsg['cretType'] = this.dataList['fieldList'][0]['idType']
        //     } else if (this.dataList['fieldList'][0]['globalType']) {
        //         this.cardMsg['cretType'] = this.dataList['fieldList'][0]['globalType']
        //     }
        // } else if (this.dataList.dataSource == '02' && this.dataList['taskType'] == '11') {
        //     this.cardMsg['custName'] = this.dataList['fieldList'][0]['custName'];
        //     if (this.dataList['fieldList'][0]['custId']) {
        //         this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custId']
        //     } else if (this.dataList['fieldList'][0]['custNo']) {
        //         this.cardMsg['custNo'] = this.dataList['fieldList'][0]['custNo']
        //     }
        //     if (this.dataList['fieldList'][0]['globalId']) {
        //         this.cardMsg['cetId'] = this.dataList['fieldList'][0]['globalId']
        //     } else if (this.dataList['fieldList'][0]['idNo']) {
        //         this.cardMsg['cetId'] = this.dataList['fieldList'][0]['idNo']
        //     }
        //     if (this.dataList['fieldList'][0]['idType']) {
        //         this.cardMsg['cretType'] = this.dataList['fieldList'][0]['idType']
        //     } else if (this.dataList['fieldList'][0]['globalType']) {
        //         this.cardMsg['cretType'] = this.dataList['fieldList'][0]['globalType']
        //     }
        // } else if (this.dataList.dataSource == '03') {
        //     this.cardMsg['custName'] = this.dataList['custName'];
        //     if (this.dataList['custId']) {
        //         this.cardMsg['custNo'] = this.dataList['custId']
        //     } else if (this.dataList['custNo']) {
        //         this.cardMsg['custNo'] = this.dataList['custNo']
        //     }
        //     if (this.dataList['globalId']) {
        //         this.cardMsg['cetId'] = this.dataList['globalId']
        //     } else if (this.dataList['idNo']) {
        //         this.cardMsg['cetId'] = this.dataList['idNo']
        //     }
        //     if (this.dataList['idType']) {
        //         this.cardMsg['cretType'] = this.dataList['idType']
        //     } else if (this.dataList['globalType']) {
        //         this.cardMsg['cretType'] = this.dataList['globalType']
        //     }
        // }
    };
    //码值
    CreditCustAllot.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //上行短信失效处理
    CreditCustAllot.prototype.disabledMsgUpside = function () {
        var _this = this;
        var params = {
            businessId: this.businessId,
            custNo: this.custInfo.custNo
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
    // creatMainMsg(param) {
    //     let params = this.commfunc.handleParams(param);
    //     this.httpService.createReportMainInfo(param).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             this.inValueReportId = _.clone(data.inValueReportIdBak);
    //             this.cusId = _.clone(data.cusIdBak);
    //             this.customerDistribute = '1';
    //         } else {
    //             this.msgs = [];
    //             this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
    //     })
    // }
    CreditCustAllot.prototype.turnPost = function () {
        if (this.personName == null && this.personName == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选人员！' }];
        }
        else {
            this.postPage = true;
        }
    };
    CreditCustAllot.prototype.show = function (value) {
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
    CreditCustAllot.prototype.agree = function () {
        this.personDis = true;
    };
    //next节点
    CreditCustAllot.prototype.disposeSchedule = function () {
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
    CreditCustAllot.prototype.agreeClick = function () {
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
            custNo: this.custInfo.custNo,
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
    CreditCustAllot.prototype.close = function () {
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
    CreditCustAllot.prototype.turnStaff = function () {
        this.personPage = true;
        this.userInValue = '0000';
    };
    //转介绍人员回调
    CreditCustAllot.prototype.perInfor = function (item) {
        this.bussinessMap.specifyNextOpers = item[0].tellerId;
        this.personName = item[0].tellerName;
        this.postName = null;
        this.personPage = false;
    };
    //转介绍
    CreditCustAllot.prototype.rurnClick = function () {
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
    CreditCustAllot.prototype.vetoClick = function () {
        var _this = this;
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
            this.vetoBean.custNo = this.custInfo.custNo; // 客户号
        this.vetoBean.globalType = this.certType; // 证件类型
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
    CreditCustAllot.prototype.vetoChange = function (event) {
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
    CreditCustAllot.prototype.vetoChangeTwoReson = function (event) {
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
    CreditCustAllot.prototype.zjsChange = function (event) {
        this.otherInfo = '';
    };
    CreditCustAllot.prototype.doUp = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    CreditCustAllot.prototype.postInfor = function (e) {
        this.postName = e[0].postName;
        this.bussinessMap.post = e[0]['postId'];
        this.checkManager();
    };
    CreditCustAllot.prototype.checkManager = function () {
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
    CreditCustAllot.prototype.personDiss = function (e) {
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
    CreditCustAllot.prototype.checkSerIal = function (num, num2) {
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
    CreditCustAllot.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.inValue = param.orgId;
    };
    //转介绍机构
    CreditCustAllot.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //转介绍员工回调
    CreditCustAllot.prototype.perTreeCall = function (event) {
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
    CreditCustAllot.prototype.perShow = function () {
        if (!this.inValue) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择接收机构!' });
            return;
        }
        this.personShow = true;
    };
    // 查看BI报告
    CreditCustAllot.prototype.lookReport = function () {
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        // let param = { custNo: this.dataList['custNo'] }
        var param = { custNo: this.custInfo.custNo };
        var params = this.commfunc.handleParams(param);
        var TZB_HTTP_CUS1 = this.TZB_HTTP_CUS1 + app_pages_tzb_custom_http_custom_view_custom_view_constant__WEBPACK_IMPORTED_MODULE_10__["API"].creditReportCheck;
        var _self = this;
        jquery__WEBPACK_IMPORTED_MODULE_11__["ajax"]({
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
                        _self.creatMainMsg({ custNo: _self.custInfo.custNo, modNum: data.updatedNum, custName: _self.custInfo.custName, qryUserId: _self.userId, cretType: _self.certType, cretNo: _self.certID, qryUserName: userName, crdtReportNo: data.crdtReportNo, accessWay: '1' });
                    }
                    else {
                        _self.inValueReportId = data.reportId;
                        _self.reportCustNm = _self.custInfo.custNo;
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
    CreditCustAllot.prototype.creatMainMsg = function (param) {
        var _this = this;
        this.progress = true;
        var params = this.commfunc.handleParams(param);
        this.httpService.createReportMainInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.inValueReportId = data.reportId;
                _this.reportCustNm = _this.custInfo.custNo;
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
    CreditCustAllot.prototype.queryCard = function (data) {
        var _this = this;
        this.httpService.selectCustBriefInfo({ custNo: data.custNo }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.certType = data.idenType;
                _this.certID = data.idenNum;
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        });
    };
    //打回原因
    CreditCustAllot.prototype.hitClick = function () {
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
    CreditCustAllot = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "credit-cust",
            template: __webpack_require__(/*! ./credit-cust.component.html */ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.html"),
            styles: [__webpack_require__(/*! ./credit-cust.component.scss */ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomCenterHttpService"], _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CusViewHttpService"],
            _http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomCenterHttpService"],
            _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__["CommonHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreditCustAllot);
    return CreditCustAllot;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.module.ts ***!
  \********************************************************************************/
/*! exports provided: CreditCustAllotTModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCustAllotTModule", function() { return CreditCustAllotTModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_customCenter_customCenterCommon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/customCenter/customCenterCommon.module */ "./src/app/pages/tzb/customCenter/customCenterCommon.module.ts");
/* harmony import */ var _credit_cust_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-cust.component */ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.ts");
/* harmony import */ var _credit_cust_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit-cust.routing */ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.routing.ts");
/* harmony import */ var _query_cust_post1_query_cust_post1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query-cust-post1/query-cust-post1.component */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.ts");
/* harmony import */ var _query_cust_org1_query_cust_org1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./query-cust-org1/query-cust-org1.component */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CreditCustAllotTModule = /** @class */ (function () {
    function CreditCustAllotTModule() {
    }
    CreditCustAllotTModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _credit_cust_routing__WEBPACK_IMPORTED_MODULE_7__["CreditCustAllotRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_customCenter_customCenterCommon_module__WEBPACK_IMPORTED_MODULE_5__["TzbCustomCenterCommonModule"],
            ],
            declarations: [
                _credit_cust_component__WEBPACK_IMPORTED_MODULE_6__["CreditCustAllot"],
                _query_cust_post1_query_cust_post1_component__WEBPACK_IMPORTED_MODULE_8__["QueryCustPost1"],
                _query_cust_org1_query_cust_org1_component__WEBPACK_IMPORTED_MODULE_9__["QueryCustOrgTree1"]
            ],
            providers: []
        })
    ], CreditCustAllotTModule);
    return CreditCustAllotTModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: routes, CreditCustAllotRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCustAllotRouting", function() { return CreditCustAllotRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _credit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-cust.component */ "./src/app/pages/tzb/customCenter/credit-cust-allot/credit-cust.component.ts");


var routes = [
    {
        path: '',
        component: _credit_cust_component__WEBPACK_IMPORTED_MODULE_1__["CreditCustAllot"]
    }
];
var CreditCustAllotRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/bean/query-cust-org.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/bean/query-cust-org.bean.ts ***!
  \******************************************************************************************************/
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

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 org\">\r\n    <p-tree [value]=\"date\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org {\n  visibility: show !important;\n  height: 500px; }\n\n.tree {\n  height: 300px !important;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jcmVkaXQtY3VzdC1hbGxvdC9xdWVyeS1jdXN0LW9yZzEvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tQ2VudGVyXFxjcmVkaXQtY3VzdC1hbGxvdFxccXVlcnktY3VzdC1vcmcxXFxxdWVyeS1jdXN0LW9yZzEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3JlZGl0LWN1c3QtYWxsb3QvcXVlcnktY3VzdC1vcmcxL3F1ZXJ5LWN1c3Qtb3JnMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmcge1xyXG4gICAgdmlzaWJpbGl0eTogc2hvdyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnRyZWUge1xyXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QueryCustOrgTree1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustOrgTree1", function() { return QueryCustOrgTree1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var _bean_query_cust_org_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/query-cust-org.bean */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/bean/query-cust-org.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryCustOrgTree1 = /** @class */ (function () {
    function QueryCustOrgTree1(uisftechCommonHttpService, commfunc) {
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orgTreeBean = new _bean_query_cust_org_bean__WEBPACK_IMPORTED_MODULE_3__["OrgTreeBean"]();
        //提示信息
        this.msgs = [];
    }
    QueryCustOrgTree1.prototype.ngOnInit = function () {
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
    QueryCustOrgTree1.prototype.nodeCheck = function (event) {
        this.treeOrgName = event.node.label;
        this.orgEle = { orgId: event.node.orgId, orgName: event.node.orgName, location: event.node.location };
        this.outValue.emit(this.orgEle);
    };
    //点击加号
    QueryCustOrgTree1.prototype.nodeExpend = function (event) {
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
    QueryCustOrgTree1.prototype.toTree = function (data) {
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
    QueryCustOrgTree1.prototype.query = function () {
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
    ], QueryCustOrgTree1.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QueryCustOrgTree1.prototype, "outValue", void 0);
    QueryCustOrgTree1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'query-cust-org1',
            template: __webpack_require__(/*! ./query-cust-org1.component.html */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.html"),
            styles: [__webpack_require__(/*! ./query-cust-org1.component.scss */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-org1/query-cust-org1.component.scss")],
            providers: [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__["UisftechCommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        })
        /**
         * 机构对应关系
         */
        ,
        __metadata("design:paramtypes", [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_2__["UisftechCommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], QueryCustOrgTree1);
    return QueryCustOrgTree1;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/bean/query-cust-post.bean.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/bean/query-cust-post.bean.ts ***!
  \********************************************************************************************************/
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

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">岗位编号:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.postId\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">岗位名称:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.postName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">工号:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.userLoginId\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-4 tit\">员工姓名:</div>\r\n            <div class=\"ui-g-8\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryCustBean.userName\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" (click)=\"queryScale()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" (click)=\"reset()\" label=\"重置\"></button>\r\n    </div>\r\n    <!-- 表格 -->\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"tableData\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" dataKey=\"tellerName\">\r\n            <p-column field=\"partyId\" header=\"机构编号\"></p-column>\r\n            <p-column field=\"partyName\" header=\"机构名称\"></p-column>\r\n            <p-column field=\"postId\" header=\"岗位编号\"></p-column>\r\n            <p-column field=\"postName\" header=\"岗位名称\"></p-column>\r\n            <p-column field=\"userLoginId\" header=\"工号\"></p-column>\r\n            <p-column field=\"userName\" header=\"员工姓名\"></p-column>\r\n        </p-dataTable>\r\n\r\n        <!-- 分页 -->\r\n        <p-paginator rows=\"{{queryCustBean.pageSize}}\" totalRecords=\"{{total}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right;\n  line-height: 27px; }\n\n.btn,\n.table {\n  text-align: center; }\n\n.ui-g-3 {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9jcmVkaXQtY3VzdC1hbGxvdC9xdWVyeS1jdXN0LXBvc3QxL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxcY3JlZGl0LWN1c3QtYWxsb3RcXHF1ZXJ5LWN1c3QtcG9zdDFcXHF1ZXJ5LWN1c3QtcG9zdDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCOztFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b21DZW50ZXIvY3JlZGl0LWN1c3QtYWxsb3QvcXVlcnktY3VzdC1wb3N0MS9xdWVyeS1jdXN0LXBvc3QxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4uYnRuLFxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51aS1nLTN7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QueryCustPost1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustPost1", function() { return QueryCustPost1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var _bean_query_cust_post_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/query-cust-post.bean */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/bean/query-cust-post.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryCustPost1 = /** @class */ (function () {
    function QueryCustPost1(httpService) {
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queryCustBean = new _bean_query_cust_post_bean__WEBPACK_IMPORTED_MODULE_2__["QueryCustBean"]();
        this.first = 0;
        //提示信息
        this.msgs = [];
    }
    QueryCustPost1.prototype.ngOnInit = function () {
        if (this.inValue) {
            this.queryCustBean.partyId = this.inValue;
        }
        this.queryCustBean.pageNum = '1';
        this.queryCustBean.pageSize = '10';
        this.queryScale();
    };
    QueryCustPost1.prototype.queryScale = function () {
        this.queryCustBean.pageNum = '1';
        this.queryCustBean.pageSize = '10';
        this.first = 0;
        this.quertList();
    };
    QueryCustPost1.prototype.quertList = function () {
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
    QueryCustPost1.prototype.paginate = function (event) {
        this.queryCustBean.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.queryCustBean.pageNum = currentPage.toString();
        this.first = parseInt(this.queryCustBean.pageSize) * parseInt(this.queryCustBean.pageSize);
        this.quertList();
    };
    // 选中一行
    QueryCustPost1.prototype.onRowSelect = function (event) {
        var personArr = [];
        personArr.push(event.data);
        this.outValue.emit(personArr);
    };
    // 重置
    QueryCustPost1.prototype.reset = function () {
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
    ], QueryCustPost1.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QueryCustPost1.prototype, "inValue", void 0);
    QueryCustPost1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "query-cust-post1",
            template: __webpack_require__(/*! ./query-cust-post1.component.html */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.html"),
            styles: [__webpack_require__(/*! ./query-cust-post1.component.scss */ "./src/app/pages/tzb/customCenter/credit-cust-allot/query-cust-post1/query-cust-post1.component.scss")],
            providers: [app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomCenterHttpService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomCenterHttpService"]])
    ], QueryCustPost1);
    return QueryCustPost1;
}());



/***/ })

}]);
//# sourceMappingURL=credit-cust-allot-credit-cust-module.js.map