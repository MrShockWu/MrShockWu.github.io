(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-custom-group-create-custom-group-module~custom-flow-custom-module~custom-group-view-c~43462971"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean.ts ***!
  \***********************************************************************************/
/*! exports provided: GroupOwnerInfoBean, asList, lnList, groupList1, CustGroupBean, groupList, CustGroupInfoBean, contactList, introducerList, mentorList, appraisalList, ZoneInfoBean, zoneList, CustGroupListBean, custList, custMap, GroupMarketPlanBean, planList, GroupMarketPlanInfoBean, linkmanList, bankList, activityList, GroupRateInfoBean, GroupEvalInfoBean, evalList, GroupGradeInfoBean, GroupAdminInfoBean, roleList, GroupInfoBean, GroupRecProductInfoBean, groupProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupOwnerInfoBean", function() { return GroupOwnerInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asList", function() { return asList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lnList", function() { return lnList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupList1", function() { return groupList1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupBean", function() { return CustGroupBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupList", function() { return groupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupInfoBean", function() { return CustGroupInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactList", function() { return contactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introducerList", function() { return introducerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorList", function() { return mentorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appraisalList", function() { return appraisalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneInfoBean", function() { return ZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupListBean", function() { return CustGroupListBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custList", function() { return custList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custMap", function() { return custMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMarketPlanBean", function() { return GroupMarketPlanBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planList", function() { return planList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMarketPlanInfoBean", function() { return GroupMarketPlanInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkmanList", function() { return linkmanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankList", function() { return bankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityList", function() { return activityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRateInfoBean", function() { return GroupRateInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupEvalInfoBean", function() { return GroupEvalInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalList", function() { return evalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupGradeInfoBean", function() { return GroupGradeInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdminInfoBean", function() { return GroupAdminInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleList", function() { return roleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoBean", function() { return GroupInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRecProductInfoBean", function() { return GroupRecProductInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupProductList", function() { return groupProductList; });
var GroupOwnerInfoBean = /** @class */ (function () {
    function GroupOwnerInfoBean() {
        // 我的客户群信息
        this.ownerId = ''; //群主ID
        this.groupType = ''; //分组类型
        this.mainGroupNum = 0; //主管群个数
        this.subGroupNum = 0; //辅管群个数
        this.mainFamilyNum = 0; //主管群户数
        this.subFamilyNum = 0; //辅管群户数
        this.mainCustNum = 0; //主管群客户数
        this.subCustNum = 0; //辅管群客户数
        this.asBal = ''; //存款余额
        this.cksyrj = ''; //存款上月日均
        this.ckbyrj = ''; //存款本月日均
        this.ckbnrj = ''; //存款本年日均
        this.creditAmt = ''; //授信总额
        this.lnBal = ''; //贷款余额
        this.dksyrj = ''; //贷款上月日均
        this.dkbyrj = ''; //贷款本月日均
        this.dkbnrj = ''; //贷款本年日均
        this.lnCommonAmt = ''; //一般贷款金额
        this.lnCommonBal = ''; //一般贷款余额
        this.lnSmallAmt = ''; //小本贷款金额
        this.lnSmallBal = ''; //小本贷款余额
        this.zzksxAmt = ''; //自助卡授信金额
        this.zzksxRate = ''; //自助卡授信使用率
        this.zzxfsxAmt = ''; //自助类消费贷款授信金额
        this.zzxfsxBal = ''; //自助类消费贷款授信余额
        this.lnOtherBal = ''; //其他消费贷款余额
        this.creditPreBal = ''; //预授信金额
        this.creditBal = ''; //信用额度
        this.overdraftBal = ''; //透支额度
        this.integral = ''; //积分
        this.asListNum = ''; //存款分布数量
        this.asList = []; // 存款分布
        this.groupAmt = ''; //群存款余额
        this.lnListNum = 0; //贷款分布数量
        this.lnList = []; //贷款分布
        this.groupListNum = 0; //主管群列表数
        this.groupList = []; //主管群列表
        // 新增
        this.groupOwnerName = ''; //群主名
    }
    return GroupOwnerInfoBean;
}());

var asList = /** @class */ (function () {
    function asList() {
        this.groupId = ''; //群编号
        this.groupName = ''; //群名称
        this.groupAmt = ''; //群存款余额
    }
    return asList;
}());

var lnList = /** @class */ (function () {
    function lnList() {
        this.groupId = ''; //群编号
        this.groupName = ''; //群名称
        this.groupAmt = ''; //群存款余额
    }
    return lnList;
}());

var groupList1 = /** @class */ (function () {
    function groupList1() {
        this.groupId = ''; //群编号
        this.groupName = ''; //群名称
        this.groupAddr = ''; //群地址
        this.groupOwner = ''; //群主
        this.keyContacts = ''; //关键联系人
    }
    return groupList1;
}());

//以上2017.11.25更新 
var CustGroupBean = /** @class */ (function () {
    function CustGroupBean() {
        //
        // listType : any;
        //
        // 客户群
        // 删除申请新增
        this.dataMap = '';
        // groupId: string = '';
        this.applyType = '';
        // 新增
        this.taskCategoryId = ''; //业务种类编号
        // 旧版
        this.subGroupType = ''; //群子类型
        this.region = ''; //四级区划
        this.creator = ''; //群组创建人
        this.ownerName = ''; //分组所有者名称
        this.bgcFlag = ''; //后台中心标志
        this.description = ''; //备注（群描述）
        this.searchScope = ''; //查询范围
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.groupType = ''; //群类型
        this.address = ''; //群地址
        this.ownerId = ''; //分组所有者ID
        this.orgId = ''; //所属机构
        this.groupStatus = ''; //群组状态
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.totalNum = 0; //总条数
        this.contactList = []; //群联系人列表
        this.mentorList = []; //群指导师傅列表
        this.introducerList = []; //群介绍人列表
    }
    return CustGroupBean;
}());

var groupList = /** @class */ (function () {
    function groupList() {
        //群列表
        this.groupId = ''; //群号
        this.groupType = ''; //群类型
        this.groupName = ''; //群名称
        this.address = ''; //群地址
        this.ownerId = ''; //群主
        this.ownerName = ''; //分组所有者名称
        this.orgId = ''; //所属机构
        this.bgcFlag = ''; //后台中心标志
        this.description = ''; //备注（群描述）
        this.groupStatus = ''; //群组状态
        this.contactList = []; //群联系人列表
        this.introducerList = []; //群介绍人列表
        this.mentorList = []; //群指导师傅列表
    }
    return groupList;
}());

var CustGroupInfoBean = /** @class */ (function () {
    function CustGroupInfoBean() {
        this.groupStatus = ''; //群组状态
        //旧
        this.groupId = ''; //客户群号
        this.groupName = ''; //群名称
        this.groupType = ''; //群类型
        this.subGroupType = ''; //群子类型
        this.region = ''; //四级区划
        this.address = ''; //群地址
        this.creator = ''; //群组创建人
        this.ownerId = ''; //分组所有者ID
        this.ownerName = ''; //分组所有者名称
        this.orgId = ''; //所属机构
        this.contactList = []; //群联系人列表List(Map)
        this.introducerList = []; //群介绍人列表List(Map)
        this.mentorList = []; //群指导师傅列表List(Map)
        this.appraisalList = []; //群管理人列表List(Map)
        this.description = ''; //备注（群描述）
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
        this.bgcFlag = ''; //后台标志中心
    }
    return CustGroupInfoBean;
}());

//群联系人列表List(Map)
var contactList = /** @class */ (function () {
    function contactList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
        this.groupZone = ''; //客群区域  
    }
    return contactList;
}());

