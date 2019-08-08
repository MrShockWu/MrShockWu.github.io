(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~credit-product-c~ed8d17d3"],{

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product-component.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product-component.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SaleProductComponentBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductComponentBean", function() { return SaleProductComponentBean; });
var SaleProductComponentBean = /** @class */ (function () {
    function SaleProductComponentBean() {
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return SaleProductComponentBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts ***!
  \*********************************************************************************************/
/*! exports provided: PostsManageBean, productNumBean, ProductQBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManageBean", function() { return PostsManageBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productNumBean", function() { return productNumBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQBean", function() { return ProductQBean; });
var PostsManageBean = /** @class */ (function () {
    function PostsManageBean() {
        this.productId = ''; //可售产品id
        this.productTypeId = 'AvailableProduct'; //（默认值）可售产品类型id
        this.operationTemplateId = ' '; //基础产品id
        this.description = ''; //可售描述
        this.productFeature = []; //属性值
        this.productContent = [
            {
                channelId: '',
                imageList: [],
                fileList: [],
                infoList: [],
            }
        ];
    }
    return PostsManageBean;
}());

//产品编号
var productNumBean = /** @class */ (function () {
    function productNumBean() {
    }
    return productNumBean;
}());

//产品查询
var ProductQBean = /** @class */ (function () {
    function ProductQBean() {
        this.productTypeId = ''; //			可售产品类型id	String	Y
        this.pageSize = 10; //			每页显示数量	Integer	Y
        this.pageNum = 1; //			当前页	Integer	Y
    }
    return ProductQBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreditProductConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditProductConfigModule", function() { return CreditProductConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-product-view/sale-product-view.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-product-config/sale-product-config.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.ts");
/* harmony import */ var _sale_product_config_global_directory_model_global_directory_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale-product-config/global-directory-model/global-directory-model.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sale-product-config/sale-product-config-manager/sale-product-config-manager.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale-product-config/sale-product-config-copy/sale-product-config-copy.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify-website/sale-product-modify-website.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_config_credit_product_config_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.routing */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.routing.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_config_sale_product_config_User_sale_product_config_User_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_component_sale_product_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.ts");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sale.service */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //可售产品查看
 //可售产品配置

 //可售产品修改
 //可售产品
 //可售产品--复制添加
 //可售产品--添加特殊属性
 //可售产品--站点包装费复制





var CreditProductConfigModule = /** @class */ (function () {
    function CreditProductConfigModule() {
    }
    CreditProductConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_credit_ccm_credit_product_config_credit_product_config_routing__WEBPACK_IMPORTED_MODULE_11__["CreditProductConfigRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"]
            ],
            declarations: [
                _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_3__["SaleProductViewComponent"],
                _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_4__["SaleProductConfigComponent"],
                _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_5__["SaleProductModifyComponent"],
                _sale_product_config_global_directory_model_global_directory_model_component__WEBPACK_IMPORTED_MODULE_6__["GlobalDirectoryModelComponent"],
                _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__["SaleProductConfigManagerComponent"],
                _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__["SaleProductConfigCopyComponent"],
                _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__["SaleProductModifySpecailComponent"],
                _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__["SaleProductModifyWebsiteComponent"],
                app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_12__["SaleViewDetailsComponent"],
                app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_config_sale_product_config_User_sale_product_config_User_component__WEBPACK_IMPORTED_MODULE_13__["SaleProductConfigUserComponent"],
                app_pages_tzb_custom_credit_ccm_credit_product_config_sale_product_component_sale_product_component_component__WEBPACK_IMPORTED_MODULE_14__["SaleProductComponentSelect"]
            ],
            exports: [
                _sale_product_config_sale_product_config_manager_sale_product_config_manager_component__WEBPACK_IMPORTED_MODULE_7__["SaleProductConfigManagerComponent"],
                _sale_product_config_sale_product_config_copy_sale_product_config_copy_component__WEBPACK_IMPORTED_MODULE_8__["SaleProductConfigCopyComponent"],
                _sale_product_modify_sale_product_modify_specail_sale_product_modify_specail_component__WEBPACK_IMPORTED_MODULE_9__["SaleProductModifySpecailComponent"],
                _sale_product_modify_sale_product_modify_website_sale_product_modify_website_component__WEBPACK_IMPORTED_MODULE_10__["SaleProductModifyWebsiteComponent"],
                _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_3__["SaleProductViewComponent"],
            ],
            entryComponents: [],
            providers: [
                _sale_service__WEBPACK_IMPORTED_MODULE_15__["SaleService"]
            ]
        })
    ], CreditProductConfigModule);
    return CreditProductConfigModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.routing.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/credit-product-config.routing.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreditProductConfigRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditProductConfigRouting", function() { return CreditProductConfigRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-product-view/sale-product-view.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.ts");
/* harmony import */ var _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale-product-config/sale-product-config.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.ts");
/* harmony import */ var _sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-product-view/sale-view-details/sale-view-details.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.ts");
/* harmony import */ var _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-product-modify/sale-product-modify.component */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.ts");

 //可售产品查看
 //可售产品新增
 //可售产品详情
 //可售产品修改
var routes = [
    {
        path: 'credit-product-view', component: _sale_product_view_sale_product_view_component__WEBPACK_IMPORTED_MODULE_1__["SaleProductViewComponent"],
    },
    {
        path: 'credit-product-details', component: _sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_3__["SaleViewDetailsComponent"],
    },
    {
        path: 'credit-product-config', component: _sale_product_config_sale_product_config_component__WEBPACK_IMPORTED_MODULE_2__["SaleProductConfigComponent"],
    },
    {
        path: 'credit-product-modify', component: _sale_product_modify_sale_product_modify_component__WEBPACK_IMPORTED_MODULE_4__["SaleProductModifyComponent"],
    },
];
var CreditProductConfigRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12 ecolor\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>组件编号:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input [(ngModel)]=\"componentViewBean.productFeatureCategoryId\" type=\"text\" pInputText style=\"width:60%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>组件名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input [(ngModel)]=\"componentViewBean.description\" type=\"text\" pInputText style=\"width:60%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12 text_center\">\r\n                <button pButton type=\"button\" (click)=\"querySecle()\" label=\"查询\"></button>\r\n                <button pButton type=\"button\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <span (click)=\"confirmChoose()\" class=\"icoColor\">确定选择</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12  base-table\">\r\n            <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' selectionMode=\"single\" [(selection)]=\"selectComponent\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'width':'38px'}\" selectionMode=\"single\"></p-column>\r\n                <p-column header=\"序号\" [style]=\"{'width':'100px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <span>{{ri+1}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureCategoryId\" header=\"组件编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"description\" header=\"组件名称\">\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n        <button pButton type=\"button\" (click)=\"closeComponentSelect()\" label=\"关闭\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ecolor {\n  background-color: #ebebeb; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 550px !important; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-height: 600px !important;\n  height: 60% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29tcG9uZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29uZmlnXFxzYWxlLXByb2R1Y3QtY29tcG9uZW50XFxzYWxlLXByb2R1Y3QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEseUJBQXlCLEVBQUE7O0FBR2pDO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDRyx1QkFBc0IsRUFBQSxFQUN6Qjs7QUFHTDtFQUNJLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2NyZWRpdC1jY20vY3JlZGl0LXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb21wb25lbnQvc2FsZS1wcm9kdWN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAudGV4dF9jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuZWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgfVxyXG59XHJcbi5vdmVyZmxvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgICAgICB3aWR0aDogNTUwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAgLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SaleProductComponentSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductComponentSelect", function() { return SaleProductComponentSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_product_config_bean_sale_product_component_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product-component.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product-component.bean.ts");
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




var SaleProductComponentSelect = /** @class */ (function () {
    function SaleProductComponentSelect(creditCcmService, confirmationService, commfunc) {
        this.creditCcmService = creditCcmService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
        // bean
        this.componentViewBean = new app_pages_tzb_custom_credit_ccm_credit_product_config_bean_sale_product_component_bean__WEBPACK_IMPORTED_MODULE_5__["SaleProductComponentBean"]();
        this.select_1 = []; //默认下拉
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        //头部标题
        this.all_title = '组件选择';
        //每页多少条
        this.pageSize = '10';
        this.display = false;
        //提示信息
        this.msgs = [];
        //分页控制
        this.first = 0;
        this.select_1 = [
            { label: '请选择', value: " " },
        ];
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请选择', value: " " },
        ];
    }
    SaleProductComponentSelect.prototype.ngOnInit = function () {
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请选择', value: " " },
        ];
        this.componentViewBean.pageSize = 10;
        this.componentViewBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 重置
    SaleProductComponentSelect.prototype.resetClick = function () {
        this.componentViewBean = new app_pages_tzb_custom_credit_ccm_credit_product_config_bean_sale_product_component_bean__WEBPACK_IMPORTED_MODULE_5__["SaleProductComponentBean"]();
    };
    //查询始终第一页
    SaleProductComponentSelect.prototype.querySecle = function () {
        this.componentViewBean.pageSize = 10;
        this.componentViewBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //查询
    SaleProductComponentSelect.prototype.queryClick = function () {
        var _this = this;
        this.componentViewBean.productCategoryLineId = this.line_value;
        this.componentViewBean.productCategoryGroupId = this.group_value;
        this.creditCcmService.productFeatureCategoryList(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.productFeatureCategoryList;
                _this.total = data.total;
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
    //分页
    SaleProductComponentSelect.prototype.paginate = function (event) {
        //每页显示的条数
        this.componentViewBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.componentViewBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.componentViewBean.pageSize;
        //调用查询的方法
        this.queryClick();
        this.componentViewBean.pageNum = 1;
    };
    // 确定选择
    SaleProductComponentSelect.prototype.confirmChoose = function () {
        var _this = this;
        if (this.selectComponent) {
            // 判断是否重复
            if (this.inValue) {
                var hasRepeat_1 = false;
                this.inValue.forEach(function (item) {
                    if (!hasRepeat_1 && item === _this.selectComponent.productFeatureCategoryId) {
                        hasRepeat_1 = true;
                    }
                });
                if (hasRepeat_1) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: '提示', detail: '该组件已被引入过！' });
                    return;
                }
            }
            // 不重复则需要查询组件属性信息并返回
            this.creditCcmService.findProductFeatureByCategoryIdCredit({ "productFeatureCategoryId": this.selectComponent.productFeatureCategoryId }).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.productFeatureTypeList === '' || data.productFeatureTypeList === undefined) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'info', summary: '提示', detail: '该组件下没有属性！' });
                        return;
                    }
                    var productFeatureCategoryName_1 = data.description;
                    data.productFeatureTypeList.forEach(function (item) {
                        item['productFeatureCategoryName'] = productFeatureCategoryName_1;
                    });
                    _this.outValue.emit(data);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: '提示', detail: '请选择一个组件！' });
        }
    };
    SaleProductComponentSelect.prototype.test = function () {
        if (this.inValue) {
            var hasRepeat_2 = false;
            this.inValue.forEach(function (item) {
                if (!hasRepeat_2 && item === "PC00000001") {
                    hasRepeat_2 = true;
                }
            });
            if (hasRepeat_2) {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: '提示', detail: '该组件已被引入过！' });
                return;
            }
        }
        var test = {
            "productFeatureCategoryList": [
                {
                    "productFeatureCategoryType": "REQUIRED",
                    "productFeatureCategoryId": "PC00000001",
                    "description": "产品基础组件",
                    "parentCategoryId": "产品基础组件",
                    "productFeatureTypeList": [
                        {
                            "productFeatureTypeId": "PCA0000002",
                            "productFeatureTypeLocalCode": "无效状态不允许销售",
                            "productFeatureList": [
                                {
                                    "productFeatureTypeId": "PCA0000002",
                                    "min": "",
                                    "def": "",
                                    "max": "",
                                    "valueType": "01",
                                    "productFeatureId": "F000000002",
                                    "productFeatureCategoryId": "PC00000001",
                                    "description": "有效",
                                    "productFeatureLocalCode": "1",
                                    "inc": "null"
                                }
                            ],
                            "featureType": "01",
                            "description": "产品状态",
                            "configLevel": "0"
                        }
                    ]
                }
            ]
        };
        this.outValue.emit(test);
    };
    // 关闭弹框
    SaleProductComponentSelect.prototype.closeComponentSelect = function () {
        this.closeDialog.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductComponentSelect.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SaleProductComponentSelect.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SaleProductComponentSelect.prototype, "closeDialog", void 0);
    SaleProductComponentSelect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-product-component-select',
            template: __webpack_require__(/*! ./sale-product-component.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-component.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-component/sale-product-component.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], SaleProductComponentSelect);
    return SaleProductComponentSelect;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/been/sale-product-config.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/been/sale-product-config.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: QueryVPListBean, QueryVOListBean, QueryOPTellerRBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryVPListBean", function() { return QueryVPListBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryVOListBean", function() { return QueryVOListBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryOPTellerRBean", function() { return QueryOPTellerRBean; });
var QueryVPListBean = /** @class */ (function () {
    function QueryVPListBean() {
    }
    return QueryVPListBean;
}());

var QueryVOListBean = /** @class */ (function () {
    function QueryVOListBean() {
    }
    return QueryVOListBean;
}());

var QueryOPTellerRBean = /** @class */ (function () {
    function QueryOPTellerRBean() {
        this.flag = 0;
    }
    return QueryOPTellerRBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts ***!
  \**************************************************************************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"head_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-tree [value]=\"treeData\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 margin\">\r\n        <button pButton type=\"button\" (click)=\"serve()\" label=\"确定\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .margin {\n  margin-left: 10%;\n  margin-top: 10%; }\n\n:host/deep/ .ui-tree {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL2dsb2JhbC1kaXJlY3RvcnktbW9kZWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjcmVkaXQtY2NtXFxjcmVkaXQtcHJvZHVjdC1jb25maWdcXHNhbGUtcHJvZHVjdC1jb25maWdcXGdsb2JhbC1kaXJlY3RvcnktbW9kZWxcXGdsb2JhbC1kaXJlY3RvcnktbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUt2QjtFQUNJLHNCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL2dsb2JhbC1kaXJlY3RvcnktbW9kZWwvZ2xvYmFsLWRpcmVjdG9yeS1tb2RlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAudGV4dF9jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubWFyZ2lue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ebruW9leagkVxyXG46aG9zdC9kZWVwLyAudWktdHJlZSB7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: GlobalDirectoryModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDirectoryModelComponent", function() { return GlobalDirectoryModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/global-directory-model.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function GlobalDirectoryModelComponent(creditCcmService, commfunc) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.head_title = '全局目录';
        //提示信息
        this.msgs = [];
        this.listData = {};
        this.display = false;
        //组件的参数
        this.updateValue = [];
        this.globalDirectoryBean = new _bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_2__["GlobalDirectoryBean"]();
    }
    GlobalDirectoryModelComponent.prototype.ngOnInit = function () {
        this.query_line();
    };
    GlobalDirectoryModelComponent.prototype.query_line = function () {
        var _this = this;
        this.creditCcmService.productCategoryLineQueryList(this.globalDirectoryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    GlobalDirectoryModelComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        if (event.node.id == "jichu") {
            var param = {
                productTemplateId: event.node.value.tplId
            };
            var arr = [];
            this.creditCcmService.findAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.cars_2 = data.resultList;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
            var params = {
                productId: event.node.value.tplId
            };
            this.creditCcmService.getBaseProduct(params).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.listData = data.resultList[0];
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    //+号点击
    GlobalDirectoryModelComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        if (event.node.id == "line") {
            var parmData1 = {
                pageNum: 1,
                pageSize: 10000,
                productLineId: event.node.value.productLineId,
            };
            var arr_1 = [];
            this.creditCcmService.productCategoryGroupInfoQueryList(parmData1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "group") {
            var param = {
                groupId: event.node.value.groupId
            };
            var arr_2 = [];
            this.creditCcmService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item['tplName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "jichu") {
            var param = {
                productTemplateId: event.node.value.tplId
            };
            event.node.children = [];
        }
    };
    // 详情
    GlobalDirectoryModelComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '可售产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    GlobalDirectoryModelComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    GlobalDirectoryModelComponent.prototype.serve = function () {
        var parm = {
            display: false,
            list: this.listData
        };
        this.outValue.emit(parm);
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
            selector: 'app-credit-global-directory-model',
            template: __webpack_require__(/*! ./global-directory-model.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.html"),
            styles: [__webpack_require__(/*! ./global-directory-model.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/global-directory-model.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], GlobalDirectoryModelComponent);
    return GlobalDirectoryModelComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>岗位标识:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input [(ngModel)]=\"queryVPListBean.postId\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>岗位名称:</label>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <input [(ngModel)]=\"queryVPListBean.postName\" type=\"text\" pInputText style=\"width:65%\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button (click)=\"queryclick()\" pButton type=\"button\" label=\"查询\"></button>\r\n            <button pButton type=\"button\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            <button pButton type=\"button\" (click)=\"server()\" label=\"确认\"></button>\r\n            <button pButton type=\"button\" (click)=\"close()\" label=\"取消\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <p-dataTable [value]=\"lists_1\" class='base-table' emptyMessage=\"没有查找到数据\">\r\n                <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_traol\" binary=\"false\" (click)=\"choose_traols()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <p-checkbox [(ngModel)]=\"choose_tr1\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_tros(ri)\"></p-checkbox>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"postId\" header=\"岗位标识\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"postName\" header=\"岗位名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"description\" header=\"岗位描述\">\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.hidden_lc {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb25maWctVXNlci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZy1Vc2VyXFxzYWxlLXByb2R1Y3QtY29uZmlnLVVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnLVVzZXIvc2FsZS1wcm9kdWN0LWNvbmZpZy1Vc2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51bF9ib3ggdWwgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5oaWRkZW5fbGN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: SaleProductConfigUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigUserComponent", function() { return SaleProductConfigUserComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../been/sale-product-config.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/been/sale-product-config.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaleProductConfigUserComponent = /** @class */ (function () {
    function SaleProductConfigUserComponent(creditCcmService, route) {
        this.creditCcmService = creditCcmService;
        this.route = route;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queryVPListBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__["QueryVPListBean"]();
        this.lists_1 = [];
        this.msgs = [];
        this.choose_tr1 = [];
        this.select_atr2 = [];
        this.select_atr3 = [];
        this.department = [];
        this.choose_traol = false; //组件全选;
        this.pageSize = 10; //			每页显示数量	String(20)
        this.pageNum = 1; //		当前页	String(20)
        //分页控制
        this.first = 0;
    }
    SaleProductConfigUserComponent.prototype.ngOnInit = function () {
        this.first = 0;
    };
    SaleProductConfigUserComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    SaleProductConfigUserComponent.prototype.queryEvent = function () {
        var _this = this;
        this.choose_tr1.forEach(function (item1) {
            var choosenum = 0;
            _this.department.forEach(function (items) {
                if (_this.lists_1[item1].postId == items.postId) {
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
                if (iteme.postId == items.postId) {
                    choosenu++;
                    choosen = k;
                }
            });
            if (choosenu > 0) {
                _this.department.splice(choosen, 1);
            }
        });
        this.choose_tr1 = [];
        this.choose_traol = false;
        var param = {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            postId: this.queryVPListBean.postId,
            postName: this.queryVPListBean.postName,
        };
        this.creditCcmService.queryVaguePostList(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.lists_1 = data.postList;
                _this.total = data.total;
                _this.lists_1.forEach(function (itemse, i) {
                    _this.department.forEach(function (items) {
                        if (itemse.postId == items.postId) {
                            var nue = i.toString();
                            _this.choose_tr1.push(nue);
                        }
                    });
                });
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
    //查询
    SaleProductConfigUserComponent.prototype.queryclick = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        this.queryEvent();
    };
    //分页
    SaleProductConfigUserComponent.prototype.paginate = function (event) {
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
    SaleProductConfigUserComponent.prototype.resetClick = function () {
        this.queryVPListBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__["QueryVPListBean"]();
    };
    SaleProductConfigUserComponent.prototype.server = function () {
        this.queryEvent();
        if (this.inValue == 'one') {
            var parmes = {
                value: this.inValue,
                display: false,
                depart: this.department,
            };
            this.outValue.emit(parmes);
        }
        if (this.inValue == 'two') {
            var parmes = {
                value: this.inValue,
                display: false,
                depart1: this.department,
            };
            this.outValue.emit(parmes);
        }
        if (this.inValue == 'tree') {
            var parmes = {
                value: this.inValue,
                display: false,
                depart2: this.department,
            };
            this.outValue.emit(parmes);
        }
    };
    SaleProductConfigUserComponent.prototype.close = function () {
        var parm = {
            display: false,
        };
        this.outValue.emit(parm);
    };
    //多选全选
    SaleProductConfigUserComponent.prototype.choose_traols = function () {
        this.select_atr2 = [];
        for (var i = 0; i < this.lists_1.length; i++) {
            if (this.choose_traol == true) {
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
    //多选按钮
    SaleProductConfigUserComponent.prototype.choose_tros = function (ri) {
        this.select_atr3 = [];
        for (var i = 0; i < this.lists_1.length; i++) {
            var k = void 0;
            k = i.toString();
            this.select_atr3.push(k);
        }
        if (this.select_atr3.length === this.choose_tr1.length) {
            this.choose_traol = true;
        }
        else {
            this.choose_traol = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], SaleProductConfigUserComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleProductConfigUserComponent.prototype, "outValue", void 0);
    SaleProductConfigUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credit-sale-product-config-User',
            template: __webpack_require__(/*! ./sale-product-config-User.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config-User.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-User/sale-product-config-User.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SaleProductConfigUserComponent);
    return SaleProductConfigUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <header-title [Info]=\"head_title\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-tree [value]=\"treeData\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6 margin\">\r\n                <button pButton type=\"button\" (click)=\"serve()\" label=\"确定\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.hidden_lc {\n  visibility: hidden; }\n\n:host/deep/ .ui-tree {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb25maWctY29weS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZy1jb3B5XFxzYWxlLXByb2R1Y3QtY29uZmlnLWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxzQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnLWNvcHkvc2FsZS1wcm9kdWN0LWNvbmZpZy1jb3B5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51bF9ib3ggdWwgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH0gXHJcbn1cclxuLmhpZGRlbl9sY3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLy/nm67lvZXmoJFcclxuOmhvc3QvZGVlcC8gLnVpLXRyZWUge1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: SaleProductConfigCopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigCopyComponent", function() { return SaleProductConfigCopyComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _global_directory_model_bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-directory-model/bean/global-directory-model.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/global-directory-model/bean/global-directory-model.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function SaleProductConfigCopyComponent(creditCcmService, commfunc, route) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.route = route;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.head_title = '全局产品目录';
        //提示信息
        this.msgs = [];
        this.listData = {};
        this.display = false;
        //组件的参数
        this.updateValue = [];
        this.globalDirectoryBean = new _global_directory_model_bean_global_directory_model_bean__WEBPACK_IMPORTED_MODULE_3__["GlobalDirectoryBean"]();
    }
    SaleProductConfigCopyComponent.prototype.ngOnInit = function () {
        this.query_line();
    };
    SaleProductConfigCopyComponent.prototype.ngOnChanges = function () {
    };
    SaleProductConfigCopyComponent.prototype.query_line = function () {
        var _this = this;
        this.creditCcmService.productCategoryLineQueryList(this.globalDirectoryBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    SaleProductConfigCopyComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        if (event.node.id == "keshou") {
            var param = {
                productTemplateId: event.node.value.operationTemplateId
            };
            var arr = [];
            this.creditCcmService.findProAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.cars_2 = data.resultList;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
            var params = {
                productId: event.node.value.productId
            };
            this.creditCcmService.getAvailableProduct(params).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.listData = data;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    //+号点击
    SaleProductConfigCopyComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        if (event.node.id == "line") {
            var parmData1 = {
                pageNum: 1,
                pageSize: 10000,
                productLineId: event.node.value.productLineId,
            };
            var arr_1 = [];
            this.creditCcmService.productCategoryGroupInfoQueryList(parmData1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "group") {
            var param = {
                groupId: event.node.value.groupId
            };
            var arr_2 = [];
            this.creditCcmService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item['tplName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "jichu") {
            var param = {
                pageNum: 1,
                pageSize: 10000,
                productTemplateId: event.node.value.tplId
            };
            var arr_3 = [];
            this.creditCcmService.findProAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.resultList.forEach(function (item) {
                        var tempObj = { id: 'keshou' };
                        tempObj['label'] = item['productName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_3.push(tempObj);
                    });
                    event.node.children = arr_3;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    SaleProductConfigCopyComponent.prototype.serve = function () {
        var parmes = {
            display: false,
            depart: this.listData,
        };
        this.outValue.emit(parmes);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], SaleProductConfigCopyComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleProductConfigCopyComponent.prototype, "outValue", void 0);
    SaleProductConfigCopyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credit-sale-product-config-copy',
            template: __webpack_require__(/*! ./sale-product-config-copy.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config-copy.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-copy/sale-product-config-copy.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SaleProductConfigCopyComponent);
    return SaleProductConfigCopyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g-12 ui-md-2 text_right\"><label>岗位名称 :</label></div>\r\n            <div class=\"ui-g-12 ui-md-4\"><input [(ngModel)]=\"queryOPTellerRBean.postName\" type=\"text\" pInputText style=\"width:65%\"></div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\"><label>机构名称:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4\"><input [(ngModel)]=\"queryOPTellerRBean.partyName\" type=\"text\" pInputText style=\"width:65%\"></div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\"><label>人员标识:</label></div>\r\n            <div class=\"ui-g-12 ui-md-4\"><input [(ngModel)]=\"queryOPTellerRBean.userLoginId\" type=\"text\" pInputText style=\"width:65%\"></div>\r\n            <div class=\"ui-g-12 ui-md-2 text_right\"><label>人员名称 :</label></div>\r\n            <div class=\"ui-g-12 ui-md-4\"><input [(ngModel)]=\"queryOPTellerRBean.userName\" type=\"text\" pInputText style=\"width:65%\"></div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button (click)=\"queryclick()\" pButton type=\"button\" label=\"查询\"></button>\r\n            <button pButton type=\"button\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            <button pButton type=\"button\" (click)=\"server()\" label=\"确认\"></button>\r\n            <button pButton type=\"button\" (click)=\"close()\" label=\"取消\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <p-dataTable [value]=\"lists_1\" class='base-table' emptyMessage=\"没有查找到数据\">\r\n                <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_tral\" binary=\"false\" (click)=\"choose_trals()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <p-checkbox [(ngModel)]=\"choose_tr1\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_trss(ri)\"></p-checkbox>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"userLoginId\" header=\"人员标识\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"userName\" header=\"人员名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"postName\" header=\"岗位名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"partyName\" header=\"机构名称\">\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.hidden_lc {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL3NhbGUtcHJvZHVjdC1jb25maWctbWFuYWdlci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LWNvbmZpZy1tYW5hZ2VyXFxzYWxlLXByb2R1Y3QtY29uZmlnLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnLW1hbmFnZXIvc2FsZS1wcm9kdWN0LWNvbmZpZy1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51bF9ib3ggdWwgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5oaWRkZW5fbGN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: SaleProductConfigManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigManagerComponent", function() { return SaleProductConfigManagerComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../been/sale-product-config.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/been/sale-product-config.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function SaleProductConfigManagerComponent(creditCcmService, route) {
        this.creditCcmService = creditCcmService;
        this.route = route;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queryOPTellerRBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__["QueryOPTellerRBean"]();
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
        this.creditCcmService.queryOrgPostTellerRelation(param).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
        this.queryOPTellerRBean = new _been_sale_product_config_bean__WEBPACK_IMPORTED_MODULE_2__["QueryOPTellerRBean"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], SaleProductConfigManagerComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleProductConfigManagerComponent.prototype, "outValue", void 0);
    SaleProductConfigManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credit-sale-product-config-manager',
            template: __webpack_require__(/*! ./sale-product-config-manager.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config-manager.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config-manager/sale-product-config-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_3__["CreditCcmService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SaleProductConfigManagerComponent);
    return SaleProductConfigManagerComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container ui-g module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"head_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 height  border\">\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='0'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right margin_add\">\r\n            <label appValidation>选择的产品:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\">\r\n            <div class=\"ui-g-12 ui-md-6 margin_add text_left saled\">\r\n              <p-radioButton *ngIf=\"selectedValue=='templateAdd'\" name=\"addName\" value=\"copyAdd\" label=\"\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n              <p-radioButton hidden *ngIf=\"selectedValue=='copyAdd'\" name=\"addName\" value=\"copyAdd\" label=\"\" [(ngModel)]=\"selectedValue\"\r\n                class=\"radiocolor\"></p-radioButton>\r\n              <input type=\"text\" disabled [(ngModel)]=\"copy_product_value\" pInputText style=\"width:30%\">\r\n              <button class=\"qbuttons\" *ngIf=\"selectedValue=='copyAdd'\" (click)=\"choicecopy()\" type=\"button\">\r\n                <span>...</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <form [formGroup]=\"userform\" *ngIf=\"selectedValue=='copyAdd'\">\r\n            <div class=\"ui-g-12 ui-md-6 padding\">\r\n              <div class=\"ui-g-12 ui-md-4  text_right\">\r\n                <label appValidation>产品名称:</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-8\">\r\n                <input disabled=\"true\" name=\"product_name_valuet\" formControlName=\"product_name_valuet\" [(ngModel)]=\"product_name_valuet\"\r\n                  type=\"text\" pInputText style=\"width:53%\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['product_name_valuet'].valid&&userform.controls['product_name_valuet'].dirty\">\r\n                  <span [hidden]=\"!userform.hasError('pattern','product_name_valuet')\">可售产品输入不合法！</span>\r\n                  <span [hidden]=\"!userform.hasError('required','product_name_valuet')\"> 请填写可售产品名称！</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6 padding\">\r\n              <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                <label appValidation>产品线:</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-8\">\r\n                <input name=\"product_line_value\" disabled formControlName=\"product_line_value\" [(ngModel)]=\"product_line_value\" type=\"text\"\r\n                  pInputText style=\"width:53%\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6 padding\">\r\n              <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                <label appValidation>产品组:</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-8\">\r\n                <input name=\"product_group_value\" disabled formControlName=\"product_group_value\" [(ngModel)]=\"product_group_value\" type=\"text\"\r\n                  pInputText style=\"width:53%\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6 padding\">\r\n              <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                <label appValidation>基础产品:</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-8\">\r\n                <input name=\"product_base_copy\" disabled formControlName=\"product_base_copy\" [(ngModel)]=\"product_base_copy\" type=\"text\"\r\n                  pInputText style=\"width:53%\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12 padding\">\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>详细描述:</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-10\">\r\n                <textarea disabled name=\"product_content_valuet\" formControlName=\"product_content_valuet\" [(ngModel)]=\"product_content_valuet\"\r\n                  pInputTextarea style=\"width:82%\"></textarea>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <p-tabView>\r\n            <p-tabPanel header=\"通用信息\">\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <form [formGroup]=\"userformDate\">\r\n                    <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                      <label appValidation>引入日期</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-3\">\r\n                      <p-calendar disabled=\"true\" (onSelect)=\"refresh()\" name=\"transferedDateFrom\" formControlName=\"transferedDateFrom\" [(ngModel)]=\"transferedDateFrom\"\r\n                        [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                        [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                      <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['transferedDateFrom'].valid&&userformDate.controls['transferedDateFrom'].dirty\">\r\n                        请填写引入日期！\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                      <label appValidation>截至日期</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-3\">\r\n                      <p-calendar disabled=\"true\" *ngIf=\"showFlag\" name=\"transferedDateTo\" formControlName=\"transferedDateTo\" [(ngModel)]=\"transferedDateTo\"\r\n                        [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                        [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\" [minDate]=\"transferedDateFrom\">\r\n                      </p-calendar>\r\n                      <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['transferedDateTo'].valid && userformDate.controls['transferedDateTo'].dirty\">\r\n                        请填写截至日期！\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\"></div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"管理信息\">\r\n              <div class=\"ui-g-12\">\r\n                <form [formGroup]=\"userformValue\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>产品币种</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-dropdown disabled=\"true\" name=\"productCurrency\" formControlName=\"productCurrency\" [options]=\"select_1\" [(ngModel)]=\"productCurrency\"></p-dropdown>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['productCurrency'].valid&&userformValue.controls['productCurrency'].dirty\">\r\n                          请选择产品币种！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>表内表外</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-dropdown disabled=\"true\" name=\"inOut\" formControlName=\"inOut\" [options]=\"select_2\" [(ngModel)]=\"inOut\"></p-dropdown>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['inOut'].valid&&userformValue.controls['inOut'].dirty\">\r\n                          请选择表内表外！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label>CRM产品树编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"crmValue\" formControlName=\"crmValue\" [(ngModel)]=\"crmValue\" type=\"text\" pInputText style=\"width: 45%\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>业务品种编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"businessValue\" formControlName=\"businessValue\" [(ngModel)]=\"businessValue\" type=\"text\" pInputText\r\n                          style=\"width: 45%\">\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['businessValue'].valid&&userformValue.controls['businessValue'].dirty\">\r\n                          请填写业务品种编号！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label>子业务品种编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"cbusinessValue\" formControlName=\"cbusinessValue\" [(ngModel)]=\"cbusinessValue\" type=\"text\" pInputText\r\n                          style=\"width: 45%\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>营销部门</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"saleDepartment\" formControlName=\"saleDepartment\" [(ngModel)]='saleDepartment'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"sheMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['saleDepartment'].valid&&userformValue.controls['saleDepartment'].dirty\">\r\n                          请选择营销部门！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>管理部门</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"cfsaleDepartment\" formControlName=\"cfsaleDepartment\" [(ngModel)]='cfsaleDepartment'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"lveMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['cfsaleDepartment'].valid&&userformValue.controls['cfsaleDepartment'].dirty\">\r\n                          请选择管理部门！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>产品经理</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"productManager\" formControlName=\"productManager\" [(ngModel)]='productManager'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"shelveMain2()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['productManager'].valid&&userformValue.controls['productManager'].dirty\">\r\n                          请选择产品经理！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 margin_add\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right margin_add\">\r\n                        <label appValidation>销售人员岗位</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds margin_add\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"saleUser\" formControlName=\"saleUser\" [(ngModel)]='saleUser'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"shelveMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['saleUser'].valid&&userformValue.controls['saleUser'].dirty\">\r\n                          请选择销售人员岗位！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"特殊属性\">\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <p-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                      <p-column [style]=\"{'text-align':'center'}\">\r\n                        <ng-template pTemplate=\"header\">\r\n                          <label>选择</label>\r\n                        </ng-template>\r\n                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          <p-checkbox [(ngModel)]=\"choose_tr\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                        </ng-template>\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          {{col.attrType|codeValuePie:temporary}}\r\n                        </ng-template>\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性取值\">\r\n                      </p-column>\r\n                    </p-dataTable>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 text_left saled\">\r\n                    <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"delAttr()\">删除</button>\r\n                    <button disabled=\"true\" class=\"qbuttons qbuttones\" type=\"button\" (click)=\"addAttr()\">添加属性</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"产品营销\">\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 ui-md-6 mwidth\">\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>产品说明书</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\">\r\n                          <p-radioButton disabled=\"true\" name=\"group1\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton>\r\n                          <p-radioButton disabled=\"true\" name=\"group1\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val1\" inputId=\"opt2\"></p-radioButton>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='TEXT'\">\r\n                          <textarea disabled=\"true\" pInputTextarea [(ngModel)]=\"productMarketing\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='FILE'\">\r\n                          <p-fileUpload disabled=\"true\" (onUpload)=\"load21($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                            url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                            invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                          </p-fileUpload>\r\n                          <div *ngIf=\"files21.length>0\">\r\n                            <div style=\"margin:10px\" *ngFor=\"let item of files21\">{{item.name}}\r\n                              <button disabled=\"true\" pButton (click)=\"deleta21(item)\" type=\"button\">删除</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>产品购买协议</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\">\r\n                          <p-radioButton disabled=\"true\" name=\"group2\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val2\" inputId=\"opt3\"></p-radioButton>\r\n                          <p-radioButton disabled=\"true\" name=\"group2\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val2\" inputId=\"opt4\"></p-radioButton>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='TEXT'\">\r\n                          <textarea disabled=\"true\" pInputTextarea [(ngModel)]=\"productshopping\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='FILE'\">\r\n                          <p-fileUpload disabled=\"true\" (onUpload)=\"load22($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                            url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                            invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                          </p-fileUpload>\r\n                          <div *ngIf=\"files22.length>0\">\r\n                            <div style=\"margin:10px\" *ngFor=\"let item of files22\">{{item.name}}\r\n                              <button disabled=\"true\" pButton (click)=\"deleta22(item)\" type=\"button\">删除</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>操作手册</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\">\r\n                          <p-radioButton disabled=\"true\" name=\"group3\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val3\" inputId=\"opt5\"></p-radioButton>\r\n                          <p-radioButton disabled=\"true\" name=\"group3\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val3\" inputId=\"opt6\"></p-radioButton>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='TEXT'\">\r\n                          <textarea disabled=\"true\" pInputTextarea [(ngModel)]=\"operationmanual\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='FILE'\">\r\n                          <p-fileUpload disabled=\"true\" (onUpload)=\"load23($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                            url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                            invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                          </p-fileUpload>\r\n                          <div *ngIf=\"files23.length>0\">\r\n                            <div style=\"margin:10px\" *ngFor=\"let item of files23\">{{item.name}}\r\n                              <button disabled=\"true\" pButton (click)=\"deleta23(item)\" type=\"button\">删除</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6 mwidth\">\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>营销活动</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\"></div>\r\n                        <div class=\"ui-g-12 ui-md-9\">\r\n                          <textarea disabled=\"true\" pInputTextarea [(ngModel)]=\"managememntactive\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>营销话术</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\"></div>\r\n                        <div class=\"ui-g-12 ui-md-9\">\r\n                          <textarea disabled=\"true\" pInputTextarea [(ngModel)]=\"managememntspeech\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 padding\">\r\n                    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                      <label>视频</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-3\"></div>\r\n                        <div class=\"ui-g-12 ui-md-9\">\r\n                          <p-fileUpload disabled=\"true\" (onUpload)=\"load24($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                            url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"video/*\">\r\n                          </p-fileUpload>\r\n                          <div *ngIf=\"files24.length>0\">\r\n                            <div style=\"margin:10px\" *ngFor=\"let item of files24\">{{item.name}}\r\n                              <button disabled=\"true\" pButton (click)=\"deleta24(item)\" type=\"button\">删除</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n          </p-tabView>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='2'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n          <span (click)=\"chooseComponent()\" class=\"icoColor\">引入组件</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <p-dataTable [(value)]=\"cars_3\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_trall2\" binary=\"false\" (click)=\"choose_trall()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <p-checkbox [(ngModel)]=\"choose_tr2\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_trs(ri)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"description\" header=\"组件名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"parentCategoryId\" header=\"组件描述\">\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='3'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g forcolor\">\r\n            <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n              <label class=\"un_active\" *ngFor=\"let col of special_attr2;let i = index\" (click)=\"dianji(i,col)\" [ngClass]=\"{'active':showClass == col.description}\">{{col.description}}\r\n                <div class=\"dline\"></div>\r\n              </label>\r\n            </div>\r\n            <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n              <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n              <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let col of special_attr2;let i = index\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i==aIndex\">\r\n                <p-dataTable [value]=\"cars_attrbute\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                  <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"description\" header=\"属性名称\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      {{col.configLevel|codeValuePie:configLevel}}\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"displayFlag\" header=\"是否展示\">\r\n                    <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                      <p-radioButton value=\"1\" label=\"是\" [(ngModel)]=\"car.displayFlag\"></p-radioButton>\r\n                      <p-radioButton value=\"2\" label=\"否\" [(ngModel)]=\"car.displayFlag\"></p-radioButton>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>全选</label>\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <div *ngIf=\"item.featureType =='01'\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <p-checkbox [(ngModel)]=\"item['checkDate']\" disabled binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"item.featureType =='02'\">\r\n                      </div>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column>\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>取值范围</label>\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                            <p-checkbox value=\"items.productFeatureId\" disabled [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                              binary=\"true\"></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                            <p-checkbox value=\"items.productFeatureId\" [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                              binary=\"true\"></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <div *ngFor=\"let items of item.productFeatureList\">\r\n                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <div *ngFor=\"let items of item.productFeatureList\">\r\n                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                              <span>({{items.min}} -- {{items.max}})</span>\r\n                            </div>\r\n                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                  </p-column>\r\n                </p-dataTable>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='4'\">\r\n        <div class=\"ui-g-12 basetable\">\r\n          <thead>\r\n            <tr>\r\n              <td>属性编码</td>\r\n              <td>属性名称</td>\r\n              <td>属性序号</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <div class=\"ui-g-12 content\">\r\n              <div class=\"ui-g-12\" *ngFor=\"let category of special_attr2\">\r\n                <!-- <p>{{category.description}}</p> -->\r\n                <tr class=\"widths\" *ngFor=\"let type of category.productFeatureTypeList\">\r\n                  <span *ngIf=\"type.displayFlag == '1'\">\r\n                    <td>{{type.productFeatureTypeId}}</td>\r\n                    <td>{{type.description}}</td>\r\n                    <td>\r\n                      <input type=\"text\" [(ngModel)]=\"type.sequenceNum\" pInputText>\r\n                    </td>\r\n                  </span>\r\n                </tr>\r\n              </div>\r\n            </div>\r\n          </tbody>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='5'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-5\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4 class=\"hcolor\">\r\n                <img src=\"assets/layout/images/titYJ.png\" />&nbsp;功能列表</h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-dataTable [value]=\"funList_left\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                </p-column>\r\n              </p-dataTable>\r\n              <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div class=\"ui-g-12 ui-md-12 sales\">\r\n              <button disabled=\"true\" class=\"margin_top mbutton\" (click)=\"rightFunMovre()\" type=\"button\"> >> </button>\r\n              <br>\r\n              <button disabled=\"true\" class=\"margin_top mbutton\" (click)=\"liftFunMovre()\" type=\"button\">\r\n                << </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4 class=\"hcolor\">\r\n                <img src=\"assets/layout/images/titYJ.png\" />&nbsp;已选功能列表</h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-dataTable [value]=\"funList_right\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox disabled=\"true\" [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" name=\"cc\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n              </p-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"vlaue1=='6'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12 box\">\r\n              <div class=\"ui-g forcolor\">\r\n                <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                  <label class=\"un_active\" *ngFor=\"let col of siteList\" [ngClass]=\"{'active':show == col.siteName}\" (click)=\"siteClick(col)\">\r\n                    <b>{{col.siteName}}</b>\r\n                  </label>\r\n                </div>\r\n                <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                  <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                  <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-tabView>\r\n                <p-tabPanel header=\"产品描述\">\r\n                  <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>制度摘要:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"systemSummary\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>营销话术:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"marketScript\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>期限描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"termDesc\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>额度描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"limitDesc\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>同业产品信息:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"sameProductlnformation\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>其他:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"others\" pInputTextarea style=\"width:64%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>特色描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items1; let i = index\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value11\" style=\"width:50%\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel1(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd1()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品短语:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items3; let i = index\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value31\" style=\"width:50%\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel3(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd3()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items2; let i = index\">\r\n                            <p-inputMask disabled=\"true\" mask=\"999\" [(ngModel)]=\"item.detailkey\" placeholder=\"请输入序号\" [style]=\"{'width':'15%'}\"></p-inputMask>\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value21\" placeholder=\"请输入标题\" style=\"width:25%\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value22\" style=\"width:40%\" placeholder=\"请输入描述内容\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel2(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd2()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"展示图片\">\r\n                  <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>首页展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load1($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files10.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files10\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta1(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>列表展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load2($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileTypeMessageDetail=\"只能上传图片\"\r\n                                invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files11.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files11\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta2(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>产品说明书:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load3($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files12.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files12\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta3(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>产品购买协议:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load4($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files13.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files13\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta4(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>列表视频:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load5($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"video/*\" invalidFileTypeMessageDetail=\"只能上传视频\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files14.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files14\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta5(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>详情展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load6($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files15.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files15\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta6(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <div class=\"bzdwidth bzswidth\">\r\n                            <label>详情描述:</label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items12; let i = index\">\r\n                            <div class=\"ui-g-12\">\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <p-inputMask disabled=\"true\" mask=\"999\" [(ngModel)]=\"item.detailkey1\" placeholder=\"请输入序号\" [style]=\"{'width':'35%'}\"></p-inputMask>\r\n                                <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetails\" placeholder=\"请输入描述内容\" style=\"width:59%\">\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-4\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let items of item.list\">{{items.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta7(item,items)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                              <div class=\"ui-g-12 ui-md-9\">\r\n                                <p-fileUpload disabled=\"true\" (onUpload)=\"load7($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                  url=\"{{UPLOAD}}\" maxFileSize=\"10485760\" accept=\"image/*\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                  invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                                </p-fileUpload>\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <button *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetails(i)\" label=\"删除\"></button>\r\n                                <button disabled=\"true\" pButton type=\"button\" (click)=\"doAddDetails()\" label=\"添加\"></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"文档手册\">\r\n                  <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files17; let i = index\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load8($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                invalidFileTypeMessageSummary=\"\">\r\n                              </p-fileUpload>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div class=\"ui-g-12 ui-md-6\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let items of item.liste\">{{items.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta8(item,items)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <p-inputMask disabled=\"true\" mask=\"999\" [(ngModel)]=\"item.detailkey2\" placeholder=\"请输入序号\"></p-inputMask>\r\n                                <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetailes\" placeholder=\"请输入描述内容\">\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <button disabled=\"true\" pButton type=\"button\" (click)=\"doAddDetailes()\" label=\"添加\"></button>\r\n                                <button disabled=\"true\" *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetailes(i)\" label=\"删除\"></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品说明书:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load9($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                              invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files18.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files18\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta9(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n              </p-tabView>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 \">\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <button disabled=\"true\" pButton type=\"button\" *ngIf=\"vlaue1=='6'\" (click)=\"webcopy()\" label=\"站点复制\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 \">\r\n    <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n      <button pButton type=\"button\" (click)=\"goBack()\" label=\"取消\"></button>\r\n      <button pButton type=\"button\" *ngIf=\"vlaue1!='0'\" (click)=\"prev()\" label=\"上一步\"></button>\r\n      <button pButton type=\"button\" *ngIf=\"vlaue1!='6'\" (click)=\"next()\" label=\"下一步\"></button>\r\n      <button pButton type=\"button\" [disabled]='iscompele' *ngIf=\"vlaue1=='6'\" (click)=\"allServe()\" label=\"保存\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 引入组件弹出框-->\r\n<p-dialog *ngIf='componentSelect' [(visible)]=\"componentSelect\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>组件选择</p-header>\r\n  <div class=\"overflow\">\r\n    <app-sale-product-component-select [inValue]=\"updateValue\" (outValue)=\"chooseComponentCall($event)\" (closeDialog)=\"componentSelect=false\"></app-sale-product-component-select>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 添加方式弹出框-->\r\n<p-dialog *ngIf='displayd' [(visible)]=\"displayd\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitlee}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-credit-global-directory-model *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"choiceTemplateCall($event)\"></app-credit-global-directory-model>\r\n    <credit-sale-product-config-copy [inValue]=\"updateValue\" *ngIf=\"showModel=='5'\" (outValue)=\"choicecopyCall($event)\"></credit-sale-product-config-copy>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 基本信息 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <credit-sale-product-config-User [inValue]=\"updateValue\" *ngIf=\"showModel=='2'\" (outValue)=\"choicesaleUser($event)\"></credit-sale-product-config-User>\r\n    <credit-sale-product-config-manager [inValue]=\"updateValue\" *ngIf=\"showModel=='4'\" (outValue)=\"choicemanager($event)\"></credit-sale-product-config-manager>\r\n    <credit-sale-product-modify-website [inValue]=\"updateValue\" *ngIf=\"showModel=='6'\" (outValue)=\"choicewebsite($event)\"></credit-sale-product-modify-website>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 属性弹出框-->\r\n<p-dialog *ngIf='displaed' [(visible)]=\"displaed\" modal=\"modal\" width=\"550\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitled}}\r\n  </p-header>\r\n  <div class=\"ui-g-12 ui-md-12 overflow\">\r\n    <credit-sale-product-modify-specail [inValue]=\"updateValue\" *ngIf=\"showModel=='1'\" (outValue)=\"addspecailattr($event)\"></credit-sale-product-modify-specail>\r\n  </div>\r\n</p-dialog>\r\n<!-- 营销部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>营销部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>\r\n<!-- 管理部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplayB\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>管理部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCallB($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .text_left {\n  text-align: left; }\n\n.container .text_left label {\n    font-weight: bold; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_add {\n  margin-top: 10px; }\n\n.container .margin_top {\n  margin-top: 36px; }\n\n.container .padding {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none; }\n\n.container .un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .active .dline {\n    width: 30%;\n    border-bottom: 2px solid #19b0c8;\n    margin: 8px 35% 0 35%; }\n\n.container .saled {\n  position: relative; }\n\n.container .saled .saleds {\n    position: absolute; }\n\n.container .saled .saleds .qbutton {\n      outline: none;\n      height: 28px;\n      border: 1px solid #bdbdbd;\n      cursor: pointer;\n      background-color: #fafafa;\n      color: #19b0c8;\n      position: absolute;\n      right: 0;\n      bottom: 0.25em; }\n\n.container .saled .msgess {\n    position: absolute; }\n\n.container .saled .qbuttons {\n    outline: none;\n    height: 28px;\n    border: 1px solid #bdbdbd;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #19b0c8;\n    position: absolute; }\n\n.container .saled .qbuttones {\n    margin-left: 3.5em; }\n\n.container .saled .qbuttonss {\n    margin-left: 3em; }\n\n.container .sales {\n  margin-top: 5em; }\n\n.container .sales .mbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #28B0C6;\n    font-size: 1.2em;\n    margin-top: 2em; }\n\n.container .radiocolor,\n.container .hcolor {\n  color: #19b0c8; }\n\n.container .forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n\n.container .boxOne {\n  float: left;\n  width: 90%; }\n\n.container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.container .heOne {\n  height: 100%; }\n\n.container .bzdwidth {\n  width: 50%; }\n\n@media screen and (max-width: 1860px) {\n  .container .mwidth {\n    width: 100% !important; } }\n\n@media screen and (max-width: 1690px) {\n  .container .bzwidth {\n    width: 100% !important; }\n  .container .bzswidth {\n    width: 100% !important; } }\n\n@media screen and (max-width: 1560px) {\n  .container .mswidth {\n    width: 100% !important; } }\n\n.container .margin_ad {\n  margin: 0 1em; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n:host/deep/ .ui-steps .ui-steps-item .ui-menuitem-link {\n  background: #fff !important;\n  width: 150px;\n  margin: 0 auto;\n  text-align: center; }\n\n:host/deep/.ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title {\n  vertical-align: middle; }\n\n:host/deep/.ui-steps-item.ng-star-inserted {\n  float: none;\n  display: inline-block !important;\n  text-align: center;\n  width: 14%; }\n\n:host/deep/.ui-widget.ui-helper-clearfix.ui-steps-readonly:before {\n  content: ' ';\n  border: 1px solid #dddddd;\n  width: 85%;\n  top: 45%;\n  left: 5%;\n  display: block;\n  position: absolute; }\n\n:host/deep/ .ui-dropdown {\n  min-width: 100px;\n  width: 45% !important; }\n\n:host/deep/ input[pInputText] {\n  min-height: 28px; }\n\n:host/deep/ .ui-calendar {\n  width: 61%; }\n\n.basetable {\n  text-align: center;\n  padding: 0 5vw; }\n\n.basetable thead,\n  .basetable tbody {\n    display: block; }\n\n.basetable thead tr,\n    .basetable tbody tr {\n      display: block;\n      cursor: pointer; }\n\n.basetable thead tr td,\n      .basetable tbody tr td {\n        width: 28vw;\n        height: 30px;\n        font-size: 15px; }\n\n.basetable thead .content,\n    .basetable tbody .content {\n      max-height: 50vh;\n      overflow: auto; }\n\n.basetable thead .content .ui-g-12,\n      .basetable tbody .content .ui-g-12 {\n        padding: 0; }\n\n.basetable thead tr {\n    background: #19b0c8;\n    color: white; }\n\n.basetable p {\n    text-align: left;\n    font-size: 16px;\n    font-weight: bold; }\n\n.basetable input {\n    width: 50%; }\n\n.basetable tbody tr:nth-child(even) {\n    background: #fafafa; }\n\n.basetable tbody tr:nth-child(odd) {\n    background: #ebebeb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29uZmlnXFxzYWxlLXByb2R1Y3QtY29uZmlnXFxzYWxlLXByb2R1Y3QtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBUDdCO0VBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO0lBYVksaUJBQWlCLEVBQUE7O0FBYjdCO0VBaUJRLHFCQUFxQixFQUFBOztBQWpCN0I7RUFvQlEsZ0JBQWdCLEVBQUE7O0FBcEJ4QjtFQXVCUSxnQkFBZ0IsRUFBQTs7QUF2QnhCO0VBMEJRLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUEzQnpCO0VBK0JZLFdBQVcsRUFBQTs7QUEvQnZCO0lBaUNnQixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7O0FBbENyQztFQXVDUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQWpEdkI7RUFvRFEsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQTFEdkI7SUE0RFksVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUIsRUFBQTs7QUE5RGpDO0VBa0VRLGtCQUFrQixFQUFBOztBQWxFMUI7SUFvRVksa0JBQWtCLEVBQUE7O0FBcEU5QjtNQXNFZ0IsYUFBYTtNQUNiLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixjQUFjLEVBQUE7O0FBOUU5QjtJQWtGWSxrQkFBa0IsRUFBQTs7QUFsRjlCO0lBcUZZLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQixFQUFBOztBQTNGOUI7SUE4Rlksa0JBQWtCLEVBQUE7O0FBOUY5QjtJQWlHWSxnQkFBZ0IsRUFBQTs7QUFqRzVCO0VBcUdRLGVBQWUsRUFBQTs7QUFyR3ZCO0lBdUdZLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUE3RzNCOztFQWtIUSxjQUFjLEVBQUE7O0FBbEh0QjtFQXFIUSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUF2SG5CO0VBMEhRLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBM0hsQjtFQThIUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFoSXZCO0VBbUlRLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFwSXhCO0VBdUlRLFlBQVksRUFBQTs7QUF2SXBCO0VBMElRLFVBQVUsRUFBQTs7QUFFZDtFQTVJSjtJQThJWSxzQkFBcUIsRUFBQSxFQUN4Qjs7QUFFTDtFQWpKSjtJQW1KWSxzQkFBcUIsRUFBQTtFQW5KakM7SUFzSlksc0JBQXFCLEVBQUEsRUFDeEI7O0FBRUw7RUF6Sko7SUEySlksc0JBQXFCLEVBQUEsRUFDeEI7O0FBNUpUO0VBK0pRLGFBQWEsRUFBQTs7QUFLckI7RUFDSSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBa0JoQztFQUNJLDJCQUEwQjtFQUMxQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFFBQVE7RUFDUixRQUFRO0VBQ1IsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUZsQjs7SUFLUSxjQUFjLEVBQUE7O0FBTHRCOztNQU9ZLGNBQWM7TUFFZCxlQUFlLEVBQUE7O0FBVDNCOztRQVdnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWUsRUFBQTs7QUFiL0I7O01Bb0JZLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7O0FBckIxQjs7UUFrQmdCLFVBQVUsRUFBQTs7QUFsQjFCO0lBeUJRLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBMUJwQjtJQTZCUSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQS9CekI7SUFrQ1EsVUFBVSxFQUFBOztBQWxDbEI7SUFxQ1EsbUJBQWtCLEVBQUE7O0FBckMxQjtJQXdDUSxtQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0X2xlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWxfYm94IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX2FkZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmcge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudW5fYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC5kbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAzNSUgMCAzNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNhbGVkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLnNhbGVkcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLnFidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMC4yNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tc2dlc3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucWJ1dHRvbmVzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucWJ1dHRvbnNzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgICAgICAubWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4QjBDNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYWRpb2NvbG9yLFxyXG4gICAgLmhjb2xvciB7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuZm9yY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmJveFR3byB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaGVUd28ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmhlT25lIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYnpkd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE4NjBweCkge1xyXG4gICAgICAgIC5td2lkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNjkwcHgpIHtcclxuICAgICAgICAuYnp3aWR0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ6c3dpZHRoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTU2MHB4KSB7XHJcbiAgICAgICAgLm1zd2lkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl9hZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+mAieaLqeaciOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4OyAvLyB6LWluZGV4OiAxMzAwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuLy8gICAgIHdpZHRoOiAxNyU7XHJcbi8vIH1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG4vLyA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgzKSB7XHJcbi8vICAgICB3aWR0aDogMTclO1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDQpIHtcclxuLy8gICAgIHdpZHRoOiAxNyU7XHJcbi8vIH1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNSkge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMgLnVpLXN0ZXBzLWl0ZW0gLnVpLW1lbnVpdGVtLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udWktc3RlcHMgLnVpLXN0ZXBzLWl0ZW0gLnVpLW1lbnVpdGVtLWxpbmsgLnVpLXN0ZXBzLXRpdGxlIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnVpLXN0ZXBzLWl0ZW0ubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udWktd2lkZ2V0LnVpLWhlbHBlci1jbGVhcmZpeC51aS1zdGVwcy1yZWFkb25seTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyBpbnB1dFtwSW5wdXRUZXh0XSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDYxJTtcclxufVxyXG5cclxuLmJhc2V0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDV2dztcclxuICAgIHRoZWFkLFxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMXB4IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4dnc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIC51aS1nLTEye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGVhZCB0cntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmFmYWZhO1xyXG4gICAgfVxyXG4gICAgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZWJlYmViO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SaleProductConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductConfigComponent", function() { return SaleProductConfigComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../bean/sale-product.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sale.service */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale.service.ts");
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
    function SaleProductConfigComponent(creditCcmService, commfunc, router, fb, saleService) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.router = router;
        this.fb = fb;
        this.saleService = saleService;
        this.selectComponetIds = []; //已选择的组件
        this.orgTreeDisplay = false;
        this.orgTreeDisplayB = false;
        this.vlaueOpen = 'open';
        //控制日历刷新
        this.showFlag = true;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; //列表无数据
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //讲英文转化为中文
        this.transferedDateFrom = new Date(); //引入日期
        this.transferedDateTo = new Date(); //引入日期
        this.carsold = []; //组件初始值
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]; //数据校验
        this.loadd = false;
        //产品营销
        this.val1 = ''; //产品说明书
        this.val2 = ''; //产品购买协议
        this.val3 = ''; //操作手册
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
        this.productNumBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__["productNumBean"];
        this.postsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__["PostsManageBean"]; //可售产品 保存bean
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        this.base_product = []; //基础产品/产品类型  下拉
        this.product_content_value = ''; //产品描述
        this.product_base_value = []; //基础产品
        this.product_base_arr = []; //基础产品
        this.head_title = '可售产品新增';
        this.productCurrency = ''; //产品币种
        this.inOut = ''; //表内表外
        this.crmValue = ''; //CRM产品树编号
        this.businessValue = ''; //业务品种编号
        this.cbusinessValue = ''; //子业务品种编号
        this.productManager = ''; //产品经理
        //列表
        this.cars_3 = [];
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
        this.checkBoxAll10 = false; //大全选
        this.choose_trall2 = false; //组件设置全选
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
        this.salee1 = [];
        this.saledd1 = [];
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
        this.copy_product_value = ''; //复制添加的可售产品
        this.product_line_value = ''; //产品线
        this.product_group_value = ''; //产品组
        this.product_base_copy = ''; //基础产品
        this.product_name_valuet = ''; //可售产品名称
        this.product_content_valuet = ''; //可售产品名称
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
        this.componentSelect = false;
        //组件的参数
        this.updateValue = [];
        //复制添加    
        this.copya = [];
        //包装回显
        this.detaillist = [];
        this.baozhuangid = '';
        this.transferedDateFrom = null;
        this.transferedDateTo = null;
        this.userform = fb.group({
            'product_name_valuet': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            product_content_valuet: [''],
            product_line_value: [''],
            product_group_value: [''],
            product_base_copy: [''],
        });
        this.userformT = fb.group({
            'product_name_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            product_content_value: [''],
            template_line_value: [''],
            template_group_value: [''],
            template_product_base_value: [''],
        });
        this.userformDate = fb.group({
            transferedDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transferedDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.userformValue = fb.group({
            productCurrency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            crmValue: [''],
            businessValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cbusinessValue: [''],
            saleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cfsaleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            saleUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.codeValues(); //调用方法，获取全部码值
        this.select_1 = this.code['select_1'];
        this.select_2 = this.code['select_2'];
        this.temporary = this.code['temporary'];
        this.configLevel = this.code['configLevel'];
    }
    SaleProductConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedValue = "copyAdd";
        this.val1 = 'TEXT';
        this.val2 = 'TEXT';
        this.val3 = 'TEXT';
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
        // this.select_1 = [
        //     { label: '请选择', value: "" },
        //     { label: '本币', value: "0" },
        //     { label: '外币', value: "1" },
        //     { label: '本外币', value: "2" }
        // ];
        // this.select_2 = [
        //     { label: '请选择', value: "" },
        //     { label: '表内', value: "0" },
        //     { label: '表外', value: "1" }
        // ];
        this.items = [{
                label: '产品选择',
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
                label: '字段排序',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            },
            {
                label: '可售包装',
                command: function (event) {
                    _this.activeIndex = 6;
                }
            }];
        //组件显示查询
        this.line_query();
        this.Typeinex++;
        this.detailkeynum = 0;
    };
    SaleProductConfigComponent.prototype.ngOnChanges = function () {
        this.baseValue();
    };
    //码值
    SaleProductConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
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
        // 清空已引入的组件
        this.selectComponetIds = [];
        this.creditCcmService.getBaseProductDetails(params).subscribe(function (data) {
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
                _this.total = data.total;
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
    SaleProductConfigComponent.prototype.siteQuery = function () {
        var _this = this;
        this.creditCcmService.findAllWebSite({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.list;
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
    SaleProductConfigComponent.prototype.siteClick = function (col) {
        var _this = this;
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
        this.detaillist.forEach(function (item, i) {
            if (item.channelId == col.webSiteId) {
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
                        _this.files10.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList10 = [];
                        _this.fileList10.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.files11.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList11 = [];
                        _this.fileList11.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.files12.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList12 = [];
                        _this.fileList12.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.files13.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList13 = [];
                        _this.fileList13.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.files14.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList14 = [];
                        _this.fileList14.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.files15.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                        _this.fileList15 = [];
                        _this.fileList15.push({
                            "fileName": _this.zujian_ist2[j].imageName,
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
                        _this.items12.push({ 'detailkey1': _this.zujian_ist2[j].imagePath.split(':')[0], 'valuedetails': _this.zujian_ist2[j].imagePath.split(':')[1], 'list': [{ "name": _this.zujian_ist2[j].imageName.split('_')[1] }] });
                        _this.fileList16 = [];
                        _this.fileList16.push({
                            "fileName": _this.zujian_ist2[j].imageName,
                            "fileUrl": _this.zujian_ist2[j].imagePath.split(':')[2],
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
                        _this.files17.push({ 'detailkey2': _this.zujian_ist3[K].filePath.split(':')[0], 'valuedetailes': _this.zujian_ist3[K].filePath.split(':')[1], 'liste': [{ "name": _this.zujian_ist3[K].fileName.split('_')[1] }] });
                        _this.fileList17 = [];
                        _this.fileList17.push({
                            "fileName": _this.zujian_ist3[K].fileName,
                            "fileUrl": _this.zujian_ist3[K].filePath.split(':')[2],
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
                        _this.files18.push({ "name": _this.zujian_ist3[K].fileName.split('_')[1] });
                        _this.fileList18 = [];
                        _this.fileList18.push({
                            "fileName": _this.zujian_ist3[K].fileName,
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
        this.show = col.siteName;
        this.baozhuangid = col.webSiteId;
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
                _this.saledd.push(item.orgName + '#' + item.orgId);
            });
            this.saled = this.salee.join(',');
            this.saleed = this.saledd.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled = items.orgName;
                _this.saleed = items.orgName + '#' + items.orgId;
            });
        }
        this.saleDepartment = this.saled;
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
                _this.saledd1.push(items.orgName + '#' + items.orgId);
            });
            this.saled1 = this.salee1.join(',');
            this.saleed1 = this.saledd1.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled1 = items.orgName;
                _this.saleed1 = items.orgName + '#' + items.orgId;
            });
        }
        this.cfsaleDepartment = this.saled1;
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
                    _this.belongg1.push(items.postName + '#' + items.postId);
                });
                this.belong = this.belong1.join(',');
                this.belongg = this.belongg1.join(',');
            }
            else {
                parames.depart.forEach(function (items) {
                    _this.belong = items.postName;
                    _this.belongg = items.postName + '#' + items.postId;
                });
            }
            this.saleUser = this.belong;
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
                    _this.belongss1.push(items.userName + '#' + items.userLoginId);
                });
                this.belongs = this.belongs1.join(',');
                this.belongss = this.belongss1.join(',');
            }
            else {
                paramd.departed.forEach(function (items) {
                    _this.belongs = items.userName;
                    _this.belongss = items.userName + '#' + items.userLoginId;
                });
            }
            this.productManager = this.belongs;
        }
    };
    // 产品线下拉
    SaleProductConfigComponent.prototype.line_query = function () {
        var _this = this;
        this.creditCcmService.productLinePull({}).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
        this.creditCcmService.productGroupPull(parm).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
        this.creditCcmService.pdGroupTemplateQuery(params).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
                var lod1 = Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"])(null, this.attrValue);
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
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.special_attr);
    };
    //特殊属性  删除
    SaleProductConfigComponent.prototype.delAttr = function () {
        var _this = this;
        this.choose_tr.sort(function (a, b) { return b - a; });
        this.choose_tr.forEach(function (item) {
            _this.special_attr.splice(item, 1);
        });
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.special_attr);
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
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.special_attr);
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
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        if (this.activeIndex == 1) {
            this.special_attr3 = this.special_attr;
            this.special_attr = [];
            this.special_attr3.forEach(function (items) {
                if (items.attrType == '0' || items.attrType == '1' || items.attrType == '2') {
                    _this.special_attr.push(items);
                }
            });
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
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择一个可售产品" });
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
        if (this.activeIndex < 6 && this.activeIndex > 1) {
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
        }
        //判断第几步
        if (this.activeIndex === 0) {
            var redo_name = {
                name: this.product_name_value,
                type: 'AvailableProduct'
            };
            this.creditCcmService.queryNameIsNotExist(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNot == "is") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "可售产品名称重复" });
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
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
            for (var i in this.userformValue.controls) {
                this.userformValue.controls[i].markAsDirty();
            }
            //处理是否提交管理信息
            for (var i in this.userformValue.controls) {
                if (!this.userformValue.controls[i].valid) {
                    return;
                }
            }
            var crm = this.crmValue.split('');
            var business = this.businessValue.split('');
            var cbusiness = this.cbusinessValue.split('');
            if (crm.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: 'CRM产品树编号不可超过10位！' });
            }
            else if (business.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '业务品种编号不可超过10位！' });
            }
            else if (cbusiness.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '子业务品种编号不可超过10位！' });
            }
            else {
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
            }
        }
        if (this.activeIndex === 2) {
            this.special_attr.push({
                "attrName": "产品币种",
                "attrType": 'productCurrency',
                "attrValue": this.productCurrency
            });
            this.special_attr.push({
                "attrName": "表内表外",
                "attrType": 'inOut',
                "attrValue": this.inOut
            });
            this.special_attr.push({
                "attrName": "CRM产品树编号",
                "attrType": 'crmNum',
                "attrValue": this.crmValue
            });
            this.special_attr.push({
                "attrName": "业务品种编号",
                "attrType": 'cateNum',
                "attrValue": this.businessValue
            });
            this.special_attr.push({
                "attrName": "子业务品种编号",
                "attrType": 'subCateNum',
                "attrValue": this.cbusinessValue
            });
            this.special_attr.push({
                "attrName": "营销部门",
                "attrType": 'salePerson',
                "attrValue": this.saleed
            });
            this.special_attr.push({
                "attrName": "管理部门",
                "attrType": 'manageDept',
                "attrValue": this.saleed1
            });
            this.special_attr.push({
                "attrName": "销售人员岗位",
                "attrType": 'salesman',
                "attrValue": this.belongg
            });
            this.special_attr.push({
                "attrName": "产品经理",
                "attrType": 'productManager',
                "attrValue": this.belongss
            });
            if (this.val1 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "产品说明书",
                    "productMarketingType": this.val1,
                    "productMarketingValue": this.productMarketing
                });
            }
            else {
                this.productMarketing2.forEach(function (elent) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "产品说明书",
                        "productMarketingType": _this.val1,
                        "productMarketingValue": elent
                    });
                });
            }
            if (this.val2 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "产品购买协议",
                    "productMarketingType": this.val2,
                    "productMarketingValue": this.productshopping
                });
            }
            else {
                this.productshopping2.forEach(function (item) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "产品购买协议",
                        "productMarketingType": _this.val2,
                        "productMarketingValue": item
                    });
                });
            }
            this.productMarketingList.push({
                "productMarketingKey": "营销活动",
                "productMarketingType": 'TEXT',
                "productMarketingValue": this.managememntactive
            });
            this.productMarketingList.push({
                "productMarketingKey": "营销话术",
                "productMarketingType": 'TEXT',
                "productMarketingValue": this.managememntspeech
            });
            if (this.val3 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "操作手册",
                    "productMarketingType": this.val3,
                    "productMarketingValue": this.operationmanual
                });
            }
            else {
                this.operationmanual2.forEach(function (elem) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "操作手册",
                        "productMarketingType": _this.val3,
                        "productMarketingValue": elem
                    });
                });
            }
            this.vedio.forEach(function (item) {
                _this.productMarketingList.push({
                    "productMarketingKey": "视频",
                    "productMarketingType": 'FILE',
                    "productMarketingValue": item
                });
            });
        }
        if (this.activeIndex === 3) {
            console.log(this.choose_tr2);
            if (this.choose_tr2.length == 0) {
                this.activeIndex = 2;
                this.vlaue1 = this.activeIndex;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '组件不能为空' });
            }
            this.special_attr2 = [];
            this.choose_tr2.forEach(function (item, index) {
                //选中的产品组件
                _this.special_attr2.push(_this.cars_3[item]);
            });
            // 默认
            this.special_attr2.forEach(function (itemss, i) {
                _this.cars_4.forEach(function (items) {
                    _this.specialed.push(items.productFeatureCategoryId);
                    if (itemss.productFeatureCategoryId == items.productFeatureCategoryId) {
                        itemss.productFeatureTypeList.forEach(function (item, k) {
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
                    if (ement.checkBox10 == true) {
                        ement['productFeatureCategoryName'] = itemed.description;
                        _this.keshou_objS[_this.item_id].push(ement);
                        _this.keshou_obj[_this.item_id].push(i);
                    }
                });
            });
            this.dianji(0, this.special_attr2[0]);
        }
        if (this.activeIndex === 4) {
            this.special_attr2 = this.saleService.productFeatureManage(this.special_attr2);
        }
        if (this.activeIndex === 5) {
            this.special_attr2.forEach(function (items) {
                var count = 0;
                items.productFeatureTypeList.forEach(function (item) {
                    if (item.sequenceNum) {
                        item.sequenceNum = Number(item.sequenceNum);
                    }
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
                            if (item.featureType == '02') {
                                item.productFeatureList.forEach(function (itemed) {
                                    if (itemed.valueType == '06') { //文本类型可为空（05） 
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
                            }
                            if (countt2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef1_1 + '取值范围为' + productdeff_1 });
                            }
                            if (count2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmax_1 + '最大值不可为空！' });
                            }
                            if (count3 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmin_1 + '最小值不可为空！' });
                            }
                            if (count4 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: producteid_1 + '取值范围为' + productmaxf_1 });
                            }
                        }
                    }
                });
                if (count == 0) {
                    _this.activeIndex = 3;
                    _this.vlaue1 = _this.activeIndex;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '属性不能为空' });
                }
            });
            this.dianji(0, this.special_attr2[0]);
            this.siteQuery();
        }
        //组件配置信息的保存
        if (this.activeIndex === 6) {
            if (this.funList_right.length == 0) {
                this.activeIndex = 5;
                this.vlaue1 = this.activeIndex;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '功能应用不能为空' });
            }
        }
    };
    //点击组件属性查看
    SaleProductConfigComponent.prototype.dianji = function (i, item) {
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
        // // 回显
        this.cars_attrbute.forEach(function (item, i) {
            _this.keshou_objS[_this.zujianId].forEach(function (item2, j) {
                if (item2.productFeatureTypeId == item.productFeatureTypeId) {
                    _this.cars_attrbute[i] = item2;
                }
            });
        });
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
    SaleProductConfigComponent.prototype.choose_trs = function (ri) {
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
        if (this.chooseData10.length == this.cars_attrbute.length) {
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
        tempss = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](arr0);
        this.select_atr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss);
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
        });
        arrsright.forEach(function (item, i) {
            _this.funList_left.splice(item, 1);
        });
        temps = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temps);
        temps1 = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temps1);
        this.leftListFun = [];
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
            _this.funList_right.splice(item, 1);
        });
        tempss = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss1);
        this.rightListFun = [];
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
        console.log(itemV);
        this.productFeatureArr = [];
        for (var key in itemV) {
            itemV[key].forEach(function (item) {
                if (item.checkBox10 == true) {
                    if (item.featureType == '01') {
                        item.productFeatureList.forEach(function (items, i) {
                            if (item.configLevel == '0') {
                                var objA0 = {
                                    productFeatureId: items.productFeatureId,
                                    productFeatureName: items.description,
                                    configLevel: item.configLevel,
                                    description: items.description,
                                    productFeatureTypeId: items.productFeatureTypeId,
                                    productFeatureTypeName: item.description,
                                    productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                    featureType: item.featureType,
                                    productFeatureCategoryId: items.productFeatureCategoryId,
                                    productFeatureCategoryName: item.productFeatureCategoryName,
                                    valueType: items.valueType,
                                    max: items.max,
                                    min: items.min,
                                    def: items.def,
                                    inc: items.inc,
                                    productFeatureLocalCode: items.productFeatureLocalCode,
                                    displayFlag: item.displayFlag,
                                    sequenceNum: item.sequenceNum
                                };
                                _this.productFeatureArr.push(objA0);
                            }
                            else {
                                if (items.checkBox) {
                                    var objA1 = {
                                        productFeatureId: items.productFeatureId,
                                        productFeatureName: items.description,
                                        configLevel: item.configLevel,
                                        description: items.description,
                                        productFeatureTypeId: items.productFeatureTypeId,
                                        productFeatureTypeName: item.description,
                                        productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                        featureType: item.featureType,
                                        productFeatureCategoryId: items.productFeatureCategoryId,
                                        productFeatureCategoryName: item.productFeatureCategoryName,
                                        valueType: items.valueType,
                                        max: items.max,
                                        min: items.min,
                                        def: items.def,
                                        inc: items.inc,
                                        productFeatureLocalCode: items.productFeatureLocalCode,
                                        displayFlag: item.displayFlag,
                                        sequenceNum: item.sequenceNum
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
                                    productFeatureName: itemss.description,
                                    configLevel: item.configLevel,
                                    description: itemss.description,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureTypeName: item.description,
                                    productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                    featureType: item.featureType,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    productFeatureCategoryName: item.productFeatureCategoryName,
                                    valueType: itemss.valueType,
                                    max: "",
                                    min: "",
                                    def: itemss.def,
                                    inc: "",
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    displayFlag: item.displayFlag,
                                    sequenceNum: item.sequenceNum
                                };
                            }
                            else {
                                objB_1 = {
                                    productFeatureId: itemss.productFeatureId,
                                    productFeatureName: itemss.description,
                                    configLevel: item.configLevel,
                                    description: itemss.description,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureTypeName: item.description,
                                    productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                    featureType: item.featureType,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    productFeatureCategoryName: item.productFeatureCategoryName,
                                    valueType: itemss.valueType,
                                    max: itemss.max,
                                    min: itemss.min,
                                    def: itemss.def,
                                    inc: itemss.inc,
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    displayFlag: item.displayFlag,
                                    sequenceNum: item.sequenceNum
                                };
                            }
                            _this.productFeatureArr.push(objB_1);
                        });
                    }
                }
            });
        }
        var site = {
            siteName: this.show,
            webSiteId: this.baozhuangid
        };
        this.siteClick(site);
        this.postsManageBean.description = this.product_content_value;
        this.postsManageBean.productContent = this.detaillist;
        this.postsManageBean.operationTemplateId = this.product_base_value.tplId; //基础产品id
        this.postsManageBean.productFeature = this.productFeatureArr;
        this.postsManageBean.productName = this.product_name_value; //产品名称
        this.postsManageBean.productId = this.product_num; // 产品ID
        //日期
        this.postsManageBean.introductionDate = this.commfunc.transDateN(this.transferedDateFrom) + ' 00:00:00';
        this.postsManageBean.releaseDate = this.commfunc.transDateN(this.transferedDateTo);
        //特殊属性
        this.postsManageBean.productMsg = this.special_attr;
        this.postsManageBean.productMarketingList = this.productMarketingList;
        this.functionList = [];
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.postsManageBean.functionList = this.functionList;
        if (this.detailkeynum != 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "详情描述未填完整！" });
            this.detailkeynum = 0;
            this.iscompele = false;
        }
        else {
            console.log(this.postsManageBean);
            var data = JSON.stringify(this.postsManageBean);
            var params = { 'data': data };
            this.creditCcmService.createProductProcessByCredit(params).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '新增产品成功！' });
                    var this_1 = _this;
                    setTimeout(function () {
                        this_1.router.navigate(['/pages/tzb/custom/credit-ccm/productConfig/credit-product-view']);
                        this.iscompele = false;
                    }, 2000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.iscompele = false;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                _this.iscompele = false;
            });
        }
    };
    SaleProductConfigComponent.prototype.goBack = function () {
        // window.history.go(-1)
        this.router.navigate(['/pages/tzb/custom/credit-ccm/productConfig/credit-product-view']);
    };
    //站点复制
    SaleProductConfigComponent.prototype.webcopy = function () {
        var _this = this;
        var site = {
            siteName: this.show,
            webSiteId: this.baozhuangid
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
            if (iten.fileList != [] && iten.imageList != [] && infos != 9) {
                if (iten.channelId != _this.baozhuangid) {
                    copylist.push(iten);
                }
            }
        });
        this.display = true;
        this.headerTitle = '站点复制';
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
            else if (item.value21 != '' && item.value22 != '' && item.detailkey != '') {
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
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files10.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList10 = JSON.parse(event.xhr.response);
        }
        this.fileList10.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "homeDisplayPictures";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value41Path.push(obj);
        });
    };
    //列表展示图片
    SaleProductConfigComponent.prototype.load2 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files11.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList11 = JSON.parse(event.xhr.response);
        }
        this.fileList11.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listImages";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value51Path.push(obj);
        });
    };
    //产品说明书
    SaleProductConfigComponent.prototype.load3 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files12.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList12 = JSON.parse(event.xhr.response);
        }
        this.fileList12.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listSpecification";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value61Path.push(obj);
        });
    };
    //产品购买协议
    SaleProductConfigComponent.prototype.load4 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files13.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList13 = JSON.parse(event.xhr.response);
        }
        this.fileList13.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listPurchasingContract";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value71Path.push(obj);
        });
    };
    //列表视频
    SaleProductConfigComponent.prototype.load5 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files14.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList14 = JSON.parse(event.xhr.response);
        }
        this.fileList14.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listVideo";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value81Path.push(obj);
        });
    };
    //详情展示图片
    SaleProductConfigComponent.prototype.load6 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files15.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList15 = JSON.parse(event.xhr.response);
        }
        this.fileList15.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "detailsDisplay";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value91Path.push(obj);
        });
    };
    //详情描述
    SaleProductConfigComponent.prototype.load7 = function (event, i) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.items12[i].list.push(file);
        }
        var svalue = this.items12[i].valuedetails;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList16 = JSON.parse(event.xhr.response);
        }
        this.fileList16.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "productDetail";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value101Path.push(obj);
        });
    };
    //文档详情描述
    SaleProductConfigComponent.prototype.load8 = function (event, i) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList17 = JSON.parse(event.xhr.response);
        }
        this.fileList17.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "productDetail";
            obj['fileName'] = item.fileName;
            obj['filePath'] = item.fileUrl;
            _this.value111Path.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf' || aftname == 'html') {
                this.files17[i].liste.push(file);
            }
            else {
                this.files17[i].liste.push(file);
                this.deleta8(this.files17[i], file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductConfigComponent.prototype.load9 = function (event) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList18 = JSON.parse(event.xhr.response);
        }
        this.fileList18.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listSpecification";
            obj['fileName'] = item.fileName;
            obj['filePath'] = item.fileUrl;
            _this.value112Path.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
                this.files18.push(file);
            }
            else {
                this.files18.push(file);
                this.deleta9(file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
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
        this.iscompele = true;
        this.saleInfoSave(this.keshou_objS);
    };
    // 引入组件
    SaleProductConfigComponent.prototype.chooseComponent = function () {
        // 打开组件选择的弹框
        this.componentSelect = true;
        // 传入已经添加的历史的组件ID，用于弹框后判重
        this.updateValue = this.selectComponetIds;
    };
    // 引入组件回调
    SaleProductConfigComponent.prototype.chooseComponentCall = function (param) {
        // 在组件设置中显示
        // param.productFeatureCategoryList.forEach(item =>{
        this.cars_3.push(param);
        // 加入选中的组件ID，用于后面弹框选择判重
        this.selectComponetIds.push(param.productFeatureCategoryId);
        // });
        // 关闭弹框
        this.componentSelect = false;
    };
    // 选择模板按钮
    SaleProductConfigComponent.prototype.choiceTemplate = function (item) {
        this.displayd = true;
        this.headerTitlee = '选择模板';
        this.showModel = '1';
        this.updateValue = item;
    };
    //选择模板的回调
    SaleProductConfigComponent.prototype.choiceTemplateCall = function (param) {
        this.displayd = param.display;
        this.copy_product_value = '';
        this.copya = '';
        if (param.list.productLineName == '' || param.list.productLineName == undefined) {
            this.template_line_value = '';
            this.template_group_value = '';
            this.template_product_base_value = '';
            this.line_value = '';
            this.group_value = '';
            this.product_base_value = '';
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择基础产品！" });
        }
        else {
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
        }
    };
    // 选择模板按钮
    SaleProductConfigComponent.prototype.choicecopy = function () {
        this.displayd = true;
        this.headerTitlee = '产品选择';
        this.showModel = '5';
        this.updateValue = 'copyAdd';
    };
    //选择模板的回调
    SaleProductConfigComponent.prototype.choicecopyCall = function (parmes) {
        var _this = this;
        this.displayd = parmes.display;
        this.copya = parmes.depart;
        this.template_product_base_value = '';
        if (this.copya.availableProduct == '' || this.copya.availableProduct == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择可售产品！" });
        }
        else {
            this.copy_product_value = this.copya.availableProduct.productName;
            this.product_name_valuet = this.copya.availableProduct.productName;
            this.product_num = this.copya.availableProduct.productId;
            this.product_line_value = this.copya.availableProduct.productLineName;
            this.product_group_value = this.copya.availableProduct.productGroupName;
            this.product_base_copy = this.copya.availableProduct.productTemplateName;
            this.product_content_valuet = this.copya.availableProduct.description;
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
            //第二部日期
            this.transferedDateTo = new Date(this.copya.availableProduct.releaseDate);
            this.transferedDateFrom = new Date(this.copya.availableProduct.introductionDate);
            //管理信息  特殊属性
            this.copya.productMsgs.forEach(function (eitem) {
                if (eitem.attrType == 'crmNum') {
                    _this.crmValue = eitem.attrValue;
                }
                else if (eitem.attrType == 'cateNum') {
                    _this.businessValue = eitem.attrValue;
                }
                else if (eitem.attrType == 'subCateNum') {
                    _this.cbusinessValue = eitem.attrValue;
                }
                else if (eitem.attrType == 'salePerson') {
                    _this.salee = [];
                    eitem.attrValue.split(',').forEach(function (items) {
                        _this.salee.push(items.split('#')[0]);
                    });
                    _this.saleDepartment = _this.salee.join(',');
                    _this.saleed = eitem.attrValue;
                }
                else if (eitem.attrType == 'manageDept') {
                    _this.salee1 = [];
                    eitem.attrValue.split(',').forEach(function (items) {
                        _this.salee1.push(items.split('#')[0]);
                    });
                    _this.cfsaleDepartment = _this.salee1.join(',');
                    _this.saleed1 = eitem.attrValue;
                }
                else if (eitem.attrType == 'salesman') {
                    _this.belong1 = [];
                    eitem.attrValue.split(',').forEach(function (items) {
                        _this.belong1.push(items.split('#')[0]);
                    });
                    _this.saleUser = _this.belong1.join(',');
                    _this.belongg = eitem.attrValue;
                }
                else if (eitem.attrType == 'productManager') {
                    _this.belongs1 = [];
                    eitem.attrValue.split(',').forEach(function (items) {
                        _this.belongs1.push(items.split('#')[0]);
                    });
                    _this.productManager = _this.belongs1.join(',');
                    _this.belongss = eitem.attrValue;
                }
                else if (eitem.attrType == 'productCurrency') {
                    _this.productCurrency = eitem.attrValue;
                }
                else if (eitem.attrType == 'inOut') {
                    _this.inOut = eitem.attrValue;
                }
                else if (eitem.attrType == '0' || eitem.attrType == '1' || eitem.attrType == '2') {
                    _this.speciall.push(eitem);
                }
            });
            this.special_attr = this.speciall;
            this.speciall = [];
            //产品营销
            this.productMarketing2 = [];
            this.files21 = [];
            this.productshopping2 = [];
            this.files22 = [];
            this.operationmanual2 = [];
            this.files23 = [];
            this.copya.productMarketingList.forEach(function (item) {
                if (item.productMarketingKey == '产品说明书') {
                    if (item.productMarketingType == 'FILE') {
                        _this.val1 = 'FILE';
                        _this.productMarketing2.push(item.productMarketingValue);
                        _this.files21.push({ 'name': item.productMarketingValue.split('_')[1] });
                    }
                    else {
                        _this.val1 = 'TEXT';
                        _this.productMarketing = item.productMarketingValue;
                    }
                }
                else if (item.productMarketingKey == '产品购买协议') {
                    if (item.productMarketingType == 'FILE') {
                        _this.val2 = 'FILE';
                        _this.productshopping2.push(item.productMarketingValue);
                        _this.files22.push({ 'name': item.productMarketingValue.split('_')[1] });
                    }
                    else {
                        _this.val2 = 'TEXT';
                        _this.productshopping = item.productMarketingValue;
                    }
                }
                else if (item.productMarketingKey == '营销活动') {
                    _this.managememntactive = item.productMarketingValue;
                }
                else if (item.productMarketingKey == '营销话术') {
                    _this.managememntspeech = item.productMarketingValue;
                }
                else if (item.productMarketingKey == '操作手册') {
                    if (item.productMarketingType == 'FILE') {
                        _this.val3 = 'FILE';
                        _this.operationmanual2.push(item.productMarketingValue);
                        _this.files23.push({ 'name': item.productMarketingValue.split('_')[1] });
                    }
                    else {
                        _this.val3 = 'TEXT';
                        _this.operationmanual = item.productMarketingValue;
                    }
                }
                else if (item.productMarketingKey == '视频') {
                    _this.specall6.push(item.productMarketingValue);
                    _this.specall7.push({ 'name': item.productMarketingValue.split('_')[1] });
                }
            });
            this.vedio = this.specall6;
            this.files24 = this.specall7;
            this.speciall = [];
            this.specall6 = [];
            this.specall7 = [];
            //功能应用
            this.funList_right = this.copya.productFunctionList;
            //组件设置
            this.copya.productFeatureList.forEach(function (item, i) {
                _this.speciall.push({ 'parentCategoryId': item.productFeatureCategoryName, 'description': item.productFeatureCategoryName, 'productFeatureCategoryId': item.productFeatureCategoryId, 'productFeatureTypeList': item.productFeatureTypeList });
            });
            this.cars_4 = this.speciall;
            this.speciall = [];
            //包装 产品描述
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
                        _this.files10.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName10 = '';
                        var fileUrl10 = '';
                        var objectInfo10 = [];
                        objectInfo10 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName10 = objectInfo10.pop();
                        fileUrl10 = objectInfo10.join('=');
                        _this.fileList10 = [];
                        _this.fileList10.push({
                            "fileName": fileName10,
                            "fileUrl": fileUrl10,
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
                        _this.files11.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName11 = '';
                        var fileUrl11 = '';
                        var objectInfo11 = [];
                        objectInfo11 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName11 = objectInfo11.pop();
                        fileUrl11 = objectInfo11.join('=');
                        _this.fileList11 = [];
                        _this.fileList11.push({
                            "fileName": fileName11,
                            "fileUrl": fileUrl11,
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
                        _this.files12.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName12 = '';
                        var fileUrl12 = '';
                        var objectInfo12 = [];
                        objectInfo12 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName12 = objectInfo12.pop();
                        fileUrl12 = objectInfo12.join('=');
                        _this.fileList12 = [];
                        _this.fileList12.push({
                            "fileName": fileName12,
                            "fileUrl": fileUrl12,
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
                        _this.files13.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName13 = '';
                        var fileUrl13 = '';
                        var objectInfo13 = [];
                        objectInfo13 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName13 = objectInfo13.pop();
                        fileUrl13 = objectInfo13.join('=');
                        _this.fileList13 = [];
                        _this.fileList13.push({
                            "fileName": fileName13,
                            "fileUrl": fileUrl13,
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
                        _this.files14.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName14 = '';
                        var fileUrl14 = '';
                        var objectInfo14 = [];
                        objectInfo14 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName14 = objectInfo14.pop();
                        fileUrl14 = objectInfo14.join('=');
                        _this.fileList14 = [];
                        _this.fileList14.push({
                            "fileName": fileName14,
                            "fileUrl": fileUrl14,
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
                        _this.files15.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                        var fileName15 = '';
                        var fileUrl15 = '';
                        var objectInfo15 = [];
                        objectInfo15 = _this.zujian_ist2[j].objectInfo.split('=');
                        fileName15 = objectInfo15.pop();
                        fileUrl15 = objectInfo15.join('=');
                        _this.fileList15 = [];
                        _this.fileList15.push({
                            "fileName": fileName15,
                            "fileUrl": fileUrl15,
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
                        _this.items12.push({ 'detailkey1': _this.zujian_ist2[j].objectInfo.split(':')[0], 'valuedetails': _this.zujian_ist2[j].objectInfo.split(':')[1], 'list': [{ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] }] });
                        var fileName16 = [];
                        var objectInfo16 = [];
                        var objectIn16 = '';
                        objectInfo16 = _this.zujian_ist2[j].objectInfo.split(':');
                        objectInfo16.splice(0, 2);
                        objectIn16 = objectInfo16.join(':');
                        fileName16 = objectIn16.split('=');
                        fileName16.pop();
                        _this.fileList16 = [];
                        _this.fileList16.push({
                            "fileName": objectIn16.split('=').pop(),
                            "fileUrl": fileName16.join('='),
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
                        _this.files17.push({ 'detailkey2': _this.zujian_ist3[K].objectInfo.split(':')[0], 'valuedetailes': _this.zujian_ist3[K].objectInfo.split(':')[1], 'liste': [{ "name": _this.zujian_ist3[K].objectInfo.split('_')[1] }] });
                        var fileName17 = [];
                        var objectIn17 = '';
                        var objectInfo17 = [];
                        objectInfo17 = _this.zujian_ist3[K].objectInfo.split(':');
                        objectInfo17.splice(0, 2);
                        objectIn17 = objectInfo17.join(':');
                        fileName17 = objectIn17.split('=');
                        fileName17.pop();
                        _this.fileList17 = [];
                        _this.fileList17.push({
                            "fileName": objectIn17.split('=').pop(),
                            "fileUrl": fileName17.join('='),
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
                        _this.files18.push({ "name": _this.zujian_ist3[K].objectInfo.split('_')[1] });
                        var fileName18 = '';
                        var fileUrl18 = '';
                        var objectInfo18 = [];
                        objectInfo18 = _this.zujian_ist3[K].objectInfo.split('=');
                        fileName18 = objectInfo18.pop();
                        fileUrl18 = objectInfo18.join('=');
                        _this.fileList18 = [];
                        _this.fileList18.push({
                            "fileName": fileName18,
                            "fileUrl": fileUrl18,
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
            var sites = {
                siteName: this.copya.productContentList[0].channelName,
                webSiteId: this.copya.productContentList[0].channelId
            };
            this.siteClick(sites);
        }
    };
    SaleProductConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-sale-product-config',
            template: __webpack_require__(/*! ./sale-product-config.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-config.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-config/sale-product-config.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _sale_service__WEBPACK_IMPORTED_MODULE_10__["SaleService"]])
    ], SaleProductConfigComponent);
    return SaleProductConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-4 text_right\"><label>属性名称</label></div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <input [(ngModel)]=\"attrName\" type=\"text\" pInputText style=\"width:40%\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_right\"><label>属性类型</label></div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [(ngModel)]=\"attrType\" [options]=\"temporary\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4 text_right\"><label>属性取值</label></div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <input *ngIf=\"attrType == '0'\" [(ngModel)]=\"attrValue\" type=\"text\" pInputText style=\"width:40%\">\r\n            <input *ngIf=\"attrType == '2'\" [(ngModel)]=\"attrValue\" type=\"text\" pInputText style=\"width:40%\">\r\n            <p-inputMask *ngIf=\"attrType == '1'\" mask=\"9999/99/99\" [(ngModel)]=\"attrValue\" slotChar=\"yyyy/mm/dd\" [style]=\"{'width':'40%'}\"></p-inputMask>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button pButton type=\"button\" label=\"确认\" (click)=\"attrAdd()\"></button>\r\n            <button pButton type=\"button\" label=\"取消\" (click)=\"attrcanel()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-button:first-child {\n  background: linear-gradient(#FFC107, #FFC107); }\n\n:host/deep/ .ui-dropdown {\n  width: 40% !important; }\n\n:host/deep/ .module {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtbW9kaWZ5L3NhbGUtcHJvZHVjdC1tb2RpZnktc3BlY2FpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LW1vZGlmeVxcc2FsZS1wcm9kdWN0LW1vZGlmeS1zcGVjYWlsXFxzYWxlLXByb2R1Y3QtbW9kaWZ5LXNwZWNhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSw2Q0FBNkMsRUFBQTs7QUFFakQ7RUFDSSxxQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LW1vZGlmeS9zYWxlLXByb2R1Y3QtbW9kaWZ5LXNwZWNhaWwvc2FsZS1wcm9kdWN0LW1vZGlmeS1zcGVjYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGQzEwNywgI0ZGQzEwNyk7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6NDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLm1vZHVsZXtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: SaleProductModifySpecailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifySpecailComponent", function() { return SaleProductModifySpecailComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function SaleProductModifySpecailComponent(creditCcmService, commfunc, route) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.route = route;
        this.inValue = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                var lod1 = Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_3__["checkNumber"])(null, this.attrValue);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductModifySpecailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleProductModifySpecailComponent.prototype, "outValue", void 0);
    SaleProductModifySpecailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credit-sale-product-modify-specail',
            template: __webpack_require__(/*! ./sale-product-modify-specail.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify-specail.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-specail/sale-product-modify-specail.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SaleProductModifySpecailComponent);
    return SaleProductModifySpecailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <p-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'text-align':'center'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-radioButton name=\"addsite\" value=\"{{ri}}\" [(ngModel)]=\"website\"></p-radioButton>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"siteName\" header=\"站点名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"channelId\" header=\"站点编号\">\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button pButton type=\"button\" label=\"确认\" (click)=\"websitec()\"></button>\r\n            <!-- <button pButton type=\"button\" label=\"取消\" (click)=\"webcanel()\"></button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n:host/deep/ .ui-button:first-child {\n  background: linear-gradient(#FFC107, #FFC107); }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtbW9kaWZ5L3NhbGUtcHJvZHVjdC1tb2RpZnktd2Vic2l0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LW1vZGlmeVxcc2FsZS1wcm9kdWN0LW1vZGlmeS13ZWJzaXRlXFxzYWxlLXByb2R1Y3QtbW9kaWZ5LXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSw2Q0FBNkMsRUFBQTs7QUFFakQ7RUFDSSxxQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LW1vZGlmeS9zYWxlLXByb2R1Y3QtbW9kaWZ5LXdlYnNpdGUvc2FsZS1wcm9kdWN0LW1vZGlmeS13ZWJzaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGQzEwNywgI0ZGQzEwNyk7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6MzAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: SaleProductModifyWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifyWebsiteComponent", function() { return SaleProductModifyWebsiteComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function SaleProductModifyWebsiteComponent(creditCcmService, commfunc, route) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.route = route;
        this.inValue = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
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
        this.inValue.forEach(function (item) {
            var param = { webSiteId: item.channelId };
            _this.creditCcmService.webSiteDetail(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.special_attr.push({ channelId: item.channelId, siteName: data.siteName });
                    _this.special_attr = _this.deepClone(_this.special_attr);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductModifyWebsiteComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleProductModifyWebsiteComponent.prototype, "outValue", void 0);
    SaleProductModifyWebsiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credit-sale-product-modify-website',
            template: __webpack_require__(/*! ./sale-product-modify-website.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify-website.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify-website/sale-product-modify-website.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_4__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SaleProductModifyWebsiteComponent);
    return SaleProductModifyWebsiteComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container ui-g module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"head_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 height  border\">\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='0'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-2  text_right\">\r\n                <label>可售产品编号</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input disabled name=\"product_num\" formControlName=\"product_num\" [(ngModel)]=\"product_num\" type=\"text\" pInputText style=\"width:40%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1  text_right\">\r\n                <label appValidation>产品名称</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-5\">\r\n                <input disabled=\"true\" name=\"product_name_value\" formControlName=\"product_name_value\" [(ngModel)]=\"product_name_value\" type=\"text\"\r\n                  pInputText style=\"width:40%\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['product_name_value'].valid&&userform.controls['product_name_value'].dirty\">\r\n                  <span [hidden]=\"!userform.hasError('pattern','product_name_value')\">可售产品输入不合法！</span>\r\n                  <span [hidden]=\"!userform.hasError('required','product_name_value')\"> 请填写可售产品名称！</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>产品线</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input name=\"line_value1\" formControlName=\"line_value1\" [(ngModel)]=\"line_value1\" disabled type=\"text\" pInputText style=\"width:40%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>产品组</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-5\">\r\n                <input name=\"group_value1\" formControlName=\"group_value1\" [(ngModel)]=\"group_value1\" disabled type=\"text\" pInputText style=\"width:40%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>基础产品</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-10\">\r\n                <input name=\"product_base_value1\" formControlName=\"product_base_value1\" [(ngModel)]=\"product_base_value1\" disabled type=\"text\"\r\n                  pInputText style=\"width:15.8%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>详细描述</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-10\">\r\n                <textarea disabled=\"true\" name=\"product_content_value\" formControlName=\"product_content_value\" [(ngModel)]=\"product_content_value\"\r\n                  pInputTextarea style=\"width:70%\"></textarea>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品编号:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_num}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <p-tabView>\r\n            <p-tabPanel header=\"通用信息\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <form [formGroup]=\"userformDate\">\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label appValidation>引入日期</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <p-calendar disabled=\"true\" (onSelect)=\"refresh()\" name=\"introductionDate\" formControlName=\"introductionDate\" [(ngModel)]=\"introductionDate\"\r\n                          [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\"\r\n                          [readonlyInput]=\"true\" dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['introductionDate'].valid&&userformDate.controls['introductionDate'].dirty\">\r\n                          请填写引入日期！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label appValidation>截至日期</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <p-calendar disabled=\"true\" *ngIf=\"showFlag\" name=\"releaseDate\" formControlName=\"releaseDate\" [(ngModel)]=\"releaseDate\" [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\" yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\"\r\n                          dateFormat=\"yy/mm/dd\" [showIcon]=\"true\" [locale]=\"ch\" [minDate]=\"introductionDate\">\r\n                        </p-calendar>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformDate.controls['releaseDate'].valid && userformDate.controls['releaseDate'].dirty\">\r\n                          请填写截至日期！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"管理信息\">\r\n              <div class=\"ui-g\">\r\n                <form [formGroup]=\"userformValue\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>产品币种</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-dropdown disabled=\"true\" name=\"productCurrency\" formControlName=\"productCurrency\" [options]=\"select_1\" [(ngModel)]=\"productCurrency\"></p-dropdown>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['productCurrency'].valid&&userformValue.controls['productCurrency'].dirty\">\r\n                          请选择产品币种！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>表内表外</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-dropdown disabled=\"true\" name=\"inOut\" formControlName=\"inOut\" [options]=\"select_2\" [(ngModel)]=\"inOut\"></p-dropdown>\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['inOut'].valid&&userformValue.controls['inOut'].dirty\">\r\n                          请选择表内表外！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label>CRM产品树编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"crmValue\" formControlName=\"crmValue\" [(ngModel)]=\"crmValue\" type=\"text\" pInputText style=\"width:45%\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>业务品种编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"businessValue\" formControlName=\"businessValue\" [(ngModel)]=\"businessValue\" type=\"text\" pInputText\r\n                          style=\"width:45%\">\r\n                        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformValue.controls['businessValue'].valid&&userformValue.controls['businessValue'].dirty\">\r\n                          请填写业务品种编号！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label>子业务品种编号</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <input disabled=\"true\" name=\"cbusinessValue\" formControlName=\"cbusinessValue\" [(ngModel)]=\"cbusinessValue\" type=\"text\" pInputText\r\n                          style=\"width:45%\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>营销部门</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"saleDepartment\" formControlName=\"saleDepartment\" [(ngModel)]='saleDepartment'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"sheMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['saleDepartment'].valid&&userformValue.controls['saleDepartment'].dirty\">\r\n                          请选择营销部门！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>管理部门</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"cfsaleDepartment\" formControlName=\"cfsaleDepartment\" [(ngModel)]='cfsaleDepartment'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"lveMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['cfsaleDepartment'].valid&&userformValue.controls['cfsaleDepartment'].dirty\">\r\n                          请选择管理部门！\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                        <label appValidation>产品经理</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"productManager\" formControlName=\"productManager\" [(ngModel)]='productManager'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"shelveMain2()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['productManager'].valid&&userformValue.controls['productManager'].dirty\">\r\n                          请选择产品经理！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 paddings\">\r\n                      <div class=\"ui-g-12 ui-md-1 text_right margin_add\">\r\n                        <label appValidation>销售人员岗位</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-3 saled\">\r\n                        <div class=\"saleds margin_adds\">\r\n                          <textarea disabled=\"true\" pInputTextarea disabled name=\"saleUser\" formControlName=\"saleUser\" [(ngModel)]='saleUser'></textarea>\r\n                          <button disabled=\"true\" class=\"qbutton\" type=\"button\" (click)=\"shelveMain()\">选择</button>\r\n                        </div>\r\n                        <span class=\"requireLabel msgess\" style=\"color:red;\" *ngIf=\"!userformValue.controls['saleUser'].valid&&userformValue.controls['saleUser'].dirty\">\r\n                          请选择销售人员岗位！\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"特殊属性\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <p-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                      <p-column [style]=\"{'text-align':'center'}\">\r\n                        <ng-template pTemplate=\"header\">\r\n                          <label>选择</label>\r\n                        </ng-template>\r\n                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          <p-checkbox [(ngModel)]=\"choose_tr\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                        </ng-template>\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          {{col.attrType|codeValuePie:temporary}}\r\n                        </ng-template>\r\n                      </p-column>\r\n                      <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性取值\">\r\n                      </p-column>\r\n                    </p-dataTable>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12 text_left saled\">\r\n                    <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"delAttr()\">删除</button>\r\n                    <button disabled=\"true\" class=\"qbuttons qbuttones\" type=\"button\" (click)=\"addAttr()\">添加属性</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"产品营销\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-6 mwidth\">\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>产品说明书</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <p-radioButton disabled=\"true\" name=\"group1\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton>\r\n                            <p-radioButton disabled=\"true\" name=\"group1\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val1\" inputId=\"opt2\"></p-radioButton>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='TEXT'\">\r\n                            <textarea disabled=\"true\" pInputTextarea style=\"width:100%\" [(ngModel)]=\"productMarketing\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='FILE'\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load21($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                              invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files21.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files21\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta21(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>产品购买协议</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <p-radioButton disabled=\"true\" name=\"group2\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val2\" inputId=\"opt3\"></p-radioButton>\r\n                            <p-radioButton disabled=\"true\" name=\"group2\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val2\" inputId=\"opt4\"></p-radioButton>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='TEXT'\">\r\n                            <textarea disabled=\"true\" pInputTextarea style=\"width:100%\" [(ngModel)]=\"productshopping\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='FILE'\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load22($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                              invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files22.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files22\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta22(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>操作手册</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <p-radioButton disabled=\"true\" name=\"group3\" value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val3\" inputId=\"opt5\"></p-radioButton>\r\n                            <p-radioButton disabled=\"true\" name=\"group3\" value=\"FILE\" label=\"文件\" [(ngModel)]=\"val3\" inputId=\"opt6\"></p-radioButton>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='TEXT'\">\r\n                            <textarea disabled=\"true\" pInputTextarea style=\"width:100%\" [(ngModel)]=\"operationmanual\"></textarea>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='FILE'\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load23($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                              invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files23.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files23\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta23(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-6 mwidth\">\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>营销活动</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\"></div>\r\n                          <div class=\"ui-g-12 ui-md-9\">\r\n                            <textarea disabled=\"true\" pInputTextarea style=\"width:100%\" [(ngModel)]=\"managememntactive\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>营销话术</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\"></div>\r\n                          <div class=\"ui-g-12 ui-md-9\">\r\n                            <textarea disabled=\"true\" pInputTextarea style=\"width:100%\" [(ngModel)]=\"managememntspeech\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-12 padding\">\r\n                      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                        <label>视频</label>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3\"></div>\r\n                          <div class=\"ui-g-12 ui-md-9\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load24($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"video/*\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files24.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files24\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta24(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n          </p-tabView>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='2'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品编号:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_num}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_right\">\r\n          <span (click)=\"chooseComponent()\" class=\"icoColor\">引入组件</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <p-dataTable [(value)]=\"cars_3\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"-2\" value=\"-1\" label=\"全选\" [(ngModel)]=\"choose_trall2\" binary=\"false\" (click)=\"choose_trall()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <p-checkbox [(ngModel)]=\"choose_tr2\" value=\"{{ri}}\" name=\"bb\" (click)=\"choose_trs(ri)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"description\" header=\"组件名称\">\r\n            </p-column>\r\n            <p-column [style]=\"{'text-align':'center'}\" field=\"parentCategoryId\" header=\"组件描述\">\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='3'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品编号:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_num}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g forcolor\">\r\n            <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n              <label class=\"un_active\" *ngFor=\"let col of special_attr2;let i = index\" (click)=\"dianji(i,col)\" [ngClass]=\"{'active':showClass == col.description}\">\r\n                {{col.description}}\r\n                <div class=\"dline\"></div>\r\n              </label>\r\n            </div>\r\n            <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n              <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n              <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let col of special_attr2;let i = index\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i==aIndex\">\r\n                <p-dataTable [value]=\"cars_attrbute\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                  <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"description\" header=\"属性名称\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      {{col.configLevel|codeValuePie:configLevel}}\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'10%'}\" field=\"displayFlag\" header=\"是否展示\">\r\n                    <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                      <p-radioButton value=\"1\" label=\"是\" [(ngModel)]=\"car.displayFlag\"></p-radioButton>\r\n                      <p-radioButton value=\"2\" label=\"否\" [(ngModel)]=\"car.displayFlag\"></p-radioButton>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>全选</label>\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <div *ngIf=\"item.featureType =='01'\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <p-checkbox [(ngModel)]=\"item['checkDate']\" disabled binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"item.featureType =='02'\">\r\n                      </div>\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column>\r\n                    <ng-template pTemplate=\"header\">\r\n                      <label>取值范围</label>\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                            <p-checkbox value=\"items.productFeatureId\" disabled [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                              binary=\"true\"></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <div class=\"margin_ad\" *ngFor=\"let items of item.productFeatureList;let ss = index\" style=\"display:inline-block\">\r\n                            <p-checkbox value=\"items.productFeatureId\" [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                              binary=\"true\"></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                        <div *ngIf=\"item.configLevel =='0'\">\r\n                          <div *ngFor=\"let items of item.productFeatureList\">\r\n                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                              <input type=\"text\" disabled [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.configLevel !='0'\">\r\n                          <div *ngFor=\"let items of item.productFeatureList\">\r\n                            <div *ngIf=\"items.valueType =='05'||items.valueType =='06'\">\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                              <span>({{items.min}} -- {{items.max}})</span>\r\n                            </div>\r\n                            <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                              <input (ngModelChange)=\"changeValueds(ri,item)\" type=\"text\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                  </p-column>\r\n                </p-dataTable>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='4'\">\r\n        <div class=\"ui-g-12 basetable\">\r\n          <thead>\r\n            <tr>\r\n              <td>属性编码</td>\r\n              <td>属性名称</td>\r\n              <td>属性序号</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <div class=\"ui-g-12 content\">\r\n              <div class=\"ui-g-12\" *ngFor=\"let category of special_attr2\">\r\n                <!-- <p>{{category.description}}</p> -->\r\n                <tr class=\"widths\" *ngFor=\"let type of category.productFeatureTypeList\">\r\n                  <span *ngIf=\"type.displayFlag == '1'\" >\r\n                    <td>{{type.productFeatureTypeId}}</td>\r\n                    <td>{{type.description}}</td>\r\n                    <td>\r\n                      <input type=\"text\" [(ngModel)]=\"type.sequenceNum\" pInputText>\r\n                    </td>\r\n                  </span>\r\n                </tr>\r\n              </div>\r\n            </div>\r\n          </tbody>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='5'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品编号:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_num}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-5\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4 class=\"hcolor\">\r\n                <img src=\"assets/layout/images/titYJ.png\" />&nbsp;功能列表</h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-dataTable [value]=\"funList_left\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox disabled=\"true\" [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                </p-column>\r\n              </p-dataTable>\r\n              <p-paginator disabled=\"true\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div class=\"ui-g-12 ui-md-12 sales\">\r\n              <button disabled=\"true\" class=\"margin_top mbutton\" (click)=\"rightFunMovre()\" type=\"button\">>></button>\r\n              <br>\r\n              <button disabled=\"true\" class=\"margin_top mbutton\" (click)=\"liftFunMovre()\" type=\"button\">\r\n                <<</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4 class=\"hcolor\">\r\n                <img src=\"assets/layout/images/titYJ.png\" />&nbsp;已选功能列表</h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-dataTable [value]=\"funList_right\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox disabled=\"true\" [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" name=\"cc\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n                </p-column>\r\n              </p-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='6'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品编号:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_num}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品名称:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_name_value}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>产品线:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{line_value_h}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-1 text_right\">\r\n                <label>\r\n                  <b>产品组:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{group_value_h}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>基础产品:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_base_hs}}</label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                <label>\r\n                  <b>详细描述:</b>\r\n                </label>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <label>{{product_content_value}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12 box\">\r\n              <div class=\"ui-g forcolor\">\r\n                <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                  <label class=\"un_active\" *ngFor=\"let col of siteList let i = index\" [ngClass]=\"{'active':show == col.siteName}\" (click)=\"siteClick(col)\">\r\n                    <b>{{col.siteName}}</b>\r\n                  </label>\r\n                </div>\r\n                <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                  <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                  <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <p-tabView>\r\n                <p-tabPanel header=\"产品描述\">\r\n                  <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>制度摘要:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"systemSummary\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>营销话术:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"marketScript\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>期限描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"termDesc\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>额度描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"limitDesc\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>同业产品信息:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"sameProductlnformation\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>其他:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea disabled=\"true\" [(ngModel)]=\"others\" pInputTextarea style=\"width:70%\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>特色描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items1; let i = index\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value11\" style=\"width:56%\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel1(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd1()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品短语:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items3; let i = index\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value31\" style=\"width:56%\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel3(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd3()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12 saled\" *ngFor=\"let item of items2; let i = index\">\r\n                            <p-inputMask mask=\"999\" [(ngModel)]=\"item.detailkey\" placeholder=\"请输入序号\" [style]=\"{'width':'15%'}\"></p-inputMask>\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value21\" placeholder=\"请输入标题\" style=\"width:25%\">\r\n                            <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.value22\" placeholder=\"请输入描述内容\" style=\"width:42%\">\r\n                            <button disabled=\"true\" class=\"qbuttons\" type=\"button\" (click)=\"doDetel2(i)\">删除</button>\r\n                            <button disabled=\"true\" class=\"qbuttons qbuttonss\" type=\"button\" (click)=\"doAdd2()\">添加</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"展示图片\">\r\n                  <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>首页展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load1($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files10.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files10\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta1(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>列表展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load2($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files11.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files11\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta2(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>产品说明书:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load3($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files12.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files12\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta3(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>产品购买协议:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load4($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files13.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files13\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta4(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>列表视频:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load5($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"video/*\" invalidFileTypeMessageDetail=\"只能上传视频\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files14.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files14\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta5(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-6 bzwidth\">\r\n                          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                            <label>详情展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-10\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load6($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" multiple=\"multiple\" accept=\"image/*\" accept=\"image/*\" maxFileSize=\"10485760\"\r\n                                invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\"\r\n                                invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                              <div *ngIf=\"files15.length>0\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let item of files15\">{{item.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta6(item)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <div class=\"bzdwidth bzswidth\">\r\n                            <label>详情描述:</label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of items12; let i = index\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load7($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" maxFileSize=\"10485760\" accept=\"image/*\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                                invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\" invalidFileTypeMessageDetail=\"只能上传图片\">\r\n                              </p-fileUpload>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-3\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let items of item.list\">{{items.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta7(item,items)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-3\">\r\n                              <button disabled=\"true\" *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetails(i)\" label=\"删除\"></button>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-3\">\r\n                              <p-inputMask disabled=\"true\" mask=\"999\" [(ngModel)]=\"item.detailkey1\" placeholder=\"请输入序号\" [style]=\"{'width':'35%'}\"></p-inputMask>\r\n                              <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetails\" placeholder=\"请输入描述内容\" style=\"width:59%\">\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-3\">\r\n                              <button disabled=\"true\" pButton type=\"button\" (click)=\"doAddDetails()\" label=\"添加\"></button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"文档手册\">\r\n                  <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files17; let i = index\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <p-fileUpload disabled=\"true\" (onUpload)=\"load8($event,i)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                                url=\"{{UPLOAD}}\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n                                invalidFileTypeMessageSummary=\"\">\r\n                              </p-fileUpload>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div class=\"ui-g-12 ui-md-6\">\r\n                                <div style=\"margin:10px\" *ngFor=\"let items of item.liste\">{{items.name}}\r\n                                  <button disabled=\"true\" pButton (click)=\"deleta8(item,items)\" type=\"button\">删除</button>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <p-inputMask disabled=\"true\" mask=\"999\" [(ngModel)]=\"item.detailkey2\" placeholder=\"请输入序号\"></p-inputMask>\r\n                                <input disabled=\"true\" type=\"text\" pInputText [(ngModel)]=\"item.valuedetailes\" placeholder=\"请输入描述内容\">\r\n                              </div>\r\n                              <div class=\"ui-g-12 ui-md-3\">\r\n                                <button disabled=\"true\" pButton type=\"button\" (click)=\"doAddDetailes()\" label=\"添加\"></button>\r\n                                <button disabled=\"true\" *ngIf=\"i>0\" pButton type=\"button\" (click)=\"doDetelDetailes(i)\" label=\"删除\"></button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-6 mswidth\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品说明书:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\">\r\n                            <p-fileUpload disabled=\"true\" (onUpload)=\"load9($event)\" chooseLabel=\"选择\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\"\r\n                              url=\"{{UPLOAD}}\" multiple=\"multiple\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\"\r\n                              invalidFileSizeMessageSummary=\"{0}\" invalidFileTypeMessageSummary=\"\">\r\n                            </p-fileUpload>\r\n                            <div *ngIf=\"files18.length>0\">\r\n                              <div style=\"margin:10px\" *ngFor=\"let item of files18\">{{item.name}}\r\n                                <button disabled=\"true\" pButton (click)=\"deleta9(item)\" type=\"button\">删除</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </p-tabPanel>\r\n              </p-tabView>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 \">\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <button disabled=\"true\" pButton type=\"button\" *ngIf=\"vlaue1=='6'\" (click)=\"webcopy()\" label=\"站点复制\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 \">\r\n    <div class=\"ui-g-12 ui-md-12 text_center from-sub-bor\">\r\n      <button pButton type=\"button\" *ngIf=\"vlaue1!='0'\" (click)=\"prev()\" label=\"上一步\"></button>\r\n      <button pButton type=\"button\" *ngIf=\"vlaue1!='6'\" (click)=\"next()\" label=\"下一步\"></button>\r\n      <button pButton type=\"button\" (click)=\"goBack()\" label=\"取消\"></button>\r\n      <button pButton type=\"button\" [disabled]='iscompele' *ngIf=\"vlaue1=='6'\" (click)=\"allServe()\" label=\"完成\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 引入组件弹出框-->\r\n<p-dialog *ngIf='componentSelect' [(visible)]=\"componentSelect\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>组件选择</p-header>\r\n  <div class=\"overflow\">\r\n    <app-sale-product-component-select [inValue]=\"updateValue\" (outValue)=\"chooseComponentCall($event)\" (closeDialog)=\"componentSelect=false\"></app-sale-product-component-select>\r\n  </div>\r\n</p-dialog>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <credit-sale-product-config-User [inValue]=\"updateValue\" *ngIf=\"showModel=='2'\" (outValue)=\"choicesaleUser($event)\"></credit-sale-product-config-User>\r\n    <credit-sale-product-config-manager [inValue]=\"updateValue\" *ngIf=\"showModel=='4'\" (outValue)=\"choicemanager($event)\"></credit-sale-product-config-manager>\r\n    <credit-sale-product-modify-website [inValue]=\"updateValue\" *ngIf=\"showModel=='6'\" (outValue)=\"choicewebsite($event)\"></credit-sale-product-modify-website>\r\n  </div>\r\n</p-dialog>\r\n<!-- 属性弹出框-->\r\n<p-dialog *ngIf='displaed' [(visible)]=\"displaed\" modal=\"modal\" width=\"550\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitled}}\r\n  </p-header>\r\n  <div class=\"ui-g-12 ui-md-12 overflow\">\r\n    <credit-sale-product-modify-specail [inValue]=\"updateValue\" *ngIf=\"showModel=='1'\" (outValue)=\"addspecailattr($event)\"></credit-sale-product-modify-specail>\r\n  </div>\r\n</p-dialog>\r\n<!-- 营销部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>营销部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>\r\n<!-- 管理部门机构树回调 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplayB\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>管理部门</p-header>\r\n  <div class=\"overflow\">\r\n    <org-mutil-tree-component (selectAllValue)=\"treeCallB($event)\"></org-mutil-tree-component>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n  .container .text_center label {\n    font-weight: bold; }\n  .container .text_left {\n  text-align: left; }\n  .container .text_left label {\n    font-weight: bold; }\n  .container .text_right {\n  text-align: right; }\n  .container .text_right label {\n    font-weight: bold; }\n  .container .ul_box ul li {\n  list-style-type: none; }\n  .container .margin_add {\n  margin-top: 10px;\n  margin-left: -0.3em; }\n  .container .margin_adds {\n  margin-top: 10px;\n  margin-left: 0.2em; }\n  .container .margin_top {\n  margin-top: 36px; }\n  .container .padding {\n  padding-top: 0;\n  padding-bottom: 0; }\n  .container .paddings {\n  padding-top: 1em;\n  padding-bottom: 0; }\n  .container .box ul {\n  clear: both; }\n  .container .box ul li {\n    float: left;\n    list-style-type: none; }\n  .container .un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n  .container .active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n  .container .active .dline {\n    width: 30%;\n    border-bottom: 2px solid #19b0c8;\n    margin: 8px 35% 0 35%; }\n  .container .saled {\n  position: relative; }\n  .container .saled .saleds {\n    position: absolute; }\n  .container .saled .saleds .qbutton {\n      outline: none;\n      height: 28px;\n      border: 1px solid #bdbdbd;\n      cursor: pointer;\n      background-color: #fafafa;\n      color: #19b0c8;\n      position: absolute;\n      right: 0;\n      bottom: 0.3em; }\n  .container .saled .msgess {\n    position: absolute; }\n  .container .saled .qbuttons {\n    outline: none;\n    height: 28px;\n    border: 1px solid #bdbdbd;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #19b0c8;\n    position: absolute; }\n  .container .saled .qbuttones {\n    margin-left: 3.5em; }\n  .container .saled .qbuttonss {\n    margin-left: 3em; }\n  .container .sales {\n  margin-top: 5em; }\n  .container .sales .mbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: #fafafa;\n    color: #28B0C6;\n    font-size: 1.2em;\n    margin-top: 2em; }\n  .container .hcolor {\n  color: #19b0c8; }\n  .container .forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n  .container .boxOne {\n  float: left;\n  width: 90%; }\n  .container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n  .container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n  .container .heOne {\n  height: 100%; }\n  .container .bzdwidth {\n  width: 50%; }\n  @media screen and (max-width: 1880px) {\n  .container .mwidth {\n    width: 100% !important; } }\n  @media screen and (max-width: 1690px) {\n  .container .bzwidth {\n    width: 100% !important; }\n  .container .bzswidth {\n    width: 100% !important; } }\n  @media screen and (max-width: 1560px) {\n  .container .mswidth {\n    width: 100% !important; } }\n  .container .margin_ad {\n  margin: 0 1em; }\n  :host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important;\n  height: 26px;\n  margin-top: -4px; }\n  :host/deep/ .ui-datepicker select.ui-datepicker-month {\n  font-size: 16px !important;\n  width: 35%;\n  height: 26px;\n  margin-top: -4px; }\n  :host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n  .overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden; }\n  :host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n  :host/deep/ .ui-steps .ui-steps-item .ui-menuitem-link {\n  background: #fff !important;\n  width: 150px;\n  margin: 0 auto;\n  text-align: center; }\n  :host/deep/.ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title {\n  vertical-align: middle; }\n  :host/deep/.ui-steps-item.ng-star-inserted {\n  float: none;\n  display: inline-block !important;\n  text-align: center;\n  width: 14%; }\n  :host/deep/.ui-widget.ui-helper-clearfix.ui-steps-readonly:before {\n  content: ' ';\n  border: 1px solid #dddddd;\n  width: 85%;\n  top: 45%;\n  left: 5%;\n  display: block;\n  position: absolute; }\n  :host/deep/ .ui-dropdown {\n  width: 45% !important;\n  min-width: 130px; }\n  :host/deep/ input[pInputText] {\n  height: 28px;\n  min-width: 100px; }\n  :host/deep/ .ui-calendar {\n  width: 50%; }\n  .basetable {\n  text-align: center;\n  padding: 0 5vw; }\n  .basetable thead,\n  .basetable tbody {\n    display: block; }\n  .basetable thead tr,\n    .basetable tbody tr {\n      display: block;\n      cursor: pointer; }\n  .basetable thead tr td,\n      .basetable tbody tr td {\n        width: 28vw;\n        height: 30px;\n        font-size: 15px; }\n  .basetable thead .content,\n    .basetable tbody .content {\n      max-height: 50vh;\n      overflow: auto; }\n  .basetable thead .content .ui-g-12,\n      .basetable tbody .content .ui-g-12 {\n        padding: 0; }\n  .basetable thead tr {\n    background: #19b0c8;\n    color: white; }\n  .basetable p {\n    text-align: left;\n    font-size: 16px;\n    font-weight: bold; }\n  .basetable input {\n    width: 50%; }\n  .basetable tbody tr:nth-child(even) {\n    background: #fafafa; }\n  .basetable tbody tr:nth-child(odd) {\n    background: #ebebeb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3QtbW9kaWZ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3JlZGl0LWNjbVxcY3JlZGl0LXByb2R1Y3QtY29uZmlnXFxzYWxlLXByb2R1Y3QtbW9kaWZ5XFxzYWxlLXByb2R1Y3QtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7RUFGMUI7SUFJWSxpQkFBaUIsRUFBQTtFQUo3QjtFQVFRLGdCQUFnQixFQUFBO0VBUnhCO0lBVVksaUJBQWlCLEVBQUE7RUFWN0I7RUFjUSxpQkFBaUIsRUFBQTtFQWR6QjtJQWdCWSxpQkFBaUIsRUFBQTtFQWhCN0I7RUFvQlEscUJBQXFCLEVBQUE7RUFwQjdCO0VBdUJRLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQXhCM0I7RUEyQlEsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBNUIxQjtFQStCUSxnQkFBZ0IsRUFBQTtFQS9CeEI7RUFrQ1EsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBbkN6QjtFQXNDUSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUF2Q3pCO0VBMkNZLFdBQVcsRUFBQTtFQTNDdkI7SUE2Q2dCLFdBQVc7SUFDWCxxQkFBcUIsRUFBQTtFQTlDckM7RUFtRFEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtFQTdEdkI7RUFnRVEsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBdEV2QjtJQXdFWSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHFCQUFxQixFQUFBO0VBMUVqQztFQThFUSxrQkFBa0IsRUFBQTtFQTlFMUI7SUFnRlksa0JBQWtCLEVBQUE7RUFoRjlCO01Ba0ZnQixhQUFhO01BQ2IsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLGFBQWEsRUFBQTtFQTFGN0I7SUE4Rlksa0JBQWtCLEVBQUE7RUE5RjlCO0lBaUdZLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBdkc5QjtJQTBHWSxrQkFBa0IsRUFBQTtFQTFHOUI7SUE2R1ksZ0JBQWdCLEVBQUE7RUE3RzVCO0VBaUhRLGVBQWUsRUFBQTtFQWpIdkI7SUFtSFksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBekgzQjtFQTZIUSxjQUFjLEVBQUE7RUE3SHRCO0VBZ0lRLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBbEluQjtFQXFJUSxXQUFXO0VBQ1gsVUFBVSxFQUFBO0VBdElsQjtFQXlJUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTtFQTNJdkI7RUE4SVEsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBL0l4QjtFQWtKUSxZQUFZLEVBQUE7RUFsSnBCO0VBcUpRLFVBQVUsRUFBQTtFQUVkO0VBdkpKO0lBeUpZLHNCQUFxQixFQUFBLEVBQ3hCO0VBRUw7RUE1Sko7SUE4Slksc0JBQXFCLEVBQUE7RUE5SmpDO0lBaUtZLHNCQUFxQixFQUFBLEVBQ3hCO0VBRUw7RUFwS0o7SUFzS1ksc0JBQXFCLEVBQUEsRUFDeEI7RUF2S1Q7RUEwS1EsYUFBYSxFQUFBO0VBS3JCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFJcEI7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtFQXVCaEM7RUFDSSwyQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksV0FBVztFQUNYLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0VBR2Q7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixRQUFRO0VBQ1IsUUFBUTtFQUNSLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLFVBQVUsRUFBQTtFQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUZsQjs7SUFLUSxjQUFjLEVBQUE7RUFMdEI7O01BT1ksY0FBYztNQUVkLGVBQWUsRUFBQTtFQVQzQjs7UUFXZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlLEVBQUE7RUFiL0I7O01Bb0JZLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7RUFyQjFCOztRQWtCZ0IsVUFBVSxFQUFBO0VBbEIxQjtJQXlCUSxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBMUJwQjtJQTZCUSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBL0J6QjtJQWtDUSxVQUFVLEVBQUE7RUFsQ2xCO0lBcUNRLG1CQUFrQixFQUFBO0VBckMxQjtJQXdDUSxtQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LW1vZGlmeS9zYWxlLXByb2R1Y3QtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0X2xlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWxfYm94IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX2FkZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTAuM2VtO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl9hZGRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmcge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmdzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudW5fYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC5kbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAzNSUgMCAzNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNhbGVkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLnNhbGVkcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLnFidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMC4zZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1zZ2VzcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnFidXR0b25zIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xYnV0dG9uZXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMy41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xYnV0dG9uc3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zYWxlcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgICAgIC5tYnV0dG9uIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjhCMEM2O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhjb2xvciB7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuZm9yY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmJveFR3byB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaGVUd28ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmhlT25lIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYnpkd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE4ODBweCkge1xyXG4gICAgICAgIC5td2lkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNjkwcHgpIHtcclxuICAgICAgICAuYnp3aWR0aCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ6c3dpZHRoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTU2MHB4KSB7XHJcbiAgICAgICAgLm1zd2lkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl9hZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+mAieaLqeaciOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNCkge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNSkge1xyXG4vLyAgICAgd2lkdGg6IDE3JTtcclxuLy8gfVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzIC51aS1zdGVwcy1pdGVtIC51aS1tZW51aXRlbS1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnVpLXN0ZXBzIC51aS1zdGVwcy1pdGVtIC51aS1tZW51aXRlbS1saW5rIC51aS1zdGVwcy10aXRsZSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLy51aS1zdGVwcy1pdGVtLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnVpLXdpZGdldC51aS1oZWxwZXItY2xlYXJmaXgudWktc3RlcHMtcmVhZG9ubHk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyBpbnB1dFtwSW5wdXRUZXh0XSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJhc2V0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDV2dztcclxuICAgIHRoZWFkLFxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMXB4IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4dnc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIC51aS1nLTEye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGVhZCB0cntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmFmYWZhO1xyXG4gICAgfVxyXG4gICAgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZWJlYmViO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SaleProductModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductModifyComponent", function() { return SaleProductModifyComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../bean/sale-product.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sale.service */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale.service.ts");
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
    function SaleProductModifyComponent(creditCcmService, commfunc, router, routerA, fb, saleService) {
        this.creditCcmService = creditCcmService;
        this.commfunc = commfunc;
        this.router = router;
        this.routerA = routerA;
        this.fb = fb;
        this.saleService = saleService;
        this.selectComponetIds = []; //已选择的组件
        this.orgTreeDisplay = false;
        this.orgTreeDisplayB = false;
        this.vlaueOpen = 'open';
        this.checkNumber = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]; //包装校验
        this.loadd = false;
        //控制日历刷新
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //讲英文转化为中文
        this.showFlag = true;
        this.introductionDate = new Date(); //引入日期
        this.releaseDate = new Date(); //引入日期
        this.iscompele = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; //列表无数据
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
        this.carsold = []; //组件初始值
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_PRO_UPLOAD"];
        // 第一页
        this.productNumBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__["productNumBean"];
        this.postsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_7__["PostsManageBean"]; //可售产品 保存bean
        this.select_line = []; //产品线下拉
        this.select_group = []; //产品组下拉
        this.base_product = []; //基础产品/产品类型  下拉
        this.line_value = {}; //产品线下拉值
        this.line_value1 = ''; //产品线下拉值
        this.group_value1 = ''; //产品组下拉值
        this.product_base_value = []; //基础产品
        this.product_base_value1 = ''; //基础产品
        this.product_base_arr = []; //基础产品
        this.head_title = '可售产品修改';
        this.productCurrency = ''; //产品币种
        this.inOut = ''; //表内表外
        this.crmValue = ''; //CRM产品树编号
        this.businessValue = ''; //业务品种编号
        this.cbusinessValue = ''; //子业务品种编号
        //产品营销
        this.val1 = ''; //产品说明书
        this.val2 = ''; //产品购买协议
        this.val3 = ''; //操作手册
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
        //列表
        this.cars_3 = [];
        this.cars_4 = [];
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
        this.arrValue = [];
        this.attrName = '';
        this.attrValue = '';
        this.attrType = '';
        this.attrN = [];
        //盛放用户选择的数据
        this.choose_tr = [];
        this.choose_tr2 = [];
        // choose_tr4: any = [];
        //组件
        this.aIndex = 0;
        this.select_atr = []; //属性选择
        this.select_atr2 = []; //组件选择
        this.select_atr3 = []; //组件选择
        this.attrValue2 = []; //属性值
        this.choose_trall2 = false; //组件全选;
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        this.productFeatureArr = [];
        this.chooseData10 = [];
        this.checkBoxAll10 = false; //大全选
        // 功能
        this.funList_left = []; //左选择框
        this.funList_right = []; //右选择框
        this.leftListFun = []; //左列表
        this.rightListFun = []; //右列表
        this.functionList = []; //功能存储列表
        this.show = ''; //默认选中第1个
        this.siteList = [];
        this.arrImage = []; //图片暂存数组
        this.arrFile = []; //文档暂存数组
        this.arrTxt = []; //描述暂存数组
        this.items1 = []; //特色描述
        this.items2 = []; //特色描述详情描述
        this.items3 = []; //产品短语
        this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }]; //图片详情描述
        this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
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
        this.display = false;
        this.displaed = false;
        this.componentSelect = false;
        //组件的参数
        this.updateValue = [];
        this.salee = [];
        this.saledd = [];
        this.salee1 = [];
        this.saledd1 = [];
        this.saleDepartment = ''; //销售部门
        this.cfsaleDepartment = ''; //管理部门
        this.belong1 = [];
        this.belongg1 = [];
        this.belongs1 = [];
        this.belongss1 = [];
        this.saleUser = ''; //销售人员角色
        //取值回显
        this.keshou_obj = {};
        this.keshou_objS = {};
        this.biaoq_obj = {};
        this.biaoq_objS = {};
        this.ArrObj = {};
        this.textlist = [];
        this.Feature = [];
        this.Featurement = [];
        this.dataResourceName = [];
        this.Detail = [];
        this.Detail2 = [];
        this.Phra = [];
        this.zujian_ist2 = [];
        this.zujian_ist3 = [];
        this.disabled = false; //全选;
        this.specialed = [];
        this.specialeed = [];
        this.isOrNotDelete = '';
        //包装回显
        this.detaillist = [];
        this.baozhuangid = '';
        this.introductionDate = null;
        this.releaseDate = null;
        this.userform = fb.group({
            'product_name_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            product_num: [''],
            line_value1: [''],
            group_value1: [''],
            product_base_value1: [''],
            product_content_value: [''],
        });
        this.userformDate = fb.group({
            introductionDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            releaseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.userformValue = fb.group({
            productCurrency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            crmValue: [''],
            businessValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cbusinessValue: [''],
            saleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cfsaleDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            saleUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.codeValues(); //调用方法，获取全部码值
        this.select_1 = this.code['select_1'];
        this.select_2 = this.code['select_2'];
        this.temporary = this.code['temporary'];
        this.configLevel = this.code['configLevel'];
    }
    SaleProductModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.val1 = 'TEXT';
        this.val2 = 'TEXT';
        this.val3 = 'TEXT';
        this.startp = '0';
        this.routerA.params.subscribe(function (data) {
            _this.PvalidStatus = data.PvalidStatus;
            _this.productIdValue = data.productId;
        });
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
                label: '字段排序',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            },
            {
                label: '可售包装',
                command: function (event) {
                    _this.activeIndex = 6;
                }
            }];
        //组件显示查询
        this.siteQuery();
        this.line_query();
        this.query_details();
        if (this.PvalidStatus == '2') {
            this.queryDetailData();
        }
        this.Typeinex = 0;
        this.detailkeynum = 0;
    };
    SaleProductModifyComponent.prototype.ngOnChanges = function () {
    };
    // 引入组件
    SaleProductModifyComponent.prototype.chooseComponent = function () {
        // 打开组件选择的弹框
        this.componentSelect = true;
        // 传入已经添加的历史的组件ID，用于弹框后判重
        this.updateValue = this.selectComponetIds;
    };
    // 引入组件回调
    SaleProductModifyComponent.prototype.chooseComponentCall = function (param) {
        // 在组件设置中显示
        // param.productFeatureCategoryList.forEach(item =>{
        this.cars_3.push(param);
        // 加入选中的组件ID，用于后面弹框选择判重
        this.selectComponetIds.push(param.productFeatureCategoryId);
        // });
        // 关闭弹框
        this.componentSelect = false;
    };
    //码值
    SaleProductModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //回显-可售详情查询
    SaleProductModifyComponent.prototype.query_details = function () {
        var _this = this;
        var param = { productId: this.productIdValue };
        this.creditCcmService.getAvailableProduct(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.product_num = data.availableProduct.productId;
                _this.product_name_value = data.availableProduct.productName;
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
                //第二步
                _this.releaseDate = new Date(data.availableProduct.releaseDate);
                _this.introductionDate = new Date(data.availableProduct.introductionDate);
                //管理信息  特殊属性
                data.productMsgs.forEach(function (eitem) {
                    if (eitem.attrType == 'crmNum') {
                        _this.crmValue = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'cateNum') {
                        _this.businessValue = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'subCateNum') {
                        _this.cbusinessValue = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'salePerson') {
                        _this.salee = [];
                        eitem.attrValue.split(',').forEach(function (items) {
                            _this.salee.push(items.split('#')[0]);
                        });
                        _this.saleDepartment = _this.salee.join(',');
                        _this.saleed = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'manageDept') {
                        _this.salee1 = [];
                        eitem.attrValue.split(',').forEach(function (items) {
                            _this.salee1.push(items.split('#')[0]);
                        });
                        _this.cfsaleDepartment = _this.salee1.join(',');
                        _this.saleed1 = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'salesman') {
                        _this.belong1 = [];
                        eitem.attrValue.split(',').forEach(function (items) {
                            _this.belong1.push(items.split('#')[0]);
                        });
                        _this.saleUser = _this.belong1.join(',');
                        _this.belongg = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'productManager') {
                        _this.belongs1 = [];
                        eitem.attrValue.split(',').forEach(function (items) {
                            _this.belongs1.push(items.split('#')[0]);
                        });
                        _this.productManager = _this.belongs1.join(',');
                        _this.belongss = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'productCurrency') {
                        _this.productCurrency = eitem.attrValue;
                    }
                    else if (eitem.attrType == 'inOut') {
                        _this.inOut = eitem.attrValue;
                    }
                    else if (eitem.attrType == '0' || eitem.attrType == '1' || eitem.attrType == '2') {
                        _this.special_attr.push(eitem);
                    }
                });
                //产品营销
                data.productMarketingList.forEach(function (item) {
                    if (item.productMarketingKey == '产品说明书') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val1 = 'FILE';
                            _this.productMarketing2.push(item.productMarketingValue);
                            _this.files21.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val1 = 'TEXT';
                            _this.productMarketing = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '产品购买协议') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val2 = 'FILE';
                            _this.productshopping2.push(item.productMarketingValue);
                            _this.files22.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val2 = 'TEXT';
                            _this.productshopping = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '营销活动') {
                        _this.managememntactive = item.productMarketingValue;
                    }
                    else if (item.productMarketingKey == '营销话术') {
                        _this.managememntspeech = item.productMarketingValue;
                    }
                    else if (item.productMarketingKey == '操作手册') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val3 = 'FILE';
                            _this.operationmanual2.push(item.productMarketingValue);
                            _this.files23.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val3 = 'TEXT';
                            _this.operationmanual = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '视频') {
                        _this.vedio.push(item.productMarketingValue);
                        _this.files24.push({ 'name': item.productMarketingValue.split('_')[1] });
                    }
                });
                //功能应用
                _this.funList_right = data.productFunctionList;
                //组件设置
                if (_this.PvalidStatus != '2') {
                    data.productFeatureList.forEach(function (item, i) {
                        _this.cars_4.push({ 'parentCategoryId': item.productFeatureCategoryName, 'description': item.productFeatureCategoryName, 'productFeatureCategoryId': item.productFeatureCategoryId, 'productFeatureTypeList': item.productFeatureTypeList });
                    });
                }
                //取值设置
                //包装 产品描述
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
                                _this.files10.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName10 = '';
                                var fileUrl10 = '';
                                var objectInfo10 = [];
                                objectInfo10 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName10 = objectInfo10.pop();
                                fileUrl10 = objectInfo10.join('=');
                                _this.fileList10 = [];
                                _this.fileList10.push({
                                    "fileName": fileName10,
                                    "fileUrl": fileUrl10,
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
                                _this.files11.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName11 = '';
                                var fileUrl11 = '';
                                var objectInfo11 = [];
                                objectInfo11 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName11 = objectInfo11.pop();
                                fileUrl11 = objectInfo11.join('=');
                                _this.fileList11 = [];
                                _this.fileList11.push({
                                    "fileName": fileName11,
                                    "fileUrl": fileUrl11,
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
                                _this.files12.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName12 = '';
                                var fileUrl12 = '';
                                var objectInfo12 = [];
                                objectInfo12 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName12 = objectInfo12.pop();
                                fileUrl12 = objectInfo12.join('=');
                                _this.fileList12 = [];
                                _this.fileList12.push({
                                    "fileName": fileName12,
                                    "fileUrl": fileUrl12,
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
                                _this.files13.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName13 = '';
                                var fileUrl13 = '';
                                var objectInfo13 = [];
                                objectInfo13 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName13 = objectInfo13.pop();
                                fileUrl13 = objectInfo13.join('=');
                                _this.fileList13 = [];
                                _this.fileList13.push({
                                    "fileName": fileName13,
                                    "fileUrl": fileUrl13,
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
                                _this.files14.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName14 = '';
                                var fileUrl14 = '';
                                var objectInfo14 = [];
                                objectInfo14 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName14 = objectInfo14.pop();
                                fileUrl14 = objectInfo14.join('=');
                                _this.fileList14 = [];
                                _this.fileList14.push({
                                    "fileName": fileName14,
                                    "fileUrl": fileUrl14,
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
                                _this.files15.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] });
                                var fileName15 = '';
                                var fileUrl15 = '';
                                var objectInfo15 = [];
                                objectInfo15 = _this.zujian_ist2[j].objectInfo.split('=');
                                fileName15 = objectInfo15.pop();
                                fileUrl15 = objectInfo15.join('=');
                                _this.fileList15 = [];
                                _this.fileList15.push({
                                    "fileName": fileName15,
                                    "fileUrl": fileUrl15,
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
                                _this.items12.push({ 'detailkey1': _this.zujian_ist2[j].objectInfo.split(':')[0], 'valuedetails': _this.zujian_ist2[j].objectInfo.split(':')[1], 'list': [{ "name": _this.zujian_ist2[j].objectInfo.split('_')[1] }] });
                                var fileName16 = [];
                                var objectInfo16 = [];
                                var objectIn16 = '';
                                objectInfo16 = _this.zujian_ist2[j].objectInfo.split(':');
                                objectInfo16.splice(0, 2);
                                objectIn16 = objectInfo16.join(':');
                                fileName16 = objectIn16.split('=');
                                fileName16.pop();
                                _this.fileList16 = [];
                                _this.fileList16.push({
                                    "fileName": objectIn16.split('=').pop(),
                                    "fileUrl": fileName16.join('='),
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
                                _this.files17.push({ 'detailkey2': _this.zujian_ist3[K].objectInfo.split(':')[0], 'valuedetailes': _this.zujian_ist3[K].objectInfo.split(':')[1], 'liste': [{ "name": _this.zujian_ist3[K].objectInfo.split('_')[1] }] });
                                var fileName17 = [];
                                var objectIn17 = '';
                                var objectInfo17 = [];
                                objectInfo17 = _this.zujian_ist3[K].objectInfo.split(':');
                                objectInfo17.splice(0, 2);
                                objectIn17 = objectInfo17.join(':');
                                fileName17 = objectIn17.split('=');
                                fileName17.pop();
                                _this.fileList17 = [];
                                _this.fileList17.push({
                                    "fileName": objectIn17.split('=').pop(),
                                    "fileUrl": fileName17.join('='),
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
                                _this.files18.push({ "name": _this.zujian_ist3[K].objectInfo.split('_')[1] });
                                var fileName18 = '';
                                var fileUrl18 = '';
                                var objectInfo18 = [];
                                objectInfo18 = _this.zujian_ist3[K].objectInfo.split('=');
                                fileName18 = objectInfo18.pop();
                                fileUrl18 = objectInfo18.join('=');
                                _this.fileList18 = [];
                                _this.fileList18.push({
                                    "fileName": fileName18,
                                    "fileUrl": fileUrl18,
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
                    _this.siteList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.siteList);
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
    SaleProductModifyComponent.prototype.queryDetailData = function () {
        var _this = this;
        var param = {
            productId: this.productIdValue
        };
        this.creditCcmService.getAvailableProductByCredit(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.productFeatureList.forEach(function (item, i) {
                    _this.cars_4.push({ 'parentCategoryId': item.productFeatureCategoryName, 'description': item.productFeatureCategoryName, 'productFeatureCategoryId': item.productFeatureCategoryId, 'productFeatureTypeList': item.productFeatureTypeList });
                });
            }
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
    SaleProductModifyComponent.prototype.findIndex = function (list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].productFeatureTypeId == id) {
                return i;
            }
        }
    };
    //组件查询
    SaleProductModifyComponent.prototype.getBaseProductDetails = function (pd_param) {
        var _this = this;
        // 清空已引入的组件
        this.selectComponetIds = [];
        this.creditCcmService.getBaseProductDetails(pd_param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.choose_tr2 = [];
                var arr_1 = [], arr1_1 = [];
                data.productFeatureCategoryList.forEach(function (item, i) {
                    _this.cars_4.forEach(function (items) {
                        if (item.productFeatureCategoryId == items.productFeatureCategoryId) {
                            items.productFeatureTypeList.forEach(function (pro, index) {
                                item.productFeatureTypeList[_this.findIndex(item.productFeatureTypeList, pro.productFeatureTypeId)]['sequenceNum'] = pro.sequenceNum || '';
                            });
                            var k = void 0;
                            k = i.toString();
                            _this.choose_tr2.push(k);
                            arr_1.push(item);
                            arr1_1.push(items);
                            // this.choose_tr4.push(k);
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
                _this.total = data.total;
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
    SaleProductModifyComponent.prototype.siteQuery = function () {
        var _this = this;
        var param = { str: this.productIdValue };
        this.creditCcmService.findAllWebSite(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.siteList = data.list;
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
    SaleProductModifyComponent.prototype.siteClick = function (col) {
        var _this = this;
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
        var sitenum = 0;
        this.siteList.forEach(function (items) {
            if (items.webSiteId == col.webSiteId && items.isOrNotUpdate == 'not') {
                sitenum++;
                _this.show = _this.show;
                _this.baozhuangid = _this.baozhuangid;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: items.description });
            }
        });
        if (sitenum == 0) {
            var detailide_1 = 0;
            this.detaillist.forEach(function (item, i) {
                if (item.channelId == col.webSiteId) {
                    detailide_1++;
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
                            _this.files10.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList10 = [];
                            _this.fileList10.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.files11.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList11 = [];
                            _this.fileList11.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.files12.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList12 = [];
                            _this.fileList12.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.files13.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList13 = [];
                            _this.fileList13.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.files14.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList14 = [];
                            _this.fileList14.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.files15.push({ "name": _this.zujian_ist2[j].imageName.split('_')[1] });
                            _this.fileList15 = [];
                            _this.fileList15.push({
                                "fileName": _this.zujian_ist2[j].imageName,
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
                            _this.items12.push({ 'detailkey1': _this.zujian_ist2[j].imagePath.split(':')[0], 'valuedetails': _this.zujian_ist2[j].imagePath.split(':')[1], 'list': [{ "name": _this.zujian_ist2[j].imageName.split('_')[1] }] });
                            _this.fileList16 = [];
                            _this.fileList16.push({
                                "fileName": _this.zujian_ist2[j].imageName,
                                "fileUrl": _this.zujian_ist2[j].imagePath.split(':')[2],
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
                            _this.files17.push({ 'detailkey2': _this.zujian_ist3[K].filePath.split(':')[0], 'valuedetailes': _this.zujian_ist3[K].filePath.split(':')[1], 'liste': [{ "name": _this.zujian_ist3[K].fileName.split('_')[1] }] });
                            _this.fileList17 = [];
                            _this.fileList17.push({
                                "fileName": _this.zujian_ist3[K].fileName,
                                "fileUrl": _this.zujian_ist3[K].filePath.split(':')[2],
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
                            _this.files18.push({ "name": _this.zujian_ist3[K].fileName.split('_')[1] });
                            _this.fileList18 = [];
                            _this.fileList18.push({
                                "fileName": _this.zujian_ist3[K].fileName,
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
            if (detailide_1 == 0) {
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
                this.items12 = [{ 'detailkey1': '', 'valuedetails': '', 'list': [] }];
                this.value101Path = [];
                this.files17 = [{ 'detailkey2': '', 'valuedetailes': '', 'liste': [] }];
                this.value111Path = [];
                this.files18 = [];
                this.value112Path = [];
            }
            this.show = col.siteName;
            this.baozhuangid = col.webSiteId;
        }
        this.startp = '1';
    };
    //站点复制
    SaleProductModifyComponent.prototype.webcopy = function () {
        var _this = this;
        var site = {
            siteName: this.show,
            webSiteId: this.baozhuangid
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
            if (iten.fileList != [] && iten.imageList != [] && infos != 9) {
                if (iten.channelId != _this.baozhuangid) {
                    copylist.push(iten);
                }
            }
        });
        this.display = true;
        this.headerTitle = '站点复制';
        this.showModel = '6';
        this.updateValue = copylist;
    };
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
    SaleProductModifyComponent.prototype.chakAN = function () {
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
                _this.saledd.push(item.orgName + '#' + item.orgId);
            });
            this.saled = this.salee.join(',');
            this.saleed = this.saledd.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled = items.orgName;
                _this.saleed = items.orgName + '#' + items.orgId;
            });
        }
        this.saleDepartment = this.saled;
    };
    SaleProductModifyComponent.prototype.lveMain = function () {
        this.orgTreeDisplayB = !this.orgTreeDisplayB;
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
                _this.saledd1.push(items.orgName + '#' + items.orgId);
            });
            this.saled1 = this.salee1.join(',');
            this.saleed1 = this.saledd1.join(',');
        }
        else {
            param.forEach(function (items) {
                _this.saled1 = items.orgName;
                _this.saleed1 = items.orgName + '#' + items.orgId;
            });
        }
        this.cfsaleDepartment = this.saled1;
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
            this.belongg1 = [];
            if (parames.depart.length > 1) {
                parames.depart.forEach(function (items) {
                    _this.belong1.push(items.postName);
                    _this.belongg1.push(items.postName + '#' + items.postId);
                });
                this.belong = this.belong1.join(',');
                this.belongg = this.belongg1.join(',');
            }
            else {
                parames.depart.forEach(function (items) {
                    _this.belong = items.postName;
                    _this.belongg = items.postName + '#' + items.postId;
                });
            }
            this.saleUser = this.belong;
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
                    _this.belongss1.push(items.userName + '#' + items.userLoginId);
                });
                this.belongs = this.belongs1.join(',');
                this.belongss = this.belongss1.join(',');
            }
            else {
                paramd.departed.forEach(function (items) {
                    _this.belongs = items.userName;
                    _this.belongss = items.userName + '#' + items.userLoginId;
                });
            }
            this.productManager = this.belongs;
        }
    };
    //特殊属性
    SaleProductModifyComponent.prototype.addAttr = function () {
        this.displaed = true;
        this.headerTitled = '添加特殊属性';
        this.showModel = '1';
        this.updateValue = this.special_attr;
    };
    SaleProductModifyComponent.prototype.addspecailattr = function (paramss) {
        this.displaed = paramss.displaed;
        this.special_attr = paramss.salet2;
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.special_attr);
    };
    // 产品线下拉
    SaleProductModifyComponent.prototype.line_query = function () {
        var _this = this;
        this.creditCcmService.productLinePull({}).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品组修改
    SaleProductModifyComponent.prototype.lineVelue = function () {
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        var parmId = this.line_value.productCategoryId;
        this.group_query(parmId);
    };
    // 产品组下拉
    SaleProductModifyComponent.prototype.group_query = function (Item) {
        var _this = this;
        var parm = { productLineId: Item };
        this.creditCcmService.productGroupPull(parm).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品组修改
    SaleProductModifyComponent.prototype.groupChange = function () {
        var _this = this;
        //查询基础产品id
        var params = {
            groupId: this.group_value.productCategoryId
        };
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.creditCcmService.pdGroupTemplateQuery(params).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //日期
    SaleProductModifyComponent.prototype.refresh = function () {
        this.releaseDate = null;
    };
    //特殊属性  删除
    SaleProductModifyComponent.prototype.delAttr = function () {
        var _this = this;
        this.choose_tr.sort(function (a, b) { return b - a; });
        this.choose_tr.forEach(function (item) {
            _this.special_attr.splice(item, 1);
        });
        this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.special_attr);
        this.choose_tr = [];
    };
    //产品营销
    SaleProductModifyComponent.prototype.load21 = function (event) {
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
    SaleProductModifyComponent.prototype.deleta21 = function (item) {
        var kkey = this.files21.indexOf(item);
        this.files21.splice(kkey, 1);
        this.productMarketing2.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.load22 = function (event) {
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
    SaleProductModifyComponent.prototype.deleta22 = function (item) {
        var kkey = this.files22.indexOf(item);
        this.files22.splice(kkey, 1);
        this.productshopping2.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.load23 = function (event) {
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
    SaleProductModifyComponent.prototype.deleta23 = function (item) {
        var kkey = this.files23.indexOf(item);
        this.files23.splice(kkey, 1);
        this.operationmanual2.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.load24 = function (event) {
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
    SaleProductModifyComponent.prototype.deleta24 = function (item) {
        var kkey = this.files24.indexOf(item);
        this.files24.splice(kkey, 1);
        this.vedio.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.prev = function () {
        var _this = this;
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        if (this.activeIndex == 1) {
            this.special_attr3 = this.special_attr;
            this.special_attr = [];
            this.special_attr3.forEach(function (items) {
                if (items.attrType == '0' || items.attrType == '1' || items.attrType == '2') {
                    _this.special_attr.push(items);
                }
            });
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
        // if (this.activeIndex == 4) {
        //     if (this.isOrNotDelete != 'is') {
        //         this.activeIndex = 1;
        //         this.vlaue1 = this.activeIndex;
        //     }
        // }
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
        if (this.activeIndex < 6 && this.activeIndex > 1) {
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
        }
        //判断第几步
        if (this.activeIndex === 0) {
            var redo_name = {
                xxId: this.product_num,
                name: this.product_name_value,
                type: 'AvailableProduct'
            };
            this.creditCcmService.checkBeforeUpdate(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    // if (data.isOrNotUpdate != "is") {
                    //     this.msgs = [];
                    //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.retDesc + ',不允许修改' });
                    // } else {
                    _this.activeIndex = _this.activeIndex + 1;
                    _this.vlaue1 = _this.activeIndex;
                    //默认参数
                    var pd_param = {
                        baseProductId: _this.product_base_value.tplId
                    };
                    _this.getBaseProductDetails(pd_param);
                    _this.isOrNotDelete = data.isOrNotDelete;
                    // }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用验证重名服务错误" });
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
            for (var i in this.userformValue.controls) {
                this.userformValue.controls[i].markAsDirty();
            }
            //处理是否提交管理信息
            for (var i in this.userformValue.controls) {
                if (!this.userformValue.controls[i].valid) {
                    return;
                }
            }
            var crm = this.crmValue.split('');
            var business = this.businessValue.split('');
            var cbusiness = this.cbusinessValue.split('');
            if (crm.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: 'CRM产品树编号不可超过10位！' });
            }
            else if (business.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '业务品种编号不可超过10位！' });
            }
            else if (cbusiness.length > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '子业务品种编号不可超过10位！' });
            }
            else {
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
            }
        }
        if (this.activeIndex === 2) {
            this.special_attr.push({
                "attrName": "产品币种",
                "attrType": 'productCurrency',
                "attrValue": this.productCurrency
            });
            this.special_attr.push({
                "attrName": "表内表外",
                "attrType": 'inOut',
                "attrValue": this.inOut
            });
            this.special_attr.push({
                "attrName": "CRM产品树编号",
                "attrType": 'crmNum',
                "attrValue": this.crmValue
            });
            this.special_attr.push({
                "attrName": "业务品种编号",
                "attrType": 'cateNum',
                "attrValue": this.businessValue
            });
            this.special_attr.push({
                "attrName": "子业务品种编号",
                "attrType": 'subCateNum',
                "attrValue": this.cbusinessValue
            });
            this.special_attr.push({
                "attrName": "营销部门",
                "attrType": 'salePerson',
                "attrValue": this.saleed
            });
            this.special_attr.push({
                "attrName": "管理部门",
                "attrType": 'manageDept',
                "attrValue": this.saleed1
            });
            this.special_attr.push({
                "attrName": "销售人员角色",
                "attrType": 'salesman',
                "attrValue": this.belongg
            });
            this.special_attr.push({
                "attrName": "产品经理",
                "attrType": 'productManager',
                "attrValue": this.belongss
            });
            if (this.val1 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "产品说明书",
                    "productMarketingType": this.val1,
                    "productMarketingValue": this.productMarketing
                });
            }
            else {
                this.productMarketing2.forEach(function (elent) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "产品说明书",
                        "productMarketingType": _this.val1,
                        "productMarketingValue": elent
                    });
                });
            }
            if (this.val2 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "产品购买协议",
                    "productMarketingType": this.val2,
                    "productMarketingValue": this.productshopping
                });
            }
            else {
                this.productshopping2.forEach(function (item) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "产品购买协议",
                        "productMarketingType": _this.val2,
                        "productMarketingValue": item
                    });
                });
            }
            this.productMarketingList.push({
                "productMarketingKey": "营销活动",
                "productMarketingType": 'TEXT',
                "productMarketingValue": this.managememntactive
            });
            this.productMarketingList.push({
                "productMarketingKey": "营销话术",
                "productMarketingType": 'TEXT',
                "productMarketingValue": this.managememntspeech
            });
            if (this.val3 == 'TEXT') {
                this.productMarketingList.push({
                    "productMarketingKey": "操作手册",
                    "productMarketingType": this.val3,
                    "productMarketingValue": this.operationmanual
                });
            }
            else {
                this.operationmanual2.forEach(function (elem) {
                    _this.productMarketingList.push({
                        "productMarketingKey": "操作手册",
                        "productMarketingType": _this.val3,
                        "productMarketingValue": elem
                    });
                });
            }
            this.vedio.forEach(function (item) {
                _this.productMarketingList.push({
                    "productMarketingKey": "视频",
                    "productMarketingType": 'FILE',
                    "productMarketingValue": item
                });
            });
            // if (this.isOrNotDelete != 'is') {
            //     this.activeIndex = 3;
            //     this.vlaue1 = this.activeIndex;
            // }
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
                        ement['productFeatureCategoryName'] = itemed.description;
                        _this.keshou_objS[_this.item_id].push(ement);
                        _this.keshou_obj[_this.item_id].push(i);
                    }
                });
            });
            this.dianji(0, this.special_attr2[0]);
            // if (this.isOrNotDelete != 'is') {
            //     this.activeIndex = 4;
            //     this.vlaue1 = this.activeIndex;
            // }
        }
        if (this.activeIndex === 4) {
            this.special_attr2 = this.saleService.productFeatureManage(this.special_attr2);
        }
        if (this.activeIndex === 5) {
            this.special_attr2.forEach(function (items) {
                var count = 0;
                items.productFeatureTypeList.forEach(function (item) {
                    if (item.sequenceNum) {
                        item.sequenceNum = Number(item.sequenceNum);
                    }
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
                                }
                            }
                            if (item.featureType == '02') {
                                item.productFeatureList.forEach(function (itemed) {
                                    // if (itemed.valueType == '05' || itemed.valueType == '06') {
                                    if (itemed.valueType == '06') { //文本类型可为空（05）
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
                            }
                            if (countt2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productdef1_1 + '取值范围为' + productdeff_1 });
                            }
                            if (count2 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmax_1 + '最大值不可为空！' });
                            }
                            if (count3 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: productmin_1 + '最小值不可为空！' });
                            }
                            if (count4 > 0) {
                                _this.activeIndex = 3;
                                _this.vlaue1 = _this.activeIndex;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: producteid_1 + '取值范围为' + productmaxf_1 });
                            }
                        }
                    }
                });
                if (count == 0) {
                    _this.activeIndex = 3;
                    _this.vlaue1 = _this.activeIndex;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '属性不能为空' });
                }
            });
            this.dianji(0, this.special_attr2[0]);
            // if (this.isOrNotDelete != 'is') {
            //     this.activeIndex = 5;
            //     this.vlaue1 = this.activeIndex;
            // }
        }
        //组件配置信息的保存
        if (this.activeIndex === 6) {
            if (this.funList_right.length == 0) {
                this.activeIndex = 5;
                this.vlaue1 = this.activeIndex;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '功能应用不能为空' });
            }
        }
    };
    //点击组件属性查看
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
    SaleProductModifyComponent.prototype.choose_trall = function () {
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
    SaleProductModifyComponent.prototype.choose_trs = function (ri) {
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
    SaleProductModifyComponent.prototype.checkBoxAllClick10 = function () {
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
    SaleProductModifyComponent.prototype.checkBoxClick10 = function (i, data) {
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
        if (this.chooseData10.length == this.cars_attrbute.length) {
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
        tempss = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](arr0);
        this.select_atr = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss);
    };
    SaleProductModifyComponent.prototype.changeValueds = function (i, item) {
        item.checkBox10 = true;
        this.checkBoxClick10(i, item);
    };
    //全选按钮
    SaleProductModifyComponent.prototype.checkAllClickA = function (item) {
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
    SaleProductModifyComponent.prototype.checkBoxClickA = function (i, data, item) {
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
    //功能右移
    SaleProductModifyComponent.prototype.rightFunMovre = function () {
        var _this = this;
        var temps = [];
        var temps1 = [];
        var arrsright = [];
        this.leftListFun.forEach(function (item, i) {
            arrsright.push(item);
            arrsright.sort(function (a, b) { return b - a; });
            _this.funList_right.push(_this.funList_left[item]);
        });
        arrsright.forEach(function (item, i) {
            _this.funList_left.splice(item, 1);
        });
        //
        temps = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temps);
        temps1 = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](temps1);
        this.leftListFun = [];
    };
    //功能左移
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
            _this.funList_right.splice(item, 1);
        });
        tempss = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_right);
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](tempss1);
        this.rightListFun = [];
    };
    //站点，组件的收起，展开
    SaleProductModifyComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
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
                        //如果下拉框的list为空则不走遍历方法
                        if (item.productFeatureList.length < 1) {
                            var objA0 = {
                                productFeatureId: '',
                                productFeatureName: '',
                                configLevel: item.configLevel,
                                description: '',
                                productFeatureTypeId: item.productFeatureTypeId,
                                productFeatureTypeName: item.description,
                                productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                featureType: item.featureType,
                                productFeatureCategoryId: item.productFeatureCategoryId || '',
                                productFeatureCategoryName: item.productFeatureCategoryName || '',
                                valueType: '',
                                max: '',
                                min: '',
                                def: '',
                                inc: '',
                                productFeatureLocalCode: '',
                                displayFlag: item.displayFlag,
                                sequenceNum: item.sequenceNum
                            };
                            _this.productFeatureArr.push(objA0);
                        }
                        else {
                            item.productFeatureList.forEach(function (items, i) {
                                if (item.configLevel == '0') {
                                    var objA0 = {
                                        productFeatureId: items.productFeatureId,
                                        productFeatureName: items.description,
                                        configLevel: item.configLevel,
                                        description: items.description,
                                        productFeatureTypeId: items.productFeatureTypeId,
                                        productFeatureTypeName: item.description,
                                        productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                        featureType: item.featureType,
                                        productFeatureCategoryId: items.productFeatureCategoryId,
                                        productFeatureCategoryName: item.productFeatureCategoryName,
                                        valueType: items.valueType,
                                        max: items.max,
                                        min: items.min,
                                        def: items.def,
                                        inc: items.inc,
                                        productFeatureLocalCode: items.productFeatureLocalCode,
                                        displayFlag: item.displayFlag,
                                        sequenceNum: item.sequenceNum
                                    };
                                    _this.productFeatureArr.push(objA0);
                                }
                                else {
                                    if (items.checkBox) {
                                        var objA1 = {
                                            productFeatureId: items.productFeatureId,
                                            productFeatureName: items.description,
                                            configLevel: item.configLevel,
                                            description: items.description,
                                            productFeatureTypeId: items.productFeatureTypeId,
                                            productFeatureTypeName: item.description,
                                            productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                            featureType: item.featureType,
                                            productFeatureCategoryId: items.productFeatureCategoryId,
                                            productFeatureCategoryName: item.productFeatureCategoryName,
                                            valueType: items.valueType,
                                            max: items.max,
                                            min: items.min,
                                            def: items.def,
                                            inc: items.inc,
                                            productFeatureLocalCode: items.productFeatureLocalCode,
                                            displayFlag: item.displayFlag,
                                            sequenceNum: item.sequenceNum
                                        };
                                        _this.productFeatureArr.push(objA1);
                                    }
                                }
                            });
                        }
                    }
                    if (item.featureType == '02') {
                        item.productFeatureList.forEach(function (itemss, i) {
                            var objB = {
                                productFeatureId: itemss.productFeatureId,
                                productFeatureName: itemss.description,
                                configLevel: item.configLevel,
                                description: itemss.description,
                                productFeatureTypeId: itemss.productFeatureTypeId,
                                productFeatureTypeName: item.description,
                                productFeatureTypeLocalCode: item.productFeatureTypeLocalCode,
                                featureType: item.featureType,
                                productFeatureCategoryId: itemss.productFeatureCategoryId,
                                productFeatureCategoryName: item.productFeatureCategoryName,
                                valueType: itemss.valueType,
                                max: itemss.max,
                                min: itemss.min,
                                def: itemss.def,
                                inc: itemss.inc,
                                productFeatureLocalCode: itemss.productFeatureLocalCode,
                                displayFlag: item.displayFlag,
                                sequenceNum: item.sequenceNum
                            };
                            _this.productFeatureArr.push(objB);
                        });
                    }
                }
            });
        }
        var site = {
            siteName: this.show,
            webSiteId: this.baozhuangid
        };
        this.siteClick(site);
        this.postsManageBean.productContent = this.detaillist;
        this.postsManageBean.operationTemplateId = this.product_base_value.tplId; //基础产品id
        this.postsManageBean.productFeature = this.productFeatureArr;
        this.postsManageBean.productName = this.product_name_value; //产品名称
        this.postsManageBean.productId = this.productIdValue; //可售ID
        this.postsManageBean.description = this.product_content_value; //基础描述
        //日期
        this.postsManageBean.introductionDate = this.commfunc.transDateN(this.introductionDate) + ' 00:00:00';
        this.postsManageBean.releaseDate = this.commfunc.transDateN(this.releaseDate);
        //特殊属性
        this.postsManageBean.productMsg = this.special_attr;
        this.postsManageBean.productMarketingList = this.productMarketingList;
        this.functionList = [];
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.postsManageBean.functionList = this.functionList;
        if (this.detailkeynum != 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "详情描述未填完整！" });
            this.detailkeynum = 0;
            this.iscompele = false;
        }
        else {
            var data = JSON.stringify(this.postsManageBean);
            var params = { 'data': data };
            this.creditCcmService.updateAvailableProduct(params).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '产品修改成功！' });
                    var this_1 = _this;
                    setTimeout(function () {
                        this_1.router.navigate(['/pages/tzb/custom/credit-ccm/productConfig/credit-product-view']);
                        this.iscompele = false;
                    }, 2000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.iscompele = false;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                _this.iscompele = false;
            });
        }
    };
    SaleProductModifyComponent.prototype.goBack = function () {
        this.router.navigate(['/pages/tzb/custom/credit-ccm/productConfig/credit-product-view']);
    };
    //产品包装
    SaleProductModifyComponent.prototype.copyObj = function (param) {
        var obj = {};
        if (param) {
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
        }
    };
    SaleProductModifyComponent.prototype.doAddDetailes = function () {
        this.files17.push({ 'detailkey2': '', 'valuedetailes': '', 'liste': [] });
    };
    SaleProductModifyComponent.prototype.doDetelDetailes = function (i) {
        if (this.files17.length > 1) {
            this.files17.splice(i, 1);
        }
    };
    // 产品描述
    SaleProductModifyComponent.prototype.fileServe = function () {
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
            else if (item.value21 != '' && item.value22 != '' && item.detailkey != '' && item.value21 != undefined && item.value22 != undefined) {
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
    SaleProductModifyComponent.prototype.load1 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files10.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList10 = JSON.parse(event.xhr.response);
        }
        this.fileList10.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "homeDisplayPictures";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value41Path.push(obj);
        });
    };
    //删除
    SaleProductModifyComponent.prototype.deleta1 = function (item) {
        var kkey = this.files10.indexOf(item);
        this.files10.splice(kkey, 1);
        this.value41Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta2 = function (item) {
        var kkey = this.files11.indexOf(item);
        this.files11.splice(kkey, 1);
        this.value51Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta3 = function (item) {
        var kkey = this.files12.indexOf(item);
        this.files12.splice(kkey, 1);
        this.value61Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta4 = function (item) {
        var kkey = this.files13.indexOf(item);
        this.files13.splice(kkey, 1);
        this.value71Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta5 = function (item) {
        var kkey = this.files14.indexOf(item);
        this.files14.splice(kkey, 1);
        this.value81Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta6 = function (item) {
        var kkey = this.files15.indexOf(item);
        this.files15.splice(kkey, 1);
        this.value91Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta7 = function (item, items) {
        var kkey = item.list.indexOf(items);
        item.list.splice(kkey, 1);
        this.value101Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta8 = function (item, items) {
        var kkey = item.liste.indexOf(items);
        item.liste.splice(kkey, 1);
        this.value111Path.splice(kkey, 1);
    };
    SaleProductModifyComponent.prototype.deleta9 = function (item) {
        var kkey = this.files18.indexOf(item);
        this.files18.splice(kkey, 1);
        this.value112Path.splice(kkey, 1);
    };
    //列表展示图片
    SaleProductModifyComponent.prototype.load2 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files11.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList11 = JSON.parse(event.xhr.response);
        }
        this.fileList11.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listImages";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value51Path.push(obj);
        });
    };
    //产品说明书
    SaleProductModifyComponent.prototype.load3 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files12.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList12 = JSON.parse(event.xhr.response);
        }
        this.fileList12.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listSpecification";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value61Path.push(obj);
        });
    };
    //产品购买协议
    SaleProductModifyComponent.prototype.load4 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files13.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList13 = JSON.parse(event.xhr.response);
        }
        this.fileList13.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listPurchasingContract";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value71Path.push(obj);
        });
    };
    //列表视频
    SaleProductModifyComponent.prototype.load5 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files14.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList14 = JSON.parse(event.xhr.response);
        }
        this.fileList14.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listVideo";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value81Path.push(obj);
        });
    };
    //详情展示图片
    SaleProductModifyComponent.prototype.load6 = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files15.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList15 = JSON.parse(event.xhr.response);
        }
        this.fileList15.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "detailsDisplay";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value91Path.push(obj);
        });
    };
    //详情描述
    SaleProductModifyComponent.prototype.load7 = function (event, i) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.items12[i].list.push(file);
        }
        var svalue = this.items12[i].valuedetails;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList16 = JSON.parse(event.xhr.response);
        }
        this.fileList16.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "productDetail";
            obj['imageName'] = item.fileName;
            obj['imagePath'] = item.fileUrl;
            _this.value101Path.push(obj);
        });
    };
    //文档详情描述
    SaleProductModifyComponent.prototype.load8 = function (event, i) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList17 = JSON.parse(event.xhr.response);
        }
        this.fileList17.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "productDetail";
            obj['fileName'] = item.fileName;
            obj['filePath'] = item.fileUrl;
            _this.value111Path.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf' || aftname == 'html') {
                this.files17[i].liste.push(file);
            }
            else {
                this.files17[i].liste.push(file);
                this.deleta8(this.files17[i], file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductModifyComponent.prototype.load9 = function (event) {
        var _this = this;
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList18 = JSON.parse(event.xhr.response);
        }
        this.fileList18.forEach(function (item) {
            var obj = {};
            obj['dataResourceName'] = "listSpecification";
            obj['fileName'] = item.fileName;
            obj['filePath'] = item.fileUrl;
            _this.value112Path.push(obj);
        });
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var aftname = file.name.split('.')[1];
            if (aftname == 'txt' || aftname == 'doc' || aftname == 'docx' || aftname == 'pdf') {
                this.files18.push(file);
            }
            else {
                this.files18.push(file);
                this.deleta9(file);
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "此文件格式不符合！" });
            }
        }
    };
    SaleProductModifyComponent.prototype.addimg = function (item) {
        if (item.length != 0) {
            for (var i = 0; i < item.length; i++) {
                this.arrImage.push(item[i]);
            }
        }
    };
    SaleProductModifyComponent.prototype.addTex = function (item) {
        if (item.length != 0) {
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
    SaleProductModifyComponent.prototype.allServe = function () {
        this.iscompele = true;
        this.saleInfoSave(this.keshou_objS);
    };
    SaleProductModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-sale-product-modify',
            template: __webpack_require__(/*! ./sale-product-modify.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-modify.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-modify/sale-product-modify.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _sale_service__WEBPACK_IMPORTED_MODULE_10__["SaleService"]])
    ], SaleProductModifyComponent);
    return SaleProductModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <header-title [Info]=\"all_title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 ui-md-12 ecolor\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <!-- <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>产品线:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <p-dropdown [(ngModel)]=\"line_value\" (onChange)=\"lineVelue()\" [options]=\"select_line\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>产品组:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <p-dropdown (onChange)=\"groupChange()\" [(ngModel)]=\"group_value\" [options]=\"select_group\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>基础产品:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <p-dropdown [(ngModel)]=\"product_base_value\" [options]=\"product_base_arr\"></p-dropdown>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>可售产品编号:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <input [(ngModel)]=\"productQBean.productId\" type=\"text\" style=\"width:75%\" pInputText>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>可售产品名称:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <input [(ngModel)]=\"productQBean.productName\" type=\"text\" style=\"width:75%\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n          <button pButton type=\"button\" (click)=\"querySecle()\" label=\"查询\"></button>\r\n          <button pButton type=\"button\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 text_right\" *ngIf=\"showAddBtn && permissionCheck('SID03007_P058')\">\r\n        <span [routerLink]=\"['/pages/tzb/custom/credit-ccm/productConfig/credit-product-config']\" class=\"icoColor\">新增</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12 base-table\">\r\n        <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [(selection)]=\"selectedList\" selectionMode=\"multiple\" class='base-table' [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\" *ngIf=\"showConfirmBtn\"></p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productId\" header=\"可售产品编号\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productName\" header=\"可售产品名称\">\r\n          </p-column>\r\n          <!-- <p-column [style]=\"{'text-align':'center'}\" field=\"productTemplateName\" header=\"基础产品\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productLineName\" header=\"产品线\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productGroupName\" header=\"产品组\">\r\n          </p-column> -->\r\n          <p-column [style]=\"{'text-align':'center'}\" header=\"信贷产品状态\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.PvalidStatus|codeValuePie:productVaildStatus}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" *ngIf=\"showAddBtn\">\r\n            <ng-template pTemplate=\"header\">\r\n              <label>操作</label>\r\n            </ng-template>\r\n            <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span (click)=\"basicDetails(item)\" class=\"tabelDetailIco\" >详情</span>\r\n              <span  (click)='paths($event)' class=\"tabelUpdateIco\" >修改</span>\r\n              <a  [routerLink]=\"['/pages/tzb/custom/credit-ccm/productConfig/credit-product-modify',item]\" class=\"tabelUpdateIco\" style='overflow:hidden;height:0;width:0 !important'>修,改</a>\r\n              <span (click)=\"vaildProduct(item)\" class=\"tabelSubmitIco\" >生效</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows=\"{{productQBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 btn\" *ngIf=\"showConfirmBtn\">\r\n  <button pButton type=\"button\" label=\"确定\" (click)=\"confirm()\"></button>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 生效提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-credit-sale-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-credit-sale-view-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .width100 {\n  width: 90%; }\n\n.container .ecolor {\n  background-color: #ebebeb; }\n\n.container .btn {\n  text-align: center; }\n\n.container .btn button {\n    margin: 30px 30px 0; }\n\n.overflow {\n  max-height: 500px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-dropdown {\n  width: 75% !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3Qtdmlldy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LXZpZXdcXHNhbGUtcHJvZHVjdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsVUFBVSxFQUFBOztBQVJsQjtFQVdRLHlCQUF5QixFQUFBOztBQVhqQztFQWNRLGtCQUFrQixFQUFBOztBQWQxQjtJQWdCWSxtQkFBbUIsRUFBQTs7QUFLL0I7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3Qtdmlldy9zYWxlLXByb2R1Y3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAud2lkdGgxMDAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuZWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMzBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SaleProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleProductViewComponent", function() { return SaleProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/sale-product.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
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
    function SaleProductViewComponent(creditCcmService, confirmationService, commfunc) {
        this.creditCcmService = creditCcmService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PostsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_4__["PostsManageBean"]();
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_4__["ProductQBean"]();
        //头部标题
        this.all_title = '信贷产品管理';
        this.select_1 = []; //默认下拉
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
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
                productCategoryId: ''
            }]; //产品线下拉值
        this.group_value = [{
                productCategoryId: ''
            }]; //产品组下拉值
        this.product_base_value = []; //基础产品
        this.showConfirmBtn = false;
        this.showAddBtn = true;
        this.selectedList = new Array();
        //分页控制
        this.first = 0;
        this.codeValues(); //调用方法，获取全部码值
        this.saleProductType = this.code['SaleProductType'];
    }
    ; //可售产品-产品状态
    SaleProductViewComponent.prototype.ngOnInit = function () {
        this.productVaildStatus = [
            { "label": "无效", "value": "0" },
            { "label": "有效", "value": "1" },
            { "label": "生效", "value": "2" }
        ];
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.select_1 = [
            { label: '请选择', value: " " },
        ];
        this.cars_2 = [];
        // this.line_query();
        this.first = 0;
        if (this.viewRelation_data && this.viewRelation_data.flag === 'viewrelationAdd') {
            this.showConfirmBtn = true;
            this.showAddBtn = false;
            this.queryViewLationProduct();
        }
        else {
            this.searchList();
        }
    };
    //查询始终第一页
    SaleProductViewComponent.prototype.querySecle = function () {
        this.productQBean.pageSize = 10;
        this.productQBean.pageNum = 1;
        this.first = 0;
        if (this.viewRelation_data && this.viewRelation_data.flag === 'viewrelationAdd') {
            this.queryViewLationProduct();
        }
        else {
            this.searchList();
        }
    };
    SaleProductViewComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 页面关联产品查询 @ add wx by 20181011
    SaleProductViewComponent.prototype.queryViewLationProduct = function () {
        var _this = this;
        this.productQBean.productLineId = this.line_value.productCategoryId;
        this.productQBean.productGroupId = this.group_value.productCategoryId;
        if (this.product_base_value.length === 0) {
            this.productQBean.productTemplateId = ',1';
        }
        else {
            this.productQBean.productTemplateId = this.product_base_value.tplId + ',1';
        }
        this.creditCcmService.findProAvailableProductList(this.productQBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.resultList;
                _this.total = data.total;
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
    // 查询
    SaleProductViewComponent.prototype.searchList = function () {
        var _this = this;
        // this.productQBean.productLineId = this.line_value.productCategoryId;
        // this.productQBean.productGroupId = this.group_value.productCategoryId;
        // if (this.product_base_value.length === 0) {
        // 	this.productQBean.productTemplateId = ',1'
        // } else {
        // 	this.productQBean.productTemplateId = this.product_base_value.tplId + ',1';
        // }
        this.creditCcmService.findAvailableProductList(this.productQBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.resultList;
                _this.total = data.total;
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
    // 详情
    SaleProductViewComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '可售产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    //修改产品
    SaleProductViewComponent.prototype.paths = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '该操作会使产品重置为初始状态，但不影响授信流程中产品功能使用，是否确认修改？',
            accept: function () {
                window.location.href = item.target.nextElementSibling.href;
            },
            reject: function () {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: "你选择了取消修改！" });
            }
        });
    };
    // 生效产品
    SaleProductViewComponent.prototype.vaildProduct = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '该操作会影响该产品在授信流程中的相关功能，请确保该产品目前没有处在任何一个授信流程中，确定生效该产品吗？',
            accept: function () {
                _this.creditCcmService.copyProductProcessIntoProductByCredit({ 'productId': item.productId }).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'info', summary: '提示', detail: '该产品已生效！' });
                        _this.searchList();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                });
            },
            reject: function () {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: "你选择了拒绝生效！" });
            }
        });
    };
    SaleProductViewComponent.prototype.detailsCall = function (param) {
        this.display = param;
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
        if (this.viewRelation_data && this.viewRelation_data.flag === 'viewrelationAdd') {
            this.queryViewLationProduct();
        }
        else {
            this.searchList();
        }
        this.productQBean.pageNum = 1;
    };
    // 产品线下拉
    SaleProductViewComponent.prototype.line_query = function () {
        var _this = this;
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_4__["ProductQBean"]();
        this.creditCcmService.productLinePull(this.productQBean).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品组修改
    SaleProductViewComponent.prototype.lineVelue = function () {
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
        var parm = { productLineId: this.line_value.productCategoryId };
        this.creditCcmService.productGroupPull(parm).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品组修改
    SaleProductViewComponent.prototype.groupChange = function () {
        var _this = this;
        this.product_base_value = "";
        //查询基础产品id
        var params = {
            groupId: this.group_value.productCategoryId
        };
        this.product_base_arr = [
            { label: '请先选择产品组', value: "" },
        ];
        this.creditCcmService.pdGroupTemplateQuery(params).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
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
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_4__["ProductQBean"]();
    };
    //按钮权限
    SaleProductViewComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    SaleProductViewComponent.prototype.confirm = function () {
        if (!this.selectedList || this.selectedList.length > 1) {
            this.msgs = [{ severity: 'info', summary: '提示', detail: '请选择一条数据！' }];
            return;
        }
        else {
            this.closeDialog.emit(this.selectedList);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaleProductViewComponent.prototype, "viewRelation_data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SaleProductViewComponent.prototype, "closeDialog", void 0);
    SaleProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-credit-sale-product-view',
            template: __webpack_require__(/*! ./sale-product-view.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.html"),
            styles: [__webpack_require__(/*! ./sale-product-view.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-product-view.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], SaleProductViewComponent);
    return SaleProductViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"详情展示\" [toggleable]=\"true\" [collapsed]=\"false\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>可售产品编号:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <label>{{list.productId}}</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>可售产品名称:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <label>{{list.productName}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>详细描述:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10 \">\r\n            <label>{{list.description}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>创建人:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <label>{{list.createdByUserLogin}}</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>创建时间:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <label>{{list.createdDate}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>最后修改人:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <label>{{list.lastModifiedByUserLogin}}</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>最后修改时间:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <label>{{list.lastModifiedDate}}</label>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"基本信息\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g\">\r\n          <p-tabView [style]=\"{'width':'800px'}\">\r\n            <p-tabPanel header=\"通用信息\">\r\n              <div class=\"ui-g-12 ui-md-12 overx\">\r\n                <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                  <label>引入日期</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <label>{{introductionDate}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                  <label>截至日期</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <label>{{releaseDate}}</label>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"管理信息\">\r\n              <div class=\"ui-g-12 ui-md-12 overx\">\r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-5 text_right\">\r\n                      <label>产品币种</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-7\">\r\n                      <p-dropdown disabled=\"true\" [(ngModel)]=\"productCurrency\" [options]=\"select_1\" type=\"text\"></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-5 text_right\">\r\n                      <label>表内表外</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-7\">\r\n                      <p-dropdown disabled=\"true\" [(ngModel)]=\"inOut\" [options]=\"select_2\" type=\"text\"></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-5 text_right\">\r\n                      <label>CRM产品树编号</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-7\">\r\n                      <input disabled [(ngModel)]=\"crmValue\" type=\"text\" pInputText>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-5 text_right\">\r\n                      <label>业务品种编号</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-7\">\r\n                      <input disabled [(ngModel)]=\"businessValue\" type=\"text\" pInputText>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-5 text_right\">\r\n                      <label>子业务品种编号</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-7\">\r\n                      <input disabled [(ngModel)]=\"cbusinessValue\" type=\"text\" pInputText>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                      <label>营销部门</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8\">\r\n                      <textarea pInputTextarea disabled [(ngModel)]='saleDepartment'></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                      <label>管理部门</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8\">\r\n                      <textarea pInputTextarea disabled [(ngModel)]='cfsaleDepartment'></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                      <label>产品经理</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8\">\r\n                      <textarea pInputTextarea disabled [(ngModel)]='productManager'></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4 text_right\">\r\n                      <label>销售人员岗位</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-8\">\r\n                      <textarea pInputTextarea disabled [(ngModel)]='saleUser'></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"特殊属性\">\r\n              <div class=\"ui-g-12 ui-md-12 overx\">\r\n                <p-dataTable [value]=\"special_attr\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"attrName\" header=\"属性名称\">\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"attrType\" header=\"属性类型\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                      {{col.attrType|codeValuePie:temporary}}\r\n                    </ng-template>\r\n                  </p-column>\r\n                  <p-column [style]=\"{'text-align':'center'}\" field=\"attrValue\" header=\"属性取值\">\r\n                  </p-column>\r\n                </p-dataTable>\r\n              </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"产品营销\">\r\n              <div class=\"ui-g-12 ui-md-12 overx\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>产品说明书</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-radioButton name=\"group1\" disabled value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton>\r\n                        <p-radioButton name=\"group1\" disabled value=\"FILE\" label=\"文件\" [(ngModel)]=\"val1\" inputId=\"opt2\"></p-radioButton>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='TEXT'\">\r\n                        <textarea pInputTextarea style=\"width:70%\" disabled [(ngModel)]=\"productMarketing\"></textarea>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val1=='FILE'\">\r\n                        <div *ngIf=\"files21.length>0\">\r\n                          <span style=\"margin:10px\" *ngFor=\"let item of files21\">{{item.name}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>产品购买协议</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-radioButton name=\"group2\" disabled value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val2\" inputId=\"opt3\"></p-radioButton>\r\n                        <p-radioButton name=\"group2\" disabled value=\"FILE\" label=\"文件\" [(ngModel)]=\"val2\" inputId=\"opt4\"></p-radioButton>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='TEXT'\">\r\n                        <textarea pInputTextarea style=\"width:70%\" disabled [(ngModel)]=\"productshopping\"></textarea>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val2=='FILE'\">\r\n                        <div *ngIf=\"files22.length>0\">\r\n                          <span style=\"margin:10px\" *ngFor=\"let item of files22\">{{item.name}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>营销活动</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\"></div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <textarea pInputTextarea style=\"width:70%\" disabled [(ngModel)]=\"managememntactive\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>营销话术</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\"></div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <textarea pInputTextarea style=\"width:70%\" disabled [(ngModel)]=\"managememntspeech\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>操作手册</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\">\r\n                        <p-radioButton name=\"group3\" disabled value=\"TEXT\" label=\"文本\" [(ngModel)]=\"val3\" inputId=\"opt5\"></p-radioButton>\r\n                        <p-radioButton name=\"group3\" disabled value=\"FILE\" label=\"文件\" [(ngModel)]=\"val3\" inputId=\"opt6\"></p-radioButton>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='TEXT'\">\r\n                        <textarea pInputTextarea style=\"width:70%\" disabled [(ngModel)]=\"operationmanual\"></textarea>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-9\" *ngIf=\"val3=='FILE'\">\r\n                        <div *ngIf=\"files23.length>0\">\r\n                          <span style=\"margin:10px\" *ngFor=\"let item of files23\">{{item.name}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                  <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                    <label>视频</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                      <div class=\"ui-g-12 ui-md-3\"></div>\r\n                      <div class=\"ui-g-12 ui-md-9\">\r\n                        <div *ngIf=\"files24.length>0\">\r\n                          <span style=\"margin:10px\" *ngFor=\"let item of files24\">{{item.name}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-tabPanel>\r\n          </p-tabView>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"组件展示\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g forcolor\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n            <label class=\"un_active\" *ngFor=\"let col of zujian_ist1;let i = index\" (click)=\"dianji(i,col)\" [ngClass]=\"{'active':showClass == col.productFeatureCategoryName}\">{{col.productFeatureCategoryName}}</label>\r\n          </div>\r\n          <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let col of zujian_ist1;let i = index\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i ==aIndex\">\r\n              <p-dataTable [value]=\"shuxing_ist2\" emptyMessage=\"没有查找到数据\">\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFeatureTypeName\" header=\"属性名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" header=\"取值范围\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.shuxingType==2\">{{item.min}}</span>\r\n                    <span *ngIf=\"item.shuxingType==2\">--</span>\r\n                    <span *ngIf=\"item.shuxingType==2\">{{item.max}}</span>\r\n                    <span *ngIf=\"item.shuxingType==1\">{{item.shuxingmiaoshu}}</span>\r\n                    <span *ngIf=\"item.shuxingType==3\">{{item.def}}</span>\r\n                    <span *ngIf=\"item.shuxingType==61\">{{item.def}}</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">{{item.min}}</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">--</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">{{item.max}}</span>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"configLevel\" header=\"配置级别\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.configLevel|codeValuePie:configLevelV}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"displayFlag\" header=\"是否展示\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.displayFlag|codeValuePie:displayFlagOptions}}\r\n                  </ng-template>\r\n                </p-column>\r\n              </p-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"产品功能\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <p-dataTable [value]=\"cars_2\" [emptyMessage]=\"tabMesg\">\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionDes\" header=\"功能描述\">\r\n          </p-column>\r\n        </p-dataTable>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"产品包装\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>所包装站点:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10 box\">\r\n            <div class=\"ui-g forcolor\">\r\n              <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n                <label class=\"un_active\" *ngFor=\"let col of siteList let i = index\" [ngClass]=\"{'active':show == col.siteName}\" (click)=\"siteClick(col)\">\r\n                  <b>{{col.siteName}}</b>\r\n                </label>\r\n              </div>\r\n              <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n                <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n                <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <p-tabView>\r\n                  <p-tabPanel header=\"产品描述\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>制度摘要:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian1}}</textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>营销话术:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian2}}</textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>期限描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian3}}</textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>额度描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian4}}</textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>同业产品信息:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian5}}</textarea>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>其他:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{zujian6}}</textarea>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>特色描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of zujian7; let i = index\">\r\n                            <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{item}}</textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品短语:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of zujian9; let i = index\">\r\n                            <textarea pInputTextarea style=\"width:90%\" [disabled]='true'>{{item}}</textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui-g-12 ui-md-12 padding\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-10\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of zujian8; let i = index\">\r\n                            <textarea pInputTextarea style=\"width:15%\" [disabled]='true'>{{item.detailkey}}</textarea>\r\n                            <textarea pInputTextarea style=\"width:25%\" [disabled]='true'>{{item.value21}}</textarea>\r\n                            <textarea pInputTextarea style=\"width:55%\" [disabled]='true'>{{item.value22}}</textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                  <p-tabPanel header=\"展示图片\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>首页展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files10.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files10\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>列表展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files11.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files11\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>产品说明书:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files12.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files12\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>产品购买协议:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files13.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files13\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>列表视频:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files14.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files14\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>详情展示图片:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3\">\r\n                            <div class=\"ui-g-12 ui-md-12\">\r\n                              <div *ngIf=\"files15.length>0\">\r\n                                <span style=\"margin:10px\" *ngFor=\"let item of files15\">{{item}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-12\">\r\n                          <div class=\"ui-g-12 ui-md-3 text_right\">\r\n                            <label>详情描述:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9\">\r\n                            <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files16; let i = index\">\r\n                              <div class=\"ui-g-12 ui-md-12\">\r\n                                <div *ngIf=\"files16.length>0\">\r\n                                  <span style=\"margin:10px\">{{item.name}}</span>\r\n                                  <input type=\"text\" pInputText [(ngModel)]=\"item.valuedetails\" [disabled]='true'>\r\n                                  <input type=\"text\" pInputText [(ngModel)]=\"item.detailkey1\" [disabled]='true'>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                  <p-tabPanel header=\"文档手册\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>详情描述:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12\" *ngFor=\"let item of files17\">\r\n                            <div *ngIf=\"files17.length>0\">\r\n                              <span style=\"margin:10px\">{{item.name}}</span>\r\n                              <input type=\"text\" pInputText [(ngModel)]=\"item.valuedetailes\" [disabled]='true'>\r\n                              <input type=\"text\" pInputText [(ngModel)]=\"item.detailkey2\" [disabled]='true'>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-2 text_right\">\r\n                          <label>产品说明书:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-4\">\r\n                          <div class=\"ui-g-12 ui-md-12\">\r\n                            <div *ngIf=\"files18.length>0\">\r\n                              <span style=\"margin:10px\" *ngFor=\"let item of files18\">{{item}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </p-tabPanel>\r\n                </p-tabView>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <span class=\"icoColor\" (click)=\"closeClick()\">关闭</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    width: 100% !important;\n    font-weight: bold; }\n\n.container .padding {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.container .un_active {\n  display: inline-block;\n  padding: 13px 16px;\n  border: none !important;\n  background-color: #19b0c8;\n  color: white;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .active {\n  background-color: white;\n  color: #19b0c8;\n  margin: 0;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none; }\n\n.container .forcolor {\n  background-color: #19b0c8;\n  clear: both;\n  width: 100%; }\n\n.container .boxOne {\n  float: left;\n  width: 90%; }\n\n.container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.container .heOne {\n  height: 100%; }\n\n.container .overx {\n  width: 800px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcmVkaXQtY2NtL2NyZWRpdC1wcm9kdWN0LWNvbmZpZy9zYWxlLXByb2R1Y3Qtdmlldy9zYWxlLXZpZXctZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGNyZWRpdC1jY21cXGNyZWRpdC1wcm9kdWN0LWNvbmZpZ1xcc2FsZS1wcm9kdWN0LXZpZXdcXHNhbGUtdmlldy1kZXRhaWxzXFxzYWxlLXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGlCQUFpQixFQUFBOztBQUx6QjtJQU9ZLHNCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTs7QUFSN0I7RUFZUSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBYnpCO0VBZ0JRLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUF6QnZCO0VBNEJRLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFsQ3ZCO0VBc0NZLFdBQVcsRUFBQTs7QUF0Q3ZCO0lBd0NnQixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7O0FBekNyQztFQThDUSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFoRG5CO0VBbURRLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBcERsQjtFQXVEUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUF6RHZCO0VBNERRLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUE3RHhCO0VBZ0VRLFlBQVksRUFBQTs7QUFoRXBCO0VBbUVRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3JlZGl0LWNjbS9jcmVkaXQtcHJvZHVjdC1jb25maWcvc2FsZS1wcm9kdWN0LXZpZXcvc2FsZS12aWV3LWRldGFpbHMvc2FsZS12aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5ib3gge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcmNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJveE9uZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5ib3hUd28ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLmhlVHdvIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5oZU9uZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm92ZXJ4e1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAvLyBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: SaleViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleViewDetailsComponent", function() { return SaleViewDetailsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../bean/sale-product.bean */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/bean/sale-product.bean.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SaleViewDetailsComponent = /** @class */ (function () {
    function SaleViewDetailsComponent(creditCcmService, route, commfunc) {
        this.creditCcmService = creditCcmService;
        this.route = route;
        this.commfunc = commfunc;
        this.vlaueOpen = 'open';
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //实体
        this.PostsManageBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_5__["PostsManageBean"]();
        this.productQBean = new _bean_sale_product_bean__WEBPACK_IMPORTED_MODULE_5__["ProductQBean"]();
        this.list = [];
        this.listPack = [];
        //基本信息
        this.listMsgs = [];
        //提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.msgs = [];
        this.zujian_ist1 = [];
        this.shuxing_ist2 = [];
        this.aIndex = 0;
        this.cars_right = []; //属性列表
        this.cars_attrbute = []; //属性列表
        //产品营销
        this.val1 = ''; //产品说明书
        this.val2 = ''; //产品购买协议
        this.val3 = ''; //操作手册
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
        //包装
        this.zujian1 = [];
        this.zujian2 = [];
        this.zujian3 = [];
        this.zujian4 = [];
        this.zujian5 = [];
        this.zujian6 = [];
        this.zujian7 = [];
        this.zujian8 = [];
        this.zujian9 = [];
        this.items1 = [];
        this.items2 = [];
        this.zujian_ist2 = [];
        this.zujian_ist3 = [];
        this.files10 = [];
        this.files11 = [];
        this.files12 = [];
        this.files13 = [];
        this.files14 = [];
        this.files15 = [];
        this.files16 = [];
        this.files17 = [];
        this.files18 = [];
        this.productCurrency = '';
        this.inOut = '';
        this.crmValue = '';
        this.businessValue = '';
        this.cbusinessValue = '';
        this.saleDepartment = '';
        this.salee = [];
        this.salee1 = [];
        this.belong1 = [];
        this.belongs1 = [];
        this.cfsaleDepartment = '';
        this.productManager = '';
        this.saleUser = '';
        this.special_attr = [];
        this.detaillists = [];
        this.siteList = [];
        this.show = ''; //默认选中第1个
        this.displayFlagOptions = []; //是否展示
        this.codeValues(); //调用方法，获取全部码值
        this.functionTypeV = this.code['functionTypes'];
        this.configLevelV = this.code['configLevel'];
        this.select_1 = this.code['select_1'];
        this.select_2 = this.code['select_2'];
        this.temporary = this.code['temporary'];
        this.displayFlagOptions = this.code['DisplayFlag'];
    }
    SaleViewDetailsComponent.prototype.ngOnInit = function () {
        if (!this.inValue) {
            this.queryEvent();
        }
    };
    SaleViewDetailsComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    SaleViewDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 关闭
    SaleViewDetailsComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    SaleViewDetailsComponent.prototype.queryEvent = function () {
        var _this = this;
        var param = {};
        if (!this.inValue) {
            param = {
                productId: this.route.snapshot.params['baseProductId'],
                status: this.route.snapshot.params['status']
            };
        }
        else {
            param = { productId: this.inValue };
        }
        this.creditCcmService.findProductFeatureListByProductId(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = data.availableProduct; //详情展示
                _this.cars_2 = data.productFunctionList; //功能查询
                _this.zujian_ist1 = data.productFeatureList; //组件展示
                _this.shuxing_ist2 = data.productFeatureList[0].productFeatureTypeList; //属性展示
                _this.dianji(0, _this.zujian_ist1[0]);
                // 基本信息
                _this.releaseDate = new Date(_this.list.releaseDate);
                _this.introductionDate = new Date(_this.list.introductionDate);
                _this.releaseDate = _this.releaseDate.toLocaleDateString();
                _this.introductionDate = _this.introductionDate.toLocaleDateString();
                if (data.productMsgs.length > 0) {
                    _this.listMsgs = data.productMsgs;
                    _this.listMsgs.forEach(function (items) {
                        if (items.attrType == 'crmNum') {
                            _this.crmValue = items.attrValue;
                        }
                        else if (items.attrType == 'cateNum') {
                            _this.businessValue = items.attrValue;
                        }
                        else if (items.attrType == 'subCateNum') {
                            _this.cbusinessValue = items.attrValue;
                        }
                        else if (items.attrType == 'salePerson') {
                            _this.salee = [];
                            items.attrValue.split(',').forEach(function (itemse) {
                                _this.salee.push(itemse.split('#')[0]);
                            });
                            _this.saleDepartment = _this.salee.join(',');
                        }
                        else if (items.attrType == 'manageDept') {
                            _this.salee1 = [];
                            items.attrValue.split(',').forEach(function (itemse) {
                                _this.salee1.push(itemse.split('#')[0]);
                            });
                            _this.cfsaleDepartment = _this.salee1.join(',');
                        }
                        else if (items.attrType == 'salesman') {
                            _this.belong1 = [];
                            items.attrValue.split(',').forEach(function (itemse) {
                                _this.belong1.push(itemse.split('#')[0]);
                            });
                            _this.saleUser = _this.belong1.join(',');
                        }
                        else if (items.attrType == 'productManager') {
                            _this.belongs1 = [];
                            items.attrValue.split(',').forEach(function (itemse) {
                                _this.belongs1.push(itemse.split('#')[0]);
                            });
                            _this.productManager = _this.belongs1.join(',');
                        }
                        else if (items.attrType == 'productCurrency') {
                            _this.productCurrency = items.attrValue;
                        }
                        else if (items.attrType == 'inOut') {
                            _this.inOut = items.attrValue;
                            _this.inOut = items.attrValue;
                        }
                        else if (items.attrType == '0' || items.attrType == '1' || items.attrType == '2') {
                            _this.special_attr.push(items);
                            _this.special_attr = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](_this.special_attr);
                        }
                    });
                }
                if (_this.special_attr.length == 0) {
                    _this.special_attr = null;
                }
                //产品营销
                data.productMarketingList.forEach(function (item) {
                    if (item.productMarketingKey == '产品说明书') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val1 = 'FILE';
                            _this.productMarketing2.push(item.productMarketingValue);
                            _this.files21.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val1 = 'TEXT';
                            _this.productMarketing = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '产品购买协议') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val2 = 'FILE';
                            _this.productshopping2.push(item.productMarketingValue);
                            _this.files22.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val2 = 'TEXT';
                            _this.productshopping = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '营销活动') {
                        _this.managememntactive = item.productMarketingValue;
                    }
                    else if (item.productMarketingKey == '营销话术') {
                        _this.managememntspeech = item.productMarketingValue;
                    }
                    else if (item.productMarketingKey == '操作手册') {
                        if (item.productMarketingType == 'FILE') {
                            _this.val3 = 'FILE';
                            _this.operationmanual2.push(item.productMarketingValue);
                            _this.files23.push({ 'name': item.productMarketingValue.split('_')[1] });
                        }
                        else {
                            _this.val3 = 'TEXT';
                            _this.operationmanual = item.productMarketingValue;
                        }
                    }
                    else if (item.productMarketingKey == '视频') {
                        _this.vedio.push(item.productMarketingValue);
                        _this.files24.push({ 'name': item.productMarketingValue.split('_')[1] });
                    }
                });
                //包装
                if (data.productContentList.length > 0) {
                    _this.detaillists = [];
                    _this.detaillists = data.productContentList;
                    _this.siteList = [];
                    _this.detaillists.forEach(function (items) {
                        _this.siteList.push({ siteName: items.channelName, webSiteId: items.channelId });
                    });
                    var sited = {
                        siteName: _this.siteList[0].siteName,
                        webSiteId: _this.siteList[0].webSiteId
                    };
                    _this.show = _this.siteList[0].siteName;
                    _this.siteClick(sited);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    SaleViewDetailsComponent.prototype.dianji = function (i, item) {
        this.showClass = item.productFeatureCategoryName;
        var arrayN = [];
        this.aIndex = i;
        this.shuxing_ist2 = this.zujian_ist1[i].productFeatureTypeList;
        this.shuxing_ist2.forEach(function (item) {
            if (item.featureType == '01') {
                item.shuxingType = 1;
                item.productFeatureList.forEach(function (items) {
                    arrayN.push(items.productFeatureName);
                });
                item.shuxingmiaoshu = arrayN.join(",");
                arrayN = [];
            }
            if (item.featureType == '02') {
                item.shuxingType = 2;
                item.productFeatureList.forEach(function (items) {
                    if (items.valueType == '05') {
                        item.shuxingType = 3;
                        item.def = items.def;
                    }
                    else if (items.valueType == '06') {
                        item.shuxingType = 61;
                        item.def = items.def;
                    }
                    else {
                        item.min = items.min;
                        item.max = items.max;
                    }
                });
            }
        });
    };
    //包装点击
    SaleViewDetailsComponent.prototype.siteClick = function (col) {
        var _this = this;
        this.detaillists.forEach(function (items) {
            if (items.channelId == col.webSiteId) {
                _this.listPack = items;
                //产品描述
                var counted1_1 = 0;
                var counted2_1 = 0;
                var counted3_1 = 0;
                _this.zujian1 = '';
                _this.zujian2 = '';
                _this.zujian3 = '';
                _this.zujian4 = '';
                _this.zujian5 = '';
                _this.zujian6 = '';
                _this.zujian7 = [];
                _this.zujian8 = [];
                _this.zujian9 = [];
                _this.listPack.productTextList.forEach(function (item) {
                    if (item.dataResourceName == 'systemSummary') {
                        _this.zujian1 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'marketScript') {
                        _this.zujian2 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'termDesc') {
                        _this.zujian3 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'limitDesc') {
                        _this.zujian4 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'sameProductlnformation') {
                        _this.zujian5 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'others') {
                        _this.zujian6 = item.objectInfo;
                    }
                    else if (item.dataResourceName == 'listFeature') {
                        _this.zujian7 = item.objectInfo.split(',');
                        counted1_1++;
                    }
                    else if (item.dataResourceName == 'productDetail') {
                        _this.items1 = item.objectInfo.split(',');
                        counted2_1++;
                    }
                    else if (item.dataResourceName == 'productPhra') {
                        _this.zujian9 = item.objectInfo.split(',');
                        counted3_1++;
                    }
                });
                _this.zujian8 = [];
                for (var i = 0; i < _this.items1.length; i++) {
                    _this.items2 = _this.items1[i].split(':');
                    _this.zujian8.push({ "value21": _this.items2[1], "value22": _this.items2[2], 'detailkey': _this.items2[0] });
                }
                if (counted1_1 == 0) {
                    _this.zujian7 = [''];
                }
                if (counted2_1 == 0) {
                    _this.zujian8 = [{ "value21": '', "value22": '', 'detailkey': '' }];
                }
                if (counted3_1 == 0) {
                    _this.zujian9 = [''];
                }
                _this.files10 = [];
                _this.files11 = [];
                _this.files12 = [];
                _this.files13 = [];
                _this.files14 = [];
                _this.files15 = [];
                _this.files16 = [];
                _this.files17 = [];
                _this.files18 = [];
                _this.zujian_ist2 = _this.listPack.productImageList;
                _this.zujian_ist3 = _this.listPack.productFileList;
                for (var j = 0; j < _this.zujian_ist2.length; j++) {
                    if (_this.zujian_ist2[j].dataResourceName == 'homeDisplayPictures') {
                        _this.files10.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'listImages') {
                        _this.files11.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'listSpecification') {
                        _this.files12.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'listPurchasingContract') {
                        _this.files13.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'listVideo') {
                        _this.files14.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'detailsDisplay') {
                        _this.files15.push(_this.zujian_ist2[j].objectInfo.split('_')[1]);
                    }
                    else if (_this.zujian_ist2[j].dataResourceName == 'productDetail') {
                        _this.files16.push({ "name": _this.zujian_ist2[j].objectInfo.split('_')[1], "valuedetails": _this.zujian_ist2[j].objectInfo.split(':')[1], 'detailkey1': _this.zujian_ist2[j].objectInfo.split(':')[0] });
                    }
                }
                for (var K = 0; K < _this.zujian_ist3.length; K++) {
                    if (_this.zujian_ist3[K].dataResourceName == 'productDetail') {
                        _this.files17.push({ "name": _this.zujian_ist3[K].objectInfo.split('_')[1], "valuedetailes": _this.zujian_ist3[K].objectInfo.split(':')[1], 'detailkey2': _this.zujian_ist3[K].objectInfo.split(':')[0] });
                    }
                    else if (_this.zujian_ist3[K].dataResourceName == 'listSpecification') {
                        _this.files18.push(_this.zujian_ist3[K].objectInfo.split('_')[1]);
                    }
                }
                _this.show = col.siteName;
            }
        });
    };
    //站点，组件的收起，展开
    SaleViewDetailsComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], SaleViewDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SaleViewDetailsComponent.prototype, "outValue", void 0);
    SaleViewDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-sale-view-details',
            template: __webpack_require__(/*! ./sale-view-details.component.html */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.html"),
            styles: [__webpack_require__(/*! ./sale-view-details.component.scss */ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale-product-view/sale-view-details/sale-view-details.component.scss")],
            providers: [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__["CreditCcmService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 可售详情
         */
        ,
        __metadata("design:paramtypes", [app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_6__["CreditCcmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], SaleViewDetailsComponent);
    return SaleViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/credit-ccm/credit-product-config/sale.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
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

var SaleService = /** @class */ (function () {
    function SaleService() {
    }
    //字段排序，数据结构处理
    SaleService.prototype.productFeatureManage = function (dataList) {
        var isUpdate;
        dataList.forEach(function (parentItem) {
            parentItem.productFeatureTypeList.forEach(function (childItem) {
                var sequenceNum = childItem['sequenceNum'];
                if (typeof sequenceNum == 'undefined') {
                    childItem['sequenceNum'] = '';
                }
            });
        });
        return dataList;
    };
    SaleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaleService);
    return SaleService;
}());



/***/ })

}]);
//# sourceMappingURL=default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~credit-product-c~ed8d17d3.js.map