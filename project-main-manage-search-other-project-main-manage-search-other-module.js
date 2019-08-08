(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-main-manage-search-other-project-main-manage-search-other-module"],{

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 input-part\">\r\n    <div class=\"ui-g-12 header-text\">合作项目类型</div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">合作项目类型编号：</div>\r\n            <div class=\"ui-g-4\">{{DetailList.coopProjectTypeId}}</div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">合作项目类型名称：</div>\r\n            <div class=\"ui-g-4\">{{DetailList.coopProjectTypeName}}</div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">合作类型：</div>\r\n            <div class=\"ui-g-4\">{{DetailList.coopPartnerType|codeValuePie:coopPartnerType}}</div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">流程编号：</div>\r\n            <div class=\"ui-g-4\">{{DetailList.processId}}</div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\">是否需可行性方案：</div><div class=\"ui-g-4\">{{DetailList.needPlan|codeValuePie:needPlan}}</div></div>\r\n        <div class=\"ui-g-4\"> <div class=\"ui-g-8 tit\">可行性方案是否需要审批：</div><div class=\"ui-g-4\">{{DetailList.planNeedApprove|codeValuePie:planNeedApprove}}</div>\r\n        </div><div class=\"ui-g-4\"><div class=\"ui-g-8 tit\">项目协议是否需要审批：</div><div class=\"ui-g-4\">{{DetailList.projectBodyNeedApprove|codeValuePie:projectBodyNeedApprove}}</div></div>\r\n        <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\">是否有额度：</div><div class=\"ui-g-4\">{{DetailList.projectBodyHaveLimit|codeValuePie:projectBodyHaveLimit}}</div></div>\r\n        <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\">建群控制：</div><div class=\"ui-g-4\">{{DetailList.buildCrowdConfig|codeValuePie:buildCrowdConfig}}</div></div> -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-newtit ui-g-newtit-t\">合作项目类型描述:</div>\r\n            <div class=\"ui-g-newtext ui-g-newtext-t\">{{DetailList.coopProjectTypeDesc}}</div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-newtit-t ui-g-newtit\">业务要素组合:</div>\r\n            <div class=\"ui-g-newtext-t ui-g-newtext\">{{DetailList.elementGroupId}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"ui-g-12 main-part table\">\r\n    <p-dataTable [value]=\"upData\" [scrollable]=\"true\">\r\n        <p-column *ngFor=\"let list of tableHead\" header=\"{{list.label}}\" field=\"{{list.value}}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-tdData=\"rowData\" *ngIf=\"list.value=='elementGroupFlag'\">\r\n                {{tdData.elementGroupFlag|codeValuePie:elementGroupFlag}}\r\n                <!-- {{tdData.elementGroupFlag|codeValuePie:elementGroupFlag}} -->\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-tdData=\"rowData\" *ngIf=\"list.value=='multipleFlag'\">\r\n                {{tdData.multipleFlag|codeValuePie:multipleFlag}}\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-tdData=\"rowData\" *ngIf=\"list.value=='mustInput'\">\r\n                {{tdData.mustInput|codeValuePie:mustInput}}\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-tdData=\"rowData\" *ngIf=\"list.value=='elementType'\">\r\n                {{tdData.elementType|codeValuePie:elementType}}\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n    <!-- <p-paginator [first]=\"first\" rows=\"{{coopProjectTypeListQueryBean.pageSize}}\" pageLinkSize=\"3\" totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-part {\n  background: #fff; }\n  .header-part .tit {\n    text-align: right;\n    line-height: 22px; }\n  .main-part {\n  margin-top: 3px;\n  background: #fff; }\n  .main-part .iscolor {\n    background: #ffc900;\n    float: right; }\n  .input-part {\n  border-bottom: 3px solid #f3f3f4;\n  min-height: 200px;\n  color: #818181; }\n  .input-part .header-text {\n    height: 30px;\n    line-height: 30px; }\n  .input-part .tit {\n    color: #000; }\n  .table {\n  text-align: center; }\n  .btn {\n  text-align: center; }\n  :host /deep/ .ui-dialog .ui-g-1,\n:host /deep/ .ui-dialog .ui-g-2,\n:host /deep/ .ui-dialog .ui-g-3,\n:host /deep/ .ui-dialog .ui-g-4,\n:host /deep/ .ui-dialog .ui-g-5,\n:host /deep/ .ui-dialog .ui-g-6,\n:host /deep/ .ui-dialog .ui-g-7,\n:host /deep/ .ui-dialog .ui-g-8,\n:host /deep/ .ui-dialog .ui-g-9,\n:host /deep/ .ui-dialog .ui-g-10,\n:host /deep/ .ui-dialog .ui-g-11,\n:host /deep/ .ui-dialog .ui-g-12 {\n  padding: 0.2em 0.2em; }\n  :host /deep/ .ui-dialog .ui-g-newtit {\n  width: 22.5%;\n  text-align: right;\n  float: left;\n  padding: 0.1em 0.5em;\n  color: #000; }\n  :host /deep/ .ui-dialog .ui-g-newtit.ui-g-newtit-t {\n    width: 22.1%; }\n  :host /deep/ .ui-dialog .ui-g-newtext {\n  width: 77.5%;\n  float: left; }\n  :host /deep/ .ui-dialog .ui-g-newtext.ui-g-newtext-t {\n    width: 77%; }\n  :host /deep/ .ui-dialog .tit {\n  text-align: right; }\n  :host /deep/ .ui-dialog textarea {\n  resize: none; }\n  @media screen and (max-width: 1280px) {\n  * {\n    font-size: 12px !important; } }\n  .table {\n  max-height: 500px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2Utc2VhcmNoLW90aGVyL25ldy1tb2RpZmljYXRpb24tZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21DZW50ZXJcXHByb2plY3QtbWFpbi1tYW5hZ2VcXHByb2plY3QtbWFpbi1tYW5hZ2Utc2VhcmNoLW90aGVyXFxuZXctbW9kaWZpY2F0aW9uLWRldGFpbHNcXG5ldy1tb2RpZmljYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQUlwQjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0VBSGxCO0lBS1EsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBTnpCO0lBU1EsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0Qjs7Ozs7Ozs7Ozs7O0VBYVEsb0JBQW9CLEVBQUE7RUFiNUI7RUFnQlEsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVcsRUFBQTtFQXBCbkI7SUFzQlksWUFBWSxFQUFBO0VBdEJ4QjtFQTBCUSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBM0JuQjtJQTZCWSxVQUFTLEVBQUE7RUE3QnJCO0VBaUNRLGlCQUFpQixFQUFBO0VBakN6QjtFQW9DUSxZQUFZLEVBQUE7RUFHcEI7RUFDQTtJQUNJLDBCQUF5QixFQUFBLEVBQzVCO0VBRUQ7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tQ2VudGVyL3Byb2plY3QtbWFpbi1tYW5hZ2UvcHJvamVjdC1tYWluLW1hbmFnZS1zZWFyY2gtb3RoZXIvbmV3LW1vZGlmaWNhdGlvbi1kZXRhaWxzL25ldy1tb2RpZmljYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGFydCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLXBhcnQge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC5pc2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LXBhcnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmM2YzZjQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgLmhlYWRlci10ZXh0IHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0IHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZGlhbG9nIHtcclxuICAgIC51aS1nLTEsXHJcbiAgICAudWktZy0yLFxyXG4gICAgLnVpLWctMyxcclxuICAgIC51aS1nLTQsXHJcbiAgICAudWktZy01LFxyXG4gICAgLnVpLWctNixcclxuICAgIC51aS1nLTcsXHJcbiAgICAudWktZy04LFxyXG4gICAgLnVpLWctOSxcclxuICAgIC51aS1nLTEwLFxyXG4gICAgLnVpLWctMTEsXHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC4yZW07XHJcbiAgICB9XHJcbiAgICAudWktZy1uZXd0aXQge1xyXG4gICAgICAgIHdpZHRoOiAyMi41JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAmLnVpLWctbmV3dGl0LXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjIuMSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLWctbmV3dGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDc3LjUlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICYudWktZy1uZXd0ZXh0LXQge1xyXG4gICAgICAgICAgICB3aWR0aDo3NyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbip7XHJcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuLnRhYmxle1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: NewModificationDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewModificationDetails", function() { return NewModificationDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/project-main-manage-search-other.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/bean/project-main-manage-search-other.bean.ts");
/* harmony import */ var _http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewModificationDetails = /** @class */ (function () {
    function NewModificationDetails(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.first = 0;
        this.coopProjectTypeListQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeListQueryBean"]; //合作项目类型列表查询
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"](); //合作项目类型新增、修改、删除
        this.coopProjectTypeDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeDetailQueryBean"](); //合作项目类型详情查询
        this.display = false;
        this.dialogHead = '新增';
        this.groupId = '';
        this.detailsDisplay = false;
        this.tableData = [];
        this.upData = [];
        this.tableHead = [
            {
                label: '序号',
                value: 'seqNum'
            },
            {
                label: '要素名称',
                value: 'enementCnName'
            },
            {
                label: '是否为组件',
                value: 'elementGroupFlag'
            },
            {
                label: '允许多条',
                value: 'multipleFlag'
            },
            {
                label: '要素标识',
                value: 'elementEnName'
            },
            {
                label: '是否必输',
                value: 'mustInput'
            },
            // {
            //     label: '要素字段类型',
            //     value: 'elementType'
            // },
            // {
            //     label: '要素精度',
            //     value: 'elementPrecision'
            // },
            // {
            //     label: '要素检查服务名',
            //     value: 'frontElementCheckServe'
            // },
            // {
            //     label: '最小值',
            //     value: 'minValue'
            // },
            // {
            //     label: '最大值',
            //     value: 'maxValue'
            // },
            // {
            //     label: '缺省值',
            //     value: 'defValue'
            // },
            {
                label: '列表值选项',
                value: 'listElement'
            },
        ];
        //详情
        this.DetailList = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.projectElementGroupDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["ProjectElementGroupDetailQueryBean"]();
    }
    NewModificationDetails.prototype.ngOnInit = function () {
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.pageSize = 10;
        this.codeValues();
        //列表项取值
        this.coopPartnerType = this.code['coopPartnerType'];
        this.releProtocolType = this.code['releProtocolType'];
        this.elementType = this.code['elementType'];
        this.elementGroupFlag = this.code['elementGroupFlag'];
        this.multipleFlag = this.code['multipleFlag'];
        this.mustInput = this.code['mustInput'];
        //修改
        if (this.msgss) {
            this.detail(this.msgss);
        }
    };
    //修改数据
    NewModificationDetails.prototype.updataList = function (data) {
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.coopProjectTypeSetBean.operateType = '2';
        this.coopProjectTypeSetBean.coopPartnerType = data['coopPartnerType'];
        this.coopProjectTypeSetBean.coopProjectTypeDesc = data['coopProjectTypeDesc'];
        this.coopProjectTypeSetBean.coopProjectTypeName = data['coopProjectTypeName'];
        this.coopProjectTypeSetBean.elementGroupId = data['elementGroupId'];
        this.coopProjectTypeSetBean.releProtocolType = data['releProtocolType'];
        this.groupId = data['elementGroupId'];
        this.coopProjectTypeSetBean.processId = data['processId'];
    };
    //接收组件传值
    NewModificationDetails.prototype.close = function (e) {
        this.coopProjectTypeSetBean.elementGroupId = e;
    };
    //获取详情信息
    //获取详情信息
    NewModificationDetails.prototype.detail = function (msg) {
        var _this = this;
        console.log(msg);
        this.coopProjectTypeDetailQueryBean.coopProjectTypeId = msg['coopProjectTypeId'];
        // this.coopProjectTypeDetailQueryBean.processId = msg['processId'];
        this.httpService.coopProjectTypeDetailQuery(this.coopProjectTypeDetailQueryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                console.log(data);
                _this.DetailList = data;
                _this.DetailList = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](_this.DetailList);
                _this.getEleList(data);
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //获取元素列表
    NewModificationDetails.prototype.getEleList = function (data) {
        var _this = this;
        this.projectElementGroupDetailQueryBean.elementGroupId = data.elementGroupId;
        this.httpService.projectElementGroupDetailQuery(this.projectElementGroupDetailQueryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var listDataT = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](data['elementsList']);
                listDataT.forEach(function (e) {
                    var list = '';
                    e.listElement.forEach(function (et) {
                        list += et.optionKey + '_' + et.optionValue;
                    });
                    e.listElement = list;
                });
                _this.upData = listDataT;
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //获取码值
    //码值
    NewModificationDetails.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('stateType'),
        __metadata("design:type", Object)
    ], NewModificationDetails.prototype, "stateType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('msgss'),
        __metadata("design:type", Object)
    ], NewModificationDetails.prototype, "msgss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewModificationDetails.prototype, "data", void 0);
    NewModificationDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "new-modification-details",
            template: __webpack_require__(/*! ./new-modification-details.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.html"),
            styles: [__webpack_require__(/*! ./new-modification-details.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.scss")],
        }),
        __metadata("design:paramtypes", [_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_4__["ProjectHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], NewModificationDetails);
    return NewModificationDetails;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 input-part\" *ngIf=\"stateType=='01'\">\r\n    <div class=\"ui-g-12 header-text\">合作项目类型</div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>合作项目类型名称:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input pInputText class=\"input\" [(ngModel)]=\"coopProjectTypeSetBean.coopProjectTypeName\" max-length=\"80\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>合作类型:</div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"coopPartnerType\" [(ngModel)]=\"coopProjectTypeSetBean.coopPartnerType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>流程编号:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input pInputText class=\"input\" [(ngModel)]=\"coopProjectTypeSetBean.processId\" max-length=\"80\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\"><span class=\"tip_tip\">*</span>是否需可行性方案:</div>\r\n            <div class=\"ui-g-4\"><p-dropdown [options]=\"needPlan\" (click)=\"selectliandong()\" [(ngModel)]=\"coopProjectTypeSetBean.needPlan\"></p-dropdown></div>\r\n        </div><div class=\"ui-g-4\"><div class=\"ui-g-8 tit\"><span class=\"tip_tip\">*</span>可行性方案是否需要审批:</div><div class=\"ui-g-4\">\r\n        <p-dropdown [options]=\"planNeedApprove\" [disabled]=\"falge\" [(ngModel)]=\"coopProjectTypeSetBean.planNeedApprove\"></p-dropdown></div></div>\r\n        <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\"><span class=\"tip_tip\">*</span>项目协议是否需要审批:</div>\r\n        <div class=\"ui-g-4\"><p-dropdown [options]=\"projectBodyNeedApprove\" [(ngModel)]=\"coopProjectTypeSetBean.projectBodyNeedApprove\"></p-dropdown></div></div>\r\n        <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\"><span class=\"tip_tip\">*</span>是否有额度:</div><div class=\"ui-g-4\">\r\n        <p-dropdown [options]=\"projectBodyHaveLimit\" [(ngModel)]=\"coopProjectTypeSetBean.projectBodyHaveLimit\"></p-dropdown> </div></div>\r\n        <div class=\"ui-g-4\"><div class=\"ui-g-8 tit\"><span class=\"tip_tip\">*</span>建群控制:</div><div class=\"ui-g-4\">\r\n        <p-dropdown [options]=\"buildCrowdConfig\" [(ngModel)]=\"coopProjectTypeSetBean.buildCrowdConfig\"></p-dropdown></div></div> -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-newtit\">\r\n                合作项目类型描述:</div>\r\n            <div class=\"ui-g-newtext\">\r\n                <textarea pInputTextarea [(ngModel)]=\"coopProjectTypeSetBean.coopProjectTypeDesc\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 修改 -->\r\n<div class=\"ui-g-12 input-part\" *ngIf=\"stateType=='02'\">\r\n    <div class=\"ui-g-12 header-text\">合作项目类型</div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>合作项目类型编号:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input pInputText class=\"input\" disabled [(ngModel)]=\"coopProjectTypeSetBean.coopProjectTypeId\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>合作项目类型名称:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input pInputText class=\"input\" [(ngModel)]=\"coopProjectTypeSetBean.coopProjectTypeName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>合作类型:</div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"coopPartnerType\" [(ngModel)]=\"coopProjectTypeSetBean.coopPartnerType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-8 tit\">\r\n                <span class=\"tip_tip\">*</span>流程编号:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input pInputText class=\"input\" [(ngModel)]=\"coopProjectTypeSetBean.processId\" max-length=\"80\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-newtit\">合作项目类型描述:</div>\r\n            <div class=\"ui-g-newtext\">\r\n                <textarea pInputTextarea [(ngModel)]=\"coopProjectTypeSetBean.coopProjectTypeDesc\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<element-combination-list [functiontype]=\"groupId\" [typeOn]=\"dialogType\" (close)=\"close($event)\"></element-combination-list>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton (click)=\"save()\" label=\"保存\"></button>\r\n</div>\r\n<p-growl [(value)]=\"msgs\" [style]=\"{'z-index':'1000'}\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-part {\n  background: #fff; }\n  .header-part .tit {\n    text-align: right;\n    line-height: 22px; }\n  .main-part {\n  margin-top: 3px;\n  background: #fff; }\n  .main-part .iscolor {\n    background: #ffc900;\n    float: right; }\n  .input-part {\n  border-bottom: 3px solid #f3f3f4;\n  min-height: 200px;\n  color: #818181; }\n  .input-part .header-text {\n    height: 30px;\n    line-height: 30px; }\n  .input-part .tit {\n    color: #000; }\n  .table {\n  text-align: center; }\n  .btn {\n  text-align: center; }\n  :host /deep/ .ui-dialog .ui-g-1,\n:host /deep/ .ui-dialog .ui-g-2,\n:host /deep/ .ui-dialog .ui-g-3,\n:host /deep/ .ui-dialog .ui-g-4,\n:host /deep/ .ui-dialog .ui-g-5,\n:host /deep/ .ui-dialog .ui-g-6,\n:host /deep/ .ui-dialog .ui-g-7,\n:host /deep/ .ui-dialog .ui-g-8,\n:host /deep/ .ui-dialog .ui-g-9,\n:host /deep/ .ui-dialog .ui-g-10,\n:host /deep/ .ui-dialog .ui-g-11,\n:host /deep/ .ui-dialog .ui-g-12 {\n  padding: 0.2em 0.2em; }\n  :host /deep/ .ui-dialog .ui-g-newtit {\n  width: 22.5%;\n  text-align: right;\n  float: left;\n  padding: 0.1em 0.5em;\n  color: #000; }\n  :host /deep/ .ui-dialog .ui-g-newtit.ui-g-newtit-t {\n    width: 22.1%; }\n  :host /deep/ .ui-dialog .ui-g-newtext {\n  width: 77.5%;\n  float: left; }\n  :host /deep/ .ui-dialog .ui-g-newtext.ui-g-newtext-t {\n    width: 77%; }\n  :host /deep/ .ui-dialog .tit {\n  text-align: right; }\n  :host /deep/ .ui-dialog textarea {\n  resize: none; }\n  .tip_tip {\n  color: red; }\n  @media screen and (max-width: 1280px) {\n  * {\n    font-size: 12px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2Utc2VhcmNoLW90aGVyL25ldy1tb2RpZmljYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tQ2VudGVyXFxwcm9qZWN0LW1haW4tbWFuYWdlXFxwcm9qZWN0LW1haW4tbWFuYWdlLXNlYXJjaC1vdGhlclxcbmV3LW1vZGlmaWNhdGlvblxcbmV3LW1vZGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQUlwQjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0VBSGxCO0lBS1EsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBTnpCO0lBU1EsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0Qjs7Ozs7Ozs7Ozs7O0VBYVEsb0JBQW9CLEVBQUE7RUFiNUI7RUFnQlEsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVcsRUFBQTtFQXBCbkI7SUFzQlksWUFBWSxFQUFBO0VBdEJ4QjtFQTBCUSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBM0JuQjtJQTZCWSxVQUFTLEVBQUE7RUE3QnJCO0VBaUNRLGlCQUFpQixFQUFBO0VBakN6QjtFQW9DUSxZQUFZLEVBQUE7RUFHcEI7RUFDSSxVQUFTLEVBQUE7RUFFYjtFQUNBO0lBQ0ksMEJBQXlCLEVBQUEsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tQ2VudGVyL3Byb2plY3QtbWFpbi1tYW5hZ2UvcHJvamVjdC1tYWluLW1hbmFnZS1zZWFyY2gtb3RoZXIvbmV3LW1vZGlmaWNhdGlvbi9uZXctbW9kaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wYXJ0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAudGl0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tcGFydCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLmlzY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXQtcGFydCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YzZjNmNDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC51aS1kaWFsb2cge1xyXG4gICAgLnVpLWctMSxcclxuICAgIC51aS1nLTIsXHJcbiAgICAudWktZy0zLFxyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTUsXHJcbiAgICAudWktZy02LFxyXG4gICAgLnVpLWctNyxcclxuICAgIC51aS1nLTgsXHJcbiAgICAudWktZy05LFxyXG4gICAgLnVpLWctMTAsXHJcbiAgICAudWktZy0xMSxcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbTtcclxuICAgIH1cclxuICAgIC51aS1nLW5ld3RpdCB7XHJcbiAgICAgICAgd2lkdGg6IDIyLjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICYudWktZy1uZXd0aXQtdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMi4xJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy1uZXd0ZXh0IHtcclxuICAgICAgICB3aWR0aDogNzcuNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgJi51aS1nLW5ld3RleHQtdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOjc3JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLnRpcF90aXB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuKntcclxuICAgIGZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: NewModification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewModification", function() { return NewModification; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/project-main-manage-search-other.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/bean/project-main-manage-search-other.bean.ts");
/* harmony import */ var _http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewModification = /** @class */ (function () {
    function NewModification(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.falge = false;
        this.first = 0;
        this.coopProjectTypeListQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeListQueryBean"]; //合作项目类型列表查询
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"](); //合作项目类型新增、修改、删除
        this.coopProjectTypeDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeDetailQueryBean"](); //合作项目类型详情查询
        this.display = false;
        this.dialogHead = '新增';
        this.groupId = '';
        this.detailsDisplay = false;
        this.tableData = [];
        this.upData = [];
        this.tableHead = [
            {
                label: '序号',
                value: 'tit'
            },
            {
                label: '要素名称',
                value: 'elementGroupName'
            },
            {
                label: '是否为组件',
                value: 'elementGroupFlag'
            },
            {
                label: '允许多条',
                value: 'multipleFlag'
            },
            {
                label: '要素标识',
                value: 'elementEnName'
            },
            {
                label: '是否必输',
                value: 'mustInput'
            },
            {
                label: '要素字段类型',
                value: 'elementType'
            },
            {
                label: '要素精度',
                value: 'elementPrecision'
            },
            {
                label: '要素检查服务名',
                value: 'frontElementCheckServe'
            },
            {
                label: '最小值',
                value: 'minValue'
            },
            {
                label: '最大值',
                value: 'maxValue'
            },
            {
                label: '缺省值',
                value: 'defValue'
            },
            {
                label: '列表值选项',
                value: 'listElement'
            },
        ];
        //详情
        this.DetailList = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.projectElementGroupDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["ProjectElementGroupDetailQueryBean"]();
    }
    NewModification.prototype.ngOnInit = function () {
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.pageSize = 10;
        this.codeValues();
        //列表项取值
        this.coopPartnerType = this.code['coopPartnerType'];
        this.elementType = this.code['elementType'];
        this.elementGroupFlag = this.code['elementGroupFlag'];
        this.multipleFlag = this.code['multipleFlag'];
        this.mustInput = this.code['mustInput'];
        this.releProtocolType = this.code['releProtocolType'];
        //修改
        if (this.msgss && this.msgss != '') {
            this.detail(this.msgss);
        }
        else {
            this.coopProjectTypeSetBean.operateType = '1';
        }
    };
    //修改数据
    NewModification.prototype.updataList = function (data) {
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.coopProjectTypeSetBean.operateType = '2';
        this.coopProjectTypeSetBean.coopPartnerType = data['coopPartnerType'];
        this.coopProjectTypeSetBean.coopProjectTypeDesc = data['coopProjectTypeDesc'];
        this.coopProjectTypeSetBean.elementGroupId = data['elementGroupId'];
        this.coopProjectTypeSetBean.releProtocolType = data['releProtocolType'];
        this.coopProjectTypeSetBean.coopProjectTypeName = data['coopProjectTypeName'];
        this.coopProjectTypeSetBean.coopProjectTypeId = data['coopProjectTypeId'];
        this.groupId = data['elementGroupId'];
        this.coopProjectTypeSetBean.processId = data['processId'];
    };
    //接收组件传值
    NewModification.prototype.close = function (e) {
        this.coopProjectTypeSetBean.elementGroupId = e;
    };
    //获取详情信息
    NewModification.prototype.detail = function (msg) {
        var _this = this;
        console.log(msg);
        this.coopProjectTypeDetailQueryBean.coopProjectTypeId = msg['coopProjectTypeId'];
        // this.coopProjectTypeDetailQueryBean.processId = msg['processId'];
        this.httpService.coopProjectTypeDetailQuery(this.coopProjectTypeDetailQueryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.DetailList = data;
                _this.DetailList = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](_this.DetailList);
                _this.updataList(data);
                _this.getEleList(data);
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //获取元素列表
    NewModification.prototype.getEleList = function (data) {
        var _this = this;
        this.projectElementGroupDetailQueryBean.elementGroupId = data.elementGroupId;
        this.httpService.projectElementGroupDetailQuery(this.projectElementGroupDetailQueryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var listDataT = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](data['elementsList']);
                listDataT.forEach(function (e) {
                    var list = '';
                    e.listElement.forEach(function (et) {
                        list += et.optionKey + '_' + et.optionValue;
                    });
                    e.listElement = list;
                });
                _this.upData = listDataT;
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //保存
    NewModification.prototype.save = function () {
        var _this = this;
        this.msgs = [];
        if (this.coopProjectTypeSetBean.coopProjectTypeName == null || this.coopProjectTypeSetBean.coopProjectTypeName == undefined) {
            this.msgs.push({ severity: 'error', summary: '提示', detail: '合作项目类型名称不能为空' });
            return;
        }
        else if (this.coopProjectTypeSetBean.coopPartnerType == null || this.coopProjectTypeSetBean.coopPartnerType == undefined) {
            this.msgs.push({ severity: 'error', summary: '提示', detail: '合作类型不能为空' });
            return;
        }
        else if (this.coopProjectTypeSetBean.elementGroupId == null || this.coopProjectTypeSetBean.elementGroupId == undefined) {
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择项目主体要素组合' });
            return;
        }
        else if (this.coopProjectTypeSetBean.processId == null || this.coopProjectTypeSetBean.processId == undefined) {
            this.msgs.push({ severity: 'error', summary: '提示', detail: '流程编号不能为空' });
            return;
        }
        this.httpService.coopProjectTypeSet(this.coopProjectTypeSetBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                setTimeout(function () {
                    _this.data.emit();
                }, 1500);
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //获取码值
    //码值
    NewModification.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('stateType'),
        __metadata("design:type", Object)
    ], NewModification.prototype, "stateType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('msgss'),
        __metadata("design:type", Object)
    ], NewModification.prototype, "msgss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewModification.prototype, "data", void 0);
    NewModification = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "new-modification",
            template: __webpack_require__(/*! ./new-modification.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.html"),
            styles: [__webpack_require__(/*! ./new-modification.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.scss")],
        }),
        __metadata("design:paramtypes", [_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_4__["ProjectHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], NewModification);
    return NewModification;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"header-part ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            合作项目类型\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-8 ui-g-offset-2\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-6 tit\">合作项目类型编号</div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input pInputText [(ngModel)]=\"coopProjectTypeListQueryBean.coopProjectTypeId\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-6 tit\">合作项目类型名称:</div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input pInputText [(ngModel)]=\"coopProjectTypeListQueryBean.coopProjectTypeName\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\">\r\n            <button pButton label=\"查询\" (click)=\"clearQuery()\"></button>\r\n            <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-part ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            合作项目类型列表\r\n            <button pButton label=\"新建\" class=\"iscolor\" (click)=\"newHid()\" *ngIf=\"permissionCheck('SID00053_011_P01')\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 table\">\r\n            <p-dataTable [value]=\"typeList\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\">\r\n                <p-column header=\"合作项目类型编号\" field=\"coopProjectTypeId\"></p-column>\r\n                <p-column header=\"合作项目类型名称\" field=\"coopProjectTypeName\"></p-column>\r\n                <!-- <p-column header=\"项目协议是否需要审批\">\r\n                    <ng-template let-yi=\"rowIndex\" let-car='rowData' pTemplate=\"body\">\r\n                        {{car.projectBodyNeedApprove|codeValuePie:projectBodyNeedApprove}}\r\n                    </ng-template>\r\n                </p-column> -->\r\n                <!-- <p-column header=\"合作对象类型\" field=\"coopProjectTypeName\"></p-column> -->\r\n                <p-column header=\"业务要素组合\" field=\"elementGroupId\"></p-column>\r\n                <p-column header=\"项目类型描述\" field=\"coopProjectTypeDesc\"></p-column>\r\n                <p-column header=\"操作\">\r\n                    <ng-template let-yi=\"rowIndex\" let-car='rowData' pTemplate=\"body\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"show(car)\" *ngIf=\"permissionCheck('SID00053_011_P03')\">详情</span>\r\n                        <span class=\"tabelUpdateIco\" (click)=\"upDate(car)\" *ngIf=\"permissionCheck('SID00053_011_P02')\">修改</span>\r\n                        <span class=\"tabelDeleteIco\" (click)=\"delete(car)\" *ngIf=\"permissionCheck('SID00053_011_P04')\">删除</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows={{coopProjectTypeListQueryBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n    <p-dialog [header]=\"dialogHead\" *ngIf=\"display\" baseZIndex='1' modal=\"modal\" [(visible)]=\"display\" width=\"950\" [responsive]=\"true\"\r\n        [positionTop]=10 (onHide)=\"clear()\">\r\n        <new-modification [stateType]=\"dialogType\" [msgss]=\"dataMsg\" (data)=\"closeMsg()\"></new-modification>\r\n    </p-dialog>\r\n    <p-dialog [header]=\"'详情'\" *ngIf=\"detailsDisplay\" baseZIndex='1' modal=\"modal\" [(visible)]=\"detailsDisplay\" width=\"950\" [responsive]=\"true\"\r\n        [positionTop]=10 (onHide)=\"clear()\">\r\n        <new-modification-details [msgss]=\"dataMsg\"></new-modification-details>\r\n    </p-dialog>\r\n</div>\r\n<p-growl [(value)]=\"msgs\" [style]=\"{'z-index':'1000'}\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-part {\n  background: #fff; }\n  .header-part .tit {\n    text-align: right;\n    line-height: 22px; }\n  .main-part {\n  margin-top: 3px;\n  background: #fff; }\n  .main-part .iscolor {\n    background: #ffc900;\n    float: right; }\n  .input-part {\n  border-bottom: 3px solid #f3f3f4;\n  min-height: 200px;\n  color: #818181; }\n  .input-part .header-text {\n    height: 30px;\n    line-height: 30px; }\n  .input-part .tit {\n    color: #000; }\n  .table {\n  text-align: center; }\n  .btn {\n  text-align: center; }\n  :host /deep/ .ui-dialog .ui-g-1,\n:host /deep/ .ui-dialog .ui-g-2,\n:host /deep/ .ui-dialog .ui-g-3,\n:host /deep/ .ui-dialog .ui-g-4,\n:host /deep/ .ui-dialog .ui-g-5,\n:host /deep/ .ui-dialog .ui-g-6,\n:host /deep/ .ui-dialog .ui-g-7,\n:host /deep/ .ui-dialog .ui-g-8,\n:host /deep/ .ui-dialog .ui-g-9,\n:host /deep/ .ui-dialog .ui-g-10,\n:host /deep/ .ui-dialog .ui-g-11,\n:host /deep/ .ui-dialog .ui-g-12 {\n  padding: 0.2em 0.2em; }\n  :host /deep/ .ui-dialog .ui-g-newtit {\n  width: 22.5%;\n  text-align: right;\n  float: left;\n  padding: 0.1em 0.5em;\n  color: #000; }\n  :host /deep/ .ui-dialog .ui-g-newtit.ui-g-newtit-t {\n    width: 22.1%; }\n  :host /deep/ .ui-dialog .ui-g-newtext {\n  width: 77.5%;\n  float: left; }\n  :host /deep/ .ui-dialog .ui-g-newtext.ui-g-newtext-t {\n    width: 77%; }\n  :host /deep/ .ui-dialog .tit {\n  text-align: right; }\n  :host /deep/ .ui-dialog textarea {\n  resize: none; }\n  @media screen and (max-width: 1280px) {\n  * {\n    font-size: 12px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2Utc2VhcmNoLW90aGVyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxccHJvamVjdC1tYWluLW1hbmFnZVxccHJvamVjdC1tYWluLW1hbmFnZS1zZWFyY2gtb3RoZXJcXHByb2plY3QtbWFpbi1tYW5hZ2Utc2VhcmNoLW90aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFIbEI7SUFLUSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFOekI7SUFTUSxXQUFXLEVBQUE7RUFJbkI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFrQixFQUFBO0VBR3RCOzs7Ozs7Ozs7Ozs7RUFhUSxvQkFBb0IsRUFBQTtFQWI1QjtFQWdCUSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVyxFQUFBO0VBcEJuQjtJQXNCWSxZQUFZLEVBQUE7RUF0QnhCO0VBMEJRLFlBQVk7RUFDWixXQUFXLEVBQUE7RUEzQm5CO0lBNkJZLFVBQVMsRUFBQTtFQTdCckI7RUFpQ1EsaUJBQWlCLEVBQUE7RUFqQ3pCO0VBb0NRLFlBQVksRUFBQTtFQUdwQjtFQUNBO0lBQ0ksMEJBQXlCLEVBQUEsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tQ2VudGVyL3Byb2plY3QtbWFpbi1tYW5hZ2UvcHJvamVjdC1tYWluLW1hbmFnZS1zZWFyY2gtb3RoZXIvcHJvamVjdC1tYWluLW1hbmFnZS1zZWFyY2gtb3RoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBhcnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbi1wYXJ0IHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaXNjb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzkwMDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dC1wYXJ0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjNmM2Y0O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgICAudWktZy0xLFxyXG4gICAgLnVpLWctMixcclxuICAgIC51aS1nLTMsXHJcbiAgICAudWktZy00LFxyXG4gICAgLnVpLWctNSxcclxuICAgIC51aS1nLTYsXHJcbiAgICAudWktZy03LFxyXG4gICAgLnVpLWctOCxcclxuICAgIC51aS1nLTksXHJcbiAgICAudWktZy0xMCxcclxuICAgIC51aS1nLTExLFxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtO1xyXG4gICAgfVxyXG4gICAgLnVpLWctbmV3dGl0IHtcclxuICAgICAgICB3aWR0aDogMjIuNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMC41ZW07XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgJi51aS1nLW5ld3RpdC10IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIyLjElO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS1nLW5ld3RleHQge1xyXG4gICAgICAgIHdpZHRoOiA3Ny41JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAmLnVpLWctbmV3dGV4dC10IHtcclxuICAgICAgICAgICAgd2lkdGg6NzclO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4qe1xyXG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxufVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ProjectMainManageSearchOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMainManageSearchOther", function() { return ProjectMainManageSearchOther; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
/* harmony import */ var _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/project-main-manage-search-other.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/bean/project-main-manage-search-other.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectMainManageSearchOther = /** @class */ (function () {
    function ProjectMainManageSearchOther(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.first = 0;
        this.coopProjectTypeListQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeListQueryBean"]; //合作项目类型列表查询
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"](); //合作项目类型新增、修改、删除
        this.coopProjectTypeDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeDetailQueryBean"](); //合作项目类型详情查询
        this.display = false;
        this.dialogHead = '新增';
        this.groupId = '';
        this.detailsDisplay = false;
        this.tableData = [];
        this.upData = [];
        this.tableHead = [
            {
                label: '序号',
                value: 'tit'
            },
            {
                label: '要素名称',
                value: 'elementGroupName'
            },
            {
                label: '是否为组件',
                value: 'elementGroupFlag'
            },
            {
                label: '允许多条',
                value: 'multipleFlag'
            },
            {
                label: '要素标识',
                value: 'elementEnName'
            },
            {
                label: '是否必输',
                value: 'mustInput'
            },
            {
                label: '要素字段类型',
                value: 'elementType'
            },
            {
                label: '要素精度',
                value: 'elementPrecision'
            },
            {
                label: '要素检查服务名',
                value: 'frontElementCheckServe'
            },
            {
                label: '最小值',
                value: 'minValue'
            },
            {
                label: '最大值',
                value: 'maxValue'
            },
            {
                label: '缺省值',
                value: 'defValue'
            },
            {
                label: '列表值选项',
                value: 'listElement'
            },
        ];
        //详情
        this.DetailList = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.projectElementGroupDetailQueryBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["ProjectElementGroupDetailQueryBean"]();
    }
    ProjectMainManageSearchOther.prototype.ngOnInit = function () {
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.coopProjectTypeListQueryBean.pageSize = 10;
        this.query();
        this.codeValues();
        //列表项取值
        this.coopPartnerType = this.code['coopPartnerType'];
        // this.needPlan = this.code['needPlan'];
        // this.planNeedApprove = this.code['planNeedApprove'];
        // this.projectBodyNeedApprove = this.code['projectBodyNeedApprove'];
        // this.projectBodyHaveLimit = this.code['projectBodyHaveLimit'];
        this.releProtocolType = this.code['releProtocolType'];
        // this.buildCrowdConfig = this.code['buildCrowdConfig'];
        this.elementType = this.code['elementType'];
        this.elementGroupFlag = this.code['elementGroupFlag'];
        this.multipleFlag = this.code['multipleFlag'];
        this.mustInput = this.code['mustInput'];
    };
    ProjectMainManageSearchOther.prototype.closeMsg = function () {
        this.display = false;
        this.query();
        this.dataMsg = '';
    };
    ProjectMainManageSearchOther.prototype.clear = function () {
        this.dataMsg = '';
    };
    ProjectMainManageSearchOther.prototype.clearQuery = function () {
        this.coopProjectTypeListQueryBean.pageSize = 10;
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.query();
    };
    // 重置
    ProjectMainManageSearchOther.prototype.reset = function () {
        this.coopProjectTypeListQueryBean.pageSize = 10;
        this.coopProjectTypeListQueryBean.pageNum = 0;
        this.coopProjectTypeListQueryBean.coopProjectTypeName = '';
        this.coopProjectTypeListQueryBean.coopProjectTypeId = '';
        this.query();
    };
    //列表查询
    ProjectMainManageSearchOther.prototype.query = function () {
        var _this = this;
        this.msgs = [];
        this.httpService.coopProjectTypeListQuery(this.coopProjectTypeListQueryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.typeList = data['returnList'];
                _this.total = data.total;
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //新建按钮点击
    ProjectMainManageSearchOther.prototype.newHid = function () {
        this.display = true;
        this.dialogHead = '新建';
        this.dialogType = '01';
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.coopProjectTypeSetBean.operateType = '1';
        this.groupId = '';
    };
    //修改按钮点击
    ProjectMainManageSearchOther.prototype.upDate = function (i) {
        this.display = true;
        this.dialogHead = '修改';
        this.dialogType = '02';
        this.dataMsg = i;
    };
    ProjectMainManageSearchOther.prototype.show = function (i) {
        this.detailsDisplay = true;
        this.dataMsg = i;
    };
    //接收组件传值
    ProjectMainManageSearchOther.prototype.close = function (e) {
        this.coopProjectTypeSetBean.elementGroupId = e;
    };
    //删除
    ProjectMainManageSearchOther.prototype.delete = function (i) {
        var _this = this;
        this.coopProjectTypeSetBean = new _bean_project_main_manage_search_other_bean__WEBPACK_IMPORTED_MODULE_3__["CoopProjectTypeSetBean"]();
        this.coopProjectTypeSetBean.operateType = '3';
        this.coopProjectTypeSetBean.coopProjectTypeId = i['coopProjectTypeId'];
        this.httpService.coopProjectTypeSet(this.coopProjectTypeSetBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.query();
                // this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //获取码值
    //码值
    ProjectMainManageSearchOther.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //分页
    ProjectMainManageSearchOther.prototype.paginate = function (event) {
        console.log(event);
        this.coopProjectTypeListQueryBean.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.coopProjectTypeListQueryBean.pageNum = currentPage;
        this.first = event.page * event.rows;
        /**
         * --2018.1.15
         */
        //调用查询的方法
        this.query();
    };
    //按钮权限
    ProjectMainManageSearchOther.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ProjectMainManageSearchOther = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "project-main-manage-search-other",
            template: __webpack_require__(/*! ./project-main-manage-search-other.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.html"),
            styles: [__webpack_require__(/*! ./project-main-manage-search-other.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.scss")],
        }),
        __metadata("design:paramtypes", [_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_2__["ProjectHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], ProjectMainManageSearchOther);
    return ProjectMainManageSearchOther;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.module.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ProjectMainManageSearchOtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMainManageSearchOtherModule", function() { return ProjectMainManageSearchOtherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _project_main_manage_search_other_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-main-manage-search-other.routing */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.routing.ts");
/* harmony import */ var _project_main_manage_search_other_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-main-manage-search-other.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.ts");
/* harmony import */ var _customCenterCommon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customCenterCommon.module */ "./src/app/pages/tzb/customCenter/customCenterCommon.module.ts");
/* harmony import */ var _new_modification_new_modification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-modification/new-modification.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification/new-modification.component.ts");
/* harmony import */ var _new_modification_details_new_modification_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-modification-details/new-modification-details.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/new-modification-details/new-modification-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件

//页面

// import { AuthorityService } from 'app/service/basis/authority/authority.service';

// import { ProjectHttpService } from 'app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service';


//组件


var ProjectMainManageSearchOtherModule = /** @class */ (function () {
    function ProjectMainManageSearchOtherModule() {
    }
    ProjectMainManageSearchOtherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                _project_main_manage_search_other_routing__WEBPACK_IMPORTED_MODULE_4__["ProjectMainManageSearchOtherRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _customCenterCommon_module__WEBPACK_IMPORTED_MODULE_6__["TzbCustomCenterCommonModule"]
            ],
            declarations: [
                _project_main_manage_search_other_component__WEBPACK_IMPORTED_MODULE_5__["ProjectMainManageSearchOther"],
                _new_modification_new_modification_component__WEBPACK_IMPORTED_MODULE_7__["NewModification"],
                _new_modification_details_new_modification_details_component__WEBPACK_IMPORTED_MODULE_8__["NewModificationDetails"]
            ],
            entryComponents: [],
            providers: []
        })
    ], ProjectMainManageSearchOtherModule);
    return ProjectMainManageSearchOtherModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.routing.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.routing.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ProjectMainManageSearchOtherRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMainManageSearchOtherRouting", function() { return ProjectMainManageSearchOtherRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_main_manage_search_other_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-main-manage-search-other.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search-other/project-main-manage-search-other.component.ts");


var routes = [
    {
        path: '',
        component: _project_main_manage_search_other_component__WEBPACK_IMPORTED_MODULE_1__["ProjectMainManageSearchOther"]
    },
];
var ProjectMainManageSearchOtherRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=project-main-manage-search-other-project-main-manage-search-other-module.js.map