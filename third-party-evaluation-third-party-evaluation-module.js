(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-party-evaluation-third-party-evaluation-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 评价人评价 -->\r\n<div class=\"basis-group\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 boxShadow\">\r\n      <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"appraiser\"></header-title>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-2 label-css\">\r\n            <label appValidation>评价人名称:</label>\r\n          </div>\r\n          <div class=\"ui-g-4 input-css\">\r\n            <p-dropdown [options]=\"evalName\" (onChange)=\"roleIdChange()\" [(ngModel)]=\"evalNameSel\" [style]=\"{'width':'290px'}\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2 label-css\">\r\n            <label>评价人客户号:</label>\r\n          </div>\r\n          <div class=\"ui-g-4 input-css\">\r\n            <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"sysCreditEvalOut\" readonly=\"readonly\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-12 evaluate-css btn-batch-import\">\r\n            <span class=\"icoColor\" (click)=\"add()\" *ngIf=\"permissionCheck('SID00002_P027_P001_P002_P001_P001')\">新增</span>\r\n            <button (click)=\"btnBatchImport()\" pButton type=\"button\" label=\"批量导入>>\" *ngIf=\"permissionCheck('SID00002_P027_P001_P002_P001_P002')\"></button>\r\n          </div>\r\n\r\n          <!-- 评价信息 -->\r\n          <div class=\"ui-g-12\">\r\n            <header-title [Info]=\"evaluateInformation\"></header-title>\r\n          </div>\r\n          <div class=\"ui-g-12 evalListTable base-table\">\r\n            <p-dataTable class=\"groupTabBottom\" [value]=\"list_1\" [emptyMessage]=\"tableMesg\" scrollable=\"true\">\r\n              <p-column header=\"序号\" [style]=\"{'width':'5%'}\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  {{i+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"客户号\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.partyId}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"客户名称\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.partyName}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"健康状况\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupHealthFlag\" [(ngModel)]=\"col.healthFlag\"></p-dropdown>\r\n                    <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"信用评价\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupCreditEval\" [(ngModel)]=\"col.creditEval\"></p-dropdown>\r\n                    <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.creditEval\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"不良嗜好\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupBadHabits\" [(ngModel)]=\"col.badHabits\"></p-dropdown>\r\n                    <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.badHabits\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"家庭关系状况\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupFamilyStableFlag\" [(ngModel)]=\"col.familyStableFlag\"></p-dropdown>\r\n                    <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.familyStableFlag\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"收入来源\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupSourceOfIncome\" [(ngModel)]=\"col.sourceOfIncome\"></p-dropdown>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.sourceOfIncome\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"家庭年收入\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupIncomeLevel\" [(ngModel)]=\"col.incomeLevel\"></p-dropdown>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.incomeLevel\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"车辆情况\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupCarFlag\" [(ngModel)]=\"col.carFlag\"></p-dropdown>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.carFlag\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"建议额度\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"ui-g-12\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"groupOfferLines\" [(ngModel)]=\"col.offerLines\"></p-dropdown>\r\n                    <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                  </div>\r\n                  <!-- <div class=\"customGroupEvaluateInput\">\r\n                    <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"col.offerLines\">\r\n                  </div> -->\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"operation\" header=\"操作\" [style]=\"{'width':'5%'}\">\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"table-button\">\r\n                    <span class=\"tabelDeleteIco\" (click)=\"delGroupEvalInfo(i)\">删除</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n          <div class=\"ui-g-12\" id=\"submitBtn\">\r\n            <button pButton label=\"提交\" (click)=\"submitGroupEvalInfo()\"></button>\r\n            <button pButton *ngIf=\"customInfoFlag == 0\" label=\"返回视图\" (click)=\"returnCustGroupView()\"></button>\r\n            <button pButton *ngIf=\"customInfoFlag == 1\" label=\"返回单客户页面\" (click)=\"returnCustInfo()\"></button>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-1 explain-css\">\r\n                相关说明:\r\n              </div>\r\n              <div class=\"ui-g-11 detail-css\">\r\n                <div class=\"ui-g\">\r\n                  1、一条有效的评价信息，至少要保含：评价人，信用评价，不良嗜好，健康状况，家庭关系情况，建议额度。\r\n                </div>\r\n                <div class=\"ui-g\">\r\n                  2、无效的信息不能提交，提交时会提示补录信息\r\n                </div>\r\n                <div class=\"ui-g\">\r\n                  3、请仔细核实评价信息，确保信息的有效性\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 模态框,新增 -->\r\n<p-dialog *ngIf=\"custGroupListDisplay\" [(visible)]=\"custGroupListDisplay\" modal=\"true\" class=\"addDialog\">\r\n  <p-header>\r\n    新增\r\n  </p-header>\r\n  <app-eval-custGroupList [inVal]=\"inVal\" [data]=\"data\" [groupId]=\"groupId\" [groupName]=\"groupName\" (event)=\"closeCustGroupList($event)\"></app-eval-custGroupList>\r\n</p-dialog>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n\r\n<p-dialog *ngIf=\"saveDisplay\" [(visible)]=\"saveDisplay\" width=\"400\" (onHide)=\"onHid()\">\r\n  <label class=\"saveDialog\">是否确认更改评价人，并清空列表？</label>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveBtn()\" style=\"color:#fff;\" label=\"是\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"cancelBtn()\" style=\"color:#fff;\" label=\"否\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- 批量导入 -->\r\n<p-dialog [(visible)]=\"batchDisplay\" modal=\"modal\" width=\"900\" height=\"700\">\r\n  <p-header>\r\n    群评价人导入\r\n  </p-header>\r\n  <header-title [Info]=\"'名单导入'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <pre>\r\n          Excel文件格式说明：\r\n          Excel文件中潜在客户名称为必输项。\r\n          Excel文件最大不能超过200行记录。\r\n          更多注意事项请查看模板中的“填表说明”。\r\n          请先下载模板：\r\n          <!-- <a href=\"{{DOWNLOAD}}?fileName={{fileName}}&fileUrl={{fileUrl}}\">下载模板</a> -->\r\n          <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custEvalImport.xls\">下载模板</a>\r\n      </pre>\r\n    <div class=\"ui-g-12\">\r\n      <strong>批量创建（Ecxel导入）</strong>\r\n      <br/>\r\n      <label for=\"\">文件导入</label>\r\n      <p-fileUpload accept=\".xls\" chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n        invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\">\r\n      </p-fileUpload>\r\n      <div *ngIf=\"files.length>0\">\r\n        <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n    <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 导入结果返回显示 -->\r\n<p-dialog [(visible)]=\"addDisplay\" modal=\"modal\" width=\"900\" height=\"700\">\r\n  <header-title [Info]=\"title2\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <span>成功条数：</span>\r\n      <span>{{custGroupListBean.successNum}}</span>\r\n      <span>条</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <span>失败条数：</span>\r\n      <span>{{custGroupListBean.failNum}}</span>\r\n      <span>条</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"custGroupListBean.failInfoList\">\r\n      <p-column header=\"行号\">\r\n        <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n          {{custGroupListBean.failInfoList[i].rowNum}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"失败原因\">\r\n        <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n          {{custGroupListBean.failInfoList[i].failReason}}\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group {\n  overflow: auto;\n  min-width: 900px; }\n  .basis-group .form-group .label-css {\n    text-align: right; }\n  .basis-group .form-group .input-css {\n    text-align: left; }\n  .basis-group .btn-submit {\n    text-align: center; }\n  .basis-group .btn-batch-import {\n    text-align: right; }\n  .basis-group .explain-css {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .basis-group .detail-css {\n    color: red; }\n  .basis-group .evaluate-css {\n    padding-top: 50px; }\n  .evalListTable {\n  text-align: center; }\n  .boxShadow {\n  margin-top: 10px; }\n  #submitBtn {\n  text-align: center;\n  margin-top: 20px; }\n  .redSapn {\n  color: red;\n  font-size: 12px; }\n  .saveDialog {\n  width: 100%;\n  height: 40px;\n  display: inline-block;\n  text-align: center;\n  line-height: 40px; }\n  a {\n  color: #0094D2;\n  font-weight: bold; }\n  :host/deep/ .evalListTable .ui-dropdown {\n  font-size: 12px !important;\n  line-height: 18px !important;\n  min-width: 0;\n  width: calc(100% - 12px) !important; }\n  :host/deep/ .addDialog .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvdGhpcmQtcGFydHktZXZhbHVhdGlvbi9hcHByYWlzZXItZXZhbHVhdGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXHRoaXJkLXBhcnR5LWV2YWx1YXRpb25cXGFwcHJhaXNlci1ldmFsdWF0ZVxcYXBwcmFpc2VyLWV2YWx1YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBRnBCO0lBV1ksaUJBQWlCLEVBQUE7RUFYN0I7SUFjWSxnQkFBZ0IsRUFBQTtFQWQ1QjtJQWtCUSxrQkFBa0IsRUFBQTtFQWxCMUI7SUFxQlEsaUJBQWlCLEVBQUE7RUFyQnpCO0lBd0JRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUExQi9CO0lBNkJRLFVBQVUsRUFBQTtFQTdCbEI7SUFnQ1EsaUJBQWlCLEVBQUE7RUFJekI7RUFJSSxrQkFBa0IsRUFBQTtFQUl0QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTtFQUduQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1DQUFtQyxFQUFBO0VBR3ZDO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvdGhpcmQtcGFydHktZXZhbHVhdGlvbi9hcHByYWlzZXItZXZhbHVhdGUvYXBwcmFpc2VyLWV2YWx1YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2lzLWdyb3VwIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiA5MDBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MjBweCkge1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgLy8gZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIC5sYWJlbC1jc3Mge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LWNzcyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYmF0Y2gtaW1wb3J0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5leHBsYWluLWNzcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbC1jc3Mge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAuZXZhbHVhdGUtY3NzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV2YWxMaXN0VGFibGUge1xyXG4gICAgLy8gbWF4LXdpZHRoOjE3NzBweCFpbXBvcnRhbnQ7XHJcbiAgICAvLyBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ib3hTaGFkb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI3N1Ym1pdEJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmVkU2FwbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2F2ZURpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ldmFsTGlzdFRhYmxlIC51aS1kcm9wZG93biB7XHJcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHghaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5hZGREaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AppraiserEvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppraiserEvaluateComponent", function() { return AppraiserEvaluateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/GroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/bean/GroupAdminInfo.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
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










var AppraiserEvaluateComponent = /** @class */ (function () {
    function AppraiserEvaluateComponent(httpService, confirmationService, routerInfo, router, commfunc) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.commfunc = commfunc;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"];
        // 标题
        this.appraiserEvaluate = "评价人评价";
        this.appraiser = "评价人";
        this.evaluateInformation = "评价信息";
        this.groupEvalInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["GroupEvalInfoBean"](); //第三方评价
        this.groupAdminInfoBean = new _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__["GroupAdminInfoBean"](); //客户群管理人员
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupListBean"](); //客户群名单
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_UPLOAD"];
        this.msgs = [];
        this.isChange = false;
        this.evalNameSel = ''; //评价人选择绑定
        this.items = [];
        // 模态框传参
        this.custGroupListDisplay = false; //模态框隐现
        this.inVal = [];
        this.data = {};
        // 模态框
        this.saveDisplay = false;
        //
        this.files = [];
        this.fileList = []; //上传文件列表
        // UPLOAD: string = TZB_CUS_UPLOAD;
        // 模态框
        this.batchDisplay = false; //批量导入
        this.addDisplay = false; //返回结果
        this.first = 0;
        // 链接传参
        this.valTemp1 = ''; //客户名单传来字符
        this.valTemp2 = ''; //客户名单传来字符待分割数组
        this.groupId = ''; //群号
        this.groupName = ''; //群号
        this.custGroupView = ''; //群号
        this.customInfoFlag = 0; //显示返回按钮
        this.customInfoData = ''; //单客户传参
        // 中间量
        this.isSave = false;
        this.title2 = '群评价人批量导入';
        this.fileNameFlag = true; //
    }
    AppraiserEvaluateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.groupHealthFlag = this.code['GroupHealthFlag'];
        this.groupCreditEval = this.code['GroupCreditEval'];
        this.groupSourceOfIncome = this.code['GroupSourceOfIncome'];
        this.groupFamilyStableFlag = this.code['GroupFamilyStableFlags'];
        this.groupBadHabits = this.code['GroupBadHabits'];
        this.groupCarFlag = this.code['GroupCarFlag'];
        this.groupIncomeLevel = this.code['GroupIncomeLevel'];
        this.groupOfferLines = this.code['GroupOfferLinese'];
        //初始化list
        setTimeout(function () {
            _this.list_1 = [];
        });
        //
        this.preSet();
        this.selectGroupAdminInfo(); // 客户群管理人员
    };
    //码值
    AppraiserEvaluateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    AppraiserEvaluateComponent.prototype.preSet = function () {
        // // 假数据
        // this.groupId = '360001'
        // let tempArr = [
        //   {
        //     partyId: '1',
        //     partyName: '2'
        //   }
        // ]
        // this.groupEvalInfoBean.evalList = _.clone(tempArr);
        // 初始化
        // 链接传值
        if (this.routerInfo.snapshot.queryParams['cgId']) {
            this.groupId = this.routerInfo.snapshot.queryParams['cgId'];
        }
        if (this.routerInfo.snapshot.params['cId']) {
            this.valTemp1 = this.routerInfo.snapshot.params['cId'];
        }
        if (this.routerInfo.snapshot.params['cName']) {
            this.valTemp2 = this.routerInfo.snapshot.params['cName'];
        }
        //判断
        var valTemp1Arr = [];
        var valTemp2Arr = [];
        // 客户号
        var flag = this.valTemp1.split(',');
        if (this.valTemp1 == '') {
            valTemp1Arr = [];
        }
        else if (this.valTemp1.length == 1) {
            valTemp1Arr.push(this.valTemp1);
        }
        else {
            valTemp1Arr = this.valTemp1.split(',');
        }
        // 客户名
        if (this.valTemp2 == '') {
            valTemp2Arr = [];
        }
        else if (this.valTemp2.length == 1) {
            valTemp2Arr = [this.valTemp2];
        }
        else {
            valTemp2Arr = this.valTemp2.split(',');
        }
        // 组合
        var evalListArr = [];
        if (valTemp1Arr.length > 0) {
            for (var i in valTemp1Arr) {
                evalListArr.push({ partyId: valTemp1Arr[i], partyName: valTemp2Arr[i] });
            }
            this.groupEvalInfoBean.evalList = evalListArr;
        }
        // 其他链接传参--主要
        if (this.routerInfo.snapshot.params['id']) {
            this.groupId = this.routerInfo.snapshot.params['id'];
        }
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId'];
        }
        if (this.routerInfo.snapshot.params['groupName']) {
            this.groupName = this.routerInfo.snapshot.params['groupName'];
            this.appraiser = this.groupName + '-' + this.appraiser;
            this.evaluateInformation = this.groupName + '-' + this.evaluateInformation;
        }
        if (this.routerInfo.snapshot.params.customInfoFlag) {
            this.customInfoFlag = this.routerInfo.snapshot.params.customInfoFlag;
        }
        if (this.routerInfo.snapshot.params.data) {
            this.customInfoData = this.routerInfo.snapshot.params.data;
        }
        this.groupEvalInfoBean.groupId = this.groupId;
        this.groupEvalInfoBean.handleFlag = '1';
        this.groupEvalInfoBean.sysCreditEval = '';
        this.custGroupListBean.groupId = this.groupId; //名单
        // this.groupEvalInfoBean.evalList = [];
        // let temp = [{ evalName: '1',incomeLevel:'rer' }, { evalName: '2' }, { evalName: '3' }]//假数据  
        // this.groupEvalInfoBean.evalList = _.clone(temp);
    };
    AppraiserEvaluateComponent.prototype.roleIdChange = function () {
        //评价人联动评价人客户号
        this.saveDisplay = true;
        this.list_1 = [];
        // this.sysCreditEvalOut = this.evalNameSel;
        // this.msgs = [{ severity: 'info', summary: '确定', detail: '你保存了评价人信息' }];
        // this.isChange = false;
        // this.evalNameSel = this.sysCreditEvalOut;
        // this.msgs = [{ severity: 'info', summary: '取消', detail: '取消' }];
        // this.isChange = false;
    };
    AppraiserEvaluateComponent.prototype.saveBtn = function () {
        this.sysCreditEvalOut = this.evalNameSel;
        this.groupEvalInfoBean.evalList = [];
        this.msgs = [];
        this.msgs = [{ severity: 'info', summary: '确定', detail: '您更改了评价人信息' }];
        this.saveDisplay = false;
    };
    AppraiserEvaluateComponent.prototype.cancelBtn = function () {
        this.evalNameSel = this.sysCreditEvalOut;
        this.msgs = [];
        this.msgs = [{ severity: 'info', summary: '取消', detail: '取消' }];
        this.saveDisplay = false;
    };
    AppraiserEvaluateComponent.prototype.onHid = function () {
        // 关闭确定模态框--
        this.evalNameSel = this.sysCreditEvalOut;
    };
    AppraiserEvaluateComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 正式使用或用bean
        this.groupAdminInfoBean.groupId = this.groupId; //群号
        this.groupAdminInfoBean.roleType = '4'; //角色类型，评价人
        this.groupAdminInfoBean.statusId = '1'; //状态
        this.httpService.selectGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 客户群管理人员
                _this.evalName = [];
                for (var i in data.roleList) {
                    _this.evalName.push({ label: data.roleList[i].userName, value: data.roleList[i].userId });
                }
                if (data.roleList) {
                    _this.evalNameSel = data.roleList[0].userId;
                }
                if (data.roleList) {
                    _this.sysCreditEvalOut = data.roleList[0].userId;
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    AppraiserEvaluateComponent.prototype.submitGroupEvalInfo = function () {
        // 提交,客户群第三方评价
        var _this = this;
        if (this.groupEvalInfoBean.evalList.length != 0) {
            var flag1 = true;
            flag1 = this.isNull(); //非空校验
            if (!flag1) {
                return;
            }
        }
        this.confirmationService.confirm({
            message: '确定提交?',
            accept: function () {
                // this.evalNameSel = '2'//假数据
                _this.groupEvalInfoBean.sysCreditEval = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.evalNameSel);
                // for (let i in this.groupEvalInfoBean.evalList) {
                //   this.groupEvalInfoBean.evalList[i].sysCreditEval = _.clone(this.evalNameSel);
                // }
                var tempName = '';
                _this.evalName.forEach(function (item) {
                    if (item.value == _this.evalNameSel) {
                        tempName = item.label;
                    }
                });
                _this.groupEvalInfoBean.evalList.forEach(function (item) {
                    item.sysCreditEval = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.evalNameSel);
                    item.evalName = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempName);
                });
                //
                var parames = {
                    groupId: _this.groupId,
                    handleFlag: "1",
                    sysCreditEval: _this.evalNameSel,
                    evalList: _this.list_1
                };
                //
                _this.httpService.addGroupEvalInfo(parames).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功!' }];
                        _this.selectCustGroupList(0);
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.message ? data.returnCode.message : '提交失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败!' }];
                });
            }
        });
    };
    AppraiserEvaluateComponent.prototype.add = function () {
        // this.confirmationService.confirm({
        //   message: '页面内容若未提交，确定新增覆盖吗?',
        //   accept: () => {
        // this.selectCustGroupList(1);
        // }
        // });
        this.custGroupListDisplay = true;
    };
    AppraiserEvaluateComponent.prototype.selectCustGroupList = function (i) {
        var _this = this;
        // 客户群名单查询 
        // 客户群名单查询
        this.first = 0;
        this.custGroupListBean.groupId = this.groupId;
        this.custGroupListBean.groupName = this.groupName;
        this.custGroupListBean.pageNum = 1;
        this.custGroupListBean.pageSize = 10;
        this.custGroupListBean["statusId"] = "1";
        var params = {
            groupId: this.groupId,
            pageNum: this.custGroupListBean.pageNum,
            pageSize: this.custGroupListBean.pageSize,
            statusId: 1
        };
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean = data;
                _this.custGroupListBean.custList = data.custList;
                _this.inVal = _this.custGroupListBean.custList; //客户名单异步传入
                _this.data = _this.custGroupListBean; //客户名单异步传入
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    AppraiserEvaluateComponent.prototype.closeCustGroupList = function (event) {
        var _this = this;
        // 关闭客户群名单查询模态框,顺便传回客户名。
        console.log(event);
        this.custGroupListDisplay = event.custGroupListDisplay;
        var tempArr = event.params;
        var returnFlag = false;
        if (tempArr) {
            var stu = tempArr.every(function (item) {
                var stu_2 = _this.groupEvalInfoBean.evalList.every(function (item_2) {
                    return item_2.partyId != item.custNo;
                });
                return stu_2;
            });
            var stu_9 = tempArr.every(function (item) {
                return item.custNo != _this.evalNameSel;
            });
            if (stu_9) {
                if (stu) {
                    tempArr.forEach(function (item) {
                        _this.groupEvalInfoBean.evalList.push(item);
                        _this.groupEvalInfoBean.evalList[_this.groupEvalInfoBean.evalList.length - 1]["partyId"] = item.custNo;
                        _this.groupEvalInfoBean.evalList[_this.groupEvalInfoBean.evalList.length - 1]["partyName"] = item.custName;
                    });
                    this.groupEvalInfoBean.evalList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.groupEvalInfoBean.evalList);
                    //
                    var evalName_1 = '';
                    this.evalName.forEach(function (element) {
                        if (_this.evalNameSel == element.value) {
                            evalName_1 = element.label;
                        }
                    });
                    //
                    event.params.forEach(function (element) {
                        _this.list_1.push({
                            partyId: element.custNo,
                            partyName: element.custName,
                            sysCreditEval: _this.evalNameSel,
                            evalName: evalName_1,
                            healthFlag: '',
                            creditEval: '',
                            badHabits: '',
                            familyStableFlag: '',
                            sourceOfIncome: '',
                            incomeLevel: '',
                            carFlag: '',
                            offerLines: '',
                        });
                    });
                    this.list_1 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.list_1);
                    //
                }
                else {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '已有客户号不能重复添加' }];
                }
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能选择与当前评价人相同客户！' }];
            }
        }
    };
    AppraiserEvaluateComponent.prototype.delGroupEvalInfo = function (index) {
        var _this = this;
        // 删除行
        this.confirmationService.confirm({
            message: '确定删除?',
            accept: function () {
                var arrTemp = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.list_1);
                arrTemp.splice(index, 1);
                _this.list_1 = arrTemp;
                _this.groupEvalInfoBean.evalList.splice(index, 1);
            }
        });
    };
    // 链接
    AppraiserEvaluateComponent.prototype.returnCustGroupView = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定返回客户群视图?',
            accept: function () {
                var groupId = _this.commfunc.compileStr(_this.groupId);
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: groupId, groupName: _this.groupName }]);
            }
        });
    };
    AppraiserEvaluateComponent.prototype.returnCustInfo = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定返回单客户页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-information-display', { groupId: _this.groupId, groupName: _this.groupName, data: _this.customInfoData }]);
            }
        });
    };
    //
    // --模态框相关
    AppraiserEvaluateComponent.prototype.btnBatchImport = function () {
        // 客户群名单批量导入触发
        this.batchDisplay = true;
    };
    AppraiserEvaluateComponent.prototype.closebatch = function () {
        // 客户群名单批量导入关闭
        this.batchDisplay = false;
    };
    AppraiserEvaluateComponent.prototype.returnCustGroupList = function () {
        // 客户群名单返回结果模态框
        this.addDisplay = false;
    };
    AppraiserEvaluateComponent.prototype.load = function (event) {
        // 上传点击,需跨域
        var _this = this;
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
            this.custGroupListBean.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        var param = this.custGroupListBean;
        this.httpService.batchImportGroupEvalList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.successNum = data.successNum;
                _this.custGroupListBean.failNum = data.failNum;
                _this.custGroupListBean.failInfoList = data.failInfoList;
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
    // 其他
    AppraiserEvaluateComponent.prototype.isNull = function () {
        var _this = this;
        // 非空校验
        if (!this.evalNameSel || this.evalNameSel == '') {
            // 评价人名称
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '评价人名称不能为空！' }];
            return false;
        }
        var flag = true;
        this.list_1.forEach(function (item) {
            if (!item.healthFlag || item.healthFlag == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '健康状况不能为空！' }];
                flag = false;
                return;
            }
            if (!item.creditEval || item.creditEval == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '信用评价不能为空！' }];
                flag = false;
                return;
            }
            if (!item.badHabits || item.badHabits == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '不良嗜好不能为空！' }];
                flag = false;
                return;
            }
            if (!item.familyStableFlag || item.familyStableFlag == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '家庭关系状况不能为空！' }];
                flag = false;
                return;
            }
            if (!item.offerLines || item.offerLines == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '建议额度不能为空！' }];
                flag = false;
                return;
            }
        });
        if (!flag) {
            return false;
        }
        return true;
    };
    //按钮权限
    AppraiserEvaluateComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    AppraiserEvaluateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appraiser-evaluate',
            template: __webpack_require__(/*! ./appraiser-evaluate.component.html */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.html"),
            styles: [__webpack_require__(/*! ./appraiser-evaluate.component.scss */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], AppraiserEvaluateComponent);
    return AppraiserEvaluateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n  <div class=\"ui-g-10 ui-g-offset-1\">\r\n    <div class=\"ui-g-5\">\r\n      <div class=\"ui-g-4 text-r\">\r\n        <label>客户号:</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"custNo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-5 text-r\">\r\n      <div class=\"ui-g-4\">\r\n        <label>客户名称:</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input type=\"text\" pInputText [(ngModel)]=\"custName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n      <div class=\"ui-g-12\">\r\n        <button type=\"button\" pButton label=\"查询\" (click)=\"query()\"></button>\r\n        <button type=\"button\" pButton label=\"重置\" (click)=\"reset()\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab ui-g-12\">\r\n    <p-dataTable [value]=\"list\" [emptyMessage]=\"tableMesg\" scrollable=\"true\" scrollWidth=\"100%\">\r\n      <p-column [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template pTemplate=\"header\">\r\n          <p-checkbox name=\"groupname\" [value]=\"allVal\" [(ngModel)]=\"selectedAllVal\" (onChange)=\"changeSelect($event,1)\" label=\"选择\"></p-checkbox>\r\n        </ng-template>\r\n        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n          <p-checkbox name=\"groupname\" *ngIf=\"isQl(col)\" [value]=\"col.custNo\" [(ngModel)]=\"selectedValues\" (onChange)=\"checkBinary($event,i)\"></p-checkbox>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"户序号\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <!-- <div class=\"ui-g-12\" style=\"padding:0px;\" *ngIf=\"col.doorNum && col.relType == '1' && col.doorNum != ''\">\r\n                <div class=\"ui-g-2\" style=\"padding:0px;\">\r\n                  <label (click)=\"insertDoorInfo(col,i)\" class=\"fa fa-fw fa-caret-right\" style=\"cursor:pointer;\"></label>\r\n                </div>\r\n                <div class=\"ui-g-10\" style=\"padding:0px;\">\r\n                  <label style=\"cursor:pointer;\" (click)=\"toHouseholdInfo(col)\">{{col.doorNum}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12\" style=\"padding:0px;\" *ngIf=\"!(col.doorNum && col.relType == '1' && col.doorNum != '')\"> -->\r\n          <label style=\"cursor:pointer;\" (click)=\"toHouseholdInfo(col)\">{{col.doorNum}}</label>\r\n          <!-- </div> -->\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <label style=\"cursor:pointer;\" (click)=\"toCustomInfo(col)\" *ngIf=\"isQl(col)\">{{col.custNo}}</label>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column header=\"关联关系\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.relType | codeValuePie : relType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"relDesc\" header=\"详细信息\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"contacts\" header=\"联系人\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column header=\"证件类型\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.idenType | codeValuePie : idenType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"idenNum\" header=\"证件号码\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"address\" header=\"客户地址\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"telNum\" header=\"手机号码\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"industry\" header=\"所属行业\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"targetCustFlag\" header=\"是否目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"description\" header=\"备注\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <!-- <p-column field=\"xnkBz\" header=\"兴农卡目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"hzdbjjFlag\" header=\"户主担保基金目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"cdhykFlag\" header=\"存贷合一卡目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"syydFlag\" header=\"商赢易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"xydFlag\" header=\"薪易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"xjdFlag\" header=\"薪金贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"fydFlag\" header=\"房易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"khjskhFlag\" header=\"客户介绍客户目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"qtywFlag\" header=\"其他业务目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"xxfFlag\" header=\"薪消费目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n          <p-column field=\"ajdFlag\" header=\"安居贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column> -->\r\n      <!-- <p-column header=\"操作\" [style]=\"{'text-align':'left','width':'150px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tabelDetailIco sbtn\" (click)=\"showDetail(col)\">查看</span>\r\n          <span class=\"tabelDeleteIco sbtn\" (click)=\"deleteCustList(i)\">删除</span> -->\r\n          <!-- <a><button pButton type=\"button\" label=\"户主调整\"></button></a>\r\n              <button pButton type=\"button\" label=\"客户评价\" *ngIf=\"isQl(col)\" (click)=\"toCustomEvaluate(col)\"></button> -->\r\n        <!-- </ng-template>\r\n      </p-column> -->\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator [rows]=\"custGroupListBean.pageSize\" [first]=\"first\" [totalRecords]=\"custGroupListBean.totalNum\" (onPageChange)=\"paginate($event)\"\r\n      [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n  </div>\r\n  <div class=\"ui-g-12 submitBtn\">\r\n    <button pButton label=\"确定\" (click)=\"returnValue()\"></button>\r\n    <button pButton label=\"返回\" (click)=\"returnNow()\"></button>\r\n  </div>\r\n</div>\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- <p-dialog header=\"\" [(visible)]=\"returnDisplay\"  [responsive]=\"true\" >\r\n    <label>确定覆盖掉评价人列表页面吗？</label>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"returnBtn()\" style=\"color:#fff;\" label=\"是\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"returnDisplay=false\" style=\"color:#fff;\" label=\"否\"></button>\r\n    </p-footer>\r\n</p-dialog> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  padding: 0; }\n  .tab button {\n    width: 100px !important;\n    padding: 0px !important; }\n  .text-r {\n  text-align: right; }\n  .submitBtn {\n  text-align: center; }\n  .content {\n  min-width: 900px;\n  max-height: 600px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvdGhpcmQtcGFydHktZXZhbHVhdGlvbi9hcHByYWlzZXItZXZhbHVhdGUvYXBwcmFpc2VyLWV2YWx1YXRpb24tY3VzdEdyb3VwTGlzdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcdGhpcmQtcGFydHktZXZhbHVhdGlvblxcYXBwcmFpc2VyLWV2YWx1YXRlXFxhcHByYWlzZXItZXZhbHVhdGlvbi1jdXN0R3JvdXBMaXN0XFxhcHByYWlzZXItZXZhbHVhdGlvbi1jdXN0R3JvdXBMaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFVLEVBQUE7RUFGZDtJQU1RLHVCQUFxQjtJQUNyQix1QkFBc0IsRUFBQTtFQUc5QjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFLSSxnQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL3RoaXJkLXBhcnR5LWV2YWx1YXRpb24vYXBwcmFpc2VyLWV2YWx1YXRlL2FwcHJhaXNlci1ldmFsdWF0aW9uLWN1c3RHcm91cExpc3QvYXBwcmFpc2VyLWV2YWx1YXRpb24tY3VzdEdyb3VwTGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYntcclxuICAgIC8vIG92ZXJmbG93LXg6c2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6MTAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnRleHQtciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc3VibWl0QnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIC8vIHdpZHRoOjkwMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA3MDBweDtcclxuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiA5MDBweDtcclxuICAgIG1heC1oZWlnaHQ6NjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogNzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: AppEvalCustGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEvalCustGroupListComponent", function() { return AppEvalCustGroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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






var AppEvalCustGroupListComponent = /** @class */ (function () {
    function AppEvalCustGroupListComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.first = 0;
        //注：第三方评价客户维度和评价人维度都用到这个组件2017.11.20 
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.pageSize = 1;
        this.pageNum = 10;
        // 控件
        this.msgs = [];
        this.allVal = true; //全选值
        this.selectedAllVal = [];
        this.selectedValues = []; //单选数组
        //传值
        this.cId = [];
        this.cName = [];
        this.params = {};
        // 码值
        this.relType = []; //关联关系
        this.idenType = []; //证件类型
        // 中间量
        this.returnDisplay = false;
        this.returnFlag = false;
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupListBean"](); //客户群名单
        this.codeValues();
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
    }
    AppEvalCustGroupListComponent.prototype.ngOnInit = function () {
        this.selectCustGroupList();
    };
    //码值
    AppEvalCustGroupListComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 判断是否临时客户
    AppEvalCustGroupListComponent.prototype.isQl = function (col) {
        if (col.custNo.search(/^QL/)) {
            return true;
        }
        return false;
    };
    // 单选
    AppEvalCustGroupListComponent.prototype.checkBinary = function (event, i) {
        // debugger
        // 判断是否有效客户
        var inValTemp = [];
        this.custGroupListBean.custList.forEach(function (item) {
            if (item.custNo.search(/^QL/)) {
                inValTemp.push(item);
            }
        });
        // 赋值
        var arrTemp = [];
        var selectedValues = []; //局部变量
        this.selectedValues.forEach(function (element1) {
            inValTemp.forEach(function (element2) {
                if (element1 == element2.custNo) {
                    arrTemp.push(element2);
                }
            });
        });
        selectedValues = arrTemp;
        console.log(selectedValues);
        if (event && selectedValues.length == inValTemp.length) { //全选
            this.changeSelect(true, 0, selectedValues);
        }
        else { //单选
            this.changeSelect(false, 0, selectedValues);
        }
    };
    // 全选
    AppEvalCustGroupListComponent.prototype.changeSelect = function (event, is_html, selectedValues) {
        // debugger
        if (event) {
            if (is_html == 0) {
                this.selectedAllVal = [true];
            }
            else if (is_html == 1) { //页面点击
                var inValTemp_1 = [];
                this.custGroupListBean.custList.forEach(function (item) {
                    if (item.custNo.search(/^QL/)) {
                        inValTemp_1.push(item);
                    }
                });
                var arrTemp_1 = [];
                inValTemp_1.forEach(function (element) {
                    arrTemp_1.push(element.custNo);
                });
                this.selectedValues = arrTemp_1;
            }
        }
        else { //单选
            this.selectedAllVal = [false];
            if (is_html == 0) {
            }
            else if (is_html == 1) { //页面点击
                var temArr = [];
                this.selectedValues = temArr;
            }
        }
    };
    //查询
    AppEvalCustGroupListComponent.prototype.query = function () {
        this.custGroupListBean.pageNum = 1;
        this.custGroupListBean.pageSize = 10;
        this.first = 0;
        this.selectCustGroupList();
    };
    //重置
    AppEvalCustGroupListComponent.prototype.reset = function () {
        this.custNo = '';
        this.custName = '';
        this.custGroupListBean.pageNum = 1;
        this.custGroupListBean.pageSize = 10;
        this.first = 0;
        this.selectCustGroupList();
    };
    //确定
    AppEvalCustGroupListComponent.prototype.returnValue = function () {
        var _this = this;
        // debugger
        console.log(this.selectedValues);
        // 判断是否有效客户
        var inValTemp = [];
        this.custGroupListBean.custList.forEach(function (item) {
            if (item.custNo.search(/^QL/)) {
                inValTemp.push(item);
            }
        });
        // 赋值
        var arrTemp = [];
        var selectedValues = []; //局部变量
        this.selectedValues.forEach(function (element1) {
            inValTemp.forEach(function (element2) {
                if (element1 == element2.custNo) {
                    arrTemp.push(element2);
                }
            });
        });
        selectedValues = arrTemp;
        if (this.selectedValues && this.selectedValues.length > 0) {
            var stu = selectedValues.some(function (element) {
                if (element.custNo == '' || element.custNo == null || element.relType != 1) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号不能为空且关联关系必须为本人！' }];
                    return true;
                }
            });
            if (!stu) {
                this.event.emit({ custGroupListDisplay: false, params: selectedValues });
                this.msgs = [];
                this.allVal = true; //全选值
                this.selectedAllVal = [];
                this.selectedValues = []; //单选数组
                //传值
                this.cId = [];
                this.cName = [];
                this.params = {};
                this.reset();
            }
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '第三方评价必须选中一个客户！' }];
            return false;
        }
    };
    //返回
    AppEvalCustGroupListComponent.prototype.returnNow = function () {
        this.event.emit({ custGroupListDisplay: false });
        this.allVal = true; //全选值
        this.selectedAllVal = [];
        this.selectedValues = []; //单选数组
        //传值
        this.cId = [];
        this.cName = [];
        this.params = {};
    };
    // 客户群名单查询 
    AppEvalCustGroupListComponent.prototype.selectCustGroupList = function () {
        var _this = this;
        var params = {
            groupId: this.groupId,
            listType: 1,
            statusId: "1",
            custNo: this.custNo,
            custName: this.custName,
            pageNum: this.custGroupListBean.pageNum,
            pageSize: this.custGroupListBean.pageSize
        };
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.totalNum = data.totalNum;
                _this.selectedAllVal = [];
                _this.selectedValues = [];
                _this.custGroupListBean = data;
                _this.custGroupListBean.custList = data.custList;
                _this.list = data.custList;
                _this.list.forEach(function (item, i) {
                    if (_this.list[i].targetCustFlag && _this.list[i].targetCustFlag != '') {
                        _this.list[i].targetCustFlag == 0 ? '否' : '是';
                    }
                });
                _this.list = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.list);
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    AppEvalCustGroupListComponent.prototype.paginate = function (event) {
        // 分页
        // this.custGroupListBean.pageNum = event.page + 1;
        // this.custGroupListBean.pageSize = event.rows;
        this.custGroupListBean.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.custGroupListBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.custGroupListBean.pageSize;
        this.selectCustGroupList(); //客户群名单查询
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AppEvalCustGroupListComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppEvalCustGroupListComponent.prototype, "inVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppEvalCustGroupListComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppEvalCustGroupListComponent.prototype, "groupId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppEvalCustGroupListComponent.prototype, "groupName", void 0);
    AppEvalCustGroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eval-custGroupList',
            template: __webpack_require__(/*! ./appraiser-evaluation-custGroupList.html */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.html"),
            styles: [__webpack_require__(/*! ./appraiser-evaluation-custGroupList.scss */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], AppEvalCustGroupListComponent);
    return AppEvalCustGroupListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/bean/GroupAdminInfo.bean.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/bean/GroupAdminInfo.bean.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: GroupAdminInfoBean, roleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdminInfoBean", function() { return GroupAdminInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleList", function() { return roleList; });
