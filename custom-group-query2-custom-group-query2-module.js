(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-query2-custom-group-query2-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/bean/selectCustGroup.bean.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/bean/selectCustGroup.bean.ts ***!
  \************************************************************************************************/
/*! exports provided: SelectCustGroupBean, groupList, contactList, introducerList, mentorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustGroupBean", function() { return SelectCustGroupBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupList", function() { return groupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactList", function() { return contactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introducerList", function() { return introducerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorList", function() { return mentorList; });
// 客户群查询
var SelectCustGroupBean = /** @class */ (function () {
    function SelectCustGroupBean() {
        // 入参
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
        this.groupList = []; //群列表    
    }
    return SelectCustGroupBean;
}());

var groupList = /** @class */ (function () {
    function groupList() {
        this.groupId = ''; //群号
        this.groupType = ''; //群类型
        this.groupName = ''; //群名称
        this.address = ''; //群地址
        this.ownerId = ''; //群主
        this.ownerName = ''; //分组所有者名称
        this.orgId = ''; //所属机构
        this.contactList = []; //群联系人列表
        this.contactListArr = [];
        this.introducerList = []; //群介绍人列表
        this.introducerListArr = [];
        this.mentorList = []; //群指导师傅列表
        this.mentorListArr = [];
        this.bgcFlag = ''; //后台中心标志
        this.description = ''; //备注（群描述）
        this.groupStatus = ''; //群组状态
    }
    return groupList;
}());

var contactList = /** @class */ (function () {
    function contactList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
        this.groupZone = ''; //客群区域  
    }
    return contactList;
}());

var introducerList = /** @class */ (function () {
    function introducerList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名  
    }
    return introducerList;
}());

