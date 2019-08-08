(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~approval-params-query-approval-params-query-module~process-instance-process-instance-module~~3cc876c3"],{

/***/ "./src/app/pages/tzb/workflow/http/workflow.http.constants.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/http/workflow.http.constants.ts ***!
  \********************************************************************/
/*! exports provided: API, APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/**
 *  其他模块 接口
 */
var API = {
    //李聪--临时接口
    checkCloseProcess: 'coreWorkFlow/processInstance/checkCloseProcess.htm',
    // 流程维护
    exportprocess: 'exportprocess',
    searchForDesigner: 'searchForDesigner',
    search: 'search',
    IProcessDirectoryServiceAdd: 'add',
    delete: 'delete',
    update: 'update',
    view: 'view',
    IProcessDefinitionServiceImportprocess: 'importprocess',
    IProcessDefinitionServiceExportprocess: 'exportprocess',
    IProcessDefinitionServiceSearch: 'search',
    IProcessDefinitionServiceAdd: 'add',
    IProcessDefinitionServiceUpdate: 'update',
    IProcessDefinitionServiceDeleteProcess: 'DeleteProcess',
    IWorkFlowServiceDeployProcess: 'WorkFlowServiceDeployProcess',
    // IWorkFlowServicegetProcessInsList:'WorkFlowServiceGetProcessInsList',//流程使用情况
    IProcessDefinitionServiceGetOtherVersionProcess: 'ProcessDefinitionServiceGetOtherVersionProcess',
    IDictConfServiceGetProcessDicts: 'DictConfServiceGetProcessDicts',
    IProcessDefinitionRoleServiceAdd: 'add',
    //流程变量管理
    IDictConfServiceAdd: 'add',
    list: 'list',
    IDictConfServiceGetData: 'getData',
    /**
     * 变量维护
     */
    getProcessDicts: "getProcessDicts",
    getDicListByType: "getDicListByType",
    // update:'update',//流程变量修改
    // delete:'delete',//流程变量删除
    updateProcessVariable: "updateProcessVariable",
    /**
     * 访问权限控制
     */
    IProcessDefinitionRoleServiceGetData: 'getData',
    // getProcessInsList: 'getProcessInsList',//流程实例列表查询
    queryApprovedListbyWfInsId: 'queryApprovedListbyWfInsId',
    // getProcessInsList: 'getProcessInsList',//历史流程查询 ？？？
    getProcessVariable: 'GetProcessVariable',
    deleteProcessVariable: 'deleteProcessVariable',
    addProcessVariable: 'addProcessVariable',
    /**
     * 流程实例管理
     */
    getProcessInsList: 'getProcessInsList',
    endProcessInstance: 'endProcessInstance',
    deleteProcessInstance: 'deleteProcessInstance',
    queryApprovedListbywfInsId: 'queryApprovedListbywfInsId',
    getDisyUrlBywfInsId: 'getDisyUrlBywfInsId',
    getWorkFlowIdbypiId: 'getWorkFlowIdbypiId',
    loadDesingByconfId: 'loadDesingByconfId',
    /**
     *
     * 历史流程查询
     */
    // getProcessInsList:'getProcessInsList',//查询与实例管理公用一个服务状态传递不一样
    /**
     * 已办任务查询
     */
    getNoEndTaskList: 'getNoEndTaskList',
    back: 'back',
    /**
     *
     * 待办任务查询
     */
    getCheckTaskList: 'getCheckTaskList',
    checkInTask: 'checkInTask',
    /**
     * 待检出任务查询
     */
    // getCheckTaskList:'getCheckTaskList',
    checkOutTask: 'checkOutTask',
    /**
     * 查看其他版本
     */
    getOtherVersionProcess: "getOtherVersionProcess",
    toEditVersion: "toEditVersion",
    /**
     * 发布
     */
    deployProcess: "deployProcess",
    IProcessDefinitionServiceImportprocess1: 'IProcessDefinitionServiceImportprocess1',
    searchProcessDirectoryTree: "/workflow/WfSystemStructureController/listSystemNode",
    queryProcessDefinitions: "/workflow/WorkFlowDefinitionController/selectWorkFlowList",
    addProcessDefinition: "/workflow/WorkFlowDefinitionController/addWorkFlow",
    editProcessDefinition: "/workflow/WorkFlowDefinitionController/updateWorkFlow",
    deleteProcessDefinition: "/workflow/WorkFlowDefinitionController/deleteWorkFlow",
    publishProcess: "/workflow/WorkFlowDefinitionController/deployWorkFlow",
    updateProcessDirectory: "/workflow/WfSystemStructureController/updateSystemNode",
    addProcessDirectory: "/workflow/WfSystemStructureController/addSystemNode",
    deleteProcessDirectory: "/workflow/WfSystemStructureController/deleteSystemNode",
    queryBussinessNodeList: "/workflow/WfNodePropertyController/listBussinessNode",
    updateBussinessNode: "/workflow/WfNodePropertyController/updateBussinessNode",
    addBussinessNode: "/workflow/WfNodePropertyController/addBussinessNode",
    deleteBussinessNode: "/workflow/WfNodePropertyController/deleteBussinessNode",
    viewBussinessNodePropExtends: "/workflow/WfModelPropExtendsController/listModelPropExtends",
    updateNodePropExtends: "/workflow/WfModelPropExtendsController/updateModelPropExtends",
    addNodePropExtends: "/workflow/WfModelPropExtendsController/addModelPropExtends",
    deleteNodePropExtends: "/workflow/WfModelPropExtendsController/deleteModelPropExtends",
    getPersonRule: "/workflow-app/app/rest/models/process/getPersonRule",
    msgTemList: "/workflow/WfTemplateController/listTemplate",
    updateMsgTem: "/workflow/WfTemplateController/updateTemplate",
    addMsgTem: "/workflow/WfTemplateController/addTemplate",
    deleteMsgTem: "/workflow/WfTemplateController/deletleTemplate",
    selectList: "/workflow/WfAcceditRecordController/selectList",
    updateAcceditRecord: "/workflow/WfAcceditRecordController/updateAcceditRecord",
    addAcceditRecord: "/workflow/WfAcceditRecordController/addAcceditRecord",
    deleteAcceditRecord: "/workflow/WfAcceditRecordController/deleteAcceditRecord",
    listEvtServiceDef: "/workflow/WfEvtServiceDefController/listEvtServiceDef",
    updateEvtServiceDef: "/workflow/WfEvtServiceDefController/updateEvtServiceDef",
    addEvtServiceDef: "/workflow/WfEvtServiceDefController/addEvtServiceDef",
    deleteEvtServiceDef: "/workflow/WfEvtServiceDefController/deleteEvtServiceDef",
    selectLists: "/workflow/WfExcepDataController/selectList",
    loadLibProject: "/urule-server/loadRepoTreeDir",
    queryRuleFileList: "/urule-server/queryRuleFileList",
    searchProcessInstance: "/workflow/WfProcessCoreController/queryProcInstList",
    queryApprovedList: "/workflow/WfProcessCoreController/queryTaskList",
    getCheckTaskLists: "/workflow/WfProcessCoreController/getUndoTaskList",
    loadLibProjects: "/urule-server/loadRepoTree",
    createProject: "/urule-server/createProject",
    createFolder: "/urule-server/createFolder",
    deleteProject: "/urule-server/deleteNode",
    createFile: "/urule-server/createFile",
    queryPreResultListByRuleId: "/urule-server/queryPreResultListByRuleId",
    createPreResult: "/urule-server/createPreResult",
    updatePreResult: "/urule-server/updatePreResult",
    deletePreResultById: "/urule-server/deletePreResultById",
    listByRulesetId: "/urule-server/rulesetInterface/listByRulesetId",
    addRuleSet: "/urule-server/rulesetInterface/add",
    updateRuleSet: "/urule-server/rulesetInterface/update",
    deleteRuleSet: "/urule-server/rulesetInterface/delete",
    queryApproveRecords: 'queryApproveRecords',
};
var APIService = {
    IDictConfService: 'IDictConfService',
    IProcessDirectoryService: 'IProcessDirectoryService',
    IProcessDefinitionService: 'IProcessDefinitionService',
    importProcess: 'importProcess',
    IWorkFlowService: 'IWorkFlowService',
    IProcessDefinitionRoleService: 'IProcessDefinitionRoleService',
};


/***/ }),