//群介绍人列表List(Map)
var introducerList = /** @class */ (function () {
    function introducerList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
    }
    return introducerList;
}());

//群指导师傅列表List(Map)
var mentorList = /** @class */ (function () {
    function mentorList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
    }
    return mentorList;
}());

//群管理人列表List(Map)
var appraisalList = /** @class */ (function () {
    function appraisalList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
    }
    return appraisalList;
}());

var ZoneInfoBean = /** @class */ (function () {
    function ZoneInfoBean() {
        // 四级区划信息查询
        this.parentZoneId = ''; //父级区划标识
        this.zoneList = []; //区划列表
    }
    return ZoneInfoBean;
}());

var zoneList = /** @class */ (function () {
    function zoneList() {
        this.zoneId = ''; //区域id
        this.zoneName = ''; //区域名
    }
    return zoneList;
}());

var CustGroupListBean = /** @class */ (function () {
    function CustGroupListBean() {
        // 批量导入多出
        this.filePath = ''; //文件路径
        this.fileName = ''; //文件名
        this.successNum = 0; //成功条数
        this.failNum = 0; //失败条数
        this.failReason = ''; //失败原因
        // 查询
        this.listType = ''; //名单类型
        this.custNum = ''; //客户数
        this.doorNum = ''; //户数    
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.totalNum = 0; //客户名单数
        this.custList = []; //客户名单列表
        this.custMap = {}; //客户名单列表2
        this.groupApplyFlag = ''; //标志
    }
    return CustGroupListBean;
}());

