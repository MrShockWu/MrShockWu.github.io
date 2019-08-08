(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contract-temp-config-contract-temp-config-module"],{

/***/ "./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContractQueryBean, TempManageBeanActiveIndex0, TempManageBeanActiveIndex2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractQueryBean", function() { return ContractQueryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempManageBeanActiveIndex0", function() { return TempManageBeanActiveIndex0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempManageBeanActiveIndex2", function() { return TempManageBeanActiveIndex2; });
var ContractQueryBean = /** @class */ (function () {
    function ContractQueryBean() {
    }
    return ContractQueryBean;
}());

var TempManageBeanActiveIndex0 = /** @class */ (function () {
    function TempManageBeanActiveIndex0() {
        this.agreementTypeId = null;
        this.agreementTypePar = null;
        this.agreementName = null;
        this.agreementDate = null;
        this.fromDate = null;
        this.thruDate = null;
        this.description = null;
        this.signatureBank = null; //银行签章
        this.signatureCompany = null; //公司签章
        this.signaturePerson = null; //法人签章
        this.isApproval = null; //是否审批前合同
    }
    return TempManageBeanActiveIndex0;
}());

var TempManageBeanActiveIndex2 = /** @class */ (function () {
    function TempManageBeanActiveIndex2() {
        this.legalId = null; //合同模板应用的银行标识
        this.applyObject = null; //合同模板适用的对象标识
        this.payMode = null; //合同模板适用的支付类型
        this.isForeverContract = null; //合同模板适用的合同类型
        this.productType = ''; //产品类型
        this.agreementItemSeqId = '';
    }
    return TempManageBeanActiveIndex2;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts ***!
  \***************************************************************************/
/*! exports provided: ContractConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractConfigService", function() { return ContractConfigService; });
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

var ContractConfigService = /** @class */ (function () {
    function ContractConfigService() {
        this.basicInfoDatas = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.applicationInfoDatas = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transferData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.preview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContractConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContractConfigService);
    return ContractConfigService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'合同模板列表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-4\">\r\n      <label class=\"ui-g-4\">协议大类：</label>\r\n      <div class=\"ui-g-6\">\r\n        <p-dropdown [options]=\"agreementTypeParList\" [(ngModel)]=\"queryBean.agreementTypePar\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label class=\"ui-g-4\">协议状态：</label>\r\n      <div class=\"ui-g-6\">\r\n        <p-dropdown [options]=\"agrStatusId\" [(ngModel)]=\"queryBean.statusId\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label class=\"ui-g-4\">协议名称：</label>\r\n      <div class=\"ui-g-6\">\r\n        <input pInputText [(ngModel)]=\"queryBean.agreementName\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-4\">\r\n      <label class=\"ui-g-4\">查询开始日期：</label>\r\n      <div class=\"ui-g-6\">\r\n        <p-calendar [(ngModel)]=\"queryBean.fromDate\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\" [readonlyInput]=\"true\" yearRange=\"1949:2099\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label class=\"ui-g-4\">查询结束日期：</label>\r\n      <div class=\"ui-g-6\">\r\n        <p-calendar [(ngModel)]=\"queryBean.thruDate\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\" [readonlyInput]=\"true\" yearRange=\"1949:2099\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"查询\" class=\"query\" (click)=\"queryClick()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" class=\"reset\" (click)=\"reset()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 addBtn\">\r\n    <button pButton type=\"button\" label=\"+新增模板\" class=\"reset\" (click)=\"add()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 table\">\r\n    <p-dataTable [value]=\"queryList\" emptyMessage=\"暂无记录\" scrollable=\"true\">\r\n      <p-column field=\"agreementId\" header=\"协议编号\"></p-column>\r\n      <p-column field=\"agreementTypeId\" header=\"协议类型\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.agreementTypeId | codeValuePie: agreementTypeIdList}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"agreementTypePar\" header=\"协议大类\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.agreementTypePar | codeValuePie: agreementTypeParList}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"agreementName\" header=\"协议名称\">\r\n      </p-column>\r\n      <p-column field=\"statusId\" header=\"协议状态\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.statusId | codeValuePie: agrStatusId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"agreementDate\" header=\"创建日期\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.agreementDate | date:'yyyy-MM-dd'}}</span>\r\n        </ng-template>\r\n\r\n      </p-column>\r\n      <p-column field=\"fromDate\" header=\"协议生效日期\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.fromDate | date:'yyyy-MM-dd h:m:s'}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"thruDate\" header=\"协议失效日期\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.thruDate | date:'yyyy-MM-dd h:m:s'}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"description\" header=\"描述\"> </p-column>\r\n      <p-column field=\"\" header=\"操作\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tabelPreviewIco\" (click)=\"preview(col)\">预览</span>\r\n          <span class=\"tabelDetailIco\" (click)=\"detail(col)\">详情</span>\r\n          <span class=\"tabelUpdateIco\" (click)=\"update(col)\">修改</span>\r\n          <span class=\"tabelDeleteIco\" (click)=\"delete(col)\">删除</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n\r\n    <!-- 分页 -->\r\n    <p-paginator [first]=\"first\" rows=\"{{queryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n  <!-- 提示信息 -->\r\n  <p-growl [value]=\"msgs\"></p-growl>\r\n<p-dialog header=\"合同模板在线预览\" *ngIf=\"previewDisplay\" [(visible)]=\"previewDisplay\" modal=\"true\">\r\n  <app-preview [inValue]=\"URLDATA\" ></app-preview>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n  .btn button {\n    margin: 30px; }\n  .addBtn {\n  text-align: right; }\n  label {\n  text-align: right; }\n  .table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNvbnRyYWN0LXRlbXAtY29uZmlnXFxjb250cmFjdC10ZW1wLWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsWUFBWSxFQUFBO0VBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy9jb250cmFjdC10ZW1wLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi5hZGRCdG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContractTempConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTempConfigComponent", function() { return ContractTempConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/contract-temp-config.bean */ "./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContractTempConfigComponent = /** @class */ (function () {
    function ContractTempConfigComponent(commfunc, contractService, router) {
        this.commfunc = commfunc;
        this.contractService = contractService;
        this.router = router;
        this.first = 0;
        // 日期格式化
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.queryBean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_2__["ContractQueryBean"]();
        // 提示信息
        this.msgs = [];
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        this.agreementTypeIdList = codeValues['agreementTypeIdList']; //协议类型
        this.agreementTypeParList = codeValues['agreementTypeParList'];
        this.agrStatusId = codeValues['agrStatusId'];
    }
    ContractTempConfigComponent.prototype.ngOnInit = function () {
        this.queryBean.pageNum = 1;
        this.queryBean.pageSize = 10;
        this.query();
    };
    //查询
    ContractTempConfigComponent.prototype.query = function () {
        var _this = this;
        this.queryBean.fromDate = this.queryBean.fromDate ? new Date(this.queryBean.fromDate).toISOString().slice(0, 10) : this.queryBean.fromDate;
        this.queryBean.thruDate = this.queryBean.thruDate ? new Date(this.queryBean.thruDate).toISOString().slice(0, 10) : this.queryBean.thruDate;
        this.contractService.queryAgreementInfo(this.queryBean).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.queryList = _this.manipulation(res.infoList);
                _this.total = res.total;
            }
            else {
                _this.queryList = [];
                _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
            }
        });
    };
    //处理查询数据
    ContractTempConfigComponent.prototype.manipulation = function (data) {
        var objList = [];
        var dataList = data ? JSON.parse(JSON.stringify(data)) : [];
        dataList.forEach(function (item, i) {
            if (i - 1 > -1 && dataList[i].agreementId == dataList[i - 1].agreementId) {
                objList[objList.length - 1].productList.push({ productNo: item.productId, productName: '' });
            }
            else {
                item['productList'] = [{ productNo: item.productId, productName: '' }];
                objList.push(item);
            }
        });
        return objList;
    };
    ContractTempConfigComponent.prototype.queryClick = function () {
        this.first = 0;
        this.queryBean.pageNum = 1;
        this.query();
    };
    //新建模板
    ContractTempConfigComponent.prototype.add = function () {
        this.navigate();
    };
    //预览
    ContractTempConfigComponent.prototype.preview = function (col) {
        if (col.addendumText && col.fileName) {
            this.previewDisplay = true;
            // let name = col.fileName.replace(/.docx|.doc/g, '.html');
            // let url = `?fileName=${name}&fileUrl=${col.addendumText}`;
            this.URLDATA = col;
        }
        else {
            this.msgs = [{ severity: 'error', summary: '', detail: '文件路径不存在' }];
        }
    };
    //详情
    ContractTempConfigComponent.prototype.detail = function (col) {
        col['detailFlag'] = true;
        this.navigate(col);
    };
    //修改
    ContractTempConfigComponent.prototype.update = function (col) {
        this.navigate(col);
    };
    //删除
    ContractTempConfigComponent.prototype.delete = function (col) {
        var _this = this;
        var param = {
            agreementId: col.agreementId,
            statusId: '2'
        };
        this.contractService.submitAgreementInfo(param).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.query();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
            }
        });
    };
    ContractTempConfigComponent.prototype.navigate = function (data) {
        if (data) {
            data.agreementDate = data.agreementDate ? this.commfunc.transDateN(data.agreementDate) : data.agreementDate;
            data.fromDate = data.fromDate ? this.commfunc.transDateN(data.fromDate) : data.fromDate;
            data.thruDate = data.thruDate ? this.commfunc.transDateN(data.thruDate) : data.thruDate;
            this.router.navigate(['/pages/tzb/custom/contract-temp/tempManage', { data: JSON.stringify(data) }]);
        }
        else {
            this.router.navigate(['/pages/tzb/custom/contract-temp/tempManage']);
        }
    };
    //重置
    ContractTempConfigComponent.prototype.reset = function () {
        this.queryBean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_2__["ContractQueryBean"]();
        this.queryBean.pageNum = 1;
        this.queryBean.pageSize = 10;
    };
    //分页
    ContractTempConfigComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryBean.pageSize = event.rows;
        //当前页
        this.queryBean.pageNum = event.page + 1;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.query();
    };
    ContractTempConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contract-temp-config',
            template: __webpack_require__(/*! ./contract-temp-config.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.html"),
            styles: [__webpack_require__(/*! ./contract-temp-config.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ContractTempConfigComponent);
    return ContractTempConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ContractTempConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTempConfigModule", function() { return ContractTempConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contract_temp_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contract-temp-config.component */ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.ts");
/* harmony import */ var _contract_temp_config_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-temp-config.routing */ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.routing.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _temp_manage_temp_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temp-manage/temp-manage.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var _temp_manage_basic_infor_basic_infor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./temp-manage/basic-infor/basic-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.ts");
/* harmony import */ var _temp_manage_application_infor_application_infor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./temp-manage/application-infor/application-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.ts");
/* harmony import */ var _temp_manage_content_infor_content_infor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./temp-manage/content-infor/content-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.ts");
/* harmony import */ var _enirety_temp_enirety_temp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enirety-temp/enirety-temp.component */ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.ts");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contract-service */ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { BrowserModule } from '@angular/platform-browser';
// import {PdfViewerModule} from 'ng2-pdf-viewer';
var ContractTempConfigModule = /** @class */ (function () {
    function ContractTempConfigModule() {
    }
    ContractTempConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _contract_temp_config_routing__WEBPACK_IMPORTED_MODULE_3__["ContractTempConfigRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"],
            ],
            declarations: [
                _contract_temp_config_component__WEBPACK_IMPORTED_MODULE_2__["ContractTempConfigComponent"],
                _temp_manage_temp_manage_component__WEBPACK_IMPORTED_MODULE_6__["TempManageComponent"],
                _temp_manage_basic_infor_basic_infor_component__WEBPACK_IMPORTED_MODULE_8__["BasicInforComponent"],
                _temp_manage_application_infor_application_infor_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationInforComponent"],
                _temp_manage_content_infor_content_infor_component__WEBPACK_IMPORTED_MODULE_10__["ContentInforComponent"],
                _enirety_temp_enirety_temp_component__WEBPACK_IMPORTED_MODULE_11__["EniretyTempComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_14__["PreviewComponent"]
            ],
            providers: [
                _http_contract_http_service__WEBPACK_IMPORTED_MODULE_7__["ContractService"],
                _contract_service__WEBPACK_IMPORTED_MODULE_12__["ContractConfigService"]
            ]
        })
    ], ContractTempConfigModule);
    return ContractTempConfigModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.routing.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.routing.ts ***!
  \***************************************************************************************/