// 客户群管理人员
var GroupAdminInfoBean = /** @class */ (function () {
    function GroupAdminInfoBean() {
        this.groupId = ''; //群号
        this.roleType = ''; //角色类型
        this.statusId = ''; //状态string(1)
        this.roleList = []; //管理人员菜单List(Map)
    }
    return GroupAdminInfoBean;
}());

var roleList = /** @class */ (function () {
    function roleList() {
        this.userId = ''; //角色ID
        this.userName = ''; //角色名称
        this.groupZone = ''; //客群区域
        this.statusId = ''; //状态
    }
    return roleList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/bean/GroupAdminInfo.bean.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/bean/GroupAdminInfo.bean.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GroupAdminInfoBean, roleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdminInfoBean", function() { return GroupAdminInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleList", function() { return roleList; });
// 客户群管理人员
var GroupAdminInfoBean = /** @class */ (function () {
    function GroupAdminInfoBean() {
        this.groupId = ''; //群号
        this.roleType = ''; //角色类型
        this.statusId = ''; //状态string(1)
        this.roleList = []; //管理人员菜单List(Map)
    }
    return GroupAdminInfoBean;
}());

var roleList = /** @class */ (function () {
    function roleList() {
        this.userId = ''; //角色ID
        this.userName = ''; //角色名称
        this.groupZone = ''; //客群区域
        this.statusId = ''; //状态
    }
    return roleList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-12 searchCondition\">\r\n        <div class=\"ui-g-5\">\r\n            <label for=\"\">客户号:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"userId\">\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n            <label for=\"\">客户名称:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"userName\">\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <button pButton type=\"button\" label=\"查询\" (click)=\"selectGroupAdminDetailInfo('init')\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 tab\">\r\n        <p-dataTable [value]=\"tableList\" [emptyMessage]=\"tableMesg\">\r\n            <p-column header=\"选择\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"groupname\" [value]=\"allVal\" [(ngModel)]=\"selectedAllVal\" (onChange)=\"changeSelect($event,1)\" label=\"选择\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox name=\"groupname\" [value]=\"col\" [(ngModel)]=\"selectedValues\" (onChange)=\"checkBinary($event)\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"userId\" header=\"评价人ID\"></p-column>\r\n            <p-column field=\"userName\" header=\"评价人姓名\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 分页 -->\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" [rows]=\"pageSize\" [totalRecords]=\"totalNum\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n        <button pButton label=\"选择\" (click)=\"select()\"></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  text-align: center; }\n\n.content {\n  overflow: auto;\n  width: 900px;\n  height: 700px; }\n\n.searchCondition .ui-g-5 {\n  padding: 0; }\n\n.searchCondition .ui-g-5 input {\n    width: 75%; }\n\n.searchCondition .ui-g-2 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvdGhpcmQtcGFydHktZXZhbHVhdGlvbi9jdXN0b20tZXZhbHVhdGUvY3VzdG9tLWV2YWx1YXRlLXNlbGVjdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcdGhpcmQtcGFydHktZXZhbHVhdGlvblxcY3VzdG9tLWV2YWx1YXRlXFxjdXN0b20tZXZhbHVhdGUtc2VsZWN0XFxjdXN0b20tZXZhbHVhdGUtc2VsZWN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0lBSVksVUFBVSxFQUFBOztBQUp0QjtFQVFRLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL3RoaXJkLXBhcnR5LWV2YWx1YXRpb24vY3VzdG9tLWV2YWx1YXRlL2N1c3RvbS1ldmFsdWF0ZS1zZWxlY3QvY3VzdG9tLWV2YWx1YXRlLXNlbGVjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLnNlYXJjaENvbmRpdGlvbiB7XHJcbiAgICAudWktZy01IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy0yIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CustomEvalSelectComponpoent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvalSelectComponpoent", function() { return CustomEvalSelectComponpoent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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




var CustomEvalSelectComponpoent = /** @class */ (function () {
    function CustomEvalSelectComponpoent(httpService) {
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.msgs = [];
        // 控件
        this.selectedValues = []; //单选数组
        this.allVal = true; //全选值
        this.selectedAllVal = []; //全选数组
        this.flag = false; //中间量
        this.userId = '';
        this.userName = '';
        this.first = 0;
        this.pageNum = 1;
        this.pageSize = 10;
        this.tableList = [];
    }
    CustomEvalSelectComponpoent.prototype.ngOnInit = function () {
        this.selectGroupAdminDetailInfo();
    };
    CustomEvalSelectComponpoent.prototype.select = function () {
        //选择评价人
        this.outValue.emit({ custGroupListDisplay: false, roleList: this.selectedValues });
        this.selectedValues = []; //单选数组
        this.allVal = true; //全选值
        this.selectedAllVal = []; //全选数组
        this.flag = false; //中间量
    };
    CustomEvalSelectComponpoent.prototype.checkBinary = function (event) {
        //  单选
        if (event && this.selectedValues.length == this.tableList.length && !this.flag) {
            this.changeSelect(true, 0);
        }
        else if (this.flag && !event) {
            this.changeSelect(false, 0);
        }
    };
    CustomEvalSelectComponpoent.prototype.changeSelect = function (event, checkOne) {
        // 全选
        if (event) {
            var temArr = [];
            var temArr2 = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](this.tableList);
            for (var i in temArr2) {
                temArr.push(temArr2[i]);
            }
            this.selectedValues = temArr;
            this.flag = true;
            this.selectedAllVal = [];
            this.selectedAllVal.push(true);
        }
        else {
            this.flag = false;
            this.selectedAllVal = [];
            this.selectedAllVal.push(false);
            if (checkOne == 0) {
                // 单选点击
            }
            else if (checkOne == 1) {
                // 全选点击   
                var temArr = [];
                this.selectedValues = temArr;
            }
        }
    };
    CustomEvalSelectComponpoent.prototype.selectGroupAdminDetailInfo = function (flag) {
        var _this = this;
        if (flag == 'init') {
            this.pageNum = 1;
            this.pageSize = 10;
            this.first = 0;
        }
        var params = {
            partyClassificationGroupId: this.inVal,
            statusId: "1",
            userId: this.userId,
            userName: this.userName,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        this.httpService.selectGroupAdminDetailInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableList = data.resultList;
                _this.totalNum = data.total;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomEvalSelectComponpoent.prototype.paginate = function (event) {
        this.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        this.selectGroupAdminDetailInfo();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomEvalSelectComponpoent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomEvalSelectComponpoent.prototype, "inVal", void 0);
    CustomEvalSelectComponpoent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-eval-select',
            template: __webpack_require__(/*! ./custom-evaluate-select.html */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.html"),
            styles: [__webpack_require__(/*! ./custom-evaluate-select.scss */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"]])
    ], CustomEvalSelectComponpoent);
    return CustomEvalSelectComponpoent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 客户评价 -->\r\n<div class=\"basis-group ui-g-12 module\">\r\n  <!-- msgs -->\r\n  <p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n  <div class=\"ui-g-12\">\r\n    <!-- <header-title [Info]=\"customEvaluate\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"evaluatedCustomer\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:right;\">\r\n      <span class=\"tabelUpdateIco\" (click)=\"editInfo()\" *ngIf=\"infoEditFlag && permissionCheck('SID00002_P027_P001_P002_P007_P002_P001') && yushouxin\">编辑</span>\r\n      <span class=\"tabelUpdateIco\" (click)=\"saveInfo()\" *ngIf=\"!infoEditFlag\">保存</span>\r\n      <!--<button *ngIf=\"infoEditFlag\" pButton type=\"button\" (click)=\"editInfo()\" label=\"编辑\"></button>\r\n      <button *ngIf=\"!infoEditFlag\" pButton type=\"button\" (click)=\"saveInfo()\" label=\"保存\"></button> -->\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>客户名称：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.custName\" disabled=\"true\">\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>客户号：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custNoTemp\" disabled=\"true\">\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>证件类型：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css \">\r\n            <p-dropdown [options]=\"idenType\" [(ngModel)]=\"custGroupListBean.custMap.idenType\" [disabled]=\"true\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.idenType\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>证件号码：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <!-- <div class=\"ui-g-12\">\r\n              <div [formGroup]=\"myForm\">\r\n                <label for=\"mobile\">手机号：</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"mobile\" formControlName=\"mobile\" /><br>\r\n                <span [hidden]=\"myForm.get('mobile').valid || myForm.get('mobile').untouched\">\r\n                          <span [hidden]=\"!myForm.hasError('mobile','mobile')\" class=\"tel\">{{myForm.getError('mobile','mobile')?.message}}</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div [formGroup]=\"myForm\">\r\n              <label for=\"mobile\">手机号：</label>\r\n              <input id=\"input\" type=\"text\" pInputText formControlName=\"mobile\">\r\n              <p *ngIf=\"myForm.get('mobile').hasError('message')\">不合法</p>\r\n            </div>\r\n            <button (click)=\"createForm()\">ddd</button> -->\r\n            <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.idenNum\" [disabled]=\"infoEditFlag\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g stilelist\">\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>客户分类：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"CLIENT_TYPE\" [(ngModel)]=\"custGroupListBean.custMap.custType\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.custType\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>经营项目：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"MANAGE_ITEM\" [(ngModel)]=\"custGroupListBean.custMap.bussItems\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.bussItems\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>经营地址：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.bussAddr\" [disabled]=\"infoEditFlag\">\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>经营年限：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"LICENCE_YEARS\" [(ngModel)]=\"custGroupListBean.custMap.bussAge\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.bussAge\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g stilelist\">\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>房屋状况：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"HOUSE_STATUS\" [(ngModel)]=\"custGroupListBean.custMap.houseState\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.houseState\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>家庭年收入：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"ANNUAL_INCOME\" [(ngModel)]=\"custGroupListBean.custMap.familyIncome\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"number\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.familyIncome\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>家庭净资产：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"FAMILY_NET_AST_RANK\" [(ngModel)]=\"custGroupListBean.custMap.familyAss\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"number\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.familyAss\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n          <div class=\"ui-g-1 label-css\">\r\n            <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n            <label>信贷员建议额度：</label>\r\n          </div>\r\n          <div class=\"ui-g-2 input-css\">\r\n            <p-dropdown [options]=\"RISK_ADVISE\" [(ngModel)]=\"custGroupListBean.custMap.advise\" [disabled]=\"infoEditFlag\"></p-dropdown>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.advise\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g stilelist\">\r\n          <div class=\"ui-g-1 label-css\">\r\n            <label>备注：</label>\r\n          </div>\r\n          <div class=\"ui-g-11\">\r\n            <textarea style=\"width:40%;height:40px;\" [(ngModel)]=\"custGroupListBean.custMap.description\" [disabled]=\"infoEditFlag\"></textarea>\r\n            <!-- <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"custGroupListBean.custMap.description\" [disabled]=\"infoEditFlag\"> -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n          <hr>\r\n        </div>\r\n        <div class=\"ui-g-12 evaluate-css\" style=\"text-align:right;\">\r\n          <span *ngIf=\"permissionCheck('SID00002_P027_P001_P002_P007_P002_P002') && yushouxin\" class=\"icoColor\" (click)=\"selectBtn()\">新增</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <header-title [Info]=\"evaluateInformation\"></header-title>\r\n        </div>\r\n        <div class=\"ui-g-12 tab\">\r\n          <p-dataTable [value]=\"groupEvalInfoBean.evalList\" class=\"groupTabBottom\" [emptyMessage]=\"tableMesg\" scrollable=\"true\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'150px'}\">>\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                {{i+1}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"评价人\" [style]=\"{'width':'150px'}\">>\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <span>{{col.evalName}}</span>\r\n                <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"健康状况\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupHealthFlag\" [(ngModel)]=\"col.healthFlag\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                  <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.healthFlag\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"信用评价\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupCreditEval\" [(ngModel)]=\"col.creditEval\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                  <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.creditEval\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"不良嗜好\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupBadHabits\" [(ngModel)]=\"col.badHabits\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                  <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.badHabits\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"家庭关系状况\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupFamilyStableFlag\" [(ngModel)]=\"col.familyStableFlag\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                  <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.familyStableFlag\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"收入来源\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupSourceOfIncome\" [(ngModel)]=\"col.sourceOfIncome\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.sourceOfIncome\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"家庭年收入\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupIncomeLevel\" [(ngModel)]=\"col.incomeLevel\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.incomeLevel\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"车辆情况\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupCarFlag\" [(ngModel)]=\"col.carFlag\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.carFlag\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"建议额度\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                  <p-dropdown [options]=\"groupOfferLines\" [(ngModel)]=\"col.offerLines\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n                  <span style=\"color:red;font-size:12px;padding:0px;\">*</span>\r\n                </div>\r\n                <!-- <div class=\"customGroupEvaluateInput\">\r\n                  <input pInputText [(ngModel)]=\"col.offerLines\">\r\n                </div> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operation\" header=\"操作\" [style]=\"{'width':'150px'}\">>\r\n              <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <div class=\"table-button\">\r\n                  <span class=\"tabelDeleteIco\" (click)=\"deleteGroupEvalInfo(i)\" *ngIf=\"yushouxin\">删除</span>\r\n                </div>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12 btn-submit\">\r\n          <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-7\" style=\"padding:0px;\">\r\n              <label appValidation>系统判断目标授信客户</label>\r\n            </div>\r\n            <div class=\"ui-g-5 saveCustomCenter customGroupViewDropdown\">\r\n              <p-dropdown (onChange)=\"typeChange($event)\" [options]=\"isNoValue\" [(ngModel)]=\"systemCreditFlag\" [disabled]=\"true\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-3\">\r\n            <div class=\"ui-g-7\" style=\"padding:0px;\">\r\n              <label appValidation>经办人判断目标授信客户</label>\r\n            </div>\r\n            <div class=\"ui-g-5 saveCustomCenter customGroupViewDropdown\">\r\n              <p-dropdown (onChange)=\"typeChange($event)\" [options]=\"isNoValue\" [(ngModel)]=\"agentCreditFlag\" [disabled]=\"!yushouxin\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-2\">\r\n            <button pButton type=\"button\" label=\"系统判断\" (click)=\"systemJudge(1)\" *ngIf=\"yushouxin\"></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn-submit\">\r\n          <button pButton type=\"button\" label=\"提交\" (click)=\"update()\" *ngIf=\"yushouxin\"></button>\r\n          <button pButton type=\"button\" label=\"返回视图\" *ngIf=\"isCustGroupView && yushouxin\" (click)=\"returnCustGroupView()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-1 explain-css\">\r\n              相关说明：\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-11 detail-css\">\r\n              <div class=\"ui-g\">\r\n                1、第一条评价信息是必输的\r\n              </div>\r\n              <div class=\"ui-g\">\r\n                2、一条有效的评价信息，至少要包含：评价人，信用评价，不良嗜好，健康状况，家庭关系情况，建议额度\r\n              </div>\r\n              <div class=\"ui-g\">\r\n                3、无效的信息不能提交，提交的时候会提示补录信息\r\n              </div>\r\n              <div class=\"ui-g\">\r\n                4、请仔细核实评价信息，确保信息的有效性\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 新增查询 -->\r\n  <p-dialog [(visible)]=\"custGroupListDisplay\" *ngIf=\"custGroupListDisplay\" class=\"contact-track-f\" modal=\"modal\">\r\n    <custom-eval-select [inVal]=\"inVal\" (outValue)=\"closeGroupEvalInfo($event)\"></custom-eval-select>\r\n  </p-dialog>\r\n\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group {\n  overflow: auto;\n  min-width: 900px; }\n  @media screen and (max-width: 1520px) {\n    .basis-group {\n      font-size: 12px; }\n      .basis-group input {\n        font-size: 12px; } }\n  .basis-group .form-group .label-css {\n    text-align: center; }\n  .basis-group .form-group .input-css {\n    text-align: left; }\n  .basis-group .btn-submit {\n    text-align: center; }\n  .basis-group .btn-batch-import {\n    text-align: right;\n    text-decoration: underline; }\n  .basis-group .explain-css {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .basis-group .detail-css {\n    color: red; }\n  .basis-group .evaluate-css {\n    padding-top: 50px; }\n  .tab {\n  overflow-x: auto;\n  white-space: nowrap;\n  text-align: center; }\n  .ui-datatable-scrollable-table-wrapper {\n  padding-bottom: 300px; }\n  .groupTabBottom2 .ui-datatable-scrollable {\n  padding-bottom: 300px !important; }\n  :host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 950px !important;\n  height: 90% !important; }\n  :host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvdGhpcmQtcGFydHktZXZhbHVhdGlvbi9jdXN0b20tZXZhbHVhdGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXHRoaXJkLXBhcnR5LWV2YWx1YXRpb25cXGN1c3RvbS1ldmFsdWF0ZVxcY3VzdG9tLWV2YWx1YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBQ2hCO0lBSEo7TUFJUSxlQUFjLEVBQUE7TUFKdEI7UUFNWSxlQUFlLEVBQUEsRUFDbEI7RUFQVDtJQVdZLGtCQUFrQixFQUFBO0VBWDlCO0lBY1ksZ0JBQWdCLEVBQUE7RUFkNUI7SUFrQlEsa0JBQWtCLEVBQUE7RUFsQjFCO0lBcUJRLGlCQUFpQjtJQUNqQiwwQkFBMEIsRUFBQTtFQXRCbEM7SUF5QlEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQTNCL0I7SUE4QlEsVUFBVSxFQUFBO0VBOUJsQjtJQWlDUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUVJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxxQkFBb0IsRUFBQTtFQUV4QjtFQUNJLGdDQUErQixFQUFBO0VBRW5DO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBO0VBRTFCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC90aGlyZC1wYXJ0eS1ldmFsdWF0aW9uL2N1c3RvbS1ldmFsdWF0ZS9jdXN0b20tZXZhbHVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaXMtZ3JvdXAge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUyMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIC5sYWJlbC1jc3Mge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1jc3Mge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tc3VibWl0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuLWJhdGNoLWltcG9ydCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICAuZXhwbGFpbi1jc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kZXRhaWwtY3NzIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgLmV2YWx1YXRlLWNzcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgLy8gbWF4LXdpZHRoOjE3NjhweCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udWktZGF0YXRhYmxlLXNjcm9sbGFibGUtdGFibGUtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozMDBweDtcclxufVxyXG4uZ3JvdXBUYWJCb3R0b20yIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZXtcclxuICAgIHBhZGRpbmctYm90dG9tOjMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDk1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CustomEvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvaluateComponent", function() { return CustomEvaluateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/GroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/bean/GroupAdminInfo.bean.ts");
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











var CustomEvaluateComponent = /** @class */ (function () {
    function CustomEvaluateComponent(httpService, routerInfo, confirmationService, router, fb, commfunc) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.confirmationService = confirmationService;
        this.router = router;
        this.fb = fb;
        this.commfunc = commfunc;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"];
        // 标题
        this.customEvaluate = "客户评价";
        this.evaluatedCustomer = "被评价客户";
        this.evaluateInformation = "评价信息";
        // bean
        this.groupEvalInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["GroupEvalInfoBean"](); //第三方评价
        this.groupAdminInfoBean = new _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__["GroupAdminInfoBean"](); //管理人员
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupListBean"](); //客户名单
        // 码值
        // 控件
        this.msgs = [];
        // 模态框
        this.custGroupListDisplay = false;
        this.inVal = [];
        // 链接中间量
        this.groupId = ''; //群号
        this.groupName = ''; //群名
        this.custNo = ''; //客户号
        this.custGroupView = ''; //客户群视图标志
        // 其他中间量
        this.isCustGroupView = false;
        this.infoEditFlag = true;
        this.isNoValue = [
            { label: '请选择', value: '' },
            { label: '是', value: '1' },
            { label: '否', value: '0' },
        ];
        //
        this.CLIENT_TYPE = [];
        this.MANAGE_ITEM = [];
        this.LICENCE_YEARS = [];
        this.HOUSE_STATUS = [];
        this.ANNUAL_INCOME = [];
        this.FAMILY_NET_AST_RANK = [];
        this.RISK_ADVISE = [];
        this.yushouxin = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.groupHealthFlag = this.code['GroupHealthFlag'];
        this.groupCreditEval = this.code['GroupCreditEval'];
        this.groupSourceOfIncome = this.code['GroupSourceOfIncome'];
        this.groupFamilyStableFlag = this.code['GroupFamilyStableFlags'];
        this.groupBadHabits = this.code['GroupBadHabits'];
        this.groupCarFlag = this.code['GroupCarFlag'];
        this.groupIncomeLevel = this.code['GroupIncomeLevel'];
        this.groupOfferLines = this.code['GroupOfferLinese'];
        this.idenType = this.code['CustomGroupIdenType'];
        this.CLIENT_TYPE = this.code['CLIENT_TYPE'];
        this.MANAGE_ITEM = this.code['MANAGE_ITEM'];
        this.LICENCE_YEARS = this.code['LICENCE_YEARS'];
        this.HOUSE_STATUS = this.code['HOUSE_STATUS'];
        this.ANNUAL_INCOME = this.code['ANNUAL_INCOME'];
        this.FAMILY_NET_AST_RANK = this.code['FAMILY_NET_AST_RANK'];
        this.RISK_ADVISE = this.code['RISK_ADVISE'];
    }
    CustomEvaluateComponent.prototype.ngOnInit = function () {
        this.preSet();
        this.selectGroupEvalInfo();
    };
    //码值
    CustomEvaluateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomEvaluateComponent.prototype.preSet = function () {
        // 初始化
        // this.groupEvalInfoBean.pageNum = 1;
        // this.groupEvalInfoBean.pageSize = 10;
        // debugger
        if (this.routerInfo.snapshot.queryParams['id']) {
            this.groupId = this.routerInfo.snapshot.queryParams['groupId']; //群id            
            this.groupEvalInfoBean.groupId = this.groupId;
        }
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId']; //     
        }
        if (this.routerInfo.snapshot.params['yushouxin']) {
            if (this.routerInfo.snapshot.params['yushouxin'] == '1') {
                this.yushouxin = false;
            }
        }
        // if (this.routerInfo.snapshot.params['groupName']) {
        //   this.groupName = this.routerInfo.snapshot.params['groupName'];// 
        //   this.evaluatedCustomer = this.groupName + '-' +this.evaluatedCustomer;
        //   this.evaluateInformation = this.groupName + '-' +this.evaluateInformation;   
        // }
        if (this.routerInfo.snapshot.params['custNo']) {
            this.custNo = this.routerInfo.snapshot.params['custNo']; //  
        }
        this.selectCustGroupInfo(this.groupId, this.custNo);
        if (this.routerInfo.snapshot.params['custGroupView']) {
            this.custGroupView = this.routerInfo.snapshot.params['custGroupView']; //  
            if (this.custGroupView == '1') {
                this.isCustGroupView = true;
            }
        }
        if (this.routerInfo.snapshot.params.pageNum) {
            this.pageNum = this.routerInfo.snapshot.params.pageNum;
        }
        // if (this.routerInfo.snapshot.params['customInfo']) {
        //   let tempCustomInfo = this.routerInfo.snapshot.params['customInfo'];
        //   this.custGroupListBean.custMap = JSON.parse(tempCustomInfo);
        // }
        this.groupEvalInfoBean.groupId = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.groupId);
        this.groupEvalInfoBean.custNo = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.custNo);
        this.groupEvalInfoBean.handleFlag = '2';
        this.groupEvalInfoBean.pageNum = 1;
        this.groupEvalInfoBean.pageSize = 999;
    };
    // createForm() {
    //   this.myForm = this.fb.group({
    //     mobile: ['', [Validators.required, checkTel]]
    //   })
    // };
    // postDate() {
    //   if (this.myForm.valid) {
    //   }
    // }
    CustomEvaluateComponent.prototype.isQl = function (col) {
        if (col.custNo.search(/^QL/)) {
            return true;
        }
        return false;
    };
    //群基本信息查询
    CustomEvaluateComponent.prototype.selectCustGroupInfo = function (groupId, custNo) {
        var _this = this;
        var params = {
            groupId: groupId
        };
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupName = data.groupName;
                _this.evaluatedCustomer = _this.groupName + '-' + _this.evaluatedCustomer;
                _this.evaluateInformation = _this.groupName + '-' + _this.evaluateInformation;
                _this.groupEvalInfoBean.groupName = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.groupName);
                _this.selectCustGroupList(custNo); //查询客户信息
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //群客户名单查询
    CustomEvaluateComponent.prototype.selectCustGroupList = function (custNo) {
        var _this = this;
        var params = {
            custNo: custNo,
            groupId: this.groupId,
            statusId: 1
        };
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data.custList);
                if (data.custList && data.custList.length != 0) {
                    _this.custGroupListBean.custMap = data.custList[0];
                    if (_this.custGroupListBean.custMap.familyIncome) {
                        _this.custGroupListBean.custMap.familyIncome = parseInt(_this.custGroupListBean.custMap.familyIncome);
                    }
                    if (_this.custGroupListBean.custMap.familyAss) {
                        _this.custGroupListBean.custMap.familyAss = parseInt(_this.custGroupListBean.custMap.familyAss);
                    }
                    if (_this.isQl(_this.custGroupListBean.custMap)) { //判断临时客户号
                        _this.custNoTemp = _this.custGroupListBean.custMap.custNo;
                    }
                    else {
                        _this.custNoTemp = '';
                    }
                    data.custList.forEach(function (item, i) {
                        _this.systemCreditFlag = item.systemCreditFlag;
                        _this.agentCreditFlag = item.agentCreditFlag;
                    });
                }
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
    CustomEvaluateComponent.prototype.selectBtn = function () {
        // 弹出模态框
        this.custGroupListDisplay = true;
        // this.selectGroupEvalInfo();
        // this.selectGroupAdminInfo();
        this.inVal = this.groupId;
    };
    CustomEvaluateComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 管理人员查询
        this.groupAdminInfoBean.groupId = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.groupId);
        this.groupAdminInfoBean.roleType = '4';
        this.groupAdminInfoBean.statusId = '1';
        this.httpService.selectGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupAdminInfoBean = data;
                _this.groupAdminInfoBean.roleList = data.roleList;
                _this.inVal = _this.groupAdminInfoBean.roleList;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomEvaluateComponent.prototype.selectGroupEvalInfo = function () {
        var _this = this;
        //客户群第三方评价查询
        this.httpService.selectGroupEvalInfo(this.groupEvalInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.evalList && data.evalList.length != 0) {
                    _this.groupEvalInfoBean.evalList = data.evalList;
                }
                else {
                    setTimeout(function () {
                        _this.groupEvalInfoBean.evalList = [];
                    });
                }
                // if(this.groupEvalInfoBean.evalList && this.groupEvalInfoBean.evalList.length > 0){
                //   this.agentCreditFlag = '1';
                //   this.systemCreditFlag = '1';
                // }else{
                //   this.agentCreditFlag = '';
                //   this.systemCreditFlag = '';
                // }
                // this.groupEvalInfoBean.evalList.forEach(item => {
                //   if(item.healthFlag == "20" ||item.creditEval == "3" ||item.creditEval == "4" ||item.badHabits == "10" ||item.badHabits == "20" 
                //     ||item.familyStableFlag == "20" ||item.offerLines == "60"){
                //       this.agentCreditFlag = '0'
                //       this.systemCreditFlag = '0'
                //   }
                // })
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomEvaluateComponent.prototype.closeGroupEvalInfo = function (event) {
        var _this = this;
        // 关闭模态框、返回值
        // this.groupEvalInfoBean = new GroupEvalInfoBean();//第三方评价
        this.custGroupListDisplay = event.custGroupListDisplay;
        var list = event.roleList;
        var temArr = [];
        temArr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.groupEvalInfoBean.evalList);
        var returnFlag = false;
        list.forEach(function (item, i) {
            var eachFlag = false;
            _this.groupEvalInfoBean.evalList.forEach(function (item1) {
                if (item1.sysCreditEval == item.userId) {
                    returnFlag = true;
                    eachFlag = true;
                }
            });
            if (!eachFlag) {
                temArr.push({ evalName: item.userName, sysCreditEval: item.userId });
            }
        });
        if (returnFlag) {
            this.msgs = [];
            this.msgs = [{ severity: 'info', summary: '提示', detail: '已有评价人不能重复添加' }];
        }
        this.groupEvalInfoBean.evalList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temArr);
        // this.groupAdminInfoBean = new GroupAdminInfoBean();
    };
    // 提交
    CustomEvaluateComponent.prototype.update = function () {
        var _this = this;
        //是否有评价信息
        if (this.groupEvalInfoBean.evalList.length == 0) {
            // this.groupEvalInfoBean.evalList['partyId'] = this.custNo;     
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，至少需要存在一条有效评价！' }];
            return;
        }
        else {
            var flag1 = true;
            flag1 = this.isNull();
            if (!flag1) {
                return;
            }
        }
        //是否正在修改中
        if (!this.infoEditFlag) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，请先保存客户基本信息再提交！' }];
            return false;
        }
        //系统判断值不能为空(只有两条以上才会进行一下判断)
        if (this.groupEvalInfoBean.evalList.length >= 2) {
            if (!this.systemCreditFlag || !this.agentCreditFlag || this.systemCreditFlag == '' || this.agentCreditFlag == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，系统判断项不能为空（系统判断目标授信客户和经办人判断目标授信客户）！' }];
                return false;
            }
            else {
                this.systemJudge(2);
            }
        }
        this.confirmationService.confirm({
            message: '确定提交吗?',
            accept: function () {
                _this.updateCustGroupList(2); //将系统判断更新到客户信息里面
                _this.updateGroupEvalInfo();
            }
        });
    };
    CustomEvaluateComponent.prototype.updateGroupEvalInfo = function () {
        var _this = this;
        // 第三方评价，提交
        this.groupEvalInfoBean.evalList.forEach(function (item, i) {
            _this.groupEvalInfoBean.evalList[i]['partyId'] = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.custNo);
            _this.groupEvalInfoBean.evalList[i]['fromDate'] = null;
        });
        this.httpService.updateGroupEvalInfo(this.groupEvalInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功' }];
                _this.selectGroupEvalInfo();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '提交失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomEvaluateComponent.prototype.deleteGroupEvalInfo = function (index) {
        var _this = this;
        // if (this.groupEvalInfoBean.evalList.length == 1) {
        //   // this.groupEvalInfoBean.evalList['partyId'] = this.custNo;     
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，至少需要存在一条有效评价！' }];
        // } else {
        // 客户群第三方评价删除/页面删除
        this.confirmationService.confirm({
            message: '确定删除?',
            accept: function () {
                // debugger
                var temArr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.groupEvalInfoBean.evalList);
                temArr.splice(index, 1);
                _this.groupEvalInfoBean.evalList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temArr);
            }
        });
        // }
    };
    // 链接
    CustomEvaluateComponent.prototype.returnCustGroupView = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定返回客户群视图?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName, pageNum: _this.pageNum }]);
            }
        });
    };
    CustomEvaluateComponent.prototype.editInfo = function () {
        // 编辑
        this.infoEditFlag = false;
    };
    // 保存
    CustomEvaluateComponent.prototype.saveInfo = function () {
        //信贷人建议-非空校验
        if (!this.custGroupListBean.custMap.advise || this.custGroupListBean.custMap.advise == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入信贷人建议！' }];
            return false;
        }
        this.infoEditFlag = true;
        this.updateCustGroupList(1);
    };
    CustomEvaluateComponent.prototype.updateCustGroupList = function (i) {
        var _this = this;
        this.custGroupListBean.groupId = this.groupId;
        this.custGroupListBean['custMap']['systemCreditFlag'] = this.systemCreditFlag;
        this.custGroupListBean['custMap']['agentCreditFlag'] = this.agentCreditFlag;
        this.custGroupListBean['flagId'] = '1';
        // 修改客户名单
        this.httpService.updateCustGroupList(this.custGroupListBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (i == '1') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '修改成功' }];
                }
                _this.selectCustGroupList(_this.custNo); //回显
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '修改失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomEvaluateComponent.prototype.isNull = function () {
        var _this = this;
        //信贷人建议-非空校验
        if (!this.custGroupListBean.custMap.advise || this.custGroupListBean.custMap.advise == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入信贷人建议！' }];
            return false;
        }
        // 非空校验
        if (!this.groupEvalInfoBean.evalList || this.groupEvalInfoBean.evalList.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入评价人信息！' }];
            return false;
        }
        var flag = true;
        this.groupEvalInfoBean.evalList.forEach(function (item) {
            if (!item.evalName || item.evalName == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '评价人姓名不能为空！' }];
                flag = false;
                return;
            }
            if (!item.healthFlag || item.healthFlag == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '健康状况不能为空！' }];
                flag = false;
                return;
            }
            if (!item.creditEval || item.creditEval == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '信用评价不能为空！' }];
                flag = false;
                return;
            }
            if (!item.badHabits || item.badHabits == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '不良嗜好不能为空！' }];
                flag = false;
                return;
            }
            if (!item.familyStableFlag || item.familyStableFlag == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '家庭关系状况不能为空！' }];
                flag = false;
                return;
            }
            if (!item.offerLines || item.offerLines == '') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '建议额度不能为空！' }];
                flag = false;
                return;
            }
        });
        if (!flag) {
            return false;
        }
        return true;
    };
    //系统判断
    CustomEvaluateComponent.prototype.systemJudge = function (isButton) {
        var _this = this;
        if (this.groupEvalInfoBean.evalList && this.groupEvalInfoBean.evalList.length > 0) {
            this.isNull();
            //初始化
            if (isButton == '1') {
                if (this.groupEvalInfoBean.evalList.length == 1) {
                    this.agentCreditFlag = '0';
                    this.systemCreditFlag = '0';
                }
                else {
                    this.agentCreditFlag = '1';
                    this.systemCreditFlag = '1';
                }
            }
            //第三方评价
            this.groupEvalInfoBean.evalList.forEach(function (item) {
                if (item.healthFlag == "20" || item.creditEval == "3" || item.creditEval == "4" || item.badHabits == "2" || item.badHabits == "3"
                    || item.familyStableFlag == "20" || item.offerLines == "90" || item.offerLines == "100") {
                    _this.systemCreditFlag = '0';
                    _this.agentCreditFlag = '0';
                }
            });
            //信贷员意见
            if (this.custGroupListBean.custMap.advise == "10" || this.custGroupListBean.custMap.advise == "330") {
                this.systemCreditFlag = '0';
                this.agentCreditFlag = '0';
            }
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，请先添加一条评价信息！' }];
        }
    };
    CustomEvaluateComponent.prototype.typeChange = function (event) {
    };
    //按钮权限
    CustomEvaluateComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomEvaluateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-evaluate',
            template: __webpack_require__(/*! ./custom-evaluate.component.html */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.html"),
            styles: [__webpack_require__(/*! ./custom-evaluate.component.scss */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], CustomEvaluateComponent);
    return CustomEvaluateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL3RoaXJkLXBhcnR5LWV2YWx1YXRpb24vdGhpcmQtcGFydHktZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ThirdPartyEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyEvaluationComponent", function() { return ThirdPartyEvaluationComponent; });
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

var ThirdPartyEvaluationComponent = /** @class */ (function () {
    function ThirdPartyEvaluationComponent() {
    }
    ThirdPartyEvaluationComponent.prototype.ngOnInit = function () {
    };
    ThirdPartyEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-third-party-evaluation',
            template: __webpack_require__(/*! ./third-party-evaluation.component.html */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./third-party-evaluation.component.scss */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThirdPartyEvaluationComponent);
    return ThirdPartyEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ThirdPartyEvaluationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyEvaluationModule", function() { return ThirdPartyEvaluationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _third_party_evaluation_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./third-party-evaluation.routing */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.routing.ts");
/* harmony import */ var _third_party_evaluation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third-party-evaluation.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.ts");
/* harmony import */ var _appraiser_evaluate_appraiser_evaluate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appraiser-evaluate/appraiser-evaluate.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.ts");
/* harmony import */ var _custom_evaluate_custom_evaluate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-evaluate/custom-evaluate.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.ts");
/* harmony import */ var _appraiser_evaluate_appraiser_evaluation_custGroupList_appraiser_evaluation_custGroupList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluation-custGroupList/appraiser-evaluation-custGroupList.ts");
/* harmony import */ var _custom_evaluate_custom_evaluate_select_custom_evaluate_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-evaluate/custom-evaluate-select/custom-evaluate-select */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate-select/custom-evaluate-select.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//客户群组
var ThirdPartyEvaluationModule = /** @class */ (function () {
    function ThirdPartyEvaluationModule() {
    }
    ThirdPartyEvaluationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _third_party_evaluation_routing__WEBPACK_IMPORTED_MODULE_4__["ThirdPartyEvaluationRouting"]
            ],
            declarations: [
                _third_party_evaluation_component__WEBPACK_IMPORTED_MODULE_5__["ThirdPartyEvaluationComponent"],
                _appraiser_evaluate_appraiser_evaluation_custGroupList_appraiser_evaluation_custGroupList__WEBPACK_IMPORTED_MODULE_8__["AppEvalCustGroupListComponent"],
                _appraiser_evaluate_appraiser_evaluate_component__WEBPACK_IMPORTED_MODULE_6__["AppraiserEvaluateComponent"],
                _custom_evaluate_custom_evaluate_component__WEBPACK_IMPORTED_MODULE_7__["CustomEvaluateComponent"],
                _custom_evaluate_custom_evaluate_select_custom_evaluate_select__WEBPACK_IMPORTED_MODULE_9__["CustomEvalSelectComponpoent"]
            ],
            exports: [],
            providers: []
        })
    ], ThirdPartyEvaluationModule);
    return ThirdPartyEvaluationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.routing.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.routing.ts ***!
  \********************************************************************************************************/
/*! exports provided: routes, ThirdPartyEvaluationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyEvaluationRouting", function() { return ThirdPartyEvaluationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _third_party_evaluation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-party-evaluation.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/third-party-evaluation.component.ts");
/* harmony import */ var _appraiser_evaluate_appraiser_evaluate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appraiser-evaluate/appraiser-evaluate.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate/appraiser-evaluate.component.ts");
/* harmony import */ var _custom_evaluate_custom_evaluate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-evaluate/custom-evaluate.component */ "./src/app/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate/custom-evaluate.component.ts");




//客户群组
var routes = [
    {
        path: '',
        component: _third_party_evaluation_component__WEBPACK_IMPORTED_MODULE_1__["ThirdPartyEvaluationComponent"],
        children: [
            {
                path: 'appraiser-evaluate', component: _appraiser_evaluate_appraiser_evaluate_component__WEBPACK_IMPORTED_MODULE_2__["AppraiserEvaluateComponent"]
            },
            {
                path: 'custom-evaluate', component: _custom_evaluate_custom_evaluate_component__WEBPACK_IMPORTED_MODULE_3__["CustomEvaluateComponent"]
            },
        ]
    }
];
var ThirdPartyEvaluationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=third-party-evaluation-third-party-evaluation-module.js.map