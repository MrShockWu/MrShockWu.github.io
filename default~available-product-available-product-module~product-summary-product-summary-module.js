(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~available-product-available-product-module~product-summary-product-summary-module"],{

/***/ "./src/app/pages/tzb/product-manage/available-product/available-product.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/available-product.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AvailableProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableProductModule", function() { return AvailableProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _available_product_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./available-product.routing */ "./src/app/pages/tzb/product-manage/available-product/available-product.routing.ts");
/* harmony import */ var _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-product-config/sale-product-config.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.ts");
/* harmony import */ var _sale_product_config_global_directory_model_global_directory_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale-product-config/global-directory-model/global-directory-model.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sale-product-config/sale-product-config-manager/sale-product-config-manager.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale-product-config/sale-product-config-copy/sale-product-config-copy.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify-website/sale-product-modify-website.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts");
/* harmony import */ var _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sale-product-view/sale-product-view.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _display_properties_display_properties_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./display-properties/display-properties.component */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.ts");
/* harmony import */ var _display_properties_display_properties_details_display_properties_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./display-properties/display-properties-details/display-properties-details.component */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.ts");
/* harmony import */ var _display_properties_config_display_properties_config_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./display-properties-config/display-properties-config.component */ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.ts");
/* harmony import */ var _examine_examine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examine/examine.component */ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.ts");
/* harmony import */ var _base_product_base_product_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../base-product/base-product.module */ "./src/app/pages/tzb/product-manage/base-product/base-product.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
/* harmony import */ var _product_market_product_launch_product_launch_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../product-market/product-launch/product-launch.module */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //可售产品配置

 //可售产品修改
 // 可售产品
 //可售产品--复制添加
 //可售产品--添加特殊属性
 //可售产品--站点包装费复制









var AvailableProductModule = /** @class */ (function () {
    function AvailableProductModule() {
    }
    AvailableProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _available_product_routing__WEBPACK_IMPORTED_MODULE_3__["AvailableProductRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _base_product_base_product_module__WEBPACK_IMPORTED_MODULE_17__["BaseProductModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_18__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__["UPaginatorModule"],
                _product_market_product_launch_product_launch_module__WEBPACK_IMPORTED_MODULE_19__["ProductLaunchModule"]
            ],
            declarations: [
                _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_4__["SaleProductConfigComponent"],
                _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_5__["SaleProductModifyComponent"],
                _sale_product_config_global_directory_model_global_directory_model_component__WEBPACK_IMPORTED_MODULE_6__["GlobalDirectoryModelComponent"],
                _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_11__["SaleProductViewComponent"],
                _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__["SaleProductConfigManagerComponent"],
                _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__["SaleProductConfigCopyComponent"],
                _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__["SaleProductModifySpecailComponent"],
                _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__["SaleProductModifyWebsiteComponent"],
                _display_properties_display_properties_component__WEBPACK_IMPORTED_MODULE_13__["DisplaypropertiesComponent"],
                _display_properties_display_properties_details_display_properties_details_component__WEBPACK_IMPORTED_MODULE_14__["DisplaypropertiesDetailsComponent"],
                _display_properties_config_display_properties_config_component__WEBPACK_IMPORTED_MODULE_15__["DisplaypropertiesConfigComponent"],
                _examine_examine_component__WEBPACK_IMPORTED_MODULE_16__["ExamineComponent"]
            ],
            exports: [
                _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__["SaleProductConfigManagerComponent"],
                _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__["SaleProductConfigCopyComponent"],
                _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__["SaleProductModifySpecailComponent"],
                _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__["SaleProductModifyWebsiteComponent"],
            ],
            entryComponents: [],
            providers: []
        })
    ], AvailableProductModule);
    return AvailableProductModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/available-product.routing.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/available-product.routing.ts ***!
  \*****************************************************************************************/
/*! exports provided: AvailableProductRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableProductRouting", function() { return AvailableProductRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-product-view/sale-product-view.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale-product-config/sale-product-config.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.ts");
/* harmony import */ var _sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-product-view/sale-view-details/sale-view-details.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-view-details/sale-view-details.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.ts");
/* harmony import */ var _display_properties_display_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-properties/display-properties.component */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.ts");
/* harmony import */ var _display_properties_config_display_properties_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-properties-config/display-properties-config.component */ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.ts");
/* harmony import */ var _examine_examine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examine/examine.component */ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.ts");

//页面
 //可售产品查看
 //可售产品新增
 //可售产品详情
 //可售产品修改



var routes = [
    {
        path: 'sale-product-view', component: _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_1__["SaleProductViewComponent"],
    },
    {
        path: 'sale-view-details', component: _sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_3__["SaleDetailsComponent"],
    },
    {
        path: 'sale-product-config', component: _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_2__["SaleProductConfigComponent"],
    },
    {
        path: 'sale-product-modify', component: _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_4__["SaleProductModifyComponent"],
    },
    {
        path: 'display-properties', component: _display_properties_display_properties_component__WEBPACK_IMPORTED_MODULE_5__["DisplaypropertiesComponent"],
    },
    {
        path: 'display-properties-config', component: _display_properties_config_display_properties_config_component__WEBPACK_IMPORTED_MODULE_6__["DisplaypropertiesConfigComponent"],
    },
    {
        path: 'examine', component: _examine_examine_component__WEBPACK_IMPORTED_MODULE_7__["ExamineComponent"],
    },
];
var AvailableProductRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventure\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-12\">\r\n        <ul class=\"ui-breadcrumb-new\">\r\n          <li class=\"active\">\r\n            <a>\r\n              <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n          </li>\r\n          <li>\r\n            <a>产品管理</a>\r\n          </li>\r\n          <li>\r\n            <a>可售产品展示属性配置</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"container ui-g module\">\r\n      <div class=\"ui-g-12 ui-md-12\" id=\"KK\">\r\n        <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue1 == '0'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-1 text_right\">\r\n              <label>\r\n                渠道编号:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{lists.channelId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                渠道名称:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{lists.channelName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                渠道描述:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{lists.channelDes}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-1 text_right\">\r\n              <label>\r\n                可售产品编号:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.productId}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                产品名称:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.productName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                产品线:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.productLineName}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-1 text_right\">\r\n              <label>\r\n                产品组:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.productGroupName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                基础产品:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.productTemplateName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n              <label>\r\n                产品描述:\r\n              </label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n              <label>{{item.description}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12 box\">\r\n              <div class=\"ui-g forcolor\">\r\n                <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                  <div class=\"un_active\" *ngFor=\"let col of list;let i = index\" (click)=\"resultClick(i,col)\" [ngClass]=\"{'active':show == col.productFeatureCategoryName}\">\r\n                    {{col.productFeatureCategoryName}}\r\n                  </div>\r\n                </div>\r\n                <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                  <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                  <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"listes\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column [style]=\"{'text-align':'center','width':'12%'}\" header=\"序号\" field=\"\">\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                    {{ri+1}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'22%'}\" field=\"productFeatureTypeId\" header=\"属性编码\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'22%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'22%'}\" field=\"productFeatureTypeDesc\" header=\"属性描述\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"col.productFeatureTypeDesc && col.productFeatureTypeDesc.length>15\">{{col.productFeatureTypeDesc.substring(0,15)}}...</span>\r\n                    <span *ngIf=\"col.productFeatureTypeDesc && col.productFeatureTypeDesc.length<16\">{{col.productFeatureTypeDesc}}</span>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'22%'}\" field=\"isShow\" header=\"是否展示\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-radioButton name=\"{{col.productFeatureTypeId}}\" value=\"true\" label=\"是\" [(ngModel)]=\"col.isShow\"></p-radioButton>\r\n                    <p-radioButton name=\"{{col.productFeatureTypeId}}\" value=\"false\" label=\"否\" [(ngModel)]=\"col.isShow\"></p-radioButton>\r\n                  </ng-template>\r\n                </p-column>\r\n              </u-dataTable>\r\n              <!-- <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n                  <div style=\"float:right;padding-top:100px;\">\r\n                    <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                      (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                  </div>\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue1 == '1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <u-dataTable [value]=\"listValue\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeId\" header=\"属性编码\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeDesc\" header=\"属性描述\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeNum\" header=\"属性序号\">\r\n              <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <input [(ngModel)]=\"item.productFeatureTypeNum\" type=\"text\" pInputText>\r\n              </ng-template>\r\n            </p-column>\r\n          </u-dataTable>\r\n          <!-- <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n            <div style=\"float:right;padding-top:100px;\">\r\n              <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <!-- <button pButton type=\"button\" (click)=\"goBack()\" label=\"取消\"></button>\r\n    <button pButton type=\"button\" (click)=\"prev()\" *ngIf=\"vlaue1 =='1'\" label=\"上一步\"></button>\r\n    <button pButton type=\"button\" *ngIf=\"vlaue1 =='0'\" (click)=\"next()\" label=\"下一步\"></button>\r\n    <button pButton type=\"button\" *ngIf=\"vlaue1=='1'\" (click)=\"allServe()\" label=\"保存\"></button> -->\r\n    <div style=\"width: 90px;display: inline-block;\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"goBack()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1 =='1'\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"prev()\" type=\"button\" label=\"上一步\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1 =='0'\">\r\n      <div class=\"ui-btn1-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"next()\" type=\"button\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1=='1'\">\r\n      <button pButton (click)=\"allServe()\" [disabled]='iscompele' type=\"button\" label=\"保存\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text_center {\n  text-align: center; }\n\n.text_right {\n  text-align: right; }\n\n.heightO {\n  height: 1rem; }\n\n.border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.overflow {\n  height: 300px;\n  overflow-y: auto; }\n\n.forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n\n.boxOne {\n  float: left;\n  width: 90%; }\n\n.boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.heOne {\n  height: 100%; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 88%; }\n\n.un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.active .dline {\n    width: 30%;\n    border-bottom: 2px solid #19b0c8;\n    margin: 8px 35% 0 35%; }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2Rpc3BsYXktcHJvcGVydGllcy1jb25maWcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXGF2YWlsYWJsZS1wcm9kdWN0XFxkaXNwbGF5LXByb3BlcnRpZXMtY29uZmlnXFxkaXNwbGF5LXByb3BlcnRpZXMtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksWUFBWSxFQUFBOztBQUVmO0VBQ0csVUFBVSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBUG5CO0lBU1EsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUIsRUFBQTs7QUFJN0I7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0o7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFHakM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9hdmFpbGFibGUtcHJvZHVjdC9kaXNwbGF5LXByb3BlcnRpZXMtY29uZmlnL2Rpc3BsYXktcHJvcGVydGllcy1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWlnaHRPIHtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICAub3ZlcmZsb3cge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZm9yY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmJveFR3byB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaGVUd28ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmhlT25lIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA4OCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuX2FjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLmRsaW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDM1JSAwIDM1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAudWktbXAtMSxcclxuICAgICAgICAudWktbXAtMixcclxuICAgICAgICAudWktbXAtMyxcclxuICAgICAgICAudWktbXAtNCxcclxuICAgICAgICAudWktbXAtNSxcclxuICAgICAgICAudWktbXAtNixcclxuICAgICAgICAudWktbXAtNyxcclxuICAgICAgICAudWktbXAtOCxcclxuICAgICAgICAudWktbXAtOSxcclxuICAgICAgICAudWktbXAtMTAsXHJcbiAgICAgICAgLnVpLW1wLTExLFxyXG4gICAgICAgIC51aS1tcC0xMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLW1wLTEge1xyXG4gICAgICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWktbXAtMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWktbXAtMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSVcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLW1wLTQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLW1wLTUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLW1wLTYge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1tcC03IHtcclxuICAgICAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1tcC04IHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1tcC05IHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWktbXAtMTAge1xyXG4gICAgICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLW1wLTExIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1tcC0xMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DisplaypropertiesConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaypropertiesConfigComponent", function() { return DisplaypropertiesConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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





var DisplaypropertiesConfigComponent = /** @class */ (function () {
    function DisplaypropertiesConfigComponent(productManageHttpService, router, routerA) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.routerA = routerA;
        this.vlaueOpen = 'open';
        this.vlaue1 = 0;
        this.activeIndex = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; // 列表无数据
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cars = [];
        this.display = false;
        this.updateValue = [];
        // 提示信息
        this.msgs = [];
        this.lists = [];
        this.list = [];
        this.listes = [];
        this.listValue = [];
        this.iscompele = false; //完成按钮
        // 分页
        this.pageSize = 10;
        this.pageNum = 1;
    }
    DisplaypropertiesConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: '展示设置',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '排序设置',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            }];
        this.routerA.params.subscribe(function (data) {
            _this.lists = {
                channelId: data.channelId,
                channelName: data.channelName,
                channelDes: data.channelDes,
                productId: data.productId,
                productName: data.productName,
                productLineName: data.productLineName,
                productGroupName: data.productGroupName,
                BaseproductName: data.BaseproductName,
                description: data.description,
            };
        });
        this.productFeatureCategory();
    };
    DisplaypropertiesConfigComponent.prototype.ngOnChanges = function () {
    };
    DisplaypropertiesConfigComponent.prototype.next = function () {
        var _this = this;
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
        if (this.activeIndex === 0) {
            this.listValue = [];
            this.list.forEach(function (items) {
                items.productFeatureTypeList.forEach(function (item) {
                    if (item.isShow === 'true') {
                        if (item['productFeatureTypeNum']) {
                        }
                        else {
                            item['productFeatureTypeNum'] = '';
                        }
                        _this.listValue.push(item);
                    }
                });
            });
            this.listValue = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.listValue);
            this.activeIndex = 1;
            this.vlaue1 = 1;
        }
    };
    DisplaypropertiesConfigComponent.prototype.prev = function () {
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i < this.activeIndex - 1) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex - 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
        if (this.activeIndex === 1) {
            this.activeIndex = 0;
            this.vlaue1 = 0;
        }
    };
    // 产品下组件以及属性的详情查询
    DisplaypropertiesConfigComponent.prototype.productFeatureCategory = function () {
        var _this = this;
        var param = {
            channelId: this.lists.channelId,
            productId: this.lists.productId,
        };
        this.productManageHttpService.getAvailableProductTZB(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.item = data.availableProduct;
                _this.list = data.productFeatureCategoryList;
                _this.list.forEach(function (items) {
                    items.productFeatureTypeList.forEach(function (item) {
                        item.isShow = item.isShow.toString();
                    });
                });
                _this.list = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.list);
                _this.resultClick(0, data.productFeatureCategoryList[0]);
                _this.listes = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.listes);
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
    DisplaypropertiesConfigComponent.prototype.allServe = function () {
        var _this = this;
        this.iscompele = true;
        var productFeatureTypeList = [];
        this.listValue.forEach(function (items) {
            productFeatureTypeList.push({
                productFeatureTypeId: items.productFeatureTypeId,
                productFeatureTypeName: items.productFeatureTypeName,
                productFeatureTypeDesc: items.productFeatureTypeDesc,
                productFeatureTypeNum: items.productFeatureTypeNum,
            });
        });
        var param = {
            channelId: this.lists.channelId,
            productId: this.lists.productId,
            productFeatureTypeList: productFeatureTypeList,
        };
        this.productManageHttpService.modifyProductAttrConfigDetail(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var this_1 = _this;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                setTimeout(function () {
                    this_1.router.navigate(['/pages/tzb/product-manage/available-product/display-properties']);
                }, 500);
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
    };
    // 点击组件属性查看
    DisplaypropertiesConfigComponent.prototype.resultClick = function (i, col) {
        this.show = col.productFeatureCategoryName;
        this.listes = col.productFeatureTypeList;
    };
    // 是否展开组件框
    DisplaypropertiesConfigComponent.prototype.openClick = function () {
        if (this.vlaueOpen === 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    DisplaypropertiesConfigComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    // 分页
    DisplaypropertiesConfigComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        // 调用查询的方法
        // this.queryEvent();
        this.pageNum = 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplaypropertiesConfigComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplaypropertiesConfigComponent.prototype, "outValue", void 0);
    DisplaypropertiesConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-properties-config',
            template: __webpack_require__(/*! ./display-properties-config.component.html */ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.html"),
            styles: [__webpack_require__(/*! ./display-properties-config.component.scss */ "./src/app/pages/tzb/product-manage/available-product/display-properties-config/display-properties-config.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DisplaypropertiesConfigComponent);
    return DisplaypropertiesConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/bean/display-properties.bean.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/bean/display-properties.bean.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DisplaypropertiesBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaypropertiesBean", function() { return DisplaypropertiesBean; });
var DisplaypropertiesBean = /** @class */ (function () {
    function DisplaypropertiesBean() {
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return DisplaypropertiesBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-2 ui-md-2  text_right\">\r\n                <label>渠道:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.channelName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>可售产品编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.productId}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>可售产品名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.productName}}</label>\r\n            </div>\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>可售产品描述:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.description}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>创建人:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.createdByUserLogin}}</label>\r\n            </div>\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>创建时间:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.createdStamp}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-2 ui-md-2  text_right\">\r\n                <label>最后修改人:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.lastModifiedByUserLogin}}</label>\r\n            </div>\r\n            <div class=\"ui-g-2 ui-md-2 text_right\">\r\n                <label>最后修改时间:</label>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <label>{{list.lastUpdatedStamp}}</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 overflow\">\r\n        <u-dataTable [value]=\"listValue\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeId\" header=\"属性编码\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeDesc\" header=\"属性描述\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeNum\" header=\"属性序号\">\r\n            </p-column>\r\n        </u-dataTable>\r\n        <u-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n        <span class=\"icoColor\" (click)=\"closeClick()\">取消</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .heightO {\n  height: 1rem; }\n\n.container .border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.overflow {\n  height: 280px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2Rpc3BsYXktcHJvcGVydGllcy9kaXNwbGF5LXByb3BlcnRpZXMtZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYXZhaWxhYmxlLXByb2R1Y3RcXGRpc3BsYXktcHJvcGVydGllc1xcZGlzcGxheS1wcm9wZXJ0aWVzLWRldGFpbHNcXGRpc3BsYXktcHJvcGVydGllcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsWUFBWSxFQUFBOztBQVJwQjtFQVdRLDhCQUE4QixFQUFBOztBQUl0QztFQUNJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9hdmFpbGFibGUtcHJvZHVjdC9kaXNwbGF5LXByb3BlcnRpZXMvZGlzcGxheS1wcm9wZXJ0aWVzLWRldGFpbHMvZGlzcGxheS1wcm9wZXJ0aWVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmhlaWdodE8ge1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItZGFzaGVkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVyZmxvdyB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: DisplaypropertiesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaypropertiesDetailsComponent", function() { return DisplaypropertiesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplaypropertiesDetailsComponent = /** @class */ (function () {
    function DisplaypropertiesDetailsComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //列表无数据
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    DisplaypropertiesDetailsComponent.prototype.ngOnInit = function () {
    };
    DisplaypropertiesDetailsComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    // 关闭
    DisplaypropertiesDetailsComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    DisplaypropertiesDetailsComponent.prototype.queryEvent = function () {
        var _this = this;
        this.list = this.inValue;
        var param = {
            productId: this.inValue.productId,
            productAttrConfigId: this.inValue.productAttrConfigId,
            channelId: this.inValue.channelId,
            productFeatureCategoryId: this.inValue.productFeatureCategoryId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.productManageHttpService.queryProductAttrConfigDetail(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list.createdByUserLogin = data.createdByUserLogin;
                _this.list.lastModifiedByUserLogin = data.lastModifiedByUserLogin;
                var createdStamp = new Date(data.createdStamp);
                _this.list.createdStamp = _this.commfunc.transDateN(createdStamp);
                var lastUpdatedStamp = new Date(data.lastUpdatedStamp);
                _this.list.lastUpdatedStamp = _this.commfunc.transDateN(lastUpdatedStamp);
                // this.listValue = data.resultList;
                // this.total = data.total;
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
    DisplaypropertiesDetailsComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        //调用查询的方法
        this.queryEvent();
        // this.pageNum = 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplaypropertiesDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplaypropertiesDetailsComponent.prototype, "outValue", void 0);
    DisplaypropertiesDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-properties-details',
            template: __webpack_require__(/*! ./display-properties-details.component.html */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.html"),
            styles: [__webpack_require__(/*! ./display-properties-details.component.scss */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties-details/display-properties-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], DisplaypropertiesDetailsComponent);
    return DisplaypropertiesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventure\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-12\">\r\n        <ul class=\"ui-breadcrumb-new\">\r\n          <li class=\"active\">\r\n            <a>\r\n              <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n          </li>\r\n          <li>\r\n            <a>产品管理</a>\r\n          </li>\r\n          <li>\r\n            <a>可售产品展示属性管理</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"filter-div\">\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            渠道:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"displaypropertiesBean.channelName\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            可售产品编号:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"displaypropertiesBean.productId\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            可售产品名称:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"displaypropertiesBean.productName\" type=\"text\" pInputText class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n            </div>\r\n\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-div\" style=\"background-color:#fff;height:500px;\">\r\n      <u-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center','width':'10%'}\" header=\"序号\" field=\"\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"channelName\" header=\"渠道\"></p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productId\" header=\"可售产品编号\"></p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productName\" header=\"可售产品名称\"></p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"description\" header=\"可售产品描述\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <span *ngIf=\"item.description && item.description.length>15\">{{item.description.substring(0,15)}}...</span>\r\n            <span *ngIf=\"item.description && item.description.length<16\">{{item.description}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"status\" header=\"状态\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.status|codeValuePie:statuslist}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'15%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            操作\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n            <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailsClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n            <a class=\"icon iconfont\" pTooltip=\"配置\" tooltipPosition=\"top\" [routerLink]=\"['/pages/tzb/product-manage/available-product/display-properties-config',item]\"\r\n              style=\"color:#bf66f6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe65c;</a>\r\n            <a class=\"icon iconfont\" pTooltip=\"调整状态\" tooltipPosition=\"top\" (click)=\"isCompleteClick(item)\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe62b;</a>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n        <div style=\"float:right;padding-top:100px;\">\r\n          <u-paginator [first]=\"first\" rows=\"{{displaypropertiesBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <app-display-properties-details *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-display-properties-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text_center {\n  text-align: center; }\n\n.text_right {\n  text-align: right; }\n\n.ecolor {\n  background-color: #ebebeb; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.table-div {\n  margin-top: 12px; }\n\n.adventure {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.adventure .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 550px !important; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-height: 600px !important;\n  height: 60% !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2Rpc3BsYXktcHJvcGVydGllcy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYXZhaWxhYmxlLXByb2R1Y3RcXGRpc3BsYXktcHJvcGVydGllc1xcZGlzcGxheS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFGZjtJQUlRLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQUl2QjtFQUNLO0lBQ0csdUJBQXNCLEVBQUEsRUFDekI7O0FBR0o7RUFDRyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUd6QjtFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUdqQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2Rpc3BsYXktcHJvcGVydGllcy9kaXNwbGF5LXByb3BlcnRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJmbG93IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1kaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkdmVudHVyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAuZmlsdGVyLWRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgICA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DisplaypropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaypropertiesComponent", function() { return DisplaypropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_display_properties_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/display-properties.bean */ "./src/app/pages/tzb/product-manage/available-product/display-properties/bean/display-properties.bean.ts");
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




var DisplaypropertiesComponent = /** @class */ (function () {
    function DisplaypropertiesComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; // 列表无数据
        // bean
        this.displaypropertiesBean = new _bean_display_properties_bean__WEBPACK_IMPORTED_MODULE_5__["DisplaypropertiesBean"]();
        // 每页多少条
        this.pageSize = '10';
        this.display = false;
        // 提示信息
        this.msgs = [];
        // 分页控制
        this.first = 0;
        this.statuslist = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.statuslist = this.code['statusList'];
    }
    DisplaypropertiesComponent.prototype.ngOnInit = function () {
        this.displaypropertiesBean.pageSize = 10;
        this.displaypropertiesBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 码值
    DisplaypropertiesComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 重置
    DisplaypropertiesComponent.prototype.resetClick = function () {
        this.displaypropertiesBean = new _bean_display_properties_bean__WEBPACK_IMPORTED_MODULE_5__["DisplaypropertiesBean"]();
    };
    // 查询始终第一页
    DisplaypropertiesComponent.prototype.querySecle = function () {
        this.displaypropertiesBean.pageSize = 10;
        this.displaypropertiesBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 查询
    DisplaypropertiesComponent.prototype.queryClick = function () {
        var _this = this;
        this.productManageHttpService.queryProductAttrConfigList(this.displaypropertiesBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.resultList;
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
    DisplaypropertiesComponent.prototype.detailsClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '2';
        this.updateValue = item;
    };
    // 详情的回调
    DisplaypropertiesComponent.prototype.detailsCall = function (param) {
        this.display = param;
        // this.queryClick();
    };
    // 分页
    DisplaypropertiesComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.displaypropertiesBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.displaypropertiesBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.displaypropertiesBean.pageSize;
        // 调用查询的方法
        this.queryClick();
        this.displaypropertiesBean.pageNum = 1;
    };
    // 按钮权限
    DisplaypropertiesComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    DisplaypropertiesComponent.prototype.isCompleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要改变状态吗?',
            accept: function () {
                // 条件
                var parems = {
                    productAttrConfigId: item.productAttrConfigId,
                    status: 'Y',
                };
                _this.productManageHttpService.modifyProductAttrConfigStatus(parems).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.queryClick();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            }
        });
    };
    DisplaypropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-properties',
            template: __webpack_require__(/*! ./display-properties.component.html */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.html"),
            styles: [__webpack_require__(/*! ./display-properties.component.scss */ "./src/app/pages/tzb/product-manage/available-product/display-properties/display-properties.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], DisplaypropertiesComponent);
    return DisplaypropertiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/examine/examine.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 text-right\">\r\n                <span>事项类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{list.bigClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 text-right\">\r\n                <span>事项名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{list.littleClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 text-right\">\r\n                <span>发起人:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{list.workCreateName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 text-right\">\r\n                <span>创建日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{list.createDate}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"varMap.businessType != 'productOnShelves' && varMap.businessType != 'productOffShelves'\">\r\n        <p-panel header=\"审批信息展示\" [toggleable]=\"true\" [collapsed]=\"false\" [style]=\"{'margin-bottom':'20px'}\">\r\n            <!-- 基础 -->\r\n            <div class=\"ui-g-12 form_item\" *ngIf=\"varMap.businessType == 'productTemplateAdd' || varMap.businessType == 'productTemplateUpdate' || varMap.businessType == 'productTemplateDelete'\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>基础产品编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.productCategoryId}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>基础产品名称:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.categoryName}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-2 text-right\">\r\n                            <span>详细描述:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-10\" style=\"word-wrap: break-word\">\r\n                            <span>{{base.description}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>创建人:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.createdByUserLogin}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>创建时间:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.createdDate}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>最后修改人:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.lastModifiedByUserLogin}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>最后修改时间:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{base.lastModifiedDate}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 可售 -->\r\n            <div class=\"ui-g-12 form_item\" *ngIf=\"varMap.businessType == 'productAvailableAdd' || varMap.businessType == 'productAvailableUpdate' || varMap.businessType == 'productAvailableDelete'\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>可售产品编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.productId}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>可售产品名称:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.productName}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-2 text-right\">\r\n                            <span>详细描述:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-10 ui-md-9\" style=\"word-wrap: break-word\">\r\n                            <span>{{sale.description}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>创建人:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.createdByUserLogin}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>创建时间:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.createdDate}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>最后修改人:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.lastModifiedByUserLogin}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <span>最后修改时间:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <span>{{sale.lastModifiedDate}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 详情按钮 -->\r\n            <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n                <!-- *ngIf=\"permissionCheck('SID00000_P011_P21201')\" -->\r\n                <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn1-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton type=\"button\" label=\"查看详情\" (click)=\"Modify()\"></button>\r\n                        </div>\r\n                    </div>\r\n                    <span>&nbsp;</span>\r\n                    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"permissionCheck('SID00000_P011_P21202') || varMap.businessType == 'productTemplateUpdate' || varMap.businessType == 'productAvailableUpdate' \">\r\n                        <div class=\"ui-btn1-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton type=\"button\" label=\"差异查看\" (click)=\"difference()\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </p-panel>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"varMap.businessType == 'productOnShelves' || varMap.businessType == 'productOffShelves'\">\r\n        <app-batch-query-details [inValue]=\"batchlist\"></app-batch-query-details>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <examine-page></examine-page>\r\n    </div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <app-base-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsbase($event)\"></app-base-view-details>\r\n        <app-available-view-details *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"detailsavailable($event)\"></app-available-view-details>\r\n    </div>\r\n</p-dialog>\r\n<!-- 差异分析 -->\r\n<p-dialog *ngIf='display2' [(visible)]=\"display2\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <div class=\"ui-g-12\" *ngIf=\"varMap.businessType == 'productAvailableUpdate'\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"availableProduct\">\r\n                <p-panel header=\"详情展示\" [toggleable]=\"true\" [collapsed]=\"false\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-6\" *ngIf=\"productName\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)可售产品名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productName.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)可售产品名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productName.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"introductionDate\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)生效日期:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{introductionDate.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)生效日期:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{introductionDate.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"releaseDate\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)失效日期:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{releaseDate.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)失效日期:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{releaseDate.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"currency\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)币种:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{currency.oldValue|codeValuePie:select_1}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)币种:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{currency.newValue|codeValuePie:select_1}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"inOutTableMode\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)表内外:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{inOutTableMode.oldValue|codeValuePie:select_2}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)表内外:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{inOutTableMode.newValue|codeValuePie:select_2}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"crmProductTreeCode\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)CRM产品树编号:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{crmProductTreeCode.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)CRM产品树编号:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{crmProductTreeCode.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"subBusinessCode\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)子业务编码:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{subBusinessCode.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)子业务编码:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{subBusinessCode.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"businessCode\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)业务编码:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{businessCode.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)业务编码:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{businessCode.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"marketDepartmentList\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)营销部门:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{oldmarket}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)营销部门:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{newmarket}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"manageDepartmentList\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)管理部门:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{oldmanage}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)管理部门:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{newmanage}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"productManagerList\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)产品经理:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{oldmanage}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)产品经理:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{newmanage}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"salesPostList\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)销售人员岗位:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{oldsales}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)销售人员岗位:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{newsales}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"description\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)可售产品描述:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{description.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)可售产品描述:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{description.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <div class=\"ui-g-6\" *ngIf=\"addproductMsgs\">\r\n                                <div>\r\n                                    <header>(新)特殊属性</header>\r\n                                </div>\r\n                                <u-dataTable [value]=\"addproductMsgs\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性值\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"deleteproductMsgs\">\r\n                                <div>\r\n                                    <header>(旧)特殊属性</header>\r\n                                </div>\r\n                                <u-dataTable [value]=\"deleteproductMsgs\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性值\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"productFeatureCategoryList\">\r\n                <p-panel header=\"组件展示\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g\">\r\n                        <div>\r\n                            <header>新增</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"addproductFeatureCategoryList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01\">{{item.min}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01 && item.valueType!=06\">--</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01\">{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.productFeatureName}}</span>\r\n                                        <span *ngIf=\"item.valueType==05 || item.valueType==06\">{{item.def}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                        <div>\r\n                            <header>已删除</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"deleteproductFeatureCategoryList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01\">{{item.min}}</span>\r\n                                            <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01 && item.valueType!=06\">--</span>\r\n                                            <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=01\">{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.productFeatureName}}</span>\r\n                                        <span *ngIf=\"item.valueType==05 || item.valueType==06\">{{item.def}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                        <div>\r\n                            <header>修改</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"updateproductFeatureCategoryList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围(新)\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围(新)</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">\r\n                                            <span *ngIf=\"item.minType\">{{item.min.newValue}}</span>\r\n                                        <span *ngIf=\"!item.minType\">{{item.min}}</span>\r\n                                        </span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">--</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">\r\n                                            <span *ngIf=\"item.maxType\">{{item.max.newValue}}</span>\r\n                                        <span *ngIf=\"!item.maxType\">{{item.max}}</span>\r\n                                        </span>\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.productFeatureName}}</span>\r\n                                        <span *ngIf=\"item.valueType==05 || item.valueType==06\">{{item.def}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围(旧)\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围(旧)</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">\r\n                                            <span *ngIf=\"item.minType\">{{item.min.oldValue}}</span>\r\n                                        <span *ngIf=\"!item.minType\">{{item.min}}</span>\r\n                                        </span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">--</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==02 || item.valueType==04 || item.valueType==03)\">\r\n                                            <span *ngIf=\"item.maxType\">{{item.max.oldValue}}</span>\r\n                                        <span *ngIf=\"!item.maxType\">{{item.max}}</span>\r\n                                        </span>\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.productFeatureName}}</span>\r\n                                        <span *ngIf=\"item.valueType==05 || item.valueType==06\">{{item.def}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"productFunctionList\">\r\n                <p-panel header=\"产品功能\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div>\r\n                        <header>新</header>\r\n                    </div>\r\n                    <u-dataTable [value]=\"addproductFunctionList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                        </p-column>\r\n                    </u-dataTable>\r\n                    <div>\r\n                        <header>旧</header>\r\n                    </div>\r\n                    <u-dataTable [value]=\"deleteproductFunctionList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                        </p-column>\r\n                    </u-dataTable>\r\n                </p-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" *ngIf=\"varMap.businessType == 'productTemplateUpdate'\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"productCategory\">\r\n                <p-panel header=\"详情展示\" [toggleable]=\"true\" [collapsed]=\"false\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-6\" *ngIf=\"categoryName\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)基础产品名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{categoryName.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)基础产品名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{categoryName.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"productLineName\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)产品线名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productLineName.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)产品线名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productLineName.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"productGroupName\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)产品组名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productGroupName.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)产品组名称:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{productGroupName.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-6\" *ngIf=\"description\">\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(旧)基础产品描述:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{description.oldValue}}</span>\r\n                                </div>\r\n                                <div class=\"ui-g-4 text-right\">\r\n                                    <span>(新)基础产品描述:</span>\r\n                                </div>\r\n                                <div class=\"ui-g-6\">\r\n                                    <span>{{description.newValue}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"productFeatureCategoryList\">\r\n                <p-panel header=\"组件展示\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g\">\r\n                        <div>\r\n                            <header>新增</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"productFeatureCategoryadd\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.description}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06\">{{item.min}}--{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==05 || item.valueType==06)\">{{item.def}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType==01\">{{item.productFeatureLocalCode}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                        <div>\r\n                            <header>已删除</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"productFeatureCategorydelete\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.description}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06\">{{item.min}}--{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==05 || item.valueType==06)\">{{item.def}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType==01\">{{item.productFeatureLocalCode}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                        <div>\r\n                            <header>修改</header>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <u-dataTable [(value)]=\"productFeatureCategoryupdate\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围(新)\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围(新)</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.description.newValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && item.min.newValue\">{{item.min.newValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && !item.min.newValue\">{{item.min}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06\">--</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && item.max.newValue\">{{item.max.newValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && !item.max.newValue\">{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==05 || item.valueType==06)\">{{item.def.newValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType==01\">{{item.productFeatureLocalCode.newValue}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'20%'}\" header=\"取值范围(旧)\">\r\n                                    <ng-template pTemplate=\"header\">\r\n                                        <label>取值范围(旧)</label>\r\n                                    </ng-template>\r\n                                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span *ngIf=\"item.featureType==01\">{{item.description.oldValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && item.min.oldValue\">{{item.min.oldValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && !item.min.oldValue\">{{item.min}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06\">--</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && item.max.oldValue\">{{item.max.oldValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType!=05 && item.valueType!=06 && !item.max.oldValue\">{{item.max}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && (item.valueType==05 || item.valueType==06)\">{{item.def.oldValue}}</span>\r\n                                        <span *ngIf=\"item.featureType==02 && item.valueType==01\">{{item.productFeatureLocalCode.oldValue}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                        {{col.configLevel|codeValuePie:configLevel}}\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"productFunctionList\">\r\n                <p-panel header=\"产品功能\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div>\r\n                                <header>新</header>\r\n                            </div>\r\n                            <u-dataTable [(value)]=\"addproductFunctionListbase\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            <div>\r\n                                <header>旧</header>\r\n                            </div>\r\n                            <u-dataTable [(value)]=\"deleteproductFunctionListbase\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                                </p-column>\r\n                                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                                </p-column>\r\n                            </u-dataTable>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"paymentMethodTypeList\">\r\n                <p-panel header=\"支付/交付/个性化\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                    <div class=\"ui-g padding_zero boxAll\">\r\n                        <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpenf == 'down'}\">\r\n                            <div class=\"un_active\" *ngFor=\"let col of paymentMethodTypeList;let i = index\" (click)=\"resultfClick(i,col,'pay')\" [ngClass]=\"{'active':shows == col.functionName}\">\r\n                                {{col.functionName}}\r\n                                <span class=\"dline\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div (click)=\"openClickf()\" class=\"boxTwo text_center\">\r\n                            <span *ngIf=\"vlaueOpenf=='open'\">展开</span>\r\n                            <span *ngIf=\"vlaueOpenf=='down'\">收起</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(新)支付工具</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"addpaymentMethodTypeList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"paymentMethodTypeId\" header=\"支付编号\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"paymentMethodTypeName\" header=\"支付名称\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(删)支付工具</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"deletepaymentMethodTypeList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"paymentMethodTypeId\" header=\"支付编号\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"paymentMethodTypeName\" header=\"支付名称\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(新)交付服务</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"contentListadd\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"ProductContentTypeName\" header=\"交付服务类型\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"contentName\" header=\"交付服务名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"fromDate\" header=\"生效时间\">\r\n                                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                            {{col.fromDate|date:'yyyy-MM-dd'}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"thruDate\" header=\"失效时间\">\r\n                                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                            {{col.thruDate|date:'yyyy-MM-dd'}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(删)交付服务</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"contentListdelete\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"ProductContentTypeName\" header=\"交付服务类型\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"contentName\" header=\"交付服务名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"fromDate\" header=\"生效时间\">\r\n                                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                            {{col.fromDate|date:'yyyy-MM-dd'}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"thruDate\" header=\"失效时间\">\r\n                                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                            {{col.thruDate|date:'yyyy-MM-dd'}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(新)个性化</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"surveyadd\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionType\" header=\"属性值类型\">\r\n                                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            {{col.surveyOptionType|codeValuePie:QuestionLists}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionName\" header=\"属性名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionDesc\" header=\"属性描述\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"requiredField\" header=\"必输\">\r\n                                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            {{col.requiredField|codeValuePie:isMybankCust}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"pageNum\" header=\"属性分页\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <div>\r\n                                    <header>(删)个性化</header>\r\n                                </div>\r\n                                <u-dataTable [(value)]=\"surveydelete\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionType\" header=\"属性值类型\">\r\n                                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            {{col.surveyOptionType|codeValuePie:QuestionLists}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionName\" header=\"属性名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"surveyOptionDesc\" header=\"属性描述\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"requiredField\" header=\"必输\">\r\n                                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            {{col.requiredField|codeValuePie:isMybankCust}}\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"pageNum\" header=\"属性分页\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/examine/examine.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  max-height: 700px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.text-right {\n  text-align: right; }\n\n.padding_zero {\n  padding: 0; }\n\n.boxAll {\n  position: relative;\n  clear: both;\n  width: 100%;\n  background-color: #19b0c8; }\n\n.boxOne {\n  float: left;\n  width: 90%; }\n\n.boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.heOne {\n  height: 100%; }\n\n.ul_box ul li {\n  list-style-type: none; }\n\n.un_active {\n  display: inline-block;\n  padding: 13px 16px;\n  border: none !important;\n  color: white;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  position: relative; }\n\n.active {\n  position: relative;\n  background-color: #E9F2F6;\n  color: #19b0c8; }\n\n.active .dline {\n    position: absolute;\n    left: 20%;\n    bottom: 0;\n    background-color: #19b0c8;\n    width: 56%;\n    height: 2px; }\n\n:host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(2) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(3) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(4) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(5) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps.ui-steps-readonly .ui-steps-item {\n  background-color: #fafafa; }\n\n:host/deep/ .ui-widget:disabled {\n  background-color: #ddd;\n  color: #909090; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(2) {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(3) {\n    width: 28%; } }\n\n.radiocolor,\n.hcolor {\n  color: #19b0c8; }\n\n.forcolor {\n  background-color: #19b0c8; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2V4YW1pbmUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXGF2YWlsYWJsZS1wcm9kdWN0XFxleGFtaW5lXFxleGFtaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0EsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksWUFBWSxFQUFBOztBQWNoQjtFQUNJLHFCQUFxQixFQUFBOztBQWlCekI7RUFDSSxxQkFBcUI7RUFFckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhsQjtJQUtRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQThCbEI7RUFDRyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0s7SUFDRyxVQUFVLEVBQUE7RUFFYjtJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0csVUFBVSxFQUFBLEVBQ2I7O0FBR0w7O0VBRUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUF5QixFQUFBOztBQWU3QjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L2V4YW1pbmUvZXhhbWluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZm9ybV9sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ub3ZlcmZsb3cge1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnBhZGRpbmdfemVybyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5ib3hBbGwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuLmJveE9uZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmJveFR3byB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuLmhlVHdvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmhlT25lIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4vLyAudGV4dF9jZW50ZXIge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC50ZXh0X3JpZ2h0IHtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgbGFiZWwge1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC50ZXh0X2xlZnQge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gfVxyXG4udWxfYm94IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4vLyAubWFyZ2luX3RvcF9vbmUge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTJyZW07XHJcbi8vIH1cclxuLy8gLm1hcmdpbl90b3BfdHdvIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbi8vIH1cclxuLy8gLmJvcmRlcl9ibHVlIHtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDk0RDI7XHJcbi8vIH1cclxuLy8gLnNwYW5fYnV0dG9uIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDE2cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyB9XHJcbi51bl9hY3RpdmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gaGVpZ2h0OiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjJGNjtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgLmRsaW5lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHdpZHRoOiA1NiU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICB9XHJcbn1cclxuLy8gLnVuX21ldGhvZCB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBoZWlnaHQ6IDE0cHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTliMGM4O1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgbWFyZ2luOiA1cHggMjBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG4vLyAubWV0aG9kIHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4vLyAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbiA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTYuNSU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCg0KSB7XHJcbiAgICB3aWR0aDogMTYuNSU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDUpIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLnVpLXN0ZXBzLXJlYWRvbmx5IC51aS1zdGVwcy1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS13aWRnZXQ6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgfVxyXG4gICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgfVxyXG4gICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDMpIHtcclxuICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmFkaW9jb2xvcixcclxuLmhjb2xvciB7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxufVxyXG5cclxuLmZvcmNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuXHJcbi8vIC5vdmVyZmxvdyB7XHJcbi8vICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuLy8gICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuLy8gICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyBsaSA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/examine/examine.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExamineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamineComponent", function() { return ExamineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var ExamineComponent = /** @class */ (function () {
    function ExamineComponent(route, productManageHttpService, commfunc) {
        this.route = route;
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.paymentMethodTypeList = [];
        this.productFunctionList = [];
        this.productFeatureCategoryupdate = [];
        this.updateproductFeatureCategoryList = [];
        this.questionListdelete = [];
        this.batchlist = [];
        this.questionListadd = [];
        this.contentListdelete = [];
        this.contentListadd = [];
        this.deletepaymentMethodTypeList = [];
        this.addpaymentMethodTypeList = [];
        this.deleteproductFunctionListbase = [];
        this.addproductFunctionListbase = [];
        this.productFeatureCategorydelete = [];
        this.productFeatureCategoryadd = [];
        this.deleteproductFeatureCategoryList = [];
        this.addproductFeatureCategoryList = [];
        this.varMap = [];
        this.sale = [];
        this.base = [];
        //提示信息
        this.msgs = [];
        this.display = false;
        this.display2 = false;
        this.vlaueOpenf = 'open';
        this.surveydelete = [];
        this.surveyadd = [];
        this.isMybankCust = []; // 是否必输
        this.isMybank = [];
        this.QuestionLists = []; // 属性值类型
        if (this.route) {
            console.log(this.route.snapshot.params);
            this.productId = this.route.snapshot.params['baseProductId'];
            // this.varMap = JSON.parse(this.route.snapshot.params.varMap);
            this.list = this.route.snapshot.params;
            this.varMap = JSON.parse(this.commfunc.getSessionDataCH('product-examine'));
        }
        this.codeValues(); //调用方法，获取全部码值
        this.configLevel = this.code['configLevel'];
        this.select_1 = this.code['select_1']; // 币种
        this.select_2 = this.code['select_2']; // 表内表外
        this.isMybank = this.code['isMybankCust'];
        this.isMybankCust = this.isMybank.splice(1);
    }
    ExamineComponent.prototype.ngOnInit = function () {
        this.queryQuestionType();
        this.query();
        this.UpdateQuery();
        this.batchlist = {
            applySerialNo: this.varMap.applySerialNo,
        };
    };
    // 信息查询
    ExamineComponent.prototype.query = function () {
        var _this = this;
        var param = { baseProductId: this.varMap.productId };
        if (this.varMap.businessType == 'productTemplateAdd' || this.varMap.businessType == 'productTemplateUpdate' || this.varMap.businessType == 'productTemplateDelete') {
            // 基础
            this.productManageHttpService.getBaseProductDetails(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.base = data.productCategory; // 详情展示
                    var created = new Date(_this.base.createdDate);
                    _this.base.createdDate = _this.transDate(created);
                    var lastModified = new Date(_this.base.lastModifiedDate);
                    _this.base.lastModifiedDate = _this.transDate(lastModified);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            });
        }
        else if (this.varMap.businessType == 'productAvailableAdd' || this.varMap.businessType == 'productAvailableUpdate' || this.varMap.businessType == 'productAvailableDelete') {
            // 可售
            var param1 = { productId: this.varMap.productId };
            this.productManageHttpService.getAvailableProductTZB(param1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.sale = data.availableProduct; // 详情展示
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            });
        }
    };
    // 详情
    ExamineComponent.prototype.Modify = function () {
        this.display = true;
        this.updateValue = this.varMap.productId;
        if (this.varMap.businessType == 'productTemplateAdd' || this.varMap.businessType == 'productTemplateUpdate' || this.varMap.businessType == 'productTemplateDelete') {
            this.headerTitle = '基础产品详情';
            this.showModel = '1';
        }
        else if (this.varMap.businessType == 'productAvailableAdd' || this.varMap.businessType == 'productAvailableUpdate' || this.varMap.businessType == 'productAvailableDelete') {
            this.headerTitle = '可售产品详情';
            this.showModel = '2';
        }
    };
    // 日期格式转换
    ExamineComponent.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        var h = value.getHours() + '';
        var m = value.getMinutes() + '';
        var s = value.getSeconds() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = '0' + data;
        }
        if (h.length < 2) {
            h = '0' + h;
        }
        if (m.length < 2) {
            m = '0' + m;
        }
        if (s.length < 2) {
            s = '0' + s;
        }
        var newtime = year + '-' + month + '-' + data + '  ' + h + ':' + m + ':' + s;
        return newtime;
    };
    // 修改审批接口调用
    ExamineComponent.prototype.UpdateQuery = function () {
        var _this = this;
        var param = { productId: this.varMap.productId };
        console.log(param);
        if (this.varMap.businessType == 'productTemplateUpdate') {
            this.productManageHttpService.getBasicProductComparison(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.categoryName = data.productCategory.categoryName;
                    _this.productCategory = data.productCategory;
                    _this.productFunctionList = data.productFunctionList;
                    _this.description = data.productCategory.description;
                    _this.productLineName = data.productCategory.productLineName;
                    _this.productGroupName = data.productCategory.productGroupName;
                    _this.productFeatureCategoryList = data.productFeatureCategoryList;
                    _this.paymentMethodTypeList = data.productContentList;
                    _this.resultfClick(0, _this.paymentMethodTypeList[0], 'pay');
                    // 组件信息
                    if (data.productFeatureCategoryList) {
                        if (data.productFeatureCategoryList.length > 0) {
                            data.productFeatureCategoryList.forEach(function (item) {
                                if (item.dataType == 'add') {
                                    _this.productFeatureCategoryadd.push(item);
                                }
                                else if (item.dataType == 'delete') {
                                    _this.productFeatureCategorydelete.push(item);
                                }
                                else if (item.dataType == 'update') {
                                    _this.productFeatureCategoryupdate.push(item);
                                }
                            });
                        }
                    }
                    _this.addproductFunctionListbase = data.productFunctionList.addList;
                    _this.deleteproductFunctionListbase = data.productFunctionList.delList;
                    // this.paymentMethodTypeList = data.paymentMethodTypeList;
                    // this.addpaymentMethodTypeList = data.paymentMethodTypeList.addList;
                    // this.deletepaymentMethodTypeList = data.paymentMethodTypeList.delList;
                    if (data.contentList && data.contentList.length > 0) {
                        data.contentList.forEach(function (item) {
                            if (item.dataType == 'add') {
                                _this.contentListadd.push(item);
                            }
                            else if (item.dataType == 'delete') {
                                _this.contentListdelete.push(item);
                            }
                        });
                    }
                    if (data.questionList && data.questionList.length > 0) {
                        data.questionList.forEach(function (item) {
                            if (item.dataType == 'add') {
                                _this.questionListadd.push(item);
                            }
                            else if (item.dataType == 'delete') {
                                _this.questionListdelete.push(item);
                            }
                        });
                    }
                }
            });
        }
        if (this.varMap.businessType == 'productAvailableUpdate') {
            this.productManageHttpService.getAvailableProductComparison(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.availableProduct = data.availableProduct;
                    _this.productFeatureCategoryList = data.productFeatureCategoryList;
                    _this.productFunctionList = data.productFunctionList;
                    var market_1 = '', market2_1 = '', manage_1 = '', manage2_1 = '', product_1 = '', product2_1 = '', sales_1 = '', sales2_1 = '';
                    if (_this.availableProduct.crmProductTreeCode) {
                        if (!_this.availableProduct.crmProductTreeCode.oldValue) {
                            _this.availableProduct.crmProductTreeCode.oldValue = '无';
                        }
                    }
                    if (_this.availableProduct.subBusinessCode) {
                        if (!_this.availableProduct.subBusinessCode.oldValue) {
                            _this.availableProduct.subBusinessCode.oldValue = '无';
                        }
                    }
                    if (_this.availableProduct.businessCode) {
                        if (!_this.availableProduct.businessCode.oldValue) {
                            _this.availableProduct.businessCode.oldValue = '无';
                        }
                    }
                    _this.productName = _this.availableProduct.productName;
                    _this.currency = _this.availableProduct.currency;
                    _this.inOutTableMode = _this.availableProduct.inOutTableMode;
                    _this.subBusinessCode = _this.availableProduct.subBusinessCode;
                    _this.businessCode = _this.availableProduct.businessCode;
                    _this.crmProductTreeCode = _this.availableProduct.crmProductTreeCode;
                    _this.releaseDate = _this.availableProduct.releaseDate;
                    _this.introductionDate = _this.availableProduct.introductionDate;
                    _this.description = _this.availableProduct.description;
                    if (_this.description) {
                        if (!_this.description.oldValue) {
                            _this.description.oldValue = '无';
                        }
                    }
                    _this.marketDepartmentList = _this.availableProduct.marketDepartmentList;
                    _this.salesPostList = _this.availableProduct.salesPostList;
                    _this.manageDepartmentList = _this.availableProduct.manageDepartmentList;
                    _this.productManagerList = _this.availableProduct.productManagerList;
                    if (_this.marketDepartmentList) {
                        if (_this.availableProduct.marketDepartmentList.addList) {
                            _this.availableProduct.marketDepartmentList.addList.forEach(function (item) {
                                if (_this.availableProduct.marketDepartmentList.addList.length > 1) {
                                    market_1 += item.marketDepartmentName + ',';
                                }
                                else {
                                    market_1 = item.marketDepartmentName;
                                }
                            });
                        }
                    }
                    _this.newmarket = market_1;
                    if (_this.marketDepartmentList) {
                        if (_this.availableProduct.marketDepartmentList.delList) {
                            _this.availableProduct.marketDepartmentList.delList.forEach(function (item) {
                                if (_this.availableProduct.marketDepartmentList.delList.length > 1) {
                                    market2_1 += item.marketDepartmentName + ',';
                                }
                                else {
                                    market2_1 = item.marketDepartmentName;
                                }
                            });
                        }
                    }
                    _this.oldmarket = market2_1;
                    if (_this.manageDepartmentList) {
                        if (_this.availableProduct.manageDepartmentList.addList) {
                            _this.availableProduct.manageDepartmentList.addList.forEach(function (item) {
                                if (_this.availableProduct.manageDepartmentList.addList.length > 1) {
                                    manage_1 += item.manageDepartmentName + ',';
                                }
                                else {
                                    manage_1 = item.manageDepartmentName;
                                }
                            });
                        }
                    }
                    _this.newmanage = manage_1;
                    if (_this.manageDepartmentList) {
                        if (_this.availableProduct.manageDepartmentList.delList) {
                            _this.availableProduct.manageDepartmentList.delList.forEach(function (item) {
                                if (_this.availableProduct.manageDepartmentList.delList.length > 1) {
                                    manage2_1 += item.manageDepartmentName + ',';
                                }
                                else {
                                    manage2_1 = item.manageDepartmentName;
                                }
                            });
                        }
                    }
                    _this.oldmanage = manage2_1;
                    if (_this.productManagerList) {
                        if (_this.availableProduct.productManagerList.addList) {
                            _this.availableProduct.productManagerList.addList.forEach(function (item) {
                                if (_this.availableProduct.productManagerList.addList.length > 1) {
                                    product_1 += item.productManagerName + ',';
                                }
                                else {
                                    product_1 = item.productManagerName;
                                }
                            });
                        }
                    }
                    _this.newmanage = product_1;
                    if (_this.productManagerList) {
                        if (_this.availableProduct.productManagerList.delList) {
                            _this.availableProduct.productManagerList.delList.forEach(function (item) {
                                if (_this.availableProduct.productManagerList.delList.length > 1) {
                                    product2_1 += item.productManagerName + ',';
                                }
                                else {
                                    product2_1 = item.productManagerName;
                                }
                            });
                        }
                    }
                    _this.oldmanage = product2_1;
                    if (_this.salesPostList) {
                        if (_this.availableProduct.salesPostList.addList) {
                            _this.availableProduct.salesPostList.addList.forEach(function (item) {
                                if (_this.availableProduct.salesPostList.addList.length > 1) {
                                    sales_1 += item.salesPostName + ',';
                                }
                                else {
                                    sales_1 = item.salesPostName;
                                }
                            });
                        }
                    }
                    _this.newsales = sales_1;
                    if (_this.salesPostList) {
                        if (_this.availableProduct.salesPostList.delList) {
                            _this.availableProduct.salesPostList.delList.forEach(function (item) {
                                if (_this.availableProduct.salesPostList.delList.length > 1) {
                                    sales2_1 += item.salesPostName + ',';
                                }
                                else {
                                    sales2_1 = item.salesPostName;
                                }
                            });
                        }
                    }
                    _this.oldsales = sales2_1;
                    // 组件信息
                    if (data.productFeatureCategoryList.length > 0) {
                        data.productFeatureCategoryList.forEach(function (item) {
                            if (item.dataType == 'add') {
                                _this.addproductFeatureCategoryList.push(item);
                            }
                            else if (item.dataType == 'delete') {
                                _this.deleteproductFeatureCategoryList.push(item);
                            }
                            else if (item.dataType == 'update') {
                                if (typeof item.min == 'string') {
                                    item['minType'] = false;
                                }
                                else {
                                    item['minType'] = true;
                                }
                                if (typeof item.max == 'string') {
                                    item['maxType'] = false;
                                }
                                else {
                                    item['maxType'] = true;
                                }
                                _this.updateproductFeatureCategoryList.push(item);
                            }
                        });
                    }
                    if (data.productFunctionList) {
                        _this.addproductFunctionList = data.productFunctionList.addList;
                        _this.deleteproductFunctionList = data.productFunctionList.delList;
                    }
                    if (data.productMsgs) {
                        _this.addproductMsgs = data.productMsgs.addList;
                        _this.deleteproductMsgs = data.productMsgs.delList;
                    }
                }
            });
        }
    };
    //码值
    ExamineComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 差异对比
    ExamineComponent.prototype.difference = function () {
        this.display2 = true;
        this.headerTitle = '修改信息对比';
    };
    ExamineComponent.prototype.detailsavailable = function (param) {
        this.display = param;
    };
    ExamineComponent.prototype.detailsbase = function (param) {
        this.display = param;
    };
    //  点击组件属性查看
    ExamineComponent.prototype.resultfClick = function (i, col, item) {
        this.shows = col.functionName;
        if (col.paymentMethodType) {
            this.addpaymentMethodTypeList = col.paymentMethodType.addList;
            this.deletepaymentMethodTypeList = col.paymentMethodType.delList;
        }
        else {
            this.addpaymentMethodTypeList = [];
            this.deletepaymentMethodTypeList = [];
        }
        if (col.content) {
            this.contentListadd = col.content.addList;
            this.contentListdelete = col.content.delList;
        }
        else {
            this.contentListadd = [];
            this.contentListdelete = [];
        }
        if (col.surveyOption) {
            this.surveyadd = col.surveyOption.addList;
            this.surveydelete = col.surveyOption.delList;
        }
        else {
            this.surveyadd = [];
            this.surveydelete = [];
        }
    };
    // 是否展开功能框
    ExamineComponent.prototype.openClickf = function () {
        if (this.vlaueOpenf == 'open') {
            this.vlaueOpenf = 'down';
        }
        else {
            this.vlaueOpenf = 'open';
        }
    };
    // 属性值类型
    ExamineComponent.prototype.queryQuestionType = function () {
        var _this = this;
        this.productManageHttpService.queryQuestionType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.QuestionLists = [];
                var obj = data.questionTypeMap;
                for (var key in obj) {
                    _this.QuestionLists.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.QuestionLists = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.QuestionLists);
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
    // 按钮权限
    ExamineComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ExamineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examine',
            template: __webpack_require__(/*! ./examine.component.html */ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.html"),
            styles: [__webpack_require__(/*! ./examine.component.scss */ "./src/app/pages/tzb/product-manage/available-product/examine/examine.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ExamineComponent);
    return ExamineComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/menu-tree-ul.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/menu-tree-ul.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n  width: 100%;\n  margin: 0px auto; }\n\n.middle .leftMenu {\n  width: 100%;\n  height: auto;\n  float: left; }\n\n.middle .leftMenu .topMenu {\n  height: 42px;\n  background-color: #0065a5; }\n\n.middle .leftMenu .topMenu img {\n  margin: 11px;\n  float: left; }\n\n.middle .leftMenu .topMenu .changeMenu {\n  cursor: pointer; }\n\n.middle .leftMenu .topMenu .banshi {\n  padding-left: 23px; }\n\n.middle .leftMenu .topMenu .menuTitle {\n  text-align: center;\n  color: #424242;\n  float: left;\n  line-height: 42px;\n  font-size: 16px;\n  width: 120px; }\n\n.menu_list {\n  width: 100%; }\n\n.menu_list ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n.menu_list ul li {\n  display: block;\n  text-align: center;\n  width: 100%; }\n\n.menu_list ul li .fuMenu {\n  font-size: 13px;\n  cursor: pointer;\n  height: 45px;\n  line-height: 45px;\n  text-align: left;\n  width: calc(100% - 20px);\n  float: right;\n  margin: 0;\n  padding: 0;\n  font-weight: bolder;\n  color: #000; }\n\n.menu_list ul li .fuMenu > span:nth-child(1) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 13px; }\n\n.menu_list ul li .xiala {\n  float: left;\n  margin-left: 0;\n  margin-top: 20px; }\n\n.menu_list ul li .div1 {\n  width: 100%;\n  height: auto;\n  float: left; }\n\n.menu_list ul li .div1 .zcd {\n  color: #424242;\n  font-size: 13px;\n  height: 36px;\n  cursor: pointer;\n  line-height: 36px;\n  text-align: left;\n  width: calc(100% - 10px);\n  margin: 0 0;\n  padding: 0 0;\n  float: right;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 1px;\n  border-radius: 18px; }\n\n.menu_list ul li .div1 .zcd .littlename {\n    flex: 1;\n    margin-left: 10px;\n    width: calc(100% - 30px);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n\n.menu_list ul li .div1 .zcd .ct {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    border: 1px solid #0FB9EF;\n    line-height: 14px;\n    text-align: center;\n    color: #0FB9EF; }\n\n.menu_list ul li .div1 .zcd > span:nth-child(1) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-left: 5px; }\n\n.div1 {\n  height: 200px;\n  display: none; }\n\n.menu_list ul li .div1 .zcd:hover {\n  color: #0FB9EF !important;\n  background-color: #d2f1ef; }\n\n.removes {\n  color: #0FB9EF !important;\n  background-color: #d2f1ef; }\n\n.search {\n  width: 320px;\n  display: flex;\n  flex-direction: row;\n  float: right;\n  margin-top: -40px;\n  margin-right: 20px; }\n\n.search .opt {\n    width: 100px; }\n\n.search .header-query-more {\n    position: relative;\n    vertical-align: middle;\n    left: 30px; }\n\n.search .header-query-more.header-quert-input {\n      height: 22px;\n      line-height: 22px;\n      border-radius: 5px;\n      font-size: 15px;\n      border: 1px solid #d2d2d2; }\n\n.search .header-query-more.header-quert-input input {\n        height: 16px;\n        line-height: 16px;\n        font-size: 15px;\n        -webkit-appearance: button;\n        outline: none;\n        text-indent: 5px;\n        width: calc(100% - 20px);\n        width: -moz-calc(100% - 20px);\n        text-overflow: ellipsis;\n        border: none; }\n\n.search .header-query-more.header-quert-input input:focus {\n          border: none; }\n\n.search .header-query-more.header-quert-input img {\n        position: absolute;\n        right: 4px;\n        width: 14px;\n        height: 14px;\n        top: 4px; }\n\n.noData {\n  position: fixed;\n  top: 300px;\n  left: 50%;\n  transform: translate(0, -50%);\n  z-index: 999; }\n\n.popWindow {\n  background-color: #000;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: .5;\n  z-index: 888888888;\n  position: absolute; }\n\n.maskLayer {\n  position: absolute;\n  width: 550px;\n  height: 400px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcbWVudS10cmVlLXVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVaO0VBQ0MsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUUxQjtFQUNDLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRVo7RUFDQyxlQUFlLEVBQUE7O0FBRWhCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWI7RUFDQyxXQUFXLEVBQUE7O0FBRFo7SUFHUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQUduQjtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUVaO0VBQ0MsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDckIsWUFBWTtFQUNaLFNBQVM7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFYWjtJQWFFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDQyxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVaO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBaEJwQjtJQWtCRSxPQUFNO0lBQ04saUJBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQXZCckI7SUEwQkUsV0FBVTtJQUNWLFlBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBZSxFQUFBOztBQWhDakI7SUFvQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0MsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFFZDtFQUNDLHlCQUF5QjtFQUN0Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDQyx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRzFCO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFObkI7SUFRRSxZQUFZLEVBQUE7O0FBUmQ7SUFXRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVMsRUFBQTs7QUFiWDtNQWVHLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZix5QkFBeUIsRUFBQTs7QUFuQjVCO1FBcUJJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUV4Qiw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCLFlBQVksRUFBQTs7QUEvQmhCO1VBaUNLLFlBQVksRUFBQTs7QUFqQ2pCO1FBcUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixRQUFRLEVBQUE7O0FBS1o7RUFDQyxlQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUiw2QkFBOEI7RUFDOUIsWUFBVyxFQUFBOztBQUdWO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUNGLEVBQUE7O0FBQ0Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQWE7RUFDYixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L21lbnUtdHJlZS11bC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWlkZGxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5taWRkbGUgLmxlZnRNZW51IC50b3BNZW51e1xyXG5cdGhlaWdodDogNDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NWE1O1xyXG59XHJcbi5taWRkbGUgLmxlZnRNZW51IC50b3BNZW51IGltZ3tcclxuXHRtYXJnaW46IDExcHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnUgLnRvcE1lbnUgLmNoYW5nZU1lbnV7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5taWRkbGUgLmxlZnRNZW51IC50b3BNZW51IC5iYW5zaGl7XHJcblx0cGFkZGluZy1sZWZ0OiAyM3B4O1xyXG59XHJcbi5taWRkbGUgLmxlZnRNZW51IC50b3BNZW51IC5tZW51VGl0bGV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjNDI0MjQyO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR3aWR0aDogMTIwcHg7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICB1bHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLm1lbnVfbGlzdCB1bCBsaXtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLm1lbnVfbGlzdCB1bCBsaSAuZnVNZW51e1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRjb2xvcjogIzAwMDtcclxuXHQmPnNwYW46bnRoLWNoaWxkKDEpe1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHR9XHJcbn1cclxuLm1lbnVfbGlzdCB1bCBsaSAueGlhbGF7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWVudV9saXN0IHVsIGxpIC5kaXYxIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1lbnVfbGlzdCB1bCBsaSAuZGl2MSAuemNke1xyXG5cdGNvbG9yOiAjNDI0MjQyO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRoZWlnaHQ6IDM2cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG5cdG1hcmdpbjogMCAwO1xyXG5cdHBhZGRpbmc6IDAgMDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1yaWdodDogMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcblx0LmxpdHRsZW5hbWV7XHJcblx0XHRmbGV4OjE7XHJcblx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHR9XHJcblx0LmN0e1xyXG5cdFx0d2lkdGg6MTRweDtcclxuXHRcdGhlaWdodDoxNHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzBGQjlFRjtcclxuXHRcdGxpbmUtaGVpZ2h0OjE0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogICMwRkI5RUY7XHJcblx0XHJcblx0fVxyXG5cdCY+c3BhbjpudGgtY2hpbGQoMSl7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHR9XHJcbn1cclxuLmRpdjEge1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWVudV9saXN0IHVsIGxpIC5kaXYxIC56Y2Q6aG92ZXJ7IFxyXG5cdGNvbG9yOiAjMEZCOUVGICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmOyBcclxuICAgIC8vIHdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO1xyXG59XHJcbi5yZW1vdmVze1xyXG5cdGNvbG9yOiAjMEZCOUVGICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2QyZjFlZjsgXHJcblx0Ly8gd2lkdGg6Y2FsYygxMDAlIC0gMjBweCkhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2h7XHJcblx0d2lkdGg6IDMyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bWFyZ2luLXRvcDogLTQwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdC5vcHR7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0fVxyXG5cdC5oZWFkZXItcXVlcnktbW9yZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0bGVmdDozMHB4O1xyXG5cdFx0Ji5oZWFkZXItcXVlcnQtaW5wdXQge1xyXG5cdFx0XHRoZWlnaHQ6IDIycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxuXHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdGhlaWdodDogMTZweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHR0ZXh0LWluZGVudDogNXB4O1xyXG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0XHR3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0XHR3aWR0aDogLW1vei1jYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Jjpmb2N1cyB7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHJpZ2h0OiA0cHg7XHJcblx0XHRcdFx0d2lkdGg6IDE0cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xyXG5cdFx0XHRcdHRvcDogNHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5ub0RhdGF7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDozMDBweDtcclxuXHRsZWZ0OjUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwICwgLTUwJSk7XHJcblx0ei1pbmRleDo5OTk7XHJcbn1cclxuICAvL+iSmeWxglxyXG4gIC5wb3BXaW5kb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB6LWluZGV4OiA4ODg4ODg4ODg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICB9XHJcbi5tYXNrTGF5ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDo1NTBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: GlobalDirectoryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDirectoryBean", function() { return GlobalDirectoryBean; });
var GlobalDirectoryBean = /** @class */ (function () {
    function GlobalDirectoryBean() {
    }
    return GlobalDirectoryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-3 over_flow\">\r\n      <p-tree [value]=\"treeData\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-9\">\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>编号:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <label *ngIf=\"ANSG == 'line'\">{{listData.productlineId}}</label>\r\n            <label *ngIf=\"ANSG == 'group'\">{{listData.productgroupId}}</label>\r\n            <label *ngIf=\"ANSG == 'jichu'\">{{listData.productId}}</label> \r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>名称:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <label>{{listData.productName}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>类型:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <label *ngIf=\"ANSG == 'jichu'\">{{listData.productTypeId|codeValuePie: productTypeId}}</label>\r\n            <label *ngIf=\"ANSG != 'jichu'\">{{listData.productTypeId}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>详细描述:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10 \">\r\n            <label>{{listData.description}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\" *ngIf=\"ANSG == 'jichu'\">\r\n        <u-dataTable [value]=\"cars_2\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n          <p-column field=\"productId\" header=\"产品编号\">\r\n          </p-column>\r\n          <p-column field=\"productName\" header=\"产品名称\">\r\n          </p-column>\r\n          <p-column field=\"description\" header=\"产品描述\">\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n          <div style=\"float:right;padding-top:10px;\">\r\n            <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" [rowsPerPageOptions]=\"[10,20,30]\" (onPageChange)=\"paginate($event)\"></u-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n        <button pButton type=\"button\" (click)=\"serve()\" label=\"确定\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .margin {\n  margin-left: 10%;\n  margin-top: 10%; }\n\n.over_flow {\n  height: 400px;\n  overflow: auto; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvZ2xvYmFsLWRpcmVjdG9yeS1tb2RlbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYXZhaWxhYmxlLXByb2R1Y3RcXHNhbGUtcHJvZHVjdC1jb25maWdcXGdsb2JhbC1kaXJlY3RvcnktbW9kZWxcXGdsb2JhbC1kaXJlY3RvcnktbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGFBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvZ2xvYmFsLWRpcmVjdG9yeS1tb2RlbC9nbG9iYWwtZGlyZWN0b3J5LW1vZGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVyX2Zsb3d7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYnQ+YnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: GlobalDirectoryModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDirectoryModelComponent", function() { return GlobalDirectoryModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/global-directory-model.bean */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalDirectoryModelComponent = /** @class */ (function () {
    function GlobalDirectoryModelComponent(productManageHttpService, commfunc, element) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.element = element;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-inferrable-types
        // 提示信息
        this.msgs = [];
        this.listData = {};
        // tslint:disable-next-line:no-inferrable-types
        this.display = false;
        // 每页多少条
        this.pageSize = 10;
        //  分页控制
        this.first = 0;
        this.pageNum = 1;
        // 组件的参数
        this.updateValue = [];
        this.globalDirectoryBean = new _bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_1__["GlobalDirectoryBean"]();
        this.codeValues(); // 调用方法，获取全部码值
        this.productTypeId = this.code['ProductTypeId'];
    }
    GlobalDirectoryModelComponent.prototype.ngOnInit = function () {
        // this.productTypeId = [
        //     { label: '凭证', value: 'VOUCHER_GOOD' },
        //     { label: '可售产品', value: 'DIGITAL_GOOD' },
        //     { label: '组合产品模板', value: 'COMBIN-T' },
        //     { label: '组合产品', value: 'COMBIN-P' },
        //     { label: '基础产品', value: 'SELL_PRODUCT' },
        // ];
        this.query_line();
    };
    // 码值
    GlobalDirectoryModelComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    GlobalDirectoryModelComponent.prototype.ngAfterViewInit = function () {
        // 隐藏tree内部自带的滚动条
        // this.element.nativeElement.querySelector('.ui-tree-container').style.overflow = 'unset';
    };
    GlobalDirectoryModelComponent.prototype.query_line = function () {
        var _this = this;
        this.productManageHttpService.productCategoryLineQueryList(this.globalDirectoryBean).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var tempArr_1 = [];
                data.productLineList.forEach(function (item) {
                    var tempObj = { id: 'line' };
                    tempObj['label'] = item['productLineName'];
                    tempObj['value'] = item;
                    tempObj['children'] = [{}];
                    tempArr_1.push(tempObj);
                });
                _this.treeData = tempArr_1;
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
    GlobalDirectoryModelComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        this.ANSG = event.node.id;
        if (event.node.id === 'line') {
            this.listData['productlineId'] = event.node.value.productLineId;
            this.listData['productgroupId'] = '';
            this.listData['productId'] = '';
            this.listData['productName'] = event.node.value.productLineName;
            this.listData['productTypeId'] = '产品线';
            this.listData['description'] = event.node.value.productLineStatusName;
        }
        if (event.node.id === 'group') {
            this.listData['productgroupId'] = event.node.value.groupId;
            this.listData['productId'] = '';
            this.listData['productName'] = event.node.value.groupName;
            this.listData['productTypeId'] = '产品组';
            this.listData['description'] = event.node.value.groupDsc;
        }
        if (event.node.id === 'jichu') {
            this.first = 0;
            this.pageNum = 1;
            this.pageSize = 10;
            this.tplId = event.node.value.tplId;
            this.searchList();
            var params = {
                productId: event.node.value.tplId
            };
            this.productManageHttpService.getBaseProduct(params).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    if (data.resultList[0] !== undefined && data.resultList[0] !== '') {
                        _this.listData = data.resultList[0];
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
        }
    };
    GlobalDirectoryModelComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.pageSize = Number(event.rows);
        // 当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        // 调用查询的方法
        this.searchList();
        this.pageNum = 1;
    };
    GlobalDirectoryModelComponent.prototype.searchList = function () {
        var _this = this;
        var param = {
            productTemplateId: this.tplId,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        var arr = [];
        this.productManageHttpService.findAvailableProductList(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.cars_2 = data.resultList;
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
    // +号点击
    GlobalDirectoryModelComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        console.log(event);
        if (event.node.id === 'line') {
            this.globalDirectoryBean.productLineId = event.node.value.productLineId;
            var arr_1 = [];
            this.productManageHttpService.productCategoryGroupInfoQueryList(this.globalDirectoryBean).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        tempObj['value']['productLineId'] = _this.globalDirectoryBean.productLineId;
                        tempObj['value']['groupId'] = item['groupId'];
                        tempObj['value']['groupName'] = item['groupName'];
                        tempObj['value']['groupDsc'] = item['description'];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'group') {
            var param = {
                groupId: event.node.value.groupId,
            };
            var arr_2 = [];
            this.productManageHttpService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item.tplName;
                        tempObj['value'] = item;
                        tempObj['children'] = [];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'jichu') {
            var arr = [];
            event.node.children = arr;
        }
    };
    GlobalDirectoryModelComponent.prototype.serve = function () {
        // 是否审批
        var paramse = {
            productId: this.listData.productId,
            flag: 'Y',
        };
        // this.productManageHttpService.productWorkFlowCheck(paramse).subscribe(data => {
        //     console.log('AAAAAAAA');
        //     if (data.returnCode.code === 'success') {
        //         if (data.workFlowFlag == 'Y' || data.productFlag == 'Y' || data.productStatusFlag == 'Y') {
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'info', summary: '提示', detail: '此基础产品已有工作流或已被拒绝，无法引用！' });
        //         } else {
        // 引用
        if (this.listData.productId) {
            var parm = {
                display: false,
                list: this.listData
            };
            this.outValue.emit(parm);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择基础产品！' });
        }
        //         }
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        // })
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GlobalDirectoryModelComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GlobalDirectoryModelComponent.prototype, "inValue", void 0);
    GlobalDirectoryModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-directory-model',
            template: __webpack_require__(/*! ./global-directory-model.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.html"),
            styles: [__webpack_require__(/*! ./global-directory-model.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/global-directory-model.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GlobalDirectoryModelComponent);
    return GlobalDirectoryModelComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <!-- <div class=\"ui-g-12 ui-md-12\">\r\n        <header-title [Info]=\"head_title\"></header-title>\r\n    </div> -->\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-4 over_flow\">\r\n                <p-tree [value]=\"treeData\" selectionMode=\"multiple\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-8\">\r\n                <div class=\"ui-g-12 ui-md-12\" *ngIf=\"!query\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>\r\n                                <b>编号:</b>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4 \">\r\n                            <label>{{listData1.productId}}</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>\r\n                                <b>名称:</b>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4 \">\r\n                            <label>{{listData1.productName}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>\r\n                                <b>类型:</b>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4 \">\r\n                            <label>{{listData1.productTypeId}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>\r\n                                <b>详细描述:</b>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10 \">\r\n                            <label>{{listData1.description}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-2 text_right\" style=\"line-height: 30px;\">\r\n                        <span>产品编号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-3 \">\r\n                        <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"prodId\">\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2 text_right\" style=\"line-height: 30px;\">\r\n                        <span>产品名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-3 \">\r\n                        <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"prodName\">\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2 text_center\">\r\n                        <div style=\"width: 90px;display: inline-block;\">\r\n                            <div class=\"ui-btn1-div\">\r\n                                <p class=\"place-div first\"></p>\r\n                                <p class=\"place-div last\"></p>\r\n                                <!-- <button pButton (click)=\"choicecopy()\" type=\"button\" label=\"选择\" style=\"width: 60px;\"></button> -->\r\n                                <button pButton type=\"button\" (click)=\"queryClick()\" label=\"查询\" style=\"width: 60px;\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\" *ngIf=\"query\">\r\n                    <u-dataTable [value]=\"cars_2\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\" (onRowDblclick)=\"DblclickRow($event)\"\r\n                        (onRowSelect)=\"selceteRow($event)\" selectionMode=\"single\">\r\n                        <!-- <p-column [style]=\"{'text-align':'center','width':'10%'}\" (onRowDblclick)=\"DblclickRow($event)\">\r\n                            <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"ClickA(item)\"></p-checkbox>\r\n                            </ng-template>\r\n                        </p-column> -->\r\n                        <p-column [style]=\"{'text-align':'center','width':'8%'}\" header=\"序号\" field=\"\">\r\n                            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                                {{ri+1}}\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productId\" header=\"产品编号\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productName\" header=\"产品名称\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"description\" header=\"详情描述\" [style]=\"{'text-align':'center','width':'25%'}\">\r\n                            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                                <span *ngIf=\"item.description !=null && item.description.length > 15\">{{item.description.substring(0,15)}}...</span>\r\n                                <span *ngIf=\"item.description != null && item.description.length <= 15\">{{item.description}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </u-dataTable>\r\n                    <div style=\"float:right;margin:10px 10px\">\r\n                        <u-paginator [first]=\"first\" rows=\"{{pageSize1}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n                    <button pButton type=\"button\" (click)=\"serve()\" label=\"确定\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.hidden_lc {\n  visibility: hidden; }\n\n:host/deep/ .ui-tree {\n  width: 100% !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr.ui-datatable-even.ui-state-highlight {\n  background-color: rgba(198, 223, 239, 0.94) !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr.ui-state-highlight {\n  background-color: rgba(198, 223, 239, 0.94) !important; }\n\n.over_flow {\n  height: 400px;\n  overflow: auto; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy1jb3B5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcc2FsZS1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZy1jb3B5XFxzYWxlLXByb2R1Y3QtY29uZmlnLWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxzQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxzREFBc0QsRUFBQTs7QUFHMUQ7RUFDSSxzREFBc0QsRUFBQTs7QUFHMUQ7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9hdmFpbGFibGUtcHJvZHVjdC9zYWxlLXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb25maWctY29weS9zYWxlLXByb2R1Y3QtY29uZmlnLWNvcHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVsX2JveCB1bCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3Age1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaWRkZW5fbGMge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vL+ebruW9leagkVxyXG46aG9zdC9kZWVwLyAudWktdHJlZSB7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHIudWktZGF0YXRhYmxlLWV2ZW4udWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCAyMjMsIDIzOSwgMC45NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0ci51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTgsIDIyMywgMjM5LCAwLjk0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3Zlcl9mbG93IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmJ0PmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: SaleProductConfigCopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigCopyComponent", function() { return SaleProductConfigCopyComponent; });
/* harmony import */ var _global_directory_model_bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-directory-model/bean/global-directory-model.bean */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaleProductConfigCopyComponent = /** @class */ (function () {
    function SaleProductConfigCopyComponent(productManageHttpService, commfunc, route, element) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.route = route;
        this.element = element;
        this.pageNum1 = 1;
        this.pageSize1 = 10;
        this.first = 0;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // tslint:disable-next-line:no-inferrable-types
        this.head_title = '全局目录';
        // 提示信息
        this.msgs = [];
        this.listData = {};
        this.listData1 = {};
        // tslint:disable-next-line:no-inferrable-types
        this.display = false;
        this.query = false;
        // 组件的参数
        this.updateValue = [];
        this.globalDirectoryBean = new _global_directory_model_bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_0__["GlobalDirectoryBean"]();
        this.jichuArr = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.productTypeId = this.code['ProductTypeId0'];
    }
    SaleProductConfigCopyComponent.prototype.ngOnInit = function () {
        // this.productTypeId = [
        //     { label: '可售产品', value: 'AvailableProduct' },
        //     { label: '基础产品', value: 'T' },
        // ];
        this.query_line();
    };
    // 码值
    SaleProductConfigCopyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SaleProductConfigCopyComponent.prototype.ngOnChanges = function () {
    };
    SaleProductConfigCopyComponent.prototype.ngAfterViewInit = function () {
        // 隐藏tree内部自带的滚动条
        // this.element.nativeElement.querySelector('.ui-tree-container').style.overflow = 'unset';
    };
    SaleProductConfigCopyComponent.prototype.selceteRow = function (item) {
        this.productIdRow = item.data.productId;
    };
    SaleProductConfigCopyComponent.prototype.DblclickRow = function (item) {
        var _this = this;
        var params = {
            productId: item.data.productId
        };
        this.productManageHttpService.getAvailableProductTZB(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.listData = data;
                _this.listData1 = data.availableProduct;
                var parmes = {
                    display: false,
                    depart: _this.listData,
                };
                _this.outValue.emit(parmes);
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
    SaleProductConfigCopyComponent.prototype.query_line = function () {
        var _this = this;
        this.productManageHttpService.productCategoryLineQueryList(this.globalDirectoryBean).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var tempArr_1 = [];
                // console.log(data.productLineList);
                data.productLineList.forEach(function (item) {
                    var tempObj = { id: 'line' };
                    tempObj['label'] = item['productLineName'];
                    tempObj['value'] = item;
                    tempObj['children'] = [{}];
                    tempArr_1.push(tempObj);
                });
                _this.treeData = tempArr_1;
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
    SaleProductConfigCopyComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        this.query = false;
        this.productIdRow = '';
        this.prodId = '';
        this.prodName = '';
        if (event.node.id === 'line') {
            this.listData1['productId'] = event.node.value.productLineId;
            // 清除产品组基础产品ID
            this.listData1['lineId'] = event.node.value.productLineId;
            this.listData1['groupId'] = '';
            this.listData1['jichuId'] = '';
            this.listData1['productName'] = event.node.value.productLineName;
            this.listData1['productTypeId'] = '产品线';
            this.listData1['description'] = event.node.value.productLineStatusName;
        }
        if (event.node.id === 'group') {
            this.listData1['productId'] = event.node.value.groupId;
            this.listData1['lineId'] = event.node.value.productLineId;
            // 清除基础产品ID
            this.listData1['groupId'] = event.node.value.groupId;
            this.listData1['jichuId'] = '';
            this.listData1['productName'] = event.node.value.groupName;
            this.listData1['productTypeId'] = '产品组';
            this.listData1['description'] = event.node.value.groupDsc;
        }
        if (event.node.id === 'jichu') {
            this.listData1['productId'] = event.node.value.tplId;
            this.listData1['lineId'] = event.node.parent.value.productLineId;
            this.listData1['groupId'] = event.node.value.parentId;
            this.listData1['jichuId'] = event.node.value.tplId;
            this.listData1['productName'] = event.node.value.tplName;
            this.listData1['productTypeId'] = '基础产品';
            this.listData1['description'] = event.node.value.tplDsc;
        }
        if (event.node.data === -1) {
            this.pageNum++;
            this.jichuArr.splice(this.jichuArr.length - 1, 1);
            var param = {
                productTemplateId: event.node.parent.value.tplId,
                pageSize: this.pageSize = 20,
                pageNum: this.pageNum
            };
            this.productManageHttpService.findAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.resultList.forEach(function (item) {
                        var tempObj = { id: 'keshou' };
                        tempObj['label'] = item['productName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        _this.jichuArr.push(tempObj);
                    });
                    if (data.resultList.length === 20) {
                        var tempObj1 = {};
                        tempObj1['label'] = '...';
                        tempObj1['data'] = -1;
                        _this.jichuArr.push(tempObj1);
                    }
                    event.node.children = _this.jichuArr;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'keshou') {
            var params = {
                productId: event.node.value.productId
            };
            this.productManageHttpService.getAvailableProductTZB(params).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    _this.listData = data;
                    _this.listData1 = data.availableProduct;
                    _this.listData1['productTypeId'] = '可售产品';
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    // +号点击
    SaleProductConfigCopyComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        if (event.node.id === 'line') {
            this.globalDirectoryBean.productLineId = event.node.value.productLineId;
            var arr_1 = [];
            this.productManageHttpService.productCategoryGroupInfoQueryList(this.globalDirectoryBean).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        tempObj['value']['productLineId'] = _this.globalDirectoryBean.productLineId;
                        tempObj['value']['groupId'] = item['groupId'];
                        tempObj['value']['groupName'] = item['groupName'];
                        tempObj['value']['groupDsc'] = item['description'];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'group') {
            var param = {
                groupId: event.node.value.groupId,
            };
            var arr_2 = [];
            this.productManageHttpService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item.tplName;
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'jichu') {
            var param = {
                productTemplateId: event.node.value.tplId,
                pageSize: this.pageSize = 20,
                pageNum: this.pageNum = 1
            };
            this.jichuArr = [];
            this.productManageHttpService.findAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    data.resultList.forEach(function (item) {
                        var tempObj = { id: 'keshou' };
                        tempObj['label'] = item['productName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [];
                        _this.jichuArr.push(tempObj);
                    });
                    if (data.resultList.length === 20) {
                        var tempObj1 = {};
                        tempObj1['label'] = '...';
                        tempObj1['data'] = -1;
                        _this.jichuArr.push(tempObj1);
                    }
                    event.node.children = _this.jichuArr;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id === 'keshou') {
            var arr = [];
            event.node.children = arr;
        }
    };
    SaleProductConfigCopyComponent.prototype.queryClick = function () {
        var _this = this;
        this.query = true;
        var params = {
            productId: this.prodId,
            productName: this.prodName,
            pageSize: this.pageSize1,
            pageNum: this.pageNum1,
            productLineId: this.listData1['lineId'],
            productGroupId: this.listData1['groupId'],
            productTemplateId: this.listData1['jichuId']
        };
        this.productManageHttpService.findAvailableProductList(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.cars_2 = data.resultList;
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
    SaleProductConfigCopyComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize1 = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum1 = currentPage;
        //调用查询的方法
        this.first = (currentPage - 1) * this.pageSize1;
        this.queryClick();
    };
    SaleProductConfigCopyComponent.prototype.queryPrduct = function (event) {
        var _this = this;
        var params = {
            productId: event
        };
        this.productManageHttpService.getAvailableProductTZB(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.listData = data;
                _this.listData1 = data.availableProduct;
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
    SaleProductConfigCopyComponent.prototype.serve = function () {
        var _this = this;
        // 是否审批
        // let paramse = {
        //     productId: this.listData1.productTemplateId,
        //     flag: 'Y',
        // };
        // this.productManageHttpService.productWorkFlowCheck(paramse).subscribe(data => {
        //     if (data.returnCode.code === 'success') {
        //         if (data.workFlowFlag == 'Y' || data.productFlag == 'Y' || data.productStatusFlag == 'Y') {
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'info', summary: '提示', detail: '此基础产品已有工作流或已被拒绝，无法引用！' });
        //         } else {
        //             //引用
        //             let parmes = {
        //                 display: false,
        //                 depart: this.listData,
        //             }
        //             this.outValue.emit(parmes);
        //         }
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        // })
        if (this.productIdRow) {
            var params = {
                productId: this.productIdRow
            };
            this.productManageHttpService.getAvailableProductTZB(params).subscribe(function (data) {
                if (data.returnCode.code === 'success') {
                    _this.listData = data;
                    _this.listData1 = data.availableProduct;
                    var parmes = {
                        display: false,
                        depart: _this.listData,
                    };
                    _this.outValue.emit(parmes);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else {
            if (this.listData.availableProduct) {
                var parmes = {
                    display: false,
                    depart: this.listData,
                };
                this.outValue.emit(parmes);
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择可售产品！' });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], SaleProductConfigCopyComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], SaleProductConfigCopyComponent.prototype, "outValue", void 0);
    SaleProductConfigCopyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'sale-product-config-col',
            template: __webpack_require__(/*! ./sale-product-config-copy.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config-copy.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], SaleProductConfigCopyComponent);
    return SaleProductConfigCopyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>岗位名称 :</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [(ngModel)]=\"queryOPTellerRBean.postName\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>机构名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [(ngModel)]=\"queryOPTellerRBean.partyName\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>人员标识:</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [(ngModel)]=\"queryOPTellerRBean.userLoginId\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <span>人员名称 :</span>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input class=\"ui-inputtext-new\" [(ngModel)]=\"queryOPTellerRBean.userName\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\"查询\" (click)=\"queryclick()\" style=\"width:60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <span>&nbsp;</span>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\" style=\"width:60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\"确认\" (click)=\"server()\" style=\"width:60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <span>&nbsp;</span>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\"取消\" (click)=\"close()\" style=\"width:60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <u-dataTable [value]=\"lists_1\" class='base-table' emptyMessage=\"没有查找到数据\">\r\n                <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_tral\" binary=\"false\" (click)=\"choose_trals()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <p-checkbox [(ngModel)]=\"choose_tr1\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_trss(ri)\"></p-checkbox>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"userLoginId\" header=\"人员标识\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"userName\" header=\"人员名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"postName\" header=\"岗位名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"partyName\" header=\"机构名称\">\r\n                </p-column>\r\n            </u-dataTable>\r\n            <div style=\"float:right;padding-top:10px;\">\r\n                <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.hidden_lc {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy1tYW5hZ2VyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcc2FsZS1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZy1tYW5hZ2VyXFxzYWxlLXByb2R1Y3QtY29uZmlnLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9hdmFpbGFibGUtcHJvZHVjdC9zYWxlLXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb25maWctbWFuYWdlci9zYWxlLXByb2R1Y3QtY29uZmlnLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLnRleHRfY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVsX2JveCB1bCBsaXtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmhpZGRlbl9sY3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SaleProductConfigManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigManagerComponent", function() { return SaleProductConfigManagerComponent; });
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../been/sale-product-config.bean */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/been/sale-product-config.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaleProductConfigManagerComponent = /** @class */ (function () {
    function SaleProductConfigManagerComponent(productManageHttpService, route) {
        this.productManageHttpService = productManageHttpService;
        this.route = route;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.queryOPTellerRBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_1__["QueryOPTellerRBean"]();
        this.lists_1 = [];
        this.msgs = [];
        this.choose_tr1 = [];
        this.select_atr2 = [];
        this.select_atr3 = [];
        this.choose_tral = false; //组件全选;
        this.pageSize = 10; //			每页显示数量	String(20)
        this.pageNum = 1; //		当前页	String(20)
        this.department = [];
        //分页控制
        this.first = 0;
    }
    SaleProductConfigManagerComponent.prototype.ngOnInit = function () {
        this.first = 0;
    };
    SaleProductConfigManagerComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    SaleProductConfigManagerComponent.prototype.queryEvent = function () {
        var _this = this;
        this.choose_tr1.forEach(function (item1) {
            var choosenum = 0;
            _this.department.forEach(function (items) {
                if (_this.lists_1[item1].postId == items.postId && _this.lists_1[item1].userLoginId == items.userLoginId) {
                    choosenum++;
                }
            });
            if (choosenum == 0) {
                _this.department.push(_this.lists_1[item1]);
            }
        });
        this.choose_tr1.sort(function (a, b) { return b - a; });
        this.choose_tr1.forEach(function (item2) {
            _this.lists_1.splice(item2, 1);
        });
        this.lists_1.forEach(function (iteme) {
            var choosenu = 0;
            var choosen = 0;
            _this.department.forEach(function (items, k) {
                if (iteme.postId == items.postId && iteme.userLoginId == items.userLoginId) {
                    choosenu++;
                    choosen = k;
                }
            });
            if (choosenu > 0) {
                _this.department.splice(choosen, 1);
            }
        });
        this.choose_tr1 = [];
        this.choose_tral = false;
        var param = {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            flag: this.queryOPTellerRBean.flag,
            postId: this.queryOPTellerRBean.postId,
            partyId: this.queryOPTellerRBean.partyId,
            userLoginId: this.queryOPTellerRBean.userLoginId,
            userName: this.queryOPTellerRBean.userName,
            postName: this.queryOPTellerRBean.postName,
            partyName: this.queryOPTellerRBean.partyName
        };
        this.productManageHttpService.queryOrgPostTellerRelation(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.lists_1 = data.orgPostTellerList;
                _this.total = data.total;
                _this.lists_1.forEach(function (itemse, i) {
                    _this.department.forEach(function (items) {
                        if (itemse.postId == items.postId && itemse.userLoginId == items.userLoginId) {
                            var nue = i.toString();
                            _this.choose_tr1.push(nue);
                        }
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
    };
    //查询
    SaleProductConfigManagerComponent.prototype.queryclick = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        this.queryEvent();
    };
    //分页
    SaleProductConfigManagerComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        //调用查询的方法
        this.queryEvent();
        this.pageNum = 1;
    };
    // 重置
    SaleProductConfigManagerComponent.prototype.resetClick = function () {
        this.queryOPTellerRBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_1__["QueryOPTellerRBean"]();
    };
    SaleProductConfigManagerComponent.prototype.server = function () {
        this.queryEvent();
        if (this.inValue == 'four') {
            var paramd = {
                value: this.inValue,
                display: false,
                departed: this.department,
            };
            this.outValue.emit(paramd);
        }
    };
    SaleProductConfigManagerComponent.prototype.close = function () {
        var parm = {
            display: false,
        };
        this.outValue.emit(parm);
    };
    //组件设置多选全选
    SaleProductConfigManagerComponent.prototype.choose_trals = function () {
        this.select_atr2 = [];
        for (var i = 0; i < this.lists_1.length; i++) {
            if (this.choose_tral == true) {
                var k = void 0;
                k = i.toString();
                this.select_atr2.push(k);
                this.choose_tr1 = this.select_atr2;
            }
            else {
                this.choose_tr1 = [];
                this.select_atr2 = [];
            }
        }
    };
    //组件设置多选按钮
    SaleProductConfigManagerComponent.prototype.choose_trss = function (ri) {
        this.select_atr3 = [];
        for (var i = 0; i < this.lists_1.length; i++) {
            var k = void 0;
            k = i.toString();
            this.select_atr3.push(k);
        }
        if (this.select_atr3.length === this.choose_tr1.length) {
            this.choose_tral = true;
        }
        else {
            this.choose_tral = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], SaleProductConfigManagerComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], SaleProductConfigManagerComponent.prototype, "outValue", void 0);
    SaleProductConfigManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'sale-product-config-manager',
            template: __webpack_require__(/*! ./sale-product-config-manager.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config-manager.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["ProductManageHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SaleProductConfigManagerComponent);
    return SaleProductConfigManagerComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>可售产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>可售产品新增</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"container ui-g module\">\r\n    <div class=\"ui-g-12 ui-md-12\" id=\"KK\">\r\n      <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <div class=\"ui-g-12 ui-md-12 height border form_item\">\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='0'\">\r\n          <div class=\"ui-g-12 ui-md-12 padding\">\r\n            <div class=\"ui-grid-col-2\" style=\"padding-top: 12px;text-align: right\">\r\n              <span>\r\n                <b>添加方式:</b>\r\n              </span>\r\n            </div>\r\n            <div class=\"ui-grid-col-10\">\r\n              <div class=\"ui-g-12 ui-md-6 text_left saled\">\r\n                <span *ngIf=\"(permissionCheck('SID03007_P058_P001') && !permissionCheck('SID03007_P058_P002'))||(permissionCheck('SID23007_P058_P001') && !permissionCheck('SID23007_P058_P002'))\">\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='copyAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='templateAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"\r\n                      class=\"radiocolor\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='templateAdd'\" disabled name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='copyAdd'\" disabled name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\" class=\"radiocolor\"></p-radioButton>\r\n                </span>\r\n                <span *ngIf=\"(!permissionCheck('SID03007_P058_P001') && permissionCheck('SID03007_P058_P002'))||(!permissionCheck('SID23007_P058_P001') && permissionCheck('SID23007_P058_P002'))\">\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='copyAdd'\" disabled value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='templateAdd'\" disabled value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"\r\n                      class=\"radiocolor\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='templateAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='copyAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\" class=\"radiocolor\"></p-radioButton>\r\n                </span>\r\n                <span *ngIf=\"(permissionCheck('SID03007_P058_P001') && permissionCheck('SID03007_P058_P002'))||(permissionCheck('SID23007_P058_P001') && permissionCheck('SID23007_P058_P002'))\">\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='copyAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='templateAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"\r\n                      class=\"radiocolor\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='templateAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    <p-radioButton *ngIf=\"selectedValue=='copyAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\" class=\"radiocolor\"></p-radioButton>\r\n                </span>\r\n                <!-- <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='copyAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                <p-radioButton name=\"addName\" *ngIf=\"selectedValue=='templateAdd'\" value=\"templateAdd\" label=\"模板添加\" [(ngModel)]=\"selectedValue\"\r\n                  class=\"radiocolor\"></p-radioButton>\r\n                <p-radioButton *ngIf=\"selectedValue=='templateAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                <p-radioButton *ngIf=\"selectedValue=='copyAdd'\" name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\" class=\"radiocolor\"></p-radioButton> -->\r\n                <input pInputText class=\"ui-inputtext-new\" type=\"text\" disabled [(ngModel)]=\"template_product_base_value\" style=\"width:30%\">\r\n                <div style=\"width: 90px;display: inline-block;\" *ngIf=\"selectedValue=='templateAdd'\">\r\n                  <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"choiceTemplate()\" type=\"button\" label=\"选择\" style=\"width: 60px;\"></button>\r\n                  </div>\r\n                </div>\r\n                <div style=\"width: 90px;display: inline-block;\" *ngIf=\"selectedValue=='copyAdd'\">\r\n                  <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"choicecopy()\" type=\"button\" label=\"选择\" style=\"width: 60px;\"></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <form [formGroup]=\"userformT\" *ngIf=\"selectedValue=='templateAdd'\">\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" disabled name=\"template_line_value\" formControlName=\"template_line_value\" [(ngModel)]=\"template_line_value\"\r\n                    type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" disabled name=\"template_group_value\" formControlName=\"template_group_value\" [(ngModel)]=\"template_group_value\"\r\n                    type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>基础产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" disabled name=\"template_product_base_value\" formControlName=\"template_product_base_value\"\r\n                    [(ngModel)]=\"template_product_base_value\" type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-grid-col-6 padding\">\r\n                  <div class=\"ui-grid-col-4 form_item_label\">\r\n                    <span appValidation>可售产品编号:</span>\r\n                  </div>\r\n                  <div class=\"ui-grid-col-7\">\r\n                    <input pInputText class=\"ui-inputtext-new\" class=\"min_right\" type=\"text\" name=\"productIdhead\" readonly [ngModelOptions]=\"{standalone: true}\"\r\n                      [(ngModel)]=\"productIdhead\" />\r\n                    <input pInputText class=\"ui-inputtext-new\" class=\"min_left\" type=\"text\" name=\"productId\" maxlength=\"5\" formControlName=\"productId\"\r\n                      [(ngModel)]=\"productId\" />\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformT.controls['productId'].valid&&userformT.controls['productId'].dirty\">\r\n                      <span [hidden]=\"!userformT.hasError('required','productId')\"> 请填写可售产品编号！</span>\r\n                    <span [hidden]=\"!userformT.hasError('pattern','productId')\"> 可售产品编号只可输入数字！</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-grid-col-6  padding\">\r\n                  <div class=\"ui-grid-col-4  form_item_label\">\r\n                    <span appValidation>可售产品名称:</span>\r\n                  </div>\r\n                  <div class=\"ui-grid-col-7\">\r\n                    <input pInputText class=\"ui-inputtext-new\" [rangeLength]=\"[0,20]\" name=\"product_name_value\" formControlName=\"product_name_value\"\r\n                      [(ngModel)]=\"product_name_value\" type=\"text\" style=\"width:58%\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformT.controls['product_name_value'].valid&&userformT.controls['product_name_value'].dirty\">\r\n                      <span [hidden]=\"!userformT.hasError('pattern','product_name_value')\">可售产品输入不合法！</span>\r\n                    <span [hidden]=\"!userformT.hasError('required','product_name_value')\"> 请填写可售产品名称！</span>\r\n                    <span *ngIf=\"userformT.controls['product_name_value'].errors.rangeLength\">产品名称长度不能超过20位</span>\r\n                    </span>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12  padding\">\r\n                <div class=\"ui-g-2 form_item_label\">\r\n                  <span>可售产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                  <textarea class=\"ui-inputtextarea-new\" name=\"product_content_value\" formControlName=\"product_content_value\" [(ngModel)]=\"product_content_value\"\r\n                    pInputTextarea style=\"width:84%\" maxlength=\"200\"></textarea>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <form [formGroup]=\"userform\" *ngIf=\"selectedValue=='copyAdd'\">\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" name=\"product_line_value\" disabled formControlName=\"product_line_value\" [(ngModel)]=\"product_line_value\"\r\n                    type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" name=\"product_group_value\" disabled formControlName=\"product_group_value\" [(ngModel)]=\"product_group_value\"\r\n                    type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-col-6 padding\">\r\n                <div class=\"ui-grid-col-4 form_item_label\">\r\n                  <span appValidation>基础产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-7\">\r\n                  <input pInputText class=\"ui-inputtext-new\" name=\"product_base_copy\" disabled formControlName=\"product_base_copy\" [(ngModel)]=\"product_base_copy\"\r\n                    type=\"text\" style=\"width:58%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-6 padding\">\r\n                  <div class=\"ui-grid-col-4 form_item_label\">\r\n                    <span appValidation>可售产品编号:</span>\r\n                  </div>\r\n                  <div class=\"ui-grid-col-7\">\r\n                    <input pInputText class=\"ui-inputtext-new\" class=\"min_right\" type=\"text\" name=\"productIdhead\" readonly [ngModelOptions]=\"{standalone: true}\"\r\n                      [(ngModel)]=\"productIdhead\" />\r\n                    <input pInputText class=\"ui-inputtext-new\" class=\"min_left\" type=\"text\" name=\"productId\" maxlength=\"5\" formControlName=\"productId\"\r\n                      [(ngModel)]=\"productId\" />\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productId'].valid&&userform.controls['productId'].dirty\">\r\n                      <span [hidden]=\"!userform.hasError('required','productId')\"> 请填写可售产品编号！</span>\r\n                    <span [hidden]=\"!userformT.hasError('pattern','productId')\"> 可售产品编号只可输入数字！</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6 padding\">\r\n                  <div class=\"ui-grid-col-4  form_item_label\">\r\n                    <span appValidation>可售产品名称:</span>\r\n                  </div>\r\n                  <div class=\"ui-grid-col-7\">\r\n                    <input pInputText class=\"ui-inputtext-new\" name=\"product_name_valuet\" formControlName=\"product_name_valuet\" [(ngModel)]=\"product_name_valuet\"\r\n                      type=\"text\" style=\"width:58%\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['product_name_valuet'].valid&&userform.controls['product_name_valuet'].dirty\">\r\n                      <span [hidden]=\"!userform.hasError('pattern','product_name_valuet')\">可售产品输入不合法！</span>\r\n                    <span [hidden]=\"!userform.hasError('required','product_name_valuet')\"> 请填写可售产品名称！</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12 padding\">\r\n                <div class=\"ui-g-2 form_item_label\">\r\n                  <span>可售产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                  <textarea class=\"ui-inputtextarea-new\" name=\"product_content_valuet\" formControlName=\"product_content_valuet\" [(ngModel)]=\"product_content_valuet\"\r\n                    pInputTextarea style=\"width:84%\" maxlength=\"200\"></textarea>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='1'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_name_value}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{line_value_h}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{group_value_h}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>基础产品:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_base_hs}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                  <span>{{product_content_value}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <p-tabView>\r\n              <p-tabPanel header=\"通用信息\">\r\n                <div class=\"ui-g\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <form [formGroup]=\"userformDate\">\r\n                      <div class=\"ui-g-12\">\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>引入日期:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <p-calendar styleClass=\"ui-calendar-new\" (onSelect)=\"refresh()\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\"\r\n                            [(ngModel)]=\"transferedDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n                            showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\"\r\n                            [locale]=\"ch\"></p-calendar>\r\n                          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['transferedDateFrom'].valid&&userformDate.controls['transferedDateFrom'].dirty\">\r\n                            请填写引入日期！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>截至日期:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <p-calendar styleClass=\"ui-calendar-new\" *ngIf=\"showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [(ngModel)]=\"transferedDateTo\"\r\n                            [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                            [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" [locale]=\"ch\" [minDate]=\"transferedDateFrom\">\r\n                          </p-calendar>\r\n                          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['transferedDateTo'].valid && userformDate.controls['transferedDateTo'].dirty\">\r\n                            请填写截至日期！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>产品币种:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <p-dropdown styleClass=\"ui-dropdown-new\" name=\"productCurrency\" formControlName=\"productCurrency\" [options]=\"select_1\" [(ngModel)]=\"productCurrency\"></p-dropdown>\r\n                          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['productCurrency'].valid&&userformDate.controls['productCurrency'].dirty\">\r\n                            请选择产品币种！\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>表内表外:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <p-dropdown styleClass=\"ui-dropdown-new\" name=\"inOut\" formControlName=\"inOut\" [options]=\"select_2\" [(ngModel)]=\"inOut\"></p-dropdown>\r\n                          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['inOut'].valid&&userformDate.controls['inOut'].dirty\">\r\n                            请选择表内表外！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span>CRM产品树编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <input class=\"ui-inputtext-new\" pInputText name=\"crmValue\" formControlName=\"crmValue\" [(ngModel)]=\"crmValue\" type=\"text\"\r\n                            style=\"width: 60%\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>业务品种编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <input class=\"ui-inputtext-new\" pInputText name=\"businessValue\" formControlName=\"businessValue\" [(ngModel)]=\"businessValue\"\r\n                            type=\"text\" style=\"width: 60%\" maxlength=\"10\">\r\n                          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['businessValue'].valid&&userformDate.controls['businessValue'].dirty\">\r\n                            请填写业务品种编号！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span>子业务品种编号:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3\">\r\n                          <input class=\"ui-inputtext-new\" pInputText name=\"cbusinessValue\" formControlName=\"cbusinessValue\" [(ngModel)]=\"cbusinessValue\"\r\n                            type=\"text\" style=\"width: 60%\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>营销部门:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3 saled\">\r\n                          <div class=\"saleds\">\r\n                            <input disabled name=\"saleDepartment\" formControlName=\"saleDepartment\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"saleDepartment\"\r\n                              style=\"width:54%\">\r\n                            <button class=\"qbutton\" type=\"button\" (click)=\"sheMain()\">\r\n                              <span>...</span>\r\n                            </button>\r\n                          </div>\r\n                          <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['saleDepartment'].valid&&userformDate.controls['saleDepartment'].dirty\">\r\n                            请选择营销部门！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>管理部门:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3 saled\">\r\n                          <div class=\"saleds\">\r\n                            <input disabled name=\"cfsaleDepartment\" formControlName=\"cfsaleDepartment\" type=\"text\" pInputText class=\"ui-inputtext-new\"\r\n                              [(ngModel)]=\"cfsaleDepartment\" style=\"width:54%\">\r\n                            <button class=\"qbutton\" type=\"button\" (click)=\"lveMain()\">\r\n                              <span>...</span>\r\n                            </button>\r\n                          </div>\r\n                          <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['cfsaleDepartment'].valid&&userformDate.controls['cfsaleDepartment'].dirty\">\r\n                            请选择管理部门！\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-1 form_item_label\">\r\n                          <span appValidation>产品经理:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3 saled\">\r\n                          <div class=\"saleds\">\r\n                            <input disabled name=\"productManager\" formControlName=\"productManager\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"productManager\"\r\n                              style=\"width:54%\">\r\n                            <button class=\"qbutton\" type=\"button\" (click)=\"shelveMain2()\">\r\n                              <span>...</span>\r\n                            </button>\r\n                          </div>\r\n                          <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['productManager'].valid&&userformDate.controls['productManager'].dirty\">\r\n                            请选择产品经理！\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 margin_add\">\r\n                        <div class=\"ui-grid-col-1 form_item_label margin_add\">\r\n                          <span appValidation>销售人员岗位:</span>\r\n                        </div>\r\n                        <div class=\"ui-grid-col-3 saled\">\r\n                          <div class=\"saleds margin_add\">\r\n                            <input disabled name=\"saleUser\" formControlName=\"saleUser\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"saleUser\"\r\n                              style=\"width:54%\">\r\n                            <button class=\"qbutton\" type=\"button\" (click)=\"shelveMain()\">\r\n                              <span>...</span>\r\n                            </button>\r\n                          </div>\r\n                          <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['saleUser'].valid&&userformDate.controls['saleUser'].dirty\">\r\n                            请选择销售人员岗位！\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </p-tabPanel>\r\n              <p-tabPanel header=\"特殊属性\">\r\n                <div class=\"ui-g\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div style=\"float:right;padding-right:1em;\">\r\n                      <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn1-div\">\r\n                          <p class=\"place-div first\"></p>\r\n                          <p class=\"place-div last\"></p>\r\n                          <button pButton (click)=\"addAttr()\" type=\"button\" label=\"新增\" style=\"width: 60px;\"></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <u-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                        <p-column [style]=\"{'text-align':'center'}\">\r\n                          <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n                            <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n                          </ng-template>\r\n                          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <p-checkbox [(ngModel)]=\"choose_tr\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                          </ng-template>\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            {{col.attrType|codeValuePie:temporary}}\r\n                          </ng-template>\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性取值\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"\" header=\"操作\">\r\n                          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <!-- <div class=\"table-button\">\r\n                              <span class=\"tabelDeleteIco\" (click)=\"delAttr(col)\">删除</span>\r\n                            </div> -->\r\n                            <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"delAttr(col)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                          </ng-template>\r\n                        </p-column>\r\n                      </u-dataTable>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </p-tabPanel>\r\n            </p-tabView>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='2'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_name_value}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{line_value_h}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{group_value_h}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>基础产品:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_base_hs}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                  <span>{{product_content_value}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <u-dataTable [value]=\"cars_3\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n              <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_trall2\" binary=\"false\" (click)=\"choose_trall()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <p-checkbox [(ngModel)]=\"choose_tr2\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_trs()\"></p-checkbox>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center'}\" field=\"parentCategoryId\" header=\"组件描述\">\r\n              </p-column>\r\n            </u-dataTable>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='3'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_name_value}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{line_value_h}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{group_value_h}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>基础产品:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_base_hs}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                  <span>{{product_content_value}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g forcolor\">\r\n              <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                <span class=\"un_active\" *ngFor=\"let col of special_attr2;let i = index\" (click)=\"dianji(i,col)\" [ngClass]=\"{'active':show == col.productFeatureCategoryName}\">{{col.productFeatureCategoryName}}\r\n                  <div class=\"dline\"></div>\r\n                </span>\r\n              </div>\r\n              <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let col of special_attr2;let i = index\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i==aIndex\">\r\n                  <u-dataTable [value]=\"cars_attrbute\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                      <ng-template pTemplate=\"header\">\r\n                        <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                      </ng-template>\r\n                      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                      </ng-template>\r\n                    </p-column>\r\n                    <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                    </p-column>\r\n                    <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"description\" header=\"属性名称\">\r\n                    </p-column>\r\n                    <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                      <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        {{col.configLevel|codeValuePie:configLevel}}\r\n                      </ng-template>\r\n                    </p-column>\r\n                    <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                      <ng-template pTemplate=\"header\">\r\n                        <label>全选</label>\r\n                      </ng-template>\r\n                      <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <div *ngIf=\"item.featureType =='01'\">\r\n                          <div *ngIf=\"item.configLevel =='0'\">\r\n                            <p-checkbox [(ngModel)]=\"item['checkDate']\" disabled binary=\"false\"></p-checkbox>\r\n                          </div>\r\n                          <div *ngIf=\"item.configLevel !='0'\">\r\n                            <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.featureType =='02'\">\r\n                        </div>\r\n                      </ng-template>\r\n                    </p-column>\r\n                    <p-column>\r\n                      <ng-template pTemplate=\"header\">\r\n                        <label>取值范围</label>\r\n                      </ng-template>\r\n                      <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                          <div *ngIf=\"item.configLevel =='0'\">\r\n                            <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                              <p-checkbox value=\"items.productFeatureId\" disabled [label]=\"items.productFeatureDesc\" [(ngModel)]=\"items.checkBox\" binary=\"true\"></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"item.configLevel !='0'\">\r\n                            <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                              <p-checkbox value=\"items.productFeatureId\" [label]=\"items.productFeatureDesc\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                                binary=\"true\"></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                          <div *ngIf=\"item.configLevel =='0'\">\r\n                            <div *ngFor=\"let items of item.productFeatureList\">\r\n                              <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                                <input class=\"ui-inputtext-new\" type=\"text\" disabled [(ngModel)]=\"items.def\" style=\"width:45%\">\r\n                              </div>\r\n                              <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                                <input class=\"ui-inputtext-new\" type=\"text\" disabled [(ngModel)]=\"items.min\" style=\"width:45%\"> --\r\n                                <input class=\"ui-inputtext-new\" type=\"text\" disabled [(ngModel)]=\"items.max\" style=\"width:45%\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"item.configLevel !='0'\">\r\n                            <div *ngFor=\"let items of item.productFeatureList\">\r\n                              <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                                <input class=\"ui-inputtext-new\" (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.def\" style=\"width:45%\">\r\n                                <span>({{items.min}} -- {{items.max}})</span>\r\n                              </div>\r\n                              <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                                <input class=\"ui-inputtext-new\" (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.min\" style=\"width:45%\"> --\r\n                                <input class=\"ui-inputtext-new\" (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.max\" style=\"width:45%\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n                    </p-column>\r\n                  </u-dataTable>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='4'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_name_value}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{line_value_h}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{group_value_h}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>基础产品:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_base_hs}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                  <span>{{product_content_value}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <h4 class=\"hcolor\">\r\n                  |可选功能列表</h4>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <u-dataTable [value]=\"funList_left\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                  <!-- <p-column [style]=\"{'text-align':'center'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>选择</label>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column> -->\r\n                  <p-column [style]=\"{'text-align':'center'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <p-checkbox label=\"全选\" [(ngModel)]=\"leftListFunAll\" binary=\"false\" (click)=\"AllleftListFunZ()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" (click)=\"AllleftListFunZ10(ri)\" name=\"bb\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                  </p-column>\r\n                </u-dataTable>\r\n                <div style=\"float:right;padding-top:10px;\">\r\n                  <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_center\">\r\n              <div class=\"ui-g-12 ui-md-12 sales\">\r\n                <div style=\"width: 90px;display: inline-block;\" class=\"margin_top mbutton\">\r\n                  <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\">>\" (click)=\"rightFunMovre()\" style=\"width:60px;\"></button>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div style=\"width: 90px;display: inline-block;\" class=\"margin_top mbutton\">\r\n                  <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton type=\"button\" label=\"<<\" (click)=\"liftFunMovre()\" style=\"width:60px;\"></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\" style=\"border: 1px solid #34cfe6;\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <h4 class=\"hcolor\">\r\n                  |已选功能列表</h4>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <u-dataTable [value]=\"funList_right\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                  <!-- <p-column [style]=\"{'text-align':'center'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>选择</label>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" name=\"cc\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column> -->\r\n                  <p-column [style]=\"{'text-align':'center'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <p-checkbox label=\"全选\" [(ngModel)]=\"rightListFunAll\" binary=\"false\" (click)=\"AllrightListFunZ()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" (click)=\"AllrightListFunZ10(ri)\" name=\"cc\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                  </p-column>\r\n                </u-dataTable>\r\n                <div style=\"float:right;margin:10px 10px\">\r\n                  <u-paginator [first]=\"firsts\" rows=\"{{pageSizes}}\" totalRecords=\"{{totals}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10]\"\r\n                    (onPageChange)=\"paginates($event)\"></u-paginator>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='5'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品名称:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_name_value}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品线:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{line_value_h}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品组:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{group_value_h}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>基础产品:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <span>{{product_base_hs}}</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2 form_label\">\r\n                  <span>产品描述:</span>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                  <span>{{product_content_value}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-12 box\">\r\n                <div class=\"ui-g forcolor\">\r\n                  <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                    <span class=\"un_active\" *ngFor=\"let col of siteList\" [ngClass]=\"{'active':show == col.label}\" (click)=\"siteClick(col)\">\r\n                      <b>{{col.label}}</b>\r\n                    </span>\r\n                  </div>\r\n                  <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                    <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                    <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <p-tabView>\r\n                  <p-tabPanel header=\"产品描述\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-12 padding\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                            <span>制度摘要:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"systemSummary\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>营销话术:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"marketScript\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12 padding\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>期限描述:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"termDesc\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>额度描述:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"limitDesc\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12 padding\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>同业产品信息:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"sameProductlnformation\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>其他:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"others\" pInputTextarea style=\"width:64%\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12 padding\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>特色描述:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items1; let i = index\">\r\n                              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value11\" style=\"width:50%\">\r\n                              <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doDetel1(i)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"width: 90px;display: inline-block;\" class=\"qbuttonss\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doAdd1()\" type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>产品短语:</span>\r\n                          </div>\r\n                          <div class=\"ui-grid-col-4\">\r\n                            <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items3; let i = index\">\r\n                              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value31\" style=\"width:50%\">\r\n                              <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doDetel3(i)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"width: 90px;display: inline-block;\" class=\"qbuttonss\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doAdd3()\" type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12 padding\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>详情描述:</span>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items2; let i = index\">\r\n                              <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey\" placeholder=\"请输入序号\" [style]=\"{'width':'15%'}\"></p-inputMask>\r\n                              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value21\" placeholder=\"请输入标题\" style=\"width:25%\">\r\n                              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value22\" style=\"width:40%\" placeholder=\"请输入描述内容\">\r\n                              <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doDetel2(i)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"width: 90px;display: inline-block;\" class=\"qbuttonss\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                  <p class=\"place-div first\"></p>\r\n                                  <p class=\"place-div last\"></p>\r\n                                  <button pButton (click)=\"doAdd2()\" type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                  <p-tabPanel header=\"展示图片\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>首页展示图片:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load1($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                  invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files10.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files10\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta1(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>列表展示图片:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load2($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileTypeMessageDetail=\"只能上传图片\"\r\n                                  invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files11.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files11\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta2(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>产品说明书:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load3($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                  invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files12.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files12\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta3(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>产品购买协议:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load4($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                  invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files13.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files13\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta4(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>列表视频:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load5($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"video/*\" invalidFileTypeMessageDetail=\"只能上传视频\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files14.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files14\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta5(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                              <span>详情展示图片:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load6($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                  invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                </p-fileUpload>\r\n                                <div *ngIf=\"files15.length>0\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let item of files15\">{{item.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta6(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                            <div class=\"bzdwidth bzswidth\">\r\n                              <span>详情描述:</span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items12; let i = index\">\r\n                              <div class=\"ui-g\">\r\n                                <div class=\"ui-g-12 ui-md-3\">\r\n                                  <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey1\" placeholder=\"请输入序号\" [style]=\"{'width':'35%'}\"></p-inputMask>\r\n                                  <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetails\" placeholder=\"请输入描述内容\" style=\"width:59%\">\r\n                                </div>\r\n                                <div class=\"ui-grid-col-4\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let items of item.list\">{{items.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta7(item,items)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"ui-g\">\r\n                                <div class=\"ui-g-12 ui-md-9\">\r\n                                  <p-fileUpload (onUpload)=\"load7($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                    maxFileSize=\"10485760\" accept=\"image/*\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                  </p-fileUpload>\r\n                                </div>\r\n                                <div class=\"ui-g-12 ui-md-3\">\r\n                                  <div style=\"width: 90px;display: inline-block;\" *ngIf=\"i>0\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                      <p class=\"place-div first\"></p>\r\n                                      <p class=\"place-div last\"></p>\r\n                                      <button pButton (click)=\"doDetelDetails(i)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div style=\"width: 90px;display: inline-block;\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                      <p class=\"place-div first\"></p>\r\n                                      <p class=\"place-div last\"></p>\r\n                                      <button pButton (click)=\"doAddDetails()\" type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                  <p-tabPanel header=\"文档手册\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>详情描述:</span>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files17; let i = index\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-fileUpload (onUpload)=\"load8($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                  maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                  invalidFileTypeMessageSummary=\"\">\r\n                                </p-fileUpload>\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <div class=\"ui-g-12 ui-md-6\">\r\n                                  <div style=\"margin:10px\" *ngFor=\"let items of item.liste\">{{items.name}}\r\n                                    <div style=\"width: 90px;display: inline-block;\">\r\n                                      <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"deleta8(item,items)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"ui-g-12 ui-md-3\">\r\n                                  <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey2\" placeholder=\"请输入序号\"></p-inputMask>\r\n                                  <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetailes\" placeholder=\"请输入描述内容\">\r\n                                </div>\r\n                                <div class=\"ui-g-12 ui-md-3\">\r\n                                  <div style=\"width: 90px;display: inline-block;\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                      <p class=\"place-div first\"></p>\r\n                                      <p class=\"place-div last\"></p>\r\n                                      <button pButton (click)=\"doAddDetailes()\" type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div style=\"width: 90px;display: inline-block;\" *ngIf=\"i>0\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                      <p class=\"place-div first\"></p>\r\n                                      <p class=\"place-div last\"></p>\r\n                                      <button pButton (click)=\"doDetelDetailes(i)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                            <span>产品说明书:</span>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload (onUpload)=\"load9($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                invalidFileTypeMessageSummary=\"\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files18.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files18\">{{item.name}}\r\n                                  <div style=\"width: 90px;display: inline-block;\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                      <p class=\"place-div first\"></p>\r\n                                      <p class=\"place-div last\"></p>\r\n                                      <button pButton (click)=\"deleta9(item)\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                </p-tabView>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center bt\" *ngIf=\"vlaue1=='5'\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <button pButton (click)=\"webcopy()\" type=\"button\" label=\"渠道包装复制\" class=\"uButton\" style=\"width: 125px;height: 30px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 \">\r\n      <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n          <div class=\"ui-btn2-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton (click)=\"goBack()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='0'\">\r\n          <div class=\"ui-btn2-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton (click)=\"prev()\" type=\"button\" label=\"上一步\" style=\"width: 60px;\"></button>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='5'\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton (click)=\"next()\" type=\"button\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1=='5'\">\r\n          <!-- <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton (click)=\"allServe()\" [disabled]='iscompele' type=\"button\" label=\"保存\" style=\"width: 60px;\"></button>\r\n          </div> -->\r\n          <button pButton (click)=\"allServe()\" [disabled]='iscompele' type=\"button\" label=\"保存\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 添加方式弹出框-->\r\n<p-dialog *ngIf='displayd' [(visible)]=\"displayd\" modal=\"modal\" width=\"1200\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitlee}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-global-directory-model *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"choiceTemplateCall($event)\"></app-global-directory-model>\r\n    <sale-product-config-col [inValue]=\"updateValue\" *ngIf=\"showModel=='5'\" (outValue)=\"choicecopyCall($event)\"></sale-product-config-col>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 基本信息 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <sale-product-config-Users [inValue]=\"updateValue\" *ngIf=\"showModel=='2'\" (outValue)=\"choicesaleUser($event)\"></sale-product-config-Users>\r\n    <sale-product-config-manager [inValue]=\"updateValue\" *ngIf=\"showModel=='4'\" (outValue)=\"choicemanager($event)\"></sale-product-config-manager>\r\n    <sale-product-modify-website [inValue]=\"updateValue\" *ngIf=\"showModel=='6'\" (outValue)=\"choicewebsite($event)\"></sale-product-modify-website>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 属性弹出框-->\r\n<p-dialog *ngIf='displaed' [(visible)]=\"displaed\" modal=\"modal\" width=\"550\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitled}}\r\n  </p-header>\r\n  <div class=\"ui-g-12 ui-md-12 overflow\">\r\n    <sale-product-modify-specail [inValue]=\"updateValue\" *ngIf=\"showModel=='1'\" (outValue)=\"addspecailattr($event)\"></sale-product-modify-specail>\r\n  </div>\r\n</p-dialog>\r\n<!-- 营销部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>营销部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>\r\n<!-- 管理部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplayB\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>管理部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCallB($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .text_left {\n  text-align: left; }\n\n.container .text_left label {\n    font-weight: bold; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_add {\n  margin-top: 10px; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none; }\n\n.container .un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .active .dline {\n    width: 30%;\n    border-bottom: 2px solid #19b0c8;\n    margin: 8px 35% 0 35%; }\n\n.container .form_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.container .padding {\n  padding-bottom: 15px; }\n\n.container .mar_bottom {\n  padding-bottom: 3px; }\n\n.container .saled {\n  position: relative; }\n\n.container .saled .qbutton {\n    height: 30px;\n    border: 1px solid #bdbdbd;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #19b0c8;\n    margin: 0;\n    position: absolute; }\n\n.container .msgess {\n  position: absolute; }\n\n.container .qbuttonss {\n  margin-left: 3em; }\n\n.container .sales {\n  margin-top: 5em; }\n\n.container .sales .mbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #28B0C6;\n    font-size: 1.2em;\n    margin-top: 2em; }\n\n.container .radiocolor,\n.container .hcolor {\n  color: #19b0c8; }\n\n.container .forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n\n.container .boxOne {\n  float: left;\n  width: 90%; }\n\n.container .form {\n  padding-top: 18px !important; }\n\n.container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.container .heOne {\n  height: 100%; }\n\n.container .bzdwidth {\n  width: 50%; }\n\n.container .min_right {\n  width: 31% !important;\n  text-align: center; }\n\n.container .min_left {\n  width: 26% !important; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n@media screen and (max-width: 1860px) {\n  .container .mwidth {\n    width: 100% !important; } }\n\n@media screen and (max-width: 1690px) {\n  .container .bzwidth {\n    width: 100% !important; }\n  .container .bzswidth {\n    width: 100% !important; } }\n\n@media screen and (max-width: 1560px) {\n  .container .mswidth {\n    width: 100% !important; } }\n\n.container .margin_ad {\n  margin: 0 1em; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n.overflow {\n  max-height: 680px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1200px !important;\n  min-width: 1200px !important;\n  height: 80% !important;\n  min-height: 680px !important; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(2) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(3) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(4) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(5) {\n  width: 17%; }\n\n:host/deep/ .ui-dropdown {\n  min-width: 100px;\n  width: 60% !important; }\n\n:host/deep/ input[pInputText] {\n  min-height: 28px; }\n\n:host/deep/ .ui-calendar {\n  font-family: \"Microsoft YaHei\" !important;\n  min-width: 110px;\n  width: 60%; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXGF2YWlsYWJsZS1wcm9kdWN0XFxzYWxlLXByb2R1Y3QtY29uZmlnXFxzYWxlLXByb2R1Y3QtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBUDdCO0VBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO0lBYVksaUJBQWlCLEVBQUE7O0FBYjdCO0VBaUJRLHFCQUFxQixFQUFBOztBQWpCN0I7RUFvQlEsZ0JBQWdCLEVBQUE7O0FBcEJ4QjtFQXVCUSxnQkFBZ0IsRUFBQTs7QUF2QnhCO0VBMkJZLFdBQVcsRUFBQTs7QUEzQnZCO0lBNkJnQixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7O0FBOUJyQztFQW1DUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQTdDdkI7RUFnRFEsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQXREdkI7SUF3RFksVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUIsRUFBQTs7QUExRGpDO0VBOERRLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFsRTNCO0VBcUVRLG9CQUFvQixFQUFBOztBQXJFNUI7RUF3RVEsbUJBQW1CLEVBQUE7O0FBeEUzQjtFQTJFUSxrQkFBa0IsRUFBQTs7QUEzRTFCO0lBNkVZLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQixFQUFBOztBQW5GOUI7RUF1RlEsa0JBQWtCLEVBQUE7O0FBdkYxQjtFQTBGUSxnQkFBZ0IsRUFBQTs7QUExRnhCO0VBNkZRLGVBQWUsRUFBQTs7QUE3RnZCO0lBK0ZZLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFyRzNCOztFQTBHUSxjQUFjLEVBQUE7O0FBMUd0QjtFQTZHUSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUEvR25CO0VBa0hRLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBbkhsQjtFQXNIUSw0QkFBNEIsRUFBQTs7QUF0SHBDO0VBeUhRLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQTNIdkI7RUE4SFEsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQS9IeEI7RUFrSVEsWUFBWSxFQUFBOztBQWxJcEI7RUFxSVEsVUFBVSxFQUFBOztBQXJJbEI7RUF3SVEscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQXpJMUI7RUE0SVEscUJBQXFCLEVBQUE7O0FBNUk3QjtFQStJUSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFqSko7SUFtSlksc0JBQXFCLEVBQUEsRUFDeEI7O0FBRUw7RUF0Sko7SUF3Slksc0JBQXFCLEVBQUE7RUF4SmpDO0lBMkpZLHNCQUFxQixFQUFBLEVBQ3hCOztBQUVMO0VBOUpKO0lBZ0tZLHNCQUFxQixFQUFBLEVBQ3hCOztBQWpLVDtFQW9LUSxhQUFhLEVBQUE7O0FBS3JCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLDhCQUE4QixFQUFBOztBQUdqQztFQUNHLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUdqQztFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dF9sZWZ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVsX2JveCB1bCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl9hZGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxuICAgIC5ib3gge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVuX2FjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAuZGxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5YjBjODtcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHggMzUlIDAgMzUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtX2xhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5wYWRkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5tYXJfYm90dG9tIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgfVxyXG4gICAgLnNhbGVkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLnFidXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tc2dlc3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5xYnV0dG9uc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XHJcbiAgICB9XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgICAgICAubWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4QjBDNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYWRpb2NvbG9yLFxyXG4gICAgLmhjb2xvciB7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuZm9yY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYm94VHdvIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICAgIC5oZVR3byB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaGVPbmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5iemR3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5taW5fcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWluX2xlZnQge1xyXG4gICAgICAgIHdpZHRoOiAyNiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTg2MHB4KSB7XHJcbiAgICAgICAgLm13aWR0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE2OTBweCkge1xyXG4gICAgICAgIC5iendpZHRoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnpzd2lkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTYwcHgpIHtcclxuICAgICAgICAubXN3aWR0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX2FkIHtcclxuICAgICAgICBtYXJnaW46IDAgMWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+mAieaLqeW5tOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi8v6YCJ5oup5pyI5Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi8v5riF56m644CB5LuK5aSp5Lik5Liq5oyJYOmSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDY4MHB4OyAvLyB6LWluZGV4OiAxMzAwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiAxMjAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNjgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDE3JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6IDE3JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDE3JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNCkge1xyXG4gICAgd2lkdGg6IDE3JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNSkge1xyXG4gICAgd2lkdGg6IDE3JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIGlucHV0W3BJbnB1dFRleHRdIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIiAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuIDpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SaleProductConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigComponent", function() { return SaleProductConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/sale-product.bean */ "./src/app/pages/tzb/product-manage/available-product/bean/sale-product.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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


var SaleProductConfigComponent = /** @class */ (function () {
    function SaleProductConfigComponent(productManageHttpService, commfunc, router, fb) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.fb = fb;
        this.troud = 0;
        this.orgTreeDisplay = false;
        this.orgTreeDisplayB = false;
        this.vlaueOpen = 'open';
        //控制日历刷新
        this.showFlag = true;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //列表无数据
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"]; //讲英文转化为中文
        this.transferedDateFrom = null; //引入日期
        this.transferedDateTo = null; //引入日期
        this.carsold = []; //组件初始值
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["checkNumber"]; //数据校验
        this.loadd = false;
        this.files21 = []; //产品说明书
        this.files22 = []; //产品购买协议
        this.files23 = []; //操作手册
        this.files24 = []; //视频
        this.managememntactive = ''; //营销活动
        this.managememntspeech = ''; //营销话术
        this.productMarketing = ''; //产品说明书
        this.productshopping = ''; //产品购买协议
        this.operationmanual = ''; //操作手册
        this.operationmanual2 = []; //操作手册
        this.productshopping2 = []; //产品购买协议
        this.productMarketing2 = []; //产品说明书
        this.vedio = []; //视频
        this.fileList24 = []; //视频
        this.fileList23 = []; //操作手册
        this.fileList22 = []; //产品购买协议
        this.fileList21 = []; //产品说明书
        this.productMarketingList = []; //产品说明书
        this.files10 = [];
        this.files11 = [];
        this.files12 = [];
        this.files13 = [];
        this.files14 = [];
        this.files15 = [];
        this.files16 = [];
        this.files18 = [];
        this.fileList10 = []; //首页展示图片文件列表
        this.fileList11 = []; //列表展示图片
        this.fileList12 = []; //产品说明书
        this.fileList13 = []; //产品购买协议
        this.fileList14 = []; //列表视频
        this.fileList15 = []; //详情展示图片
        this.fileList16 = []; //展示图片详情描述
        //文档手册
        this.fileList17 = []; //详情展示
        this.fileList18 = []; //产品说明书
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_PRO_UPLOAD"];
        this.productNumBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["productNumBean"];
        this.postsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["PostsManageBean"]; //可售产品 保存bean
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        this.base_product = []; //基础产品/产品类型  下拉
        this.product_content_value = ''; //产品描述
        this.product_base_value = []; //基础产品
        this.product_base_arr = []; //基础产品
        this.productCurrency = ''; //产品币种
        this.inOut = ''; //表内表外
        this.crmValue = ''; //CRM产品树编号
        this.businessValue = ''; //业务品种编号
        this.cbusinessValue = ''; //子业务品种编号
        this.productManager = ''; //产品经理
        //列表
        this.cars_3 = [];
        //总页数
        this.total = 0;
        //每页多少条
        this.pageSize = '10';
        //提示信息
        this.msgs = [];
        this.activeIndex = 0;
        this.detailkeynum = 0;
        //特殊属性
        this.special_attr = [];
        this.special_attr2 = [];
        this.special_attr3 = [];
        this.speciall = [];
        this.arrValue = [];
        this.attrName = '';
        this.attrValue = '';
        this.attrType = '';
        this.attrN = [];
        //盛放用户选择的数据
        this.choose_tr = [];
        this.choose_tr2 = [];
        //组件
        this.aIndex = 0;
        this.select_atr = []; //属性选择
        this.select_atr2 = []; //组件选择
        this.select_atr3 = []; //组件选择
        this.attrValue2 = []; //属性值
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        this.productFeatureArr = [];
        this.chooseData10 = [];
        this.checkBoxAll10 = true; //大全选
        this.choose_trall2 = true; //组件设置全选
        this.iscompele = false; //完成按钮
        // 功能
        this.funList_left = []; //左选择框
        this.funList_right = []; //右选择框
        this.leftListFun = []; //左列表
        this.rightListFun = []; //右列表
        this.functionList = []; //功能存储列表
        this.siteList = []; //站点列表
        this.arrImage = []; //图片暂存数组
        this.arrFile = []; //文档暂存数组
        this.arrTxt = []; //描述暂存数组
        this.items1 = [{ value11: '' }]; //特色描述
        this.items2 = [{ value21: '', value22: '', detailkey: '' }]; //特色描述详情描述
        this.items3 = [{ value31: '' }]; //产品短语
        this.items12 = [{ detailkey1: '', valuedetails: '', list: [] }]; //图片详情描述
        this.files17 = [{ detailkey2: '', valuedetailes: '', liste: [] }]; //文件详情
        this.value41Path = []; //首页展示图片
        this.value51Path = []; //列表展示图片
        this.value61Path = []; //产品说明书
        this.value71Path = []; //产品购买协议
        this.value81Path = []; //列表视频
        this.value91Path = []; //详情展示图片
        this.value101Path = []; //展示图片详情描述
        this.value111Path = []; //文档手册详情描述
        this.value112Path = []; //文档手册详情描述
        this.Typeinex = 0;
        this.termDesc = ''; //期限描述
        this.limitDesc = ''; //额度描述
        this.sameProductlnformation = ''; //同业产品信息
        this.others = ''; //其他
        this.productDetail = [{
                title: '',
                context: ''
            }]; //详情描述
        // 特色描述
        this.obj = {
            value1: '',
            value2: ''
        };
        //回显
        this.keshou_obj = {};
        this.keshou_objS = {};
        this.biaoq_obj = {};
        this.biaoq_objS = {};
        this.ArrObj = {};
        this.salee = [];
        this.saledd = [];
        this.saledd2 = [];
        this.saledd3 = [];
        this.saledd4 = [];
        this.salee1 = [];
        this.saledd1 = [];
        this.marketDepartmentList = [];
        this.manageDepartmentList = [];
        this.productManagerList = [];
        this.salesPostList = [];
        this.saleDepartment = ""; //销售部门
        this.cfsaleDepartment = ""; //管理部门
        this.belong1 = [];
        this.belongg1 = [];
        this.belongs1 = [];
        this.belongss1 = [];
        this.saleUser = ""; //销售人员角色
        this.template_line_value = ''; //产品线
        this.template_group_value = ''; //产品组
        this.template_product_base_value = ''; //基础产品
        //复制添加
        this.product_line_value = ''; //产品线
        this.product_group_value = ''; //产品组
        this.product_base_copy = ''; //基础产品
        this.product_name_valuet = ''; //可售产品名称
        this.product_content_valuet = ''; //可售产品名称
        this.productIdhead = ''; //可售产品编号首部
        this.textlist = [];
        this.Feature = [];
        this.Featurement = [];
        this.dataResourceName = [];
        this.Detail = [];
        this.Detail2 = [];
        this.Phra = [];
        this.zujian_ist2 = [];
        this.zujian_ist3 = [];
        this.cars_4 = [];
        this.choose_tr4 = [];
        this.specall6 = [];
        this.specall7 = [];
        this.specialed = [];
        this.specialeed = [];
        this.display = false;
        this.displaed = false;
        this.displayd = false;
        //组件的参数
        this.updateValue = [];
        //复制添加    
        this.copya = [];
        //包装回显
        this.detaillist = [];
        this.baozhuangid = '';
        // 右侧分页
        this.firsts = 1;
        this.totals = 0;
        this.pageSizes = 10;
        this.funList_rightList = [];
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.userform = fb.group({
            'product_name_valuet': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            product_content_valuet: [''],
            product_line_value: [''],
            product_group_value: [''],
            product_base_copy: [''],
        });
        this.userformT = fb.group({
            'product_name_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            product_content_value: [''],
            template_line_value: [''],
            template_group_value: [''],
            template_product_base_value: [''],
        });
        this.userformDate = fb.group({
            transferedDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transferedDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productCurrency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            inOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            crmValue: [''],
            businessValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbusinessValue: [''],
            saleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cfsaleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            saleUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.codeValues(); //调用方法，获取全部码值
        this.select_1 = this.code['select_1'];
        this.select_2 = this.code['select_2'];
        this.temporary = this.code['temporary'];
        this.configLevel = this.code['configLevel'];
    }
    SaleProductConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.permissionCheck('SID03007_P058_P001') || this.permissionCheck('SID23007_P058_P001')) && (!this.permissionCheck('SID03007_P058_P002') || !this.permissionCheck('SID23007_P058_P002'))) {
            this.selectedValue = "templateAdd";
        }
        else if ((!this.permissionCheck('SID03007_P058_P001') || !this.permissionCheck('SID23007_P058_P001')) && (this.permissionCheck('SID03007_P058_P002') || this.permissionCheck('SID23007_P058_P002'))) {
            this.selectedValue = "copyAdd";
        }
        else if ((this.permissionCheck('SID03007_P058_P001') || this.permissionCheck('SID23007_P058_P001')) && (this.permissionCheck('SID03007_P058_P002') || this.permissionCheck('SID23007_P058_P002'))) {
            this.selectedValue = "templateAdd";
        }
        // this.selectedValue = "templateAdd";
        this.startp = '0';
        //下拉菜单
        this.select_line = [
            { label: '请选择', value: "" },
        ];
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.vlaue1 = 0;
        this.items = [{
                label: '配置方式',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '基本信息',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: '组件设置',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
            {
                label: '取值设置',
                command: function (event) {
                    _this.activeIndex = 3;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: '可售包装',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            }];
        // 组件显示查询
        this.line_query();
        this.Typeinex++;
        this.detailkeynum = 0;
    };
    SaleProductConfigComponent.prototype.ngOnChanges = function () {
        this.baseValue();
    };
    // 码值
    SaleProductConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 获取默认编码
    SaleProductConfigComponent.prototype.getSeqNo = function (product_line_value, product_group_value) {
        var _this = this;
        var parms = {
            seqType: 'SALE_PRODUCT',
            productLineId: product_line_value,
            productGroupId: product_group_value,
            basicProductId: this.product_base_value.tplId,
        };
        this.productManageHttpService.getSeqNo(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productId = data.seqNo;
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
    SaleProductConfigComponent.prototype.getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };
    SaleProductConfigComponent.prototype.deepClone = function (data) {
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.deepClone(data[key]);
            }
        }
        return obj;
    };
    //组件查询
    SaleProductConfigComponent.prototype.getBaseProductDetails = function (params) {
        var _this = this;
        this.productManageHttpService.getBaseProductDetails(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.choose_tr2 = [];
                data.productFeatureCategoryList.forEach(function (item, i) {
                    _this.cars_4.forEach(function (items) {
                        if (item.productFeatureCategoryId == items.productFeatureCategoryId) {
                            var k = void 0;
                            k = i.toString();
                            _this.choose_tr2.push(k);
                            _this.choose_tr4.push(k);
                        }
                    });
                });
                _this.cars_3 = data.productFeatureCategoryList;
                _this.carsold = _this.deepClone(data.productFeatureCategoryList);
                _this.funList_left = data.productFunctionList;
                _this.funList_right.forEach(function (item) {
                    _this.funList_left.forEach(function (ement) {
                        if (item.productFunctionId == ement.productFunctionId) {
                            _this.funList_left.splice(ement, 1);
                        }
                    });
                });
                _this.total = data.total || data.productFunctionList.length;
                _this.totals = _this.funList_right.length;
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
    SaleProductConfigComponent.prototype.siteQuery = function () {
        var _this = this;
        this.productManageHttpService.queryChannel({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.channelList;
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
    SaleProductConfigComponent.prototype.siteClick = function (col) {
        var _this = this;
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        if (this.startp == '1') {
            //存值
            var detailid_1 = 0;
            this.detaillist.forEach(function (item, i) {
                if (item.channelId == _this.baozhuangid) {
                    detailid_1++;
                    _this.detaillist.splice(i, 1);
                    _this.Typeinex++;
                    _this.fileServe(); //产品描述
                    _this.imgServe(); //图片、文档
                    _this.detaillist.push({ channelId: _this.baozhuangid, channelName: _this.show, imageList: _this.arrImage, fileList: _this.arrFile, infoList: _this.arrTxt });
                }
            });
            if (detailid_1 == 0) {
                this.Typeinex = 0;
                this.fileServe(); //产品描述
                this.imgServe(); //图片、文档
                this.detaillist.push({ channelId: this.baozhuangid, channelName: this.show, imageList: this.arrImage, fileList: this.arrFile, infoList: this.arrTxt });
            }
        }
        //回显
        var detailide = 0;
        if (this.detaillist.length > 0) {
            this.detaillist.forEach(function (item, i) {
                if (item.channelId == col.value) {
                    detailide++;
                    _this.textlist = item.infoList;
                    _this.systemSummary = '';
                    _this.marketScript = '';
                    _this.termDesc = '';
                    _this.limitDesc = '';
                    _this.sameProductlnformation = '';
                    _this.others = '';
                    _this.items1 = [{ "value11": '' }];
                    _this.items2 = [{ "value21": '', "value22": '', "detailkey": '' }];
                    _this.items3 = [{ "value31": '' }];
                    _this.textlist.forEach(function (itens, j) {
                        if (_this.textlist[j].dataResourceName == 'systemSummary') {
                            _this.systemSummary = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'marketScript') {
                            _this.marketScript = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'termDesc') {
                            _this.termDesc = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'limitDesc') {
                            _this.limitDesc = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'sameProductlnformation') {
                            _this.sameProductlnformation = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'others') {
                            _this.others = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'listFeature') {
                            _this.Feature = _this.textlist[j].objectInfo.split(',');
                            for (var i = 0; i < _this.Feature.length; i++) {
                                _this.items1.push({ "value11": _this.Feature[i] });
                            }
                        }
                        else if (_this.textlist[j].dataResourceName == 'productDetail') {
                            _this.Detail = _this.textlist[j].objectInfo.split(',');
                            for (var d = 0; d < _this.Detail.length; d++) {
                                _this.Detail2 = _this.Detail[d].split(':');
                                _this.items2.push({ "value21": _this.Detail2[1], "value22": _this.Detail2[2], 'detailkey': _this.Detail2[0] });
                            }
                        }
                        else if (_this.textlist[j].dataResourceName == 'productPhra') {
                            _this.Phra = _this.textlist[j].objectInfo.split(',');
                            for (var i = 0; i < _this.Phra.length; i++) {
                                _this.items3.push({ "value31": _this.Phra[i] });
                            }
                        }
                    });
                    if (_this.items1.length > 1) {
                        _this.items1.splice(0, 1);
                    }
                    if (_this.items2.length > 1) {
                        _this.items2.splice(0, 1);
                    }
                    if (_this.items3.length > 1) {
                        _this.items3.splice(0, 1);
                    }
                    _this.zujian_ist2 = item.imageList;
                    _this.zujian_ist3 = item.fileList;
                    _this.files10 = [];
                    _this.value41Path = [];
                    _this.files11 = [];
                    _this.value51Path = [];
                    _this.files12 = [];
                    _this.value61Path = [];
                    _this.files13 = [];
                    _this.value71Path = [];
                    _this.files14 = [];
                    _this.value81Path = [];
                    _this.files15 = [];
                    _this.value91Path = [];
                    _this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
                    _this.value101Path = [];
                    _this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
                    _this.value111Path = [];
                    _this.files18 = [];
                    _this.value112Path = [];
                    for (var j = 0; j < _this.zujian_ist2.length; j++) {
                        if (_this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                            var name_1 = '';
                            name_1 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files10.push({ "name": name_1[name_1.length - 1] });
                            _this.fileList10 = [];
                            _this.fileList10.push({
                                "fileName": name_1[name_1.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList10.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "homeDisplayPictures";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value41Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listImages') {
                            var name_2 = '';
                            name_2 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files11.push({ "name": name_2[name_2.length - 1] });
                            _this.fileList11 = [];
                            _this.fileList11.push({
                                "fileName": name_2[name_2.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList11.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listImages";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value51Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                            var name_3 = '';
                            name_3 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files12.push({ "name": name_3[name_3.length - 1] });
                            _this.fileList12 = [];
                            _this.fileList12.push({
                                "fileName": name_3[name_3.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList12.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listSpecification";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value61Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                            var name_4 = '';
                            name_4 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files13.push({ "name": name_4[name_4.length - 1] });
                            _this.fileList13 = [];
                            _this.fileList13.push({
                                "fileName": name_4[name_4.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList13.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listPurchasingContract";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value71Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listVideo') {
                            var name_5 = '';
                            name_5 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files14.push({ "name": name_5[name_5.length - 1] });
                            _this.fileList14 = [];
                            _this.fileList14.push({
                                "fileName": name_5[name_5.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList14.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listVideo";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value81Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                            var name_6 = '';
                            name_6 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files15.push({ "name": name_6[name_6.length - 1] });
                            _this.fileList15 = [];
                            _this.fileList15.push({
                                "fileName": name_6[name_6.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList15.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "detailsDisplay";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value91Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'productDetail') {
                            var name_7 = '';
                            var names = '';
                            name_7 = _this.zujian_ist2[j].imagePath.split('/');
                            names = _this.zujian_ist2[j].imagePath.split(':');
                            _this.items12.push({ 'detailkey1': names[0], 'valuedetails': names[1], 'list': [{ "name": name_7[name_7.length - 1] }] });
                            _this.fileList16 = [];
                            _this.fileList16.push({
                                "fileName": name_7[name_7.length - 1],
                                "fileUrl": names[2],
                            });
                            _this.fileList16.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "productDetail";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value101Path.push(obj);
                            });
                        }
                    }
                    if (_this.items12.length > 1) {
                        _this.items12.splice(0, 1);
                    }
                    for (var K = 0; K < _this.zujian_ist3.length; K++) {
                        if (_this.zujian_ist3[K].dataResourceName == 'productDetail') {
                            var name_8 = '';
                            var names = '';
                            name_8 = _this.zujian_ist3[K].filePath.split('/');
                            names = _this.zujian_ist3[K].filePath.split(':');
                            _this.files17.push({ 'detailkey2': names[0], 'valuedetailes': names[1], 'liste': [{ "name": name_8[name_8.length - 1] }] });
                            _this.fileList17 = [];
                            _this.fileList17.push({
                                "fileName": name_8[name_8.length - 1],
                                "fileUrl": names[2],
                            });
                            _this.fileList17.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "productDetail";
                                obj['fileName'] = item.fileName;
                                obj['filePath'] = item.fileUrl;
                                _this.value111Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                            var name_9 = '';
                            name_9 = _this.zujian_ist3[K].filePath.split('/');
                            _this.files18.push({ "name": name_9[name_9.length - 1] });
                            _this.fileList18 = [];
                            _this.fileList18.push({
                                "fileName": name_9[name_9.length - 1],
                                "fileUrl": _this.zujian_ist3[K].filePath,
                            });
                            _this.fileList18.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listSpecification";
                                obj['fileName'] = item.fileName;
                                obj['filePath'] = item.fileUrl;
                                _this.value112Path.push(obj);
                            });
                        }
                    }
                    if (_this.files17.length > 1) {
                        _this.files17.splice(0, 1);
                    }
                }
            });
        }
        if (detailide == 0) {
            this.systemSummary = '';
            this.marketScript = '';
            this.termDesc = '';
            this.limitDesc = '';
            this.sameProductlnformation = '';
            this.others = '';
            this.items1 = [{ "value11": '' }];
            this.items2 = [{ "value21": '', "value22": '', "detailkey": '' }];
            this.items3 = [{ "value31": '' }];
            this.files10 = [];
            this.value41Path = [];
            this.files11 = [];
            this.value51Path = [];
            this.files12 = [];
            this.value61Path = [];
            this.files13 = [];
            this.value71Path = [];
            this.files14 = [];
            this.value81Path = [];
            this.files15 = [];
            this.value91Path = [];
            this.items12 = [{ detailkey1: '', valuedetails: '', list: [] }];
            this.value101Path = [];
            this.files17 = [{ detailkey2: '', valuedetailes: '', liste: [] }];
            this.value111Path = [];
            this.files18 = [];
            this.value112Path = [];
        }
        this.show = col.label;
        this.baozhuangid = col.value;
        this.startp = '1';
    };
    SaleProductConfigComponent.prototype.chakAN = function () {
    };
    //部门与岗位
    SaleProductConfigComponent.prototype.sheMain = function () {
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    // 营销部门机构树回调
    SaleProductConfigComponent.prototype.treeCall = function (param) {
        var _this = this;
        this.saleDepartment = '';
        this.orgTreeDisplay = false;
        this.saled = '';
        this.salee = [];
        this.saleed = '';
        this.saledd = [];
        if (param.length > 1) {
            param.forEach(function (item) {
                _this.salee.push(item.orgName);
                _this.saledd.push({ marketDepartmentNo: item.orgId, marketDepartmentName: item.orgName });
            });
            this.saled = this.salee.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled = items.orgName;
                _this.saledd.push({ marketDepartmentNo: items.orgId, marketDepartmentName: items.orgName });
            });
        }
        this.saleDepartment = this.saled;
        this.marketDepartmentList = this.saledd;
    };
    SaleProductConfigComponent.prototype.lveMain = function () {
        this.orgTreeDisplayB = !this.orgTreeDisplayB;
    };
    // 管理部门机构树回调
    SaleProductConfigComponent.prototype.treeCallB = function (param) {
        var _this = this;
        this.cfsaleDepartment = '';
        this.orgTreeDisplayB = false;
        this.saled1 = '';
        this.salee1 = [];
        this.saleed1 = '';
        this.saledd1 = [];
        if (param.length > 1) {
            param.forEach(function (items) {
                _this.salee1.push(items.orgName);
                _this.saledd2.push({ manageDepartmentNo: items.orgId, manageDepartmentName: items.orgName });
            });
            this.saled1 = this.salee1.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled1 = items.orgName;
                _this.saledd2.push({ manageDepartmentNo: items.orgId, manageDepartmentName: items.orgName });
            });
        }
        this.cfsaleDepartment = this.saled1;
        this.manageDepartmentList = this.saledd2;
    };
    SaleProductConfigComponent.prototype.shelveMain = function () {
        this.display = true;
        this.headerTitle = '销售人员岗位';
        this.showModel = '2';
        this.updateValue = "one";
    };
    SaleProductConfigComponent.prototype.choicesaleUser = function (parames) {
        var _this = this;
        this.display = parames.display;
        if (parames.value == 'one') {
            this.belong = '';
            this.belong1 = [];
            this.belongg = '';
            this.belongg1 = [];
            if (parames.depart.length > 1) {
                parames.depart.forEach(function (items) {
                    _this.belong1.push(items.postName);
                    _this.saledd3.push({ salesPostNo: items.postId, salesPostName: items.postName });
                });
                this.belong = this.belong1.join(',');
                this.belongg = this.belongg1.join(',');
            }
            else {
                parames.depart.forEach(function (items) {
                    _this.belong = items.postName;
                    _this.saledd3.push({ salesPostNo: items.postId, salesPostName: items.postName });
                });
            }
            this.saleUser = this.belong;
            this.salesPostList = this.saledd3;
        }
    };
    SaleProductConfigComponent.prototype.shelveMain2 = function () {
        this.display = true;
        this.headerTitle = '产品经理';
        this.showModel = '4';
        this.updateValue = "four";
    };
    SaleProductConfigComponent.prototype.choicemanager = function (paramd) {
        var _this = this;
        this.display = paramd.display;
        if (paramd.value == 'four') {
            this.belongs = '';
            this.belongs1 = [];
            this.belongss = '';
            this.belongss1 = [];
            if (paramd.departed.length > 1) {
                paramd.departed.forEach(function (items) {
                    _this.belongs1.push(items.userName);
                    _this.saledd4.push({ productManagerNo: items.userLoginId, productManagerName: items.userName });
                });
                this.belongs = this.belongs1.join(',');
                this.belongss = this.belongss1.join(',');
            }
            else {
                paramd.departed.forEach(function (items) {
                    _this.belongs = items.userName;
                    _this.saledd4.push({ productManagerNo: items.userLoginId, productManagerName: items.userName });
                });
            }
            this.productManager = this.belongs;
            this.productManagerList = this.saledd4;
        }
    };
    // 产品线下拉
    SaleProductConfigComponent.prototype.line_query = function () {
        var _this = this;
        this.productManageHttpService.productLinePull({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item;
                    _this.select_line.push(obj);
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
    // 产品组修改
    SaleProductConfigComponent.prototype.lineVelue = function () {
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.group_query();
    };
    // 产品组下拉
    SaleProductConfigComponent.prototype.group_query = function () {
        var _this = this;
        var parm = { productLineId: this.line_value.productCategoryId };
        this.productManageHttpService.productGroupPull(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productGroupList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item;
                    _this.select_group.push(obj);
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
    // 产品组修改
    SaleProductConfigComponent.prototype.groupChange = function () {
        var _this = this;
        //查询基础产品id
        var params = {
            groupId: this.group_value.productCategoryId
        };
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.productManageHttpService.pdGroupTemplateQuery(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var arr = [];
                data.groupTempList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.tplName;
                    obj['value'] = item;
                    _this.product_base_arr.push(obj);
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
    };
    //特殊属性  添加
    SaleProductConfigComponent.prototype.attrAdd = function () {
        var _this = this;
        this.special_attr.forEach(function (item) {
            _this.attrN.push(item.attrName);
        });
        if (this.attrName == '' || this.attrType == '' || this.attrValue == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '特殊属性填写不完整！' });
        }
        else {
            if (this.attrN.indexOf(this.attrName) == -1) {
                var lod1 = Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(null, this.attrValue);
                if (lod1 != null) {
                    this.loadd = lod1.checkNumber;
                }
                this.arrValue = this.attrValue.split('');
                if (this.attrType == '0' && this.loadd == true) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '属性取值为数据！' });
                    this.loadd = false;
                }
                else if (this.attrType == '0' && this.arrValue.length > 20) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '数据长度不可超过20！' });
                }
                else if (this.attrType == '2' && this.arrValue.length > 200) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '数文本长度不可超过200！' });
                }
                else {
                    this.special_attr.push({
                        "attrName": this.attrName,
                        "attrType": this.attrType,
                        "attrValue": this.attrValue
                    });
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称重名' });
            }
        }
        this.attrN = [];
        this.attrName = '';
        this.attrValue = '';
        this.attrType = '';
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.special_attr);
    };
    //特殊属性  删除
    SaleProductConfigComponent.prototype.delAttr = function (col) {
        var _this = this;
        this.choose_tr.sort(function (a, b) { return b - a; });
        this.choose_tr.forEach(function (item) {
            _this.special_attr.splice(item, 1);
        });
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.special_attr);
        this.choose_tr = [];
    };
    //特殊属性
    SaleProductConfigComponent.prototype.addAttr = function () {
        this.displaed = true;
        this.headerTitled = '添加特殊属性';
        this.showModel = '1';
        this.updateValue = this.special_attr;
    };
    SaleProductConfigComponent.prototype.addspecailattr = function (paramss) {
        this.displaed = paramss.displaed;
        this.special_attr = paramss.salet2;
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.special_attr);
    };
    // 全选
    SaleProductConfigComponent.prototype.checkAllClick = function (event) {
        if (event) {
            var choose_tr = [];
            for (var i = 0; i < this.special_attr.length; i++) {
                choose_tr.push(i);
            }
            this.choose_tr = JSON.parse(JSON.stringify(choose_tr));
            this.special_attr = JSON.parse(JSON.stringify(this.special_attr));
        }
        else {
            this.choose_tr = [];
            this.special_attr = [];
        }
    };
    //基础赋值
    SaleProductConfigComponent.prototype.baseValue = function () {
        this.product_base_hs = this.product_base_value.tplName;
    };
    //产品营销
    SaleProductConfigComponent.prototype.load21 = function (event) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList21 = JSON.parse(event.xhr.response);
        }
        this.fileList21.forEach(function (item) {
            var obj = '';
            obj = item.fileUrl + '=' + item.fileName;
            _this.productMarketing2.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
                this.files21.push(file);
            }
            else {
                this.files21.push(file);
                this.deleta21(file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductConfigComponent.prototype.deleta21 = function (item) {
        var kkey = this.files21.indexOf(item);
        this.files21.splice(kkey, 1);
        this.productMarketing2.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.load22 = function (event) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList22 = JSON.parse(event.xhr.response);
        }
        this.fileList22.forEach(function (item) {
            var obj = '';
            obj = item.fileUrl + '=' + item.fileName;
            _this.productshopping2.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
                this.files22.push(file);
            }
            else {
                this.files22.push(file);
                this.deleta22(file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductConfigComponent.prototype.deleta22 = function (item) {
        var kkey = this.files22.indexOf(item);
        this.files22.splice(kkey, 1);
        this.productshopping2.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.load23 = function (event) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList23 = JSON.parse(event.xhr.response);
        }
        this.fileList23.forEach(function (item) {
            var obj = '';
            obj = item.fileUrl + '=' + item.fileName;
            _this.operationmanual2.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
                this.files23.push(file);
            }
            else {
                this.files23.push(file);
                this.deleta23(file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductConfigComponent.prototype.deleta23 = function (item) {
        var kkey = this.files23.indexOf(item);
        this.files23.splice(kkey, 1);
        this.operationmanual2.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.load24 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files24.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList24 = JSON.parse(event.xhr.response);
        }
        this.fileList24.forEach(function (item) {
            var obj = '';
            obj = item.fileUrl + '=' + item.fileName;
            _this.vedio.push(obj);
        });
    };
    SaleProductConfigComponent.prototype.deleta24 = function (item) {
        var kkey = this.files24.indexOf(item);
        this.files24.splice(kkey, 1);
        this.vedio.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.prev = function () {
        var _this = this;
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i < this.activeIndex - 1) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex - 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        if (this.activeIndex == 1) {
            this.troud++;
            this.special_attr3 = this.special_attr;
            this.special_attr = [];
            this.special_attr3.forEach(function (items) {
                if (items.attrType == '0' || items.attrType == '1' || items.attrType == '2') {
                    _this.special_attr.push(items);
                }
            });
        }
        if (this.activeIndex == 2) {
            this.troud++;
            this.cars_4 = this.special_attr2;
            this.cars_4.forEach(function (iteme, e) {
                var choosei = [];
                iteme.productFeatureTypeList.forEach(function (items, i) {
                    if (items.checkBox10 == false || items.checkBox10 == undefined) {
                        choosei.push(i);
                    }
                    else {
                        var choosek_1 = [];
                        items.productFeatureList.forEach(function (item, k) {
                            if (item.checkBox == false) {
                                choosek_1.push(k);
                            }
                        });
                        choosek_1.sort(function (a, b) { return b - a; });
                        choosek_1.forEach(function (iten) {
                            items.productFeatureList.splice(iten, 1);
                        });
                    }
                });
                choosei.sort(function (a, b) { return b - a; });
                choosei.forEach(function (itens) {
                    iteme.productFeatureTypeList.splice(itens, 1);
                });
            });
            //默认参数
            var pd_param = {
                baseProductId: this.product_base_value.tplId
            };
            this.getBaseProductDetails(pd_param);
        }
    };
    SaleProductConfigComponent.prototype.next = function () {
        var _this = this;
        if (this.selectedValue == "templateAdd") {
            if (this.template_line_value == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择模板" });
                return;
            }
            for (var i in this.userformT.controls) {
                this.userformT.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userformT.controls) {
                if (!this.userformT.controls[i].valid) {
                    return;
                }
            }
        }
        if (this.selectedValue == "copyAdd") {
            if (this.product_line_value == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择模板" });
                return;
            }
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
        }
        this.baseValue();
        if (this.hasOwnProperty('group_value')) {
            this.line_value_h = this.line_value.categoryName;
        }
        if (this.hasOwnProperty('group_value')) {
            this.group_value_h = this.group_value.categoryName;
        }
        if (this.hasOwnProperty('product_base_value')) {
            this.product_base_h = this.product_base_value;
        }
        if (this.hasOwnProperty('product_type_value')) {
            this.product_type_h = this.group_value.categoryName;
        }
        if (this.selectedValue == 'copyAdd') {
            this.product_name_value = this.product_name_valuet;
            this.product_content_value = this.product_content_valuet;
        }
        if (this.activeIndex < 5 && this.activeIndex > 1) {
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
        }
        //判断第几步
        if (this.activeIndex === 0) {
            if (this.productId.length !== 5) {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: '提示', detail: "可售产品编号长度必须为5位" });
                return;
            }
            var redo_name = {
                categoryName: this.product_name_value,
                categoryId: this.productIdhead + this.productId,
                productCategoryTypeId: 'A',
                operationTemplateId: this.product_base_value.tplId
            };
            this.productManageHttpService.queryIdAndNameIsNotExist(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNot == "is_name") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "可售产品名称重复" });
                    }
                    else if (data.isOrNot == "is_id") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "可售产品编号重复" });
                    }
                    else if (data.isOrNot == "not") {
                        _this.activeIndex = _this.activeIndex + 1;
                        _this.vlaue1 = _this.activeIndex;
                        //默认参数
                        var pd_param = {
                            baseProductId: _this.product_base_value.tplId
                        };
                        _this.getBaseProductDetails(pd_param);
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
        }
        if (this.activeIndex === 1) {
            // 通用信息验证
            for (var i in this.userformDate.controls) {
                this.userformDate.controls[i].markAsDirty();
            }
            //处理是否提交通用信息
            for (var i in this.userformDate.controls) {
                if (!this.userformDate.controls[i].valid) {
                    return;
                }
            }
            // 管理信息验证
            // for (const i in this.userformDate.controls) {
            //     this.userformDate.controls[i].markAsDirty();
            // }
            //处理是否提交管理信息
            for (var i in this.userformDate.controls) {
                if (!this.userformDate.controls[i].valid) {
                    return;
                }
            }
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
        }
        if (this.activeIndex === 2) {
            // 默认组件全选
            if (this.selectedValue == "templateAdd" && this.troud == 0) {
                this.choose_trall();
            }
        }
        if (this.activeIndex === 3) {
            if (this.choose_tr2.length == 0) {
                this.activeIndex = 2;
                this.vlaue1 = this.activeIndex;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件不能为空' });
            }
            this.special_attr2 = [];
            this.choose_tr2.forEach(function (item) {
                _this.special_attr2.push(_this.cars_3[item]);
            });
            this.special_attr2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.special_attr2);
            // 默认
            this.special_attr2.forEach(function (itemss, i) {
                _this.cars_4.forEach(function (items) {
                    _this.specialed.push(items.productFeatureCategoryId);
                    if (itemss.productFeatureCategoryId == items.productFeatureCategoryId) {
                        itemss.productFeatureTypeList.forEach(function (item, k) {
                            items.productFeatureTypeList.forEach(function (element) {
                                _this.specialeed.push(element.productFeatureTypeId);
                                if (item.productFeatureTypeId == element.productFeatureTypeId) {
                                    // item.displayFlag = element.displayFlag;
                                    item.checkBox10 = true;
                                    element.productFeatureList.forEach(function (ement) {
                                        _this.Featurement.push(ement.productFeatureId);
                                    });
                                    if (_this.Featurement.length == 0) {
                                        item.productFeatureList.forEach(function (ittem) {
                                            ittem.checkBox = false;
                                        });
                                    }
                                    else {
                                        item.productFeatureList.forEach(function (ittem) {
                                            if (_this.Featurement.indexOf(ittem.productFeatureId) >= 0) {
                                                ittem.checkBox = true;
                                            }
                                            else {
                                                ittem.checkBox = false;
                                            }
                                        });
                                    }
                                    if (element.productFeatureList.length == item.productFeatureList.length) {
                                        item['checkDate'] = true;
                                    }
                                    else {
                                        item['checkDate'] = false;
                                    }
                                    item.configLevel = element.configLevel;
                                    item.featureType = element.featureType;
                                    item.displayFlag = element.displayFlag;
                                    if (item.configLevel != 0) {
                                        item.productFeatureList.forEach(function (ittem) {
                                            element.productFeatureList.forEach(function (elemen) {
                                                ittem.def = elemen.def;
                                                ittem.inc = elemen.inc;
                                                ittem.max = elemen.max;
                                                ittem.min = elemen.min;
                                            });
                                        });
                                    }
                                    _this.Featurement = [];
                                }
                            });
                        });
                        itemss.productFeatureTypeList.forEach(function (item, i) {
                            if (_this.specialeed.indexOf(item.productFeatureTypeId) == -1) {
                                item['checkDate'] = true;
                                if (!item.displayFlag || item.displayFlag == '' || item.displayFlag == undefined) {
                                    item.displayFlag = '2';
                                }
                                item.productFeatureList.forEach(function (elemd) {
                                    elemd.checkBox = true;
                                });
                            }
                        });
                        _this.specialeed = [];
                    }
                });
            });
            this.special_attr2.forEach(function (itemee) {
                if (_this.specialed.indexOf(itemee.productFeatureCategoryId) == -1) {
                    itemee.productFeatureTypeList.forEach(function (iteme) {
                        iteme['checkDate'] = true;
                        if (!iteme.displayFlag || iteme.displayFlag == '' || iteme.displayFlag == undefined) {
                            iteme.displayFlag = '2';
                        }
                        iteme.productFeatureList.forEach(function (elem) {
                            elem.checkBox = true;
                        });
                    });
                }
            });
            this.specialed = [];
            this.specialeed = [];
            this.special_attr2.forEach(function (itemed) {
                _this.item_id = itemed.productFeatureCategoryId;
                _this.keshou_obj[_this.item_id] = [];
                _this.keshou_objS[_this.item_id] = [];
                itemed.productFeatureTypeList.forEach(function (ement, i) {
                    if (_this.selectedValue == "templateAdd" && _this.troud == 0) {
                        ement.checkBox10 = true;
                    }
                    if (ement.checkBox10 == true) {
                        _this.keshou_objS[_this.item_id].push(ement);
                        _this.keshou_obj[_this.item_id].push(i);
                    }
                });
            });
            this.dianji(0, this.special_attr2[0]);
        }
        if (this.activeIndex === 4) {
            this.special_attr2.forEach(function (items, k) {
                var count = 0;
                items.productFeatureTypeList.forEach(function (item) {
                    var countt = 0;
                    var count1 = 0;
                    var count2 = 0;
                    var count3 = 0;
                    var count4 = 0;
                    var countt1 = 0;
                    var countt2 = 0;
                    if (item.checkBox10 == true) {
                        count++;
                        if (item.configLevel != 0) {
                            var productdef_1 = '';
                            var productdef1_1 = '';
                            var productdeff_1 = '';
                            var productmax_1 = '';
                            var productmin_1 = '';
                            var productmaxf_1 = '';
                            var producteid_1 = '';
                            if (item.configLevel == '1' && item.featureType == '01') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.checkBox == true) {
                                        countt++;
                                    }
                                });
                                if (countt == 0 || countt > 1) {
                                    _this.activeIndex = 3;
                                    _this.vlaue1 = _this.activeIndex;
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + '可售级不能多选或不选！' });
                                    _this.dianji(k, _this.special_attr2[k]);
                                    return;
                                }
                            }
                            if (item.configLevel == '2' && item.featureType == '01') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.checkBox == true) {
                                        countt1++;
                                    }
                                });
                                if (countt1 == 0) {
                                    _this.activeIndex = 3;
                                    _this.vlaue1 = _this.activeIndex;
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + '客户级不可不选！' });
                                    _this.dianji(k, _this.special_attr2[k]);
                                    return;
                                }
                            }
                            if (item.featureType == '02') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.valueType == '05' || itemed.valueType == '06') {
                                        if (itemed.def == '') {
                                            count1++;
                                            productdef_1 = item.productFeatureTypeId;
                                        }
                                        else {
                                            _this.carsold.forEach(function (itemse) {
                                                if (itemse.productFeatureCategoryId == items.productFeatureCategoryId) {
                                                    itemse.productFeatureTypeList.forEach(function (itemsed) {
                                                        if (itemsed.productFeatureTypeId == item.productFeatureTypeId) {
                                                            var minn = parseInt(itemsed.productFeatureList[0].min);
                                                            var maxx = parseInt(itemsed.productFeatureList[0].max);
                                                            var def = parseInt(itemed.def);
                                                            if (def > maxx || minn > def) {
                                                                countt2++;
                                                                productdef1_1 = item.productFeatureTypeId;
                                                                productdeff_1 = minn + "--" + maxx;
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                    if (itemed.valueType != '05' && itemed.valueType != '06') {
                                        if (itemed.max == '') {
                                            count2++;
                                            productmax_1 = item.productFeatureTypeId;
                                        }
                                        if (itemed.min == '') {
                                            count3++;
                                            productmin_1 = item.productFeatureTypeId;
                                        }
                                        _this.carsold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == items.productFeatureCategoryId) {
                                                itemse.productFeatureTypeList.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == item.productFeatureTypeId) {
                                                        var mine = parseInt(itemsed.productFeatureList[0].min);
                                                        var maxe = parseInt(itemsed.productFeatureList[0].max);
                                                        var min = parseInt(itemed.min);
                                                        var max = parseInt(itemed.max);
                                                        if (mine > min || max > maxe || min > max) {
                                                            count4++;
                                                            producteid_1 = item.productFeatureTypeId;
                                                            productmaxf_1 = mine + "--" + maxe;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            if (count1 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef_1 + '取值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (countt2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef1_1 + '取值范围为' + productdeff_1 });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmax_1 + '最大值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count3 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmin_1 + '最小值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count4 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: producteid_1 + '取值范围为' + productmaxf_1 });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                        }
                    }
                });
                if (count == 0) {
                    _this.activeIndex = 3;
                    _this.vlaue1 = _this.activeIndex;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '属性不能为空' });
                    _this.dianji(k, _this.special_attr2[k]);
                    return;
                }
            });
            this.siteQuery();
        }
        //组件配置信息的保存
        if (this.activeIndex === 5) {
            if (this.funList_right.length == 0) {
                this.activeIndex = 4;
                this.vlaue1 = this.activeIndex;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '功能应用不能为空' });
            }
            this.querySimpleParamValue();
        }
        var this_ = this;
        setTimeout(function () {
            var kk = document.getElementById('KK');
            var contents = kk.getElementsByClassName('ui-steps-number');
            for (var i = 0; i < contents.length; i++) {
                contents[i]['style'].backgroundColor = '#757575';
                if (i <= this_.activeIndex - 1) {
                    contents[i]['style'].backgroundColor = '#71d071';
                }
                if (i == (this_.activeIndex)) {
                    contents[i]['style'].backgroundColor = '#ffc107';
                }
            }
        }, 200);
    };
    //  可售产品文件上传路径查询
    SaleProductConfigComponent.prototype.querySimpleParamValue = function () {
        var _this = this;
        var param = {
            'paramName': 'pmcs_available_product_pack_path',
            'paramGroupId': 'pmcs_available_product_pack'
        };
        this.productManageHttpService.querySimpleParamValue(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                // this.UPLOAD = data.commonParam.paramValue;
                _this.UPLOAD = data.commonParam.paramValue + '/' + _this.productIdhead + _this.productId;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //点击组件属性查看
    SaleProductConfigComponent.prototype.dianji = function (i, item) {
        var _this = this;
        this.show = item.productFeatureCategoryName; //所选组件
        var arrayN = [];
        this.zujianId = item.productFeatureCategoryId; //点击之后的组件id
        this.aIndex = i;
        var pram = {};
        // 存值
        if (!this.keshou_obj.hasOwnProperty(item.productFeatureCategoryId)) {
            this.keshou_obj[item.productFeatureCategoryId] = [];
        }
        if (!this.keshou_objS.hasOwnProperty(item.productFeatureCategoryId)) {
            this.keshou_objS[item.productFeatureCategoryId] = [];
        }
        this.select_atr.forEach(function (item) {
            var stu = _this.keshou_obj[_this.item_id].some(function (item2) {
                return item2 == item;
            });
            if (!stu) {
                _this.keshou_objS[_this.item_id].push(_this.cars_attrbute[item]);
                _this.keshou_obj[_this.item_id].push(item);
            }
        });
        this.item_id = item.productFeatureCategoryId;
        this.select_atr = [];
        this.cars_attrbute = this.special_attr2[i].productFeatureTypeList;
        // // 回显
        this.cars_attrbute.forEach(function (item, i) {
            _this.keshou_objS[_this.zujianId].forEach(function (item2, j) {
                if (item2.productFeatureTypeId == item.productFeatureTypeId) {
                    _this.cars_attrbute[i] = item2;
                }
            });
        });
        var aka = 0;
        this.cars_attrbute.forEach(function (item) {
            if (!item.checkBox10) {
                aka++;
            }
        });
        if (aka == 0) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
        this.carsold.forEach(function (itemse) {
            if (itemse.productFeatureCategoryId == _this.special_attr2[i].productFeatureCategoryId) {
                itemse.productFeatureTypeList.forEach(function (itemsed) {
                    _this.cars_attrbute.forEach(function (itemses) {
                        if (itemsed.productFeatureTypeId == itemses.productFeatureTypeId) {
                            if (itemses.configLevel != '0' && (itemses.productFeatureList[0].valueType == '05' || itemses.productFeatureList[0].valueType == '06')) {
                                itemses.productFeatureList[0].min = itemsed.productFeatureList[0].min;
                                itemses.productFeatureList[0].max = itemsed.productFeatureList[0].max;
                            }
                        }
                    });
                });
            }
        });
    };
    //组件设置多选全选
    SaleProductConfigComponent.prototype.choose_trall = function () {
        this.select_atr2 = [];
        for (var i = 0; i < this.cars_3.length; i++) {
            if (this.choose_trall2 == true) {
                var k = void 0;
                k = i.toString();
                this.select_atr2.push(k);
                this.choose_tr2 = this.select_atr2;
            }
            else {
                this.choose_tr2 = [];
                this.select_atr2 = [];
            }
        }
    };
    //组件设置多选按钮
    SaleProductConfigComponent.prototype.choose_trs = function () {
        this.select_atr3 = [];
        for (var i = 0; i < this.cars_3.length; i++) {
            var k = void 0;
            k = i.toString();
            this.select_atr3.push(k);
        }
        if (this.select_atr3.length === this.choose_tr2.length) {
            this.choose_trall2 = true;
        }
        else {
            this.choose_trall2 = false;
        }
    };
    //多行列表全选按钮
    SaleProductConfigComponent.prototype.checkBoxAllClick10 = function () {
        this.select_atr = [];
        for (var i = 0; i < this.cars_attrbute.length; i++) {
            if (this.checkBoxAll10 == true) {
                this.cars_attrbute[i].checkBox10 = true;
                this.chooseData10.push(this.cars_attrbute[i]);
                this.select_atr.push(i);
            }
            else {
                this.chooseData10 = [];
                this.select_atr = [];
                this.cars_attrbute[i].checkBox10 = false;
            }
        }
    };
    //多行列表单选按钮
    SaleProductConfigComponent.prototype.checkBoxClick10 = function (i, data) {
        var _this = this;
        var tempss = [];
        if (data.checkBox10) {
            this.select_atr.push(i);
            this.chooseData10.push(data);
        }
        else {
            this.chooseData10.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData10.splice(i, 1);
                    _this.select_atr.splice(i, 1);
                }
            });
        }
        var aka = 0;
        this.cars_attrbute.forEach(function (item) {
            if (!item.checkBox10) {
                aka++;
            }
        });
        if (aka == 0) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
        var arr0 = [];
        for (var i_1 = 0; i_1 < this.select_atr.length; i_1++) {
            if (arr0.indexOf(this.select_atr[i_1]) == -1) {
                arr0.push(this.select_atr[i_1]);
            }
        }
        tempss = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](arr0);
        this.select_atr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempss);
    };
    //全选按钮
    SaleProductConfigComponent.prototype.checkAllClickA = function (item) {
        for (var i = 0; i < item.productFeatureList.length; i++) {
            if (item['checkDate'] == true) {
                item.checkBox10 = true;
                item.productFeatureList[i].checkBox = true;
                this.chooseData.push(item.productFeatureList[i]);
            }
            else {
                this.chooseData = [];
                item.checkBox10 = false;
                item.productFeatureList[i].checkBox = false;
            }
        }
    };
    //单选按钮
    SaleProductConfigComponent.prototype.checkBoxClickA = function (i, data, item) {
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
        var arr = [];
        item.productFeatureList.forEach(function (itemC, i) {
            if (itemC.checkBox) {
                arr.push(i);
            }
        });
        if (data.checkBox) {
            item.checkBox10 = true;
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (arr.length == item.productFeatureList.length) {
            item['checkDate'] = true;
        }
        else if (arr.length == 0) {
            item.checkBox10 = false;
            item['checkDate'] = false;
        }
        else {
            item['checkDate'] = false;
        }
    };
    SaleProductConfigComponent.prototype.changeValueds = function (i, item) {
        item.checkBox10 = true;
        this.checkBoxClick10(i, item);
    };
    // 可选功能列表全选按钮
    SaleProductConfigComponent.prototype.AllleftListFunZ = function () {
        this.leftListFun = [];
        var emptyArr2 = [];
        if (this.leftListFunAll === true) {
            for (var i = 0; i < this.funList_left.length; i++) {
                this.leftListFun.push(i.toString());
            }
        }
        else if (this.leftListFunAll === false) {
            this.leftListFun = [];
        }
        emptyArr2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.leftListFun);
        this.leftListFun = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](emptyArr2);
    };
    // 已选功能列表全选按钮
    SaleProductConfigComponent.prototype.AllrightListFunZ = function () {
        this.rightListFun = [];
        var emptyArr2 = [];
        if (this.rightListFunAll === true) {
            for (var i = 0; i < this.funList_right.length; i++) {
                this.rightListFun.push(i.toString());
            }
        }
        else if (this.rightListFunAll === false) {
            this.rightListFun = [];
        }
        emptyArr2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.rightListFun);
        this.rightListFun = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](emptyArr2);
    };
    // 可选功能列表单选按钮
    SaleProductConfigComponent.prototype.AllleftListFunZ10 = function () {
        if (this.leftListFun.length === this.funList_left.length) {
            this.leftListFunAll = true;
        }
        else {
            this.leftListFunAll = false;
        }
    };
    // 已选功能列表单选按钮
    SaleProductConfigComponent.prototype.AllrightListFunZ10 = function () {
        if (this.rightListFun.length === this.funList_right.length) {
            this.rightListFunAll = true;
        }
        else {
            this.rightListFunAll = false;
        }
    };
    // 组件右分页
    SaleProductConfigComponent.prototype.paginates = function (event) {
        // 每页显示的条数
        this.pageSizes = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // 调用查询的方法
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        this.funList_right = [];
        if (this.funList_rightList.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.funList_right = this.funList_rightList.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.funList_right = this.funList_rightList.slice(currentPages2);
        }
        this.rightListFun = [];
    };
    //功能右移
    SaleProductConfigComponent.prototype.rightFunMovre = function () {
        var _this = this;
        var temps = [];
        var temps1 = [];
        var arrsright = [];
        this.leftListFun.forEach(function (item, i) {
            arrsright.push(item);
            arrsright.sort(function (a, b) { return b - a; });
            _this.funList_right.push(_this.funList_left[item]);
            _this.funList_rightList.push(_this.funList_left[item]);
        });
        arrsright.forEach(function (item, i) {
            _this.funList_left.splice(item, 1);
        });
        temps = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](temps);
        this.funList_rightList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_rightList);
        temps1 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](temps1);
        this.leftListFun = [];
        this.leftListFunAll = false;
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        if (this.funList_left) {
            this.total = this.funList_left.length;
        }
        else {
            this.total = 0;
        }
    };
    //功能左移
    SaleProductConfigComponent.prototype.liftFunMovre = function () {
        var _this = this;
        var tempss = [];
        var tempss1 = [];
        var arrsleft = [];
        this.rightListFun.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.funList_left.push(_this.funList_right[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.funList_rightList.forEach(function (items, k) {
                if (items.productFunctionName === _this.funList_right[item].productFunctionName) {
                    _this.funList_rightList.splice(k, 1);
                }
            });
            _this.funList_right.splice(item, 1);
        });
        tempss = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempss);
        this.funList_rightList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_rightList);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempss1);
        this.rightListFun = [];
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        if (this.funList_left) {
            this.total = this.funList_left.length;
        }
        else {
            this.total = 0;
        }
        this.rightListFunAll = false;
    };
    //站点，组件的收起，展开
    SaleProductConfigComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    //可售产品保存、
    SaleProductConfigComponent.prototype.saleInfoSave = function (itemV) {
        var _this = this;
        this.productFeatureArr = [];
        for (var key in itemV) {
            itemV[key].forEach(function (item) {
                if (item.checkBox10 == true) {
                    if (item.featureType == '01') {
                        item.productFeatureList.forEach(function (items, i) {
                            if (items.checkBox) {
                                if (item.configLevel == '0') {
                                    var objA0 = {
                                        productFeatureId: items.productFeatureId,
                                        configLevel: item.configLevel,
                                        description: items.productFeatureDesc,
                                        productFeatureTypeId: items.productFeatureTypeId,
                                        productFeatureCategoryId: items.productFeatureCategoryId,
                                        valueType: items.valueType,
                                        max: items.max,
                                        min: items.min,
                                        def: items.def,
                                        inc: items.inc,
                                        productFeatureLocalCode: items.productFeatureLocalCode,
                                    };
                                    _this.productFeatureArr.push(objA0);
                                }
                                else {
                                    var objA1 = {
                                        productFeatureId: items.productFeatureId,
                                        configLevel: item.configLevel,
                                        description: items.productFeatureDesc,
                                        productFeatureTypeId: items.productFeatureTypeId,
                                        productFeatureCategoryId: items.productFeatureCategoryId,
                                        valueType: items.valueType,
                                        max: items.max,
                                        min: items.min,
                                        def: items.def,
                                        inc: items.inc,
                                        productFeatureLocalCode: items.productFeatureLocalCode,
                                    };
                                    _this.productFeatureArr.push(objA1);
                                }
                            }
                        });
                    }
                    if (item.featureType == '02') {
                        var objB_1 = {};
                        item.productFeatureList.forEach(function (itemss, i) {
                            if (itemss.checkBox) {
                                if (itemss.min != null) {
                                    itemss.min = itemss.min.toString();
                                }
                                if (itemss.max != null) {
                                    itemss.max = itemss.max.toString();
                                }
                                if (itemss.def != null) {
                                    itemss.def = itemss.def.toString();
                                }
                                if (itemss.inc != null) {
                                    itemss.inc = itemss.inc.toString();
                                }
                                if (itemss.valueType == '06') {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item.configLevel,
                                        description: itemss.productFeatureDesc,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: itemss.max,
                                        min: itemss.min,
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                                else {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item.configLevel,
                                        description: itemss.productFeatureDesc,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: itemss.max,
                                        min: itemss.min,
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                                _this.productFeatureArr.push(objB_1);
                            }
                        });
                    }
                }
            });
        }
        var site = {
            label: this.show,
            value: this.baozhuangid
        };
        this.siteClick(site);
        this.postsManageBean.description = this.product_content_value;
        this.postsManageBean.productContent = this.detaillist;
        this.postsManageBean.operationTemplateId = this.product_base_value.tplId; //基础产品id
        this.postsManageBean.productFeature = this.productFeatureArr;
        this.postsManageBean.productName = this.product_name_value; //产品名称
        //日期
        this.postsManageBean.introductionDate = this.commfunc.transDateN(this.transferedDateFrom);
        this.postsManageBean.releaseDate = this.commfunc.transDateN(this.transferedDateTo);
        //特殊属性
        this.postsManageBean.productMsg = this.special_attr;
        this.postsManageBean.currency = this.productCurrency; //币种
        this.postsManageBean.inOutTableMode = this.inOut; //表内外
        this.postsManageBean.crmProductTreeCode = this.crmValue; //CRM产品树编号
        this.postsManageBean.businessCode = this.businessValue; //业务品种编号
        this.postsManageBean.subBusinessCode = this.cbusinessValue; //子业务种类编号
        this.postsManageBean.marketDepartmentList = this.marketDepartmentList; //营销部门
        this.postsManageBean.manageDepartmentList = this.manageDepartmentList; //管理部门
        this.postsManageBean.productManagerList = this.productManagerList; //产品经理
        this.postsManageBean.salesPostList = this.salesPostList; //销售人员岗位
        this.postsManageBean.copyFlag = this.copyFlag(this.selectedValue);
        this.postsManageBean.productMarketingList = this.productMarketingList;
        this.functionList = [];
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.postsManageBean.productId = this.productIdhead + this.productId;
        this.postsManageBean.functionList = this.functionList;
        // if (this.detailkeynum != 0) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: "详情描述未填完整！" });
        //     this.detailkeynum = 0;
        //     this.iscompele = false;
        // } else {
        var params = { 'paramsMap': this.postsManageBean };
        this.productManageHttpService.createAvailableProduct(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_1 = _this;
                setTimeout(function () {
                    this_1.router.navigate(['/pages/tzb/product-manage/available-product/sale-product-view']);
                    this.iscompele = false;
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
        // }
    };
    SaleProductConfigComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    SaleProductConfigComponent.prototype.copyFlag = function (item) {
        if (item == 'copyAdd') {
            item = '1';
        }
        else {
            item = '0';
        }
        return item;
    };
    //站点复制
    SaleProductConfigComponent.prototype.webcopy = function () {
        var _this = this;
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        var site = {
            label: this.show,
            value: this.baozhuangid
        };
        this.siteClick(site);
        var copylist = [];
        this.detaillist.forEach(function (iten) {
            var infos = 0;
            iten.infoList.forEach(function (item) {
                if (item.objectInfo == '') {
                    infos++;
                }
            });
            // if (iten.fileList != [] && iten.imageList != [] && infos != 9) {
            if (iten.channelId != _this.baozhuangid) {
                copylist.push(iten);
            }
            // }
        });
        this.display = true;
        this.headerTitle = '渠道包装复制';
        this.showModel = '6';
        this.updateValue = copylist;
    };
    SaleProductConfigComponent.prototype.choicewebsite = function (parame) {
        var _this = this;
        this.items1 = [];
        this.items2 = [];
        this.items3 = [];
        parame.outed[0].infoList.forEach(function (itens, j) {
            if (itens.dataResourceName == 'systemSummary') {
                _this.systemSummary = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'marketScript') {
                _this.marketScript = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'termDesc') {
                _this.termDesc = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'limitDesc') {
                _this.limitDesc = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'sameProductlnformation') {
                _this.sameProductlnformation = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'others') {
                _this.others = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'listFeature') {
                _this.Feature = itens.objectInfo.split(',');
                for (var i = 0; i < _this.Feature.length; i++) {
                    _this.items1.push({ "value11": _this.Feature[i] });
                }
            }
            else if (itens.dataResourceName == 'productDetail') {
                _this.Detail = itens.objectInfo.split(',');
                for (var d = 0; d < _this.Detail.length; d++) {
                    _this.Detail2 = _this.Detail[d].split(':');
                    _this.items2.push({ "value21": _this.Detail2[1], "value22": _this.Detail2[2], 'detailkey': _this.Detail2[0] });
                }
            }
            else if (itens.dataResourceName == 'productPhra') {
                _this.Phra = itens.objectInfo.split(',');
                for (var i = 0; i < _this.Phra.length; i++) {
                    _this.items3.push({ "value31": _this.Phra[i] });
                }
            }
        });
        this.zujian_ist2 = parame.outed[0].imageList;
        this.zujian_ist3 = parame.outed[0].fileList;
        this.files10 = [];
        this.value41Path = [];
        this.files11 = [];
        this.value51Path = [];
        this.files12 = [];
        this.value61Path = [];
        this.files13 = [];
        this.value71Path = [];
        this.files14 = [];
        this.value81Path = [];
        this.files15 = [];
        this.value91Path = [];
        this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
        this.value101Path = [];
        this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
        this.value111Path = [];
        this.files18 = [];
        this.value112Path = [];
        for (var j = 0; j < this.zujian_ist2.length; j++) {
            if (this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                this.files10.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList10 = [];
                this.fileList10.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList10.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "homeDisplayPictures";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value41Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listImages') {
                this.files11.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList11 = [];
                this.fileList11.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList11.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listImages";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value51Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                this.files12.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList12 = [];
                this.fileList12.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList12.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listSpecification";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value61Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                this.files13.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList13 = [];
                this.fileList13.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList13.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listPurchasingContract";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value71Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listVideo') {
                this.files14.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList14 = [];
                this.fileList14.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList14.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listVideo";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value81Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                this.files15.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList15 = [];
                this.fileList15.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList15.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "detailsDisplay";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value91Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'productDetail') {
                this.items12.push({ 'detailkey1': this.zujian_ist2[j].imagePath.split(':')[0], 'valuedetails': this.zujian_ist2[j].imagePath.split(':')[1], 'list': [{ "name": this.zujian_ist2[j].imageName.split('_')[1] }] });
                this.fileList16 = [];
                this.fileList16.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath.split(':')[2],
                });
                this.fileList16.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "productDetail";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value101Path.push(obj);
                });
            }
        }
        if (this.items12.length > 1) {
            this.items12.splice(0, 1);
        }
        for (var K = 0; K < this.zujian_ist3.length; K++) {
            if (this.zujian_ist3[K].dataResourceName == 'productDetail') {
                this.files17.push({ 'detailkey2': this.zujian_ist3[K].filePath.split(':')[0], 'valuedetailes': this.zujian_ist3[K].filePath.split(':')[1], 'liste': [{ "name": this.zujian_ist3[K].fileName.split('_')[1] }] });
                this.fileList17 = [];
                this.fileList17.push({
                    "fileName": this.zujian_ist3[K].fileName,
                    "fileUrl": this.zujian_ist3[K].filePath.split(':')[2],
                });
                this.fileList17.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "productDetail";
                    obj['fileName'] = item.fileName;
                    obj['filePath'] = item.fileUrl;
                    _this.value111Path.push(obj);
                });
            }
            else if (this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                this.files18.push({ "name": this.zujian_ist3[K].fileName.split('_')[1] });
                this.fileList18 = [];
                this.fileList18.push({
                    "fileName": this.zujian_ist3[K].fileName,
                    "fileUrl": this.zujian_ist3[K].filePath,
                });
                this.fileList18.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listSpecification";
                    obj['fileName'] = item.fileName;
                    obj['filePath'] = item.fileUrl;
                    _this.value112Path.push(obj);
                });
            }
        }
        if (this.files17.length > 1) {
            this.files17.splice(0, 1);
        }
        this.display = parame.display;
    };
    //产品包装
    SaleProductConfigComponent.prototype.copyObj = function (param) {
        var obj = {};
        if (param) {
            for (var val in param) {
                obj[val] = param[val];
            }
        }
        return obj;
    };
    //特色描述
    SaleProductConfigComponent.prototype.doAdd1 = function () {
        this.items1.push({ value11: '' });
    };
    SaleProductConfigComponent.prototype.doDetel1 = function (i) {
        if (this.items1.length > 1) {
            this.items1.splice(i, 1);
        }
    };
    SaleProductConfigComponent.prototype.refresh = function () {
        this.transferedDateTo = null;
    };
    SaleProductConfigComponent.prototype.doAdd2 = function () {
        this.items2.push(this.copyObj(this.obj));
    };
    SaleProductConfigComponent.prototype.doDetel2 = function (i) {
        if (this.items2.length > 1) {
            this.items2.splice(i, 1);
        }
    };
    SaleProductConfigComponent.prototype.doAdd3 = function () { this.items3.push({ value31: '' }); };
    SaleProductConfigComponent.prototype.doDetel3 = function (i) {
        if (this.items3.length > 1) {
            this.items3.splice(i, 1);
        }
    };
    SaleProductConfigComponent.prototype.doAddDetails = function () {
        this.items12.push({ detailkey1: '', valuedetails: '', list: [] });
    };
    SaleProductConfigComponent.prototype.doDetelDetails = function (i) {
        if (this.items12.length > 1) {
            this.items12.splice(i, 1);
        }
    };
    SaleProductConfigComponent.prototype.doAddDetailes = function () {
        this.files17.push({ detailkey2: '', valuedetailes: '', liste: [] });
    };
    SaleProductConfigComponent.prototype.doDetelDetailes = function (i) {
        if (this.files17.length > 1) {
            this.files17.splice(i, 1);
        }
    };
    // 产品描述
    SaleProductConfigComponent.prototype.fileServe = function () {
        var _this = this;
        var Astr1 = [];
        this.items1.forEach(function (item) {
            Astr1.push(item.value11);
        });
        var Astr121 = [];
        var Astr122 = [];
        var AstrCe = [];
        this.items2.forEach(function (item) {
            if (item.value21 == '' && item.value22 == '') {
                AstrCe = [];
            }
            else if (item.value21 == undefined && item.value22 == undefined) {
                AstrCe = [];
            }
            else if (item.value21 != '' && item.value22 != '' && item.detailkey != '' && item.value21 != undefined && item.value22 != undefined && item.detailkey != undefined) {
                AstrCe.push(item.detailkey + ':' + item.value21 + ':' + item.value22);
            }
            else {
                _this.detailkeynum++;
            }
        });
        var Astr13 = [];
        this.items3.forEach(function (item) {
            Astr13.push(item.value31);
        });
        this.arrTxt = [
            {
                objectInfo: this.systemSummary,
                dataResourceName: "systemSummary"
            },
            {
                objectInfo: this.marketScript,
                dataResourceName: "marketScript"
            },
            {
                objectInfo: this.termDesc,
                dataResourceName: "termDesc"
            },
            {
                objectInfo: this.limitDesc,
                dataResourceName: "limitDesc"
            },
            {
                objectInfo: this.sameProductlnformation,
                dataResourceName: "sameProductlnformation"
            },
            {
                objectInfo: this.others,
                dataResourceName: "others"
            },
            {
                objectInfo: Astr1.toString(),
                dataResourceName: "listFeature"
            },
            {
                objectInfo: AstrCe.toString(),
                dataResourceName: "productDetail"
            },
            {
                objectInfo: Astr13.toString(),
                dataResourceName: "productPhra"
            },
        ];
    };
    //首页展示图片
    SaleProductConfigComponent.prototype.load1 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files10.push(file);
        }
        var data = JSON.parse(event.xhr.response); //  上传成功后返回信息
        var obj = {};
        obj['dataResourceName'] = 'homeDisplayPictures';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value41Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList10 = JSON.parse(event.xhr.response);
        // }
        // this.fileList10.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "homeDisplayPictures";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value41Path.push(obj)
        // });
    };
    //列表展示图片
    SaleProductConfigComponent.prototype.load2 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files11.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listImages';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value51Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList11 = JSON.parse(event.xhr.response);
        // }
        // this.fileList11.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "listImages";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value51Path.push(obj)
        // });
    };
    //产品说明书
    SaleProductConfigComponent.prototype.load3 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files12.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listSpecification';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value61Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList12 = JSON.parse(event.xhr.response);
        // }
        // this.fileList12.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "listSpecification";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value61Path.push(obj)
        // });
    };
    //产品购买协议
    SaleProductConfigComponent.prototype.load4 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files13.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listPurchasingContract';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value71Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList13 = JSON.parse(event.xhr.response);
        // }
        // this.fileList13.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "listPurchasingContract";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value71Path.push(obj)
        // });
    };
    //列表视频
    SaleProductConfigComponent.prototype.load5 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files14.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listVideo';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value81Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList14 = JSON.parse(event.xhr.response);
        // }
        // this.fileList14.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "listVideo";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value81Path.push(obj)
        // });
    };
    //详情展示图片
    SaleProductConfigComponent.prototype.load6 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files15.push(file);
        }
        var data = JSON.parse(event.xhr.response); //  上传成功后返回的图片存储路径
        var obj = {};
        obj['dataResourceName'] = 'detailsDisplay';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value91Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList15 = JSON.parse(event.xhr.response);
        // }
        // this.fileList15.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "detailsDisplay";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value91Path.push(obj)
        // });
    };
    //详情描述
    SaleProductConfigComponent.prototype.load7 = function (event, i) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.items12[i].list.push(file);
            if (this.items12[i].list.length > 1) {
                this.items12[i].list.splice(1);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '只能上传一条数据!' });
                return;
            }
        }
        for (var _b = 0, _c = event.files; _b < _c.length; _b++) {
            var file = _c[_b];
            this.files16.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'productDetail';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value101Path.push(obj);
        // let svalue = this.items12[i].valuedetails;
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList16 = JSON.parse(event.xhr.response);
        // }
        // this.fileList16.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "productDetail";
        //     obj['imageName'] = item.fileName;
        //     obj['imagePath'] = item.fileUrl;
        //     this.value101Path.push(obj)
        // });
    };
    //文档详情描述
    SaleProductConfigComponent.prototype.load8 = function (event, i) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.fileList17.push(file);
        }
        for (var _b = 0, _c = event.files; _b < _c.length; _b++) {
            var file = _c[_b];
            this.files17[i]['liste'].push(file);
            if (this.files17[i].liste.length > 1) {
                this.files17[i].liste.splice(1);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '只能上传一条数据!' });
                return;
            }
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'productDetail';
        obj['filePath'] = data.filePath + data.fileTitle;
        this.value111Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList17 = JSON.parse(event.xhr.response);
        // }
        // this.fileList17.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "productDetail";
        //     obj['fileName'] = item.fileName;
        //     obj['filePath'] = item.fileUrl;
        //     this.value111Path.push(obj)
        // });
        // for (let file of event.files) {
        //     let aftname = file.name.split('.')[1];
        //     if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf' || aftname == 'html') {
        //         this.files17[i].liste.push(file)
        //     } else {
        //         this.files17[i].liste.push(file);
        //         this.deleta8(this.files17[i], file);
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
        //     }
        // }
    };
    SaleProductConfigComponent.prototype.load9 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files18.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listSpecification';
        obj['filePath'] = data.filePath + data.fileTitle;
        this.value112Path.push(obj);
        // if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
        //     this.fileList18 = JSON.parse(event.xhr.response);
        // }
        // this.fileList18.forEach(item => {
        //     let obj = {};
        //     obj['dataResourceName'] = "listSpecification";
        //     obj['fileName'] = item.fileName;
        //     obj['filePath'] = item.fileUrl;
        //     this.value112Path.push(obj)
        // });
        // for (let file of event.files) {
        //     let aftname = file.name.split('.')[1];
        //     if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
        //         this.files18.push(file)
        //     } else {
        //         this.files18.push(file);
        //         this.deleta9(file);
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
        //     }
        // }
    };
    //删除
    SaleProductConfigComponent.prototype.deleta1 = function (item) {
        var kkey = this.files10.indexOf(item);
        this.files10.splice(kkey, 1);
        this.value41Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta2 = function (item) {
        var kkey = this.files11.indexOf(item);
        this.files11.splice(kkey, 1);
        this.value51Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta3 = function (item) {
        var kkey = this.files12.indexOf(item);
        this.files12.splice(kkey, 1);
        this.value61Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta4 = function (item) {
        var kkey = this.files13.indexOf(item);
        this.files13.splice(kkey, 1);
        this.value71Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta5 = function (item) {
        var kkey = this.files14.indexOf(item);
        this.files14.splice(kkey, 1);
        this.value81Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta6 = function (item) {
        var kkey = this.files15.indexOf(item);
        this.files15.splice(kkey, 1);
        this.value91Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta7 = function (item, items) {
        var kkey = item.list.indexOf(items);
        item.list.splice(kkey, 1);
        this.value101Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta8 = function (item, items) {
        var kkey = item.liste.indexOf(items);
        item.liste.splice(kkey, 1);
        this.value111Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.deleta9 = function (item) {
        var kkey = this.files18.indexOf(item);
        this.files18.splice(kkey, 1);
        this.value112Path.splice(kkey, 1);
    };
    SaleProductConfigComponent.prototype.addimg = function (item) {
        if (item.length != 0) {
            for (var i = 0; i < item.length; i++) {
                this.arrImage.push(item[i]);
            }
        }
    };
    SaleProductConfigComponent.prototype.addTex = function (item) {
        if (item.length != 0) {
            for (var i = 0; i < item.length; i++) {
                this.arrFile.push(item[i]);
            }
        }
    };
    // 文件上传提交
    SaleProductConfigComponent.prototype.imgServe = function () {
        var _this = this;
        this.arrFile = [];
        this.arrImage = [];
        this.addimg(this.value41Path);
        this.addimg(this.value51Path);
        this.addimg(this.value61Path);
        this.addimg(this.value71Path);
        this.addimg(this.value81Path);
        this.addimg(this.value91Path);
        if (this.Typeinex == 0) {
            this.value101Path.forEach(function (element, i) {
                if (element.imagePath != '' && (_this.items12[i].detailkey1 == '' || _this.items12[i].valuedetails == '')) {
                    _this.detailkeynum++;
                }
                else if (element.imagePath == '') {
                    _this.items12[i].detailkey1 == '';
                    _this.items12[i].valuedetails == '';
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
                else {
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
            });
            this.value111Path.forEach(function (ement, i) {
                if (ement.filePath != '' && (_this.files17[i].detailkey2 == '' || _this.files17[i].valuedetailes == '')) {
                    _this.detailkeynum++;
                }
                else if (ement.filePath == '') {
                    _this.files17[i].detailkey2 == '';
                    _this.files17[i].valuedetailes == '';
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
                else {
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
            });
        }
        else {
            this.value101Path.forEach(function (element, i) {
                element.imagePath = element.imagePath.split(':').pop();
                if (element.imagePath != '' && (_this.items12[i].detailkey1 == '' || _this.items12[i].valuedetails == '')) {
                    _this.detailkeynum++;
                }
                else if (element.imagePath == '') {
                    _this.items12[i].detailkey1 == '';
                    _this.items12[i].valuedetails == '';
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
                else {
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
            });
            this.value111Path.forEach(function (ement, i) {
                ement.filePath = ement.filePath.split(':').pop();
                if (ement.filePath != '' && (_this.files17[i].detailkey2 == '' || _this.files17[i].valuedetailes == '')) {
                    _this.detailkeynum++;
                }
                else if (ement.filePath == '') {
                    _this.files17[i].detailkey2 == '';
                    _this.files17[i].valuedetailes == '';
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
                else {
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
            });
        }
        this.addimg(this.value101Path);
        this.addTex(this.value111Path);
        this.addTex(this.value112Path);
    };
    SaleProductConfigComponent.prototype.allServe = function () {
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        this.iscompele = true;
        this.dianji(0, this.special_attr2[0]);
        this.saleInfoSave(this.keshou_objS);
    };
    // 选择模板按钮
    SaleProductConfigComponent.prototype.choiceTemplate = function (item) {
        this.displayd = true;
        this.headerTitlee = '选择模板';
        this.showModel = '1';
        this.updateValue = item;
    };
    // 选择模板的回调
    SaleProductConfigComponent.prototype.choiceTemplateCall = function (param) {
        this.displayd = param.display;
        this.template_product_base_value = '';
        this.copya = '';
        this.template_line_value = '';
        this.template_group_value = '';
        this.template_product_base_value = '';
        this.line_value = '';
        this.group_value = '';
        this.productIdhead = '';
        this.product_base_value = '';
        this.template_line_value = param.list.productLineName;
        this.template_group_value = param.list.productGroupName;
        this.template_product_base_value = param.list.productName;
        this.line_value = {
            productCategoryId: param.list.productLineId,
            categoryName: param.list.productLineName
        };
        this.group_value = {
            productCategoryId: param.list.productGroupId,
            categoryName: param.list.productGroupName
        };
        this.product_base_value = {
            parentId: param.list.productGroupId,
            tplDsc: param.list.description,
            tplId: param.list.productId,
            tplName: param.list.productName
        };
        this.getSeqNo(param.list.productLineId, param.list.productGroupId);
        if (param.list.productId) {
            this.productIdhead = "P" + param.list.productId.slice(1, 10);
        }
    };
    // 选择模板按钮
    SaleProductConfigComponent.prototype.choicecopy = function () {
        this.displayd = true;
        this.headerTitlee = '复制模板';
        this.showModel = '5';
        this.updateValue = 'copyAdd';
    };
    // 选择模板的回调
    SaleProductConfigComponent.prototype.choicecopyCall = function (parmes) {
        var _this = this;
        this.displayd = parmes.display;
        this.copya = parmes.depart;
        this.template_product_base_value = '';
        // if (this.copya.availableProduct == '' || this.copya.availableProduct == undefined) {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择可售产品！" });
        // } else {
        if (parmes.depart.availableProduct.productTemplateId) {
            this.productIdhead = "P" + parmes.depart.availableProduct.productTemplateId.slice(1, 10);
            this.product_base_value.tplId = parmes.depart.availableProduct.productTemplateId;
        }
        this.getSeqNo(this.copya.availableProduct.productLineId, this.copya.availableProduct.productGroupId);
        this.template_product_base_value = this.copya.availableProduct.productName;
        this.product_line_value = this.copya.availableProduct.productLineName;
        this.product_group_value = this.copya.availableProduct.productGroupName;
        this.product_content_valuet = this.copya.availableProduct.description;
        this.product_base_copy = this.copya.availableProduct.productTemplateName;
        this.productCurrency = this.copya.availableProduct.currency;
        this.inOut = this.copya.availableProduct.inOutTableMode;
        this.crmValue = this.copya.availableProduct.crmProductTreeCode;
        this.businessValue = this.copya.availableProduct.businessCode;
        this.cbusinessValue = this.copya.availableProduct.subBusinessCode;
        this.marketDepartmentList = this.copya.availableProduct.marketDepartmentList;
        this.marketDepartmentList = this.copya.availableProduct.marketDepartmentList;
        var market = '', manage = '', product = '', sales = '';
        this.marketDepartmentList.forEach(function (e) {
            if (_this.copya.availableProduct.marketDepartmentList.length > 1) {
                market += e.marketDepartmentName + ',';
            }
            else {
                market = e.marketDepartmentName;
            }
        });
        this.saleDepartment = market;
        this.manageDepartmentList = this.copya.availableProduct.manageDepartmentList;
        this.manageDepartmentList.forEach(function (e) {
            if (_this.copya.availableProduct.manageDepartmentList.length > 1) {
                manage += e.manageDepartmentName + ',';
            }
            else {
                manage = e.manageDepartmentName;
            }
        });
        this.cfsaleDepartment = manage;
        this.productManagerList = this.copya.availableProduct.productManagerList;
        this.productManagerList.forEach(function (e) {
            if (_this.copya.availableProduct.productManagerList.length > 1) {
                product += e.productManagerName + ',';
            }
            else {
                product = e.productManagerName;
            }
        });
        this.productManager = product;
        this.salesPostList = this.copya.availableProduct.salesPostList;
        this.salesPostList.forEach(function (e) {
            if (_this.copya.availableProduct.salesPostList.length > 1) {
                sales += e.salesPostName + ',';
            }
            else {
                sales = e.salesPostName;
            }
        });
        this.saleUser = sales;
        this.line_value = {
            productCategoryId: this.copya.availableProduct.productLineId,
            categoryName: this.copya.availableProduct.productLineName
        };
        this.group_value = {
            productCategoryId: this.copya.availableProduct.productGroupId,
            categoryName: this.copya.availableProduct.productGroupName
        };
        this.product_base_value = {
            parentId: this.copya.availableProduct.productGroupId,
            // tplDsc: param.list.description,
            tplId: this.copya.availableProduct.productTemplateId,
            tplName: this.copya.availableProduct.productTemplateName
        };
        // 第二部日期
        var introduct = this.copya.availableProduct.releaseDate.replace(/-/g, "/");
        this.transferedDateTo = new Date(introduct);
        var release = this.copya.availableProduct.introductionDate.replace(/-/g, "/");
        this.transferedDateFrom = new Date(release);
        // 管理信息  特殊属性
        this.special_attr = this.copya.productMsgs;
        this.speciall = [];
        this.vedio = this.specall6;
        this.files24 = this.specall7;
        this.speciall = [];
        this.specall6 = [];
        this.specall7 = [];
        // 功能应用
        this.funList_right = this.copya.productFunctionList;
        // 组件设置
        this.copya.productFeatureCategoryList.forEach(function (item, i) {
            _this.speciall.push({ 'productFeatureCategoryName': item.productFeatureCategoryName, 'productFeatureCategoryId': item.productFeatureCategoryId, 'productFeatureTypeList': item.productFeatureTypeList });
        });
        this.cars_4 = this.speciall;
        this.speciall = [];
        // 包装 产品描述
        this.detaillist = [];
        this.copya.productContentList.forEach(function (itenm) {
            //展示图片  文档手册
            _this.zujian_ist2 = itenm.productImageList;
            _this.zujian_ist3 = itenm.productFileList;
            _this.files10 = [];
            _this.value41Path = [];
            _this.files11 = [];
            _this.value51Path = [];
            _this.files12 = [];
            _this.value61Path = [];
            _this.files13 = [];
            _this.value71Path = [];
            _this.files14 = [];
            _this.value81Path = [];
            _this.files15 = [];
            _this.value91Path = [];
            _this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
            _this.value101Path = [];
            _this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
            _this.value111Path = [];
            _this.files18 = [];
            _this.value112Path = [];
            for (var j = 0; j < _this.zujian_ist2.length; j++) {
                if (_this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                    var name_10 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files10.push({ "name": name_10[name_10.length - 1] });
                    _this.fileList10 = [];
                    _this.fileList10.push({
                        "fileName": name_10[name_10.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList10.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "homeDisplayPictures";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value41Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'listImages') {
                    var name_11 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files11.push({ "name": name_11[name_11.length - 1] });
                    _this.fileList11 = [];
                    _this.fileList11.push({
                        "fileName": name_11[name_11.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList11.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "listImages";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value51Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                    var name_12 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files12.push({ "name": name_12[name_12.length - 1] });
                    _this.fileList12 = [];
                    _this.fileList12.push({
                        "fileName": name_12[name_12.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList12.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "listSpecification";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value61Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                    var name_13 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files13.push({ "name": name_13[name_13.length - 1] });
                    _this.fileList13 = [];
                    _this.fileList13.push({
                        "fileName": name_13[name_13.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList13.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "listPurchasingContract";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value71Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'listVideo') {
                    var name_14 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files14.push({ "name": name_14[name_14.length - 1] });
                    _this.fileList14 = [];
                    _this.fileList14.push({
                        "fileName": name_14[name_14.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList14.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "listVideo";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value81Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                    var name_15 = _this.zujian_ist2[j].objectInfo.split('/');
                    _this.files15.push({ "name": name_15[name_15.length - 1] });
                    _this.fileList15 = [];
                    _this.fileList15.push({
                        "fileName": name_15[name_15.length - 1],
                        "fileUrl": _this.zujian_ist2[j].objectInfo,
                    });
                    _this.fileList15.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "detailsDisplay";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value91Path.push(obj);
                    });
                }
                else if (_this.zujian_ist2[j].dataResourceName == 'productDetail') {
                    var name_16 = _this.zujian_ist2[j].objectInfo.split('/');
                    var names = _this.zujian_ist2[j].objectInfo.split(':');
                    _this.items12.push({ 'detailkey1': names[0], 'valuedetails': names[1], 'list': [{ "name": name_16[name_16.length - 1] }] });
                    _this.fileList16 = [];
                    _this.fileList16.push({
                        "fileName": name_16[name_16.length - 1],
                        "fileUrl": names[2],
                    });
                    _this.fileList16.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "productDetail";
                        obj['imageName'] = item.fileName;
                        obj['imagePath'] = item.fileUrl;
                        _this.value101Path.push(obj);
                    });
                }
            }
            if (_this.items12.length > 1) {
                _this.items12.splice(0, 1);
            }
            for (var K = 0; K < _this.zujian_ist3.length; K++) {
                if (_this.zujian_ist3[K].dataResourceName == 'productDetail') {
                    var name_17 = _this.zujian_ist3[K].objectInfo.split('/');
                    var names = _this.zujian_ist3[K].objectInfo.split(':');
                    _this.files17.push({ 'detailkey2': names[0], 'valuedetailes': names[1], 'liste': [{ "name": name_17[name_17.length - 1] }] });
                    _this.fileList17 = [];
                    _this.fileList17.push({
                        "fileName": name_17[name_17.length - 1],
                        "fileUrl": names[2],
                    });
                    _this.fileList17.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "productDetail";
                        obj['fileName'] = item.fileName;
                        obj['filePath'] = item.fileUrl;
                        _this.value111Path.push(obj);
                    });
                }
                else if (_this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                    var name_18 = _this.zujian_ist3[K].objectInfo.split('/');
                    _this.files18.push({ "name": name_18[name_18.length - 1] });
                    _this.fileList18 = [];
                    _this.fileList18.push({
                        "fileName": name_18[name_18.length - 1],
                        "fileUrl": _this.zujian_ist3[K].objectInfo,
                    });
                    _this.fileList18.forEach(function (item) {
                        var obj = {};
                        obj['dataResourceName'] = "listSpecification";
                        obj['fileName'] = item.fileName;
                        obj['filePath'] = item.fileUrl;
                        _this.value112Path.push(obj);
                    });
                }
            }
            if (_this.files17.length > 1) {
                _this.files17.splice(0, 1);
            }
            _this.Typeinex = 0;
            _this.imgServe(); //图片、文档
            _this.detaillist.push({ channelId: itenm.channelId, imageList: _this.arrImage, fileList: _this.arrFile, infoList: itenm.productTextList });
        });
        if (this.copya.productContentList) {
            var sites = {
                siteName: this.copya.productContentList[0].channelName,
                value: this.copya.productContentList[0].channelId
            };
            this.siteClick(sites);
        }
        // }
    };
    // 按钮权限
    SaleProductConfigComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    SaleProductConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-product-config',
            template: __webpack_require__(/*! ./sale-product-config.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-config/sale-product-config.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SaleProductConfigComponent);
    return SaleProductConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-4 text_right\">\r\n            <label>属性名称:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <input [(ngModel)]=\"attrName\" type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width:40%\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_right\">\r\n            <label>属性类型:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [(ngModel)]=\"attrType\" [options]=\"temporary\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_right\">\r\n            <label>属性取值:</label>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <input *ngIf=\"attrType == '0'\" [(ngModel)]=\"attrValue\" type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width:40%\">\r\n            <input *ngIf=\"attrType == '2'\" [(ngModel)]=\"attrValue\" type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width:40%\">\r\n            <p-inputMask *ngIf=\"attrType == '1'\" mask=\"9999/99/99\" [(ngModel)]=\"attrValue\" slotChar=\"yyyy/mm/dd\" class=\"ui-inputtext-new\"\r\n                [style]=\"{'width':'40%'}\"></p-inputMask>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"attrAdd()\" type=\"button\" label=\"确认\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"attrcanel()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-button:first-child {\n  background: linear-gradient(#FFC107, #FFC107); }\n\n:host/deep/ .module {\n  box-shadow: none; }\n\n:host/deep/ .ui-inputtext-new {\n  padding: 0px; }\n\n:host/deep/ .ui-dropdown {\n  width: 40% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1tb2RpZnkvc2FsZS1wcm9kdWN0LW1vZGlmeS1zcGVjYWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcc2FsZS1wcm9kdWN0LW1vZGlmeVxcc2FsZS1wcm9kdWN0LW1vZGlmeS1zcGVjYWlsXFxzYWxlLXByb2R1Y3QtbW9kaWZ5LXNwZWNhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSw2Q0FBNkMsRUFBQTs7QUFFakQ7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvYXZhaWxhYmxlLXByb2R1Y3Qvc2FsZS1wcm9kdWN0LW1vZGlmeS9zYWxlLXByb2R1Y3QtbW9kaWZ5LXNwZWNhaWwvc2FsZS1wcm9kdWN0LW1vZGlmeS1zcGVjYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGQzEwNywgI0ZGQzEwNyk7XHJcbn1cclxuOmhvc3QvZGVlcC8gLm1vZHVsZXtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dC1uZXd7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SaleProductModifySpecailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifySpecailComponent", function() { return SaleProductModifySpecailComponent; });
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaleProductModifySpecailComponent = /** @class */ (function () {
    function SaleProductModifySpecailComponent(productManageHttpService, commfunc, route) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.route = route;
        this.inValue = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.attrN = [];
        this.attrName = '';
        this.attrValue = '';
        this.attrType = '';
        this.loadd = false;
        this.arrValue = [];
        this.codeValues(); //调用方法，获取全部码值
        this.temporary = this.code['temporary'];
    }
    SaleProductModifySpecailComponent.prototype.ngOnInit = function () {
    };
    SaleProductModifySpecailComponent.prototype.ngOnChanges = function () {
    };
    SaleProductModifySpecailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    SaleProductModifySpecailComponent.prototype.attrAdd = function () {
        var _this = this;
        this.inValue.forEach(function (item) {
            _this.attrN.push(item.attrName);
        });
        if (this.attrName == '' || this.attrType == '' || this.attrValue == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '特殊属性填写不完整！' });
        }
        else {
            if (this.attrN.indexOf(this.attrName) == -1) {
                var lod1 = Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkNumber"])(null, this.attrValue);
                if (lod1 != null) {
                    this.loadd = lod1.checkNumber;
                }
                this.arrValue = this.attrValue.split('');
                if (this.attrType == '0' && this.loadd == true) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '属性取值为数据！' });
                    this.loadd = false;
                }
                else if (this.attrType == '0' && this.arrValue.length > 20) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '数据长度不可超过20！' });
                }
                else if (this.attrType == '2' && this.arrValue.length > 200) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '数文本长度不可超过200！' });
                }
                else {
                    var paramss = {};
                    this.inValue.push({
                        "attrName": this.attrName,
                        "attrType": this.attrType,
                        "attrValue": this.attrValue
                    });
                    paramss = {
                        displaed: false,
                        salet2: this.inValue,
                    };
                    this.outValue.emit(paramss);
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '属性名称重名' });
            }
        }
        this.attrN = [];
        this.attrName = '';
        this.attrValue = '';
        this.attrType = '';
    };
    SaleProductModifySpecailComponent.prototype.attrcanel = function () {
        var paramss = {
            displaed: false,
            salet2: this.inValue,
        };
        this.outValue.emit(paramss);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductModifySpecailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], SaleProductModifySpecailComponent.prototype, "outValue", void 0);
    SaleProductModifySpecailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'sale-product-modify-specail',
            template: __webpack_require__(/*! ./sale-product-modify-specail.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify-specail.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SaleProductModifySpecailComponent);
    return SaleProductModifySpecailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <p-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-radioButton name=\"addsite\" value=\"{{ri}}\" [(ngModel)]=\"website\"></p-radioButton>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"siteName\" header=\"渠道名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"channelId\" header=\"渠道编号\">\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button pButton type=\"button\" label=\"确认\" (click)=\"websitec()\"></button>\r\n            <!-- <button pButton type=\"button\" label=\"取消\" (click)=\"webcanel()\"></button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-button:first-child {\n  background: linear-gradient(#FFC107, #FFC107); }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1tb2RpZnkvc2FsZS1wcm9kdWN0LW1vZGlmeS13ZWJzaXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcc2FsZS1wcm9kdWN0LW1vZGlmeVxcc2FsZS1wcm9kdWN0LW1vZGlmeS13ZWJzaXRlXFxzYWxlLXByb2R1Y3QtbW9kaWZ5LXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSw2Q0FBNkMsRUFBQTs7QUFFakQ7RUFDSSxxQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9hdmFpbGFibGUtcHJvZHVjdC9zYWxlLXByb2R1Y3QtbW9kaWZ5L3NhbGUtcHJvZHVjdC1tb2RpZnktd2Vic2l0ZS9zYWxlLXByb2R1Y3QtbW9kaWZ5LXdlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLnRleHRfY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZDMTA3LCAjRkZDMTA3KTtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDozMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SaleProductModifyWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifyWebsiteComponent", function() { return SaleProductModifyWebsiteComponent; });
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaleProductModifyWebsiteComponent = /** @class */ (function () {
    function SaleProductModifyWebsiteComponent(productManageHttpService, commfunc, route) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.route = route;
        this.inValue = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //列表无数据
        this.special_attr = [];
        this.outValues = [];
    }
    SaleProductModifyWebsiteComponent.prototype.ngOnInit = function () {
        this.queryname();
    };
    SaleProductModifyWebsiteComponent.prototype.ngOnChanges = function () {
    };
    SaleProductModifyWebsiteComponent.prototype.getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };
    SaleProductModifyWebsiteComponent.prototype.deepClone = function (data) {
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.deepClone(data[key]);
            }
        }
        return obj;
    };
    SaleProductModifyWebsiteComponent.prototype.queryname = function () {
        var _this = this;
        this.productManageHttpService.queryChannel({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.inValue.forEach(function (item) {
                    data.channelList.forEach(function (key) {
                        if (item.channelId == key.value) {
                            _this.special_attr.push({ channelId: item.channelId, siteName: key.label });
                            _this.special_attr = _this.deepClone(_this.special_attr);
                        }
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
        // this.inValue.forEach(item => {
        //     let param = { webSiteId: item.channelId };
        //     this.productManageHttpService.webSiteDetail(param).subscribe(data => {
        //         if (data.returnCode.code == "success") {
        //             this.special_attr.push({ channelId: item.channelId, siteName: data.siteName });
        //             this.special_attr = this.deepClone(this.special_attr);
        //         } else {
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //         }
        //     }, error => {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        //     })
        // });
    };
    SaleProductModifyWebsiteComponent.prototype.websitec = function () {
        var _this = this;
        if (this.website == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '未选择站点！' });
        }
        else {
            this.inValue.forEach(function (itemse) {
                if (itemse.channelId == _this.special_attr[_this.website].channelId) {
                    var paramss = {};
                    _this.outValues.push({
                        'fileList': itemse.fileList,
                        'imageList': itemse.imageList,
                        'infoList': itemse.infoList
                    });
                    paramss = {
                        display: false,
                        outed: _this.outValues,
                    };
                    _this.outValue.emit(paramss);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductModifyWebsiteComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], SaleProductModifyWebsiteComponent.prototype, "outValue", void 0);
    SaleProductModifyWebsiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'sale-product-modify-website',
            template: __webpack_require__(/*! ./sale-product-modify-website.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify-website.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SaleProductModifyWebsiteComponent);
    return SaleProductModifyWebsiteComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-12\">\r\n            <ul class=\"ui-breadcrumb-new\">\r\n                <li class=\"active\">\r\n                    <a>\r\n                        <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n                </li>\r\n                <li>\r\n                    <a>产品管理</a>\r\n                </li>\r\n                <li>\r\n                    <a>可售产品管理</a>\r\n                </li>\r\n                <li>\r\n                    <a>可售产品修改</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"container ui-g module\">\r\n        <div class=\"ui-g-12 ui-md-12\" id=\"KK\">\r\n            <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 form_item\">\r\n            <div class=\"ui-g-12 ui-md-12 height  border\">\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='0'\">\r\n                    <form [formGroup]=\"userform\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                            <div class=\"ui-grid-col-2  form_item_label baseInfo\">\r\n                                <span>可售产品编号:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-4 baseInfo\">\r\n                                <input class=\"ui-inputtext-new\" style=\"width: 60%;\" disabled [(ngModel)]=\"product_num\" formControlName=\"product_num\" name=\"product_num\"\r\n                                    type=\"text\" pInputText>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2  form_item_label baseInfo\">\r\n                                <span appValidation>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-4 baseInfo\">\r\n                                <input class=\"ui-inputtext-new\" style=\"width: 60%;\" [(ngModel)]=\"product_name_value\" specialCharacters [rangeLength]=\"[0,20]\"\r\n                                    (change)=\"chongMIng()\" name=\"product_name_value\" formControlName=\"product_name_value\" type=\"text\"\r\n                                    pInputText *ngIf=\"fromStatus != '01'\">\r\n                                <input class=\"ui-inputtext-new\" disabled style=\"width: 60%;\" [(ngModel)]=\"product_name_value\" specialCharacters [rangeLength]=\"[0,20]\"\r\n                                    (change)=\"chongMIng()\" name=\"product_name_value\" formControlName=\"product_name_value\" type=\"text\"\r\n                                    pInputText *ngIf=\"fromStatus == '01'\">\r\n                                <div class=\"ui-message ui-messages-error\" *ngIf=\"!userform.controls['product_name_value'].valid&&userform.controls['product_name_value'].dirty\">\r\n                                    <div *ngIf=\"userform.controls['product_name_value'].errors.required\">\r\n                                        <span class=\"fa ui-icon-error\"></span>\r\n                                        产品名称不能为空！\r\n                                    </div>\r\n                                    <div *ngIf=\"userform.controls['product_name_value'].errors?.specialCharacters\">\r\n                                        <span class=\"fa ui-icon-error\"></span>\r\n                                        产品名称不能输入非法字符\r\n                                    </div>\r\n                                    <div *ngIf=\"userform.controls['product_name_value'].errors.rangeLength\">\r\n                                        <span class=\"fa ui-icon-error\"></span>\r\n                                        产品名称长度不能超过20位\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_item_label baseInfo\">\r\n                                <span appValidation>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-4 baseInfo\">\r\n                                <input class=\"ui-inputtext-new\" style=\"width: 60%;\" name=\"line_value1\" formControlName=\"line_value1\" [(ngModel)]=\"line_value1\"\r\n                                    disabled type=\"text\" pInputText>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_item_label baseInfo\">\r\n                                <span appValidation>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-4 baseInfo\">\r\n                                <input class=\"ui-inputtext-new\" style=\"width: 60%;\" name=\"group_value1\" formControlName=\"group_value1\" [(ngModel)]=\"group_value1\"\r\n                                    disabled type=\"text\" pInputText>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <div class=\"ui-grid-col-2 form_item_label baseInfo\">\r\n                                    <span appValidation>基础产品:</span>\r\n                                </div>\r\n                                <div class=\"ui-grid-col-4 baseInfo\">\r\n                                    <input class=\"ui-inputtext-new\" style=\"width: 60%;\" name=\"product_base_value1\" formControlName=\"product_base_value1\" [(ngModel)]=\"product_base_value1\"\r\n                                        disabled type=\"text\" pInputText>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"ui-g-12 ui-md-2 form_item_label baseInfo\">\r\n                                <span appValidation>归属法人编号</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-4 baseInfo\">\r\n                                <input class=\"ui-inputtext-new\"  style=\"width: 60%;\" name=\"partyId\" formControlName=\"partyId\" [(ngModel)]=\"partyId\" disabled type=\"text\" pInputText>\r\n                            </div> -->\r\n                            <!-- <div class=\"ui-g-12 ui-md-4 form_item_label\">\r\n                            <span appValidation>产品类型</span>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-8\">\r\n                            <input class=\"ui-inputtext-new\"  style=\"width: 60%;\" name=\"productTypeName\" formControlName=\"productTypeName\" [(ngModel)]=\"productTypeName\" disabled type=\"text\" pInputText>\r\n                        </div> -->\r\n                            <div class=\"ui-g-12 ui-md-2 form_item_label baseInfo\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-10 baseInfo\">\r\n                                <textarea class=\"ui-inputtextarea-new\" style=\"width: 84%;\" [(ngModel)]=\"product_content_value\" formControlName=\"product_content_value\"\r\n                                    name=\"product_content_value\" pInputTextarea maxlength=\"200\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='1'\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_name_value}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{line_value_h}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{group_value_h}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>基础产品:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_base_hs}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                                <span>{{product_content_value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\" *ngIf=\"vlaue1=='1'\">\r\n                        <p-tabView>\r\n                            <p-tabPanel header=\"通用信息\">\r\n                                <div class=\"ui-g\">\r\n                                    <div class=\"ui-g-12 ui-md-12\">\r\n                                        <form [formGroup]=\"userformDate\">\r\n                                            <div class=\"ui-g-12\">\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>引入日期:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <p-calendar styleClass=\"ui-calendar-new\" (onSelect)=\"refresh()\" name=\"introductionDate\" formControlName=\"introductionDate\"\r\n                                                        [(ngModel)]=\"introductionDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                                                        yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                                                        [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                                                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['introductionDate'].valid&&userformDate.controls['introductionDate'].dirty\">\r\n                                                        请填写引入日期！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>截至日期:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <p-calendar styleClass=\"ui-calendar-new\" name=\"releaseDate\" formControlName=\"releaseDate\" [(ngModel)]=\"releaseDate\" [monthNavigator]=\"true\"\r\n                                                        [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                                                        [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" [locale]=\"ch\"\r\n                                                        [minDate]=\"introductionDate\">\r\n                                                    </p-calendar>\r\n                                                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['releaseDate'].valid && userformDate.controls['releaseDate'].dirty\">\r\n                                                        请填写截至日期！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>产品币种:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <div style=\"width:60%;\">\r\n                                                        <p-dropdown styleClass=\"ui-dropdown-new\" name=\"productCurrency\" formControlName=\"productCurrency\" [options]=\"select_1\" [(ngModel)]=\"productCurrency\"></p-dropdown>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['productCurrency'].valid&&userformDate.controls['productCurrency'].dirty\">\r\n                                                        请选择产品币种！\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>表内表外:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <div style=\"width:60%;\">\r\n                                                        <p-dropdown styleClass=\"ui-dropdown-new\" name=\"inOut\" formControlName=\"inOut\" [options]=\"select_2\" [(ngModel)]=\"inOut\"></p-dropdown>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['inOut'].valid&&userformDate.controls['inOut'].dirty\">\r\n                                                        请选择表内表外！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span>CRM产品树编号:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <input style=\"width:60%;\" pInputText class=\"ui-inputtext-new\" name=\"crmValue\" formControlName=\"crmValue\" [(ngModel)]=\"crmValue\"\r\n                                                        type=\"text\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>业务品种编号:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <input class=\"ui-inputtext-new\" name=\"businessValue\" formControlName=\"businessValue\" [(ngModel)]=\"businessValue\" type=\"text\"\r\n                                                        style=\"width: 60%\" pInputText maxlength=\"10\">\r\n                                                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['businessValue'].valid&&userformDate.controls['businessValue'].dirty\">\r\n                                                        请填写业务品种编号！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span>子业务品种编号:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3\">\r\n                                                    <input class=\"ui-inputtext-new\" name=\"cbusinessValue\" formControlName=\"cbusinessValue\" [(ngModel)]=\"cbusinessValue\" type=\"text\"\r\n                                                        style=\"width: 60%\" pInputText>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>营销部门:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3 saled\">\r\n                                                    <div class=\"saleds\">\r\n                                                        <input disabled name=\"saleDepartment\" formControlName=\"saleDepartment\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"saleDepartment\"\r\n                                                            style=\"width:54%\">\r\n                                                        <button class=\"qbutton\" type=\"button\" (click)=\"sheMain()\">\r\n                                                            <span>...</span>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['saleDepartment'].valid&&userformDate.controls['saleDepartment'].dirty\">\r\n                                                        请选择营销部门！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>管理部门:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3 saled\">\r\n                                                    <div class=\"saleds\">\r\n                                                        <input disabled name=\"cfsaleDepartment\" formControlName=\"cfsaleDepartment\" type=\"text\" pInputText class=\"ui-inputtext-new\"\r\n                                                            [(ngModel)]=\"cfsaleDepartment\" style=\"width:54%\">\r\n                                                        <button class=\"qbutton\" type=\"button\" (click)=\"lveMain()\">\r\n                                                            <span>...</span>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['cfsaleDepartment'].valid&&userformDate.controls['cfsaleDepartment'].dirty\">\r\n                                                        请选择管理部门！\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-1 form_item_label\">\r\n                                                    <span appValidation>产品经理:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3 saled\">\r\n                                                    <div class=\"saleds\">\r\n                                                        <input disabled name=\"productManager\" formControlName=\"productManager\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"productManager\"\r\n                                                            style=\"width:54%\">\r\n                                                        <button class=\"qbutton\" type=\"button\" (click)=\"shelveMain2()\">\r\n                                                            <span>...</span>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['productManager'].valid&&userformDate.controls['productManager'].dirty\">\r\n                                                        请选择产品经理！\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"ui-g-12 ui-md-12 margin_add\">\r\n                                                <div class=\"ui-grid-col-1 form_item_label margin_add\">\r\n                                                    <span appValidation>销售人员岗位:</span>\r\n                                                </div>\r\n                                                <div class=\"ui-grid-col-3 saled\">\r\n                                                    <div class=\"saleds margin_add\">\r\n                                                        <input disabled name=\"saleUser\" formControlName=\"saleUser\" type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"saleUser\"\r\n                                                            style=\"width:54%\">\r\n                                                        <button class=\"qbutton\" type=\"button\" (click)=\"shelveMain()\">\r\n                                                            <span>...</span>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformDate.controls['saleUser'].valid&&userformDate.controls['saleUser'].dirty\">\r\n                                                        请选择销售人员岗位！\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </p-tabPanel>\r\n                            <p-tabPanel header=\"特殊属性\">\r\n                                <div class=\"ui-g\">\r\n                                    <div class=\"ui-g-12 ui-md-12\">\r\n                                        <div style=\"float:right;padding-right:1em;\">\r\n                                            <div style=\"width: 90px;display: inline-block;\">\r\n                                                <div class=\"ui-btn1-div\">\r\n                                                    <p class=\"place-div first\"></p>\r\n                                                    <p class=\"place-div last\"></p>\r\n                                                    <button pButton (click)=\"addAttr()\" type=\"button\" label=\"新增\" style=\"width: 60px;\"></button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"ui-g-12 ui-md-12\">\r\n                                            <u-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                                                <p-column [style]=\"{'text-align':'center'}\">\r\n                                                    <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n                                                        <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n                                                    </ng-template>\r\n                                                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                        <p-checkbox [(ngModel)]=\"choose_tr\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                                                    </ng-template>\r\n                                                </p-column>\r\n                                                <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                                                </p-column>\r\n                                                <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                        {{col.attrType|codeValuePie:temporary}}\r\n                                                    </ng-template>\r\n                                                </p-column>\r\n                                                <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性取值\">\r\n                                                </p-column>\r\n                                                <p-column [style]=\"{'text-align':'center'}\" field=\"\" header=\"操作\">\r\n                                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                        <!-- <div class=\"table-button\">\r\n                                                            <span class=\"tabelDeleteIco\" (click)=\"delAttr(col)\">删除</span>\r\n                                                        </div> -->\r\n                                                        <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"delAttr(col)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                                                    </ng-template>\r\n                                                </p-column>\r\n                                            </u-dataTable>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </p-tabPanel>\r\n                        </p-tabView>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='2'\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_name_value}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{line_value_h}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{group_value_h}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>基础产品:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_base_hs}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                                <span>{{product_content_value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <u-dataTable [value]=\"cars_3\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,30]\" emptyMessage=\"没有查找到数据\">\r\n                            <p-column [style]=\"{'text-align':'center','width':'80px'}\">\r\n                                <ng-template pTemplate=\"header\" selectionMode=\"multiple\">\r\n                                    <p-checkbox label=\"全选\" [(ngModel)]=\"choose_tr2All\" binary=\"false\" (click)=\"AllChoose_tr2()\"></p-checkbox>\r\n                                </ng-template>\r\n                                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                    <p-checkbox [(ngModel)]=\"choose_tr2\" value=\"{{ri}}\" (click)=\"Choose_tr2(ri)\" name=\"bb\"></p-checkbox>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureCategoryName\" header=\"组件名称\">\r\n                            </p-column>\r\n                            <p-column [style]=\"{'text-align':'center'}\" field=\"parentCategoryId\" header=\"组件描述\">\r\n                            </p-column>\r\n                        </u-dataTable>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='3'\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_name_value}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{line_value_h}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{group_value_h}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>基础产品:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_base_hs}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                                <span>{{product_content_value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g forcolor\">\r\n                            <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                                <span class=\"un_active\" *ngFor=\"let col of special_attr2 let i = index\" [ngClass]=\"{'active':showClass == col.productFeatureCategoryName}\"\r\n                                    (click)=\"dianji(i,col)\">\r\n                                    <b>{{col.productFeatureCategoryName}}</b>\r\n                                </span>\r\n                            </div>\r\n                            <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                                <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                                <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let col of special_attr2;let i = index\">\r\n                            <div class=\"ui-g\">\r\n                                <div class=\"ui-g-12 ui-md-12\" style=\"padding: 0;\" *ngIf=\"i==aIndex\">\r\n                                    <u-dataTable [value]=\"cars_attrbute\" emptyMessage=\"没有查找到数据\">\r\n                                        <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                                            <ng-template pTemplate=\"header\">\r\n                                                <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                                            </ng-template>\r\n                                            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                                            </ng-template>\r\n                                        </p-column>\r\n                                        <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                                        </p-column>\r\n                                        <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"description\" header=\"属性名称\">\r\n                                        </p-column>\r\n                                        <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                                            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                {{col.configLevel|codeValuePie:configLevel}}\r\n                                            </ng-template>\r\n                                        </p-column>\r\n                                        <p-column [style]=\"{'text-align':'center','width':'80px'}\">\r\n                                            <ng-template pTemplate=\"header\">\r\n                                                <label>全选</label>\r\n                                            </ng-template>\r\n                                            <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                <div *ngIf=\"item.featureType =='01'\">\r\n                                                    <div *ngIf=\"item.configLevel =='0'\">\r\n                                                        <p-checkbox [(ngModel)]=\"item['checkDate']\" disabled binary=\"false\"></p-checkbox>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"item.configLevel !='0'\">\r\n                                                        <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div *ngIf=\"item.featureType =='02'\">\r\n                                                </div>\r\n                                            </ng-template>\r\n                                        </p-column>\r\n                                        <p-column>\r\n                                            <ng-template pTemplate=\"header\">\r\n                                                <label>取值范围</label>\r\n                                            </ng-template>\r\n                                            <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                                <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                                                    <div *ngIf=\"item.configLevel =='0'\">\r\n                                                        <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                                                            <p-checkbox value=\"items.productFeatureId\" disabled [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" binary=\"true\"></p-checkbox>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"item.configLevel !='0'\">\r\n                                                        <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                                                            <p-checkbox value=\"items.productFeatureId\" [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                                                                binary=\"true\"></p-checkbox>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                                                    <div *ngIf=\"item.configLevel =='0'\">\r\n                                                        <div *ngFor=\"let items of item.productFeatureList\">\r\n                                                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                                                                <input type=\"text\" disabled [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                                                            </div>\r\n                                                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                                                                <input type=\"text\" disabled [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                                                                <input type=\"text\" disabled [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"item.configLevel !='0'\">\r\n                                                        <div *ngFor=\"let items of item.productFeatureList\">\r\n                                                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                                                                <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                                                                <span>({{items.min}} -- {{items.max}})</span>\r\n                                                            </div>\r\n                                                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                                                                <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                                                                <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                        </p-column>\r\n                                    </u-dataTable>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='4'\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_name_value}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{line_value_h}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{group_value_h}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>基础产品:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_base_hs}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                                <span>{{product_content_value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                                <h4 class=\"hcolor\">|可选功能列表</h4>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-12\" style=\"padding: 0\">\r\n                                <u-dataTable [style]=\"{'text-align':'center'}\" [value]=\"funList_left\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,30]\"\r\n                                emptyMessage=\"没有查找到数据\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\">\r\n                                        <ng-template pTemplate=\"header\">\r\n                                            <p-checkbox label=\"全选\" [(ngModel)]=\"leftListFunAll\" binary=\"false\" (click)=\"AllleftListFunZ()\"></p-checkbox>\r\n                                        </ng-template>\r\n                                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" (click)=\"AllleftListFunZ10(ri)\" name=\"bb\"></p-checkbox>\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <!-- <div class=\"ui-g-12 ui-md-12 text_right\">\r\n                                <div style=\"width: 90px;display: inline-block;\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"rightFunMovre()\" type=\"button\" label=\"选择\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_center\">\r\n                            <div class=\"ui-g-12 ui-md-12 sales\">\r\n                                <div style=\"width: 90px;display: inline-block;\" class=\"margin_top mbutton\">\r\n                                    <div class=\"ui-btn2-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton type=\"button\" label=\">>\" (click)=\"rightFunMovre()\" style=\"width:60px;\"></button>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div style=\"width: 90px;display: inline-block;\" class=\"margin_top mbutton\">\r\n                                    <div class=\"ui-btn2-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton type=\"button\" label=\"<<\" (click)=\"liftFunMovre()\" style=\"width:60px;\"></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                                <h4 class=\"hcolor\">|已选功能列表</h4>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-12\" style=\"padding: 0\">\r\n                                <u-dataTable [value]=\"funList_right\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,30]\" emptyMessage=\"没有查找到数据\"\r\n                                [style]=\"{'text-align':'center'}\">\r\n                                    <p-column [style]=\"{'text-align':'center'}\">\r\n                                        <ng-template pTemplate=\"header\">\r\n                                            <p-checkbox label=\"全选\" [(ngModel)]=\"rightListFunAll\" binary=\"false\" (click)=\"AllrightListFunZ()\"></p-checkbox>\r\n                                        </ng-template>\r\n                                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            <p-checkbox [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" (click)=\"AllrightListFunZ10(ri)\" name=\"cc\"></p-checkbox>\r\n                                        </ng-template>\r\n                                    </p-column>\r\n                                    <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                                    </p-column>\r\n                                </u-dataTable>\r\n                            </div>\r\n                            <!-- <div class=\"ui-g-12 ui-md-12 text_right\">\r\n                                .\r\n                                <div style=\"width: 90px;display: inline-block;\">\r\n                                    <div class=\"ui-btn1-div\">\r\n                                        <p class=\"place-div first\"></p>\r\n                                        <p class=\"place-div last\"></p>\r\n                                        <button pButton (click)=\"liftFunMovre()\" type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g\" *ngIf=\"vlaue1=='5'\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品名称:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_name_value}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品线:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{line_value_h}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>产品组:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{group_value_h}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row form_item\">\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>基础产品:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\">\r\n                                <span>{{product_base_hs}}</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2 form_label\">\r\n                                <span>详细描述:</span>\r\n                            </div>\r\n                            <div class=\"ui-grid-col-2\" style=\"word-wrap: break-word\">\r\n                                <span>{{product_content_value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-12 ui-md-12 box\">\r\n                                <div class=\"ui-g forcolor\">\r\n                                    <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                                        <span class=\"un_active\" *ngFor=\"let col of siteList let i = index\" [ngClass]=\"{'active':show == col.label}\" (click)=\"siteClick(col)\">\r\n                                            <b>{{col.label}}</b>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                                        <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                                        <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                                <p-tabView>\r\n                                    <p-tabPanel header=\"产品描述\">\r\n                                        <div class=\"ui-g\">\r\n                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>制度摘要:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"systemSummary\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>营销话术:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"marketScript\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>期限描述:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"termDesc\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>额度描述:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"limitDesc\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>同业产品信息:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"sameProductlnformation\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>其他:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <textarea class=\"ui-inputtextarea-new\" [(ngModel)]=\"others\" pInputTextarea style=\"width:70%\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>特色描述:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items1; let i = index\">\r\n                                                            <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value11\" style=\"width:56%\">\r\n                                                            <button class=\"qbuttons\" type=\"button\" (click)=\"doDetel1(i)\">删除</button>\r\n                                                            <button class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd1()\">添加</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>产品短语:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-4\">\r\n                                                        <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items3; let i = index\">\r\n                                                            <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value31\" style=\"width:56%\">\r\n                                                            <button class=\"qbuttons\" type=\"button\" (click)=\"doDetel3(i)\">删除</button>\r\n                                                            <button class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd3()\">添加</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12 padding\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>详情描述:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-10\">\r\n                                                        <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items2; let i = index\">\r\n                                                            <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey\" placeholder=\"请输入序号\" [style]=\"{'width':'15%'}\"></p-inputMask>\r\n                                                            <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value21\" placeholder=\"请输入标题\" style=\"width:25%\">\r\n                                                            <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.value22\" placeholder=\"请输入描述内容\" style=\"width:42%\">\r\n                                                            <button class=\"qbuttons\" type=\"button\" (click)=\"doDetel2(i)\">删除</button>\r\n                                                            <button class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd2()\">添加</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </p-tabPanel>\r\n                                    <p-tabPanel header=\"展示图片\">\r\n                                        <div class=\"ui-g\">\r\n                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                <div class=\"ui-g-12 ui-md-12\">\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>首页展示图片:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load1($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                                                    invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files10.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files10\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta1(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>列表展示图片:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load2($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                                                    invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files11.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files11\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta2(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12\">\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>产品说明书:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load3($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                                                    invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files12.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files12\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta3(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>产品购买协议:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load4($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                                                    invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files13.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files13\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta4(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12\">\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>列表视频:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load5($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"video/*\" invalidFileTypeMessageDetail=\"只能上传视频\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files14.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files14\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta5(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                                                        <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                            <span>详情展示图片:</span>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12 ui-md-10\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load6($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    multiple=\"multiple\" accept=\"image/*\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                                                    invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                                                    invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                                <div *ngIf=\"files15.length>0\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let item of files15\">{{item.name}}\r\n                                                                        <button pButton (click)=\"deleta6(item)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-12\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label tround\">\r\n                                                        <div class=\"bzdwidth bzswidth\">\r\n                                                            <span>详情描述:</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-10\">\r\n                                                        <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items12; let i = index\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load7($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    maxFileSize=\"10485760\" accept=\"image/*\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                                                    invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\"\r\n                                                                    invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                                                </p-fileUpload>\r\n                                                            </div>\r\n                                                            <div class=\"ui-g-12 ui-md-3\">\r\n                                                                <div style=\"margin:10px\" *ngFor=\"let items of item.list\">{{items.name}}\r\n                                                                    <button pButton (click)=\"deleta7(item,items)\" type=\"button\">删除</button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"ui-g-12 ui-md-3\">\r\n                                                                <button *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetails(i)\" label=\"删除\"></button>\r\n                                                            </div>\r\n                                                            <div class=\"ui-g-12 ui-md-3\">\r\n                                                                <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey1\" placeholder=\"请输入序号\" [style]=\"{'width':'35%'}\"></p-inputMask>\r\n                                                                <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetails\" placeholder=\"请输入描述内容\" style=\"width:59%\">\r\n                                                            </div>\r\n                                                            <div class=\"ui-g-12 ui-md-3\">\r\n                                                                <button pButton type=\"button\" (click)=\"doAddDetails()\" label=\"添加\"></button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </p-tabPanel>\r\n                                    <p-tabPanel header=\"文档手册\">\r\n                                        <div class=\"ui-g\">\r\n                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>详情描述:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-10\">\r\n                                                        <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files17; let i = index\">\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <p-fileUpload (onUpload)=\"load8($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                    maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                                                    invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                                                                </p-fileUpload>\r\n                                                            </div>\r\n                                                            <div class=\"ui-g-12 ui-md-12\">\r\n                                                                <div class=\"ui-g-12 ui-md-6\">\r\n                                                                    <div style=\"margin:10px\" *ngFor=\"let items of item.liste\">{{items.name}}\r\n                                                                        <button pButton (click)=\"deleta8(item,items)\" type=\"button\">删除</button>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"ui-g-12 ui-md-3\">\r\n                                                                    <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey2\" placeholder=\"请输入序号\"></p-inputMask>\r\n                                                                    <input type=\"text\" pInputText [(ngModel)]=\"item.valuedetailes\" placeholder=\"请输入描述内容\">\r\n                                                                </div>\r\n                                                                <div class=\"ui-g-12 ui-md-3\">\r\n                                                                    <button pButton type=\"button\" (click)=\"doAddDetailes()\" label=\"添加\"></button>\r\n                                                                    <button *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetailes(i)\" label=\"删除\"></button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                                                    <div class=\"ui-g-12 ui-md-2 form_item_label form\">\r\n                                                        <span>产品说明书:</span>\r\n                                                    </div>\r\n                                                    <div class=\"ui-g-12 ui-md-10\">\r\n                                                        <div class=\"ui-g-12 ui-md-12\">\r\n                                                            <p-fileUpload (onUpload)=\"load9($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\"\r\n                                                                multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                                                            </p-fileUpload>\r\n                                                            <div *ngIf=\"files18.length>0\">\r\n                                                                <div style=\"margin:10px\" *ngFor=\"let item of files18\">{{item.name}}\r\n                                                                    <button pButton (click)=\"deleta9(item)\" type=\"button\">删除</button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </p-tabPanel>\r\n                                </p-tabView>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center bt\" *ngIf=\"vlaue1=='5'\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <button pButton (click)=\"webcopy()\" type=\"button\" label=\"渠道包装复制\" class=\"uButton\" style=\"width: 125px;height: 30px;\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center bt\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"goBack()\" type=\"button\" label=\"取消\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='0'\">\r\n                <div class=\"ui-btn2-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"prev()\" type=\"button\" label=\"上一步\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='5'\">\r\n                <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"next()\" type=\"button\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1=='5'\">\r\n                <!-- <div class=\"ui-btn1-div\">\r\n                    <p class=\"place-div first\"></p>\r\n                    <p class=\"place-div last\"></p>\r\n                    <button pButton (click)=\"allServe()\" [disabled]='iscompele' type=\"button\" label=\"完成\" style=\"width: 60px;\"></button>\r\n                </div> -->\r\n                <button pButton (click)=\"allServe()\" [disabled]='iscompele' type=\"button\" label=\"完成\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 基本信息 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"overflow\">\r\n        <sale-product-config-Users [inValue]=\"updateValue\" *ngIf=\"showModel=='2'\" (outValue)=\"choicesaleUser($event)\"></sale-product-config-Users>\r\n        <sale-product-config-manager [inValue]=\"updateValue\" *ngIf=\"showModel=='4'\" (outValue)=\"choicemanager($event)\"></sale-product-config-manager>\r\n        <sale-product-modify-website [inValue]=\"updateValue\" *ngIf=\"showModel=='6'\" (outValue)=\"choicewebsite($event)\"></sale-product-modify-website>\r\n    </div>\r\n</p-dialog>\r\n<!-- 营销部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>营销部门</p-header>\r\n    <div class=\"overflow\">\r\n        <org-mutil-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-tree-component>\r\n    </div>\r\n</p-dialog>\r\n<!-- 管理部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplayB\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>管理部门</p-header>\r\n    <div class=\"overflow\">\r\n        <org-mutil-tree-component (selectAllValue)=\"treeCallB($event)\"></org-mutil-tree-component>\r\n    </div>\r\n</p-dialog>\r\n<!-- 属性弹出框-->\r\n<p-dialog *ngIf='displaed' [(visible)]=\"displaed\" modal=\"modal\" width=\"550\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitled}}\r\n    </p-header>\r\n    <div class=\"ui-g-12 ui-md-12 overflow\">\r\n        <sale-product-modify-specail [inValue]=\"updateValue\" *ngIf=\"showModel=='1'\" (outValue)=\"addspecailattr($event)\"></sale-product-modify-specail>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none;\n    margin: 10px 6px; }\n\n.container .forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n\n.form {\n  padding-top: 18px !important; }\n\n.tround {\n  padding-top: 28px !important; }\n\n.hcolor {\n  color: #19b0c8; }\n\n.form_label {\n  text-align: right;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.saled {\n  position: relative; }\n\n.saled .qbutton {\n    height: 30px;\n    border: 1px solid #bdbdbd;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #19b0c8;\n    margin: 0;\n    position: absolute; }\n\n.un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.active .dline {\n    width: 30%;\n    border-bottom: 2px solid #19b0c8;\n    margin: 8px 35% 0 35%; }\n\n.active :host /deep/ .form_item {\n    margin: 15px 0 !important; }\n\n.boxOne {\n  float: left;\n  width: 90%; }\n\n.boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.heOne {\n  height: 100%; }\n\n:host/deep/ .ui-tabview .ui-tabview-panel > .ui-g > .ui-g-12:first-child {\n  background: #fff; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(2) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(3) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(4) {\n  width: 17%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(5) {\n  width: 17%; }\n\ntextarea {\n  resize: none !important; }\n\n.bt > button {\n  border-radius: 5px;\n  margin: 0 25px;\n  width: 90px !important; }\n\n.baseInfo {\n  margin-bottom: 15px; }\n\n.timeBorder {\n  border-style: groove;\n  border-width: 1px;\n  width: 75%;\n  margin-left: 12%;\n  padding-bottom: 20px; }\n\n.specialBorder {\n  border-left-style: groove;\n  border-right-style: groove;\n  border-bottom-style: groove;\n  border-width: 1px;\n  width: 75%;\n  margin-left: 12%;\n  padding-bottom: 20px; }\n\n.qzfw {\n  text-align: left; }\n\n:host/deep/ .ui-widget-header .fa {\n  width: 10%;\n  line-height: 100%; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ .ui-calendar-new {\n  font-family: \"Microsoft YaHei\" !important;\n  min-width: 110px;\n  width: 60%; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC1tb2RpZnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXGF2YWlsYWJsZS1wcm9kdWN0XFxzYWxlLXByb2R1Y3QtbW9kaWZ5XFxzYWxlLXByb2R1Y3QtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBUDdCO0VBV1EscUJBQXFCLEVBQUE7O0FBWDdCO0VBY1EsZ0JBQWdCLEVBQUE7O0FBZHhCO0VBa0JZLFdBQVcsRUFBQTs7QUFsQnZCO0lBb0JnQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBOztBQXRCaEM7RUEyQlEseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFQbkI7SUFTUSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHFCQUFxQixFQUFBOztBQVg3QjtJQWNRLHlCQUF5QixFQUFBOztBQUlqQztFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWSxFQUFBOztBQUdmO0VBQ0csZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csVUFBVSxFQUFBOztBQUdiO0VBQ0csVUFBVSxFQUFBOztBQUdiO0VBQ0csVUFBVSxFQUFBOztBQUdiO0VBQ0csVUFBVSxFQUFBOztBQUdiO0VBQ0csVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0kseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUdwQjtFQUNHLDhCQUE4QixFQUFBOztBQUdqQztFQUNHLDhCQUE4QixFQUFBOztBQUdqQztFQUNHLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdiO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvYXZhaWxhYmxlLXByb2R1Y3Qvc2FsZS1wcm9kdWN0LW1vZGlmeS9zYWxlLXByb2R1Y3QtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVsX2JveCB1bCBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hcmdpbl90b3Age1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCA2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcmNvbG9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudHJvdW5kIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5oY29sb3Ige1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtX2xhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuc2FsZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC5kbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAzNSUgMCAzNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3hPbmUge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveFR3byB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlVHdvIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVPbmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctcGFuZWw+LnVpLWc+LnVpLWctMTI6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDQpIHtcclxuICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCg1KSB7XHJcbiAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnQ+YnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYXNlSW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGltZUJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGVjaWFsQm9yZGVyIHtcclxuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnF6Zncge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC51aS13aWRnZXQtaGVhZGVyIC5mYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyLW5ldyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlhSGVpXCIgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IC5hY3RpdmUge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IGxpIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXc6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SaleProductModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifyComponent", function() { return SaleProductModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/sale-product.bean */ "./src/app/pages/tzb/product-manage/available-product/bean/sale-product.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../workflow/activiti-work-flow/common/constant/validator.utils */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.utils.ts");
/* harmony import */ var _workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../workflow/activiti-work-flow/common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SaleProductModifyComponent = /** @class */ (function () {
    function SaleProductModifyComponent(productManageHttpService, commfunc, router, routerA, fb) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.routerA = routerA;
        this.fb = fb;
        this.detailkeynum = 0;
        // 特色描述
        this.obj = {
            value1: '',
            value2: ''
        };
        this.iscompele = false; //完成按钮
        this.marketDepartmentList = [];
        this.manageDepartmentList = [];
        this.productManagerList = [];
        this.salesPostList = [];
        this.updateValue = [];
        this.maskLayer = false;
        //岗位与部门
        this.vlaueOpen = 'open';
        this.carsold = []; //组件初始值
        this.special_attr3 = [];
        this.isOrNotDelete = '';
        this.salee = [];
        this.saleed = [];
        this.saledd = [];
        this.salee3 = [];
        this.salee4 = [];
        this.saledd1 = [];
        this.salee1 = [];
        this.saledd2 = [];
        this.saledd3 = [];
        this.saledd4 = [];
        this.saleDepartment = ""; //销售部门
        this.cfsaleDepartment = ""; //管理部门
        this.belong1 = [];
        this.belongg1 = [];
        this.belongs1 = [];
        this.detaillist = [];
        this.belongss1 = [];
        this.saleUser = ""; //销售人员角色
        this.introductionDate = null; //  引入日期
        this.releaseDate = null; //  截止日期
        this.files10 = [];
        this.files11 = [];
        this.files12 = [];
        this.files13 = [];
        this.files14 = [];
        this.files15 = [];
        this.files16 = [];
        this.ch = _workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //讲英文转化为中文
        this.files17 = [];
        this.files18 = [];
        this.display = false;
        this.displaed = false;
        this.displayd = false;
        this.upShow8 = true;
        this.upShow9 = true;
        this.fileList10 = []; //  首页展示图片文件列表
        this.fileList11 = []; //  列表展示图片
        this.fileList12 = []; //  产品说明书
        this.fileList13 = []; //  产品购买协议
        this.fileList14 = []; //  列表视频
        this.fileList15 = []; //  详情展示图片
        this.fileList16 = []; //  展示图片详情描述
        //  文档手册
        this.fileList17 = []; //  详情展示
        this.fileList18 = []; //  产品说明书
        this.crmValue = ''; //CRM产品树编号
        this.businessValue = ''; //业务品种编号
        this.cbusinessValue = ''; //子业务品种编号
        //  第一页
        this.orgTreeDisplay = false;
        this.orgTreeDisplayB = false;
        this.productNumBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_1__["productNumBean"];
        this.postsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_1__["PostsManageBean"]; //  可售产品 保存bean
        this.select_line = []; //  产品线下拉
        this.select_group = []; //  产品组下拉
        this.base_product = []; //  基础产品/产品类型  下拉
        this.line_value = {}; //  产品线下拉值
        this.line_value1 = ''; //  产品线下拉值
        this.group_value1 = ''; //  产品组下拉值
        this.product_name_value = ''; //  产品名称
        this.product_base_value = []; //  基础产品
        this.product_base_value1 = ''; //  基础产品
        this.product_base_arr = []; //  基础产品
        this.code = false; //  产品修改标识
        this.cars_4 = [];
        this.siteList = [];
        //  总页数
        this.total = 0;
        //  提示信息
        this.msgs = [];
        //  下拉菜单
        this.select_productTypeId = []; //  产品类型
        this.select_1 = []; //  默认下拉
        this.select_2 = []; //  默认下拉
        this.temporary = [];
        this.activeIndex = 0;
        //  特殊属性
        this.special_attr = [];
        this.special_attr2 = [];
        //  盛放用户选择的数据
        this.choose_tr = [];
        this.choose_tr2 = [];
        //  组件
        this.aIndex = 0;
        this.Index = 0;
        this.select_atr = []; //  属性选择
        //  选择数据
        this.chooseData = [];
        this.productFeatureArr = [];
        this.chooseData10 = [];
        this.checkBoxAll10 = false; //  大全选
        //  功能
        this.funList_left = []; //  左选择框
        this.funList_right = []; //  右选择框
        this.leftListFun = []; //  左列表
        this.rightListFun = []; //  右列表
        this.functionList = []; //  功能存储列表
        this.arrImage = []; //  图片暂存数组
        this.arrFile = []; //  文档暂存数组
        this.arrTxt = []; //  描述暂存数组
        this.items1 = [{ value11: ' ' }]; //  特色描述
        this.items2 = [{ value21: ' ', value22: ' ' }]; //  特色描述详情描述
        this.items3 = [{ value31: ' ' }]; //  产品短语
        //  items12: any = [{ valuedetails: '', list: [] }]// 图片详情描述
        this.value41Path = []; //  首页展示图片
        this.value51Path = []; //  列表展示图片
        this.value61Path = []; //  产品说明书
        this.value71Path = []; //  产品购买协议
        this.value81Path = []; //  列表视频
        this.value91Path = []; // 详情展示图片
        this.value101Path = []; // 展示图片详情描述
        this.value111Path = []; // 文档手册详情描述
        this.value112Path = []; // 文档手册详情描述
        this.systemSummary = ''; // 制度摘要
        this.marketScript = ''; // 营销话术
        this.termDesc = ''; // 期限描述
        this.limitDesc = ''; // 额度描述
        this.sameProductlnformation = ''; // 同业产品信息
        this.others = ''; // 其他
        this.specialed = [];
        // 回显
        this.keshou_obj = {};
        this.keshou_objS = {};
        this.specialeed = [];
        this.Featurement = [];
        this.check = 1; // 判断是否审批
        this.isShow1 = true;
        this.isShow2 = true;
        this.isShow3 = true;
        this.isShow4 = true;
        this.isShow5 = true;
        this.isShow6 = true;
        this.isShow7 = true;
        this.isShow8 = true;
        this.isShow9 = true;
        this.isCanToNext = [];
        // 右侧分页
        this.firsts = 1;
        this.totals = 0;
        this.pageSizes = 10;
        this.funList_rightList = [];
        //  初始化 获取 下载模板的路径
        this.introductionDate = null;
        this.releaseDate = null;
        this.userform = fb.group({
            'product_num': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'partyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'product_name_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'line_value1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'group_value1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'product_base_value1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            // 'productTypeName': new FormControl('', [Validators.required]),
            'product_content_value': [''],
        });
        this.userformDate = fb.group({
            introductionDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            releaseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            productCurrency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crmValue: [''],
            businessValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cbusinessValue: [''],
            saleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cfsaleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            productManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            saleUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.userform4 = fb.group({
            'attrName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'attrType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'attrValue': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
        });
        // 可售包装
        this.userform5 = fb.group({
            'systemSummary': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'marketScript': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'termDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'limitDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'sameProductlnformation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'others': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'value11': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'value21': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'value22': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
            'value31': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_workflow_activiti_work_flow_common_constant_validator_utils__WEBPACK_IMPORTED_MODULE_7__["checkSpecialCharacter"]]),
        });
        this.codeValues(); //调用方法，获取全部码值
        this.select_1 = this.code['select_1'];
        this.select_2 = this.code['select_2'];
        this.configLevel = this.code['configLevel'];
    }
    SaleProductModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerA.params.subscribe(function (data) {
            _this.fromStatus = data.fromStatus;
            _this.productIdValue = data.productId;
        });
        // 下拉菜单
        this.vlaue1 = 0;
        this.temporary = this.code['temporary'];
        this.items = [{
                label: '配置方式',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.vlaue1 = 0;
                }
            },
            {
                label: '基本信息',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.vlaue1 = 1;
                }
            },
            {
                label: '组件设置',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.vlaue1 = 2;
                }
            },
            {
                label: '取值设置',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.vlaue1 = 3;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 4;
                    _this.vlaue1 = 4;
                }
            },
            {
                label: '可售包装',
                command: function (event) {
                    _this.activeIndex = 5;
                    _this.vlaue1 = 5;
                }
            }];
        this.productIndex = 0;
        this.detailkeynum = 0;
        // 组件显示查询
        this.line_query();
        this.query_details();
        this.siteQuery();
    };
    //  可售产品文件上传路径查询
    SaleProductModifyComponent.prototype.querySimpleParamValue = function () {
        var _this = this;
        var param = {
            'paramName': 'pmcs_available_product_pack_path',
            'paramGroupId': 'pmcs_available_product_pack'
        };
        this.productManageHttpService.querySimpleParamValue(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                // this.UPLOAD = data.commonParam.paramValue;
                _this.UPLOAD = data.commonParam.paramValue + '/' + _this.product_num;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    SaleProductModifyComponent.prototype.refresh = function () {
        this.releaseDate = null;
    };
    //码值
    SaleProductModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 回显-可售详情查询
    SaleProductModifyComponent.prototype.query_details = function () {
        var _this = this;
        var param = { productId: this.productIdValue };
        this.productManageHttpService.getAvailableProductTZB(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.product_num = data.availableProduct.productId;
                _this.product_name_value = data.availableProduct.productName;
                _this.productCurrency = data.availableProduct.currency;
                _this.inOut = data.availableProduct.inOutTableMode;
                _this.crmValue = data.availableProduct.crmProductTreeCode;
                _this.businessValue = data.availableProduct.businessCode;
                _this.cbusinessValue = data.availableProduct.subBusinessCode;
                _this.marketDepartmentList = data.availableProduct.marketDepartmentList;
                var market_1 = '', manage_1 = '', product_1 = '', sales_1 = '';
                _this.marketDepartmentList.forEach(function (e) {
                    if (data.availableProduct.marketDepartmentList.length > 1) {
                        market_1 += e.marketDepartmentName + ',';
                    }
                    else {
                        market_1 = e.marketDepartmentName;
                    }
                });
                _this.saleDepartment = market_1;
                _this.manageDepartmentList = data.availableProduct.manageDepartmentList;
                _this.manageDepartmentList.forEach(function (e) {
                    if (data.availableProduct.manageDepartmentList.length > 1) {
                        manage_1 += e.manageDepartmentName + ',';
                    }
                    else {
                        manage_1 = e.manageDepartmentName;
                    }
                });
                _this.cfsaleDepartment = manage_1;
                _this.productManagerList = data.availableProduct.productManagerList;
                _this.productManagerList.forEach(function (e) {
                    if (data.availableProduct.productManagerList.length > 1) {
                        product_1 += e.productManagerName + ',';
                    }
                    else {
                        product_1 = e.productManagerName;
                    }
                });
                _this.productManager = product_1;
                _this.salesPostList = data.availableProduct.salesPostList;
                _this.salesPostList.forEach(function (e) {
                    if (data.availableProduct.salesPostList.length > 1) {
                        sales_1 += e.salesPostName + ',';
                    }
                    else {
                        sales_1 = e.salesPostName;
                    }
                });
                _this.saleUser = sales_1;
                _this.line_value = {
                    productCategoryId: data.availableProduct.productLineId,
                    categoryName: data.availableProduct.productLineName
                };
                _this.line_value1 = data.availableProduct.productLineName;
                _this.group_value = {
                    productCategoryId: data.availableProduct.productGroupId,
                    categoryName: data.availableProduct.productGroupName
                };
                _this.group_value1 = data.availableProduct.productGroupName;
                _this.product_base_value = {
                    parentId: data.availableProduct.productGroupId,
                    tplDsc: '',
                    tplId: data.availableProduct.productTemplateId,
                    tplName: data.availableProduct.productTemplateName,
                };
                _this.product_base_value1 = data.availableProduct.productTemplateName;
                _this.product_content_value = data.availableProduct.description;
                _this.productTypeName = '数字产品';
                //  第二步
                var introduct = data.availableProduct.introductionDate.replace(/-/g, "/");
                _this.introductionDate = new Date(introduct);
                var release = data.availableProduct.releaseDate.replace(/-/g, "/");
                _this.releaseDate = new Date(release);
                _this.product_name_value = data.availableProduct.productName;
                //  特殊属性
                _this.special_attr = data.productMsgs;
                //  组件设置
                var speciall_1 = [];
                data.productFeatureCategoryList.forEach(function (item, i) {
                    //  tslint:disable-next-line:max-line-length
                    speciall_1.push({ 'productFeatureCategoryName': item.productFeatureCategoryName, 'description': item.productFeatureCategoryName, 'productFeatureCategoryId': item.productFeatureCategoryId, 'productFeatureTypeList': item.productFeatureTypeList });
                });
                _this.cars_4 = speciall_1;
                speciall_1 = [];
                //  功能应用
                _this.funList_right = data.productFunctionList;
                //  包装 产品描述
                if (data.productContentList == '') {
                    _this.items1.push({ "value11": '' });
                    _this.items2.push({ "value21": '', "value22": '', 'detailkey': '' });
                    _this.items3.push({ "value31": '' });
                }
                else {
                    _this.detaillist = [];
                    data.productContentList.forEach(function (itenm) {
                        //展示图片  文档手册
                        _this.zujian_ist2 = itenm.productImageList;
                        _this.zujian_ist3 = itenm.productFileList;
                        _this.files10 = [];
                        _this.value41Path = [];
                        _this.files11 = [];
                        _this.value51Path = [];
                        _this.files12 = [];
                        _this.value61Path = [];
                        _this.files13 = [];
                        _this.value71Path = [];
                        _this.files14 = [];
                        _this.value81Path = [];
                        _this.files15 = [];
                        _this.value91Path = [];
                        _this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
                        _this.value101Path = [];
                        _this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
                        _this.value111Path = [];
                        _this.files18 = [];
                        _this.value112Path = [];
                        for (var j = 0; j < _this.zujian_ist2.length; j++) {
                            if (_this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                                var name_1 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files10.push({ "name": name_1[name_1.length - 1] });
                                _this.fileList10 = [];
                                _this.fileList10.push({
                                    "fileName": name_1[name_1.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList10.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "homeDisplayPictures";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value41Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'listImages') {
                                var name_2 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files11.push({ "name": name_2[name_2.length - 1] });
                                _this.fileList11 = [];
                                _this.fileList11.push({
                                    "fileName": name_2[name_2.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList11.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "listImages";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value51Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                                var name_3 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files12.push({ "name": name_3[name_3.length - 1] });
                                _this.fileList12 = [];
                                _this.fileList12.push({
                                    "fileName": name_3[name_3.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList12.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "listSpecification";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value61Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                                var name_4 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files13.push({ "name": name_4[name_4.length - 1] });
                                _this.fileList13 = [];
                                _this.fileList13.push({
                                    "fileName": name_4[name_4.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList13.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "listPurchasingContract";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value71Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'listVideo') {
                                var name_5 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files14.push({ "name": name_5[name_5.length - 1] });
                                _this.fileList14 = [];
                                _this.fileList14.push({
                                    "fileName": name_5[name_5.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList14.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "listVideo";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value81Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                                var name_6 = _this.zujian_ist2[j].objectInfo.split('/');
                                _this.files15.push({ "name": name_6[name_6.length - 1] });
                                _this.fileList15 = [];
                                _this.fileList15.push({
                                    "fileName": name_6[name_6.length - 1],
                                    "fileUrl": _this.zujian_ist2[j].objectInfo,
                                });
                                _this.fileList15.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "detailsDisplay";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value91Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist2[j].dataResourceName == 'productDetail') {
                                var name_7 = _this.zujian_ist2[j].objectInfo.split('/');
                                var names = _this.zujian_ist2[j].objectInfo.split(':');
                                _this.items12.push({ 'detailkey1': names[0], 'valuedetails': names[1], 'list': [{ "name": name_7[name_7.length - 1] }] });
                                _this.fileList16 = [];
                                _this.fileList16.push({
                                    "fileName": name_7[name_7.length - 1],
                                    "fileUrl": names[2],
                                });
                                _this.fileList16.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "productDetail";
                                    obj['imageName'] = item.fileName;
                                    obj['imagePath'] = item.fileUrl;
                                    _this.value101Path.push(obj);
                                });
                            }
                        }
                        if (_this.items12.length > 1) {
                            _this.items12.splice(0, 1);
                        }
                        for (var K = 0; K < _this.zujian_ist3.length; K++) {
                            if (_this.zujian_ist3[K].dataResourceName == 'productDetail') {
                                var name_8 = _this.zujian_ist3[K].objectInfo.split('/');
                                var names = _this.zujian_ist3[K].objectInfo.split(':');
                                _this.files17.push({ 'detailkey2': names[0], 'valuedetailes': names[1], 'liste': [{ "name": name_8[name_8.length - 1] }] });
                                _this.fileList17 = [];
                                _this.fileList17.push({
                                    "fileName": name_8[name_8.length - 1],
                                    "fileUrl": names[2],
                                });
                                _this.fileList17.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "productDetail";
                                    obj['fileName'] = item.fileName;
                                    obj['filePath'] = item.fileUrl;
                                    _this.value111Path.push(obj);
                                });
                            }
                            else if (_this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                                var name_9 = _this.zujian_ist3[K].objectInfo.split('/');
                                _this.files18.push({ "name": name_9[name_9.length - 1] });
                                _this.fileList18 = [];
                                _this.fileList18.push({
                                    "fileName": name_9[name_9.length - 1],
                                    "fileUrl": _this.zujian_ist3[K].objectInfo,
                                });
                                _this.fileList18.forEach(function (item) {
                                    var obj = {};
                                    obj['dataResourceName'] = "listSpecification";
                                    obj['fileName'] = item.fileName;
                                    obj['filePath'] = item.fileUrl;
                                    _this.value112Path.push(obj);
                                });
                            }
                        }
                        if (_this.files17.length > 1) {
                            _this.files17.splice(0, 1);
                        }
                        _this.Typeinex = 0;
                        _this.imgServe(); //图片、文档
                        _this.detaillist.push({ channelId: itenm.channelId, imageList: _this.arrImage, fileList: _this.arrFile, infoList: itenm.productTextList });
                    });
                    var detailnum_1 = 0;
                    _this.siteList = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](_this.siteList);
                    _this.detaillist.forEach(function (ement) {
                        _this.siteList.forEach(function (iten) {
                            if (ement.channelId == iten.webSiteId && iten.isOrNotUpdate == 'is') {
                                var sites = {
                                    siteName: iten.siteName,
                                    webSiteId: iten.webSiteId
                                };
                                _this.siteClick(sites);
                                detailnum_1++;
                            }
                        });
                    });
                    if (detailnum_1 == 0) {
                        _this.items1.push({ "value11": '' });
                        _this.items2.push({ "value21": '', "value22": '', 'detailkey': '' });
                        _this.items3.push({ "value31": '' });
                    }
                }
                _this.querySimpleParamValue();
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
    SaleProductModifyComponent.prototype.allServe = function () {
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        this.iscompele = true;
        this.dianji(0, this.special_attr2[0]);
        this.saleInfoSave(this.keshou_objS);
    };
    //  组件查询
    SaleProductModifyComponent.prototype.getBaseProductDetails = function (params) {
        var _this = this;
        this.productManageHttpService.getBaseProductDetails(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.choose_tr2All = false;
                _this.choose_tr2 = [];
                var choose_tr4_1 = [];
                data.productFeatureCategoryList.forEach(function (item, i) {
                    _this.cars_4.forEach(function (items) {
                        if (item.productFeatureCategoryId === items.productFeatureCategoryId) {
                            var k = void 0;
                            k = i.toString();
                            choose_tr4_1.push(k);
                        }
                    });
                });
                _this.choose_tr2 = choose_tr4_1;
                _this.maskLayer = false;
                console.log(_this.choose_tr2, 1111111111);
                _this.cars_3 = data.productFeatureCategoryList;
                _this.carsold = _this.deepClone(data.productFeatureCategoryList);
                if (_this.choose_tr2.length === _this.cars_3.length) {
                    _this.choose_tr2All = true;
                }
                _this.funList_left = data.productFunctionList;
                var arrlist_1 = [];
                _this.funList_left.forEach(function (items, i) {
                    _this.funList_right.forEach(function (item) {
                        if (items.productFunctionId === item.productFunctionId) {
                            arrlist_1.push(i);
                        }
                    });
                });
                arrlist_1.sort(function (a, b) { return b - a; });
                arrlist_1.forEach(function (item) {
                    _this.funList_left.splice(item, 1);
                });
                _this.total = data.total || data.productFunctionList.length;
                _this.totals = _this.funList_right.length;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    SaleProductModifyComponent.prototype.getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };
    SaleProductModifyComponent.prototype.deepClone = function (data) {
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.deepClone(data[key]);
            }
        }
        return obj;
    };
    //  判读是否上架
    SaleProductModifyComponent.prototype.checkout = function () {
        var _this = this;
        var params = {
            'productId': this.product_num,
        };
        //  上架
        this.productManageHttpService.productUpperFrameCheck(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.flag === 'Y') {
                    _this.check = 0;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'info', summary: '提示', detail: '可售产品已上架,无法修改' });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //  产品线下拉
    SaleProductModifyComponent.prototype.line_query = function () {
        var _this = this;
        this.productManageHttpService.productLinePull({}).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item;
                    _this.select_line.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //  产品组修改
    SaleProductModifyComponent.prototype.lineVelue = function () {
        this.select_group = [
            { label: '请先选择产品线', value: '' },
        ];
        var parmId = this.line_value.productCategoryId;
        this.group_query(parmId);
    };
    //  产品组下拉
    SaleProductModifyComponent.prototype.group_query = function (Item) {
        var _this = this;
        var parm = { productLineId: Item };
        this.productManageHttpService.productGroupPull(parm).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                data.productGroupList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item;
                    _this.select_group.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //  产品组修改
    SaleProductModifyComponent.prototype.groupChange = function () {
        var _this = this;
        //  查询基础产品id
        var params = {
            groupId: this.group_value.productCategoryId,
            productCategoryTypeId: 'T'
        };
        this.product_base_arr = [
            { label: '请先选择产品组', value: '' },
        ];
        this.productManageHttpService.pdGroupTemplateQuery(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var arr = [];
                data.groupTempList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.tplDsc;
                    obj['value'] = item;
                    _this.product_base_arr.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.Header.RetMsg });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //  特殊属性  添加
    SaleProductModifyComponent.prototype.attrAdd = function () {
        this.special_attr.push({
            'attrName': this.attrName,
            'attrType': this.attrType,
            'attrValue': this.attrValue
        });
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.special_attr);
        this.attrName = '';
        this.attrType = '';
        this.attrValue = '';
    };
    //  特殊属性  删除
    SaleProductModifyComponent.prototype.delAttr = function () {
        var _this = this;
        //  this.choose_tr.sort(function (a, b) { return b - a; });
        //  this.choose_tr.forEach(item => {
        //      this.special_attr.splice(item, 1);
        //  });
        //  this.special_attr = _.clone(this.special_attr);
        //  this.choose_tr = [];
        if (this.choose_tr.length === 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择属性' });
            return;
        }
        else {
            this.choose_tr.sort(function (a, b) { return b - a; });
            this.choose_tr.forEach(function (item) {
                _this.special_attr.splice(item, 1);
            });
            this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.special_attr);
            this.choose_tr = [];
        }
    };
    SaleProductModifyComponent.prototype.prev = function () {
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (this.fromStatus == '02') {
                if (this.activeIndex == 5) {
                    if (i < 2 - 1) {
                        contents[i]['style'].backgroundColor = '#71d071';
                    }
                    if (i == (2 - 1)) {
                        contents[i]['style'].backgroundColor = '#ffc107';
                    }
                }
                else {
                    if (i < this.activeIndex - 1) {
                        contents[i]['style'].backgroundColor = '#71d071';
                    }
                    if (i == (this.activeIndex - 1)) {
                        contents[i]['style'].backgroundColor = '#ffc107';
                    }
                }
            }
            else {
                if (i < this.activeIndex - 1) {
                    contents[i]['style'].backgroundColor = '#71d071';
                }
                if (i == (this.activeIndex - 1)) {
                    contents[i]['style'].backgroundColor = '#ffc107';
                }
            }
        }
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        if (this.activeIndex == 1) {
        }
        if (this.activeIndex == 2) {
            this.cars_4 = this.special_attr2;
            this.cars_4.forEach(function (iteme, e) {
                var choosei = [];
                iteme.productFeatureTypeList.forEach(function (items, i) {
                    if (items.checkBox10 == false || items.checkBox10 == undefined) {
                        choosei.push(i);
                    }
                    else {
                        var choosek_1 = [];
                        items.productFeatureList.forEach(function (item, k) {
                            if (item.checkBox == false) {
                                choosek_1.push(k);
                            }
                        });
                        choosek_1.sort(function (a, b) { return b - a; });
                        choosek_1.forEach(function (iten) {
                            items.productFeatureList.splice(iten, 1);
                        });
                    }
                });
                choosei.sort(function (a, b) { return b - a; });
                choosei.forEach(function (itens) {
                    iteme.productFeatureTypeList.splice(itens, 1);
                });
            });
            //默认参数
            var pd_param = {
                baseProductId: this.product_base_value.tplId
            };
            this.getBaseProductDetails(pd_param);
        }
        if (this.activeIndex == 4) {
            if (this.fromStatus == '02') {
                this.activeIndex = 1;
                this.vlaue1 = 1;
            }
        }
    };
    //可售产品保存、
    SaleProductModifyComponent.prototype.saleInfoSave = function (itemV) {
        var _this = this;
        this.productFeatureArr = [];
        for (var key in itemV) {
            itemV[key].forEach(function (item) {
                if (item.checkBox10 == true) {
                    if (item.featureType == '01') {
                        item.productFeatureList.forEach(function (items, i) {
                            if (item.configLevel == '0') {
                                var objA0 = {
                                    productFeatureId: items.productFeatureId,
                                    configLevel: item.configLevel,
                                    description: items.productFeatureDesc,
                                    productFeatureTypeId: items.productFeatureTypeId,
                                    productFeatureCategoryId: items.productFeatureCategoryId,
                                    valueType: items.valueType,
                                    max: items.max,
                                    min: items.min,
                                    def: items.def,
                                    inc: items.inc,
                                    productFeatureLocalCode: items.productFeatureLocalCode,
                                };
                                _this.productFeatureArr.push(objA0);
                            }
                            else {
                                if (items.checkBox) {
                                    var objA1 = {
                                        productFeatureId: items.productFeatureId,
                                        configLevel: item.configLevel,
                                        description: items.productFeatureDesc,
                                        productFeatureTypeId: items.productFeatureTypeId,
                                        productFeatureCategoryId: items.productFeatureCategoryId,
                                        valueType: items.valueType,
                                        max: items.max,
                                        min: items.min,
                                        def: items.def,
                                        inc: items.inc,
                                        productFeatureLocalCode: items.productFeatureLocalCode,
                                        displayFlag: item.displayFlag,
                                    };
                                    _this.productFeatureArr.push(objA1);
                                }
                            }
                        });
                    }
                    if (item.featureType == '02') {
                        var objB_1 = {};
                        item.productFeatureList.forEach(function (itemss, i) {
                            if (itemss.min != null) {
                                itemss.min = itemss.min.toString();
                            }
                            if (itemss.max != null) {
                                itemss.max = itemss.max.toString();
                            }
                            if (itemss.def != null) {
                                itemss.def = itemss.def.toString();
                            }
                            if (itemss.inc != null) {
                                itemss.inc = itemss.inc.toString();
                            }
                            if (itemss.valueType == '06') {
                                objB_1 = {
                                    productFeatureId: itemss.productFeatureId,
                                    configLevel: item.configLevel,
                                    description: itemss.productFeatureDesc,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    valueType: itemss.valueType,
                                    max: itemss.max,
                                    min: itemss.min,
                                    def: itemss.def,
                                    inc: itemss.inc,
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                };
                            }
                            else {
                                objB_1 = {
                                    productFeatureId: itemss.productFeatureId,
                                    configLevel: item.configLevel,
                                    description: itemss.productFeatureDesc,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    valueType: itemss.valueType,
                                    max: itemss.max,
                                    min: itemss.min,
                                    def: itemss.def,
                                    inc: itemss.inc,
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                };
                            }
                            _this.productFeatureArr.push(objB_1);
                        });
                    }
                }
            });
        }
        var site = {
            label: this.show,
            value: this.baozhuangid
        };
        this.siteClick(site);
        this.postsManageBean.description = this.product_content_value;
        this.postsManageBean.productContent = this.detaillist;
        this.postsManageBean.operationTemplateId = this.product_base_value.tplId; //基础产品id
        this.postsManageBean.productFeature = this.productFeatureArr;
        this.postsManageBean.productName = this.product_name_value; //产品名称
        //日期
        this.postsManageBean.introductionDate = this.commfunc.transDateN(this.introductionDate);
        this.postsManageBean.releaseDate = this.commfunc.transDateN(this.releaseDate);
        //特殊属性
        this.postsManageBean.productMsg = this.special_attr;
        this.postsManageBean.currency = this.productCurrency; //币种
        this.postsManageBean.inOutTableMode = this.inOut; //表内外
        this.postsManageBean.crmProductTreeCode = this.crmValue; //CRM产品树编号
        this.postsManageBean.businessCode = this.businessValue; //业务品种编号
        this.postsManageBean.subBusinessCode = this.cbusinessValue; //子业务种类编号
        this.postsManageBean.marketDepartmentList = this.marketDepartmentList; //营销部门
        this.postsManageBean.manageDepartmentList = this.manageDepartmentList; //管理部门
        this.postsManageBean.productManagerList = this.productManagerList; //产品经理
        this.postsManageBean.salesPostList = this.salesPostList; //销售人员岗位
        this.functionList = [];
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.postsManageBean.productId = this.product_num;
        this.postsManageBean.functionList = this.functionList;
        var params = { 'paramsMap': this.postsManageBean };
        this.productManageHttpService.updateAvailableProductInfo(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_1 = _this;
                setTimeout(function () {
                    this_1.router.navigate(['/pages/tzb/product-manage/available-product/sale-product-view']);
                    this.iscompele = false;
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
    SaleProductModifyComponent.prototype.copyFlag = function (item) {
        if (item == 'copyAdd') {
            item = '1';
        }
        else {
            item = '0';
        }
        return item;
    };
    SaleProductModifyComponent.prototype.next = function () {
        var _this = this;
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
        this.product_base_hs = this.product_base_value1;
        if (this.hasOwnProperty('group_value')) {
            this.line_value_h = this.line_value1;
        }
        if (this.hasOwnProperty('group_value')) {
            this.group_value_h = this.group_value1;
        }
        if (this.hasOwnProperty('product_type_value')) {
            this.product_type_h = this.group_value.categoryName;
        }
        if (this.activeIndex < 5 && this.activeIndex > 1) {
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
        }
        //判断第几步
        if (this.activeIndex === 0) {
            var exist_name = {
                categoryName: this.product_name_value,
                categoryId: this.product_num,
                productCategoryTypeId: 'A',
            };
            this.productManageHttpService.queryNameIsNotExist(exist_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNot == "is") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "可售产品名称重复" });
                    }
                    else if (data.isOrNot == "not") {
                        _this.maskLayer = true;
                        var redo_name = {
                            xxId: _this.product_num,
                            name: _this.product_name_value,
                            type: 'AvailableProduct'
                        };
                        // this.productManageHttpService.checkBeforeUpdate(redo_name).subscribe(data => {
                        //     if (data.returnCode.code == "success") {
                        //         if (data.isOrNotUpdate != "is") {
                        //             this.msgs = [];
                        //             this.msgs.push({ severity: 'error', summary: '提示', detail: data.retDesc + ',不允许修改' });
                        //         } else {
                        _this.activeIndex = _this.activeIndex + 1;
                        _this.vlaue1 = _this.activeIndex;
                        // 提前调用接口
                        var pd_param = {
                            baseProductId: _this.product_base_value.tplId
                        };
                        _this.getBaseProductDetails(pd_param);
                        // this.isOrNotDelete = data.isOrNotDelete;
                        //         }
                        //     } else {
                        //         this.msgs = [];
                        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                        //     }
                        // }, error => {
                        //     this.msgs = [];
                        //     this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
                        // })
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
        }
        if (this.activeIndex === 1) {
            // 通用信息验证
            for (var i in this.userformDate.controls) {
                this.userformDate.controls[i].markAsDirty();
            }
            //处理是否提交通用信息
            for (var i in this.userformDate.controls) {
                if (!this.userformDate.controls[i].valid) {
                    return;
                }
            }
            if (this.fromStatus == '02') {
                this.activeIndex = 5;
                this.vlaue1 = 5;
            }
            else {
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
            }
        }
        if (this.activeIndex === 2) {
            this.activeIndex = 2;
            this.vlaue1 = 2;
        }
        if (this.activeIndex === 3 || (this.fromStatus == '02' && this.activeIndex === 5)) {
            console.log(this.choose_tr2, 2222222);
            if (this.choose_tr2.length == 0) {
                this.activeIndex = 2;
                this.vlaue1 = 2;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件不能为空' });
                return;
            }
            this.special_attr2 = [];
            this.choose_tr2.forEach(function (item) {
                _this.special_attr2.push(_this.cars_3[item]);
            });
            // 默认
            this.special_attr2.forEach(function (itemss, k) {
                _this.cars_4.forEach(function (items) {
                    _this.specialed.push(items.productFeatureCategoryId);
                    if (itemss.productFeatureCategoryId == items.productFeatureCategoryId) {
                        itemss.productFeatureTypeList.forEach(function (item, i) {
                            items.productFeatureTypeList.forEach(function (element) {
                                _this.specialeed.push(element.productFeatureTypeId);
                                if (item.productFeatureTypeId == element.productFeatureTypeId) {
                                    item.checkBox10 = true;
                                    element.productFeatureList.forEach(function (ement) {
                                        _this.Featurement.push(ement.productFeatureId);
                                    });
                                    if (_this.Featurement.length == 0) {
                                        item.productFeatureList.forEach(function (ittem) {
                                            ittem.checkBox = false;
                                        });
                                    }
                                    else {
                                        item.productFeatureList.forEach(function (ittem) {
                                            if (_this.Featurement.indexOf(ittem.productFeatureId) >= 0) {
                                                ittem.checkBox = true;
                                            }
                                            else {
                                                ittem.checkBox = false;
                                            }
                                        });
                                    }
                                    if (element.productFeatureList.length == item.productFeatureList.length) {
                                        item['checkDate'] = true;
                                    }
                                    else {
                                        item['checkDate'] = false;
                                    }
                                    item.configLevel = element.configLevel;
                                    item.featureType = element.featureType;
                                    item.displayFlag = element.displayFlag;
                                    if (item.configLevel != 0) {
                                        item.productFeatureList.forEach(function (ittem) {
                                            element.productFeatureList.forEach(function (elemen) {
                                                ittem.def = elemen.def;
                                                ittem.inc = elemen.inc;
                                                ittem.max = elemen.max;
                                                ittem.min = elemen.min;
                                            });
                                        });
                                    }
                                    _this.Featurement = [];
                                }
                            });
                        });
                        itemss.productFeatureTypeList.forEach(function (item, i) {
                            if (_this.specialeed.indexOf(item.productFeatureTypeId) == -1) {
                                item['checkDate'] = true;
                                if (!item.displayFlag || item.displayFlag == '' || item.displayFlag == undefined) {
                                    item.displayFlag = '2';
                                }
                                item.productFeatureList.forEach(function (elemd) {
                                    elemd.checkBox = true;
                                });
                            }
                        });
                        _this.specialeed = [];
                    }
                });
            });
            this.special_attr2.forEach(function (itemee, k) {
                if (_this.specialed.indexOf(itemee.productFeatureCategoryId) == -1) {
                    itemee.productFeatureTypeList.forEach(function (iteme) {
                        iteme['checkDate'] = true;
                        if (!iteme.displayFlag || iteme.displayFlag == '' || iteme.displayFlag == undefined) {
                            iteme.displayFlag = '2';
                        }
                        iteme.productFeatureList.forEach(function (elem) {
                            elem.checkBox = true;
                        });
                    });
                }
            });
            this.specialed = [];
            this.specialeed = [];
            this.special_attr2.forEach(function (itemed) {
                _this.item_id = itemed.productFeatureCategoryId;
                _this.keshou_obj[_this.item_id] = [];
                _this.keshou_objS[_this.item_id] = [];
                itemed.productFeatureTypeList.forEach(function (ement, i) {
                    if (ement.checkBox10 == true) {
                        _this.keshou_objS[_this.item_id].push(ement);
                        _this.keshou_obj[_this.item_id].push(i);
                    }
                });
            });
            this.dianji(0, this.special_attr2[0]);
        }
        if (this.activeIndex === 4) {
            this.special_attr2.forEach(function (items, k) {
                var count = 0;
                items.productFeatureTypeList.forEach(function (item) {
                    var countt = 0;
                    var count1 = 0;
                    var count2 = 0;
                    var count3 = 0;
                    var count4 = 0;
                    var countt1 = 0;
                    var countt2 = 0;
                    if (item.checkBox10 == true) {
                        count++;
                        if (item.configLevel != 0) {
                            var productdef_1 = '';
                            var productdef1_1 = '';
                            var productdeff_1 = '';
                            var productmax_1 = '';
                            var productmin_1 = '';
                            var productmaxf_1 = '';
                            var producteid_1 = '';
                            if (item.configLevel == '1' && item.featureType == '01') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.checkBox == true) {
                                        countt++;
                                    }
                                });
                                if (countt == 0 || countt > 1) {
                                    _this.activeIndex = 3;
                                    _this.vlaue1 = _this.activeIndex;
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + '可售级不能多选或不选！' });
                                    _this.dianji(k, _this.special_attr2[k]);
                                    return;
                                }
                            }
                            if (item.configLevel == '2' && item.featureType == '01') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.checkBox == true) {
                                        countt1++;
                                    }
                                });
                                if (countt1 == 0) {
                                    _this.activeIndex = 3;
                                    _this.vlaue1 = _this.activeIndex;
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + '客户级不可不选！' });
                                    _this.dianji(k, _this.special_attr2[k]);
                                    return;
                                }
                            }
                            if (item.featureType == '02') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.valueType == '05' || itemed.valueType == '06') {
                                        itemed.min = '';
                                        itemed.max = '';
                                        if (itemed.def == '') {
                                            count1++;
                                            productdef_1 = item.productFeatureTypeId;
                                        }
                                        else {
                                            _this.carsold.forEach(function (itemse) {
                                                if (itemse.productFeatureCategoryId == items.productFeatureCategoryId) {
                                                    itemse.productFeatureTypeList.forEach(function (itemsed) {
                                                        if (itemsed.productFeatureTypeId == item.productFeatureTypeId) {
                                                            var minn = parseInt(itemsed.productFeatureList[0].min);
                                                            var maxx = parseInt(itemsed.productFeatureList[0].max);
                                                            var def = parseInt(itemed.def);
                                                            if (def > maxx || minn > def) {
                                                                countt2++;
                                                                productdef1_1 = item.productFeatureTypeId;
                                                                productdeff_1 = minn + "--" + maxx;
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                    if (itemed.valueType != '05' && itemed.valueType != '06') {
                                        if (itemed.max == '') {
                                            count2++;
                                            productmax_1 = item.productFeatureTypeId;
                                        }
                                        if (itemed.min == '') {
                                            count3++;
                                            productmin_1 = item.productFeatureTypeId;
                                        }
                                        _this.carsold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == items.productFeatureCategoryId) {
                                                itemse.productFeatureTypeList.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == item.productFeatureTypeId) {
                                                        var mine = parseInt(itemsed.productFeatureList[0].min);
                                                        var maxe = parseInt(itemsed.productFeatureList[0].max);
                                                        var min = parseInt(itemed.min);
                                                        var max = parseInt(itemed.max);
                                                        if (mine > min || max > maxe || min > max) {
                                                            count4++;
                                                            producteid_1 = item.productFeatureTypeId;
                                                            productmaxf_1 = mine + "--" + maxe;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            if (count1 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef_1 + '取值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (countt2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef1_1 + '取值范围为' + productdeff_1 });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmax_1 + '最大值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count3 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmin_1 + '最小值不可为空！' });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                            if (count4 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: producteid_1 + '取值范围为' + productmaxf_1 });
                                _this.dianji(k, _this.special_attr2[k]);
                                return;
                            }
                        }
                    }
                });
                if (count == 0) {
                    _this.activeIndex = 3;
                    _this.vlaue1 = _this.activeIndex;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '属性不能为空' });
                    _this.dianji(k, _this.special_attr2[k]);
                }
            });
        }
        if (this.activeIndex === 5) { //组件配置信息的保存
            if (this.funList_right.length == 0) {
                this.activeIndex = 4;
                this.vlaue1 = 4;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '功能应用不能为空' });
            }
            else {
                this.startp = '0';
                var site = {
                    label: this.siteList[0].label,
                    value: this.siteList[0].value
                };
                this.siteClick(site);
            }
        }
        var this_ = this;
        setTimeout(function () {
            var kk = document.getElementById('KK');
            var contents = kk.getElementsByClassName('ui-steps-number');
            for (var i = 0; i < contents.length; i++) {
                contents[i]['style'].backgroundColor = '#757575';
                if (i <= this_.activeIndex - 1) {
                    contents[i]['style'].backgroundColor = '#71d071';
                }
                if (i == (this_.activeIndex)) {
                    contents[i]['style'].backgroundColor = '#ffc107';
                }
            }
        }, 200);
    };
    SaleProductModifyComponent.prototype.changeValueds = function (i, item) {
        item.checkBox10 = true;
        this.checkBoxClick10(i, item);
    };
    //站点复制
    SaleProductModifyComponent.prototype.webcopy = function () {
        var _this = this;
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        var site = {
            label: this.show,
            value: this.baozhuangid
        };
        this.siteClick(site);
        var copylist = [];
        this.detaillist.forEach(function (iten) {
            var infos = 0;
            iten.infoList.forEach(function (item) {
                if (item.objectInfo == '') {
                    infos++;
                }
            });
            // if (iten.fileList != [] && iten.imageList != [] && infos != 9) {
            if (iten.channelId != _this.baozhuangid) {
                copylist.push(iten);
            }
            // }
        });
        this.display = true;
        this.headerTitle = '渠道包装复制';
        this.showModel = '6';
        this.updateValue = copylist;
    };
    //站点复制回调
    SaleProductModifyComponent.prototype.choicewebsite = function (parame) {
        var _this = this;
        this.display = parame.display;
        this.items1 = [];
        this.items2 = [];
        this.items3 = [];
        parame.outed[0].infoList.forEach(function (itens, j) {
            if (itens.dataResourceName == 'systemSummary') {
                _this.systemSummary = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'marketScript') {
                _this.marketScript = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'termDesc') {
                _this.termDesc = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'limitDesc') {
                _this.limitDesc = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'sameProductlnformation') {
                _this.sameProductlnformation = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'others') {
                _this.others = itens.objectInfo;
            }
            else if (itens.dataResourceName == 'listFeature') {
                _this.Feature = itens.objectInfo.split(',');
                for (var i = 0; i < _this.Feature.length; i++) {
                    _this.items1.push({ "value11": _this.Feature[i] });
                }
            }
            else if (itens.dataResourceName == 'productDetail') {
                _this.Detail = itens.objectInfo.split(',');
                for (var d = 0; d < _this.Detail.length; d++) {
                    _this.Detail2 = _this.Detail[d].split(':');
                    _this.items2.push({ "value21": _this.Detail2[1], "value22": _this.Detail2[2], 'detailkey': _this.Detail2[0] });
                }
            }
            else if (itens.dataResourceName == 'productPhra') {
                _this.Phra = itens.objectInfo.split(',');
                for (var i = 0; i < _this.Phra.length; i++) {
                    _this.items3.push({ "value31": _this.Phra[i] });
                }
            }
        });
        this.zujian_ist2 = parame.outed[0].imageList;
        this.zujian_ist3 = parame.outed[0].fileList;
        this.files10 = [];
        this.value41Path = [];
        this.files11 = [];
        this.value51Path = [];
        this.files12 = [];
        this.value61Path = [];
        this.files13 = [];
        this.value71Path = [];
        this.files14 = [];
        this.value81Path = [];
        this.files15 = [];
        this.value91Path = [];
        this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
        this.value101Path = [];
        this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
        this.value111Path = [];
        this.files18 = [];
        this.value112Path = [];
        for (var j = 0; j < this.zujian_ist2.length; j++) {
            if (this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                this.files10.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList10 = [];
                this.fileList10.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList10.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "homeDisplayPictures";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value41Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listImages') {
                this.files11.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList11 = [];
                this.fileList11.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList11.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listImages";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value51Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                this.files12.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList12 = [];
                this.fileList12.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList12.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listSpecification";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value61Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                this.files13.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList13 = [];
                this.fileList13.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList13.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listPurchasingContract";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value71Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'listVideo') {
                this.files14.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList14 = [];
                this.fileList14.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList14.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listVideo";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value81Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                this.files15.push({ "name": this.zujian_ist2[j].imageName.split('_')[1] });
                this.fileList15 = [];
                this.fileList15.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath,
                });
                this.fileList15.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "detailsDisplay";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value91Path.push(obj);
                });
            }
            else if (this.zujian_ist2[j].dataResourceName == 'productDetail') {
                this.items12.push({ 'detailkey1': this.zujian_ist2[j].imagePath.split(':')[0], 'valuedetails': this.zujian_ist2[j].imagePath.split(':')[1], 'list': [{ "name": this.zujian_ist2[j].imageName.split('_')[1] }] });
                this.fileList16 = [];
                this.fileList16.push({
                    "fileName": this.zujian_ist2[j].imageName,
                    "fileUrl": this.zujian_ist2[j].imagePath.split(':')[2],
                });
                this.fileList16.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "productDetail";
                    obj['imageName'] = item.fileName;
                    obj['imagePath'] = item.fileUrl;
                    _this.value101Path.push(obj);
                });
            }
        }
        if (this.items12.length > 1) {
            this.items12.splice(0, 1);
        }
        for (var K = 0; K < this.zujian_ist3.length; K++) {
            if (this.zujian_ist3[K].dataResourceName == 'productDetail') {
                this.files17.push({ 'detailkey2': this.zujian_ist3[K].filePath.split(':')[0], 'valuedetailes': this.zujian_ist3[K].filePath.split(':')[1], 'liste': [{ "name": this.zujian_ist3[K].fileName.split('_')[1] }] });
                this.fileList17 = [];
                this.fileList17.push({
                    "fileName": this.zujian_ist3[K].fileName,
                    "fileUrl": this.zujian_ist3[K].filePath.split(':')[2],
                });
                this.fileList17.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "productDetail";
                    obj['fileName'] = item.fileName;
                    obj['filePath'] = item.fileUrl;
                    _this.value111Path.push(obj);
                });
            }
            else if (this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                this.files18.push({ "name": this.zujian_ist3[K].fileName.split('_')[1] });
                this.fileList18 = [];
                this.fileList18.push({
                    "fileName": this.zujian_ist3[K].fileName,
                    "fileUrl": this.zujian_ist3[K].filePath,
                });
                this.fileList18.forEach(function (item) {
                    var obj = {};
                    obj['dataResourceName'] = "listSpecification";
                    obj['fileName'] = item.fileName;
                    obj['filePath'] = item.fileUrl;
                    _this.value112Path.push(obj);
                });
            }
        }
        if (this.files17.length > 1) {
            this.files17.splice(0, 1);
        }
    };
    //  第二步的特殊属性
    SaleProductModifyComponent.prototype.onTabChange = function (event) {
        this.productIndex = event.index;
    };
    //  点击组件属性查看
    // dianji(i, item) {
    //     this.showClass = item.productFeatureCategoryName; //  所选组件
    //     this.checkBoxAll10 = false;
    //     const arrayN = [];
    //     this.zujianId = item.productFeatureCategoryId; //  点击之后的组件id
    //     this.aIndex = i;
    //     const pram = {};
    //     //  存值
    //     if (!this.keshou_obj.hasOwnProperty(item.productFeatureCategoryId)) {
    //         this.keshou_obj[item.productFeatureCategoryId] = [];
    //     }
    //     if (!this.keshou_objS.hasOwnProperty(item.productFeatureCategoryId)) {
    //         this.keshou_objS[item.productFeatureCategoryId] = [];
    //     }
    //     // tslint:disable-next-line:no-shadowed-variable
    //     debugger
    //     this.select_atr.forEach((item) => {
    //         const stu = this.keshou_obj[this.item_id].some(item2 => {
    //             return item2 === item;
    //         });
    //         if (!stu) {
    //             this.keshou_objS[this.item_id].push(this.cars_attrbute[item]);
    //             this.keshou_obj[this.item_id].push(item);
    //         }
    //     });
    //     console.log(this.keshou_obj);
    //     this.item_id = item.productFeatureCategoryId;
    //     this.select_atr = [];
    //     this.cars_attrbute = this.special_attr2[i].productFeatureTypeList;
    //     //  //  回显
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.cars_attrbute.forEach((item, i) => {
    //         this.keshou_objS[this.zujianId].forEach((item2, j) => {
    //             if (item2.productFeatureTypeId === item.productFeatureTypeId) {
    //                 this.cars_attrbute[i] = item2;
    //             }
    //         });
    //     });
    //     console.log(this.cars_attrbute);
    // }
    SaleProductModifyComponent.prototype.dianji = function (i, item) {
        var _this = this;
        this.showClass = item.description; //所选组件
        this.checkBoxAll10 = false;
        var arrayN = [];
        this.zujianId = item.productFeatureCategoryId; //点击之后的组件id
        this.aIndex = i;
        var pram = {};
        // 存值
        if (!this.keshou_obj.hasOwnProperty(item.productFeatureCategoryId)) {
            this.keshou_obj[item.productFeatureCategoryId] = [];
        }
        if (!this.keshou_objS.hasOwnProperty(item.productFeatureCategoryId)) {
            this.keshou_objS[item.productFeatureCategoryId] = [];
        }
        this.select_atr.forEach(function (item) {
            var stu = _this.keshou_obj[_this.item_id].some(function (item2) {
                return item2 == item;
            });
            if (!stu) {
                _this.keshou_objS[_this.item_id].push(_this.cars_attrbute[item]);
                _this.keshou_obj[_this.item_id].push(item);
            }
        });
        this.item_id = item.productFeatureCategoryId;
        this.select_atr = [];
        this.cars_attrbute = this.special_attr2[i].productFeatureTypeList;
        // 回显
        this.cars_attrbute.forEach(function (item, i) {
            _this.keshou_objS[_this.zujianId].forEach(function (item2, j) {
                if (item2.productFeatureTypeId == item.productFeatureTypeId) {
                    _this.cars_attrbute[i] = item2;
                }
            });
        });
        var aka = 0;
        this.cars_attrbute.forEach(function (item) {
            if (!item.checkBox10) {
                aka++;
            }
        });
        if (aka == 0) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
        this.carsold.forEach(function (itemse) {
            if (itemse.productFeatureCategoryId == _this.special_attr2[i].productFeatureCategoryId) {
                itemse.productFeatureTypeList.forEach(function (itemsed) {
                    _this.cars_attrbute.forEach(function (itemses) {
                        if (itemsed.productFeatureTypeId == itemses.productFeatureTypeId) {
                            if (itemses.configLevel != '0' && (itemses.productFeatureList[0].valueType == '05' || itemses.productFeatureList[0].valueType == '06')) {
                                itemses.productFeatureList[0].min = itemsed.productFeatureList[0].min;
                                itemses.productFeatureList[0].max = itemsed.productFeatureList[0].max;
                            }
                        }
                    });
                });
            }
        });
    };
    //  多行列表全选按钮
    SaleProductModifyComponent.prototype.checkBoxAllClick10 = function () {
        this.select_atr = [];
        for (var i = 0; i < this.cars_attrbute.length; i++) {
            if (this.checkBoxAll10 === true) {
                this.cars_attrbute[i].checkBox10 = true;
                this.chooseData10.push(this.cars_attrbute[i]);
                this.select_atr.push(i);
            }
            else {
                this.chooseData10 = [];
                this.select_atr = [];
                this.cars_attrbute[i].checkBox10 = false;
            }
        }
    };
    SaleProductModifyComponent.prototype.siteQuery = function () {
        var _this = this;
        this.productManageHttpService.queryChannel({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.channelList;
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
    SaleProductModifyComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    SaleProductModifyComponent.prototype.siteClick = function (col) {
        var _this = this;
        for (var key = 0; key < this.siteList.length; key++) {
            if (this.siteList[key].label == this.show) {
                for (var i = 0; i < this.items12.length; i++) {
                    if (this.items12[i].list.length > 0 && (!this.items12[i].valuedetails || !this.items12[i].detailkey1 || this.items12[i].detailkey1 == '' || this.items12[i].valuedetails == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '展示图片-详情描述未填完整!' });
                        return;
                    }
                }
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].liste.length > 0 && (!this.files17[i].valuedetailes || !this.files17[i].detailkey2 || this.files17[i].detailkey2 == '' || this.files17[i].valuedetailes == '')) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文档手册-详情描述未填完整!' });
                        return;
                    }
                }
            }
        }
        if (this.startp == '1') {
            //存值
            var detailid_1 = 0;
            this.detaillist.forEach(function (item, i) {
                if (item.channelId == _this.baozhuangid) {
                    detailid_1++;
                    _this.detaillist.splice(i, 1);
                    _this.Typeinex++;
                    _this.fileServe(); //产品描述
                    _this.imgServe(); //图片、文档
                    _this.detaillist.push({ channelId: _this.baozhuangid, imageList: _this.arrImage, fileList: _this.arrFile, infoList: _this.arrTxt });
                }
            });
            if (detailid_1 == 0) {
                this.Typeinex = 0;
                this.fileServe(); //产品描述
                this.imgServe(); //图片、文档
                this.detaillist.push({ channelId: this.baozhuangid, imageList: this.arrImage, fileList: this.arrFile, infoList: this.arrTxt });
            }
        }
        //回显
        var detailide = 0;
        if (this.detaillist.length > 0) {
            this.detaillist.forEach(function (item, i) {
                if (item.channelId == col.value) {
                    detailide++;
                    _this.textlist = item.infoList;
                    _this.systemSummary = '';
                    _this.marketScript = '';
                    _this.termDesc = '';
                    _this.limitDesc = '';
                    _this.sameProductlnformation = '';
                    _this.others = '';
                    _this.items1 = [{ "value11": '' }];
                    _this.items2 = [{ "value21": '', "value22": '', "detailkey": '' }];
                    _this.items3 = [{ "value31": '' }];
                    _this.textlist.forEach(function (itens, j) {
                        if (_this.textlist[j].dataResourceName == 'systemSummary') {
                            _this.systemSummary = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'marketScript') {
                            _this.marketScript = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'termDesc') {
                            _this.termDesc = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'limitDesc') {
                            _this.limitDesc = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'sameProductlnformation') {
                            _this.sameProductlnformation = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'others') {
                            _this.others = _this.textlist[j].objectInfo;
                        }
                        else if (_this.textlist[j].dataResourceName == 'listFeature') {
                            _this.Feature = _this.textlist[j].objectInfo.split(',');
                            for (var i = 0; i < _this.Feature.length; i++) {
                                _this.items1.push({ "value11": _this.Feature[i] });
                            }
                        }
                        else if (_this.textlist[j].dataResourceName == 'productDetail') {
                            _this.Detail = _this.textlist[j].objectInfo.split(',');
                            for (var d = 0; d < _this.Detail.length; d++) {
                                _this.Detail2 = _this.Detail[d].split(':');
                                _this.items2.push({ "value21": _this.Detail2[1] ? _this.Detail2[1] : '', "value22": _this.Detail2[2] ? _this.Detail2[2] : '', 'detailkey': _this.Detail2[0] ? _this.Detail2[0] : '' });
                            }
                        }
                        else if (_this.textlist[j].dataResourceName == 'productPhra') {
                            _this.Phra = _this.textlist[j].objectInfo.split(',');
                            for (var i = 0; i < _this.Phra.length; i++) {
                                _this.items3.push({ "value31": _this.Phra[i] });
                            }
                        }
                    });
                    if (_this.items1.length > 1) {
                        _this.items1.splice(0, 1);
                    }
                    if (_this.items2.length > 1) {
                        _this.items2.splice(0, 1);
                    }
                    if (_this.items3.length > 1) {
                        _this.items3.splice(0, 1);
                    }
                    _this.zujian_ist2 = item.imageList;
                    _this.zujian_ist3 = item.fileList;
                    _this.files10 = [];
                    _this.value41Path = [];
                    _this.files11 = [];
                    _this.value51Path = [];
                    _this.files12 = [];
                    _this.value61Path = [];
                    _this.files13 = [];
                    _this.value71Path = [];
                    _this.files14 = [];
                    _this.value81Path = [];
                    _this.files15 = [];
                    _this.value91Path = [];
                    _this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
                    _this.value101Path = [];
                    _this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
                    _this.value111Path = [];
                    _this.files18 = [];
                    _this.value112Path = [];
                    for (var j = 0; j < _this.zujian_ist2.length; j++) {
                        if (_this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                            var name_10 = '';
                            name_10 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files10.push({ "name": name_10[name_10.length - 1] });
                            _this.fileList10 = [];
                            _this.fileList10.push({
                                "fileName": name_10[name_10.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList10.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "homeDisplayPictures";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value41Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listImages') {
                            var name_11 = '';
                            name_11 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files11.push({ "name": name_11[name_11.length - 1] });
                            _this.fileList11 = [];
                            _this.fileList11.push({
                                "fileName": name_11[name_11.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList11.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listImages";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value51Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                            var name_12 = '';
                            name_12 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files12.push({ "name": name_12[name_12.length - 1] });
                            _this.fileList12 = [];
                            _this.fileList12.push({
                                "fileName": name_12[name_12.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList12.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listSpecification";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value61Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                            var name_13 = '';
                            name_13 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files13.push({ "name": name_13[name_13.length - 1] });
                            _this.fileList13 = [];
                            _this.fileList13.push({
                                "fileName": name_13[name_13.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList13.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listPurchasingContract";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value71Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'listVideo') {
                            var name_14 = '';
                            name_14 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files14.push({ "name": name_14[name_14.length - 1] });
                            _this.fileList14 = [];
                            _this.fileList14.push({
                                "fileName": name_14[name_14.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList14.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listVideo";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value81Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                            var name_15 = '';
                            name_15 = _this.zujian_ist2[j].imagePath.split('/');
                            _this.files15.push({ "name": name_15[name_15.length - 1] });
                            _this.fileList15 = [];
                            _this.fileList15.push({
                                "fileName": name_15[name_15.length - 1],
                                "fileUrl": _this.zujian_ist2[j].imagePath,
                            });
                            _this.fileList15.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "detailsDisplay";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value91Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist2[j].dataResourceName == 'productDetail') {
                            var name_16 = '';
                            var names = '';
                            name_16 = _this.zujian_ist2[j].imagePath.split('/');
                            names = _this.zujian_ist2[j].imagePath.split(':');
                            _this.items12.push({ 'detailkey1': names[0], 'valuedetails': names[1], 'list': [{ "name": name_16[name_16.length - 1] }] });
                            _this.fileList16 = [];
                            _this.fileList16.push({
                                "fileName": name_16[name_16.length - 1],
                                "fileUrl": names[2],
                            });
                            _this.fileList16.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "productDetail";
                                obj['imageName'] = item.fileName;
                                obj['imagePath'] = item.fileUrl;
                                _this.value101Path.push(obj);
                            });
                        }
                    }
                    if (_this.items12.length > 1) {
                        _this.items12.splice(0, 1);
                    }
                    for (var K = 0; K < _this.zujian_ist3.length; K++) {
                        if (_this.zujian_ist3[K].dataResourceName == 'productDetail') {
                            var name_17 = '';
                            var names = '';
                            name_17 = _this.zujian_ist3[K].filePath.split('/');
                            names = _this.zujian_ist3[K].filePath.split(':');
                            _this.files17.push({ 'detailkey2': names[0], 'valuedetailes': names[1], 'liste': [{ "name": name_17[name_17.length - 1] }] });
                            _this.fileList17 = [];
                            _this.fileList17.push({
                                "fileName": name_17[name_17.length - 1],
                                "fileUrl": names[2],
                            });
                            _this.fileList17.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "productDetail";
                                obj['fileName'] = item.fileName;
                                obj['filePath'] = item.fileUrl;
                                _this.value111Path.push(obj);
                            });
                        }
                        else if (_this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                            var name_18 = '';
                            name_18 = _this.zujian_ist3[K].filePath.split('/');
                            _this.files18.push({ "name": name_18[name_18.length - 1] });
                            _this.fileList18 = [];
                            _this.fileList18.push({
                                "fileName": name_18[name_18.length - 1],
                                "fileUrl": _this.zujian_ist3[K].filePath,
                            });
                            _this.fileList18.forEach(function (item) {
                                var obj = {};
                                obj['dataResourceName'] = "listSpecification";
                                obj['fileName'] = item.fileName;
                                obj['filePath'] = item.fileUrl;
                                _this.value112Path.push(obj);
                            });
                        }
                    }
                    if (_this.files17.length > 1) {
                        _this.files17.splice(0, 1);
                    }
                }
            });
        }
        if (detailide == 0) {
            this.systemSummary = '';
            this.marketScript = '';
            this.termDesc = '';
            this.limitDesc = '';
            this.sameProductlnformation = '';
            this.others = '';
            this.items1 = [{ "value11": '' }];
            this.items2 = [{ "value21": '', "value22": '', "detailkey": '' }];
            this.items3 = [{ "value31": '' }];
            this.files10 = [];
            this.value41Path = [];
            this.files11 = [];
            this.value51Path = [];
            this.files12 = [];
            this.value61Path = [];
            this.files13 = [];
            this.value71Path = [];
            this.files14 = [];
            this.value81Path = [];
            this.files15 = [];
            this.value91Path = [];
            this.items12 = [{ detailkey1: '', valuedetails: '', list: [] }];
            this.value101Path = [];
            this.files17 = [{ detailkey2: '', valuedetailes: '', liste: [] }];
            this.value111Path = [];
            this.files18 = [];
            this.value112Path = [];
        }
        this.show = col.label;
        this.baozhuangid = col.value;
        this.startp = '1';
    };
    //  多行列表单选按钮
    SaleProductModifyComponent.prototype.checkBoxClick10 = function (i, data) {
        var _this = this;
        var tempss = [];
        if (data.checkBox10) {
            this.select_atr.push(i);
            this.chooseData10.push(data);
        }
        else {
            // tslint:disable-next-line:no-shadowed-variable
            this.chooseData10.forEach(function (item, i) {
                if (item === data) {
                    _this.chooseData10.splice(i, 1);
                    _this.select_atr.splice(i, 1);
                }
            });
        }
        var aka = 0;
        this.cars_attrbute.forEach(function (item) {
            if (!item.checkBox10) {
                aka++;
            }
        });
        if (aka == 0) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
        var arr0 = [];
        // tslint:disable-next-line:no-shadowed-variable
        for (var i_1 = 0; i_1 < this.select_atr.length; i_1++) {
            if (arr0.indexOf(this.select_atr[i_1]) === -1) {
                arr0.push(this.select_atr[i_1]);
            }
        }
        tempss = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](arr0);
        this.select_atr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](tempss);
    };
    //  全选按钮
    SaleProductModifyComponent.prototype.checkAllClickA = function (item) {
        for (var i = 0; i < item.productFeatureList.length; i++) {
            if (item['checkDate'] === true) {
                item.productFeatureList[i].checkBox = true;
                this.chooseData.push(item.productFeatureList[i]);
            }
            else {
                this.chooseData = [];
                item.productFeatureList[i].checkBox = false;
            }
        }
    };
    //  单选按钮
    SaleProductModifyComponent.prototype.checkBoxClickA = function (i, data, item) {
        var _this = this;
        var isChooseBox = 0;
        if (data.checkBox) {
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item1, j) {
                if (item1 === data) {
                    _this.chooseData.splice(j, 1);
                }
            });
        }
        item.productFeatureList.forEach(function (element) {
            if (element.checkBox) {
                isChooseBox++;
            }
        });
        if (isChooseBox === item.productFeatureList.length) {
            item['checkDate'] = true;
        }
        else {
            item['checkDate'] = false;
        }
    };
    //  功能右移
    SaleProductModifyComponent.prototype.rightFunMovre = function () {
        var _this = this;
        var temps = [];
        var temps1 = [];
        var arrsright = [];
        this.leftListFun.forEach(function (item, i) {
            arrsright.push(item);
            arrsright.sort(function (a, b) { return b - a; });
            _this.funList_right.push(_this.funList_left[item]);
            _this.funList_rightList.push(_this.funList_left[item]);
        });
        arrsright.forEach(function (item, i) {
            _this.funList_left.splice(item, 1);
        });
        temps = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](temps);
        this.funList_rightList = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_rightList);
        temps1 = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](temps1);
        this.leftListFun = [];
        this.leftListFunAll = false;
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        if (this.funList_left) {
            this.total = this.funList_left.length;
        }
        else {
            this.total = 0;
        }
    };
    //  功能左移
    SaleProductModifyComponent.prototype.liftFunMovre = function () {
        var _this = this;
        var tempss = [];
        var tempss1 = [];
        var arrsleft = [];
        this.rightListFun.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.funList_left.push(_this.funList_right[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.funList_rightList.forEach(function (items, k) {
                if (items.productFunctionName === _this.funList_right[item].productFunctionName) {
                    _this.funList_rightList.splice(k, 1);
                }
            });
            _this.funList_right.splice(item, 1);
        });
        tempss = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](tempss);
        this.funList_rightList = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_rightList);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](tempss1);
        this.rightListFun = [];
        if (this.leftListFun.length === this.funList_left.length && this.funList_left.length > 0) {
            this.leftListFunAll = true;
        }
        else {
            this.leftListFunAll = false;
        }
        this.rightListFunAll = false;
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        if (this.funList_left) {
            this.total = this.funList_left.length;
        }
        else {
            this.total = 0;
        }
    };
    SaleProductModifyComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    //  产品包装
    SaleProductModifyComponent.prototype.copyObj = function (param) {
        var obj = {};
        if (param) {
            // tslint:disable-next-line:forin
            for (var val in param) {
                obj[val] = param[val];
            }
        }
        return obj;
    };
    //特色描述
    SaleProductModifyComponent.prototype.doAdd1 = function () {
        this.items1.push({ value11: '' });
    };
    SaleProductModifyComponent.prototype.doDetel1 = function (i) {
        if (this.items1.length > 1) {
            this.items1.splice(i, 1);
        }
    };
    SaleProductModifyComponent.prototype.doAdd2 = function () {
        this.items2.push(this.copyObj(this.obj));
    };
    SaleProductModifyComponent.prototype.doDetel2 = function (i) {
        if (this.items2.length > 1) {
            this.items2.splice(i, 1);
        }
    };
    SaleProductModifyComponent.prototype.doAdd3 = function () { this.items3.push({ value31: '' }); };
    SaleProductModifyComponent.prototype.doDetel3 = function (i) {
        if (this.items3.length > 1) {
            this.items3.splice(i, 1);
        }
    };
    SaleProductModifyComponent.prototype.doAddDetails = function () {
        this.items12.push({ 'detailkey1': '', 'valuedetails': '', 'list': [] });
    };
    SaleProductModifyComponent.prototype.doDetelDetails = function (i) {
        if (this.items12.length > 1) {
            this.items12.splice(i, 1);
            this.value101Path.splice(i, 1);
        }
    };
    SaleProductModifyComponent.prototype.doAddDetailes = function () {
        this.files17.push({ 'detailkey2': '', 'valuedetailes': '', 'liste': [] });
    };
    SaleProductModifyComponent.prototype.doDetelDetailes = function (i) {
        if (this.files17.length > 1) {
            this.files17.splice(i, 1);
            this.value111Path.splice(i, 1);
        }
    };
    //  产品描述
    SaleProductModifyComponent.prototype.fileServe = function () {
        var _this = this;
        var Astr1 = [];
        this.items1.forEach(function (item) {
            if (item.value11 !== '' && item.value11 !== undefined) {
                item.value11 = item.value11.replace(/(^\s*)|(\s*$)/g, '');
                if (item.value11 === undefined || item.value11 === '') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '特色描述不能填写纯空格！' });
                    return;
                }
            }
            Astr1.push(item.value11);
        });
        var Astr121 = [];
        var Astr122 = [];
        var AstrCe = [];
        this.items2.forEach(function (item) {
            if (item.detailkey !== '' && item.detailkey !== undefined) {
                item.detailkey = item.detailkey.replace(/(^\s*)|(\s*$)/g, '');
                if (item.detailkey === undefined || item.detailkey === '') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '特色描述不能填写纯空格！' });
                    return;
                }
            }
            if (item.value21 !== '' && item.value21 !== undefined) {
                item.value21 = item.value21.replace(/(^\s*)|(\s*$)/g, '');
                if (item.value21 === undefined || item.value21 === '') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '特色描述不能填写纯空格！' });
                    return;
                }
            }
            if (item.value22 !== '' && item.value22 !== undefined) {
                item.value22 = item.value22.replace(/(^\s*)|(\s*$)/g, '');
                if (item.value22 === undefined || item.value22 === '') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '特色描述不能填写纯空格！' });
                    return;
                }
            }
            if (item.value21 == '' && item.value22 == '') {
                AstrCe = [];
            }
            else if (item.value21 == undefined && item.value22 == undefined) {
                AstrCe = [];
            }
            else if (item.value21 != '' && item.value22 != '' && item.detailkey != '' && item.value21 != undefined && item.value22 != undefined && item.detailkey != undefined) {
                AstrCe.push(item.detailkey + ':' + item.value21 + ':' + item.value22);
            }
        });
        var Astr13 = [];
        this.items3.forEach(function (item) {
            if (item.value31 !== '' && item.value31 !== undefined) {
                item.value31 = item.value31.replace(/(^\s*)|(\s*$)/g, '');
                if (item.value31 === undefined || item.value31 === '') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '产品短语不能填写纯空格！' });
                    return;
                }
            }
            Astr13.push(item.value31);
        });
        if (this.systemSummary !== '' && this.systemSummary !== undefined) {
            this.systemSummary = this.systemSummary.replace(/(^\s*)|(\s*$)/g, '');
            if (this.systemSummary === undefined || this.systemSummary === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '制度摘要不能填写纯空格！' });
                return;
            }
        }
        if (this.marketScript !== '' && this.marketScript !== undefined) {
            this.marketScript = this.marketScript.replace(/(^\s*)|(\s*$)/g, '');
            if (this.marketScript === undefined || this.marketScript === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '营销话术不能填写纯空格！' });
                return;
            }
        }
        if (this.termDesc !== '' && this.termDesc !== undefined) {
            this.termDesc = this.termDesc.replace(/(^\s*)|(\s*$)/g, '');
            if (this.termDesc === undefined || this.termDesc === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '期限描述不能填写纯空格！' });
                return;
            }
        }
        if (this.limitDesc !== '' && this.limitDesc !== undefined) {
            this.limitDesc = this.limitDesc.replace(/(^\s*)|(\s*$)/g, '');
            if (this.limitDesc === undefined || this.limitDesc === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '额度描述不能填写纯空格！' });
                return;
            }
        }
        if (this.sameProductlnformation !== '' && this.sameProductlnformation !== undefined) {
            this.sameProductlnformation = this.sameProductlnformation.replace(/(^\s*)|(\s*$)/g, '');
            if (this.sameProductlnformation === undefined || this.sameProductlnformation === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '同业产品信息不能填写纯空格！' });
                return;
            }
        }
        if (this.others !== '' && this.others !== undefined) {
            this.others = this.others.replace(/(^\s*)|(\s*$)/g, '');
            if (this.others === undefined || this.others === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '其他不能填写纯空格！' });
                return;
            }
        }
        if (this.others !== '' && this.others !== undefined) {
            this.others = this.others.replace(/(^\s*)|(\s*$)/g, '');
            if (this.others === undefined || this.others === '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '其他不能填写纯空格！' });
                return;
            }
        }
        this.arrTxt = [
            {
                objectInfo: this.systemSummary,
                dataResourceName: 'systemSummary'
            },
            {
                objectInfo: this.marketScript,
                dataResourceName: 'marketScript'
            },
            {
                objectInfo: this.systemSummary,
                dataResourceName: 'systemSummary'
            },
            {
                objectInfo: this.termDesc,
                dataResourceName: 'termDesc'
            },
            {
                objectInfo: this.limitDesc,
                dataResourceName: 'limitDesc'
            },
            {
                objectInfo: this.sameProductlnformation,
                dataResourceName: 'sameProductlnformation'
            },
            {
                objectInfo: this.others,
                dataResourceName: 'others'
            },
            {
                objectInfo: Astr1.toString(),
                dataResourceName: 'listFeature'
            },
            {
                objectInfo: AstrCe.toString(),
                dataResourceName: 'productDetail'
            },
            {
                objectInfo: Astr13.toString(),
                dataResourceName: 'productPhra'
            },
        ];
    };
    //部门与岗位
    SaleProductModifyComponent.prototype.sheMain = function () {
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    // 营销部门机构树回调
    SaleProductModifyComponent.prototype.treeCall = function (param) {
        var _this = this;
        this.saleDepartment = '';
        this.orgTreeDisplay = false;
        this.saled = '';
        this.salee = [];
        this.saleed = '';
        this.saledd = [];
        if (param.length > 1) {
            param.forEach(function (item) {
                _this.salee.push(item.orgName);
                _this.saledd.push({ marketDepartmentNo: item.orgId, marketDepartmentName: item.orgName });
            });
            this.saled = this.salee.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled = items.orgName;
                _this.saledd.push({ marketDepartmentNo: items.orgId, marketDepartmentName: items.orgName });
            });
        }
        this.saleDepartment = this.saled;
        this.marketDepartmentList = this.saledd;
    };
    //特殊属性
    SaleProductModifyComponent.prototype.addAttr = function () {
        this.displaed = true;
        this.headerTitled = '添加特殊属性';
        this.showModel = '1';
        this.updateValue = this.special_attr;
    };
    SaleProductModifyComponent.prototype.lveMain = function () {
        this.orgTreeDisplayB = !this.orgTreeDisplayB;
    };
    // 全选
    SaleProductModifyComponent.prototype.checkAllClick = function (event) {
        if (event) {
            var choose_tr = [];
            for (var i = 0; i < this.special_attr.length; i++) {
                choose_tr.push(i);
            }
            this.choose_tr = JSON.parse(JSON.stringify(choose_tr));
            this.special_attr = JSON.parse(JSON.stringify(this.special_attr));
        }
        else {
            this.choose_tr = [];
            this.special_attr = [];
        }
    };
    // 管理部门机构树回调
    SaleProductModifyComponent.prototype.treeCallB = function (param) {
        var _this = this;
        this.cfsaleDepartment = '';
        this.orgTreeDisplayB = false;
        this.saled1 = '';
        this.salee1 = [];
        this.saleed1 = '';
        this.saledd1 = [];
        if (param.length > 1) {
            param.forEach(function (items) {
                _this.salee1.push(items.orgName);
                _this.saledd2.push({ manageDepartmentNo: items.orgId, manageDepartmentName: items.orgName });
            });
            this.saled1 = this.salee1.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled1 = items.orgName;
                _this.saledd2.push({ manageDepartmentNo: items.orgId, manageDepartmentName: items.orgName });
            });
        }
        this.cfsaleDepartment = this.saled1;
        this.manageDepartmentList = this.saledd2;
    };
    SaleProductModifyComponent.prototype.shelveMain = function () {
        this.display = true;
        this.headerTitle = '销售人员岗位';
        this.showModel = '2';
        this.updateValue = "one";
    };
    SaleProductModifyComponent.prototype.choicesaleUser = function (parames) {
        var _this = this;
        this.display = parames.display;
        if (parames.value == 'one') {
            this.belong = '';
            this.belong1 = [];
            this.belongg = '';
            if (parames.depart.length > 1) {
                parames.depart.forEach(function (items) {
                    _this.belong1.push(items.postName);
                    _this.saledd3.push({ salesPostNo: items.postId, salesPostName: items.postName });
                });
                this.belong = this.belong1.join(',');
            }
            else {
                parames.depart.forEach(function (items) {
                    _this.belong = items.postName;
                    _this.saledd3.push({ salesPostNo: items.postId, salesPostName: items.postName });
                });
            }
            this.saleUser = this.belong;
            this.salesPostList = this.saledd3;
        }
    };
    SaleProductModifyComponent.prototype.shelveMain2 = function () {
        this.display = true;
        this.headerTitle = '产品经理';
        this.showModel = '4';
        this.updateValue = "four";
    };
    SaleProductModifyComponent.prototype.choicemanager = function (paramd) {
        var _this = this;
        this.display = paramd.display;
        if (paramd.value == 'four') {
            this.belongs = '';
            this.belongs1 = [];
            this.belongss = '';
            this.belongss1 = [];
            if (paramd.departed.length > 1) {
                paramd.departed.forEach(function (items) {
                    _this.belongs1.push(items.userName);
                    _this.saledd4.push({ productManagerNo: items.userLoginId, productManagerName: items.userName });
                });
                this.belongs = this.belongs1.join(',');
                this.belongss = this.belongss1.join(',');
            }
            else {
                paramd.departed.forEach(function (items) {
                    _this.belongs = items.userName;
                    _this.saledd4.push({ productManagerNo: items.userLoginId, productManagerName: items.userName });
                });
            }
            this.productManager = this.belongs;
            this.productManagerList = this.saledd4;
        }
    };
    //  首页展示图片
    SaleProductModifyComponent.prototype.load1 = function (event) {
        this.isShow1 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files10.push(file);
        }
        var data = JSON.parse(event.xhr.response); //  上传成功后返回信息
        var obj = {};
        obj['dataResourceName'] = 'homeDisplayPictures';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value41Path.push(obj);
        // if (this.files10.length !== 0 ) {
        //     for (let i = 0; i < this.files10.length; i++) {
        //         obj['dataResourceName'] = 'homeDisplayPictures';
        //         obj['imagePath'] = data.filePath + this.files10[i].name; // 上传成功后返回的图片路径
        //         this.value41Path.push(obj);
        //     }
        //   }
    };
    SaleProductModifyComponent.prototype.select1 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files10.length !== 0) {
                for (var i = 0; i < this.files10.length; i++) {
                    if (this.files10[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    //  删除
    SaleProductModifyComponent.prototype.deleta1 = function (item) {
        var kkey = this.files10.indexOf(item);
        this.files10.splice(kkey, 1);
        this.value41Path.splice(kkey, 1);
    };
    //  列表展示图片
    SaleProductModifyComponent.prototype.load2 = function (event) {
        this.isShow2 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files11.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listImages';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value51Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select2 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files11.length !== 0) {
                for (var i = 0; i < this.files11.length; i++) {
                    if (this.files11[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta2 = function (item) {
        var kkey = this.files11.indexOf(item);
        this.files11.splice(kkey, 1);
        this.value51Path.splice(kkey, 1);
    };
    //  产品说明书
    SaleProductModifyComponent.prototype.load3 = function (event) {
        this.isShow3 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files12.push(file);
        }
        //  let path = event.xhr.response; //  上传成功后返回的图片存储路径
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listSpecification';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value61Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select3 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files12.length !== 0) {
                for (var i = 0; i < this.files12.length; i++) {
                    if (this.files12[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta3 = function (item) {
        var kkey = this.files12.indexOf(item);
        this.files12.splice(kkey, 1);
        this.value61Path.splice(kkey, 1);
    };
    //  产品购买协议
    SaleProductModifyComponent.prototype.load4 = function (event) {
        this.isShow4 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files13.push(file);
        }
        //  let path = event.xhr.response; //  上传成功后返回的图片存储路径
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listPurchasingContract';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value71Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select4 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files13.length !== 0) {
                for (var i = 0; i < this.files13.length; i++) {
                    if (this.files13[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta4 = function (item) {
        var kkey = this.files13.indexOf(item);
        this.files13.splice(kkey, 1);
        this.value71Path.splice(kkey, 1);
    };
    //  列表视频
    SaleProductModifyComponent.prototype.load5 = function (event) {
        this.isShow5 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files14.push(file);
        }
        //  let path = event.xhr.response; //  上传成功后返回的图片存储路径
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listVideo';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value81Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select5 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files14.length !== 0) {
                for (var i = 0; i < this.files14.length; i++) {
                    if (this.files14[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta5 = function (item) {
        var kkey = this.files14.indexOf(item);
        this.files14.splice(kkey, 1);
        this.value81Path.splice(kkey, 1);
    };
    //  详情展示图片
    SaleProductModifyComponent.prototype.load6 = function (event) {
        this.isShow6 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files15.push(file);
        }
        var data = JSON.parse(event.xhr.response); //  上传成功后返回的图片存储路径
        var obj = {};
        obj['dataResourceName'] = 'detailsDisplay';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value91Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select6 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files15.length !== 0) {
                for (var i = 0; i < this.files15.length; i++) {
                    if (this.files15[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta6 = function (item) {
        var kkey = this.files15.indexOf(item);
        this.files15.splice(kkey, 1);
        this.value91Path.splice(kkey, 1);
    };
    //  详情描述
    SaleProductModifyComponent.prototype.load7 = function (event, i) {
        this.isShow7 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.items12[i].list.push(file);
            if (this.items12[i].list.length > 1) {
                this.items12[i].list.splice(1);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '只能上传一条数据!' });
                return;
            }
        }
        for (var _b = 0, _c = event.files; _b < _c.length; _b++) {
            var file = _c[_b];
            this.files16.push(file);
        }
        //  let path = event.xhr.response; //  上传成功后返回的图片存储路径
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'productDetail';
        obj['imagePath'] = data.filePath + data.fileTitle;
        this.value101Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select7 = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files16.length !== 0) {
                for (var i = 0; i < this.files16.length; i++) {
                    if (this.files16[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
        }
    };
    SaleProductModifyComponent.prototype.deleta7 = function (item, items) {
        var kkey = item.list.indexOf(items);
        item.list.splice(kkey, 1);
        this.value101Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.addspecailattr = function (paramss) {
        this.displaed = paramss.displaed;
        this.special_attr = paramss.salet2;
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.special_attr);
    };
    //  文档详情描述
    SaleProductModifyComponent.prototype.load8 = function (event, i) {
        this.isShow8 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.fileList17.push(file);
        }
        for (var _b = 0, _c = event.files; _b < _c.length; _b++) {
            var file = _c[_b];
            this.files17[i]['liste'].push(file);
            if (this.files17[i].liste.length > 1) {
                this.files17[i].liste.splice(1);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '只能上传一条数据!' });
                return;
            }
        }
        //  let path = event.xhr.response; //  上传成功后返回的图片存储路径
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'productDetail';
        obj['filePath'] = data.filePath + data.fileTitle;
        this.value111Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select8 = function (event) {
        var fileArr = ['docx', 'txt', 'doc', 'pdf', 'html', 'xls', 'xlsx'];
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files17.length !== 0) {
                for (var i = 0; i < this.files17.length; i++) {
                    if (this.files17[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
            var fileNameArr = file.name.split('.');
            var fileName = fileNameArr[fileNameArr.length - 1];
            if (fileArr.indexOf(fileName) === -1) {
                this.upShow8 = false;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '选择的文件类型不允许上传，请选择以下格式文件:docx, txt, doc,pdf,html,xls,xlsx' });
                return;
            }
            else {
                this.upShow8 = true;
            }
        }
    };
    SaleProductModifyComponent.prototype.remove8 = function (event) {
        var fileArr = ['docx', 'txt', 'doc', 'pdf', 'html', 'xls', 'xlsx'];
        var fileNameArr = event.file.name.split('.');
        var fileName = fileNameArr[fileNameArr.length - 1];
        if (fileArr.indexOf(fileName) === -1) {
            this.upShow8 = true;
        }
    };
    SaleProductModifyComponent.prototype.deleta8 = function (item, items) {
        var kkey = item.liste.indexOf(items);
        item.liste.splice(kkey, 1);
        this.value111Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.load9 = function (event) {
        this.isShow9 = false;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files18.push(file);
        }
        var data = JSON.parse(event.xhr.response);
        var obj = {};
        obj['dataResourceName'] = 'listSpecification';
        obj['filePath'] = data.filePath + data.fileTitle;
        this.value112Path.push(obj);
    };
    SaleProductModifyComponent.prototype.select9 = function (event) {
        var fileArr = ['docx', 'txt', 'doc', 'pdf', 'html', 'xls', 'xlsx'];
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (this.files18.length !== 0) {
                for (var i = 0; i < this.files18.length; i++) {
                    if (this.files18[i].name === file.name) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '文件重复，请选择不同文件' });
                    }
                }
            }
            var fileNameArr = file.name.split('.');
            var fileName = fileNameArr[fileNameArr.length - 1];
            if (fileArr.indexOf(fileName) === -1) {
                this.upShow9 = false;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '选择的文件类型不允许上传，请选择以下格式文件:docx, txt, doc,pdf,html,xls,xlsx' });
                return;
            }
            else {
                this.upShow9 = true;
            }
        }
    };
    SaleProductModifyComponent.prototype.remove9 = function (event) {
        var fileArr = ['docx', 'txt', 'doc', 'pdf', 'html', 'xls', 'xlsx'];
        var fileNameArr = event.file.name.split('.');
        var fileName = fileNameArr[fileNameArr.length - 1];
        if (fileArr.indexOf(fileName) === -1) {
            this.upShow9 = true;
        }
    };
    SaleProductModifyComponent.prototype.deleta9 = function (item) {
        var kkey = this.files18.indexOf(item);
        this.files18.splice(kkey, 1);
        this.value112Path.splice(kkey, 1);
    };
    //  图片
    SaleProductModifyComponent.prototype.addimg = function (item) {
        if (item.length !== 0) {
            for (var i = 0; i < item.length; i++) {
                this.arrImage.push(item[i]);
            }
        }
    };
    //  文件
    SaleProductModifyComponent.prototype.addTex = function (item) {
        if (item.length !== 0) {
            for (var i = 0; i < item.length; i++) {
                this.arrFile.push(item[i]);
            }
        }
    };
    // 文件上传提交
    SaleProductModifyComponent.prototype.imgServe = function () {
        var _this = this;
        this.arrFile = [];
        this.arrImage = [];
        this.addimg(this.value41Path);
        this.addimg(this.value51Path);
        this.addimg(this.value61Path);
        this.addimg(this.value71Path);
        this.addimg(this.value81Path);
        this.addimg(this.value91Path);
        if (this.Typeinex == 0) {
            this.value101Path.forEach(function (element, i) {
                if (element.imagePath != '' && (_this.items12[i].detailkey1 == '' || _this.items12[i].valuedetails == '')) {
                    _this.detailkeynum++;
                }
                else if (element.imagePath == '') {
                    _this.items12[i].detailkey1 == '';
                    _this.items12[i].valuedetails == '';
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
                else {
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
            });
            this.value111Path.forEach(function (ement, i) {
                if (ement.filePath != '' && (_this.files17[i].detailkey2 == '' || _this.files17[i].valuedetailes == '')) {
                    _this.detailkeynum++;
                }
                else if (ement.filePath == '') {
                    _this.files17[i].detailkey2 == '';
                    _this.files17[i].valuedetailes == '';
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
                else {
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
            });
        }
        else {
            this.value101Path.forEach(function (element, i) {
                element.imagePath = element.imagePath.split(':').pop();
                if (element.imagePath != '' && (_this.items12[i].detailkey1 == '' || _this.items12[i].valuedetails == '')) {
                    _this.detailkeynum++;
                }
                else if (element.imagePath == '') {
                    _this.items12[i].detailkey1 == '';
                    _this.items12[i].valuedetails == '';
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
                else {
                    element.imagePath = _this.items12[i].detailkey1 + ":" + _this.items12[i].valuedetails + ":" + element.imagePath;
                }
            });
            this.value111Path.forEach(function (ement, i) {
                ement.filePath = ement.filePath.split(':').pop();
                if (ement.filePath != '' && (_this.files17[i].detailkey2 == '' || _this.files17[i].valuedetailes == '')) {
                    _this.detailkeynum++;
                }
                else if (ement.filePath == '') {
                    _this.files17[i].detailkey2 == '';
                    _this.files17[i].valuedetailes == '';
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
                else {
                    ement.filePath = _this.files17[i].detailkey2 + ":" + _this.files17[i].valuedetailes + ":" + ement.filePath;
                }
            });
        }
        this.addimg(this.value101Path);
        this.addTex(this.value111Path);
        this.addTex(this.value112Path);
    };
    //  修改产品后改变标识
    SaleProductModifyComponent.prototype.chongMIng = function () {
        this.code = true;
    };
    SaleProductModifyComponent.prototype.downlode = function (item) {
        var filePath = item.path.substring(0, item.path.lastIndexOf('/') + 1);
        var fileName = item.path.substring(item.path.lastIndexOf('/') + 1);
        window.open(this.uploadurlIds + '?filePath=' + filePath + fileName);
    };
    SaleProductModifyComponent.prototype.checkMin = function (even2, even, even1) {
        var param = {
            'productId': this.product_base_value.tplId,
            'productFeatureTypeId': even2,
        };
        var num = 0;
        var nowChangeMin = {
            'min': even2,
            'isMatch': false
        };
        // this.productManageHttpService.queryFeaByFeaTypeId(param).subscribe(data => {
        //     if (data.returnCode.code === 'success') {
        //         this.cars_attrbuteOld = data.resultList[0].min;
        //         this.cars_attrbuteOld2 = data.resultList[0].max;
        //         if (Number(even) < Number(this.cars_attrbuteOld)) {
        //             this.check5 = false;
        //             this.msgs = [];
        //             nowChangeMin.isMatch = false;
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: '修改后的最小值不能小于原有最小值' });
        //         } else if (Number(even) > Number(this.cars_attrbuteOld2)) {
        //             this.check2 = false;
        //             nowChangeMin.isMatch = false;
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: '修改后的最小值不能大于原有最大值' });
        //         } else {
        //             this.check2 = true;
        //             nowChangeMin.isMatch = true;
        //         }
        //         this.isCanToNext.forEach(item => {
        //             if (item.min === nowChangeMin.min) {
        //                 item.isMatch = nowChangeMin.isMatch;
        //                 num++;
        //             }
        //         });
        //         if (num === 0) {
        //             this.isCanToNext.push(nowChangeMin);
        //         }
        //     }
        // });
    };
    SaleProductModifyComponent.prototype.checkMax = function (even2, even, even1) {
        var param = {
            'productId': this.product_base_value.tplId,
            'productFeatureTypeId': even2,
        };
        var num = 0;
        var nowChangeMax = {
            'max': even2,
            'isMatch': false
        };
        // this.productManageHttpService.queryFeaByFeaTypeId(param).subscribe(data => {
        //     if (data.returnCode.code === 'success') {
        //         this.cars_attrbuteOld = data.resultList[0].min;
        //         this.cars_attrbuteOld2 = data.resultList[0].max;
        //         if (Number(even) < Number(this.cars_attrbuteOld)) {
        //             this.check3 = false;
        //             nowChangeMax.isMatch = false;
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: '修改后的最大值不能小于原有最小值' });
        //         } else if (Number(even) > Number(this.cars_attrbuteOld2)) {
        //             this.check4 = false;
        //             nowChangeMax.isMatch = false;
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: '修改后的最大值不能大于原有最大值' });
        //         } else {
        //             this.check4 = true;
        //             nowChangeMax.isMatch = true;
        //         }
        //         this.isCanToNext.forEach(item => {
        //             if (item.max === nowChangeMax.max) {
        //                 item.isMatch = nowChangeMax.isMatch;
        //                 num++;
        //             }
        //         });
        //         if (num === 0) {
        //             this.isCanToNext.push(nowChangeMax);
        //         }
        //     }
        // });
    };
    // 组件全选
    SaleProductModifyComponent.prototype.AllChoose_tr2 = function () {
        this.choose_tr2 = [];
        if (this.choose_tr2All === true) {
            for (var i = 0; i < this.cars_3.length; i++) {
                this.choose_tr2.push(i.toString());
            }
        }
        else if (this.choose_tr2All === false) {
            this.choose_tr2 = [];
        }
    };
    SaleProductModifyComponent.prototype.Choose_tr2 = function () {
        if (this.choose_tr2.length === this.cars_3.length) {
            this.choose_tr2All = true;
        }
        else {
            this.choose_tr2All = false;
        }
    };
    SaleProductModifyComponent.prototype.AllleftListFunZ = function () {
        this.leftListFun = [];
        var emptyArr2 = [];
        if (this.leftListFunAll === true) {
            for (var i = 0; i < this.funList_left.length; i++) {
                this.leftListFun.push(i.toString());
            }
        }
        else if (this.leftListFunAll === false) {
            this.leftListFun = [];
        }
        emptyArr2 = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.leftListFun);
        this.leftListFun = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](emptyArr2);
    };
    SaleProductModifyComponent.prototype.AllrightListFunZ = function () {
        this.rightListFun = [];
        var emptyArr2 = [];
        if (this.rightListFunAll === true) {
            for (var i = 0; i < this.funList_right.length; i++) {
                this.rightListFun.push(i.toString());
            }
        }
        else if (this.rightListFunAll === false) {
            this.rightListFun = [];
        }
        emptyArr2 = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.rightListFun);
        this.rightListFun = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](emptyArr2);
    };
    // 功能单选按钮
    SaleProductModifyComponent.prototype.AllleftListFunZ10 = function () {
        if (this.leftListFun.length === this.funList_left.length) {
            this.leftListFunAll = true;
        }
        else {
            this.leftListFunAll = false;
        }
    };
    SaleProductModifyComponent.prototype.AllrightListFunZ10 = function () {
        if (this.rightListFun.length === this.funList_right.length) {
            this.rightListFunAll = true;
        }
        else {
            this.rightListFunAll = false;
        }
    };
    // 组件右分页
    SaleProductModifyComponent.prototype.paginates = function (event) {
        // 每页显示的条数
        this.pageSizes = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // 调用查询的方法
        if (this.funList_rightList) {
            this.totals = this.funList_rightList.length;
        }
        else {
            this.totals = 0;
        }
        this.funList_right = [];
        if (this.funList_rightList.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.funList_right = this.funList_rightList.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.funList_right = this.funList_rightList.slice(currentPages2);
        }
        this.rightListFun = [];
    };
    SaleProductModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-product-modify',
            template: __webpack_require__(/*! ./sale-product-modify.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-modify/sale-product-modify.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/product-manage/available-product/menu-tree-ul.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["ProductManageHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["ProductManageHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SaleProductModifyComponent);
    return SaleProductModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventure\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-12\">\r\n        <ul class=\"ui-breadcrumb-new\">\r\n          <li class=\"active\">\r\n            <a>\r\n              <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n          </li>\r\n          <li>\r\n            <a>产品管理</a>\r\n          </li>\r\n          <li>\r\n            <a>可售产品管理</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"filter-div\">\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            产品线:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <p-dropdown [(ngModel)]=\"line_value\" (onChange)=\"lineVelue()\" [options]=\"select_line\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            产品组:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <p-dropdown (onChange)=\"groupChange()\" [(ngModel)]=\"group_value\" [options]=\"select_group\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            基础产品:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <p-dropdown [(ngModel)]=\"product_base_value\" [options]=\"product_base_arr\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            可售产品编号:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"productQBean.productId\" pInputText type=\"text\" class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            可售产品名称:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <input [(ngModel)]=\"productQBean.productName\" pInputText type=\"text\" class=\"ui-inputtext-new\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            产品状态:\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 60%\">\r\n              <p-dropdown [(ngModel)]=\"productQBean.statusFlag\" [options]=\"saleProductType\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n            </div>\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-div\" style=\"background-color:#fff;height:500px;margin-top:12px\">\r\n      <div class=\"ui-g-12 ui-md-12 text_right\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton type=\"button\" [routerLink]=\"['/pages/tzb/product-manage/available-product/sale-product-config']\" style=\"width: 60px;\"\r\n              label=\"新增\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <u-dataTable [(value)]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column [style]=\"{'text-align':'center'}\" header=\"序号\" field=\"\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n            {{ri+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productId\" header=\"可售产品编号\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productName\" header=\"可售产品名称\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productTemplateName\" header=\"基础产品\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productLineName\" header=\"产品线\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" field=\"productGroupName\" header=\"产品组\">\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center'}\" header=\"产品状态\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.fromStatus|codeValuePie:saleProductType}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n          <ng-template pTemplate=\"header\">\r\n            操作\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"basicDetails(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n            <span (click)=\"serveClick(item)\" pTooltip=\"审批\" tooltipPosition=\"top\" class=\"icon iconfont\" style=\"color:#be67f5;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe65c;</span>\r\n            <span class=\"icon iconfont\" *ngIf=\"item.fromStatus != '01' && item.fromStatus != '04'\" pTooltip=\"修改\" tooltipPosition=\"top\"\r\n              [routerLink]=\"['/pages/tzb/product-manage/available-product/sale-product-modify',item]\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n            <span class=\"icon iconfont\" *ngIf=\"item.fromStatus == '01' || item.fromStatus == '04'\" pTooltip=\"修改\" tooltipPosition=\"top\"\r\n              style=\"color:#ccc;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n            <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n            <!-- <span (click)=\"serveClick(item)\" class=\"icon iconfont\" style=\"color:#19b0c8;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe605;</span> -->\r\n            <span class=\"icon iconfont\" *ngIf=\"item.fromStatus != '02'\" pTooltip=\"状态调整\" tooltipPosition=\"top\" style=\"color:#ccc;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe613;</span>\r\n            <span class=\"icon iconfont\" *ngIf=\"item.fromStatus == '02'\" pTooltip=\"状态调整\" tooltipPosition=\"top\" (click)=\"adjust(item)\"\r\n              style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe613;</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n      <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n        <div style=\"float:right;padding-top:100px;\">\r\n          <u-paginator [first]=\"first\" rows=\"{{productQBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-available-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-available-view-details>\r\n    <!-- <product-line-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></product-line-add> -->\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text_center {\n  text-align: center; }\n\n.text_right {\n  text-align: right; }\n\n.width100 {\n  width: 90%; }\n\n.ecolor {\n  background-color: #ebebeb; }\n\n:host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.overflow {\n  max-height: 700px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.adventure {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.adventure .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1200px !important;\n  height: 80% !important;\n  min-height: 760px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2F2YWlsYWJsZS1wcm9kdWN0L3NhbGUtcHJvZHVjdC12aWV3L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxhdmFpbGFibGUtcHJvZHVjdFxcc2FsZS1wcm9kdWN0LXZpZXdcXHNhbGUtcHJvZHVjdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzVCO0VBQ0cseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFGZjtJQUlRLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQUl0QjtFQUNHLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBRy9CO0VBQ0csOEJBQThCLEVBQUE7O0FBR2pDO0VBQ0csOEJBQThCLEVBQUE7O0FBR2pDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvYXZhaWxhYmxlLXByb2R1Y3Qvc2FsZS1wcm9kdWN0LXZpZXcvc2FsZS1wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC53aWR0aDEwMCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgfVxyXG5cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAub3ZlcmZsb3cge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFkdmVudHVyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAuZmlsdGVyLWRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAgIHdpZHRoOiAxMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IC5hY3RpdmUge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IGxpIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXc6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SaleProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductViewComponent", function() { return SaleProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/sale-product.bean */ "./src/app/pages/tzb/product-manage/available-product/bean/sale-product.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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


var SaleProductViewComponent = /** @class */ (function () {
    function SaleProductViewComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.PostsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["PostsManageBean"]();
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["ProductQBean"]();
        //头部标题
        this.all_title = '可售产品查看';
        this.select_1 = []; //默认下拉
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //列表无数据
        //组件的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        this.display = false;
        this.isdisabled = true;
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        this.product_base_arr = []; //基础产品下拉
        this.line_value = [{
                productLineId: ''
            }]; //产品线下拉值
        this.group_value = [{
                groupId: ''
            }]; //产品组下拉值
        this.product_base_value = []; //基础产品
        //分页控制
        this.first = 0;
        this.codeValues(); //调用方法，获取全部码值
        this.saleProductType = this.code['fromStatusList'];
    }
    ; //可售产品-产品状态
    SaleProductViewComponent.prototype.ngOnInit = function () {
        this.select_line = [
            { label: '请选择', value: "" },
        ];
        // this.saleProductType = [
        // 	{ label: '请选择', value: "" },
        // 	// { label: '已生效', value: "01" },
        // 	// { label: '待生效', value: "02" },
        // 	// { label: '升级中', value: "03" },
        // 	// { label: '待删除', value: "04" },
        // 	// { label: '待复核', value: "99" },
        // 	{ label: '待生效', value: "00" },
        // 	{ label: '待复核', value: "01" },
        // 	{ label: '已生效', value: "02" },
        // 	{ label: '待删除', value: "04" },
        // 	{ label: '升级中', value: "06" },
        // ];
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.select_1 = [
            { label: '请选择', value: "" },
        ];
        this.cars_2 = [];
        this.line_query();
        this.first = 0;
        this.searchList();
    };
    SaleProductViewComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //下拉菜单
    SaleProductViewComponent.prototype.getDropdown = function () {
    };
    //查询始终第一页
    SaleProductViewComponent.prototype.querySecle = function () {
        this.productQBean.pageSize = 10;
        this.productQBean.pageNum = 1;
        this.first = 0;
        this.searchList();
    };
    // 查询
    SaleProductViewComponent.prototype.searchList = function () {
        var _this = this;
        this.productQBean.productLineId = this.line_value.productLineId; // 产品线
        this.productQBean.productGroupId = this.group_value.groupId; // 产品组
        this.productQBean.productTemplateId = this.product_base_value.tplId;
        this.productManageHttpService.findAvailableProductList(this.productQBean).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.cars_2 = data.resultList;
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
    SaleProductViewComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '可售产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    SaleProductViewComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    // 删除
    SaleProductViewComponent.prototype.deleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = { productId: item.productId };
                _this.productManageHttpService.deleteAvailableProduct(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
                        _this.searchList();
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
    SaleProductViewComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.productQBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.productQBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.productQBean.pageSize;
        //调用查询的方法
        this.searchList();
        this.productQBean.pageNum = 1;
    };
    // 产品线下拉
    SaleProductViewComponent.prototype.line_query = function () {
        var _this = this;
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["ProductQBean"]();
        this.productManageHttpService.productCategoryLineQueryList(this.productQBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.productLineName;
                    obj['value'] = item;
                    _this.select_line.push(obj);
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
    // 产品组修改
    SaleProductViewComponent.prototype.lineVelue = function () {
        console.log(this.line_value);
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.group_value = "";
        this.product_base_value = "";
        this.group_query();
    };
    // 产品组下拉
    SaleProductViewComponent.prototype.group_query = function () {
        var _this = this;
        var parm = { productLineId: this.line_value.productLineId };
        this.productManageHttpService.productCategoryGroupInfoQueryList(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productGroupInfoList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.groupName;
                    obj['value'] = item;
                    _this.select_group.push(obj);
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
    // 产品组修改
    SaleProductViewComponent.prototype.groupChange = function () {
        var _this = this;
        console.log(this.group_value);
        this.product_base_value = "";
        //查询基础产品id
        var params = {
            groupId: this.group_value.groupId,
            statusFlag: 'Y'
        };
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.productManageHttpService.pdGroupTemplateQuery(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var arr = [];
                data.groupTempList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.tplName;
                    obj['value'] = item;
                    _this.product_base_arr.push(obj);
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
    };
    // 重置
    SaleProductViewComponent.prototype.resetClick = function () {
        this.line_value = '';
        this.group_value = '';
        this.product_base_value = '';
        this.select_group = [{ label: '请先选择产品线', value: "" }];
        this.product_base_arr = [{ label: '请先选择产品组', value: "" }];
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_2__["ProductQBean"]();
    };
    //按钮权限
    SaleProductViewComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    SaleProductViewComponent.prototype.serveClick = function (item) {
        var _this = this;
        if (this.isdisabled == true) {
            this.isdisabled = false;
            this.confirmationService.confirm({
                message: '确认要提交吗?',
                accept: function () {
                    var pbj = {
                        productId: item.productId,
                    };
                    _this.productManageHttpService.startWorkFlowLaunchForProduct(pbj).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.searchList();
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                        }
                    }, function (error) {
                        _this.isdisabled = true;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                    });
                },
                reject: function () {
                    _this.isdisabled = true;
                }
            });
        }
    };
    // 状态调整
    SaleProductViewComponent.prototype.adjust = function (item) {
        var _this = this;
        this.isdisabled = false;
        this.confirmationService.confirm({
            message: '确认要调整状态吗?',
            accept: function () {
                var dataA = {
                    productId: item.productId,
                    productType: 'SALE_PRODUCT',
                    statusId: '06'
                };
                _this.productManageHttpService.updateProductStatus(dataA).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.searchList();
                        _this.isdisabled = true;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.isdisabled = true;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.isdisabled = true;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                });
            },
            reject: function () {
                _this.isdisabled = true;
            }
        });
    };
    SaleProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-product-view',
            template: __webpack_require__(/*! ./sale-product-view.component.html */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-view.component.scss */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-product-view.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], SaleProductViewComponent);
    return SaleProductViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~available-product-available-product-module~product-summary-product-summary-module.js.map