/*! exports provided: routes, ContractTempConfigRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTempConfigRouting", function() { return ContractTempConfigRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contract_temp_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract-temp-config.component */ "./src/app/pages/tzb/custom/contract-temp-config/contract-temp-config.component.ts");
/* harmony import */ var _temp_manage_temp_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temp-manage/temp-manage.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.ts");
/* harmony import */ var _enirety_temp_enirety_temp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enirety-temp/enirety-temp.component */ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.ts");




var routes = [
    {
        path: '',
        component: _contract_temp_config_component__WEBPACK_IMPORTED_MODULE_1__["ContractTempConfigComponent"],
        children: []
    },
    { path: 'tempManage', component: _temp_manage_temp_manage_component__WEBPACK_IMPORTED_MODULE_2__["TempManageComponent"] },
    { path: 'entirety', component: _enirety_temp_enirety_temp_component__WEBPACK_IMPORTED_MODULE_3__["EniretyTempComponent"] }
];
var ContractTempConfigRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'合同模板配置'\"></header-title>\r\n  <div class=\"ui-g-12\" id=\"uig12\">\r\n    <div id=\"shadow\"></div>\r\n    <div class=\"ui-g-6\">\r\n      <basic-infor></basic-infor>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <application-infor></application-infor>\r\n    </div>\r\n    <div class=\"ui-g-12\" id=\"uig6\">\r\n      <app-preview></app-preview>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" *ngIf=\"!detailFlag\"  (click)=\"submit()\" label=\"提交\"></button>\r\n    <button pButton type=\"button\" (click)=\"cancel()\" label=\"取消\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n  .btn button {\n    margin: 30px; }\n  #uig12 {\n  position: relative; }\n  #uig12 #shadow {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy9lbmlyZXR5LXRlbXAvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjb250cmFjdC10ZW1wLWNvbmZpZ1xcZW5pcmV0eS10ZW1wXFxlbmlyZXR5LXRlbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLFlBQVksRUFBQTtFQUdwQjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY29udHJhY3QtdGVtcC1jb25maWcvZW5pcmV0eS10ZW1wL2VuaXJldHktdGVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbiN1aWcxMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICNzaGFkb3d7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EniretyTempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EniretyTempComponent", function() { return EniretyTempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract-service */ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EniretyTempComponent = /** @class */ (function () {
    function EniretyTempComponent(router, routerInfo, contractService, contractConfigService) {
        var _this = this;
        this.router = router;
        this.routerInfo = routerInfo;
        this.contractService = contractService;
        this.contractConfigService = contractConfigService;
        // 提示信息
        this.msgs = [];
        var data = JSON.parse(this.routerInfo.snapshot.params.data);
        if (data.basicInfo.detailFlag) {
            this.detailFlag = true;
        }
        this.agreementId = data.applicationInfo.agreementId;
        setTimeout(function () {
            _this.contractConfigService.basicInfoDatas.emit(data);
            _this.contractConfigService.applicationInfoDatas.emit(data);
            _this.contractConfigService.preview.emit(data);
        });
    }
    EniretyTempComponent.prototype.ngOnInit = function () {
        var dom = document.getElementById('uig12');
        document.getElementById('shadow').style.height = dom.offsetHeight + "px";
    };
    /**
     * @param
     * 0 保存，1 提交，2 删除
     */
    EniretyTempComponent.prototype.submit = function () {
        var _this = this;
        var param = {
            statusId: '1',
            agreementId: this.agreementId
        };
        this.contractService.submitAgreementInfo(param).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.router.navigate(['/pages/tzb/custom/contract-temp']);
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
            }
        });
    };
    EniretyTempComponent.prototype.cancel = function () {
        this.router.navigate(['/pages/tzb/custom/contract-temp']);
    };
    EniretyTempComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enirety-temp',
            template: __webpack_require__(/*! ./enirety-temp.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.html"),
            styles: [__webpack_require__(/*! ./enirety-temp.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/enirety-temp/enirety-temp.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractConfigService"]])
    ], EniretyTempComponent);
    return EniretyTempComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.constant.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.constant.ts ***!
  \**************************************************************************************/
/*! exports provided: CONTRACT_HTTP_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTRACT_HTTP_API", function() { return CONTRACT_HTTP_API; });
var CONTRACT_HTTP_API = {
    queryAgreementInfo: 'queryAgreementInfo',
    creditAgreementInfo: 'creditAgreementInfo',
    creditAgreementItemAndAddendumInfo: 'creditAgreementItemAndAddendumInfo',
    creditAgreementTemplateInfo: 'creditAgreementTemplateInfo',
    submitAgreementInfo: 'submitAgreementInfo',
    updateAgreementInfo: 'updateAgreementInfo',
    creditContractPreviewInfo: 'creditContractPreviewInfo' //获取预览数据
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract.http.constant */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractService = /** @class */ (function () {
    function ContractService(httpService) {
        this.httpService = httpService;
    }
    ContractService.prototype.queryAgreementInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].queryAgreementInfo, params);
    };
    ContractService.prototype.creditAgreementInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].creditAgreementInfo, params);
    };
    ContractService.prototype.creditAgreementItemAndAddendumInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].creditAgreementItemAndAddendumInfo, params);
    };
    ContractService.prototype.creditAgreementTemplateInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].creditAgreementTemplateInfo, params);
    };
    ContractService.prototype.submitAgreementInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].submitAgreementInfo, params);
    };
    ContractService.prototype.updateAgreementInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].updateAgreementInfo, params);
    };
    ContractService.prototype.creditContractPreviewInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _contract_http_constant__WEBPACK_IMPORTED_MODULE_3__["CONTRACT_HTTP_API"].creditContractPreviewInfo, params);
    };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'合同模板信息预览'\"></header-title>\r\n    <div class=\"ui-g-12\" id=\"contentss\">\r\n        <div id=\"box\">\r\n            <p *ngIf=\"contractflag\">暂无相关合同信息</p>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\"  (click)=\"print()\" label=\"打印\"></button>\r\n    </div> -->\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentss {\n  max-height: 711px;\n  overflow: auto;\n  background: gray; }\n  #contentss #box {\n    width: 832px;\n    padding: 97px;\n    background: white;\n    margin: 0 auto; }\n  #contentss #box > div {\n    margin: 0 !important; }\n  #contentss table {\n    margin: 0 auto !important; }\n  #contentss p {\n    margin-top: 16px;\n    text-align: center; }\n  .btn {\n  text-align: center;\n  margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy9wcmV2aWV3L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY29udHJhY3QtdGVtcC1jb25maWdcXHByZXZpZXdcXHByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUVkLGdCQUFnQixFQUFBO0VBSnBCO0lBTVEsWUFBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBVHRCO0lBWVEsb0JBQW9CLEVBQUE7RUFaNUI7SUFlUSx5QkFBeUIsRUFBQTtFQWZqQztJQWtCUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFHMUI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHNzIHtcclxuICAgIG1heC1oZWlnaHQ6IDcxMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgI2JveHtcclxuICAgICAgICB3aWR0aDo4MzJweDtcclxuICAgICAgICBwYWRkaW5nOiA5N3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgI2JveD5kaXZ7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.ts ***!
  \************************************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract-service */ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TZB_CONTRACT_DOWNLOAD } from 'app/@uisftech/common/service/http.constant';

