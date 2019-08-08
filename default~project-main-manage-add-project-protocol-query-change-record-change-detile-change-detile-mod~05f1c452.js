(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~project-main-manage-add-project-protocol-query-change-record-change-detile-change-detile-mod~05f1c452"],{

/***/ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/objecthelper.ts ***!
  \*****************************************************************/
/*! exports provided: ObjectHelper, DateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectHelper", function() { return ObjectHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return DateHelper; });
var ObjectHelper = /** @class */ (function () {
    function ObjectHelper() {
    }
    ObjectHelper.prototype.copyObject = function (target, source) {
        for (var property in source) {
            if (source.hasOwnProperty(property)) {
                target[property] = source[property];
            }
        }
    };
    ObjectHelper.prototype.objectDeepCopy = function (source) {
        var sourceCopy = source instanceof Array ? [] : {};
        for (var item in source) {
            sourceCopy[item] = source[item] && typeof source[item] === 'object' ? this.objectDeepCopy(source[item]) : source[item];
        }
        return sourceCopy;
    };
    ObjectHelper.prototype.copyObjectWithSkipping = function (target, source, skipper) {
        if (Object.prototype.toString.call(target) === "[object Object]" && Object.prototype.toString.call(source) === "[object Object]") {
            for (var property in source) {
                if (source.hasOwnProperty(property) && property.toString() != skipper) {
                    target[property] = source[property];
                }
            }
        }
    };
    ObjectHelper.prototype.copyObjectListWithSkipping = function (target, source, skipper) {
        if (Object.prototype.toString.call(target) === "[object Array]" && Object.prototype.toString.call(source) === "[object Array]") {
            source.forEach(function (element) {
                var obj = {};
                for (var property in element) {
                    if (element.hasOwnProperty(property) && property.toString() != skipper) {
                        obj[property] = element[property];
                    }
                }
                target.push(obj);
            });
        }
    };
    ObjectHelper.prototype.copyObjectWithRet = function (source) {
        var ret = '';
        ret = JSON.stringify(source);
        return ret;
    };
    ObjectHelper.prototype.isString = function (val) {
        return Object.prototype.toString.call(val) == '[object String]';
    };
    ObjectHelper.prototype.isArray = function (val) {
        return Object.prototype.toString.call(val) == '[object Array]';
    };
    ObjectHelper.prototype.isObject = function (val) {
        return Object.prototype.toString.call(val) == '[object Object]';
    };
    ObjectHelper.prototype.isEqual = function (obj1, obj2) {
    };
    return ObjectHelper;
}());

var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.prototype.isStamp = function (stamp) {
        return !isNaN(stamp);
    };
    // 时间戳 转换 时间
    DateHelper.prototype.convertStampToDate = function (stamp) {
        var ret = null;
        if (this.isStamp(stamp)) {
            ret = new Date(stamp);
        }
        return ret;
    };
    DateHelper.prototype.format = function (date) {
        var ret = '';
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        ret = y + '-' + m + '-' + d + ' ' + date.toTimeString().substr(0, 8);
        return ret;
    };
    DateHelper.prototype.getDateString = function (source) {
        var ret = '';
        source = this.convertStampToDate(source);
        // IE
        if (Object.prototype.toString.call(source) == "[object Date]") {
            ret = this.format(source);
        }
        return ret;
    };
    DateHelper.prototype.getDate = function (source) {
        var ret = '';
        ret = this.getDateString(source);
        if (ret) {
            ret = ret.split(' ')[0];
        }
        return ret;
    };
    return DateHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/selectHelper.ts ***!
  \*****************************************************************/
/*! exports provided: SelectHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHelper", function() { return SelectHelper; });
var SelectHelper = /** @class */ (function () {
    function SelectHelper() {
    }
    SelectHelper.prototype.valueCutter = function (prefix, source) {
        return source.substring(prefix.length, source.length);
    };
    SelectHelper.prototype.getLabel = function (array, value) {
        var ret = '';
        if (array && array.length) {
            var t = array.filter(function (i) { return i.value === value; });
            if (t && t.length) {
                ret = t[0].label;
            }
        }
        return ret;
    };
    SelectHelper.prototype.getLabels = function (array, values) {
        var _this = this;
        var ret = [];
        if (array && array.length) {
            var arr = values.split(',');
            if (arr && arr.length) {
                arr.forEach(function (element) {
                    var result = _this.getLabel(array, element);
                    if (result) {
                        ret.push(result);
                    }
                });
            }
        }
        return ret;
    };
    // 筛选方式 1
    // 用于 下拉框筛选，当 第一级的value，和第二级的vlaue有直接关联的时候。（如：firstClass: "100", secondClass: "100201"）
    SelectHelper.prototype.itemsfilter = function (key, list) {
        var ret = [];
        list.forEach(function (element) {
            if (element.value.indexOf(key) === 0) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 筛选方式 2
    // 此种筛选方式，基于这样的数据结构
    // { label: '', value: '101202' }               数据字典中的数据
    // { label: '', value: '202', parent: '101' }   重构后的数据
    SelectHelper.prototype.itemsFilterByParent = function (key, list) {
        var ret = [];
        list.forEach(function (element) {
            if (element.parent == key) {
                ret.push(element);
            }
        });
        return ret;
    };
    SelectHelper.prototype.itemsFilterByParentList = function (keys, list) {
        var ret = [];
        list.forEach(function (element) {
            if (keys.indexOf(element.parent) != -1) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 筛选方式 3
    // 服务于 贷款实际用途 下拉框筛选，但筛选逻辑已经修改，此逻辑是为了参照，第一种筛选方式，进行筛选。
    // 但这导致不能直接取到 符合文档标准的value，也导致筛选过程较为别扭。所以修改 筛选方式为 第二种。
    SelectHelper.prototype.itemsfilterByListKey = function (keys, list) {
        var _this = this;
        var ret = [];
        list.forEach(function (element) {
            if (_this.isValueExist(element.value, keys)) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 服务于 贷款实际用途 下拉框筛选，但筛选逻辑已经修改
    SelectHelper.prototype.isValueExist = function (key, list) {
        var ret = false;
        for (var i = 0, len = list.length; i < len; i++) {
            var element = list[i];
            if (key.indexOf(element) === 0) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    return SelectHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/common/customerCenterCommon.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/common/customerCenterCommon.module.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerCenterCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCenterCommonModule", function() { return CustomerCenterCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component.ts");
/* harmony import */ var _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component.ts");
/* harmony import */ var _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component.ts");
/* harmony import */ var _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件

//页面






var CustomerCenterCommonModule = /** @class */ (function () {
    function CustomerCenterCommonModule() {
    }
    CustomerCenterCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInputComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_5__["AdjustNumberComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_6__["AdjustCalendarComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["AdjustDropdownComponent"],
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_8__["AdjustProductComponent"]
            ],
            entryComponents: [],
            exports: [
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInputComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_5__["AdjustNumberComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_6__["AdjustCalendarComponent"],
                _project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["AdjustDropdownComponent"],
                app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_8__["AdjustProductComponent"]
            ],
            providers: []
        })
    ], CustomerCenterCommonModule);
    return CustomerCenterCommonModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: AdjustCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustCalendarComponent", function() { return AdjustCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
/* harmony import */ var _custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdjustCalendarComponent = /** @class */ (function () {
    function AdjustCalendarComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateHelper = new _custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_3__["DateHelper"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.val = new Date();
        this.title = '';
        this.type = 0;
        this.key = '';
        this.isNeedCallServe = false;
        this.isDisabled = false;
        this.msgService.change.subscribe(function (msg) {
            if (msg.type == _this.type && msg.key == _this.key) {
                _this.val = msg.val;
            }
        });
    }
    AdjustCalendarComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    AdjustCalendarComponent.prototype.getValues = function () {
        if (Object.keys(this.inputVal)) {
            for (var property in this.inputVal) {
                if (this.inputVal.hasOwnProperty(property)) {
                    this[property] = this.inputVal[property];
                }
            }
        }
    };
    AdjustCalendarComponent.prototype.keyupHandle = function () {
        var output = {
            val: this.dateHelper.format(this.val).split(' ')[0],
            desc: '',
            key: this.key,
            type: this.type
        };
        this.output.next(output);
    };
    AdjustCalendarComponent.prototype.callServe = function () {
        if (this.isNeedCallServe) {
            var output = {
                val: this.val,
                desc: '',
                key: this.key,
                type: this.type,
                isCallServe: true
            };
            this.output.next(output);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustCalendarComponent.prototype, "inputVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdjustCalendarComponent.prototype, "output", void 0);
    AdjustCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adjust-calendar',
            template: "<div class=\"ui-g-6\">\n                <div class=\"ui-g-5\" style=\"text-align: right;\">\n                <span *ngIf=\"type!=1&&(flag=='1'||flag=='2')\"  style=\"color:red!important;\">*</span>\n                {{title}}:</div>\n                <div class=\"ui-g-7\"><p-calendar [showIcon]=\"true\" [(ngModel)]=\"val\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [disabled]=\"type==1 || isDisabled\" (onSelect)=\"keyupHandle()\"></p-calendar></div>\n              </div>"
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], AdjustCalendarComponent);
    return AdjustCalendarComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: AdjustDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustDropdownComponent", function() { return AdjustDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdjustDropdownComponent = /** @class */ (function () {
    function AdjustDropdownComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_2__["SelectHelper"]();
        this.options = [];
        this.val = '';
        this.id = ''; // by huj++
        this.desc = '';
        this.title = '';
        this.key = '';
        this.type = 0;
        this.isNeedCallServe = false;
        this.isDisabled = false;
        this.msgService.change.subscribe(function (msg) {
            if (msg.type == _this.type && msg.key == _this.key) {
                _this.val = msg.val;
            }
        });
    }
    AdjustDropdownComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    AdjustDropdownComponent.prototype.getValues = function () {
        if (Object.keys(this.inputVal)) {
            for (var property in this.inputVal) {
                if (this.inputVal.hasOwnProperty(property)) {
                    this[property] = this.inputVal[property];
                }
            }
        }
    };
    AdjustDropdownComponent.prototype.change = function () {
        var output = {
            val: this.val,
            desc: {
                key: this.key,
                desc: this.selectHelper.getLabel(this.options, this.val)
            },
            key: this.key,
            type: this.type
        };
        this.output.next(output);
        // by huj++       
        this.InitMiddleAccount();
        if (this.type == 2) {
            this.callServe();
        }
    };
    // by huj++
    AdjustDropdownComponent.prototype.InitMiddleAccount = function () {
        debugger;
        var eleval = this.val;
        var eleId = this.id;
        if (eleId == '014_havemiddleAccount_after_3') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#014_middleAccountNumber_after_4').removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_3__('#014_payPeriod_after_2').removeAttr("disabled");
            if (eleval == '0') {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#014_middleAccountNumber_after_4').attr("disabled", 'true');
                jquery__WEBPACK_IMPORTED_MODULE_3__('#014_payPeriod_after_2').attr("disabled", 'true');
                jquery__WEBPACK_IMPORTED_MODULE_3__('#014_middleAccountNumber_after_4').val('');
                jquery__WEBPACK_IMPORTED_MODULE_3__('#014_payPeriod_after_2').val('');
            }
        }
        // this.isNeedCallServe=true;
    };
    AdjustDropdownComponent.prototype.callServe = function () {
        if (this.isNeedCallServe) {
            var output = {
                val: this.val,
                desc: '',
                key: this.key,
                type: this.type,
                isCallServe: true
            };
            this.output.next(output);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustDropdownComponent.prototype, "inputVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdjustDropdownComponent.prototype, "output", void 0);
    AdjustDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adjust-dropdown',
            template: "<div class=\"ui-g-6\">\n                <div class=\"ui-g-5\" style=\"text-align: right;\">\n                <span *ngIf=\"type!=1&&(flag=='1'||flag=='2')\"  style=\"color:red!important;\">*</span>\n                {{title}}:</div>\n                <div class=\"ui-g-7\"><p-dropdown [options]=\"options\" [id]=\"id\"   [(ngModel)]=\"val\" (onChange)=\"change()\" [disabled]=\"type==1 || isDisabled\"></p-dropdown></div>\n              </div>"
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AdjustDropdownComponent);
    return AdjustDropdownComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: AdjustInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInputComponent", function() { return AdjustInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdjustInputComponent = /** @class */ (function () {
    function AdjustInputComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = ''; // by huj++
        this.val = '';
        this.title = '';
        this.type = 0;
        this.key = '';
        this.isNeedCallServe = false;
        this.isDisabled = false;
        this.msgService.change.subscribe(function (msg) {
            if (msg.type == _this.type && msg.key == _this.key) {
                _this.val = msg.val;
                console.log("this.val" + _this.val);
                console.log("this.id" + _this.id);
                if (msg.hasOwnProperty('isDisabled')) {
                    _this.isDisabled = msg.isDisabled;
                }
                else {
                    _this.isDisabled = true;
                }
                // if (msg.attribute) {// by huj ++
                //     this.domHandler(msg);
                // }else{
                //     if (msg.hasOwnProperty('isDisabled')) {
                //         this.isDisabled = msg.isDisabled;
                //     } else {
                //         this.isDisabled = true;
                //     }
                // }
            }
        });
    }
    // by huj ++
    // domHandler (msg: any) {
    //     if (msg.attribute) {
    //         let t = msg.attribute.split(':');
    //         if (t.length) {
    //             let name = t[0];
    //             let value = t[1];
    //             switch (name) {
    //                 case 'Disabled':
    //                     if(this.isDisabled==true){
    //                         this.isDisabled=false;
    //                         this.flag="1";
    //                     }else{
    //                         this.isDisabled=true;
    //                         this.flag="";
    //                     }
    //                 break;
    //             }
    //         }
    //     }
    // }
    // by huj++
    AdjustInputComponent.prototype.executeCommand = function () {
        if (this.initCommand) {
            this.isDisabled = true;
            this.flag = "";
        }
    };
    AdjustInputComponent.prototype.ngOnInit = function () {
        this.getValues();
        this.InitMiddleAccount1(); // by huj++
    };
    // by huj++
    AdjustInputComponent.prototype.InitMiddleAccount1 = function () {
        debugger;
        var eleval = this.val;
        var eleId = this.id;
        if (eleId == '014_middleAccountNumber_after_4' && eleval == '') {
            this.flag = "";
            this.isDisabled = true;
        }
    };
    AdjustInputComponent.prototype.getValues = function () {
        // debugger;
        // console.log(this.inputVal);
        if (Object.keys(this.inputVal)) {
            for (var property in this.inputVal) {
                if (this.inputVal.hasOwnProperty(property)) {
                    this[property] = this.inputVal[property];
                }
            }
        }
    };
    AdjustInputComponent.prototype.keyupHandle = function () {
        var output = {
            val: this.val,
            key: this.key,
            type: this.type,
        };
        this.output.next(output);
    };
    AdjustInputComponent.prototype.callServe = function () {
        debugger;
        if (this.isNeedCallServe) {
            var output = {
                val: this.val,
                desc: '',
                key: this.key,
                type: this.type,
                isCallServe: true,
            };
            this.output.next(output);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustInputComponent.prototype, "inputVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdjustInputComponent.prototype, "output", void 0);
    AdjustInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adjust-input',
            template: "<div class=\"ui-g-6\">\n                <div class=\"ui-g-5\" style=\"text-align: right;\">\n                <span *ngIf=\"type!=1&&(flag=='1'||flag=='2')\"  style=\"color:red!important;\">*</span>\n                {{title}}:</div>\n                <div class=\"ui-g-7\"><input min= \"0\" [id]=\"id\"  pInputText [(ngModel)]=\"val\" (keyup)=\"keyupHandle()\" (blur)=\"callServe()\" type=\"text\" [disabled]=\"type==1 || isDisabled\"></div>\n              </div>"
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AdjustInputComponent);
    return AdjustInputComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: AdjustNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustNumberComponent", function() { return AdjustNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdjustNumberComponent = /** @class */ (function () {
    function AdjustNumberComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = ''; // by huj++
        this.val = 0;
        this.title = '';
        this.key = '';
        this.type = 0;
        this.isNeedCallServe = false;
        this.isDisabled = false;
        this.msgService.change.subscribe(function (msg) {
            if (msg.type == _this.type && msg.key == _this.key) {
                _this.val = msg.val;
                _this.isDisabled = true;
            }
        });
    }
    AdjustNumberComponent.prototype.ngOnInit = function () {
        this.getValues();
        this.InitpayPeriod(); // by huj++
    };
    // by huj++
    AdjustNumberComponent.prototype.InitpayPeriod = function () {
        debugger;
        var eleval = this.val;
        var eleId = this.id;
        console.info("eleval:" + eleval);
        console.info("eleId:" + eleId);
        if (eleId == '014_payPeriod_after_2' && 0 == eleval) {
            this.flag = "";
            this.isDisabled = true;
        }
    };
    AdjustNumberComponent.prototype.getValues = function () {
        if (Object.keys(this.inputVal)) {
            for (var property in this.inputVal) {
                if (this.inputVal.hasOwnProperty(property)) {
                    this[property] = this.inputVal[property];
                }
            }
        }
    };
    AdjustNumberComponent.prototype.keyupHandle = function () {
        // 禁输负数
        if (this.val < 0) {
            this.val = null;
        }
        var output = {
            val: this.val,
            desc: '',
            key: this.key,
            type: this.type
        };
        this.output.next(output);
    };
    AdjustNumberComponent.prototype.callServe = function () {
        if (this.isNeedCallServe) {
            var output = {
                val: this.val,
                desc: '',
                key: this.key,
                type: this.type,
                isCallServe: true
            };
            this.output.next(output);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustNumberComponent.prototype, "inputVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdjustNumberComponent.prototype, "output", void 0);
    AdjustNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adjust-number',
            template: "<div class=\"ui-g-6\">\n                <div class=\"ui-g-5\" style=\"text-align: right;\">\n                <span *ngIf=\"type!=1&&(flag=='1'||flag=='2')\" style=\"color:red!important;\">*</span>\n                {{title}}:</div>\n                <div class=\"ui-g-7\"><input pInputText min=\"0\" [id]=\"id\"  [(ngModel)]=\"val\" (keyup)=\"keyupHandle()\" (blur)=\"callServe()\" type=\"number\" [disabled]=\"type == 1 || isDisabled\"></div>\n              </div>"
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AdjustNumberComponent);
    return AdjustNumberComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: AdjustProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustProductComponent", function() { return AdjustProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/MessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdjustProductComponent = /** @class */ (function () {
    function AdjustProductComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.val = '';
        this.title = '';
        this.type = 0;
        this.key = '';
        this.isNeedCallServe = false;
        this.isDisabled = false;
        this.msgService.change.subscribe(function (msg) {
            if (msg.type == _this.type && msg.key == _this.key) {
                _this.val = msg.val;
            }
        });
    }
    AdjustProductComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    AdjustProductComponent.prototype.getValues = function () {
        if (Object.keys(this.inputVal)) {
            for (var property in this.inputVal) {
                if (this.inputVal.hasOwnProperty(property)) {
                    this[property] = this.inputVal[property];
                }
            }
        }
    };
    AdjustProductComponent.prototype.clickHandle = function () {
        var output = {
            flag: 'chooseProduct',
            val: '',
            key: this.key,
            type: this.type
        };
        this.output.next(output);
    };
    AdjustProductComponent.prototype.callServe = function () {
        if (this.isNeedCallServe) {
            var output = {
                val: this.val,
                desc: '',
                key: this.key,
                type: this.type,
                isCallServe: true
            };
            this.output.next(output);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductComponent.prototype, "inputVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdjustProductComponent.prototype, "output", void 0);
    AdjustProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adjust-product',
            template: "<div class=\"ui-g-6\">\n                    <div class=\"ui-g-4\" style=\"padding-left:0;padding-right:0;text-align:right;\">\u4EA7\u54C1\u7F16\u53F7:</div>\n                    <div class=\"ui-g-8\">\n                        <div class=\"ui-g-11\" style=\"padding:0;\"><input type=\"text\" pInputText disabled [(ngModel)]=\"val\"/></div>\n                        <div class=\"ui-g-1\" style=\"padding:0;\">\n                            <div *ngIf=\"type==2 && !isDisabled\" (click)=\"clickHandle()\" style=\"height: 23px;background-color: #fbfbf7;line-height: 16px;text-align: center;border-radius: 0 3px 3px 0;border: 1px solid #bdbdbd;\">\n                                <a class=\"a-hand\">\n                                    <span>...</span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n              </div>"
        }),
        __metadata("design:paramtypes", [app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_MessageService__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AdjustProductComponent);
    return AdjustProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/callServe.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/callServe.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: CallServe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallServe", function() { return CallServe; });
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");

var CallServe = /** @class */ (function () {
    function CallServe(httpService, messageService) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.serverInterfaceName = '';
        this.frontElementCheckServeString = '';
        this.parameterNames = []; // 所有需要的参数名
        this.failKey = '';
    }
    CallServe.prototype.handleCheck = function () {
        debugger;
        var checkItems = this.frontElementCheckServeString.split(',');
        console.log(checkItems);
        var type = checkItems[0];
        var ret;
        switch (type) {
            case '0':
                this.serverInterfaceName = checkItems[1];
                this.asyncCall(checkItems[2]);
                break;
            case '1':
                break;
            case '2':
                break;
            case '3':
                ret = this.syncCall();
                break;
            case '4': // by huj ++
                ret = this.attributeCall();
                break;
        }
        return ret;
    };
    // 请求服务
    CallServe.prototype.asyncCall = function (param) {
        var _this = this;
        debugger;
        var resource = this.resource;
        param = this.handleParams(param, resource);
        this.frontElementCheckServe(param).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
            }
            else {
                var fail = _this.getFailureResult();
                _this.messageService.change.emit(fail);
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        });
    };
    // getKey (source: string) {
    //     // marginAccount-acctNo^custId
    //     let ret = '';
    //     if (source) {
    //         ret = source.split('-')[0];
    //     }
    //     return ret;
    // }
    CallServe.prototype.getFailureResult = function () {
        var ret = {
            val: '',
            key: this.failKey,
            type: 2,
            isDisabled: false
        };
        return ret;
    };
    CallServe.prototype.handleParams = function (source, data) {
        var ret = {};
        source = source.split('^');
        if (source && source.length) {
            source.forEach(function (element) {
                var names = element.split('-');
                var frontName = names[0];
                var backName = names[1] || names[0];
                ret[backName] = data[frontName];
            });
        }
        return ret;
    };
    // 公共服务
    CallServe.prototype.frontElementCheckServe = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_0__["TZB_HTTP_COM1"] + this.serverInterfaceName, params);
    };
    // 改变其他元素
    CallServe.prototype.syncCall = function () {
        // "3,
        // a['projectLimit']*a['marginScale']*0.01,
        // margin"
        debugger;
        var items = this.frontElementCheckServeString.split(',');
        var kk = this.frontElementCheckServeString.split(',');
        items.shift();
        var a = this.resource;
        var ret = {
            val: 0,
            key: items[1],
            type: 2
        };
        try {
            if (kk[0] == '3') {
                ret.val = eval(items[0]).toFixed(6);
            }
            else {
                ret.val = eval(items[0]);
            }
        }
        catch (ex) {
            // throw ex;
            console.error(ex.message);
        }
        return ret;
    };
    // 自己拼接的计算公式，修改其它动态模块的dom属性
    // by huj ++
    CallServe.prototype.attributeCall = function () {
        // "4,
        // Disabled: true,
        // margin"
        var items = this.frontElementCheckServeString.split(',');
        items.shift();
        var ret = {
            val: null,
            attribute: items[0],
            key: items[1],
            type: 2
        };
        return ret;
    };
    CallServe.prototype.loadBasicData = function (param) {
        //this.serverInterfaceName = param.serverInterfaceName;
        this.frontElementCheckServeString = param.frontElementCheckServeString;
        this.resource = param.resource;
        this.commonlyMessage = param.commonlyMessage;
        this.failKey = param.key;
    };
    return CallServe;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/adjust.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/adjust.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DomAdjust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomAdjust", function() { return DomAdjust; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-input.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-number.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-calendar.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-dropdown.component.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_callServe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/callServe */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/callServe.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/templates/adjust-product.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var DomAdjust = /** @class */ (function () {
    function DomAdjust(httpService, resolver, msgService) {
        this.httpService = httpService;
        this.resolver = resolver;
        this.msgService = msgService;
        this.afterGuarantyStyle = '';
        this.beforeGuarantyStyle = '';
        this.originConfigs = [];
        this.before = [];
        this.after = [];
        this.objectHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__["ObjectHelper"]();
        this.beforeDataMap = {};
        this.afterDataMap = {};
        this.dataMap = {};
        this.postData = {};
        this.custId = '';
        this.beforeAdjust = '';
        this.afterAdjust = '';
        this.isRecover = false;
        this.componentRefs = [];
        this.serverInterfaceName = '';
        this.productFlag = false;
        this.adjustElement = ''; // by huj++
        this.projectId = ''; // by huj++
    }
    // 创建dom相关函数
    // 数据分发、订阅
    DomAdjust.prototype.createInput = function (val, container) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_input_component__WEBPACK_IMPORTED_MODULE_1__["AdjustInputComponent"]);
        var componentRef;
        componentRef = container.createComponent(factory);
        componentRef.instance.inputVal = val;
        componentRef.instance.output.subscribe(function (msg) {
            _this.aggregater(msg);
            if (msg.isCallServe) {
                _this.callServe(msg);
            }
        });
        this.componentRefs.push(componentRef);
    };
    DomAdjust.prototype.createNumber = function (val, container) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_number_component__WEBPACK_IMPORTED_MODULE_2__["AdjustNumberComponent"]);
        var componentRef;
        componentRef = container.createComponent(factory);
        componentRef.instance.inputVal = val;
        componentRef.instance.output.subscribe(function (msg) {
            _this.aggregater(msg);
            if (msg.isCallServe) {
                _this.callServe(msg);
            }
        });
        this.componentRefs.push(componentRef);
    };
    DomAdjust.prototype.createCalender = function (val, container) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_calendar_component__WEBPACK_IMPORTED_MODULE_3__["AdjustCalendarComponent"]);
        var componentRef;
        componentRef = container.createComponent(factory);
        componentRef.instance.inputVal = val;
        componentRef.instance.output.subscribe(function (msg) {
            _this.aggregater(msg);
            if (msg.isCallServe) {
                _this.callServe(msg);
            }
        });
        this.componentRefs.push(componentRef);
    };
    DomAdjust.prototype.createDropdown = function (val, container) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["AdjustDropdownComponent"]);
        var componentRef;
        componentRef = container.createComponent(factory);
        componentRef.instance.inputVal = val;
        componentRef.instance.output.subscribe(function (msg) {
            console.log(msg);
            _this.aggregater(msg);
            if (msg.isCallServe) {
                _this.callServe(msg);
            }
        });
        this.componentRefs.push(componentRef);
    };
    DomAdjust.prototype.createProduct = function (val, container) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_adjust_product_component__WEBPACK_IMPORTED_MODULE_6__["AdjustProductComponent"]);
        var componentRef;
        componentRef = container.createComponent(factory);
        componentRef.instance.inputVal = val;
        componentRef.instance.output.subscribe(function (msg) {
            // this.aggregater(msg);
            if (msg.flag) {
                _this.productFlag = true;
            }
            if (msg.isCallServe) {
                _this.callServe(msg);
            }
        });
    };
    DomAdjust.prototype.aggregater = function (msg) {
        if (this.afterDataMap) {
            this.afterDataMap[msg.key] = msg.val;
            if (msg.desc) {
                var t = msg.desc;
                t['type'] = msg.type;
                this.afterDataMap.description.push(t);
            }
        }
    };
    DomAdjust.prototype.destroy = function () {
        this.componentRefs.forEach(function (element) {
            element.distory();
        });
    };
    DomAdjust.prototype.setComponentRef = function (componentRef) {
        // this.componentRef = componentRef;
    };
    // frontElementCheckServe
    DomAdjust.prototype.callServe = function (msg) {
        var callServe = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_subject_adjustment_templates_callServe__WEBPACK_IMPORTED_MODULE_5__["CallServe"](this.httpService, this.msgService);
        callServe.loadBasicData({
            frontElementCheckServeString: this.getCallString(msg.key, msg.type),
            resource: this.getResource(),
            commonlyMessage: this.commonlyMessage,
            key: msg.key
        });
        var ret = callServe.handleCheck();
        if (ret) {
            this.dispatcher(ret);
        }
    };
    DomAdjust.prototype.getCallString = function (key, type) {
        var ret = '';
        if (this.after && this.after) {
            for (var i = 0, len = this.after.length; i < len; i++) {
                var element = this.after[i];
                if (element.elementEnName == key) {
                    ret = element.frontElementCheckServe;
                    break;
                }
            }
        }
        return ret;
    };
    DomAdjust.prototype.getResource = function () {
        var ret = {};
        if (this.afterDataMap && Object.keys(this.afterDataMap)) {
            for (var property in this.afterDataMap) {
                if (this.afterDataMap.hasOwnProperty(property)) {
                    ret[property] = this.afterDataMap[property] || this.beforeDataMap[property];
                }
            }
            for (var property in this.beforeDataMap) {
                if (this.beforeDataMap.hasOwnProperty(property)) {
                    ret[property] = this.afterDataMap[property] || this.beforeDataMap[property];
                }
            }
        }
        ret = this._decorateForResource(ret);
        return ret;
    };
    DomAdjust.prototype._decorateForResource = function (resource) {
        if (this.adjustElement === '014') {
            resource['adjustElement'] = this.adjustElement;
        }
        return resource;
    };
    DomAdjust.prototype.dispatcher = function (msg) {
        this.msgService.change.emit(msg);
        // 这里需要添加判断，只有key 在after数组中才可以赋值
        if (this.isAfterHasKey(msg.key)) {
            this.afterDataMap[msg.key] = msg.val;
        }
    };
    DomAdjust.prototype.isAfterHasKey = function (key) {
        var ret = false;
        for (var i = 0, len = this.after.length; i < len; i++) {
            var element = this.after[i];
            if (element.elementEnName == key) {
                ret = true;
            }
        }
        return ret;
    };
    /**
     * by huj++
     * 判断中间账户是否为否
     */
    DomAdjust.prototype.gethaveMiddenValue = function () {
        if (this.originConfigs && this.originConfigs.length) {
            if (this.adjustElement == '014') {
                for (var i = 0, len = this.originConfigs.length; i < len; i++) {
                    var element = this.originConfigs[i];
                    var obj = {};
                    if ('havemiddleAccount' == element['elementEnName']) {
                        obj['elementValueAfter'] = this.afterDataMap[element['elementEnName']];
                        var N = obj['elementValueAfter'];
                        console.log("N:" + N);
                        return N ? (typeof N == 'string' ? N : N.toString()) : '';
                    }
                }
            }
        }
        return '';
    };
    DomAdjust.prototype.getPostData = function () {
        var _this = this;
        debugger;
        var middenfalg = this.gethaveMiddenValue(); // by huj++
        var t = [];
        // console.log(this.originConfigs)
        if (this.originConfigs && this.originConfigs.length) {
            this.originConfigs.forEach(function (element) {
                var obj = {};
                obj['fatherElementEnName'] = element['fatherElementEnName'];
                obj['rowNum'] = element['rowNum'];
                obj['elementNum'] = element['elementNum'];
                obj['elementEnName'] = element['elementEnName'];
                obj['elementType'] = element['elementType'];
                obj['elementName'] = element['elementName'];
                if (_this.isRecover) {
                    obj['elementValueBefore'] = element['elementValueBefore'];
                    obj['elementDescBefore'] = element['elementDescBefore'];
                }
                else {
                    obj['elementValueBefore'] = element['elementValue'];
                    obj['elementDescBefore'] = element['elementDesc'];
                }
                // by huj++  中间账户为否清空中间账户和付款周期字段值 start                
                if ('1' == middenfalg &&
                    'havemiddleAccount' == element['elementEnName']) {
                    obj['elementValueAfter'] = _this.afterDataMap[element['elementEnName']];
                    obj['elementDescAfter'] = '是';
                }
                else if ('0' == middenfalg &&
                    'havemiddleAccount' == element['elementEnName']) {
                    obj['elementValueAfter'] = _this.afterDataMap[element['elementEnName']];
                    obj['elementDescAfter'] = '否';
                }
                else if ('0' == middenfalg && ('middleAccountNumber' == element['elementEnName']
                    || 'payPeriod' == element['elementEnName'])) {
                    obj['elementValueAfter'] = '';
                    obj['elementDescAfter'] = '';
                }
                else if (('0' == middenfalg || '1' == middenfalg)
                    && ('platformIdentify' == element['elementEnName'])) {
                    obj['elementValueAfter'] = _this.afterDataMap[element['elementEnName']];
                    var N = obj['elementValueAfter'];
                    if (obj['elementValueBefore'] == N) {
                        obj['elementDescAfter'] = obj['elementDescBefore'];
                        obj['elementValueAfter'] = obj['elementValueBefore'];
                    }
                    else {
                        obj['elementValueAfter'] = N ? (typeof N == 'string' ? N : N.toString()) : '';
                        var desc = _this.afterDataMap.description.filter(function (x) { return x.key == element['elementEnName']; });
                        obj['elementDescAfter'] = desc && desc.length ? desc[0].desc : '';
                    }
                }
                // by huj++ end
                else {
                    obj['elementValueAfter'] = _this.afterDataMap[element['elementEnName']];
                    var N = obj['elementValueAfter'];
                    obj['elementValueAfter'] = N ? (typeof N == 'string' ? N : N.toString()) : '';
                    var desc = _this.afterDataMap.description.filter(function (x) { return x.key == element['elementEnName']; });
                    obj['elementDescAfter'] = desc && desc.length ? desc[0].desc : '';
                }
                obj['unitValue'] = element['unitValue'];
                obj['displayFlag1'] = element['displayFlag1'];
                obj['displayFlag2'] = element['displayFlag2'];
                obj['inputFlag'] = element['inputFlag'];
                obj['frontElementCheckServe'] = element['frontElementCheckServe'];
                obj['backElementCheckServe'] = element['backElementCheckServe'];
                obj['workFlowFlag'] = element['workFlowFlag'];
                t.push(obj);
            });
        }
        this.postData['elementGroupList'] = t;
        return this.postData;
    };
    DomAdjust.prototype.getPostProducts = function (products) {
        var _this = this;
        var t = [];
        if (products && products.length) {
            products.forEach(function (element) {
                var obj = {};
                obj['fatherElementEnName'] = element['fatherElementEnName'];
                obj['rowNum'] = element['rowNum'];
                obj['elementNum'] = element['elementNum'];
                obj['elementEnName'] = element['elementEnName'];
                obj['elementType'] = element['elementType'];
                obj['elementName'] = element['elementName'];
                if (_this.isRecover) {
                    obj['elementValueBefore'] = element['elementValueBefore'];
                    obj['elementDescBefore'] = element['elementDescBefore'];
                    obj['elementValueAfter'] = element['elementValueAfter'];
                    obj['elementDescAfter'] = element['elementDescAfter'];
                }
                else {
                    if (element['displayFlag1'] == '2') {
                        obj['elementValueBefore'] = element['elementValue'];
                        obj['elementDescBefore'] = element['elementDesc'];
                    }
                    else if (element['displayFlag1'] == '1') {
                        obj['elementValueBefore'] = '';
                        obj['elementDescBefore'] = '';
                    }
                    obj['elementValueAfter'] = element['elementValue'];
                    obj['elementDescAfter'] = element['elementDesc'];
                }
                obj['unitValue'] = element['unitValue'];
                obj['displayFlag1'] = element['displayFlag1'];
                obj['displayFlag2'] = element['displayFlag2'];
                obj['inputFlag'] = element['inputFlag'];
                obj['frontElementCheckServe'] = element['frontElementCheckServe'];
                obj['backElementCheckServe'] = element['backElementCheckServe'];
                obj['workFlowFlag'] = element['workFlowFlag'];
                t.push(obj);
            });
        }
        this.postData['elementGroupList'] = t;
        return this.postData;
    };
    // getRecoverData() {
    //     let t = [];
    //     // console.log(this.afterDataMap)
    //     if (this.originConfigs && this.originConfigs.length) {
    //         this.originConfigs.forEach(element => {
    //             let obj = {};
    //             obj['fatherElementEnName'] = element['fatherElementEnName'];
    //             obj['rowNum'] = element['rowNum'];
    //             obj['elementNum'] = element['elementNum'];
    //             obj['elementEnName'] = element['elementEnName'];
    //             obj['elementType'] = element['elementType'];
    //             obj['elementName'] = element['elementName'];
    //             obj['elementValueBefore'] = element['elementValueBefore'];
    //             obj['elementDescBefore'] = element['elementDescBefore'];
    //             obj['elementValueAfter'] = this.afterDataMap[element['elementEnName']];
    //             let N = obj['elementValueAfter'];
    //             obj['elementValueAfter'] = N ? (typeof N == 'string' ? N : N.toString()) : '';
    //             let desc = this.afterDataMap.description.filter(x => x.key == element['elementEnName']);
    //             obj['elementDescAfter'] = desc && desc.length ? desc[0].desc : '';
    //             obj['unitValue'] = element['unitValue'];
    //             obj['displayFlag1'] = element['displayFlag1'];
    //             obj['displayFlag2'] = element['displayFlag2'];
    //             obj['inputFlag'] = element['inputFlag'];
    //             obj['frontElementCheckServe'] = element['frontElementCheckServe'];
    //             obj['backElementCheckServe'] = element['backElementCheckServe'];
    //             obj['workFlowFlag'] = element['workFlowFlag'];
    //             t.push(obj);
    //         })
    //     }
    //     this.postData['elementGroupList'] = t;
    //     return this.postData;
    // }
    // beforeAdjust afterAdjust 传递给 工作流
    // 取数据规则：
    // 一般是取第一个
    // 003 004 008 有自己的取值规则
    DomAdjust.prototype.getBeforeAndAfter = function (adjustElement) {
        debugger;
        if (this.before && this.before.length) {
            var elementBefore = this.before[0];
            var elementAfter = this.after[0];
            this.beforeAdjust = elementBefore.elementValue;
            this.afterAdjust = this.afterDataMap[elementAfter.elementEnName]; // element.elementValue;
            var element = void 0;
            if (adjustElement == '003') {
                element = this.before.filter(function (x) { return x.elementEnName == "guarantyStyle"; })[0];
                this.beforeAdjust = element.elementValue;
                this.afterAdjust = this.afterDataMap['guarantyStyle'];
            }
            else if (adjustElement == '004') {
                element = this.before.filter(function (x) { return x.elementEnName == "guarantyStyle"; })[0];
                this.beforeGuarantyStyle = element.elementValueBefore;
                this.afterGuarantyStyle = this.afterDataMap['guarantyStyle'];
                if (this.isRecover) {
                    this.beforeAdjust = elementBefore.elementValueBefore;
                }
            }
            else if (adjustElement == '014' && elementAfter.elementEnName == 'payPeriod') { //  by huj++
                element = this.after.filter(function (x) { return x.elementEnName == "payPeriod"; })[0];
                debugger;
                if (element.elementValue == '' || element.elementValue == 0) {
                    element.elementValue = jquery__WEBPACK_IMPORTED_MODULE_7__('#014_payPeriod_after_2').val();
                    if (element.elementValue != '') {
                        this.afterAdjust = this.afterDataMap['payPeriod'];
                    }
                }
            }
            else if (adjustElement == '008' && this.isRecover) {
                // 处理日期格式 去掉'-'
                this.beforeAdjust = elementBefore.elementValueBefore.replace(/-/g, '');
                this.afterAdjust = this.afterAdjust.replace(/-/g, '');
            }
        }
    };
    // 初始化时，加工后台传来的数据数据
    DomAdjust.prototype.configCover = function (source, param) {
        this.loadConfigs(source, param);
        this.splitConfigs();
        this.sortBefore();
        this.sortAfter();
        this.combineDataMap();
    };
    // 数据相关
    DomAdjust.prototype.loadConfigs = function (source, param) {
        this.originConfigs = this.objectHelper.objectDeepCopy(source);
        this.custId = param.custId;
        this.commonlyMessage = param.commonlyMessage;
        this.isRecover = param.isRecover;
        this.adjustElement = param.adjustElement; // by huj++
        this.projectId = param.projectId; // by huj++
    };
    // 要素调整页面 (新增) dataMap 初始化
    DomAdjust.prototype.combineDataMap = function () {
        var _this = this;
        debugger;
        if (this.before && this.before.length) {
            this.before.forEach(function (element) {
                _this.beforeDataMap[element.elementEnName] = element.elementValue;
            });
        }
        if (this.after && this.after.length) {
            this.after.forEach(function (element) {
                _this.afterDataMap[element.elementEnName] = null;
            });
            this.afterDataMap.custId = this.custId;
            this.afterDataMap.description = [];
            this.afterDataMap.projectId = this.projectId; //by huj++
        }
    };
    DomAdjust.prototype.decorateForAfterDataMap = function (adjustElement, params) {
        debugger;
        if (adjustElement === '014') {
            for (var property in params) {
                this.afterDataMap[property] = params[property];
            }
        }
        console.log(this.afterDataMap);
    };
    // 要素调整页面 (追回) dataMap 初始化
    DomAdjust.prototype.recoverDataMap = function () {
        var _this = this;
        debugger;
        if (this.before && this.before.length) {
            this.before.forEach(function (element) {
                _this.beforeDataMap[element.elementEnName] = element['elementValueBefore'];
            });
        }
        if (this.after && this.after.length) {
            this.after.forEach(function (element) {
                _this.afterDataMap[element.elementEnName] = element['elementValueAfter'];
                if (element.elementType == '1') {
                    _this.afterDataMap.description.push({
                        key: element['elementEnName'],
                        desc: element['elementDescAfter']
                    });
                }
            });
            this.afterDataMap.custId = this.custId;
            this.afterDataMap.projectId = this.projectId; //by huj++
        }
    };
    DomAdjust.prototype.splitConfigs = function () {
        var _this = this;
        if (this.originConfigs && this.originConfigs.length) {
            this.originConfigs.forEach(function (element) {
                var type = element.displayFlag1;
                var t = _this.objectHelper.objectDeepCopy(element);
                if (type == '0') {
                    _this.before.push(t);
                }
                else if (type == '1') {
                    _this.after.push(t);
                }
                else if (type == '2') {
                    _this.before.push(t);
                    var t2 = _this.objectHelper.objectDeepCopy(element);
                    _this.after.push(t2);
                }
            });
        }
    };
    DomAdjust.prototype.sortBefore = function () {
        this.before = this.sortByAsc(this.before);
    };
    DomAdjust.prototype.sortAfter = function () {
        this.after = this.sortByAsc(this.after);
    };
    DomAdjust.prototype.sortByAsc = function (list) {
        return list.sort(function (A, B) { return A.elementNum - B.elementNum; });
    };
    return DomAdjust;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/domFactory.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-adjustment/tool/domFactory.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: DomFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomFactory", function() { return DomFactory; });
