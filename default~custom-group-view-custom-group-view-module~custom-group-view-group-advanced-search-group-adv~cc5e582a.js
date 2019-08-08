(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-group-view-custom-group-view-module~custom-group-view-group-advanced-search-group-adv~cc5e582a"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/bean/group-advanced-search.bean.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/bean/group-advanced-search.bean.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CreatCustExplCondBean, RequestMap, QryRange, CustInfo, IndiCustomer, BusinessInfo, CreditAttrMap, custHoldProdAttrList, custHoldProdAttrListMember, custLabelAttrList, custLableAttrListMember, custGroupAttrList, custGroupAttrListMember, ftpAttrList, ftpAttrListMember, CustExplBean, ThirdPartyEvaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatCustExplCondBean", function() { return CreatCustExplCondBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMap", function() { return RequestMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QryRange", function() { return QryRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustInfo", function() { return CustInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiCustomer", function() { return IndiCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessInfo", function() { return BusinessInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditAttrMap", function() { return CreditAttrMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custHoldProdAttrList", function() { return custHoldProdAttrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custHoldProdAttrListMember", function() { return custHoldProdAttrListMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custLabelAttrList", function() { return custLabelAttrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custLableAttrListMember", function() { return custLableAttrListMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custGroupAttrList", function() { return custGroupAttrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custGroupAttrListMember", function() { return custGroupAttrListMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ftpAttrList", function() { return ftpAttrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ftpAttrListMember", function() { return ftpAttrListMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustExplBean", function() { return CustExplBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyEvaluate", function() { return ThirdPartyEvaluate; });
var CreatCustExplCondBean = /** @class */ (function () {
    function CreatCustExplCondBean() {
        this.requestMap = new RequestMap();
    }
    return CreatCustExplCondBean;
}());

;
var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.qryScopeMap = new QryRange(); //1.查询范围
        this.custInfo = new CustInfo(); //客户基本信息
        this.indiCustomer = new IndiCustomer(); //个人客户属性
        this.businessInfo = new BusinessInfo(); //经营信息
        this.creditAttrMap = new CreditAttrMap(); //信贷业务
        this.thirdPartyEvaluate = new ThirdPartyEvaluate(); //第三方评价
    }
    return RequestMap;
}());

//1.查询范围
var QryRange = /** @class */ (function () {
    function QryRange() {
        this.oldCampaignIds = [
            {
                oldCampaignId: '',
                oldCampaignName: '',
                oldCampaignType: '',
            }
        ];
    }
    return QryRange;
}());

// 客户基本信息
var CustInfo = /** @class */ (function () {
    function CustInfo() {
    }
    return CustInfo;
}());

//5.个人客户属性
var IndiCustomer = /** @class */ (function () {
    function IndiCustomer() {
    }
    return IndiCustomer;
}());

//5.经营信息
var BusinessInfo = /** @class */ (function () {
    function BusinessInfo() {
    }
    return BusinessInfo;
}());

// 7.信贷业务熟悉
var CreditAttrMap = /** @class */ (function () {
    function CreditAttrMap() {
    }
    return CreditAttrMap;
}());

// 8.客户产品属性筛选
var custHoldProdAttrList = /** @class */ (function () {
    function custHoldProdAttrList() {
    }
    return custHoldProdAttrList;
}());

var custHoldProdAttrListMember = /** @class */ (function () {
    function custHoldProdAttrListMember() {
    }
    return custHoldProdAttrListMember;
}());

// 9.客户标签属性筛选
var custLabelAttrList = /** @class */ (function () {
    function custLabelAttrList() {
    }
    return custLabelAttrList;
}());

var custLableAttrListMember = /** @class */ (function () {
    function custLableAttrListMember() {
    }
    return custLableAttrListMember;
}());

//10.客户群属性筛选
var custGroupAttrList = /** @class */ (function () {
    function custGroupAttrList() {
    }
    return custGroupAttrList;
}());

var custGroupAttrListMember = /** @class */ (function () {
    function custGroupAttrListMember() {
    }
    return custGroupAttrListMember;
}());

//11.FTP利润属性筛选
var ftpAttrList = /** @class */ (function () {
    function ftpAttrList() {
    }
    return ftpAttrList;
}());

var ftpAttrListMember = /** @class */ (function () {
    function ftpAttrListMember() {
    }
    return ftpAttrListMember;
}());

// //打开探索条件模态框的bean
var CustExplBean = /** @class */ (function () {
    function CustExplBean() {
    }
    return CustExplBean;
}());

var ThirdPartyEvaluate = /** @class */ (function () {
    function ThirdPartyEvaluate() {
    }
    return ThirdPartyEvaluate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g group-advanced-search\">\r\n  <div class=\"ui-g-12 title\">\r\n    <!-- <header-title [Info]=\"title\"></header-title> -->\r\n  </div>\r\n\r\n  <div class=\"target-custom\">\r\n    <!-- 探索条件 -->\r\n    <div class=\"ui-g-12  cont\">\r\n      <div class=\"position-relative\">\r\n        <div class=\"float-right\">\r\n          <button pButton label=\"全部展开\" (click)=\"listOpen()\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P001')\"></button>\r\n          <button pButton label=\"全部关闭\" (click)=\"listClose()\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P002')\"></button>\r\n        </div>\r\n      </div>\r\n\r\n      <!--折叠面板-->\r\n      <!--1.查询范围-->\r\n      <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P003')\">\r\n        <p-accordionTab header=\"查询范围\" [(selected)]=\"trueOrFalse[0]\" class=\"clearfix\">\r\n\r\n          <!-- 查询范围-去除 开始 -->\r\n          <!-- <div class=\"ui-g-12 ui-g-nopad\" *ngIf=\"role\">\r\n\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              查询范围\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <label><p-radioButton name=\"group1\" label=\"全部\" value=\"3\" [(ngModel)]=\"radioButtonNum\" inputId=\"opt3\" (click)=\"changeCustScope('3')\"></p-radioButton></label>\r\n              <label><p-radioButton name=\"group1\" label=\"主联系人\" value=\"4\" [(ngModel)]=\"radioButtonNum\" inputId=\"opt1\" (click)=\"changeCustScope('4')\"></p-radioButton></label>\r\n              <label><p-radioButton name=\"group1\" label=\"协储员\" value=\"5\" [(ngModel)]=\"radioButtonNum\" inputId=\"opt2\" (click)=\"changeCustScope('5')\"></p-radioButton></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad\" *ngIf=\"!role\">\r\n\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              查询范围\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <label><p-radioButton name=\"group1\" label=\"全部\" value=\"0\" [(ngModel)]=\"radioButtonNum\" inputId=\"opt3\" (click)=\"changeCustScope('0')\"></p-radioButton></label>\r\n              <label><p-radioButton name=\"group1\" label=\"下辖主联系人客户\" value=\"1\" [(ngModel)]=\"radioButtonNum\"  inputId=\"opt1\" (click)=\"changeCustScope('1')\"></p-radioButton></label>\r\n              <label><p-radioButton name=\"group1\" label=\"下辖协储员客户\" value=\"2\" [(ngModel)]=\"radioButtonNum\"  inputId=\"opt2\" (click)=\"changeCustScope('2')\"></p-radioButton></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad\" *ngIf=\"displayopenOrg && !role\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              主联系人机构\r\n            </div>\r\n            <div class=\"ui-g-4\" (click)=\"openOrgTreeClick()\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames\"\r\n                (blur)=\"blurChange()\">\r\n            </div>\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              主联系人\r\n            </div>\r\n            <div class=\"ui-g-4\" (click)=\"openOrgTreeClick1()\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.qryScopeMap.ownerNames\"\r\n                (blur)=\"blurChange1()\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 ui-g-nopad\" *ngIf=\"displayopenOrg1 && !role\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              协储员\r\n            </div>\r\n            <div class=\"ui-g-4\" (click)=\"openOrgTreeClick3()\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.qryScopeMap.assActorNames\"\r\n                (blur)=\"blurChange3()\">\r\n            </div>\r\n          </div> -->\r\n          <!-- 查询范围-去除 结束 -->\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              数据日期\r\n            </div>\r\n            <div class=\"ui-g-5\">\r\n              <monthly-calendar *ngIf=\"restTrue\" class=\"form-control gundam-calendar\" [placeholder]=\"'年-月'\" [startTime]=\"startTime\" (result)=\"creatCustExplCondBean.requestMap.qryScopeMap.startTime = $event\"\r\n                [range]=\"{before:50,after:50}\">\r\n              </monthly-calendar>\r\n              <!-- <p-calendar class=\"gundam-calendar\" [(ngModel)]=\"startTime\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n                showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\"\r\n                [locale]=\"ch\"></p-calendar> -->\r\n              <span style=\"color: red\">*</span>\r\n            </div>\r\n          </div>\r\n\r\n        </p-accordionTab>\r\n      </p-accordion>\r\n      <!--2.系统模型筛选-->\r\n      <!-- <p-accordionTab header=\"系统模型筛选\" [(selected)]=\"trueOrFalse[2]\" class=\"clearfix\">\r\n          <div class=\"ui-g-12 boxShadow\">\r\n            <div class=\"ui-g-1 label bodyBgColor\">\r\n              系统模型筛选\r\n            </div>\r\n            <div class=\"ui-g-4 dropdowns\">\r\n              <p-dropdown [options]=\"sysModuleManage\" [(ngModel)]=\"creatCustExplCondBean.sysModelName\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </p-accordionTab> -->\r\n\r\n      <!-- 4.基础属性-通用属性 -->\r\n      <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P004')\">\r\n        <p-accordionTab header=\"基础属性-通用属性\" [(selected)]=\"trueOrFalse[3]\" class=\"clearfix\">\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              客户类型\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <p-radioButton name=\"groupname2\" value=\"3\" label=\"全部客户\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custType\"\r\n                (click)=\"radioBtn()\"></p-radioButton>\r\n              <p-radioButton name=\"groupname2\" value=\"1\" label=\"个人客户\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custType\"\r\n                (click)=\"radioBtn()\"></p-radioButton>\r\n              <p-radioButton name=\"groupname1\" value=\"2\" label=\"企业客户\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custType\"\r\n                (click)=\"radioBtn()\"></p-radioButton>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              客户号\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custNo\">\r\n            </div>\r\n            <div class=\"ui-g-2 label bodyBgColor  dkts\" *ngIf=\"permissionCheck('X_GPSH_M_P038|TEL')\">\r\n              联系号码\r\n            </div>\r\n            <div class=\"ui-g-4\" *ngIf=\"permissionCheck('X_GPSH_M_P038|TEL')\">\r\n              <input type=\"tel\" pInputText class=\"ui-g-12 cust-basic-num\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.tel\">\r\n            </div>\r\n            <!-- <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n                建立日期\r\n              </div>\r\n              <div class=\"ui-g-4 \">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"creatStaDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"></p-calendar>至\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"creatEndDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"></p-calendar>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              客户名称\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custName\">\r\n            </div>\r\n            <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n              证件类型\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <p-dropdown [options]=\"iDCardOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.IDCardType\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad customBase\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              客户属性\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <p-multiSelect [options]=\"custAttrOption\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.custAttr\" [style]=\"{'width':'100%'}\"\r\n                defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect>\r\n            </div>\r\n            <div class=\"ui-g-2 label bodyBgColor dkts\" *ngIf=\"permissionCheck('X_GPSH_M_P038|IDCARDNO')\">\r\n              证件号码\r\n            </div>\r\n            <div class=\"ui-g-4\" *ngIf=\"permissionCheck('X_GPSH_M_P038|IDCARDNO')\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12 cust-basic-num\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.IDCardNo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              投向行业\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <p-dropdown [options]=\"turnIndustry\" [(ngModel)]=\"turnIndustry1\" [style]=\"{'width':'100%'}\"\r\n                (onChange)=\"taskTypeQryChange($event)\"></p-dropdown>\r\n              <!-- <p-multiSelect [options]=\"turnIndustry\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.turnIndustry\" [style]=\"{'width':'100%'}\"\r\n                    defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect> -->\r\n            </div>\r\n            <div class=\"ui-g-2\" *ngIf=\"indutryOneDis\">\r\n              <p-dropdown [options]=\"turnIndustryOne\" [(ngModel)]=\"turnIndustry2\" [style]=\"{'width':'100%'}\"\r\n                (onChange)=\"taskTypeQryChangeOne($event)\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\" *ngIf=\"indutryTwoDis\">\r\n              <p-dropdown [options]=\"turnIndustryTwo\" [(ngModel)]=\"turnIndustry3\" [style]=\"{'width':'100%'}\"\r\n                (onChange)=\"taskTypeQryChangeTwo($event)\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\" *ngIf=\"indutryThreeDis\">\r\n              <p-dropdown [options]=\"turnIndustryThree\" [(ngModel)]=\"turnIndustry4\" [style]=\"{'width':'100%'}\"\r\n                (onChange)=\"taskTypeQryChangeThree($event)\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </p-accordionTab>\r\n      </p-accordion>\r\n      <!-- 5-1.基础属性-个人属性 -->\r\n      <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"creatCustExplCondBean.requestMap.custInfo.custType!=='2' && permissionCheck('SID00002_P027_P001_P009_P004')\">\r\n        <p-accordionTab header=\"基础属性-个人属性\" [(selected)]=\"trueOrFalse[4]\" class=\"clearfix\">\r\n          <!-- <div class=\"ui-g-12 boxShadow grkh\">\r\n          <div class=\"ui-g-9 ui-g-nopad\"> -->\r\n          <div class=\"ui-g-12 ui-g-nopad\">\r\n            <div class=\"ui-g-2 label bodyBgColor\">\r\n              性别\r\n            </div>\r\n            <div class=\"ui-g-4 \">\r\n              <p-multiSelect [options]=\"sexOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.sexs\" [style]=\"{'width':'100%'}\"\r\n                defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect>\r\n            </div>\r\n            <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n              出生日期\r\n            </div>\r\n            <div class=\"ui-g-4 ui-g-nopad\">\r\n\t\t\t\t<div class=\"ui-g-5\">\r\n\t\t\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"birthDateFrom\" [maxDate]=\"birthDateTo\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t\t\t\t\tyearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"onchange1()\" ></p-calendar>\r\n\t\t\t\t</div>\r\n              \t<span class=\"ui-g-1\">至</span>\r\n              \t<div class=\"ui-g-5\">\r\n\t\t\t\t\t<p-calendar [showIcon]=\"true\" [(ngModel)]=\"birthDateTo\" [minDate]=\"birthDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t\t\tyearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"onchange2()\" class=\"cand\"></p-calendar>\r\n            \r\n              </div>\r\n          </div>\r\n          <!-- <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n                年龄\r\n              </div>\r\n              <div class=\"ui-g-4 ui-g-nopad\">\r\n                <div class=\"ui-g-11 ui-g-nopad\">\r\n                  <div class=\"ui-g-5\">\r\n                    <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.ageFirstFrom\" style=\"width: 85%;\">\r\n                  </div>\r\n                  <span class=\"kuang \">至</span>\r\n                  <div class=\"ui-g-5\">\r\n                    <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.ageFirstTo\" style=\"width: 85%;\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-11 ui-g-nopad\">\r\n                  <div class=\"ui-g-5\">\r\n                    <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.ageSecondFrom\" style=\"width: 85%;\">\r\n                  </div>\r\n                  <span class=\"kuang \">至</span>\r\n                  <div class=\"ui-g-5\">\r\n                    <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.ageSecondTo\" style=\"width: 85%;\">\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12 ui-g-nopad\">\r\n      <div class=\"ui-g-2 label bodyBgColor\">\r\n        户口性质\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <p-multiSelect [options]=\"houseRegOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.residType\" [style]=\"{'width':'100%'}\"\r\n          defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect>\r\n      </div>\r\n      <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n        婚姻状况\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <p-multiSelect [options]=\"marryOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.maritalStatus\" [style]=\"{'width':'100%'}\"\r\n          defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-g-nopad\">\r\n      <div class=\"ui-g-2 label bodyBgColor\">\r\n        经营地址\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <input type=\"text\" pInputText class=\"ui-g-12 cust-basic\" pInputText [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.manageAddr\">\r\n      </div>\r\n      <div class=\"ui-g-2 label bodyBgColor\">\r\n        涉农属性\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <p-multiSelect [options]=\"agricuOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.custInfo.isAgriculture\" [style]=\"{'width':'100%'}\"\r\n          defaultLabel='请选择(多选)' maxSelectedLabels=\"30\"></p-multiSelect>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-g-nopad\">\r\n      <div class=\"ui-g-2 label bodyBgColor\">\r\n        家庭地址\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <input type=\"text\" class=\"ui-g-12 cust-basic\" [(ngModel)]=\"creatCustExplCondBean.requestMap.indiCustomer.familyAddr\" pInputText>\r\n      </div>\r\n      <!-- </div>\r\n          </div> -->\r\n    </div>\r\n    </p-accordionTab>\r\n    </p-accordion>\r\n    <!-- 5-2.基础属性-企业客户属性(经营信息) -->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"creatCustExplCondBean.requestMap.custInfo.custType!=='1' && permissionCheck('SID00002_P027_P001_P009_P004')\">\r\n      <p-accordionTab header=\"基础属性-企业客户属性(经营信息)\" [(selected)]=\"trueOrFalse[5]\" class=\"clearfix\">\r\n        <!-- <div class=\"ui-g-12 boxShadow\">\r\n          <div class=\"ui-g-9 ui-g-nopad\"> -->\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <!-- <div class=\"ui-g-2 label bodyBgColor\">\r\n                所属行业\r\n              </div>\r\n              <div class=\"ui-g-4\">\r\n                <p-multiSelect [options]=\"professOpt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.industry\" [style]=\"{'width':'100%'}\"\r\n                  defaultLabel='请选择(多选)' maxSelectedLabels='30'></p-multiSelect>\r\n              </div> -->\r\n          <div class=\"ui-g-2 label bodyBgColor \">\r\n            中小企业类型\r\n          </div>\r\n          <div class=\"ui-g-4 \">\r\n            <p-multiSelect [options]=\"enterTypeOPt\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.entType\" [style]=\"{'width':'100%'}\"\r\n              defaultLabel='请选择(多选)' maxSelectedLabels='30'></p-multiSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor \">\r\n            法人代表\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText class=\"ui-g-12\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.corpName\" pInputText>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n            法人代表联系号码\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText class=\"ui-g-12\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.mobile\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            资产总额\r\n          </div>\r\n          <div class=\"ui-g-4 ui-g-nopad\">\r\n            <!-- <div class=\"ui-g-11  ui-g-nopad\"> -->\r\n            <div class=\"ui-g-5\">\r\n              <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.assetDown\" style=\"width: 85%;\">\r\n              <!-- <div class=\"ui-g-1 bb\">元</div> -->\r\n            </div>\r\n            <div class=\"kuang  ui-g-2\">至</div>\r\n            <div class=\"ui-g-5\">\r\n              <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.assetUp\" style=\"width: 85%;\">\r\n              <!-- <div class=\"ui-g-1 bb\">元</div> -->\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor dkts\">\r\n            负债总额\r\n          </div>\r\n          <div class=\"ui-g-4 ui-g-nopad\">\r\n            <div class=\"ui-g-5\">\r\n              <input type=\"text\" pInputText class=\"ui-g-8 \" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.debtDown\" style=\"width: 85%;\"\r\n                pInputText>\r\n            </div>\r\n            <div class=\"kuang ui-g-2\">至</div>\r\n            <div class=\"ui-g-5\">\r\n              <input type=\"text\" pInputText class=\"ui-g-8\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.debtUp\" style=\"width: 85%;\"\r\n                pInputText>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            经营地址\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText class=\"ui-g-12\" [(ngModel)]=\"creatCustExplCondBean.requestMap.businessInfo.manageAddr\" pInputText>\r\n          </div>\r\n          <!-- </div>\r\n          </div> -->\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!--6.信贷业务属性-->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P005')\">\r\n      <p-accordionTab header=\"信贷业务属性\" [(selected)]=\"trueOrFalse[6]\" class=\"clearfix\">\r\n        <!-- <div class=\"ui-g-12 boxShadow\">\r\n          <div class=\"ui-g-9 ui-g-nopad\"> -->\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <!-- <div class=\"ui-g-2 label bodyBgColor\">\r\n                    信用评分\r\n                  </div>\r\n                  <div class=\"ui-g-4  \">\r\n                    <div class=\"dropdowns\">\r\n                      <p-dropdown [options]=\"creditOpt\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateType\"></p-dropdown>\r\n                    </div>\r\n                  </div> -->\r\n          <!-- <div class=\"ui-g-2 label bodyBgColor\">\r\n              享受优惠\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n              <p-dropdown [options]=\"cities\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.isEnjoyDiscount\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n            </div> -->\r\n\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            十级分类\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"tenClass\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.tenLevelClassification\" [style]=\"{'width':'100%'}\"\r\n              maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            授信客户类型\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.creditCustType\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            合同状态\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"conditionHT\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.contractStatus\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            名单制查询\r\n          </div>\r\n          <div class=\"ui-g-4  \">\r\n            <div class=\"dropdowns\">\r\n              <p-dropdown [options]=\"items\" [(ngModel)]=\"selectedCities\" [style]=\"{'width':'100%'}\" (onChange)=\"nodeExpend($event)\"></p-dropdown>\r\n              <!-- <p-multiSelect [options]=\"items\" [(ngModel)]=\"selectedCities\" (onChange)=\"nodeExpend($event)\" defaultLabel='请选择(多选)' maxSelectedLabels=\"302\"\r\n                          filter=\"false\"></p-multiSelect> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            担保方式\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"guaranteeMode\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.guaranteeMethod\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            贷款用途\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"loanUse2\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.loanUseId1\" [style]=\"{'width':'100%'}\"\r\n              (onChange)=\"loanUseChange($event)\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2\" *ngIf=\"loanUseTwoDis\">\r\n            <p-dropdown [options]=\"loanUse3\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.loanUseId2\" [style]=\"{'width':'100%'}\"\r\n              (onChange)=\"loanUseChange1($event)\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            剔除贷款否决类型\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"eliLoanVetoedTy2\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.eliLoanVetoedTypeId2\"\r\n              [style]=\"{'width':'100%'}\" (onChange)=\"loansVetoedTypeChange2($event)\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2\" *ngIf=\"eliLoanTwoDis\">\r\n            <p-dropdown [options]=\"eliLoanVetoedTy3\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.eliLoanVetoedTypeId3\"\r\n              [style]=\"{'width':'100%'}\" (onChange)=\"loansVetoedTypeChange3($event)\"></p-dropdown>\r\n          </div>\r\n          <!-- <div class=\"ui-g-2\" *ngIf=\"eliLoanThreeDis\" >\r\n              <p-dropdown [options]=\"eliLoanVetoedTy3\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.eliLoanVetoedTypeId3\" [style]=\"{'width':'100%'}\"\r\n              (onChange)=\"loansVetoedTypeChange3($event)\"></p-dropdown>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            信用评分\r\n          </div>\r\n          <div class=\"ui-g-4  \">\r\n            <div class=\"dropdowns\">\r\n              <p-dropdown [options]=\"creditOpt\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateType\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-4 ui-g-nopad\">\r\n            <div class=\"ui-g-12  ui-g-nopad\" *ngIf=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateType==2||creatCustExplCondBean.requestMap.creditAttrMap.crdRateType==1\">\r\n              <div class=\"ui-g-5\">\r\n                <p-dropdown [options]=\"creditStaOpt1\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateStart\"></p-dropdown>\r\n              </div>\r\n              <div class=\"ui-g-1\">\r\n                <span>至</span>\r\n              </div>\r\n              <div class=\"ui-g-5\">\r\n                <p-dropdown [options]=\"creditEndOpt1\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateEnd\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12  ui-g-nopad\" *ngIf=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateType==3\">\r\n              <div class=\"ui-g-5\">\r\n                <p-dropdown [options]=\"creditStaOpt3\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateStart\"></p-dropdown>\r\n              </div>\r\n              <div class=\"ui-g-1\">\r\n                <span>至</span>\r\n              </div>\r\n              <div class=\"ui-g-5\">\r\n                <p-dropdown [options]=\"creditEndOpt3\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.creditAttrMap.crdRateEnd\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n            <!-- </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!-- 7.产品属性 -->\r\n    <p-accordion [multiple]=\"true\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P006')\" class=\"gundam-accordion\" (onOpen)=\"accordion7Open($event)\"\r\n      (onClose)=\"accordion7Close($event)\">\r\n      <p-accordionTab header=\"产品属性\" [(selected)]=\"trueOrFalse[7]\" class=\"clearfix\">\r\n\r\n        <span class=\"gundam-product\" *ngIf=\"gundamProperty\" (click)=\"test()\">产品属性</span>\r\n\r\n        <!-- 产品属性/指标回显 -->\r\n        <div class=\"ui-g-12 table pro_chose product-accorion\">\r\n          <p-dataTable [value]=\"productMetric\" [emptyMessage]=\"tabMesg\">\r\n            <p-headerColumnGroup>\r\n              <p-row>\r\n                <p-column field=\"label\" header=\"产品名称\" rowspan=\"2\"></p-column>\r\n                <p-column field=\"target\" header=\"产品指标\" rowspan=\"2\"></p-column>\r\n                <p-column field=\"canshu\" header=\"参数值\" rowspan=\"2\"></p-column>\r\n              </p-row>\r\n\r\n            </p-headerColumnGroup>\r\n            <p-column field=\"label\"></p-column>\r\n            <p-column field=\"target\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.target|codeValuePie:zhibiao}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"canshu\"></p-column>\r\n          </p-dataTable>\r\n          <p-paginator class=\"gundam-product-paginator\" rows=\"10\" totalRecords=\"{{prodtotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"productPaginate($event)\"></p-paginator>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!-- 9.标签属性 -->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P007')\">\r\n      <p-accordionTab header=\"标签属性\" [(selected)]=\"trueOrFalse[8]\" class=\"clearfix\">\r\n        <div class=\"ui-g-12 pro_chose cus_chose\">\r\n          <div class=\"ui-g-12 conright ui-g-nopad\">\r\n            <div class=\"tit\">\r\n              <div class=\"num bodyBgColor\">序号</div>\r\n              <div class=\"cont\">\r\n                <span class=\"bg bodyBgColor\">\r\n                  标签类型\r\n                </span>\r\n                <span class=\"bg bodyBgColor\">\r\n                  标签名称\r\n                </span>\r\n              </div>\r\n              <span class=\"huo bg bodyBgColor\">\r\n                且\r\n              </span>\r\n              <span class=\"huo bg bodyBgColor\" (click)=\"doAdd('custLabelAttr')\">\r\n                或\r\n                <img class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\" alt=\"\">\r\n              </span>\r\n            </div>\r\n            <div class=\"tit\" *ngFor=\"let items of custLabelAttrList;let i = index\">\r\n              <div class=\"num bodyBgColor\">{{i+1}}</div>\r\n              <div class=\"total\">\r\n                <div class=\"cont\" *ngFor=\"let item of items; let ind=index\">\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [(ngModel)]=\"item.labelTypeId\" [options]=\"cusTagOpt\" [style]=\"{'width':'90%'}\" (onChange)=\"change(item,$event)\"></p-dropdown>\r\n                  </span>\r\n                  <span>\r\n                    <p-autoComplete class=\"gundam-autocomplete\" [(ngModel)]=\"item.selectNameOpt\" [suggestions]=\"item.cusTagNameOpt\" field=\"labelName\"\r\n                      [style]=\"{'width':'100%'}\" (onSelect)=\"selectCusTagNameOpt(i,ind,$event)\" (completeMethod)=\"cusTagName(i,ind,$event)\"\r\n                      placeholder=\"请输入联想词...\"></p-autoComplete>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doAndAdd(i,'custLabelAttr')\" class=\"gundam-addimg\"></b> <b (click)=\"doAndReduce(i,'custLabelAttr')\"\r\n                    class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doAndAdd(i,'custLabelAttr')\" class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\"\r\n                  alt=\"\">\r\n                <img (click)=\"doAndReduce(i,'custLabelAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doReduce(i,'custLabelAttr')\" class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doReduce(i,'custLabelAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!--10.客群属性  -->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P008')\">\r\n      <p-accordionTab header=\"客群属性\" [(selected)]=\"trueOrFalse[9]\" class=\"clearfix\">\r\n        <div class=\"ui-g-12 pro_chose cus_chose\">\r\n          <div class=\"ui-g-12 conright ui-g-nopad\">\r\n            <div class=\"tit\">\r\n              <div class=\"num bodyBgColor\">序号</div>\r\n              <div class=\"cont\">\r\n                <span class=\"bg bodyBgColor\">\r\n                  客户群类型\r\n                </span>\r\n                <span class=\"bg bodyBgColor\">\r\n                  客户群名称\r\n                </span>\r\n              </div>\r\n              <span class=\"huo bg bodyBgColor\">\r\n                且\r\n              </span>\r\n              <span class=\"huo bg bodyBgColor\" (click)=\"doAdd('custGroupAttr')\">\r\n                或\r\n                <img class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\" alt=\"\">\r\n              </span>\r\n            </div>\r\n            <div class=\"tit\" *ngFor=\"let items of custGroupAttrList;let i = index\">\r\n              <div class=\"num bodyBgColor\">{{i+1}}</div>\r\n              <div class=\"total\">\r\n                <div class=\"cont\" *ngFor=\"let item of items; let ind=index\">\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"CusGroupAttrOpt\" [(ngModel)]=\"item.custGrouTypeId\" [style]=\"{'width':'90%'}\"></p-dropdown>\r\n                  </span>\r\n                  <span>\r\n                    <p-autoComplete class=\"gundam-autocomplete\" [(ngModel)]=\"item.selectNameOpt\" [suggestions]=\"item.cusGroupNameOpt\" [style]=\"{'width':'100%'}\"\r\n                      field=\"groupName\" (onSelect)=\"selectCusGroupNameOpt(i,ind,$event)\" (completeMethod)=\"cusGroupName(i,ind,$event)\"\r\n                      placeholder=\"请输入联想词...\" emptyMessage=\"没有匹配到数据\"></p-autoComplete>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doAndAdd(i,'custGroupAttr')\" class=\"gundam-addimg\"></b> <b (click)=\"doAndReduce(i,'custGroupAttr')\"\r\n                    class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doAndAdd(i,'custGroupAttr')\" class=\"gundam-adding\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\"\r\n                  alt=\"\">\r\n                <img (click)=\"doAndReduce(i,'custGroupAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doReduce(i,'custGroupAttr')\" class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doReduce(i,'custGroupAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!-- 11.FTP利润属性 -->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P009')\">\r\n      <p-accordionTab header=\"FTP利润属性\" [(selected)]=\"trueOrFalse[10]\" class=\"clearfix\">\r\n        <div class=\"ui-g-12 pro_chose ftp_chose\">\r\n          <div class=\"ui-g-12 conright ui-g-nopad\">\r\n            <div class=\"tit\">\r\n              <div class=\"num bodyBgColor\">序号</div>\r\n              <div class=\"cont\">\r\n                <span class=\"bg bodyBgColor\">\r\n                  时间\r\n                </span>\r\n                <span class=\"bg bodyBgColor\">\r\n                  属性\r\n                </span>\r\n                <span class=\"bg bodyBgColor\">\r\n                  参数值\r\n                </span>\r\n              </div>\r\n              <span class=\"huo bg bodyBgColor\">\r\n                且\r\n              </span>\r\n              <span class=\"huo bg bodyBgColor\" (click)=\"doAdd('ftpAttr')\">\r\n                或\r\n                <img class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\" alt=\"\">\r\n              </span>\r\n            </div>\r\n            <div class=\"tit\" *ngFor=\"let items of ftpAttrList;let i = index\">\r\n              <div class=\"num bodyBgColor\">{{i+1}}</div>\r\n              <div class=\"total\">\r\n                <div class=\"cont\" *ngFor=\"let item of items; let ind=index\">\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"fTPTimeOpt\" [(ngModel)]=\"item.profit\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n                  </span>\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"fTPAttrOpt\" [(ngModel)]=\"item.profitAttr\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n                  </span>\r\n                  <span class=\"w30\">\r\n                    <input type=\"number\" [(ngModel)]=\"item.profitParmFrom\">\r\n                    <span class=\"until bodyBgColor\">至</span>\r\n                    <input type=\"number\" [(ngModel)]=\"item.profitParmTo\">\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doAndAdd(i,'ftpAttr')\" class=\"gundam-addimg\"></b> <b (click)=\"doAndReduce(i,'ftpAttr')\" class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doAndAdd(i,'ftpAttr')\" class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\"\r\n                  alt=\"\">\r\n                <img (click)=\"doAndReduce(i,'ftpAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n              <div class=\"huo num bodyBgColor\">\r\n                <!-- <b (click)=\"doReduce(i,'ftpAttr')\" class=\"gundam-subimg\"></b> -->\r\n                <img (click)=\"doReduce(i,'ftpAttr')\" class=\"gundam-subimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/minus.png\"\r\n                  alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n    <!-- 12.第三方评价 -->\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\" *ngIf=\"permissionCheck('SID00002_P027_P001_P009_P010')\">\r\n      <p-accordionTab header=\"第三方评价\" [(selected)]=\"trueOrFalse[1]\" class=\"clearfix\">\r\n        <!-- <div class=\"ui-g-12 ui-g-nopad\"> -->\r\n        <!-- <div class=\"ui-g-2 label bodyBgColor\">\r\n                  系统信用评估人\r\n                </div>\r\n                <div class=\"ui-g-4  \">\r\n                  <div>\r\n                    <p-dropdown [options]=\"creditOpt\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n                  </div>\r\n                </div> -->\r\n\r\n        <!-- </div> -->\r\n\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            不良嗜好\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"badHobby\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.badHobby\" [style]=\"{'width':'100%'}\"\r\n              maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            收入来源\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"groupSourceOfIncome\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.sourceOfIncome\"\r\n              [style]=\"{'width':'100%'}\" maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            家庭年收入\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"groupIncomeLevel\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.yearIncomeOfFam\"\r\n              [style]=\"{'width':'100%'}\" maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            车辆状况\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"groupCarFlag\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.vehicleCondition\"\r\n              [style]=\"{'width':'100%'}\" maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            家庭关系情况\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"groupFamilyStableFlag\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.familyRelations\"\r\n              [style]=\"{'width':'100%'}\" maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            健康情况\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-multiSelect [options]=\"groupHealthFlag\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.health\" [style]=\"{'width':'100%'}\"\r\n              maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            建议额度\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <div>\r\n              <p-multiSelect [options]=\"groupOfferLines\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.amountOfAdvice\"\r\n                [style]=\"{'width':'100%'}\" maxSelectedLabels=\"30\" defaultLabel='请选择(多选)'></p-multiSelect>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            信用评价\r\n          </div>\r\n          <div class=\"ui-g-4  \">\r\n            <div>\r\n              <p-dropdown [options]=\"groupCreditEval\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.creditEvaluation\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            是否预授信\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"isPreApproval\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.isPreApproval\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            是否目标授信客户\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <p-dropdown [options]=\"isTargetCreditCust\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.isTargetCreditCust\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 ui-g-nopad\">\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            预授信额度\r\n          </div>\r\n          <div class=\"ui-g-4 padding-0\">\r\n            <div class=\"ui-g-12\">\r\n              <input type=\"number\" pInputText class=\"ui-g-5 cust-basic-num\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountFrom\">\r\n              <span class=\"ui-g-2\">至</span>\r\n              <input type=\"number\" pInputText class=\"ui-g-5 cust-basic-num\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountTo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-2 label bodyBgColor\">\r\n            预授信时间\r\n          </div>\r\n          <div class=\"ui-g-4 padding-0\">\r\n            <div class=\"ui-g-12 padding-0\">\r\n              <p-calendar class=\"ui-g-5\" [showIcon]=\"true\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalTimeFrom\"\r\n                [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"></p-calendar>\r\n              <span class=\"ui-g-2 text-align-c\">至</span>\r\n              <p-calendar class=\"ui-g-5\" [showIcon]=\"true\" [(ngModel)]=\"creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalTimeTo\"\r\n                [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\" [style]=\"{'margin-top':'50px'}\">\r\n  <button pButton label=\"重 置\" (click)=\"rest()\"></button>\r\n  <button pButton label=\"查 询\" (click)=\"saveAndLook(1)\" *ngIf=\"permissionCheck('X_GPSH_M_P038')\"></button>\r\n</div>\r\n\r\n\r\n<p-dialog *ngIf=\"filterDisplay\" [(visible)]=\"filterDisplay\" (onHide)=\"onFilter()\" class=\"custDetialInfoList gundam-display\" modal=\"modal\" [responsive]=\"true\"\r\n  [positionTop]=30>\r\n\r\n  <p-header> 客户查询明细 </p-header>\r\n  <!-- 客户名单详细 -->\r\n  <div>筛选结果：\r\n    <span>{{totalNum}}</span> 名客户</div>\r\n  <div class=\"ui-g-12 boxShadow \" style=\"flex-direction:column\"></div>\r\n  <div class=\"btn-add\">\r\n    <span class=\"icoColor\" (click)=\"chooseParam()\">选择字段</span>\r\n  </div>\r\n  <div style=\"overflow:auto;\" class=\"table\">\r\n    <p-dataTable [value]=\"custExplTable1\" [emptyMessage]=\"tabMesg\"  id=\"domGundam\" scrollable=\"true\" scrollHeight=\"400px\">\r\n      <p-headerColumnGroup>\r\n        <p-row>\r\n          <p-column rowspan=\"2\" [style]=\"{'width': '112px'}\">\r\n            <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n              <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" binary=\"false\" [(ngModel)]=\"checkAll\" (click)=\"checkAllClick()\"></p-checkbox>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column *ngFor=\"let item of headerTable\" [style]=\"{'width': '112px'}\" field=\"{{item.field}}\" header=\"{{item.header}}\" rowspan=\"{{item.rowspan}}\"\r\n            colspan=\"{{item.colspan}}\"></p-column>\r\n        </p-row>\r\n        <p-row>\r\n          <p-column [style]=\"{'width': '112px'}\" *ngFor=\"let item of dataTable\" field=\"{{item.field}}\" header=\"{{item.header}}\" colspan=\"{{item.colspan}}\"></p-column>\r\n        </p-row>\r\n      </p-headerColumnGroup>\r\n\r\n      <p-column [style]=\"{'width': '112px'}\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column [style]=\"{'width': '112px'}\" field=\"CUST_ID\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.CUST_ID}}</a>\r\n        </ng-template>\r\n      </p-column >\r\n      <p-column [style]=\"{'width': '112px'}\" field=\"CUST_NAME\"></p-column>\r\n      <p-column [style]=\"{'width': '112px'}\" *ngFor=\"let item of dataTable\" field=\"{{item.field}}\"></p-column>\r\n      <p-column [style]=\"{'width': '112px'}\" *ngFor=\"let item of dataTable1\" field=\"{{item.field}}\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"10\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateExplo($event)\"></p-paginator>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <span class=\"ui-g-11 btn\">\r\n      <!-- <button pButton type=\"button\" label=\"发送短信\" (click)='sendMessage()' *ngIf=\"permissionCheck('X_GPSH_M_P038_P160')\"></button> -->\r\n      <button pButton type=\"button\" class=\"yushouxin\" (click)=\"toPrecreditApply()\" label=\"预授信\" *ngIf=\"permissionCheck('X_GPSH_M_P038_P161')\"></button>\r\n      <button pButton type=\"button\" class=\"sanfangPJ\" (click)=\"toAppraiserEvaluate()\" label=\"第三方评价\" *ngIf=\"permissionCheck('X_GPSH_M_P038_P162')\"></button>\r\n      <button pButton type=\"button\" label=\"新建联系计划\" (click)='newPlan()' *ngIf=\"permissionCheck('X_GPSH_M_P038_P163')\"></button>\r\n      <button pButton type=\"button\" label=\"加入自选群组\" (click)='joinGroup()' *ngIf=\"permissionCheck('X_GPSH_M_P038_P164')\"></button>\r\n      <button pButton type=\"button\" label=\"新建联系记录\" (click)='dealTask()' *ngIf=\"permissionCheck('X_GPSH_M_P038_P165')\"></button>\r\n      <button pButton type=\"button\" label=\"生成交叉销售清单\" (click)='generatList()'*ngIf= \"permissionCheck('X_GPSH_M_P038_P168')\"></button>\r\n      <!-- *ngIf=\"permissionCheck('X_GPSH_M_P038_P167')\" -->\r\n      <button pButton type=\"button\" class=\"download-backgroud-color\" label=\"下载\" (click)='download()' [disabled]='downloadTrue' *ngIf=\"permissionCheck('X_GPSH_M_P038_P167')\"></button>\r\n    </span>\r\n  </div>\r\n</p-dialog>\r\n<!-- 客户名单列表- 字段选择 -->\r\n<p-dialog *ngIf=\"chooseDisplay\" [(visible)]=\"chooseDisplay\" class=\"gundam-display1\" baseZIndex=\"2\" modal=\"true\" responsive=\"true\">\r\n  <p-header>\r\n    选择显示字段\r\n  </p-header>\r\n  <div class=\"ui-g-12 background-color\"></div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll2()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">基础属性</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of baseAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">通用属性</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of generalAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">个人属性</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of presonAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">企业属性</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of companyAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">存款</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of saveAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">贷款</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of loansAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">FTP利润</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of FTPAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">承兑</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of acceptAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">理财</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of mattersAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">贷记卡</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of creditAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">积分卡</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of pointAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 background-color\">网上银行</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of onlineAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">微信银行</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of WX_Attr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div>\r\n  <div class=\"ui-g-12 background-color\">手机银行</div>\r\n  <div class=\"ui-g-12\">\r\n    <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of phoneAttr;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\"\r\n      [disabled]=\"item.isDisabled\" (click)=\"chooseItem(item)\"></p-checkbox>\r\n  </div> -->\r\n  <!-- <p>第二行</p>\r\n    <div class=\"ui-g-12\">\r\n      <p-checkbox class=\"ui-g-3\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of custExplTable;let index = index\" [(ngModel)]=\"item.isDisabled ? item.isDisabled : item.isCheck\" [disabled]=\"item.isDisabled\"\r\n      (click)=\"chooseItem(item)\"></p-checkbox>\r\n    </div> -->\r\n  <!-- <div class=\"ui-g-12 table\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n  </div> -->\r\n\r\n  <div class=\"btnDiv\">\r\n      <button pButton type=\"button\" label=\"确定\" (click)=\"save(1)\"></button>\r\n    </div>\r\n\r\n\r\n</p-dialog>\r\n\r\n\r\n</div>\r\n<!-- 产品属性机构树 -->\r\n<p-dialog *ngIf=\"productmodel\" [(visible)]=\"productmodel\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=30>\r\n  <div>\r\n    <select-product-component [inValue]=\"invalue\" [isProperty]=\"isProperty\" (outValue)=\"outValue5($event)\"></select-product-component>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!--联系人机构树-->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n  <p-header>机构树</p-header>\r\n  <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-all-tree-component> -->\r\n  <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"orgTreeDisplay2\" [(visible)]=\"orgTreeDisplay2\" class=\"gundam-display\" modal=\"modal\" [responsive]=\"true\"\r\n  [positionTop]=10 class=\"addDisplay\" (onHide)=\"onHideClose()\">\r\n  <p-header>机构树</p-header>\r\n  <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall2($event)\"></org-mutil-all-tree-component> -->\r\n  <queryUser (outValue)=\"perInfor($event)\" [in-value]=\"queryUserInValue\"></queryUser>\r\n</p-dialog>\r\n<!--联系人机构树-->\r\n<!--协储员机构树-->\r\n<p-dialog *ngIf=\"ActorOrgDisplay\" [(visible)]=\"ActorOrgDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n  <p-header>机构树</p-header>\r\n  <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-all-tree-component> -->\r\n  <org-tree-component (outValue)=\"treeCall2($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"ActorOrgDisplay2\" [(visible)]=\"ActorOrgDisplay2\" class=\"gundam-display\" modal=\"modal\" [responsive]=\"true\"\r\n  [positionTop]=10 class=\"addDisplay\" (onHide)=\"onHideClose()\">\r\n  <p-header>机构树</p-header>\r\n  <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall2($event)\"></org-mutil-all-tree-component> -->\r\n  <queryUser (outValue)=\"perInfor2($event)\" [in-value]=\"queryUserInValue2\"></queryUser>\r\n</p-dialog>\r\n<!--协储员机构树-->\r\n\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"true\" responsive=\"true\" baseZIndex=\"3\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <!-- 新建联系计划 -->\r\n  <app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n  <!-- 发送短信 -->\r\n  <app-note-model *ngIf=\"nodeDisplay\" (outValue)=\"nodeDisplayCall($event)\"></app-note-model>\r\n  <app-custom-task-deal *ngIf=\"dealDisplay\" [in-value]=\"dealInValue\" (outValue)=\"dealCall($event)\"></app-custom-task-deal>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" baseZIndex=\"1\">\r\n  <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\" baseZIndex=\"6\"></p-growl>\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ui-g .title {\n  padding: 0; }\n.ui-g .label {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center; }\n.ui-g .btn {\n  text-align: center; }\n.ui-g .btn-add {\n  text-align: right;\n  padding-bottom: 5px; }\n.ui-g .tab {\n  overflow-x: scroll; }\n.ui-g .padding-0 {\n  padding: 0; }\n.ui-g .text-align-c {\n  text-align: center; }\n.background-color {\n  background: #f7f7f7; }\n.boxShadow {\n  margin-bottom: 10px; }\n.target-custom .bodyBgColor {\n  background: transparent !important; }\n.target-custom .clear {\n  overflow: hidden; }\n.target-custom .left {\n  float: left; }\n.target-custom .cont {\n  padding: 0 20px; }\n.target-custom .cont .label {\n    background-color: #d2f1ef !important;\n    color: #666668 !important;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n.target-custom .cont .ui-g-12 {\n    display: flex; }\n.target-custom .cont .kuang {\n    float: left;\n    padding: 10px;\n    text-align: center; }\n.target-custom .cont .money-text {\n    margin-left: 46px;\n    padding: 10px; }\n.target-custom .cont .text-money {\n    margin-left: 19px;\n    padding: 10px; }\n.target-custom .cont .dkts {\n    margin-left: 7px; }\n.target-custom .cont .pro_chose {\n    display: flex;\n    flex-direction: row; }\n.target-custom .cont .pro_chose .conright {\n      display: flex;\n      flex-wrap: wrap; }\n.target-custom .cont .pro_chose .conright .total {\n        display: flex;\n        flex: 1;\n        flex-direction: column; }\n.target-custom .cont .pro_chose .conright .tit {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 3px;\n        background-color: #fafafa; }\n.target-custom .cont .pro_chose .conright .tit .num {\n          color: #0a3d54 !important;\n          width: 15%;\n          text-align: center;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-left: 4px; }\n.target-custom .cont .pro_chose .conright .tit .cont {\n          display: flex;\n          padding: 0;\n          /* width: 87%; */\n          flex: 1; }\n.target-custom .cont .pro_chose .conright .tit span {\n          color: #0a3d54 !important;\n          width: 15%;\n          text-align: center;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          margin-left: 4px;\n          height: 35px; }\n.target-custom .cont .pro_chose .conright .tit .w30 {\n          flex-direction: row;\n          align-items: center;\n          flex: 1; }\n.target-custom .cont .pro_chose .conright .tit .w30 input {\n            width: 40%;\n            height: 30px; }\n.target-custom .cont .pro_chose .conright .tit .w30 .until {\n            height: 21px;\n            width: 10%;\n            margin: 0 4px;\n            text-align: center; }\n.target-custom .cont .pro_chose .conright .tit .huo {\n          flex-direction: row;\n          align-items: center; }\n.target-custom .cont .pro_chose .conright .tit .huo b {\n            width: 22px;\n            height: 22px;\n            margin-left: 5%;\n            text-align: center;\n            color: #000; }\n.target-custom .cont .pro_chose .conright .tit:nth-child(2n+2) {\n        background-color: #efefef; }\n.target-custom .cont .pro_chose .conright .tit:nth-child(1) {\n        background-color: #d2f1ef; }\n.target-custom .cont .product-accorion {\n    display: block; }\n.target-custom .cont .cus_chose .cont span {\n    width: 50% !important; }\n.target-custom .cont .ftp_chose .cont span {\n    width: 33% !important; }\n.target-custom .cont .ckresult {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n.target-custom .cont .ckresult .title {\n      display: flex;\n      flex-direction: row; }\n.target-custom .cont .ckresult .title span {\n        flex: 1;\n        text-align: center;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        margin: 0 2px;\n        height: 35px;\n        line-height: 35px; }\n.target-custom .cont .position-relative {\n    position: relative;\n    height: 40px; }\n.target-custom .cont .position-relative .float-right {\n      display: inline-block;\n      position: absolute;\n      right: 0; }\n.target-custom .screen {\n  width: 99%;\n  height: 30px; }\n.target-custom .cust-basic {\n  width: 100%;\n  height: 30px; }\n.target-custom .cust-basic-num {\n  width: 100%;\n  height: 30px; }\n.target-custom .ui-dropdown .ui-dropdown-label {\n  width: auto;\n  height: 30px; }\n.target-custom .table {\n  text-align: center; }\n.target-custom .table .btn-add {\n    text-align: right;\n    padding-bottom: 5px; }\n.target-custom .gundam-product {\n  text-align: right;\n  width: 91px;\n  background: url('product.png') no-repeat left;\n  font-size: 14px;\n  position: absolute;\n  top: 22px;\n  right: 89px;\n  color: #009fda;\n  cursor: pointer; }\n.target-custom .ui-g-4 input {\n  width: 100% !important; }\n.boxShadow .padding-all {\n  padding: 0; }\n.download-backgroud-color {\n  background: #19b0c8; }\n.group-advanced-searc :host/deep/ .ui-dropdown-panel .ui-dropdown-items-wrapper {\n  max-height: 100px; }\n.result-cust .dialog-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n.result-cust .dialog-content .checkbox-list {\n    display: block;\n    width: 20%;\n    height: 10px;\n    margin: 5%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n.aa {\n  width: 100% !important; }\n.bb {\n  padding-top: 0px !important; }\n.cust-basic {\n  width: 98% !important; }\n:host/deep/ .ui-autocomplete-input {\n  width: 100%; }\n.ui-g .label {\n  text-align: right; }\n.ui-g .btn {\n  text-align: center; }\n.ui-g .table {\n  margin-top: 35px;\n  text-align: center; }\n.ui-g .ui-g-12 .ui-g-1 .until {\n  margin-left: 40px;\n  padding: 2px; }\n.ui-g .ui-g-11 label {\n  display: inline-block;\n  width: 150px;\n  text-align: right; }\n.download-backgroud-color {\n  background: #19b0c8; }\n.table {\n  margin-top: 35px;\n  text-align: center; }\n:host/deep/ .addDisplay .content {\n  min-height: 400px;\n  height: auto;\n  overflow: visible; }\n.yushouxin,\n.sanfangPJ {\n  background: #03638A !important; }\n:host/deep/ .target-custom .ui-button {\n  border-radius: 3px; }\n:host/deep/ .gundam-calendar > div {\n  display: inline-block;\n  width: 79%; }\n:host/deep/ .gundam-calendar .only-year-month-select .select input {\n  width: 100%;\n  height: 29px;\n  line-height: 29px; }\n:host/deep/ .gundam-accordion p-dropdown > div {\n  height: 30px; }\n:host/deep/ .gundam-dropdown > div label {\n  text-align: left;\n  line-height: 20px; }\n:host/deep/ .gundam-autocomplete {\n  height: 29px; }\n:host/deep/ .gundam-accordion p-multiselect label {\n  line-height: 30px; }\n:host/deep/ .gundam-accordion p-multiselect .ui-widget-header {\n  background-color: #0094D2;\n  color: #fff;\n  border: 1px solid #0094D2; }\n:host/deep/ .gundam-accordion p-multiselect .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container .ui-inputtext {\n  color: #000; }\n:host/deep/ .gundam-accordion p-multiselect > div {\n  white-space: nowrap;\n  border: 1px solid #bfbfbf; }\n:host/deep/ .gundam-accordion p-multiselect > div > div:nth-child(4) {\n    background-color: #fafafa; }\n:host/deep/ .gundam-accordion .ui-accordion-header-text {\n  position: absolute;\n  top: 11px;\n  height: 20px;\n  line-height: 20px;\n  display: block;\n  white-space: nowrap;\n  font-size: 16px;\n  color: #545454;\n  width: 25px;\n  font-weight: 500; }\n:host/deep/ .gundam-accordion .ui-accordion-header-text:before {\n  content: '';\n  display: inline-block;\n  width: 3px;\n  height: 19px;\n  background: #19b0c8;\n  position: absolute;\n  top: 0;\n  left: -17px; }\n:host/deep/ .gundam-accordion .ui-datatable .ui-datatable-thead > tr > th {\n  background-color: #d2f1ef; }\n:host/deep/ .gundam-accordion:nth-child(odd) > div {\n  background: #efefef;\n  padding: 5px;\n  margin-top: .3em; }\n:host/deep/ .gundam-accordion:nth-child(odd) > div .ui-accordion-header a {\n    background: #efefef; }\n:host/deep/ .gundam-accordion > div {\n  position: relative;\n  padding: 5px;\n  margin-top: .3em;\n  background-color: #fafafa; }\n:host/deep/ .gundam-accordion > div .clearfix {\n    /*******************accordion箭头右定位***********************/\n    /************************************************************/ }\n:host/deep/ .gundam-accordion > div .clearfix span.fa.fa-fw.fa-caret-right {\n      position: absolute;\n      left: auto;\n      right: 10px; }\n:host/deep/ .gundam-accordion > div .clearfix span.fa.fa-fw.fa-caret-right:before {\n      color: #9e9e9e; }\n:host/deep/ .gundam-accordion > div .clearfix .ui-accordion-header a {\n      height: 40px;\n      border-bottom: 1px solid #efefef; }\n:host/deep/ .gundam-accordion > div .clearfix > div:nth-child(2) > div > div {\n      border-top: 1px solid #ece6e6;\n      border-left: 1px solid #ece6e6;\n      border-right: 1px solid #ece6e6; }\n:host/deep/ .gundam-accordion > div .clearfix > div:nth-child(2) > div > div:last-child {\n      border-bottom: 1px solid #ece6e6; }\n:host/deep/ #domGundam > div {\n  overflow: auto; }\n:host/deep/ .custDetialInfoList .ui-datatable .ui-datatable-thead > tr > th {\n  height: auto;\n  background-color: #edf9fa !important; }\n:host/deep/ .custDetialInfoList .ui-datatable .ui-datatable-thead > tr > th .ui-column-title {\n  font-size: 15px;\n  height: 45px; }\n:host/deep/ .custDetialInfoList .ui-datatable .ui-datatable-data tr td {\n  width: 112px;\n  overflow: hidden;\n  word-break: break-all; }\n:host/deep/ .product-accorion .ui-datatable .ui-datatable-data tr {\n  background-color: #efefef; }\n:host/deep/ .gundam-product-paginator .ui-paginator {\n  border-top: 2px solid #d2f1ef !important;\n  background-color: #fafafa; }\n:host/deep/ .gundam-display > div > div:nth-child(2) {\n  height: 85% !important; }\n:host/deep/ .gundam-display .ui-dialog.ui-shadow {\n  height: 90% !important;\n  width: 85% !important; }\n:host/deep/ .gundam-display1 .ui-dialog.ui-shadow {\n  height: 73% !important;\n  width: 47% !important; }\n:host/deep/ .gundam-display1 .ui-dialog .ui-dialog-content {\n  height: 90%; }\n:host/deep/ .product-display > div {\n  width: 80%;\n  max-width: 900px; }\n:host/deep/ .product-display .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n:host/deep/ .product-display select-product-component .productTree .right {\n  margin-right: 5%; }\n.btnDiv {\n  width: 100%;\n  position: fixed;\n  bottom: 14%;\n  margin-left: 22%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtYWR2YW5jZWQtc2VhcmNoL2dyb3VwLWFkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtYWR2YW5jZWQtc2VhcmNoL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAtdmlld1xcZ3JvdXAtYWR2YW5jZWQtc2VhcmNoXFxncm91cC1hZHZhbmNlZC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBRVEsVUFBVSxFQUFBO0FBRmxCO0VBS1EsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIsdUJBQXVCLEVBQUE7QUFUL0I7RUFZUSxrQkFBa0IsRUFBQTtBQVoxQjtFQWVRLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQWhCM0I7RUFtQlEsa0JBQWtCLEVBQUE7QUFuQjFCO0VBc0JRLFVBQVUsRUFBQTtBQXRCbEI7RUF5QlEsa0JBQ0osRUFBQTtBQUdKO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUdRLGtDQUFrQyxFQUFBO0FBSDFDO0VBTVEsZ0JBQWdCLEVBQUE7QUFOeEI7RUFTUSxXQUNKLEVBQUE7QUFWSjtFQWVRLGVBQWUsRUFBQTtBQWZ2QjtJQWlCWSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0FBdEJyQztJQTBCWSxhQUFhLEVBQUE7QUExQnpCO0lBNkJZLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7QUEvQjlCO0lBa0NZLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7QUFuQ3pCO0lBc0NZLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7QUF2Q3pCO0lBMENZLGdCQUFnQixFQUFBO0FBMUM1QjtJQTZDWSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7QUE5Qy9CO01BZ0RnQixhQUFhO01BQ2IsZUFBZSxFQUFBO0FBakQvQjtRQW1Eb0IsYUFBYTtRQUNiLE9BQU87UUFDUCxzQkFBc0IsRUFBQTtBQXJEMUM7UUF3RG9CLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix5QkFBeUIsRUFBQTtBQTVEN0M7VUErRHdCLHlCQUF5QjtVQUN6QixVQUFVO1VBRVYsa0JBQWtCO1VBQ2xCLGFBQWE7VUFDYix1QkFBdUI7VUFDdkIsbUJBQW1CO1VBQ25CLGdCQUFnQixFQUFBO0FBdEV4QztVQXlFd0IsYUFBYTtVQUNiLFVBQVU7VUFDVixnQkFBQTtVQUNBLE9BQU8sRUFBQTtBQTVFL0I7VUFnRndCLHlCQUF5QjtVQUN6QixVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsdUJBQXVCO1VBQ3ZCLGdCQUFnQjtVQUNoQixZQUFZLEVBQUE7QUF2RnBDO1VBNkZ3QixtQkFBbUI7VUFDbkIsbUJBQW1CO1VBQ25CLE9BQU8sRUFBQTtBQS9GL0I7WUFpRzRCLFVBQVU7WUFDVixZQUFZLEVBQUE7QUFsR3hDO1lBcUc0QixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFFYixrQkFBa0IsRUFBQTtBQXpHOUM7VUE2R3dCLG1CQUFtQjtVQUNuQixtQkFBbUIsRUFBQTtBQTlHM0M7WUFnSDRCLFdBQVc7WUFDWCxZQUFZO1lBQ1osZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixXQUFXLEVBQUE7QUFwSHZDO1FBeUhvQix5QkFBeUIsRUFBQTtBQXpIN0M7UUE0SG9CLHlCQUF5QixFQUFBO0FBNUg3QztJQWlJWSxjQUFjLEVBQUE7QUFqSTFCO0lBc0lvQixxQkFBb0IsRUFBQTtBQXRJeEM7SUE2SW9CLHFCQUFvQixFQUFBO0FBN0l4QztJQWtKWSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtBQXBKdkI7TUFzSmdCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQXZKbkM7UUF5Sm9CLE9BQU87UUFDUCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtBQWhLckM7SUFxS1ksa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtBQXRLeEI7TUF3S2dCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsUUFBUSxFQUFBO0FBMUt4QjtFQStLUSxVQUFVO0VBQ1YsWUFBWSxFQUFBO0FBaExwQjtFQW1MUSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBcExwQjtFQXVMUSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBeExwQjtFQTJMUSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBNUxwQjtFQStMUSxrQkFBa0IsRUFBQTtBQS9MMUI7SUFpTVksaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0FBbE0vQjtFQTJNUSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZDQUF1RztFQUN2RyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWUsRUFBQTtBQW5OdkI7RUF1Tlksc0JBQXNCLEVBQUE7QUFLbEM7RUFHUSxVQUFVLEVBQUE7QUFLbEI7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUVRLGlCQUFpQixFQUFBO0FBSXpCO0VBRVEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7QUFKdkI7SUFNWSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtBQUtuQztFQUNJLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksMkJBQTJCLEVBQUE7QUFHL0I7RUFDSSxxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLFdBQVcsRUFBQTtBQUlmO0VBRVEsaUJBQWlCLEVBQUE7QUFGekI7RUFLUSxrQkFBa0IsRUFBQTtBQUwxQjtFQVFRLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQVQxQjtFQWNnQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0FBZjVCO0VBcUJZLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFNN0I7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFHckI7O0VBRUksOEJBQThCLEVBQUE7QUFJbEM7RUFDSSxrQkFBa0IsRUFBQTtBQU90QjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7QUFHZDtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFJckI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFJckI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTtBQUY3QjtJQUlRLHlCQUF5QixFQUFBO0FBS2pDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVyxFQUFBO0FBR2Y7RUFDSSx5QkFBeUIsRUFBQTtBQUk3QjtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFIcEI7SUFLUSxtQkFBbUIsRUFBQTtBQUkzQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0FBSjdCO0lBTVEseURBQUE7SUFTQSw2REFBQSxFQUE4RDtBQWZ0RTtNQVFZLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsV0FBVyxFQUFBO0FBVnZCO01BYVksY0FBYyxFQUFBO0FBYjFCO01BaUJZLFlBQVk7TUFDWixnQ0FBZ0MsRUFBQTtBQWxCNUM7TUF3Qm9CLDZCQUE2QjtNQUM3Qiw4QkFBOEI7TUFDOUIsK0JBQStCLEVBQUE7QUExQm5EO01BNkJvQixnQ0FBZ0MsRUFBQTtBQVFwRDtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLFlBQVk7RUFDWixvQ0FBb0MsRUFBQTtBQUd4QztFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUE7QUFHaEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBO0FBSXpCO0VBQ0kseUJBQXlCLEVBQUE7QUFJN0I7RUFDSSx3Q0FBd0M7RUFDeEMseUJBQXlCLEVBQUE7QUFhN0I7RUFDSSxzQkFBc0IsRUFBQTtBQUcxQjtFQUNJLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksc0JBQXNCLEVBQUE7QUFHMUI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtYWR2YW5jZWQtc2VhcmNoL2dyb3VwLWFkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi51aS1nIC50aXRsZSB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLnVpLWcgLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4udWktZyAuYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi51aS1nIC5idG4tYWRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cblxuLnVpLWcgLnRhYiB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgfVxuXG4udWktZyAucGFkZGluZy0wIHtcbiAgcGFkZGluZzogMDsgfVxuXG4udWktZyAudGV4dC1hbGlnbi1jIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNzsgfVxuXG4uYm94U2hhZG93IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4udGFyZ2V0LWN1c3RvbSAuYm9keUJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5cbi50YXJnZXQtY3VzdG9tIC5jbGVhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnRhcmdldC1jdXN0b20gLmxlZnQge1xuICBmbG9hdDogbGVmdDsgfVxuXG4udGFyZ2V0LWN1c3RvbSAuY29udCB7XG4gIHBhZGRpbmc6IDAgMjBweDsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAubGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY2NjY2OCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAudWktZy0xMiB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAua3Vhbmcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC50YXJnZXQtY3VzdG9tIC5jb250IC5tb25leS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNDZweDtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gIC50YXJnZXQtY3VzdG9tIC5jb250IC50ZXh0LW1vbmV5IHtcbiAgICBtYXJnaW4tbGVmdDogMTlweDtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gIC50YXJnZXQtY3VzdG9tIC5jb250IC5ka3RzIHtcbiAgICBtYXJnaW4tbGVmdDogN3B4OyB9XG4gIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50b3RhbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gICAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgLm51bSB7XG4gICAgICAgICAgY29sb3I6ICMwYTNkNTQgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuICAgICAgICAudGFyZ2V0LWN1c3RvbSAuY29udCAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IC5jb250IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgLyogd2lkdGg6IDg3JTsgKi9cbiAgICAgICAgICBmbGV4OiAxOyB9XG4gICAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICMwYTNkNTQgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7IH1cbiAgICAgICAgLnRhcmdldC1jdXN0b20gLmNvbnQgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdCAudzMwIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMTsgfVxuICAgICAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgLnczMCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4OyB9XG4gICAgICAgICAgLnRhcmdldC1jdXN0b20gLmNvbnQgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdCAudzMwIC51bnRpbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAudGFyZ2V0LWN1c3RvbSAuY29udCAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IC5odW8ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgLmh1byBiIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQ6bnRoLWNoaWxkKDJuKzIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjsgfVxuICAgICAgLnRhcmdldC1jdXN0b20gLmNvbnQgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdDpudGgtY2hpbGQoMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmOyB9XG4gIC50YXJnZXQtY3VzdG9tIC5jb250IC5wcm9kdWN0LWFjY29yaW9uIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAuY3VzX2Nob3NlIC5jb250IHNwYW4ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAuZnRwX2Nob3NlIC5jb250IHNwYW4ge1xuICAgIHdpZHRoOiAzMyUgIWltcG9ydGFudDsgfVxuICAudGFyZ2V0LWN1c3RvbSAuY29udCAuY2tyZXN1bHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5ja3Jlc3VsdCAudGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAgIC50YXJnZXQtY3VzdG9tIC5jb250IC5ja3Jlc3VsdCAudGl0bGUgc3BhbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7IH1cbiAgLnRhcmdldC1jdXN0b20gLmNvbnQgLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0MHB4OyB9XG4gICAgLnRhcmdldC1jdXN0b20gLmNvbnQgLnBvc2l0aW9uLXJlbGF0aXZlIC5mbG9hdC1yaWdodCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDsgfVxuXG4udGFyZ2V0LWN1c3RvbSAuc2NyZWVuIHtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbi50YXJnZXQtY3VzdG9tIC5jdXN0LWJhc2ljIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDsgfVxuXG4udGFyZ2V0LWN1c3RvbSAuY3VzdC1iYXNpYy1udW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbi50YXJnZXQtY3VzdG9tIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tbGFiZWwge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbi50YXJnZXQtY3VzdG9tIC50YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAudGFyZ2V0LWN1c3RvbSAudGFibGUgLmJ0bi1hZGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cblxuLnRhcmdldC1jdXN0b20gLmd1bmRhbS1wcm9kdWN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA5MXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9ndW5kYW0tYWRkc2VhY2gvcHJvZHVjdC5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIHJpZ2h0OiA4OXB4O1xuICBjb2xvcjogIzAwOWZkYTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi50YXJnZXQtY3VzdG9tIC51aS1nLTQgaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3hTaGFkb3cgLnBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogMDsgfVxuXG4uZG93bmxvYWQtYmFja2dyb3VkLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzE5YjBjODsgfVxuXG4uZ3JvdXAtYWR2YW5jZWQtc2VhcmMgOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duLXBhbmVsIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7IH1cblxuLnJlc3VsdC1jdXN0IC5kaWFsb2ctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuICAucmVzdWx0LWN1c3QgLmRpYWxvZy1jb250ZW50IC5jaGVja2JveC1saXN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW46IDUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uYWEge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbi5iYiB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdC1iYXNpYyB7XG4gIHdpZHRoOiA5OCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnVpLWcgLmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnVpLWcgLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udWktZyAudGFibGUge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnVpLWcgLnVpLWctMTIgLnVpLWctMSAudW50aWwge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZzogMnB4OyB9XG5cbi51aS1nIC51aS1nLTExIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5kb3dubG9hZC1iYWNrZ3JvdWQtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjMTliMGM4OyB9XG5cbi50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG46aG9zdC9kZWVwLyAuYWRkRGlzcGxheSAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi55dXNob3V4aW4sXG4uc2FuZmFuZ1BKIHtcbiAgYmFja2dyb3VuZDogIzAzNjM4QSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC50YXJnZXQtY3VzdG9tIC51aS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1jYWxlbmRhciA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDc5JTsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWNhbGVuZGFyIC5vbmx5LXllYXItbW9udGgtc2VsZWN0IC5zZWxlY3QgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsaW5lLWhlaWdodDogMjlweDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLWRyb3Bkb3duID4gZGl2IHtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tZHJvcGRvd24gPiBkaXYgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMjBweDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWF1dG9jb21wbGV0ZSB7XG4gIGhlaWdodDogMjlweDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0IGxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCAudWktd2lkZ2V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5NEQyOyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIHAtbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LXBhbmVsLnVpLXdpZGdldCAudWktbXVsdGlzZWxlY3QtaGVhZGVyIC51aS1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVyIC51aS1pbnB1dHRleHQge1xuICBjb2xvcjogIzAwMDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0ID4gZGl2IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjsgfVxuICA6aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0ID4gZGl2ID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlci10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICB3aWR0aDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlci10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMTlweDtcbiAgYmFja2dyb3VuZDogIzE5YjBjODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xN3B4OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmOyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uOm50aC1jaGlsZChvZGQpID4gZGl2IHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAuM2VtOyB9XG4gIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uOm50aC1jaGlsZChvZGQpID4gZGl2IC51aS1hY2NvcmRpb24taGVhZGVyIGEge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICA6aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiA+IGRpdiAuY2xlYXJmaXgge1xuICAgIC8qKioqKioqKioqKioqKioqKioqYWNjb3JkaW9u566t5aS05Y+z5a6a5L2NKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8gfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCBzcGFuLmZhLmZhLWZ3LmZhLWNhcmV0LXJpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogMTBweDsgfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCBzcGFuLmZhLmZhLWZ3LmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XG4gICAgICBjb2xvcjogIzllOWU5ZTsgfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCAudWktYWNjb3JkaW9uLWhlYWRlciBhIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmOyB9XG4gICAgOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gPiBkaXYgLmNsZWFyZml4ID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdiB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZTZlNjtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VjZTZlNjtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlY2U2ZTY7IH1cbiAgICA6aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiA+IGRpdiAuY2xlYXJmaXggPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2U2ZTY7IH1cblxuOmhvc3QvZGVlcC8gI2RvbUd1bmRhbSA+IGRpdiB7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbjpob3N0L2RlZXAvIC5jdXN0RGV0aWFsSW5mb0xpc3QgLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmYSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC5jdXN0RGV0aWFsSW5mb0xpc3QgLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCAudWktY29sdW1uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7IH1cblxuOmhvc3QvZGVlcC8gLmN1c3REZXRpYWxJbmZvTGlzdCAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0ciB0ZCB7XG4gIHdpZHRoOiAxMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG5cbjpob3N0L2RlZXAvIC5wcm9kdWN0LWFjY29yaW9uIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLXByb2R1Y3QtcGFnaW5hdG9yIC51aS1wYWdpbmF0b3Ige1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2QyZjFlZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheSAudWktZGlhbG9nLnVpLXNoYWRvdyB7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4NSUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWRpc3BsYXkxIC51aS1kaWFsb2cudWktc2hhZG93IHtcbiAgaGVpZ2h0OiA3MyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheTEgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDkwJTsgfVxuXG46aG9zdC9kZWVwLyAucHJvZHVjdC1kaXNwbGF5ID4gZGl2IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDsgfVxuXG46aG9zdC9kZWVwLyAucHJvZHVjdC1kaXNwbGF5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAucHJvZHVjdC1kaXNwbGF5IHNlbGVjdC1wcm9kdWN0LWNvbXBvbmVudCAucHJvZHVjdFRyZWUgLnJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTsgfVxuXG4uYnRuRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNCU7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7IH1cbiIsIi51aS1nIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudGFiIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZy0wIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYWxpZ24tYyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi5ib3hTaGFkb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhcmdldC1jdXN0b20ge1xyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5ib2R5QmdDb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbGVhciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgfSAvLyAuYmcge1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAvLyAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyB9XHJcbiAgICAuY29udCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY2NjggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy0xMiB7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMXB4IDNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmt1YW5nIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vbmV5LXRleHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtbW9uZXkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRrdHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgIH0gLy/lrqLmiLfkuqflk4HlsZ7mgKfnrZvpgIkgY3NzXHJcbiAgICAgICAgLnByb19jaG9zZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIC5jb25yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgLnRvdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICAgICAgICAubnVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmOCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBhM2Q1NCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlOyAvLyBiYWNrZ3JvdW5kOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiB3aWR0aDogODclOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBhM2Q1NCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyAuYmcge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnczMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVudGlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNHB4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmh1byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0Om50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LWFjY29yaW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfSAvLyDlrqLmiLfmoIfnrb7lsZ7mgKfnrZvpgIlcclxuICAgICAgICAuY3VzX2Nob3NlIHtcclxuICAgICAgICAgICAgLmNvbnQge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIEZUUOWIqea2puWxnuaAp+etm+mAiVxyXG4gICAgICAgIC5mdHBfY2hvc2Uge1xyXG4gICAgICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2tyZXN1bHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvLyBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNjcmVlbiB7XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY3VzdC1iYXNpYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmN1c3QtYmFzaWMtbnVtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gLy8gLmd1bmRhbS1zdWJpbWcge1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9ndW5kYW0tYWRkc2VhY2gvbWludXMucG5nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gLmd1bmRhbS1hZGRpbWcge1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9ndW5kYW0tYWRkc2VhY2gvYWRkLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIC8vIH1cclxuICAgIC5ndW5kYW0tcHJvZHVjdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDkxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9ndW5kYW0tYWRkc2VhY2gvcHJvZHVjdC5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICByaWdodDogODlweDtcclxuICAgICAgICBjb2xvcjogIzAwOWZkYTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAudWktZy00IHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm94U2hhZG93IHtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAucGFkZGluZy1hbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOS4i+i9veaMiemSrmRpc2FibGVkXHJcbi5kb3dubG9hZC1iYWNrZ3JvdWQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxufVxyXG5cclxuLmdyb3VwLWFkdmFuY2VkLXNlYXJjIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktZHJvcGRvd24tcGFuZWwgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVzdWx0LWN1c3Qge1xyXG4gICAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5jaGVja2JveC1saXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1JTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWEge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJiIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3QtYmFzaWMge1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktYXV0b2NvbXBsZXRlLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vL+aooeaAgeahhlxyXG4udWktZyB7XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICAudWktZy0xIHtcclxuICAgICAgICAgICAgLnVudGlsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLWctMTEge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8g5LiL6L295oyJ6ZKuZGlzYWJsZWRcclxuLmRvd25sb2FkLWJhY2tncm91ZC1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmFkZERpc3BsYXkgLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnl1c2hvdXhpbixcclxuLnNhbmZhbmdQSiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM2MzhBICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIOaMiemSrlxyXG46aG9zdC9kZWVwLyAudGFyZ2V0LWN1c3RvbSAudWktYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4vLyA6aG9zdC9kZWVwLyAuZ3VuZGFtLWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbi8vIHdpZHRoOiA0MyU7XHJcbi8vIH1cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1jYWxlbmRhcj5kaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDc5JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1jYWxlbmRhciAub25seS15ZWFyLW1vbnRoLXNlbGVjdCAuc2VsZWN0IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIOS4i+aLiVxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLWRyb3Bkb3duPmRpdiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tZHJvcGRvd24+ZGl2IGxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYXV0b2NvbXBsZXRlIHtcclxuICAgIGhlaWdodDogMjlweDtcclxufVxyXG4vLyBwLW11bHRpc2VsZWN0XHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIHAtbXVsdGlzZWxlY3QgbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIHAtbXVsdGlzZWxlY3QgLnVpLXdpZGdldC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOTREMjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCAudWktbXVsdGlzZWxlY3QtcGFuZWwudWktd2lkZ2V0IC51aS1tdWx0aXNlbGVjdC1oZWFkZXIgLnVpLW11bHRpc2VsZWN0LWZpbHRlci1jb250YWluZXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdD5kaXYge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICA+ZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYWNjb3JkaW9uIOihqOagvFxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyLXRleHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTdweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWY7XHJcbn1cclxuXHJcbi8vIGFjY29yZGlvblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbjpudGgtY2hpbGQob2RkKT5kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC4zZW07XHJcbiAgICAudWktYWNjb3JkaW9uLWhlYWRlciBhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbj5kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLjNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAuY2xlYXJmaXgge1xyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqYWNjb3JkaW9u566t5aS05Y+z5a6a5L2NKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgc3Bhbi5mYS5mYS1mdy5mYS1jYXJldC1yaWdodCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4uZmEuZmEtZncuZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgLnVpLWFjY29yZGlvbi1oZWFkZXIgYSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7IC8vIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5kaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZTZlNjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlY2U2ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZTZlNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5kaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2U2ZTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWuouaIt+aYjue7huWIl+ihqFxyXG46aG9zdC9kZWVwLyAjZG9tR3VuZGFtPmRpdiB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmN1c3REZXRpYWxJbmZvTGlzdCAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuY3VzdERldGlhbEluZm9MaXN0IC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCAudWktY29sdW1uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGhlaWdodDogNDVweDsgLy8gbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jdXN0RGV0aWFsSW5mb0xpc3QgLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHIgdGQge1xyXG4gICAgd2lkdGg6IDExMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLy8g5Lqn5ZOB5bGe5oCnIOihqOagvFxyXG46aG9zdC9kZWVwLyAucHJvZHVjdC1hY2NvcmlvbiAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0ciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG59XHJcblxyXG4vLyDkuqflk4HlsZ7mgKcg5YiG6aG1XHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tcHJvZHVjdC1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2QyZjFlZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuLy8g5qih5oCB5qGG5qC35byPXHJcbi8vIDpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheSA+IGRpdiB7XHJcbi8vICAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICAvLyBtYXgtd2lkdGg6IDkwMHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA2MDBweDtcclxuLy8gICAgIGhlaWdodDogODAlO1xyXG4vLyAgICAgLy8gbWF4LWhlaWdodDogNzAwcHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4vLyB9XHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheT5kaXY+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWRpc3BsYXkgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1kaXNwbGF5MSAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDczJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWRpc3BsYXkxIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvZHVjdC1kaXNwbGF5PmRpdiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnByb2R1Y3QtZGlzcGxheSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucHJvZHVjdC1kaXNwbGF5IHNlbGVjdC1wcm9kdWN0LWNvbXBvbmVudCAucHJvZHVjdFRyZWUgLnJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5idG5EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: GroupAdvancedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdvancedSearchComponent", function() { return GroupAdvancedSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/group-advanced-search.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/bean/group-advanced-search.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.component */ "./src/app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.component.ts");
/* harmony import */ var _constant_custOperation_codeValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../constant/custOperation.codeValue */ "./src/app/pages/tzb/custom/constant/custOperation.codeValue.ts");
/* harmony import */ var _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../@uisftech/common/pipe/formatMoney.pipe */ "./src/app/@uisftech/common/pipe/formatMoney.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var GroupAdvancedSearchComponent = /** @class */ (function () {
    function GroupAdvancedSearchComponent(router, httpService, commfunc, route, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.confirmationService = confirmationService;
        this.openActive = 'open';
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.userId = '';
        this.role = true;
        this.isAdvancedSearch = '';
        this.isShow = true;
        // dataImport: any[];
        this.orgTreePage = false;
        // // selectedAll: any = [];
        this.checkAll = false;
        this.checkBox = [];
        this.chooseData = [];
        this.userName = '';
        // dataInfo:any;
        // dataInfo = [];
        // dataAllInfo = [];
        // dataAllInfo1 = [];
        this.isAll = false;
        //公共的
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //日期
        this.restTrue = true; // 日期组件刷新
        this.msgs = []; //提示信息
        this.trueOrFalse = new Array(11); //折叠面板收起、展开
        this.checkSave = []; //客户选择项保存
        this.checkSave2 = ''; //客户选择项拼接
        this.creatCustExplCondBean = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["CreatCustExplCondBean"](); //bean
        this.formatMoneyValuePie = new _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatMoneyValuePie"](); //金额转换管道
        // 成熟模板调用回显的名称
        this.templateExpCondName = '';
        //打开探索条件模态框
        this.custExplId = ""; //单选选中(探索ID)的值
        //另存为探索条件模态框
        this.reSaveExploDisplay = false; //模态框是否展示
        //机构树模态框
        this.orgTreeDisplay = false; //模态框是否展示
        // treeOrgName: string = '';
        this.treeOrgName = [];
        // 显示/隐藏
        this.displayopenOrg = true; // 主联系人
        this.displayopenOrg1 = true; // 协储员
        //机构树模态框
        this.orgTreeDisplay2 = false; //模态框是否展示
        // 协储员
        this.ActorOrgDisplay = false; //模态框是否展示
        this.ActorOrgDisplay2 = false; //模态框是否展示
        //删除近期营销活动已覆盖客户模态框
        this.tempModel = ''; // 临时  model
        //删除营销活动已覆盖客户模态框
        this.deleCoverDisplay = false;
        //2.引用成熟模板（选择模板模态框）
        this.templetDisplay = false; //模态框是否展示
        this.exploreConditionTempId = ''; //接受成熟模板传过来的参数
        this.custAttr = []; //客户属性
        this.isAgriculture = []; //涉农属性
        this.disPlayT2 = [];
        //7.客户持有信息筛选
        // cusHoldProdOpt: any[] = CusHoldProdOpt;//客户持有产品标识
        //8.客户产品属性筛选
        this.gundamProperty = false;
        // cusProAttrOpt: any[] = CusProAttrOpt;//客户持有产品标识
        // proSamllTypeOPt: any = [];//产品小类
        // paramOpt: any = [] = ParamOpt;//参数类型
        // saveTypeOpt: any[] = SaveTypeOpt;//客户小类（存款类）
        // loanTypeOpt: any[] = LoanTypeOpt;//客户小类（贷款类）
        this.custHoldProdAttrList = [[]];
        this.custHoldProdAttrListMember = {
            prodCateId: '',
            subProdCateId: '',
            paramTypeId: '',
            prodParmFrom: '',
            prodParmTo: ''
        };
        this.cusTagNameOpt = []; //标签名称(模糊查询)
        this.custLabelAttrList = [[]]; // 客户标签属性列表
        this.custLableAttrListMember = {
            labelTypeId: '',
            labelId: '',
            labelName: '',
            selectNameOpt: {}
        };
        // (模糊查询)
        this.cusGroupNameOpt = []; //属性名称
        this.groupName = [];
        this.cusGroup = [];
        this.custGroupAttrList = [[]]; //客户群属性列表成员
        this.custGroupAttrListMember = {
            custGrouTypeId: '',
            custGrouId: '',
            custGrouName: '',
            selectNameOpt: {}
        };
        this.ftpAttrList = [[]]; //FTP利润属性列表
        this.ftpAttrListMember = {
            profit: '',
            profitAttr: '',
            profitParmFrom: '',
            profitParmTo: '',
        };
        // 查看结果
        // 对传入数据进行校验
        this.checkComAndNum = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkComAndNum"]; // 数据只能输入数字和逗号(客户号)
        this.specialSymbol = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]; // 不要特殊符号
        this.checkZzNum = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"]; // 正整数
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"]; // 纯数字
        this.checkName = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkName"]; // 名字
        this.showFlag = true;
        this.filterDisplay = false;
        // list: any;//后台接收的数据
        // indiCustomer: IndiCustomer = new IndiCustomer();
        // custInfo: CustInfo = new CustInfo();
        this.startTimeTemp = '';
        // businessInfo: BusinessInfo = new BusinessInfo();
        this.LoanList = [];
        this.totalNum = 0; //总页数
        this.data = []; //后台返回的数据 客户名单详细
        /**
         * 接收返回的map
         */
        this.returnData = {
            custNum: '',
            asset: '',
            debt: '',
            haveTelNum: '',
            screenListSysManageNum: '',
            screeDt: '',
        }; //接手后台返回数据,
        // 投向行业
        this.turnIndustry = [];
        this.turnIndustryOne = [];
        this.turnIndustryTwo = [];
        this.turnIndustryThree = [];
        this.indutryOneDis = false;
        this.indutryTwoDis = false;
        this.indutryThreeDis = false;
        this.params = {};
        this.loanUseTwoDis = false;
        this.selectedCities = [];
        this.oldCampaignName = []; //近期活动已覆盖客户活动名称
        this.exploreName = []; //探索条件名称
        //客户产品属性
        // productTemp: any[] = ProductTemp;
        // productTemp1: any = [];
        //模态框是否显示
        this.display = false;
        this.chooseDisplay = false; //模态框
        this.freeGroupIdTrue = true; // 自选群组跳转高级搜索 隐藏 保存/另存模板
        // 新建联系计划
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.explore = ''; //探索条件名称
        this.isAgricultureTemp = ['']; //涉农属性
        this.sexTemp = ['']; //性别
        this.residTypeTemp = ['']; //户口性质
        this.iSMarrTemp = ['']; //婚姻状况
        this.industryTemp = ['']; //所属行业
        this.entTypeTemp = ['']; //中小企业类型
        this.prodCateId = ['']; //产品大类
        this.subProdCateId = ['']; //产品小类
        this.sales = [];
        this.custExplTable = _constant_custOperation_codeValue__WEBPACK_IMPORTED_MODULE_11__["CustDetialInfoList"]; //按分页查询出客户详细信息结果
        this.infoList = _constant_custOperation_codeValue__WEBPACK_IMPORTED_MODULE_11__["InfoList"];
        this.infoList1 = [];
        this.pageSize = 10;
        this.pageNum = 1;
        this.InfoList = []; //客户名单  表头要显示的字段
        this.eliLoanTwoDis = false; //剔除贷款否决类型
        this.eliLoanThreeDis = false; //剔除贷款否决类型
        this.productmodel = false;
        this.isProperty = true;
        this.disabledTrue = true; // 另存按钮
        this.downloadTrue = false; // 查看结果->客户名单下载
        this.downloadPerson = false;
        this.displayTarget = []; // 展示 指标
        this.filterTemplate = [];
        //客户名单全部信息
        //选择字段个人
        this.PersonCheck = [];
        // 表格数据头部名称展示字段
        this.headerTable = [];
        // 存款 下的展示字段
        this.saveTable = [];
        // 贷款 下的展示字段    
        this.loansTable = [];
        // 理财 下的展示字段 
        this.mettersTable = [];
        // 存款 + 贷款 + ... +...  展示字段汇总
        this.dataTable = [];
        this.dataTable1 = [];
        this.data1 = [];
        // 展示字段
        // 基础属性
        this.baseAttr = [];
        // 通用属性
        this.generalAttr = [];
        // 个人客户属性
        this.presonAttr = [];
        // 企业客户属性
        this.companyAttr = [];
        // 产品属性
        // 存款
        this.saveAttr = [];
        // 贷款
        this.loansAttr = [];
        // FTP利润
        this.FTPAttr = [];
        // 承兑
        this.acceptAttr = [];
        // 理财
        this.mattersAttr = [];
        // 贷记卡
        this.creditAttr = [];
        // 积分卡
        this.pointAttr = [];
        // 网上银行
        this.onlineAttr = [];
        // 手机银行
        this.phoneAttr = [];
        // 模态框
        this.SendMessageDisplay = false;
        // 中间量
        this.messageModelVal = '';
        // 新建联系计划头部
        this.ZZisAll = false; //自助类业务
        this.isShowOne = false;
        this.isShowTwo = false;
        this.selectedAll = [];
        // dataInfo:any;
        this.dataInfo = [];
        this.dataAllInfo = [];
        this.dataAllInfo1 = [];
        this.proSamllTypeOPt = []; //产品小类
        this.paramOpt = []; //参数类型
        // 查看结果
        this.showFlagCreatTime = true;
        this.new_postId = []; //
        this.groupId = this.route.snapshot.params['groupId'];
        this.gundam_codeValue(); // 码值转换
        this.creatStaDate = null;
        this.creatEndDate = null;
        this.birthDateFrom = null;
        this.birthDateTo = null;
        var temp = this.copyObj(this.custHoldProdAttrListMember);
        this.custHoldProdAttrList = [[temp]]; //初始化 一条值
        var temp1 = this.copyObj(this.custLableAttrListMember);
        this.custLabelAttrList = [[temp1]]; //客户标签属性列表
        var temp2 = this.copyObj(this.custGroupAttrListMember);
        this.custGroupAttrList = [[temp2]]; //客户群属性筛选
        var temp3 = this.copyObj(this.ftpAttrListMember);
        this.ftpAttrList = [[temp3]]; //FTP利润属性
        /**
         * 接受目标客户探索管理(打开探索条件按钮)---（object-custom.component.ts）
         * 传过来的探索ID
         * 如果接受到值就查看详情
         */
        if (this.route.snapshot.params['custExplId']) {
            this.custExplId = this.route.snapshot.params['custExplId'];
        }
        /**
          * 接受筛选客户模板详情页面(生成探索条件按钮)----（filter-custom-detail.component.ts）
          * 传过来的模板ID
          * 如果接受到值就查看详情
          */
        if (this.route.snapshot.params['screenTemplateId']) {
            this.custExplId = this.route.snapshot.params['screenTemplateId'];
        }
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user2.userName) {
            this.userName = this.user2.userName;
        }
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
    }
    GroupAdvancedSearchComponent.prototype.ngOnInit = function () {
        this.creatCustExplCondBean.requestMap.custInfo.custType = "3"; // 客户属性默认全部
        // this.radioButtonNum = '1'; // 查询范围-去除
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.params.taskTypeKey = 'indtstryType';
        this.params.taskTypeParentId = '';
        this.returnData = null;
        this.getSession(1);
        // this.changeCustScope(1); // 客户查询范围  查询范围-去除
        this.eliLoanVetoedType(); // 信贷业务属性
        this.taskTypeQry(this.params); // 投向行业
        this.chooseSelect();
        this.target();
        this.queryThreeListManageType({}); // 名单制查询
        this.rest();
        this.codeValue_method();
        this.iDCardOpt = this.iDCardOpt3;
        this.custAttrOption = this.custAttrOpt;
        this.creatCustExplCondBean.requestMap.qryScopeMap.startTime = this.startTime = this.transDate_Y_M(new Date());
        this.pageSize = 10;
        this.pageNum = 1;
    };
    GroupAdvancedSearchComponent.prototype.ngOnChanges = function () {
        this.NewgroupId = this.dataValue['groupId'];
        this.NewgroupName = this.dataValue['groupName'];
    };
    /*****************************************码值方法使用*******************************************/
    GroupAdvancedSearchComponent.prototype.codeValue_method = function () {
        // 证件类型
        this.iDCardOpt3 = this.code["IDCardOpt"];
        this.iDCardOpt1 = this.code["IDCardOpt1"];
        this.iDCardOpt2 = this.code["IDCardOpt2"];
        // 涉农属性
        this.agricuOpt = this.code["AgricuOpt"];
        // 4.客户基本属性筛选
        this.custAttrOpt = this.code["CustAttrOpt"];
        this.custAttrOpt1 = this.code["CustAttrOpt1"];
        this.custAttrOpt2 = this.code["CustAttrOpt2"];
        // 信用评分
        this.creditOpt = this.code["CreditOpt"];
        this.creditStaOpt1 = this.code["CreditStaOpt1"];
        this.creditEndOpt1 = this.code["CreditEndOpt1"];
        this.creditStaOpt3 = this.code["CreditStaOpt3"];
        this.creditEndOpt3 = this.code["CreditEndOpt3"];
        // 十级分类
        this.tenClass = this.code["TenClass"];
        // 担保方式
        this.conditionHT = this.code["ConditionHT"];
        // 指标码值
        this.zhibiao = this.code["ZhiBiao"];
        //性别（下拉框）
        this.sexOpt = this.code["SexOpt"];
        //婚姻状况（下拉框）
        this.marryOpt = this.code["MarryOpt"];
        //户口性质（下拉框）
        this.houseRegOpt = this.code["HouseRegOpt"];
        //所属行业
        this.professOpt = this.code["ProfessOpt"];
        //中小型企业
        this.enterTypeOPt = this.code["EnterTypeOPt"];
        //担保方式
        this.guaranteeMode = this.code["GuaranteeModese"];
        // 标签属性
        this.cusTagOpt = this.code["CusTagOpt"];
        //10.客户群属性筛选
        this.CusGroupAttrOpt = this.code["CusGroupAttrOpt"];
        //10.客户群属性筛选
        this.CusGroupAttrOpt = this.code["CusGroupAttrOpt"];
        //11.FTP利润属性筛选
        //时间
        this.fTPTimeOpt = this.code["FTPTimeOpt"];
        //属性
        this.fTPAttrOpt = this.code["FTPAtrrOpt"];
        //	客户持有产品
        this.cities = this.code["Citiese"];
        // 第三方评价
        // 信用评价
        this.groupCreditEval = this.code["GroupCreditEval"];
        // 不良嗜好
        this.badHobby = this.code["BadHobby"];
        // 收入来源
        this.groupSourceOfIncome = this.code["GroupSourceOfIncome"];
        // 家庭年收入
        this.groupIncomeLevel = this.code["GroupIncomeLevel"];
        // 车辆状况
        this.groupCarFlag = this.code["GroupCarFlag"];
        // 家庭关系情况
        this.groupFamilyStableFlag = this.code["GroupFamilyStableFlag"];
        // 健康状况
        this.groupHealthFlag = this.code["GroupHealthFlag"];
        // 建议额度
        this.groupOfferLines = this.code["GroupOfferLines"];
        // 是否目标授信客户
        this.isTargetCreditCust = this.code["IsTargetCreditCust"];
        // 是否预授信
        this.isPreApproval = this.code["IsPreApproval"];
        //下载判断
        this.new_postId = this.code['downPostId'];
    };
    /*****************************************码值方法使用*******************************************/
    // 日期转换'年-月'
    GroupAdvancedSearchComponent.prototype.transDate_Y_M = function (value) {
        if (!value) {
            return '';
        }
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month;
        return newtime;
    };
    GroupAdvancedSearchComponent.prototype.productTable = function () {
        var _this = this;
        // 产品树选取的指标
        // if (this.filterTemplate) {
        this.headerTable = [];
        this.dataTable = [];
        this.dataTable1 = [];
        var headerSave = [], headerLoans = [], tabData = [];
        // displayTarget
        this.displayTarget.forEach(function (v, i) {
            _this.headerTable.push({ field: v.fieldName, header: v.fieldTitle, colspan: "", rowspan: "2" });
            if (v.fieldName == '') {
                _this.headerTable[i].rowspan = '1';
                _this.headerTable[i].colspan = v.subList2.length;
                if (v.subList2.length > 0) {
                    v.subList2.forEach(function (v1) {
                        _this.dataTable.push({ field: v1.fieldName, header: v1.fieldTitle, colspan: "1" });
                    });
                }
            }
            if (v.subList.length > 0) {
                if (v.fieldTitle == '存款类') {
                    v.subList.forEach(function (v1) {
                        headerSave.push(v1.fieldTitle);
                    });
                }
                else if (v.fieldTitle == '贷款类') {
                    v.subList.forEach(function (v1) {
                        headerLoans.push(v1.fieldTitle);
                    });
                }
            }
            if (v.field !== '' && v.subList2.length == 0 && v.fieldName !== "CUST_ID" && v.fieldName !== "CUST_NAME") {
                _this.dataTable1.push({ field: v.fieldName, header: v.fieldTitle, colspan: "", rowspan: "2" });
            }
        });
        if (headerSave.length > 0) {
            this.headerTable[2].header = "" + ('存款(' + headerSave + ')');
        }
        else {
            this.headerTable[2].header = "" + '存款类';
        }
        if (headerLoans.length > 0) {
            this.headerTable[3].header = "" + ('贷款(' + headerLoans + ')');
        }
        else {
            this.headerTable[3].header = "" + '贷款类';
        }
    };
    GroupAdvancedSearchComponent.prototype.target = function () {
        var _this = this;
        this.custExplTable.forEach(function (v) {
            if ((v.isDisabled && v.isDisabled1) || (v.isDisabled1 && v.isCheck) || (v.isCheck && v.code == 'order')) {
                _this.displayTarget.push({
                    fieldTitle: v.label, fieldName: v.value, property: v.property, subList: [], subList2: []
                });
            }
        });
        this.subList(this.custExplTable);
    };
    GroupAdvancedSearchComponent.prototype.subList = function (params) {
        var _this = this;
        params.forEach(function (v, i) {
            if ((v.isDisabled || v.isCheck) && v.value !== '') {
                _this.displayTarget.forEach(function (v1, i1) {
                    if (v.property == v1.property && v1.fieldName == '') {
                        _this.displayTarget[i1].subList2.push({ fieldTitle: v.label, fieldName: v.value });
                    }
                });
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.chooseList = function (type) {
        var _this = this;
        if (this.custExplTable1 && this.custExplTable1.length > 0) {
            this.custExplTable1.map(function (v, i) {
                _this.codeValueChange(i);
            });
            if (this.infoList1.length > 0) {
                /*** ------------------------------------------*/
                this.infoList1.map(function (v) {
                    if (v.proprety == "saveAttr") {
                        _this.custExplTable1.map(function (v) {
                            // 存款
                            // v.FIN_BAL = []; //余额 SAV_BAL
                            // v.M_FIN_AVG = [];//本月日均 M_SAV_AVG
                            // v.LM_FIN_AVG = [];//上月日均 LM_SAV_AVG
                            // v.Y_FIN_AVG = [];//本年日均 Y_SAV_AVG
                            // v.LY_FIN_AVG = [];//上年日均 LY_SAV_AVG
                            // v.SIXM_FINAVG = [];//前六月日均 SIXM_SAV_AVG
                            v.SAV_BAL = []; //余额 SAV_BAL
                            v.M_SAV_AVG = []; //本月日均 M_SAV_AVG
                            v.LM_SAV_AVG = []; //上月日均 LM_SAV_AVG
                            v.Y_SAV_AVG = []; //本年日均 Y_SAV_AVG
                            v.LY_SAV_AVG = []; //上年日均 LY_SAV_AVG
                            v.SIXM_SAV_AVG = []; //前六月日均 SIXM_SAV_AVG
                            return;
                        });
                    }
                    else if (v.proprety == "loansAttr") {
                        _this.custExplTable1.map(function (v) {
                            // 贷款 
                            // v.CRED_AVG_AMT = [];//金额 CRED_AMT
                            // v.LOAN_AVG_BAL = [];//余额 LOAN_BAL
                            // v.M_BAL = [];//本月日均 M_AVG_BAL
                            // v.LM_BAL = [];//上月日均 LM_AVG_BAL
                            // v.LSIXM_BAL = [];//前六月日均 LSIXM_AVG_BAL
                            v.CRED_AMT = []; //金额 CRED_AMT
                            v.LOAN_BAL = []; //余额 LOAN_BAL
                            v.M_AVG_BAL = []; //本月日均 M_AVG_BAL
                            v.LM_AVG_BAL = []; //上月日均 LM_AVG_BAL
                            v.LSIXM_AVG_BAL = []; //前六月日均 LSIXM_AVG_BAL
                            return;
                        });
                    }
                });
                /**---------------------------------------- */
                this.data.map(function (v1, i) {
                    _this.infoList1.map(function (v, i1) {
                        if (v.proprety) {
                            switch (v.catelgory) {
                                case '1':
                                    _this.custExplTable1[i].SAV_BAL.push(v1[v.value]);
                                    break;
                                case '2':
                                    _this.custExplTable1[i].M_SAV_AVG.push(v1[v.value]);
                                    break;
                                case '3':
                                    _this.custExplTable1[i].LM_SAV_AVG.push(v1[v.value]);
                                    break;
                                case '4':
                                    _this.custExplTable1[i].Y_SAV_AVG.push(v1[v.value]);
                                    break;
                                case '5':
                                    _this.custExplTable1[i].LY_SAV_AVG.push(v1[v.value]);
                                    break;
                                case '6':
                                    _this.custExplTable1[i].SIXM_SAV_AVG.push(v1[v.value]);
                                    break;
                            }
                        }
                        else {
                            switch (v.catelgory) {
                                case '1':
                                    _this.custExplTable1[i].CRED_AMT.push(v1[v.value]);
                                    break;
                                case '2':
                                    _this.custExplTable1[i].LOAN_BAL.push(v1[v.value]);
                                    break;
                                case '3':
                                    _this.custExplTable1[i].M_AVG_BAL.push(v1[v.value]);
                                    break;
                                case '4':
                                    _this.custExplTable1[i].LM_AVG_BAL.push(v1[v.value]);
                                    break;
                                case '5':
                                    _this.custExplTable1[i].LSIXM_AVG_BAL.push(v1[v.value]);
                                    break;
                            }
                        }
                    });
                    // 存款	
                    if (_this.custExplTable1[i].SAV_BAL.length === 0) {
                        _this.custExplTable1[i].SAV_BAL.push(v1.SAV_BAL);
                    }
                    if (_this.custExplTable1[i].M_SAV_AVG.length === 0) {
                        _this.custExplTable1[i].M_SAV_AVG.push(v1.M_SAV_AVG);
                    }
                    if (_this.custExplTable1[i].LM_SAV_AVG.length === 0) {
                        _this.custExplTable1[i].LM_SAV_AVG.push(v1.LM_SAV_AVG);
                    }
                    if (_this.custExplTable1[i].Y_SAV_AVG.length === 0) {
                        _this.custExplTable1[i].Y_SAV_AVG.push(v1.Y_SAV_AVG);
                    }
                    if (_this.custExplTable1[i].LY_SAV_AVG.length === 0) {
                        _this.custExplTable1[i].LY_SAV_AVG.push(v1.LY_SAV_AVG);
                    }
                    if (_this.custExplTable1[i].SIXM_SAV_AVG.length === 0) {
                        _this.custExplTable1[i].SIXM_SAV_AVG.push(v1.SIXM_SAV_AVG);
                    }
                    // 贷款
                    if (_this.custExplTable1[i].CRED_AMT.length === 0) {
                        _this.custExplTable1[i].CRED_AMT.push(v1.CRED_AMT);
                    }
                    if (_this.custExplTable1[i].LOAN_BAL.length === 0) {
                        _this.custExplTable1[i].LOAN_BAL.push(v1.LOAN_BAL);
                    }
                    if (_this.custExplTable1[i].M_AVG_BAL.length === 0) {
                        _this.custExplTable1[i].M_AVG_BAL.push(v1.M_AVG_BAL);
                    }
                    if (_this.custExplTable1[i].LM_AVG_BAL.length === 0) {
                        _this.custExplTable1[i].LM_AVG_BAL.push(v1.LM_AVG_BAL);
                    }
                    if (_this.custExplTable1[i].LSIXM_AVG_BAL.length === 0) {
                        _this.custExplTable1[i].LSIXM_AVG_BAL.push(v1.LSIXM_AVG_BAL);
                    }
                });
            }
        }
    };
    //折叠面板的展开和收起
    GroupAdvancedSearchComponent.prototype.listOpen = function () {
        for (var i = 0; i < this.trueOrFalse.length; i++) {
            this.trueOrFalse[i] = true;
        }
        this.gundamProperty = true;
    };
    GroupAdvancedSearchComponent.prototype.listClose = function () {
        for (var i = 0; i < this.trueOrFalse.length; i++) {
            this.trueOrFalse[i] = false;
        }
        this.gundamProperty = false;
    };
    // 产品属性 显示/隐藏
    GroupAdvancedSearchComponent.prototype.accordion7Open = function (e) {
        this.gundamProperty = true;
    };
    GroupAdvancedSearchComponent.prototype.accordion7Close = function (e) {
        this.gundamProperty = false;
    };
    // 更改查询客户范围
    GroupAdvancedSearchComponent.prototype.changeCustScope = function (value) {
        // 协储员
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorNames = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgNames = [];
        // 联系人
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerNames = [];
        if (value == '2' || value == '5') {
            // 协储员
            this.displayopenOrg = false; // 主联系人 隐藏
            this.displayopenOrg1 = true; // 协储员 显示
            if (this.role) {
                // 用户为:  N(没有权限)
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                // this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds.push(this.userId);
                // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds.push(this.userId);
            }
            else {
                // Y（有权限）
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerNames = [];
            }
        }
        else if (value == '1' || value == '4') {
            // 主联系人
            this.displayopenOrg = true; // 主联系人 显示
            this.displayopenOrg1 = false; // 协储员 隐藏
            if (this.role) {
                // N
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds.push(this.userId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds.push(this.userId);
            }
            else {
                // Y
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorNames = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgNames = [];
            }
        }
        else {
            // 全部
            this.displayopenOrg = true;
            this.displayopenOrg1 = true;
            if (this.role) {
                // N
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorNames.push(this.userId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgNames.push(this.userId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames.push(this.userId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerNames.push(this.userId);
            }
            else {
                // Y
                // this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds.push(this.roleValue.orgId);
                this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
                // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds.push(this.roleValue.orgId);
            }
        }
        this.creatCustExplCondBean.requestMap.qryScopeMap.custArea = value;
    };
    // 获取session值 初始化必要参数
    GroupAdvancedSearchComponent.prototype.getSession = function (value) {
        var _this = this;
        var param = this.user2;
        this.creatCustExplCondBean.statusId = "3";
        this.creatCustExplCondBean.requestType = '1';
        this.creatCustExplCondBean.marketFlag = '0';
        this.creatCustExplCondBean.userName = param.userName;
        this.creatCustExplCondBean.orgName = param.orgName;
        if (value) {
            if (param.orgList && param.orgList.length > 0) {
                var post_name_1;
                param.orgList.forEach(function (v) {
                    if (_this.commfunc.getSessionDataCH('dropDownSelect')) {
                        post_name_1 = _this.commfunc.getSessionDataCH('dropDownSelect').split(',')[1];
                        if (post_name_1 === v.postName) {
                            _this.postId = v.postId;
                        }
                    }
                    else if (!_this.commfunc.getSessionDataCH('dropDownSelect')) {
                        _this.postId = v.postId;
                        return;
                    }
                });
            }
            /******************************************************  查询范围-去除 ******************************************************/
            /******************************************************  查询范围-去除 ******************************************************/
        }
    };
    /*** 调接口*/
    /**----------------------------------------投向行业--------------------------------------------- */
    GroupAdvancedSearchComponent.prototype.taskTypeQry = function (params) {
        var _this = this;
        this.turnIndustry = [{ 'label': '请选择', 'value': '' }];
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                data.taskTypeList.forEach(function (v) {
                    _this.turnIndustry.push({ "label": v.taskTypeName, "value": v.taskTypeId });
                });
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.taskTypeQryChange = function (e) {
        var _this = this;
        this.params.taskTypeParentId = e.value;
        this.turnIndustry1 = e.value;
        this.httpService.taskTypeQry(this.params).subscribe(function (data) {
            _this.turnIndustryOne = [{ 'label': '请选择', 'value': '' }];
            if (data.returnCode.code === 'success') {
                data.taskTypeList.forEach(function (v) {
                    _this.turnIndustryOne.push({ "label": v.taskTypeName, "value": v.taskTypeId });
                });
                if (e.value !== '') {
                    _this.indutryOneDis = true;
                    _this.indutryTwoDis = false;
                    _this.indutryThreeDis = false;
                }
                else {
                    _this.indutryOneDis = false;
                    _this.indutryTwoDis = false;
                    _this.indutryThreeDis = false;
                }
                _this.turnIndustry2 = '';
                _this.turnIndustry3 = '';
                _this.turnIndustry4 = '';
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.taskTypeQryChangeOne = function (e) {
        var _this = this;
        this.params.taskTypeParentId = e.value;
        this.turnIndustry2 = e.value;
        this.httpService.taskTypeQry(this.params).subscribe(function (data) {
            _this.turnIndustryTwo = [{ 'label': '请选择', 'value': '' }];
            if (data.returnCode.code === 'success') {
                data.taskTypeList.forEach(function (v) {
                    _this.turnIndustryTwo.push({ "label": v.taskTypeName, "value": v.taskTypeId });
                });
                _this.indutryTwoDis = true;
                _this.indutryThreeDis = false;
                _this.turnIndustry3 = '';
                _this.turnIndustry4 = '';
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.taskTypeQryChangeTwo = function (e) {
        var _this = this;
        this.params.taskTypeParentId = e.value;
        this.turnIndustry3 = e.value;
        this.httpService.taskTypeQry(this.params).subscribe(function (data) {
            _this.turnIndustryThree = [{ 'label': '请选择', 'value': '' }];
            if (data.returnCode.code === 'success') {
                data.taskTypeList.forEach(function (v) {
                    _this.turnIndustryThree.push({ "label": v.taskTypeName, "value": v.taskTypeId });
                });
                _this.indutryThreeDis = true;
                _this.turnIndustry4 = '';
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.taskTypeQryChangeThree = function (e) {
        this.turnIndustry4 = e.value;
    };
    /**----------------------------------------投向行业--------------------------------------------- */
    // 查询范围- 名单制查询
    GroupAdvancedSearchComponent.prototype.queryThreeListManageType = function (param) {
        var _this = this;
        this.items = [{ 'label': '请选择', 'value': '' }];
        this.httpService.queryThreeListManageType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.resultList.forEach(function (v) {
                    _this.items.push({ "label": v.threeLevelTypeName, "value": v.threeLevelTypeName });
                });
            }
        });
    };
    // 查询范围- 名单制查询 事件
    GroupAdvancedSearchComponent.prototype.nodeExpend = function (e) {
        if (e !== undefined) {
            this.creatCustExplCondBean.requestMap.creditAttrMap.listManageType = e.value;
            this.selectedCities = e.value;
        }
        return;
    };
    // 信贷业务属性
    GroupAdvancedSearchComponent.prototype.eliLoanVetoedType = function () {
        // 系统模型管理
        // this.sysModuleManage = [{ 'label': '请选择', 'value': '' }];
        // let param1 = { status: "start", paramGroupId: "COP", paramName: "SysModuleManage " }
        // this.httpService.queryCommonParamItemService(param1).subscribe((data) => {
        // 	if (data.returnCode.code === 'success') {
        // 		data.returnCommonParamItemList.forEach((v) => {
        // 			this.sysModuleManage.push({ "label": v.paramItemName, "value": v.paramItemValue })
        // 		})
        // 	}
        // })
        this.loansVetoedType();
        this.loanUseService();
    };
    /**----------------------------------------剔除贷款否决类型--------------------------------------------- */
    GroupAdvancedSearchComponent.prototype.loansVetoedType = function () {
        var _this = this;
        var param = { status: "start", paramGroupId: "COP", paramName: "eliLoanVetoedType", page: "1", limit: "9999" };
        this.httpService.queryCommonParamService(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.eliLoanVetoedTy111 = data.returnCommonParamList[0].paramId;
                _this.loansVetoedType2();
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loansVetoedType2 = function () {
        var _this = this;
        var param = { status: "start", paramGroupId: "COP", paramItemName: "eliLoanVetoedType", paramId: this.eliLoanVetoedTy111, page: "1", limit: "9999" };
        this.httpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.eliLoanVetoedTy2 = [{ 'label': '请选择', 'value': '', 'paramItemName': '' }];
                if (data.returnCommonParamItemList && data.returnCommonParamItemList.length > 0) {
                    data.returnCommonParamItemList.map(function (v) {
                        _this.eliLoanVetoedTy2.push({ 'label': v.paramItemValue, 'value': v.paramItemName });
                    });
                }
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loansVetoedTypeChange2 = function (e) {
        var _this = this;
        var param = { status: "start", paramGroupId: "COP", paramName: e.value, page: "1", limit: "9999" };
        this.httpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.eliLoanVetoedTy3 = [{ 'label': '请选择', 'value': '' }];
                if (data.returnCommonParamItemList && data.returnCommonParamItemList.length > 0) {
                    data.returnCommonParamItemList.map(function (v) {
                        _this.eliLoanVetoedTy3.push({ 'label': v.paramItemValue, 'value': v.paramItemName });
                    });
                }
            }
            if (!e.value) {
                _this.eliLoanTwoDis = false;
                _this.creatCustExplCondBean.requestMap.creditAttrMap.eliLoanVetoedTypeId3 = '';
            }
            else {
                _this.eliLoanTwoDis = true;
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loansVetoedTypeChange3 = function (e) {
        this.creatCustExplCondBean.requestMap.creditAttrMap.eliLoanVetoedTypeId3 = e.value;
    };
    /**----------------------------------------剔除贷款否决类型--------------------------------------------- */
    /**----------------------------------------贷款用途--------------------------------------------- */
    GroupAdvancedSearchComponent.prototype.loanUseService = function () {
        var _this = this;
        // 贷款用途
        var param = { status: "start", paramGroupId: "COP", paramName: "loanUse", page: "1", limit: "9999" };
        this.loanUse2 = [{ 'label': '请选择', 'value': '' }];
        this.httpService.queryCommonParamService(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.returnCommonParamList && data.returnCommonParamList.length > 0) {
                    _this.loanUse1 = data.returnCommonParamList[0].paramId;
                    _this.loanUseService2();
                }
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loanUseService2 = function () {
        var _this = this;
        var param = { status: "start", paramGroupId: "COP", paramItemName: "loanUse", paramId: this.loanUse1, page: "1", limit: "9999" };
        this.httpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.returnCommonParamItemList && data.returnCommonParamItemList.length > 0) {
                    data.returnCommonParamItemList.forEach(function (v) {
                        _this.loanUse2.push({ "label": v.paramItemValue, "value": v.paramItemName });
                    });
                }
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loanUseChange = function (e) {
        var _this = this;
        var param = { status: "start", paramGroupId: "COP", paramName: e.value, page: "1", limit: "9999" };
        this.loanUse3 = [{ 'label': '请选择', 'value': '' }];
        this.httpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.returnCommonParamItemList && data.returnCommonParamItemList.length > 0) {
                    data.returnCommonParamItemList.forEach(function (v) {
                        _this.loanUse3.push({ "label": v.paramItemValue, "value": v.paramItemName });
                    });
                }
            }
            if (!e.value) {
                _this.loanUseTwoDis = false;
                _this.creatCustExplCondBean.requestMap.creditAttrMap.loanUseId2 = '';
            }
            else {
                _this.loanUseTwoDis = true;
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.loanUseChange1 = function (e) {
        this.creatCustExplCondBean.requestMap.creditAttrMap.loanUseId2 = e.value;
    };
    /**----------------------------------------贷款用途--------------------------------------------- */
    // dom 操作 客户明细表格 动态改变宽度
    GroupAdvancedSearchComponent.prototype.getDomMethod = function () {
        var dom_gundam = document.getElementById('domGundam').getElementsByTagName('thead');
        this.displayTarget.map(function (v, i) {
            if (v.subList2.length > 0) {
                // let dom_gundam1 = dom_gundam[0].getElementsByTagName('table');
                dom_gundam[0].children[0].children[i + 1].style.width = "" + ((v.subList2.length / 1) * 112 + 'px');
            }
        });
    };
    // 筛选结果
    GroupAdvancedSearchComponent.prototype.filterDisplay1 = function () {
        this.chooseList(1);
        // this.productTable();
        // this.filterDisplay = !this.filterDisplay
    };
    GroupAdvancedSearchComponent.prototype.func = function () {
        var _this = this;
        this.FtpTo = JSON.parse(JSON.stringify(this.ftpAttrList));
        this.ftpAttrList.forEach(function (items) {
            items.forEach(function (item) {
                // if (item.profitParmFrom && item.profitParmTo) {
                // 	item['profitParmFrom'] = `${item['profitParmFrom']}|${item['profitParmTo']}` + '';
                // 	delete item['profitParmTo'];
                // } else {
                // 	if (item.profitParmTo) {
                // 		item['profitParmFrom'] = `*|${item['profitParmTo']}` + '';
                // 		delete item['profitParmTo'];
                // 	} else if (item.profitParmFrom) {
                // 		item['profitParmFrom'] = `${item['profitParmFrom']}|*` + '';
                // 	}
                // }
                _this.contactField(item, 'profitParmFrom', 'profitParmTo');
            });
        });
    };
    GroupAdvancedSearchComponent.prototype.contactField = function (item, paramFrom, paramTo) {
        if (item) {
            if (item[paramFrom] && item[paramTo]) {
                item[paramFrom] = item[paramFrom] + "|" + item[paramTo] + '';
                delete item[paramTo];
            }
            else {
                if (item.profitParmTo) {
                    item[paramFrom] = "*|" + item[paramTo] + '';
                    delete item[paramTo];
                }
                else if (item.profitParmFrom) {
                    item[paramFrom] = item[paramFrom] + "|*" + '';
                }
            }
        }
    };
    //字段回显处理
    GroupAdvancedSearchComponent.prototype.fielBackView = function (list) {
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < this.custExplTable.length; j++) {
                if (list[i].flag == this.custExplTable[j].flag) {
                    this.custExplTable.splice(j, 1, list[i]);
                    break;
                }
            }
        }
    };
    GroupAdvancedSearchComponent.prototype.deleteNull = function (list) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var keys = Object.keys(list);
        for (var i in list) {
            if (JSON.stringify(list[i]) == '{}' || list[i] == "" || list[i] == null || list[i] == undefined) {
                delete list[i];
                if (keys[keys.length - 1] == i && JSON.stringify(list) == '{}') {
                    args[1].splice(args[0], 1);
                }
            }
            else {
                if (list[i].constructor == Object) {
                    this.deleteNull(list[i]);
                }
                else if (list[i].constructor == Array) {
                    this.listRec(list[i]);
                }
            }
        }
        return list;
    };
    GroupAdvancedSearchComponent.prototype.listRec = function (list) {
        var _this = this;
        list.forEach(function (item, index) {
            if (item.constructor == Array) {
                _this.listRec(item);
            }
            else {
                _this.deleteNull(item, index, list);
            }
        });
    };
    //更改'selectNameOpt'值
    GroupAdvancedSearchComponent.prototype.changeSelectName = function (list, name, cusName) {
        if (list) {
            list.forEach(function (items, i) {
                items.forEach(function (item, ind) {
                    if (item[name]) {
                        item['selectNameOpt'] = item[name];
                    }
                    delete item[cusName];
                });
            });
        }
        // return list
    };
    // 查看结果
    GroupAdvancedSearchComponent.prototype.saveAndLook = function (value) {
        var _this = this;
        // debugger
        // let promise = new Promise((resolve, reject) => {
        // this.selectUserListShow();//用户列表查询
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '2',
            listShowsIdModule: '02',
            createOrg: orgId,
            createdByUserLogin: user,
        };
        this.httpService.selectUserListShow(param).subscribe(function (data) {
            if (data.exploreConditionObject) {
                var dataList = JSON.parse(data.exploreConditionObject);
                _this.fielBackView(dataList);
                _this.displayTarget.forEach(function (v, i) {
                    _this.displayTarget[i].subList2 = [];
                });
                _this.displayTarget = [];
                _this.target();
                _this.productMetricMethod();
                _this.productTable();
            }
            _this.saveLookFunc(value);
        });
    };
    //保存探索条件并查看结果按钮 -> 查看结果
    GroupAdvancedSearchComponent.prototype.saveLookFunc = function (value) {
        var _this = this;
        this.func();
        if (this.turnIndustry3) {
            this.creatCustExplCondBean.requestMap.custInfo.turnIndustry = this.turnIndustry1 + '_' + this.turnIndustry2 + '_' + this.turnIndustry3 + '_' + this.turnIndustry4;
        }
        else {
            delete this.creatCustExplCondBean.requestMap.custInfo.turnIndustry;
        }
        if (value == 1 || value == 2) {
            this.productTable();
            setTimeout(function () {
                // dom操作动态展示表格间距（存款、贷款等。。）
                return _this.getDomMethod();
            }, 10);
        }
        this.getSession(0);
        if (!this.creatCustExplCondBean.requestMap.qryScopeMap.startTime) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: ' 请输入查询范围-数据日期！' }];
            return;
        }
        else if (value == 1) {
            // //1.查询范围
            // this.startTime = new Date(this.startTime)
            // this.creatCustExplCondBean.requestMap.qryScopeMap.startTime = this.commfunc.transDateN(this.startTime);//查询时间基点
            // 4.客户基本属性筛选
            this.creatCustExplCondBean.requestMap.custInfo.creatTimeStart = this.commfunc.transDateN(this.creatStaDate); //开始时间
            this.creatCustExplCondBean.requestMap.custInfo.creatTimeEnd = this.commfunc.transDateN(this.creatEndDate); //结束时间
            // if(checkComAndNum(null,this.creatCustExplCondBean.requestMap.custInfo.custNo)) {
            // 	this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-通用属性-客户号-输入内容只能为数字和逗号。已置空，请重新输入！' }];
            // 	this.creatCustExplCondBean.requestMap.custInfo.custNo = '';
            // 	return;
            // }
            // if(specialSymbol(null,this.creatCustExplCondBean.requestMap.custInfo.custName)) {
            // 	this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-通用属性-客户名称-请勿输入特殊字符。已置空，请重新输入！' }];
            // 	this.creatCustExplCondBean.requestMap.custInfo.custNo = '';
            // 	return;
            // }
            //5-1.个人客户属性筛选
            if (this.birthDateFrom && this.birthDateTo) {
                this.creatCustExplCondBean.requestMap.indiCustomer.birthDateStart = this.commfunc.transDateN(this.birthDateFrom) + '|' + this.commfunc.transDateN(this.birthDateTo);
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstFrom) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstFrom)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年龄-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstFrom = '';
                }
                return;
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstTo) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstTo)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年龄-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.ageFirstTo = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondFrom) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondFrom)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年龄-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondFrom = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondTo) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondTo)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年龄-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.ageSecondTo = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeStart) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeStart)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-月收入-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeStart = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeEnd) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeEnd)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-月收入-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.monthIncomeEnd = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeStart) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeStart)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年收入-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeStart = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeEnd) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZzNum"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeEnd)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-年收入-输入内容需大于零。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.yearIncomeEnd = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.manageAddr) {
                if (!Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.manageAddr)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-经营地址-请输入正确的经营地址。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.manageAddr = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.indiCustomer.familyAddr) {
                if (!Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.indiCustomer.familyAddr)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-个人属性-经营地址-请输入正确的经营地址。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.indiCustomer.familyAddr = '';
                    return;
                }
            }
            //5-2.基础属性-企业客户属性(经营信息)
            // 法人代表
            if (this.creatCustExplCondBean.requestMap.businessInfo.corpName) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkName"])(null, this.creatCustExplCondBean.requestMap.businessInfo.corpName)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-法人代表-请输入正确的法人代表名称。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.corpName = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.manageAddr) {
                if (!Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.manageAddr)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的经营地址。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.manageAddr = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.mobile) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.mobile)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的联系号码。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.mobile = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.assetDown) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.assetDown)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的资产总额下限。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.assetDown = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.assetUp) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.assetUp)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的资产总额上限。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.assetUp = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.debtDown) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.debtDown)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的负债总额下限。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.debtDown = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.businessInfo.debtUp) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, this.creatCustExplCondBean.requestMap.businessInfo.debtUp)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 基础属性-企业客户属性-请输入正确的负债总额上限。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.businessInfo.debtUp = '';
                    return;
                }
            }
            //7.客户持有信息筛选
            this.creatCustExplCondBean.requestMap.custLabelAttrList = this.custLabelAttrList; //9.客户标签属性筛选
            this.creatCustExplCondBean.requestMap.custGroupAttrList = this.custGroupAttrList; //10.客户群属性筛选
            this.creatCustExplCondBean.requestMap.ftpAttrList = this.ftpAttrList; //11.FTP利润属性筛选
            //深度克隆
            var cloneCreatCustExplCondBean = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](this.creatCustExplCondBean);
            //8.客户产品属性筛选(将产品小类、参数类型从数组中删除)
            // cloneCreatCustExplCondBean.requestMap.custHoldProdAttrList.forEach(data => {
            // 	data.forEach(item => {
            // 		delete item.proSamllTypeOPt;
            // 		delete item.paramTypeOpt;
            // 	})
            // })
            //9.客户标签属性筛选(将cusTagNameOpt从数组中删除)
            cloneCreatCustExplCondBean.requestMap.custLabelAttrList.forEach(function (data) {
                data.forEach(function (item) {
                    delete item.cusTagNameOpt;
                    delete item.selectNameOpt;
                });
            });
            //10.客户群属性筛选(将cusTagNameOpt从数组中删除)
            cloneCreatCustExplCondBean.requestMap.custGroupAttrList.forEach(function (data) {
                data.forEach(function (item) {
                    delete item.cusGroupNameOpt;
                    delete item.selectNameOpt;
                });
            });
            // 12.第三方评价
            if (this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountFrom) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZnum"])(null, this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountFrom)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 第三方评价-预授信额度-请输入正确的预授信额度。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountFrom = '';
                    return;
                }
            }
            if (this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountTo) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkZnum"])(null, this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountTo)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: ' 第三方评价-预授信额度-请输入正确的预授信额度。已置空，请重新输入！' }];
                    this.creatCustExplCondBean.requestMap.thirdPartyEvaluate.preApprovalAmountTo = '';
                    return;
                }
            }
            this.filterDisplay = !this.filterDisplay;
        }
        // this.creatCustExplCondBean.requestMap.qryScopeMap.custArea = this.radioButtonNum; //  查询范围-去除
        this.creatCustExplCondBean.requestMap.qryScopeMap.custGrouId = this.dataValue['groupId'];
        //删除入参中的空字段
        var requestMapCopy = JSON.parse(JSON.stringify(this.creatCustExplCondBean.requestMap));
        var requestMap = this.deleteNull(this.deleteNull(requestMapCopy));
        //标签属性、客群属性入参修改
        this.changeSelectName(requestMap.custGroupAttrList, 'custGrouName', 'cusGroupNameOpt');
        this.changeSelectName(requestMap.custLabelAttrList, 'labelName', 'cusTagNameOpt');
        this.contactField(requestMap.thirdPartyEvaluate, 'preApprovalAmountFrom', 'preApprovalAmountTo');
        this.contactField(requestMap.thirdPartyEvaluate, 'preApprovalTimeFrom', 'preApprovalTimeTo');
        //通用属性-投向行业入参修改
        if (requestMap.custInfo['turnIndustry1']) {
            requestMap.custInfo['turnIndustry'] = requestMap.custInfo['turnIndustry1'] + "_" + requestMap.custInfo['turnIndustry2'] + "_" + requestMap.custInfo['turnIndustry3'] + "_" + requestMap.custInfo['turnIndustry4'];
            delete requestMap.custInfo['turnIndustry1'];
            delete requestMap.custInfo['turnIndustry2'];
            delete requestMap.custInfo['turnIndustry3'];
            delete requestMap.custInfo['turnIndustry4'];
        }
        if (requestMap.creditAttrMap) {
            if (requestMap.creditAttrMap.eliLoanVetoedTypeId3) {
                requestMap.creditAttrMap.eliLoanVetoedTypeId2 = requestMap.creditAttrMap.eliLoanVetoedTypeId2 + '_' + requestMap.creditAttrMap.eliLoanVetoedTypeId3;
                delete requestMap.creditAttrMap.eliLoanVetoedTypeId3;
            }
        }
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            requestType: "1",
            statusId: "3",
            marketFlag: "0",
            requestMap: requestMap,
            userName: this.creatCustExplCondBean.userName
        };
        this.httpService.publicCustomerService(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.data = data.custDetialInfoList;
                _this.custExplTable1 = data.custDetialInfoList;
                for (var i = 0; i < _this.custExplTable1.length; i++) {
                    if (_this.checkSave.indexOf(_this.custExplTable1[i].CUST_ID + '|' + _this.custExplTable1[i].CUST_NAME) !== -1) {
                        _this.custExplTable1[i].checkBox = true;
                    }
                }
                for (var i = 0; i < _this.custExplTable1.length; i++) {
                    if (_this.custExplTable1[i].checkBox == false || _this.custExplTable1[i].checkBox == undefined) {
                        _this.checkAll = false;
                        break;
                    }
                    else {
                        _this.checkAll = true;
                    }
                }
                //金额转换
                _this.custExplTable1.forEach(function (item) {
                    item['M_BEFORE_FTP'] = _this.commfunc.formatMoney(item['M_BEFORE_FTP'], 2);
                    item['LMM_BEFORE_FTP'] = _this.commfunc.formatMoney(item['LMM_BEFORE_FTP'], 2);
                    item['SIX_M_BEFORE_FTP'] = _this.commfunc.formatMoney(item['SIX_M_BEFORE_FTP'], 2);
                    item['Y_BEFORE_FTP'] = _this.commfunc.formatMoney(item['Y_BEFORE_FTP'], 2);
                    item['LY_BEFORE_FTP'] = _this.commfunc.formatMoney(item['LY_BEFORE_FTP'], 2);
                    item['M_AFTER_FTP'] = _this.commfunc.formatMoney(item['M_AFTER_FTP'], 2);
                    item['LM_AFTER_FTP'] = _this.commfunc.formatMoney(item['LM_AFTER_FTP'], 2);
                    item['SIXM_AFTER_FTP'] = _this.commfunc.formatMoney(item['SIXM_AFTER_FTP'], 2);
                    item['Y_AFTER_FTP'] = _this.commfunc.formatMoney(item['Y_AFTER_FTP'], 2);
                    item['LY_AFTER_FTP'] = _this.commfunc.formatMoney(item['LY_AFTER_FTP'], 2);
                    item['MONTHINCOME'] = _this.commfunc.formatMoney(item['MONTHINCOME'], 2);
                    item['YEARINCOME'] = _this.commfunc.formatMoney(item['YEARINCOME'], 2);
                    item['PE_ASSET'] = _this.commfunc.formatMoney(item['PE_ASSET'], 2);
                    item['PE_DEBT'] = _this.commfunc.formatMoney(item['PE_DEBT'], 2);
                    item['SAV_BAL'] = _this.commfunc.formatMoney(item['SAV_BAL'], 2);
                    item['M_SAV_AVG'] = _this.commfunc.formatMoney(item['M_SAV_AVG'], 2);
                    item['LM_SAV_AVG'] = _this.commfunc.formatMoney(item['LM_SAV_AVG'], 2);
                    item['Y_SAV_AVG'] = _this.commfunc.formatMoney(item['Y_SAV_AVG'], 2);
                    item['LY_SAV_AVG'] = _this.commfunc.formatMoney(item['LY_SAV_AVG'], 2);
                    item['SIXM_SAV_AVG'] = _this.commfunc.formatMoney(item['SIXM_SAV_AVG'], 2);
                    item['CRED_AMT'] = _this.commfunc.formatMoney(item['CRED_AMT'], 2);
                    item['LOAN_BAL'] = _this.commfunc.formatMoney(item['LOAN_BAL'], 2);
                    item['M_AVG_BAL'] = _this.commfunc.formatMoney(item['M_AVG_BAL'], 2);
                    item['LM_AVG_BAL'] = _this.commfunc.formatMoney(item['LM_AVG_BAL'], 2);
                    item['LSIXM_AVG_BAL'] = _this.commfunc.formatMoney(item['LSIXM_AVG_BAL'], 2);
                    item['ACCEPTANCE_AMT'] = _this.commfunc.formatMoney(item['ACCEPTANCE_AMT'], 2);
                    item['ACCEPTANCE_OPENING'] = _this.commfunc.formatMoney(item['ACCEPTANCE_OPENING'], 2);
                    item['ACCEPTANCE_OPENING_AMT'] = _this.commfunc.formatMoney(item['ACCEPTANCE_OPENING_AMT'], 2);
                    item['CREAIT_CARD_CRDT_LMT'] = _this.commfunc.formatMoney(item['CREAIT_CARD_CRDT_LMT'], 2);
                    item['OVERDRAFT_CREDIT_LMT'] = _this.commfunc.formatMoney(item['OVERDRAFT_CREDIT_LMT'], 2);
                    item['OVDUE_CREDIT_AMT'] = _this.commfunc.formatMoney(item['OVDUE_CREDIT_AMT'], 2);
                    item['INTEGRAL_BAL'] = _this.commfunc.formatMoney(item['INTEGRAL_BAL'], 2);
                    if (item['onlineAttr'] == '0') {
                        item['onlineAttr'] = '否';
                    }
                    if (item['onlineAttr'] == '1') {
                        item['onlineAttr'] = '是';
                    }
                    if (item['phoneAttr'] == '0') {
                        item['phoneAttr'] = '否';
                    }
                    if (item['phoneAttr'] == '1') {
                        item['phoneAttr'] = '是';
                    }
                    if (item['WX_Attr'] == '0') {
                        item['WX_Attr'] = '否';
                    }
                    if (item['WX_Attr'] == '1') {
                        item['WX_Attr'] = '是';
                    }
                });
                if (data.screenCustMap) {
                    _this.returnData = data.screenCustMap;
                    _this.totalNum = data.screenCustMap.custNum - 0; //总条数
                    _this.time = moment__WEBPACK_IMPORTED_MODULE_8__(data.screenCustMap.screeDt).format("YYYY年MM月DD日HH时mm分ss秒");
                }
                else {
                    _this.totalNum = 0;
                }
                if (data.resultList) {
                    _this.tableData = data.resultList;
                }
                if (data.groupOrgBySavList) {
                    _this.sales = data.groupOrgBySavList;
                }
                if (data.groupOrgByLoanList) {
                    _this.LoanList = data.groupOrgByLoanList;
                }
                // this.chooseList();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '查看结果提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '查看结果提示', detail: data.returnCode.message });
            }
            _this.chooseList(1);
            _this.pageNum = 1;
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '查看结果提示', detail: '调用服务失败！' });
        });
        this.displayTarget2();
    };
    GroupAdvancedSearchComponent.prototype.onFilter = function () {
        this.ftpAttrList = this.FtpTo;
        this.checkSave = [];
    };
    //创建营销活动按钮
    GroupAdvancedSearchComponent.prototype.newMarketing = function () {
        this.router.navigate(['pages/tzb/custom/marketing/creat-marketing']);
    };
    /**
     * 删除近期营销活动已覆盖客户模态框开始
     */
    //打开删除近期营销活动已覆盖客户模态框
    GroupAdvancedSearchComponent.prototype.deleCoverCusClick = function () {
        this.deleCoverDisplay = !this.deleCoverDisplay;
    };
    //回调
    GroupAdvancedSearchComponent.prototype.deleCoverCus = function (event) {
        this.deleCoverDisplay = false;
        this.tempModel = '';
        //接收 剔除近期营销活动已覆盖客户 选中值
        event.param.forEach(function (ind) {
            delete ind.ischeck;
        });
        /**将传过来的表数据中的campaignName，campaignId，oldCampaignType分别
         * 赋值给this.creatCustExplCondBean.qryScopeMap['oldCampaignIds']中对应的oldCampaignId，oldCampaignName，oldCampaignType
         * 待定，后台还没有确定好参数格式
         */
        this.creatCustExplCondBean.requestMap.qryScopeMap['oldCampaignIds'] = event.param;
        for (var _i = 0, _a = this.creatCustExplCondBean.requestMap.qryScopeMap.oldCampaignIds; _i < _a.length; _i++) {
            var item = _a[_i];
            this.tempModel += item.campaignName + ' , ';
        }
    };
    /**
     * 删除近期营销活动已覆盖客户模态框开始
     */
    //接收 探索条件名称选择值
    GroupAdvancedSearchComponent.prototype.upValue = function (event) {
        this.explore = '';
        this.display = false;
        event.param.forEach(function (i) {
            delete i.ischeck;
        });
        // this.creatCustExplCondBean.expCondName = event.param;
    };
    /**
     * 处理建立日期
     * @param event
     */
    GroupAdvancedSearchComponent.prototype.showdata = function (event) {
        this.creatCustExplCondBean.requestMap.custInfo.creatTimeStart = this.commfunc.transDateN(event[0]); //开始日期
        this.creatCustExplCondBean.requestMap.custInfo.creatTimeEnd = this.commfunc.transDateN(event[1]); //结束日期	
    };
    /**
     * 查询时间基点
    */
    // startTimeData() {
    // 	this.creatCustExplCondBean.requestMap.qryScopeMap.startTime = this.startTime.transDate(this.creatCustExplCondBean.requestMap.qryScopeMap.startTime);
    // }
    /**
     * 客户名单 表格 checkbox
     */
    GroupAdvancedSearchComponent.prototype.doSelect = function (param) {
        var _this = this;
        // this.chooseDisplay=!this.chooseDisplay
        if (param.isCheck) {
            this.InfoList.push(param);
        }
        else {
            this.InfoList.forEach(function (item, i) {
                if (item.value == param.value) {
                    _this.InfoList.splice(i, 1);
                }
            });
        }
    };
    //选择表头显示字段按钮
    GroupAdvancedSearchComponent.prototype.doSelect1 = function () {
        this.chooseDisplay = !this.chooseDisplay;
    };
    //分页
    GroupAdvancedSearchComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        // this.filtration();
        this.pageNum = 1;
    };
    //4.客户基本属性筛选
    //客户属性下拉框
    GroupAdvancedSearchComponent.prototype.radioBtn = function () {
        if (this.creatCustExplCondBean.requestMap.custInfo.custType == '1') {
            this.creatCustExplCondBean.requestMap.businessInfo = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["BusinessInfo"]();
            this.custAttrOption = this.custAttrOpt1;
            this.iDCardOpt = this.iDCardOpt1;
        }
        else if (this.creatCustExplCondBean.requestMap.custInfo.custType == '2') {
            this.creatCustExplCondBean.requestMap.indiCustomer = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["IndiCustomer"]();
            // 出生日期
            this.birthDateFrom = null;
            this.birthDateTo = null;
            this.custAttrOption = this.custAttrOpt2;
            this.iDCardOpt = this.iDCardOpt2;
        }
        else if (this.creatCustExplCondBean.requestMap.custInfo.custType == '3') {
            this.creatCustExplCondBean.requestMap.businessInfo = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["BusinessInfo"]();
            this.creatCustExplCondBean.requestMap.indiCustomer = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["IndiCustomer"]();
            // 出生日期
            this.birthDateFrom = null;
            this.birthDateTo = null;
            this.custAttrOption = this.custAttrOpt;
            this.iDCardOpt = this.iDCardOpt3;
        }
    };
    // 10.客户产品属性筛选
    //产品大类、产品小类、参数类型下拉框三级联动
    GroupAdvancedSearchComponent.prototype.proChange = function (arry, event, i, ind) {
        if (event.value) {
            if (event.value == '10') {
                arry[i][ind]['proSamllTypeOPt'] = this.saveTypeOpt;
            }
            else if (event.value == '20') {
                arry[i][ind]['proSamllTypeOPt'] = this.loanTypeOpt;
            }
        }
        else {
            if (event == '10') {
                arry[i][ind]['proSamllTypeOPt'] = this.saveTypeOpt;
            }
            else if (event == '20') {
                arry[i][ind]['proSamllTypeOPt'] = this.loanTypeOpt;
            }
        }
    };
    GroupAdvancedSearchComponent.prototype.subProChange = function (arry, event, i, ind, prodCateId) {
        var _this = this;
        if (prodCateId == '10') {
            this.saveTypeOpt.forEach(function (data) {
                if (event.value) {
                    if (event.value == data.value) {
                        arry[i][ind]['paramTypeOpt'] = _this.paramOpt[0][data.value];
                    }
                }
                else {
                    if (event == data.value) {
                        arry[i][ind]['paramTypeOpt'] = _this.paramOpt[0][data.value];
                    }
                }
            });
        }
        else if (prodCateId == '20') {
            this.loanTypeOpt.forEach(function (data) {
                if (event.value) {
                    if (event.value == data.value) {
                        arry[i][ind]['paramTypeOpt'] = _this.paramOpt[0][data.value];
                    }
                }
                else {
                    if (event == data.value) {
                        arry[i][ind]['paramTypeOpt'] = _this.paramOpt[0][data.value];
                    }
                }
            });
        }
    };
    /**
     * 加减号的实现开始
     */
    // 对象拷贝
    GroupAdvancedSearchComponent.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //点击或的加号(客户产品属性列表)
    GroupAdvancedSearchComponent.prototype.doAdd = function (name) {
        //(客户产品属性列表)
        if (name == 'custHoldProdAttr') {
            var temp = this.copyObj(this.custHoldProdAttrListMember);
            this.custHoldProdAttrList.push([temp]);
        }
        //客户标签属性
        if (name == 'custLabelAttr') {
            var temp = this.copyObj(this.custLableAttrListMember);
            this.custLabelAttrList.push([temp]);
        }
        //客户群组属性
        if (name == 'custGroupAttr') {
            var temp = this.copyObj(this.custGroupAttrListMember);
            this.custGroupAttrList.push([temp]);
        }
        //ftp
        if (name == 'ftpAttr') {
            var temp = this.copyObj(this.ftpAttrListMember);
            this.ftpAttrList.push([temp]);
        }
    };
    //点击或的减号
    GroupAdvancedSearchComponent.prototype.doReduce = function (i, name) {
        //(客户产品属性列表)
        if (name == 'custHoldProdAttr') {
            this.custHoldProdAttrList.splice(i, 1);
        }
        //(客户标签属性列表)
        if (name == 'custLabelAttr') {
            this.custLabelAttrList.splice(i, 1);
        }
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            this.custGroupAttrList.splice(i, 1);
        }
        //ftp 利率
        if (name == 'ftpAttr') {
            this.ftpAttrList.splice(i, 1);
        }
    };
    //点击且中的加号(客户产品属性列表)
    GroupAdvancedSearchComponent.prototype.doAndAdd = function (i, name) {
        //(客户产品属性列表)
        if (name == 'custHoldProdAttr') {
            var temp = this.copyObj(this.custHoldProdAttrListMember);
            this.custHoldProdAttrList[i].push(temp);
        }
        //(客户标签属性列表)
        if (name == 'custLabelAttr') {
            var temp = this.copyObj(this.custLableAttrListMember);
            this.custLabelAttrList[i].push(temp);
        }
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            var temp = this.copyObj(this.custGroupAttrListMember);
            this.custGroupAttrList[i].push(temp);
        }
        //ftp 利率
        if (name == 'ftpAttr') {
            var temp = this.copyObj(this.ftpAttrListMember);
            this.ftpAttrList[i].push(temp);
        }
    };
    //点击且中的减号(客户产品属性列表)
    GroupAdvancedSearchComponent.prototype.doAndReduce = function (ind, name) {
        //(客户产品属性列表)
        if (name == 'custHoldProdAttr') {
            if (this.custHoldProdAttrList[ind].length == 1) {
                this.doReduce(ind, 'custHoldProdAttr');
                return;
            }
            this.custHoldProdAttrList[ind].splice(this.custHoldProdAttrList[ind].length - 1, 1);
        }
        //(客户标签属性列表)
        if (name == 'custLabelAttr') {
            if (this.custLabelAttrList[ind].length == 1) {
                this.doReduce(ind, 'custLabelAttr');
                return;
            }
            this.custLabelAttrList[ind].splice(this.custLabelAttrList[ind].length - 1, 1);
        }
        //客户群组属性
        if (name == 'custGroupAttr') {
            if (this.custGroupAttrList[ind].length == 1) {
                this.doReduce(ind, 'custGroupAttr');
                return;
            }
            this.custGroupAttrList[ind].splice(this.custGroupAttrList[ind].length - 1, 1);
        }
        //ftp 属性
        if (name == 'ftpAttr') {
            if (this.ftpAttrList[ind].length == 1) {
                this.doReduce(ind, 'ftpAttr');
                return;
            }
            this.ftpAttrList[ind].splice(this.ftpAttrList[ind].length - 1, 1);
        }
    };
    /**
     * 加减号的操作结束
     */
    /**
     * 模糊查询开始
     *
     */
    GroupAdvancedSearchComponent.prototype.change = function (item, event) {
        if (event.value == '2') {
            this.tagType = '2';
        }
        else if (event.value == '1') {
            this.tagType = '1';
        }
        else if (event.value == '') {
            this.tagType = '';
        }
    };
    //客户标签名称（模糊查询）
    GroupAdvancedSearchComponent.prototype.cusTagName = function (i, ind, event) {
        debugger;
        if (event.query) {
            //根据自己联想的标签名，进行模糊查询
            var param = { status: "1", labelName: event.query, labelType: this.tagType };
            this.selectLabelInfo(i, ind, param);
        }
        else {
            //根据回显详情后的标签名称（labelName），进行模糊查询
            var param = { status: "1", labelName: event.query, labelType: this.tagType };
            this.selectLabelInfo(i, ind, param);
        }
    };
    //调后台客户标签模糊查询接口
    GroupAdvancedSearchComponent.prototype.selectLabelInfo = function (i, ind, param) {
        var _this = this;
        this.httpService.selectLabelInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custLabelAttrList[i][ind]['cusTagNameOpt'] = [[]];
                _this.custLabelAttrList[i][ind]['cusTagNameOpt'] = data.labelTypeList;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '客户标签模糊查询', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '客户标签模糊查询', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '客户标签模糊查询', detail: '调用服务失败！' });
        });
    };
    //客户标签模糊查询赋值，转化成后台想要的格式传给后台
    GroupAdvancedSearchComponent.prototype.selectCusTagNameOpt = function (i, ind, event) {
        this.custLabelAttrList[i][ind]['labelId'] = event.labelNum;
        this.custLabelAttrList[i][ind]['labelName'] = event.labelName;
    };
    // 客户群属性（模糊查询）
    GroupAdvancedSearchComponent.prototype.cusGroupName = function (i, ind, event) {
        if (event.query) {
            var param = { groupName: event.query, pageNum: 1, pageSize: 999999 };
            this.selectCustGroup(i, ind, param);
        }
        else {
            var param = { groupName: event, pageNum: 1, pageSize: 999999 };
            this.selectCustGroup(i, ind, param);
        }
    };
    GroupAdvancedSearchComponent.prototype.selectCustGroup = function (i, ind, param) {
        var _this = this;
        this.httpService.selectCustGroup(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupAttrList[i][ind]['cusGroupNameOpt'] = [[]];
                _this.custGroupAttrList[i][ind]['cusGroupNameOpt'] = data.groupList;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '客户群模糊查询', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '客户群模糊查询', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '客户群模糊查询', detail: '调用服务失败！' });
        });
    };
    //客户属性模糊查询赋值,转化成后台想要的格式传给后台
    GroupAdvancedSearchComponent.prototype.selectCusGroupNameOpt = function (i, ind, $event) {
        this.custGroupAttrList[i][ind]['custGrouId'] = $event.groupId;
        this.custGroupAttrList[i][ind]['custGrouName'] = $event.groupName;
    };
    /**
     * 模糊查询结束
     *
     */
    // 重置
    GroupAdvancedSearchComponent.prototype.rest = function () {
        var _this = this;
        this.creatCustExplCondBean = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["CreatCustExplCondBean"]();
        this.turnIndustry1 = '';
        this.turnIndustry2 = '';
        this.turnIndustry3 = '';
        this.turnIndustry4 = '';
        var temp1 = this.copyObj(this.custLableAttrListMember);
        this.custLabelAttrList = [[temp1]]; //客户标签属性列表
        var temp2 = this.copyObj(this.custGroupAttrListMember);
        this.custGroupAttrList = [[temp2]]; //客户群属性筛选
        var temp3 = this.copyObj(this.ftpAttrListMember);
        this.ftpAttrList = [[temp3]]; //FTP利润属性
        this.productMetric = [];
        this.creatCustExplCondBean.userName = this.user2.userName; // 登陆用户名称
        this.creatCustExplCondBean.requestMap.custInfo.custType = "3"; // 客户属性默认全部
        this.iDCardOpt = this.iDCardOpt3;
        /******************************************************  查询范围-去除 ******************************************************/
        // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds.push(this.roleValue.orgId);
        // if (this.role) {
        // 	this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds.push(this.userId);
        // }
        /******************************************************  查询范围-去除 ******************************************************/
        // 投向行业
        this.indutryOneDis = false;
        this.indutryTwoDis = false;
        this.indutryThreeDis = false;
        // 名单制
        this.selectedCities = [];
        // 贷款否决类型
        this.eliLoanTwoDis = false;
        this.eliLoanThreeDis = false;
        // 贷款用途
        this.loanUseTwoDis = false;
        // 出生日期
        this.birthDateFrom = null;
        this.birthDateTo = null;
        // 初始查询时间
        // this.startTime = '2017/12/31';
        this.restTrue = false;
        setTimeout(function () {
            _this.restTrue = true;
            _this.creatCustExplCondBean.requestMap.qryScopeMap.startTime = _this.startTime = _this.transDate_Y_M(new Date());
        }, 100);
    };
    // 产品属性 确定
    GroupAdvancedSearchComponent.prototype.test = function () {
        this.invalue = 'advancedCatelog';
        this.productmodel = true;
    };
    GroupAdvancedSearchComponent.prototype.outValue5 = function (e) {
        var _this = this;
        var prodParam0 = '', prodParam1 = '', prodParam2 = '';
        this.creatCustExplCondBean.requestMap.custHoldProdAttrList = [];
        this.infoList1 = [];
        // 传到子组件 使用
        this.filterTemplate = [];
        this.displayTarget.forEach(function (v, i) {
            _this.displayTarget[i].subList = [];
        });
        this.productmodel = false;
        // 产品属性 表格展示回显
        this.productMetric1 = e;
        if (e !== undefined) {
            this.prodtotalNum = e.length;
            e.forEach(function (v, i) {
                if (e.length > 0) {
                    _this.infoList.forEach(function (v1) {
                        if (v.value[0].productId == v1.productId) {
                            _this.infoList1.push(v1);
                        }
                    });
                }
                // 传到子组件 使用
                _this.filterTemplate.push({ value: v.value[0].categoryName, label: v.label });
                /**--------------------------------------------------------------------------------------- */
                // 判断参数类型 显示
                var type = v.parameter[0] - 0;
                if (v.parameter[0] == 'true' || v.parameter[0] == 'false') {
                    if (v.parameter[0] === 'true') {
                        prodParam0 = '是';
                        prodParam1 = '';
                    }
                    else {
                        prodParam0 = '否';
                        prodParam1 = '';
                    }
                    prodParam0 = v.parameter[0];
                    _this.productMetric1[i].canshu = prodParam2;
                }
                else if (v.parameter[0] == '') {
                    _this.productMetric1[i].canshu = "" + '未选择参数';
                }
                else if (typeof v.parameter[0] == 'object') {
                    prodParam0 = _this.commfunc.transDateN(v.parameter[0]);
                    prodParam1 = _this.commfunc.transDateN(v.parameter[1]);
                    _this.productMetric1[i].canshu = "" + (prodParam0 + '  至  ' + prodParam1);
                }
                else {
                    prodParam0 = v.parameter[0];
                    prodParam1 = v.parameter[1];
                    _this.productMetric1[i].canshu = "" + (prodParam0 + '至' + prodParam1);
                }
                // this.creatCustExplCondBean.requestMap.custHoldProdAttrList.push({
                // 	prodCateId: v.label,//产品大类标识
                // 	subProdCateId: v.value[0].productId,// 产品小类标识
                // 	paramTypeId: v.target,//参数类型标识
                // 	prodParmFrom: prodParam1,//产品参数值（上限）
                // 	prodParmTo: prodParam0//产品参数值（下限）
                // })
                if (prodParam0 == 'true' || prodParam0 == 'false') {
                    _this.creatCustExplCondBean.requestMap.custHoldProdAttrList.push({
                        prodCateId: v.label,
                        subProdCateId: v.value[0].productId,
                        paramTypeId: v.target,
                        prodParmFrom: prodParam0 //产品参数值（上限）
                        // prodParmTo: prodParam0//产品参数值（下限）
                    });
                }
                else {
                    _this.creatCustExplCondBean.requestMap.custHoldProdAttrList.push({
                        prodCateId: v.label,
                        subProdCateId: v.value[0].productId,
                        paramTypeId: v.target,
                        prodParmFrom: prodParam0 + '|' + prodParam1,
                    });
                }
            });
            this.chooseSelect();
            this.productMetric = this.productMetric1.slice(0, 10);
        }
        this.productMetricMethod();
        this.productTable();
    };
    GroupAdvancedSearchComponent.prototype.productMetricMethod = function () {
        var _this = this;
        if (this.productMetric1) {
            this.productMetric1.map(function (v) {
                _this.displayTarget.forEach(function (v1, i1) {
                    if (v.parent_node[0] !== undefined && (v.parent_node[0].label == v1.fieldTitle || (v.parent_node[0].parent !== undefined && v.parent_node[0].parent.label == v1.fieldTitle))) {
                        _this.displayTarget[i1].subList.push({ fieldTitle: v.label, fieldName: v.value });
                    }
                });
            });
        }
    };
    /**
     *  引用成熟模板（选择模板）模态框开始
     */
    //选择模板按钮
    GroupAdvancedSearchComponent.prototype.openTempletClick = function () {
        this.templetDisplay = !this.templetDisplay;
        // this.headerTitle = '选择客户模板';
    };
    //选择模板回调
    GroupAdvancedSearchComponent.prototype.matureTemplate = function (param) {
        this.templetDisplay = false;
        if (param) {
            this.exploreConditionTempId = param;
            //根据成熟模板页面传过来的模板id调模板详情接口
            this.tempDetail();
        }
    };
    /**
 *  引用成熟模板（选择模板）模态框结束
 */
    // 浏览器滚动条状态 - 滚动
    GroupAdvancedSearchComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
    };
    /**
     * 机构树模态框开始
     */
    // 主联系人机构
    GroupAdvancedSearchComponent.prototype.openOrgTreeClick = function () {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        document.body.style.overflow = 'hidden';
    };
    // 主联系人
    GroupAdvancedSearchComponent.prototype.openOrgTreeClick1 = function () {
        this.orgTreeDisplay2 = !this.orgTreeDisplay2;
        document.body.style.overflow = 'hidden';
    };
    // 机构树回调
    GroupAdvancedSearchComponent.prototype.treeCall = function (param) {
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
        var orgId = [], orgIds = '';
        this.orgTreeDisplay = false;
        this.treeOrgName = [];
        // param.forEach((v) => {
        this.treeOrgName.push(param.orgName);
        orgId.push(param.orgId);
        // this.orgId2.push({ ownerOrgId: v.orgId, orgLevel: v.operatingLevel })
        // orgId = v.orgId;
        // })
        // this.tree = this.treeOrgName.join(',')
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames = this.treeOrgName;
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = orgId;
        // this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames = this.tree;
        // this.creatOrgIdClick(this.ownerNames);
        this.queryUserInValue = param.orgId;
        document.body.style.overflow = 'auto';
    };
    GroupAdvancedSearchComponent.prototype.perInfor = function (param) {
        var _this = this;
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
        var orgId = [], orgIds = '';
        this.orgTreeDisplay2 = false;
        this.treeOrgName = [];
        param.forEach(function (v) {
            _this.treeOrgName.push(v.tellerName);
            orgId.push(v.tellerId);
            // 	orgId.push({ ownerOrgId: v.orgId, orgLevel: v.operatingLevel })
        });
        // this.assActorOrgNames = this.treeOrgName.join(',')
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerNames = this.treeOrgName;
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = orgId;
        document.body.style.overflow = 'auto';
    };
    GroupAdvancedSearchComponent.prototype.blurChange = function () {
        if (this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgNames == '') {
            this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        }
    };
    GroupAdvancedSearchComponent.prototype.blurChange1 = function () {
        if (this.creatCustExplCondBean.requestMap.qryScopeMap.ownerNames == '') {
            this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        }
    };
    /**----------------协储员机构----------------------------- */
    GroupAdvancedSearchComponent.prototype.openOrgTreeClick2 = function () {
        document.body.style.overflow = 'hidden';
        this.ActorOrgDisplay = !this.ActorOrgDisplay;
    };
    GroupAdvancedSearchComponent.prototype.openOrgTreeClick3 = function () {
        this.ActorOrgDisplay2 = !this.ActorOrgDisplay2;
        document.body.style.overflow = 'hidden';
    };
    // 机构树回调
    GroupAdvancedSearchComponent.prototype.treeCall2 = function (param) {
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
        var orgId = [], orgName = [];
        this.ActorOrgDisplay = false;
        orgName.push(param.orgName);
        orgId.push(param.orgId);
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgNames = orgName;
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = orgId;
        this.queryUserInValue2 = param.orgId;
        document.body.style.overflow = 'auto';
    };
    GroupAdvancedSearchComponent.prototype.perInfor2 = function (param) {
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.ownerOrgIds = [];
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
        var orgId = [], orgName = [];
        this.ActorOrgDisplay2 = false;
        param.forEach(function (v) {
            orgName.push(v.tellerName);
            orgId.push(v.tellerId);
        });
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorNames = orgName;
        this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = orgId;
        document.body.style.overflow = 'auto';
    };
    GroupAdvancedSearchComponent.prototype.blurChange2 = function () {
        if (this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgNames == '') {
            this.creatCustExplCondBean.requestMap.qryScopeMap.assActorOrgIds = [];
        }
    };
    GroupAdvancedSearchComponent.prototype.blurChange3 = function () {
        if (this.creatCustExplCondBean.requestMap.qryScopeMap.assActorNames == '') {
            this.creatCustExplCondBean.requestMap.qryScopeMap.assActorIds = [];
        }
    };
    /**----------------协储员机构----------------------------- */
    /**
     * 机构树模态框结束
     */
    /**
     * *  打开探索条件、选择成熟模板详情回显开始
    */
    //1.（探索条件的详情回显）确定按钮
    //2.确定按钮(成熟模板的详情回显)
    GroupAdvancedSearchComponent.prototype.tempDetail = function () {
        var _this = this;
        this.creatCustExplCondBean = new _bean_group_advanced_search_bean__WEBPACK_IMPORTED_MODULE_1__["CreatCustExplCondBean"]();
        var param = { "exploreConditionTempId": this.exploreConditionTempId };
        this.httpService.queryScreenCustomerTemplateDetail(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.creatCustExplCondBean.expCondName = data.exploreConditionName;//模板名称
                _this.creatCustExplCondBean.statusId = data.statusId; //模板状态     
                if (data.requestMap) {
                    //4.客户基本属性筛选
                    if (data.requestMap.custInfo.creatTimeStart || data.requestMap.custInfo.creatTimeEnd) {
                        _this.creatStaDate = new Date(data.requestMap.custInfo.creatTimeStart); //开始时间
                        _this.creatEndDate = new Date(data.requestMap.custInfo.creatTimeEnd); //结束时间
                    }
                    _this.creatCustExplCondBean.requestMap.custInfo = data.requestMap.custInfo;
                    _this.radioBtn();
                    // 5-1个人客户属性筛选
                    if (data.requestMap.indiCustomer) {
                        if (data.requestMap.indiCustomer.birthDateStart || data.requestMap.indiCustomer.birthDateEnd) {
                            _this.birthDateFrom = new Date(data.requestMap.indiCustomer.birthDateStart); //开始时间
                            _this.birthDateTo = new Date(data.requestMap.indiCustomer.birthDateEnd); //结束时间
                        }
                        _this.creatCustExplCondBean.requestMap.indiCustomer = data.requestMap.indiCustomer;
                    }
                    // 5-2经营信息筛选
                    if (data.requestMap.businessInfo) {
                        _this.creatCustExplCondBean.requestMap.businessInfo = data.requestMap.businessInfo;
                    }
                    // 7.客户持有信息筛选
                    if (data.requestMap.custHoldProdLists) {
                        _this.creatCustExplCondBean.custHoldProdLists = data.requestMap.custHoldProdLists;
                    }
                    //8.客户产品属性筛选
                    if (data.requestMap.custHoldProdAttrList) {
                        data.requestMap.custHoldProdAttrList.forEach(function (items, i) {
                            items.forEach(function (item, ind) {
                                _this.custHoldProdAttrList = data.requestMap.custHoldProdAttrList;
                                if (JSON.stringify(item) != "{}") {
                                    _this.proChange(_this.custHoldProdAttrList, item.prodCateId, i, ind);
                                    _this.subProChange(_this.custHoldProdAttrList, item.subProdCateId, i, ind, item.prodCateId);
                                }
                            });
                        });
                    }
                    //9.客户标签属性筛选
                    if (data.requestMap.custLabelAttrList) {
                        _this.custLabelAttrList = data.requestMap.custLabelAttrList;
                        _this.custLabelAttrList.forEach(function (items, i) {
                            items.forEach(function (item, ind) {
                                if (item.labelName) {
                                    //将回显的值在进行一次模糊查询
                                    _this.cusTagName(i, ind, item.labelName);
                                    //设置超时操作，防止异步操作造成的干扰
                                    setTimeout(function () {
                                        if (_this.custLabelAttrList[i][ind]['cusTagNameOpt']) {
                                            _this.custLabelAttrList[i][ind]['cusTagNameOpt'].forEach(function (seleListItem) {
                                                //根据回显的客户标签名（labelName），去cusTagNameOpt数组里，去匹配对应数组进行ngModel绑定
                                                //（联想查询绑定的ngModel是个对象）
                                                if (item.labelName == seleListItem.labelName) {
                                                    if (_this.custLabelAttrList[i][ind]['selectNameOpt']) {
                                                        _this.custLabelAttrList[i][ind]['selectNameOpt'] = seleListItem;
                                                    }
                                                    else {
                                                        _this.custLabelAttrList[i][ind]['selectNameOpt'] = {};
                                                        _this.custLabelAttrList[i][ind]['selectNameOpt'] = seleListItem;
                                                    }
                                                }
                                            });
                                        }
                                    }, 200);
                                }
                            });
                        });
                    }
                    else {
                        _this.custLabelAttrList = [[]];
                    }
                    //10.客户群属性筛选
                    if (data.requestMap.custGroupAttrList) {
                        _this.custGroupAttrList = data.requestMap.custGroupAttrList;
                        _this.custGroupAttrList.forEach(function (items, i) {
                            items.forEach(function (item, ind) {
                                if (item.custGrouName) {
                                    //将回显的值在进行一次模糊查询
                                    _this.cusGroupName(i, ind, item.custGrouName);
                                    //设置超时操作，防止异步操作造成的干扰
                                    setTimeout(function () {
                                        if (_this.custGroupAttrList[i][ind]['cusGroupNameOpt']) {
                                            _this.custGroupAttrList[i][ind]['cusGroupNameOpt'].forEach(function (seleListItem) {
                                                //根据回显的客户群属性名（custGrouName），去cusGroupNameOpt数组里，去匹配对应数组进行ngModel绑定
                                                //注意：（联想查询绑定的ngModel是个对象）
                                                if (item.custGrouName == seleListItem.groupName) {
                                                    if (_this.custGroupAttrList[i][ind]['selectNameOpt']) {
                                                        _this.custGroupAttrList[i][ind]['selectNameOpt'] = seleListItem;
                                                    }
                                                    else {
                                                        _this.custGroupAttrList[i][ind]['selectNameOpt'] = {};
                                                        _this.custGroupAttrList[i][ind]['selectNameOpt'] = seleListItem;
                                                    }
                                                }
                                            });
                                        }
                                    }, 200);
                                }
                            });
                        });
                    }
                    else {
                        _this.custGroupAttrList = [[]];
                    }
                    //11.FTP利润属性筛选
                    if (data.requestMap.ftpAttrList) {
                        _this.ftpAttrList = data.requestMap.ftpAttrList;
                    }
                    else {
                        _this.ftpAttrList = [[]];
                    }
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '探索条件详情', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '探索条件详情', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '探索条件详情', detail: '调用服务失败！' });
        });
    };
    /**
   *  打开探索条件、选择成熟模板详情回显结束
   */
    GroupAdvancedSearchComponent.prototype.orgTreeShow = function () {
        this.orgTreePage = true;
    };
    //全选按钮
    GroupAdvancedSearchComponent.prototype.checkAllClick = function () {
        if (this.custExplTable1) {
            for (var i = 0; i < this.custExplTable1.length; i++) {
                if (this.checkAll == true) {
                    this.custExplTable1[i].checkBox = true;
                    this.chooseData.push(this.custExplTable1[i]);
                    for (var j = 0; j < this.chooseData.length; j++) {
                        if (this.checkSave.indexOf(this.chooseData[j].CUST_ID + '|' + this.chooseData[j].CUST_NAME) == -1) {
                            this.checkSave.push(this.chooseData[j].CUST_ID + '|' + this.chooseData[j].CUST_NAME);
                        }
                    }
                }
                else {
                    for (var l = 0; l < this.checkSave.length; l++) {
                        if (this.checkSave[l].substring(0, 10) == this.custExplTable1[i].CUST_ID) {
                            for (var v = l; v < this.checkSave.length; v++) {
                                if (this.checkSave[v + 1]) {
                                    this.checkSave[v] = this.checkSave[v + 1];
                                }
                                else {
                                    this.checkSave[v] = '';
                                }
                            }
                            this.checkSave.length--;
                        }
                    }
                    this.chooseData = [];
                    this.custExplTable1[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    GroupAdvancedSearchComponent.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.custExplTable1.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        if (this.chooseData.length > 0) {
            console.log(this.chooseData);
            for (var j = 0; j < this.chooseData.length; j++) {
                if (this.checkSave.indexOf(this.chooseData[j].CUST_ID + '|' + this.chooseData[j].CUST_NAME) == -1) {
                    this.checkSave.push(this.chooseData[j].CUST_ID + '|' + this.chooseData[j].CUST_NAME);
                }
                else if (data.checkBox == false) {
                    console.log(data.checkBox);
                    for (var l = 0; l < this.checkSave.length; l++) {
                        if (this.checkSave[l].substring(0, 10) == data.CUST_ID) {
                            for (var v = l; v < this.checkSave.length; v++) {
                                if (this.checkSave[v + 1]) {
                                    this.checkSave[v] = this.checkSave[v + 1];
                                }
                                else {
                                    this.checkSave[v] = '';
                                }
                            }
                            this.checkSave.length--;
                        }
                    }
                }
            }
            console.log(this.checkSave);
        }
        else if (this.chooseData.length == 0) {
            for (var l = 0; l < this.checkSave.length; l++) {
                if (this.checkSave[l].substring(0, 10) == data.CUST_ID) {
                    for (var v = l; v < this.checkSave.length; v++) {
                        if (this.checkSave[v + 1]) {
                            this.checkSave[v] = this.checkSave[v + 1];
                        }
                        else {
                            this.checkSave[v] = '';
                        }
                    }
                    this.checkSave.length--;
                }
            }
            console.log(this.checkSave);
        }
    };
    GroupAdvancedSearchComponent.prototype.chooseSelect = function () {
        var _this = this;
        this.generalAttr = [];
        this.presonAttr = [];
        this.companyAttr = [];
        this.saveAttr = [];
        this.loansAttr = [];
        this.FTPAttr = [];
        this.baseAttr = [];
        this.acceptAttr = [];
        this.mattersAttr = [];
        this.creditAttr = [];
        this.pointAttr = [];
        this.onlineAttr = [];
        this.WX_Attr = [];
        this.phoneAttr = [];
        /*----------------------------客户名单列表 - 字段显示-------------------------*/
        this.custExplTable.forEach(function (v) {
            // 通用属性
            if (v.property === 'generalAttr') {
                _this.generalAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "generalAttr", value: v.value });
            }
            else if (v.property === 'presonAttr') {
                // 个人客户属性
                _this.presonAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "presonAttr", value: v.value });
            }
            else if (v.property === 'companyAttr') {
                // 企业客户属性
                _this.companyAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "companyAttr", value: v.value });
            }
            else if (v.property === 'saveAttr') {
                // 存款
                _this.saveAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "saveAttr", value: v.value });
            }
            else if (v.property === 'loansAttr') {
                // 贷款
                _this.loansAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "loansAttr", value: v.value });
            }
            else if (v.property === 'FTPAttr') {
                // FTP利润
                _this.FTPAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "FTPAttr", value: v.value });
            }
            else if (v.property === 'acceptAttr') {
                // 承兑
                _this.acceptAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "acceptAttr", value: v.value });
            }
            else if (v.property === 'mattersAttr') {
                // 理财
                _this.mattersAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "mattersAttr", value: v.value });
            }
            else if (v.property === 'creditAttr') {
                // 贷记卡
                _this.creditAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "creditAttr", value: v.value });
            }
            else if (v.property === 'pointAttr') {
                // 积分卡
                _this.pointAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "pointAttr", value: v.value });
            }
            else if (v.property === 'onlineAttr') {
                // 网上银行
                _this.onlineAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "onlineAttr", value: v.value });
            }
            else if (v.property === 'WX_Attr') {
                // 微信银行
                _this.WX_Attr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "WX_Attr", value: v.value });
            }
            else if (v.property === 'phoneAttr') {
                // 手机银行
                _this.phoneAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "phoneAttr", value: v.value });
            }
            else {
                _this.baseAttr.push({ label: v.label, isDisabled: v.isDisabled, isCheck: v.isCheck, property: "baseAttr", value: v.value });
            }
            _this.filterTemplate.forEach(function (v1, i) {
                if (v.flag == v1.flag) {
                    _this.filterTemplate[i].custName = v.value;
                }
            });
        });
        /*--------------------------------------------------------------------------*/
    };
    // 选择字段
    // 单选
    GroupAdvancedSearchComponent.prototype.chooseItem = function (data) {
        var _this = this;
        var all = true;
        this.custExplTable.forEach(function (item) {
            if (data.label == item.label) {
                item.isCheck = !item.isCheck;
            }
        });
        if (data.isCheck) {
            this.PersonCheck.push(data);
            this.custExplTable.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            this.PersonCheck.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.PersonCheck.splice(i, 1);
                    return;
                }
            });
            all = false;
        }
        this.PersonCheck.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.isAll = all;
        console.log(data);
    };
    // 全选
    GroupAdvancedSearchComponent.prototype.checkAll2 = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.PersonCheck = [];
        this.custExplTable.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue || item.isDisabled) {
                _this.PersonCheck.push(item);
            }
        });
        this.PersonCheck.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.chooseSelect();
    };
    GroupAdvancedSearchComponent.prototype.chooseParam = function () {
        this.chooseDisplay = !this.chooseDisplay;
    };
    // 产品属性 - 分页
    GroupAdvancedSearchComponent.prototype.productPaginate = function (e) {
        var length = 0, proArr = [], row, page;
        row = e.rows - 0;
        page = e.page;
        // // proArr = this.productMetric;
        length = this.productMetric1.length - 0;
        this.productMetric = this.productMetric1.slice(row * page, row * (e.page + 1));
    };
    // 查看结果 -分页
    GroupAdvancedSearchComponent.prototype.paginateExplo = function (e) {
        this.pageSize = e.rows;
        this.pageNum = e.page + 1;
        this.saveAndLook(3);
        this.save(2);
    };
    GroupAdvancedSearchComponent.prototype.save = function (item) {
        var _this = this;
        this.displayTarget.forEach(function (v, i) {
            _this.displayTarget[i].subList2 = [];
        });
        this.displayTarget = [];
        // this.chooseList(0);
        this.target();
        this.productMetricMethod();
        this.productTable();
        this.chooseDisplay = false;
        // this.addUserListShow();
        //用户列表展示登记
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var fieldChoosed = [];
        this.custExplTable.forEach(function (v) {
            if (v.isDisabled || v.isCheck) {
                fieldChoosed.push(v);
            }
        });
        // //console.log(fieldChoosed);
        var param = {
            listShowsIdType: '2',
            listShowsIdModule: '02',
            createOrg: orgId,
            createdByUserLogin: user,
            exploreConditionObject: JSON.stringify(fieldChoosed),
        };
        this.httpService.addUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.saveAndLook(2);
            }
        });
    };
    //名单导入
    GroupAdvancedSearchComponent.prototype.search = function () {
        var _this = this;
        //获取客户号和客户名称
        var arr = [];
        if (this.chooseData) {
            this.chooseData.forEach(function (element) {
                arr.push({
                    custNo: element.CUSTNO,
                    custName: element.CUST_NAME,
                });
            });
        }
        var param2 = {
            custList: arr,
        };
        //调用后台接口保存客户清单
        var ob = this.httpService.insertAdvancedSearchCustInfo(param2);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //接收返回fileId,并返回到策略界面
                _this.fileId2 = data.fileId;
                var param = {
                    sessionBean: _this.route.snapshot.params['sessionBean'],
                    type: _this.isAdvancedSearch,
                    fileId: _this.fileId2,
                };
                _this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-contact/policy-settings', param]);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //按钮权限
    GroupAdvancedSearchComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    GroupAdvancedSearchComponent.prototype.toPrecreditApply = function () {
        var _this = this;
        // 去预授信页面
        this.confirmationService.confirm({
            message: '确定进入预授信页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/precredit-apply', { groupId: _this.NewgroupId, groupName: _this.NewgroupName }]);
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.toAppraiserEvaluate = function () {
        var _this = this;
        // 链接到第三方评价
        this.confirmationService.confirm({
            message: '确定进入第三方评价页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate', { groupId: _this.NewgroupId, groupName: _this.NewgroupName }]);
            }
        });
    };
    GroupAdvancedSearchComponent.prototype.returnValue = function (event) {
        this.SendMessageDisplay = event.SendMessageDisplay;
        this.messageModelVal = event.returnData.messageTempleID;
    };
    //新建联系计划
    GroupAdvancedSearchComponent.prototype.newPlan = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.addUpHeader = '新建客户联系计划';
            this.display = true;
            this.addDisplay = true;
            var param_1 = [];
            this.chooseData.forEach(function (v) {
                param_1.push({ custNo: v.CUST_ID, custName: v.CUST_NAME });
            });
            var arr = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](param_1);
            this.inValue = arr;
        }
    };
    //新建联系计划-关闭模态框
    GroupAdvancedSearchComponent.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
    };
    //加入群组
    GroupAdvancedSearchComponent.prototype.joinGroup = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var arrData = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](this.chooseData), param_2 = [], param1 = void 0, a = void 0;
            arrData.forEach(function (v) {
                param_2.push({ custNo: v.CUST_ID, custName: v.CUST_NAME });
            });
            a = JSON.stringify(param_2);
            param1 = {
                info: a
            };
            this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param1]);
        }
    };
    //发送短信
    GroupAdvancedSearchComponent.prototype.sendMessage = function () {
        if (this.chooseData.length === 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    // 发送短信 回调
    GroupAdvancedSearchComponent.prototype.nodeDisplayCall = function (e) {
        console.log(e);
    };
    //处理
    GroupAdvancedSearchComponent.prototype.dealTask = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择一条记录' });
            return;
        }
        if (this.chooseData.length > 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '仅支持对单条记录进行新建联系记录！' });
            return;
        }
        this.addUpHeader = '新建联系记录';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    GroupAdvancedSearchComponent.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //客户名单下载
    GroupAdvancedSearchComponent.prototype.listLoad = function () {
        var _this = this;
        var dataAllInfo3 = [];
        for (var i = 0; i < this.PersonCheck.length; i++) {
            this.dataInfo.push(this.PersonCheck[i].label);
            dataAllInfo3.push(this.PersonCheck[i].value);
        }
        this.dataAllInfo.push(this.dataInfo);
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](this.chooseData);
        for (var i = 0; i < arrData.length; i++) {
            var dataAllInfo2 = [];
            for (var j = 0; j < dataAllInfo3.length; j++) {
                var value = dataAllInfo3[j];
                dataAllInfo2.push(arrData[i][value]);
            }
            this.dataAllInfo.push(dataAllInfo2);
        }
        var a = JSON.stringify(this.dataAllInfo);
        var param = {
            downloadFields: a,
            downloadSource: '01',
            sourceName: '客户高级搜索',
            operateName: this.userName,
        };
        var ob = this.httpService.fileApproveProcess(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "提交成功" });
                _this.router.navigate(['pages/tzb/custom/reminder-do/backlog-detail/my-history/all-web']);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    GroupAdvancedSearchComponent.prototype.refresh = function () {
        this.birthDateTo = null;
        this.showFlag = !this.showFlag;
    };
    GroupAdvancedSearchComponent.prototype.refreshCreatTime = function () {
        this.creatEndDate = null;
        this.showFlagCreatTime = !this.showFlagCreatTime;
    };
    // 下载调用
    GroupAdvancedSearchComponent.prototype.download = function () {
        if (this.custExplTable1 && this.custExplTable1.length > 0) {
            this.creatCustExplCondBean.explortFlag = "2";
            this.creatCustExplCondBean.postId = this.postId;
            this.creatCustExplCondBean.displayTarget = this.displayTarget;
            var this_id = this.extParam.postId;
            var flag = true;
            for (var _i = 0, _a = this.new_postId; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this_id == item.value) {
                    console.log('相同');
                    flag = false;
                    break;
                }
            }
            if (!flag) {
                this.downloadComplete();
            }
            else {
                var lcbl = {
                    lctybl: this.extParam.postId
                };
                this.outList = this.commfunc.query('XZZXLC', lcbl);
                if (!this.outList.erro) {
                    this.outVal = this.outList.waitSelUserList;
                    var chooseThis = this.outList.display;
                    var Header = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                    var a2 = Header.extParam.specifyNextOpers;
                    if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                        this.downloadPerson = true;
                    }
                    else {
                        this.downloadComplete();
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.outList.erro });
                }
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "没有用户！" });
        }
    };
    // 判断 下载名单调用审批人员 存在
    GroupAdvancedSearchComponent.prototype.outDisplayCall = function (e) {
        if (!e) {
            this.downloadPerson = false;
            // 调用下载名单接口下载
            this.downloadComplete();
        }
    };
    GroupAdvancedSearchComponent.prototype.displayTarget2 = function () {
        var _this = this;
        var dis2 = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](this.displayTarget);
        if (this.productMetric1 && this.productMetric1.length > 0) {
            // 1.更换产品的fiedName为产品的字段名
            this.infoList1.forEach(function (v, i) {
                dis2.forEach(function (v1, i1) {
                    if (v1.subList.length > 0) {
                        dis2[i1].subList.forEach(function (v2) {
                            if (v.productId == v2.fieldName) {
                                v2.fieldId = v2.fieldName;
                                v2.fieldName = v.value;
                            }
                        });
                    }
                });
            });
            // 2.判断是否存在subList？ 存入sbuList3：不做任何处理
            this.infoList1.forEach(function (v) {
                dis2.forEach(function (v1, i1) {
                    if (v1.subList.length > 0) {
                        // 直接将数组赋予一个变量时，改变变量里面的内容同时会改变原数组。因此添加了slice()/concat()方法,可以解决此问题.
                        dis2[i1].subList3 = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](v1.subList);
                    }
                });
            });
            // 3.查看结果的展示指标的isCheck = true？ 将对应产品的展示指标存入subList3对应的detail中： 不存，
            var product_Id_1;
            dis2.forEach(function (v, i) {
                if (v.subList3 && v.subList3.length > 0) {
                    v.subList3.forEach(function (data, index) {
                        data.detail = [];
                    });
                    _this.custExplTable.forEach(function (v1, i1) {
                        // 判断产品的类型(存款类 || 贷款类)，并且 产品的展示指标是否被勾选(isCheck)
                        if ((v1.property == 'saveAttr' || v1.property == 'loansAttr') && v1.isCheck) {
                            v.subList3.forEach(function (v3, i3) {
                                _this.infoList1.forEach(function (v2, i2) {
                                    // 找到存入subList3中的产品和infoList的名称做判断？ 将当前产品的id暂存： 不存
                                    if (v3.fieldName == v2.value || product_Id_1) {
                                        product_Id_1 = v2.productId;
                                        // 如果 产品的id相同 && 和 custExplTable的展示指标的 分类相同(例如：isDisplay == 1，catelgory == 1)？
                                        //	将infoList中对应的产品展示指标存入到 subList3['对应的产品类'].detail 中
                                        if (product_Id_1 !== '' && product_Id_1 == v.subList3[i3].fieldId && v1.isDisplay == v2.catelgory) {
                                            v3.detail.push({ fieldTitle: v2.label, fieldName: v2.value });
                                        }
                                    }
                                });
                                product_Id_1 = '';
                            });
                        }
                    });
                }
            });
            // 4.对象去重
            dis2.forEach(function (v) {
                if (v.subList3 && v.subList3.length > 0) {
                    v.subList3.forEach(function (data, index) {
                        var sub_arr = _this.removeDulication(data.detail, 'fieldTitle', 'fieldName');
                        data.detail = sub_arr;
                    });
                }
            });
            this.disPlayT2 = dis2;
            console.log(dis2);
        }
    };
    // 对象去重（可根据属性去重）
    GroupAdvancedSearchComponent.prototype.removeDulication = function (param, p_na1, p_na2) {
        var result = [], hash = {}, _hash = {};
        for (var i = 0; i < param.length; i++) {
            var ele1 = param[i][p_na1];
            var ele2 = param[i][p_na2];
            if (!hash[ele1]) {
                if (!_hash[ele2]) {
                    result.push(param[i]);
                    _hash[ele2] = true;
                }
                hash[ele1] = true;
            }
        }
        return result;
    };
    // 下载名单
    GroupAdvancedSearchComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
    };
    GroupAdvancedSearchComponent.prototype.downloadComplete = function () {
        var _this = this;
        if (this.disPlayT2.length > 0 && this.productMetric.length > 0) {
            this.creatCustExplCondBean['displayTarget'] = this.disPlayT2;
            this.creatCustExplCondBean['groupId'] = this.groupId;
        }
        else {
            this.creatCustExplCondBean['displayTarget'] = this.displayTarget;
        }
        var requestMapCopy = JSON.parse(JSON.stringify(this.creatCustExplCondBean.requestMap));
        var requestMap = this.deleteNull(this.deleteNull(requestMapCopy)); //去null
        var param = {
            explortFlag: this.creatCustExplCondBean.explortFlag,
            postId: this.creatCustExplCondBean.postId,
            displayTarget: this.creatCustExplCondBean.displayTarget,
            requestType: this.creatCustExplCondBean.requestType,
            userName: this.creatCustExplCondBean.userName,
            orgName: this.creatCustExplCondBean.orgName,
            expCondName: this.creatCustExplCondBean.expCondName,
            statusId: this.creatCustExplCondBean.statusId,
            marketFlag: this.creatCustExplCondBean.marketFlag,
            expCondId: this.creatCustExplCondBean.expCondId,
            modelScale: this.creatCustExplCondBean.modelScale,
            custHoldProdLists: this.creatCustExplCondBean.custHoldProdLists,
            requestMap: requestMap
        };
        this.httpService.publicCustomerServiceExportFile(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '下载提示', detail: "提交成功！" });
                _this.router.navigate(['pages/tzb/custom/downloadCenter/downCenter']);
                _this.downloadTrue = true;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '下载提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '下载提示', detail: "调用服务失败！" });
            _this.downloadTrue = false;
        });
    };
    //生成交叉销售清单
    GroupAdvancedSearchComponent.prototype.generatList = function () {
        var _this = this;
        this.checkSave2 = '';
        for (var i = 0; i < this.checkSave.length; i++) {
            if (this.checkSave[i]) {
                this.checkSave2 += ',' + this.checkSave[i];
            }
        }
        this.checkSave2 = this.checkSave2.substring(1);
        console.log(this.checkSave2);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var expCondName;
        var requestMapCopy = JSON.parse(JSON.stringify(this.creatCustExplCondBean.requestMap));
        var requestMap = this.deleteNull(this.deleteNull(requestMapCopy)); //去null
        this.creatCustExplCondBean.expCondName = '交叉销售';
        this.creatCustExplCondBean.requestType = '2';
        this.creatCustExplCondBean.statusId = "3";
        var param = {
            explortFlag: this.creatCustExplCondBean.explortFlag,
            postId: this.creatCustExplCondBean.postId,
            displayTarget: this.creatCustExplCondBean.displayTarget,
            requestType: this.creatCustExplCondBean.requestType,
            userName: this.creatCustExplCondBean.userName,
            orgName: this.creatCustExplCondBean.orgName,
            expCondName: this.creatCustExplCondBean.expCondName,
            statusId: this.creatCustExplCondBean.statusId,
            marketFlag: this.creatCustExplCondBean.marketFlag,
            expCondId: this.creatCustExplCondBean.expCondId,
            modelScale: this.creatCustExplCondBean.modelScale,
            custHoldProdLists: this.creatCustExplCondBean.custHoldProdLists,
            requestMap: requestMap
        };
        this.httpService.createExploreCondition(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var params = void 0;
                if (_this.checkSave2 == '') {
                    params = {
                        custNum: _this.totalNum,
                        dataSource: '03',
                        sourceExp: data.expCondId,
                        sourceExpExt: _this.NewgroupId,
                        createType: '1',
                        createdUserId: commonHeader.userId,
                        createdUserName: _this.creatCustExplCondBean.userName,
                        createdOrgId: commonHeader.orgId,
                        createdOrgName: _this.creatCustExplCondBean.orgName,
                    };
                }
                else {
                    params = {
                        custNum: _this.totalNum,
                        dataSource: '03',
                        sourceExp: _this.checkSave2,
                        sourceExpExt: _this.NewgroupId,
                        createType: '0',
                        createdUserId: commonHeader.userId,
                        createdUserName: _this.creatCustExplCondBean.userName,
                        createdOrgId: commonHeader.orgId,
                        createdOrgName: _this.creatCustExplCondBean.orgName,
                    };
                }
                _this.httpService.createBusiBatchInfo(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // batch_id
                        _this.commfunc.setSessionDataCH('marketingCampaigntType', '12');
                        var parames = {
                            expCondNum: '12',
                            batchId: data.batchId,
                            secBatchId: data.secBatchId,
                            dataSource: '03',
                        };
                        _this.router.navigate(['pages/tzb/custom/marketing/marketing-activite/create-marketing-activite/basic-element', parames]);
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '信息创建成功', detail: data.returnCode.message });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '信息创建失败', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '信息创建失败', detail: '调用服务失败！' });
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '保存模板成功', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '保存模板失败', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '保存模板失败', detail: '调用服务失败！' });
        });
    };
    // 数据字段权限
    GroupAdvancedSearchComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
    };
    /*  各种类型的码值转换                      开始
    **
    **	客户类型 CUST_TYPE、 客户属性 CUST_ATTR、涉农属性 IS_AGRICULTURE、证件类型 IDCARDTYPE、性别SEXS、
    **	户口性质 RESIDTYPE、婚姻状况 MARITALSTATUS、所属行业 INDUSTRY、中小型企业类型 ENT_TYPE
    **
    */
    GroupAdvancedSearchComponent.prototype.codeValueChange = function (i) {
        var _this = this;
        // 客户类型
        if (this.custExplTable1[i].CUST_TYPE == 2) {
            this.custExplTable1[i].CUST_TYPE = '企业客户';
        }
        else if (this.custExplTable1[i].CUST_TYPE == 1) {
            this.custExplTable1[i].CUST_TYPE = '个人客户';
        }
        // 客户属性
        if (this.custAttrOpt && this.custAttrOpt.length > 0) {
            this.custAttrOpt.map(function (v) {
                if (_this.custExplTable1[i].CUST_ATTR == v.value) {
                    _this.custExplTable1[i].CUST_ATTR = v.label;
                    return;
                }
            });
        }
        // 涉农属性
        if (this.agricuOpt && this.agricuOpt.length > 0) {
            this.agricuOpt.map(function (v) {
                if (_this.custExplTable1[i].IS_AGRICULTURE == v.value) {
                    _this.custExplTable1[i].IS_AGRICULTURE = v.label;
                    return;
                }
            });
        }
        // 证件类型
        if (this.iDCardOpt3 && this.iDCardOpt3.length > 0) {
            this.iDCardOpt3.map(function (v) {
                if (_this.custExplTable1[i].IDCARDTYPE == v.value) {
                    _this.custExplTable1[i].IDCARDTYPE = v.label;
                    return;
                }
            });
        }
        // 性别
        if (this.sexOpt && this.sexOpt.length > 0) {
            this.sexOpt.map(function (v) {
                if (_this.custExplTable1[i].SEXS == v.value) {
                    _this.custExplTable1[i].SEXS = v.label;
                    return;
                }
            });
        }
        // 户口性质
        if (this.houseRegOpt && this.houseRegOpt.length > 0) {
            this.houseRegOpt.map(function (v) {
                if (_this.custExplTable1[i].RESIDTYPE == v.value) {
                    _this.custExplTable1[i].RESIDTYPE = v.label;
                    return;
                }
            });
        }
        // 婚姻状况
        if (this.marryOpt && this.marryOpt.length > 0) {
            this.marryOpt.map(function (v) {
                if (_this.custExplTable1[i].MARITALSTATUS == v.value) {
                    _this.custExplTable1[i].MARITALSTATUS = v.label;
                    return;
                }
            });
        }
        // 所属行业
        if (this.professOpt && this.professOpt.length > 0) {
            this.professOpt.map(function (v) {
                if (_this.custExplTable1[i].INDUSTRY == v.value) {
                    _this.custExplTable1[i].INDUSTRY = v.label;
                    return;
                }
            });
        }
        // 中小型企业类型
        if (this.enterTypeOPt && this.enterTypeOPt.length > 0) {
            this.enterTypeOPt.map(function (v) {
                if (_this.custExplTable1[i].ENT_TYPE == v.value) {
                    _this.custExplTable1[i].ENT_TYPE = v.label;
                    return;
                }
            });
        }
    };
    /****************************************转换结束********************************************/
    // 码值使用方法
    GroupAdvancedSearchComponent.prototype.gundam_codeValue = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //开始日期
    GroupAdvancedSearchComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.birthDateFrom && this.birthDateTo) {
            if (this.birthDateFrom > this.birthDateTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.birthDateFrom = null;
                });
            }
        }
    };
    //结束日期
    GroupAdvancedSearchComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.birthDateFrom && this.birthDateTo) {
            if (this.birthDateFrom > this.birthDateTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.birthDateTo = null;
                });
            }
        }
    };
    //手动输入日期时，失去焦点时进行判断
    GroupAdvancedSearchComponent.prototype.onchange1 = function () {
        this.showDataStart();
    };
    GroupAdvancedSearchComponent.prototype.onchange2 = function () {
        this.showDataEnd();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupAdvancedSearchComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__["OnlyYearMonthSelectComponent"]),
        __metadata("design:type", app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__["OnlyYearMonthSelectComponent"])
    ], GroupAdvancedSearchComponent.prototype, "child", void 0);
    GroupAdvancedSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-advanced-search',
            template: __webpack_require__(/*! ./group-advanced-search.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.html"),
            styles: [__webpack_require__(/*! ./group-advanced-search.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-advanced-search/group-advanced-search.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], GroupAdvancedSearchComponent);
    return GroupAdvancedSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~custom-group-view-custom-group-view-module~custom-group-view-group-advanced-search-group-adv~cc5e582a.js.map