/***/ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/http/workflow.http.service.ts ***!
  \******************************************************************/
/*! exports provided: WorkflowHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowHttpService", function() { return WorkflowHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.http.constants */ "./src/app/pages/tzb/workflow/http/workflow.http.constants.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 其他
 * 模块下的接口服务
 */
var WorkflowHttpService = /** @class */ (function () {
    function WorkflowHttpService(httpService) {
        var _this = this;
        this.httpService = httpService;
        // 查询业务节点
        this.queryBussinessNode = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryBussinessNodeList, params); };
        // 更新修改的业务节点
        this.updateBussinessNode = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateBussinessNode, params); };
        // 保存新增的业务节点
        this.addBussinessNode = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addBussinessNode, params); };
        // 删除业务节点
        this.deleteBussinessNode = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteBussinessNode, params); };
        // 查询业务扩展属性列表
        this.queryBussinessNodePropExtends = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].viewBussinessNodePropExtends, params); };
        // 跟新修改的扩展属性
        this.updateNodePropExtends = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateNodePropExtends, params); };
        // 保存新增的扩展属性
        this.addNodePropExtends = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addNodePropExtends, params); };
        // 删除扩展属性
        this.deleteNodePropExtends = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteNodePropExtends, params); };
        // 获取选人规则
        this.getPersonRule = function (params) { return _this.httpService.get(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getPersonRule, params, null); };
        // 加载规则引擎树
        this.queryLoadLibProjectTree = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].loadLibProject, params); };
        // 查询规则列表根据左侧树的ID
        this.queryRuleFileList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryRuleFileList, params); };
        // 查询事件服务列表
        this.searchlistEvtList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].listEvtServiceDef, params); };
        // 更新修改的事件服务
        this.updateEvtService = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateEvtServiceDef, params); };
        // 保存新增的事件服务
        this.addEvtService = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addEvtServiceDef, params); };
        // 删除事件服务
        this.deleteEvtService = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteEvtServiceDef, params); };
        // 查询异常信息列表
        this.getExceptionList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].selectList, params); };
        // 查询消息模板
        this.searchMsgTemList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].msgTemList, params); };
        // 更新修改的消息模板
        this.updateMsgTem = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateMsgTem, params); };
        // 保存新增的消息模板
        this.addMsgTem = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addMsgTem, params); };
        // 删除消息模板
        this.deleteMsgTem = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteMsgTem, params); };
        this.searchProcessDirectory = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].searchProcessDirectoryTree, params); };
        // 查询流程定义
        this.queryProcessDefinitionsByStore = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryProcessDefinitions, params); };
        // 流程定义新增保存
        this.addProcessDefinition = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addProcessDefinition, params); };
        // 流程定义修改更新
        this.editProcessDefinition = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].editProcessDefinition, params); };
        // 流程定义删除
        this.deleteProcessDefinition = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteProcessDefinition, params); };
        // 部署
        this.publishProcess = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].publishProcess, params); };
        // 更新修改的系统节点
        this.updateProcessDirectory = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateProcessDirectory, params); };
        // 保存新增的系统节点
        this.addProcessDirectory = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addProcessDirectory, params); };
        // 删除系统节点
        this.deleteProcessDirectory = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteProcessDirectory, params); };
        // 跳转到流程设计器
        this.toActivitiPage = function (params) { return window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + "/workflow-app/editor/#" + "/editor/" + ("" + params)); };
        // 查询任务转授权
        this.queryAuthorizationList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].selectList, params); };
        // 增加任务转授权
        this.addAcceditRecord = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addAcceditRecord, params); };
        // 修改任务转授权
        this.updateAcceditRecord = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateAcceditRecord, params); };
        // 删除任务转授权
        this.deleteAcceditRecord = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteAcceditRecord, params); };
        // 查询代办任务列表
        this.getCheckTasks = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getCheckTaskLists, params); };
        // 获取审批记录列表
        this.queryApprovedList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryApprovedList, params); };
        // 查询审批实例
        this.searchProcessInstanceList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].searchProcessInstance, params); };
        // 跳转到流程设计进度
        this.toActivitiSchedule = function (params) { return window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + "/workflow-app/editor/#" + "/showProcesses" + ("" + params)); };
        // 查询规则引擎项目列表树
        this.queryLoadLibProjectsTree = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].loadLibProjects, params); };
        // 新增项目
        this.createProject = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createProject, params); };
        // 新增目录
        this.createFolder = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createFolder, params); };
        // 删除项目
        this.deleteProject = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteProject, params); };
        // 新增文件
        this.createFile = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createFile, params); };
        // 查询规则下的预期结果
        this.queryPreResultListByRuleId = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryPreResultListByRuleId, params); };
        // 新增预期结果
        this.createPreResult = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].createPreResult, params); };
        // 修改预期结果
        this.updatePreResult = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updatePreResult, params); };
        // 删除预期结果
        this.deletePreResultById = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deletePreResultById, params); };
        // 查询规则集列表
        this.listByRulesetId = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].listByRulesetId, params); };
        // 新增规则集
        this.addRuleSet = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addRuleSet, params); };
        // 更新规则集
        this.updateRuleSet = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateRuleSet, params); };
        // 删除规则集
        this.deleteRuleSet = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteRuleSet, params); };
    }
    //流程维护
    //查询流程列表
    WorkflowHttpService.prototype.IProcessDirectoryServiceSearch = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].search;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //查询
    WorkflowHttpService.prototype.IProcessDirectoryServiceSearchForDesigner = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].searchForDesigner;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //导出
    WorkflowHttpService.prototype.IProcessDirectoryServiceExportprocess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].exportprocess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //流程目录新增
    WorkflowHttpService.prototype.IProcessDirectoryServiceAdd = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDirectoryServiceAdd;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //流程目录修改
    WorkflowHttpService.prototype.IProcessDirectoryServiceUpdate = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].update;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //流程目录删除
    WorkflowHttpService.prototype.IProcessDirectoryServiceDelete = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].delete;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    // 流程目录查看
    WorkflowHttpService.prototype.IProcessDirectoryServiceView = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].view;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDirectoryService + '.htm', param);
    };
    //流程定义
    WorkflowHttpService.prototype.IProcessDefinitionServiceImportprocess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceImportprocess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    WorkflowHttpService.prototype.IProcessDefinitionServiceImportprocess1 = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceImportprocess1;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].importProcess;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].importProcess + '.htm', param1);
    };
    //导出
    WorkflowHttpService.prototype.IProcessDefinitionServiceExportprocess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceExportprocess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //流程定义查询
    WorkflowHttpService.prototype.IProcessDefinitionServiceSearch = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceSearch;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //流程定义新增
    WorkflowHttpService.prototype.IProcessDefinitionServiceAdd = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceAdd;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //流程定义修改
    WorkflowHttpService.prototype.IProcessDefinitionServiceUpdate = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceUpdate;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //流程定义删除
    WorkflowHttpService.prototype.IProcessDefinitionServiceDeleteProcess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceDeleteProcess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //发布流程
    WorkflowHttpService.prototype.IWorkFlowServiceDeployProcess = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IWorkFlowServiceDeployProcess, params);
    };
    //流程使用情况
    // IWorkFlowServiceGetProcessInsList(params) {
    //     params = this.httpService.handleParams(params);
    //     return this.httpService.post(TZB_HTTP_Work + API.IWorkFlowServiceGetProcessInsList, params)
    // }
    //查看其他版本
    WorkflowHttpService.prototype.IProcessDefinitionServiceGetOtherVersionProcess = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionServiceGetOtherVersionProcess, params);
    };
    //变量维护
    WorkflowHttpService.prototype.IDictConfServiceGetProcessDicts = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IDictConfServiceGetProcessDicts, params);
    };
    WorkflowHttpService.prototype.checkCloseProcess = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_COM"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].checkCloseProcess, params);
    };
    //流程变量管理
    //流程变量增加
    // IDictConfServiceAdd(params) {
    //     let pa = {};
    //     pa['comMESSAGE_CODE'] = API.IDictConfServiceAdd;
    //     pa['comSERVICE_CODE'] = APIService.IDictConfService;
    //     let param = this.httpService.handleParamsWOrk(params, pa);
    //     // let param=JSON.stringify(params);
    //     return this.httpService.post(TZB_HTTP_Work + APIService.IDictConfService + '.htm', param)
    // }
    //流程变量查询
    WorkflowHttpService.prototype.IDictConfServiceList = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].list;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', param);
    };
    //流程变量修改
    WorkflowHttpService.prototype.IDictConfServiceUpdate = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].update;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程变量查看
    WorkflowHttpService.prototype.IDictConfServiceGetData = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IDictConfServiceGetData;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程变量删除
    WorkflowHttpService.prototype.IDictConfServiceGetDelete = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].delete;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //2018.1.2
    //流程变量列表查询
    WorkflowHttpService.prototype.IDictConfServiceGetProcessVariable = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getProcessVariable;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程变量列表数据删除
    WorkflowHttpService.prototype.IDictConfServiceDeleteProcessVariable = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteProcessVariable;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程
    WorkflowHttpService.prototype.IDictConfServiceAddProcessVariable = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].addProcessVariable;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //20180103
    //访问权限查询
    WorkflowHttpService.prototype.IProcessDefinitionRoleServiceGetData = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionRoleServiceGetData;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionRoleService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionRoleService + '.htm', params);
    };
    //访问权限新增
    WorkflowHttpService.prototype.IProcessDefinitionRoleServiceAdd = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IProcessDefinitionRoleServiceAdd;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionRoleService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionRoleService + '.htm', params);
    };
    //流程实例管理
    //流程实例管理查询
    // IWorkFlowServicegetProcessInsList(params) {
    //     let pa = {};
    //     pa['comMESSAGE_CODE']=API.getProcessInsList;
    //     pa['comSERVICE_CODE']=APIService.IWorkFlowService;
    //     let param = this.httpService.handleParamsWOrk(params,pa);
    //     let param1 = JSON.parse(param)
    //     return this.httpService.post(TZB_HTTP_Work + APIService.IWorkFlowService + '.htm', param1)
    // }
    //流程实例历史查询
    WorkflowHttpService.prototype.IWorkFlowServicequeryApprovedListbyWfInsId = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryApprovedListbyWfInsId;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //查看流程图1
    WorkflowHttpService.prototype.IWorkFlowServicegetDisyUrlBywfInsId = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getDisyUrlBywfInsId;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //查看流程图2
    WorkflowHttpService.prototype.IWorkFlowServicegetWorkFlowIdbypiId = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getWorkFlowIdbypiId;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //查看流程图2
    WorkflowHttpService.prototype.IWorkFlowServiceloadDesingByconfId = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].loadDesingByconfId;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //查询
    WorkflowHttpService.prototype.IWorkFlowServicegetProcessInsList = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getProcessInsList;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //结束
    WorkflowHttpService.prototype.IWorkFlowServiceendProcessInstance = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].endProcessInstance;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //删除
    WorkflowHttpService.prototype.IWorkFlowServicedeleteProcessInstance = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deleteProcessInstance;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //历史查询
    WorkflowHttpService.prototype.IWorkFlowServicequeryApprovedListbywfInsId = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryApprovedListbywfInsId;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    /**
     * 已办任务查询
     */
    //已办任务查询
    WorkflowHttpService.prototype.IWorkFlowServicegetNoEndTaskList = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getNoEndTaskList;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //撤回
    WorkflowHttpService.prototype.IWorkFlowServiceback = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].back;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    /**
    * 代办任务查询
    */
    //待办查询
    WorkflowHttpService.prototype.IWorkFlowServicegetCheckTaskList = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getCheckTaskList;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService, param1);
    };
    //捡入
    WorkflowHttpService.prototype.IWorkFlowServicecheckInTask = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].checkInTask;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    /**
     * 待检出任务
     */
    WorkflowHttpService.prototype.IWorkFlowServicecheckOutTask = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].checkOutTask;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    /**
     * 变量维护
     */
    WorkflowHttpService.prototype.IDictConfServicegetProcessDicts = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getProcessDicts;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //getDicListByType流程变量查询
    WorkflowHttpService.prototype.IDictConfServicegetDicListByType = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getDicListByType;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程变量新增
    WorkflowHttpService.prototype.IDictConfServiceAdd = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].IDictConfServiceAdd;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    //流程变量修改
    WorkflowHttpService.prototype.IDictConfServiceupdateProcessVariable = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].updateProcessVariable;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService;
        params = this.httpService.handleParamsWOrk(params, pa);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IDictConfService + '.htm', params);
    };
    /**
     * 查看其他版本
     */
    WorkflowHttpService.prototype.IProcessDefinitionServicegetOtherVersionProcess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].getOtherVersionProcess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //恢复到可编辑版本
    WorkflowHttpService.prototype.IProcessDefinitionServicetoEditVersion = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].toEditVersion;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IProcessDefinitionService + '.htm', param1);
    };
    //发布
    WorkflowHttpService.prototype.IWorkFlowServicedeployProcess = function (params) {
        var pa = {};
        pa['comMESSAGE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].deployProcess;
        pa['comSERVICE_CODE'] = _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService;
        var param = this.httpService.handleParamsWOrk(params, pa);
        var param1 = JSON.parse(param);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_Work"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["APIService"].IWorkFlowService + '.htm', param1);
    };
    //审批参数查询
    WorkflowHttpService.prototype.queryApproveRecords = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _workflow_http_constants__WEBPACK_IMPORTED_MODULE_1__["API"].queryApproveRecords, params);
    };
    WorkflowHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], WorkflowHttpService);
    return WorkflowHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=default~approval-params-query-approval-params-query-module~process-instance-process-instance-module~~3cc876c3.js.map