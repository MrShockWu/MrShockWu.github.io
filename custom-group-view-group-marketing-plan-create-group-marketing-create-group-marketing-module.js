(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-view-group-marketing-plan-create-group-marketing-create-group-marketing-module"],{

/***/ "./src/app/@uisftech/common/constant/config.js":
/*!*****************************************************!*\
  !*** ./src/app/@uisftech/common/constant/config.js ***!
  \*****************************************************/
/*! exports provided: webConfig, globalVariables, API, CALENDAR_CN, USERINFO, tableMessage, pageList, yearRangeSmall, yearRangeBig, Pager, paginatorUtils, FULL_DATE_FORMAT, SHORT_DATE_FORMAT, HORIZONTAL_LINE_SHORT_DATE_FORMAT, FULL_HORIZONTAL_DATE_FORMAT, TIME_FORMAT, WZTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webConfig", function() { return webConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalVariables", function() { return globalVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_CN", function() { return CALENDAR_CN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERINFO", function() { return USERINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableMessage", function() { return tableMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageList", function() { return pageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRangeSmall", function() { return yearRangeSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRangeBig", function() { return yearRangeBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginatorUtils", function() { return paginatorUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_DATE_FORMAT", function() { return FULL_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORT_DATE_FORMAT", function() { return SHORT_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_LINE_SHORT_DATE_FORMAT", function() { return HORIZONTAL_LINE_SHORT_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_HORIZONTAL_DATE_FORMAT", function() { return FULL_HORIZONTAL_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WZTitle", function() { return WZTitle; });
var webConfig = {
    timeout: 60000,
    retryTimes: 0,
};
var globalVariables = {};
var API = {
    // IP:'http://localhost:4200/assets/demo/data/',
    //IP: 'http://159.1.164.210:8011/',//晓慧
    //IP:'http://159.1.164.222:8011/', //贺名
    //IP:'http://159.1.164.221:8011/', //刘瑾
    //IP:'http://159.1.164.127:8011/', //殷发明
    //IP: 'http://159.1.164.55:8011/',
    //IP:'http://159.1.164.125:8011/', //宋国兴
    //IP:'http://tongyimenhu.web.com:8011/',
    //httpDataType: 'post',
    // type: '',
    // IP:'http://222.190.125.58:8888/rbms/dist/index.html#/workspace/?OPRID=admin1',
    httpDataType: 'get',
    type: '.json',
    login: 'login',
    IP: 'http://222.190.125.58:8888/rbms/services/',
};
var CALENDAR_CN = {
    "firstDayOfWeek": 0,
    "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
    "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "today": '今天',
    "clear": '清空'
};
//用信息变量
var USERINFO = {};
//表格无数据显示的字段
var tableMessage = '没有相关数据显示！';
//表格每页显示条数
var pageList = [10, 20, 50, 200];
//日历可选年份
var yearRangeSmall = 1900;
var yearRangeBig = (new Date()).getFullYear() + 100;
var Pager = /** @class */ (function () {
    function Pager() {
        this.first = '0'; // Index of the first record
        this.rows = '10'; // Number of rows to display in new page
        this.page = '1'; // Index of the new page
        this.pageCount = '0'; // Total number of pages
        this.totalRecords = '0'; // Total number of records
        this.rowsPerPageOptions = [10, 20, 30];
        this.pageLinkSize = '3'; // Number of page links to display.
    }
    return Pager;
}());

;
// 分页公共参数
var paginatorUtils = {
    rowNum: '10',
    startRow: '1' // 第几页(或者索引第几条数据)
};
var FULL_DATE_FORMAT = 'yyyy/MM/dd hh:mm:ss';
var SHORT_DATE_FORMAT = 'yy/MM/dd';
var HORIZONTAL_LINE_SHORT_DATE_FORMAT = 'yyyy-MM-dd';
var FULL_HORIZONTAL_DATE_FORMAT = 'yyyy-MM-dd hh:mm:ss';
var TIME_FORMAT = 'hh:mm:ss';
var WZTitle = [
    { label: '我的待办', value: '/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page' },
    { label: '我的客户', value: '/pages/tzb/custom/custom-information/mine-custom/mine-custom-overview2' },
    { label: '高级搜索', value: '/pages/tzb/custom/custom-information/advanced-search/add-search' },
    { label: '存贷变动', value: '/pages/tzb/custom/custom-information/mine-custom/custom-Assets-liability' },
    { label: '积分查询', value: '/pages/tzb/custom/custom-information/mine-custom/integral-info-query/card-details-query' },
    { label: '模型超市', value: '/pages/tzb/custom/custom-information/mine-custom/cross-selling' },
    { label: '交叉销售清单', value: '/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list' },
    { label: '模型数据推送规则', value: '/pages/tzb/custom/custom-information/custom-model-data' },
    { label: '我的客群', value: '/pages/tzb/custom/custom-group/my-custom-group' },
    { label: '自选群汇总', value: '/pages/tzb/custom/custom-marketing/group' },
    { label: '存贷交易', value: '/pages/tzb/custom/loan-deposit-change' },
    { label: '业绩分析', value: '/pages/tzb/custom/performance-analysis/my-performance' },
    { label: '客户变动', value: '/pages/tzb/custom/custom-general' },
];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/addGroupMarketPlanInfo.bean.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/addGroupMarketPlanInfo.bean.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: GroupMarketPlanInfoBean, linkmanList, bankList, activityList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMarketPlanInfoBean", function() { return GroupMarketPlanInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkmanList", function() { return linkmanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankList", function() { return bankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityList", function() { return activityList; });
var GroupMarketPlanInfoBean = /** @class */ (function () {
    function GroupMarketPlanInfoBean() {
        // 客户群营销方案新增
        // 入参
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.planId = ''; //方案编号
        this.marketPlanName = ''; //营销方案名称
        this.creator = ''; //创建人
        this.createDate = ''; //创建日期
        this.groupType = ''; //群类型
        this.baseInfo = ''; //基本情况
        this.channelInfo = ''; //中间单位
        this.keymanInfo = ''; //关键人
        this.intentionInfo = ''; //管理关系及合作意向
        this.operationInfo = ''; //生产经营性客户细分
        this.unoperationInfo = ''; //非生产经营性客户细分
        this.operationInfoList = []; //生产经营性客户细分
        this.unoperationInfoList = []; //非生产经营性客户细分
        this.needInfo = ''; //细分需求
        this.targetInfo = ''; //开发目标
        this.mainProdInfo = ''; //主打产品
        this.crossSaleInfo = ''; //交叉销售
        this.creditProdInfo = ''; //授信产品参考方案
        this.riskInfo = ''; //授信风险点及规避方式
        this.giftInfo = ''; //礼品标准
        this.statusId = ''; //状态
        this.fromDate = ''; //开始日期
        this.thruDate = ''; //结束日期
        this.linkmanList = []; //联系人List
        this.bankList = []; //同业List
        this.activityList = []; //活动List
    }
    return GroupMarketPlanInfoBean;
}());

var linkmanList = /** @class */ (function () {
    function linkmanList() {
        //联系人List
        this.serialNum = ''; //序号
        this.areaName = ''; //区域名
        this.linkMan = ''; //联系人 
        this.ContactsItem1 = '';
        this.customItem1 = '';
    }
    return linkmanList;
}());

var bankList = /** @class */ (function () {
    function bankList() {
        //同业List
        this.serialNum = ''; //序号
        this.bankName = ''; //同业名称
        this.advantageDesc = ''; //优势描述 
        this.chanceDesc = ''; //机会描述    
    }
    return bankList;
}());

var activityList = /** @class */ (function () {
    function activityList() {
        //活动List
        this.serialNum = ''; //序号
        this.activityName = ''; //活动名称
        this.activityDesc = ''; //活动描述 
    }
    return activityList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/selectGroupAdminInfo.bean.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/selectGroupAdminInfo.bean.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: GroupAdminInfoBean, roleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdminInfoBean", function() { return GroupAdminInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleList", function() { return roleList; });
var GroupAdminInfoBean = /** @class */ (function () {
    function GroupAdminInfoBean() {
        // 客户群管理人员查询
        this.groupId = ''; //群号
        this.roleType = ''; //角色类型
        this.statusId = ''; //状态
        this.roleList = []; //管理人员菜单
    }
    return GroupAdminInfoBean;
}());

var roleList = /** @class */ (function () {
    function roleList() {
        // 管理人员菜单
        this.userId = ''; //角色ID
        this.userName = ''; //角色名称
        this.groupZone = ''; //客群区域
        this.statusId = ''; //状态
    }
    return roleList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 主体内容 -->\r\n<div class=\"ui-g-12 basis-group content\">\r\n    <!-- 基本情况 -->\r\n    <div class=\"ui-g-12 boxShadow\">\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 一级标题 -->\r\n            <header-title [Info]=\"title\"></header-title>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 二级标题 -->\r\n            <header-title [Info]=\"title1\"></header-title>\r\n        </div>\r\n        <div id=\"top\" class=\"ui-g-12\"></div>\r\n        <div class=\"ui-g-12\">\r\n            <!-- 制作人员 -->\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-3\">\r\n                    <label>制作人员：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-3 ui-g-offset-5\">\r\n                    <label>编制日期：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <!-- <p-calendar [(ngModel)]=\"createDate\" [readonly]=\"editFlag\"></p-calendar> -->\r\n                    <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 水平分割 0\r\n    <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n    </div> -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-3 \">\r\n                    <label appValidation>营销方案名：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input type=\"text\" class=\"marginTop\" [placeholder]=\"marketPlanNamePlace\" [(ngModel)]=\"groupMarketPlanInfoBean.marketPlanName\"\r\n                        pInputText [readonly]=\"editFlag\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- </div> -->\r\n\r\n        <!-- 水平分割 1-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 boxShadow\"> -->\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 基本情况 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12\">\r\n                    <label class=\"basicInfo\">基本情况</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 centerText\">\r\n                        <label>客户群类型</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9 centerText\">\r\n                        <div class=\"ui-g-6\">\r\n                            <p-radioButton name=\"groupname\" value=\"1\" (click)=\"basicSelect(1)\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                            <span>行业客户群</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <p-radioButton name=\"groupname\" value=\"2\" (click)=\"basicSelect(2)\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                            <span>非行业客户群</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <textarea cols=\"180\" rows=\"10\" [(ngModel)]=\"groupMarketPlanInfoBean.baseInfo\" [placeholder]=\"basicInfoPlace\" [readonly]=\"editFlag\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 水平分割 2-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <!-- 群联系人 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12\">\r\n                    <label class=\"basicInfo\">群联系人</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10 centerText\">\r\n                <div class=\"ui-g-12 centerText tab base-table\">\r\n                    <p-dataTable [value]=\"groupAdminInfoBean.roleList\" [emptyMessage]=\"tableMesg\">\r\n                        <p-column header=\"序号\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                {{i+1}}\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"groupZone\" header=\"客群区域\"></p-column>\r\n                        <p-column field=\"userId\" header=\"联系人工号\"></p-column>\r\n                        <p-column field=\"userName\" header=\"联系人姓名\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 3-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 rightText\">\r\n            <span (click)=\"addLinkmanArray()\" class=\"icoColor\">添加</span>\r\n        </div> -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12 \">\r\n                    <label class=\"basicInfo\">中间单位</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label for=\"\">中间单位</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"channelInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.channelInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label appValidation>关键人</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"keymanInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.keymanInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label for=\"\">管理关系及合作意向</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"intentionInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.intentionInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 4-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 客户细分 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12  \">\r\n                    <label class=\"basicoperationInfo\">客户细分</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2\">\r\n                        <label for=\"\" class=\"operationInfolabel\">生产经营性客户细分</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <!-- <textarea cols=\"100\" rows=\"3\" [placeholder]=\"operationInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.operationInfo\"\r\n                            [readonly]=\"editFlag\"></textarea> -->\r\n                        <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                            <table>\r\n                                <tr>\r\n                                    <th *ngFor=\"let itemL of dataList\" class=\"ead\">\r\n                                        {{itemL.subdibisionName}}\r\n                                    </th>\r\n                                </tr>\r\n                                <tr *ngFor=\"let itemH of dataList1;let i1 = index\">\r\n                                    <td class=\"ead\">{{itemH.subdibisionName}}</td>\r\n                                    <td *ngFor=\"let item of data;let i2 =index\">\r\n                                        <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [disabled]=\"editFlag\" [(ngModel)]=\"paramList[i2][i1].valueType\">\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2\">\r\n                        <label for=\"\" class=\"operationInfolabel\">非生产经营性客户细分</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <!-- <textarea cols=\"100\" rows=\"3\" [placeholder]=\"unoperationInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.unoperationInfo\"\r\n                            [readonly]=\"editFlag\"></textarea> -->\r\n                        <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                            <table>\r\n                                <tr>\r\n                                    <th *ngFor=\"let item1 of dataList2\" class=\"ead\">\r\n                                        {{item1.subdibisionName}}\r\n                                    </th>\r\n                                </tr>\r\n                                <tr *ngFor=\"let item2 of dataList3;let i11 = index\">\r\n                                    <td class=\"ead\">{{item2.subdibisionName}}</td>\r\n                                    <td *ngFor=\"let item of undata;let i22 =index\">\r\n                                        <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [(ngModel)]=\"unparamList[i22][i11].valueType\">\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label appValidation>细分需求</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"needInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.needInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 5-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 主要同业竞争 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12  \">\r\n                    <label class=\"basicInfo\" appValidation>主要同业竞争</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10 \">\r\n                <div class=\"ui-g-12 rightText\">\r\n                    <span (click)=\"addbankListArray()\" class=\"icoColor\">添加</span>\r\n                </div>\r\n                <div class=\"ui-g-12 centerText tab base-table\">\r\n                    <p-dataTable [value]=\"groupMarketPlanInfoBean.bankList\" [emptyMessage]=\"tableMesg\">\r\n                        <p-column field=\"name\" header=\"银行\" [style]=\"{'width':'20%'}\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [placeholder]=\"bankNamePlace\" [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].bankName\" [readonly]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"优势产品和服务\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [placeholder]=\"advantageDescPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].advantageDesc\"\r\n                                    [readonly]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"我行竞争机会\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <input type=\"text\" pInputText [placeholder]=\"chanceDescPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].chanceDesc\"\r\n                                    [readonly]=\"editFlag\">\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                <div class=\"table-button\">\r\n                                    <span (click)=\"delbankListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 6-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 开发目标 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12  \">\r\n                    <label class=\"basicInfo\" appValidation>开发目标</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10 centerText\">\r\n                <textarea cols=\"180\" rows=\"12\" [placeholder]=\"targetInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.targetInfo\" [readonly]=\"editFlag\"></textarea>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 7-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <!-- 获客产品方案 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12\">\r\n                    <label class=\"basicInfo\">获客产品方案</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label appValidation>主打产品</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"mainProdInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.mainProdInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label for=\"\">交叉销售</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"crossSaleInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.crossSaleInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label appValidation>授信产品参考方案</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"creditProdInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.creditProdInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label appValidation>授信风险点及规避方式</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"riskInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.riskInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 水平分割 8-->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n\r\n        <div class=\"ui-g-12  tab\">\r\n            <!-- 获客营销活动方案 -->\r\n            <div class=\"ui-g-2 basicUi\">\r\n                <div class=\"ui-g-12  \">\r\n                    <label class=\"basicInfo\" appValidation>获客营销活动方案</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-10 \">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3\">\r\n                        <label for=\"\">礼品标准</label>\r\n                    </div>\r\n                    <div class=\"ui-g-9\">\r\n                        <textarea cols=\"100\" rows=\"3\" [placeholder]=\"giftInfoPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.giftInfo\" [readonly]=\"editFlag\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 rightText\">\r\n                    <span (click)=\"addactivityListArray()\" class=\"icoColor\">添加</span>\r\n                </div>\r\n                <div class=\"ui-g-12 centerText textareaBorder base-table\">\r\n                    <p-dataTable [value]=\"groupMarketPlanInfoBean.activityList\" [emptyMessage]=\"tableMesg\">\r\n                        <p-column field=\"name\" header=\"活动名称\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <textarea cols=\"60\" rows=\"3\" [placeholder]=\"activityNamePlace\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityName\"\r\n                                    [readonly]=\"editFlag\"></textarea>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"活动描述\">\r\n                            <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                                <textarea cols=\"60\" rows=\"3\" [placeholder]=\"activityDescPlace\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityDesc\"\r\n                                    [readonly]=\"editFlag\"></textarea>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                <div class=\"table-button\">\r\n                                    <span (click)=\"delactivityListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 水平分割 9 -->\r\n        <div class=\"ui-g-12 paddingNone\">\r\n            <!-- <hr> -->\r\n        </div>\r\n        <div class=\"ui-g-12  heightSet\">\r\n            <!-- 制作人员 -->\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-3\">\r\n                    <label>创建人：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-3 ui-g-offset-5\">\r\n                    <label>创建日期：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <!-- <p-calendar [(ngModel)]=\"createDate\" [disabled]=\"editFlag\"></p-calendar> -->\r\n                    <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <!-- 按钮组 -->\r\n            <div class=\"ui-g-12 \" style=\"text-align:center;\">\r\n                <button class=\"searchBtn\" (click)=\"addGroupMarketPlanInfo2('2')\">保存</button>\r\n                <button class=\"searchBtn\" (click)=\"addGroupMarketPlanInfo()\">提交</button>\r\n                <button class=\"resetBtn\" (click)=\"returnGroupView()\">返回视图</button>\r\n                <!-- <a (click)=\"returnTop()\">\r\n            <button pButton label=\"返回顶部\"></button>\r\n        </a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 返回comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 审批新增处理权限 -->\r\n<p-dialog *ngIf=\"aaaa\" header=\"提交给\" [(visible)]=\"aaaa\" modal=\"true\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.module.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: CreateGroupMarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupMarketingModule", function() { return CreateGroupMarketingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _create_group_marketing_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-group-marketing.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.routing.ts");
/* harmony import */ var _create_group_marketing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-group-marketing */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//客户群组
var CreateGroupMarketingModule = /** @class */ (function () {
    function CreateGroupMarketingModule() {
    }
    CreateGroupMarketingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _create_group_marketing_routing__WEBPACK_IMPORTED_MODULE_4__["CreateGroupMarketingRouting"]
            ],
            declarations: [
                _create_group_marketing__WEBPACK_IMPORTED_MODULE_5__["CreateGroupMarketingComponent"]
            ],
            exports: [],
            providers: []
        })
    ], CreateGroupMarketingModule);
    return CreateGroupMarketingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.routing.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.routing.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: routes, CreateGroupMarketingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupMarketingRouting", function() { return CreateGroupMarketingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_group_marketing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-group-marketing */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '',
        component: _create_group_marketing__WEBPACK_IMPORTED_MODULE_1__["CreateGroupMarketingComponent"],
    }
];
var CreateGroupMarketingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basicUi {\n  font-size: 16px !important; }\n  @media screen and (min-width: 1571px) {\n    .basicUi {\n      letter-spacing: 5px !important; } }\n  .basicUi .basicInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 200px !important;\n    width: 200px !important;\n    line-height: 200px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #19b0c8 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n  @media screen and (max-width: 1571px) {\n      .basicUi .basicInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n  .basicUi .basicoperationInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 600px !important;\n    width: 200px !important;\n    line-height: 600px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #19b0c8 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n  @media screen and (max-width: 1571px) {\n      .basicUi .basicoperationInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n  .operationInfolabel label {\n  background-color: #19b0c8 !important;\n  display: inline-block !important;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  text-align: center;\n  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 2%; }\n  label {\n  font-weight: bold; }\n  .content {\n  overflow: auto; }\n  .content label {\n    background-color: #19b0c8 !important;\n    display: inline-block !important;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    color: #fff;\n    text-align: center;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    border-radius: 2%; }\n  .content .tab input {\n    border: none;\n    width: 100%; }\n  .content .tab input:focus {\n    border: 1px solid #aaaaaa; }\n  .content textarea {\n    width: 100%; }\n  .textareaBorder textarea {\n  border: 1px solid #e7eaec;\n  width: 100%; }\n  .textareaBorder textarea:focus {\n  border: 1px solid #aaaaaa; }\n  @media screen and (max-width: 1571px) {\n  * {\n    font-size: 12px !important; }\n    * span {\n      background-size: auto 100%; } }\n  .rightText {\n  text-align: right !important; }\n  .centerText {\n  text-align: center !important; }\n  .defaultText {\n  text-align: left !important; }\n  .paddingNone {\n  border-bottom: 1px solid #e7eaec;\n  padding: 0px !important; }\n  .borderShow {\n  border: 1px solid #ccc; }\n  .marginTop {\n  height: 40px; }\n  .heightSet {\n  height: 300px;\n  padding-top: 40px; }\n  .boxShadow {\n  width: 90%;\n  margin: 20px 5% 0 5%; }\n  .boxShadow:first-child {\n  margin-top: 0px; }\n  :host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n  table {\n  width: 100% !important;\n  height: 100px !important;\n  text-align: center;\n  table-layout: fixed; }\n  .ead {\n  background: #19b0c8; }\n  .operationInfoinput {\n  min-width: 100% !important; }\n  .searchBtn {\n  display: inline-block;\n  width: 75px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n  @media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n  .resetBtn {\n  background: white;\n  width: 76px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  color: #333;\n  margin-left: 15px;\n  outline: none; }\n  @media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtbWFya2V0aW5nLXBsYW4vY3JlYXRlLWdyb3VwLW1hcmtldGluZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXZpZXdcXGdyb3VwLW1hcmtldGluZy1wbGFuXFxjcmVhdGUtZ3JvdXAtbWFya2V0aW5nXFxjcmVhdGUtZ3JvdXAtbWFya2V0aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSwwQkFBd0IsRUFBQTtFQUh4QjtJQUZKO01BR1EsOEJBQTZCLEVBQUEsRUF5Q3BDO0VBNUNEO0lBUVEsZ0NBQStCO0lBQy9CLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1Qiw0QkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLG9DQUFvQztJQUNwQyxzQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7RUFDakI7TUFsQlI7UUFtQlksdUJBQXNCO1FBQ3RCLHNCQUFxQjtRQUNyQiw0QkFBMkI7UUFDM0IsMEJBQXlCLEVBQUEsRUFFaEM7RUF4Qkw7SUEyQlEsZ0NBQStCO0lBQy9CLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1Qiw0QkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLG9DQUFvQztJQUNwQyxzQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7RUFDakI7TUFyQ1I7UUFzQ1ksdUJBQXNCO1FBQ3RCLHNCQUFxQjtRQUNyQiw0QkFBMkI7UUFDM0IsMEJBQXlCLEVBQUEsRUFFaEM7RUFFTDtFQUdRLG9DQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVTtFQUNWLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsaUJBQWlCLEVBQUE7RUFHekI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGNBQWMsRUFBQTtFQURsQjtJQUlRLG9DQUFvQztJQUNwQyxnQ0FBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsaUJBQWlCLEVBQUE7RUFaekI7SUFnQlksWUFBWTtJQUNaLFdBQVcsRUFBQTtFQWpCdkI7SUFvQlkseUJBQXlCLEVBQUE7RUFwQnJDO0lBd0JRLFdBQVUsRUFBQTtFQUdsQjtFQUVRLHlCQUF5QjtFQUV6QixXQUFXLEVBQUE7RUFKbkI7RUFPUSx5QkFBeUIsRUFBQTtFQUk3QjtFQURKO0lBRVEsMEJBQXlCLEVBQUE7SUFGakM7TUFJWSwwQkFBeUIsRUFBQSxFQUM1QjtFQUdUO0VBRUksNEJBQTJCLEVBQUE7RUFHL0I7RUFFSSw2QkFBNEIsRUFBQTtFQUdoQztFQUVJLDJCQUEwQixFQUFBO0VBRzlCO0VBRUksZ0NBQWdDO0VBQ2hDLHVCQUFzQixFQUFBO0VBRzFCO0VBRUksc0JBQXNCLEVBQUE7RUFFMUI7RUFFSSxZQUFZLEVBQUE7RUFFaEI7RUFDSSxhQUFhO0VBQ2IsaUJBQWdCLEVBQUE7RUFFcEI7RUFFSSxVQUFTO0VBQ1Qsb0JBQW1CLEVBQUE7RUFFdkI7RUFDSSxlQUFjLEVBQUE7RUFNbEI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7RUFFM0I7RUFDSSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUV2QjtFQUNJLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7RUFDYjtJQVhKO01BWVEsZ0JBQWdCLEVBQUEsRUFFdkI7RUFDRDtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0VBQ2I7SUFWSjtNQVdRLGdCQUFnQixFQUFBLEVBRXZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtbWFya2V0aW5nLXBsYW4vY3JlYXRlLWdyb3VwLW1hcmtldGluZy9jcmVhdGUtZ3JvdXAtbWFya2V0aW5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWNVaSB7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU3MXB4KSB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6MTZweCFpbXBvcnRhbnQ7XHJcbiAgICAuYmFzaWNJbmZvIHtcclxuICAgICAgICAvLyDlt6ZsYWJlbFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhc2ljb3BlcmF0aW9uSW5mbyB7XHJcbiAgICAgICAgLy8g5bembGFiZWxcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2shaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU3MXB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ub3BlcmF0aW9uSW5mb2xhYmVse1xyXG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyJTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRhYiB7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbn1cclxuLnRleHRhcmVhQm9yZGVyIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlYWVjO1xyXG4gICAgICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgfVxyXG59XHJcbip7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6YXV0byAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmlnaHRUZXh0IHtcclxuICAgIC8vIOWPs+Wvuem9kFxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2VudGVyVGV4dCB7XHJcbiAgICAvLyDmsLTlubPlsYXkuK1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZWZhdWx0VGV4dCB7XHJcbiAgICAvLyDpu5jorqTlt6blr7npvZBcclxuICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZ05vbmUge1xyXG4gICAgLy8g5raI6ZmkcGFkZGluZ1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2VhZWM7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyU2hvdyB7XHJcbiAgICAvLyDmmL7npLrovrnmoYZcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLm1hcmdpblRvcCB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4uaGVpZ2h0U2V0IHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo0MHB4OyBcclxufVxyXG4uYm94U2hhZG93IHtcclxuICAgIC8vIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjoyMHB4IDUlIDAgNSU7XHJcbn1cclxuLmJveFNoYWRvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG4vLyAuY29udGVudCB7XHJcbi8vICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vIH1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuLmVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbn1cclxuLm9wZXJhdGlvbkluZm9pbnB1dHtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2hCdG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG4ucmVzZXRCdG57XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CreateGroupMarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupMarketingComponent", function() { return CreateGroupMarketingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_addGroupMarketPlanInfo_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/addGroupMarketPlanInfo.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/addGroupMarketPlanInfo.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config.js */ "./src/app/@uisftech/common/constant/config.js");
/* harmony import */ var _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/selectGroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/bean/selectGroupAdminInfo.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateGroupMarketingComponent = /** @class */ (function () {
    function CreateGroupMarketingComponent(httpService, routerInfo, router, confirmationService, commfunc, commonFunc, fb) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.commonFunc = commonFunc;
        this.fb = fb;
        // @Output() event: EventEmitter<any> = new EventEmitter<any>();
        // @Input() addData: any;
        // @Input() list: any;
        this.title1 = '营销方案新增页面';
        // 全局可编辑状态
        this.editFlag = false;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["tableMessage"];
        // bean
        this.groupMarketPlanInfoBean = new _bean_addGroupMarketPlanInfo_bean__WEBPACK_IMPORTED_MODULE_3__["GroupMarketPlanInfoBean"](); //客户群营销方案详情
        this.groupAdminInfoBean = new _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_8__["GroupAdminInfoBean"](); //客户群管理人员查询
        //审批权限 20180306
        this.aaaa = false;
        this.display = false;
        // 群联系人列表
        this.customGroupContacts = []; //联系人列表中间量
        // 中间单位
        this.channelInfoArr = []; //中间单位
        // 客户细分
        this.customDetailArr = []; //客户细分
        // 获客产品方案
        this.customProductArr = []; //获客产品方案
        //获客活动List
        this.customMarketPlanArr = []; //获客活动List
        // 礼品标准列表中间量
        this.activityNameArr = []; //礼品标准列表中间量
        // 控件
        this.msgs = [];
        this.selectedValue = '1'; // 群类型回显中间量
        this.createDate = ''; //创建时间
        this.ch = app_uisftech_common_constant_config_js__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        // placehoder
        this.marketPlanNamePlace = ''; //营销方案名称
        this.basicInfoPlace = ''; //基本情况
        this.channelInfoPlace = ''; //中间单位
        this.keymanInfoPlace = ''; //关键人
        this.intentionInfoPlace = ''; //管理关系及合作意向
        this.operationInfoPlace = ''; //生产经营性客户细分
        this.unoperationInfoPlace = ''; //非生产经营性客户细分
        this.needInfoPlace = ''; //细分需求  
        this.bankNamePlace = ''; //同业名称
        this.advantageDescPlace = ''; //优势描述
        this.chanceDescPlace = ''; //机会描述
        this.targetInfoPlace = ''; //开发目标
        this.mainProdInfoPlace = ''; //主打产品
        this.crossSaleInfoPlace = ''; //交叉销售
        this.creditProdInfoPlace = ''; //授信产品参考方案
        this.riskInfoPlace = ''; //授信风险点及规避方式
        this.giftInfoPlace = ''; //礼品标准
        this.activityNamePlace = ''; //活动名称
        this.activityDescPlace = ''; //活动描述
        // 传参
        this.groupId = '';
        this.groupName = '';
        this.tionInfo = ''; //客户细分
        this.message = { msg: [] };
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["tableMessage"]; //表格中无数据时显示的内容
        this.dataList = []; //生产行
        this.dataList1 = []; //生产列
        this.dataList2 = []; //非生产行
        this.dataList3 = []; //非生产列
        this.data = [];
        this.undata = [];
        this.paramList = new Array();
        this.unparamList = new Array();
        this.userform = fb.group({
            pointerType: [''],
            bussType: [''],
        });
    }
    CreateGroupMarketingComponent.prototype.ngOnInit = function () {
        this.preSet(); //初始化
        // this.linkmanListPre();//联系人预初始
        this.bankListPre(); //同业预初始
        this.activityListPre(); //活动预初始
        this.reAssignment(); //重赋值
        this.selectGroupAdminInfo(); //客户群管理人员查询   
        this.queryClick();
        this.queryClick2();
    };
    //列表查询
    CreateGroupMarketingComponent.prototype.queryClick = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.resultList ? data.resultList : [];
                _this.data = _this.dataList.slice(1);
                _this.queryClick1();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    CreateGroupMarketingComponent.prototype.queryClick1 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList1 = data.resultList ? data.resultList : [];
                _this.data.forEach(function (element, i1) {
                    _this.paramList[i1] = [];
                    _this.dataList1.forEach(function (element1, i) {
                        var obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '0' };
                        _this.paramList[i1][i] = obj;
                    });
                });
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList1 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    CreateGroupMarketingComponent.prototype.queryClick2 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList2 = data.resultList ? data.resultList : [];
                _this.undata = _this.dataList2.slice(1);
                _this.queryClick3();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList2 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    CreateGroupMarketingComponent.prototype.queryClick3 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList3 = data.resultList ? data.resultList : [];
                _this.undata.forEach(function (element2, i11) {
                    _this.unparamList[i11] = [];
                    _this.dataList3.forEach(function (element3, i0) {
                        var zxc = { dimensionId: element2.subdibisionId, indicatorsId: element3.subdibisionId, valueType: '', bussType: '1' };
                        _this.unparamList[i11][i0] = zxc;
                    });
                });
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList3 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    CreateGroupMarketingComponent.prototype.placeHoder = function () {
        // 基本情况
    };
    CreateGroupMarketingComponent.prototype.preSet = function () {
        document.getElementById('top').scrollIntoView(); //返回顶部  
        // 取当前日期
        var timer = new Date();
        this.createDate = this.commfunc.transDateN(timer);
        this.groupMarketPlanInfoBean.createDate = this.createDate;
        // 群类型内容回显
        this.selectedValue = '1'; //群类型内容回显
        // 默认提示
        this.marketPlanNamePlace = '营销方案名1';
        if (this.selectedValue == '1') {
            this.basicInfoPlace = '行业客户群：分析该行业在辖内的主要分布情况，概述该行业经营概况、经济活动特征、经营周期分布、客户数量、上年度产值/销售额、主要同业竞争情况及我行业务存量情况等。';
        }
        if (this.selectedValue == '2') {
            this.basicInfoPlace = '非行业客户群：概述目标客户群数量、经济活动特征、金融服务需求和分析，我行已开发客户情况等。';
        }
        this.channelInfoPlace = '列出可进行批量获客的第三方单位，如小区物业、市场管理单位。';
        this.keymanInfoPlace = '不同客群关键人不同，可参考《台州银行社区营销工作程序》关键人提示。';
        this.intentionInfoPlace = '概述中间单位管理决策机制，与我行目前关系及今后合作意向情况。供应链等紧密型中间单位需要详细描述。';
        this.operationInfoPlace = '生产经营性客户细分。一般选择资产负债率，总授信家数、销售融资比、银行信用情况、经营年限、毛利率对客户进行脸谱分析，区分“好客户”、“坏客户”。';
        this.unoperationInfoPlace = '非生产经营性客户细分标尺选择：一般选择工种性质、年龄、家庭结构、收入来源、房产、原始积累、爱好等，一般也应选择2-3个标尺进行客户细分。如##学校退休教师。';
        this.needInfoPlace = '逐一分析上述细分客户分别存在哪些金融服务需求？';
        this.bankNamePlace = '**银行';
        this.advantageDescPlace = '优势描述';
        this.chanceDescPlace = '我行机会描述';
        this.targetInfoPlace = '明确年度开发目标，一般以具体开发数量或客户群开发程度表示。';
        this.mainProdInfoPlace = '针对目标客户群细分需求，面对的同业竞争，我行应主推哪些产品？初步确定不同类型客户可提供的产品方案。';
        this.crossSaleInfoPlace = '主推优势产品的同时，如何针对现有客户开展交叉销售？';
        this.creditProdInfoPlace = '根据客户细分标尺，结合担保和贷款时间等因素，综合考虑风险、营销等各方面因素。初步确定每一个细分客户群体的授信业务额度范围或贷款利率范围。';
        this.riskInfoPlace = '授信客户主要风险点、可采取哪些风险控制措施等。';
        this.giftInfoPlace = '根据客户细分标尺，初步确定不同类型客户可提供的礼品标准等，如：老年住户/常驻老居民/外来务工人员/流动性本地人员等。';
        this.activityNamePlace = '活动方案名';
        this.activityDescPlace = '结合细客户分特征，明确采取哪些社区营销活动、人员安排、实施周期等。';
        this.tionInfo = '输入范围值。';
        // 初始化
        // 取session
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        var data = session.getItem('commonHeader');
        if (!data) {
            this.router.navigate(["/login"]);
            return;
        }
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.common = mesg;
        if (!mesg) {
        }
        var ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (ch['userName']) {
            this.groupMarketPlanInfoBean.creator = ch['userName']; //创建人      
        }
        // 链接传参
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId'];
        }
        if (this.routerInfo.snapshot.params['groupName']) {
            this.groupName = this.routerInfo.snapshot.params['groupName'];
            this.title = this.groupName;
        }
        // if (this.routerInfo.snapshot.params.groupOwnerflag) {
        //   this.groupOwnerflag = this.routerInfo.snapshot.params.groupOwnerflag;
        // }
        this.groupMarketPlanInfoBean.groupId = this.groupId;
        this.groupMarketPlanInfoBean.groupName = this.groupName;
        this.groupMarketPlanInfoBean.statusId = '3'; //待审核状态默认
        // 管理人员
        this.groupAdminInfoBean.groupId = this.groupId; //管理人员群号    
        this.groupAdminInfoBean.roleType = '1'; //群联系人类型
        this.groupAdminInfoBean.statusId = '1'; //正常状态
        // this.groupMarketPlanInfoBean.planId = this.routerInfo.snapshot.params['planId'];
        // this.groupMarketPlanInfoBean.statusId = this.routerInfo.snapshot.params['statusId'];    
    };
    CreateGroupMarketingComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 客户群管理人员查询
        this.httpService.selectGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupAdminInfoBean = data;
                _this.groupAdminInfoBean.roleList = data.roleList;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CreateGroupMarketingComponent.prototype.basicSelect = function (i) {
        // 基本情况选择placehoder回显
        if (i == 1) {
            this.basicInfoPlace = '行业客户群：分析该行业在辖内的主要分布情况，概述该行业经营概况、经济活动特征、经营周期分布、客户数量、上年度产值/销售额、主要同业竞争情况及我行业务存量情况等。';
        }
        if (i == 2) {
            this.basicInfoPlace = '非行业客户群：概述目标客户群数量、经济活动特征、金融服务需求和分析，我行已开发客户情况等。';
        }
    };
    // 初始
    CreateGroupMarketingComponent.prototype.bankListPre = function () {
        //同业预初始
        var tempArr = [
            {
                serialNum: '',
                bankName: '',
                advantageDesc: '',
                chanceDesc: '',
            }
        ];
        this.groupMarketPlanInfoBean.bankList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempArr);
    };
    CreateGroupMarketingComponent.prototype.activityListPre = function () {
        //活动预初始
        var tempArr = [
            {
                serialNum: '',
                activityName: '',
                activityDesc: '',
            }
        ];
        this.groupMarketPlanInfoBean.activityList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempArr);
    };
    CreateGroupMarketingComponent.prototype.addbankListArray = function () {
        //同业加行
        if (this.groupMarketPlanInfoBean.bankList) {
            // 同业
            for (var i in this.groupMarketPlanInfoBean.bankList) {
                if (this.groupMarketPlanInfoBean.bankList[i].bankName == '' || this.groupMarketPlanInfoBean.bankList[i].advantageDesc == '' || this.groupMarketPlanInfoBean.bankList[i].chanceDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '请逐条增添，前一条数据不能填空！' }];
                    return;
                }
            }
        }
        var tempArr1 = [];
        var tempArr2 = {};
        tempArr1 = this.groupMarketPlanInfoBean.bankList;
        // 序号未定
        for (var n in tempArr1) {
            tempArr2 = {
                serialNum: '',
                bankName: '',
                advantageDesc: '',
                chanceDesc: '',
            };
        }
        tempArr1.push(tempArr2);
        this.groupMarketPlanInfoBean.bankList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempArr1);
    };
    CreateGroupMarketingComponent.prototype.delbankListArray = function (i) {
        //同业减行
        this.groupMarketPlanInfoBean.bankList.splice(i, 1);
        var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.groupMarketPlanInfoBean.bankList);
        this.groupMarketPlanInfoBean.bankList = tmpArr;
    };
    CreateGroupMarketingComponent.prototype.addactivityListArray = function () {
        //活动List加行 
        if (this.groupMarketPlanInfoBean.activityList) {
            // 活动
            for (var i in this.groupMarketPlanInfoBean.activityList) {
                if (this.groupMarketPlanInfoBean.activityList[i].activityName == '' || this.groupMarketPlanInfoBean.activityList[i].activityDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '请逐条增添，前一条数据不能填空！' }];
                    return;
                }
            }
        }
        var tempArr1 = [];
        var tempArr2 = {};
        tempArr1 = this.groupMarketPlanInfoBean.activityList;
        // 序号未定
        for (var n in tempArr1) {
            tempArr2 = {
                serialNum: '',
                activityName: '',
                activityDesc: '',
            };
        }
        tempArr1.push(tempArr2);
        this.groupMarketPlanInfoBean.activityList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempArr1);
    };
    CreateGroupMarketingComponent.prototype.delactivityListArray = function (i) {
        //活动List减行
        this.groupMarketPlanInfoBean.activityList.splice(i, 1);
        var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.groupMarketPlanInfoBean.activityList);
        this.groupMarketPlanInfoBean.activityList = tmpArr;
    };
    CreateGroupMarketingComponent.prototype.reAssignment = function () {
        //重赋值
        if (this.groupMarketPlanInfoBean.linkmanList.length > 6) {
            return;
        }
        for (var i in this.groupMarketPlanInfoBean.linkmanList) {
            this.groupMarketPlanInfoBean.linkmanList[i] = {
                // 联系人重赋值,序号未定--2017.12.05
                serialNum: '',
                areaName: this.groupMarketPlanInfoBean.linkmanList[i].areaName,
                linkMan: this.groupMarketPlanInfoBean.linkmanList[i].linkMan,
                ContactsItem1: this.customGroupContacts[i].ContactsItem1,
                customItem1: this.customGroupContacts[i].customItem1,
            };
        }
    };
    CreateGroupMarketingComponent.prototype.transTheDate = function () {
        // 时间默认
        var timer1 = new Date(); //时间传后台    
        this.groupMarketPlanInfoBean.createDate = this.commfunc.transDate(timer1); //时间处理
    };
    CreateGroupMarketingComponent.prototype.submitMarketing = function (ind) {
        var _this = this;
        this.groupMarketPlanInfoBean.groupType = this.selectedValue; //群类型
        this.transTheDate(); //时间处理
        this.paramList.forEach(function (element, i1) {
            var obj = _this.paramList[i1];
            obj.forEach(function (i) {
                var str = { dimensionId: i.dimensionId, indicatorsId: i.indicatorsId, value: i.valueType, bussType: '0' };
                _this.groupMarketPlanInfoBean.operationInfoList.push(str);
            });
        });
        this.unparamList.forEach(function (c, e) {
            var qwe = _this.unparamList[e];
            qwe.forEach(function (w) {
                var asd = { dimensionId: w.dimensionId, indicatorsId: w.indicatorsId, value: w.valueType, bussType: '1' };
                _this.groupMarketPlanInfoBean.unoperationInfoList.push(asd);
            });
        });
        var params = this.groupMarketPlanInfoBean;
        params.creator = this.common.userId;
        if (ind) {
            params['statusId'] = ind;
        }
        this.httpService.addGroupMarketPlanInfo(params).subscribe(function (data) {
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            if (data.returnCode.code == 'success') {
                _this.aaaa = false;
                _this.display = false;
                _this.msgs = [];
                if (ind == 3) {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交审批成功' }];
                }
                else if (ind == 2) {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '保存成功' }];
                }
                window.setTimeout(function () {
                    _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupMarketPlanInfoBean.groupId, groupName: _this.groupMarketPlanInfoBean.groupName }]);
                }, 500);
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '提交失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
    };
    CreateGroupMarketingComponent.prototype.addGroupMarketPlanInfo = function () {
        var _this = this;
        //增加
        var tempFlag1 = true;
        tempFlag1 = this.isNull(); //非空校验
        if (!tempFlag1) {
            return;
        }
        // 新增
        this.confirmationService.confirm({
            message: '是否提交并返回客户群视图？',
            accept: function () {
                _this.waitSelUserList = _this.commfunc.query('QXXBGLC', {});
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    _this.aaaa = _this.waitSelUserList.display;
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a = commonHeader.extParam.specifyNextOpers;
                    if (_this.aaaa == true && (a == undefined || a == '' || a == null)) {
                        _this.aaaa = true;
                    }
                    else {
                        _this.submitMarketing();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
    };
    CreateGroupMarketingComponent.prototype.addGroupMarketPlanInfo2 = function (i) {
        //增加
        var tempFlag1 = true;
        if (i != '2') {
            tempFlag1 = this.isNull(); //非空校验
        }
        if (!tempFlag1) {
            return;
        }
        this.submitMarketing(i);
    };
    // 其他
    CreateGroupMarketingComponent.prototype.returnTop = function () {
        document.getElementById('top').scrollIntoView(); //返回顶部  
    };
    CreateGroupMarketingComponent.prototype.returnGroupView = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '是否返回客户群视图？',
            accept: function () {
                var groupId = _this.commfunc.compileStr(_this.groupMarketPlanInfoBean.groupId);
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: groupId, groupName: _this.groupMarketPlanInfoBean.groupName }]);
            }
        });
    };
    // 非空校验(必输项)
    CreateGroupMarketingComponent.prototype.isNull = function () {
        if (!this.groupMarketPlanInfoBean.marketPlanName || this.groupMarketPlanInfoBean.marketPlanName.search(/^\S+$/)) {
            // 营销方案名
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '营销方案名不能为空且不能有空格或回车！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.keymanInfo) {
            // 关键人
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '关键人不能为空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.needInfo) {
            // 细分需求
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '细分需求不能为空！' }];
            return false;
        }
        if (this.groupMarketPlanInfoBean.bankList) {
            // 同业
            if (this.groupMarketPlanInfoBean.bankList.length === 0) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '同业列表不能为空，请至少填写一条记录！' }];
                return false;
            }
            for (var i in this.groupMarketPlanInfoBean.bankList) {
                if (this.groupMarketPlanInfoBean.bankList[i].bankName == '' || this.groupMarketPlanInfoBean.bankList[i].advantageDesc == '' || this.groupMarketPlanInfoBean.bankList[i].chanceDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '同业列表不能填空，请填写完整！' }];
                    return false;
                }
            }
        }
        if (!this.groupMarketPlanInfoBean.targetInfo) {
            // 开发目标
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '开发目标不能为空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.mainProdInfo) {
            // 主打产品
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '主打产品不能为空！！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.creditProdInfo) {
            // 授信产品参考方案
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '授信产品参考方案不能为空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.riskInfo) {
            // 授信风险点及规避方式
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '授信风险点及规避方式不能为空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.giftInfo) {
            // 礼品标准
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '礼品标准不能为空！' }];
            return false;
        }
        if (this.groupMarketPlanInfoBean.activityList) {
            // 活动
            if (this.groupMarketPlanInfoBean.activityList.length == 0) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '活动列表不能为空，请至少填写一条记录！' }];
                return false;
            }
            for (var i in this.groupMarketPlanInfoBean.activityList) {
                if (this.groupMarketPlanInfoBean.activityList[i].activityName == '' || this.groupMarketPlanInfoBean.activityList[i].activityDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '活动列表不能填空，请填写完整！' }];
                    return false;
                }
            }
        }
        return true;
    };
    //审批新增 20180306
    CreateGroupMarketingComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = event;
    };
    CreateGroupMarketingComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submitMarketing();
    };
    CreateGroupMarketingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-group-marketing',
            template: __webpack_require__(/*! ./create-group-marketing.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.html"),
            styles: [__webpack_require__(/*! ./create-group-marketing.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_11__["Customtools"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])
    ], CreateGroupMarketingComponent);
    return CreateGroupMarketingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-group-view-group-marketing-plan-create-group-marketing-create-group-marketing-module.js.map