var custList = /** @class */ (function () {
    function custList() {
        this.doorNum = ''; //户序号
        this.custNo = ''; //客户号
        this.custName = ''; //客户名称
        this.relType = ''; //关联关系
        // relType :string='';
        this.relDesc = ''; //详细信息
        this.contacts = ''; //联系人
        this.idenType = ''; //证件类型
        this.idenNum = ''; //证件号码
        this.address = ''; //客户地址
        this.telNum = ''; //手机号码
        this.industry = ''; //所属行业
        this.description = ''; //备注
        this.xnkBz = ''; //兴农卡目标客户
        this.hzdbjjFlag = ''; //户主担保基金目标客户
        this.cdhykFlag = ''; //存贷合一卡目标客户
        this.syydFlag = ''; //商赢易贷目标客户
        this.xydFlag = ''; //薪易贷目标客户
        this.xjdFlag = ''; //薪金贷目标客户
        this.fydFlag = ''; //房易贷目标客户
        this.khjskhFlag = ''; //客户介绍客户目标客户
        this.qtywFlag = ''; //其他业务目标客户
        this.xxfFlag = ''; //薪消费目标客户
        this.ajdFlag = ''; //安居贷目标客户
        this.statusCode = ''; //状态码
    }
    return custList;
}());

var custMap = /** @class */ (function () {
    function custMap() {
        //客户名单列表2
        this.doorNum = ''; //户序号
        this.custNo = ''; //客户号
        this.custName = ''; //客户名称
        this.relType = ''; //关联关系
        // relType :string='';
        this.relDesc = ''; //详细信息
        this.contacts = ''; //联系人
        this.idenType = ''; //证件类型
        this.idenNum = ''; //证件号码
        this.address = ''; //客户地址
        this.telNum = ''; //手机号码
        this.industry = ''; //所属行业
        this.description = ''; //备注
        this.xnkBz = ''; //兴农卡目标客户
        this.hzdbjjFlag = ''; //户主担保基金目标客户
        this.cdhykFlag = ''; //存贷合一卡目标客户
        this.syydFlag = ''; //商赢易贷目标客户
        this.xydFlag = ''; //薪易贷目标客户
        this.xjdFlag = ''; //薪金贷目标客户
        this.fydFlag = ''; //房易贷目标客户
        this.khjskhFlag = ''; //客户介绍客户目标客户
        this.qtywFlag = ''; //其他业务目标客户
        this.xxfFlag = ''; //薪消费目标客户
        this.ajdFlag = ''; //安居贷目标客户
        this.statusCode = ''; //状态码
    }
    return custMap;
}());

var GroupMarketPlanBean = /** @class */ (function () {
    function GroupMarketPlanBean() {
        // 客户群营销方案
        // 新增
        this.statusId = ''; //状态
        this.creator = ''; //创建人
        this.planId = ''; //方案编号
        // 旧
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.marketPlanName = ''; //营销方案名
        this.state = ''; //方案状态string(1)
        this.startDate = ''; //开始时间date
        this.endDate = ''; //结束时间date
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.planList = []; //list(map)
    }
    return GroupMarketPlanBean;
}());

var planList = /** @class */ (function () {
    function planList() {
        // 新增
        this.planId = ''; //方案编号
        this.marketPlanName = ''; //营销方案名称
        this.statusId = ''; //方案状态
        this.fromDate = ''; //开始时间
        this.thruDate = ''; //结束时间
        // 旧
        this.serialNum = ''; //编号
        this.filePath = ''; //文件路径
        this.creator = ''; //创建人
        this.createDate = ''; //创建时间date
        this.statusCode = ''; //状态码string(1)
    }
    return planList;
}());