var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(domSanitizer, contractService, contractConfigService) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.contractService = contractService;
        this.contractConfigService = contractConfigService;
        // previewUrl: string = TZB_CONTRACT_DOWNLOAD
        // 提示信息
        this.msgs = [];
        this.contractflag = true;
        this.count = 0; //计数
        this.contractConfigService.preview.subscribe(function (res) {
            var data = res.fileList;
            _this.count++;
            if (_this.count > 1)
                return; //会出现多次订阅的现象，计数>1次禁止调用
            _this.preview(data.fileName, data.filePath);
        });
    }
    PreviewComponent.prototype.ngOnInit = function () {
        if (this.inValue) {
            this.preview(this.inValue.fileName, this.inValue.addendumText);
        }
    };
    PreviewComponent.prototype.preview = function (name, path) {
        var _this = this;
        var param = {
            fileName: name,
            filePath: path
        };
        this.contractService.creditContractPreviewInfo(param).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.contractflag = false;
                var dom = document.getElementById('box');
                var styled = document.createElement('style');
                styled.innerHTML = 'span{line-height:27px} table{margin:0 auto}';
                var objdom = document.createElement('div');
                objdom.innerHTML = res.flag == 'doc' ? res.htmlInfo : res.htmlInfo.replace('style=\"width:595.0pt;', '"');
                objdom.appendChild(styled);
                dom.appendChild(objdom);
            }
            else {
                _this.contractflag = true;
                _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
            }
        });
    };
    PreviewComponent.prototype.print = function () {
        document.body.innerHTML = document.getElementById('box').innerHTML;
        window.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "inValue", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/preview/preview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractConfigService"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"'合同模板应用信息'\"></header-title>\r\n  <div class=\"ui-g-12 content\" id=\"content\">\r\n    <div class=\"ui-g-12\" *ngIf=\"!detailFlag\">\r\n      <label class=\"\">合同模板应用的产品信息：</label>\r\n      <button pButton type=\"button\"  (click)=\"choosePro()\" label=\"请选择\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"productList\" emptyMessage=\"暂无记录\" scrollable=\"true\">\r\n          <p-column field=\"\" header=\"序号\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"productNo\" header=\"产品编号\"></p-column>\r\n          <p-column field=\"productName\" header=\"产品名称\"></p-column>\r\n          <p-column field=\"\" header=\"操作\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span class=\"tabelDeleteIco\" *ngIf=\"!detailFlag\" (click)=\"deletepro(i)\">删除</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <div class=\"ui-g-12 info\" [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12 \">\r\n          <label appValidation class=\"ui-g-4 uig4\">合同模板应用的银行标识：</label>\r\n          <div class=\"ui-g-8 uig7\">\r\n            <p-dropdown [options]=\"legalIdList\" [disabled]=\"detailFlag\" [(ngModel)]=\"activeIndex2Bean.legalId\" formControlName=\"legalId\"></p-dropdown>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['legalId'].valid&&userform.controls['legalId'].dirty\">\r\n              <p [hidden]=\"!userform.hasError('required','legalId')\"> 不能为空！</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n          <label appValidation class=\"ui-g-4 uig4\">合同模板适用的对象标识：</label>\r\n          <div class=\"ui-g-8 uig7\">\r\n            <p-dropdown [options]=\"applyObjectList\" [disabled]=\"detailFlag\" [(ngModel)]=\"activeIndex2Bean.applyObject\" formControlName=\"applyObject\"></p-dropdown>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['applyObject'].valid&&userform.controls['applyObject'].dirty\">\r\n              <p [hidden]=\"!userform.hasError('required','applyObject')\"> 不能为空！</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n          <label appValidation class=\"ui-g-4 uig4\">合同模板适用的支付类型：</label>\r\n          <div class=\"ui-g-8 uig7\">\r\n            <p-dropdown [options]=\"payModeList\" [disabled]=\"detailFlag\" [(ngModel)]=\"activeIndex2Bean.payMode\" formControlName=\"payMode\"></p-dropdown>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['payMode'].valid&&userform.controls['payMode'].dirty\">\r\n              <p [hidden]=\"!userform.hasError('required','payMode')\"> 不能为空！</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n          <label appValidation class=\"ui-g-4 uig4\">合同模板适用的合同类型：</label>\r\n          <div class=\"ui-g-8 uig7\">\r\n            <p-dropdown [options]=\"isForeverContractList\" [disabled]=\"detailFlag\" [(ngModel)]=\"activeIndex2Bean.isForeverContract\" formControlName=\"isForeverContract\"></p-dropdown>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['isForeverContract'].valid&&userform.controls['isForeverContract'].dirty\">\r\n              <p [hidden]=\"!userform.hasError('required','isForeverContract')\"> 不能为空！</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 提示信息 -->\r\n  <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n  <p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" modal=\"true\">\r\n    <select-product-component [isCatelog]=\"true\" (outValue)=\"productCall($event)\"></select-product-component>\r\n  </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n.uig4 {\n  min-width: 185px;\n  text-align: right; }\n\n.uig7 {\n  text-align: left;\n  width: 52.66%; }\n\n.content {\n  padding: 0 26%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy90ZW1wLW1hbmFnZS9hcHBsaWNhdGlvbi1pbmZvci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNvbnRyYWN0LXRlbXAtY29uZmlnXFx0ZW1wLW1hbmFnZVxcYXBwbGljYXRpb24taW5mb3JcXGFwcGxpY2F0aW9uLWluZm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy90ZW1wLW1hbmFnZS9hcHBsaWNhdGlvbi1pbmZvci9hcHBsaWNhdGlvbi1pbmZvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udWlnNHtcclxuICAgIC8vIHdpZHRoOjIzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxODVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59ICAgXHJcbi51aWc3e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA1Mi42NiU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwIDI2JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ApplicationInforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationInforComponent", function() { return ApplicationInforComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bean/contract-temp-config.bean */ "./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contract-service */ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicationInforComponent = /** @class */ (function () {
    function ApplicationInforComponent(fb, commfunc, contractService, contractConfigService) {
        var _this = this;
        this.fb = fb;
        this.commfunc = commfunc;
        this.contractService = contractService;
        this.contractConfigService = contractConfigService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 日期格式化
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.productList = []; //产品列表
        this.activeIndex2Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_4__["TempManageBeanActiveIndex2"]();
        // 提示信息
        this.msgs = [];
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        this.legalIdList = codeValues['legalIdList']; //合同模板应用的银行标识
        this.applyObjectList = codeValues['applyObjectList']; //合同模板适用的对象标识
        this.payModeList = codeValues['payModeList']; //合同模板适用的支付类型
        this.isForeverContractList = codeValues['isForeverContractList']; //合同模板适用的合同类型
        //进入提交页面时获取数据
        this.contractConfigService.applicationInfoDatas.subscribe(function (res) {
            _this.activeIndex2Bean = res.applicationInfo;
            _this.productList = res.productList;
            if (res.detailFlag) {
                _this.detailFlag = true;
            }
            // this.contractConfigService.applicationInfoDatas.unsubscribe();
        });
    }
    ApplicationInforComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dom = document.getElementById('content');
        if (dom.offsetWidth < 1000) {
            dom.style.padding = '0';
        }
        this.userform = this.fb.group({
            "legalId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            "applyObject": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            "payMode": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            "isForeverContract": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
        if (this.updateData) {
            this.activeIndex2Bean = this.updateData;
            this.productList = this.updateData.productList;
            if (this.updateData.detailFlag) {
                this.detailFlag = true;
            }
        }
        setTimeout(function () {
            _this.productList = _this.productList.length > 0 ? _this.productList : [];
        }, 500);
        // this.updateData.
    };
    //选择产品
    ApplicationInforComponent.prototype.choosePro = function () {
        this.selectProductDisplay = true;
    };
    //选择产品回调
    ApplicationInforComponent.prototype.productCall = function (event) {
        this.selectProductDisplay = false;
        var list = JSON.parse(JSON.stringify(this.productList));
        list.push({ productNo: event[0].productId, productName: event[0].productName });
        this.productList = list;
    };
    //删除产品
    ApplicationInforComponent.prototype.deletepro = function (i) {
        var list = JSON.parse(JSON.stringify(this.productList));
        list.splice(i, 1);
        this.productList = list;
    };
    ApplicationInforComponent.prototype.save = function () {
        var _this = this;
        if (this.updateData && this.updateData.detailFlag) {
            this.outValue.emit({ flag: true, data: this.activeIndex2Bean, productList: this.productList });
        }
        else {
            if (this.productList.length > 0) {
                var list_1 = [];
                this.productList.forEach(function (item) {
                    list_1.push(item.productNo);
                });
                this.activeIndex2Bean.productType = list_1.join(',');
            }
            else {
                this.msgs = [{ severity: 'error', summary: '', detail: '请选择产品' }];
                return;
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
            this.activeIndex2Bean.agreementItemSeqId = this.inValue.agreementItemSeqId;
            this.activeIndex2Bean.agreementId = this.inValue.agreementId;
            var param = JSON.parse(JSON.stringify(this.activeIndex2Bean));
            this.contractService.creditAgreementTemplateInfo(param).subscribe(function (res) {
                if (res.returnCode.code == 'success') {
                    _this.outValue.emit({ flag: true, data: _this.activeIndex2Bean, productList: _this.productList });
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
                }
            });
        }
    };
    ApplicationInforComponent.prototype.reset = function () {
        this.activeIndex2Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_4__["TempManageBeanActiveIndex2"]();
        this.productList = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicationInforComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicationInforComponent.prototype, "updateData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApplicationInforComponent.prototype, "outValue", void 0);
    ApplicationInforComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'application-infor',
            template: __webpack_require__(/*! ./application-infor.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.html"),
            styles: [__webpack_require__(/*! ./application-infor.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractConfigService"]])
    ], ApplicationInforComponent);
    return ApplicationInforComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'合同模板基本信息'\"></header-title>\r\n    <form id=\"contents\" [formGroup]=\"userform\">\r\n      <div class=\"ui-g-12\">\r\n        <label appValidation  class=\"ui-g-3 uig4\">协议类型：</label>\r\n        <div class=\"ui-g-8\">\r\n          <p-dropdown [options]=\"agreementTypeIdList\"  [disabled]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.agreementTypeId\" formControlName=\"agreementTypeId\"></p-dropdown>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['agreementTypeId'].valid&&userform.controls['agreementTypeId'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','agreementTypeId')\"> 不能为空！</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label appValidation class=\"ui-g-3 uig4\">协议大类：</label>\r\n        <div class=\"ui-g-8\">\r\n          <p-dropdown [options]=\"agreementTypeParList\" [disabled]=\"detailFlag\" (onChange)=\"agreementTypeParChange(activeIndex0Bean.agreementTypePar)\" [(ngModel)]=\"activeIndex0Bean.agreementTypePar\"\r\n            formControlName=\"agreementTypePar\"></p-dropdown>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['agreementTypePar'].valid&&userform.controls['agreementTypePar'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','agreementTypePar')\"> 不能为空！</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label appValidation class=\"ui-g-3 uig4\">协议名称：</label>\r\n        <div class=\"ui-g-8\">\r\n          <input type=\"text\" pInputText [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.agreementName\" formControlName=\"agreementName\">\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['agreementName'].valid&&userform.controls['agreementName'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','agreementName')\">不能为空！</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <label appValidation class=\"ui-g-3 uig4\">创建日期：</label>\r\n        <div class=\"ui-g-8\">\r\n          <p-calendar [(ngModel)]=\"activeIndex0Bean.agreementDate\" [disabled]=\"detailFlag\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\" [readonlyInput]=\"true\" yearRange=\"1949:2099\" [locale]=\"ch\" formControlName=\"agreementDate\"></p-calendar>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['agreementDate'].valid&&userform.controls['agreementDate'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','agreementDate')\">不能为空！</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label appValidation class=\"ui-g-3 uig4\">生效日期：</label>\r\n        <div class=\"ui-g-8\">\r\n          <p-calendar [(ngModel)]=\"activeIndex0Bean.fromDate\" [disabled]=\"detailFlag\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\" [readonlyInput]=\"true\" yearRange=\"1949:2099\" [locale]=\"ch\" formControlName=\"fromDate\"></p-calendar>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['fromDate'].valid&&userform.controls['fromDate'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','fromDate')\">不能为空！</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label appValidation class=\"ui-g-3 uig4\">失效时间：</label>\r\n        <div class=\"ui-g-8\">\r\n          <p-calendar [(ngModel)]=\"activeIndex0Bean.thruDate\" [disabled]=\"detailFlag\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\" [readonlyInput]=\"true\" yearRange=\"1949:2099\" [locale]=\"ch\" formControlName=\"thruDate\"></p-calendar>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['thruDate'].valid&&userform.controls['thruDate'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','thruDate')\">不能为空！</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label class=\"ui-g-3 uig4\">业务场景说明:</label>\r\n        <div class=\"ui-g-8\">\r\n          <textarea pInputTextarea [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.description\" formControlName=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label  class=\"ui-g-3 uig4\">客户签章：</label>\r\n        <div class=\"ui-g-8\">\r\n          <input type=\"text\" pInputText [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.signaturePerson\" formControlName=\"signaturePerson\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label  class=\"ui-g-3 uig4\">银行签章：</label>\r\n        <div class=\"ui-g-8\">\r\n          <input type=\"text\" pInputText [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.signatureBank\" formControlName=\"signatureBank\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <label  class=\"ui-g-3 uig4\">企业签章：</label>\r\n        <div class=\"ui-g-8\">\r\n          <input type=\"text\" pInputText [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.signatureCompany\" formControlName=\"signatureCompany\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n          <label  class=\"ui-g-3 uig4\">是否审批前合同：</label>\r\n          <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"isApprovalOptions\"  [readonly]=\"detailFlag\" [(ngModel)]=\"activeIndex0Bean.isApproval\" formControlName=\"isApproval\"></p-dropdown>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <!-- 提示信息 -->\r\n  <p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contents {\n  padding: 0 20% 0 10%; }\n\n.uig4 {\n  text-align: right; }\n\n.uig7 {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy90ZW1wLW1hbmFnZS9iYXNpYy1pbmZvci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNvbnRyYWN0LXRlbXAtY29uZmlnXFx0ZW1wLW1hbmFnZVxcYmFzaWMtaW5mb3JcXGJhc2ljLWluZm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NvbnRyYWN0LXRlbXAtY29uZmlnL3RlbXAtbWFuYWdlL2Jhc2ljLWluZm9yL2Jhc2ljLWluZm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRze1xyXG4gICAgcGFkZGluZzowIDIwJSAwIDEwJTtcclxufVxyXG4udWlnNHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59ICBcclxuLnVpZzd7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbn0gXHJcbi8vIGlucHV0LHRleHRhcmVhe1xyXG4vLyAgICAgd2lkdGg6NTQlO1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvLnVpLWRyb3Bkb3due1xyXG4vLyAgICAgd2lkdGg6IDU0JSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvLnVpLWNhbGVuZGFye1xyXG4vLyAgICAgd2lkdGg6IDU0JSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BasicInforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInforComponent", function() { return BasicInforComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bean/contract-temp-config.bean */ "./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contract-service */ "./src/app/pages/tzb/custom/contract-temp-config/contract-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BasicInforComponent = /** @class */ (function () {
    function BasicInforComponent(fb, commfunc, contractService, contractConfigService) {
        var _this = this;
        this.fb = fb;
        this.commfunc = commfunc;
        this.contractService = contractService;
        this.contractConfigService = contractConfigService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeIndex0Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_1__["TempManageBeanActiveIndex0"]();
        this.isApprovalOptions = [
            { label: '', value: '' }, { label: '是', value: '1' }, { label: '否', value: '0' }
        ];
        // 日期格式化
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        // 提示信息
        this.msgs = [];
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        this.agreementTypeIdList = codeValues['agreementTypeIdList']; //协议类型
        this.agreementTypeParList = codeValues['agreementTypeParList']; //协议大类
        this.userform = this.fb.group({
            "agreementTypeId": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            "agreementTypePar": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            "agreementName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            "agreementDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            "fromDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            "thruDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'signaturePerson': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'signatureCompany': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'signatureBank': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'isApproval': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        // this.activeIndex0Bean.agreementTypePar = 'WJMB';
        //进入提交页面时获取数据
        this.contractConfigService.basicInfoDatas.subscribe(function (res) {
            _this.activeIndex0Bean = res.basicInfo;
            // this.contractConfigService.basicInfoDatas.unsubscribe();
        });
    }
    BasicInforComponent.prototype.ngOnInit = function () {
        var dom = document.getElementById('contents');
        if (dom.offsetWidth < 1000) {
            dom.style.padding = '0';
        }
        if (this.updateData) {
            this.activeIndex0Bean = this.updateData;
            if (this.updateData.detailFlag) {
                this.detailFlag = true;
            }
        }
    };
    //模板大类
    BasicInforComponent.prototype.agreementTypeParChange = function (item) {
        // this.tempType = item;
    };
    BasicInforComponent.prototype.save = function () {
        var _this = this;
        if (this.updateData && this.updateData.detailFlag) {
            //详情
            this.outValue.emit({ flag: true, data: this.updateData });
        }
        else {
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
            debugger;
            if (this.activeIndex0Bean.agreementDate) {
                var date = new Date(this.activeIndex0Bean.agreementDate);
                this.activeIndex0Bean.agreementDate = this.commfunc.transDateN(date);
            }
            if (this.activeIndex0Bean.fromDate) {
                var date = new Date(this.activeIndex0Bean.fromDate);
                this.activeIndex0Bean.fromDate = this.commfunc.transDateN(date) + ' ' + date.toTimeString().slice(0, 8);
            }
            if (this.activeIndex0Bean.thruDate) {
                var date = new Date(this.activeIndex0Bean.thruDate);
                this.activeIndex0Bean.thruDate = this.commfunc.transDateN(date) + ' ' + date.toTimeString().slice(0, 8);
            }
            var param = JSON.parse(JSON.stringify(this.activeIndex0Bean));
            if (this.activeIndex0Bean && this.activeIndex0Bean.agreementId) {
                //修改
                this.contractService.submitAgreementInfo(param).subscribe(function (res) {
                    if (res.returnCode.code == 'success') {
                        _this.outValue.emit({ flag: true, data: _this.activeIndex0Bean });
                    }
                    else {
                        _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
                    }
                });
            }
            else {
                //新增
                this.contractService.creditAgreementInfo(param).subscribe(function (res) {
                    if (res.returnCode.code == 'success') {
                        _this.activeIndex0Bean.agreementId = res.agreementId;
                        _this.outValue.emit({ flag: true, data: _this.activeIndex0Bean });
                    }
                    else {
                        _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
                    }
                });
            }
        }
    };
    BasicInforComponent.prototype.reset = function () {
        this.activeIndex0Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_1__["TempManageBeanActiveIndex0"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BasicInforComponent.prototype, "updateData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BasicInforComponent.prototype, "outValue", void 0);
    BasicInforComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-infor',
            template: __webpack_require__(/*! ./basic-infor.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.html"),
            styles: [__webpack_require__(/*! ./basic-infor.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_6__["ContractConfigService"]])
    ], BasicInforComponent);
    return BasicInforComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"'合同模板配置'\"></header-title>\r\n  <div class=\"fileupload ui-g-12\" *ngIf=\"tempType != 'ZDYMD';else custom\">\r\n    <label class=\"ui-g-2\">合同模板内容配置：</label>\r\n    <div class=\"ui-g-10\">\r\n      <p-fileUpload accept=\".doc,.docx\" [disabled]=\"detailFlag\" chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n        url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n      </p-fileUpload>\r\n      <div class=\"ui-g-12 files\" *ngIf=\"files.length>0\">\r\n        <p *ngFor=\"let item of files\">{{item.name}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #custom>\r\n    <div class=\"custom\">\r\n      <label class=\"ui-g-2\">自定义模板：</label>\r\n      <p class=\"ui-g-12\" style=\"text-align:center;line-height:20px;\">暂不支持该功能</p>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".files {\n  margin-top: -30px;\n  font-size: 15px; }\n\nlabel {\n  text-align: right;\n  line-height: 38px; }\n\n:host/deep/.ui-fileupload .ui-fileupload-buttonbar.ui-widget-header.ui-corner-top {\n  background: #fff !important; }\n\n:host/deep/.ui-fileupload-files .ng-star-inserted {\n  margin-left: -53px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy90ZW1wLW1hbmFnZS9jb250ZW50LWluZm9yL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY29udHJhY3QtdGVtcC1jb25maWdcXHRlbXAtbWFuYWdlXFxjb250ZW50LWluZm9yXFxjb250ZW50LWluZm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NvbnRyYWN0LXRlbXAtY29uZmlnL3RlbXAtbWFuYWdlL2NvbnRlbnQtaW5mb3IvY29udGVudC1pbmZvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udWktZmlsZXVwbG9hZCAudWktZmlsZXVwbG9hZC1idXR0b25iYXIudWktd2lkZ2V0LWhlYWRlci51aS1jb3JuZXItdG9wIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLy51aS1maWxldXBsb2FkLWZpbGVzIC5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01M3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ContentInforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentInforComponent", function() { return ContentInforComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentInforComponent = /** @class */ (function () {
    function ContentInforComponent(contractService, commfunc) {
        this.contractService = contractService;
        this.commfunc = commfunc;
        this.files = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CONTRACT_UPLOAD"];
        // 提示信息
        this.msgs = [];
    }
    ContentInforComponent.prototype.ngOnInit = function () {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var path = "Customer/ContractTempConfig/" + this.commfunc.transDate(new Date()) + "/" + commonHeader['userId'];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CONTRACT_UPLOAD"] + "?path=" + path;
        this.tempType = this.inValue.tempType;
        if (this.updateData) {
            this.agreementItemSeqId = this.updateData.agreementItemSeqId;
            this.files = [{ name: this.updateData.fileName }];
            if (this.updateData) {
                this.updateData.detailFlag ? this.detailFlag = true : this.detailFlag = false;
                this.fileList = {
                    fileName: this.updateData.fileName,
                    filePath: this.updateData.addendumText
                };
            }
        }
    };
    //上传
    ContentInforComponent.prototype.load = function (event) {
        var _this = this;
        this.files.push(event.files[0]);
        var fileReponse = event.xhr.response;
        if (fileReponse.hasOwnProperty('errorMsg')) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: fileReponse.errorMsg }];
        }
        var param = {
            agreementId: this.inValue.agreementId,
            agreementItemSeqId: this.agreementItemSeqId ? this.agreementItemSeqId : '',
            addendumEffectiveDate: this.inValue.fromDate,
            fileName: JSON.parse(event.xhr.response)[0].fileName,
            filePath: JSON.parse(event.xhr.response)[0].filePath
        };
        this.fileList = {
            fileName: JSON.parse(event.xhr.response)[0].fileName,
            filePath: JSON.parse(event.xhr.response)[0].filePath
        };
        this.contractService.creditAgreementItemAndAddendumInfo(param).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.agreementItemSeqId = res.agreementItemSeqId;
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '', detail: res.returnCode.message }];
            }
        });
    };
    ContentInforComponent.prototype.save = function () {
        if (this.updateData && this.updateData.detailFlag) {
            this.outValue.emit({ flag: true, fileList: this.fileList });
        }
        else {
            if (this.agreementItemSeqId) {
                this.outValue.emit({ flag: true, agreementItemSeqId: this.agreementItemSeqId, fileList: this.fileList, files: this.files });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentInforComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentInforComponent.prototype, "updateData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContentInforComponent.prototype, "outValue", void 0);
    ContentInforComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-infor',
            template: __webpack_require__(/*! ./content-infor.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.html"),
            styles: [__webpack_require__(/*! ./content-infor.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_contract_http_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ContentInforComponent);
    return ContentInforComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <!-- 文件模板信息-标题 -->\r\n\r\n    <div class=\"ui-g-12 line-name\">\r\n      <div class=\"title\">\r\n        <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 title-name\" *ngIf=\"activeIndex == 0\">\r\n      <basic-infor #basicInfo [updateData]=\"updateDatas\" (outValue)=\"basicInfoCall($event)\"></basic-infor>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 title-name\" *ngIf=\"activeIndex == 1\">\r\n      <content-infor #contentInfo [updateData]=\"updateDatas\" [inValue]=\"infoData\" (outValue)=\"contentInfoCall($event)\"></content-infor>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 title-name\" *ngIf=\"activeIndex == 2\">\r\n      <application-infor #applicationInfo [updateData]=\"updateDatas\" [inValue]=\"infoData\" (outValue)=\"applicationInfoCall($event)\"></application-infor>\r\n    </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\" *ngIf=\"activeIndex!=0\"></button>\r\n    <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\"></button>\r\n    <button pButton type=\"button\" (click)=\"cancel()\" label=\"取消\"></button>\r\n    <button pButton [disabled]=\"detailFlag\" type=\"button\" (click)=\"rest()\" label=\"重置\"></button>\r\n  </div>\r\n</div>\r\n  <!-- 提示信息 -->\r\n  <p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center; }\n\n.line-name {\n  border-bottom: 3px solid #e9e4e4; }\n\n:host/deep/ .ui-steps .ui-steps-item .ui-menuitem-link {\n  background: #fff !important;\n  width: 236px;\n  margin: 0 auto;\n  text-align: center; }\n\n:host/deep/.ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title {\n  vertical-align: middle; }\n\n:host/deep/.ui-steps-item.ng-star-inserted {\n  float: none;\n  display: inline-block !important;\n  text-align: center;\n  width: 23%; }\n\n:host/deep/.ui-widget.ui-helper-clearfix.ui-steps-readonly:before {\n  content: ' ';\n  border: 1px solid #dddddd;\n  width: 46%;\n  top: 45%;\n  left: 25%;\n  display: block;\n  position: absolute; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jb250cmFjdC10ZW1wLWNvbmZpZy90ZW1wLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNvbnRyYWN0LXRlbXAtY29uZmlnXFx0ZW1wLW1hbmFnZVxcdGVtcC1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSwyQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NvbnRyYWN0LXRlbXAtY29uZmlnL3RlbXAtbWFuYWdlL3RlbXAtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgLy8gd2lkdGg6IDYwJTtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saW5lLW5hbWUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlOWU0ZTQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzIC51aS1zdGVwcy1pdGVtIC51aS1tZW51aXRlbS1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIzNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gICAgIFxyXG46aG9zdC9kZWVwLy51aS1zdGVwcyAudWktc3RlcHMtaXRlbSAudWktbWVudWl0ZW0tbGluayAudWktc3RlcHMtdGl0bGV7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbjpob3N0L2RlZXAvLnVpLXN0ZXBzLWl0ZW0ubmctc3Rhci1pbnNlcnRlZHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjMlO1xyXG59XHJcbjpob3N0L2RlZXAvLnVpLXdpZGdldC51aS1oZWxwZXItY2xlYXJmaXgudWktc3RlcHMtcmVhZG9ubHk6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TempManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempManageComponent", function() { return TempManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/contract-temp-config.bean */ "./src/app/pages/tzb/custom/contract-temp-config/bean/contract-temp-config.bean.ts");
/* harmony import */ var _http_contract_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/contract.http.service */ "./src/app/pages/tzb/custom/contract-temp-config/http/contract.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_infor_basic_infor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-infor/basic-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/basic-infor/basic-infor.component.ts");
/* harmony import */ var _application_infor_application_infor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application-infor/application-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/application-infor/application-infor.component.ts");
/* harmony import */ var _content_infor_content_infor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-infor/content-infor.component */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/content-infor/content-infor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TempManageComponent = /** @class */ (function () {
    function TempManageComponent(fb, commfunc, routerInfo, contractService, router) {
        var _this = this;
        this.fb = fb;
        this.commfunc = commfunc;
        this.routerInfo = routerInfo;
        this.contractService = contractService;
        this.router = router;
        this.activeIndex0Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_3__["TempManageBeanActiveIndex0"]();
        this.activeIndex2Bean = new _bean_contract_temp_config_bean__WEBPACK_IMPORTED_MODULE_3__["TempManageBeanActiveIndex2"]();
        this.items = [];
        // 提示信息
        this.msgs = [];
        this.items = [
            {
                label: '合同模板基本信息配置',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '合同模板内容信息',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: '合同模板的应用配置',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
        ];
    }
    TempManageComponent.prototype.ngOnInit = function () {
        this.activeIndex = 0;
        //修改、详情数据回传作回显
        if (this.routerInfo.snapshot.params.data) {
            var data = JSON.parse(this.routerInfo.snapshot.params.data);
            data['legalId'] = data['partyId'];
            data['applyObject'] = data['objectId'];
            this.updateDatas = data;
            this.updateDatas.detailFlag ? this.detailFlag = true : this.detailFlag = false;
        }
    };
    //上一步
    TempManageComponent.prototype.prev = function () {
        this.activeIndex > 0 ? this.activeIndex -= 1 : this.activeIndex;
        switch (this.activeIndex) {
            case 0:
                this.updateDatas = this.activeIndex0Bean;
                break;
            case 1:
                this.updateDatas = this.fileList;
                break;
        }
    };
    //基础信息回调
    TempManageComponent.prototype.basicInfoCall = function (res) {
        this.activeIndex0Bean = res.data;
        this.infoData = {
            agreementId: this.activeIndex0Bean.agreementId,
            fromDate: this.activeIndex0Bean.fromDate,
            tempType: this.activeIndex0Bean.agreementTypePar
        };
        this.nextStep(res.flag);
    };
    //内容回调
    TempManageComponent.prototype.contentInfoCall = function (res) {
        this.infoData['agreementItemSeqId'] = res.agreementItemSeqId;
        this.fileList = res.fileList;
        this.nextStep(res.flag);
    };
    //应用回调
    TempManageComponent.prototype.applicationInfoCall = function (res) {
        this.activeIndex2Bean = res.data;
        this.productList = res.productList;
        this.nextStep(res.flag);
    };
    //跳转下一页
    TempManageComponent.prototype.nextStep = function (res) {
        if (res) {
            this.activeIndex += 1;
            if (this.activeIndex > 2) {
                var param = {
                    basicInfo: this.activeIndex0Bean,
                    applicationInfo: this.activeIndex2Bean,
                    productList: this.productList,
                    fileList: this.fileList,
                    detailFlag: this.detailFlag
                };
                this.router.navigate(['/pages/tzb/custom/contract-temp/entirety', { data: JSON.stringify(param) }]);
            }
        }
    };
    //下一步
    TempManageComponent.prototype.next = function () {
        switch (this.activeIndex) {
            case 0:
                this.basicInfo.save();
                break;
            case 1:
                this.contentInfo.save();
                break;
            case 2:
                this.applicationInfo.save();
                break;
        }
    };
    //取消
    TempManageComponent.prototype.cancel = function () {
        this.router.navigate(['/pages/tzb/custom/contract-temp']);
    };
    //重置
    TempManageComponent.prototype.rest = function () {
        switch (this.activeIndex) {
            case 0:
                this.basicInfo.reset();
                break;
            case 2:
                this.applicationInfo.reset();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('basicInfo'),
        __metadata("design:type", _basic_infor_basic_infor_component__WEBPACK_IMPORTED_MODULE_6__["BasicInforComponent"])
    ], TempManageComponent.prototype, "basicInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('applicationInfo'),
        __metadata("design:type", _application_infor_application_infor_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationInforComponent"])
    ], TempManageComponent.prototype, "applicationInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentInfo'),
        __metadata("design:type", _content_infor_content_infor_component__WEBPACK_IMPORTED_MODULE_8__["ContentInforComponent"])
    ], TempManageComponent.prototype, "contentInfo", void 0);
    TempManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temp-manage',
            template: __webpack_require__(/*! ./temp-manage.component.html */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.html"),
            styles: [__webpack_require__(/*! ./temp-manage.component.scss */ "./src/app/pages/tzb/custom/contract-temp-config/temp-manage/temp-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _http_contract_http_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TempManageComponent);
    return TempManageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contract-temp-config-contract-temp-config-module.js.map