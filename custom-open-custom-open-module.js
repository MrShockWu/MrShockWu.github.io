(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-open-custom-open-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID01007_P019')\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"header-title\">\r\n\t\t\t<span class=\"line\"></span>\r\n\t\t\t<span class=\"text\">创建行政事业单位客户\r\n\t\t\t\t<span class=\"textRed\"> '*'为必填项</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<form [formGroup]=\"userform\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"chClientName\" formControlName=\"chClientName\" [(ngModel)]='administrativeCustomerOpenBean.chClientName' type=\"text\"\r\n\t\t\t\t    pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['chClientName'].valid&&userform.controls['chClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','chClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户属性：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"clientType\" formControlName=\"clientType\" [options]=\"CustAttr\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='administrativeCustomerOpenBean.clientType' disabled='true'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['clientType'].valid&&userform.controls['clientType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"globalType\" formControlName=\"globalType\" [options]=\"CERT_TYPE\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='administrativeCustomerOpenBean.globalType' (onChange)='chooseGlobalType()'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalType'].valid&&userform.controls['globalType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件截止日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-calendar name=\"closedGlobalDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"closedGlobalDate\"\r\n\t\t\t\t    [minDate]='closedDataEnd' [(ngModel)]=\"closedGlobalDate\" [showIcon]=\"true\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('closedGlobalDate')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['closedGlobalDate'].valid&&userform.controls['closedGlobalDate'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','closedGlobalDate')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalId\" formControlName=\"globalId\" type=\"text\" pInputText [(ngModel)]='administrativeCustomerOpenBean.globalId'\r\n\t\t\t\t    oncopy=\"return false\" (blur)=\"isSaneOne()\" id=\"globalIdfoc\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalId'].valid&&userform.controls['globalId'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','globalId')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\"><label *ngIf=\"!userform.hasError('required','globalId') && globalNotNull\">证件号码至少为17位</label></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>再次输入证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalIdAgain\" formControlName=\"globalIdAgain\" type=\"text\" pInputText [(ngModel)]='globalIdAgain' (blur)=\"isSane()\"\r\n\t\t\t\t    oncopy=\"return false\" onpaste=\"return false\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalIdAgain'].valid&&userform.controls['globalIdAgain'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"show1\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"show2\">输入证件号码不一致！</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>法人代表：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"legalClientName\" formControlName=\"legalClientName\" [(ngModel)]='administrativeCustomerOpenBean.legalClientName'\r\n\t\t\t\t    type=\"text\" pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['legalClientName'].valid&&userform.controls['legalClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','legalClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>组织机构代码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"organ\" *ngIf=\"isReadTrue\" formControlName=\"organ\" [(ngModel)]='administrativeCustomerOpenBean.organ' type=\"text\"\r\n\t\t\t\t    pInputText>\r\n\t\t\t\t<input name=\"organ\" *ngIf=\"!isReadTrue\" formControlName=\"organ\" [(ngModel)]='administrativeCustomerOpenBean.organ' type=\"text\"\r\n\t\t\t\t    pInputText disabled=\"true\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['organ'].valid&&userform.controls['organ'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','organ')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>注册登记日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar name=\"signData\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"signData\"\r\n\t\t\t\t    [(ngModel)]=\"signData\" [maxDate]='signDataEnd' [showIcon]=\"true\" (onSelect)=\"showData()\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\"  (onBlur)=\"handInputDate('signData')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['signData'].valid&&userform.controls['signData'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','signData')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>登记注册类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"regType\" formControlName=\"regType\" [options]=\"registrationType\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='administrativeCustomerOpenBean.regType'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['regType'].valid&&userform.controls['regType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>注册资金币种：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"regCapitalCcy\" formControlName=\"regCapitalCcy\" [(ngModel)]='administrativeCustomerOpenBean.regCapitalCcy'\r\n\t\t\t\t    [options]=\"CURRENCY\" ng-value=\"请选择\">\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['regCapitalCcy'].valid&&userform.controls['regCapitalCcy'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>国别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"countryCitizen\" formControlName=\"countryCitizen\" [options]=\"COUNTRY\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='administrativeCustomerOpenBean.countryCitizen'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['countryCitizen'].valid&&userform.controls['countryCitizen'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>企业性质：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"corporationType\" formControlName=\"corporationType\" [options]=\"Corporation_Type\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='administrativeCustomerOpenBean.corporationType'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['corporationType'].valid&&userform.controls['corporationType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>联系电话：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"contactPhone\" formControlName=\"contactPhone\" type=\"text\" pInputText [(ngModel)]='administrativeCustomerOpenBean.contactPhone'\r\n\t\t\t\t    (focus)=\"inputPhone()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['contactPhone'].valid&&userform.controls['contactPhone'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','contactPhone')\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('required','contactPhone') && userform.hasError('contactPhoneCheck','contactPhone')\">输入的联系电话有误</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('required','contactPhone') && !userform.hasError('contactPhoneCheck','contactPhone') && userform.controls['contactPhone'].value.length > 13\">请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"phoneError\" style=\"color:red;\">\r\n\t\t\t\t\t<label>请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>执照注册地址：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"provinceLras\" formControlName=\"provinceLras\" [options]=\"provinceOptionsLras\" [(ngModel)]=\"provinceLras\"\r\n\t\t\t\t    (onChange)=\"queryZoneInfoLras(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"cityLras\" formControlName=\"cityLras\" [options]=\"cityOptionsLras\" [(ngModel)]=\"cityLras\" (onChange)=\"queryZoneInfoLras(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zoneLras\" formControlName=\"zoneLras\" [options]=\"zoneOptionsLras\" [(ngModel)]=\"zoneLras\" (onChange)=\"queryZoneInfoLras(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"streetLras\" formControlName=\"streetLras\" [options]=\"streetOptionsLras\" [(ngModel)]=\"streetLras\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['provinceLras'].valid&&userform.controls['provinceLras'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>所在行政区划：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"province\" formControlName=\"province\" [options]=\"provinceOptionsBasic\" [(ngModel)]=\"province\" (onChange)=\"queryZoneInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"city\" formControlName=\"city\" [options]=\"cityOptionsBasic\" [(ngModel)]=\"city\" (onChange)=\"queryZoneInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zone\" formControlName=\"zone\" [options]=\"zoneOptionsBasic\" [(ngModel)]=\"zone\" (onChange)=\"queryZoneInfo(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"street\" formControlName=\"street\" [options]=\"streetOptionsBasic\" [(ngModel)]=\"street\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['province'].valid&&userform.controls['province'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户客户经理：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"userName\" formControlName=\"userName\" [(ngModel)]='userName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['userName'].valid&&userform.controls['userName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户经理所在机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"orgName\" formControlName=\"orgName\" [(ngModel)]='orgName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>建立日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"createDate\" formControlName=\"createDate\" [(ngModel)]='createDate' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['createDate'].valid&&userform.controls['createDate'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</form>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"openSave()\" label=\"客户开立\" *ngIf=\"permissionCheck('SID01007_P019_P001')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"tempSave()\" label=\"暂存\" *ngIf=\"permissionCheck('SID01007_P019_P002')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"doEmpty()\" label=\"重置\"></button>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 确认发布-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" header=\"提示\" icon=\"fa fa-question-circle\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n  .header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  .header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n  .header-title .textRed {\n    font-size: 15px;\n    color: red; }\n  .text-right {\n  text-align: right;\n  line-height: 28px !important;\n  font-size: 14px; }\n  .text-right span {\n    color: red; }\n  .ui-g-12 .ui-g-6 .bodyl {\n  display: inline-block;\n  width: 200px;\n  padding-right: 5px;\n  text-align: right; }\n  .ui-g-12 .ui-g-6 .bodyl .org {\n    color: #424242; }\n  .btn {\n  text-align: center;\n  margin-top: 32px; }\n  input {\n  width: 57% !important;\n  font-size: 14px !important; }\n  .detailAddressCss {\n  width: 83% !important; }\n  @media screen and (max-width: 1280px) {\n  .basic {\n    margin-top: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1vcGVuL2FkbWluaXN0cmF0aXZlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW9wZW5cXGFkbWluaXN0cmF0aXZlXFxhZG1pbmlzdHJhdGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVIvQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQWRqQztJQW1CUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBM0J6QjtJQThCUSxlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBSWxCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7RUFIbkI7SUFLUSxVQUFVLEVBQUE7RUFHbEI7RUFHWSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQU43QjtJQVdnQixjQUFjLEVBQUE7RUFLOUI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFHeEI7RUFDSSxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW9wZW4vYWRtaW5pc3RyYXRpdmUvYWRtaW5pc3RyYXRpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgICAgICAtbXMtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRSZWR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgLmJvZHlsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLy8gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC5vcmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogNTclICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbEFkZHJlc3NDc3Mge1xyXG4gICAgd2lkdGg6IDgzJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAuYmFzaWMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: Administrative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Administrative", function() { return Administrative; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_administrative_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/administrative-customer-open.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/bean/administrative-customer-open.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CO_IDEN_TYPE, Panduan, CURRENCY } from '../../../constant/custView.codeValue';
// import { CERT_TYPE_CORPORATE, Corporation_Type } from '../../../constant/custOperation.codeValue';

// import { RegistrationType, OPENGENDER, OPENOccupation, OPENCOUNTRY, CUST_ATTRIBUTES } from './../../../constant/custOperation.codeValue';



var Administrative = /** @class */ (function () {
    function Administrative(CusViewHttpService, commfunc, fb, confirmationService) {
        this.CusViewHttpService = CusViewHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.administrativeCustomerOpenBean = new _bean_administrative_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__["AdministrativeCustomerOpenBean"]();
        this.CustAttr = []; //客户属性
        this.CERT_TYPE = []; //客户证件类型
        this.Corporation_Type = []; //企业证件类型
        this.registrationType = []; //登记注册类型
        this.GENDER = []; //性别
        this.COUNTRY = []; //国别
        this.Occupation = []; //职业
        this.CO_IDEN_TYPE = []; //企业证件类型
        this.Panduan = []; //是否
        this.CURRENCY = []; //币种
        this.custNo = '';
        this.CALENDAR_CN = [];
        this.userName = '';
        this.orgName = '';
        this.createDate = '';
        this.show1 = true;
        this.show2 = false;
        this.isSave = true;
        this.isShowTip = true;
        this.phoneError = false;
        this.tempData = [];
        this.isReadTrue = true;
        this.globalNotNull = false;
        this.closedDataEnd = new Date(this.getMinMaxDate('min'));
        this.signDataEnd = new Date(this.getMinMaxDate('max'));
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.CustAttr = this.code['CUST_ATTRIBUTES'];
        this.CERT_TYPE = this.code['CERT_TYPE_CORPORATE'];
        this.Corporation_Type = this.code['Corporation_Type'];
        this.registrationType = this.code['RegistrationType'];
        this.GENDER = this.code['OPENGENDER'];
        this.COUNTRY = this.code['OPENCOUNTRY'];
        this.Occupation = this.code['OPENOccupation'];
        this.CO_IDEN_TYPE = this.code['CO_IDEN_TYPE'];
        this.Panduan = this.code['Panduan'];
        this.CURRENCY = this.code['CURRENCY'];
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.CALENDAR_CN = {
            "firstDayOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        };
        this.userform = fb.group({
            'chClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            clientType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'globalId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            globalIdAgain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            closedGlobalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'organ': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            corporationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'legalClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            signData: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: [''],
            zone: [''],
            street: [''],
            provinceLras: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cityLras: [''],
            zoneLras: [''],
            streetLras: [''],
            regCapitalCcy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            countryCitizen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'contactPhone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["contactPhoneCheck"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13),]),
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            orgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            createDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    Administrative.prototype.ngOnInit = function () {
        var param = JSON.parse(this.commfunc.getSessionDataCH('administrativeCustomeOpenInfo'));
        if (param == undefined || param == null) {
            var a = '';
            this.queryZoneInfo(a);
            var b = '';
            this.queryZoneInfoLras(b);
        }
        this.doInit();
        this.callSession();
    };
    //初始化
    Administrative.prototype.doInit = function () {
        this.isReadTrue = true;
        this.administrativeCustomerOpenBean.clientType = '5'; //操作类型-默认为5
        this.administrativeCustomerOpenBean.countryCitizen = 'CHN'; //国别-默认为'中国'
        this.createDate = this.transDate(new Date());
    };
    //码值
    Administrative.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //获取日期组件的数据
    Administrative.prototype.showData = function () {
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.administrativeCustomerOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        if (this.signData != undefined && this.signData != '') {
            this.administrativeCustomerOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
        // this.administrativeCustomerOpenBean.closedGlobalDate = this.commfunc.transDate(this.closedGlobalDate)
        // this.administrativeCustomerOpenBean.signData = this.commfunc.transDate(this.signData)
    };
    //选择证件类型
    Administrative.prototype.chooseGlobalType = function () {
        //组织机构代码
        if (this.administrativeCustomerOpenBean.globalType == '12') {
            this.isReadTrue = false;
            this.globalNotNull = false;
            this.administrativeCustomerOpenBean.organ = this.administrativeCustomerOpenBean.globalId;
        }
        //五证合一
        if (this.administrativeCustomerOpenBean.globalType == '16') {
            this.doMutiJuage();
        }
        //其他证件
        if (this.administrativeCustomerOpenBean.globalType != '16' && this.administrativeCustomerOpenBean.globalType != '12') {
            this.isReadTrue = true;
            this.globalNotNull = false;
        }
    };
    //输入联系电话
    Administrative.prototype.inputPhone = function () {
        this.phoneError = false;
    };
    //保存按钮
    Administrative.prototype.openSave = function () {
        var _this = this;
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.administrativeCustomerOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        if (this.signData != undefined && this.signData != '') {
            this.administrativeCustomerOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
        this.isShowTip = true;
        //所在行政区划
        if (!this.street || this.street == '') {
            if (!this.zone || this.zone == '') {
                if (!this.city || this.city == '') {
                    this.administrativeCustomerOpenBean.regionCode = this.province;
                }
                else {
                    this.administrativeCustomerOpenBean.regionCode = this.city;
                }
            }
            else {
                this.administrativeCustomerOpenBean.regionCode = this.zone;
            }
        }
        else {
            this.administrativeCustomerOpenBean.regionCode = this.street;
        }
        //执照注册地址
        if (!this.streetLras || this.streetLras == '') {
            if (!this.zoneLras || this.zoneLras == '') {
                if (!this.cityLras || this.cityLras == '') {
                    this.administrativeCustomerOpenBean.licenseRegAddressCode = this.provinceLras;
                }
                else {
                    this.administrativeCustomerOpenBean.licenseRegAddressCode = this.cityLras;
                }
            }
            else {
                this.administrativeCustomerOpenBean.licenseRegAddressCode = this.zoneLras;
            }
        }
        else {
            this.administrativeCustomerOpenBean.licenseRegAddressCode = this.streetLras;
        }
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //证件号码校验
        if (this.administrativeCustomerOpenBean.globalType == '12') {
            var reg = /^[A-Za-z0-9]{8}[-]{0,1}[A-Za-z0-9]{1}$/;
            if (!reg.test(this.administrativeCustomerOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "组织机构代码长度为9位或10位，长度为10位时第9位为'-'" });
                return;
            }
        }
        //组织机构代码校验
        var reg = /^[A-Za-z0-9]{8}[-]{0,1}[A-Za-z0-9]{1}$/;
        if (!reg.test(this.administrativeCustomerOpenBean.organ)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "组织机构代码长度为9位或10位，长度为10位时第9位为'-'" });
            return;
        }
        //电话号码
        var re = /^(1[3|4|5|7|8][0-9]{9})$|^(0\d{2,3}-?\d{7,8}$)$/;
        if (!re.test(this.administrativeCustomerOpenBean.contactPhone)) {
            this.phoneError = true;
            return;
        }
        else {
            this.phoneError = false;
        }
        if (this.isSave) {
            this.isSave = false;
            this.administrativeCustomerOpenBean.operationType = '1'; //操作类型-默认为1
            this.administrativeCustomerOpenBean.clientFlag = '2'; //客户类型-默认为2
            var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.administrativeCustomerOpenBean.custManagerId = ch.userId;
            this.CusViewHttpService.openPartyGroupCust(this.administrativeCustomerOpenBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.custNo = data.clientNo;
                    _this.doComfirm(_this.custNo);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: '开立成功!客户号为：' + this.custNo });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.isSave = true;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                _this.isSave = true;
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请等待上次执行完成之后，再点击保存！' });
        }
    };
    //点击确定
    Administrative.prototype.doComfirm = function (param) {
        var _this = this;
        this.confirmationService.confirm({
            message: '开立成功!客户号为：' + param,
            accept: function () {
                _this.isSave = true;
                _this.doEmpty();
            },
        });
    };
    //重置、清空
    Administrative.prototype.doEmpty = function () {
        this.isShowTip = false;
        this.administrativeCustomerOpenBean = new _bean_administrative_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__["AdministrativeCustomerOpenBean"]();
        this.closedGlobalDate = '';
        this.globalIdAgain = '';
        this.signData = '';
        this.province = '';
        this.city = '';
        this.zone = '';
        this.street = '';
        this.provinceLras = '';
        this.cityLras = '';
        this.zoneLras = '';
        this.streetLras = '';
        this.commfunc.clearSession('administrativeCustomeOpenInfo');
        this.doInit();
        this.doEmptyAddrOccup();
    };
    Administrative.prototype.callSession = function () {
        //取暂存值
        // let anonpro = '';
        // this.queryZoneInfo(anonpro);
        // let bnonpro = '';
        // this.queryZoneInfoLras(bnonpro);
        var param = JSON.parse(this.commfunc.getSessionDataCH('administrativeCustomeOpenInfo'));
        if (param != null) {
            var paramBean = param[0];
            //页面bean元素
            this.administrativeCustomerOpenBean = paramBean.administrativeCustomerOpenBean;
            //登记日期
            if (this.administrativeCustomerOpenBean.signData != undefined || this.administrativeCustomerOpenBean.signData != '') {
                this.signData = this.transDateA(this.administrativeCustomerOpenBean.signData);
            }
            //证件截止日期
            if (this.administrativeCustomerOpenBean.closedGlobalDate != undefined || this.administrativeCustomerOpenBean.closedGlobalDate != '') {
                this.closedGlobalDate = this.transDateA(this.administrativeCustomerOpenBean.closedGlobalDate);
            }
            //再次身份证
            if (paramBean.globalIdAgain != undefined || paramBean.globalIdAgain != '') {
                this.globalIdAgain = paramBean.globalIdAgain;
            }
            //家庭住址-省
            if (paramBean.provinceLras != undefined || paramBean.provinceLras != '') {
                this.provinceOptionsLras = paramBean.provinceOptionsLras,
                    this.provinceLras = paramBean.provinceLras;
            }
            //家庭住址-市
            if (paramBean.cityLras != undefined || paramBean.cityLras != '') {
                this.cityOptionsLras = paramBean.cityOptionsLras,
                    this.cityLras = paramBean.cityLras;
            }
            //家庭住址-区
            if (paramBean.zoneLras != undefined || paramBean.zoneLras != '') {
                this.zoneOptionsLras = paramBean.zoneOptionsLras,
                    this.zoneLras = paramBean.zoneLras;
            }
            //家庭住址-街道
            if (paramBean.streetLras != undefined || paramBean.streetLras != '') {
                this.streetOptionsLras = paramBean.streetOptionsLras,
                    this.streetLras = paramBean.streetLras;
            }
            //所在行政区划-省
            if (paramBean.province != undefined || paramBean.province != '') {
                this.provinceOptionsBasic = paramBean.provinceOptionsBasic,
                    this.province = paramBean.province;
            }
            //所在行政区划-市
            if (paramBean.city != undefined || paramBean.city != '') {
                this.cityOptionsBasic = paramBean.cityOptionsBasic,
                    this.city = paramBean.cityPro;
            }
            //所在行政区划-区
            if (paramBean.zone != undefined || paramBean.zone != '') {
                this.zoneOptionsBasic = paramBean.zoneOptionsBasic,
                    this.zone = paramBean.zonePro;
            }
            //所在行政区划-街道
            if (paramBean.street != undefined || paramBean.street != '') {
                this.streetOptionsBasic = paramBean.streetOptionsBasic,
                    this.street = paramBean.street;
            }
        }
    };
    //暂存按钮事件
    Administrative.prototype.tempSave = function () {
        if (this.signData != undefined && this.signData != '') {
            this.administrativeCustomerOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.administrativeCustomerOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        this.tempData = [];
        this.tempData.push({
            'administrativeCustomerOpenBean': this.administrativeCustomerOpenBean,
            "closedGlobalDate": this.closedGlobalDate,
            "globalIdAgain": this.globalIdAgain,
            "signData": this.signData,
            "provinceLras": this.provinceLras,
            "cityLras": this.cityLras,
            "zoneLras": this.zoneLras,
            "streetLras": this.streetLras,
            "province": this.province,
            "cityPro": this.city,
            "zonePro": this.zone,
            "street": this.street,
            "provinceOptionsBasic": this.provinceOptionsBasic,
            "cityOptionsBasic": this.cityOptionsBasic,
            "zoneOptionsBasic": this.zoneOptionsBasic,
            "streetOptionsBasic": this.streetOptionsBasic,
            "provinceOptionsLras": this.provinceOptionsLras,
            "cityOptionsLras": this.cityOptionsLras,
            "zoneOptionsLras": this.zoneOptionsLras,
            "streetOptionsLras": this.streetOptionsLras,
        }),
            this.commfunc.setSessionDataCH('administrativeCustomeOpenInfo', JSON.stringify(this.tempData));
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '客户信息已保存！' });
    };
    //修改证件号码-再次校验
    Administrative.prototype.isSaneOne = function () {
        //选择证件类型-是否为组织机构代码
        if (this.administrativeCustomerOpenBean.globalType == '12') {
            this.isReadTrue = false;
            this.administrativeCustomerOpenBean.organ = this.administrativeCustomerOpenBean.globalId;
        }
        //五证合一
        if (this.administrativeCustomerOpenBean.globalType == '16') {
            this.doMutiJuage();
        }
        if (this.globalIdAgain != undefined) {
            this.isSane();
        }
    };
    //若类型为五证合一
    Administrative.prototype.doMutiJuage = function () {
        this.isReadTrue = false;
        if (this.administrativeCustomerOpenBean.globalId != undefined) {
            var gloLength = this.administrativeCustomerOpenBean.globalId.length;
            if (gloLength == 0) {
                this.globalNotNull = false;
                this.show1 = false;
                this.show2 = false;
                this.globalIdAgain = undefined;
                document.getElementById('globalIdfoc').focus();
            }
            if (gloLength > 0 && gloLength < 17) {
                this.globalNotNull = true;
                this.show1 = false;
                this.show2 = false;
                this.globalIdAgain = undefined;
                document.getElementById('globalIdfoc').focus();
            }
            if (gloLength >= 17) {
                this.globalNotNull = false;
                var ss = this.administrativeCustomerOpenBean.globalId.substring(8, 16) + '-' + this.administrativeCustomerOpenBean.globalId.substring(16, 17);
                this.administrativeCustomerOpenBean.organ = ss;
            }
        }
    };
    //证件输入是否一致校验
    Administrative.prototype.isSane = function () {
        if (this.administrativeCustomerOpenBean.globalId != this.globalIdAgain) {
            this.globalIdAgain = '';
            this.show1 = false;
            this.show2 = true;
        }
        else {
            this.show1 = false;
            this.show2 = false;
        }
    };
    //日期处理
    Administrative.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "年" + month + "月" + data + "日";
        return newtime;
    };
    //日期转换
    Administrative.prototype.transDateA = function (value) {
        if (!value) {
            return '';
        }
        var year = value.substring(0, 4);
        var month = value.substring(4, 6);
        var data = value.substring(6, 8);
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //所在行政区划
    Administrative.prototype.queryZoneInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsBasic.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.city = '';
                    _this.zone = '';
                    _this.street = '';
                }
            });
        }
        else if (data == '1') {
            if (this.province == '') {
                this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.city = '';
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.province
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.zone = '';
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.city == '') {
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.city
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zone == '') {
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zone
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsBasic.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //登记注册地址
    Administrative.prototype.queryZoneInfoLras = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsLras.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsLras = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                    _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                    _this.cityLras = '';
                    _this.zoneLras = '';
                    _this.streetLras = '';
                }
            });
        }
        else if (data == '1') {
            if (this.provinceLras == '') {
                this.cityOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.cityLras = '';
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.provinceLras
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.zoneLras = '';
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.cityLras == '') {
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.cityLras
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zoneLras == '') {
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zoneLras
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsLras.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    // 手动输入日期
    Administrative.prototype.handInputDate = function (param) {
        var _this = this;
        var date = new Date();
        if (param == 'closedGlobalDate') {
            if (this.closedGlobalDate != null && this.closedGlobalDate != '') {
                if (this.commfunc.transDateN(this.closedGlobalDate) < this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '证件截止日期不能小于当前日期' });
                    setTimeout(function () {
                        _this.closedGlobalDate = null;
                    });
                }
            }
        }
        if (param == 'signData') {
            if (this.signData != null && this.signData != '') {
                if (this.commfunc.transDateN(this.signData) > this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '注册登记日期不能大于当前日期' });
                    setTimeout(function () {
                        _this.signData = null;
                    });
                }
            }
        }
    };
    // 获取今天最大最小日期
    Administrative.prototype.getMinMaxDate = function (param) {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var todayTime;
        if (param == 'min') {
            todayTime = year + "/" + month + "/" + data + ' 00:00:00';
        }
        if (param == 'max') {
            todayTime = year + "/" + month + "/" + data + ' 23:59:59';
        }
        return todayTime;
    };
    // 清空执照注册地址+所在行政区划
    Administrative.prototype.doEmptyAddrOccup = function () {
        var a = '';
        this.queryZoneInfo(a);
        var b = '';
        this.queryZoneInfoLras(b);
    };
    //按钮权限
    Administrative.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Administrative.prototype, "outValue", void 0);
    Administrative = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administrative',
            template: __webpack_require__(/*! ./administrative.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.html"),
            styles: [__webpack_require__(/*! ./administrative.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], Administrative);
    return Administrative;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/bean/administrative-customer-open.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/bean/administrative-customer-open.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AdministrativeCustomerOpenBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrativeCustomerOpenBean", function() { return AdministrativeCustomerOpenBean; });
var AdministrativeCustomerOpenBean = /** @class */ (function () {
    function AdministrativeCustomerOpenBean() {
    }
    return AdministrativeCustomerOpenBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/bean/corporate-customer-open.bean.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/bean/corporate-customer-open.bean.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CorporateCustomeOpenBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateCustomeOpenBean", function() { return CorporateCustomeOpenBean; });
var CorporateCustomeOpenBean = /** @class */ (function () {
    function CorporateCustomeOpenBean() {
    }
    return CorporateCustomeOpenBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID01007_P018')\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"header-title\">\r\n\t\t\t<span class=\"line\"></span>\r\n\t\t\t<span class=\"text\">创建企业客户\r\n\t\t\t\t<span class=\"textRed\"> '*'为必填项</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"userform\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"chClientName\" formControlName=\"chClientName\" [(ngModel)]='corporateCustomeOpenBean.chClientName' type=\"text\"\r\n\t\t\t\t    pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['chClientName'].valid&&userform.controls['chClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','chClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户属性：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"clientType\" formControlName=\"clientType\" [options]=\"CustAttr\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='corporateCustomeOpenBean.clientType' disabled='true'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['clientType'].valid&&userform.controls['clientType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>客户名称是否超过30汉字：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"whetheClientShort\" formControlName=\"whetheClientShort\" [(ngModel)]='corporateCustomeOpenBean.whetheClientShort'\r\n\t\t\t\t    [options]=\"Panduan\" [style]=\"{'width':'240px','height':'24px'}\" (onChange)=\"doChangeName()\">\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"globalType\" formControlName=\"globalType\" [options]=\"CERT_TYPE\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='corporateCustomeOpenBean.globalType' (onChange)='chooseGlobalType()'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalType'].valid&&userform.controls['globalType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\" *ngIf=\"isShowMore\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>超长部分：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"clientShort\" formControlName=\"clientShort\" [(ngModel)]='corporateCustomeOpenBean.clientShort' type=\"text\" pInputText>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalId\" formControlName=\"globalId\" type=\"text\" pInputText [(ngModel)]='corporateCustomeOpenBean.globalId'\r\n\t\t\t\t    oncopy=\"return false\" (blur)=\"isSaneOne()\" id=\"globalIdfoc\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalId'].valid&&userform.controls['globalId'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','globalId')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\"><label *ngIf=\"!userform.hasError('required','globalId') && globalNotNull\">证件号码至少为17位</label></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>再次输入证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalIdAgain\" formControlName=\"globalIdAgain\" type=\"text\" pInputText [(ngModel)]='globalIdAgain' (blur)=\"isSane()\"\r\n\t\t\t\t    oncopy=\"return false\" onpaste=\"return false\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalIdAgain'].valid&&userform.controls['globalIdAgain'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"show1\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"show2\">输入证件号码不一致！</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件截止日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar name=\"closedGlobalDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"closedGlobalDate\"\r\n\t\t\t\t    [minDate]='closedDataEnd' [(ngModel)]=\"closedGlobalDate\" [showIcon]=\"true\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('closedGlobalDate')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['closedGlobalDate'].valid&&userform.controls['closedGlobalDate'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','closedGlobalDate')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>组织机构代码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"organ\" *ngIf=\"isReadTrue\" formControlName=\"organ\" [(ngModel)]='corporateCustomeOpenBean.organ' type=\"text\" pInputText>\r\n\t\t\t\t<input name=\"organ\" *ngIf=\"!isReadTrue\" formControlName=\"organ\" [(ngModel)]='corporateCustomeOpenBean.organ' type=\"text\"\r\n\t\t\t\t    pInputText disabled=\"true\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['organ'].valid&&userform.controls['organ'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','organ')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>企业性质：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"corporationType\" formControlName=\"corporationType\" [options]=\"Corporation_Type\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='corporateCustomeOpenBean.corporationType'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['corporationType'].valid&&userform.controls['corporationType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>法人代表：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"legalClientName\" formControlName=\"legalClientName\" [(ngModel)]='corporateCustomeOpenBean.legalClientName' type=\"text\"\r\n\t\t\t\t    pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['legalClientName'].valid&&userform.controls['legalClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','legalClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>注册登记日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar name=\"signData\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"signData\"\r\n\t\t\t\t    [maxDate]='signDataEnd' [(ngModel)]=\"signData\" [showIcon]=\"true\" (onSelect)=\"showData()\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('signData')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['signData'].valid&&userform.controls['signData'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','signData')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>登记注册类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"regType\" formControlName=\"regType\" [options]=\"registrationType\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='corporateCustomeOpenBean.regType'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['regType'].valid&&userform.controls['regType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>注册资金币种：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"regCapitalCcy\" formControlName=\"regCapitalCcy\" [(ngModel)]='corporateCustomeOpenBean.regCapitalCcy' [options]=\"CURRENCY\"\r\n\t\t\t\t    ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\">\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['regCapitalCcy'].valid&&userform.controls['regCapitalCcy'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>国别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"countryCitizen\" formControlName=\"countryCitizen\" [options]=\"COUNTRY\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='corporateCustomeOpenBean.countryCitizen'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['countryCitizen'].valid&&userform.controls['countryCitizen'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>联系电话：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"contactPhone\" formControlName=\"contactPhone\" type=\"text\" pInputText [(ngModel)]='corporateCustomeOpenBean.contactPhone'\r\n\t\t\t\t    (focus)=\"inputPhone()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['contactPhone'].valid&&userform.controls['contactPhone'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','contactPhone')\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('required','contactPhone') && userform.hasError('contactPhoneCheck','contactPhone')\">输入的联系电话有误</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('required','contactPhone') && !userform.hasError('contactPhoneCheck','contactPhone') && userform.controls['contactPhone'].value.length > 13\">请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"phoneError\" style=\"color:red;\">\r\n\t\t\t\t\t<label>请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>执照注册地址：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"provinceLras\" formControlName=\"provinceLras\" [options]=\"provinceOptionsLras\" [(ngModel)]=\"provinceLras\"\r\n\t\t\t\t    (onChange)=\"queryZoneInfoLras(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"cityLras\" formControlName=\"cityLras\" [options]=\"cityOptionsLras\" [(ngModel)]=\"cityLras\" (onChange)=\"queryZoneInfoLras(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zoneLras\" formControlName=\"zoneLras\" [options]=\"zoneOptionsLras\" [(ngModel)]=\"zoneLras\" (onChange)=\"queryZoneInfoLras(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"streetLras\" formControlName=\"streetLras\" [options]=\"streetOptionsLras\" [(ngModel)]=\"streetLras\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['provinceLras'].valid&&userform.controls['provinceLras'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>所在行政区划：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"province\" formControlName=\"province\" [options]=\"provinceOptionsBasic\" [(ngModel)]=\"province\" (onChange)=\"queryZoneInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"city\" formControlName=\"city\" [options]=\"cityOptionsBasic\" [(ngModel)]=\"city\" (onChange)=\"queryZoneInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zone\" formControlName=\"zone\" [options]=\"zoneOptionsBasic\" [(ngModel)]=\"zone\" (onChange)=\"queryZoneInfo(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"street\" formControlName=\"street\" [options]=\"streetOptionsBasic\" [(ngModel)]=\"street\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['province'].valid&&userform.controls['province'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户客户经理：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"userName\" formControlName=\"userName\" [(ngModel)]='userName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['userName'].valid&&userform.controls['userName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户经理所在机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"orgName\" formControlName=\"orgName\" [(ngModel)]='orgName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>建立日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"createDate\" formControlName=\"createDate\" [(ngModel)]='createDate' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['createDate'].valid&&userform.controls['createDate'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</form>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"openSave()\" label=\"客户开立\" *ngIf=\"permissionCheck('SID01007_P018_P001')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"tempSave()\" label=\"暂存\" *ngIf=\"permissionCheck('SID01007_P018_P002')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"doEmpty()\" label=\"重置\"></button>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 确认发布-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" header=\"提示\" icon=\"fa fa-question-circle\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n  .header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  .header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n  .header-title .textRed {\n    font-size: 15px;\n    color: red; }\n  .text-right {\n  text-align: right;\n  line-height: 28px !important;\n  font-size: 14px; }\n  .text-right span {\n    color: red; }\n  .ui-g-12 .ui-g-6 .bodyl {\n  display: inline-block;\n  width: 200px;\n  padding-right: 5px;\n  text-align: right; }\n  .ui-g-12 .ui-g-6 .bodyl .org {\n    color: #424242; }\n  .btn {\n  text-align: center;\n  margin-top: 32px; }\n  input {\n  width: 57% !important;\n  font-size: 14px !important; }\n  .detailAddressCss {\n  width: 83% !important; }\n  @media screen and (max-width: 1280px) {\n  .basic {\n    margin-top: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1vcGVuL2NvcnBvcmF0ZS1jdXN0b21lci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1vcGVuXFxjb3Jwb3JhdGUtY3VzdG9tZXJcXGNvcnBvcmF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVIvQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQWRqQztJQWtDUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBMUN6QjtJQTZDUSxlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7RUFIbkI7SUFLUSxVQUFVLEVBQUE7RUFHbEI7RUFHWSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQU43QjtJQVFnQixjQUFjLEVBQUE7RUFLOUI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFHeEI7RUFDSSxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW9wZW4vY29ycG9yYXRlLWN1c3RvbWVyL2NvcnBvcmF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlYWVjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gLmxpbmUge1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dFJlZHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIC5ib2R5bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIC5vcmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogNTclICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbEFkZHJlc3NDc3Mge1xyXG4gICAgd2lkdGg6IDgzJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAuYmFzaWMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CorporateCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateCustomer", function() { return CorporateCustomer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_corporate_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/corporate-customer-open.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/bean/corporate-customer-open.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CO_IDEN_TYPE, Panduan, CURRENCY } from '../../../constant/custView.codeValue';
// import { CERT_TYPE_CORPORATE, Corporation_Type } from '../../../constant/custOperation.codeValue';

// import { RegistrationType, OPENGENDER, OPENOccupation, OPENCOUNTRY, CUST_ATTRIBUTES, PanduanOpen } from './../../../constant/custOperation.codeValue';




var CorporateCustomer = /** @class */ (function () {
    function CorporateCustomer(router, CusViewHttpService, commfunc, fb, confirmationService) {
        this.router = router;
        this.CusViewHttpService = CusViewHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.corporateCustomeOpenBean = new _bean_corporate_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__["CorporateCustomeOpenBean"]();
        this.CustAttr = []; //客户属性
        this.CERT_TYPE = []; //客户证件类型
        this.CO_IDEN_TYPE = []; //企业证件类型
        this.Corporation_Type = []; //企业证件类型
        this.GENDER = []; //性别
        this.COUNTRY = []; //国别
        this.Occupation = []; //职业
        this.Panduan = []; //是否
        this.CURRENCY = []; //币种
        this.registrationType = []; //登记注册类型
        this.custNo = '';
        this.CALENDAR_CN = [];
        this.userName = '';
        this.orgName = '';
        this.createDate = '';
        this.show1 = true;
        this.show2 = false;
        this.isShowMore = false;
        this.isSave = true;
        this.isShowTip = true;
        this.phoneError = false;
        this.tempData = [];
        this.clientShort = ''; //客户名称-长度30汉字以上
        this.isReadTrue = true;
        this.globalNotNull = false;
        this.closedDataEnd = new Date(this.getMinMaxDate('min'));
        this.signDataEnd = new Date(this.getMinMaxDate('max'));
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.CustAttr = this.code['CUST_ATTRIBUTES'];
        this.CERT_TYPE = this.code['CERT_TYPE_CORPORATE'];
        this.CO_IDEN_TYPE = this.code['CO_IDEN_TYPE'];
        this.Corporation_Type = this.code['Corporation_Type'];
        this.GENDER = this.code['OPENGENDER'];
        this.COUNTRY = this.code['OPENCOUNTRY'];
        this.Occupation = this.code['OPENOccupation'];
        this.Panduan = this.code['PanduanOpen'];
        this.CURRENCY = this.code['CURRENCY'];
        this.registrationType = this.code['RegistrationType'];
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.callSession();
        this.CALENDAR_CN = {
            "firstDayOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        };
        this.userform = fb.group({
            'chClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            clientType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            whetheClientShort: [''],
            'clientShort': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            globalType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'globalId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            globalIdAgain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            closedGlobalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'organ': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            corporationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'legalClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            signData: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: [''],
            zone: [''],
            street: [''],
            provinceLras: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cityLras: [''],
            zoneLras: [''],
            streetLras: [''],
            regCapitalCcy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            countryCitizen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'contactPhone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["contactPhoneCheck"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13),]),
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            orgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            createDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    CorporateCustomer.prototype.ngOnInit = function () {
        var param = JSON.parse(this.commfunc.getSessionDataCH('corporateCustomeOpenInfo'));
        if (param == undefined || param == null) {
            var a = '';
            this.queryZoneInfo(a);
            var b = '';
            this.queryZoneInfoLras(b);
        }
        this.doInit();
        this.callSession();
    };
    //初始化
    CorporateCustomer.prototype.doInit = function () {
        this.isReadTrue = true;
        this.corporateCustomeOpenBean.clientType = '4'; //操作类型-默认为4
        this.corporateCustomeOpenBean.whetheClientShort = '2'; //客户类型-默认为2
        this.corporateCustomeOpenBean.countryCitizen = 'CHN'; //国别-默认为'中国'
        this.createDate = this.transDate(new Date());
    };
    //码值
    CorporateCustomer.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //获取日期组件的数据
    CorporateCustomer.prototype.showData = function () {
        // this.corporateCustomeOpenBean.closedGlobalDate = this.commfunc.transDate(this.closedGlobalDate)
        // this.corporateCustomeOpenBean.signData = this.commfunc.transDate(this.signData)
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.corporateCustomeOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        if (this.signData != undefined && this.signData != '') {
            this.corporateCustomeOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
    };
    //选择证件类型
    CorporateCustomer.prototype.chooseGlobalType = function () {
        //组织机构代码
        if (this.corporateCustomeOpenBean.globalType == '12') {
            this.isReadTrue = false;
            this.globalNotNull = false;
            this.corporateCustomeOpenBean.organ = this.corporateCustomeOpenBean.globalId;
        }
        //五证合一
        if (this.corporateCustomeOpenBean.globalType == '16') {
            this.doMutiJuage();
        }
        //其他证件
        if (this.corporateCustomeOpenBean.globalType != '16' && this.corporateCustomeOpenBean.globalType != '12') {
            this.isReadTrue = true;
            this.globalNotNull = false;
        }
    };
    //输入联系电话
    CorporateCustomer.prototype.inputPhone = function () {
        this.phoneError = false;
    };
    //保存按钮
    CorporateCustomer.prototype.openSave = function () {
        var _this = this;
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.corporateCustomeOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        if (this.signData != undefined && this.signData != '') {
            this.corporateCustomeOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
        this.isShowTip = true;
        //所在行政区划
        if (!this.street || this.street == '') {
            if (!this.zone || this.zone == '') {
                if (!this.city || this.city == '') {
                    this.corporateCustomeOpenBean.regionCode = this.province;
                }
                else {
                    this.corporateCustomeOpenBean.regionCode = this.city;
                }
            }
            else {
                this.corporateCustomeOpenBean.regionCode = this.zone;
            }
        }
        else {
            this.corporateCustomeOpenBean.regionCode = this.street;
        }
        //执照注册地址
        if (!this.streetLras || this.streetLras == '') {
            if (!this.zoneLras || this.zoneLras == '') {
                if (!this.cityLras || this.cityLras == '') {
                    this.corporateCustomeOpenBean.licenseRegAddressCode = this.provinceLras;
                }
                else {
                    this.corporateCustomeOpenBean.licenseRegAddressCode = this.cityLras;
                }
            }
            else {
                this.corporateCustomeOpenBean.licenseRegAddressCode = this.zoneLras;
            }
        }
        else {
            this.corporateCustomeOpenBean.licenseRegAddressCode = this.streetLras;
        }
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //证件号码校验
        if (this.corporateCustomeOpenBean.globalType == '12') {
            var reg = /^[A-Za-z0-9]{8}[-]{0,1}[A-Za-z0-9]{1}$/;
            if (!reg.test(this.corporateCustomeOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "组织机构代码长度为9位或10位，长度为10位时第9位为'-'" });
                return;
            }
        }
        //组织机构代码校验
        var reg = /^[A-Za-z0-9]{8}[-]{0,1}[A-Za-z0-9]{1}$/;
        if (!reg.test(this.corporateCustomeOpenBean.organ)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "组织机构代码长度为9位或10位，长度为10位时第9位为'-'" });
            return;
        }
        //电话号码
        var re = /^(1[3|4|5|7|8][0-9]{9})$|^(0\d{2,3}-?\d{7,8}$)$/;
        if (!re.test(this.corporateCustomeOpenBean.contactPhone)) {
            this.phoneError = true;
            return;
        }
        else {
            this.phoneError = false;
        }
        if (this.isSave) {
            this.isSave = false;
            this.corporateCustomeOpenBean.operationType = '1';
            this.corporateCustomeOpenBean.clientFlag = '2';
            var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.corporateCustomeOpenBean.custManagerId = ch.userId;
            this.CusViewHttpService.openPartyGroupCust(this.corporateCustomeOpenBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.custNo = data.clientNo;
                    _this.doComfirm(_this.custNo);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: '开立成功!客户号为：' + this.custNo });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.isSave = true;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                _this.isSave = true;
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请等待上次执行完成之后，再点击保存！' });
        }
    };
    //点击确定
    CorporateCustomer.prototype.doComfirm = function (param) {
        var _this = this;
        this.confirmationService.confirm({
            message: '开立成功!客户号为：' + param,
            accept: function () {
                _this.isSave = true;
                _this.doEmpty();
            },
        });
    };
    CorporateCustomer.prototype.callSession = function () {
        //取暂存值
        // let anonpro = '';
        // this.queryZoneInfo(anonpro);
        // let bnonpro = '';
        // this.queryZoneInfoLras(bnonpro);
        var param = JSON.parse(this.commfunc.getSessionDataCH('corporateCustomeOpenInfo'));
        if (param != null) {
            var paramBean = param[0];
            //页面bean元素
            this.corporateCustomeOpenBean = paramBean.corporateCustomeOpenBean;
            if (this.corporateCustomeOpenBean.whetheClientShort == '1') {
                this.isShowMore = true;
            }
            else {
                this.isShowMore = false;
            }
            //登记日期
            if (this.corporateCustomeOpenBean.signData != undefined || this.corporateCustomeOpenBean.signData != '') {
                this.signData = this.transDateA(this.corporateCustomeOpenBean.signData);
            }
            //证件截止日期
            if (this.corporateCustomeOpenBean.closedGlobalDate != undefined || this.corporateCustomeOpenBean.closedGlobalDate != '') {
                this.closedGlobalDate = this.transDateA(this.corporateCustomeOpenBean.closedGlobalDate);
            }
            //再次身份证
            if (paramBean.globalIdAgain != undefined || paramBean.globalIdAgain != '') {
                this.globalIdAgain = paramBean.globalIdAgain;
            }
            //家庭住址-省
            if (paramBean.provinceLras != undefined || paramBean.provinceLras != '') {
                this.provinceOptionsLras = paramBean.provinceOptionsLras;
                this.provinceLras = paramBean.provinceLras;
            }
            //家庭住址-市
            if (paramBean.cityLras != undefined || paramBean.cityLras != '') {
                this.cityOptionsLras = paramBean.cityOptionsLras;
                this.cityLras = paramBean.cityLras;
            }
            //家庭住址-区
            if (paramBean.zoneLras != undefined || paramBean.zoneLras != '') {
                this.zoneOptionsLras = paramBean.zoneOptionsLras;
                this.zoneLras = paramBean.zoneLras;
            }
            //家庭住址-街道
            if (paramBean.streetLras != undefined || paramBean.streetLras != '') {
                this.streetOptionsLras = paramBean.streetOptionsLras;
                this.streetLras = paramBean.streetLras;
            }
            //所在行政区划-省
            if (paramBean.province != undefined || paramBean.province != '') {
                this.provinceOptionsBasic = paramBean.provinceOptionsBasic;
                this.province = paramBean.province;
            }
            //所在行政区划-市
            if (paramBean.city != undefined || paramBean.city != '') {
                this.cityOptionsBasic = paramBean.cityOptionsBasic;
                this.city = paramBean.cityPro;
            }
            //所在行政区划-区
            if (paramBean.zone != undefined || paramBean.zone != '') {
                this.zoneOptionsBasic = paramBean.zoneOptionsBasic;
                this.zone = paramBean.zonePro;
            }
            //所在行政区划-街道
            if (paramBean.street != undefined || paramBean.street != '') {
                this.streetOptionsBasic = paramBean.streetOptionsBasic;
                this.street = paramBean.street;
            }
        }
    };
    //暂存按钮事件
    CorporateCustomer.prototype.tempSave = function () {
        if (this.signData != undefined && this.signData != '') {
            this.corporateCustomeOpenBean.signData = this.commfunc.transDate(new Date(this.signData));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.corporateCustomeOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        this.tempData = [];
        this.tempData.push({
            'corporateCustomeOpenBean': this.corporateCustomeOpenBean,
            "closedGlobalDate": this.closedGlobalDate,
            "globalIdAgain": this.globalIdAgain,
            "signData": this.signData,
            "provinceLras": this.provinceLras,
            "cityLras": this.cityLras,
            "zoneLras": this.zoneLras,
            "streetLras": this.streetLras,
            "province": this.province,
            "cityPro": this.city,
            "zonePro": this.zone,
            "street": this.street,
            "provinceOptionsBasic": this.provinceOptionsBasic,
            "cityOptionsBasic": this.cityOptionsBasic,
            "zoneOptionsBasic": this.zoneOptionsBasic,
            "streetOptionsBasic": this.streetOptionsBasic,
            "provinceOptionsLras": this.provinceOptionsLras,
            "cityOptionsLras": this.cityOptionsLras,
            "zoneOptionsLras": this.zoneOptionsLras,
            "streetOptionsLras": this.streetOptionsLras,
        }),
            this.commfunc.setSessionDataCH('corporateCustomeOpenInfo', JSON.stringify(this.tempData));
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '客户信息已保存！' });
    };
    //重置、清空
    CorporateCustomer.prototype.doEmpty = function () {
        this.isShowTip = false;
        this.corporateCustomeOpenBean = new _bean_corporate_customer_open_bean__WEBPACK_IMPORTED_MODULE_1__["CorporateCustomeOpenBean"]();
        this.closedGlobalDate = '';
        this.signData = '';
        this.globalIdAgain = '';
        this.province = '';
        this.city = '';
        this.zone = '';
        this.street = '';
        this.provinceLras = '';
        this.cityLras = '';
        this.zoneLras = '';
        this.streetLras = '';
        this.isShowMore = false;
        this.commfunc.clearSession('corporateCustomeOpenInfo');
        this.doInit();
        this.doEmptyAddrOccup();
    };
    //修改证件号码-再次校验
    CorporateCustomer.prototype.isSaneOne = function () {
        //选择证件类型-是否为组织机构代码
        if (this.corporateCustomeOpenBean.globalType == '12') {
            this.isReadTrue = false;
            this.corporateCustomeOpenBean.organ = this.corporateCustomeOpenBean.globalId;
        }
        //选择证件类型-是否为五证合一
        if (this.corporateCustomeOpenBean.globalType == '16') {
            this.doMutiJuage();
        }
        if (this.globalIdAgain != undefined) {
            this.isSane();
        }
    };
    //若类型为五证合一
    CorporateCustomer.prototype.doMutiJuage = function () {
        this.isReadTrue = false;
        if (this.corporateCustomeOpenBean.globalId != undefined) {
            var gloLength = this.corporateCustomeOpenBean.globalId.length;
            if (gloLength == 0) {
                this.globalNotNull = false;
                this.show1 = false;
                this.show2 = false;
                this.globalIdAgain = undefined;
                document.getElementById('globalIdfoc').focus();
            }
            if (gloLength > 0 && gloLength < 17) {
                this.globalNotNull = true;
                this.show1 = false;
                this.show2 = false;
                this.globalIdAgain = undefined;
                document.getElementById('globalIdfoc').focus();
            }
            if (gloLength >= 17) {
                this.globalNotNull = false;
                var ss = this.corporateCustomeOpenBean.globalId.substring(8, 16) + '-' + this.corporateCustomeOpenBean.globalId.substring(16, 17);
                this.corporateCustomeOpenBean.organ = ss;
            }
        }
    };
    //证件输入是否一致校验
    CorporateCustomer.prototype.isSane = function () {
        if (this.corporateCustomeOpenBean.globalId != this.globalIdAgain) {
            this.globalIdAgain = '';
            this.show1 = false;
            this.show2 = true;
        }
        else {
            this.show1 = false;
            this.show2 = false;
        }
    };
    //客户名称是否超过30汉字（更改）
    CorporateCustomer.prototype.doChangeName = function () {
        if (this.corporateCustomeOpenBean.whetheClientShort == '1') {
            this.isShowMore = true;
        }
        if (this.corporateCustomeOpenBean.whetheClientShort == '2') {
            this.isShowMore = false;
            this.corporateCustomeOpenBean.clientShort = '';
        }
        if (this.corporateCustomeOpenBean.whetheClientShort == '') {
            this.isShowMore = false;
            this.corporateCustomeOpenBean.clientShort = '';
        }
    };
    //日期处理
    CorporateCustomer.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "年" + month + "月" + data + "日";
        return newtime;
    };
    //日期转换
    CorporateCustomer.prototype.transDateA = function (value) {
        if (!value) {
            return '';
        }
        var year = value.substring(0, 4);
        var month = value.substring(4, 6);
        var data = value.substring(6, 8);
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //所在行政区划
    CorporateCustomer.prototype.queryZoneInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsBasic.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.city = '';
                    _this.zone = '';
                    _this.street = '';
                }
            });
        }
        else if (data == '1') {
            if (this.province == '') {
                this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.city = '';
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.province
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.zone = '';
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.city == '') {
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.city
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zone == '') {
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zone
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsBasic.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //登记注册地址
    CorporateCustomer.prototype.queryZoneInfoLras = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsLras.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsLras = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                    _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                    _this.cityLras = '';
                    _this.zoneLras = '';
                    _this.streetLras = '';
                }
            });
        }
        else if (data == '1') {
            if (this.provinceLras == '') {
                this.cityOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.cityLras = '';
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.provinceLras
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.zoneLras = '';
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.cityLras == '') {
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.cityLras
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zoneLras == '') {
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zoneLras
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsLras.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    // 手动输入日期
    CorporateCustomer.prototype.handInputDate = function (param) {
        var _this = this;
        var date = new Date();
        if (param == 'closedGlobalDate') {
            if (this.closedGlobalDate != null && this.closedGlobalDate != '') {
                if (this.commfunc.transDateN(this.closedGlobalDate) < this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '证件截止日期不能小于当前日期' });
                    setTimeout(function () {
                        _this.closedGlobalDate = null;
                    });
                }
            }
        }
        if (param == 'signData') {
            if (this.signData != null && this.signData != '') {
                if (this.commfunc.transDateN(this.signData) > this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '注册登记日期不能大于当前日期' });
                    setTimeout(function () {
                        _this.signData = null;
                    });
                }
            }
        }
    };
    // 获取今天最大最小日期
    CorporateCustomer.prototype.getMinMaxDate = function (param) {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var todayTime;
        if (param == 'min') {
            todayTime = year + "/" + month + "/" + data + ' 00:00:00';
        }
        if (param == 'max') {
            todayTime = year + "/" + month + "/" + data + ' 23:59:59';
        }
        return todayTime;
    };
    // 清空执照注册地址+所在行政区划
    CorporateCustomer.prototype.doEmptyAddrOccup = function () {
        var a = '';
        this.queryZoneInfo(a);
        var b = '';
        this.queryZoneInfoLras(b);
    };
    //按钮权限
    CorporateCustomer.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CorporateCustomer.prototype, "outValue", void 0);
    CorporateCustomer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corporate-customer',
            template: __webpack_require__(/*! ./corporate-customer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.html"),
            styles: [__webpack_require__(/*! ./corporate-customer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]])
    ], CorporateCustomer);
    return CorporateCustomer;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12 functions\">\r\n\t\t<a [routerLink]=\"['production']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"open(1)\" *ngIf=\"permissionCheck('SID01007_P016')\">生产经营性个人客户</a>\r\n\t\t<a [routerLink]=\"['nonProduction']\" class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"open(2)\" *ngIf=\"permissionCheck('SID01007_P017')\">非生产经营性个人客户</a>\r\n\t\t<a [routerLink]=\"['corporate-customer']\" class=\"change\" [ngClass]=\"{'active':show==3}\" (click)=\"open(3)\" *ngIf=\"permissionCheck('SID01007_P018')\">企业客户</a>\r\n\t\t<a [routerLink]=\"['administrative']\" class=\"change\" [ngClass]=\"{'active':show==4}\" (click)=\"open(4)\" *ngIf=\"permissionCheck('SID01007_P019')\">行政事业单位客户</a>\r\n\t</div>\r\n</div>\r\n<div class=\"ui-g-12 module padding-one bgcolor\">\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".span-name {\n  color: red; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n\n.padding-one {\n  padding: 1em; }\n\n.bgcolor {\n  background: #f7f7f7; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1vcGVuL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW9wZW5cXGN1c3RvbS1vcGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFQTtFQUNJLFVBQVUsRUFBQTs7QUFJZDtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSTtJQUNJLGdDQUFnQyxFQUFBO0VBRXBDO0lBQ0ksb0NBQW9DLEVBQUE7RUFFeEM7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tb3Blbi9jdXN0b20tb3Blbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC51aS1ne1xyXG4vLyAgICAgLnVpLWctMTJ7XHJcbi8vICAgICAgICAgLmNoYW5nZXtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgICAgICAgICAgIC8vd2lkdGg6IDE0MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMSU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAuYWN0aXZle1xyXG4vLyAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMjA2LCAyNTAsIDEpO1xyXG4vLyB9XHJcblxyXG4vLyAudWktZyB7XHJcbi8vICAgICAuZnVuY3Rpb25zIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZTdlYWVjO1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIC5wcmltIHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2FhYWFhYTtcclxuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLnVzZXIge1xyXG4vLyAgICAgICAgIC5hY2NvdW50IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmJyYW5jaCB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuYWN0aXZlIHtcclxuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuLy8gICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICMwNzM3NGQgIWltcG9ydGFudDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlYWVjICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuLy8gfVxyXG4uc3Bhbi1uYW1le1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDNmNWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmJnY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLmZ1bmN0aW9ucyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNmU5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmdjb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CustomOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOpen", function() { return CustomOpen; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomOpen = /** @class */ (function () {
    function CustomOpen(commfunc) {
        this.commfunc = commfunc;
        this.show = 1;
    }
    CustomOpen.prototype.ngOnInit = function () {
        var url = window.location.href;
        if (url.includes('/pages/tzb/custom/custom-marketing/cus-open/production')) {
            this.show = 1;
        }
        else if (url.includes('/pages/tzb/custom/custom-marketing/cus-open/nonProduction')) {
            this.show = 2;
        }
        else if (url.includes('/pages/tzb/custom/custom-marketing/cus-open/corporate-customer')) {
            this.show = 3;
        }
        else if (url.includes('/pages/tzb/custom/custom-marketing/cus-open/administrative')) {
            this.show = 4;
        }
    };
    CustomOpen.prototype.open = function (num) {
        this.show = num;
    };
    //按钮权限
    CustomOpen.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomOpen = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-open',
            template: __webpack_require__(/*! ./custom-open.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.html"),
            styles: [__webpack_require__(/*! ./custom-open.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CustomOpen);
    return CustomOpen;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CusOpenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusOpenModule", function() { return CusOpenModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_open_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-open.routing */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _custom_open_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-open.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.ts");
/* harmony import */ var _corporate_customer_corporate_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./corporate-customer/corporate-customer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.ts");
/* harmony import */ var _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./administrative/administrative.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.ts");
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./production/production.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.ts");
/* harmony import */ var _non_production_non_production_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./non-production/non-production.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //客户运营平台 http
 //客户开立
 //企业客户
 //行政事业单位用户
 //生产经营性个人客户
 //非生产经营性个人客户

/**
 * 客户开立模块
 */
var CusOpenModule = /** @class */ (function () {
    function CusOpenModule() {
    }
    CusOpenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custom_open_routing__WEBPACK_IMPORTED_MODULE_3__["CusOpenRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_11__["FrameworkModule"]
            ],
            declarations: [
                _custom_open_component__WEBPACK_IMPORTED_MODULE_6__["CustomOpen"],
                _corporate_customer_corporate_customer_component__WEBPACK_IMPORTED_MODULE_7__["CorporateCustomer"],
                _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_8__["Administrative"],
                _production_production_component__WEBPACK_IMPORTED_MODULE_9__["Production"],
                _non_production_non_production_component__WEBPACK_IMPORTED_MODULE_10__["NonProduction"],
            ],
            providers: [
                _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]
            ]
        })
    ], CusOpenModule);
    return CusOpenModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.routing.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.routing.ts ***!
  \**************************************************************************************/
/*! exports provided: routes, CusOpenRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusOpenRouting", function() { return CusOpenRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_open_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-open.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/custom-open.component.ts");
/* harmony import */ var _corporate_customer_corporate_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporate-customer/corporate-customer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/corporate-customer/corporate-customer.component.ts");
/* harmony import */ var _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrative/administrative.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/administrative/administrative.component.ts");
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production/production.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.ts");
/* harmony import */ var _non_production_non_production_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non-production/non-production.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.ts");

 //客户开立
 //企业客户
 //行政事业单位用户
 //生产经营性个人客户
 //非生产经营性个人客户
/**
 * 客户开立
 *
 *
 */
var routes = [
    {
        path: '',
        component: _custom_open_component__WEBPACK_IMPORTED_MODULE_1__["CustomOpen"],
        children: [
            { path: '', redirectTo: 'production', component: _production_production_component__WEBPACK_IMPORTED_MODULE_4__["Production"] },
            { path: 'production', component: _production_production_component__WEBPACK_IMPORTED_MODULE_4__["Production"] },
            { path: 'corporate-customer', component: _corporate_customer_corporate_customer_component__WEBPACK_IMPORTED_MODULE_2__["CorporateCustomer"] },
            { path: 'administrative', component: _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_3__["Administrative"] },
            { path: 'nonProduction', component: _non_production_non_production_component__WEBPACK_IMPORTED_MODULE_5__["NonProduction"] },
        ]
    }
];
var CusOpenRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/bean/non-production-open.bean.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/bean/non-production-open.bean.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NonProductionOpenBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonProductionOpenBean", function() { return NonProductionOpenBean; });
var NonProductionOpenBean = /** @class */ (function () {
    function NonProductionOpenBean() {
    }
    return NonProductionOpenBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"id\" class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID01007_P017')\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"header-title\">\r\n\t\t\t<span class=\"line\"></span>\r\n\t\t\t<span class=\"text\">创建非生产经营性个人客户\r\n\t\t\t\t<span class=\"textRed\"> '*'为必填项</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"userform\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"chClientName\" formControlName=\"chClientName\" [(ngModel)]='nonProductionOpenBean.chClientName' type=\"text\" pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['chClientName'].valid&&userform.controls['chClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','chClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户属性：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"clientType\" formControlName=\"clientType\" [options]=\"custAttr\" ng-value=\"请选择\" [(ngModel)]='nonProductionOpenBean.clientType'\r\n\t\t\t\t    disabled='true'></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['clientType'].valid&&userform.controls['clientType'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','clientType')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"globalType\" formControlName=\"globalType\" [options]=\"CERT_TYPE\" ng-value=\"请选择\" [(ngModel)]='nonProductionOpenBean.globalType'\r\n\t\t\t\t    (onChange)='chooseGlobalType()'></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalType'].valid&&userform.controls['globalType'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','globalType')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件截止日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar name=\"closedGlobalDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n\t\t\t\t    formControlName=\"closedGlobalDate\" [minDate]='signDataEnd' [(ngModel)]=\"closedGlobalDate\" [showIcon]=\"true\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('closedGlobalDate')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['closedGlobalDate'].valid&&userform.controls['closedGlobalDate'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','closedGlobalDate')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalId\" formControlName=\"globalId\" type=\"text\" pInputText [(ngModel)]='nonProductionOpenBean.globalId' oncopy=\"return false\"\r\n\t\t\t\t    (blur)=\"isSaneOne()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalId'].valid&&userform.controls['globalId'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>再次输入证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalIdAgain\" formControlName=\"globalIdAgain\" type=\"text\" pInputText [(ngModel)]='globalIdAgain' (blur)=\"isSane()\"\r\n\t\t\t\t    oncopy=\"return false\" onpaste=\"return false\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalIdAgain'].valid&&userform.controls['globalIdAgain'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"show1\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"show2\">输入证件号码不一致！</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>出生年月：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar *ngIf=\"isReadTrue\" name=\"birthDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n\t\t\t\t    formControlName=\"birthDate\" [maxDate]='birthDateEnd' [(ngModel)]=\"birthDate\" [showIcon]=\"true\" (onSelect)=\"showData()\"\r\n\t\t\t\t    [showOtherMonths]=\"false\" dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('birthDate')\"></p-calendar>\r\n\t\t\t\t<p-calendar *ngIf=\"!isReadTrue\" name=\"birthDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n\t\t\t\t    formControlName=\"birthDate\" [maxDate]='birthDateEnd' [(ngModel)]=\"birthDate\" [showIcon]=\"true\" (onSelect)=\"showData()\"\r\n\t\t\t\t    [showOtherMonths]=\"false\" dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" disabled=\"true\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('birthDate')\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>性别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown *ngIf=\"isReadTrue\" name=\"gender\" formControlName=\"gender\" [options]=\"GENDER\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='nonProductionOpenBean.gender'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<p-dropdown *ngIf=\"!isReadTrue\" name=\"gender\" formControlName=\"gender\" [options]=\"GENDER\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='nonProductionOpenBean.gender' disabled=\"true\">\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>手机号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"mobile\" formControlName=\"mobile\" type=\"text\" pInputText [(ngModel)]='nonProductionOpenBean.mobile' (focus)=\"inputPhone()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['mobile'].valid&&userform.controls['mobile'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('checkNumber','mobile')\">请准确输入手机号码。</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('checkNumber','mobile') && userform.controls['mobile'].value.length > 11\">请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"phoneError\" style=\"color:red;\">\r\n\t\t\t\t\t<label>请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>国别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"countryCitizen\" formControlName=\"countryCitizen\" [options]=\"COUNTRY\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='nonProductionOpenBean.countryCitizen'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\" *ngIf=\"ispassport\" >\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>通行证号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"passport\" formControlName=\"passport\" type=\"text\" pInputText [(ngModel)]='nonProductionOpenBean.passport'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['passport'].valid&&userform.controls['passport'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>职业：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"occupationLevelA\" formControlName=\"occupationLevelA\" [options]=\"LevelAOptionsBasic\" [(ngModel)]=\"occupationLevelA\"\r\n\t\t\t\t    (onChange)=\"queryOccupationInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"occupationLevelB\" formControlName=\"occupationLevelB\" [options]=\"LevelBOptionsBasic\" [(ngModel)]=\"occupationLevelB\"\r\n\t\t\t\t    (onChange)=\"queryOccupationInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"occupationLevelC\" formControlName=\"occupationLevelC\" [options]=\"LevelCOptionsBasic\" [(ngModel)]=\"occupationLevelC\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['occupationLevelC'].valid&&userform.controls['occupationLevelC'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>所在行政区划：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"province\" formControlName=\"province\" [options]=\"provinceOptionsBasic\" [(ngModel)]=\"province\" (onChange)=\"queryZoneInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"city\" formControlName=\"city\" [options]=\"cityOptionsBasic\" [(ngModel)]=\"city\" (onChange)=\"queryZoneInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zone\" formControlName=\"zone\" [options]=\"zoneOptionsBasic\" [(ngModel)]=\"zone\" (onChange)=\"queryZoneInfo(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"street\" formControlName=\"street\" [options]=\"streetOptionsBasic\" [(ngModel)]=\"street\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['province'].valid&&userform.controls['province'].dirty && isShowTip\">\r\n\t\t\t\t\t所在行政区划不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>家庭住址：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"provinceLras\" formControlName=\"provinceLras\" [options]=\"provinceOptionsLras\" [(ngModel)]=\"provinceLras\"\r\n\t\t\t\t    (onChange)=\"queryZoneInfoLras(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"cityLras\" formControlName=\"cityLras\" [options]=\"cityOptionsLras\" [(ngModel)]=\"cityLras\" (onChange)=\"queryZoneInfoLras(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zoneLras\" formControlName=\"zoneLras\" [options]=\"zoneOptionsLras\" [(ngModel)]=\"zoneLras\" (onChange)=\"queryZoneInfoLras(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"streetLras\" formControlName=\"streetLras\" [options]=\"streetOptionsLras\" [(ngModel)]=\"streetLras\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['provinceLras'].valid&&userform.controls['provinceLras'].dirty && isShowTip\">\r\n\t\t\t\t\t家庭住址不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>家庭地址(街道)：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10\">\r\n\t\t\t\t<input name=\"detailAddress\" formControlName=\"detailAddress\" class=\"detailAddressCss\" type=\"text\" pInputText [(ngModel)]='nonProductionOpenBean.detailAddress'>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户客户经理：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"userName\" formControlName=\"userName\" [(ngModel)]='userName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['userName'].valid&&userform.controls['userName'].dirty && isShowTip\">\r\n\t\t\t\t\t开户客户经理不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户经理所在机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"orgName\" formControlName=\"orgName\" [(ngModel)]='orgName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty && isShowTip\">\r\n\t\t\t\t\t开户经理所在机构不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>建立日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"createDate\" formControlName=\"createDate\" [(ngModel)]='createDate' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['createDate'].valid&&userform.controls['createDate'].dirty && isShowTip\">\r\n\t\t\t\t\t建立日期不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"save()\" label=\"客户开立\" *ngIf=\"permissionCheck('SID01007_P017_P001')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"tempSave()\" label=\"暂存\" *ngIf=\"permissionCheck('SID01007_P017_P002')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"doEmpty()\" label=\"重置\"></button>\r\n\t</div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 确认发布-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" header=\"提示\" icon=\"fa fa-question-circle\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n  .header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  .header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n  .header-title .textRed {\n    font-size: 15px;\n    color: red; }\n  .text-right {\n  text-align: right;\n  line-height: 28px !important;\n  font-size: 14px; }\n  .text-right span {\n    color: red; }\n  .btn {\n  text-align: center;\n  margin-top: 32px; }\n  input {\n  width: 57% !important;\n  font-size: 14px !important; }\n  .detailAddressCss {\n  width: 83% !important; }\n  @media screen and (max-width: 1280px) {\n  .basic {\n    margin-top: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1vcGVuL25vbi1wcm9kdWN0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW9wZW5cXG5vbi1wcm9kdWN0aW9uXFxub24tcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVIvQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQWRqQztJQWtDUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBMUN6QjtJQTZDUSxlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7RUFIbkI7SUFLUSxVQUFVLEVBQUE7RUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFJeEI7RUFDSSxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW9wZW4vbm9uLXByb2R1Y3Rpb24vbm9uLXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZWFlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIC5saW5lIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgICAgICAtbXMtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRSZWR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcblxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDU3JSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZXRhaWxBZGRyZXNzQ3NzIHtcclxuICAgIHdpZHRoOiA4MyUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLmJhc2ljIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NonProduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonProduction", function() { return NonProduction; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_non_production_open_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/non-production-open.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/bean/non-production-open.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CERT_TYPE_PERSON, OPENGENDER, OPENOccupation, OPENCOUNTRY, CUST_ATTRIBUTES } from '../../../constant/custOperation.codeValue';


var NonProduction = /** @class */ (function () {
    function NonProduction(CusViewHttpService, commfunc, fb, confirmationService) {
        this.CusViewHttpService = CusViewHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.nonProductionOpenBean = new _bean_non_production_open_bean__WEBPACK_IMPORTED_MODULE_2__["NonProductionOpenBean"]();
        this.CALENDAR_CN = [];
        this.custAttr = [];
        this.CERT_TYPE = []; //个人客户证件类型
        this.GENDER = []; //性别
        this.COUNTRY = []; //国别
        this.Occupation = []; //职业
        this.custNo = '';
        this.userName = '';
        this.orgName = '';
        this.createDate = '';
        this.ispassport = false;
        this.show1 = true;
        this.show2 = false;
        this.isSave = true;
        this.isShowTip = true;
        this.isReadTrue = true;
        this.phoneError = false;
        this.tempData = [];
        //校验
        this.ischClientNameError = false;
        this.signDataEnd = new Date(this.getMinMaxDate('min'));
        this.birthDateEnd = new Date(this.getMinMaxDate('max'));
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.custAttr = this.code['CUST_ATTRIBUTES'];
        this.CERT_TYPE = this.code['CERT_TYPE_PERSON']; //个人客户证件类型
        this.GENDER = this.code['OPENGENDER']; //性别
        this.COUNTRY = this.code['OPENCOUNTRY']; //国别
        this.Occupation = this.code['OPENOccupation']; //职业
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.callSession();
        this.CALENDAR_CN = {
            "firstDayOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        };
        this.userform = fb.group({
            'chClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            clientType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            closedGlobalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11),]),
            globalIdAgain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passport: [''],
            birthDate: [''],
            gender: [''],
            detailAddress: [''],
            // occupation: [''],
            countryCitizen: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            orgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            createDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            province: [''],
            city: [''],
            zone: [''],
            street: [''],
            provinceLras: [''],
            cityLras: [''],
            zoneLras: [''],
            streetLras: [''],
            occupationLevelA: [''],
            occupationLevelB: [''],
            occupationLevelC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    NonProduction.prototype.ngOnInit = function () {
        var param = JSON.parse(this.commfunc.getSessionDataCH('nonProductionOpenBean'));
        if (param == undefined || param == null) {
            var anonpro = '';
            this.queryZoneInfo(anonpro);
            var bnonpro = '';
            this.queryZoneInfoLras(bnonpro);
            var cnonpro = '';
            this.queryOccupationInfo(cnonpro);
        }
        this.doInit();
        this.callSession();
    };
    //初始化
    NonProduction.prototype.doInit = function () {
        this.isReadTrue = true;
        this.nonProductionOpenBean.clientType = '1'; //操作类型-默认为1
        this.nonProductionOpenBean.countryCitizen = 'CHN'; //国别-默认为'中国'
        this.createDate = this.transDate(new Date());
    };
    //码值
    NonProduction.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    NonProduction.prototype.callSession = function () {
        //取暂存值
        // let anonpro = '';
        // this.queryZoneInfo(anonpro);
        // let bnonpro = '';
        // this.queryZoneInfoLras(bnonpro);
        // let cnonpro = '';
        // this.queryOccupationInfo(cnonpro);
        var param = JSON.parse(this.commfunc.getSessionDataCH('nonProductionOpenBean'));
        if (param != null) {
            var paramBean = param[0];
            //页面bean元素
            this.nonProductionOpenBean = paramBean.nonProductionOpenBean;
            //出生日期
            if (this.nonProductionOpenBean.birthDate != undefined || this.nonProductionOpenBean.birthDate != '') {
                this.birthDate = this.transDateA(this.nonProductionOpenBean.birthDate);
            }
            //证件截止日期
            if (this.nonProductionOpenBean.closedGlobalDate != undefined || this.nonProductionOpenBean.closedGlobalDate != '') {
                this.closedGlobalDate = this.transDateA(this.nonProductionOpenBean.closedGlobalDate);
            }
            //再次身份证
            if (paramBean.globalIdAgain != undefined || paramBean.globalIdAgain != '') {
                this.globalIdAgain = paramBean.globalIdAgain;
            }
            //家庭住址-省
            if (paramBean.provinceLras != undefined || paramBean.provinceLras != '') {
                this.provinceOptionsLras = paramBean.provinceOptionsLras;
                this.provinceLras = paramBean.provinceLras;
            }
            //家庭住址-市
            if (paramBean.cityLras != undefined || paramBean.cityLras != '') {
                this.cityOptionsLras = paramBean.cityOptionsLras;
                this.cityLras = paramBean.cityLras;
            }
            //家庭住址-区
            if (paramBean.zoneLras != undefined || paramBean.zoneLras != '') {
                this.zoneOptionsLras = paramBean.zoneOptionsLras;
                this.zoneLras = paramBean.zoneLras;
            }
            //家庭住址-街道
            if (paramBean.streetLras != undefined || paramBean.streetLras != '') {
                this.streetOptionsLras = paramBean.streetOptionsLras;
                this.streetLras = paramBean.streetLras;
            }
            //所在行政区划-省
            if (paramBean.province != undefined || paramBean.province != '') {
                this.provinceOptionsBasic = paramBean.provinceOptionsBasic;
                this.province = paramBean.province;
            }
            //所在行政区划-市
            if (paramBean.city != undefined || paramBean.city != '') {
                this.cityOptionsBasic = paramBean.cityOptionsBasic;
                this.city = paramBean.cityPro;
            }
            //所在行政区划-区
            if (paramBean.zone != undefined || paramBean.zone != '') {
                this.zoneOptionsBasic = paramBean.zoneOptionsBasic;
                this.zone = paramBean.zonePro;
            }
            //所在行政区划-街道
            if (paramBean.street != undefined || paramBean.street != '') {
                this.streetOptionsBasic = paramBean.streetOptionsBasic;
                this.street = paramBean.street;
            }
            //职业一级
            if (paramBean.occupationLevelA != undefined || paramBean.occupationLevelA != '') {
                this.LevelAOptionsBasic = paramBean.LevelAOptionsBasic;
                this.occupationLevelA = paramBean.occupationLevelA;
            }
            //职业二级
            if (paramBean.occupationLevelB != undefined || paramBean.occupationLevelB != '') {
                this.LevelBOptionsBasic = paramBean.LevelBOptionsBasic;
                this.occupationLevelB = paramBean.occupationLevelB;
            }
            //职业三级
            if (paramBean.occupationLevelC != undefined || paramBean.occupationLevelC != '') {
                this.LevelCOptionsBasic = paramBean.LevelCOptionsBasic;
                this.occupationLevelC = paramBean.occupationLevelC;
            }
        }
    };
    //获取日期组件的数据
    NonProduction.prototype.showData = function () {
        if (this.birthDate != undefined && this.birthDate != '') {
            this.nonProductionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.nonProductionOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        // this.nonProductionOpenBean.closedGlobalDate = this.commfunc.transDate(this.closedGlobalDate)
        // this.nonProductionOpenBean.birthDate = this.commfunc.transDate(this.birthDate)
    };
    //输入手机号码
    NonProduction.prototype.inputPhone = function () {
        this.phoneError = false;
    };
    //保存按钮
    NonProduction.prototype.save = function () {
        var _this = this;
        if (this.nonProductionOpenBean.globalType == '0') {
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if (!reg.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.nonProductionOpenBean.globalType == '18') {
            var regGangAo = /^((810000\d{12})|(820000\d{12}))$/;
            if (!regGangAo.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.nonProductionOpenBean.globalType == '19') {
            var regTaiWan = /^(830000\d{12})$/;
            if (!regTaiWan.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.birthDate != undefined && this.birthDate != '') {
            this.nonProductionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        // this.nonProductionOpenBean.birthDate = this.commfunc.transDate(this.birthDate)
        this.isShowTip = true;
        //家庭住址
        if (!this.streetLras || this.streetLras == '') {
            if (!this.zoneLras || this.zoneLras == '') {
                if (!this.cityLras || this.cityLras == '') {
                    this.nonProductionOpenBean.homeCode = this.provinceLras;
                }
                else {
                    this.nonProductionOpenBean.homeCode = this.cityLras;
                }
            }
            else {
                this.nonProductionOpenBean.homeCode = this.zoneLras;
            }
        }
        else {
            this.nonProductionOpenBean.homeCode = this.streetLras;
        }
        if (this.passport) {
            this.userform.addControl('passport', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));
        }
        else {
            this.userform.removeControl('passport');
        }
        //所在行政区划
        if (!this.street || this.street == '') {
            if (!this.zone || this.zone == '') {
                if (!this.city || this.city == '') {
                    this.nonProductionOpenBean.regionCode = this.province;
                }
                else {
                    this.nonProductionOpenBean.regionCode = this.city;
                }
            }
            else {
                this.nonProductionOpenBean.regionCode = this.zone;
            }
        }
        else {
            this.nonProductionOpenBean.regionCode = this.street;
        }
        //职业
        if (!this.occupationLevelC || this.occupationLevelC == '') {
            if (!this.occupationLevelB || this.occupationLevelB == '') {
                this.nonProductionOpenBean.occupation = this.occupationLevelA;
            }
            else {
                this.nonProductionOpenBean.occupation = this.occupationLevelB;
            }
        }
        else {
            this.nonProductionOpenBean.occupation = this.occupationLevelC;
        }
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //手机号码
        var re = /^1[3|4|5|7|8][0-9]{9}$/;
        if (this.nonProductionOpenBean.mobile != '' &&
            this.nonProductionOpenBean.mobile != undefined &&
            !re.test(this.nonProductionOpenBean.mobile)) {
            this.phoneError = true;
            return;
        }
        else {
            this.phoneError = false;
        }
        if (this.isSave) {
            this.isSave = false;
            var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.nonProductionOpenBean.custManagerId = ch.userId;
            // 家庭住址
            this.nonProductionOpenBean.homeAddress = '';
            if (this.provinceLras != '' && this.provinceLras != null && this.provinceLras != undefined) {
                this.provinceOptionsLras.forEach(function (element) {
                    if (element.value == _this.provinceLras) {
                        _this.nonProductionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.cityLras != '' && this.cityLras != null && this.cityLras != undefined) {
                this.cityOptionsLras.forEach(function (element) {
                    if (element.value == _this.cityLras) {
                        _this.nonProductionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.zoneLras != '' && this.zoneLras != null && this.zoneLras != undefined) {
                this.zoneOptionsLras.forEach(function (element) {
                    if (element.value == _this.zoneLras) {
                        _this.nonProductionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.streetLras != '' && this.streetLras != null && this.streetLras != undefined) {
                this.streetOptionsLras.forEach(function (element) {
                    if (element.value == _this.streetLras) {
                        _this.nonProductionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.nonProductionOpenBean.detailAddress != '' && this.nonProductionOpenBean.detailAddress != null && this.nonProductionOpenBean.detailAddress != undefined) {
                this.nonProductionOpenBean.homeAddress += this.nonProductionOpenBean.detailAddress;
            }
            this.nonProductionOpenBean.operationType = '1'; //操作类型:默认为1
            this.nonProductionOpenBean.clientFlag = '1'; //客户类型:默认为1
            //提交服务
            this.CusViewHttpService.openPersonCust(this.nonProductionOpenBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.custNo = data.clientNo;
                    _this.doComfirm(_this.custNo);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: '开立成功!客户号为：' + this.custNo });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.isSave = true;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                _this.isSave = true;
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请等待上次执行完成之后，再点击保存！' });
        }
    };
    //点击确定
    NonProduction.prototype.doComfirm = function (param) {
        var _this = this;
        this.confirmationService.confirm({
            message: '开立成功!客户号为：' + param,
            accept: function () {
                _this.isSave = true;
                _this.doEmpty();
            },
        });
    };
    //重置、清空
    NonProduction.prototype.doEmpty = function () {
        this.isSave = true;
        this.isShowTip = false;
        this.nonProductionOpenBean = new _bean_non_production_open_bean__WEBPACK_IMPORTED_MODULE_2__["NonProductionOpenBean"]();
        this.birthDate = '';
        this.closedGlobalDate = '';
        this.globalIdAgain = '';
        this.province = '';
        this.city = '';
        this.zone = '';
        this.street = '';
        this.provinceLras = '';
        this.cityLras = '';
        this.zoneLras = '';
        this.streetLras = '';
        this.occupationLevelA = '';
        this.occupationLevelB = '';
        this.occupationLevelC = '';
        this.commfunc.clearSession('nonProductionOpenBean');
        this.doInit();
        this.doEmptyAddrOccup();
    };
    //暂存按钮事件
    NonProduction.prototype.tempSave = function () {
        if (this.birthDate != undefined && this.birthDate != '') {
            this.nonProductionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.nonProductionOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        // this.nonProductionOpenBean.birthDate = this.commfunc.transDate(this.birthDate)
        this.tempData = [];
        this.tempData.push({
            'nonProductionOpenBean': this.nonProductionOpenBean,
            "closedGlobalDate": this.closedGlobalDate,
            "globalIdAgain": this.globalIdAgain,
            "birthDate": this.birthDate,
            "provinceLras": this.provinceLras,
            "cityLras": this.cityLras,
            "zoneLras": this.zoneLras,
            "streetLras": this.streetLras,
            "province": this.province,
            "cityPro": this.city,
            "zonePro": this.zone,
            "street": this.street,
            "occupationLevelA": this.occupationLevelA,
            "occupationLevelB": this.occupationLevelB,
            "occupationLevelC": this.occupationLevelC,
            "provinceOptionsBasic": this.provinceOptionsBasic,
            "cityOptionsBasic": this.cityOptionsBasic,
            "zoneOptionsBasic": this.zoneOptionsBasic,
            "streetOptionsBasic": this.streetOptionsBasic,
            "provinceOptionsLras": this.provinceOptionsLras,
            "cityOptionsLras": this.cityOptionsLras,
            "zoneOptionsLras": this.zoneOptionsLras,
            "streetOptionsLras": this.streetOptionsLras,
            "LevelAOptionsBasic": this.LevelAOptionsBasic,
            "LevelBOptionsBasic": this.LevelBOptionsBasic,
            "LevelCOptionsBasic": this.LevelCOptionsBasic,
        }),
            this.commfunc.setSessionDataCH('nonProductionOpenBean', JSON.stringify(this.tempData));
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '客户信息已保存！' });
    };
    //选择证件类型
    NonProduction.prototype.chooseGlobalType = function () {
        if (this.nonProductionOpenBean.globalType == '0') {
            this.isReadTrue = false;
        }
        else {
            this.isReadTrue = true;
        }
        if (this.nonProductionOpenBean.globalType == '18' || this.nonProductionOpenBean.globalType == '19') {
            this.ispassport = true;
        }
        else {
            this.ispassport = false;
        }
        if (this.ispassport) {
            this.userform.addControl('passport', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));
        }
        else {
            this.userform.removeControl('passport');
        }
    };
    //修改证件号码-再次校验
    NonProduction.prototype.isSaneOne = function () {
        //选择证件类型-是否为身份证
        if (this.nonProductionOpenBean.globalType == '0') {
            this.isReadTrue = false;
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if (!reg.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.nonProductionOpenBean.globalType == '18') {
            var regGangAo = /^((810000\d{12})|(820000\d{12}))$/;
            if (!regGangAo.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.nonProductionOpenBean.globalType == '19') {
            var regTaiWan = /^(830000\d{12})$/;
            if (!regTaiWan.test(this.nonProductionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.globalIdAgain != undefined) {
            this.isSane();
        }
    };
    //证件输入是否一致校验
    NonProduction.prototype.isSane = function () {
        if (this.nonProductionOpenBean.globalId != this.globalIdAgain) {
            this.globalIdAgain = '';
            this.show1 = false;
            this.show2 = true;
        }
        else {
            this.show1 = false;
            this.show2 = false;
        }
        if (this.nonProductionOpenBean.globalType == '0') {
            var birthC = this.nonProductionOpenBean.globalId;
            var yearC = birthC.substring(6, 10); //年
            var monthC = birthC.substring(10, 12); //月
            var dateC = birthC.substring(12, 14); //日
            var b = yearC + '-' + monthC + '-' + dateC; //年+月+日
            this.birthDate = new Date(b); //出生日期
            var sexC = birthC.substring(16, 17); //性别
            var xx = parseInt(sexC) % 2;
            if (xx == 0) {
                this.nonProductionOpenBean.gender = '2';
            }
            else if (xx == 1) {
                this.nonProductionOpenBean.gender = '1';
            }
        }
    };
    //日期处理
    NonProduction.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "年" + month + "月" + data + "日";
        return newtime;
    };
    //日期转换
    NonProduction.prototype.transDateA = function (value) {
        if (!value) {
            return '';
        }
        var year = value.substring(0, 4);
        var month = value.substring(4, 6);
        var data = value.substring(6, 8);
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //所在行政区划
    NonProduction.prototype.queryZoneInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsBasic.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.city = '';
                    _this.zone = '';
                    _this.street = '';
                }
            });
        }
        else if (data == '1') {
            if (this.province == '') {
                this.cityOptionsBasic = [{ label: '请选择', value: '' }];
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.city = '';
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.province
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.zone = '';
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.city == '') {
                this.zoneOptionsBasic = [{ label: '请选择', value: '' }];
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.zone = '';
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.city
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.street = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zone == '') {
                this.streetOptionsBasic = [{ label: '请选择', value: '' }];
                this.street = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zone
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsBasic = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsBasic.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //登记注册地址
    NonProduction.prototype.queryZoneInfoLras = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsLras.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsLras = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                    _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                    _this.cityLras = '';
                    _this.zoneLras = '';
                    _this.streetLras = '';
                }
            });
        }
        else if (data == '1') {
            if (this.provinceLras == '') {
                this.cityOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.cityLras = '';
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.provinceLras
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.zoneLras = '';
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.cityLras == '') {
                this.zoneOptionsLras = [{ label: '请选择', value: '' }];
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.zoneLras = '';
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.cityLras
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsLras.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsLras = [{ label: '请选择', value: '' }];
                        _this.streetLras = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zoneLras == '') {
                this.streetOptionsLras = [{ label: '请选择', value: '' }];
                this.streetLras = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zoneLras
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsLras = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsLras.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //选择职业
    NonProduction.prototype.queryOccupationInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_occupation = {
                taskTypeKey: 'occupation',
                taskTypeParentId: ''
            };
            //一级职业查询
            this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.LevelAOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                    _this.LevelAOptionsBasic.unshift({ label: '请选择', value: '' });
                    _this.LevelBOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.occupationLevelB = '';
                    _this.occupationLevelC = '';
                }
            });
        }
        else if (data == '1') {
            if (this.occupationLevelA == '') {
                this.LevelBOptionsBasic = [{ label: '请选择', value: '' }];
                this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                this.occupationLevelB = '';
                this.occupationLevelC = '';
            }
            else {
                var param_occupation = {
                    taskTypeKey: 'occupation',
                    taskTypeParentId: this.occupationLevelA,
                };
                //二级职业查询
                this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.LevelBOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.LevelBOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.occupationLevelC = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.occupationLevelB == '') {
                this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                this.occupationLevelC = '';
            }
            else {
                var param_occupation = {
                    taskTypeKey: 'occupation',
                    taskTypeParentId: this.occupationLevelB,
                };
                //三级职业查询
                this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.LevelCOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.LevelCOptionsBasic.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    // 手动输入日期
    NonProduction.prototype.handInputDate = function (param) {
        var _this = this;
        var date = new Date();
        if (param == 'closedGlobalDate') {
            if (this.closedGlobalDate != null && this.closedGlobalDate != '') {
                if (this.commfunc.transDateN(this.closedGlobalDate) < this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '证件截止日期不能小于当前日期' });
                    setTimeout(function () {
                        _this.closedGlobalDate = null;
                    });
                }
            }
        }
        if (param == 'birthDate') {
            if (this.birthDate != null && this.birthDate != '') {
                if (this.commfunc.transDateN(this.birthDate) > this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '出生日期不能大于当前日期' });
                    setTimeout(function () {
                        _this.birthDate = null;
                    });
                }
            }
        }
    };
    // 获取今天最大最小日期
    NonProduction.prototype.getMinMaxDate = function (param) {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var todayTime;
        if (param == 'min') {
            todayTime = year + "/" + month + "/" + data + ' 00:00:00';
        }
        if (param == 'max') {
            todayTime = year + "/" + month + "/" + data + ' 23:59:59';
        }
        return todayTime;
    };
    // 清空职业+所在行政区划+家庭住址
    NonProduction.prototype.doEmptyAddrOccup = function () {
        var ap = '';
        this.queryZoneInfo(ap);
        var bp = '';
        this.queryZoneInfoLras(bp);
        var cp = '';
        this.queryOccupationInfo(cp);
    };
    //按钮权限
    NonProduction.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NonProduction.prototype, "outValue", void 0);
    NonProduction = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-non-production',
            template: __webpack_require__(/*! ./non-production.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.html"),
            styles: [__webpack_require__(/*! ./non-production.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/non-production/non-production.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], NonProduction);
    return NonProduction;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/bean/production-open.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/production/bean/production-open.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProductionOpenBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionOpenBean", function() { return ProductionOpenBean; });
var ProductionOpenBean = /** @class */ (function () {
    function ProductionOpenBean() {
    }
    return ProductionOpenBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID01007_P016')\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"header-title\">\r\n\t\t\t<span class=\"line\"></span>\r\n\t\t\t<span class=\"text\">创建生产经营性个人客户\r\n\t\t\t\t<span class=\"textRed\"> '*'为必填项</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"userform\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"chClientName\" formControlName=\"chClientName\" [(ngModel)]='productionOpenBean.chClientName' type=\"text\" pInputText>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['chClientName'].valid&&userform.controls['chClientName'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','chClientName')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>客户属性：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"clientType\" formControlName=\"clientType\" [options]=\"custAttr\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='productionOpenBean.clientType' disabled='true'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['clientType'].valid&&userform.controls['clientType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"globalType\" formControlName=\"globalType\" [options]=\"CERT_TYPE\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='productionOpenBean.globalType' (onChange)='chooseGlobalType()'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalType'].valid&&userform.controls['globalType'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件截止日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar name=\"closedGlobalDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"closedGlobalDate\"\r\n\t\t\t\t    [minDate]='signDataEnd' [(ngModel)]=\"closedGlobalDate\" [showIcon]=\"true\" (onSelect)=\"showData()\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('closedGlobalDate')\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['closedGlobalDate'].valid&&userform.controls['closedGlobalDate'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('required','closedGlobalDate')\">不能为空</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalId\" formControlName=\"globalId\" type=\"text\" pInputText [(ngModel)]='productionOpenBean.globalId' oncopy=\"return false\"\r\n\t\t\t\t    (blur)=\"isSaneOne()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalId'].valid&&userform.controls['globalId'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>再次输入证件号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"globalIdAgain\" formControlName=\"globalIdAgain\" type=\"text\" pInputText [(ngModel)]='globalIdAgain' (blur)=\"isSane()\"\r\n\t\t\t\t    oncopy=\"return false\" onpaste=\"return false\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['globalIdAgain'].valid&&userform.controls['globalIdAgain'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"show1\">不能为空</label>\r\n\t\t\t\t\t<label *ngIf=\"show2\">输入证件号码不一致！</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>出生年月：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar *ngIf=\"isReadTrue\" name=\"birthDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"birthDate\"\r\n\t\t\t\t    [maxDate]='birthDateEnd' [(ngModel)]=\"birthDate\" [showIcon]=\"true\" (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    [locale]=\"CALENDAR_CN\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('birthDate')\"></p-calendar>\r\n\t\t\t\t<p-calendar *ngIf=\"!isReadTrue\" name=\"birthDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"birthDate\"\r\n\t\t\t\t    [maxDate]='birthDateEnd' [(ngModel)]=\"birthDate\" [showIcon]=\"true\" (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    [locale]=\"CALENDAR_CN\" disabled=\"true\" [style]=\"{'width':'57%'}\" (onBlur)=\"handInputDate('birthDate')\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>性别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown *ngIf=\"isReadTrue\" name=\"gender\" formControlName=\"gender\" [options]=\"GENDER\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='productionOpenBean.gender'></p-dropdown>\r\n\t\t\t\t<p-dropdown *ngIf=\"!isReadTrue\" name=\"gender\" formControlName=\"gender\" [options]=\"GENDER\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='productionOpenBean.gender' disabled=\"true\">\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>手机号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"mobile\" formControlName=\"mobile\" type=\"text\" pInputText [(ngModel)]='productionOpenBean.mobile' (focus)=\"inputPhone()\">\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['mobile'].valid&&userform.controls['mobile'].dirty && isShowTip\">\r\n\t\t\t\t\t<label *ngIf=\"userform.hasError('checkNumber','mobile')\">请准确输入手机号码。</label>\r\n\t\t\t\t\t<label *ngIf=\"!userform.hasError('checkNumber','mobile') && userform.controls['mobile'].value.length > 11\">请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"phoneError\" style=\"color:red;\">\r\n\t\t\t\t\t<label>请准确输入手机号码。</label>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>国别：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4 openDrop\">\r\n\t\t\t\t<p-dropdown name=\"countryCitizen\" formControlName=\"countryCitizen\" [options]=\"COUNTRY\" ng-value=\"请选择\" [style]=\"{'width':'240px','height':'24px'}\"\r\n\t\t\t\t    [(ngModel)]='productionOpenBean.countryCitizen'>\r\n\t\t\t\t</p-dropdown>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\" *ngIf=\"ispassport\" >\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>通行证号码：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"passport\" formControlName=\"passport\" type=\"text\" pInputText [(ngModel)]='productionOpenBean.passport'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['passport'].valid&&userform.controls['passport'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>职业：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"occupationLevelA\" formControlName=\"occupationLevelA\" [options]=\"LevelAOptionsBasic\" [(ngModel)]=\"occupationLevelA\"\r\n\t\t\t\t    (onChange)=\"queryOccupationInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"occupationLevelB\" formControlName=\"occupationLevelB\" [options]=\"LevelBOptionsBasic\" [(ngModel)]=\"occupationLevelB\"\r\n\t\t\t\t    (onChange)=\"queryOccupationInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"occupationLevelC\" formControlName=\"occupationLevelC\" [options]=\"LevelCOptionsBasic\" [(ngModel)]=\"occupationLevelC\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['occupationLevelC'].valid&&userform.controls['occupationLevelC'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>所在行政区划：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"provincePro\" formControlName=\"provincePro\" [options]=\"provinceOptionsBasicPro\" [(ngModel)]=\"provincePro\"\r\n\t\t\t\t    (onChange)=\"queryZoneInfo(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"cityPro\" formControlName=\"cityPro\" [options]=\"cityOptionsBasicPro\" [(ngModel)]=\"cityPro\" (onChange)=\"queryZoneInfo(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zonePro\" formControlName=\"zonePro\" [options]=\"zoneOptionsBasicPro\" [(ngModel)]=\"zonePro\" (onChange)=\"queryZoneInfo(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"streetPro\" formControlName=\"streetPro\" [options]=\"streetOptionsBasicPro\" [(ngModel)]=\"streetPro\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['provincePro'].valid&&userform.controls['provincePro'].dirty && isShowTip\">不能为空</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>家庭住址：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10 licenseRegAddressStreet\">\r\n\t\t\t\t<p-dropdown name=\"provinceLrasPro\" formControlName=\"provinceLrasPro\" [options]=\"provinceOptionsLrasPro\" [(ngModel)]=\"provinceLrasPro\"\r\n\t\t\t\t    (onChange)=\"queryZoneInfoLras(1)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"cityLrasPro\" formControlName=\"cityLrasPro\" [options]=\"cityOptionsLrasPro\" [(ngModel)]=\"cityLrasPro\" (onChange)=\"queryZoneInfoLras(2)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"zoneLrasPro\" formControlName=\"zoneLrasPro\" [options]=\"zoneOptionsLrasPro\" [(ngModel)]=\"zoneLrasPro\" (onChange)=\"queryZoneInfoLras(3)\"></p-dropdown>\r\n\t\t\t\t<p-dropdown name=\"streetLrasPro\" formControlName=\"streetLrasPro\" [options]=\"streetOptionsLrasPro\" [(ngModel)]=\"streetLrasPro\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['provinceLrasPro'].valid&&userform.controls['provinceLrasProPro'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g-12 non-symbol\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>家庭地址(街道)：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-10\">\r\n\t\t\t\t<input name=\"detailAddress\" formControlName=\"detailAddress\" class=\"detailAddressCss\" type=\"text\" pInputText [(ngModel)]='productionOpenBean.detailAddress'>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户客户经理：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"userName\" formControlName=\"userName\" [(ngModel)]='userName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['userName'].valid&&userform.controls['userName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>开户经理所在机构：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"orgName\" formControlName=\"orgName\" [(ngModel)]='orgName' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orgName'].valid&&userform.controls['orgName'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label appValidation>建立日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<input name=\"createDate\" formControlName=\"createDate\" [(ngModel)]='createDate' type=\"text\" pInputText disabled='true'>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['createDate'].valid&&userform.controls['createDate'].dirty && isShowTip\">\r\n\t\t\t\t\t不能为空\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" id=\"disabledBtn\" (click)=\"openSave()\" label=\"客户开立\" *ngIf=\"permissionCheck('SID01007_P016_P001')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"tempSave()\" label=\"暂存\" *ngIf=\"permissionCheck('SID01007_P016_P002')\"></button>\r\n\t\t<button pButton type=\"button\" (click)=\"doEmpty()\" label=\"重置\"></button>\r\n\t</div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 确认发布-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" header=\"提示\" icon=\"fa fa-question-circle\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n  .header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  .header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n  .header-title .textRed {\n    font-size: 15px;\n    color: red; }\n  .text-right {\n  text-align: right;\n  line-height: 28px !important;\n  font-size: 14px; }\n  .text-right span {\n    color: red; }\n  .ui-g-12 .ui-g-6 .bodyl {\n  display: inline-block;\n  width: 200px;\n  padding-right: 5px;\n  text-align: right; }\n  .ui-g-12 .ui-g-6 .bodyl .org {\n    color: #424242; }\n  .btn {\n  text-align: center;\n  margin-top: 32px; }\n  input {\n  width: 57% !important;\n  font-size: 14px !important; }\n  .detailAddressCss {\n  width: 83% !important; }\n  @media screen and (max-width: 1280px) {\n  .basic {\n    margin-top: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1vcGVuL3Byb2R1Y3Rpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tb3BlblxccHJvZHVjdGlvblxccHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTtFQVIvQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQWRqQztJQWtDUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBMUN6QjtJQTZDUSxlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7RUFIbkI7SUFLUSxVQUFVLEVBQUE7RUFHbEI7RUFHWSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQU43QjtJQVFnQixjQUFjLEVBQUE7RUFLOUI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFHeEI7RUFDSSxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW9wZW4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2VhZWMgIWltcG9ydGFudDtcclxuICAgICAgICAvLyAubGluZSB7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgLy8gICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgLW1zLWZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0UmVkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIC5ib2R5bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIC5vcmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogNTclICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbEFkZHJlc3NDc3Mge1xyXG4gICAgd2lkdGg6IDgzJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAuYmFzaWMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: Production */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Production", function() { return Production; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_production_open_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/production-open.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/bean/production-open.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CERT_TYPE_PERSON, OPENGENDER, OPENOccupation, OPENCOUNTRY, CUST_ATTRIBUTES } from '../../../constant/custOperation.codeValue';


var Production = /** @class */ (function () {
    function Production(CusViewHttpService, commfunc, fb, confirmationService) {
        this.CusViewHttpService = CusViewHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.productionOpenBean = new _bean_production_open_bean__WEBPACK_IMPORTED_MODULE_1__["ProductionOpenBean"]();
        this.custAttr = [];
        this.CERT_TYPE = []; //个人客户证件类型
        this.GENDER = []; //性别
        this.COUNTRY = []; //国别
        this.Occupation = []; //职业
        this.CALENDAR_CN = [];
        this.custNo = '';
        this.userName = '';
        this.orgName = '';
        this.createDate = '';
        this.show1 = true;
        this.show2 = false;
        this.isSave = true;
        this.isShowTip = true;
        this.isReadTrue = true;
        this.phoneError = false;
        this.tempData = [];
        this.ispassport = false;
        this.signDataEnd = new Date(this.getMinMaxDate('min'));
        this.birthDateEnd = new Date(this.getMinMaxDate('max'));
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.custAttr = this.code['CUST_ATTRIBUTES'];
        this.CERT_TYPE = this.code['CERT_TYPE_PERSON']; //个人客户证件类型
        this.GENDER = this.code['OPENGENDER']; //性别
        this.COUNTRY = this.code['OPENCOUNTRY']; //国别
        this.Occupation = this.code['OPENOccupation']; //职业
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.callSession();
        this.CALENDAR_CN = {
            "firstDayOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        };
        this.userform = fb.group({
            'chClientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            clientType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            globalIdAgain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            closedGlobalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passport: [''],
            birthDate: [''],
            gender: [''],
            detailAddress: [''],
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11),]),
            // occupation: [''],
            countryCitizen: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            orgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            createDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            provincePro: [''],
            cityPro: [''],
            zonePro: [''],
            streetPro: [''],
            provinceLrasPro: [''],
            cityLrasPro: [''],
            zoneLrasPro: [''],
            streetLrasPro: [''],
            occupationLevelA: [''],
            occupationLevelB: [''],
            occupationLevelC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    Production.prototype.ngOnInit = function () {
        var param = JSON.parse(this.commfunc.getSessionDataCH('productionOpenInfo'));
        if (param == undefined || param == null) {
            var ap = '';
            this.queryZoneInfo(ap);
            var bp = '';
            this.queryZoneInfoLras(bp);
            var cp = '';
            this.queryOccupationInfo(cp);
        }
        this.doInit();
        this.callSession();
    };
    //初始化
    Production.prototype.doInit = function () {
        this.isReadTrue = true;
        this.productionOpenBean.clientType = '2'; //操作类型-默认为2
        this.productionOpenBean.countryCitizen = 'CHN'; //国别-默认为'中国'
        this.createDate = this.transDate(new Date());
    };
    //码值
    Production.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    Production.prototype.callSession = function () {
        //取暂存值
        // let ap = '';
        // this.queryZoneInfo(ap);
        // let bp = '';
        // this.queryZoneInfoLras(bp);
        // let cp = '';
        // this.queryOccupationInfo(cp);
        var param = JSON.parse(this.commfunc.getSessionDataCH('productionOpenInfo'));
        if (param != null) {
            var paramBean = param[0];
            //页面bean元素
            this.productionOpenBean = paramBean.productionOpenBean;
            //出生日期
            if (this.productionOpenBean.birthDate != undefined || this.productionOpenBean.birthDate != '') {
                this.birthDate = this.transDateA(this.productionOpenBean.birthDate);
            }
            //证件截止日期
            if (this.productionOpenBean.closedGlobalDate != undefined || this.productionOpenBean.closedGlobalDate != '') {
                this.closedGlobalDate = this.transDateA(this.productionOpenBean.closedGlobalDate);
            }
            //再次身份证
            if (paramBean.globalIdAgain != undefined || paramBean.globalIdAgain != '') {
                this.globalIdAgain = paramBean.globalIdAgain;
            }
            //家庭住址-省
            if (paramBean.provinceLrasPro != undefined || paramBean.provinceLrasPro != '') {
                this.provinceOptionsLrasPro = paramBean.provinceOptionsLrasPro,
                    this.provinceLrasPro = paramBean.provinceLrasPro;
            }
            //家庭住址-市
            if (paramBean.cityLrasPro != undefined || paramBean.cityLrasPro != '') {
                this.cityOptionsLrasPro = paramBean.cityOptionsLrasPro,
                    this.cityLrasPro = paramBean.cityLrasPro;
            }
            //家庭住址-区
            if (paramBean.zoneLrasPro != undefined || paramBean.zoneLrasPro != '') {
                this.zoneOptionsLrasPro = paramBean.zoneOptionsLrasPro,
                    this.zoneLrasPro = paramBean.zoneLrasPro;
            }
            //家庭住址-街道
            if (paramBean.streetLrasPro != undefined || paramBean.streetLrasPro != '') {
                this.streetOptionsLrasPro = paramBean.streetOptionsLrasPro,
                    this.streetLrasPro = paramBean.streetLrasPro;
            }
            //所在行政区划-省
            if (paramBean.provincePro != undefined || paramBean.provincePro != '') {
                this.provinceOptionsBasicPro = paramBean.provinceOptionsBasicPro;
                this.provincePro = paramBean.provincePro;
            }
            //所在行政区划-市
            if (paramBean.cityPro != undefined || paramBean.cityPro != '') {
                this.cityOptionsBasicPro = paramBean.cityOptionsBasicPro;
                this.cityPro = paramBean.cityPro;
            }
            //所在行政区划-区
            if (paramBean.zonePro != undefined || paramBean.zonePro != '') {
                this.zoneOptionsBasicPro = paramBean.zoneOptionsBasicPro;
                this.zonePro = paramBean.zonePro;
            }
            //所在行政区划-街道
            if (paramBean.streetPro != undefined || paramBean.streetPro != '') {
                this.streetOptionsBasicPro = paramBean.streetOptionsBasicPro;
                this.streetPro = paramBean.streetPro;
            }
            //职业一级
            if (paramBean.occupationLevelA != undefined || paramBean.occupationLevelA != '') {
                this.LevelAOptionsBasic = paramBean.LevelAOptionsBasic;
                this.occupationLevelA = paramBean.occupationLevelA;
            }
            //职业二级
            if (paramBean.occupationLevelB != undefined || paramBean.occupationLevelB != '') {
                this.LevelBOptionsBasic = paramBean.LevelBOptionsBasic;
                this.occupationLevelB = paramBean.occupationLevelB;
            }
            //职业三级
            if (paramBean.occupationLevelC != undefined || paramBean.occupationLevelC != '') {
                this.LevelCOptionsBasic = paramBean.LevelCOptionsBasic;
                this.occupationLevelC = paramBean.occupationLevelC;
            }
        }
    };
    //获取日期组件的数据
    Production.prototype.showData = function () {
        if (this.birthDate != undefined && this.birthDate != '') {
            this.productionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            console.log(this.closedGlobalDate);
            this.productionOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
    };
    //输入手机号码
    Production.prototype.inputPhone = function () {
        this.phoneError = false;
    };
    //保存按钮
    Production.prototype.openSave = function () {
        var _this = this;
        //选择证件类型-是否为身份证
        if (this.productionOpenBean.globalType == '0') {
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if (!reg.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.productionOpenBean.globalType == '18') {
            var regGangAo = /^((810000\d{12})|(820000\d{12}))$/;
            if (!regGangAo.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.productionOpenBean.globalType == '19') {
            var regTaiWan = /^(830000\d{12})$/;
            if (!regTaiWan.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.birthDate != undefined && this.birthDate != '') {
            this.productionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.productionOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        // this.productionOpenBean.birthDate = this.commfunc.transDate(this.birthDate)
        this.isShowTip = true;
        //家庭住址
        if (!this.streetLrasPro || this.streetLrasPro == '') {
            if (!this.zoneLrasPro || this.zoneLrasPro == '') {
                if (!this.cityLrasPro || this.cityLrasPro == '') {
                    this.productionOpenBean.homeCode = this.provinceLrasPro;
                }
                else {
                    this.productionOpenBean.homeCode = this.cityLrasPro;
                }
            }
            else {
                this.productionOpenBean.homeCode = this.zoneLrasPro;
            }
        }
        else {
            this.productionOpenBean.homeCode = this.streetLrasPro;
        }
        //所在行政区划
        if (!this.streetPro || this.streetPro == '') {
            if (!this.zonePro || this.zonePro == '') {
                if (!this.cityPro || this.cityPro == '') {
                    this.productionOpenBean.regionCode = this.provincePro;
                }
                else {
                    this.productionOpenBean.regionCode = this.cityPro;
                }
            }
            else {
                this.productionOpenBean.regionCode = this.zonePro;
            }
        }
        else {
            this.productionOpenBean.regionCode = this.streetPro;
        }
        //职业
        if (!this.occupationLevelC || this.occupationLevelC == '') {
            if (!this.occupationLevelB || this.occupationLevelB == '') {
                this.productionOpenBean.occupation = this.occupationLevelA;
            }
            else {
                this.productionOpenBean.occupation = this.occupationLevelB;
            }
        }
        else {
            this.productionOpenBean.occupation = this.occupationLevelC;
        }
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //联系电话
        var re = /^(1[3|4|5|7|8][0-9]{9})$|^(0\d{2,3}-?\d{7,8}$)$/;
        if (this.productionOpenBean.mobile != '' &&
            this.productionOpenBean.mobile != undefined &&
            !re.test(this.productionOpenBean.mobile)) {
            this.phoneError = true;
            return;
        }
        else {
            this.phoneError = false;
        }
        if (this.isSave) {
            this.isSave = false;
            var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.productionOpenBean.custManagerId = ch.userId;
            if (this.customerCountry != undefined) {
                this.productionOpenBean.countryCitizen = this.customerCountry['name']; //国别名
                this.productionOpenBean.countryShort = this.customerCountry['id']; //国别编号
            }
            // 家庭住址
            this.productionOpenBean.homeAddress = '';
            if (this.provinceLrasPro != '' && this.provinceLrasPro != null && this.provinceLrasPro != undefined) {
                this.provinceOptionsLrasPro.forEach(function (element) {
                    if (element.value == _this.provinceLrasPro) {
                        _this.productionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.cityLrasPro != '' && this.cityLrasPro != null && this.cityLrasPro != undefined) {
                this.cityOptionsLrasPro.forEach(function (element) {
                    if (element.value == _this.cityLrasPro) {
                        _this.productionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.zoneLrasPro != '' && this.zoneLrasPro != null && this.zoneLrasPro != undefined) {
                this.zoneOptionsLrasPro.forEach(function (element) {
                    if (element.value == _this.zoneLrasPro) {
                        _this.productionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.streetLrasPro != '' && this.streetLrasPro != null && this.streetLrasPro != undefined) {
                this.streetOptionsLrasPro.forEach(function (element) {
                    if (element.value == _this.streetLrasPro) {
                        _this.productionOpenBean.homeAddress += element.label;
                    }
                });
            }
            if (this.productionOpenBean.detailAddress != '' && this.productionOpenBean.detailAddress != null && this.productionOpenBean.detailAddress != undefined) {
                this.productionOpenBean.homeAddress += this.productionOpenBean.detailAddress;
            }
            this.productionOpenBean.operationType = '1'; //操作类型:默认为1
            this.productionOpenBean.clientFlag = '1'; //客户类型:默认为1
            this.commfunc.invalidBtn("#disabledBtn");
            this.CusViewHttpService.openPersonCust(this.productionOpenBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.custNo = data.clientNo;
                    _this.doComfirm(_this.custNo);
                    _this.commfunc.validBtn("#disabledBtn");
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: '开立成功!客户号为：' + this.custNo });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.isSave = true;
                    _this.commfunc.validBtn("#disabledBtn");
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                _this.isSave = true;
                _this.commfunc.validBtn("#disabledBtn");
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请等待上次执行完成之后，再点击保存！' });
        }
    };
    //点击确定
    Production.prototype.doComfirm = function (param) {
        var _this = this;
        this.confirmationService.confirm({
            message: '开立成功!客户号为：' + param,
            accept: function () {
                _this.isSave = true;
                _this.doEmpty();
            },
        });
    };
    //暂存按钮事件
    Production.prototype.tempSave = function () {
        if (this.birthDate != undefined && this.birthDate != '') {
            this.productionOpenBean.birthDate = this.commfunc.transDate(new Date(this.birthDate));
        }
        if (this.closedGlobalDate != undefined && this.closedGlobalDate != '') {
            this.productionOpenBean.closedGlobalDate = this.commfunc.transDate(new Date(this.closedGlobalDate));
        }
        this.tempData = [];
        this.tempData.push({
            'productionOpenBean': this.productionOpenBean,
            "closedGlobalDate": this.closedGlobalDate,
            "globalIdAgain": this.globalIdAgain,
            "birthDate": this.birthDate,
            "provinceLrasPro": this.provinceLrasPro,
            "cityLrasPro": this.cityLrasPro,
            "zoneLrasPro": this.zoneLrasPro,
            "streetLrasPro": this.streetLrasPro,
            "provinceOptionsLrasPro": this.provinceOptionsLrasPro,
            "cityOptionsLrasPro": this.cityOptionsLrasPro,
            "zoneOptionsLrasPro": this.zoneOptionsLrasPro,
            "streetOptionsLrasPro": this.streetOptionsLrasPro,
            "provinceOptionsBasicPro": this.provinceOptionsBasicPro,
            "cityOptionsBasicPro": this.cityOptionsBasicPro,
            "zoneOptionsBasicPro": this.zoneOptionsBasicPro,
            "streetOptionsBasicPro": this.streetOptionsBasicPro,
            "provincePro": this.provincePro,
            "cityPro": this.cityPro,
            "zonePro": this.zonePro,
            "streetPro": this.streetPro,
            "occupationLevelA": this.occupationLevelA,
            "occupationLevelB": this.occupationLevelB,
            "occupationLevelC": this.occupationLevelC,
            "LevelAOptionsBasic": this.LevelAOptionsBasic,
            "LevelBOptionsBasic": this.LevelBOptionsBasic,
            "LevelCOptionsBasic": this.LevelCOptionsBasic,
        }),
            this.commfunc.setSessionDataCH('productionOpenInfo', JSON.stringify(this.tempData));
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '客户信息已保存！' });
    };
    //重置、清空
    Production.prototype.doEmpty = function () {
        this.isSave = true;
        this.isShowTip = false;
        this.productionOpenBean = new _bean_production_open_bean__WEBPACK_IMPORTED_MODULE_1__["ProductionOpenBean"]();
        this.birthDate = '';
        this.closedGlobalDate = '';
        this.globalIdAgain = '';
        this.provincePro = '';
        this.cityPro = '';
        this.zonePro = '';
        this.streetPro = '';
        this.provinceLrasPro = '';
        this.cityLrasPro = '';
        this.zoneLrasPro = '';
        this.streetLrasPro = '';
        this.occupationLevelA = '';
        this.occupationLevelB = '';
        this.occupationLevelC = '';
        this.commfunc.clearSession('productionOpenInfo');
        this.doInit();
        this.doEmptyAddrOccup();
    };
    //选择证件类型
    Production.prototype.chooseGlobalType = function () {
        if (this.productionOpenBean.globalType == '0') {
            this.isReadTrue = false;
        }
        else {
            this.isReadTrue = true;
        }
        if (this.productionOpenBean.globalType == '18' || this.productionOpenBean.globalType == '19') {
            this.ispassport = true;
        }
        else {
            this.ispassport = false;
        }
        if (this.ispassport) {
            this.userform.addControl('passport', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));
        }
        else {
            this.userform.removeControl('passport');
        }
    };
    //修改证件号码-再次校验
    Production.prototype.isSaneOne = function () {
        //选择证件类型-是否为身份证
        if (this.productionOpenBean.globalType == '0') {
            this.isReadTrue = false;
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if (!reg.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.productionOpenBean.globalType == '18') {
            var regGangAo = /^((810000\d{12})|(820000\d{12}))$/;
            if (!regGangAo.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.productionOpenBean.globalType == '19') {
            var regTaiWan = /^(830000\d{12})$/;
            if (!regTaiWan.test(this.productionOpenBean.globalId)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '证件号输入有误！' });
                return;
            }
        }
        if (this.globalIdAgain != undefined) {
            this.isSane();
        }
    };
    //证件输入是否一致校验
    Production.prototype.isSane = function () {
        if (this.productionOpenBean.globalId != this.globalIdAgain) {
            this.globalIdAgain = '';
            this.show1 = false;
            this.show2 = true;
        }
        else {
            this.show1 = false;
            this.show2 = false;
        }
        if (this.productionOpenBean.globalType == '0') {
            var birthC = this.productionOpenBean.globalId;
            var yearC = birthC.substring(6, 10); //年
            var monthC = birthC.substring(10, 12); //月
            var dateC = birthC.substring(12, 14); //日
            var b = yearC + '-' + monthC + '-' + dateC; //年+月+日
            this.birthDate = new Date(b); //出生日期
            var sexC = birthC.substring(16, 17); //性别
            var xx = parseInt(sexC) % 2;
            if (xx == 0) {
                this.productionOpenBean.gender = '2';
            }
            else if (xx == 1) {
                this.productionOpenBean.gender = '1';
            }
        }
    };
    //日期处理
    Production.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "年" + month + "月" + data + "日";
        return newtime;
    };
    //日期转换
    Production.prototype.transDateA = function (value) {
        if (!value) {
            return '';
        }
        var year = value.substring(0, 4);
        var month = value.substring(4, 6);
        var data = value.substring(6, 8);
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //所在行政区划
    Production.prototype.queryZoneInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsBasicPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsBasicPro.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsBasicPro = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsBasicPro = [{ label: '请选择', value: '' }];
                    _this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                    _this.cityPro = '';
                    _this.zonePro = '';
                    _this.streetPro = '';
                }
            });
        }
        else if (data == '1') {
            if (this.provincePro == '') {
                this.cityOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.zoneOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.cityPro = '';
                this.zonePro = '';
                this.streetPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.provincePro
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsBasicPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsBasicPro.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsBasicPro = [{ label: '请选择', value: '' }];
                        _this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                        _this.zonePro = '';
                        _this.streetPro = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.cityPro == '') {
                this.zoneOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.zonePro = '';
                this.streetPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.cityPro
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsBasicPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsBasicPro.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                        _this.streetPro = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zonePro == '') {
                this.streetOptionsBasicPro = [{ label: '请选择', value: '' }];
                this.streetPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zonePro
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsBasicPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsBasicPro.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //家庭地址
    Production.prototype.queryZoneInfoLras = function (data) {
        var _this = this;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.provinceOptionsLrasPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.provinceOptionsLrasPro.unshift({ label: '请选择', value: '' });
                    _this.cityOptionsLrasPro = [{ label: '请选择', value: '' }];
                    _this.zoneOptionsLrasPro = [{ label: '请选择', value: '' }];
                    _this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                    _this.cityLrasPro = '';
                    _this.zoneLrasPro = '';
                    _this.streetLrasPro = '';
                }
            });
        }
        else if (data == '1') {
            if (this.provinceLrasPro == '') {
                this.cityOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.zoneOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.cityLrasPro = '';
                this.zoneLrasPro = '';
                this.streetLrasPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.provinceLrasPro
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.cityOptionsLrasPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.cityOptionsLrasPro.unshift({ label: '请选择', value: '' });
                        _this.zoneOptionsLrasPro = [{ label: '请选择', value: '' }];
                        _this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                        _this.zoneLrasPro = '';
                        _this.streetLrasPro = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.cityLrasPro == '') {
                this.zoneOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.zoneLrasPro = '';
                this.streetLrasPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.cityLrasPro
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.zoneOptionsLrasPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.zoneOptionsLrasPro.unshift({ label: '请选择', value: '' });
                        _this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                        _this.streetLrasPro = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.zoneLrasPro == '') {
                this.streetOptionsLrasPro = [{ label: '请选择', value: '' }];
                this.streetLrasPro = '';
            }
            else {
                var param_zone = {
                    parentZoneId: this.zoneLrasPro
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.streetOptionsLrasPro = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.streetOptionsLrasPro.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    //选择职业
    Production.prototype.queryOccupationInfo = function (data) {
        var _this = this;
        if (data == '') {
            var param_occupation = {
                taskTypeKey: 'occupation',
                taskTypeParentId: ''
            };
            //一级职业查询
            this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.LevelAOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                    _this.LevelAOptionsBasic.unshift({ label: '请选择', value: '' });
                    _this.LevelBOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                    _this.occupationLevelB = '';
                    _this.occupationLevelC = '';
                }
            });
        }
        else if (data == '1') {
            if (this.occupationLevelA == '') {
                this.LevelBOptionsBasic = [{ label: '请选择', value: '' }];
                this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                this.occupationLevelB = '';
                this.occupationLevelC = '';
            }
            else {
                var param_occupation = {
                    taskTypeKey: 'occupation',
                    taskTypeParentId: this.occupationLevelA,
                };
                //二级职业查询
                this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.LevelBOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.LevelBOptionsBasic.unshift({ label: '请选择', value: '' });
                        _this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                        _this.occupationLevelC = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.occupationLevelB == '') {
                this.LevelCOptionsBasic = [{ label: '请选择', value: '' }];
                this.occupationLevelC = '';
            }
            else {
                var param_occupation = {
                    taskTypeKey: 'occupation',
                    taskTypeParentId: this.occupationLevelB,
                };
                //三级职业查询
                this.CusViewHttpService.taskTypeQry(param_occupation).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.LevelCOptionsBasic = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.LevelCOptionsBasic.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    // 手动输入日期
    Production.prototype.handInputDate = function (param) {
        var _this = this;
        var date = new Date();
        if (param == 'closedGlobalDate') {
            if (this.closedGlobalDate != null && this.closedGlobalDate != '') {
                if (this.commfunc.transDateN(this.closedGlobalDate) < this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '证件截止日期不能小于当前日期' });
                    setTimeout(function () {
                        _this.closedGlobalDate = null;
                    });
                }
            }
        }
        if (param == 'birthDate') {
            if (this.birthDate != null && this.birthDate != '') {
                if (this.commfunc.transDateN(this.birthDate) > this.commfunc.transDateN(date)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '出生日期不能大于当前日期' });
                    setTimeout(function () {
                        _this.birthDate = null;
                    });
                }
            }
        }
    };
    // 获取今天最大最小日期
    Production.prototype.getMinMaxDate = function (param) {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var todayTime;
        if (param == 'min') {
            todayTime = year + "/" + month + "/" + data + ' 00:00:00';
        }
        if (param == 'max') {
            todayTime = year + "/" + month + "/" + data + ' 23:59:59';
        }
        return todayTime;
    };
    // 清空职业+所在行政区划+家庭住址
    Production.prototype.doEmptyAddrOccup = function () {
        var ap = '';
        this.queryZoneInfo(ap);
        var bp = '';
        this.queryZoneInfoLras(bp);
        var cp = '';
        this.queryOccupationInfo(cp);
    };
    //按钮权限
    Production.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Production.prototype, "outValue", void 0);
    Production = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-production',
            template: __webpack_require__(/*! ./production.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.html"),
            styles: [__webpack_require__(/*! ./production.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-open/production/production.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], Production);
    return Production;
}());



/***/ })

}]);
//# sourceMappingURL=custom-open-custom-open-module.js.map