// 客户群营销方案详情
var GroupMarketPlanInfoBean = /** @class */ (function () {
    function GroupMarketPlanInfoBean() {
        // 客户群营销方案详情
        // 入参
        this.groupId = ''; //群号
        this.planId = ''; //方案编号..营销方案名
        this.statusId = ''; //状态
        // 出参新增
        this.groupName = ''; //群名称
        this.marketPlanName = ''; //营销方案名
        this.state = ''; //方案状态string(1)
        this.creator = ''; //创建人
        this.createDate = ''; //创建时间date
        this.groupType = ''; //群类型
        this.baseInfo = ''; //基本情况
        this.channelInfo = ''; //中间单位
        this.keymanInfo = ''; //关键人
        this.intentionInfo = ''; //管理关系及合作意向
        this.operationInfo = ''; //生产经营性客户细分
        this.unoperationInfo = ''; //非生产经营性客户细分
        this.needInfo = ''; //细分需求
        this.targetInfo = ''; //开发目标
        this.mainProdInfo = ''; //主打产品
        this.crossSaleInfo = ''; //交叉销售
        this.creditProdInfo = ''; //授信产品参考方案
        this.riskInfo = ''; //授信风险点及规避方式
        this.giftInfo = ''; //礼品标准
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

var GroupRateInfoBean = /** @class */ (function () {
    function GroupRateInfoBean() {
        // 客户群优惠利率
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.productCode = ''; //产品码
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.rateList = []; //优惠利率列表List(Map)
        this.productName = ''; //产品名称
        this.floatType = ''; //浮动类型
        this.interestRate = ''; //优惠利率
        this.planNum = ''; //计划授信户数
        this.planAmt = ''; //计划授信金额
        this.schemeDesc = ''; //方案描述
        this.filePath = ''; //文件路径
        this.createDate = ''; //创建日期date
        this.createrId = ''; //创建人ID
        this.createrName = ''; //创建人名称
        this.fromDate = ''; //开始日期date
        this.thruDate = ''; //结束日期date
        this.status = ''; //状态string(1)
    }
    return GroupRateInfoBean;
}());

var GroupEvalInfoBean = /** @class */ (function () {
    function GroupEvalInfoBean() {
        this.sysCreditEval = ''; //系统信用评价
        this.evalList = []; //第三方评价列表List（Map）
    }
    return GroupEvalInfoBean;
}());

var evalList = /** @class */ (function () {
    function evalList() {
        this.partyId = ''; //当事人标识/客户号
        this.partyName = ''; //当事人姓名
        this.sysCreditEval = ''; //系统信用评价,评价人客户号
        this.evalName = ''; //评价人姓名
        this.creditEval = ''; //信用评价
        this.creditEvalCause = ''; //信用评价原因
        this.badHabits = ''; //不良嗜好
        this.badHabitsCause = ''; //不良嗜好原因
        this.sourceOfIncome = ''; //收入来源
        this.incomeLevel = ''; //家庭年收入级别
        this.carFlag = ''; //车辆状况
        this.familyStableFlag = ''; //家庭关系是否稳定
        this.healthFlag = ''; //健康状况
        this.offerLines = ''; //建议额度
        this.loanOfficerAdvises = ''; //信贷员建议
        this.sysTargetCustFlag = ''; //系统是否目标授信客户String(1)
        this.targetCustFlag = ''; //是否目标授信客户 string(1)
        this.creditFlag = ''; //是否预授信 string(1)
        this.reason = ''; //修改原因
        this.remark = ''; //授信备注
        this.fromDate = ''; //开始日期Date
        this.thruDate = ''; //结束日期Date
    }
    return evalList;
}());

var GroupGradeInfoBean = /** @class */ (function () {
    function GroupGradeInfoBean() {
    }
    return GroupGradeInfoBean;
}());

// 客户群管理人员
var GroupAdminInfoBean = /** @class */ (function () {
    function GroupAdminInfoBean() {
        // 入参
        this.groupId = ''; //群号
        this.roleType = ''; //角色类型
        this.status = ''; //状态string(1)
        // 出参新增
        this.roleListNum = ''; //角色数量
        this.roleList = []; //管理人员菜单List(Map)
    }
    return GroupAdminInfoBean;
}());

var roleList = /** @class */ (function () {
    function roleList() {
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色名称
        this.fromDate = ''; //开始日期date
        this.thruDate = ''; //结束日期date
        this.status = ''; //状态
    }
    return roleList;
}());

var GroupInfoBean = /** @class */ (function () {
    function GroupInfoBean() {
    }
    return GroupInfoBean;
}());

var GroupRecProductInfoBean = /** @class */ (function () {
    function GroupRecProductInfoBean() {
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.groupProductList = []; //群产品列表
        this.statusCode = ''; //状态码
    }
    return GroupRecProductInfoBean;
}());

var groupProductList = /** @class */ (function () {
    function groupProductList() {
        this.productCode = ''; //产品码
        this.productName = ''; //产品名称
        this.createDate = ''; //创建日期
        this.createrId = ''; //创建人ID
        this.createrName = ''; //创建人名称
        this.fromDate = ''; //开始日期
        this.thruDate = ''; //结束日期
    }
    return groupProductList;
}());



/***/ })

}]);
//# sourceMappingURL=default~create-custom-group-create-custom-group-module~custom-flow-custom-module~custom-group-view-c~43462971.js.map