(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-product-component-credit-product-component-module"],{

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/bean/component-config.bean.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/bean/component-config.bean.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ComponentConfigBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigBean", function() { return ComponentConfigBean; });
var ComponentConfigBean = /** @class */ (function () {
    function ComponentConfigBean() {
    }
    return ComponentConfigBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/bean/config-add.bean.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/bean/config-add.bean.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ComponentConfigADDBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigADDBean", function() { return ComponentConfigADDBean; });
var ComponentConfigADDBean = /** @class */ (function () {
    function ComponentConfigADDBean() {
        this.productFeatureTypeLocalCode = ""; //			属性本地编码	String
    }
    return ComponentConfigADDBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <form [formGroup]=\"userform\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性名称 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"caddBean.description\" pInputText style=\"width:60%\">\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n            <span [hidden]=\"!userform.hasError('pattern','description')\">属性名称输入不合法！</span>\r\n            <span [hidden]=\"!userform.hasError('required','description')\"> 请填写属性名称！</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性类型 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <p-dropdown name=\"attribute_type\" formControlName=\"attribute_type\" [options]=\"featureType\" (onChange)=\"choseVlue1()\" [(ngModel)]=\"attribute_type\"></p-dropdown>\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['attribute_type'].valid&&userform.controls['attribute_type'].dirty\">\r\n            请选择属性类型！\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性编码 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input type=\"text\" name=\"productFeatureTypeId\" formControlName=\"productFeatureTypeId\" [(ngModel)]=\"caddBean.productFeatureTypeId\"\r\n            pInputText style=\"width:60%\">\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeId'].valid&&userform.controls['productFeatureTypeId'].dirty\">\r\n            <span [hidden]=\"!userform.hasError('pattern','productFeatureTypeId')\">属性编码输入不合法！</span>\r\n            <span [hidden]=\"!userform.hasError('required','productFeatureTypeId')\"> 请填写属性编码！</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label> 属性描述 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n          <textarea name=\"shuxingmiano\" formControlName=\"shuxingmiano\" [(ngModel)]=\"shuxingmiano\" pInputTextarea style=\"width:85%\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- 属性类型-添值型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='02'\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <form [formGroup]=\"userformL\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>取值类型</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-dropdown name=\"value_type\" formControlName=\"value_type\" [options]=\"valueType\" (onChange)=\"choseVlue12()\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformL.controls['value_type'].valid&&userformL.controls['value_type'].dirty\">\r\n          请选择取值类型！\r\n        </span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-数值型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='02'\">\r\n    <div class=\"ui-g\">\r\n      <form [formGroup]=\"userform02\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label>步长</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input name=\"inc\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n          <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['inc'].valid&&userform02.controls['inc'].dirty\">\r\n            <span [hidden]=\"!userform02.hasError('pattern','inc')\"> 步长输入不合法！</span>\r\n            <span *ngIf=\"userform02.controls['inc'].value.length>20\">步长不能超过20字符!</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation>最小值</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n          <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['min'].valid&&userform02.controls['min'].dirty\">\r\n            <span [hidden]=\"!userform02.hasError('required','min')\">最小值不能为空！</span>\r\n            <span [hidden]=\"!userform02.hasError('pattern','min')\"> 最小值输入不合法！</span>\r\n            <span *ngIf=\"userform02.controls['min'].value.length>20\">最小值不能超过20字符!</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation>最大值</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n          <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['max'].valid&&userform02.controls['max'].dirty\">\r\n            <span [hidden]=\"!userform02.hasError('required','max')\">最大值不能为空！</span>\r\n            <span [hidden]=\"!userform02.hasError('pattern','max')\"> 最大值输入不合法！</span>\r\n            <span *ngIf=\"userform02.controls['max'].value.length>20\">最大值不能超过20字符!</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label>默认值</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n          <!-- <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['def'].valid&&userform02.controls['def'].dirty\">\r\n            <span [hidden]=\"!userform02.hasError('pattern','def')\"> 默认值输入不合法！</span>\r\n            <span *ngIf=\"userform02.controls['def'].value.length>20\">默认值不能超过20字符!</span>\r\n          </span> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- 属性值类型-金额型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='03'\">\r\n    <form [formGroup]=\"userform03\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>步长</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"inc\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n        <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['inc'].valid&&userform03.controls['inc'].dirty\">\r\n          <span [hidden]=\"!userform03.hasError('pattern','inc')\"> 默认值输入不合法！</span>\r\n          <span *ngIf=\"userform03.controls['inc'].value.length>20\">默认值不能超过20字符!</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n        <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['min'].valid&&userform03.controls['min'].dirty\">\r\n          <span [hidden]=\"!userform03.hasError('required','min')\">最小值不能为空！</span>\r\n          <span [hidden]=\"!userform03.hasError('pattern','min')\"> 最小值输入不合法！</span>\r\n          <span *ngIf=\"userform03.controls['min'].value.length>20\">最小值不能超过20字符!</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n        <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['max'].valid&&userform03.controls['max'].dirty\">\r\n          <span [hidden]=\"!userform03.hasError('required','max')\">最大值不能为空！</span>\r\n          <span [hidden]=\"!userform03.hasError('pattern','max')\"> 最大值输入不合法！</span>\r\n          <span *ngIf=\"userform03.controls['max'].value.length>20\">默认值不能超过20字符!</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n        <!-- <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['def'].valid&&userform03.controls['def'].dirty\">\r\n          <span [hidden]=\"!userform03.hasError('pattern','def')\"> 默认值输入不合法！</span>\r\n          <span *ngIf=\"userform03.controls['def'].value.length>20\">默认值不能超过20字符!</span>\r\n        </span> -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-日期型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='04'\">\r\n    <form [formGroup]=\"userform04\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar (onSelect)=\"refresh()\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\" [(ngModel)]=\"transferedDateFrom\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n          请选择正确日期！\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar *ngIf=\"showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\" [(ngModel)]=\"transferedDateTo\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <p-calendar *ngIf=\"!showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\" [(ngModel)]=\"transferedDateTo\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n          请选择正确日期！\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar name=\"transferedDateDef\" formControlName=\"transferedDateDef\" [(ngModel)]=\"transferedDateDef\" [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\"\r\n          dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-文本型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='05'\">\r\n    <form [formGroup]=\"userform05\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-数值后确定型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='06'\">\r\n    <form [formGroup]=\"userform06\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n        <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform06.controls['min'].valid&&userform06.controls['min'].dirty\">\r\n          <span [hidden]=\"!userform06.hasError('required','min')\">最小值不能为空！</span>\r\n          <span [hidden]=\"!userform06.hasError('pattern','min')\"> 最小值输入不合法！</span>\r\n          <span *ngIf=\"userform06.controls['min'].value.length>20\">最小值不能超过20字符!</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n        <span class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform06.controls['max'].valid&&userform06.controls['max'].dirty\">\r\n          <span [hidden]=\"!userform06.hasError('required','max')\">最大值不能为空！</span>\r\n          <span [hidden]=\"!userform06.hasError('pattern','max')\"> 最大值输入不合法！</span>\r\n          <span *ngIf=\"userform06.controls['max'].value.length>20\">最大值不能超过20字符!</span>\r\n        </span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- 属性类型-列表型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='01'\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label appValidation>取值类型</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n      <p-dropdown [options]=\"valueType_List\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items;let i = index\">\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label>选项值</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-8\">\r\n      <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"item.productFeatureLocalCode\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label>选项值描述</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-6\">\r\n      <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"item.description\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-2\">\r\n      <button pButton type=\"button\" (click)=\"detelBtn(i)\" label=\"-\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 text_right\">\r\n      <button pButton type=\"button\" (click)=\"addBtn()\" label=\"+\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <button pButton type=\"button\" (click)=\"seveClick()\" label=\"确定\"></button>\r\n    <button pButton type=\"button\" (click)=\"goBack()\" label=\"取消\"></button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n:host/deep/ input[pInputText] {\n  width: 60%; }\n\n:host/deep/ .ui-dropdown {\n  width: 60% !important; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50XFxjb21wb25lbnQtY29uZmlnXFxjb21wb25lbnQtY29uZmlnLWFkZFxcY29tcG9uZW50LWNvbmZpZy1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0kscUJBQW9CLEVBQUE7O0FBRXhCO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLGFBQ0osRUFBQTtFQUNBO0lBQ0ksY0FDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFdBQ0osRUFBQSxFQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctYWRkL2NvbXBvbmVudC1jb25maWctYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG4vL+mAieaLqeW5tOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi8v6YCJ5oup5pyI5Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi8v5riF56m644CB5LuK5aSp5Lik5Liq5oyJ6ZKu55qE5a2X5L2T6aKc6ImyXHJcbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0L2RlZXAvIGlucHV0W3BJbnB1dFRleHRde1xyXG4gICAgd2lkdGg6NjAlO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOjYwJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ComponentConfigAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigAddComponent", function() { return ComponentConfigAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/config-add.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/bean/config-add.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComponentConfigAddComponent = /** @class */ (function () {
    function ComponentConfigAddComponent(creditCcmService, fb, commfunc) {
        this.creditCcmService = creditCcmService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caddBean = new _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigADDBean"]();
        this.specialSymbol = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["specialSymbol"];
        //时间刷新变量
        this.showFlag = true;
        this.shuxingmiano = "";
        this.items = [{
                description: '',
                productFeatureLocalCode: ''
            }];
        //提示信息
        this.msgs = [];
        this.productFeatureLocalCode = ''; //添值型本地编码
        this.itemvlaue12 = []; //传值空数组转
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //讲英文转化为中文
        this.transferedDateFrom = new Date();
        this.transferedDateTo = new Date();
        this.transferedDateDef = new Date();
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.transferedDateDef = null;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            attribute_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shuxingmiano: [''],
            'productFeatureTypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^PCA\d{7}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.userformL = fb.group({
            value_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.userform02 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // 'def': new FormControl('', [Validators.pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), Validators.maxLength(20)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.userform03 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // 'def': new FormControl('', [Validators.pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), Validators.maxLength(20)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.userform04 = fb.group({
            transferedDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transferedDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transferedDateDef: [''],
        });
        this.userform05 = fb.group({
            // 'def': new FormControl('', [Validators.required, Validators.maxLength(20), specialSymbol]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.userform06 = fb.group({
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
        this.valueType = this.code['ValueType'];
    }
    ComponentConfigAddComponent.prototype.ngOnInit = function () {
    };
    //码值
    ComponentConfigAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //时间刷新
    ComponentConfigAddComponent.prototype.refresh = function () {
        this.transferedDateTo = null;
        this.showFlag = !this.showFlag;
    };
    ComponentConfigAddComponent.prototype.addBtn = function () {
        this.items.push({
            description: '',
            productFeatureLocalCode: ''
        });
    };
    ComponentConfigAddComponent.prototype.detelBtn = function (i) {
        this.items.splice(i, 1);
    };
    ComponentConfigAddComponent.prototype.choseVlue1 = function () {
        this.vlaue1 = this.attribute_type;
        if (this.vlaue1 == '01') {
            this.valueType_List = [
                { label: '列表型', value: '01' },
            ];
        }
    };
    ComponentConfigAddComponent.prototype.choseVlue12 = function () {
        this.vlaue2 = this.value_type;
        this.inc = '';
        this.min = '';
        this.max = '';
        this.def = '';
    };
    ComponentConfigAddComponent.prototype.seveClick = function () {
        var _this = this;
        // 验证
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        if (this.vlaue1 == '01') {
            this.itemvlaue12 = [];
            if (this.items.length === 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值至少为一条' });
                return;
            }
            this.items.forEach(function (item) {
                _this.itemvlaue12.push(item);
            });
            this.caddBean.prdcFeaList = this.itemvlaue12;
            this.caddBean.valueType = "01";
        }
        if (this.vlaue1 == '02') {
            // 验证
            for (var i in this.userformL.controls) {
                this.userformL.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userformL.controls) {
                if (!this.userformL.controls[i].valid) {
                    return;
                }
            }
            if (this.vlaue2 == '02') {
                for (var i in this.userform02.controls) {
                    this.userform02.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform02.controls) {
                    if (!this.userform02.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    inc: this.inc,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '03') {
                for (var i in this.userform03.controls) {
                    this.userform03.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform03.controls) {
                    if (!this.userform03.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    inc: this.inc,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '04') {
                for (var i in this.userform04.controls) {
                    this.userform04.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform04.controls) {
                    if (!this.userform04.controls[i].valid) {
                        return;
                    }
                }
                this.min = this.transDateNW(this.transferedDateFrom);
                this.max = this.transDateNW(this.transferedDateTo);
                this.def = this.transDateNW(this.transferedDateDef);
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '05') {
                for (var i in this.userform05.controls) {
                    this.userform05.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform05.controls) {
                    if (!this.userform05.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    def: this.def,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '06') {
                for (var i in this.userform06.controls) {
                    this.userform06.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform06.controls) {
                    if (!this.userform06.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            this.caddBean.valueType = this.value_type;
        }
        this.caddBean.productFeatureCategoryId = this.inValue;
        this.caddBean.featureType = this.attribute_type;
        this.caddBean.productFeatureTypeLocalCode = this.shuxingmiano;
        var redo_name = {
            name: this.caddBean.description,
            type: 'PRODUCT_FEATURE_TYPE'
        };
        this.creditCcmService.queryNameIsNotExist(redo_name).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.isOrNot == "is") {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "产品属性名称重复" });
                }
                else if (data.isOrNot == "not") {
                    //提交服务
                    _this.creditCcmService.prdcFeaAndFeaTypeAdd(_this.caddBean).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.caddBean = new _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigADDBean"]();
                            _this.shuxingmiano = "";
                            _this.items = [{
                                    description: '',
                                    productFeatureLocalCode: ''
                                }];
                            _this.productFeatureLocalCode = '';
                            _this.min = '';
                            _this.max = '';
                            _this.def = '';
                            _this.inc = '';
                            _this.transferedDateFrom = null;
                            _this.transferedDateTo = null;
                            _this.transferedDateDef = null;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            var parm = {
                                display: false,
                                code: data.returnCode.message
                            };
                            _this.outValue.emit(parm);
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
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
        });
    };
    ComponentConfigAddComponent.prototype.goBack = function () {
        var parm = {
            display: false,
            code: 'cancelModel'
        };
        this.outValue.emit(parm);
    };
    ComponentConfigAddComponent.prototype.transDateNW = function (value) {
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
        var newtime = year + month + data;
        return newtime;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentConfigAddComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComponentConfigAddComponent.prototype, "outValue", void 0);
    ComponentConfigAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-component-config-add',
            template: __webpack_require__(/*! ./component-config-add.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.html"),
            styles: [__webpack_require__(/*! ./component-config-add.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 属性新增
         */
        ,
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__["CreditCcmService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ComponentConfigAddComponent);
    return ComponentConfigAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/bean/component-details.bean.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/bean/component-details.bean.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ComponentConfigDetailsBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigDetailsBean", function() { return ComponentConfigDetailsBean; });
var ComponentConfigDetailsBean = /** @class */ (function () {
    function ComponentConfigDetailsBean() {
        this.productFeatureTypeLocalCode = ""; //			属性本地编码	String
    }
    return ComponentConfigDetailsBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>属性编号:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{list.productFeatureTypeId}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>属性名称:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{list.description}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>属性类型:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{list.featureType|codeValuePie:featureType}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>属性描述:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n            <label>{{list.productFeatureTypeDes}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>取值类型:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10  ui-mp-8\">\r\n            <label>{{valueTypeValue|codeValuePie:valueTypeAll}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='01'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero\">\r\n            <div class=\"ui-g padding_zero\"  *ngFor=\"let item of items;let i = index\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>选项值:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{item.productFeatureLocalCode}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>选项值描述:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{item.description}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='02'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>步长:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{inc}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最小值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{min}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最大值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{max}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>默认值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{def}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='03'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>步长:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{inc}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最小值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{min}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最大值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{max}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>默认值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{def}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='04'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最小值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{min}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最大值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{max}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>默认值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{def}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='05'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>默认值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{def}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='06'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最小值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{min}}</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <label>最大值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <label>{{max}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button pButton type=\"button\" (click)=\"goBack()\" label=\"关闭\"></button>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .padding_zero {\n  padding: 0;\n  margin: 0; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbXBvbmVudFxcY29tcG9uZW50LWNvbmZpZ1xcY29tcG9uZW50LWNvbmZpZy1kZXRhaWxzXFxjb21wb25lbnQtY29uZmlnLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUlqQjtFQUNJLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NyZWRpdC1jY20vY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50L2NvbXBvbmVudC1jb25maWcvY29tcG9uZW50LWNvbmZpZy1kZXRhaWxzL2NvbXBvbmVudC1jb25maWctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAudGV4dF9jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZ196ZXJve1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: ComponentConfigDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigDetailsComponent", function() { return ComponentConfigDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_component_details_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/component-details.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/bean/component-details.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentConfigDetailsComponent = /** @class */ (function () {
    function ComponentConfigDetailsComponent(creditCcmService, commfunc) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caddBean = new _bean_component_details_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigDetailsBean"]();
        this.shuxingmiano = "";
        this.valueTypeAll = [];
        //提示信息
        this.msgs = [];
        this.productFeatureLocalCode = '';
        this.min = '';
        this.def = '';
        this.inc = '';
        this.max = '';
        this.productFeatureId = '';
        this.itemvlaue12 = []; //传值空数组转
        this.list = {}; //获取数据
        this.valueTypeValue = '';
        this.items = [{
                description: '',
                productFeatureLocalCode: ''
            }];
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
        this.valueType = this.code['ValueType'];
        this.valueTypeAll = this.code['ValueTypeAll'];
    }
    ComponentConfigDetailsComponent.prototype.ngOnInit = function () {
    };
    ComponentConfigDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var pram = { productFeatureTypeId: this.inValue };
        this.creditCcmService.productFeatureTypeDetail(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = data.result;
                _this.valueTypeValue = data.result.productFeatures[0].valueType;
                if (_this.valueTypeValue === "01") {
                    _this.items = data.result.productFeatures;
                }
                if (_this.valueTypeValue != "01") {
                    _this.inc = data.result.productFeatures[0].inc;
                    _this.min = data.result.productFeatures[0].min;
                    _this.max = data.result.productFeatures[0].max;
                    _this.def = data.result.productFeatures[0].def;
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
    };
    //码值
    ComponentConfigDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ComponentConfigDetailsComponent.prototype.goBack = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentConfigDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComponentConfigDetailsComponent.prototype, "outValue", void 0);
    ComponentConfigDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-component-config-details',
            template: __webpack_require__(/*! ./component-config-details.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.html"),
            styles: [__webpack_require__(/*! ./component-config-details.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], ComponentConfigDetailsComponent);
    return ComponentConfigDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/bean/component-modify.bean.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/bean/component-modify.bean.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ComponentConfigADDBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigADDBean", function() { return ComponentConfigADDBean; });
var ComponentConfigADDBean = /** @class */ (function () {
    function ComponentConfigADDBean() {
        this.productFeatureTypeLocalCode = ""; //			属性本地编码	String
    }
    return ComponentConfigADDBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <form [formGroup]=\"userform\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性名称 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"caddBean.description\" pInputText style=\"width:60%\">\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n          <span [hidden]=\"!userform.hasError('pattern','description')\">属性名称输入不合法！</span>\r\n          <span [hidden]=\"!userform.hasError('required','description')\"> 请填写属性名称！</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性类型 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <p-dropdown name=\"attribute_type\" formControlName=\"attribute_type\" [options]=\"featureType\" (onChange)=\"choseVlue1()\" [(ngModel)]=\"attribute_type\"></p-dropdown>\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['attribute_type'].valid&&userform.controls['attribute_type'].dirty\">\r\n            请选择属性类型！\r\n      </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label appValidation> 属性编码 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n          <label>{{caddBean.productFeatureTypeId}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n          <label> 属性描述 </label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n          <textarea name=\"shuxingmiano\" formControlName=\"shuxingmiano\" [(ngModel)]=\"shuxingmiano\" pInputTextarea style=\"width:85%\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- 属性类型-添值型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='02'\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <form [formGroup]=\"userformL\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>取值类型</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-dropdown name=\"value_type\" formControlName=\"value_type\" [options]=\"valueType\" (onChange)=\"choseVlue12()\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformL.controls['value_type'].valid&&userformL.controls['value_type'].dirty\">\r\n              请选择取值类型！\r\n          </span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- 属性值类型-数值型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='02'\">\r\n    <form [formGroup]=\"userform02\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>步长</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"inc\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['inc'].valid&&userform02.controls['inc'].dirty\">\r\n          <p [hidden]=\"!userform02.hasError('pattern','inc')\"> 步长输入不合法！</p>\r\n          <p *ngIf=\"userform02.controls['inc'].value.length>20\">步长不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['min'].valid&&userform02.controls['min'].dirty\">\r\n          <p [hidden]=\"!userform02.hasError('required','min')\">最小值不能为空！</p>\r\n          <p [hidden]=\"!userform02.hasError('pattern','min')\"> 最小值输入不合法！</p>\r\n          <p *ngIf=\"userform02.controls['min'].value.length>20\">最小值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['max'].valid&&userform02.controls['max'].dirty\">\r\n          <p [hidden]=\"!userform02.hasError('required','max')\">最大值不能为空！</p>\r\n          <p [hidden]=\"!userform02.hasError('pattern','max')\"> 最大值输入不合法！</p>\r\n          <p *ngIf=\"userform02.controls['max'].value.length>20\">最大值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n        <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform02.controls['def'].valid&&userform02.controls['def'].dirty\">\r\n          <p [hidden]=\"!userform02.hasError('pattern','def')\"> 默认值输入不合法！</p>\r\n          <p *ngIf=\"userform02.controls['def'].value.length>20\">默认值不能超过20字符!</p>\r\n        </div> -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-金额型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='03'\">\r\n    <form [formGroup]=\"userform03\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>步长</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"inc\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['inc'].valid&&userform03.controls['inc'].dirty\">\r\n          <p [hidden]=\"!userform03.hasError('pattern','inc')\"> 默认值输入不合法！</p>\r\n          <p *ngIf=\"userform03.controls['inc'].value.length>20\">默认值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['min'].valid&&userform03.controls['min'].dirty\">\r\n          <p [hidden]=\"!userform03.hasError('required','min')\">最小值不能为空！</p>\r\n          <p [hidden]=\"!userform03.hasError('pattern','min')\"> 最小值输入不合法！</p>\r\n          <p *ngIf=\"userform03.controls['min'].value.length>20\">最小值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['max'].valid&&userform03.controls['max'].dirty\">\r\n          <p [hidden]=\"!userform03.hasError('required','max')\">最大值不能为空！</p>\r\n          <p [hidden]=\"!userform03.hasError('pattern','max')\"> 最大值输入不合法！</p>\r\n          <p *ngIf=\"userform03.controls['max'].value.length>20\">默认值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n        <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform03.controls['def'].valid&&userform03.controls['def'].dirty\">\r\n          <p [hidden]=\"!userform03.hasError('pattern','def')\"> 默认值输入不合法！</p>\r\n          <p *ngIf=\"userform03.controls['def'].value.length>20\">默认值不能超过20字符!</p>\r\n        </div> -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-日期型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='04'\">\r\n    <form [formGroup]=\"userform04\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar (onSelect)=\"refresh()\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\" [(ngModel)]=\"transferedDateFrom\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n            请选择正确日期！\r\n          </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar *ngIf=\"showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\" [(ngModel)]=\"transferedDateTo\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <p-calendar *ngIf=\"!showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\" [(ngModel)]=\"transferedDateTo\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n              请选择正确日期！\r\n          </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <p-calendar name=\"transferedDateDef\" formControlName=\"transferedDateDef\" [(ngModel)]=\"transferedDateDef\" [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\"\r\n          dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-文本型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='05'\">\r\n    <form [formGroup]=\"userform05\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label>默认值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"def\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n        <!-- <div class=\"requireLabel posi-ab left-34\" style=\"color:red;\" *ngIf=\"!userform05.controls['def'].valid&&userform05.controls['def'].dirty\">\r\n          <span *ngIf=\"userform05.hasError('required','def')\">默认值不能为空!</span>\r\n          <span *ngIf=\"!userform05.hasError('required','def') && userform05.controls['def'].value.length>20\">默认值不能超过20字符!</span>\r\n          <span *ngIf=\"!userform05.hasError('required','def') && userform05.controls['def'].value.length<=20 && userform05.hasError('specialSymbol','def')\">默认值不能有特殊字符!</span>\r\n        </div> -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- 属性值类型-数值后确定型 -->\r\n  <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='06'\">\r\n    <form [formGroup]=\"userform06\">\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最小值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"min\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform06.controls['min'].valid&&userform06.controls['min'].dirty\">\r\n          <p [hidden]=\"!userform06.hasError('required','min')\">最小值不能为空！</p>\r\n          <p [hidden]=\"!userform06.hasError('pattern','min')\"> 最小值输入不合法！</p>\r\n          <p *ngIf=\"userform06.controls['min'].value.length>20\">最小值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n        <label appValidation>最大值</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n        <input name=\"max\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n        <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform06.controls['max'].valid&&userform06.controls['max'].dirty\">\r\n          <p [hidden]=\"!userform06.hasError('required','max')\">最大值不能为空！</p>\r\n          <p [hidden]=\"!userform06.hasError('pattern','max')\"> 最大值输入不合法！</p>\r\n          <p *ngIf=\"userform06.controls['max'].value.length>20\">最大值不能超过20字符!</p>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- 属性类型-列表型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='01'\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label appValidation>取值类型</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n      <p-dropdown [options]=\"valueType_List\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items;let i = index\">\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label>选项值</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-8\">\r\n      <input type=\"text\" [(ngModel)]=\"item.productFeatureLocalCode\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n      <label>选项值描述</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-6\">\r\n      <input type=\"text\" [(ngModel)]=\"item.description\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 ui-mp-2\">\r\n      <button pButton type=\"button\" (click)=\"detelBtn(i)\" label=\"-\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 text_right\">\r\n      <button pButton type=\"button\" (click)=\"addBtn()\" label=\"+\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <button pButton type=\"button\" (click)=\"seveClick()\" label=\"确定\"></button>\r\n    <button pButton type=\"button\" (click)=\"goBack()\" label=\"取消\"></button>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n:host/deep/ input[pInputText] {\n  width: 60%; }\n\n:host/deep/ .ui-dropdown {\n  width: 60% !important; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctbW9kaWZ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50XFxjb21wb25lbnQtY29uZmlnXFxjb21wb25lbnQtY29uZmlnLW1vZGlmeVxcY29tcG9uZW50LWNvbmZpZy1tb2RpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFLekI7RUFDSSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0kscUJBQW9CLEVBQUE7O0FBRXhCO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLGFBQ0osRUFBQTtFQUNBO0lBQ0ksY0FDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFdBQ0osRUFBQSxFQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctbW9kaWZ5L2NvbXBvbmVudC1jb25maWctbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+mAieaLqeaciOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG46aG9zdC9kZWVwLyBpbnB1dFtwSW5wdXRUZXh0XXtcclxuICAgIHdpZHRoOjYwJTtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDo2MCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLnVpLW1wLTEsXHJcbiAgICAudWktbXAtMixcclxuICAgIC51aS1tcC0zLFxyXG4gICAgLnVpLW1wLTQsXHJcbiAgICAudWktbXAtNSxcclxuICAgIC51aS1tcC02LFxyXG4gICAgLnVpLW1wLTcsXHJcbiAgICAudWktbXAtOCxcclxuICAgIC51aS1tcC05LFxyXG4gICAgLnVpLW1wLTEwLFxyXG4gICAgLnVpLW1wLTExLFxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbXAtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: ComponentConfigModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigModifyComponent", function() { return ComponentConfigModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_component_modify_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/component-modify.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/bean/component-modify.bean.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComponentConfigModifyComponent = /** @class */ (function () {
    function ComponentConfigModifyComponent(creditCcmService, commfunc, fb) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.specialSymbol = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"]; //讲英文转化为中文
        this.transferedDateFrom = new Date();
        this.transferedDateTo = new Date();
        this.transferedDateDef = new Date();
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // bean
        this.caddBean = new _bean_component_modify_bean__WEBPACK_IMPORTED_MODULE_3__["ComponentConfigADDBean"]();
        this.shuxingmiano = "";
        this.items = [{
                description: '',
                productFeatureLocalCode: ''
            }];
        //提示信息
        this.msgs = [];
        this.productFeatureLocalCode = '';
        this.min = '';
        this.def = '';
        this.inc = '';
        this.max = '';
        this.productFeatureId = '';
        this.itemvlaue12 = []; //传值空数组转
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.transferedDateDef = null;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            attribute_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            shuxingmiano: [''],
        });
        this.userformL = fb.group({
            value_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.userform02 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            // 'def': new FormControl('', [Validators.pattern(/^[0-9]{1,20}(\.[0-9]{0,10})?$/), Validators.maxLength(20)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userform03 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            // 'def': new FormControl('', [Validators.pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), Validators.maxLength(20)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userform04 = fb.group({
            transferedDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            transferedDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            transferedDateDef: [''],
        });
        this.userform05 = fb.group({
            // 'def': new FormControl('', [Validators.required, Validators.maxLength(20), specialSymbol]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userform06 = fb.group({
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]{1,20}(\.[0-9]{0,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
        this.valueType = this.code['ValueType'];
    }
    ComponentConfigModifyComponent.prototype.ngOnInit = function () {
    };
    ComponentConfigModifyComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var pram = { productFeatureTypeId: this.inValue };
        this.creditCcmService.productFeatureTypeDetail(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productFeatureCategoryId_calue = data.result.productFeatures[0].productFeatureCategoryId;
                _this.shuxingmiano = data.result.productFeatureTypeDes; //属性描述
                _this.caddBean.productFeatureTypeId = data.result.productFeatureTypeId; // 属性编码
                // // 列表型回显
                if (data.result.featureType == "01") {
                    _this.valueType_List = [
                        { label: '列表型', value: '01' },
                    ];
                    _this.attribute_type = data.result.featureType; //属性类型列表绑定
                    _this.vlaue1 = _this.attribute_type; //列表型
                    _this.caddBean.description = data.result.description; //属性名
                    _this.items = data.result.productFeatures; //下面的数值
                    // data.result.productFeatures.forEach(item => {
                    // });
                }
                if (data.result.featureType == "02") {
                    _this.caddBean.description = data.result.description; //属性名
                    _this.attribute_type = data.result.featureType; //属性类型绑定
                    _this.vlaue1 = _this.attribute_type; //列表型
                    _this.value_type = data.result.productFeatures[0].valueType; //取值类型
                    _this.vlaue2 = _this.value_type; //取值类型
                    _this.productFeatureLocalCode = data.result.productFeatures[0].productFeatureLocalCode;
                    if (data.result.featureType == "01") {
                        _this.items = data.result.productFeatures; //下面的数值
                    }
                    else {
                        _this.inc = data.result.productFeatures[0].inc;
                        _this.min = data.result.productFeatures[0].min;
                        _this.max = data.result.productFeatures[0].max;
                        _this.def = data.result.productFeatures[0].def;
                        _this.productFeatureId = data.result.productFeatures[0].productFeatureId;
                        if (data.result.productFeatures[0].valueType == "04") {
                            _this.inc = data.result.productFeatures[0].inc;
                            _this.min = data.result.productFeatures[0].min;
                            _this.max = data.result.productFeatures[0].max;
                            _this.def = data.result.productFeatures[0].def;
                            _this.min = _this.min.substring(0, 4) + "/" + _this.min.substring(4, 6) + "/" + _this.min.substring(6, 8);
                            _this.transferedDateFrom = new Date(_this.min);
                            _this.max = _this.max.substring(0, 4) + "/" + _this.max.substring(4, 6) + "/" + _this.max.substring(6, 8);
                            _this.transferedDateTo = new Date(_this.max);
                            if (_this.def != '') {
                                _this.def = _this.def.substring(0, 4) + "/" + _this.def.substring(4, 6) + "/" + _this.def.substring(6, 8);
                                _this.transferedDateDef = new Date(_this.def);
                            }
                            else {
                                _this.transferedDateDef = null;
                            }
                        }
                        else {
                            _this.inc = data.result.productFeatures[0].inc;
                            _this.min = data.result.productFeatures[0].min;
                            _this.max = data.result.productFeatures[0].max;
                            _this.def = data.result.productFeatures[0].def;
                        }
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
    };
    //码值
    ComponentConfigModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ComponentConfigModifyComponent.prototype.addBtn = function () {
        this.items.push({
            description: '',
            productFeatureLocalCode: ''
        });
    };
    ComponentConfigModifyComponent.prototype.detelBtn = function (i) {
        this.items.splice(i, 1);
    };
    ComponentConfigModifyComponent.prototype.choseVlue1 = function () {
        this.vlaue1 = this.attribute_type;
        if (this.vlaue1 == '01') {
            this.valueType_List = [
                { label: '列表型', value: '01' },
            ];
        }
    };
    ComponentConfigModifyComponent.prototype.choseVlue12 = function () {
        this.vlaue2 = this.value_type;
        this.inc = '';
        this.min = '';
        this.max = '';
        this.def = '';
    };
    ComponentConfigModifyComponent.prototype.goBack = function () {
        var parm = {
            display: false,
            code: 'cancelModel'
        };
        this.outValue.emit(parm);
    };
    ComponentConfigModifyComponent.prototype.seveClick = function () {
        var _this = this;
        // 验证
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //提交
        if (this.vlaue1 == '01') {
            this.itemvlaue12 = [];
            if (this.items.length === 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值至少为一条' });
                return;
            }
            this.items.forEach(function (item) {
                _this.itemvlaue12.push(item);
            });
            this.caddBean.prdcFeaList = this.itemvlaue12;
            this.caddBean.valueType = "01";
        }
        if (this.vlaue1 == '02') {
            // 验证
            for (var i in this.userformL.controls) {
                this.userformL.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userformL.controls) {
                if (!this.userformL.controls[i].valid) {
                    return;
                }
            }
            if (this.vlaue2 == '02') {
                for (var i in this.userform02.controls) {
                    this.userform02.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform02.controls) {
                    if (!this.userform02.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    inc: this.inc,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '03') {
                for (var i in this.userform03.controls) {
                    this.userform03.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform03.controls) {
                    if (!this.userform03.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    inc: this.inc,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '04') {
                for (var i in this.userform04.controls) {
                    this.userform04.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform04.controls) {
                    if (!this.userform04.controls[i].valid) {
                        return;
                    }
                }
                this.min = this.transDateNW(this.transferedDateFrom);
                this.max = this.transDateNW(this.transferedDateTo);
                this.def = this.transDateNW(this.transferedDateDef);
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '05') {
                for (var i in this.userform05.controls) {
                    this.userform05.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform05.controls) {
                    if (!this.userform05.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    def: this.def,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 == '06') {
                for (var i in this.userform06.controls) {
                    this.userform06.controls[i].markAsDirty();
                }
                //处理是否提交
                for (var i in this.userform06.controls) {
                    if (!this.userform06.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    productFeatureLocalCode: this.productFeatureLocalCode,
                    min: this.min,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            this.caddBean.valueType = this.value_type;
        }
        this.caddBean.productFeatureCategoryId = this.inValue;
        this.caddBean.productFeatureCategoryId = this.productFeatureCategoryId_calue; //部件ID
        this.caddBean.productFeatureTypeLocalCode = ''; //没定义的属性本地编码
        this.caddBean.productFeatureTypeId = this.inValue;
        this.caddBean.featureType = this.attribute_type;
        this.caddBean.productFeatureTypeLocalCode = this.shuxingmiano; //属性描述
        //提交服务
        var redo_name = {
            xxId: this.inValue,
            name: this.caddBean.description,
            type: 'PRODUCT_FEATURE_TYPE'
        };
        this.creditCcmService.checkBeforeUpdate(redo_name).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.isOrNotUpdate == "is") {
                    //提交服务
                    _this.creditCcmService.prdcFeaAndFeaTypeUpd(_this.caddBean).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            var parm = {
                                display: false,
                                code: data.returnCode.message
                            };
                            _this.outValue.emit(parm);
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
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.retDesc + ",不允许修改" });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
        });
    };
    ComponentConfigModifyComponent.prototype.transDateNW = function (value) {
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
        var newtime = year + month + data;
        return newtime;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentConfigModifyComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComponentConfigModifyComponent.prototype, "outValue", void 0);
    ComponentConfigModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-component-config-modify',
            template: __webpack_require__(/*! ./component-config-modify.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.html"),
            styles: [__webpack_require__(/*! ./component-config-modify.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        })
        /**
         * 属性修改
         */
        ,
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__["CreditCcmService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ComponentConfigModifyComponent);
    return ComponentConfigModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"all_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 margin\">\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 border\">\r\n    <div class=\"ui-g-12 ui-md-12 box border\" *ngIf=\"vlaue1=='0'\">\r\n      <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label appValidation>组件名称:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"componentConfigBean.description\" pInputText style=\"width:30%\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n              <span [hidden]=\"!userform.hasError('pattern','description')\"> 组件名称输入不合法！</span>\r\n            <span [hidden]=\"!userform.hasError('required','description')\"> 请填写组件名称！</span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>组件描述:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\">\r\n            <textarea name=\"parentCategoryId\" formControlName=\"parentCategoryId\" [(ngModel)]=\"componentConfigBean.parentCategoryId\" pInputTextarea\r\n              style=\"width:30%\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 box border\" *ngIf=\"vlaue1=='1'\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>组件编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{accept_value.productFeatureCategoryId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>组件名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{accept_value.description}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>组件描述:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-10\">\r\n              <label>{{accept_value.parentCategoryId}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <button pButton type=\"button\" (click)=\"addAttribute(item)\" label=\"添加属性\"></button>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" header=\"取值范围\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>取值范围</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.min}}</span><span *ngIf=\"item.featureValue==2\">--</span>\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                  <span *ngIf=\"item.featureValue==1\">{{item.description}}</span>\r\n                  <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                  <span (click)=\"detailsClick(item)\" class=\"tabelDetailIco\">详情</span>\r\n                  <span (click)=\"modifyAttribute(item)\" class=\"tabelUpdateIco\">修改</span>\r\n                  <span (click)=\"deleteClick(item)\" class=\"tabelDeleteIco\">删除</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n    <button pButton type=\"button\" *ngIf=\"vlaue1!='1'\" (click)=\"next()\" label=\"下一步\"></button>\r\n    <button pButton type=\"button\" (click)=\"confirm()\" label=\"返回\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-product-component-config-add *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"addCall($event)\"></app-product-component-config-add>\r\n    <app-product-component-config-modify *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"modifyCall($event)\"></app-product-component-config-modify>\r\n    <app-product-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-product-component-config-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .box {\n  padding: 40px 0 60px 0;\n  background-color: #fafafa; }\n\n.container .border {\n  border: 1px solid #ddd; }\n\n.container .red {\n  background-color: red; }\n\n.overflow {\n  height: 550px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 90%; }\n\n:host/deep/ .ui-steps .ui-steps-item {\n  background-color: #fafafa; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 650px !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 85%; }\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 650px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50XFxjb21wb25lbnQtY29uZmlnXFxjb21wb25lbnQtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQVRqQztFQVlRLHNCQUFzQixFQUFBOztBQVo5QjtFQWVRLHFCQUFxQixFQUFBOztBQUk3QjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsNEJBQTJCLEVBQUE7O0FBRS9CO0VBQ0s7SUFDRyxVQUFVLEVBQUE7RUFFYjtJQUNHLHVCQUFzQixFQUFBLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwIDYwcHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuICAgIC5yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzIC51aS1zdGVwcy1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDo5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjYwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDo2NTBweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAgIHdpZHRoOiA2NTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ComponentConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigComponent", function() { return ComponentConfigComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_component_config_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/component-config.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/bean/component-config.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //删除




var ComponentConfigComponent = /** @class */ (function () {
    function ComponentConfigComponent(creditCcmService, confirmationService, router, fb, commfunc) {
        this.creditCcmService = creditCcmService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.fb = fb;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //列表无数据
        // bean
        this.componentConfigBean = new _bean_component_config_bean__WEBPACK_IMPORTED_MODULE_5__["ComponentConfigBean"]();
        //修改的参数
        this.updateValue = [];
        this.select_1 = []; //默认下拉
        this.select_2 = []; //默认下拉
        //头部标题
        this.all_title = '组件配置';
        this.display = false;
        this.activeIndex = 0;
        //提示信息
        this.msgs = [];
        this.accept_value = [];
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            parentCategoryId: [''],
        });
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
    }
    ComponentConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vlaue1 = 0;
        this.select_2 = [
            { label: '请选择', value: " " },
        ];
        this.items = [{
                label: '新建组件',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '维护属性',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },];
    };
    //码值
    ComponentConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ComponentConfigComponent.prototype.prev = function () {
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
            this.vlaue2 = this.ceshi;
        }
    };
    ComponentConfigComponent.prototype.next = function () {
        var _this = this;
        if (this.activeIndex == 0) {
            // 验证
            for (var i in this.userform.controls) {
                this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userform.controls) {
                if (!this.userform.controls[i].valid) {
                    return;
                }
            }
            //新增组件
            var redo_name = {
                name: this.componentConfigBean.description,
                type: 'PRODUCT_FEATURE_CATEGORY'
            };
            this.creditCcmService.queryNameIsNotExist(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNot == "is") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "产品组件名称重复" });
                    }
                    else if (data.isOrNot == "not") {
                        //提交服务
                        _this.creditCcmService.addFeatureCategory(_this.componentConfigBean).subscribe(function (data) {
                            if (data.returnCode.code == "success") {
                                _this.accept_value = data;
                                _this.activeIndex = _this.activeIndex + 1;
                                _this.vlaue1 = _this.activeIndex;
                                _this.vlaue2 = _this.ceshi;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
            });
        }
    };
    ComponentConfigComponent.prototype.confirm = function () {
        this.router.navigate(['/pages/tzb/custom/credit-ccm/productComponentConfig/product-component-view']);
    };
    //查询
    ComponentConfigComponent.prototype.attr_query = function () {
        var _this = this;
        var param = {
            productFeatureCategoryId: this.accept_value.productFeatureCategoryId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.creditCcmService.prodFeatureCategoryDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.total = data.total;
                data.resultList.forEach(function (item) {
                    if (item.min == null) {
                        if (item.def != null) {
                            item.featureValue = 3;
                        }
                        else {
                            item.featureValue = 1;
                        }
                    }
                    if (item.min != null) {
                        item.featureValue = 2;
                    }
                });
                _this.cars_2 = data.resultList;
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
    //新增组件
    ComponentConfigComponent.prototype.addAttribute = function (item) {
        this.updateValue = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '新增';
        this.showModel = '1';
    };
    //新增组件回掉
    ComponentConfigComponent.prototype.addCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.attr_query();
    };
    //修改组件
    ComponentConfigComponent.prototype.modifyAttribute = function (item) {
        this.display = true;
        this.headerTitle = '修改';
        this.showModel = '2';
        this.updateValue = item.productFeatureTypeId;
    };
    //修改组件回掉
    ComponentConfigComponent.prototype.modifyCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.attr_query();
    };
    //组件详情
    ComponentConfigComponent.prototype.detailsClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item.productFeatureTypeId;
    };
    //详情回掉
    ComponentConfigComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    //删除组件
    ComponentConfigComponent.prototype.deleteClick = function (item) {
        var _this = this;
        var param = { productFeatureTypeId: item.productFeatureTypeId, productFeatureCategoryId: this.accept_value.productFeatureCategoryId };
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.creditCcmService.prdcFeaAndFeaTypeDel(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.attr_query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //分页
    ComponentConfigComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        this.attr_query();
        this.pageNum = 1;
    };
    ComponentConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-component-config',
            template: __webpack_require__(/*! ./component-config.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.html"),
            styles: [__webpack_require__(/*! ./component-config.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        })
        /**
         * 组件新增
         */
        ,
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ComponentConfigComponent);
    return ComponentConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"all_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 margin\">\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 border\">\r\n    <div class=\"ui-g-12 ui-md-12 box border\" *ngIf=\"vlaue1=='0'\">\r\n      <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label appValidation><b>组件名称</b></label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"componentConfigBean.description\" pInputText style=\"width:30%\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n                <span [hidden]=\"!userform.hasError('pattern','description')\"> 组件名称输入不合法！</span>\r\n            <span [hidden]=\"!userform.hasError('required','description')\"> 请填写组件名称！</span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label><b>组件描述</b></label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\">\r\n            <textarea name=\"parentCategoryId\" formControlName=\"parentCategoryId\" [(ngModel)]=\"componentConfigBean.parentCategoryId\" pInputTextarea\r\n              style=\"width:30%\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 box border\" *ngIf=\"vlaue1=='1'\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label><b>组件编号</b></label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{accept_value.productFeatureCategoryId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label><b>组件名称</b></label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{accept_value.description}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label><b>组件描述</b></label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-10\">\r\n              <label>{{accept_value.parentCategoryId}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12 text_right \">\r\n            <button pButton type=\"button\" (click)=\"addAttribute(item)\" label=\"添加属性\"></button>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" header=\"取值范围\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>取值范围</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.min}}</span><span *ngIf=\"item.featureValue==2\"> --</span>\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                  <span *ngIf=\"item.featureValue==1\">{{item.description}}</span>\r\n                  <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                  <span (click)=\"detailsClick(item)\" class=\"tabelDetailIco\">详情</span>\r\n                  <span (click)=\"modifyAttribute(item)\" class=\"tabelUpdateIco\">修改</span>\r\n                  <span (click)=\"deleteClick(item)\" class=\"tabelDeleteIco\">删除</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n    <button pButton type=\"button\" *ngIf=\"vlaue1!='1'\" (click)=\"next()\" label=\"下一步\"></button>\r\n    <button pButton type=\"button\" (click)=\"confirm()\" label=\"返回\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-product-component-config-add *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"addCall($event)\"></app-product-component-config-add>\r\n    <app-product-component-config-modify *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"modifyCall($event)\"></app-product-component-config-modify>\r\n    <app-product-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-product-component-config-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .box {\n  padding: 40px 0 60px 0;\n  background-color: #fafafa; }\n\n.container .border {\n  border: 1px solid #ddd; }\n\n.container .red {\n  background-color: red; }\n\n.overflow {\n  height: 550px;\n  overflow-y: auto; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 90%; }\n\n:host/deep/ .ui-steps .ui-steps-item {\n  background-color: #fafafa; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 85%; }\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 650px !important; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 650px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtbW9kaWZ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50XFxjb21wb25lbnQtbW9kaWZ5XFxjb21wb25lbnQtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQVRqQztFQVlRLHNCQUFzQixFQUFBOztBQVo5QjtFQWVRLHFCQUFxQixFQUFBOztBQUc3QjtFQUNJLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyx1QkFBc0IsRUFBQSxFQUN6Qjs7QUFHSjtFQUNJLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsNEJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NyZWRpdC1jY20vY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50L2NvbXBvbmVudC1tb2RpZnkvY29tcG9uZW50LW1vZGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAudGV4dF9jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA2MHB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIH1cclxuICAgIC5ib3JkZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuICAgIC5yZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcbi5vdmVyZmxvd3tcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcyAudWktc3RlcHMtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICB3aWR0aDogODUlO1xyXG4gICB9XHJcbiAgICA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgICB3aWR0aDogNjUwcHghaW1wb3J0YW50O1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgd2lkdGg6OTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDo2MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6NjUwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ComponentModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModifyComponent", function() { return ComponentModifyComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_config_bean_component_config_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../component-config/bean/component-config.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/bean/component-config.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //删除





var ComponentModifyComponent = /** @class */ (function () {
    function ComponentModifyComponent(commfunc, creditCcmService, confirmationService, router, routers, fb) {
        this.commfunc = commfunc;
        this.creditCcmService = creditCcmService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.routers = routers;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //列表无数据
        // bean
        this.componentConfigBean = new _component_config_bean_component_config_bean__WEBPACK_IMPORTED_MODULE_6__["ComponentConfigBean"]();
        //修改的参数
        this.updateValue = [];
        this.select_1 = []; //默认下拉
        this.select_2 = []; //默认下拉
        //头部标题
        this.all_title = '组件配置';
        this.display = false;
        this.activeIndex = 0;
        //提示信息
        this.msgs = [];
        this.accept_value = [];
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            parentCategoryId: [''],
        });
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
    }
    ComponentModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routers.params.subscribe(function (data) {
            _this.productFeatureCategoryId = data.productFeatureCategoryId;
            if (data.description == "null") {
                _this.componentConfigBean.description = "";
            }
            else {
                _this.componentConfigBean.description = data.description;
            }
            if (data.parentCategoryId == "null") {
                _this.componentConfigBean.parentCategoryId = "";
            }
            else {
                _this.componentConfigBean.parentCategoryId = data.parentCategoryId;
            }
            _this.accept_value.productFeatureCategoryId = data.productFeatureCategoryId;
        });
        this.queryEventA(this.productFeatureCategoryId);
        this.vlaue1 = 0;
        this.select_2 = [
            { label: '请选择', value: " " },
        ];
        this.items = [{
                label: '修改组件',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '维护属性',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },];
    };
    //码值
    ComponentModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ComponentModifyComponent.prototype.queryEventA = function (itemV) {
        var _this = this;
        var param = {
            productFeatureCategoryId: itemV,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.creditCcmService.prodFeatureCategoryDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.total = data.total;
                data.resultList.forEach(function (item) {
                    if (item.description != null) {
                        item.featureValue = 1;
                    }
                    if (item.min != null) {
                        item.featureValue = 2;
                    }
                    if (item.def != null && item.min == null) {
                        item.featureValue = 3;
                    }
                });
                _this.cars_2 = data.resultList;
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
    ComponentModifyComponent.prototype.prev = function () {
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
            this.vlaue2 = this.ceshi;
        }
    };
    ComponentModifyComponent.prototype.next = function () {
        var _this = this;
        if (this.activeIndex == 0) {
            // 验证
            for (var i in this.userform.controls) {
                this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userform.controls) {
                if (!this.userform.controls[i].valid) {
                    return;
                }
            }
            var parm_1 = {
                productFeatureCategoryId: this.productFeatureCategoryId,
                parentCategoryId: this.componentConfigBean.parentCategoryId,
                description: this.componentConfigBean.description,
            };
            //修改组件
            var redo_name = {
                xxId: this.productFeatureCategoryId,
                name: this.componentConfigBean.description,
                type: 'PRODUCT_FEATURE_CATEGORY'
            };
            this.creditCcmService.checkBeforeUpdate(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNotUpdate == "is") {
                        //提交服务
                        _this.creditCcmService.updateFeatureCategory(parm_1).subscribe(function (data) {
                            if (data.returnCode.code == "success") {
                                _this.accept_value = parm_1;
                                _this.activeIndex = _this.activeIndex + 1;
                                _this.vlaue1 = _this.activeIndex;
                                _this.vlaue2 = _this.ceshi;
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
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.retDesc + ",不允许修改" });
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
            });
        }
    };
    ComponentModifyComponent.prototype.confirm = function () {
        this.router.navigate(['/pages/tzb/custom/credit-ccm/productComponentConfig/product-component-view']);
    };
    //新增组件
    ComponentModifyComponent.prototype.addAttribute = function (item) {
        this.updateValue = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '新增';
        this.showModel = '1';
    };
    //新增组件回掉
    ComponentModifyComponent.prototype.addCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.queryEventA(this.accept_value.productFeatureCategoryId);
    };
    //修改组件
    ComponentModifyComponent.prototype.modifyAttribute = function (item) {
        this.display = true;
        this.headerTitle = '修改';
        this.showModel = '2';
        this.updateValue = item.productFeatureTypeId;
    };
    //修改组件回掉
    ComponentModifyComponent.prototype.modifyCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.queryEventA(this.accept_value.productFeatureCategoryId);
    };
    //组件详情
    ComponentModifyComponent.prototype.detailsClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item.productFeatureTypeId;
    };
    //详情回掉
    ComponentModifyComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    //删除组件
    ComponentModifyComponent.prototype.deleteClick = function (item) {
        var _this = this;
        var param = { productFeatureTypeId: item.productFeatureTypeId, productFeatureCategoryId: this.accept_value.productFeatureCategoryId };
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.creditCcmService.prdcFeaAndFeaTypeDel(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.queryEventA(_this.accept_value.productFeatureCategoryId);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //分页
    ComponentModifyComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        this.queryEventA(this.accept_value.productFeatureCategoryId);
        this.pageNum = 1;
    };
    ComponentModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-component-modify',
            template: __webpack_require__(/*! ./component-modify.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.html"),
            styles: [__webpack_require__(/*! ./component-modify.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ComponentModifyComponent);
    return ComponentModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/bean/component-view.bean.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/bean/component-view.bean.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ComponentViewBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewBean", function() { return ComponentViewBean; });
var ComponentViewBean = /** @class */ (function () {
    function ComponentViewBean() {
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return ComponentViewBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <label>组件编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.productFeatureCategoryId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <label>组件名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.description}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <label>组件描述:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n                <label>{{list.parentCategoryId}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12 heightO border-dashed\"></div>\r\n            <div class=\"ui-g-12 ui-md-12 heightO\"></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\"><label>创建人:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.createdByUserLogin}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\"><label>创建时间:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.createdDate}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\"><label>最后修改人:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.lastModifiedByUserLogin}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\"><label>最后修改时间:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <label>{{list.lastModifiedDate}}</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 heightO border-dashed\"></div>\r\n    <div class=\"ui-g-12 ui-md-12 heightO\"></div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <p-dataTable [value]=\"listValue\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" header=\"取值范围\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.featureValue==2\">{{item.min}}</span><span *ngIf=\"item.featureValue==2\">--</span>\r\n                    <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                    <span *ngIf=\"item.featureValue==1\">{{item.description}}</span>\r\n                    <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span (click)=\"detailsClick(item)\" class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n        <span class=\"icoColor\" (click)=\"closeClick()\">关闭</span>\r\n    </div>\r\n</div>\r\n<!-- 弹出框 -->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" width=\"700\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <app-product-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-product-component-config-details>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .heightO {\n  height: 1rem; }\n\n.container .border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.overflow {\n  height: 300px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtdmlldy9jb21wb25lbnQtdmlldy1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50XFxjb21wb25lbnQtdmlld1xcY29tcG9uZW50LXZpZXctZGV0YWlsc1xcY29tcG9uZW50LXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtFQVFRLFlBQVksRUFBQTs7QUFScEI7RUFXUSw4QkFBOEIsRUFBQTs7QUFHdEM7RUFDSSxhQUFhO0VBQ2IsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NyZWRpdC1jY20vY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50L2NvbXBvbmVudC12aWV3L2NvbXBvbmVudC12aWV3LWRldGFpbHMvY29tcG9uZW50LXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaGVpZ2h0TyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgIH1cclxufSBcclxuLm92ZXJmbG93e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLnVpLW1wLTEsXHJcbiAgICAudWktbXAtMixcclxuICAgIC51aS1tcC0zLFxyXG4gICAgLnVpLW1wLTQsXHJcbiAgICAudWktbXAtNSxcclxuICAgIC51aS1tcC02LFxyXG4gICAgLnVpLW1wLTcsXHJcbiAgICAudWktbXAtOCxcclxuICAgIC51aS1tcC05LFxyXG4gICAgLnVpLW1wLTEwLFxyXG4gICAgLnVpLW1wLTExLFxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbXAtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: ComponentViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewDetailsComponent", function() { return ComponentViewDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/component-view.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/bean/component-view.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentViewDetailsComponent = /** @class */ (function () {
    function ComponentViewDetailsComponent(creditCcmService) {
        this.creditCcmService = creditCcmService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //列表无数据
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.componentViewBean = new _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentViewBean"]();
        this.cars = [];
        this.display = false;
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        this.list = [];
        this.listValue = [];
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
    }
    ComponentViewDetailsComponent.prototype.ngOnInit = function () {
    };
    ComponentViewDetailsComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    // 关闭
    ComponentViewDetailsComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    ComponentViewDetailsComponent.prototype.queryEvent = function () {
        var _this = this;
        this.list = this.inValue;
        var param = {
            productFeatureCategoryId: this.inValue.productFeatureCategoryId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.creditCcmService.prodFeatureCategoryDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.total = data.total;
                data.resultList.forEach(function (item) {
                    if (item.min == null) {
                        if (item.def != null) {
                            item.featureValue = 3;
                        }
                        else {
                            item.featureValue = 1;
                        }
                    }
                    if (item.min != null) {
                        item.featureValue = 2;
                    }
                });
                _this.listValue = data.resultList;
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
    //分页
    ComponentViewDetailsComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        this.queryEvent();
        this.pageNum = 1;
    };
    //组件详情
    ComponentViewDetailsComponent.prototype.detailsClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item.productFeatureTypeId;
    };
    //详情回调
    ComponentViewDetailsComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentViewDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComponentViewDetailsComponent.prototype, "outValue", void 0);
    ComponentViewDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-component-view-details',
            template: __webpack_require__(/*! ./component-view-details.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.html"),
            styles: [__webpack_require__(/*! ./component-view-details.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"]])
    ], ComponentViewDetailsComponent);
    return ComponentViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"all_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 ecolor\">\r\n      <div class=\"ui-g-12 ui-md-2 text_right\">\r\n        <label>组件编号:</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input [(ngModel)]=\"componentViewBean.productFeatureCategoryId\" type=\"text\" pInputText style=\"width:60%\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 text_right\">\r\n        <label>组件名称:</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input [(ngModel)]=\"componentViewBean.description\" type=\"text\" pInputText style=\"width:60%\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 text_center\">\r\n        <button pButton type=\"button\" (click)=\"querySecle()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_right\" *ngIf=\"permissionCheck('SID03008_P063')\">\r\n      <span [routerLink]=\"['/pages/tzb/custom/credit-ccm/productComponentConfig/product-component-config']\" class=\"icoColor\">新增</span>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12  base-table\">\r\n      <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"description\" header=\"组件名称\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            <label>操作</label>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n            <span (click)=\"detailsClick(item)\" class=\"tabelDetailIco\" *ngIf=\"permissionCheck('SID03008_P064')\">详情</span>\r\n            <span [routerLink]=\"['/pages/tzb/custom/credit-ccm/productComponentConfig/product-component-modify',item]\" class=\"tabelUpdateIco\" *ngIf=\"permissionCheck('SID03008_P065')\">修改</span>\r\n            <span (click)=\"deleteClick(item)\" class=\"tabelDeleteIco\" *ngIf=\"permissionCheck('SID03008_P066')\">删除</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n      <p-paginator [first]=\"first\" rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-product-component-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-product-component-view-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ecolor {\n  background-color: #ebebeb; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 550px !important; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-height: 600px !important;\n  height: 60% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbXBvbmVudC9jb21wb25lbnQtdmlldy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbXBvbmVudFxcY29tcG9uZW50LXZpZXdcXGNvbXBvbmVudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEseUJBQXlCLEVBQUE7O0FBR2pDO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDRyx1QkFBc0IsRUFBQSxFQUN6Qjs7QUFHTDtFQUNJLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NyZWRpdC1jY20vY3JlZGl0LXByb2R1Y3QtY29tcG9uZW50L2NvbXBvbmVudC12aWV3L2NvbXBvbmVudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5lY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICB9XHJcbn1cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAgIHdpZHRoOiA1NTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvICAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ComponentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewComponent", function() { return ComponentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/component-view.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/bean/component-view.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //删除




var ComponentViewComponent = /** @class */ (function () {
    function ComponentViewComponent(creditCcmService, confirmationService, commfunc) {
        this.creditCcmService = creditCcmService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //列表无数据
        //组件的传入参数
        this.updateValue = [];
        // bean
        this.componentViewBean = new _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentViewBean"]();
        this.select_1 = []; //默认下拉
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        //头部标题
        this.all_title = '信贷产品组件管理';
        //每页多少条
        this.pageSize = '10';
        this.display = false;
        //提示信息
        this.msgs = [];
        //分页控制
        this.first = 0;
        this.select_1 = [
            { label: '请选择', value: " " },
        ];
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请选择', value: " " },
        ];
    }
    ComponentViewComponent.prototype.ngOnInit = function () {
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请选择', value: " " },
        ];
        this.componentViewBean.pageSize = 10;
        this.componentViewBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 重置
    ComponentViewComponent.prototype.resetClick = function () {
        this.componentViewBean = new _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentViewBean"]();
    };
    //查询始终第一页
    ComponentViewComponent.prototype.querySecle = function () {
        this.componentViewBean.pageSize = 10;
        this.componentViewBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //查询
    ComponentViewComponent.prototype.queryClick = function () {
        var _this = this;
        this.componentViewBean.productCategoryLineId = this.line_value;
        this.componentViewBean.productCategoryGroupId = this.group_value;
        this.creditCcmService.productFeatureCategoryList(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.productFeatureCategoryList;
                _this.total = data.total;
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
    // 详情
    ComponentViewComponent.prototype.detailsClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.updateValue = item;
        this.showModel = '1';
    };
    //详情的回调
    ComponentViewComponent.prototype.detailsCall = function (param) {
        this.display = param;
        // this.queryClick();
    };
    //删除
    ComponentViewComponent.prototype.deleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = { productFeatureCategoryId: item.productFeatureCategoryId };
                _this.creditCcmService.delFeatureCategory(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
                        _this.queryClick();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //分页
    ComponentViewComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.componentViewBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.componentViewBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.componentViewBean.pageSize;
        //调用查询的方法
        this.queryClick();
        this.componentViewBean.pageNum = 1;
    };
    //按钮权限
    ComponentViewComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ComponentViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-component-view',
            template: __webpack_require__(/*! ./component-view.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.html"),
            styles: [__webpack_require__(/*! ./component-view.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ComponentViewComponent);
    return ComponentViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreditProductComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditProductComponentModule", function() { return CreditProductComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-view/component-view.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.ts");
/* harmony import */ var _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-modify/component-modify.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.ts");
/* harmony import */ var _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-config/component-config.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.ts");
/* harmony import */ var _component_config_component_config_add_component_config_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-config/component-config-add/component-config-add.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-add/component-config-add.component.ts");
/* harmony import */ var _component_view_component_view_details_component_view_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-view/component-view-details/component-view-details.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view-details/component-view-details.component.ts");
/* harmony import */ var _component_config_component_config_modify_component_config_modify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-config/component-config-modify/component-config-modify.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-modify/component-config-modify.component.ts");
/* harmony import */ var _component_config_component_config_details_component_config_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-config/component-config-details/component-config-details.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config-details/component-config-details.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_component_credit_product_component_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.routing */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //组件查看

 //组件配置-（新增）
 //组件配置-新增
 //组件查看-详情
 //组件配置-修改
 //组件配置-最终修改

var CreditProductComponentModule = /** @class */ (function () {
    function CreditProductComponentModule() {
    }
    CreditProductComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_credit_ccm_credit_product_component_credit_product_component_routing__WEBPACK_IMPORTED_MODULE_10__["CreditProductComponentRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"]
            ],
            declarations: [
                _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_3__["ComponentViewComponent"],
                _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_5__["ComponentConfigComponent"],
                _component_view_component_view_details_component_view_details_component__WEBPACK_IMPORTED_MODULE_7__["ComponentViewDetailsComponent"],
                _component_config_component_config_add_component_config_add_component__WEBPACK_IMPORTED_MODULE_6__["ComponentConfigAddComponent"],
                _component_config_component_config_modify_component_config_modify_component__WEBPACK_IMPORTED_MODULE_8__["ComponentConfigModifyComponent"],
                _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_4__["ComponentModifyComponent"],
                _component_config_component_config_details_component_config_details_component__WEBPACK_IMPORTED_MODULE_9__["ComponentConfigDetailsComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], CreditProductComponentModule);
    return CreditProductComponentModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.routing.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-component/credit-product-component.routing.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreditProductComponentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditProductComponentRouting", function() { return CreditProductComponentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-view/component-view.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-view/component-view.component.ts");
/* harmony import */ var _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-config/component-config.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-config/component-config.component.ts");
/* harmony import */ var _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-modify/component-modify.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-component/component-modify/component-modify.component.ts");

 //组件查看
 //组件配置
 //组件配置-最终修改
var routes = [
    {
        path: 'product-component-view', component: _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewComponent"],
    },
    {
        path: 'product-component-config', component: _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigComponent"],
    },
    {
        path: 'product-component-modify', component: _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_3__["ComponentModifyComponent"],
    },
];
var CreditProductComponentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=credit-product-component-credit-product-component-module.js.map