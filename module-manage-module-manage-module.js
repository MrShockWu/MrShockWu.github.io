(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-manage-module-manage-module"],{

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/bean/component-config.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/bean/component-config.bean.ts ***!
  \*******************************************************************************************************/
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

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/bean/config-add.bean.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/bean/config-add.bean.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ComponentConfigADDBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigADDBean", function() { return ComponentConfigADDBean; });
var ComponentConfigADDBean = /** @class */ (function () {
    function ComponentConfigADDBean() {
    }
    return ComponentConfigADDBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <!-- <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation> 属性编号 </span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeId\" [(ngModel)]=\"productFeatureTypeId\" maxlength=\"10\"\r\n                    pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeId'].valid&&userform.controls['productFeatureTypeId'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeId')\">属性编号不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform.hasError('required','productFeatureTypeId')\">请填写属性编号！</span>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性编码:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeCode\" [(ngModel)]=\"productFeatureTypeCode\"\r\n                    pInputText maxlength=\"20\">\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeCode'].valid&&userform.controls['productFeatureTypeCode'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeCode')\">属性编码不合法！</span>\r\n                    <span *ngIf=\"userform.hasError('required','productFeatureTypeCode')\">请填写属性编码！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"description\" maxlength=\"20\" [(ngModel)]=\"caddBean.description\"\r\n                    pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','description')\">属性名称不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform.hasError('required','description')\">请填写属性名称！</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" formControlName=\"attribute_type\" [options]=\"featureType\" (onChange)=\"choseVlue1()\"\r\n                    [(ngModel)]=\"attribute_type\"></p-dropdown>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['attribute_type'].valid&&userform.controls['attribute_type'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('required','attribute_type')\">请填写属性类型！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>属性描述:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeDes\" [(ngModel)]=\"productFeatureTypeDes\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeDes'].valid&&userform.controls['productFeatureTypeDes'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeDes')\">属性描述不能输入非法字符！</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div *ngIf=\"vlaue1=='01'\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                    <span appValidation>取值类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"valueType_List\" formControlName=\"valueType1\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['valueType1'].valid&&userform.controls['valueType1'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('required','valueType1')\">请填写取值类型！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"vlaue1=='02'\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right \">\r\n                    <span appValidation>取值类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"valueType\" formControlName=\"valueType2\" (onChange)=\"choseVlue12()\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['valueType2'].valid&&userform.controls['valueType2'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('required','valueType2')\">请填写取值类型！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- 属性类型-添值型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='02'\">\r\n    <!-- 属性值类型-数值型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='02'\">\r\n        <form [formGroup]=\"userform02\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>步长:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['inc'].valid&&userform02.controls['inc'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','inc')\">步长输入不合法！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['min'].valid&&userform02.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform02.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['max'].valid&&userform02.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform02.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['def'].valid&&userform02.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','def')\">默认值输入不合法！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-金额型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='03'\">\r\n        <form [formGroup]=\"userform03\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>步长:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['inc'].valid&&userform03.controls['inc'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','inc')\">步长输入不合法！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['min'].valid&&userform03.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform03.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['max'].valid&&userform03.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform03.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['def'].valid&&userform03.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','def')\">最大值输入不合法！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-日期型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='04'\">\r\n        <form [formGroup]=\"userform04\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\" [maxDate]=\"transferedDateTo\"\r\n                    [(ngModel)]=\"transferedDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n                    <span *ngIf=\"userform04.hasError('required','transferedDateFrom')\">请填写最小值！</span>\r\n                </div>\r\n                <!-- <span class=\"ui-message ui-messages-error\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n                <div *ngIf=\"userform04.controls['transferedDateFrom'].errors.required\">\r\n                    <span class=\"fa ui-icon-error\"></span>\r\n                    请填写最小值！\r\n                </div>\r\n            </span> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\"\r\n                    [(ngModel)]=\"transferedDateTo\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n                    <span *ngIf=\"userform04.hasError('required','transferedDateTo')\">请填写最大值！</span>\r\n                </div>\r\n                <!-- <span class=\"ui-message ui-messages-error\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n                <div *ngIf=\"userform04.controls['transferedDateTo'].errors.required\">\r\n                    <span class=\"fa ui-icon-error\"></span>\r\n                    请填写最大值！\r\n                </div>\r\n            </span> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" name=\"transferedDateDef\" formControlName=\"transferedDateDef\" [(ngModel)]=\"transferedDateDef\"\r\n                    [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\"></p-calendar>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-文本型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='05'\">\r\n        <form [formGroup]=\"userform05\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"def\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform05.controls['def'].valid&&userform05.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform05.hasError('pattern','def')\">默认值不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform05.hasError('required','def')\">请填写默认值！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-数值后确定型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='06'\">\r\n        <form [formGroup]=\"userform06\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform06.controls['min'].valid&&userform06.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform06.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform06.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform06.controls['max'].valid&&userform06.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform06.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform06.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- 属性类型-列表型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='01'\">\r\n    <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items;let i = index\">\r\n        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <span appValidation>选项值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input class=\"ui-inputtext-new\" type=\"text\" specialCharacters #productFeatureLocalCode=\"ngModel\" [(ngModel)]=\"item.productFeatureLocalCode\"\r\n                onkeyup=\"value=value.replace(/[^\\a-\\z\\A-\\z0-9\\u4E00-\\u9FA5\\.]/g,'')\" pInputText>\r\n            <div class=\"ui-message ui-messages-error\" *ngIf=\"productFeatureLocalCode.errors?.specialCharacters\">\r\n                <span class=\"fa ui-icon-error\"></span> 选项值不能输入非法字符\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <span appValidation>选项值描述:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input class=\"ui-inputtext-new\" type=\"text\" specialCharacters #description=\"ngModel\" [(ngModel)]=\"item.description\" pInputText\r\n                onkeyup=\"value=value.replace(/\\s/ig,'')\">\r\n            <div class=\"ui-message ui-messages-error\" *ngIf=\"description.errors?.specialCharacters\">\r\n                <span class=\"fa ui-icon-error\"></span> 选项值描述不能输入空格\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2\" *ngIf=\"i!=0\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"detelBtn(i)\" type=\"button\" label=\"-\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"addBtn()\" type=\"button\" label=\"+\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"seveClick()\" type=\"button\" label=\"确定\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"goBack()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n:host/deep/ input[pInputText] {\n  width: 60%; }\n\n:host/deep/ .ui-dropdown {\n  width: 60% !important; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host/deep/ .ui-calendar-new {\n  font-family: \"Microsoft YaHei\" !important;\n  min-width: 110px;\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LWNvbmZpZy9jb21wb25lbnQtY29uZmlnLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcbW9kdWxlLW1hbmFnZVxcY29tcG9uZW50LWNvbmZpZ1xcY29tcG9uZW50LWNvbmZpZy1hZGRcXGNvbXBvbmVudC1jb25maWctYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBS3pCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUNKLEVBQUE7RUFDQTtJQUNJLGNBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxXQUNKLEVBQUEsRUFBQzs7QUFHTDtFQUNJLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LWNvbmZpZy9jb21wb25lbnQtY29uZmlnLWFkZC9jb21wb25lbnQtY29uZmlnLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIGlucHV0W3BJbnB1dFRleHRdIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhci1uZXcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlhSGVpXCIgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ComponentConfigAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigAddComponent", function() { return ComponentConfigAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/config-add.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/bean/config-add.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { COMMON_REGEXP} from '../../../../../../../../src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.constant';
var ComponentConfigAddComponent = /** @class */ (function () {
    function ComponentConfigAddComponent(productManageHttpService, fb, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caddBean = new _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentConfigADDBean"]();
        this.productFeatureTypeId = '';
        this.items = [{
                description: '',
                productFeatureLocalCode: ''
            }];
        // 提示信息
        this.msgs = [];
        this.featureType_list = [];
        this.valueType_list = [];
        this.productFeatureLocalCode = ''; // 添值型本地编码
        this.description = '';
        this.min = ''; // 最小值
        this.def = ''; // 默认值
        this.inc = ''; // 步长
        this.max = ''; // 最大值
        this.itemvlaue12 = []; // 传值空数组转
        // 日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; // 讲英文转化为中文
        this.transferedDateFrom = new Date();
        this.transferedDateTo = new Date();
        this.transferedDateDef = new Date();
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.transferedDateDef = null;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/)]),
            'attribute_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/)]),
            // 'productFeatureTypeId': new FormControl('', [Validators.required, Validators.pattern(/^\S+$/)]),
            'productFeatureTypeCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[\w\,\|]*$/)]),
            'valueType1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
            'productFeatureTypeDes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/)]),
            'valueType2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
        });
        this.userform02 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
        this.userform03 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
        this.userform04 = fb.group({
            'transferedDateDef': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'transferedDateFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'transferedDateTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.userform05 = fb.group({
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/)]),
        });
        this.userform06 = fb.group({
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
    }
    ComponentConfigAddComponent.prototype.ngOnInit = function () {
        this.featureType = [
            { label: '请选择', value: '' },
        ];
        this.valueType = [
            { label: '请选择', value: '' },
        ];
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
        this.valueType = this.code['ValueType'];
        this.getSeqNo();
    };
    // 获取默认编码
    ComponentConfigAddComponent.prototype.getSeqNo = function () {
        var _this = this;
        var parms = {
            seqType: 'PRODUCT_FEATURE_TYPE',
        };
        this.productManageHttpService.getSeqNo(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productFeatureTypeId = 'PCA' + data.seqNo;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //码值
    ComponentConfigAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
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
        if (this.vlaue1 === '01') {
            this.valueType_List = [
                { label: '列表型', value: '01' },
            ];
        }
    };
    ComponentConfigAddComponent.prototype.choseVlue12 = function () {
        this.vlaue2 = this.value_type;
        if (this.min !== undefined && this.min !== '') {
            this.min = '';
        }
        if (this.max !== undefined && this.max !== '') {
            this.max = '';
        }
        if (this.inc !== undefined && this.inc !== '') {
            this.inc = '';
        }
        if (this.def !== undefined && this.def !== '') {
            this.def = '';
        }
    };
    ComponentConfigAddComponent.prototype.seveClick = function () {
        var _this = this;
        // this.productFeatureTypeId = this.productFeatureTypeId.replace(/(^\s*)|(\s*$)/g, '');
        // let obj = this.productFeatureTypeId.slice(0,3);
        // if (obj != 'PCA') {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号格式错误！' });
        //     return;
        // }
        // if (this.productFeatureTypeId.length != 10) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号格式错误！' });
        //     return;
        // }
        // if (this.productFeatureTypeId === undefined || this.productFeatureTypeId === '') {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号不能为空！' });
        //     return;
        // }
        // if (this.productFeatureTypeId.replace(/[\u4E00-\u9FA5]/g, '**').length > 20) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号不可超20字符' });
        //     return;
        // }
        // if (!this.productFeatureTypeId.match(/^[A-Za-z0-9]+$/)) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号只能由数字和英文字母组成！' });
        //     return;
        // }
        if (this.caddBean.description.replace(/[\u4E00-\u9FA5]/g, '**').length > 100) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称不可超100字符' });
            return;
        }
        if (this.inc.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不能超过18位' });
            return;
        }
        if (this.min.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能超过18位' });
            return;
        }
        if (this.max.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能超过18位' });
            return;
        }
        if (this.def !== null) {
            if (this.def !== undefined && this.def !== '') {
                this.def = this.def.replace(/(^\s*)|(\s*$)/g, '');
            }
            if (this.def.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不能超过18位' });
                return;
            }
        }
        // let tempText1 = this.caddBean.description.replace(/\s/g,"");
        // if (tempText1 == "") {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称不能为空' });
        //     return;
        // }
        this.caddBean.description = this.caddBean.description.replace(/(^\s*)|(\s*$)/g, '');
        if (this.caddBean.description === undefined || this.caddBean.description === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称不能为空！' });
            return;
        }
        if (this.attribute_type === '02') {
            if (this.value_type === undefined) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '取值类型不可为空' });
                return;
            }
        }
        if (!(this.vlaue1 === '02' && this.vlaue2 === '04')) {
            if (Number(this.max) < Number(this.min)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值必须大于等于最小值' });
                return;
            }
        }
        // 验证
        // tslint:disable-next-line:forin
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        // 处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //  判断属性类型    列表型
        var num = 0;
        if (this.vlaue1 === '01') {
            this.itemvlaue12 = [];
            console.log(this.items);
            if (this.items.length > 1) {
                for (var i = 0; i < this.items.length; i++) {
                    for (var j = this.items.length - 1; j > i; j--) {
                        if (this.items[i].productFeatureLocalCode === this.items[j].productFeatureLocalCode) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值不可重复！' });
                            return;
                        }
                        if (this.items[i].description === this.items[j].description) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值描述不可重复！' });
                            return;
                        }
                    }
                }
            }
            this.items.forEach(function (item) {
                if (item.productFeatureLocalCode === '' || item.description === '') {
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值或选项值描述不可为空！' });
                    return;
                }
                if (item.productFeatureLocalCode.match(/^[ ]+$/) || item.description.match(/^[ ]+$/)) {
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值或选项值描述不可为空！' });
                    return;
                }
                if (item.productFeatureLocalCode.replace(/[\u4E00-\u9FA5]/g, '**').length > 20) {
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值字段不可超过20字符' });
                    return;
                }
                if (item.description !== '') {
                    // 判断描述字段的位数
                    if (item.description.replace(/[\u4E00-\u9FA5]/g, '**').length > 60) {
                        num++;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值描述字段不可超60字符' });
                        return;
                    }
                    item.description = item.description.replace(/(^\s*)|(\s*$)/g, '');
                    item.productFeatureLocalCode = item.productFeatureLocalCode.replace(/(^\s*)|(\s*$)/g, '');
                    _this.itemvlaue12.push(item);
                }
            });
            this.caddBean.prdcFeaList = this.itemvlaue12;
            this.caddBean.valueType = '01';
        }
        if (this.vlaue1 === '02') {
            if (this.vlaue2 === '02') {
                var exp = /^(-)?\d+(\.\d+)?$/;
                // tslint:disable-next-line:forin
                for (var i in this.userform02.controls) {
                    this.userform02.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform02.controls) {
                    if (!this.userform02.controls[i].valid) {
                        return;
                    }
                }
                var tempText_max = this.max.replace(/\s/g, '');
                if (tempText_max === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为空' });
                    return;
                }
                if (!exp.test(tempText_max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值应为数字' });
                    return;
                }
                var tempText_min = this.min.replace(/\s/g, '');
                if (tempText_min === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能为空' });
                    return;
                }
                if (!exp.test(tempText_min)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值应为数字' });
                    return;
                }
                if (this.inc !== '' && this.inc !== undefined && !exp.test(this.inc)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长应为数字' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && !exp.test(this.def)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值应为数字' });
                    return;
                }
                var incNum = Number(this.inc);
                var minNum = Number(this.min);
                var maxNum = Number(this.max);
                var defNum = Number(this.def);
                if (this.inc !== '' && this.inc !== undefined && incNum > (maxNum - minNum)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不可大于最大值与最小值的差值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && minNum > defNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && defNum > maxNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                    return;
                }
                this.prdcFeaList = {
                    description: this.description,
                    min: this.min,
                    def: this.def,
                    inc: this.inc,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 === '03') {
                // tslint:disable-next-line:forin
                for (var i in this.userform03.controls) {
                    this.userform03.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform03.controls) {
                    if (!this.userform03.controls[i].valid) {
                        return;
                    }
                }
                var exp = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                var tempText_max = this.max.replace(/\s/g, '');
                if (tempText_max === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为空' });
                    return;
                }
                if (tempText_max === '0') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为0' });
                    return;
                }
                var tempText_min = this.min.replace(/\s/g, '');
                if (tempText_min === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能为空' });
                    return;
                }
                if (!exp.test(tempText_max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值应为非负数字' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && !exp.test(this.def)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值应为非负数字' });
                    return;
                }
                if (!exp.test(tempText_min)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值应为非负数字' });
                    return;
                }
                var exp1 = /^(-)?\d+(\.\d+)?$/;
                if (this.inc !== '' && this.inc !== undefined && !exp1.test(this.inc)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长应为数字' });
                    return;
                }
                var exp2 = /^[0-9]{0,15}(\.[0-9]{0,2})?$/;
                var minLength = this.min.indexOf('.');
                var maxLength = this.max.indexOf('.');
                var defLength = this.def.indexOf('.');
                if (tempText_min !== '0') {
                    if (minLength > 15 || (minLength < 0 && this.min.length > 15) || !exp2.test(this.min)) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值整数长度不能超过15位，小数位不能超过2位!' });
                        return;
                    }
                }
                if (maxLength > 15 || (maxLength < 0 && this.max.length > 15) || !exp2.test(this.max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值整数长度不能超过15位，小数位不能超过2位!' });
                    return;
                }
                var incNum = Number(this.inc);
                var minNum = Number(this.min);
                var maxNum = Number(this.max);
                if (this.inc !== '' && this.inc !== undefined && incNum > (maxNum - minNum)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不可大于最大值与最小值的差值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined) {
                    var tempText_def = this.def.replace(/\s/g, '');
                    if (tempText_def !== '0') {
                        if (defLength > 15 || (defLength < 0 && this.def.length > 15) || !exp2.test(this.def)) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值整数长度不能超过15位，小数位不能超过2位!' });
                            return;
                        }
                    }
                    var minNum_1 = Number(this.min);
                    var maxNum_1 = Number(this.max);
                    var defNum = Number(this.def);
                    if (minNum_1 > defNum) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                        return;
                    }
                    if (defNum > maxNum_1) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
                    inc: this.inc,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 === '04') {
                // // tslint:disable-next-line:forin
                // for (const i in this.userform04.controls) {
                //     this.userform04.controls[i].markAsDirty();
                // }
                // // 处理是否提交
                // for (const i in this.userform04.controls) {
                //     if (!this.userform04.controls[i].valid) {
                //         return;
                //     }
                // }
                this.min = this.transDateNW(this.transferedDateFrom);
                this.max = this.transDateNW(this.transferedDateTo);
                this.def = this.transDateNW(this.transferedDateDef);
                if (this.min === '' || this.min === undefined) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请填写最小值！' });
                    return;
                }
                if (this.max === '' || this.max === undefined) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请填写最大值！' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined) {
                    var minDate = Number(this.min);
                    var maxDate = Number(this.max);
                    var defDate = Number(this.def);
                    if (minDate > defDate) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                        return;
                    }
                    else if (defDate > maxDate) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                        return;
                    }
                }
                else {
                    this.def = null;
                }
                this.prdcFeaList = {
                    description: this.description,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 === '05') {
                for (var i in this.userform05.controls) {
                    this.userform05.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform05.controls) {
                    if (!this.userform05.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
                    def: this.def,
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 === '06') {
                // tslint:disable-next-line:forin
                for (var i in this.userform06.controls) {
                    this.userform06.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform06.controls) {
                    if (!this.userform06.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
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
        this.caddBean.productFeatureTypeId = this.productFeatureTypeId;
        this.caddBean.productFeatureTypeLocal = this.productFeatureTypeId;
        this.caddBean.productFeatureTypeCode = this.productFeatureTypeCode;
        this.caddBean.productFeatureTypeDes = this.productFeatureTypeDes;
        // 提交服务
        if (num === 0) {
            this.productManageHttpService.prdcFeaAndFeaTypeAdd(this.caddBean).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    _this.caddBean = new _bean_config_add_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentConfigADDBean"]();
                    _this.productFeatureTypeId = '';
                    _this.items = [{
                            description: '',
                            productFeatureLocalCode: ''
                        }];
                    _this.description = '';
                    _this.min = '';
                    _this.max = '';
                    _this.def = '';
                    _this.inc = '';
                    _this.transferedDateFrom = null;
                    _this.transferedDateTo = null;
                    _this.transferedDateDef = null;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '新增成功' });
                    _this.goBack();
                }
                else if (data.returnCode.code === '77777777') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
            });
        }
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
            data = '0' + data;
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
            selector: 'app-component-config-add',
            template: __webpack_require__(/*! ./component-config-add.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.html"),
            styles: [__webpack_require__(/*! ./component-config-add.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        })
        /**
         * 属性新增
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__["ProductManageHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ComponentConfigAddComponent);
    return ComponentConfigAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/bean/component-details.bean.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/bean/component-details.bean.ts ***!
  \*********************************************************************************************************************************/
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

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <!-- <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>属性编号:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{list.productFeatureTypeId}}</span>\r\n        </div> -->\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>属性编码:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{list.productFeatureTypeCode}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>属性名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{list.description}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>属性类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{list.featureType|codeValuePie:featureType}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>属性描述:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n            <span>{{list.productFeatureTypeDes}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>取值类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10  ui-mp-8\">\r\n            <span>{{valueTypeValue|codeValuePie:valueTypeAll}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='01'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero\">\r\n            <div class=\"ui-g padding_zero\" *ngFor=\"let item of items;let i = index\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <span>选项值:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <span>{{item.productFeatureLocalCode}}</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <span>选项值描述:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <span>{{item.description}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='02'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>步长:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{inc}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最小值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{min}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最大值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{max}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>默认值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{def}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='03'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>步长:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{inc}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最小值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{min}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最大值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{max}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>默认值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{def}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='04'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最小值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{min}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最大值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{max}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>默认值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{def}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='05'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>默认值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{def}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\" *ngIf=\"valueTypeValue=='06'\">\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最小值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{min}}</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n            <span>最大值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n            <span>{{max}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"goBack()\" type=\"button\" label=\"关闭\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .padding_zero {\n  padding: 0;\n  margin: 0; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host/deep/ .ui-calendar-new {\n  font-family: \"Microsoft YaHei\" !important;\n  min-width: 110px;\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LWNvbmZpZy9jb21wb25lbnQtY29uZmlnLWRldGFpbHMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXG1vZHVsZS1tYW5hZ2VcXGNvbXBvbmVudC1jb25maWdcXGNvbXBvbmVudC1jb25maWctZGV0YWlsc1xcY29tcG9uZW50LWNvbmZpZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFLakI7RUFDSSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLGFBQ0osRUFBQTtFQUNBO0lBQ0ksY0FDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLFdBQ0osRUFBQSxFQUFDOztBQUdMO0VBQ0kseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvbW9kdWxlLW1hbmFnZS9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctZGV0YWlscy9jb21wb25lbnQtY29uZmlnLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmdfemVybyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhci1uZXcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlhSGVpXCIgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ComponentConfigDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigDetailsComponent", function() { return ComponentConfigDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_component_details_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/component-details.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/bean/component-details.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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
    function ComponentConfigDetailsComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caddBean = new _bean_component_details_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentConfigDetailsBean"]();
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
        var pram = {
            productFeatureTypeId: this.inValue.productFeatureTypeId,
            productFeatureCategoryId: this.inValue.productFeatureCategoryId
        };
        this.productManageHttpService.productFeatureTypeDetail(pram).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
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
            selector: 'app-component-config-details',
            template: __webpack_require__(/*! ./component-config-details.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.html"),
            styles: [__webpack_require__(/*! ./component-config-details.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], ComponentConfigDetailsComponent);
    return ComponentConfigDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/bean/component-modify.bean.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/bean/component-modify.bean.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ComponentConfigADDBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigADDBean", function() { return ComponentConfigADDBean; });
var ComponentConfigADDBean = /** @class */ (function () {
    function ComponentConfigADDBean() {
        this.productFeatureTypeCode = ''; // 属性本地编码	String
        this.productFeatureTypeLocal = ''; // 属性值本地编码	String
    }
    return ComponentConfigADDBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <!-- <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation> 属性编号 </span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeId\" [(ngModel)]=\"productFeatureTypeId\" pInputText\r\n                    maxlength=\"10\" disabled>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeId'].valid&&userform.controls['productFeatureTypeId'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeId')\">属性编号不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform.hasError('required','productFeatureTypeId')\">请填写属性编号！</span>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性编码:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeCode\" [(ngModel)]=\"productFeatureTypeCode\"\r\n                    pInputText disabled>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeCode'].valid&&userform.controls['productFeatureTypeCode'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeCode')\">属性编码不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform.hasError('required','productFeatureTypeCode')\">请填写属性编码！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"description\" maxlength=\"20\" [(ngModel)]=\"caddBean.description\"\r\n                    pInputText [readonly]=\"usedFlag\">\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','description')\">属性名称不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform.hasError('required','description')\">请填写属性名称！</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>属性类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" formControlName=\"attribute_type\" [options]=\"featureType\" (onChange)=\"choseVlue1()\"\r\n                    [(ngModel)]=\"attribute_type\" [disabled]=\"usedFlag\"></p-dropdown>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['attribute_type'].valid&&userform.controls['attribute_type'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('required','attribute_type')\">请填写属性类型！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>属性描述:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" formControlName=\"productFeatureTypeDes\" [(ngModel)]=\"productFeatureTypeDes\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureTypeDes'].valid&&userform.controls['productFeatureTypeDes'].dirty\">\r\n                    <span *ngIf=\"userform.hasError('pattern','productFeatureTypeDes')\">属性描述不能输入非法字符！</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div *ngIf=\"vlaue1=='01'\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                    <span appValidation>取值类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" [disabled]=\"usedFlag\" [options]=\"valueType_List\" formControlName=\"valueType1\" [(ngModel)]=\"value_type\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"vlaue1=='02'\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right \">\r\n                    <span appValidation>取值类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" [disabled]=\"usedFlag\" [options]=\"valueType\" name=\"valueType2\" formControlName=\"valueType2\" (onChange)=\"choseVlue12()\"\r\n                        [(ngModel)]=\"value_type\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- 属性类型-添值型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='02'\">\r\n    <!-- 属性值类型-数值型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='02'\">\r\n        <form [formGroup]=\"userform02\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>步长:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" formControlName=\"inc\" [readonly]=\"usedFlag\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['inc'].valid&&userform02.controls['inc'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','inc')\">步长输入不合法！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['min'].valid&&userform02.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform02.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['max'].valid&&userform02.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform02.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform02.controls['def'].valid&&userform02.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform02.hasError('pattern','def')\">默认值输入不合法！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-金额型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='03'\">\r\n        <form [formGroup]=\"userform03\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>步长:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"inc\" type=\"text\" [(ngModel)]=\"inc\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['inc'].valid&&userform03.controls['inc'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','inc')\">步长输入不合法！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['min'].valid&&userform03.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform03.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['max'].valid&&userform03.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform03.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"def\" type=\"text\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform03.controls['def'].valid&&userform03.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform03.hasError('pattern','def')\">最大值输入不合法！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-日期型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='04'\">\r\n        <form [formGroup]=\"userform04\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" [disabled]=\"usedFlag\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\" [maxDate]=\"transferedDateTo\"\r\n                    [(ngModel)]=\"transferedDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n                    <span *ngIf=\"userform04.hasError('required','transferedDateFrom')\">请填写最小值！</span>\r\n                </div>\r\n                <!-- <span class=\"ui-message ui-messages-error\" *ngIf=\"!userform04.controls['transferedDateFrom'].valid&&userform04.controls['transferedDateFrom'].dirty\">\r\n                <div *ngIf=\"userform04.controls['transferedDateFrom'].errors.required\">\r\n                    <span class=\"fa ui-icon-error\"></span>\r\n                    请填写最小值！\r\n                </div>\r\n            </span> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" [disabled]=\"usedFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [minDate]=\"transferedDateFrom\"\r\n                    [(ngModel)]=\"transferedDateTo\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n                    <span *ngIf=\"userform04.hasError('required','transferedDateTo')\">请填写最大值！</span>\r\n                </div>\r\n                <!-- <span class=\"ui-message ui-messages-error\" *ngIf=\"!userform04.controls['transferedDateTo'].valid&&userform04.controls['transferedDateTo'].dirty\">\r\n                <div *ngIf=\"userform04.controls['transferedDateTo'].errors.required\">\r\n                    <span class=\"fa ui-icon-error\"></span>\r\n                    请填写最大值！\r\n                </div>\r\n            </span> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" [disabled]=\"usedFlag\" name=\"transferedDateDef\" formControlName=\"transferedDateDef\" [(ngModel)]=\"transferedDateDef\"\r\n                    [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n                    [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\"></p-calendar>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-文本型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='05'\">\r\n        <form [formGroup]=\"userform05\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>默认值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" [readonly]=\"usedFlag\" formControlName=\"def\" [(ngModel)]=\"def\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform05.controls['def'].valid&&userform05.controls['def'].dirty\">\r\n                    <span *ngIf=\"userform05.hasError('pattern','def')\">默认值不能输入非法字符！</span>\r\n                    <span *ngIf=\"userform05.hasError('required','def')\">请填写默认值！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- 属性值类型-数值后确定型 -->\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue2=='06'\">\r\n        <form [formGroup]=\"userform06\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最小值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"min\" type=\"text\" [(ngModel)]=\"min\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform06.controls['min'].valid&&userform06.controls['min'].dirty\">\r\n                    <span *ngIf=\"userform06.hasError('pattern','min')\">最小值输入不合法！</span>\r\n                    <span *ngIf=\"userform06.hasError('required','min')\">请填写最小值！</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span appValidation>最大值:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [readonly]=\"usedFlag\" formControlName=\"max\" type=\"text\" [(ngModel)]=\"max\" pInputText>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform06.controls['max'].valid&&userform06.controls['max'].dirty\">\r\n                    <span *ngIf=\"userform06.hasError('pattern','max')\">最大值输入不合法！</span>\r\n                    <span *ngIf=\"userform06.hasError('required','max')\">请填写最大值！</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- 属性类型-列表型 -->\r\n<div class=\"ui-g container\" *ngIf=\"vlaue1=='01'\">\r\n    <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items;let i = index\">\r\n        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <span appValidation>选项值:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input class=\"ui-inputtext-new\" [disabled]=\"usedFlag && !item.Flag\" type=\"text\" specialCharacters #productFeatureLocalCode=\"ngModel\" [(ngModel)]=\"item.productFeatureLocalCode\"\r\n                onkeyup=\"value=value.replace(/[^\\a-\\z\\A-\\z0-9\\u4E00-\\u9FA5\\.]/g,'')\" pInputText>\r\n            <div class=\"ui-message ui-messages-error\" *ngIf=\"productFeatureLocalCode.errors?.specialCharacters\">\r\n                <span class=\"fa ui-icon-error\"></span> 选项值不能输入非法字符\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <span appValidation>选项值描述:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input class=\"ui-inputtext-new\" [disabled]=\"usedFlag  && !item.Flag\" type=\"text\" specialCharacters #description=\"ngModel\" [(ngModel)]=\"item.description\" onkeyup=\"value=value.replace(/\\s/ig,'')\"\r\n                pInputText>\r\n            <div class=\"ui-message ui-messages-error\" *ngIf=\"description.errors?.specialCharacters\">\r\n                <span class=\"fa ui-icon-error\"></span> 选项值描述不能输入非法字符\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2\" *ngIf=\"i!=0  && !usedFlag || item.Flag\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"detelBtn(i)\" type=\"button\" label=\"-\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"addBtn()\" type=\"button\" label=\"+\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"seveClick()\" type=\"button\" label=\"确定\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"goBack()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n:host/deep/ input[pInputText] {\n  width: 60%; }\n\n:host/deep/ .ui-dropdown {\n  width: 60% !important; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px;\n  width: 90px !important; }\n\n:host/deep/ .ui-calendar-new {\n  font-family: \"Microsoft YaHei\" !important;\n  min-width: 110px;\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LWNvbmZpZy9jb21wb25lbnQtY29uZmlnLW1vZGlmeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcbW9kdWxlLW1hbmFnZVxcY29tcG9uZW50LWNvbmZpZ1xcY29tcG9uZW50LWNvbmZpZy1tb2RpZnlcXGNvbXBvbmVudC1jb25maWctbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBSzdCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0kseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvbW9kdWxlLW1hbmFnZS9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWctbW9kaWZ5L2NvbXBvbmVudC1jb25maWctbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gaW5wdXRbcElucHV0VGV4dF0ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+mAieaLqeaciOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ0PmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA5MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyLW5ldyB7XHJcbiAgICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIiAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ComponentConfigModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigModifyComponent", function() { return ComponentConfigModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_component_modify_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/component-modify.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/bean/component-modify.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



// import { FeatureType, ValueType } from './../../../constant/codeValue';



var ComponentConfigModifyComponent = /** @class */ (function () {
    function ComponentConfigModifyComponent(productManageHttpService, commfunc, fb) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        // 日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; // 讲英文转化为中文
        this.transferedDateFrom = new Date();
        this.transferedDateTo = new Date();
        this.transferedDateDef = new Date();
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // bean
        this.caddBean = new _bean_component_modify_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigADDBean"]();
        this.productFeatureTypeId = '';
        this.items = [{
                description: '',
                productFeatureLocalCode: ''
            }];
        // 提示信息
        this.msgs = [];
        this.featureType_list = [];
        this.valueType_list = [];
        this.productFeatureLocalCode = '';
        this.description = '';
        this.min = '';
        this.def = '';
        this.inc = '';
        this.max = '';
        this.itemvlaue12 = []; // 传值空数组转
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.transferedDateDef = null;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
            'attribute_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
            'productFeatureTypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
            'productFeatureTypeCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
            'valueType1': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            'productFeatureTypeDes': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
            'valueType2': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
        });
        this.userform02 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
        this.userform03 = fb.group({
            'inc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
        this.userform04 = fb.group({
            'transferedDateDef': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            'transferedDateFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]),
            'transferedDateTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]),
        });
        this.userform05 = fb.group({
            'def': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S+$/)]),
        });
        this.userform06 = fb.group({
            'min': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
            'max': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(.[0-9]{0,2})?$/)]),
        });
    }
    ComponentConfigModifyComponent.prototype.ngOnInit = function () {
        this.featureType = [
            { label: '请选择', value: '' },
        ];
        this.valueType = [
            { label: '请选择', value: '' },
        ];
        this.codeValues(); //调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
        this.valueType = this.code['ValueType'];
        this.queryDetails();
    };
    //码值
    ComponentConfigModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ComponentConfigModifyComponent.prototype.ngOnChanges = function () {
    };
    ComponentConfigModifyComponent.prototype.queryDetails = function () {
        var _this = this;
        var pram = {
            productFeatureTypeId: this.inValue.productFeatureTypeId,
            productFeatureCategoryId: this.inValue.productFeatureCategoryId
        };
        this.productManageHttpService.productFeatureTypeDetail(pram).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.usedFlag = data.result.usedFlag;
                _this.productFeatureCategoryId_calue = data.result.productFeatures[0].productFeatureCategoryId;
                _this.productFeatureTypeId = data.result.productFeatureTypeId;
                _this.productFeatureTypeCode = data.result.productFeatureTypeCode; //
                _this.productFeatureTypeDes = data.result.productFeatureTypeDes;
                // // 列表型回显
                if (data.result.featureType === '01') {
                    _this.valueType_List = [
                        { label: '列表型', value: '01' },
                    ];
                    _this.attribute_type = data.result.featureType; // 属性类型列表绑定
                    _this.vlaue1 = _this.attribute_type; // 列表型
                    _this.caddBean.description = data.result.description; // 属性名
                    _this.items = data.result.productFeatures; // 下面的数值
                }
                if (data.result.featureType === '02') {
                    _this.caddBean.description = data.result.description; // 属性名
                    _this.attribute_type = data.result.featureType; // 属性类型绑定
                    _this.vlaue1 = _this.attribute_type; // 列表型
                    _this.value_type = data.result.productFeatures[0].valueType; // 取值类型
                    _this.vlaue2 = _this.value_type; // 取值类型
                    _this.description = data.result.productFeatures[0].description;
                    if (data.result.featureType === '01') {
                        _this.items = data.result.productFeatures; // 下面的数值
                    }
                    else {
                        _this.inc = data.result.productFeatures[0].inc;
                        _this.min = data.result.productFeatures[0].min;
                        _this.max = data.result.productFeatures[0].max;
                        _this.def = data.result.productFeatures[0].def;
                        _this.productFeatureId = data.result.productFeatures[0].productFeatureId;
                        if (data.result.productFeatures[0].valueType === '04') {
                            _this.inc = data.result.productFeatures[0].inc;
                            _this.min = data.result.productFeatures[0].min;
                            _this.max = data.result.productFeatures[0].max;
                            _this.def = data.result.productFeatures[0].def;
                            _this.min = _this.min.substring(0, 4) + '/' + _this.min.substring(4, 6) + '/' + _this.min.substring(6, 8);
                            _this.transferedDateFrom = new Date(_this.min);
                            _this.max = _this.max.substring(0, 4) + '/' + _this.max.substring(4, 6) + '/' + _this.max.substring(6, 8);
                            _this.transferedDateTo = new Date(_this.max);
                            _this.def = _this.def.substring(0, 4) + '/' + _this.def.substring(4, 6) + '/' + _this.def.substring(6, 8);
                            _this.transferedDateDef = new Date(_this.def);
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //   "+"
    ComponentConfigModifyComponent.prototype.addBtn = function () {
        this.items.push({
            description: '',
            productFeatureLocalCode: '',
            Flag: true
        });
    };
    //  "-"
    ComponentConfigModifyComponent.prototype.detelBtn = function (i) {
        this.items.splice(i, 1);
    };
    //  属性类型
    ComponentConfigModifyComponent.prototype.choseVlue1 = function () {
        this.vlaue1 = this.attribute_type;
        if (this.vlaue1 === '01') {
            this.valueType_List = [
                { label: '列表型', value: '01' },
            ];
            this.userform.removeControl('valueType2');
            this.userform.addControl('valueType1', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        else if (this.vlaue1 === '02') {
            this.userform.removeControl('valueType1');
            this.userform.addControl('valueType2', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
    };
    // 取值类型
    ComponentConfigModifyComponent.prototype.choseVlue12 = function () {
        this.vlaue2 = this.value_type;
        if (this.min !== undefined && this.min !== '') {
            this.min = '';
        }
        if (this.max !== undefined && this.max !== '') {
            this.max = '';
        }
        if (this.inc !== undefined && this.inc !== '') {
            this.inc = '';
        }
        if (this.def !== undefined && this.def !== '') {
            this.def = '';
        }
    };
    //  取消
    ComponentConfigModifyComponent.prototype.goBack = function () {
        var parm = {
            display: false,
            code: 'cancelModel'
        };
        this.outValue.emit(parm);
    };
    // 确定
    ComponentConfigModifyComponent.prototype.seveClick = function () {
        var _this = this;
        // this.productFeatureTypeId = this.productFeatureTypeId.replace(/(^\s*)|(\s*$)/g, '');
        // let obj = this.productFeatureTypeId.slice(0, 3);
        // if (obj != 'PCA') {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号格式错误！' });
        //     return;
        // }
        // if (this.productFeatureTypeId.length != 10) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号格式错误！' });
        //     return;
        // }
        // if (this.productFeatureTypeId === undefined || this.productFeatureTypeId === '' && this.inc !== null) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '属性编号不能为空！' });
        //     return;
        // }
        if (this.inc !== undefined && this.inc !== '' && this.inc !== null) {
            if (this.inc.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不能超过18位' });
                return;
            }
        }
        if (this.min !== undefined && this.min !== '' && this.min !== null) {
            if (this.min.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能超过18位' });
                return;
            }
        }
        if (this.max !== undefined && this.max !== '' && this.max !== null) {
            if (this.max.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能超过18位' });
                return;
            }
        }
        if (this.def !== undefined && this.def !== '' && this.def !== null) {
            this.def = this.def.replace(/(^\s*)|(\s*$)/g, '');
            if (this.def.replace(/[\u4E00-\u9FA5]/g, '**').length > 18) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不能超过18位' });
                return;
            }
        }
        this.caddBean.description = this.caddBean.description.replace(/(^\s*)|(\s*$)/g, '');
        if (this.caddBean.description === undefined || this.caddBean.description === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称不能为空！' });
            return;
        }
        if (this.attribute_type === '02') {
            if (this.value_type === undefined || this.value_type === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '取值类型不可为空' });
                return;
            }
        }
        if (!(this.vlaue1 === '02' && this.vlaue2 === '04')) {
            if (Number(this.max) < Number(this.min)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值必须大于等于最小值' });
                return;
            }
        }
        // 验证
        // tslint:disable-next-line:forin
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        // 处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        // 提交
        //  判断属性类型    列表型
        var num = 0;
        if (this.vlaue1 === '01') {
            this.itemvlaue12 = [];
            if (this.items.length > 1) {
                for (var i = 0; i < this.items.length; i++) {
                    for (var j = this.items.length - 1; j > i; j--) {
                        if (this.items[i].productFeatureLocalCode === this.items[j].productFeatureLocalCode) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值不可重复！' });
                            return;
                        }
                        if (this.items[i].description === this.items[j].description) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值描述不可重复！' });
                            return;
                        }
                    }
                }
            }
            this.items.forEach(function (item) {
                if (item.productFeatureLocalCode === '' || item.description === '') {
                    console.log(item.productFeatureLocalCode, item.description);
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值或选项值描述不可为空！' });
                    return;
                }
                if (item.productFeatureLocalCode.match(/^[ ]+$/) || item.description.match(/^[ ]+$/)) {
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值或选项值描述不可为空！' });
                    return;
                }
                if (item.productFeatureLocalCode.replace(/[\u4E00-\u9FA5]/g, '**').length > 20) {
                    num++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值字段不可超过20字符' });
                    return;
                }
                if (item.description !== '') {
                    // 判断描述字段的位数
                    if (item.description.replace(/[\u4E00-\u9FA5]/g, '**').length > 60) {
                        num++;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '选项值描述字段不可超60字符' });
                        return;
                    }
                    item.description = item.description.replace(/(^\s*)|(\s*$)/g, '');
                    item.productFeatureLocalCode = item.productFeatureLocalCode.replace(/(^\s*)|(\s*$)/g, '');
                    _this.itemvlaue12.push(item);
                }
            });
            this.caddBean.prdcFeaList = this.itemvlaue12;
            this.caddBean.valueType = '01';
        }
        //  判断属性类型    填值型
        if (this.vlaue1 === '02') {
            //  判断取值类型    数值型
            if (this.vlaue2 === '02') {
                // tslint:disable-next-line:forin
                for (var i in this.userform02.controls) {
                    this.userform02.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform02.controls) {
                    if (!this.userform02.controls[i].valid) {
                        return;
                    }
                }
                var exp = /^(-)?\d+(\.\d+)?$/;
                var tempText_max = this.max.replace(/\s/g, '');
                if (tempText_max === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为空' });
                    return;
                }
                var tempText_min = this.min.replace(/\s/g, '');
                if (tempText_min === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能为空' });
                    return;
                }
                if (!exp.test(tempText_max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值应为数字' });
                    return;
                }
                if (!exp.test(tempText_min)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值应为数字' });
                    return;
                }
                if (this.inc !== '' && this.inc !== undefined && !exp.test(this.inc)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长应为数字' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && !exp.test(this.def)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值应为数字' });
                    return;
                }
                var incNum = Number(this.inc);
                var minNum = Number(this.min);
                var maxNum = Number(this.max);
                var defNum = Number(this.def);
                if (this.inc !== '' && this.inc !== undefined && incNum > (maxNum - minNum)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不可大于最大值与最小值的差值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && minNum > defNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && defNum > maxNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                    return;
                }
                this.prdcFeaList = {
                    description: this.description,
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
            //  判断取值类型    金额型
            if (this.vlaue2 === '03') {
                // tslint:disable-next-line:forin
                for (var i in this.userform03.controls) {
                    this.userform03.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform03.controls) {
                    if (!this.userform03.controls[i].valid) {
                        return;
                    }
                }
                var exp = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                var tempText_max = this.max.replace(/\s/g, '');
                if (tempText_max === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为空' });
                    return;
                }
                if (tempText_max === '0') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值不能为0' });
                    return;
                }
                var tempText_min = this.min.replace(/\s/g, '');
                if (tempText_min === '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值不能为空' });
                    return;
                }
                if (!exp.test(tempText_max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值应为非负数字' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined && !exp.test(this.def)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值应为非负数字' });
                    return;
                }
                if (!exp.test(tempText_min)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值应为非负数字' });
                    return;
                }
                var exp1 = /^(-)?\d+(\.\d+)?$/;
                if (this.inc !== '' && this.inc !== undefined && !exp1.test(this.inc)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长应为数字' });
                    return;
                }
                var exp2 = /^[0-9]{0,15}(\.[0-9]{0,2})?$/;
                var minLength = this.min.indexOf('.');
                var maxLength = this.max.indexOf('.');
                var defLength = this.def.indexOf('.');
                if (tempText_min !== '0') {
                    if (minLength > 15 || (minLength < 0 && this.min.length > 15) || !exp2.test(this.min)) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '最小值整数长度不能超过15位，小数位不能超过2位!' });
                        return;
                    }
                }
                if (maxLength > 15 || (maxLength < 0 && this.max.length > 15) || !exp2.test(this.max)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '最大值整数长度不能超过15位，小数位不能超过2位!' });
                    return;
                }
                var incNum = Number(this.inc);
                var minNum = Number(this.min);
                var maxNum = Number(this.max);
                if (this.inc !== '' && this.inc !== undefined && incNum > (maxNum - minNum)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '步长不可大于最大值与最小值的差值' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined) {
                    var tempText_def = this.def.replace(/\s/g, '');
                    if (tempText_def !== '0') {
                        if (defLength > 15 || (defLength < 0 && this.def.length > 15) || !exp2.test(this.def)) {
                            this.msgs = [];
                            this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值整数长度不能超过15位，小数位不能超过2位!' });
                            return;
                        }
                    }
                    var minNum_1 = Number(this.min);
                    var maxNum_1 = Number(this.max);
                    var defNum = Number(this.def);
                    if (minNum_1 > defNum) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                        return;
                    }
                    if (defNum > maxNum_1) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
                    inc: this.inc,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            //  判断取值类型    日期型
            if (this.vlaue2 === '04') {
                // // tslint:disable-next-line:forin
                // for (const i in this.userform04.controls) {
                //     this.userform04.controls[i].markAsDirty();
                // }
                // // 处理是否提交
                // for (const i in this.userform04.controls) {
                //     if (!this.userform04.controls[i].valid) {
                //         return;
                //     }
                // }
                this.min = this.transDateNW(this.transferedDateFrom);
                this.max = this.transDateNW(this.transferedDateTo);
                this.def = this.transDateNW(this.transferedDateDef);
                if (this.min === '' || this.min === undefined) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请填写最小值！' });
                    return;
                }
                if (this.max === '' || this.max === undefined) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请填写最大值！' });
                    return;
                }
                if (this.def !== '' && this.def !== undefined) {
                    var minDate = Number(this.min);
                    var maxDate = Number(this.max);
                    var defDate = Number(this.def);
                    if (minDate > defDate) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可小于最小值' });
                        return;
                    }
                    else if (defDate > maxDate) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '默认值不可大于最大值' });
                        return;
                    }
                }
                else {
                    this.def = null;
                }
                this.prdcFeaList = {
                    description: this.description,
                    min: this.min,
                    def: this.def,
                    max: this.max,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            //  判断取值类型    型
            if (this.vlaue2 === '05') {
                for (var i in this.userform05.controls) {
                    this.userform05.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform05.controls) {
                    if (!this.userform05.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
                    def: this.def,
                    productFeatureId: this.productFeatureId
                };
                this.itemvlaue12 = [];
                this.itemvlaue12.push(this.prdcFeaList);
                this.caddBean.prdcFeaList = this.itemvlaue12;
            }
            if (this.vlaue2 === '06') {
                // tslint:disable-next-line:forin
                for (var i in this.userform06.controls) {
                    this.userform06.controls[i].markAsDirty();
                }
                // 处理是否提交
                for (var i in this.userform06.controls) {
                    if (!this.userform06.controls[i].valid) {
                        return;
                    }
                }
                this.prdcFeaList = {
                    description: this.description,
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
        this.caddBean.productFeatureCategoryId = this.productFeatureCategoryId_calue; // 部件ID
        this.caddBean.productFeatureTypeId = this.productFeatureTypeId; // 属性id
        this.caddBean.productFeatureTypeCode = this.productFeatureTypeCode;
        this.caddBean.productFeatureTypeDes = this.productFeatureTypeDes; // 属性描述
        this.caddBean.productFeatureTypeLocal = this.productFeatureTypeId;
        this.caddBean.featureType = this.attribute_type; //属性类型
        // 提交服务
        if (num === 0) {
            this.productManageHttpService.prdcFeaAndFeaTypeUpd(this.caddBean).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    var parm = {
                        display: false,
                    };
                    _this.outValue.emit(parm);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
            });
        }
    };
    //   日期
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
            data = '0' + data;
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
            selector: 'app-component-config-modify',
            template: __webpack_require__(/*! ./component-config-modify.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.html"),
            styles: [__webpack_require__(/*! ./component-config-modify.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        /**
         * 属性修改
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ComponentConfigModifyComponent);
    return ComponentConfigModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>组件管理</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\">\r\n    <div class=\"ui-g-12 ui-md-12 margin\" id=\"KK\">\r\n      <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"></p-steps>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-12 box\" *ngIf=\"vlaue1=='0'\">\r\n        <form [formGroup]=\"userform\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-grid-col-2 item_label\" style=\"line-hight:35px;\">\r\n              <span appValidation>组件编号:</span>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <input type=\"text\" name=\"productFeatureCategoryIdHead\" readonly pInputText class=\"ui-inputtext-new\" style=\"width:13%;text-align: center;\"\r\n                [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"productFeatureCategoryIdHead\" />\r\n              <input type=\"text\" name=\"productFeatureCategoryId\" pInputText class=\"ui-inputtext-new\" style=\"width:27%; text-align: center;\"\r\n                maxlength=\"8\" formControlName=\"productFeatureCategoryId\" [(ngModel)]=\"productFeatureCategoryId\" />\r\n              <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productFeatureCategoryId'].valid&&userform.controls['productFeatureCategoryId'].dirty\">\r\n                <span [hidden]=\"!userform.hasError('required','productFeatureCategoryId')\"> 请填写组件编号！</span>\r\n                <span [hidden]=\"!userform.hasError('pattern','productFeatureCategoryId')\"> 组件编号只可输入数字！</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-grid-col-2 item_label\" style=\"line-hight:35px;\">\r\n              <span appValidation>组件名称:</span>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"componentConfigBean.description\" pInputText\r\n                class=\"ui-inputtext-new\" style=\"width:50%\">\r\n              <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n                <span [hidden]=\"!userform.hasError('pattern','description')\"> 组件名称输入不合法！</span>\r\n                <span [hidden]=\"!userform.hasError('required','description')\"> 请填写组件名称！</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-grid-col-2 item_label\" style=\"line-hight:35px;\">\r\n              <span>组件描述:</span>\r\n            </div>\r\n            <div class=\"ui-grid-col-10\">\r\n              <textarea name=\"parentCategoryId\" formControlName=\"parentCategoryId\" [(ngModel)]=\"componentConfigBean.parentCategoryId\" pInputTextarea\r\n                class=\"ui-inputtextarea-new\" style=\"width:30%\"></textarea>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box\" *ngIf=\"vlaue1=='1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-grid-row form_item\">\r\n            <div class=\"ui-grid-col-6\">\r\n              <div class=\"ui-grid-col-3 form_label\">\r\n                <span>组件编码:</span>\r\n              </div>\r\n              <div class=\"ui-grid-col-3\">\r\n                <span>{{accept_value.productFeatureCategoryId}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <div class=\"ui-grid-col-3 form_label\">\r\n                <span>组件名称:</span>\r\n              </div>\r\n              <div class=\"ui-grid-col-3\">\r\n                <span>{{accept_value.description}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-row form_item\">\r\n            <div class=\"ui-grid-col-6\">\r\n              <div class=\"ui-grid-col-3 form_label\">\r\n                <span>组件描述:</span>\r\n              </div>\r\n              <div class=\"ui-grid-col-9\">\r\n                <span>{{accept_value.parentCategoryId}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"addAttribute()\" type=\"button\" label=\"新增\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <u-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <!-- <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n              </p-column> -->\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeCode\" header=\"属性编码\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeDes\" header=\"属性描述\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                  <span *ngIf=\"item.productFeatureTypeDes !=null && item.productFeatureTypeDes.length > 15\">{{item.productFeatureTypeDes.substring(0,15)}}...</span>\r\n                  <span *ngIf=\"item.productFeatureTypeDes != null && item.productFeatureTypeDes.length <= 15\">{{item.productFeatureTypeDes}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>取值范围</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.min}}</span>\r\n                  <span *ngIf=\"item.featureValue==2\">--</span>\r\n                  <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                  <span *ngIf=\"item.featureValue==1\">{{item.productFeatureLocalCode}}</span>\r\n                  <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'25%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                  <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailsClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n                  <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" (click)=\"modifyAttribute(item)\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n                  <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <div style=\"float:right;margin:10px 10px\">\r\n              <u-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='1'\">\r\n      <!-- <div class=\"ui-btn1-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"next()\" type=\"button\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n      </div> -->\r\n      <button pButton (click)=\"next()\" [disabled]='iscompele' type=\"button\" label=\"下一步\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"confirm()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-component-config-add *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"addCall($event)\"></app-component-config-add>\r\n    <app-component-config-modify *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"modifyCall($event)\"></app-component-config-modify>\r\n    <app-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-component-config-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .box {\n  padding: 40px 0 60px 0;\n  background-color: #fff; }\n\n.container .red {\n  background-color: red; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.overflow {\n  height: 550px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 90%; }\n\n:host/deep/ .ui-steps .ui-steps-item {\n  background-color: #fff; }\n\n:host/deep/ .form_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host/deep/ .item_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-bottom: 15px;\n  padding-top: 4px; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LWNvbmZpZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcbW9kdWxlLW1hbmFnZVxcY29tcG9uZW50LWNvbmZpZ1xcY29tcG9uZW50LWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtFQVFRLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBQTs7QUFUOUI7RUFZUSxxQkFBcUIsRUFBQTs7QUFaN0I7RUFlUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxzQkFBc0IsRUFBQTs7QUFrQjFCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUdqQztFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvbW9kdWxlLW1hbmFnZS9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwIDYwcHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuZm9ybV9pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3ZlcmZsb3cge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMgLnVpLXN0ZXBzLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4vLyAgICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWluLWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuLy8gICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIH1cclxuLy8gICAgICA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbi8vICAgICAgICAgd2lkdGg6IDY1MHB4IWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuOmhvc3QvZGVlcC8gLmZvcm1fbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLml0ZW1fbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IC5hY3RpdmUge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComponentConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigComponent", function() { return ComponentConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_component_config_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/component-config.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-config/bean/component-config.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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
    function ComponentConfigComponent(productManageHttpService, confirmationService, router, fb, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.fb = fb;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //列表无数据
        // bean
        this.componentConfigBean = new _bean_component_config_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentConfigBean"]();
        //修改的参数
        this.updateValue = [];
        this.productFeatureCategoryIdHead = 'PC';
        this.display = false;
        this.activeIndex = 0;
        //提示信息
        this.msgs = [];
        this.accept_value = [];
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
        this.cars_2List = []; //列表
        this.iscompele = false;
        this.userform = fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'productFeatureCategoryId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            parentCategoryId: (''),
        });
        this.codeValues(); // 调用方法，获取全部码值
        this.featureType = this.code['FeatureType'];
    }
    ComponentConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vlaue1 = 0;
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
            }];
        this.getSeqNo();
    };
    //码值
    ComponentConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 获取默认编码
    ComponentConfigComponent.prototype.getSeqNo = function () {
        var _this = this;
        var parms = {
            seqType: 'PRODUCT_FEATURE_CATEGORY',
        };
        this.productManageHttpService.getSeqNo(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productFeatureCategoryId = data.seqNo;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //上一步
    ComponentConfigComponent.prototype.prev = function () {
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
            this.vlaue2 = this.ceshi;
        }
    };
    //下一步
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
            this.iscompele = true;
            var productFeatureCategoryId = this.productFeatureCategoryId.split('');
            if (productFeatureCategoryId.length == 8) {
                this.componentConfigBean.productFeatureCategoryId = this.productFeatureCategoryIdHead + this.productFeatureCategoryId;
                this.productManageHttpService.addFeatureCategory(this.componentConfigBean).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.accept_value = data;
                        _this.activeIndex = _this.activeIndex + 1;
                        _this.vlaue1 = _this.activeIndex;
                        _this.vlaue2 = _this.ceshi;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.iscompele = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.iscompele = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                });
            }
            else {
                this.iscompele = false;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件编号为PC+8位数字！' });
            }
        }
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i <= this.activeIndex) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex + 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
    };
    ComponentConfigComponent.prototype.confirm = function () {
        this.router.navigate(['/pages/tzb/product-manage/module-manage/component-view']);
    };
    //查询
    ComponentConfigComponent.prototype.attr_query = function () {
        var _this = this;
        var param = {
            productFeatureCategoryId: this.accept_value.productFeatureCategoryId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.productManageHttpService.prodFeatureCategoryDetails(param).subscribe(function (data) {
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
                // this.cars_2 = data.resultList;
                _this.cars_2List = data.resultList;
                if (data.resultList.length > 0) {
                    _this.total = data.resultList.length;
                }
                else {
                    _this.total = 0;
                }
                var currentPages1 = _this.pageNum * 10;
                ;
                if (_this.cars_2List.length > currentPages1) {
                    var currentPages2 = currentPages1 - 10;
                    _this.cars_2 = _this.cars_2List.slice(currentPages2, currentPages1);
                }
                else {
                    var currentPages2 = currentPages1 - 10;
                    _this.cars_2 = _this.cars_2List.slice(currentPages2);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
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
        item.productFeatureCategoryId = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '修改';
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改组件回掉
    ComponentConfigComponent.prototype.modifyCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功!' });
            this.display = param.display;
        }
        this.attr_query();
    };
    //组件详情
    ComponentConfigComponent.prototype.detailsClick = function (item) {
        item.productFeatureCategoryId = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item;
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
                _this.productManageHttpService.prdcFeaAndFeaTypeDel(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.attr_query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
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
        // this.pageNum = 1;
    };
    ComponentConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-config',
            template: __webpack_require__(/*! ./component-config.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.html"),
            styles: [__webpack_require__(/*! ./component-config.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]]
        })
        /**
         * 组件新增
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]])
    ], ComponentConfigComponent);
    return ComponentConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-12\">\r\n            <ul class=\"ui-breadcrumb-new\">\r\n                <li class=\"active\">\r\n                    <a>\r\n                        <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n                </li>\r\n                <li>\r\n                    <a>产品管理</a>\r\n                </li>\r\n                <li>\r\n                    <a>组件管理</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 module\">\r\n        <div class=\"ui-g-12 ui-md-12 margin\" id=\"KK\">\r\n            <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 form_item\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue1=='0'\">\r\n                <form [formGroup]=\"userform\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-grid-col-2 item_label\">\r\n                            <span appValidation>组件编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-4\">\r\n                            <input type=\"text\" name=\"productFeatureCategoryId\" disabled formControlName=\"productFeatureCategoryId\" [(ngModel)]=\"productFeatureCategoryId\"\r\n                                pInputText class=\"ui-inputtext-new\" style=\"width:42%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-grid-col-2 item_label\">\r\n                            <span appValidation>组件名称:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-4\">\r\n                            <input type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"componentConfigBean.description\" pInputText\r\n                                class=\"ui-inputtext-new\" style=\"width:42%\">\r\n                            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n                                <span [hidden]=\"!userform.hasError('pattern','description')\"> 组件名称输入不合法！</span>\r\n                            <span [hidden]=\"!userform.hasError('required','description')\"> 请填写组件名称！</span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-grid-col-2 item_label\">\r\n                            <span>组件描述:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-10\">\r\n                            <textarea name=\"parentCategoryId\" formControlName=\"parentCategoryId\" [(ngModel)]=\"componentConfigBean.parentCategoryId\" pInputTextarea\r\n                                class=\"ui-inputtextarea-new\" style=\"width:30%\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <!-- <div class=\"ui-btn1-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton (click)=\"next()\" type=\"button\" [disabled]=\"!userform.valid || iscompele\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n                        </div> -->\r\n                        <button pButton (click)=\"next()\" [disabled]='!userform.valid || iscompele' type=\"button\" label=\"下一步\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n                    </div>\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn2-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton (click)=\"cancle()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue1=='1'\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-6\">\r\n                                <div class=\"ui-grid-col-3 form_label\">\r\n                                    <span>组件编码:</span>\r\n                                </div>\r\n                                <div class=\"ui-grid-col-3\">\r\n                                    <span>{{accept_value.productFeatureCategoryId}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-6\">\r\n                                <div class=\"ui-grid-col-3 form_label\">\r\n                                    <span>组件名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-grid-col-3\">\r\n                                    <span>{{accept_value.description}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-6\">\r\n                                <div class=\"ui-grid-col-3 form_label\">\r\n                                    <span>组件描述:</span>\r\n                                </div>\r\n                                <div class=\"ui-grid-col-9\">\r\n                                    <span>{{accept_value.parentCategoryId}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n                            <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                    <p class=\"place-div first\"></p>\r\n                                    <p class=\"place-div last\"></p>\r\n                                    <button pButton (click)=\"addAttribute()\" type=\"button\" label=\"新增\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                                <!-- <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column> -->\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeCode\" header=\"属性编码\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeDes\" header=\"属性描述\">\r\n                                    <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.productFeatureTypeDes !=null && item.productFeatureTypeDes.length > 15\">{{item.productFeatureTypeDes.substring(0,15)}}...</span>\r\n                                        <span *ngIf=\"item.productFeatureTypeDes != null && item.productFeatureTypeDes.length <= 15\">{{item.productFeatureTypeDes}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureValue==2\">{{item.min}}</span>\r\n                                        <span *ngIf=\"item.featureValue==2\">--</span>\r\n                                        <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureValue==1\">{{item.productFeatureLocalCode}}</span>\r\n                                        <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>操作</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                                        <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailsClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n                                        <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" (click)=\"modifyAttribute(item)\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n                                        <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                            <div style=\"float:right;margin:10px 10px\">\r\n                                <u-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn2-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton (click)=\"cancle()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <app-component-config-add *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"addCall($event)\"></app-component-config-add>\r\n        <app-component-config-modify *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"modifyCall($event)\"></app-component-config-modify>\r\n        <app-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-component-config-details>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .box {\n  padding: 40px 0 40px 0;\n  background-color: #ffffff;\n  margin-left: 16%; }\n\n.container .border {\n  border: 1px solid #ddd; }\n\n.container .red {\n  background-color: red; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 90%; }\n\n:host/deep/ .ui-steps .ui-steps-item {\n  background-color: #fafafa; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 85%; }\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 650px !important; } }\n\n.overflow {\n  height: 500px;\n  overflow: scroll;\n  overflow-x: hidden; }\n\ntextarea {\n  resize: none !important; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px;\n  width: 100px !important; }\n\ninput {\n  width: 70%; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ .form_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host/deep/ .item_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-bottom: 15px;\n  padding-top: 4px; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LW1vZGlmeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcbW9kdWxlLW1hbmFnZVxcY29tcG9uZW50LW1vZGlmeVxcY29tcG9uZW50LW1vZGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtJQU9ZLGlCQUFpQixFQUFBOztBQVA3QjtFQVdRLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBYnhCO0VBZ0JRLHNCQUFzQixFQUFBOztBQWhCOUI7RUFtQlEscUJBQXFCLEVBQUE7O0FBbkI3QjtFQXNCUSx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxVQUFVLEVBQUE7O0FBR2I7RUFDRyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0csdUJBQXNCLEVBQUEsRUFDekI7O0FBR0w7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHVCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksVUFBVSxFQUFBOztBQUdiO0VBQ0csOEJBQThCLEVBQUE7O0FBR2pDO0VBQ0csOEJBQThCLEVBQUE7O0FBR2pDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3RCO0VBQ0csaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUdyQztFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvbW9kdWxlLW1hbmFnZS9jb21wb25lbnQtbW9kaWZ5L2NvbXBvbmVudC1tb2RpZnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvcmRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzIC51aS1zdGVwcy1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1MHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJmbG93IHtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4OyAvLyB6LWluZGV4OiAxMzAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5idD5idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC5mb3JtX2xhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLml0ZW1fbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComponentModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModifyComponent", function() { return ComponentModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _component_config_bean_component_config_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../component-config/bean/component-config.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-config/bean/component-config.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // 删除



var ComponentModifyComponent = /** @class */ (function () {
    function ComponentModifyComponent(productManageHttpService, confirmationService, router, fb, routers) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.fb = fb;
        this.routers = routers;
        // bean
        this.componentConfigBean = new _component_config_bean_component_config_bean__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigBean"]();
        // 修改的参数
        this.updateValue = [];
        this.select_1 = []; // 默认下拉
        this.select_2 = []; // 默认下拉
        // 头部标题
        this.all_title = '组件修改';
        this.display = false;
        this.cars_2_IsNotEmpty = false;
        this.activeIndex = 0;
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
        // 提示信息
        this.msgs = [];
        this.accept_value = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //列表无数据
        this.cars_2List = []; //列表
        this.iscompele = false;
        this.userform = fb.group({
            formControlName: [''],
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'parentCategoryId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', []),
            'productFeatureCategoryId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', []),
        });
    }
    ComponentModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routers.params.subscribe(function (data) {
            _this.productFeatureCategoryId = data.productFeatureCategoryId;
            if (data.description === undefined) {
                _this.componentConfigBean.description = '';
            }
            else {
                _this.componentConfigBean.description = data.description;
            }
            if (data.parentCategoryId === undefined) {
                _this.componentConfigBean.parentCategoryId = '';
            }
            else {
                _this.componentConfigBean.parentCategoryId = data.parentCategoryId;
            }
            _this.accept_value.productFeatureCategoryId = data.productFeatureCategoryId;
        });
        this.queryEvent();
        this.vlaue1 = 0;
        this.select_2 = [
            { label: '请选择', value: ' ' },
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
    ComponentModifyComponent.prototype.queryEvent = function () {
        var _this = this;
        var param = { productFeatureCategoryId: this.productFeatureCategoryId };
        this.productManageHttpService.prodFeatureCategoryDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.resultList.forEach(function (item) {
                    if (JSON.stringify(item) === '{}') {
                        _this.cars_2_IsNotEmpty = false;
                    }
                    else {
                        _this.cars_2_IsNotEmpty = true;
                    }
                    if (item.min == null) {
                        item.featureValue = 1;
                    }
                    if (item.min != null) {
                        item.featureValue = 2;
                    }
                });
                _this.cars_2 = data.resultList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
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
        if (this.activeIndex === 0) {
            var Dscliste = this.componentConfigBean.description.split('');
            if (Dscliste.length > 20) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件名称不能超过20位' });
                return;
            }
            this.componentConfigBean.description = this.componentConfigBean.description.replace(/(^\s*)|(\s*$)/g, '');
            if (this.componentConfigBean.description === undefined || this.componentConfigBean.description === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件名称不能为空！' });
                return;
            }
            if (undefined !== this.componentConfigBean.parentCategoryId) {
                this.componentConfigBean.parentCategoryId = this.componentConfigBean.parentCategoryId.replace(/(^\s*)|(\s*$)/g, '');
                if (this.componentConfigBean.parentCategoryId.replace(/[\u4E00-\u9FA5]/g, '**').length > 500) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '描述字段不能超过500位' });
                    return;
                }
            }
            this.iscompele = true;
            //   修改组件回显的内容
            var parm_1 = {
                productFeatureCategoryId: this.productFeatureCategoryId,
                parentCategoryId: this.componentConfigBean.parentCategoryId,
                description: this.componentConfigBean.description,
            };
            // 修改组件
            // const redo_name = {
            //     categoryId: this.productFeatureCategoryId,
            //     categoryName: this.componentConfigBean.description,
            //     productCategoryTypeId: 'zujian'
            // };
            // this.productManageHttpService.queryIdAndNameIsNotExist(redo_name).subscribe(data => {
            //     if (data.returnCode.code == "success") {
            //         if (data.isOrNot === 'not') {
            // 提交服务 
            // tslint:disable-next-line:no-shadowed-variable
            this.productManageHttpService.updateFeatureCategory(parm_1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    // this.accept_value = data;
                    _this.accept_value = parm_1;
                    _this.activeIndex = _this.activeIndex + 1;
                    _this.vlaue1 = _this.activeIndex;
                    _this.vlaue2 = _this.ceshi;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功' });
                    _this.attr_query();
                }
                else {
                    _this.iscompele = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage }); // data.Header.RetMsg
                }
            }, function (error) {
                _this.iscompele = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
            });
            //         } else {
            //             this.msgs = [];
            //             this.msgs.push({ severity: 'error', summary: '提示', detail: '修改组件名称重复' });
            //         }
            //     } else {
            //         this.msgs = [];
            //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            //     }
            // }, error => {
            //     this.msgs = [];
            //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用验证重名服务错误' });
            // });
        }
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i <= this.activeIndex) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex + 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
    };
    // 返回
    ComponentModifyComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    //  取消
    ComponentModifyComponent.prototype.cancle = function () {
        this.router.navigate(['/pages/tzb/product-manage/module-manage/component-view']);
    };
    //组件详情
    ComponentModifyComponent.prototype.detailsClick = function (item) {
        item.productFeatureCategoryId = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item;
    };
    //详情回掉
    ComponentModifyComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    // 完成
    ComponentModifyComponent.prototype.confirm = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '组件配置修改完成' });
        var this_ = this;
        setTimeout(function () {
            this_.router.navigate(['/pages/tzb/product-manage/module-manage/component-view']);
        }, 500);
    };
    // 查询
    ComponentModifyComponent.prototype.attr_query = function () {
        var _this = this;
        var parm = {
            productFeatureCategoryId: this.accept_value.productFeatureCategoryId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.productManageHttpService.prodFeatureCategoryDetails(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
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
                // this.cars_2 = data.resultList;
                _this.cars_2List = data.resultList;
                if (data.resultList.length > 0) {
                    _this.total = data.resultList.length;
                }
                else {
                    _this.total = 0;
                }
                var currentPages1 = _this.pageNum * 10;
                ;
                if (_this.cars_2List.length > currentPages1) {
                    var currentPages2 = currentPages1 - 10;
                    _this.cars_2 = _this.cars_2List.slice(currentPages2, currentPages1);
                }
                else {
                    var currentPages2 = currentPages1 - 10;
                    _this.cars_2 = _this.cars_2List.slice(currentPages2);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    // 新增组件
    ComponentModifyComponent.prototype.addAttribute = function (item) {
        this.updateValue = this.accept_value.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '新增';
        this.showModel = '1';
    };
    // 新增组件回掉
    ComponentModifyComponent.prototype.addCall = function (param) {
        if (param.code === 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '新增属性成功' });
            this.display = param.display;
        }
        this.attr_query();
    };
    // 修改组件
    ComponentModifyComponent.prototype.modifyAttribute = function (item) {
        this.display = true;
        this.headerTitle = '修改';
        this.showModel = '2';
        this.updateValue = {
            productFeatureTypeId: item.productFeatureTypeId,
            productFeatureCategoryId: this.accept_value.productFeatureCategoryId,
        };
    };
    // 修改组件回掉
    ComponentModifyComponent.prototype.modifyCall = function (param) {
        if (param.code === 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '修改属性成功' });
            this.display = param.display;
        }
        this.attr_query();
    };
    // 删除组件
    ComponentModifyComponent.prototype.deleteClick = function (item) {
        var _this = this;
        var param = {
            productFeatureTypeId: item.productFeatureTypeId,
            productFeatureCategoryId: this.accept_value.productFeatureCategoryId
        };
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.productManageHttpService.prdcFeaAndFeaTypeDel(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                        _this.attr_query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage }); // data.Header.RetMsg
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '删除失败' });
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
        this.attr_query();
        // this.pageNum = 1;
    };
    ComponentModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-modify',
            template: __webpack_require__(/*! ./component-modify.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.html"),
            styles: [__webpack_require__(/*! ./component-modify.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ComponentModifyComponent);
    return ComponentModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/bean/component-view.bean.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/bean/component-view.bean.ts ***!
  \***************************************************************************************************/
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

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>组件编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.productFeatureCategoryId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>组件名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.description}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>组件描述:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n                <span>{{list.parentCategoryId}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12 heightO border-dashed\"></div>\r\n            <div class=\"ui-g-12 ui-md-12 heightO\"></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>创建人:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.createdByUserLogin}}</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>创建时间:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.createdStamp}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>最后修改人:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.lastModifiedByUserLogin}}</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                <span>最后修改时间:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                <span>{{list.lastUpdatedStamp}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 heightO border-dashed\"></div>\r\n    <div class=\"ui-g-12 ui-md-12 heightO\"></div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <u-dataTable [value]=\"listValue\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n            <!-- <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n            </p-column> -->\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeCode\" header=\"属性编码\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeDes\" header=\"属性描述\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.productFeatureTypeDes !=null && item.productFeatureTypeDes.length > 15\">{{item.productFeatureTypeDes.substring(0,15)}}...</span>\r\n                    <span *ngIf=\"item.productFeatureTypeDes != null && item.productFeatureTypeDes.length <= 15\">{{item.productFeatureTypeDes}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column [style]=\"{'text-align':'center'}\" header=\"取值范围\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.featureValue==2\">{{item.min}}</span>\r\n                    <span *ngIf=\"item.featureValue==2\">--</span>\r\n                    <span *ngIf=\"item.featureValue==2\">{{item.max}}</span>\r\n                    <span *ngIf=\"item.featureValue==1\">{{item.description}}</span>\r\n                    <span *ngIf=\"item.featureValue==3\">{{item.def}}</span>\r\n                </ng-template>\r\n            </p-column> -->\r\n            <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailsClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n            <div style=\"float:right;padding-top:20px;\">\r\n                <u-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" label=\"关闭\" (click)=\"closeClick()\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 弹出框 -->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" width=\"700\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <app-component-config-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-component-config-details>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .heightO {\n  height: 1rem; }\n\n.container .border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.overflow {\n  height: 450px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LXZpZXcvY29tcG9uZW50LXZpZXctZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcbW9kdWxlLW1hbmFnZVxcY29tcG9uZW50LXZpZXdcXGNvbXBvbmVudC12aWV3LWRldGFpbHNcXGNvbXBvbmVudC12aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxZQUFZLEVBQUE7O0FBUnBCO0VBV1EsOEJBQThCLEVBQUE7O0FBSXRDO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUNKLEVBQUE7RUFDQTtJQUNJLGNBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxXQUNKLEVBQUEsRUFBQzs7QUFHTDtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LXZpZXcvY29tcG9uZW50LXZpZXctZGV0YWlscy9jb21wb25lbnQtdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5oZWlnaHRPIHtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLWRhc2hlZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3ZlcmZsb3cge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ComponentViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewDetailsComponent", function() { return ComponentViewDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/component-view.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-view/bean/component-view.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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
    function ComponentViewDetailsComponent(productManageHttpService) {
        this.productManageHttpService = productManageHttpService;
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
        this.listValueList = [];
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
        this.productManageHttpService.prodFeatureCategoryDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                // this.total = data.total;
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
                // this.listValue = data.resultList;
                _this.listValueList = data.resultList;
                if (data.resultList.length > 0) {
                    _this.total = data.resultList.length;
                }
                else {
                    _this.total = 0;
                }
                var currentPages1 = _this.pageNum * 10;
                ;
                if (_this.listValueList.length > currentPages1) {
                    var currentPages2 = currentPages1 - 10;
                    _this.listValue = _this.listValueList.slice(currentPages2, currentPages1);
                }
                else {
                    var currentPages2 = currentPages1 - 10;
                    _this.listValue = _this.listValueList.slice(currentPages2);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
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
        // this.pageNum = 1;
    };
    //组件详情
    ComponentViewDetailsComponent.prototype.detailsClick = function (item) {
        item.productFeatureCategoryId = this.inValue.productFeatureCategoryId;
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item;
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
            selector: 'app-component-view-details',
            template: __webpack_require__(/*! ./component-view-details.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.html"),
            styles: [__webpack_require__(/*! ./component-view-details.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"]])
    ], ComponentViewDetailsComponent);
    return ComponentViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventure\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-12\">\r\n        <ul class=\"ui-breadcrumb-new\">\r\n          <li class=\"active\">\r\n            <a>\r\n              <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n          </li>\r\n          <li>\r\n            <a>产品管理</a>\r\n          </li>\r\n          <li>\r\n            <a>组件管理</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"filter-div\">\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            组件编号:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"componentViewBean.productFeatureCategoryId\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            组件名称:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"componentViewBean.description\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            属性名称:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"componentViewBean.productFeatureName\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n            </div>\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-div\" style=\"background-color:#fff;height:500px;\">\r\n      <div class=\"ui-g-12 ui-md-12 text_right\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton type=\"button\" [routerLink]=\"['/pages/tzb/product-manage/module-manage/component-config']\" style=\"width: 60px;\"\r\n              label=\"新增\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <u-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column header=\"序号\" field=\"\" [style]=\"{'width':'15%'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\"></p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"description\" header=\"组件名称\"></p-column>\r\n        <p-column field=\"productFeatureDes\" header=\"属性描述\" [style]=\"{'text-align':'center','width':'25%'}\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"item.productFeatureDes !=null && item.productFeatureDes.length > 15\">{{item.productFeatureDes.substring(0,15)}}...</span>\r\n            <span *ngIf=\"item.productFeatureDes != null && item.productFeatureDes.length <= 15\">{{item.productFeatureDes}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'width':'20%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            操作\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n            <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailsClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n            <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" [routerLink]=\"['/pages/tzb/product-manage/module-manage/component-modify',item]\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n            <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n        <div style=\"float:right;padding-top:100px;\">\r\n          <u-paginator [first]=\"first\" rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-component-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-component-view-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text_center {\n  text-align: center; }\n\n.text_right {\n  text-align: right; }\n\n.ecolor {\n  background-color: #ebebeb; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.table-div {\n  margin-top: 12px; }\n\n.adventure {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.adventure .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 550px !important; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-height: 600px !important;\n  height: 60% !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL21vZHVsZS1tYW5hZ2UvY29tcG9uZW50LXZpZXcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXG1vZHVsZS1tYW5hZ2VcXGNvbXBvbmVudC12aWV3XFxjb21wb25lbnQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBRmY7SUFJUSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFJdkI7RUFDSztJQUNHLHVCQUFzQixFQUFBLEVBQ3pCOztBQUdKO0VBQ0csdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHekI7RUFDRyw4QkFBOEIsRUFBQTs7QUFHakM7RUFDRyw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUlqQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9tb2R1bGUtbWFuYWdlL2NvbXBvbmVudC12aWV3L2NvbXBvbmVudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVyZmxvdyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZHZlbnR1cmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgLmZpbHRlci1kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogNTUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IGxpIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComponentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewComponent", function() { return ComponentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/component-view.bean */ "./src/app/pages/tzb/product-manage/module-manage/component-view/bean/component-view.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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
    function ComponentViewComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
        //组件的传入参数
        this.updateValue = [];
        // bean
        this.componentViewBean = new _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentViewBean"]();
        //每页多少条
        this.pageSize = '10';
        this.display = false;
        //提示信息
        this.msgs = [];
        //分页控制
        this.first = 0;
    }
    ComponentViewComponent.prototype.ngOnInit = function () {
        this.componentViewBean.pageSize = 10;
        this.componentViewBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 重置
    ComponentViewComponent.prototype.resetClick = function () {
        this.componentViewBean = new _bean_component_view_bean__WEBPACK_IMPORTED_MODULE_1__["ComponentViewBean"]();
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
        this.productManageHttpService.productFeatureCategoryList(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.productFeatureCategoryList;
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
                _this.productManageHttpService.delFeatureCategory(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
                        _this.queryClick();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
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
            selector: 'app-component-view',
            template: __webpack_require__(/*! ./component-view.component.html */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.html"),
            styles: [__webpack_require__(/*! ./component-view.component.scss */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ComponentViewComponent);
    return ComponentViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/module-manage.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/module-manage.module.ts ***!
  \********************************************************************************/
/*! exports provided: ModuleManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManageModule", function() { return ModuleManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _module_manage_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-manage.routing */ "./src/app/pages/tzb/product-manage/module-manage/module-manage.routing.ts");
/* harmony import */ var _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-view/component-view.component */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.ts");
/* harmony import */ var _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-config/component-config.component */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.ts");
/* harmony import */ var _component_view_component_view_details_component_view_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-view/component-view-details/component-view-details.component */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view-details/component-view-details.component.ts");
/* harmony import */ var _component_config_component_config_add_component_config_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-config/component-config-add/component-config-add.component */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-add/component-config-add.component.ts");
/* harmony import */ var _component_config_component_config_modify_component_config_modify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-config/component-config-modify/component-config-modify.component */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-modify/component-config-modify.component.ts");
/* harmony import */ var _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-modify/component-modify.component */ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.ts");
/* harmony import */ var _component_config_component_config_details_component_config_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component-config/component-config-details/component-config-details.component */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config-details/component-config-details.component.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件



//页面
 //组件查看
 //组件配置-（新增）
 //组件查看-详情
 //组件配置-新增
 //组件配置-修改

 //组件配置-最终修改


var ModuleManageModule = /** @class */ (function () {
    function ModuleManageModule() {
    }
    ModuleManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _module_manage_routing__WEBPACK_IMPORTED_MODULE_3__["ModuleManageRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_12__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_11__["UPaginatorModule"],
            ],
            declarations: [
                _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_4__["ComponentViewComponent"],
                _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_5__["ComponentConfigComponent"],
                _component_view_component_view_details_component_view_details_component__WEBPACK_IMPORTED_MODULE_6__["ComponentViewDetailsComponent"],
                _component_config_component_config_add_component_config_add_component__WEBPACK_IMPORTED_MODULE_7__["ComponentConfigAddComponent"],
                _component_config_component_config_modify_component_config_modify_component__WEBPACK_IMPORTED_MODULE_8__["ComponentConfigModifyComponent"],
                _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_9__["ComponentModifyComponent"],
                _component_config_component_config_details_component_config_details_component__WEBPACK_IMPORTED_MODULE_10__["ComponentConfigDetailsComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], ModuleManageModule);
    return ModuleManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/module-manage/module-manage.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/module-manage/module-manage.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: ModuleManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManageRouting", function() { return ModuleManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-view/component-view.component */ "./src/app/pages/tzb/product-manage/module-manage/component-view/component-view.component.ts");
/* harmony import */ var _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-config/component-config.component */ "./src/app/pages/tzb/product-manage/module-manage/component-config/component-config.component.ts");
/* harmony import */ var _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-modify/component-modify.component */ "./src/app/pages/tzb/product-manage/module-manage/component-modify/component-modify.component.ts");

//页面
 //组件查看
 //组件配置
 //组件配置-最终修改
var routes = [
    {
        path: 'component-view', component: _component_view_component_view_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewComponent"],
    },
    {
        path: 'component-config', component: _component_config_component_config_component__WEBPACK_IMPORTED_MODULE_2__["ComponentConfigComponent"],
    },
    {
        path: 'component-modify', component: _component_modify_component_modify_component__WEBPACK_IMPORTED_MODULE_3__["ComponentModifyComponent"],
    },
];
var ModuleManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=module-manage-module-manage-module.js.map