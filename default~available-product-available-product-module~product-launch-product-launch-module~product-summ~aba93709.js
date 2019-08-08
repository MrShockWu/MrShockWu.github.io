(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~available-product-available-product-module~product-launch-product-launch-module~product-summ~aba93709"],{

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/bean/channel-delivery.bean.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/bean/channel-delivery.bean.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ChannelDeliveryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryBean", function() { return ChannelDeliveryBean; });
var ChannelDeliveryBean = /** @class */ (function () {
    function ChannelDeliveryBean() {
        this.pageNum = 1; //			当前页号
        this.pageSize = 10; //			每页显示数量
    }
    return ChannelDeliveryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-g container\">\r\n  <div class=\"ui-g-12 ui-md-12 form_item\">\r\n    <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n      <span>目录编号:</span>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n      <input type=\"text\" [(ngModel)]=\"prodCatalogId\" pInputText class=\"ui-inputtext-new\" style=\"width: 70%\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n      <span>目录名称:</span>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n      <input type=\"text\" [(ngModel)]=\"catalogName\" pInputText class=\"ui-inputtext-new\" style=\"width: 70%\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"queryClick()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n        </div>\r\n      </div>\r\n      <span>&nbsp;</span>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <u-dataTable [value]=\"list_catalog\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n      <p-column [style]=\"{'text-align':'center','width':'30%'}\">\r\n        <ng-template pTemplate=\"header\">\r\n          <label>选择</label>\r\n        </ng-template>\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <p-radioButton name=\"group1\" value={{col.prodCatalogId}} [(ngModel)]=\"valueListOne\"></p-radioButton>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column [style]=\"{'text-align':'center','width':'35%'}\" field=\"prodCatalogId\" header=\"目录编号\">\r\n      </p-column>\r\n      <p-column [style]=\"{'text-align':'center','width':'35%'}\" field=\"catalogName\" header=\"目录名称\">\r\n      </p-column>\r\n    </u-dataTable>\r\n    <div style=\"float:right; margin:10px 10px;\">\r\n      <u-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 ui-md-12 form_item\">\r\n    <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n      <span>立即投放:</span>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n      <div style=\"width:50%;\">\r\n        <p-dropdown styleClass=\"ui-dropdown-new\" (onChange)=\"changeDeliveryV()\" [(ngModel)]=\"upperFrameFlag\" [options]=\"deliveryType\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n      <span>投放日期:</span>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n      <p-calendar styleClass=\"ui-calendar-new\" [showIcon]=\"true\" [disabled]='dataV' [(ngModel)]=\"upperFrameTime\" [minDate]=\"transferedDateNow\"\r\n        [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yymmdd\" [locale]=\"ch\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <div style=\"width: 90px;display: inline-block;\">\r\n      <div class=\"ui-btn1-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton type=\"button\" (click)=\"mainSeve()\" style=\"width: 60px;\" label=\"确定\"></button>\r\n      </div>\r\n    </div>\r\n    <span>&nbsp;</span>\r\n    <div style=\"width: 90px;display: inline-block;\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"goBack()\" label=\"取消\"></button>\r\n      </div>\r\n    </div>\r\n    <!-- <span class=\"icoColors\" (click)=\"mainSeve()\">确定</span> -->\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ span.icoColor {\n  height: 2.1em;\n  line-height: 2.1em; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvY2hhbm5lbC1kZWxpdmVyeS1kZXRhaWxzL2NhdGFsb2ctYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxwcm9kdWN0LW1hcmtldFxccHJvZHVjdC1sYXVuY2hcXGNoYW5uZWwtZGVsaXZlcnlcXGNoYW5uZWwtZGVsaXZlcnktZGV0YWlsc1xcY2F0YWxvZy1hZGRcXGNhdGFsb2ctYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvY2hhbm5lbC1kZWxpdmVyeS1kZXRhaWxzL2NhdGFsb2ctYWRkL2NhdGFsb2ctYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gc3Bhbi5pY29Db2xvciB7XHJcbiAgICBoZWlnaHQ6IDIuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMWVtO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: CatalogAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogAddComponent", function() { return CatalogAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //中文
var CatalogAddComponent = /** @class */ (function () {
    function CatalogAddComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
        this.list_catalog = [];
        this.valueListOne = [];
        //提示信息
        this.msgs = [];
        //分页
        this.pageSize = 10;
        this.pageNum = 1;
        this.upperFrameFlag = ''; //是否立即投放Value
        this.upperFrameTime = null;
        this.dataV = true;
        this.transferedDateNow = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.codeValues(); //调用方法，获取全部码值
        this.deliveryType = this.code['DeliveryTypes'];
    }
    CatalogAddComponent.prototype.ngOnInit = function () {
        this.upperFrameFlag = 'Y';
        var time21 = new Date();
        var time212 = new Date(time21.getTime() + 24 * 60 * 60 * 1000);
        this.transferedDateNow = time212;
        this.list = this.inValue;
        this.queryClick();
    };
    //码值
    CatalogAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CatalogAddComponent.prototype.changeDeliveryV = function () {
        if (this.upperFrameFlag == 'Y') {
            this.dataV = true;
        }
        else {
            this.dataV = false;
        }
    };
    // 目录新增默认查询
    CatalogAddComponent.prototype.queryClick = function () {
        var _this = this;
        var parm = {
            prodCatalogId: this.prodCatalogId,
            catalogName: this.catalogName,
            prodCatalogType: '1',
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.productManageHttpService.catalogManageQueryList(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list_catalog = data.catalogManageInfoList;
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
    CatalogAddComponent.prototype.mainSeve = function () {
        var _this = this;
        if (this.inValue.mulu == 2) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '渠道只允许关联一个目录，如果需要更换目录！' });
            return;
        }
        if (this.inValue.productStoreId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先确定该站点下有关联店铺' });
            return;
        }
        if (this.upperFrameFlag === 'N' && this.upperFrameTime === null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择投放日期' });
            return;
        }
        var upperFrameTimes = '';
        if (this.upperFrameFlag == 'Y') {
            upperFrameTimes = '';
        }
        else {
            upperFrameTimes = this.commfunc.transDate(this.upperFrameTime);
        }
        var parm = {
            // productStoreId: this.inValue.productStoreId,
            channelId: this.inValue.channelId,
            prodCatalogId: this.valueListOne,
            upperFrameFlag: this.upperFrameFlag,
            upperFrameTime: upperFrameTimes,
        };
        this.productManageHttpService.pushCatalogOnProductStoreShelf(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.outValue.emit(false);
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
    //分页
    CatalogAddComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        this.queryClick();
        this.pageNum = 1;
    };
    CatalogAddComponent.prototype.goBack = function () {
        this.outValue.emit(false);
    };
    CatalogAddComponent.prototype.resetClick = function () {
        this.prodCatalogId = '';
        this.catalogName = '';
        this.queryClick();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CatalogAddComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CatalogAddComponent.prototype, "outValue", void 0);
    CatalogAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog-add',
            template: __webpack_require__(/*! ./catalog-add.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.html"),
            styles: [__webpack_require__(/*! ./catalog-add.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        /**
         * 目录新增
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], CatalogAddComponent);
    return CatalogAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li>\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>产品投放</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\"margin: 10px 0;\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n      <div class=\"ui-g-12 ui-md-6 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>渠道</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCssd un_active\" [ngClass]=\"{'active':showClassSite== col.channelName}\" *ngFor=\"let col of siteNameList\" (click)=\"siteClick(col)\">\r\n              <span>\r\n                <label>{{col.channelName}}</label>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>已上架目录</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12 \">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss\" *ngFor=\"let col of muluName\" (click)=\"muluClick(col)\">\r\n                <label>\r\n                  <label>{{col.catalogName}}</label>\r\n                </label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"shelveMain()\" type=\"button\" label=\"编辑\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2\">\r\n      <div class=\"ui-g-12 ui-md-12 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>目录下的分类</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <p-tree [value]=\"left_tree\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <div class=\"ui-g-12 ui-md-4 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>可售产品/套餐</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCss\" *ngFor=\"let col of keshou_list;let ri = index\">\r\n              <div class=\"ui-g un_active\" [ngClass]=\"{'active':showClass == col.id}\" (click)=\"productClick(col)\">\r\n                <p-checkbox [(ngModel)]=\"productCheckbox\" value=\"{{col.id}}\" name=\"bb\"></p-checkbox>\r\n                <label [ngClass]=\"{'active':show == col.name}\">{{col.name}}</label>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>产品功能</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCss\" *ngFor=\"let col of gongneng_list;let ri = index\">\r\n              <p-checkbox (onChange)=\"setSelectValuess()\" [(ngModel)]=\"xuanze\" value=\"{{col.productFunctionId}}\" name=\"bb\"></p-checkbox>\r\n              <label>{{col.productFunctionName}}</label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>标签选择</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCss\" *ngFor=\"let col of label_list;let ri = index\">\r\n              <p-checkbox (onChange)=\"setSelectValuess()\" [(ngModel)]=\"bqxuanze\" value=\"{{col.labelName}}\" name=\"label\"></p-checkbox>\r\n              <label>{{col.labelName}}</label>\r\n              <!-- <div *ngIf=\"col.labelType=='LEVEL'\" style=\"display:inline-block\">\r\n                <span>级别:</span>\r\n                <input type=\"text\" value=\"\" type=\"number\" min=\"1\" max=\"10\" max='{{col.labelLevel}}' style=\"width:42px\" [(ngModel)]=\"col.labelLevelVluer\">\r\n                <span>最高{{col.labelLevel}}级</span>\r\n              </div> -->\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n        <span>立即投放:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <div style=\"width: 50%;\">\r\n          <p-dropdown styleClass=\"ui-dropdown-new\" (onChange)=\"changeDeliveryV()\" [(ngModel)]=\"deliveryTypeV\" [options]=\"deliveryType\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n        <span>投放日期:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-calendar styleClass=\"ui-calendar-new\" [showIcon]=\"true\" [disabled]='dataV' [(ngModel)]=\"startTime\" [minDate]=\"transferedDateNow\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yymmdd\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\" *ngIf=\"permissionCheck('SID03016_P087_P001') || permissionCheck('SID23016_P087_P001')\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <!-- <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"toufangServe()\" type=\"button\" label=\"投放\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"toufangServe()\" type=\"button\" label=\"投放\" [disabled]='iscompeled' class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"goBack()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- [disabled]='iscompele'  -->\r\n\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-catalog-add [inValue]=\"updateValue\" (outValue)=\"mainCall($event)\" *ngIf=\"showModel=='2'\"></app-catalog-add>\r\n    <!-- 目录 -->\r\n  </div>\r\n</p-dialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .boxAll {\n  height: 520px;\n  overflow: auto; }\n\n.container .boxAll .box1 {\n    color: #fff;\n    border: 1px solid #6AC7ED;\n    overflow: auto;\n    background-color: #6AC7ED; }\n\n.container .boxAll .box2 {\n    height: 85%;\n    border-left: 1px solid #6AC7ED;\n    border-right: 1px solid #6AC7ED;\n    border-bottom: 1px solid #6AC7ED;\n    overflow: auto; }\n\n.container .boxAll .box2 .ulCss {\n      margin-left: -3rem; }\n\n.container .boxAll .box2 .liCss {\n      list-style-type: none;\n      margin: 10px 16px; }\n\n.container .boxAll .box2 .liCssd {\n      margin: 0 25px; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none;\n    margin: 10px 16px; }\n\n.container .active {\n  border: none !important;\n  background-color: #0094D2; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: rgba(198, 223, 239, 0.94);\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.overflow {\n  max-height: 600px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-width: 900px !important;\n  height: 60% !important;\n  min-height: 700px !important; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n:host/deep/ .ui-dropdown {\n  width: 50% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 50%; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvY2hhbm5lbC1kZWxpdmVyeS1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxwcm9kdWN0LW1hcmtldFxccHJvZHVjdC1sYXVuY2hcXGNoYW5uZWwtZGVsaXZlcnlcXGNoYW5uZWwtZGVsaXZlcnktZGV0YWlsc1xcY2hhbm5lbC1kZWxpdmVyeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFUdEI7SUFXWSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTs7QUFkckM7SUFpQlksV0FBVztJQUNYLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGNBQWMsRUFBQTs7QUFyQjFCO01BdUJnQixrQkFBa0IsRUFBQTs7QUF2QmxDO01BMEJnQixxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUE7O0FBM0JqQztNQThCZ0IsY0FBYyxFQUFBOztBQTlCOUI7RUFvQ1ksV0FBVyxFQUFBOztBQXBDdkI7SUFzQ2dCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBeENqQztFQTZDUSx1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7O0FBOUNqQztFQWlEUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQXJEckI7RUF3RFEsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBN0RyQjtFQWdFUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTs7QUFJaEM7RUFDSSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvcHJvZHVjdC1sYXVuY2gvY2hhbm5lbC1kZWxpdmVyeS9jaGFubmVsLWRlbGl2ZXJ5LWRldGFpbHMvY2hhbm5lbC1kZWxpdmVyeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5ib3hBbGwge1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLmJveDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUM3RUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAudWxDc3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saUNzcyB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlDc3NkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAudW5fYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTgsIDIyMywgMjM5LCAwLjk0KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: ChannelDeliveryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryDetailsComponent", function() { return ChannelDeliveryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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




 //中文

var ChannelDeliveryDetailsComponent = /** @class */ (function () {
    function ChannelDeliveryDetailsComponent(routerR, router, productManageHttpService, commfunc) {
        this.routerR = routerR;
        this.router = router;
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.toufanglistA = []; // 获取该分类下所有数据（用于状态盼盼保存）
        this.isSiteClick = true;
        this.issiteFClick = false;
        this.isNB = false;
        this.deliveryTypeV = ''; // 是否立即投放Value
        this.startTime = null;
        this.transferedDateNow = null;
        this.dataV = true;
        this.fenlei_id = '-1'; // 分类
        this.siteIdList = []; // 站点ID数组
        this.siteNameList = []; // 站点Name数组
        //   mainMap={}
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.display = false;
        // 提示信息
        this.msgs = [];
        this.gongneng_list = []; // 功能列表
        this.xuanze = []; // 功能选择
        this.label_list = []; // 标签列表
        this.bqxuanze = []; // 标签选择
        //   label_value: any;
        // 组件的参数
        this.updateValue = [];
        this.left_tree = [];
        this.left_tree_arr = [];
        this.any = [];
        this.hierarchy_arr = [];
        this.productCheckbox = [];
        // 产品回显功能
        this.muLu_obj = [];
        this.muLu_objS = {};
        // 产品回显功能
        this.keshou_obj = {};
        this.keshou_objS = {};
        // 产品回显标签
        this.biaoq_obj = {};
        this.biaoq_objS = {};
        this.ArrObj = {};
        this.iscompele = false;
        // 站点数据回显
        this.selectValue = {};
        this.iscompeled = false;
        this.codeValues(); // 调用方法，获取全部码值
        this.deliveryType = this.code['DeliveryTypes'];
    }
    ChannelDeliveryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryTypeV = 'Y';
        var time21 = new Date();
        var time212 = new Date(time21.getTime() + 24 * 60 * 60 * 1000);
        this.transferedDateNow = time212;
        var channelIdlist = [];
        this.router.params.subscribe(function (data) {
            channelIdlist = data['channelId'].split(',');
            _this.siteNameList = [];
            channelIdlist.forEach(function (item) {
                _this.channelId = item;
                var parm = {
                    channelId: _this.channelId,
                };
                _this.productManageHttpService.queryProdCataListForChannelPage(parm).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.siteNameList.push(data.prodChannelList[0]);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            });
        });
    };
    ChannelDeliveryDetailsComponent.prototype.ngOnChanges = function () {
    };
    // 码值
    ChannelDeliveryDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 点击站点
    ChannelDeliveryDetailsComponent.prototype.siteClick = function (col) {
        this.issiteFClick = true;
        this.setSelectValuess();
        this.siteId = col.channelId;
        this.showClassSite = col.channelName;
        this.productStoreId = col.productStoreId;
        this.muluQuery();
        this.isSiteClick = true;
    };
    // 目录默认查询
    ChannelDeliveryDetailsComponent.prototype.muluQuery = function () {
        var _this = this;
        var parms = { productStoreId: this.productStoreId };
        this.productManageHttpService.queryCatalogListFromProdStore(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.muluName = data.prodCatalogList;
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
    // 目录变更
    ChannelDeliveryDetailsComponent.prototype.shelveMain = function () {
        this.display = true;
        this.headerTitle = '店面商家目录维护';
        this.showModel = '2';
        if (this.muluName.length == 0) {
            this.mulu = 1;
        }
        else {
            this.mulu = 2;
        }
        this.updateValue = {
            productStoreId: this.productStoreId,
            storeName: this.storeName,
            channelId: this.channelId,
            mulu: this.mulu,
        };
    };
    // 目录变更回调
    ChannelDeliveryDetailsComponent.prototype.mainCall = function (param) {
        this.display = param;
        this.muluQuery();
    };
    // 已上架目录
    ChannelDeliveryDetailsComponent.prototype.muluClick = function (col) {
        var _this = this;
        this.ctlgIdValue = col.prodCatalogId;
        var parm = { ctlgId: col.prodCatalogId, pageSize: 10000, flag: '0' };
        this.productManageHttpService.ctlgMenuQuery(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.fenlei_id = '';
                _this.showClass = '';
                _this.all_tree = data.customerMenuList;
                _this.left_tree_arr = data.customerMenuList;
                _this.left_tree = _this.hierarchyTree(data.customerMenuList, '');
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
    // 树
    ChannelDeliveryDetailsComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        // 设置值
        this.gongneng_list = []; // 功能列表
        this.label_list = []; // 标签列表
        this.fenlei_id = event.node.value[0];
        // 设置可售产品的回显信息设置站点
        if (!this.selectValue[this.siteId]) {
            this.selectValue[this.siteId] = {};
        }
        // 设置目录下的分类回显
        if (!this.selectValue[this.siteId][this.fenlei_id]) {
            this.selectValue[this.siteId][this.fenlei_id] = {};
        }
        // 设置可售产品的回显
        if (!this.selectValue[this.siteId][this.fenlei_id]['productCheckbox']) {
            this.selectValue[this.siteId][this.fenlei_id]['productCheckbox'] = [];
        }
        var this_ = this;
        this.hierarchy_arr = this.getMeuInfo(this.left_tree_arr, event.node.value[0]);
        var parames = {
            pageNum: 1,
            pageSize: 10000,
            ctlgId: event.node.value[0],
            maxIdLevel: this.hierarchy_arr[1] + '',
            ctlgIdLevel: this.hierarchy_arr[0] + ''
        };
        var delData = function (data) {
            _this.keshou_list = [];
            _this.customerListtemp = data.customerListtemp;
            data.customerListtemp.forEach(function (item) {
                _this.keshou_list.push({
                    name: item.productName,
                    id: item.productId
                });
            });
            // 设置回显的值
            _this.productCheckbox = [];
            _this.productCheckbox = _this.selectValue[_this.siteId][_this.fenlei_id]['productCheckbox'];
        };
        this.interfaceComFnc(this.productManageHttpService.ctlgManageContactAttrInfo(parames), delData);
        // 当选站点下主目录
    };
    // +号点击
    ChannelDeliveryDetailsComponent.prototype.nodeExpend = function (event) {
        event.node.children = this.hierarchyTree(this.all_tree, event.node.value[0]);
    };
    ChannelDeliveryDetailsComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
                }
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
    // 层级树
    ChannelDeliveryDetailsComponent.prototype.hierarchyTree = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_1 = menu_list; _i < menu_list_1.length; _i++) {
            var key = menu_list_1[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    children: [{}],
                    label: key.name,
                    value: [key.id, key.pid]
                });
            }
        }
        return menu_arr;
    };
    ChannelDeliveryDetailsComponent.prototype.getMeuInfo = function (tree, curren_pid) {
        var count = 1;
        var getFirstId = function (tree) {
            var id = '';
            tree.every(function (item) {
                item.pid == '' ? id = item.id : null;
            });
            return id;
        };
        // 末级菜单id
        var getLastId = function (tree) {
            var id_arr = [];
            tree.forEach(function (item) {
                var stu = tree.every(function (item2) {
                    if (item.id != item2.pid) {
                        return true;
                    }
                }) ? id_arr.push(item.id) : null;
            });
            return id_arr;
        };
        // 最大层级深度
        var getMaxHierarchy = function (tree, first_id, last_arr) {
            var arr = [];
            last_arr.forEach(function (item) {
                count = 1;
                var max = currentHierarchy(tree, first_id, item);
                arr.push(max);
            });
            return arr.sort()[arr.length - 1];
        };
        // 当前层级深度
        // 记录层级次数
        function currentHierarchy(tree, first_id, pid) {
            if (pid != first_id) {
                tree.some(function (item) {
                    if (item.id === pid) {
                        count++;
                        currentHierarchy(tree, first_id, item.pid);
                        return false;
                    }
                });
            }
            return count;
        }
        var first_id = getFirstId(tree); // 一级菜单id
        var last_arr = getLastId(tree); // 末级菜单 id组
        var current_hierarchy = currentHierarchy(tree, first_id, curren_pid); // 当前层级
        var max_hierarchy = getMaxHierarchy(tree, first_id, last_arr); // 最大层级
        return [current_hierarchy, max_hierarchy];
    };
    // 产品点击
    ChannelDeliveryDetailsComponent.prototype.productClick = function (col) {
        // 设置值
        this.setSelectValuess();
        this.xuanze = [];
        this.bqxuanze = [];
        this.showClass = col.id;
        this.ArrObj = col;
        // 设置目录分类的值
        // 设置可售产品的回显的值
        if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]) {
            this.selectValue[this.siteId][this.fenlei_id][this.showClass] = {};
        }
        // 产品投放回显值
        if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]['xuanze']) {
            this.selectValue[this.siteId][this.fenlei_id][this.showClass]['xuanze'] = [];
        }
        // 标签回显
        if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze']) {
            this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze'] = [];
        }
        this.funQuery(this.showClass);
        this.labelQuery(this.showClass);
    };
    // 标签查询
    ChannelDeliveryDetailsComponent.prototype.labelQuery = function (dataA) {
        var _this = this;
        this.label_list = [
            { labelName: '推荐', labelId: '推荐' },
            { labelName: '热销', labelId: '热销' },
        ];
        // 查询执行一次回显
        this.toufanglistA.forEach(function (item) {
            if (item.siteId == _this.siteId && item.categoryId == _this.fenlei_id) {
                item.list.forEach(function (itemID) {
                    if (dataA == itemID.productId && itemID.tabindex === 'one') {
                        itemID.productLabelList.forEach(function (funt) {
                            if (funt.state == '25') {
                                _this.bqxuanze.push(funt.productLableName);
                            }
                        });
                        itemID.tabindex = 'two';
                        _this.setSelectValuess();
                    }
                });
            }
        });
        // 设置标签的回显值
        this.bqxuanze = this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze'];
    };
    // 功能查询
    ChannelDeliveryDetailsComponent.prototype.funQuery = function (data) {
        var _this = this;
        var parmFun = { productId: data };
        this.productManageHttpService.getProductFunctionByProductId(parmFun).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.gongneng_list = data.functionList;
                // 查询执行一次回显
                _this.toufanglistA.forEach(function (item) {
                    if (item.siteId == _this.siteId && item.categoryId == _this.fenlei_id) {
                        item.list.forEach(function (itemID) {
                            if (parmFun.productId == itemID.productId && itemID.funindex === 'one') {
                                itemID.productFuntionList.forEach(function (funt) {
                                    if (funt.state == '25') {
                                        _this.xuanze.push(funt.productFunctionId);
                                    }
                                });
                                itemID.funindex = 'two';
                                _this.setSelectValuess();
                            }
                        });
                    }
                });
                // 设置功能的回显值
                _this.xuanze = _this.selectValue[_this.siteId][_this.fenlei_id][_this.showClass]['xuanze'];
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
    ChannelDeliveryDetailsComponent.prototype.changeDeliveryV = function () {
        if (this.deliveryTypeV == 'Y') {
            this.dataV = true;
        }
        else {
            this.dataV = false;
        }
    };
    // 最后投放
    ChannelDeliveryDetailsComponent.prototype.toufangServe = function () {
        var _this = this;
        this.iscompeled = true;
        this.iscompele = true;
        if (this.deliveryTypeV === 'N' && this.startTime === null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择投放日期' });
            this.iscompele = false;
            this.iscompeled = false;
            return;
        }
        // this.productClick(this.ArrObj);
        var Arr1 = [];
        var arrAllV = [];
        var _loop_1 = function (key1) {
            var _loop_2 = function (key2) {
                if (this_1.selectValue[key1][key2].productCheckbox.length > 0) {
                    this_1.selectValue[key1][key2].productCheckbox.forEach(function (item1) {
                        var objAll = {
                            functionList: [],
                            labelList: [],
                            productId: '',
                            launchTime: null,
                            productCategoryId: '',
                            channelId: '',
                        };
                        var Arr10 = [];
                        var Arr11 = [];
                        _this.selectValue[key1][key2][item1].xuanze.forEach(function (item2) {
                            var obj = {};
                            obj['productFunctionId'] = item2;
                            obj['excDesc'] = '';
                            Arr10.push(obj);
                        });
                        _this.selectValue[key1][key2][item1].bqxuanze.forEach(function (item3) {
                            var obj = {};
                            obj['labelName'] = item3;
                            obj['labelLevel'] = '';
                            Arr11.push(obj);
                        });
                        objAll.functionList = Arr10;
                        objAll.labelList = Arr11;
                        objAll.productId = item1;
                        objAll.channelId = key1;
                        var Arr12 = '';
                        _this.customerListtemp.forEach(function (item3) {
                            if (item3.productId === item1) {
                                Arr12 = item3.productCategoryId;
                            }
                        });
                        objAll.productCategoryId = Arr12;
                        if (_this.deliveryTypeV == 'Y') {
                            objAll.launchTime = null;
                        }
                        else {
                            objAll.launchTime = _this.commfunc.transDate(_this.startTime);
                        }
                        arrAllV.push(objAll);
                    });
                }
            };
            for (var key2 in this_1.selectValue[key1]) {
                _loop_2(key2);
            }
        };
        var this_1 = this;
        for (var key1 in this.selectValue) {
            _loop_1(key1);
        }
        var upperFrameTimes = '';
        if (this.deliveryTypeV == 'Y') {
            upperFrameTimes = '';
        }
        else {
            upperFrameTimes = this.commfunc.transDate(this.startTime);
        }
        if (arrAllV.length <= 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择投放产品' });
            this.iscompeled = false;
            return;
        }
        var praM = {
            channeAndProductList: arrAllV,
            upperFrameFlag: this.deliveryTypeV,
            upperFrameTime: upperFrameTimes,
        };
        this.productManageHttpService.productUpperFrameTzb(praM).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_2 = _this;
                setTimeout(function () {
                    this_2.routerR.navigate(['/pages/tzb/product-manage/product-market/product-launch/channel-delivery']);
                    this.iscompele = false;
                }, 2000);
            }
            else {
                _this.iscompeled = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompele = false;
            }
        }, function (error) {
            _this.iscompeled = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            _this.iscompele = false;
        });
    };
    // 设置值的方法
    ChannelDeliveryDetailsComponent.prototype.setSelectValuess = function () {
        if (this.fenlei_id != '-1' && this.siteId) {
            // 设置可售产品
            if (!this.selectValue[this.siteId]) {
                this.selectValue[this.siteId] = {};
            }
            if (!this.selectValue[this.siteId][this.fenlei_id]) {
                this.selectValue[this.siteId][this.fenlei_id] = {};
            }
            if (!this.selectValue[this.siteId][this.fenlei_id]['productCheckbox']) {
                this.selectValue[this.siteId][this.fenlei_id]['productCheckbox'] = [];
            }
            var aa = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.productCheckbox);
            this.selectValue[this.siteId][this.fenlei_id]['productCheckbox'] = aa;
            if (this.siteId && this.fenlei_id && this.showClass) {
                // 产品投放回显值
                if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]) {
                    this.selectValue[this.siteId][this.fenlei_id][this.showClass] = {};
                }
                if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]['xuanze']) {
                    this.selectValue[this.siteId][this.fenlei_id][this.showClass]['xuanze'] = [];
                }
                var bb = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.xuanze);
                this.selectValue[this.siteId][this.fenlei_id][this.showClass]['xuanze'] = bb;
                // 标签选着
                if (!this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze']) {
                    this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze'] = [];
                }
                var cc = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.bqxuanze);
                this.selectValue[this.siteId][this.fenlei_id][this.showClass]['bqxuanze'] = cc;
            }
        }
        if (this.issiteFClick) {
            this.left_tree = [];
            this.all_tree = [];
            this.keshou_list = [];
            this.gongneng_list = [];
            this.label_list = [];
            // this.xuanze = [];
            // this.bqxuanze = [];
            this.issiteFClick = false;
        }
    };
    // 按钮权限
    ChannelDeliveryDetailsComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ChannelDeliveryDetailsComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    ChannelDeliveryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-delivery-details',
            template: __webpack_require__(/*! ./channel-delivery-details.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.html"),
            styles: [__webpack_require__(/*! ./channel-delivery-details.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        /**
         * 产品投放
         */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], ChannelDeliveryDetailsComponent);
    return ChannelDeliveryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container \">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>产品投放&下架</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 \">\r\n    <div class=\"ui-g-12 ui-md-12 module\">\r\n      <div class=\"ui-g-12 ui-md-12 form_item\">\r\n        <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n          <span>渠道编号:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n          <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"channelDeliveryBean.channelId\" style=\"width:80%\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n          <span>渠道名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n          <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"channelDeliveryBean.channelName\" style=\"width:80%\">\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n          <span>机构:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n          <div style=\"width:80%\">\r\n            <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"channelDeliveryBean.orgId\" [options]=\"select_business\"></p-dropdown>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" (click)=\"querySecle()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n            </div>\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 module emargin\">\r\n      <u-dataTable [value]=\"site_list\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            <label>选择</label>\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <p-checkbox [(ngModel)]=\"select_atr\" value=\"{{item.channelId}}\" name=\"sadsadsa\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"channelId\" header=\"渠道编号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'30%'}\" field=\"channelName\" header=\"渠道名称\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'30%'}\" field=\"channelDescription\" header=\"渠道描述\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <span *ngIf=\"item.channelDescription && item.channelDescription.length>15\">{{item.channelDescription.substring(0,15)}}...</span>\r\n            <span *ngIf=\"item.channelDescription && item.channelDescription.length<16\">{{item.channelDescription}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div style=\"float:right;\" class=\"emargin\">\r\n        <u-paginator [first]=\"first\" rows=\"{{channelDeliveryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate($event)\"></u-paginator>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <div style=\"width: 90px;display: inline-block;\" *ngIf=\"permissionCheck('SID03016_P087') || permissionCheck('SID23016_P087')\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton type=\"button\" (click)=\"deliveryClick()\" style=\"width: 60px;\" label=\"产品投放\"></button>\r\n          </div>\r\n        </div>\r\n        <span>&nbsp;</span>\r\n        <div style=\"width: 90px;display: inline-block;\" *ngIf=\"permissionCheck('SID03016_P088') || permissionCheck('SID23016_P088')\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"xiajia()\" label=\"产品下架\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .emargin {\n  margin: 10px 0; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXHByb2R1Y3QtbWFya2V0XFxwcm9kdWN0LWxhdW5jaFxcY2hhbm5lbC1kZWxpdmVyeVxcY2hhbm5lbC1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtFQVFRLGNBQWMsRUFBQTs7QUFSdEI7RUFXUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9wcm9kdWN0LW1hcmtldC9wcm9kdWN0LWxhdW5jaC9jaGFubmVsLWRlbGl2ZXJ5L2NoYW5uZWwtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmVtYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuZm9ybV9pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ChannelDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryComponent", function() { return ChannelDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_channel_delivery_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/channel-delivery.bean */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/bean/channel-delivery.bean.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 渠道投放-查询 熊正好 2019.4






var ChannelDeliveryComponent = /** @class */ (function () {
    function ChannelDeliveryComponent(productManageHttpService, router, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; // 列表无数据
        // bean
        this.channelDeliveryBean = new _bean_channel_delivery_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBean"]();
        this.all_title = '渠道投放';
        //   ceshi:any="ceswsds"
        this.select_1 = []; // 默认下拉
        this.star = {}; // URL传参
        // 列表
        this.site_list = [];
        // 提示信息
        this.msgs = [];
        this.first = 0; // 分页控制
        this.display = false;
        this.select_atr = []; // 所选站点
        this.select_business = []; // 店铺下拉
        this.arrA = []; // 所选站点ID
        this.select_business = [
            { label: '请选择', value: "" },
        ];
    }
    ChannelDeliveryComponent.prototype.ngOnInit = function () {
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        // this.business_query();
        this.queryClick();
    };
    // 重置
    ChannelDeliveryComponent.prototype.resetClick = function () {
        this.channelDeliveryBean = new _bean_channel_delivery_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBean"]();
    };
    // 店铺下拉
    ChannelDeliveryComponent.prototype.business_query = function () {
        var _this = this;
        var objDate = {
            pageNum: 1,
            pageSize: 1000,
        };
        this.productManageHttpService.productStoreList(objDate).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productStoreList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.storeName;
                    obj['value'] = item.productStoreId;
                    _this.select_business.push(obj);
                });
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
    // 查询始终第一页
    ChannelDeliveryComponent.prototype.querySecle = function () {
        this.channelDeliveryBean.pageSize = 10;
        this.channelDeliveryBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 查询
    ChannelDeliveryComponent.prototype.queryClick = function () {
        var _this = this;
        this.channelDeliveryBean.allFlag = '0';
        this.productManageHttpService.productChannelList(this.channelDeliveryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.site_list = data.productChannelList;
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
    // 投放
    ChannelDeliveryComponent.prototype.deliveryClick = function () {
        var _this = this;
        if (this.select_atr.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择所投放的渠道" });
        }
        else {
            this.select_atr.forEach(function (i) {
                if (_this.star['channelId']) {
                    _this.star['channelId'].push(i);
                }
                else {
                    _this.star['channelId'] = [];
                    _this.star['channelId'].push(i);
                }
            });
            this.router.navigate(['/pages/tzb/product-manage/product-market/product-launch/channel-delivery-details', this.star]);
        }
    };
    // 下架
    ChannelDeliveryComponent.prototype.xiajia = function () {
        var _this = this;
        if (this.select_atr.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择所下架的渠道" });
        }
        else {
            this.select_atr.forEach(function (i) {
                if (_this.star['channelId']) {
                    _this.star['channelId'].push(i);
                }
                else {
                    _this.star['channelId'] = [];
                    _this.star['channelId'].push(i);
                }
            });
            this.router.navigate(['/pages/tzb/product-manage/product-market/product-launch/product-lower-frame', this.star]);
        }
    };
    // 分页
    ChannelDeliveryComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.channelDeliveryBean.pageSize = event.rows * 1;
        // 当前页
        var currentPage = event.page + 1;
        this.channelDeliveryBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.channelDeliveryBean.pageSize;
        // 调用查询的方法
        this.queryClick();
        this.channelDeliveryBean.pageNum = 1;
    };
    // 按钮权限
    ChannelDeliveryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ChannelDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-delivery',
            template: __webpack_require__(/*! ./channel-delivery.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.html"),
            styles: [__webpack_require__(/*! ./channel-delivery.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], ChannelDeliveryComponent);
    return ChannelDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li>\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>产品下架</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module emargin\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <button class=\"un_active\" (click)=\"cataloguesClickA()\" [ngClass]=\"{'active':showClassA =='cataloguesClickA' }\">目录下架</button>\r\n      <button class=\"un_active\" (click)=\"classificationClickA()\" [ngClass]=\"{'active':showClassA =='classificationClickA' }\">分类下架</button>\r\n      <button class=\"un_active\" (click)=\"productlowClickA()\" [ngClass]=\"{'active':showClassA =='productlowClickA' }\">产品下架</button>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"showClassA=='cataloguesClickA'\">\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>渠道</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCssd un_actived\" [ngClass]=\"{'actived':showClass == col.channelName}\" *ngFor=\"let col of siteNameList\" (click)=\"siteClick(col)\">\r\n              <span>\r\n                <label>{{col.channelName}}</label>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n          <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n            <h3>店铺</h3>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 box2\">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss\">\r\n                <label>{{storeName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div> -->\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>已上架目录</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12 \">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss un_actived\" [ngClass]=\"{'actived':showMClass == col.catalogName}\" *ngFor=\"let col of muluName;let ri = index\"\r\n                (click)=\"muluClick(col)\">\r\n                <p-checkbox (onChange)=\"serverOne()\" [(ngModel)]=\"catalogCheckbox\" value=\"{{col.prodCatalogId}}\" name=\"aa\"></p-checkbox>\r\n                <label>{{col.catalogName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"showClassA=='classificationClickA'\">\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>渠道</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCssd un_actived\" [ngClass]=\"{'actived':showClass == col.channelName}\" *ngFor=\"let col of siteNameList\" (click)=\"siteClick(col)\">\r\n              <span>\r\n                <label>{{col.channelName}}</label>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n          <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n            <h3>店铺</h3>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 box2\">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss\">\r\n                <label>{{storeName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div> -->\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>已上架目录</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12 \">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss un_actived\" [ngClass]=\"{'actived':showMClass == col.catalogName}\" *ngFor=\"let col of muluName\" (click)=\"muluClick(col)\">\r\n                <label>{{col.catalogName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>目录下的分类</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <p-tree [value]=\"left_tree\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeUnSelect)=\"nodeUnSelect($event)\"\r\n              (onNodeExpand)=\"nodeExpend($event)\">\r\n              <ng-template let-node pTemplate=\"default\">\r\n                <p-checkbox [disabled]='prohibit' name=\"group1\" (onChange)=\"onChange(node)\" value={{node.value[0]}} label={{node.label}}\r\n                  [(ngModel)]=\"selectedList\"></p-checkbox>\r\n              </ng-template>\r\n            </p-tree>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"showClassA=='productlowClickA'\">\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>渠道</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCssd un_actived\" [ngClass]=\"{'actived':showClass == col.channelName}\" *ngFor=\"let col of siteNameList\" (click)=\"siteClick(col)\">\r\n              <span>\r\n                <label>{{col.channelName}}</label>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n          <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n            <h3>店铺</h3>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 box2\">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss\">\r\n                <label>{{storeName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div> -->\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>已上架目录</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12 \">\r\n            <ul class=\"ulCss\">\r\n              <li class=\"liCss un_actived\" [ngClass]=\"{'actived':showMClass == col.catalogName}\" *ngFor=\"let col of muluName\" (click)=\"muluClick(col)\">\r\n                <label>{{col.catalogName}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>目录下的分类</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <p-tree [value]=\"left_tree\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n          <h3>可售产品/套餐</h3>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 box2\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCss\" *ngFor=\"let col of keshou_list;let ri = index\">\r\n              <p-checkbox (onChange)=\"serverThree()\" [(ngModel)]=\"productCheckbox\" value=\"{{col.id}}\" name=\"ee\"></p-checkbox>\r\n              <label [ngClass]=\"{'active':show == col.name}\">{{col.name}}</label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n        <span>立即下架:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <div style=\"width: 50%;\">\r\n          <p-dropdown styleClass=\"ui-dropdown-new\" (onChange)=\"changeDeliveryV()\" [(ngModel)]=\"deliveryTypeV\" [options]=\"deliveryType\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n        <span>下架日期:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-calendar styleClass=\"ui-calendar-new\" [showIcon]=\"true\" [disabled]='dataV' [(ngModel)]=\"startTime\" [minDate]=\"transferedDateNow\"\r\n          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yymmdd\" [locale]=\"ch\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 95px;display: inline-block;\" *ngIf=\"showClassA=='cataloguesClickA'\">\r\n        <!-- <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"cataloguesClick()\" type=\"button\" label=\"目录下架\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"cataloguesClick()\" type=\"button\" label=\"目录下架\" [disabled]='iscompele' class=\"uButton\" style=\"width: 95px;height: 30px;\"></button>\r\n      </div>\r\n      <!-- [disabled]='iscompele' -->\r\n      <div style=\"width: 95px;display: inline-block;\" *ngIf=\"showClassA=='classificationClickA'\">\r\n        <!-- <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"classificationClick()\" type=\"button\" label=\"分类下架\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"classificationClick()\" type=\"button\" label=\"分类下架\" [disabled]='iscompeles' class=\"uButton\" style=\"width: 95px;height: 30px;\"></button>\r\n      </div>\r\n      <!-- [disabled]='iscompeles' -->\r\n      <div style=\"width: 95px;display: inline-block;\" *ngIf=\"showClassA=='productlowClickA'\">\r\n        <!-- <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"productlowClick()\" type=\"button\" label=\"产品下架\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"productlowClick()\" type=\"button\" label=\"产品下架\" [disabled]='iscompeled' class=\"uButton\" style=\"width: 95px;height: 30px;\"></button>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"goBack()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n      <!-- [disabled]='iscompeled' -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .emargin {\n  margin: 10px 0; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.container .boxAll {\n  height: 520px;\n  overflow: auto; }\n\n.container .boxAll .box1 {\n    color: #ffffff;\n    border: 1px solid #6AC7ED;\n    overflow: auto;\n    background-color: #6AC7ED; }\n\n.container .boxAll .box2 {\n    height: 85%;\n    border-left: 1px solid #6AC7ED;\n    border-right: 1px solid #6AC7ED;\n    border-bottom: 1px solid #6AC7ED;\n    overflow: auto; }\n\n.container .boxAll .box2 .ulCss {\n      margin-left: -3rem; }\n\n.container .boxAll .box2 .liCss {\n      list-style-type: none;\n      margin: 10px 16px; }\n\n.container .boxAll .box2 .liCssd {\n      margin: 0 25px; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none;\n    margin: 10px 16px; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  background-color: #CFCACA;\n  border-radius: 6px;\n  color: white;\n  margin: 10px 10px;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 16px; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: #0094D2;\n  border-radius: 6px;\n  color: white;\n  margin: 10px 10px;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 16px; }\n\n.container .un_actived {\n  padding: 6px;\n  border: none !important;\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .actived {\n  padding: 6px;\n  border: none !important;\n  background-color: rgba(198, 223, 239, 0.94);\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n:host/deep/ .ui-dropdown {\n  width: 50% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 50%; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvcHJvZHVjdC1sb3dlci1mcmFtZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxccHJvZHVjdC1tYXJrZXRcXHByb2R1Y3QtbGF1bmNoXFxjaGFubmVsLWRlbGl2ZXJ5XFxwcm9kdWN0LWxvd2VyLWZyYW1lXFxwcm9kdWN0LWxvd2VyLWZyYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsY0FBYyxFQUFBOztBQVJ0QjtFQVdRLHlCQUF5QixFQUFBOztBQVhqQztFQWNRLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBZnRCO0lBaUJZLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QixFQUFBOztBQXBCckM7SUF1QlksV0FBVztJQUNYLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGNBQWMsRUFBQTs7QUEzQjFCO01BNkJnQixrQkFBa0IsRUFBQTs7QUE3QmxDO01BZ0NnQixxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUE7O0FBakNqQztNQW9DZ0IsY0FBYyxFQUFBOztBQXBDOUI7RUEwQ1ksV0FBVyxFQUFBOztBQTFDdkI7SUE0Q2dCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBOUNqQztFQW1EUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBNUR2QjtFQStEUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBeEV2QjtFQTJFUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQS9FckI7RUFrRlEsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBS3JCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2NoYW5uZWwtZGVsaXZlcnkvcHJvZHVjdC1sb3dlci1mcmFtZS9wcm9kdWN0LWxvd2VyLWZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5lbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ib3hBbGwge1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLmJveDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUM3RUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAudWxDc3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saUNzcyB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlDc3NkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDQUNBO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC51bl9hY3RpdmVkIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlZCB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCAyMjMsIDIzOSwgMC45NCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ProductLowerFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLowerFrameComponent", function() { return ProductLowerFrameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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




 // 中文

var ProductLowerFrameComponent = /** @class */ (function () {
    function ProductLowerFrameComponent(router, routerR, productManageHttpService, commfunc) {
        this.router = router;
        this.routerR = routerR;
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 选中
        this.selectValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 去掉选中
        this.unSelectValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 改变的值
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 所有选中的值
        this.selectAllValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 选中的值
        this.selectedList = [];
        // 选中的全部值
        this.allSelectedList = [];
        // 初始机构号
        this.org = '';
        this.prohibit = false; // 复选框禁止
        this.iscompele = false;
        this.iscompeles = false;
        this.iscompeled = false;
        // 站点数据回显
        this.chooseValueA = {};
        this.showClassA = 'cataloguesClickA'; // 点击状态1
        this.catalogCheckbox = []; // 目录复选框
        this.productCheckbox = [];
        this.fenleiId = '-1'; // 分类ID
        this.channelId = '';
        this.deliveryTypeV = ''; // 是否立即投放Value
        this.startTime = null;
        this.transferedDateNow = null;
        this.dataV = true;
        this.siteId = '-1'; // 站点ID
        this.siteIds = '-1'; // 渠道ID
        this.siteIdList = []; // 站点ID数组
        this.siteNameList = []; // 站点Name数组
        this.msgs = []; // 提示信息
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.left_tree = [];
        this.left_tree_arr = [];
        this.any = [];
        this.hierarchy_arr = [];
        this.list = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.deliveryType = this.code['DeliveryTypes'];
    }
    ProductLowerFrameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryTypeV = 'Y';
        var time21 = new Date();
        var time212 = new Date(time21.getTime() + 24 * 60 * 60 * 1000);
        this.transferedDateNow = time212;
        // this.router.params.subscribe((data) => {
        //   this.channelId = data['channelId'];
        //   let parm = {
        //     channelId: this.channelId,
        //   };
        //   this.productManageHttpService.queryProdCataListForChannelPage(parm).subscribe(data => {
        //     if (data.returnCode.code == "success") {
        //       this.siteNameList.push(data.prodChannelList[0]);
        //     } else {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //     }
        //   }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        //   });
        // });
        var channelIdlist = [];
        this.router.params.subscribe(function (data) {
            channelIdlist = data['channelId'].split(',');
            _this.siteNameList = [];
            channelIdlist.forEach(function (item) {
                _this.channelId = item;
                var parm = {
                    channelId: _this.channelId,
                };
                _this.productManageHttpService.queryProdCataListForChannelPage(parm).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.siteNameList.push(data.prodChannelList[0]);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            });
        });
    };
    // 码值
    ProductLowerFrameComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 点击渠道
    ProductLowerFrameComponent.prototype.siteClick = function (col) {
        this.siteId = col.webSiteId;
        this.siteIds = col.channelId;
        this.showClass = col.siteName;
        this.productStoreId = col.productStoreId;
        this.keshou_list = [];
        this.left_tree = [];
        this.fenleiId = '-1';
        this.productCheckbox = [];
        this.muluQuery();
        if (this.showClassA === 'cataloguesClickA') {
            if (!this.chooseValueA[this.siteIds]) {
                this.chooseValueA[this.siteIds] = {};
            }
            if (!this.chooseValueA[this.siteIds]['catalogCheckbox']) {
                this.chooseValueA[this.siteIds]['catalogCheckbox'] = [];
            }
            // 设置可售产品的回显值
            if (this.chooseValueA[this.siteIds]['catalogCheckbox']) {
                this.catalogCheckbox = this.chooseValueA[this.siteIds]['catalogCheckbox'];
            }
        }
        if (this.showClassA === 'productlowClickA' && this.fenleiId != '-1') {
            // if(){}
            if (!this.chooseValueA[this.siteIds]) {
                this.chooseValueA[this.siteIds] = {};
            }
            if (!this.chooseValueA[this.siteIds][this.fenleiId]) {
                this.chooseValueA[this.siteIds][this.fenleiId] = {};
            }
            if (!this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox']) {
                this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox'] = [];
            }
            // 设置可售产品的回显值
            if (this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox']) {
                this.productCheckbox = this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox'];
            }
        }
        if (this.showClassA === 'classificationClickA') {
            // if (this.siteId != '-1') {
            //   if (!this.chooseValueA[this.siteId]) {
            //     this.chooseValueA[this.siteId] = {};
            //   }
            //   if (!this.chooseValueA[this.siteId]['flId']) {
            //     this.chooseValueA[this.siteId]['flId'] = [];
            //   }
            //   let aa = _.clone(this.selectedList);
            //   this.chooseValueA[this.siteId]['flId'] = aa;
            // }
            this.selectedList = [];
        }
    };
    // 目录默认查询
    ProductLowerFrameComponent.prototype.muluQuery = function () {
        var _this = this;
        var parms = {
            productStoreId: this.productStoreId,
            allFlag: '0',
        };
        this.productManageHttpService.queryCatalogListFromProdStore(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.muluName = data.prodCatalogList;
                for (var i = 0; i < _this.muluName.length; i++) {
                    _this.muluName[i]['channelId'] = '';
                    _this.muluName[i]['channelId'] = _this.siteIds;
                }
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
    // 已上架目录
    ProductLowerFrameComponent.prototype.muluClick = function (col) {
        var _this = this;
        this.showMClass = col.catalogName;
        this.ctlgIdValue = col.prodCatalogId;
        var parm = { ctlgId: col.prodCatalogId, pageSize: 10000 };
        this.productManageHttpService.ctlgMenuQuery(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.all_tree = data.customerMenuList;
                _this.left_tree_arr = data.customerMenuList;
                _this.left_tree = _this.hierarchyTree(data.customerMenuList, '');
                for (var i = 0; i < _this.left_tree.length; i++) {
                    _this.left_tree[i]['channelId'] = '';
                    _this.left_tree[i]['channelId'] = col.channelId;
                }
                if (_this.showClassA === 'classificationClickA') {
                    if (!_this.chooseValueA[_this.siteIds]) {
                        _this.chooseValueA[_this.siteIds] = {};
                    }
                    if (!_this.chooseValueA[_this.siteIds]['flId']) {
                        _this.chooseValueA[_this.siteIds]['flId'] = [];
                    }
                    // 回显
                    if (_this.chooseValueA[_this.siteIds]['flId'].length > 0) {
                        _this.selectedList = _this.chooseValueA[_this.siteIds]['flId'];
                    }
                }
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
    // 选中
    ProductLowerFrameComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        event.node['orgId'] = event.node.value[0];
        this.org = event.node.orgId;
        if (event.node.parent) {
            this.fenleiId = event.node.value[0];
        }
        var this_ = this;
        this.hierarchy_arr = this.getMeuInfo(this.left_tree_arr, event.node.value[0]);
        var parames = {
            ctlgId: event.node.value[0],
            maxIdLevel: this.hierarchy_arr[1],
            ctlgIdLevel: this.hierarchy_arr[0],
            pageSize: 10000,
            flag: '0',
            channelId: '',
        };
        if (event.node.channelId) {
            parames.channelId = event.node.channelId;
        }
        else {
            parames.channelId = event.node.parent.channelId;
        }
        this.muluFen = parames;
        var delData = function (data) {
            _this.keshou_list = [];
            data.customerListtemp.forEach(function (item) {
                _this.keshou_list.push({
                    name: item.productName,
                    id: item.productId,
                    pid: item.productCategoryId
                });
                _this.fenleiId = item.productCategoryId;
                if (!_this.chooseValueA[_this.siteIds]) {
                    _this.chooseValueA[_this.siteIds] = {};
                }
                if (!_this.chooseValueA[_this.siteIds][_this.fenleiId]) {
                    _this.chooseValueA[_this.siteIds][_this.fenleiId] = {};
                }
                if (!_this.chooseValueA[_this.siteIds][_this.fenleiId]['productCheckbox']) {
                    _this.chooseValueA[_this.siteIds][_this.fenleiId]['productCheckbox'] = [];
                }
                if (_this.chooseValueA[_this.siteIds][_this.fenleiId]['productCheckbox']) {
                    _this.productCheckbox = _this.chooseValueA[_this.siteIds][_this.fenleiId]['productCheckbox'];
                }
            });
        };
        this.interfaceComFnc(this.productManageHttpService.ctlgManageContactAttrInfo(parames), delData);
    };
    // +号点击
    ProductLowerFrameComponent.prototype.nodeExpend = function (event) {
        event.node.children = this.hierarchyTree(this.all_tree, event.node.value[0]);
        event.node['orgId'] = event.node.value[0];
        this.org = event.node.orgId;
    };
    ProductLowerFrameComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
                }
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
    // 层级树
    ProductLowerFrameComponent.prototype.hierarchyTree = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_1 = menu_list; _i < menu_list_1.length; _i++) {
            var key = menu_list_1[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    children: [{}],
                    label: key.name,
                    value: [key.id, key.pid]
                });
            }
        }
        return menu_arr;
    };
    ProductLowerFrameComponent.prototype.getMeuInfo = function (tree, curren_pid) {
        var count = 1;
        var getFirstId = function (tree) {
            var id = '';
            tree.every(function (item) {
                item.pid == '' ? id = item.id : null;
            });
            return id;
        };
        // 末级菜单id
        var getLastId = function (tree) {
            var id_arr = [];
            tree.forEach(function (item) {
                var stu = tree.every(function (item2) {
                    if (item.id != item2.pid) {
                        return true;
                    }
                }) ? id_arr.push(item.id) : null;
            });
            return id_arr;
        };
        // 最大层级深度
        var getMaxHierarchy = function (tree, first_id, last_arr) {
            var arr = [];
            last_arr.forEach(function (item) {
                count = 1;
                var max = currentHierarchy(tree, first_id, item);
                arr.push(max);
            });
            return arr.sort()[arr.length - 1];
        };
        // 当前层级深度
        // 记录层级次数
        function currentHierarchy(tree, first_id, pid) {
            if (pid != first_id) {
                tree.some(function (item) {
                    if (item.id === pid) {
                        count++;
                        currentHierarchy(tree, first_id, item.pid);
                        return false;
                    }
                });
            }
            return count;
        }
        var first_id = getFirstId(tree); // 一级菜单id
        var last_arr = getLastId(tree); // 末级菜单 id组
        var current_hierarchy = currentHierarchy(tree, first_id, curren_pid); // 当前层级
        var max_hierarchy = getMaxHierarchy(tree, first_id, last_arr); // 最大层级
        return [current_hierarchy, max_hierarchy];
    };
    // 目录下架
    ProductLowerFrameComponent.prototype.cataloguesClick = function () {
        var _this = this;
        this.iscompele = true;
        if (this.deliveryTypeV === 'N' && this.startTime === null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择投放日期' });
            this.iscompele = false;
            return;
        }
        var dataList = [];
        var _loop_1 = function (key) {
            if (this_1.chooseValueA[key].catalogCheckbox.length > 0) {
                this_1.chooseValueA[key].catalogCheckbox.forEach(function (item) {
                    var obj = {};
                    obj['prodCatalogId'] = item;
                    obj['channelId'] = key;
                    dataList.push(obj);
                });
            }
        };
        var this_1 = this;
        for (var key in this.chooseValueA) {
            _loop_1(key);
        }
        if (dataList.length <= 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择下架目录' });
            this.iscompele = false;
            return;
        }
        var startTimes = '';
        if (this.deliveryTypeV == 'Y') {
            startTimes = '';
        }
        else if (this.deliveryTypeV == 'N') {
            startTimes = this.commfunc.transDate(this.startTime);
        }
        var dataM = {
            productCategoryList: dataList,
            // channelId: this.siteIds,
            lowerFrameFlag: this.deliveryTypeV,
            lowerFrameTime: startTimes,
        };
        this.productManageHttpService.pullCatalogOffProductStoreShelfTzb(dataM).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_2 = _this;
                setTimeout(function () {
                    this_2.routerR.navigate(['/pages/tzb/product-manage/product-market/product-launch/channel-delivery']);
                    _this.iscompele = false;
                }, 2000);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompele = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            _this.iscompele = false;
        });
    };
    ProductLowerFrameComponent.prototype.cataloguesClickA = function () {
        this.showClassA = 'cataloguesClickA';
        this.chooseValueA = {};
        this.storeName = '';
        this.muluName = [];
        this.left_tree = [];
        this.keshou_list = [];
    };
    // 分类下架
    ProductLowerFrameComponent.prototype.classificationClick = function () {
        var _this = this;
        this.iscompeles = true;
        if (this.deliveryTypeV === 'N' && this.startTime === null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择投放日期' });
            this.iscompeles = false;
            return;
        }
        var startTimes = '';
        if (this.deliveryTypeV == 'Y') {
            startTimes = '';
        }
        else if (this.deliveryTypeV == 'N') {
            startTimes = this.commfunc.transDate(this.startTime);
        }
        if (this.list.length <= 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择下架分类' });
            this.iscompeles = false;
            return;
        }
        var dataList = [];
        for (var item in this.list) {
            for (var key in this.chooseValueA) {
                for (var index in this.chooseValueA[key].flId) {
                    if (this.list[item].productCategoryId == this.chooseValueA[key].flId[index]) {
                        var obj = {};
                        obj['channelId'] = key;
                        obj['productCategoryId'] = this.list[item].productCategoryId;
                        obj['parentProductCategoryId'] = this.list[item].parentProductCategoryId;
                        dataList.push(obj);
                    }
                }
            }
        }
        this.list = dataList;
        var dataF = {
            productCategoryList: this.list,
            // channelId: this.siteIds,
            lowerFrameFlag: this.deliveryTypeV,
            lowerFrameTime: startTimes // 下架时间
        };
        this.productManageHttpService.productCategoryShelfTzb(dataF).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = [];
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_3 = _this;
                setTimeout(function () {
                    this_3.routerR.navigate(['/pages/tzb/product-manage/product-market/product-launch/channel-delivery']);
                    _this.iscompeles = false;
                }, 2000);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompeles = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            _this.iscompeles = false;
        });
    };
    ProductLowerFrameComponent.prototype.classificationClickA = function () {
        this.showClassA = 'classificationClickA';
        this.chooseValueA = {};
        this.storeName = '';
        this.muluName = [];
        this.left_tree = [];
        this.keshou_list = [];
    };
    // 产品下架
    ProductLowerFrameComponent.prototype.productlowClick = function () {
        var _this = this;
        this.iscompeled = true;
        if (this.deliveryTypeV === 'N' && this.startTime === null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择下架日期' });
            this.iscompeled = false;
            return;
        }
        var dataList = [];
        var _loop_2 = function (key1) {
            var _loop_3 = function (key2) {
                if (this_4.chooseValueA[key1][key2].productCheckbox.length > 0) {
                    this_4.chooseValueA[key1][key2].productCheckbox.forEach(function (item) {
                        var obj = {};
                        obj['productCategoryId'] = key2;
                        obj['productId'] = item;
                        obj['channelId'] = key1;
                        dataList.push(obj);
                    });
                }
            };
            for (var key2 in this_4.chooseValueA[key1]) {
                _loop_3(key2);
            }
        };
        var this_4 = this;
        for (var key1 in this.chooseValueA) {
            _loop_2(key1);
        }
        var startTimes = '';
        if (this.deliveryTypeV == 'Y') {
            startTimes = '';
        }
        else if (this.deliveryTypeV == 'N') {
            startTimes = this.commfunc.transDate(this.startTime);
        }
        if (dataList.length <= 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择下架产品' });
            this.iscompeled = false;
            return;
        }
        var dataP = {
            channeAndProductList: dataList,
            // channelId: this.siteIds,
            lowerFrameFlag: this.deliveryTypeV,
            lowerFrameTime: startTimes,
        };
        this.productManageHttpService.productShelfTzb(dataP).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_5 = _this;
                setTimeout(function () {
                    this_5.routerR.navigate(['/pages/tzb/product-manage/product-market/product-launch/channel-delivery']);
                    _this.iscompeled = false;
                }, 2000);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompeled = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            _this.iscompeled = false;
        });
    };
    ProductLowerFrameComponent.prototype.productlowClickA = function () {
        this.showClassA = 'productlowClickA';
        this.chooseValueA = {};
        this.storeName = '';
        this.muluName = [];
        this.left_tree = [];
        this.keshou_list = [];
    };
    // 下架选择
    ProductLowerFrameComponent.prototype.changeDeliveryV = function () {
        if (this.deliveryTypeV == 'Y') {
            this.dataV = true;
        }
        else {
            this.dataV = false;
        }
    };
    ProductLowerFrameComponent.prototype.serverOne = function () {
        // 设置可售产品的回显信息设置站点
        if (!this.chooseValueA[this.siteIds]) {
            this.chooseValueA[this.siteIds] = {};
        }
        if (!this.chooseValueA[this.siteIds]['catalogCheckbox']) {
            this.chooseValueA[this.siteIds]['catalogCheckbox'] = [];
        }
        var aa = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.catalogCheckbox);
        this.chooseValueA[this.siteIds]['catalogCheckbox'] = aa;
    };
    ProductLowerFrameComponent.prototype.serverTwo = function () {
        if (!this.chooseValueA[this.siteIds]) {
            this.chooseValueA[this.siteIds] = {};
        }
        if (!this.chooseValueA[this.siteIds]['flId']) {
            this.chooseValueA[this.siteIds]['flId'] = [];
        }
        var aa = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.selectedList);
        this.chooseValueA[this.siteIds]['flId'] = aa;
    };
    ProductLowerFrameComponent.prototype.serverThree = function () {
        if (!this.chooseValueA[this.siteIds]) {
            this.chooseValueA[this.siteIds] = {};
        }
        if (!this.chooseValueA[this.siteIds][this.fenleiId]) {
            this.chooseValueA[this.siteIds][this.fenleiId] = {};
        }
        if (!this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox']) {
            this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox'] = [];
        }
        var aa = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.productCheckbox);
        this.chooseValueA[this.siteIds][this.fenleiId]['productCheckbox'] = aa;
    };
    ProductLowerFrameComponent.prototype.ceshi = function () {
    };
    ProductLowerFrameComponent.prototype.chushuhua = function () {
        this.allSelectedList = [];
    };
    // 去掉选中
    ProductLowerFrameComponent.prototype.nodeUnSelect = function (event) {
        this.treeOrgName = event.node.label;
        this.orgEle = { orgId: event.node.orgId, orgName: event.node.orgName, location: event.node.location };
        if (this.allSelectedList.length == 1) {
            this.allSelectedList = [];
        }
        else {
            this.allSelectedList.splice(this.allSelectedList.indexOf(event.node), 1);
        }
        this.unSelectValue.emit(event.node);
    };
    // 改变的值
    ProductLowerFrameComponent.prototype.onChange = function (node) {
        var _this = this;
        var id = node.value[0];
        if (node.parent === undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择正确的分类' });
            for (var i = 0; i < this.selectedList.length; i++) {
                if (this.selectedList[i] === id) {
                    this.selectedList.splice(i, 1);
                    break;
                }
            }
            this.selectedList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.selectedList);
        }
        else {
            // 判断选中列表中是否已存在该分类，存在则取消选中该分类
            var isNotSame_1 = true;
            this.list.forEach(function (item, i) {
                if (item.productCategoryId === node.value[0] && item.parentProductCategoryId === node.value[1]) {
                    isNotSame_1 = false;
                    _this.list.splice(i, 1);
                }
            });
            if (isNotSame_1) {
                this.list.push({ productCategoryId: node.value[0], parentProductCategoryId: node.value[1] });
            }
        }
        this.onChangeNode = node;
        this.changeValue.emit(node);
        this.serverTwo();
    };
    // 按钮权限
    ProductLowerFrameComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ProductLowerFrameComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductLowerFrameComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductLowerFrameComponent.prototype, "selectValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductLowerFrameComponent.prototype, "unSelectValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductLowerFrameComponent.prototype, "changeValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductLowerFrameComponent.prototype, "selectAllValue", void 0);
    ProductLowerFrameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-lower-frame',
            template: __webpack_require__(/*! ./product-lower-frame.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.html"),
            styles: [__webpack_require__(/*! ./product-lower-frame.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        /**
         * 投放下架
         */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], ProductLowerFrameComponent);
    return ProductLowerFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\" *ngIf=\"cattlehide\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li>\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>投放查询</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\" margin: 10px 10px;\">\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>批次号</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCssd un_active\" [ngClass]=\"{'active':showClass == col.applySerialNo}\" *ngFor=\"let col of batchdListV \" (click)=\"batchClick(col)\">\r\n            <span>\r\n              <label>{{col.applySerialNo}}</label>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放渠道</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <ul class=\"ulCss\">\r\n            <li class=\"liCss un_active\" [ngClass]=\"{'active':showClassSite == col.webSiteId}\" *ngFor=\"let col of siteList;let ri = index\" (click)=\"siteClick(col)\">\r\n              <p-checkbox [(ngModel)]=\"selectVlue\" value=\"{{ri}}\" name=\"ddd\" *ngIf=\"!Gzldis\"></p-checkbox>\r\n              <label>{{col.channelName}}</label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\" *ngIf=\"!Gzldis\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" (click)=\"notice()\" [disabled]='Gzldis' style=\"width: 60px;\" label=\"手工通知\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放产品</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss un_active\" [ngClass]=\"{'active':showClassProduct == col.productId}\" *ngFor=\"let col of productListN \" (click)=\"productClick(col)\">\r\n            <label>{{col.productName}}</label>\r\n            <label>{{col.productState|codeValuePie:productDeliveryType}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放产品功能</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of functionList\">\r\n            <label>{{col.productFunctionName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放标签</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of labelList;let ri = index\">\r\n            <label>{{col.productLableName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n            <!-- <div *ngIf=\"col.labelType=='LEVEL'\" style=\"display:inline-block\">\r\n              <span>级别:</span>\r\n              <input type=\"text\" value=\"\" type=\"number\" min=\"1\" max=\"10\" max='{{col.labelLevel}}' style=\"width:42px\" [(ngModel)]=\"col.labelLevelVluer\">\r\n              <span>最高{{col.labelLevel}}级</span>\r\n            </div> -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\" *ngIf=\"cattlehide\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"goBack()\" style=\"width: 60px;\" label=\"返回\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: rgba(198, 223, 239, 0.94);\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .boxAll {\n  height: 520px;\n  overflow: auto; }\n\n.container .boxAll .box1 {\n    color: #fff;\n    border: 1px solid #6AC7ED;\n    overflow: auto;\n    background-color: #6AC7ED; }\n\n.container .boxAll .box2 {\n    height: 70%;\n    border-left: 1px solid #6AC7ED;\n    border-right: 1px solid #6AC7ED;\n    border-bottom: 1px solid #6AC7ED;\n    overflow: auto; }\n\n.container .boxAll .box2 .ulCss {\n      margin-left: -3rem; }\n\n.container .boxAll .box2 .liCss {\n      list-style-type: none;\n      margin: 10px 16px; }\n\n.container .boxAll .box2 .liCssd {\n      margin: 5px 25px; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2RlbGl2ZXJ5LXF1ZXJ5L2JhdGNoLXF1ZXJ5LWRldGFpbHMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXHByb2R1Y3QtbWFya2V0XFxwcm9kdWN0LWxhdW5jaFxcZGVsaXZlcnktcXVlcnlcXGJhdGNoLXF1ZXJ5LWRldGFpbHNcXGJhdGNoLXF1ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7SUFPWSxpQkFBaUIsRUFBQTs7QUFQN0I7RUFXUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQWZyQjtFQWtCUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUF2QnJCO0VBMEJRLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBM0J0QjtJQTZCWSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTs7QUFoQ3JDO0lBbUNZLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxjQUFjLEVBQUE7O0FBdkMxQjtNQXlDZ0Isa0JBQWtCLEVBQUE7O0FBekNsQztNQTRDZ0IscUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBOztBQTdDakM7TUFnRGdCLGdCQUFnQixFQUFBOztBQWhEaEM7RUFxRFEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvcHJvZHVjdC1sYXVuY2gvZGVsaXZlcnktcXVlcnkvYmF0Y2gtcXVlcnktZGV0YWlscy9iYXRjaC1xdWVyeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OCwgMjIzLCAyMzksIDAuOTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJveEFsbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAuYm94MSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNkFDN0VEO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZBQzdFRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNkFDN0VEO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNkFDN0VEO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIC51bENzcyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpQ3NzIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saUNzc2Qge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: BatchQueryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchQueryDetailsComponent", function() { return BatchQueryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BatchQueryDetailsComponent = /** @class */ (function () {
    function BatchQueryDetailsComponent(router, productManageHttpService, commfunc) {
        this.router = router;
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.Gzldis = false;
        this.cattlehide = true;
        this.msgs = [];
        this.batchdList = [];
        this.batchdListV = [];
        this.siteList = []; // 站点列表
        this.selectVlue = []; // 所选站点
        this.productListN = []; // 产品列表
        this.functionList = []; // 功能列表
        this.labelList = []; // 标签列表
        this.codeValues(); // 调用方法，获取全部码值
        this.productDeliveryType = this.code['ProductDeliveryType'];
    }
    BatchQueryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.productDeliveryType = [
        //   { value: '23', label: '新增待上架' },
        //   { value: '24', label: '修改待上架' },
        //   { value: '25', label: '已上架' },
        //   { value: '26', label: '已下架' },
        //   { value: '27', label: '待下架' },
        //   { value: '28', label: '下架后重上架' },
        //   { value: '32', label: '投放异常' },
        //   { value: '33', label: '下架异常' },
        //   { value: '99', label: '上架否决' },
        //   { value: '98', label: '下架否决' },
        //   { value: 'ON', label: '已上架' },
        //   { value: 'OFF', label: '已下架' },
        // ];
        if (!this.inValue) {
            if (this.router.snapshot.params['applySerialNo'] && this.router.snapshot.params['status']) {
                this.Gzldis = true;
                this.parmLz = {
                    applySerialNo: this.router.snapshot.params['applySerialNo'],
                    channelId: '',
                    productId: '',
                    // launchDate:this.router.snapshot.params['launchDate'],
                    status: this.router.snapshot.params['status']
                };
            }
            this.router.params.subscribe(function (data) {
                _this.batchdList = data['applySerialNo'].split(",");
            });
        }
        else {
            console.log(this.inValue);
            this.Gzldis = true;
            this.cattlehide = false;
            this.parmLz = {
                applySerialNo: this.inValue.applySerialNo,
            };
            this.batchdList.push(this.inValue.applySerialNo);
        }
        this.batchdList.forEach(function (item) {
            _this.batchdListV.push({
                applySerialNo: item,
            });
        });
    };
    // 码值
    BatchQueryDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 点击批次号
    BatchQueryDetailsComponent.prototype.batchClick = function (col) {
        var _this = this;
        this.siteList = [];
        this.productListN = [];
        this.labelList = [];
        this.functionList = [];
        this.showClass = col.applySerialNo;
        this.parmLz = {
            applySerialNo: col.applySerialNo,
            channelId: '',
            productId: ''
        };
        this.productManageHttpService.queryByApplySerialNo(this.parmLz).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.launchInfo.channelList;
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
    // 点击站点
    BatchQueryDetailsComponent.prototype.siteClick = function (col) {
        var _this = this;
        this.productListN = [];
        this.labelList = [];
        this.functionList = [];
        this.showClassSite = col.channelId;
        var parm = {
            applySerialNo: this.showClass,
            channelId: col.channelId,
            productId: ''
        };
        this.productManageHttpService.queryByApplySerialNo(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productListN = data.launchInfo.productList;
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
    // 点击产品
    BatchQueryDetailsComponent.prototype.productClick = function (col) {
        var _this = this;
        this.showClassProduct = col.productId;
        var parm = {
            applySerialNo: this.showClass,
            channelId: this.showClassSite,
            productId: col.productId
        };
        this.productManageHttpService.queryByApplySerialNo(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.functionList = data.launchInfo.functionList;
                _this.labelList = data.launchInfo.lableList;
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
    BatchQueryDetailsComponent.prototype.notice = function () {
        var _this = this;
        this.Gzldis = true;
        if (this.selectVlue.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择需通知的站点' });
            this.Gzldis = false;
            return;
        }
        var arr = [];
        this.selectVlue.forEach(function (item) {
            arr.push(_this.siteList[item].channelId);
        });
        arr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](arr);
        var parm = {
            applySerialNo: this.showClass,
            websiteIds: arr
        };
        this.productManageHttpService.reLaunch(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.Gzldis = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.Gzldis = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.Gzldis = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BatchQueryDetailsComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BatchQueryDetailsComponent.prototype, "inValue", void 0);
    BatchQueryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch-query-details',
            template: __webpack_require__(/*! ./batch-query-details.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.html"),
            styles: [__webpack_require__(/*! ./batch-query-details.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], BatchQueryDetailsComponent);
    return BatchQueryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/bean/channel-query.bean.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/bean/channel-query.bean.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ChannelDeliveryBean, ChannelDeliveryBeanO, ChannelDeliveryBeanT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryBean", function() { return ChannelDeliveryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryBeanO", function() { return ChannelDeliveryBeanO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDeliveryBeanT", function() { return ChannelDeliveryBeanT; });
var ChannelDeliveryBean = /** @class */ (function () {
    function ChannelDeliveryBean() {
        this.pageNum = 1; //			当前页号
        this.pageSize = 10; //			每页显示数量
    }
    return ChannelDeliveryBean;
}());

var ChannelDeliveryBeanO = /** @class */ (function () {
    function ChannelDeliveryBeanO() {
        this.pageNum = 1; //			当前页号
        this.pageSize = 10; //			每页显示数量
    }
    return ChannelDeliveryBeanO;
}());

var ChannelDeliveryBeanT = /** @class */ (function () {
    function ChannelDeliveryBeanT() {
        this.pageNum = 1; //			当前页号
        this.pageSize = 10; //			每页显示数量
    }
    return ChannelDeliveryBeanT;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>投放查询</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 module emargin\">\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-4 text_center\">\r\n          <p-radioButton (onClick)='chooseValue()' name=\"groupname\" value=\"val1\" label=\"通过渠道查询\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_center\">\r\n          <p-radioButton (onClick)='chooseValue()' name=\"groupname\" value=\"val2\" label=\"通过投放/下架批次号查询\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_center\">\r\n          <p-radioButton (onClick)='chooseValue()' name=\"groupname\" value=\"val3\" label=\"通过产品查询\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"selectedValue=='val1'\">\r\n        <div class=\"ui-g-12 ui-md-12 \">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>渠道编号:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"channelDeliveryBean1.channelId\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>渠道名称:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"channelDeliveryBean1.channelName\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"querySecle1()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n              </div>\r\n            </div>\r\n            <span>&nbsp;</span>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick1()\" label=\"重置\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"selectedValue=='val2'\">\r\n        <div class=\"ui-g-12 ui-md-12 \">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>批次号:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"channelDeliveryBean2.applySerialNo\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>投放下架标志:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <div style=\"width: 60%;\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"channelDeliveryBean2.onOrOff\" [options]=\"deliveryQueryType\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"querySecle2()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n              </div>\r\n            </div>\r\n            <span>&nbsp;</span>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick2()\" label=\"重置\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"selectedValue=='val3'\">\r\n        <div class=\"ui-g-12 ui-md-12 \">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>可售产品/套餐编号:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"channelDeliveryBean3.productId\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px\">\r\n            <span>可售产品/套餐名称:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"channelDeliveryBean3.productName\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"querySecle3()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n              </div>\r\n            </div>\r\n            <span>&nbsp;</span>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick3()\" label=\"重置\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 module emargin\" *ngIf=\"selectedValue=='val1'\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <u-dataTable [value]=\"site_list1\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" scrollHeight=\"500px\" [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            <label>选择</label>\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <p-checkbox [(ngModel)]=\"select_atr1\" value=\"{{item.channelId}}\" name=\"sadsadsa\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"channelId\" header=\"渠道编号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"channelName\" header=\"渠道名称\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'30%'}\" field=\"channelDescription\" header=\"渠道描述\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <span *ngIf=\"item.channelDescription && item.channelDescription.length>15\">{{item.channelDescription.substring(0,15)}}...</span>\r\n            <span *ngIf=\"item.channelDescription && item.channelDescription.length<16\">{{item.channelDescription}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div style=\"float:right;padding-top:100px;\">\r\n        <u-paginator [first]=\"first1\" rows=\"{{channelDeliveryBean1.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate1($event)\"></u-paginator>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"permissionCheck('SID03028_P090') || permissionCheck('SID23028_P090')\">\r\n      <div style=\"width: 130px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"launchQuery1()\" style=\"width: 100px;\" label=\"渠道投放详情\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 module emargin\" *ngIf=\"selectedValue=='val2'\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <u-dataTable [value]=\"site_list2\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" scrollHeight=\"500px\" [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center','width':'16%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            <label>选择</label>\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <p-checkbox [(ngModel)]=\"select_atr2\" value=\"{{item.applySerialNo}}\" name=\"sadsadsa\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'28%'}\" field=\"applySerialNo\" header=\"批次号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'28%'}\" field=\"productState\" header=\"投放下架标志\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.productState|codeValuePie:deliveryQueryType}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'28%'}\" field=\"operateDate\" header=\"发起日期\">\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div style=\"float:right;padding-top:100px;\">\r\n        <u-paginator [first]=\"first2\" rows=\"{{channelDeliveryBean2.pageSize}}\" totalRecords=\"{{total2}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate2($event)\"></u-paginator>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <div style=\"width: 130px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"launchQuery2()\" style=\"width:100px;\" label=\"批次号投放详情\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 module emargin\" *ngIf=\"selectedValue=='val3'\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <u-dataTable [value]=\"site_list3\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" scrollHeight=\"500px\" [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            <label>选择</label>\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <p-checkbox [(ngModel)]=\"select_atr3\" value=\"{{item.productId}}\" name=\"sadsadsa\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'40%'}\" field=\"productId\" header=\"可售产品编号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'40%'}\" field=\"productName\" header=\"可售产品名称\">\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div style=\"float:right;padding-top:100px;\">\r\n        <u-paginator [first]=\"first3\" rows=\"{{channelDeliveryBean3.pageSize}}\" totalRecords=\"{{total3}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate3($event)\"></u-paginator>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <div style=\"width: 130px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"launchQuery3()\" style=\"width: 100px;\" label=\"产品投放详情\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .emargin {\n  margin: 10px 0; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2RlbGl2ZXJ5LXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxwcm9kdWN0LW1hcmtldFxccHJvZHVjdC1sYXVuY2hcXGRlbGl2ZXJ5LXF1ZXJ5XFxkZWxpdmVyeS1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtJQU9ZLGlCQUFpQixFQUFBOztBQVA3QjtFQVdRLGNBQWMsRUFBQTs7QUFYdEI7RUFjUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9wcm9kdWN0LW1hcmtldC9wcm9kdWN0LWxhdW5jaC9kZWxpdmVyeS1xdWVyeS9kZWxpdmVyeS1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DeliveryQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryQueryComponent", function() { return DeliveryQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/channel-query.bean */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/bean/channel-query.bean.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
//投放查询 熊正好 2019.4






var DeliveryQueryComponent = /** @class */ (function () {
    function DeliveryQueryComponent(productManageHttpService, router, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //列表无数据
        // bean
        this.channelDeliveryBean1 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBean"]();
        this.channelDeliveryBean2 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBeanO"]();
        this.channelDeliveryBean3 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBeanT"]();
        this.selectedValue = 'val1'; //选择方式
        this.site_list1 = []; //站点列表
        this.site_list2 = []; //站点列表
        this.site_list3 = []; //站点列表
        this.select_atr1 = [];
        this.select_atr2 = [];
        this.select_atr3 = [];
        this.star1 = {}; //URL传参
        this.star2 = {}; //URL传参
        this.star3 = {}; //URL传参
        this.first1 = 0; //分页控制
        this.first2 = 0; //分页控制
        this.first3 = 0; //分页控制
        this.msgs = [];
        //批次号
        this.applySerialNo = ''; //批次号
        this.deliveryQueryTypeV = ''; //投放下架标志
        this.codeValues(); // 调用方法，获取全部码值
        this.deliveryQueryType = this.code['DeliveryQueryType'];
        // this.deliveryQueryType = [
        //   { value: '', label: '请选择' },
        //   // { value: '23', label: '新增待上架' },
        //   // { value: '24', label: '修改待上架' },
        //   // { value: '25', label: '已上架' },
        //   // { value: '26', label: '已下架' },
        //   // { value: '27', label: '待下架' },
        //   // { value: '28', label: '下架后重上架' },
        //   { value: 'ON', label: '投放' },
        //   { value: 'OFF', label: '下架' },
        // ];
    }
    DeliveryQueryComponent.prototype.ngOnInit = function () {
        this.queryClick1();
        this.queryClick2();
        this.queryClick3();
    };
    DeliveryQueryComponent.prototype.ngOnChanges = function () {
    };
    //码值
    DeliveryQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DeliveryQueryComponent.prototype.chooseValue = function () {
        if (this.selectedValue === 'val1') {
            this.channelDeliveryBean1.pageNum = 1;
            this.channelDeliveryBean2.pageNum = 1;
            this.channelDeliveryBean3.pageNum = 1;
        }
        if (this.selectedValue === 'val2') {
            this.channelDeliveryBean1.pageNum = 1;
            this.channelDeliveryBean2.pageNum = 1;
            this.channelDeliveryBean3.pageNum = 1;
        }
        if (this.selectedValue === 'val3') {
            this.channelDeliveryBean1.pageNum = 1;
            this.channelDeliveryBean2.pageNum = 1;
            this.channelDeliveryBean3.pageNum = 1;
        }
    };
    // 重置
    DeliveryQueryComponent.prototype.resetClick1 = function () {
        this.channelDeliveryBean1 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBean"]();
    };
    // 重置
    DeliveryQueryComponent.prototype.resetClick2 = function () {
        this.channelDeliveryBean2 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBeanO"]();
    };
    // 重置
    DeliveryQueryComponent.prototype.resetClick3 = function () {
        this.channelDeliveryBean3 = new _bean_channel_query_bean__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryBeanT"]();
    };
    // 查询始终第一页
    DeliveryQueryComponent.prototype.querySecle1 = function () {
        this.channelDeliveryBean1.pageSize = 10;
        this.channelDeliveryBean1.pageNum = 1;
        this.first1 = 0;
        this.queryClick1();
    };
    // 查询
    DeliveryQueryComponent.prototype.queryClick1 = function () {
        var _this = this;
        this.productManageHttpService.productChannelList(this.channelDeliveryBean1).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.site_list1 = data.productChannelList;
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
    // 查询始终第一页
    DeliveryQueryComponent.prototype.querySecle2 = function () {
        this.channelDeliveryBean2.pageSize = 10;
        this.channelDeliveryBean2.pageNum = 1;
        this.first2 = 0;
        this.queryClick2();
    };
    // 查询
    DeliveryQueryComponent.prototype.queryClick2 = function () {
        var _this = this;
        this.productManageHttpService.queryApplySerialNo(this.channelDeliveryBean2).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.site_list2 = data.launchInfo;
                _this.total2 = data.total;
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
    //查询始终第一页
    DeliveryQueryComponent.prototype.querySecle3 = function () {
        this.channelDeliveryBean3.pageSize = 10;
        this.channelDeliveryBean3.pageNum = 1;
        this.first3 = 0;
        this.queryClick3();
    };
    //查询
    DeliveryQueryComponent.prototype.queryClick3 = function () {
        var _this = this;
        this.productManageHttpService.findAvailableProductList(this.channelDeliveryBean3).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.site_list3 = data.resultList; //productList
                _this.total3 = data.total;
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
    //分页
    DeliveryQueryComponent.prototype.paginate1 = function (event) {
        // this.select_atr1 = [];
        //每页显示的条数
        this.channelDeliveryBean1.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.channelDeliveryBean1.pageNum = currentPage;
        this.first1 = (currentPage - 1) * this.channelDeliveryBean1.pageSize;
        //调用查询的方法
        this.queryClick1();
        this.channelDeliveryBean1.pageNum = 1;
    };
    //分页
    DeliveryQueryComponent.prototype.paginate2 = function (event) {
        // this.select_atr2 = [];
        //每页显示的条数
        this.channelDeliveryBean2.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.channelDeliveryBean2.pageNum = currentPage;
        this.first2 = (currentPage - 1) * this.channelDeliveryBean2.pageSize;
        //调用查询的方法
        this.queryClick2();
        this.channelDeliveryBean2.pageNum = 1;
    };
    //分页
    DeliveryQueryComponent.prototype.paginate3 = function (event) {
        // this.select_atr3 = [];
        //每页显示的条数
        this.channelDeliveryBean3.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.channelDeliveryBean3.pageNum = currentPage;
        this.first3 = (currentPage - 1) * this.channelDeliveryBean3.pageSize;
        //调用查询的方法
        this.queryClick3();
        this.channelDeliveryBean3.pageNum = 1;
    };
    DeliveryQueryComponent.prototype.launchQuery1 = function () {
        var _this = this;
        if (this.select_atr1.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择查询的站点" });
        }
        else {
            this.select_atr1.forEach(function (i) {
                if (_this.star1['channelId']) {
                    _this.star1['channelId'].push(i);
                }
                else {
                    _this.star1['channelId'] = [];
                    _this.star1['channelId'].push(i);
                }
            });
            this.router.navigate(['/pages/tzb/product-manage/product-market/product-launch/site-query-details', this.star1]);
        }
    };
    DeliveryQueryComponent.prototype.launchQuery2 = function () {
        var _this = this;
        if (this.select_atr2.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择查询的批次号" });
        }
        else {
            this.select_atr2.forEach(function (i) {
                if (_this.star2['applySerialNo']) {
                    _this.star2['applySerialNo'].push(i);
                }
                else {
                    _this.star2['applySerialNo'] = [];
                    _this.star2['applySerialNo'].push(i);
                }
            });
            this.router.navigate(['/pages/tzb/product-manage/product-market/product-launch/batch-query-details', this.star2]);
        }
    };
    DeliveryQueryComponent.prototype.launchQuery3 = function () {
        var _this = this;
        if (this.select_atr3.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择查询的产品或套餐" });
        }
        else {
            this.select_atr3.forEach(function (i) {
                _this.site_list3.forEach(function (item) {
                    if (item.productId == i) {
                        if (_this.star3['productId']) {
                            _this.star3['productId'].push({
                                productId: item.productId,
                                productName: item.productName,
                            });
                        }
                        else {
                            _this.star3['productId'] = [];
                            _this.star3['productId'].push({
                                productId: item.productId,
                                productName: item.productName,
                            });
                        }
                    }
                });
            });
            this.star3['productId'] = JSON.stringify(this.star3['productId']);
            this.router.navigate(['/pages/tzb/product-manage/product-market/product-launch/pro-query-details', this.star3]);
        }
    };
    //按钮权限
    DeliveryQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    DeliveryQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery-query',
            template: __webpack_require__(/*! ./delivery-query.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.html"),
            styles: [__webpack_require__(/*! ./delivery-query.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"]]
        })
        /**
         * 投放查询
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], DeliveryQueryComponent);
    return DeliveryQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li>\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>投放查询</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\" margin: 10px 10px;\">\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>产品/套餐</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCssd un_active\" [ngClass]=\"{'active':showClass == col.productId}\" *ngFor=\"let col of productListN \" (click)=\"productClick(col)\">\r\n            <span>\r\n              <label>{{col.productName}}</label>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放渠道</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss un_active\" [ngClass]=\"{'active':showClassSite == col.channelId}\" *ngFor=\"let col of siteList;let ri = index\" (click)=\"siteClick(col)\">\r\n            <label>{{col.channelName}}</label>\r\n            <label>{{col.productState|codeValuePie:productDeliveryType}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放产品功能</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of functionList\">\r\n            <label>{{col.productFunctionName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所投放标签</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of labelList;let ri = index\">\r\n            <label>{{col.productLableName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n            <!-- <div *ngIf=\"col.labelType=='LEVEL'\" style=\"display:inline-block\">\r\n              <span>级别:</span>\r\n              <input type=\"text\" value=\"\" type=\"number\" min=\"1\" max=\"10\" max='{{col.labelLevel}}' style=\"width:42px\" [(ngModel)]=\"col.labelLevelVluer\">\r\n              <span>最高{{col.labelLevel}}级</span>\r\n            </div> -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>所属批次号</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\">\r\n            <label>{{batchNum}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"goBack()\" style=\"width: 60px;\" label=\"返回\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: rgba(198, 223, 239, 0.94);\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .boxAll {\n  height: 520px;\n  overflow: auto; }\n\n.container .boxAll .box1 {\n    color: #fff;\n    border: 1px solid #6AC7ED;\n    overflow: auto;\n    background-color: #6AC7ED; }\n\n.container .boxAll .box2 {\n    height: 70%;\n    border-left: 1px solid #6AC7ED;\n    border-right: 1px solid #6AC7ED;\n    border-bottom: 1px solid #6AC7ED;\n    overflow: auto; }\n\n.container .boxAll .box2 .ulCss {\n      margin-left: -3rem; }\n\n.container .boxAll .box2 .liCss {\n      list-style-type: none;\n      margin: 10px 16px; }\n\n.container .boxAll .box2 .liCssd {\n      margin: 5px 25px; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2RlbGl2ZXJ5LXF1ZXJ5L3Byby1xdWVyeS1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxwcm9kdWN0LW1hcmtldFxccHJvZHVjdC1sYXVuY2hcXGRlbGl2ZXJ5LXF1ZXJ5XFxwcm8tcXVlcnktZGV0YWlsc1xccHJvLXF1ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7SUFPWSxpQkFBaUIsRUFBQTs7QUFQN0I7RUFXUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQWZyQjtFQWtCUSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUF2QnJCO0VBMEJRLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBM0J0QjtJQTZCWSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTs7QUFoQ3JDO0lBbUNZLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxjQUFjLEVBQUE7O0FBdkMxQjtNQXlDZ0Isa0JBQWtCLEVBQUE7O0FBekNsQztNQTRDZ0IscUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBOztBQTdDakM7TUFnRGdCLGdCQUFnQixFQUFBOztBQWhEaEM7RUFxRFEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvcHJvZHVjdC1sYXVuY2gvZGVsaXZlcnktcXVlcnkvcHJvLXF1ZXJ5LWRldGFpbHMvcHJvLXF1ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVuX2FjdGl2ZSB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCAyMjMsIDIzOSwgMC45NCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYm94QWxsIHtcclxuICAgICAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC5ib3gxIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkFDN0VEO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94MiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNkFDN0VEO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgLnVsQ3NzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlDc3Mge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpQ3NzZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuZm9ybV9pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ProQueryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProQueryDetailsComponent", function() { return ProQueryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProQueryDetailsComponent = /** @class */ (function () {
    function ProQueryDetailsComponent(productManageHttpService, router, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.msgs = []; // 提示信息
        this.productList = []; // 入参产品ID
        this.productListN = []; // 产品列表
        this.siteList = []; // 站点列表
        this.functionList = []; // 功能列表
        this.labelList = []; // 标签列表
        this.codeValues(); // 调用方法，获取全部码值
        this.productDeliveryType = this.code['ProductDeliveryType'];
    }
    ProQueryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.productDeliveryType = [
        //   { value: '23', label: '新增待上架' },
        //   { value: '24', label: '修改待上架' },
        //   { value: '25', label: '已上架' },
        //   { value: '26', label: '已下架' },
        //   { value: '27', label: '待下架' },
        //   { value: '28', label: '下架后重上架' },
        //   { value: '32', label: '投放异常' },
        //   { value: '33', label: '下架异常' },
        //   { value: '99', label: '上架否决' },
        //   { value: '98', label: '下架否决' },
        //   { value: 'ON', label: '已上架' },
        //   { value: 'OFF', label: '已下架' },
        // ];
        this.router.params.subscribe(function (data) {
            _this.productList = JSON.parse(data['productId']);
        });
        this.productListN = this.productList;
    };
    // 码值
    ProQueryDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 点击产品
    ProQueryDetailsComponent.prototype.productClick = function (col) {
        var _this = this;
        this.siteList = [];
        this.functionList = [];
        this.labelList = [];
        this.batchNum = '';
        this.showClass = col.productId;
        var parm = {
            productId: col.productId,
            channelId: '',
        };
        this.productManageHttpService.queryByProductId(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.launchInfo.channelList;
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
    // 点击站点
    ProQueryDetailsComponent.prototype.siteClick = function (col) {
        var _this = this;
        this.functionList = [];
        this.labelList = [];
        this.showClassSite = col.channelId;
        var parm = {
            channelId: col.channelId,
            productId: this.showClass,
        };
        this.productManageHttpService.queryByProductId(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.functionList = data.launchInfo.functionList;
                _this.labelList = data.launchInfo.lableList;
                _this.batchNum = data.launchInfo.applySerialNo;
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
    ProQueryDetailsComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    ProQueryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pro-query-details',
            template: __webpack_require__(/*! ./pro-query-details.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.html"),
            styles: [__webpack_require__(/*! ./pro-query-details.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ProQueryDetailsComponent);
    return ProQueryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li>\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>投放查询</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\" margin: 10px 10px;\">\r\n    <div class=\"ui-g-12 ui-md-2 Wten boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>渠道</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCssd un_active\" [ngClass]=\"{'active':showClass == col.channelName}\" *ngFor=\"let col of siteNameList\" (click)=\"siteClick(col)\">\r\n            <span>\r\n              <label>{{col.channelName}}</label>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 WWti boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>已上架目录</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss un_active\" [ngClass]=\"{'active':showClasslog == col.catalogName}\" *ngFor=\"let col of muluName\" (click)=\"muluClick(col)\">\r\n            <label>{{col.catalogName}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 WWti boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>目录下的分类</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <p-tree [value]=\"left_tree\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 WWti boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>可售产品/套餐</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss un_active\" [ngClass]=\"{'active':showClassProduct == col.productName}\" *ngFor=\"let col of keshou_list;let ri = index\" (click)=\"productQueryF(col)\">\r\n            <label>{{col.productName}}</label>\r\n            <label>{{col.productState|codeValuePie:productDeliveryType}}</label>\r\n            <!-- <label>{{col.productContentState|codeValuePie:productPackType}}</label> -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 Wten boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>产品功能</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of funList\">\r\n            <label>{{col.productFunctionName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-2 Wten boxAll\">\r\n      <div class=\"ui-g-12 ui-md-12 text_center box1\">\r\n        <h3>标签选择</h3>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 box2\">\r\n        <ul class=\"ulCss\">\r\n          <li class=\"liCss\" *ngFor=\"let col of labelList;let ri = index\">\r\n            <label>{{col.productLableName}}</label>\r\n            <label>{{col.state|codeValuePie:productDeliveryType}}</label>\r\n            <!-- <div *ngIf=\"col.labelType=='LEVEL'\" style=\"display:inline-block\">\r\n              <span>级别:</span>\r\n              <input type=\"text\" value=\"\" type=\"number\" min=\"1\" max=\"10\" max='{{col.labelLevel}}' style=\"width:42px\" [(ngModel)]=\"col.labelLevelVluer\">\r\n              <span>最高{{col.labelLevel}}级</span>\r\n            </div> -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" (click)=\"goBack()\" style=\"width: 60px;\" label=\"返回\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .Wten {\n  width: 10%; }\n\n.container .WWti {\n  width: 20%; }\n\n.container .boxAll {\n  height: 520px;\n  overflow: auto; }\n\n.container .boxAll .box1 {\n    color: #fff;\n    border: 1px solid #6AC7ED;\n    overflow: auto;\n    background-color: #6AC7ED; }\n\n.container .boxAll .box2 {\n    height: 70%;\n    border-left: 1px solid #6AC7ED;\n    border-right: 1px solid #6AC7ED;\n    border-bottom: 1px solid #6AC7ED;\n    overflow: auto; }\n\n.container .boxAll .box2 .ulCss {\n      margin-left: -3rem; }\n\n.container .boxAll .box2 .liCss {\n      list-style-type: none;\n      margin: 10px 16px; }\n\n.container .boxAll .box2 .liCssd {\n      margin: 5px 25px; }\n\n.container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none;\n    margin: 10px 16px; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: rgba(198, 223, 239, 0.94);\n  border-radius: 6px;\n  margin: 10px 10px;\n  outline: none; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L3Byb2R1Y3QtbGF1bmNoL2RlbGl2ZXJ5LXF1ZXJ5L3NpdGUtcXVlcnktZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxccHJvZHVjdC1tYXJrZXRcXHByb2R1Y3QtbGF1bmNoXFxkZWxpdmVyeS1xdWVyeVxcc2l0ZS1xdWVyeS1kZXRhaWxzXFxzaXRlLXF1ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0VBS1EsVUFBVSxFQUFBOztBQUxsQjtFQVFRLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBVHRCO0lBV1ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCLEVBQUE7O0FBZHJDO0lBaUJZLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxjQUFjLEVBQUE7O0FBckIxQjtNQXVCZ0Isa0JBQWtCLEVBQUE7O0FBdkJsQztNQTBCZ0IscUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBOztBQTNCakM7TUE4QmdCLGdCQUFnQixFQUFBOztBQTlCaEM7RUFtQ1Esa0JBQWtCLEVBQUE7O0FBbkMxQjtFQXNDUSxpQkFBaUIsRUFBQTs7QUF0Q3pCO0VBMENZLFdBQVcsRUFBQTs7QUExQ3ZCO0lBNENnQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBOztBQTlDakM7RUFtRFEsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUF2RHJCO0VBMERRLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQS9EckI7RUFrRVEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvcHJvZHVjdC1sYXVuY2gvZGVsaXZlcnktcXVlcnkvc2l0ZS1xdWVyeS1kZXRhaWxzL3NpdGUtcXVlcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLld0ZW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcbiAgICAuV1d0aSB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICAgIC5ib3hBbGwge1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLmJveDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUM3RUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzZBQzdFRDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2QUM3RUQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAudWxDc3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saUNzcyB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlDc3NkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5ib3gge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudW5fYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTgsIDIyMywgMjM5LCAwLjk0KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: SiteQueryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteQueryDetailsComponent", function() { return SiteQueryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteQueryDetailsComponent = /** @class */ (function () {
    function SiteQueryDetailsComponent(router, productManageHttpService, commfunc) {
        this.router = router;
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.siteIdList = []; // 站点ID数组
        this.siteNameList = []; // 站点Name数组
        this.msgs = []; // 提示信息
        this.funList = []; // 产品功能投放
        this.labelList = []; // 标签选择
        this.left_tree = [];
        this.left_tree_arr = [];
        this.any = [];
        this.hierarchy_arr = [];
        this.productCheckbox = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.productPackType = this.code['ProductPackType'];
        this.productDeliveryType = this.code['ProductDeliveryType'];
    }
    SiteQueryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.productDeliveryType = [
        //   { value: '23', label: '新增待上架' },
        //   { value: '24', label: '修改待上架' },
        //   { value: '25', label: '已上架' },
        //   { value: '26', label: '已下架' },
        //   { value: '27', label: '待下架' },
        //   { value: '28', label: '下架后重上架' },
        //   { value: '32', label: '投放异常' },
        //   { value: '33', label: '下架异常' },
        //   { value: '99', label: '上架否决' },
        //   { value: '98', label: '下架否决' },
        //   { value: 'ON', label: '已上架' },
        //   { value: 'OFF', label: '已下架' },
        // ];
        this.router.params.subscribe(function (data) {
            _this.siteIdList = data['channelId'].split(",");
        });
        this.siteIdList.forEach(function (siteID) {
            var parm = { channelId: siteID };
            _this.productManageHttpService.queryProdCataListForChannelPage(parm).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.prodChannelList.forEach(function (item) {
                        _this.siteNameList.push({
                            channelId: siteID,
                            channelName: item.channelName,
                            productStoreId: item.productStoreId,
                            storeName: item.storeName,
                        });
                    });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
    };
    // 码值
    SiteQueryDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 点击站点
    SiteQueryDetailsComponent.prototype.siteClick = function (col) {
        this.siteId = col.channelId;
        this.showClass = col.channelName;
        this.productStoreId = col.productStoreId;
        this.storeQuery(col.productStoreId);
        this.left_tree = [];
        this.keshou_list = [];
        this.funList = [];
        this.labelList = [];
    };
    // 店面默认查询
    SiteQueryDetailsComponent.prototype.storeQuery = function (item) {
        var _this = this;
        var parmss = { productStoreId: item };
        this.productManageHttpService.productStoreDetail(parmss).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.storeName = data.storeName;
                _this.muluQuery();
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
    // 目录默认查询
    SiteQueryDetailsComponent.prototype.muluQuery = function () {
        var _this = this;
        var parms = { productStoreId: this.productStoreId };
        this.productManageHttpService.queryCatalogListFromProdStore(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.muluName = data.prodCatalogList;
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
    // 已上架目录
    SiteQueryDetailsComponent.prototype.muluClick = function (col) {
        var _this = this;
        this.showClasslog = col.catalogName;
        this.ctlgIdValue = col.prodCatalogId;
        var parm = { ctlgId: col.prodCatalogId, pageSize: 10000 };
        this.productManageHttpService.ctlgMenuQuery(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.all_tree = data.customerMenuList;
                _this.left_tree_arr = data.customerMenuList;
                _this.left_tree = _this.hierarchyTree(data.customerMenuList, '');
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
    SiteQueryDetailsComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        var this_ = this;
        this.hierarchy_arr = this.getMeuInfo(this.left_tree_arr, event.node.value[0]);
        var parames = {
            ctlgId: event.node.value[0],
            maxIdLevel: this.hierarchy_arr[1],
            ctlgIdLevel: this.hierarchy_arr[0]
        };
        var paramesQuery = {
            channelId: this.siteId,
            prodCategoryId: event.node.value[0]
        };
        this.muluFen = parames;
        var parames2 = {
            ctlgId: event.node.value[0],
        };
        var delData = function (data) {
            _this.keshou_list = [];
            _this.funList = [];
            _this.labelList = [];
            _this.keshou_list = data.productList;
        };
        this.interfaceComFnc(this.productManageHttpService.websiteProductStateQuery(paramesQuery), delData);
    };
    // +号点击
    SiteQueryDetailsComponent.prototype.nodeExpend = function (event) {
        event.node.children = this.hierarchyTree(this.all_tree, event.node.value[0]);
    };
    SiteQueryDetailsComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
                }
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
    // 层级树
    SiteQueryDetailsComponent.prototype.hierarchyTree = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_1 = menu_list; _i < menu_list_1.length; _i++) {
            var key = menu_list_1[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    children: [{}],
                    label: key.name,
                    value: [key.id, key.pid]
                });
            }
        }
        return menu_arr;
    };
    SiteQueryDetailsComponent.prototype.getMeuInfo = function (tree, curren_pid) {
        var count = 1;
        var getFirstId = function (tree) {
            var id = '';
            tree.every(function (item) {
                item.pid == '' ? id = item.id : null;
            });
            return id;
        };
        // 末级菜单id
        var getLastId = function (tree) {
            var id_arr = [];
            tree.forEach(function (item) {
                var stu = tree.every(function (item2) {
                    if (item.id != item2.pid) {
                        return true;
                    }
                }) ? id_arr.push(item.id) : null;
            });
            return id_arr;
        };
        // 最大层级深度
        var getMaxHierarchy = function (tree, first_id, last_arr) {
            var arr = [];
            last_arr.forEach(function (item) {
                count = 1;
                var max = currentHierarchy(tree, first_id, item);
                arr.push(max);
            });
            return arr.sort()[arr.length - 1];
        };
        //当前层级深度
        //记录层级次数
        function currentHierarchy(tree, first_id, pid) {
            if (pid != first_id) {
                tree.some(function (item) {
                    if (item.id === pid) {
                        count++;
                        currentHierarchy(tree, first_id, item.pid);
                        return false;
                    }
                });
            }
            return count;
        }
        var first_id = getFirstId(tree); // 一级菜单id
        var last_arr = getLastId(tree); // 末级菜单 id组
        var current_hierarchy = currentHierarchy(tree, first_id, curren_pid); // 当前层级
        var max_hierarchy = getMaxHierarchy(tree, first_id, last_arr); // 最大层级 
        return [current_hierarchy, max_hierarchy];
    };
    // 产品查功能标签
    SiteQueryDetailsComponent.prototype.productQueryF = function (col) {
        this.showClassProduct = col.productName;
        this.funList = [];
        this.labelList = [];
        this.funList = col.functionList;
        this.labelList = col.labelList;
    };
    SiteQueryDetailsComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    SiteQueryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-query-details',
            template: __webpack_require__(/*! ./site-query-details.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.html"),
            styles: [__webpack_require__(/*! ./site-query-details.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], SiteQueryDetailsComponent);
    return SiteQueryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductLaunchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLaunchModule", function() { return ProductLaunchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _product_launch_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-launch.routing */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.routing.ts");
/* harmony import */ var _channel_delivery_channel_delivery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel-delivery/channel-delivery.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.ts");
/* harmony import */ var _channel_delivery_channel_delivery_details_channel_delivery_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel-delivery/channel-delivery-details/channel-delivery-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.ts");
/* harmony import */ var _channel_delivery_product_lower_frame_product_lower_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel-delivery/product-lower-frame/product-lower-frame.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.ts");
/* harmony import */ var _channel_delivery_channel_delivery_details_catalog_add_catalog_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel-delivery/channel-delivery-details/catalog-add/catalog-add.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/catalog-add/catalog-add.component.ts");
/* harmony import */ var _delivery_query_delivery_query_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delivery-query/delivery-query.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.ts");
/* harmony import */ var _delivery_query_site_query_details_site_query_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delivery-query/site-query-details/site-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.ts");
/* harmony import */ var _delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delivery-query/batch-query-details/batch-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.ts");
/* harmony import */ var _delivery_query_pro_query_details_pro_query_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delivery-query/pro-query-details/pro-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件



//页面
 //市场投放-渠道投放
 //市场投放-渠道投放-详情
 //产品下架

 //投放查询





var ProductLaunchModule = /** @class */ (function () {
    function ProductLaunchModule() {
    }
    ProductLaunchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _product_launch_routing__WEBPACK_IMPORTED_MODULE_3__["ProductLaunchRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_13__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__["UPaginatorModule"],
            ],
            declarations: [
                _channel_delivery_channel_delivery_component__WEBPACK_IMPORTED_MODULE_4__["ChannelDeliveryComponent"],
                _channel_delivery_channel_delivery_details_channel_delivery_details_component__WEBPACK_IMPORTED_MODULE_5__["ChannelDeliveryDetailsComponent"],
                _channel_delivery_product_lower_frame_product_lower_frame_component__WEBPACK_IMPORTED_MODULE_6__["ProductLowerFrameComponent"],
                _channel_delivery_channel_delivery_details_catalog_add_catalog_add_component__WEBPACK_IMPORTED_MODULE_7__["CatalogAddComponent"],
                _delivery_query_delivery_query_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryQueryComponent"],
                _delivery_query_site_query_details_site_query_details_component__WEBPACK_IMPORTED_MODULE_9__["SiteQueryDetailsComponent"],
                _delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_10__["BatchQueryDetailsComponent"],
                _delivery_query_pro_query_details_pro_query_details_component__WEBPACK_IMPORTED_MODULE_11__["ProQueryDetailsComponent"]
            ],
            entryComponents: [],
            exports: [
                _delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_10__["BatchQueryDetailsComponent"]
            ],
            providers: []
        })
    ], ProductLaunchModule);
    return ProductLaunchModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.routing.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.routing.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductLaunchRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLaunchRouting", function() { return ProductLaunchRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channel_delivery_channel_delivery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel-delivery/channel-delivery.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery.component.ts");
/* harmony import */ var _channel_delivery_channel_delivery_details_channel_delivery_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-delivery/channel-delivery-details/channel-delivery-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/channel-delivery-details/channel-delivery-details.component.ts");
/* harmony import */ var _channel_delivery_product_lower_frame_product_lower_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel-delivery/product-lower-frame/product-lower-frame.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/channel-delivery/product-lower-frame/product-lower-frame.component.ts");
/* harmony import */ var _delivery_query_delivery_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-query/delivery-query.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/delivery-query.component.ts");
/* harmony import */ var _delivery_query_site_query_details_site_query_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-query/site-query-details/site-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/site-query-details/site-query-details.component.ts");
/* harmony import */ var _delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-query/batch-query-details/batch-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.ts");
/* harmony import */ var _delivery_query_pro_query_details_pro_query_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery-query/pro-query-details/pro-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/pro-query-details/pro-query-details.component.ts");

//页面

 //市场投放-渠道投放-详情
 //产品下架
 //投放查询总



var routes = [
    {
        path: '',
        children: [
            {
                path: 'channel-delivery', component: _channel_delivery_channel_delivery_component__WEBPACK_IMPORTED_MODULE_1__["ChannelDeliveryComponent"],
            },
            {
                path: 'channel-delivery-details', component: _channel_delivery_channel_delivery_details_channel_delivery_details_component__WEBPACK_IMPORTED_MODULE_2__["ChannelDeliveryDetailsComponent"],
            },
            {
                path: 'product-lower-frame', component: _channel_delivery_product_lower_frame_product_lower_frame_component__WEBPACK_IMPORTED_MODULE_3__["ProductLowerFrameComponent"],
            },
            {
                path: 'delivery-query', component: _delivery_query_delivery_query_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryQueryComponent"],
            },
            {
                path: 'site-query-details', component: _delivery_query_site_query_details_site_query_details_component__WEBPACK_IMPORTED_MODULE_5__["SiteQueryDetailsComponent"],
            },
            {
                path: 'batch-query-details', component: _delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_6__["BatchQueryDetailsComponent"],
            },
            {
                path: 'pro-query-details', component: _delivery_query_pro_query_details_pro_query_details_component__WEBPACK_IMPORTED_MODULE_7__["ProQueryDetailsComponent"],
            },
        ]
    },
];
var ProductLaunchRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=default~available-product-available-product-module~product-launch-product-launch-module~product-summ~aba93709.js.map