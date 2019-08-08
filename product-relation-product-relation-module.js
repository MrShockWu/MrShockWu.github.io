(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-relation-product-relation-module"],{

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/bean/product-relation-config.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/bean/product-relation-config.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PrcBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrcBean", function() { return PrcBean; });
var PrcBean = /** @class */ (function () {
    function PrcBean() {
        this.productAssocTypeId = ''; //关联类型		
        this.pageSize = 10; //每页显示数量
    }
    return PrcBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventure\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n        <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-12\">\r\n                <ul class=\"ui-breadcrumb-new\">\r\n                    <li class=\"active\">\r\n                        <a>\r\n                            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n                    </li>\r\n                    <li>\r\n                        <a>产品管理</a>\r\n                    </li>\r\n                    <li>\r\n                        <a>产品关系管理</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"filter-div\">\r\n            <div class=\"ui-grid-row form_item\">\r\n                <div class=\"ui-grid-col-4\">\r\n                    <div class=\"ui-grid-col-4 form_item_label\">\r\n                        关系类型:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                        <div style=\"width: 60%\">\r\n                            <p-dropdown [(ngModel)]=\"relation_vale\" [options]=\"relationType\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-col-4\">\r\n                    <div class=\"ui-grid-col-4 form_item_label\">\r\n                        主控可售产品:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                        <div style=\"width: 60%\">\r\n                            <p-dropdown [filter]=\"true\" [resetFilterOnHide]=\"true\" [(ngModel)]=\"productId\" [options]=\"select_Fproduct\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-col-4\">\r\n                    <div class=\"ui-grid-col-4 form_item_label\">\r\n                        关联可售产品:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                        <div style=\"width: 60%\">\r\n                            <p-dropdown [filter]=\"true\" [resetFilterOnHide]=\"true\" [(ngModel)]=\"product_base_value\" [options]=\"select_Fproduct\" styleClass=\"ui-dropdown-new\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n                <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn1-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton type=\"button\" label=\"查询\" (click)=\"productAssocList()\"></button>\r\n                        </div>\r\n                    </div>\r\n                    <span>&nbsp;</span>\r\n                    <div style=\"width: 90px;display: inline-block;\">\r\n                        <div class=\"ui-btn2-div\">\r\n                            <p class=\"place-div first\"></p>\r\n                            <p class=\"place-div last\"></p>\r\n                            <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-div\" style=\"background-color:#fff;height:500px;\">\r\n            <div class=\"ui-g-12 ui-md-12 text_right\">\r\n                <div style=\"width: 90px;display: inline-block;\">\r\n                    <div class=\"ui-btn1-div\">\r\n                        <p class=\"place-div first\"></p>\r\n                        <p class=\"place-div last\"></p>\r\n                        <button pButton type=\"button\" (click)=\"addClick()\" style=\"width: 60px;\" label=\"新增\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <u-dataTable [(value)]=\"AssocList\" emptyMessage=\"暂无数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productId\" header=\"主控产品编号\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productName\" header=\"产品名称\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productIdTo\" header=\"关联产品编号\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"productNameTo\" header=\"关联产品名称\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'15%'}\" field=\"productAssocTypeId\" header=\"关系类型\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{col.productAssocTypeId | codeValuePie:relationType}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <label>操作</label>\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"basicDetails(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n                        <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </u-dataTable>\r\n            <div class=\"ui-g-12\" style=\"background-color:#fff\">\r\n                <div style=\"float:right;padding-top:100px;\">\r\n                    <u-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                        (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 详情 -->\r\n<p-dialog *ngIf='detail' [(visible)]=\"detail\" modal=\"modal\" height=\"450\" width=\"950\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div class=\"ui-g container\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>主控产品编号:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.productId}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>主控产品名称:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.productName}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>关联产品编号:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.productIdTo}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>关联产品名称:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.productNameTo}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>关系类型:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-10 ui-mp-8\">\r\n                    <label>{{list.productAssocTypeId | codeValuePie:relationType}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-12 heightO border-dashed\"></div>\r\n                <div class=\"ui-g-12 ui-md-12 heightO\"></div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>创建人:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.createdByUserLogin}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>创建时间:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.createdStamp}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>最后修改人:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.lastModifiedByUserLogin}}</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 ui-mp-4 text_right\">\r\n                    <label>最后修改时间:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4 ui-mp-8\">\r\n                    <label>{{list.lastUpdatedStamp}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n            <button pButton type=\"button\" (click)=\"close()\" label=\"取消\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" height=\"450\" width=\"950\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-relation-config-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></app-relation-config-add>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text_center {\n  text-align: center; }\n\n.text_right {\n  text-align: right; }\n\n.heightO {\n  height: 1rem; }\n\n.border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.adventure {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.adventure .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n.table-div {\n  margin-top: 12px; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 70% !important;\n  min-height: 500px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtcmVsYXRpb24vcHJvZHVjdC1yZWxhdGlvbi1jb25maWcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxccHJvZHVjdC1tYW5hZ2VcXHByb2R1Y3QtcmVsYXRpb25cXHByb2R1Y3QtcmVsYXRpb24tY29uZmlnXFxwcm9kdWN0LXJlbGF0aW9uLWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUZmO0lBSVEsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUdqQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQUV0QztFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1yZWxhdGlvbi9wcm9kdWN0LXJlbGF0aW9uLWNvbmZpZy9wcm9kdWN0LXJlbGF0aW9uLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlaWdodE8ge1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyLWRhc2hlZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZHZlbnR1cmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgLmZpbHRlci1kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWRpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnQ+YnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDAgMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IC5hY3RpdmUge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIDpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IGxpIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXc6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTcgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA6aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ProductRelationConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelationConfigComponent", function() { return ProductRelationConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_product_relation_config_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/product-relation-config.bean */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/bean/product-relation-config.bean.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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



var ProductRelationConfigComponent = /** @class */ (function () {
    function ProductRelationConfigComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        // bean
        this.prcBean = new _bean_product_relation_config_bean__WEBPACK_IMPORTED_MODULE_2__["PrcBean"]();
        // 提示信息
        this.msgs = [];
        // 关系类型
        this.relationType = [];
        this.AssocList = [];
        this.select_Fproduct = []; // 主控可售产品下拉
        // 每页多少条
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0; // 分页控制
        this.display = false;
        this.detail = false;
        this.codeValues(); // 调用方法，获取全部码值
        this.relationType = this.code['RelationType'];
    }
    ProductRelationConfigComponent.prototype.ngOnInit = function () {
        // this.relationType = [
        //     { label: '请选择', value: '' },
        //     { label: '排斥', value: '1' },
        //     { label: '交叉', value: '2' },
        // ];
        this.select_Fproduct = [
            { label: '请选择', value: '' }
        ];
        // this.queryRelationType();
        this.product_query();
        this.productAssocList();
    };
    //码值
    ProductRelationConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 重置
    ProductRelationConfigComponent.prototype.resetClick = function () {
        this.relation_vale = '';
        this.productId = '';
        this.product_base_value = '';
        this.pageNum = 1;
    };
    // 默认查询
    ProductRelationConfigComponent.prototype.productAssocList = function () {
        var _this = this;
        var param = {
            productId: this.productId,
            productAssocTypeId: this.relation_vale,
            productIdTo: this.product_base_value,
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.productManageHttpService.queryProductAssocList(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                _this.AssocList = data.productAssocList;
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    ProductRelationConfigComponent.prototype.basicDetails = function (item) {
        this.detail = true;
        this.headerTitle = '详情';
        this.list = item;
        var createrts = new Date(item.lastUpdatedStamp);
        this.list.lastUpdatedStamp = this.commfunc.transDateN(createrts);
        var created = new Date(item.createdStamp);
        this.list.createdStamp = this.commfunc.transDateN(created);
    };
    ProductRelationConfigComponent.prototype.close = function () {
        this.detail = false;
    };
    // 新增
    ProductRelationConfigComponent.prototype.addClick = function () {
        this.display = true;
        this.headerTitle = '新增关系';
        this.showModel = '1';
    };
    // 新增的回调
    ProductRelationConfigComponent.prototype.addCall = function (param) {
        if (param) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '新增成功' });
        }
        this.display = false;
        this.first = 0;
        this.productAssocList();
    };
    // 删除
    ProductRelationConfigComponent.prototype.deleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                _this.productManageHttpService.delProductAssoc(item).subscribe(function (data) {
                    if (data.returnCode.code === 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                        _this.productAssocList();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '删除失败' });
                });
            }
        });
    };
    // 分页
    ProductRelationConfigComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.pageSize = Number(event.rows);
        // 当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        // 调用查询的方法
        this.productAssocList();
        this.pageNum = 1;
    };
    // 主控产品下拉
    ProductRelationConfigComponent.prototype.product_query = function () {
        var _this = this;
        var parm = {
            productTypeId: 'DIGITAL_GOOD',
            pageSize: 9999,
            pageNum: 1
        };
        this.productManageHttpService.findAvailableProductList(parm).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                data.resultList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.productName;
                    obj['value'] = item.productId;
                    _this.select_Fproduct.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    ProductRelationConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-relation-config',
            template: __webpack_require__(/*! ./product-relation-config.component.html */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.html"),
            styles: [__webpack_require__(/*! ./product-relation-config.component.scss */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ProductRelationConfigComponent);
    return ProductRelationConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 产品关系管理新增 -->\r\n<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n      <label appValidation>关系类型:</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <p-dropdown [(ngModel)]=\"relation_vale\" [options]=\"relationType\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-3 text_right\">\r\n      <label appValidation>主控可售产品:</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <p-dropdown [(ngModel)]=\"masterValue.productId\" [filter]=\"true\" [resetFilterOnHide]=\"true\" (onChange)=\"masterValueC()\" [options]=\"select_Fproduct\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <div class=\"ui-g-12 ui-md-3 text_right\">\r\n        <label appValidation>关联可售产品:</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <p-dropdown [(ngModel)]=\"relationValue.productId\" [filter]=\"true\" [resetFilterOnHide]=\"true\" (onChange)=\"relationValueC()\" [options]=\"select_Fproduct\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 ui-md-6 text_right\">\r\n        <button pButton type=\"button\" [disabled]=\"masterValue == '' ||relationValue =='' ||masterValue.productId == ''||relationValue.productId == ''\" (click)=\"addChange()\" label=\"增加反向关系\"></button>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <button pButton type=\"button\" [disabled]=\"masterValue == '' ||relationValue =='' ||masterValue.productId == ''||relationValue.productId == ''\" (click)=\"clearChange()\" label=\"清除反向关系\"></button>\r\n      </div>\r\n    </div> -->\r\n    <!-- <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 ui-md-6 text_center\">\r\n        <input type=\"text\" disabled [(ngModel)]=\"oneValue\" pInputText>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 text_center\">\r\n        <input type=\"text\" disabled [(ngModel)]=\"twoValue\" pInputText>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center bt\" style=\"margin-top: 40px\">\r\n    <button pButton type=\"button\" (click)=\"addServe()\" label=\"确定\"></button>\r\n    <button pButton type=\"button\" (click)=\"close()\" label=\"取消\"></button>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.bt > button {\n  margin: 0 25px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtcmVsYXRpb24vcHJvZHVjdC1yZWxhdGlvbi1jb25maWcvcmVsYXRpb24tY29uZmlnLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxccHJvZHVjdC1yZWxhdGlvblxccHJvZHVjdC1yZWxhdGlvbi1jb25maWdcXHJlbGF0aW9uLWNvbmZpZy1hZGRcXHJlbGF0aW9uLWNvbmZpZy1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1yZWxhdGlvbi9wcm9kdWN0LXJlbGF0aW9uLWNvbmZpZy9yZWxhdGlvbi1jb25maWctYWRkL3JlbGF0aW9uLWNvbmZpZy1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLnRleHRfY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbi5idD5idXR0b257XHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: RelationConfigAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationConfigAddComponent", function() { return RelationConfigAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelationConfigAddComponent = /** @class */ (function () {
    function RelationConfigAddComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select_Fproduct = []; // 主控可售产品下拉
        this.select_Tproduct = []; // 关联可售产品下拉
        this.masterValue = {
            productName: '',
            productId: ''
        }; // 主控可售产品
        this.relationValue = {
            productName: '',
            productId: ''
        }; // 关联可售产品
        // 提示信息
        this.msgs = [];
        // 关系类型
        this.relationType = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.relationType = this.code['RelationType'];
    }
    RelationConfigAddComponent.prototype.ngOnInit = function () {
        // this.relationType = [
        //     { label: '请选择', value: '' },
        //     { label: '排斥', value: '1' },
        //     { label: '交叉', value: '2' },
        // ];
        this.select_Fproduct = [
            { label: '请选择', value: '' }
        ];
        // this.queryRelationType();
        this.product_query();
    };
    //码值
    RelationConfigAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 可售产品下拉
    RelationConfigAddComponent.prototype.product_query = function () {
        var _this = this;
        var parm = {
            productTypeId: 'DIGITAL_GOOD',
            pageSize: 9999,
            pageNum: 1
        };
        this.productManageHttpService.findAvailableProductList(parm).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                data.resultList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.productName;
                    obj['value'] = item.productId;
                    _this.select_Fproduct.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    RelationConfigAddComponent.prototype.addChange = function () {
        var _this = this;
        var parms = {
            productId: this.relationValue.productId,
            productIdTo: this.masterValue.productId,
        };
        this.productManageHttpService.isExitProductAssoc(parms).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var isExit = data.isExit;
                if (isExit === 'Y') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '该产品反向关系已存在！' });
                    return;
                }
                else {
                    _this.oneValue = _this.relationValue.productName;
                    _this.twoValue = _this.masterValue.productName;
                    _this.oneValueId = _this.relationValue.productId;
                    _this.twoValueId = _this.masterValue.productId;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    RelationConfigAddComponent.prototype.addServe = function () {
        var _this = this;
        var parm0s = {
            productId: this.masterValue.productId,
            productIdTo: this.relationValue.productId
        };
        // 下拉框
        var parm1s = {
            productId: this.masterValue.productId,
            productIdTo: this.relationValue.productId,
            productAssocTypeId: this.relation_vale
        };
        // input
        var parm2s = {
            productId: this.oneValueId,
            productIdTo: this.twoValueId,
            productAssocTypeId: this.relation_vale
        };
        if (this.relation_vale === undefined || this.relation_vale === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '关系类型不能为空!' });
            return;
        }
        if (this.masterValue.productId === undefined || this.masterValue.productId === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '主控可售产品不能为空!' });
            return;
        }
        if (this.relationValue.productId === undefined || this.relationValue.productId === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '关联可售产品不能为空!' });
            return;
        }
        if (this.masterValue.productId === this.relationValue.productId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '主控可售产品不可与关联可售产品相同' });
            return;
        }
        if (this.oneValueId !== undefined && this.oneValueId !== '' && this.twoValueId !== undefined && this.twoValueId !== '') {
            if (this.oneValueId === this.twoValueId) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '主控可售产品不可与关联可售产品相同' });
                return;
            }
        }
        this.productManageHttpService.isExitProductAssoc(parm0s).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var isExit = data.isExit;
                if (isExit === 'Y') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '该产品关系已存在！' });
                    return;
                }
                else {
                    _this.productManageHttpService.addProductAssoc(parm1s).subscribe(function (data1) {
                        if (data1.returnCode.code === 'success') {
                            if (_this.oneValueId !== undefined && _this.oneValueId !== ''
                                && _this.twoValueId !== undefined && _this.twoValueId !== '') {
                                _this.productManageHttpService.addProductAssoc(parm2s).subscribe(function (data2) {
                                    if (data2.returnCode.code === 'success') {
                                        _this.outValue.emit(true);
                                    }
                                    else {
                                        _this.msgs = [];
                                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data2.errorMessage });
                                    }
                                }, function (error) {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
                                });
                            }
                            else {
                                _this.outValue.emit(true);
                            }
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.errorMessage });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
                    });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    RelationConfigAddComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    RelationConfigAddComponent.prototype.clearChange = function () {
        this.oneValue = '';
        this.twoValue = '';
        this.oneValueId = '';
        this.twoValueId = '';
    };
    RelationConfigAddComponent.prototype.masterValueC = function () {
        this.oneValue = '';
        this.twoValue = '';
        this.oneValueId = '';
        this.twoValueId = '';
    };
    RelationConfigAddComponent.prototype.relationValueC = function () {
        this.oneValue = '';
        this.twoValue = '';
        this.oneValueId = '';
        this.twoValueId = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RelationConfigAddComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RelationConfigAddComponent.prototype, "inValue", void 0);
    RelationConfigAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relation-config-add',
            template: __webpack_require__(/*! ./relation-config-add.component.html */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.html"),
            styles: [__webpack_require__(/*! ./relation-config-add.component.scss */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], RelationConfigAddComponent);
    return RelationConfigAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9wcm9kdWN0LXJlbGF0aW9uL3Byb2R1Y3QtcmVsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelationComponent", function() { return ProductRelationComponent; });
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

var ProductRelationComponent = /** @class */ (function () {
    function ProductRelationComponent() {
    }
    ProductRelationComponent.prototype.ngOnInit = function () {
    };
    ProductRelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-relation',
            template: __webpack_require__(/*! ./product-relation.component.html */ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.html"),
            styles: [__webpack_require__(/*! ./product-relation.component.scss */ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductRelationComponent);
    return ProductRelationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductRelatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelatModule", function() { return ProductRelatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_relation_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-relation.routing */ "./src/app/pages/tzb/product-manage/product-relation/product-relation.routing.ts");
/* harmony import */ var _product_relation_config_product_relation_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-relation-config/product-relation-config.component */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.ts");
/* harmony import */ var _product_relation_config_relation_config_add_relation_config_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-relation-config/relation-config-add/relation-config-add.component */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/relation-config-add/relation-config-add.component.ts");
/* harmony import */ var _product_relation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-relation.component */ "./src/app/pages/tzb/product-manage/product-relation/product-relation.component.ts");
/* harmony import */ var _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件

//页面







var ProductRelatModule = /** @class */ (function () {
    function ProductRelatModule() {
    }
    ProductRelatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _product_relation_routing__WEBPACK_IMPORTED_MODULE_1__["ProductRelatRouting"],
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__["SharedBasisModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_8__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_7__["UPaginatorModule"],
            ],
            declarations: [
                _product_relation_config_product_relation_config_component__WEBPACK_IMPORTED_MODULE_2__["ProductRelationConfigComponent"],
                _product_relation_config_relation_config_add_relation_config_add_component__WEBPACK_IMPORTED_MODULE_3__["RelationConfigAddComponent"],
                _product_relation_component__WEBPACK_IMPORTED_MODULE_4__["ProductRelationComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], ProductRelatModule);
    return ProductRelatModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-relation/product-relation.routing.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-relation/product-relation.routing.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductRelatRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelatRouting", function() { return ProductRelatRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_relation_config_product_relation_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-relation-config/product-relation-config.component */ "./src/app/pages/tzb/product-manage/product-relation/product-relation-config/product-relation-config.component.ts");

// 页面
// 页面

var routes = [
    {
        path: 'product-relation-config', component: _product_relation_config_product_relation_config_component__WEBPACK_IMPORTED_MODULE_1__["ProductRelationConfigComponent"],
    },
];
var ProductRelatRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=product-relation-product-relation-module.js.map