var DomFactory = /** @class */ (function () {
    function DomFactory() {
        this.isDisabled = false;
    }
    DomFactory.prototype.generatorDom = function (list, type) {
        var _this = this;
        if (list && list.length) {
            list.forEach(function (element) {
                switch (element.elementType) {
                    case '1':
                        _this.createDropdown(element, type);
                        break;
                    case '2':
                        _this.createNumber(element, type);
                        break;
                    case '3':
                        _this.createInput(element, type);
                        break;
                    case '4':
                        _this.createProduct(element, type);
                        break;
                    case '5':
                        break;
                    case '6':
                        break;
                    case '7':
                        break;
                    case '8':
                        _this.createCalender(element, type);
                        break;
                    case '9':
                        break;
                }
            });
        }
    };
    DomFactory.prototype.createDom = function (element, type, callback) {
        var val;
        var title = element.elementName;
        var key = element.elementEnName;
        var container = null;
        if (type == 1) {
            val = element.elementValueBefore;
            container = this.beforeContainer;
        }
        else {
            val = element.elementValueAfter;
            container = this.afterContainer;
        }
        callback({
            val: val,
            title: title,
            type: type,
            key: key,
            isNeedCallServe: element.frontElementCheckServe ? true : false,
            isDisabled: this.isDisabled
            // callType: element.frontElementCheckServe ? element.frontElementCheckServe.split(',')[0] : '',
        }, container);
    };
    DomFactory.prototype.createInput = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createInput(param, container);
        });
    };
    DomFactory.prototype.createNumber = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createNumber(param, container);
        });
    };
    DomFactory.prototype.createCalender = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createCalender(param, container);
        });
    };
    DomFactory.prototype.createDropdown = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            var options = [];
            if (type == 1) {
                // options = [{ label: element.elementDesc, value: element.elementValue}];
                options = [{ label: element.elementDescBefore, value: element.elementValueBefore }];
            }
            else {
                // options = this.fixOptions(element.listElement);
                options = [{ label: element.elementDescAfter, value: element.elementValueAfter }];
            }
            param['options'] = options;
            _this.domAdjust.createDropdown(param, container);
        });
    };
    DomFactory.prototype.createProduct = function (element, type) {
        var _this = this;
        this.createDom(element, type, function (param, container) {
            _this.domAdjust.createProduct(param, container);
        });
    };
    DomFactory.prototype.fixOptions = function (list) {
        var ret = [];
        if (list && list) {
            ret.push({ label: '请选择', value: '' });
            list.forEach(function (element) {
                var obj = {};
                obj['label'] = element.optionValue;
                obj['value'] = element.optionKey;
                ret.push(obj);
            });
        }
        return ret;
    };
    DomFactory.prototype.loadBasicData = function (parameters) {
        debugger;
        this.beforeContainer = parameters.beforeContainer;
        this.afterContainer = parameters.afterContainer;
        this.domAdjust = parameters.domAdjust;
        this.isDisabled = parameters.isDisabled;
    };
    return DomFactory;
}());



/***/ }),

/***/ "./src/app/service/basis/authority/authority.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.config.ts ***!
  \*************************************************************/
/*! exports provided: AuthorityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityConfigService", function() { return AuthorityConfigService; });
var AuthorityConfigService = {
    'querybankOrgTree': 'querybankOrgTree'
};


/***/ }),

/***/ "./src/app/service/basis/authority/authority.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityService", function() { return AuthorityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authority_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authority.config */ "./src/app/service/basis/authority/authority.config.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.service1 */ "./src/app/@uisftech/common/service/http.service1.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorityService = /** @class */ (function () {
    function AuthorityService(httpService) {
        this.httpService = httpService;
    }
    AuthorityService.prototype.querybankOrgTree = function (params) {
        return this.httpService.ajax(app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["API"].IP + _authority_config__WEBPACK_IMPORTED_MODULE_1__["AuthorityConfigService"].querybankOrgTree, params, null);
    };
    AuthorityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AuthorityService);
    return AuthorityService;
}());



/***/ })

}]);
//# sourceMappingURL=default~project-main-manage-add-project-protocol-query-change-record-change-detile-change-detile-mod~05f1c452.js.map