var mentorList = /** @class */ (function () {
    function mentorList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名  
    }
    return mentorList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container boxShadow\">\r\n  <div class=\"ui-g-12 search boxShadow\">\r\n    <!-- 标题 -->\r\n    <div class=\"ui-g-12 header boxShadow\">\r\n      <div class=\"ui-g-7\">\r\n        <div class=\"header-title\">\r\n          <span class=\"text\">群高级查询</span>\r\n          <div class=\"searchInput\">\r\n            <input type=\"text\" id=\"advancedFilter\" placeholder=\"请输入高级筛选条件\" pInputText [(ngModel)]=\"searchContent\">\r\n            <button class=\"searchButton\" (click)=\"searchInput()\"></button>\r\n            <span title=\"筛选条件\" class=\"spanicon iconfont\" (click)=\"formatTemp()\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <div class=\"header-title prcla\">\r\n          <span class=\"text\">常用模板</span>\r\n          <span class=\"templateManage\" (click)=\"templeteManager()\">\r\n            <span class=\"iconfont tzbicon-setting iconfontmm\"></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 高级搜索 -->\r\n      <div class=\"ui-g-7 filterChoices\" (scroll)=\"scrollHandler($event)\">\r\n        <table class=\"ui-g-12\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"ui-g-1 center num\">序号</th>\r\n              <th class=\"ui-g-2\">字段模块</th>\r\n              <th class=\"ui-g-2\">字段类型</th>\r\n              <th class=\"ui-g-2\">字段属性</th>\r\n              <th class=\"ui-g-2\">取值方式</th>\r\n              <th class=\"ui-g-2\">字段取值</th>\r\n              <th class=\"ui-g-1 handle\">操作</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let items of conditionList;let i = index\">\r\n              <div *ngFor=\"let item of items; let ind = index\">\r\n                <td class=\"ui-g-1 center num\">{{i+1}}</td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,2,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt1\" [(ngModel)]=\"item.fieldModule\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,3,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt2\" [(ngModel)]=\"item.fieldAttr\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,4,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt3\" [(ngModel)]=\"item.field\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"item.valueType\" [(ngModel)]=\"item.operator\" [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span class=\"operations\">\r\n                    <p-dropdown *ngIf=\"!item.special\" class=\"gundam-dropdown\" [options]=\"option\" [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                    <input *ngIf=\"item.special == 'count'\" class=\"gundam-autocomplete\" type=\"text\" name=\"value\" pInputText [(ngModel)]=\"item.value\">\r\n                    <p-dropdown *ngIf=\"item.special == 'code'\" class=\"gundam-dropdown\" [options]=\"item.specialType\" [(ngModel)]=\"item.value\"\r\n                      [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                    <input *ngIf=\"item.special == 'input'\" type=\"text\" (click)=\"selectUser(item.inputType,i,ind)\" name=\"name\" pInputText [(ngModel)]=\"item.label\">\r\n                    <p-calendar *ngIf=\"item.special == 'time'\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"item.value\" [locale]=\"ch\" appendTo=\"body\" #decomponent></p-calendar>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-1 handle\">\r\n                  <div class=\"text-center\">\r\n                    <span title=\"删除\" class=\"spandelete iconfont tzbicon-delete\" (click)=\"doReduce(i,'custGroupAttr')\"></span>\r\n                    <span title=\"添加\" class=\"spaninserted iconfont tzbicon-plus-circle ng-star-inserted\" (click)=\"doAdd('custGroupAttr','html-btn')\"></span>\r\n                  </div>\r\n                </td>\r\n              </div>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- 模板管理 -->\r\n      <div class=\"ui-g-4 templates top\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"templeteList0\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'15%'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"模板名称\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"mappedTemplete(col,1)\">{{col.screenTemplateName}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'15%'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"删除\" class=\"spandelete iconfont tzbicon-delete\" (click)=\"deleteTarget(col)\"></span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n      <!-- 按钮 -->\r\n      <div class=\"ui-g-7 text-center funcButton\">\r\n        <button class=\"searchBtn\" (click)=\"tplSearch(1)\">查询</button>\r\n        <button class=\"resetBtn\" (click)=\"resetTemplete()\">重置</button>\r\n        <button class=\"resetBtn\" (click)=\"saveTemplete()\">保存模板</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- 客户群列表 -->\r\n    <div class=\"ui-g-12 boxShadow\" id=\"linkToGroupOwnerInfo\" *ngIf=\"permissionCheck('SID00002_P027')\" style=\"margin-top: 10px;padding-bottom:2em;\">\r\n      <!-- <p-tabPanel header=\"主管群列表\" [selected]=\"!isSecond\" *ngIf=\"permissionCheck('SID00002_P027_P001')\"> -->\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10\">\r\n          <button [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\">主管群</button>\r\n          <button [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\">辅管群</button>\r\n          <div *ngIf=\"show==1\">\r\n            <p-checkbox class=\"history\" label=\"查询历史记录\" binary=\"true\" [(ngModel)]=\"selcetedValues1\" (onChange)=\"checkChange($event,1)\"></p-checkbox>\r\n            <monthly-calendar id=\"calendar\" class=\"form-control\" [placeholder]=\"'请选择日期'\" (result)=\"chooseMonthMain = $event\" [range]=\"{before:50,after:50}\">\r\n            </monthly-calendar>&nbsp;&nbsp;\r\n            <p-radioButton name=\"radio1\" value=\"1\" label=\"当前客户群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,1)\"\r\n              [disabled]=\"queryTypeDisabled1\"></p-radioButton>\r\n            <p-radioButton name=\"radio1\" value=\"0\" label=\"历史时点群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,1)\"\r\n              [disabled]=\"queryTypeDisabled1\"></p-radioButton>&nbsp;&nbsp;\r\n            <p-checkbox binary=\"true\" label=\"汇总数据\" [(ngModel)]=\"total\" (click)=\"totalQuery()\"></p-checkbox>\r\n          </div>\r\n          <div *ngIf=\"show==2\">\r\n            <p-checkbox class=\"history\" label=\"查询历史记录\" binary=\"true\" [(ngModel)]=\"selcetedValues2\" (onChange)=\"checkChange($event,2)\"></p-checkbox>\r\n            <monthly-calendar class=\"form-control\" [placeholder]=\"'请选择日期'\" (result)=\"chooseMonthNotMain = $event\" [range]=\"{before:50,after:50}\">\r\n            </monthly-calendar>&nbsp;&nbsp;\r\n            <!-- <p-radioButton name=\"radio2\" value=\"1\" label=\"当前客户群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,2)\"\r\n              [disabled]=\"queryTypeDisabled2\"></p-radioButton> -->\r\n            <p-radioButton name=\"radio2\" value=\"0\" label=\"历史时点群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,2)\"\r\n              [disabled]=\"queryTypeDisabled2\"></p-radioButton>&nbsp;&nbsp;\r\n            <p-checkbox binary=\"true\" label=\"汇总数据\" [(ngModel)]=\"total\"></p-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          <span title=\"选择字段\" class=\"iconfontmm iconfont tzbicon-filters\" style=\"font-size: 20px;\" (click)=\"chooseParam()\"></span>\r\n        </div>\r\n      </div>\r\n      <!-- 主管群 -->\r\n      <div class=\"ui-g-12\" *ngIf=\"show==1\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupList1\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <label *ngIf=\"!col.sumFlag\">{{i+1}}</label>\r\n              <label *ngIf=\"col.sumFlag\">{{totalAverage}}</label>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"群编号\" [style]=\"{'width':'200px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"toGroupView(col,'isMain')\">{{col.group_id}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"\" header=\"\" *ngFor=\"let item of headerList\" [style]=\"{'width':item.width}\">\r\n            <ng-template pTemplate=\"header\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{item.taskTypeName}}\">{{item.taskTypeName}}</span>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{col[item.createrName]}}\" [ngStyle]=\"{'float':item.updater == 1?'right':'none'}\">{{col[item.createrName]}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span *ngIf=\"!col.sumFlag\" (click)=\"toGroupView(col)\" class=\"tabelDetailIco\">查看</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n\r\n      <!-- 辅管群 -->\r\n      <div class=\"ui-g-12\" *ngIf=\"show==2\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupList2\" scrollable=\"true\" scrollWidth=\"'1500px'\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <label *ngIf=\"!col.sumFlag\">{{i+1}}</label>\r\n              <label *ngIf=\"col.sumFlag\">{{totalAverage}}</label>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"群编号\" [style]=\"{'width':'200px','text-align':'center'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"toGroupView(col,'isMain')\">{{col.group_id}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'width':'200px'}\" field=\"\" header=\"\" *ngFor=\"let item of headerList\">\r\n            <ng-template pTemplate=\"header\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{item.taskTypeName}}\">{{item.taskTypeName}}</span>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{col[item.createrName]}}\">{{col[item.createrName]}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span *ngIf=\"!col.sumFlag\" (click)=\"toGroupView(col)\" class=\"tabelDetailIco\">查看</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n      <div class=\"ui-g-12 rel\" *ngIf=\"show==1\">\r\n        <u-paginator [first]=\"first1\" rows=\"{{pageSize1}}\" totalRecords=\"{{totalNum1}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50]\"\r\n          (onPageChange)=\"paginate1($event)\"></u-paginator>\r\n        <button pButton type=\"button\" *ngIf=\"permissionCheck('SID00002_P025_P004')\" label=\"下载\" (click)=\"download()\"></button>\r\n      </div>\r\n      <div class=\"ui-g-12 rel\" *ngIf=\"show==2\">\r\n        <u-paginator [first]=\"first2\" rows=\"{{pageSize2}}\" totalRecords=\"{{totalNum2}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50]\"\r\n          (onPageChange)=\"paginate2($event)\"></u-paginator>\r\n        <button pButton type=\"button\" *ngIf=\"permissionCheck('SID00002_P025_P004')\" label=\"下载\" (click)=\"download()\"></button>\r\n      </div>\r\n\r\n      <!-- 辅管群 -->\r\n      <!-- <p-tabPanel header=\"辅管群列表\" [selected]=\"isSecond\" *ngIf=\"isN\">\r\n        <div class=\"ui-g-12 boxShadow checkbox-area\">\r\n          <div class=\"ui-g-6\">\r\n            <p-checkbox class=\"history\" label=\"查询历史记录\" binary=\"true\" [(ngModel)]=\"selcetedValues2\" (onChange)=\"checkChange($event,2)\"></p-checkbox>\r\n            <monthly-calendar class=\"form-control\" [placeholder]=\"'请选择日期'\" (result)=\"chooseMonthNotMain = $event\" [range]=\"{before:50,after:50}\">\r\n            </monthly-calendar>&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <p-checkbox binary=\"true\" label=\"汇总数据\" [(ngModel)]=\"total\"></p-checkbox>\r\n          </div>\r\n          <div class=\"ui-g-6 text-right\">\r\n            <span class=\"chooseField\" (click)=\"chooseParam()\">\r\n              <img src=\"../../../../../../assets/layout/images/field.png\" alt=\"\"> 选择字段</span>\r\n          </div>\r\n        </div>\r\n        <div class=\" boxShadow ui-g-12\">\r\n          <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupList2\" scrollable=\"true\" scrollWidth=\"'1500px'\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n              <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <label *ngIf=\"!col.sumFlag\">{{i+1}}</label>\r\n                <label *ngIf=\"col.sumFlag\">{{totalAverage}}</label>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群编号\" [style]=\"{'width':'200px'}\">\r\n              <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                <span class=\"groupNumStyle\" (click)=\"toGroupView(col,'isMain')\">{{col.group_id}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'200px'}\" field=\"{{item.createrName}}\" header=\"{{item.taskTypeName}}\" *ngFor=\"let item of headerList\">\r\n            </p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n              <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                <span *ngIf=\"!col.sumFlag\" (click)=\"toGroupView(col)\" class=\"tabelDetailIco\">查看</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div> -->\r\n      <!-- 分页 -->\r\n      <!-- <p-paginator [first]=\"first2\" rows=\"{{pageSize2}}\" totalRecords=\"{{totalNum2}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50]\"\r\n          (onPageChange)=\"paginate2($event)\"></p-paginator>\r\n      </p-tabPanel> -->\r\n      <!-- </p-tabView> -->\r\n    </div>\r\n  </div>\r\n  <p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n  </p-dialog>\r\n\r\n  <!-- 客户名单列表- 字段选择模态框 -->\r\n  <p-dialog *ngIf=\"chooseDisplay\" [(visible)]=\"chooseDisplay\" class=\"gundam-display1\" baseZIndex=\"2\" modal=\"true\" responsive=\"true\">\r\n    <p-header>\r\n      选择显示字段\r\n    </p-header>\r\n    <div class=\"ui-g-12 checkAll\">\r\n      <p-checkbox binary=\"true\" label=\"全选\" (click)=\"checkAll2()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 background-color\">\r\n      <div *ngFor=\"let arr of getShowTemp;let ind = index;\">\r\n        <div class=\"ui-g-12 bd\">{{arr.taskTypeName}}</div>\r\n        <div class=\"ui-g-12\">\r\n          <p-checkbox [disabled]=\"item.taskTypeName == '群编号'\" class=\"ui-g-2\" label=\"{{item.taskTypeName}}\" *ngFor=\"let item of getSecondCustList[ind];let i = index\"\r\n            value=\"{{item.taskTypeName}}\" [(ngModel)]=\"selectedHeaderList\" (click)=\"checked()\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 text-center\">\r\n      <button class=\"searchBtn\" (click)=\"save()\">确定</button>\r\n    </div>\r\n  </p-dialog>\r\n\r\n\r\n  <!-- 查看详情 -->\r\n  <p-dialog *ngIf=\"templeteDisplay\" [(visible)]=\"templeteDisplay\" width=\"500\" height=\"300\" modal=\"true\" class=\"templete\">\r\n    <p-header>\r\n      新增客户群模板\r\n    </p-header>\r\n    <div class=\"ui-g-12 templete\">\r\n      <div class=\"ui-g-3\">\r\n        <div class=\"label\" appValidation>模板名称:</div>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <div class=\"first-query\">\r\n          <input class=\"margin-1\" type=\"text\" [(ngModel)]=\"expCondName\" pInputText>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 text-center\">\r\n      <button (click)=\"saveTemplete2()\" pButton type=\"button\" label=\"提交\"></button>\r\n    </div>\r\n  </p-dialog>\r\n\r\n\r\n  <p-dialog *ngIf=\"templeteManagerDisplay\" [(visible)]=\"templeteManagerDisplay\" width=\"500\" height=\"300\" modal=\"true\">\r\n    <p-header>\r\n      模板管理\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"templeteListDialog\">\r\n        <p-column header=\"序号\" [style]=\"{'width':'15%'}\">\r\n          <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n            {{i+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"模板名称\">\r\n          <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n            <span class=\"groupNumStyle\" (click)=\"mappedTemplete(col,2)\">{{col.screenTemplateName}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- <p-column field=\"screenTemplateId\" header=\"模板编号\"></p-column> -->\r\n        <p-column field=\"screenTemplateName\" header=\"模板名称\"></p-column>\r\n        <p-column header=\"操作\" [style]=\"{'width':'15%'}\">\r\n          <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n            <span (click)=\"delTemplete(col)\" class=\"tabelDeleteIco\">删除</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <!-- msg -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n  <!-- 删除-->\r\n  <p-confirmDialog header=\"提示\" appendTo=\"body\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n  <p-dialog (onHide)=\"searchManage2Hide()\" class=\"search-manage2\" *ngIf=\"searchManage2\" [(visible)]=\"searchManage2\" modal=\"true\">\r\n    <app-add-search-manage3></app-add-search-manage3>\r\n  </p-dialog>\r\n\r\n  <!-- 模态框 -->\r\n  <p-dialog *ngIf=\"staff_display01\" class=\"orgTreePage\" [(visible)]=\"staff_display01\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n      选择机构\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"returnInfo01($event)\" [inValue]=\"chooseOrgInvalue\"></org-tree-component>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"staff_display02\" [positionTop]=\"50\" [(visible)]=\"staff_display02\" width=\"900\">\r\n    <p-header>\r\n      选择客户\r\n    </p-header>\r\n    <queryGroupCustom (outValue)=\"returnInfo02($event)\"></queryGroupCustom>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"staff_display03\" [positionTop]=\"50\" [(visible)]=\"staff_display03\" width=\"900\">\r\n    <p-header>\r\n      选择人员\r\n    </p-header>\r\n    <queryUser (outValue)=\"returnInfo03($event)\"></queryUser>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"formatTempDialog\" [positionTop]=\"50\" [(visible)]=\"formatTempDialog\" width=\"900\" modal=\"true\" class=\"my-cust-contactf\">\r\n    <p-header>\r\n      过滤器高级筛选条件\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'过滤器高级筛选条件说明'\"></header-title>\r\n      <pre>\r\n        用户可以输入高级筛选条件以实现更复杂的查询需求\r\n        ▪条件序号从1开始\r\n        ▪条件之间的关系分为：“且”、“或”\r\n          ▪“且”也就是“并且”的含义，表示任何一个条件都必须满足\r\n          ▪“或”也就是“或者”的含义，表示满足其中任意一个条件即可\r\n        ▪可以使用括号“()”\r\n\r\n        举例：\r\n        ▪1或2\r\n        ▪(1或2)且3\r\n        ▪(1且2)或(3且4)\r\n        ▪(1且2)或(3且(4或5))\r\n\r\n        过滤器各条件之间缺省时，默认为“且”关系\r\n        这里的缺省是指：\r\n        ▪高级筛选条件为空\r\n\r\n        当高级筛选条件中的某条件未输入条件值时，表示该条件无效。例如：\r\n        ▪(1或2)且3，其中条件2未输入条件值，则实际执行的筛选条件为1且3\r\n    </pre>\r\n    </div>\r\n  </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 1279px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n@media screen and (min-width: 1025px) {\n  .ui-ml-1,\n  .ui-ml-2,\n  .ui-ml-3,\n  .ui-ml-4,\n  .ui-ml-5,\n  .ui-ml-6,\n  .ui-ml-7,\n  .ui-ml-8,\n  .ui-ml-9,\n  .ui-ml-10,\n  .ui-ml-11,\n  .ui-ml-12 {\n    padding: .5em; }\n  .ui-ml-1 {\n    width: 8.3333%; }\n  .ui-ml-2 {\n    width: 16.6667%; }\n  .ui-ml-3 {\n    width: 25%; }\n  .ui-ml-4 {\n    width: 33.3333%; }\n  .ui-ml-5 {\n    width: 41.6667%; }\n  .ui-ml-6 {\n    width: 50%; }\n  .ui-ml-7 {\n    width: 58.3333%; }\n  .ui-ml-8 {\n    width: 66.6667%; }\n  .ui-ml-9 {\n    width: 75%; }\n  .ui-ml-10 {\n    width: 83.3333%; }\n  .ui-ml-11 {\n    width: 91.6667%; }\n  .ui-ml-12 {\n    width: 100%; } }\n\n#linkToGroupOwnerInfo {\n  padding-bottom: 5px; }\n\ndl {\n  width: 95%;\n  height: 55px;\n  text-align: center;\n  padding: 0;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  margin: 0.5em 0; }\n\ndl dt {\n    float: left; }\n\ndl dd.count {\n    height: 32px;\n    font-size: 18px;\n    line-height: 38px; }\n\ndl dd.count .count-color {\n      color: #19b0c8;\n      text-decoration: underline; }\n\ndl dd.font {\n    font-size: 12px;\n    color: #999; }\n\ndl img {\n    width: 66px; }\n\n@media screen and (max-width: 1280px) {\n  dl {\n    height: 48px; }\n    dl img {\n      width: 56px; }\n    dl dd.count {\n      height: 27px;\n      font-size: 16px;\n      line-height: 31px; } }\n\nul {\n  margin: 0;\n  padding: 1em;\n  width: 100%;\n  list-style: none; }\n\nul li {\n    float: left;\n    width: 32.5%; }\n\n.btn-area {\n  text-align: right;\n  padding: 1em !important; }\n\n.btn-area .btn-class1 {\n    background: #f4c201; }\n\n.btn-area .btn-class2 {\n    background: #19b0c8; }\n\n.header-span {\n  display: inline-block;\n  width: 60px;\n  height: 25px;\n  color: #19b0c8;\n  margin-top: -31px;\n  cursor: pointer; }\n\n.header-img {\n  width: 8px;\n  height: 12px;\n  margin-left: 5px; }\n\n.header-title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between; }\n\n.header-title .title-right {\n    display: flex; }\n\n.header-title .title-right .line {\n      width: 3px;\n      height: 22px;\n      display: inline-block;\n      background-color: #19b0c8;\n      margin-right: 13px; }\n\n.header-title .title-right .text {\n      flex: 1;\n      height: 20px;\n      font-size: 14px;\n      line-height: 20px;\n      display: block;\n      font-weight: bold; }\n\n.header-title a {\n    margin-right: 20px; }\n\n.btn {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.btn button {\n    min-width: 160px; }\n\n.btn_down {\n  text-align: center; }\n\n.btn_down button {\n    border-radius: 30px; }\n\n.cover {\n  overflow: hidden; }\n\n.cover .ui-g-12,\n  .cover .ui-g-7,\n  .cover .ui-g-5 {\n    padding: 0;\n    box-sizing: border-box; }\n\n.cover .ui-g-12 {\n    margin: 0; }\n\n.cover .ui-g-7,\n  .cover .ui-g-5 {\n    margin-top: 10px; }\n\n.cover .ui-g-7 .ui-g-12,\n    .cover .ui-g-5 .ui-g-12 {\n      height: 100%; }\n\n.cover .onerow {\n    height: 250px;\n    padding: 0 5px; }\n\n.cover .secondrow {\n    height: 100%;\n    padding: 0 5px; }\n\n.cover .secondrow .total {\n      margin-left: 0 !important;\n      margin-top: 20px !important;\n      margin-bottom: 20px; }\n\n.grouptotal {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-size: 12px;\n  border: none !important;\n  margin-top: 7px;\n  margin-bottom: 14px;\n  margin-left: 7px; }\n\n.grouptotal .ui-g-3,\n  .grouptotal .ui-g-2 {\n    padding: 0;\n    text-align: center;\n    background: #F3F2F2;\n    border-bottom: 1px solid #ffffff;\n    border-left: 1px solid #ffffff;\n    padding: 15px 0 15px 0;\n    height: 55px; }\n\n.ui-g-12 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin-top: 7px;\n    width: 60%; }\n\n.btn button:first-child {\n    margin-top: 0px; }\n\n:host/deep/ .ui-datatable {\n  padding: 0.5em; }\n\n:host/deep/ .total label {\n  max-width: 145px; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: fixed;\n  white-space: normal; }\n\n:host/deep/ #echarts > div > div:nth-child(1) {\n  padding-left: 10% !important; }\n\n:host/deep/ #echarts > div > div:nth-child(1) canvas {\n    width: 90% !important;\n    height: 90% !important; }\n\n.container {\n  min-width: 1024px; }\n\n@media screen and (max-width: 1740px) {\n    .container {\n      font-size: 12px; }\n      .container button {\n        font-size: 12px; }\n      .container span {\n        background-size: contain; } }\n\n.container .container-left .huizong {\n    background: #fafafa;\n    height: 207px;\n    display: inline-block;\n    width: 100%; }\n\n.container .container-left .huizong .huizong-ul {\n      margin-top: -0.5em; }\n\n@media screen and (max-width: 1280px) {\n    .container .container-left .huizong {\n      height: 176px; } }\n\na,\n.img {\n  cursor: pointer; }\n\n.tab input {\n  border: none;\n  width: 100%; }\n\n.groupNumStyle {\n  color: #19b0c8; }\n\n.groupNumStyle:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    color: #19b0c8; }\n\n.container-right {\n  margin-top: -0.5em; }\n\n.daiban-box {\n  height: 253px;\n  overflow: hidden; }\n\n@media screen and (max-width: 1280px) {\n  .daiban-box {\n    height: 221px; } }\n\n:host/deep/ .ui-datatable .ui-widget {\n  padding: 0.5em;\n  margin: 0;\n  padding-top: 1em; }\n\n:host/deep/ .ui-tabview-panel.ui-widget-content {\n  padding: 0.5em; }\n\n:host/deep/ .ui-datatable.ui-widget {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-button,\n  body .ui-datepicker-buttonpane > button {\n    height: 2.2em; } }\n\n.cus_chose .cont span {\n  width: 50% !important; }\n\n.table-self {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right;\n  color: red; }\n\n.background-color {\n  background: #f7f7f7;\n  padding-left: 0;\n  padding-right: 0; }\n\n.templete {\n  width: 30%;\n  height: 150px;\n  margin-left: 35%;\n  margin-top: 157px; }\n\n.search-manage2 {\n  height: 90%; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.history,\n.form-control {\n  display: inline-block; }\n\n.header {\n  border-bottom: 1px solid #dadada;\n  font-size: 15px; }\n\n.header .line {\n    width: 3px;\n    height: 22px;\n    display: inline-block;\n    background-color: #19b0c8;\n    margin-right: 13px; }\n\n.header .text {\n    vertical-align: top;\n    height: 22px;\n    display: inline-block;\n    line-height: 22px;\n    white-space: nowrap;\n    color: #545454;\n    font-size: 16px;\n    font-weight: bold; }\n\n.header .ui-g-7 {\n    padding-left: 0;\n    box-shadow: 5px 0 5px #dbdada; }\n\n.searchInput {\n  float: right;\n  text-align: right; }\n\n.searchInput label {\n    min-width: 84px; }\n\n.searchInput input {\n    width: 70%;\n    border-right: 0; }\n\n.ui-g-7 {\n  width: 70%; }\n\n.ui-g-4 {\n  width: 29%;\n  margin-left: 1%;\n  overflow: auto; }\n\ntable thead tr {\n  font-size: 14px;\n  background: #f0f0f0 !important; }\n\ntable thead th {\n  font-weight: 400;\n  height: 35px; }\n\ntable tbody tr:nth-child(2n+2) {\n  background-color: #efefef; }\n\ntable td {\n  height: 35px;\n  line-height: 35px;\n  padding: 0; }\n\n.center, table td {\n  text-align: center; }\n\n:host/deep/ .ui-dropdown {\n  width: 80% !important;\n  min-width: 0 !important; }\n\n:host/deep/ .ui-dropdown .ui-dropdown-label {\n    padding: 0 2.5em 0 0; }\n\n:host/deep/ .ui-dropdown-panel.ui-widget-content.ui-corner-all.ui-shadow.ng-trigger.ng-trigger-panelState {\n  z-index: 100 !important; }\n\n.num {\n  width: 48px; }\n\n.handle {\n  width: calc(16.6666% - 48px);\n  min-width: 75px; }\n\n.handle span {\n    display: inline-block; }\n\n.handle img {\n    cursor: pointer;\n    vertical-align: middle; }\n\n.templateManage {\n  float: right;\n  cursor: pointer;\n  width: 20px;\n  line-height: 25px; }\n\n.templateManage img {\n    height: 16px;\n    vertical-align: middle;\n    margin-top: -1px; }\n\n.filterChoices {\n  height: 160px;\n  overflow: auto;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.templates {\n  height: 160px;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.search {\n  overflow: auto;\n  margin-bottom: 15px; }\n\n:host/deep/ .operations .ui-inputtext {\n  width: 80% !important;\n  min-width: 0 !important; }\n\n:host/deep/ .ui-tabview .ui-tabview-nav > li > a {\n  width: 140px;\n  text-align: center; }\n\n:host/deep/ .ui-tabview .ui-tabview-nav > li.ui-state-active a::after {\n  left: 23%;\n  width: 75px; }\n\n:host/deep/ .only-year-month-select .form-control {\n  width: 130px !important; }\n\n.funcButton {\n  padding: 0.5em; }\n\n.funcButton button {\n    min-width: 100px;\n    height: 25px;\n    margin-right: 30px; }\n\n.searchButton {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #bdbdbd;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  background: url('searchMore.png') no-repeat center center;\n  background-color: #fff;\n  outline: 0;\n  vertical-align: top;\n  margin-left: -7px;\n  cursor: pointer; }\n\n.chooseField {\n  cursor: pointer; }\n\n.chooseField img {\n    vertical-align: middle;\n    height: 16px; }\n\n:host/deep/ .dialog .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .dialog .ui-datatable .ui-widget {\n  padding: 0em;\n  margin: 0;\n  padding-top: 0em; }\n\n.bd {\n  padding: .75em 0;\n  background: #d2f1ef; }\n\n.gundam-display1 .checkAll {\n  padding: .25em 0; }\n\n.rel {\n  position: relative; }\n\n.rel button {\n    position: absolute;\n    left: calc(50% - 2.5em);\n    top: 0; }\n\n.table {\n  text-align: right; }\n\n.icon {\n  vertical-align: top;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin-top: 4px; }\n\n.searchBtn {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: #34cfe6;\n  color: #fff;\n  width: 60px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n.header-title {\n  width: 100%;\n  background-color: #ffffff;\n  padding-left: 12px;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap; }\n\n.header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .line {\n      height: 17px; } }\n\n.header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    width: 25px;\n    font-weight: bold; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .text {\n      font-size: 15px; } }\n\n:host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-cust-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n.spanicon {\n  font-size: 20px;\n  cursor: pointer; }\n\n.spandelete {\n  color: red;\n  font-size: 20px;\n  cursor: pointer; }\n\n.spaninserted {\n  color: #34cfe6;\n  font-size: 20px;\n  cursor: pointer; }\n\n.iconfontmm {\n  font-weight: 500;\n  font-size: 20px;\n  cursor: pointer;\n  color: #34cfe6 !important; }\n\n:host/deep/ .ui-g-10 button {\n  float: left;\n  width: 100px;\n  height: 25px;\n  color: #333;\n  background: white;\n  border: 1px solid #ccc; }\n\n:host/deep/ .ui-g-10 button:nth-child(1) {\n  border-radius: 10px 0px 0px 10px; }\n\n:host/deep/ .ui-g-10 button:nth-child(2) {\n  margin-right: 10px;\n  border-radius: 0px 10px 10px 0px; }\n\n.active {\n  border: none !important;\n  color: white !important;\n  background: #f4c201 !important; }\n\n:host/deep/ .form-control {\n  height: 20px !important; }\n\n:host/deep/ .ui-datatable-scrollable-body {\n  height: 485px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr {\n  height: 36px !important; }\n\n:host/deep/ .top .u-datatable .ui-datatable-thead > tr {\n  background: #f0f0f0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f0f0f0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data > tr > td {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr > th {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n:host/deep/ .u-paginator.ui-widget.ui-widget-header.ui-unselectable-text {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXF1ZXJ5Mi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXF1ZXJ5MlxcY3VzdG9tLWdyb3VwLXF1ZXJ5Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0w7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0w7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBUG5CO0lBU1EsV0FBVyxFQUFBOztBQVRuQjtJQVlRLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBZHpCO01BZ0JZLGNBQWM7TUFDZCwwQkFBMEIsRUFBQTs7QUFqQnRDO0lBcUJRLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBdEJuQjtJQXlCUSxXQUFXLEVBQUE7O0FBSW5CO0VBN0JBO0lBK0JRLFlBQVksRUFBQTtJQS9CcEI7TUFpQ1ksV0FBVyxFQUFBO0lBakN2QjtNQW9DWSxZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQixFQUFBLEVBQ3BCOztBQUlUO0VBQ0ksU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSnBCO0lBTVEsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7O0FBRjNCO0lBSVEsbUJBQW1CLEVBQUE7O0FBSjNCO0lBT1EsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFQbEM7SUFTUSxhQUFhLEVBQUE7O0FBVHJCO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBOztBQWY5QjtNQWtCWSxPQUFPO01BQ1AsWUFBWTtNQUNaLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGlCQUFpQixFQUFBOztBQXZCN0I7SUEyQlEsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFIdEI7SUFLUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7OztJQUtRLFVBQVU7SUFDVixzQkFBc0IsRUFBQTs7QUFOOUI7SUFTUSxTQUFTLEVBQUE7O0FBVGpCOztJQWFRLGdCQUFnQixFQUFBOztBQWJ4Qjs7TUFlWSxZQUFZLEVBQUE7O0FBZnhCO0lBbUJRLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBcEJ0QjtJQXVCUSxZQUFZO0lBQ1osY0FBYyxFQUFBOztBQXhCdEI7TUEwQlkseUJBQXlCO01BQ3pCLDJCQUEyQjtNQUMzQixtQkFBbUIsRUFBQTs7QUFLL0I7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUJBQXVCO0VBV3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBbEJwQjs7SUFRUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7O0FBT3BCO0VBQ0ksVUFBVSxFQUFBOztBQXZFZDtFQTJFSSxrQkFBa0IsRUFBQTs7QUEzRXRCO0lBNkVRLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBSmxCO0lBT1EsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUdZLDRCQUEyQixFQUFBOztBQUh2QztJQUtnQixxQkFBb0I7SUFDcEIsc0JBQXFCLEVBQUE7O0FBUXJDO0VBR0ksaUJBQWlCLEVBQUE7O0FBQ2pCO0lBSko7TUFLUSxlQUFjLEVBQUE7TUFMdEI7UUFPWSxlQUFlLEVBQUE7TUFQM0I7UUFVWSx3QkFBd0IsRUFBQSxFQUMzQjs7QUFYVDtJQWVZLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTs7QUFsQnZCO01Bb0JnQixrQkFBa0IsRUFBQTs7QUFHMUI7SUF2QlI7TUF5QmdCLGFBQWEsRUFBQSxFQUNoQjs7QUFLYjs7RUFFSSxlQUFlLEVBQUE7O0FBR25CO0VBRVEsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUxBO0lBT1EsYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0s7O0lBRUcsYUFDSixFQUFBLEVBQUM7O0FBR0w7RUFHWSxxQkFBb0IsRUFBQTs7QUFLaEM7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjs7RUFFSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQ0FBMkM7RUFDM0MsZUFBZSxFQUFBOztBQUZuQjtJQUlRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFSMUI7SUFXUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBbEJ6QjtJQXFCUSxlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7O0FBSXJDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUZyQjtJQUlRLGVBQWUsRUFBQTs7QUFKdkI7SUFPUSxVQUFVO0lBQ1YsZUFBZSxFQUFBOztBQUl2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUdZLGVBQWU7RUFDZiw4QkFDSixFQUFBOztBQUxSO0VBT1ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFSeEI7RUFhWSx5QkFBeUIsRUFBQTs7QUFickM7RUFrQlEsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUYzQjtJQUlRLG9CQUFvQixFQUFBOztBQUk1QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7O0FBRm5CO0lBSVEscUJBQXFCLEVBQUE7O0FBSjdCO0lBT1EsZUFBZTtJQUNmLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUpyQjtJQU1RLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBb0M7RUFDcEMsY0FBYztFQUNkLDBCQUEwQjtFQUMxQix5REFBZ0c7RUFDaEcsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1Esc0JBQXNCO0lBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBOEIsRUFBQTs7QUFHbEM7RUFFUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBQTs7QUFJZDtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBWEo7TUFZUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUFFRDtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBVko7TUFXUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUF6aEJEO0VBNGhCSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBUG5CO0lBU1EsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFBOztBQUU3QjtJQWZKO01BaUJZLFlBQVksRUFBQSxFQUNmOztBQWxCVDtJQXVCUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBOztBQUVyQjtJQWpDSjtNQW1DWSxlQUFlLEVBQUEsRUFDbEI7O0FBSVQ7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQVA5QjtFQVVRLGdDQUFnQyxFQUFBOztBQVZ4QztFQWFRLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQTs7QUFJeEM7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQVVsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXF1ZXJ5Mi9jdXN0b20tZ3JvdXAtcXVlcnkyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjc5cHgpIHtcclxuICAgIC51aS1tcC0xLFxyXG4gICAgLnVpLW1wLTIsXHJcbiAgICAudWktbXAtMyxcclxuICAgIC51aS1tcC00LFxyXG4gICAgLnVpLW1wLTUsXHJcbiAgICAudWktbXAtNixcclxuICAgIC51aS1tcC03LFxyXG4gICAgLnVpLW1wLTgsXHJcbiAgICAudWktbXAtOSxcclxuICAgIC51aS1tcC0xMCxcclxuICAgIC51aS1tcC0xMSxcclxuICAgIC51aS1tcC0xMiB7XHJcbiAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KSB7XHJcbiAgICAudWktbWwtMSxcclxuICAgIC51aS1tbC0yLFxyXG4gICAgLnVpLW1sLTMsXHJcbiAgICAudWktbWwtNCxcclxuICAgIC51aS1tbC01LFxyXG4gICAgLnVpLW1sLTYsXHJcbiAgICAudWktbWwtNyxcclxuICAgIC51aS1tbC04LFxyXG4gICAgLnVpLW1sLTksXHJcbiAgICAudWktbWwtMTAsXHJcbiAgICAudWktbWwtMTEsXHJcbiAgICAudWktbWwtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tbC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tbC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tbC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tbC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbWwtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbWwtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbWwtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tbC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbWwtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbiNsaW5rVG9Hcm91cE93bmVySW5mbyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5kbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICAgIGR0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIGRkLmNvdW50IHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIC5jb3VudC1jb2xvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZC5mb250IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgZGwge1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGQuY291bnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMyLjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWFyZWEge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxuICAgIC5idG4tY2xhc3MxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRjMjAxO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jbGFzczIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXItc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1nIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDdweCAwIDdweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAudGl0bGUtcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNjBweDsgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bl9kb3duIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvdmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAudWktZy0xMixcclxuICAgIC51aS1nLTcsXHJcbiAgICAudWktZy01IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNyxcclxuICAgIC51aS1nLTUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLnVpLWctMTIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9uZXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuICAgIC5zZWNvbmRyb3cge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAudG90YWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZ3JvdXB0b3RhbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAudWktZy0zLFxyXG4gICAgLnVpLWctMiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YzRjJGMjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDE1cHggMDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG5cclxuLnVpLWctMTIge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC50b3RhbCBsYWJlbCB7XHJcbiAgICBtYXgtd2lkdGg6IDE0NXB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAjZWNoYXJ0cyB7XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICA+ZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHt9XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8vIOa7muWKqFxyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMTAyNHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc0MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXItbGVmdCB7XHJcbiAgICAgICAgLmh1aXpvbmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwN3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAuaHVpem9uZy11bCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmh1aXpvbmcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYSxcclxuLmltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItcmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNWVtO1xyXG59XHJcblxyXG4uZGFpYmFuLWJveCB7XHJcbiAgICBoZWlnaHQ6IDI1M3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5kYWliYW4tYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDIyMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIC51aS13aWRnZXQge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktdGFidmlldy1wYW5lbC51aS13aWRnZXQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZS51aS13aWRnZXQge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktYnV0dG9uLFxyXG4gICAgYm9keSAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lPmJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzX2Nob3NlIHtcclxuICAgIC5jb250IHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUtc2VsZiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy/mkJzntKJcclxuLmJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50ZW1wbGV0ZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTdweDtcclxufVxyXG5cclxuLnNlYXJjaC1tYW5hZ2UyIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlzdG9yeSxcclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTgsIDIxOCwgMjE4KTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC5saW5lIHtcclxuICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCAjZGJkYWRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWktZy03IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi51aS1nLTQge1xyXG4gICAgd2lkdGg6IDI5JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjAgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKDJuKzIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgQGV4dGVuZCAuY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIuNWVtIDAgMDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duLXBhbmVsLnVpLXdpZGdldC1jb250ZW50LnVpLWNvcm5lci1hbGwudWktc2hhZG93Lm5nLXRyaWdnZXIubmctdHJpZ2dlci1wYW5lbFN0YXRlIHtcclxuICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4uaGFuZGxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDE2LjY2NjYlIC0gNDhweCk7XHJcbiAgICBtaW4td2lkdGg6IDc1cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGVtcGxhdGVNYW5hZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlckNob2ljZXMge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRlbXBsYXRlcyB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5vcGVyYXRpb25zIC51aS1pbnB1dHRleHQge1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS10YWJ2aWV3IC51aS10YWJ2aWV3LW5hdj5saT5hIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctbmF2PmxpLnVpLXN0YXRlLWFjdGl2ZSBhOjphZnRlciB7XHJcbiAgICBsZWZ0OiAyMyU7XHJcbiAgICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm9ubHkteWVhci1tb250aC1zZWxlY3QgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1bmNCdXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9zZWFyY2hNb3JlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hvb3NlRmllbGQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmRpYWxvZyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZGlhbG9nIC51aS1kYXRhdGFibGUgLnVpLXdpZGdldCB7XHJcbiAgICBwYWRkaW5nOiAwZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG59XHJcblxyXG4uYmQge1xyXG4gICAgcGFkZGluZzogLjc1ZW0gMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTAsIDI0MSwgMjM5KTtcclxufVxyXG5cclxuLmd1bmRhbS1kaXNwbGF5MSB7XHJcbiAgICAuY2hlY2tBbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyLjVlbSk7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlYXJjaEJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMzNGNmZTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlc2V0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNGNmZTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5saW5lIHtcclxuICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4OiAxO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5teS1jdXN0LWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm15LWN1c3QtY29udGFjdGYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5zcGFuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zcGFuZGVsZXRlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zcGFuaW5zZXJ0ZWQge1xyXG4gICAgY29sb3I6ICMzNGNmZTY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uZm9udG1tIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzM0Y2ZlNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZy0xMCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRjMjAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5IHtcclxuICAgIGhlaWdodDogNDg1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0ciB7XHJcbiAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnRvcCAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHI+dGggLnVpLWNvbHVtbi10aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhPnRyPnRkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LXBhZ2luYXRvci51aS13aWRnZXQudWktd2lkZ2V0LWhlYWRlci51aS11bnNlbGVjdGFibGUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CustomGroupQuery2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupQuery2Component", function() { return CustomGroupQuery2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/selectCustGroup.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/bean/selectCustGroup.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _my_custom_group_bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../my-custom-group/bean/custGroupQuery.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/custGroupQuery.bean.ts");
/* harmony import */ var _my_custom_group_bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../my-custom-group/bean/MyGroupBasefInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupBasefInfo.bean.ts");
/* harmony import */ var _my_custom_group_bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../my-custom-group/bean/MyGroupTotalInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupTotalInfo.bean.ts");
/* harmony import */ var _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@uisftech/common/pipe/formatMoney.pipe */ "./src/app/@uisftech/common/pipe/formatMoney.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //我的客户群信息查询
 //客户群bean













var CustomGroupQuery2Component = /** @class */ (function () {
    function CustomGroupQuery2Component(router, httpService, commfunc, CommonHttpService, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.CommonHttpService = CommonHttpService;
        this.confirmationService = confirmationService;
        this.testList = ["群基本信息", "群产品信息"];
        this.chooseOrgInvalue = 'eliminateBranch';
        this.searchContent = ''; //高级搜索条件组合方式
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["CALENDAR_CN"]; //创建日期的语言
        this.getHeaderList = [];
        this.selectedHeaderList = ['群编号'];
        this.headerList = [];
        this.isAll = false;
        this.isMainHistory = false; //历史记录
        this.notMainHistory = false;
        this.is_html = false; //判断搜索初始化
        this.getShowTemp = [];
        this.getSecondCustList = [];
        this.show = 1;
        this.totalAverage = '总计';
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["tableMessage"];
        // 标题
        this.title1 = '我的客户群';
        this.title2 = '基本信息';
        this.title3 = '群业绩汇总';
        this.title4 = '群存款分布图';
        this.title5 = '主管群列表';
        this.title6 = '群贷款分布图';
        this.alListFlag = true;
        this.mesg = [];
        // 控件
        this.msgs = [];
        this.orgId = '';
        this.userId = '';
        // bean
        this.groupOwnerInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["GroupOwnerInfoBean"]();
        this.custGroupQueryBean = new _my_custom_group_bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_10__["CustGroupQueryBean"]();
        this.myGroupBasefInfoBean = new _my_custom_group_bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_11__["MyGroupBasefInfoBean"](); //我的客户群基本信息查询
        this.myGroupTotalInfoBean = new _my_custom_group_bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_12__["MyGroupTotalInfoBean"](); //我的客户群总体信息查询
        this.selectCustGroupBean = new _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_6__["SelectCustGroupBean"](); //客户群查询Bean
        // 码值
        // 中间量
        this.groupOwnerFlag = true; //主管辅管切换
        this.hasChange = 1; //是否已切换过一次
        this.isMain = true; //是否主管群
        this.queryTypeDisabled1 = true; //历史\当前
        this.queryTypeDisabled2 = true; //历史\当前
        this.groupList1 = []; //主管群列表信息
        this.groupList2 = []; //辅管群列表信息
        this.groupList1_1 = []; //合计统计
        this.groupList2_1 = []; //合计统计
        this.first1 = 0;
        this.pageNum1 = 1;
        this.pageSize1 = 10;
        this.first2 = 0;
        this.pageNum2 = 1;
        this.pageSize2 = 10;
        this.isN = true;
        this.isSecond = false;
        this.first = 0;
        this.conditionList = []; //查询数组
        this.selectedValues = [];
        this.chooseDisplay = false; //自定义表头模态框
        this.selectedAttr = [];
        this.attrList = [];
        this.isFirst = true;
        this.templeteDisplay = false;
        this.expCondName = '';
        this.templeteList0 = []; //模板列表
        this.templeteManagerDisplay = false; //模板dialog
        this.templeteListDialog = []; //mubanlist
        this.searchManage2 = false; //模板管理模态框
        this.moneyList = [];
        this.formatMoneyValuePie = new _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatMoneyValuePie"](); //管道
        this.CusGroupAttrOpt1 = [{
                label: '请选择', value: ''
            }]; //码值
        this.CusGroupAttrOpt2 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt3 = [{
                label: '请选择', value: ''
            }];
        // CusGroupAttrOpt4: any = [{
        //   label: '请选择', value: ''
        // }];
        this.isCountType = [
            { label: '请选择', value: '' },
            { label: '小于等于', value: '<=' },
            { label: '大于等于', value: '>=' },
        ]; //取值方式1
        this.notCountType = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
            { label: '包含', value: '%%' },
        ]; //取值方式2
        this.CountTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
        ];
        this.InTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: 'in' },
        ]; //取值方式3
        this.CountTypeLike = [
            { label: '请选择', value: '' },
            { label: '包含', value: '%%' },
        ]; //取值方式4
        this.taskTypeParentId = ''; //任务类型id
        //20180609
        this.staff_display01 = false; // 选人木台眶
        this.staff_display02 = false; // 选人木台眶
        this.staff_display03 = false; // 选人木台眶
        this.isThird = false;
        //
        this.isInit = true;
        this.titleList = []; //下载-入参
        this.formatTempDialog = false;
        this.downList = [];
        this.downloadPerson = false;
        this.new_postId = [];
        this.sumFlag = false; //判断是否汇总的标志
        this.queryTypeFlag = '0';
        this.option = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        //码值表
        this.groupType = this.code['GroupTypeSave'];
        this.developmentLevel = this.code['developmentLevel'];
        this.productList = this.code['productList'];
        this.littleEvent = this.code['BigEvent'];
        this.GroupStatus = this.code['GroupStatus'];
        //下载判断
        this.new_postId = this.code['downPostId'];
        //10.客户群属性筛选
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
    }
    //关闭模态框并存储字段
    CustomGroupQuery2Component.prototype.save = function () {
        this.chooseDisplay = false;
        this.addUserListShow();
    };
    ;
    //选择-字段
    CustomGroupQuery2Component.prototype.checked = function () {
        var _this = this;
        console.log(this.selectedHeaderList);
        var length = 0;
        this.getSecondCustList.forEach(function (element, i) {
            length = length + _this.getSecondCustList[i].length;
        });
        if (this.selectedHeaderList.length == length) {
            this.isAll = true;
        }
        else {
            this.isAll = false;
        }
    };
    //码值
    CustomGroupQuery2Component.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomGroupQuery2Component.prototype.ngOnInit = function () {
        this.chooseParam2(); //获取表头可选字段
        this.doAdd('custGroupAttr', 1, 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.preSet();
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.commonHeader = mesg;
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // console.log(mesg.extParam.managePermission)
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y') {
            this.isN = false;
            this.selectCustGroupBean['searchScope'] = '2';
            this.selectCustGroupBean['ownerId'] = '';
        }
        else {
        }
        // this.selectMyGroupAchiInfo(1);
        // this.selectMyGroupAchiInfo(0);
        // this.selectMyGroupBasefInfo();//我的客户群基本信息查询
        // this.selectMyGroupTotalInfo();//我的客户群总体信息查询
        // this.pendingScheduleGroupQry();//代办及提醒
        // this.selectCustGroup(3);//默认主管群
        // this.selectCustGroup(4);//默认主管群
        // this.tplSearch(0);//列表查询
        //列表查询
        // this.chooseParam();
        // this.addUserListShow();
        this.attrListSearch(); //获取存储字段
        this.queryTargetCustomerExploreList(0); //模板列表
        // this.queryTellerById();
        // this.selectCustBriefInfo();
    };
    CustomGroupQuery2Component.prototype.preSet = function () {
        // 初始化
        // 取session
        var session = window.sessionStorage;
        var data = session.getItem('commonHeader');
        if (!data) {
            this.router.navigate(["/login"]);
            return;
        }
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (!mesg) {
        }
        var ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.groupOwnerInfoBean.ownerId = mesg['userId']; //群主，我的客户群查询
        this.myGroupBasefInfoBean.ownerId = mesg['userId']; //我的客户群基本信息查询，群主
        this.selectCustGroupBean.ownerId = mesg['userId']; //我的客户群总体信息查询，群主
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.groupOwnerInfoBean.groupType = '0'; //我的客户群信息查询,群类型
    };
    CustomGroupQuery2Component.prototype.selectMyGroupBasefInfo = function () {
        var _this = this;
        // 我的客户群信息查询
        this.httpService.selectMyGroupBasefInfo(this.myGroupBasefInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.myGroupBasefInfoBean = data;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // selectMyGroupTotalInfo() {
    //   // 我的客户群信息查询
    //   this.httpService.selectMyGroupTotalInfo(this.myGroupTotalInfoBean).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       this.myGroupTotalInfoBean = data;
    //     }
    //     else {
    //       this.msgs = [];
    //       data.returnCode.code ? data.returnCode.code : '调用服务失败！';
    //       this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    //     }
    //   }, err => {
    //     this.msgs = [];
    //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
    //   })
    // }
    CustomGroupQuery2Component.prototype.selectMyGroupAchiInfo = function (groupType) {
        var _this = this;
        // 我的客户群信息查询
        var params = {
            ownerId: this.userId,
            groupType: groupType
        };
        if (groupType == 1) {
            this.httpService.selectMyGroupAchiInfo(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.groupOwnerInfoBean = data;
                    var alLegendData_1 = [];
                    var alSeriesData = [];
                    var alSeriesData2_1 = [];
                    if (data.achiInfo) {
                        data.achiInfo.forEach(function (item) {
                            alLegendData_1.push(item.groupName);
                            // alSeriesData.push({value:item.mdeptAvgBal,name:item.groupName});
                            alSeriesData2_1.push({ value: item.mloanAvgBal, name: item.groupName });
                        });
                    }
                    _this.option_lnList = {
                        title: {
                            text: "贷款日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: 'left',
                            data: alLegendData_1,
                        },
                        series: [
                            {
                                name: "贷款占比",
                                type: "pie",
                                radius: "70%",
                                center: ["50%", "60%"],
                                data: alSeriesData2_1,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                }
                            }
                        ]
                    };
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else {
            this.httpService.selectMyGroupAchiInfo(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.groupOwnerInfoBean = data;
                    var alLegendData_2 = [];
                    var alSeriesData_1 = [];
                    var alSeriesData2 = [];
                    if (data.achiInfo) {
                        data.achiInfo.forEach(function (item) {
                            alLegendData_2.push(item.groupName);
                            alSeriesData_1.push({ value: item.mdeptAvgBal, name: item.groupName });
                            // alSeriesData2.push({value:item.mloanAvgBal,name:item.groupName});
                        });
                    }
                    _this.option_asList = {
                        labels: alLegendData_2,
                        title: {
                            text: "存款日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: 'left',
                            data: alLegendData_2,
                        },
                        series: [
                            {
                                name: "存款占比",
                                type: "pie",
                                radius: "70%",
                                center: ["50%", "60%"],
                                data: alSeriesData_1,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                }
                            }
                        ]
                    };
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    CustomGroupQuery2Component.prototype.tocreategroup = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/create-custom-group']);
    };
    CustomGroupQuery2Component.prototype.toQueryGroup = function () {
        // 去查找客户群页面
        this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-query2']);
    };
    // alListChange(param: any) {
    //   if (param == 1) {
    //     this.alListFlag = true;
    //     // this.alList = this.option_asList;              
    //   }
    //   if (param == 2) {
    //     this.alListFlag = false;
    //     // this.alList = this.option_lnList;              
    //   }
    // }
    CustomGroupQuery2Component.prototype.click_alList = function (event) {
    };
    // 其他
    CustomGroupQuery2Component.prototype.linkToGroupOwnerInfo = function (index) {
        // 链接到主管客户群查询
        this.groupOwnerFlag = true;
        this.isSecond = index == 2 ? true : false;
        document.getElementById('linkToGroupOwnerInfo').scrollIntoView();
    };
    // linkToSubGroupQuery(stu) {
    //   this.isSecond = stu;
    //   // 链接到辅管客户群查询
    //   this.groupOwnerFlag = false;
    //   document.getElementById('linkToGroupOwnerInfo').scrollIntoView();
    //   this.groupOwnerChange(2);
    //   // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-query',{searchScope:'4'}]);    
    // }
    //CRM客户群查询
    CustomGroupQuery2Component.prototype.custGroupQuery = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.custGroupQueryBean.userId = this.userId;
        this.custGroupQueryBean.sysCode = '122';
        this.custGroupQueryBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.custGroupQueryBean.serverName = 'ywsn';
        this.custGroupQueryBean.validateType = '0';
        this.custGroupQueryBean.extraInfo = 'ywsn';
        this.custGroupQueryBean.encryptType = 'HS256';
        this.httpService.tokenApply(this.custGroupQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_SX"] + 'ifs/visiturl.do?token_id=' + tokens + '&tranFlag=batGroup&user_id=' + _this.userId + '&consumer_id=CRM&domain_name=ywsn&url=http://10.1.39.140:8011/searchPaymentTool&bankCode=BR00A&bankCode=BR00A';
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    CustomGroupQuery2Component.prototype.groupOwnerChange = function (i) {
        // 主管群辅管群切换
        if (i == 3) {
            this.groupOwnerFlag = true;
            this.tplSearch(1);
        }
        if (i == 4) {
            this.groupOwnerFlag = false;
            if (this.hasChange == 1) {
                this.tplSearch(1);
                this.hasChange == 0;
            }
        }
    };
    CustomGroupQuery2Component.prototype.toGroupView = function (col, main) {
        this.selectCustGroupInfo(col);
        // 转到客户群视图
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: col.groupId, groupName: col.groupName,}]);
    };
    // 查询
    CustomGroupQuery2Component.prototype.selectCustGroupInfo = function (col) {
        var _this = this;
        var params = {
            groupId: col.group_id
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.groupStatus != '1') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '该群非正常状态，不可查看' }];
                }
                else {
                    // let a = 'groupId=' + this.commfunc.compileStr(col.group_id) + ';' + 'groupName=' + col.group_name;
                    // let a_encode = encodeURI(a);
                    // window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a);
                    _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.commfunc.compileStr(col.group_id), groupName: col.group_name }]);
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomGroupQuery2Component.prototype.adminSelect = function () {
        // 管理人员查询赋值
        this.selectCustGroupBean.groupList.forEach(function (item) {
            item.contactListArr = [];
            item.contactList.forEach(function (item1) {
                var temp = [];
                temp = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](item1.roleName);
                item.contactListArr.push(temp);
            });
        });
    };
    //代办及提醒
    CustomGroupQuery2Component.prototype.pendingScheduleGroupQry = function () {
        var _this = this;
        var params = {
            statusId: null
        };
        var successFnc = function (data) {
            _this.items = [];
            // 待办假数据
            if (data.scheduleList) {
                data.scheduleList.some(function (item) {
                    if (_this.items.length < 3) {
                        _this.items.push(item);
                    }
                });
            }
        };
        this.commfunc.interfaceComFnc(this.httpService.pendingScheduleGroupQry(params), successFnc, this.msgs);
    };
    //查看全部按钮
    CustomGroupQuery2Component.prototype.checkAll = function () {
        this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/backlog-check-detail/whole"]);
    };
    CustomGroupQuery2Component.prototype.doDeal = function (item) {
        this.commfunc.doDeal(item);
    };
    //按钮权限
    CustomGroupQuery2Component.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //分页
    CustomGroupQuery2Component.prototype.paginate1 = function (event) {
        //每页显示的条数
        this.pageSize1 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum1 = currentPage;
        this.first1 = (this.pageNum1 - 1) * this.pageSize1;
        //调用查询的方法
        this.tplSearch(3);
    };
    //分页
    CustomGroupQuery2Component.prototype.paginate2 = function (event) {
        // console.log(event)
        //每页显示的条数
        this.pageSize2 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum2 = currentPage;
        this.first2 = (this.pageNum2 - 1) * this.pageSize2;
        //调用查询的方法
        this.tplSearch(3);
    };
    CustomGroupQuery2Component.prototype.tabViewChange = function (event) {
        // console.log(event)
        // if (event.index == 1) {
        //   this.isMain = false;
        //   //调用查询的方法
        //   this.tplSearch(1);
        // } else {
        //   this.isMain = true;
        //   //调用查询的方法
        //   this.tplSearch(1);
        // }
        if (event == 2) { //辅管群
            this.isMain = false;
            this.tplSearch(1);
        }
        else { //主管群
            this.isMain = true;
            this.tplSearch(1);
        }
    };
    // 切换标签
    CustomGroupQuery2Component.prototype.allot = function (num) {
        if (num == '1' && this.permissionCheck('SID00002_P027_P001')) {
            this.show = num;
            this.tabViewChange(num);
        }
        else if (num == '1' && !this.permissionCheck('SID00002_P027_P001')) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无主管群操作权限！' }];
        }
        if (num == '2' && this.isN == true) {
            this.show = num;
            this.tabViewChange(num);
        }
        else if (num == '2' && this.isN == false) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无辅管群操作权限！' }];
        }
        this.queryTypeFlag = '1';
    };
    //高级筛选条件内容转换
    CustomGroupQuery2Component.prototype.searchInput = function () {
        // if (this.searchContent && this.searchContent.length != 0) {
        //   if (this.searchContent.indexOf('（') >= 0 || this.searchContent.indexOf('）') >= 0) {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入英文格式的括号' }];
        //     return false;
        //   }
        //   let arr = this.searchContent.split('');
        //   arr.forEach((element, i) => {
        //     if (element == '或') {
        //       arr[i] = 'or';
        //     }
        //     if (element == '和') {
        //       arr[i] = 'and';
        //     }
        //   });
        //   // searchContent = arr.join('');
        // }
    };
    //高级筛选条件格式模板
    CustomGroupQuery2Component.prototype.formatTemp = function () {
        this.formatTempDialog = true;
    };
    //模板码值
    CustomGroupQuery2Component.prototype.templeteChange = function (event, index, i, ind) {
        var _this = this;
        console.log(event);
        var arr = 'CusGroupAttrOpt' + index; //下一个下拉菜单的信息
        //清空已选择的值
        if (index == 2) {
            this.conditionList[i][ind]['fieldAttr'] = '';
            this.conditionList[i][ind]['field'] = '';
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        else if (index == 3) {
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        // console.log(this.conditionList);
        var taskTypeParentId;
        if (index == 4) {
            taskTypeParentId = index == '1' ? '' : event.value[0];
        }
        else {
            taskTypeParentId = index == '1' ? '' : event.value;
        }
        // if (index == 1) {
        //   this.CusGroupAttrOpt2 = [];
        //   this.CusGroupAttrOpt3 = [];
        // } else if (index == 2) {
        //   this.CusGroupAttrOpt3 = [];
        // }
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeParentId
        };
        console.log(this.conditionList);
        //初始化 给群状态默认
        // this.conditionList[0][0].fieldModule = "001";
        // this.templeteChange2();
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data)
                // console.log(data.taskTypeList);
                if (data.taskTypeList && data.taskTypeList.length != 0) {
                    if (index == 3) {
                        //三级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: [item.createrName, item.taskTypeLevel],
                            });
                        });
                        if (data.taskTypeList.length == 1) { //(三级唯一时默认选择)
                            _this.conditionList[i][ind]['field'] = [data.taskTypeList[0].createrName, data.taskTypeList[0].taskTypeLevel];
                            _this.templeteChange({ value: [data.taskTypeList[0].createrName, data.taskTypeList[0].taskTypeLevel] }, 4, i, ind);
                        }
                    }
                    else {
                        //二级 一级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: item.taskTypeId,
                            });
                        });
                    }
                }
                else {
                    //四级
                    switch (event.value[1]) {
                        case '0':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                        case '1':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'count';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '00':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'count';
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '01':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.groupType; //群类型
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '02':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.developmentLevel; //开发程度
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '03':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.productList; //主推产品
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '2':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '3':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '4':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-cust';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '5':
                            _this.conditionList[i][ind]['valueType'] = _this.InTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-org';
                            _this.conditionList[i][ind]['operator'] = 'in';
                            break;
                        case '04':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.GroupStatus; //群状态
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '05':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'time';
                            break;
                        default:
                            _this.conditionList[i][ind]['valueType'] = [];
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                    }
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //默认第一条数据为群状态,且为正常
    CustomGroupQuery2Component.prototype.templeteChange2 = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: '001'
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.conditionList[0][0]['CusGroupAttrOpt2'] = [{
                        label: '请选择', value: ''
                    }];
                data.taskTypeList.forEach(function (item) {
                    _this.conditionList[0][0]['CusGroupAttrOpt2'].push({
                        label: item.taskTypeName,
                        value: item.taskTypeId,
                    });
                });
                _this.conditionList[0][0].valueType = _this.CountTypeEqual;
                _this.conditionList[0][0].fieldAttr = '00120';
                _this.conditionList[0][0].operator = "=";
                _this.conditionList[0][0].special = 'code';
                _this.conditionList[0][0].specialType = _this.GroupStatus;
                _this.conditionList[0][0].value = '1';
                _this.conditionList[0][0].fieldModule = '001';
                var params2 = {
                    taskTypeKey: 'groupType',
                    taskTypeParentId: '00120'
                };
                _this.httpService.taskTypeQry(params2).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.conditionList[0][0]['CusGroupAttrOpt3'] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[0][0]['CusGroupAttrOpt3'].push({
                                label: item.taskTypeName,
                                value: [item.createrName, item.taskTypeId],
                            });
                        });
                        _this.conditionList[0][0].field = ['status_id', '0012001'];
                        //判断是否是初始化
                        if (_this.isFirst) {
                            _this.tplSearch(1);
                            _this.isFirst = false;
                        }
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.message ? data.returnCode.message : '查询失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    // ``````````````````````````````````````````````````````2222222222222222222222222222222222222222222222222
    //点击 或的加号(客户产品属性列表)
    CustomGroupQuery2Component.prototype.doAdd = function (name, is_html, i) {
        if (is_html == 'html-btn') {
            this.is_html = true;
        }
        // this.is_html = true;
        if (this.conditionList.length == 10) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '查询条件不能超过十个' }];
            return false;
        }
        //客户标签属性
        var conditionListMember = {
            fieldModule: '',
            fieldAttr: '',
            field: '',
            operator: '',
            value: '',
            approachesTo: '',
            fieldValues: '',
            isThird: false,
            CusGroupAttrOpt1: [],
            CusGroupAttrOpt2: [],
            CusGroupAttrOpt3: [],
        };
        //客户群组属性
        if (name == 'custGroupAttr') {
            var temp = this.copyObj(conditionListMember);
            this.conditionList.push([temp]);
        }
        this.templeteChange('', 1, this.conditionList.length - 1, 0);
        //判断不是 或的增加,而是初始化和重置
        if (i && i == 1 && !this.is_html) {
            this.templeteChange2();
        }
    };
    // 对象拷贝
    CustomGroupQuery2Component.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //点击 或的减号
    CustomGroupQuery2Component.prototype.doReduce = function (i, name) {
        //(客户群组列表)
        if (this.conditionList.length > 1) {
            if (name == 'custGroupAttr') {
                this.conditionList.splice(i, 1);
            }
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '必须存在一条查询条件！' }];
        }
    };
    //点击 且中的加号(客户产品属性列表)
    CustomGroupQuery2Component.prototype.doAndAdd = function (i, name) {
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            var conditionListMember = {
                fieldModule: '',
                fieldAttr: '',
                field: '',
                operator: '',
                value: '',
                approachesTo: '',
                fieldValues: '',
                isThird: false,
                CusGroupAttrOpt1: [],
                CusGroupAttrOpt2: [],
                CusGroupAttrOpt3: [],
            };
            var temp = this.copyObj(conditionListMember);
            this.conditionList[i].push(temp);
            this.templeteChange('', 1, i, this.conditionList[i].length - 1);
        }
    };
    //点击 且中的减号(客户产品属性列表)
    CustomGroupQuery2Component.prototype.doAndReduce = function (ind, name) {
        //客户群组属性
        if (name == 'custGroupAttr') {
            if (this.conditionList[ind].length == 1) {
                this.doReduce(ind, 'custGroupAttr');
                return;
            }
            this.conditionList[ind].splice(this.conditionList[ind].length - 1, 1);
        }
    };
    //日历的事件
    CustomGroupQuery2Component.prototype.checkChange = function (event, index) {
        this.queryTypeDisabled1 = true;
        this.queryTypeDisabled2 = true;
        if (index == '1' && this.selcetedValues1) {
            this.isMainHistory = true;
            this.queryTypeDisabled1 = false;
        }
        else {
            this.isMainHistory = false;
            this.queryTypeDisabled1 = true;
        }
        if (index == '2' && this.selcetedValues2) {
            this.notMainHistory = true;
            this.queryTypeDisabled2 = false;
        }
        else {
            this.notMainHistory = false;
            this.queryTypeDisabled2 = true;
        }
    };
    //搜索条件
    CustomGroupQuery2Component.prototype.searchCondition = function (index) {
        var _this = this;
        var list = [];
        if (index == 1 || index == 3) {
            if (this.conditionList) {
                this.conditionList.forEach(function (element, i) {
                    var arr = [];
                    var valueTemp;
                    if (element) {
                        element.forEach(function (element2, j) {
                            //创建日期的转换
                            if (element2.field[0] == 'create_time') {
                                if (typeof (element2.value) != 'string') {
                                    valueTemp = _this.commfunc.transDateN(element2.value);
                                }
                            }
                            else {
                                valueTemp = element2.value;
                            }
                            //群联系人
                            if (element2.field[0] == "group_of_contacts") {
                                valueTemp = "," + element2.value;
                            }
                            //条件为空,默认传空
                            if (element2.field == '') {
                                element2.field = [''];
                            }
                            arr.push({
                                field: element2.field[0],
                                operator: element2.operator,
                                value: valueTemp,
                            });
                        });
                    }
                    // console.log(arr);
                    if (arr.length > 0) {
                        list.push(arr);
                    }
                });
            }
        }
        if (list.length != 0) {
            var arrTemp_1 = [];
            list.forEach(function (element) {
                arrTemp_1.push(element);
            });
            list = arrTemp_1;
        }
        else {
            list = null;
        }
        return list;
    };
    //组合方式(搜索条件)
    CustomGroupQuery2Component.prototype.compoundMode = function (list) {
        var searchInput = '';
        if (this.searchContent == '') {
            if (list.length > 1) {
                list.forEach(function (element, i) {
                    if ((i + 1) != list.length) {
                        searchInput = searchInput + (i) + '且';
                    }
                    else {
                        searchInput = searchInput + (i);
                    }
                });
            }
            else {
                searchInput = '0';
            }
        }
        else {
            var searchContent = this.searchContent.replace(/10/g, '0');
            var arrTemp_2 = searchContent.split('');
            var reg_1 = /^[1-9]$/;
            arrTemp_2.forEach(function (element, i) {
                if (element == '0') {
                    arrTemp_2[i] = '9';
                }
                else {
                    if (reg_1.test(element)) {
                        arrTemp_2[i] = (parseInt(arrTemp_2[i]) - 1).toString();
                    }
                }
            });
            searchInput = arrTemp_2.join('');
        }
        return searchInput;
    };
    //高级筛选条件
    CustomGroupQuery2Component.prototype.check = function () {
        this.tplSearch(3);
    };
    //客户群列表信息 查询
    CustomGroupQuery2Component.prototype.tplSearch = function (index) {
        var _this = this;
        if (index == 1) { // 页面初始化
            //主管群
            this.pageNum1 = 1;
            this.pageSize1 = 10;
            this.first1 = 0;
            //辅管群
            this.pageNum2 = 1;
            this.pageSize2 = 10;
            this.first2 = 0;
        }
        var list = this.searchCondition(index); //搜索条件
        var searchInput = this.compoundMode(list); //组合方式
        //判断是否主管群
        var isAssist = null;
        var pageNum = this.pageNum1;
        var pageSize = this.pageSize1;
        var attr = 'groupList1';
        if (!this.isMain) {
            pageNum = this.pageNum2;
            pageSize = this.pageSize2;
            isAssist = true;
            attr = 'groupList2';
        }
        var dataDt; //查询历史记录
        if (this.isMain) {
            if (this.chooseMonthMain && this.isMainHistory) {
                dataDt = this.chooseMonthMain;
            }
            else {
                dataDt = undefined;
            }
        }
        else {
            if (this.chooseMonthNotMain && this.notMainHistory) {
                dataDt = this.chooseMonthNotMain;
            }
            else {
                dataDt = undefined;
            }
        }
        var sum; //汇总数据
        if (this.total == true) {
            sum = '1';
        }
        var queryTypeFlag;
        if (this.selcetedValues1 || this.selcetedValues2) {
            queryTypeFlag = this.queryTypeFlag;
        }
        var params = {
            pageNum: pageNum,
            pageSize: pageSize,
            conditionList: list,
            isAssist: isAssist,
            dataDt: dataDt,
            groupType: '0',
            advanceInput: searchInput,
            isCount: sum,
            queryTypeFlag: queryTypeFlag
        };
        this.downList = list;
        this.downisAssist = isAssist;
        this.downdataDt = dataDt;
        console.log(this.conditionList);
        this.httpService.queryCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this[attr] = data.resultList;
                if (!_this.isMain) {
                    _this.pageNum2 = data.pageNo;
                    _this.pageSize2 = data.pageSize;
                    _this.totalNum2 = data.totalNum;
                }
                else {
                    _this.pageNum1 = data.pageNo;
                    _this.pageSize1 = data.pageSize;
                    _this.totalNum1 = data.totalNum;
                }
                _this[attr].forEach(function (element, i) {
                    if (element.group_type == '') {
                        _this[attr][i].group_type = '';
                    }
                    else {
                        _this.groupType.forEach(function (element_2) {
                            if (element_2.value == element.group_type) {
                                _this[attr][i].group_type = element_2.label;
                            }
                        });
                    }
                    if (element.featured_products == '') {
                        _this[attr][i].featured_products = '';
                    }
                    else {
                        _this.productList.forEach(function (element_2) {
                            if (element_2.value == element.featured_products) {
                                _this[attr][i].featured_products = element_2.label;
                            }
                        });
                    }
                    if (element.dev_degree == '') {
                        _this[attr][i].dev_degree = '';
                    }
                    else {
                        _this.developmentLevel.forEach(function (element_2) {
                            if (element_2.value == element.dev_degree) {
                                _this[attr][i].dev_degree = element_2.label;
                            }
                        });
                    }
                    if (element.status_id == '') {
                        _this[attr][i].status_id = '';
                    }
                    else {
                        _this.GroupStatus.forEach(function (element_2) {
                            if (element_2.value == element.status_id) {
                                _this[attr][i].status_id = element_2.label;
                            }
                        });
                    }
                    if (element.create_time != null && element.create_time != '') { //创建日期
                        element.create_time = element.create_time.split(' ')[0];
                    }
                    if (element.status_id == '') {
                        _this[attr][i].status_id = '';
                    }
                    else {
                        _this.GroupStatus.forEach(function (element_2) {
                            if (element_2.value == element.status_id) {
                                _this[attr][i].status_id = element_2.label;
                            }
                        });
                    }
                });
                //汇总数据(拼接在列表最下一行)
                if (data.resultSumList && data.resultSumList.length != 0) {
                    _this[attr].push(data.resultSumList[0]);
                }
                _this.moneyList.forEach(function (element) {
                    if (_this[attr] && _this[attr].length != '') {
                        _this[attr].forEach(function (element2, i) {
                            for (var k in element2) {
                                if (element == k) {
                                    _this[attr][i][k] = _this.formatMoneyValuePie.transform(element2[k]);
                                }
                            }
                            if (!element2['group_id']) { //合计
                                element2['sumFlag'] = true;
                            }
                            else {
                                element2['sumFlag'] = false;
                            }
                        });
                    }
                });
                debugger;
                console.log(_this[attr]);
            }
            else {
                if (!data.errorMessage) {
                    _this.msgs = [];
                    data.returnCode.message ? data.returnCode.message : '查询失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '高级筛选条件格式输入错误' }];
                }
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //汇总数据
    CustomGroupQuery2Component.prototype.totalQuery = function () {
        // if (this.total) {
        this.tplSearch(3);
        // }
    };
    CustomGroupQuery2Component.prototype.download = function () {
        if (this.groupList1.length == 0 && this.groupList2.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前表格没有数据,无法下载!' }];
            return;
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        var this_id = this.extParam.postId;
        var flag = true;
        for (var _i = 0, _a = this.new_postId; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this_id == item.value) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            this.toDownload();
        }
        else {
            var lcbl = {
                lctybl: this.extParam.postId
            };
            this.waitSelUserList = this.commfunc.query('XZZXLC', lcbl);
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var chooseThis = this.waitSelUserList.display;
                var Header = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                var a2 = Header.extParam.specifyNextOpers;
                if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                    this.downloadPerson = true;
                }
                else {
                    this.toDownload();
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    CustomGroupQuery2Component.prototype.toDownload = function () {
        var _this = this;
        // console.log(this.headerList);
        this.titleList = [{ taskTypeName: '群编号', createrName: 'group_id' }];
        this.headerList.forEach(function (element) {
            var arr = {
                taskTypeName: element.taskTypeName,
                createrName: element.createrName
            };
            _this.titleList.push(arr);
        });
        var searchInput = this.compoundMode(this.downList); //组合方式
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: this.orgId,
            createdByUserLogin: this.userId,
            conditionList: this.downList,
            isAssist: this.downisAssist,
            dataDt: this.downdataDt,
            groupType: '0',
            advanceInput: searchInput,
            titleList: this.titleList
        };
        this.httpService.queryCustGroupInfoExportFile(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '下载提示', detail: "提交成功！" });
                _this.router.navigate(['pages/tzb/custom/downloadCenter/downCenter']);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '下载提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '下载提示', detail: "调用服务失败！" });
        });
    };
    CustomGroupQuery2Component.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    CustomGroupQuery2Component.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.toDownload();
    };
    CustomGroupQuery2Component.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //客户号回显
    CustomGroupQuery2Component.prototype.selectCustBriefInfo = function (custNo, attr, i) {
        var _this = this;
        var param = {
            custNo: custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data)
                // this.groupList1[i][attr] += data.tellerName;
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
    //查询人员姓名selectGroupMarketPlan
    CustomGroupQuery2Component.prototype.queryTellerById = function (id, attr_value, i, attr) {
        var _this = this;
        var params = {
            tellerId: id
        };
        var successFnc = function (data) {
            _this.groupList1[i][attr] = data.tellerName;
        };
        this.commfunc.interfaceComFnc(this.CommonHttpService.queryTellerById(params), successFnc, this.msgs);
    };
    //获取 展示模块
    CustomGroupQuery2Component.prototype.queryShowTemp = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: ''
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                if (data.taskTypeList && data.taskTypeList.length != 0) {
                    data.taskTypeList.forEach(function (element) {
                        var o = {
                            taskTypeName: element.taskTypeName,
                            taskTypeId: element.taskTypeId
                        };
                        _this.getShowTemp.push(o);
                    });
                    _this.getShowTemp.forEach(function (element, i) {
                        _this.querySecondCust(element.taskTypeId, i);
                    });
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //获取 二级字段
    CustomGroupQuery2Component.prototype.querySecondCust = function (taskTypeId, i) {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeId
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.getSecondCustList[i] = data.taskTypeList;
                var length_1 = 0;
                _this.getSecondCustList.forEach(function (element) {
                    if (typeof element == "object") {
                        length_1++;
                    }
                });
                if (length_1 == 2) {
                    _this.echo();
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //回显
    CustomGroupQuery2Component.prototype.echo = function () {
        var _this = this;
        // console.log(this.selectedHeaderList);
        var arrTemp = ['群编号']; //用于赋值
        var arr = [];
        this.getSecondCustList.forEach(function (element2) {
            element2.forEach(function (element3) {
                arr.push(element3);
                _this.headerList.forEach(function (element) {
                    if (element3.taskTypeId == element.taskTypeParentId) {
                        if (arrTemp.indexOf(element3.taskTypeName) == -1) {
                            arrTemp.push(element3.taskTypeName);
                        }
                    }
                });
            });
        });
        this.selectedHeaderList = arrTemp;
        if (this.selectedHeaderList.length == arr.length) {
            this.isAll = true;
        }
        else {
            this.isAll = false;
        }
    };
    //选择字段````````````````````````````````````````````````````````````````````````````
    CustomGroupQuery2Component.prototype.chooseParam = function () {
        this.chooseDisplay = true;
        this.getShowTemp = [];
        this.getSecondCustList = [];
        this.selectedHeaderList = ['群编号'];
        this.queryShowTemp();
    };
    //获取三级字段````````````````````````````````````````````````````````````````````````````
    CustomGroupQuery2Component.prototype.chooseParam2 = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            createrName: 'tables'
        };
        //获取表头数据可选字段
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //console.log(data);
                _this.getHeaderList = data.taskTypeList;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //用户列表登记
    CustomGroupQuery2Component.prototype.addUserListShow = function () {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var arr = [];
        var arr2 = [];
        var arrTemp = [];
        this.getSecondCustList.forEach(function (element) {
            element.forEach(function (element2) {
                arrTemp.push(element2);
            });
        });
        this.selectedHeaderList.forEach(function (element) {
            arrTemp.forEach(function (element_2) {
                if (element_2.taskTypeName == element) {
                    arr2.push(element_2);
                }
            });
        });
        arr2.forEach(function (element) {
            _this.getHeaderList.forEach(function (element_2) {
                if (element_2.taskTypeParentId == element.taskTypeId) {
                    arr.push(element_2);
                }
            });
        });
        if (arr.length > 50) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '所选字段不能多于50个' }];
            return false;
        }
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: orgID,
            createdByUserLogin: userId,
            exploreConditionObject: JSON.stringify(arr)
        };
        this.httpService.addUserListShow(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.attrListSearch();
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    // 表头字段-全选
    CustomGroupQuery2Component.prototype.checkAll2 = function () {
        if (this.isAll == true) {
            var arr_1 = [];
            this.getSecondCustList.forEach(function (element) {
                element.forEach(function (element2) {
                    arr_1.push(element2.taskTypeName);
                });
            });
            this.selectedHeaderList = arr_1;
        }
        else {
            this.selectedHeaderList = ['群编号'];
        }
    };
    //列表查询`````````````````````````````````````````````````````````````````````````````````````````````
    CustomGroupQuery2Component.prototype.attrListSearch = function () {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: orgID,
            createdByUserLogin: userId
        };
        this.httpService.selectUserListShow(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(this.getHeaderList);
                _this.moneyList = [];
                if (data.exploreConditionObject && data.exploreConditionObject != '') {
                    var eco = JSON.parse(data.exploreConditionObject);
                    eco = eco.filter(function (item) {
                        return item.createrName != 'group_id';
                    });
                    eco.forEach(function (element, i) {
                        if (element.updater == '1') {
                            _this.moneyList.push(element.createrName);
                        }
                        if (element.createrName == 'group_name' || element.createrName == 'address_message' || element.createrName == 'group_of_contacts' || element.createrName == 'group_of_evaluation' || element.createrName == 'org_id' || element.createrName == 'create_org_id') {
                            element.width = '250px';
                        }
                        else {
                            element.width = '120px';
                        }
                    });
                    _this.headerList = eco;
                    console.log(_this.headerList);
                    console.log(_this.moneyList);
                    // this.moneyList.forEach(element => {
                    //   if (this.groupList1 && this.groupList1.length != '') {
                    //     this.groupList1.forEach((element2, i) => {
                    //       for (let k in element2) {
                    //         if (element == k) {
                    //           this.groupList1[i][k] = this.formatMoneyValuePie.transform(element2[k]);
                    //         }
                    //       }
                    //     });
                    //   }
                    // });
                }
                else { //后台默认会存群编号(没有必要)
                    _this.headerList = [];
                    _this.getHeaderList.forEach(function (element) {
                        var arr = ["群名称", "群类型", "群地址", "客户名单总数", "有效客户数", "存款有效客户数", "存款余额", "贷款余额", "群主", "群联系人"];
                        arr.forEach(function (item) {
                            if (element.taskTypeName == item) {
                                _this.headerList.push(element);
                            }
                        });
                    });
                    _this.moneyList = ['存款余额', '贷款余额'];
                }
                // console.log(this.headerList)
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
        if (!this.isFirst) { //非初始化
            this.tplSearch(3);
        }
    };
    CustomGroupQuery2Component.prototype.saveTemplete = function () {
        this.templeteDisplay = true;
    };
    CustomGroupQuery2Component.prototype.saveTemplete2 = function () {
        var _this = this;
        if (this.expCondName == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '模板名称不能为空！' }];
            return false;
        }
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var params = {
            requestType: '3',
            statusId: '3',
            marketFlag: '0',
            requestMap: {
                custInfo: { custType: '3' },
                conditionList: this.conditionList,
                advanceInput: this.searchContent
            },
            expCondName: this.expCondName,
            orgName: chName.orgName,
            userName: chName.userName,
        };
        this.httpService.createExploreCondition(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.templeteList0 = data.
                // console.log(data);
                //重新模板名称
                _this.expCondName = '';
                //关闭模态框
                _this.templeteDisplay = false;
                //重查询模板
                _this.queryTargetCustomerExploreList(0);
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //模板列表查询
    CustomGroupQuery2Component.prototype.queryTargetCustomerExploreList = function (index) {
        var _this = this;
        var params = {
            requestType: '3',
            queryScene: index,
        };
        this.httpService.queryTargetCustomerExploreList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (index == 0) {
                    _this.templeteList0 = data.screenTemplateList;
                }
                else {
                    _this.templeteListDialog = data.screenTemplateList;
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //模板管理模态框
    CustomGroupQuery2Component.prototype.templeteManager = function () {
        // this.templeteManagerDisplay = true;
        // this.queryTargetCustomerExploreList(1);//模板列表
        this.searchManage2 = true;
    };
    //映射模板
    CustomGroupQuery2Component.prototype.mappedTemplete = function (col, isDialog) {
        var _this = this;
        if (isDialog == 2) {
            this.templeteManagerDisplay = false;
        }
        var expCondId = col.screenTemplateId ? col.screenTemplateId : '';
        var params = {
            requestType: '3',
            expCondId: expCondId,
        };
        //模板详情
        this.httpService.queryExploreConditionDetail(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.conditionList = data.requestMap.conditionList;
                _this.conditionList.forEach(function (element, i) {
                    if (element && element.length > 0) {
                        element.forEach(function (element_2, j) {
                            if (element_2.field[0] == "create_time") {
                                _this.conditionList[i][j]['value'] = new Date(_this.conditionList[i][j]['value']);
                            }
                        });
                    }
                });
                _this.searchContent = data.requestMap.advanceInput;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //模板删除
    CustomGroupQuery2Component.prototype.deleteTarget = function (e) {
        var _this = this;
        if (e.createUserId == this.userId) {
            this.confirmationService.confirm({
                message: '是否确认删除?',
                header: '删除',
                icon: 'fa fa-question-circle',
                accept: function () {
                    var param = { expCondId: e.screenTemplateId, requestType: '3' };
                    _this.httpService.deleteTargetCustomerExplore(param).subscribe(function (data) {
                        if (data.returnCode.code === "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '查询列表提示', detail: data.returnCode.message });
                            _this.queryTargetCustomerExploreList(0);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: '调用服务失败！' });
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '删除失败', detail: '不能删除他人模板' });
        }
    };
    //映射模板
    CustomGroupQuery2Component.prototype.delTemplete = function (col, isDialog) {
        var _this = this;
        if (isDialog == 2) {
            this.templeteManagerDisplay = false;
        }
        var params = {
            requestType: '3',
            expCondId: col.screenTemplateId,
        };
        //模板删除
        this.httpService.deleteTargetCustomerExplore(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.queryTargetCustomerExploreList(1); //模板列表
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //选人
    CustomGroupQuery2Component.prototype.selectUser = function (inputType, i, ind) {
        console.log('选人' + inputType);
        this.i = i;
        this.ind = ind;
        if (inputType == 'bank-cust') {
            this.staff_display02 = true;
        }
        else if (inputType == 'bank-teller') {
            // if (this.isN) {
            //   this.conditionList[this.i][this.ind]['label'] = this.chName.userName;
            //   this.conditionList[this.i][this.ind]['value'] = this.commonHeader.userId;
            // } else {
            //   this.staff_display03 = true;
            // }
            this.staff_display03 = true;
        }
        else {
            if (this.isN) {
                this.conditionList[this.i][this.ind]['label'] = this.chName.orgName;
                this.conditionList[this.i][this.ind]['value'] = this.commonHeader.orgId;
            }
            else {
                this.staff_display01 = true;
            }
        }
    };
    CustomGroupQuery2Component.prototype.changeRadioValue = function (event, index) {
        console.log(this.queryTypeFlag);
    };
    //模板查询重置
    CustomGroupQuery2Component.prototype.resetTemplete = function () {
        this.is_html = false;
        this.conditionList = [];
        this.searchContent = '';
        this.doAdd('custGroupAttr', 1, 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        // this.templeteChange('', 1, this.conditionList.length - 1, 0)
    };
    //0609
    //选人服务
    CustomGroupQuery2Component.prototype.returnInfoHide = function () {
        // this.staff_display01 = false;
        console.log('模态框关闭');
    };
    CustomGroupQuery2Component.prototype.returnInfo01 = function (data) {
        // console.log(data);
        this.staff_display01 = false;
        if (data.hasOwnProperty('orgName')) {
            this.conditionList[this.i][this.ind]['label'] = data.orgName;
            this.conditionList[this.i][this.ind]['value'] = data.orgId;
        }
        // this.inValue = _.clone(data);
    };
    CustomGroupQuery2Component.prototype.returnInfo02 = function (data) {
        // console.log(data);
        this.staff_display02 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].custName;
        this.conditionList[this.i][this.ind]['value'] = data[0].custNo;
        // this.inValue = _.clone(data);
    };
    CustomGroupQuery2Component.prototype.returnInfo03 = function (data) {
        // console.log(data);
        this.staff_display03 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].tellerName;
        this.conditionList[this.i][this.ind]['value'] = data[0].tellerId;
        // this.inValue = _.clone(data);
    };
    //模板管理模态框关闭
    CustomGroupQuery2Component.prototype.searchManage2Hide = function () {
        // console.log('关闭');
        this.queryTargetCustomerExploreList(0); //模板列表
    };
    CustomGroupQuery2Component.prototype.scrollHandler = function (event) {
        this.ddcomponent.forEach(function (element) {
            element.hide();
        });
        this.decomponent.forEach(function (element) {
            //console.log(element);
            element.datepickerClick = false;
            element.overlayVisible = false;
            element.inputfieldViewChild.nativeElement.blur();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('ddcomponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CustomGroupQuery2Component.prototype, "ddcomponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('decomponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CustomGroupQuery2Component.prototype, "decomponent", void 0);
    CustomGroupQuery2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-group-query2',
            template: __webpack_require__(/*! ./custom-group-query2.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.html"),
            styles: [__webpack_require__(/*! ./custom-group-query2.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_13__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], CustomGroupQuery2Component);
    return CustomGroupQuery2Component;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustomGroupQuery2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupQuery2Module", function() { return CustomGroupQuery2Module; });
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_group_query2_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-group-query2.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.routing.ts");
/* harmony import */ var _custom_group_query2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-group-query2.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/commonComponent/commonComponent.module */ "./src/app/pages/tzb/custom/commonComponent/commonComponent.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AddSearchManageComponent3 } from './add-search-manage3/add-search-manage3.component';


//客户群组
var CustomGroupQuery2Module = /** @class */ (function () {
    function CustomGroupQuery2Module() {
    }
    CustomGroupQuery2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _custom_group_query2_routing__WEBPACK_IMPORTED_MODULE_3__["CustomGroupQuery2Routing"],
                app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_6__["CommonComponentModule"]
            ],
            declarations: [
                _custom_group_query2_component__WEBPACK_IMPORTED_MODULE_4__["CustomGroupQuery2Component"],
            ],
            exports: [],
            providers: []
        })
    ], CustomGroupQuery2Module);
    return CustomGroupQuery2Module;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.routing.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.routing.ts ***!
  \**************************************************************************************************/
/*! exports provided: routes, CustomGroupQuery2Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupQuery2Routing", function() { return CustomGroupQuery2Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_group_custom_group_query2_custom_group_query2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-query2/custom-group-query2.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: app_pages_tzb_custom_custom_group_custom_group_query2_custom_group_query2_component__WEBPACK_IMPORTED_MODULE_1__["CustomGroupQuery2Component"] //创建
    }
];
var CustomGroupQuery2Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-group-query2-custom-group-query2-module.js.map