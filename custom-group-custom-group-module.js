(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-custom-group-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group\">\r\n    <div class=\"ui-g-12\">\r\n        <!-- 1 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>户序号</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.doorNum\"  disabled=\"true\">\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>客户号</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.custNo\"  disabled=\"true\">                     \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>客户名称</label>     \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.custName\"  disabled=\"true\">\r\n            </div>\r\n        </div>\r\n        <!-- 2 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>关联关系</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.relType\"  disabled=\"true\">   \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>详细信息</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.relDesc\"  disabled=\"true\">\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>联系人</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.contacts\"  disabled=\"true\">  \r\n            </div>\r\n        </div>\r\n        <!-- 3 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>证件类型</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.idenType\"  disabled=\"true\">\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>证件号码</label> \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.idenNum\"  disabled=\"true\"> \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>客户地址</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.address\"  disabled=\"true\">\r\n            </div>\r\n        </div>\r\n        <!-- 4-->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>手机号码</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.teleNum\"  disabled=\"true\">  \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>所属行业</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.industry\"  disabled=\"true\">\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>备注</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.description\"  disabled=\"true\"> \r\n            </div>\r\n        </div>\r\n        <!-- 5 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>兴农卡目标客户</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.xnkBz\"  disabled=\"true\"> \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>户主担保基金目标客户</label>  \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.hzdbjjFlag\"  disabled=\"true\">\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>存贷合一卡目标客户</label>  \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.cdhykFlag\"  disabled=\"true\"> \r\n            </div>\r\n        </div>\r\n        <!-- 6 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>商赢易贷目标客户</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.syydFlag\"  disabled=\"true\">  \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>薪易贷目标客户</label>  \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.xydFlag\"  disabled=\"true\">  \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>薪金贷目标客户</label> \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.xjdFlag\"  disabled=\"true\">\r\n            </div>\r\n        </div>\r\n        <!--7 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>房易贷目标客户</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.fydFlag\"  disabled=\"true\"> \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>户序客户介绍客户目标客户号</label> \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.khjsFlag\"  disabled=\"true\"> \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>其他业务目标客户</label> \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.qtywFlag\"  disabled=\"true\"> \r\n            </div>\r\n        </div>\r\n        <!-- 8 -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label>薪消费目标客户</label>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.xxfFlag\"  disabled=\"true\">   \r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <label>安居贷目标客户</label>  \r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"detailData.ajdFlag\" disabled=\"true\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-return\">\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"close_detail()\"></button>    \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-return {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tLWxpc3QvY3VzdG9tLWxpc3QtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAtdmlld1xcY3VzdG9tLWxpc3RcXGN1c3RvbS1saXN0LWRldGFpbFxcY3VzdG9tLWxpc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9jdXN0b20tbGlzdC9jdXN0b20tbGlzdC1kZXRhaWwvY3VzdG9tLWxpc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yZXR1cm4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: CustomListDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListDetailComponent", function() { return CustomListDetailComponent; });
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

var CustomListDetailComponent = /** @class */ (function () {
    function CustomListDetailComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomListDetailComponent.prototype.ngOnInit = function () {
    };
    CustomListDetailComponent.prototype.close_detail = function () {
        this.event.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomListDetailComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomListDetailComponent.prototype, "detailData", void 0);
    CustomListDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-list-detail',
            template: __webpack_require__(/*! ./custom-list-detail.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-list-detail.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomListDetailComponent);
    return CustomListDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group ui-g-12 module\" [style]=\"{'text-align':'center'}\">\r\n  <div class=\"ui-g-12 btn-batch-import\">\r\n    <span>{{header_1}}变更前</span>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <!-- <header-title [Info]=\"groupClientImport\"></header-title> -->\r\n    <div class=\"form-group\">\r\n      <div class=\"ui-g-12 tab\">\r\n         <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\" [value]=\"change_prev\" id=\"groupTable\">\r\n          <p-column header=\"客群区域\" [style]=\"{'text-align':'center'}\" *ngIf=\"isContactPerson\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"change_prev[i].groupZone\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"联系人工号\" [style]=\"{'text-align':'center'}\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userId\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"联系人姓名\" [style]=\"{'text-align':'center'}\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_prev[i].userName\">\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 btn-batch-import\">\r\n        <span>{{header_1}}变更后</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <!-- <header-title [Info]=\"groupClientImport\"></header-title> -->\r\n        <div class=\"form-group\">\r\n          <div class=\"ui-g-12 tab\">\r\n             <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\" [value]=\"change_after\" id=\"groupTable2\">\r\n              <p-column header=\"客群区域\" [style]=\"{'text-align':'center'}\" *ngIf=\"isContactPerson\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"change_after[i].groupZone\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"联系人工号\" [style]=\"{'text-align':'center'}\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userId\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"联系人姓名\" [style]=\"{'text-align':'center'}\">\r\n                <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"change_after[i].userName\">\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6 ui-md-2 text_right text-right\">审批描述:</div>\r\n            <div class=\"ui-g-6 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"remark\"></div>\r\n          </div>\r\n          <div class=\"ui-g-12 btn-submit\">\r\n            <!-- <button pButton type=\"button\" label=\"驳回\" (click)=\"confirm(1)\"></button> -->\r\n            <button pButton type=\"button\" label=\"提交审批\" (click)=\"confirm(0)\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvY3VzdG9tR3JvdXAtYWRtaW4tY2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAtdmlld1xcY3VzdG9tR3JvdXAtYWRtaW4tY2hhbmdlXFxjdXN0b21Hcm91cC1hZG1pbi1jaGFuZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9jdXN0b21Hcm91cC1hZG1pbi1jaGFuZ2UvY3VzdG9tR3JvdXAtYWRtaW4tY2hhbmdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJhdGNoLWltcG9ydDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: customGroupAdminChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customGroupAdminChangeComponent", function() { return customGroupAdminChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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




var customGroupAdminChangeComponent = /** @class */ (function () {
    function customGroupAdminChangeComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
    }
    customGroupAdminChangeComponent.prototype.ngOnInit = function () {
        this.location_params = this.route.snapshot.params;
        this.header_1 = this.location_params.header_1;
        this.isContactPerson = this.location_params.roleType == 1 ? true : false;
        this.selectGroupAdminInfo(1);
        this.selectGroupAdminInfo(3);
    };
    customGroupAdminChangeComponent.prototype.selectGroupAdminInfo = function (statusId) {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            roleType: this.location_params.roleType,
            statusId: statusId,
        };
        // 客户群管理人员再查询
        this.httpService.selectGroupAdminInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (statusId == 1) {
                    _this.change_prev = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_prev.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
                else if (statusId == 3) {
                    _this.change_after = [];
                    if (data.roleList != null) {
                        data.roleList.forEach(function (item) {
                            _this.change_after.push({
                                userId: item.userId,
                                userName: item.userName,
                                groupZone: item.groupZone
                            });
                        });
                    }
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupAdminChangeComponent.prototype.confirm = function (apply_result) {
        var _this = this;
        var params = {
            groupId: this.location_params.groupId,
            roleType: this.location_params.roleType,
            remark: this.remark,
            apprResult: apply_result,
            roleList: this.change_prev,
            applyRoleList: this.change_after
        };
        // 客户群管理人员变更申请
        this.httpService.updateGroupAdminStatus(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    customGroupAdminChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customGroup-admin-change',
            template: __webpack_require__(/*! ./customGroup-admin-change.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.html"),
            styles: [__webpack_require__(/*! ./customGroup-admin-change.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], customGroupAdminChangeComponent);
    return customGroupAdminChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .date {\n  display: flex; }\n  .ui-g .date label {\n    display: inline-block;\n    width: 7%;\n    font-size: 14px;\n    padding-right: 5px;\n    text-align: right; }\n  .ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 13%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n  .ui-g .cut .change {\n  display: inline-block;\n  width: 100px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 3px;\n  color: #fff;\n  border: 1px solid #f2f2f2;\n  cursor: pointer; }\n  .ui-g .btn {\n  text-align: center; }\n  .active {\n  border: none !important;\n  background-color: #0094D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvZ3JvdXAtdG9kby1yZW1pbmRlci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXZpZXdcXGdyb3VwLXRvZG8tcmVtaW5kZXJcXGdyb3VwLXRvZG8tcmVtaW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxhQUFhLEVBQUE7RUFGckI7SUFJWSxxQkFBcUI7SUFDckIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFSN0I7RUFjZ0IscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0VBbEJqQztFQXdCWSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXFDO0VBQ3JDLGVBQWUsRUFBQTtFQWhDM0I7RUFvQ1Esa0JBQWtCLEVBQUE7RUFHMUI7RUFDSSx1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9ncm91cC10b2RvLXJlbWluZGVyL2dyb3VwLXRvZG8tcmVtaW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZyB7XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDclO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXR7XHJcbiAgICAgICAgLmNoYW5nZXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDIsMjQyLDI0MiwxKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GroupTodoReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupTodoReminderComponent", function() { return GroupTodoReminderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupTodoReminderComponent = /** @class */ (function () {
    function GroupTodoReminderComponent() {
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.show = 1;
    }
    GroupTodoReminderComponent.prototype.ngOnInit = function () {
        // this.items = [
        //   {
        //     a: '提示信息',
        //     b: '客户群',
        //     c: '客户群xxxxx创建成功',
        //     d: '2017-08-09',
        //     e: '2017-08-15',
        //     f: '未查看',
        //   },
        //   {
        //     a: '提示信息',
        //     b: '客户群',
        //     c: '客户群xxxxx创建成功',
        //     d: '2017-08-09',
        //     e: '2017-08-15',
        //     f: '未查看',
        //   },
        //   {
        //     a: '提示信息',
        //     b: '客户群',
        //     c: '客户群xxxxx创建成功',
        //     d: '2017-08-09',
        //     e: '2017-08-15',
        //     f: '未查看',
        //   }
        // ];
    };
    GroupTodoReminderComponent.prototype.ngOnChanges = function () {
        this.title = this.dataValue;
    };
    GroupTodoReminderComponent.prototype.cut = function (num) {
        this.show = num;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupTodoReminderComponent.prototype, "dataValue", void 0);
    GroupTodoReminderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-todo-reminder',
            template: __webpack_require__(/*! ./group-todo-reminder.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.html"),
            styles: [__webpack_require__(/*! ./group-todo-reminder.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [])
    ], GroupTodoReminderComponent);
    return GroupTodoReminderComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2N1c3RvbS1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupComponent", function() { return CustomGroupComponent; });
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

var CustomGroupComponent = /** @class */ (function () {
    function CustomGroupComponent() {
    }
    CustomGroupComponent.prototype.ngOnInit = function () {
    };
    CustomGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-group',
            template: __webpack_require__(/*! ./custom-group.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group.component.html"),
            styles: [__webpack_require__(/*! ./custom-group.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomGroupComponent);
    return CustomGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group.module.ts ***!
  \**********************************************************************/
/*! exports provided: CusGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusGroupModule", function() { return CusGroupModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_group_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-group.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group.routing.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _custom_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-group.component */ "./src/app/pages/tzb/custom/custom-group/custom-group.component.ts");
/* harmony import */ var _my_custom_group_my_custom_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-custom-group/my-custom-group.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.ts");
/* harmony import */ var _custom_group_view_customGroup_admin_change_customGroup_admin_change__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-group-view/customGroup-admin-change/customGroup-admin-change */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/customGroup-admin-change/customGroup-admin-change.ts");
/* harmony import */ var _custom_group_view_custom_list_custom_list_detail_custom_list_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-group-view/custom-list/custom-list-detail/custom-list-detail.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-list/custom-list-detail/custom-list-detail.component.ts");
/* harmony import */ var _custom_group_view_group_todo_reminder_group_todo_reminder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-group-view/group-todo-reminder/group-todo-reminder.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/group-todo-reminder/group-todo-reminder.component.ts");
/* harmony import */ var _group_message_send_group_message_send_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group-message-send/group-message-send.component */ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_reminder_do_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/reminder-do.module */ "./src/app/pages/tzb/custom/reminder-do/reminder-do.module.ts");
/* harmony import */ var app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/commonComponent/commonComponent.module */ "./src/app/pages/tzb/custom/commonComponent/commonComponent.module.ts");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var app_pages_tzb_custom_custom_group_my_element_org_my_element_org_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component */ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.module */ "./src/app/pages/tzb/custom/custom-group/my-custom-org/my-custom-org.module.ts");
/* harmony import */ var _group_batch_credit_batch_cust_query_batch_cust_query_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./group-batch-credit/batch-cust-query/batch-cust-query.component */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.ts");
/* harmony import */ var _group_batch_credit_batch_custom_history_batch_custom_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./group-batch-credit/batch-custom-history/batch-custom-history.component */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //客户运营平台 http
//客户群组
 //客户群
 //我的客户群
 //客户群视图-群联系人变更审批界面
 //客户群视图客户名单详情
 //客户群视图待办
 //客户群_客户群维护_群短信发送






/*
  批量预授信
*/
 //批量预授信查询客户
// import { BatchCustDetail } from "./group-batch-credit/batch-cust-detail/batch-cust-detail.component";//批量预授信查询客户详情
 //批量预授信历史查询
var CusGroupModule = /** @class */ (function () {
    function CusGroupModule() {
    }
    CusGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_group_routing__WEBPACK_IMPORTED_MODULE_4__["CusGroupRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_reminder_do_reminder_do_module__WEBPACK_IMPORTED_MODULE_12__["RemindDoModule"],
                app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_13__["CommonComponentModule"],
                app_pages_tzb_custom_custom_group_my_custom_org_my_custom_org_module__WEBPACK_IMPORTED_MODULE_17__["MyCustomOrgModule"]
            ],
            declarations: [
                _custom_group_component__WEBPACK_IMPORTED_MODULE_6__["CustomGroupComponent"],
                _my_custom_group_my_custom_group_component__WEBPACK_IMPORTED_MODULE_7__["MyCustomGroupComponent"],
                // BatchPrecreditComponent, // 批量预授信
                _custom_group_view_customGroup_admin_change_customGroup_admin_change__WEBPACK_IMPORTED_MODULE_8__["customGroupAdminChangeComponent"],
                _group_message_send_group_message_send_component__WEBPACK_IMPORTED_MODULE_11__["GroupMessageSendComponent"],
                _custom_group_view_group_todo_reminder_group_todo_reminder_component__WEBPACK_IMPORTED_MODULE_10__["GroupTodoReminderComponent"],
                // AsLnListComponent,
                _custom_group_view_custom_list_custom_list_detail_custom_list_detail_component__WEBPACK_IMPORTED_MODULE_9__["CustomListDetailComponent"],
                // AddSearchManageComponent2,
                // queryGroupCustom,
                // CustomGroupQueryComponent,
                app_pages_tzb_custom_custom_group_my_element_org_my_element_org_component__WEBPACK_IMPORTED_MODULE_16__["MyElementOrg"],
                _group_batch_credit_batch_cust_query_batch_cust_query_component__WEBPACK_IMPORTED_MODULE_18__["BatchCustQuery"],
                // BatchCustDetail,
                _group_batch_credit_batch_custom_history_batch_custom_history_component__WEBPACK_IMPORTED_MODULE_19__["BatchCustomHistory"]
            ],
            // exports:[
            //     BatchCustDetail
            // ],
            providers: [
                _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
                app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_14__["Customtools"],
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_15__["MessageService"]
            ]
        })
    ], CusGroupModule);
    return CusGroupModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group.routing.ts ***!
  \***********************************************************************/
/*! exports provided: routes, CusGroupRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusGroupRouting", function() { return CusGroupRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-group.component */ "./src/app/pages/tzb/custom/custom-group/custom-group.component.ts");
/* harmony import */ var _my_custom_group_my_custom_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-custom-group/my-custom-group.component */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_my_element_org_my_element_org_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component */ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.ts");
/* harmony import */ var _group_batch_credit_batch_cust_query_batch_cust_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-batch-credit/batch-cust-query/batch-cust-query.component */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.ts");
/* harmony import */ var _group_batch_credit_batch_cust_detail_batch_cust_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-batch-credit/batch-cust-detail/batch-cust-detail.component */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-detail/batch-cust-detail.component.ts");
/* harmony import */ var _group_batch_credit_batch_custom_history_batch_custom_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-batch-credit/batch-custom-history/batch-custom-history.component */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.ts");

//客户群组

 //我的客户群交

// import {BatchPrecreditComponent} from './batch-pre-credit/batch-pre-credit.component';//导入批量预授信模块
// import { GroupMessageSendComponent } from './group-message-send/group-message-send.component';//客户群_客户群维护_群短信发送
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
/*
  批量预授信
*/
 //批量预授信查询客户
 //批量预授信查询客户详情
 //批量预授信历史查询
var routes = [
    {
        path: '',
        component: _custom_group_component__WEBPACK_IMPORTED_MODULE_1__["CustomGroupComponent"],
        children: [
            {
                path: '', redirectTo: 'my-custom-group', pathMatch: 'full'
            },
            {
                path: 'my-custom-group',
                component: _my_custom_group_my_custom_group_component__WEBPACK_IMPORTED_MODULE_2__["MyCustomGroupComponent"],
            },
            {
                path: 'batch-pre-credit',
                loadChildren: './batch-pre-credit/batch-pre-credit.module#BatchPreCreditModule'
                // component: BatchPrecreditComponent,//批量预授信
            },
            { path: 'create-custom-group', loadChildren: './create-custom-group/create-custom-group.module#CreateCustomGroupModule' },
            { path: 'create-custom-group-next', loadChildren: './create-custom-group-next/create-custom-group-next.module#CreateCustomGroupNextModule' },
            { path: 'custom-group-examine', loadChildren: './custom-group-examine/custom-group-examine.module#CustomGroupExamineModule' },
            { path: 'custom-group-query2', loadChildren: './custom-group-query2/custom-group-query2.module#CustomGroupQuery2Module' },
            { path: 'custom-group-save', loadChildren: './custom-group-save/custom-group-save.module#CustomGroupSaveModule' },
            { path: 'custom-group-view', loadChildren: './custom-group-view/custom-group-view.module#CustomGroupViewModule' },
            { path: 'market-scheme-search', loadChildren: './custom-group-view/group-marketing-plan/group-marketing-plan.module#CustomGroupPlanModule' },
            { path: 'create-group-marketing', loadChildren: './custom-group-view/group-marketing-plan/create-group-marketing/create-group-marketing.module#CreateGroupMarketingModule' },
            { path: 'ranking-list-detail', loadChildren: './custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.module#CustomGroupDetailModule' },
            { path: 'group-advanced-search', loadChildren: './custom-group-view/group-advanced-search/group-advanced-search.module#groupAdvancedSearchModule' },
            { path: 'custom-information-display', loadChildren: './custom-information-display/custom-information-display.module#customInformationDisplayModule' },
            { path: 'household-information-display', loadChildren: './household-information-display/household-information-display.module#HouseholdInformationDisplayModule' },
            { path: 'managerment-log-query', loadChildren: './custom-group-view/admin-log/managerment-log-query/managerment-log-query.module#ManagermentLogQueryModule' },
            { path: 'group-rating', loadChildren: './group-rating/group-rating.component.module#GroupRatingComponentModule' },
            { path: 'application-history', loadChildren: './group-rating/application-history/application-history.module#ApplicationHistoryModule' },
            { path: 'third-party-evaluation', loadChildren: './third-party-evaluation/third-party-evaluation.module#ThirdPartyEvaluationModule' },
            { path: 'precredit-apply', loadChildren: './precredit-apply/precredit-apply.module#PrecreditApplyModule' },
            { path: 'prefer-rate-scheme', loadChildren: './prefer-rate-scheme/prefer-rate-scheme.module#PreferRateSchemeModule' },
            { path: 'market-scheme', loadChildren: './market-scheme/market-scheme.module#MarketSchemeModule' },
            { path: 'group-batch-credit', loadChildren: './group-batch-credit/group-batch-credit.module#GroupBatchCreditModule' },
            { path: 'group-client-import', loadChildren: './group-client-import/group-client-import.module#GroupClientImportModule' },
            { path: 'my-custom-org', loadChildren: './my-custom-org/my-custom-org.module#MyCustomOrgModule' },
            { path: 'my-element-org', component: app_pages_tzb_custom_custom_group_my_element_org_my_element_org_component__WEBPACK_IMPORTED_MODULE_3__["MyElementOrg"] },
            { path: 'batch-cust-query', component: _group_batch_credit_batch_cust_query_batch_cust_query_component__WEBPACK_IMPORTED_MODULE_4__["BatchCustQuery"] },
            { path: 'batch-cust-detail', component: _group_batch_credit_batch_cust_detail_batch_cust_detail_component__WEBPACK_IMPORTED_MODULE_5__["BatchCustDetail"] },
            { path: 'batch-cust-history', component: _group_batch_credit_batch_custom_history_batch_custom_history_component__WEBPACK_IMPORTED_MODULE_6__["BatchCustomHistory"] },
        ]
    },
];
var CusGroupRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  批量预授信\r\n -->\r\n<div class=\"ui-g-12 group-query\" style=\"width:100%\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'批量预授信查询'\"></header-title>\r\n        <div class=\"ui-g-9\" style=\"margin-left:10%\">\r\n            <!-- <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>产品名称：</label>\r\n                </div>\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.productName\" disabled/>\r\n                    <div class=\"clickspan\">\r\n                        <a (click)=\"choosePro()\" class=\"a-hand\">\r\n                          <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>担保方式：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <p-dropdown [options]=\"guaranteeModeOptions\" [(ngModel)]=\"batchCreditBean.guaranteeType\" class=\"input-s\"></p-dropdown>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>客户编号：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <input class=\"input-s\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.custNo\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>客户名称：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <input class=\"input-s\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.custName\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>机构码：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.bankName\" disabled/>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"chooseBankName()\" class=\"a-hand\">\r\n                                              <span>...</span>\r\n                                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <input class=\"input-s\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.bankId\" /> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>经办人：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.operName\" disabled/>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"chooseOperName()\" class=\"a-hand\">\r\n                                      <span>...</span>\r\n                                    </a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <input class=\"input-s\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.operId\" /> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 productNameStyle\" style=\"text-align:right\">\r\n                <div class=\"querytitle\">\r\n                    <label>经办日期：</label>\r\n                </div>\r\n                <div class=\"queryinput\">\r\n                    <p-calendar class=\"input-s\" [(ngModel)]=\"batchCreditBean.acDateBegin\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                        [style]=\"{'width':'20%'}\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1949:2099\" [readonlyInput]=\"true\"\r\n                        [locale]=\"ch\" name=\"endDate\"></p-calendar>\r\n                    -\r\n                    <p-calendar class=\"input-s\" [(ngModel)]=\"batchCreditBean.acDateEnd\" showButtonBar=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                        [style]=\"{'width':'20%'}\" [monthNavigator]=\"true\" style=\"width: 30%\" [yearNavigator]=\"true\" yearRange=\"1949:2099\"\r\n                        [readonlyInput]=\"true\" [locale]=\"ch\" name=\"endDate\"></p-calendar>\r\n                    <!-- <input class=\"input-s\" disabled type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.acDate\" /> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btnPosition\">\r\n            <button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n            <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <!-- <div class=\"addRight\">\r\n            <button pButton type=\"button\" label=\"新增\" (click)=\"addBatch()\"></button>\r\n\r\n        </div> -->\r\n        <p-dataTable [value]=\"tableList\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column header=\"客户号\" field=\"custNo\"></p-column>\r\n            <p-column header=\"客户名称\" field=\"custName\"></p-column>\r\n            <p-column header=\"年龄\" field=\"age\"></p-column>\r\n            <p-column header=\"手机号码\" field=\"telNum\"></p-column>\r\n            <p-column header=\"信贷员建议额度(元)\" field=\"loanOfficerAdvises\"></p-column>\r\n            <p-column header=\"系统建议额度(元)\" field=\"loanSystemAdvises\"></p-column>\r\n            <p-column header=\"授信到期日\" field=\"endDate\"></p-column>\r\n            <!-- <p-column header=\"第三方评价\" field=\"threeResult\"></p-column> -->\r\n            <p-column header=\"第三方评价结果\">\r\n                <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                    <span class=\"groupNumStyle\" (click)=\"toThreeView(col)\" style=\"cursor:pointer;\">第三方评价</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column header=\"状态\" field=\"state\"></p-column> -->\r\n            <p-column header=\"状态\" field=\"state\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{col.state | codeValuePie:caseStatus}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column header=\"经办日期\" field=\"acDate\"></p-column> -->\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.state == '0' || item.state == '1' || item.state == '2'\" (click)='toUpdate(item)' class=\"tabelUpdateIco\">失效</span>\r\n                    <span (click)='toApprove(item)' class=\"tableApprove\">查看</span>\r\n                    <span *ngIf=\"item.state == '1'\" (click)='toTranslate(item)' class=\"tableApprove\">个人转授信</span>\r\n                    <!-- <span (click)='toDoCheckIn(item)' class=\"tableApprove\" *ngIf=\"item.checkInFlag =='C2'\">检出</span> -->\r\n                    <!-- <span (click)='toDoExam(item)' class=\"tableApprove\" *ngIf=\"whFlag == '2'\">查看</span> -->\r\n                    <!-- <span class=\"tabelDetailIco\" (click)=\"viewProcessSchedule(item)\">流程图</span> -->\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{batchCreditBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 选择产品 -->\r\n<p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" (onHide)=\"closeSetting1()\" modal=\"true\"\r\n    class=\"cardStatusAdjustmentProf\">\r\n    <select-product-component *ngIf=\"selectProductDisplay\" [isCatelog]=\"isCatelog\" (outValue)=\"productCall($event)\"></select-product-component>\r\n</p-dialog>\r\n<!--选择机构-->\r\n<p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        机构树\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"contacttreeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<!-- 员工 -->\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"my-cust-overf\">\r\n    <p-header>员工列表</p-header>\r\n    <queryUser (outValue)=\"workerCall($event)\"></queryUser>\r\n    <!-- <app-query-user-list *ngIf=\"personPage\" [in-value]=\"0000\" (outValue)=\"perInfor($event)\"></app-query-user-list> -->\r\n</p-dialog>\r\n<!-- 删除-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" basezIndex='2' header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"取消\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!--审批详情弹框-->\r\n<p-dialog header=\"审批详情\" [(visible)]=\"creditApproveDisplay\" modal=\"modal\" [responsive]=\"false\" [positionTop]=10 class=\"my-workdesk-contactf\"\r\n    (onHide)=\"closeFirtproc()\">\r\n    <app-work-approve-detail *ngIf=\"creditApproveDisplay1\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\"></app-work-approve-detail>\r\n    <app-credit-approve-detail *ngIf=\"creditApproveDisplay2\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\" [taskId]=\"nowTaskId\"></app-credit-approve-detail>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n  批量预授信\r\n*/\n.module .btn {\n  text-align: center; }\n.module .custNo_a {\n  cursor: pointer;\n  color: #19b0c8; }\n.name-thing {\n  padding-bottom: 0; }\n.name-thing .ui-g-4 {\n    padding-bottom: 0; }\n.name-thing .ui-g-4 .ui-g-6 {\n      text-align: right; }\n.name-thing2 {\n  padding-bottom: 0; }\n.name-thing2 .ui-g-4 {\n    padding-top: 0; }\n.name-thing2 .ui-g-4 .ui-g-6 {\n      text-align: right; }\n.groupNumStyle {\n  color: #19b0c8; }\n.addRight {\n  text-align: right;\n  margin-bottom: 10px; }\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px; }\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px; }\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n:host /deep/ .my-workdesk-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n:host/deep/ .my-workdesk-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n.group-query .btnPosition {\n  text-align: center; }\n.group-query .productNameStyle {\n  display: flex; }\n.group-query .productNameStyle .querytitle {\n    width: 40%;\n    float: left;\n    text-align: right;\n    height: 28px;\n    line-height: 28px; }\n.group-query .productNameStyle .queryinput {\n    width: 70%;\n    float: left;\n    display: flex; }\n.group-query .productNameStyle .queryinput .input-s {\n      width: 100% !important;\n      min-width: 69px !important; }\n.group-query .productNameStyle .queryinputCustNameBtn {\n    width: 70%;\n    float: left;\n    display: flex;\n    line-height: 20px; }\n.group-query .productNameStyle .queryinputCustNameBtn .queryinputCustName {\n      border-radius: 3px 3px 3px 3px;\n      width: 100% !important;\n      min-width: 69px !important; }\n.group-query .productNameStyle .queryinputCustNameBtn .clickCheckboxspan {\n      width: 14%;\n      height: 23px;\n      min-width: 78px !important; }\n.group-query .productNameStyle .queryinputbtn {\n    width: 100%;\n    float: left;\n    display: flex; }\n.group-query .productNameStyle .queryinputbtn .queryinputOrg {\n      border-right: none;\n      border-radius: 3px 0 0 3px;\n      width: 85% !important;\n      min-width: 69px !important; }\n.group-query .productNameStyle .queryinputbtn .clickspan {\n      width: 14%;\n      height: 23px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtYmF0Y2gtY3JlZGl0L2JhdGNoLWN1c3QtcXVlcnkvYmF0Y2gtY3VzdC1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtYmF0Y2gtY3JlZGl0L2JhdGNoLWN1c3QtcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGdyb3VwLWJhdGNoLWNyZWRpdFxcYmF0Y2gtY3VzdC1xdWVyeVxcYmF0Y2gtY3VzdC1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0NER0M7QUNBRDtFQUVRLGtCQUFrQixFQUFBO0FBRjFCO0VBS1EsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUl0QjtFQUNJLGlCQUFpQixFQUFBO0FBRHJCO0lBR1EsaUJBQWlCLEVBQUE7QUFIekI7TUFLWSxpQkFBaUIsRUFBQTtBQUk3QjtFQUNJLGlCQUFpQixFQUFBO0FBRHJCO0lBR1EsY0FBYyxFQUFBO0FBSHRCO01BS1ksaUJBQWlCLEVBQUE7QUFJN0I7RUFDSSxjQUFjLEVBQUE7QUFFbEI7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0FBR25CO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHckI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7QUFHMUI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUVRLGtCQUFrQixFQUFBO0FBRjFCO0VBS1EsYUFBYSxFQUFBO0FBTHJCO0lBT1ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0FBWDdCO0lBY1ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhLEVBQUE7QUFoQnpCO01Ba0JnQixzQkFBc0I7TUFDdEIsMEJBQTBCLEVBQUE7QUFuQjFDO0lBdUJZLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQixFQUFBO0FBMUI3QjtNQTZCZ0IsOEJBQThCO01BQzlCLHNCQUFzQjtNQUN0QiwwQkFBMEIsRUFBQTtBQS9CMUM7TUFrQ2dCLFVBQVU7TUFDVixZQUFZO01BQ1osMEJBQTBCLEVBQUE7QUFwQzFDO0lBd0NZLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYSxFQUFBO0FBMUN6QjtNQTRDZ0Isa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixxQkFBcUI7TUFDckIsMEJBQTBCLEVBQUE7QUEvQzFDO01Ba0RnQixVQUFVO01BQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtYmF0Y2gtY3JlZGl0L2JhdGNoLWN1c3QtcXVlcnkvYmF0Y2gtY3VzdC1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXHJcbiAg5om56YeP6aKE5o6I5L+hXHJcbiovXG4ubW9kdWxlIC5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1vZHVsZSAuY3VzdE5vX2Ege1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMTliMGM4OyB9XG5cbi5uYW1lLXRoaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cbiAgLm5hbWUtdGhpbmcgLnVpLWctNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7IH1cbiAgICAubmFtZS10aGluZyAudWktZy00IC51aS1nLTYge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLm5hbWUtdGhpbmcyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cbiAgLm5hbWUtdGhpbmcyIC51aS1nLTQge1xuICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gICAgLm5hbWUtdGhpbmcyIC51aS1nLTQgLnVpLWctNiB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4uZ3JvdXBOdW1TdHlsZSB7XG4gIGNvbG9yOiAjMTliMGM4OyB9XG5cbi5hZGRSaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5jb250MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxNnB4IDBweCAxMHB4IDBweDsgfVxuXG4uY29udDMzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMjVweDsgfVxuXG4uY29udDMwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uY29udDYwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMjVweDsgfVxuXG4udGV4dEFsaWdpbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMjVweDsgfVxuXG46aG9zdCAvZGVlcC8gLm15LXdvcmtkZXNrLWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcbiAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLm15LXdvcmtkZXNrLWNvbnRhY3RmIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCU7IH1cblxuLmdyb3VwLXF1ZXJ5IC5idG5Qb3NpdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZ3JvdXAtcXVlcnkgLnByb2R1Y3ROYW1lU3R5bGUge1xuICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5ncm91cC1xdWVyeSAucHJvZHVjdE5hbWVTdHlsZSAucXVlcnl0aXRsZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgLmdyb3VwLXF1ZXJ5IC5wcm9kdWN0TmFtZVN0eWxlIC5xdWVyeWlucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuZ3JvdXAtcXVlcnkgLnByb2R1Y3ROYW1lU3R5bGUgLnF1ZXJ5aW5wdXQgLmlucHV0LXMge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50OyB9XG4gIC5ncm91cC1xdWVyeSAucHJvZHVjdE5hbWVTdHlsZSAucXVlcnlpbnB1dEN1c3ROYW1lQnRuIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cbiAgICAuZ3JvdXAtcXVlcnkgLnByb2R1Y3ROYW1lU3R5bGUgLnF1ZXJ5aW5wdXRDdXN0TmFtZUJ0biAucXVlcnlpbnB1dEN1c3ROYW1lIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDsgfVxuICAgIC5ncm91cC1xdWVyeSAucHJvZHVjdE5hbWVTdHlsZSAucXVlcnlpbnB1dEN1c3ROYW1lQnRuIC5jbGlja0NoZWNrYm94c3BhbiB7XG4gICAgICB3aWR0aDogMTQlO1xuICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgbWluLXdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmdyb3VwLXF1ZXJ5IC5wcm9kdWN0TmFtZVN0eWxlIC5xdWVyeWlucHV0YnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLmdyb3VwLXF1ZXJ5IC5wcm9kdWN0TmFtZVN0eWxlIC5xdWVyeWlucHV0YnRuIC5xdWVyeWlucHV0T3JnIHtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7IH1cbiAgICAuZ3JvdXAtcXVlcnkgLnByb2R1Y3ROYW1lU3R5bGUgLnF1ZXJ5aW5wdXRidG4gLmNsaWNrc3BhbiB7XG4gICAgICB3aWR0aDogMTQlO1xuICAgICAgaGVpZ2h0OiAyM3B4OyB9XG4iLCIvKlxyXG4gIOaJuemHj+mihOaOiOS/oVxyXG4qL1xyXG4ubW9kdWxlIHtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmFtZS10aGluZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5hbWUtdGhpbmcyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLnVpLWctNCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZ3JvdXBOdW1TdHlsZSB7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICB9XHJcbi5hZGRSaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDBweCAxMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnQzMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250MzAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250NjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4udGV4dEFsaWdpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm15LXdvcmtkZXNrLWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm15LXdvcmtkZXNrLWNvbnRhY3RmIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uZ3JvdXAtcXVlcnkge1xyXG4gICAgLmJ0blBvc2l0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdE5hbWVTdHlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAucXVlcnl0aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1ZXJ5aW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLmlucHV0LXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdWVyeWlucHV0Q3VzdE5hbWVCdG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIC5xdWVyeWlucHV0Q3VzdE5hbWUge1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbGlja0NoZWNrYm94c3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BatchCustQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchCustQuery", function() { return BatchCustQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/approvedItems.bean */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/bean/approvedItems.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  批量预授信
*/






// import { BacklogDetailBean } from '../../../bean/backlog-detail.bean';
// import { CusOperationHttpService } from '../../../../../http/custom-operation/custom-operation.http.service';







// import { HttpService } from 'app/@uisftech/common/service/http.service';

var BatchCustQuery = /** @class */ (function () {
    function BatchCustQuery(customeHttpService, httpService, commfunc, router, activatedRouter, confirmationService, creditCcmService, processInstanceManagementService, decimalPipe) {
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.decimalPipe = decimalPipe;
        this.approvedItemsBean = new _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__["ApprovedItemsBean"]();
        this.batchCreditBean = new _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__["BatchCreditBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        // scheduleTypeId3: any = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.itemsSmallType = [];
        this.msgs = [];
        this.first = 0;
        this.tableList = [];
        this.approveParams = [];
        this.tableTitleList = [];
        this.queryList = [];
        this.creditApproveDisplay = false;
        this.stopFlag = true;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.orgTreeDisplay = false; //机构弹出框
        this.personPage = false; //员工弹出框
        this.selectProductDisplay = false; //客户信息弹出框
        this.codeValues();
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // if (this.user.userId) {
        this.userId = this.user.userId;
        // }
    }
    BatchCustQuery.prototype.ngOnInit = function () {
        // this.caseStatus = [
        // 	{ label: '未申请', value: '0' },
        // 	{ label: '转授信待办', value: '1' },
        // 	{ label: '预授信否决', value: '2' },
        // 	{ label: '已发起', value: '3' },
        // 	{ label: '已通过', value: '4' },
        // 	{ label: '转授信否决', value: '5' },
        // 	{ label: '失效', value: '6' },
        // 	{ label: '撤销', value: '7' },
        // ]
        this.groupId = this.activatedRouter.snapshot.params['groupId']; // 客户群号
        this.batchCreditBean.bankId = this.activatedRouter.snapshot.params['orgId']; // 群所属机构码
        this.batchCreditBean.bankName = this.activatedRouter.snapshot.params['orgName']; // 群所属机构名称
        this.reset();
        this.getBasic();
        this.queryBatchCreditList();
        console.log(this.activatedRouter);
        this.groupName = this.activatedRouter.snapshot.params['groupName']; // 客户群名称
        this.groupType = this.activatedRouter.snapshot.params['groupType']; // 客户群类型
        // this.batchCreditBean.groupId = this.groupId;
    };
    // 基础值
    BatchCustQuery.prototype.getBasic = function () {
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // 默认赋值，如果有，会被覆盖
        // this.batchCreditBean.operName = chName.userName;
        // this.batchCreditBean.operId = this.commonHeader.userId;
        // this.batchCreditBean.bankId = this.commonHeader.orgId;
        // this.batchCreditBean.bankName = chName.orgName;
    };
    // 获取码值
    BatchCustQuery.prototype.codeValues = function () {
        // this.commfunc.codeValue();
        // let ret = this.commfunc.codeDatas;
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        this.guaranteeModeOptions = codeValues['guaranteeModeTransform']; // 担保方
        this.caseStatus = codeValues['batchCaseStatus'];
    };
    // 重置
    BatchCustQuery.prototype.reset = function () {
        console.log("sad");
        this.batchCreditBean.custNo = null;
        this.batchCreditBean.custName = null;
        this.batchCreditBean.operId = null;
        this.batchCreditBean.operName = null;
        // this.batchCreditBean.bankId = null;
        // this.batchCreditBean.bankName = null;
        this.batchCreditBean.acDateBegin = null;
        this.batchCreditBean.acDateEnd = null;
        this.batchCreditBean.pageNum = 1;
        this.batchCreditBean.pageSize = 10;
        this.first = 0;
    };
    BatchCustQuery.prototype.querySecle = function () {
        this.batchCreditBean.pageNum = 1;
        this.batchCreditBean.pageSize = 10;
        this.first = 0;
        this.queryBatchCreditList();
    };
    // 批量预授信列表查询
    BatchCustQuery.prototype.queryBatchCreditList = function () {
        var _this = this;
        this.batchCreditBean.acDateBegin = this.commfunc.transDateN(this.batchCreditBean.acDateBegin);
        this.batchCreditBean.acDateEnd = this.commfunc.transDateN(this.batchCreditBean.acDateEnd);
        this.batchCreditBean.operType = "2";
        this.batchCreditBean.groupId = this.groupId;
        this.httpService.queryBatchPreCreditDetailList(this.batchCreditBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableList = data.resultList;
                _this.total = data.total;
                _this.tableList.forEach(function (element) {
                    element.loanOfficerAdvises = _this.transMony(element.loanOfficerAdvises * 10000);
                    element.loanSystemAdvises = _this.transMony(element.loanSystemAdvises * 10000);
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
    // 金额格式转换
    BatchCustQuery.prototype.transMony = function (param) {
        var result = "";
        if (param) {
            result = this.commfunc.transform(param) + '';
        }
        result = this.decimalPipe.transform(param, '1.2-2'); //申请金额
        return result;
    };
    // 分页
    BatchCustQuery.prototype.paginate = function (event) {
        this.batchCreditBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.batchCreditBean.pageNum = currentPage;
        this.first = event.page * this.batchCreditBean.pageSize;
        this.queryBatchCreditList();
    };
    //页面信息查询
    BatchCustQuery.prototype.queryViewRelations = function (resolve, notApply) {
        var _this = this;
        var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
        var params = {
            businessType: "17",
            roleId: post_name,
            viewIndex: 1,
            viewSize: 100,
        };
        console.log(params);
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.list.length > 0) {
                    var viewId_1 = [];
                    data.list.forEach(function (e) {
                        // if (e.viewName.match('卡要素')) {
                        viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                        // }
                    });
                    _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                    _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17", notApply: notApply })]);
                }
                else {
                    _this.msgs = [{ severity: 'info', summary: '错误', detail: '岗位未关联页面,请配置关联页面' }];
                }
                // let param = ""
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 个人转授信
    BatchCustQuery.prototype.toTranslate = function (data) {
        var _this = this;
        var params = {
            batchId: data.batchId,
            serialNo: data.serialNo
        };
        this.httpService.batchPreCreditSubmissionLetter(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.reset();
                // this.getBasic();
                _this.queryBatchCreditList();
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 删除
    BatchCustQuery.prototype.toDeletes = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除?',
            accept: function () {
                _this.toDelete(item);
                // let param = {
                // 	userId: this.userId,
                // 	taskId: item.taskId,
                // 	tranType: 'A0',
                // 	doResion: '4',
                // }
                // this.customeHttpService.bpmUserTaskManage(param).subscribe(data => {
                // 	if (data.returnCode.code == 'success') {
                // 		this.msgs = [];
                // 		this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                // 		// this.doUp();
                // 	} else {
                // 		this.msgs = [];
                // 		this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                // 	}
                // }, error => {
                // 	this.msgs = [];
                // 	this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                // })
            }
        });
    };
    // 关闭审批详情
    BatchCustQuery.prototype.closeFirtproc = function () {
        this.nowTaskId = undefined;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
    };
    // 审批详情弹框回调方法
    BatchCustQuery.prototype.creditApproveCall = function () {
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.creditApproveDisplay = false;
    };
    // 第三方评价结果
    BatchCustQuery.prototype.toThreeView = function (col) {
        // this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate', { groupId: col.groupId, groupName: col.groupName }]);
        this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate', { yushouxin: '1', groupId: col.groupId, custNo: col.custNo, doorId: null, custGroupView: 1, pageNum: 1, groupName: col.groupName }]);
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view/group-evaluator', { groupId: col.groupId }])
    };
    // 失效
    BatchCustQuery.prototype.toUpdate = function (item) {
        var _this = this;
        var params = {
            operType: '1',
            serialNo: item.serialNo,
            state: "6"
        };
        this.httpService.vetoBatchPreCreditDetailInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.reset();
                _this.queryBatchCreditList();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 查看
    BatchCustQuery.prototype.toApprove = function (item) {
        console.log("asda");
        // this.router.navigate(['/pages/tzb/custom/custom-group/batch-cust-query', { groupId: this.groupId, groupName: this.groupName, groupType: this.custGroupInfoBean.groupType }]);
        this.router.navigate(['/pages/tzb/custom/custom-group/batch-cust-detail', { serialNo: item.serialNo }]);
        // this.queryBatch(item, "3", "1");
    };
    // 查询
    BatchCustQuery.prototype.queryBatch = function (item, self, notApply) {
        var _this = this;
        var batchDetail = new Promise(function (resolve) {
            _this.queryBatchDetail(item, resolve);
        });
        var batchGroup = new Promise(function (resolve) {
            _this.queryGroupInfo(item, resolve);
        });
        Promise.all([batchDetail, batchGroup]).then(function (res) {
            var datas = {
                detailData: res[0]["detailDtas"],
                groupData: res[1]["groupDtas"],
                self: self
            };
            console.log(datas);
            _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
            _this.queryViewRelations(item, notApply);
        });
    };
    // 查询详细信息
    BatchCustQuery.prototype.queryBatchDetail = function (item, resolve) {
        var _this = this;
        var params = {
            batchId: item.batchId
        };
        this.httpService.queryBatchPreCreditInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var datas = {
                    batchId: data.batchId,
                    operType: data.operType,
                    state: data.state,
                    groupId: data.groupId,
                    groupName: data.groupName,
                    productId: data.productId,
                    productName: data.productName,
                    guaranteeType: data.guaranteeType,
                    contractType: data.contractType,
                    endDate: data.endDate,
                    rateKind: data.rateKind,
                    returnKind: data.returnKind,
                    note: data.note,
                    operId: data.operId,
                    operName: data.operName,
                    bankId: data.bankId,
                    bankName: data.bankName,
                    acDate: data.acDate,
                    Permissioncontrol: data.permissionControler
                };
                resolve({
                    detailDtas: datas
                });
                // this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas))
                // this.queryViewRelations(item);
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 客户群信息查询queryCustGroupInfo
    BatchCustQuery.prototype.queryGroupInfo = function (item, resolve) {
        var _this = this;
        var params = {
            "permissionFlag": "1",
            "advanceInput": "0",
            "groupType": "0",
            "pageNum": 1,
            "pageSize": 10,
            "conditionList": [
                [
                    {
                        "field": "group_id",
                        "operator": "=",
                        "value": item.groupId
                    }
                ]
            ],
        };
        this.httpService.queryCustGroupInfo(params).subscribe(function (result) {
            if (result.returnCode.code == 'success') {
                var data = result.resultList[0] || {};
                console.log("oop");
                var datas = {
                    cust_num: data.open_num || null,
                    valid_cust_num: data.valid_cust_num || null,
                    valid_cov_rate: data.valid_ratio || null,
                    crdt_cust_num: data.CRDT_CUST_NUM || null,
                    pre_crdt_amt: data.pre_credit_limit || null,
                    // crdt_cust_num:data.cust_num || null,//已授信客户数
                    pre_crdt_cust_num: data.PRE_CRDT_CUST_NUM,
                    crdt_amt: data.CRDT_AMT || null,
                    crdt_bal: data.CRDT_BAL || null,
                    loan_cust_num: data.LOAN_CUST_NUM || null,
                    // crdt_amt:data.cust_num || null,//已用信额度总和
                    CRDT_AMT_USED: data.CRDT_AMT_USED,
                    GROUP_ID: data.group_id || null,
                    GROUP_NAME: data.group_name || null,
                    GROUP_TYPE: data.group_type || null,
                    GROUP_OWNER_NAME: data.group_owner || null,
                    GROUP_LINKMANNAME: data.group_of_contacts || null,
                    GROUP_LINKMANID: data.group_of_contacts_id || null,
                    ORG_NAME: data.org_id || null,
                    ADDRESS: data.address_message || null,
                    PRODUCT_CODE: data.featured_products || null,
                    INT: data.INT || null,
                    GROUP_OWNER_ID: data.group_owner || null,
                    ORG_ID: data.create_org_id || null,
                    subGroupType: data.subGroupType || null //所属区域
                };
                resolve({
                    groupDtas: datas
                });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 增加
    BatchCustQuery.prototype.addBatch = function () {
        var _this = this;
        var params = {
            operType: "1",
            groupId: this.groupId,
            groupName: this.groupName,
            groupType: this.groupType,
        };
        this.httpService.addBatchPreCredit(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.queryBatchCreditList();
                _this.queryBatch({ groupId: _this.groupId, batchId: data.batchId }, "1", "2");
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
        // this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17" })]);
    };
    // 删除
    BatchCustQuery.prototype.toDelete = function (item) {
        var _this = this;
        var params = {
            operationType: '2',
            batchId: item.batchId,
            groupId: item.groupId
        };
        this.httpService.deleteBatchPreCredit(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.queryBatchCreditList();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 选择产品
    BatchCustQuery.prototype.choosePro = function () {
        this.selectProductDisplay = true;
    };
    // 关闭模态框
    BatchCustQuery.prototype.closeSetting1 = function () {
        this.selectProductDisplay = false;
    };
    // 选择产品回调
    BatchCustQuery.prototype.productCall = function (event) {
        console.log(event);
        // this.batchCreditBean.productId = event[0].productId;
        // this.batchCreditBean.productName = event[0].productName;
        this.selectProductDisplay = false;
    };
    // 选择机构
    BatchCustQuery.prototype.chooseOperName = function () {
        this.personPage = true;
    };
    // 选择机构回调
    BatchCustQuery.prototype.contacttreeCall = function (event) {
        console.log(event);
        this.batchCreditBean.bankId = event.orgId; //经办人ID
        this.batchCreditBean.bankName = event.orgName; //经办人名称
        this.orgTreeDisplay = false;
    };
    // 选择员工
    BatchCustQuery.prototype.chooseBankName = function () {
        this.orgTreeDisplay = true;
    };
    // 选则员工回掉
    BatchCustQuery.prototype.workerCall = function (event) {
        console.log(event);
        this.batchCreditBean.operId = event[0].departmentId; //经办人ID
        this.batchCreditBean.operName = event[0].tellerName; //经办人名称
        // this.batchCreditBean.bankId = event[0].departmentId//经办人ID
        // this.batchCreditBean.bankName = event[0].tellerName//经办人名称
        this.personPage = false;
        // this.orgTreeDisplay = false;
    };
    // 关闭员工弹出框
    BatchCustQuery.prototype.onHideClose = function () {
        this.orgTreeDisplay = false;
    };
    BatchCustQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch-cust-query',
            template: __webpack_require__(/*! ./batch-cust-query.component.html */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.html"),
            styles: [__webpack_require__(/*! ./batch-cust-query.component.scss */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/batch-cust-query.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__["CreditCcmService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__["ProcessInstanceManagementService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__["MessageService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__["CreditCcmService"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__["ProcessInstanceManagementService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]])
    ], BatchCustQuery);
    return BatchCustQuery;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/bean/approvedItems.bean.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-cust-query/bean/approvedItems.bean.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ApprovedItemsBean, BatchCreditBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedItemsBean", function() { return ApprovedItemsBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchCreditBean", function() { return BatchCreditBean; });
/*
  批量预授信
*/
var ApprovedItemsBean = /** @class */ (function () {
    function ApprovedItemsBean() {
    }
    return ApprovedItemsBean;
}());

var BatchCreditBean = /** @class */ (function () {
    function BatchCreditBean() {
    }
    return BatchCreditBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  批量预授信\r\n -->\r\n<div class=\"ui-g-12 boxShadow overdue_query\">\r\n    <!-- (keydown)=\"enter($event)\" -->\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'批量预授信查询'\"></header-title>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">客群编号：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"batchCreditBean.groupId\">\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">客群名称：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"batchCreditBean.groupName\">\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">客群类型：</div>\r\n            <div class=\"ui-g-3\">\r\n                <!-- [options]=\"caseStatus\" -->\r\n                <p-dropdown [options]=\"groupTypes\" [(ngModel)]=\"batchCreditBean.groupType\" placeholder=\"请选择\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">客户编号：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"batchCreditBean.custNo\">\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">客户名称：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"batchCreditBean.custName\">\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">状态：</div>\r\n            <!-- [options]=\"caseStatus\" -->\r\n            <div class=\"ui-g-3\">\r\n                <p-dropdown [options]=\"caseStatus\" [(ngModel)]=\"batchCreditBean.state\" placeholder=\"请选择\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">机构码：</div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.bankName\" disabled/>\r\n                    <div class=\"clickspan\">\r\n                        <a (click)=\"chooseBankName()\" class=\"a-hand\">\r\n                                  <span>...</span>\r\n                                </a>\r\n                    </div>\r\n                </div>\r\n                <!-- <input pInputText [(ngModel)]=\"batchCreditBean.bankId\"> -->\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">经办人：</div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"batchCreditBean.operName\" disabled/>\r\n                    <div class=\"clickspan\">\r\n                        <a (click)=\"chooseOperName()\" class=\"a-hand\">\r\n                                  <span>...</span>\r\n                                </a>\r\n                    </div>\r\n                </div>\r\n                <!-- <input pInputText [(ngModel)]=\"batchCreditBean.operId\"> -->\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">经办日期：</div>\r\n            <div class=\"ui-g-3 calendar_inline\">\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <!-- (onSelect)=\"sysPushStartDateClick()\" (onBlur)=\"sysPushStartDateClick()\" -->\r\n                    <!-- [maxDate]=\"sysPushEndDate\" -->\r\n                    <p-calendar [(ngModel)]=\"batchCreditBean.acDateBegin\" [maxDate]=\"batchCreditBean.acDateEnd\"  [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-2 padding-zero txt-center\">至</div>\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <!-- (onSelect)=\"sysPushEndDateClick()\" (onBlur)=\"sysPushEndDateClick()\" -->\r\n                    <!-- [minDate]=\"sysPushStartDate\" -->\r\n                    <p-calendar [(ngModel)]=\"batchCreditBean.acDateEnd\" [minDate]=\"batchCreditBean.acDateBegin\"  [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                        yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">机构码：</div>\r\n            <div class=\"ui-g-3 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"batchCreditBean.productName\">\r\n                <div (click)=\"proName()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">客户号：</div>\r\n            <div class=\"ui-g-3 queryinputbtn\">\r\n                <input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"overdueQueryBean.custNo\" />\r\n                <div (click)=\"dialog.showDialog()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">客户名称：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"overdueQueryBean.custName\">\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">推送日期：</div>\r\n            <div class=\"ui-g-3 calendar_inline\">\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-calendar [(ngModel)]=\"sysPushStartDate\" [maxDate]=\"sysPushEndDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"sysPushStartDateClick()\"\r\n                        (onBlur)=\"sysPushStartDateClick()\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-2 padding-zero txt-center\">至</div>\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-calendar [(ngModel)]=\"sysPushEndDate\" [minDate]=\"sysPushStartDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"sysPushEndDateClick()\"\r\n                        (onBlur)=\"sysPushEndDateClick()\"></p-calendar>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">处理日期：</div>\r\n            <div class=\"ui-g-3 calendar_inline\">\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-calendar [(ngModel)]=\"taskAcceptStartDate\" [maxDate]=\"taskAcceptEndDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"taskFinishBeginDateClick()\"\r\n                        (onBlur)=\"taskFinishBeginDateClick()\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-2 padding-zero txt-center\">至</div>\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-calendar [(ngModel)]=\"taskAcceptEndDate\" [minDate]=\"taskAcceptStartDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"taskFinishEndDateClick()\"\r\n                        (onBlur)=\"taskFinishEndDateClick()\"></p-calendar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">任务状态：</div>\r\n            <div class=\"ui-g-3\">\r\n                <p-dropdown [options]=\"caseStatus\" [(ngModel)]=\"overdueQueryBean.caseStatus\" placeholder=\"请选择\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">内部成因：</div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-dropdown [options]=\"innerHelper.optionsList[0].first\" [(ngModel)]=\"overdueQueryBean.inRiskReason.inFirstClass\" (onChange)=\"change($event, 2)\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 padding-zero\">&nbsp;</div>\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-dropdown [options]=\"innerHelper.optionsList[0].second\" [(ngModel)]=\"overdueQueryBean.inRiskReason.inSecondClass\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">外部成因：</div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-dropdown [options]=\"outterHelper.optionsList[0].first\" [(ngModel)]=\"overdueQueryBean.outRiskReason.outFirstClass\" (onChange)=\"change($event, 1)\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 padding-zero\">&nbsp;</div>\r\n                <div class=\"ui-g-5 padding-zero\">\r\n                    <p-dropdown [options]=\"outterHelper.optionsList[0].second\" [(ngModel)]=\"overdueQueryBean.outRiskReason.outSecondClass\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div style=\"padding-left:0px\" class=\"ui-g-1 tit\">任务经办人：</div>\r\n            <div class=\"ui-g-3 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"agentWorkName\">\r\n                <div (click)=\"agent()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">认定等级：</div>\r\n            <div class=\"ui-g-3\">\r\n                <p-dropdown [options]=\"dutyAffirmLevel\" placeholder=\"请选择\" [(ngModel)]=\"overdueQueryBean.dutyAffirmLevel\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 tit\">十级分类：</div>\r\n            <div class=\"ui-g-3 mutiSelect\">\r\n                <p-multiSelect [options]=\"code['tenLevelClass']\" [(ngModel)]=\"tenLevelClass.tenLevelClassList\" defaultLabel=\"请选择（可多选）\" maxSelectedLabels=10\r\n                    [panelStyle]=\"{minWidth:'12em'}\"></p-multiSelect>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n\r\n            <div class=\"ui-g-1 tit\">贷款金额：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"overdueQueryBean.loanAmount\">\r\n            </div>\r\n\r\n            <div class=\"ui-g-1 tit\">贷款余额：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"overdueQueryBean.loanBalance\">\r\n            </div>\r\n\r\n            <div class=\"ui-g-1 tit\">逾期天数：</div>\r\n            <div class=\"ui-g-3\">\r\n                <input pInputText [(ngModel)]=\"overdueQueryBean.overdueDays\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">分行追踪部门：</div>\r\n            <div class=\"ui-g-3 mutiSelect\">\r\n                <p-multiSelect [options]=\"branchTrackDeartmentType\" maxSelectedLabels=10 [(ngModel)]=\"overdueQueryBean.branchTrackDeartment\"\r\n                    defaultLabel=\"请选择（可多选)\" [panelStyle]=\"{minWidth:'12em'}\"></p-multiSelect>\r\n            </div>\r\n\r\n        </div>\r\n    </div> -->\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"center\">\r\n                <button label=\"查询\" pButton class=\"iscolor\" (click)=\"querySecle()\"></button>\r\n                <button label=\"返回\" pButton class=\"iscolor\" (click)=\"returnReset()\"></button>\r\n                <button label=\"重置\" pButton class=\"iscolor\" (click)=\"queryReset()\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <!-- <div class=\"addRight\">\r\n                <button pButton type=\"button\" label=\"新增\" (click)=\"addBatch()\"></button>\r\n    \r\n            </div> -->\r\n            <p-dataTable [value]=\"tableList\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n                <p-column header=\"客群编号\" field=\"groupId\"></p-column>\r\n                <p-column header=\"客群名称\" field=\"groupName\"></p-column>\r\n                <!-- <p-column header=\"客群类型\" field=\"custNo\"></p-column> -->\r\n                <p-column header=\"客户编号\" field=\"custNo\"></p-column>\r\n                <p-column header=\"客户名称\" field=\"custName\"></p-column>\r\n                <p-column header=\"年龄\" field=\"age\"></p-column>\r\n                <p-column header=\"手机号码\" field=\"telNum\"></p-column>\r\n                <p-column header=\"信贷员建议额度(元)\" field=\"loanOfficerAdvises\"></p-column>\r\n                <p-column header=\"系统建议额度(元)\" field=\"loanSystemAdvises\"></p-column>\r\n                <p-column header=\"授信到期日\" field=\"endDate\"></p-column>\r\n                <!-- <p-column header=\"第三方评价\" field=\"threeResult\"></p-column> -->\r\n                <p-column header=\"第三方评价结果\">\r\n                    <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                        <span class=\"groupNumStyle\" (click)=\"toThreeView(col)\" style=\"cursor:pointer;\">第三方评价</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <!-- <p-column field=\"statusId\" header=\"状态\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{col.statusId | codeValuePie:statusId}}</span>\r\n                    </ng-template>\r\n                </p-column> -->\r\n                <p-column header=\"状态\" field=\"state\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{col.state | codeValuePie:caseStatus}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <!-- <p-column header=\"经办日期\" field=\"acDate\"></p-column> -->\r\n                <p-column header=\"操作\" field=\"\" [style]=\"{'width':'150px'}\">\r\n                    <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <span *ngIf=\"item.state == '0' || item.state == '1' || item.state == '2'\" (click)='toUpdate(item)' class=\"tabelUpdateIco\">失效</span>\r\n                        <span (click)='toApprove(item)' class=\"tableApprove\">查看</span>\r\n                        <span *ngIf=\"item.state == '1'\" (click)='toTranslate(item)' class=\"tableApprove\">个人转授信</span>\r\n\r\n\r\n                        <!-- <span (click)='toDoCheckIn(item)' class=\"tableApprove\" *ngIf=\"item.checkInFlag =='C2'\">检出</span> -->\r\n                        <!-- <span (click)='toDoExam(item)' class=\"tableApprove\" *ngIf=\"whFlag == '2'\">查看</span> -->\r\n                        <!-- <span class=\"tabelDetailIco\" (click)=\"viewProcessSchedule(item)\">流程图</span> -->\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <p-paginator [first]=\"first\" rows=\"{{batchCreditBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n    <!--选择机构-->\r\n    <p-dialog *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n        <p-header>\r\n            机构树\r\n        </p-header>\r\n        <!-- [inValue]=\"inValue_data\" -->\r\n        <org-tree-component [inValue]=\"orgInValue\" (outValue)=\"contacttreeCall($event)\"></org-tree-component>\r\n    </p-dialog>\r\n    <!-- 员工 -->\r\n    <p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"my-cust-overf\">\r\n        <p-header>员工列表</p-header>\r\n        <queryUser [in-value]=\"queryUserInValue\" (outValue)=\"workerCall($event)\"></queryUser>\r\n        <!-- <app-query-user-list *ngIf=\"personPage\" [in-value]=\"0000\" (outValue)=\"perInfor($event)\"></app-query-user-list> -->\r\n    </p-dialog>\r\n    <!-- 提示信息 -->\r\n    <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n  批量预授信\r\n*/\n.overdue_query .tit {\n  text-align: right;\n  line-height: 24px; }\n.overdue_query .calendar_inline {\n  display: flex;\n  align-items: center; }\n.overdue_query .queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n.overdue_query .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n.overdue_query .queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n.overdue_query .table_list .iconBtn {\n  width: 100%;\n  display: flex;\n  justify-content: space-between; }\n.overdue_query .table_list .iconBtn .iscolor {\n    background: #ffc900;\n    float: right;\n    margin-top: 3px; }\n.overdue_query .table_list .iconBtn .iscolor:hover {\n      background: #ffc900; }\n.overdue_query .table_list .table {\n  text-align: center; }\n.overdue_query .groupNumStyle {\n  color: #19b0c8; }\n.groupNumStyle {\n  color: #19b0c8; }\n@media screen and (max-width: 1024px) {\n  :host/deep/ .ui-calendar {\n    min-width: 93px;\n    width: 44%; } }\n@media screen and (min-width: 1025px) {\n  :host/deep/ .ui-calendar {\n    min-width: 90px; } }\n@media screen and (min-width: 1025px) {\n  :host/deep/ .ui-dropdown {\n    min-width: 90px; } }\n.pull-right {\n  float: right !important; }\n.center {\n  text-align: center; }\n.p-right {\n  right: 0;\n  margin-left: 95%; }\n.padding-zero {\n  padding: 0; }\n.wid-13percent {\n  width: 13%; }\n.sp-link {\n  cursor: pointer; }\n.txt-center {\n  text-align: center; }\n:host/deep/ .mutiSelect p-multiselect > div {\n  border: 1px solid #bfbfbf;\n  width: 100%;\n  height: 25px;\n  border-radius: 3px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtYmF0Y2gtY3JlZGl0L2JhdGNoLWN1c3RvbS1oaXN0b3J5L2JhdGNoLWN1c3RvbS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9ncm91cC1iYXRjaC1jcmVkaXQvYmF0Y2gtY3VzdG9tLWhpc3RvcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGdyb3VwLWJhdGNoLWNyZWRpdFxcYmF0Y2gtY3VzdG9tLWhpc3RvcnlcXGJhdGNoLWN1c3RvbS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Q0RHQztBQ0FEO0VBRVEsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBSHpCO0VBTVEsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0FBUDNCO0VBVVEsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFackI7SUFjWSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTtBQWpCdEM7SUFvQlksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7QUF0QjNCO0VBMkJZLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7QUE3QjFDO0lBK0JnQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWUsRUFBQTtBQWpDL0I7TUFtQ29CLG1CQUFtQixFQUFBO0FBbkN2QztFQXdDWSxrQkFBa0IsRUFBQTtBQXhDOUI7RUE0Q1EsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0s7SUFDRyxlQUFlO0lBQ2YsVUFBVSxFQUFBLEVBQ2I7QUFHTDtFQUNLO0lBRUcsZUFBZSxFQUFBLEVBQ2xCO0FBR0w7RUFDSztJQUNHLGVBQWUsRUFBQSxFQUNsQjtBQUdMO0VBQ0ksdUJBQXVCLEVBQUE7QUFHM0I7RUFFSSxrQkFBa0IsRUFBQTtBQUt0QjtFQUNJLFFBQVE7RUFDUixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFVBQVUsRUFBQTtBQUdkO0VBQ0ksVUFBVSxFQUFBO0FBR2Q7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtYmF0Y2gtY3JlZGl0L2JhdGNoLWN1c3RvbS1oaXN0b3J5L2JhdGNoLWN1c3RvbS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcclxuICDmibnph4/pooTmjojkv6FcclxuKi9cbi5vdmVyZHVlX3F1ZXJ5IC50aXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cblxuLm92ZXJkdWVfcXVlcnkgLmNhbGVuZGFyX2lubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLm92ZXJkdWVfcXVlcnkgLnF1ZXJ5aW5wdXRidG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm92ZXJkdWVfcXVlcnkgLnF1ZXJ5aW5wdXRidG4gLnF1ZXJ5aW5wdXRPcmcge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7IH1cbiAgLm92ZXJkdWVfcXVlcnkgLnF1ZXJ5aW5wdXRidG4gLmNsaWNrc3BhbiB7XG4gICAgd2lkdGg6IDE0JTtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5vdmVyZHVlX3F1ZXJ5IC50YWJsZV9saXN0IC5pY29uQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAub3ZlcmR1ZV9xdWVyeSAudGFibGVfbGlzdCAuaWNvbkJ0biAuaXNjb2xvciB7XG4gICAgYmFja2dyb3VuZDogI2ZmYzkwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogM3B4OyB9XG4gICAgLm92ZXJkdWVfcXVlcnkgLnRhYmxlX2xpc3QgLmljb25CdG4gLmlzY29sb3I6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmYzkwMDsgfVxuXG4ub3ZlcmR1ZV9xdWVyeSAudGFibGVfbGlzdCAudGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm92ZXJkdWVfcXVlcnkgLmdyb3VwTnVtU3R5bGUge1xuICBjb2xvcjogIzE5YjBjODsgfVxuXG4uZ3JvdXBOdW1TdHlsZSB7XG4gIGNvbG9yOiAjMTliMGM4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xuICAgIG1pbi13aWR0aDogOTNweDtcbiAgICB3aWR0aDogNDQlOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XG4gICAgbWluLXdpZHRoOiA5MHB4OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIDpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XG4gICAgbWluLXdpZHRoOiA5MHB4OyB9IH1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgfVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5wLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA5NSU7IH1cblxuLnBhZGRpbmctemVybyB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLndpZC0xM3BlcmNlbnQge1xuICB3aWR0aDogMTMlOyB9XG5cbi5zcC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi50eHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbjpob3N0L2RlZXAvIC5tdXRpU2VsZWN0IHAtbXVsdGlzZWxlY3QgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiIsIi8qXHJcbiAg5om56YeP6aKE5o6I5L+hXHJcbiovXHJcbi5vdmVyZHVlX3F1ZXJ5IHtcclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGFyX2lubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYmxlX2xpc3Qge1xyXG4gICAgICAgIC5pY29uQnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLmlzY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYzkwMDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ncm91cE51bVN0eWxlIHtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxufVxyXG5cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ0JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIC8vICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICAvLyB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnAtcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xyXG59XHJcblxyXG4ucGFkZGluZy16ZXJvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi53aWQtMTNwZXJjZW50IHtcclxuICAgIHdpZHRoOiAxMyU7XHJcbn1cclxuXHJcbi5zcC1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnR4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXV0aVNlbGVjdCBwLW11bHRpc2VsZWN0PmRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BatchCustomHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchCustomHistory", function() { return BatchCustomHistory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/approvedItems.bean */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/bean/approvedItems.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  批量预授信
*/






// import { BacklogDetailBean } from '../../../bean/backlog-detail.bean';
// import { CusOperationHttpService } from '../../../../../http/custom-operation/custom-operation.http.service';







// import { HttpService } from 'app/@uisftech/common/service/http.service';

var BatchCustomHistory = /** @class */ (function () {
    function BatchCustomHistory(customeHttpService, httpService, commfunc, router, activatedRouter, confirmationService, creditCcmService, processInstanceManagementService, decimalPipe) {
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.decimalPipe = decimalPipe;
        this.approvedItemsBean = new _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__["ApprovedItemsBean"]();
        this.batchCreditBean = new _bean_approvedItems_bean__WEBPACK_IMPORTED_MODULE_6__["BatchCreditBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        // scheduleTypeId3: any = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.itemsSmallType = [];
        this.msgs = [];
        this.first = 0;
        this.tableList = [];
        this.approveParams = [];
        this.tableTitleList = [];
        this.queryList = [];
        this.orgTreeDisplay = false; //机构弹出框
        this.personPage = false; //员工弹出框
        this.creditApproveDisplay = false;
        this.stopFlag = true;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.selectProductDisplay = false; //客户信息弹出框
        this.groupTypes = []; //客群类型
        this.isBank = true;
        this.isOper = true;
        this.codeValues();
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // if (this.user.userId) {
        // 	this.userId = this.user.userId;
        // }
    }
    BatchCustomHistory.prototype.ngOnInit = function () {
        this.reset();
        var controlRight = this.filteTabs();
        this.controlRights(controlRight);
        // this.caseStatus = [
        // 	// { label: '未申请', value: '0' },
        // 	{ label: '转授信待办', value: '1' },
        // 	// { label: '预授信否决', value: '2' },
        // 	{ label: '已发起', value: '3' },
        // 	{ label: '已通过', value: '4' },
        // 	{ label: '转授信否决', value: '5' },
        // 	{ label: '失效', value: '6' },
        // 	// { label: '撤销', value: '7' },
        // ]
        // this.groupId = this.activatedRouter.snapshot.params['groupId'];// 客户群号
        this.getBasic();
        this.queryBatchCreditList();
        this.codeValues();
        console.log(this.activatedRouter);
        this.groupName = this.activatedRouter.snapshot.params['groupName']; // 客户群名称
        this.groupType = this.activatedRouter.snapshot.params['groupType']; // 客户群类型
        // this.batchCreditBean.groupId = this.groupId;
        // 查询权限控制
    };
    // 权限控制
    BatchCustomHistory.prototype.controlRights = function (right) {
        console.log("Ads");
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var operName = chName.userName;
        var operId = this.commonHeader.userId;
        var bankId = this.commonHeader.orgId;
        var bankName = chName.orgName;
        switch (right) {
            case 2:
                {
                    // 客户经理
                    this.batchCreditBean.bankId = bankId; //经办人ID
                    this.batchCreditBean.bankName = bankName; //经办人名称
                    this.batchCreditBean.operId = operId; //经办人ID
                    this.batchCreditBean.operName = operName; //经办人名称
                    this.isBank = false;
                    this.isOper = false;
                }
                break;
            case 3:
                {
                    this.batchCreditBean.bankId = bankId; //经办人ID
                    this.batchCreditBean.bankName = bankName; //经办人名称
                    // this.batchCreditBean.operId = null//经办人ID
                    // this.batchCreditBean.operName = null//经办人名称
                    this.queryUserInValue = bankId;
                    this.orgInValue = 'take';
                    this.isBank = true;
                    this.isOper = true;
                }
                break;
            case 4:
                {
                    this.batchCreditBean.bankId = bankId; //经办人ID
                    this.batchCreditBean.bankName = bankName; //经办人名称
                    // this.batchCreditBean.operId = null//经办人ID
                    // this.batchCreditBean.operName = null//经办人名称
                    this.queryUserInValue = bankId;
                    this.orgInValue = 'take';
                    this.isBank = true;
                    this.isOper = true;
                }
                break;
            case 5:
                {
                    // this.batchCreditBean.bankId = bankId//经办人ID
                    // this.batchCreditBean.bankName = bankName//经办人名称
                    // this.batchCreditBean.operId = operId//经办人ID
                    // this.batchCreditBean.operName = operName//经办人名称
                    this.orgInValue = 'T0000';
                    this.isBank = true;
                    this.isOper = true;
                }
                break;
            default: {
                // this.batchCreditBean.bankId = bankId//经办人ID
                // this.batchCreditBean.bankName = bankName//经办人名称
                // this.batchCreditBean.operId = operId//经办人ID
                // this.batchCreditBean.operName = operName//经办人名称
                this.orgInValue = 'T0000';
                this.isBank = true;
                this.isOper = true;
            }
        }
    };
    // 基础值
    BatchCustomHistory.prototype.getBasic = function () {
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // 默认赋值，如果有，会被覆盖
        // this.batchCreditBean.operName = chName.userName;
        // this.batchCreditBean.operId = this.commonHeader.userId;
        // this.batchCreditBean.bankId = this.commonHeader.orgId;
        // this.batchCreditBean.bankName = chName.orgName;
    };
    // 获取码值
    BatchCustomHistory.prototype.codeValues = function () {
        // this.commfunc.codeValue();
        // let ret = this.commfunc.codeDatas;
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        this.guaranteeModeOptions = codeValues['guaranteeModeTransform']; // 担保方
        this.groupTypes = codeValues['GroupTypeSave'];
        this.caseStatus = codeValues['batchCaseStatusTwo'];
    };
    // 重置
    BatchCustomHistory.prototype.reset = function () {
        this.batchCreditBean.custNo = null;
        this.batchCreditBean.custName = null;
        // this.batchCreditBean.operId = null;
        // this.batchCreditBean.operName = null;
        // this.batchCreditBean.bankId = null;
        // this.batchCreditBean.bankName = null;
        this.batchCreditBean.acDateBegin = null;
        this.batchCreditBean.acDateEnd = null;
        this.batchCreditBean.pageNum = 1;
        this.batchCreditBean.pageSize = 10;
        this.first = 0;
    };
    // 重置
    BatchCustomHistory.prototype.queryReset = function () {
        this.batchCreditBean.groupId = null;
        this.batchCreditBean.groupName = null;
        this.batchCreditBean.groupType = null;
        this.batchCreditBean.custNo = null;
        this.batchCreditBean.custName = null;
        this.batchCreditBean.state = null;
        // this.batchCreditBean.bankName = null;
        // this.batchCreditBean.operName = null;
        this.batchCreditBean.acDateBegin = null;
        this.batchCreditBean.acDateEnd = null;
        this.batchCreditBean.pageNum = 1;
        this.batchCreditBean.pageSize = 10;
        this.first = 0;
    };
    BatchCustomHistory.prototype.querySecle = function () {
        this.batchCreditBean.pageNum = 1;
        this.batchCreditBean.pageSize = 10;
        this.first = 0;
        this.queryBatchCreditList();
    };
    // 批量预授信列表查询
    BatchCustomHistory.prototype.queryBatchCreditList = function () {
        var _this = this;
        // this.batchCreditBean.acDateBegin = this.commfunc.transDateN(this.batchCreditBean.acDateBegin);
        // this.batchCreditBean.acDateEnd = this.commfunc.transDateN(this.batchCreditBean.acDateEnd);
        // let param = this.batchCreditBean;
        var param = {
            groupId: this.batchCreditBean.groupId,
            groupName: this.batchCreditBean.groupName,
            groupType: this.batchCreditBean.groupType,
            custNo: this.batchCreditBean.custNo,
            custName: this.batchCreditBean.custName,
            state: this.batchCreditBean.state,
            bankId: this.batchCreditBean.bankId,
            bankName: this.batchCreditBean.bankName,
            // bankName: this.batchCreditBean.bankName,
            operName: this.batchCreditBean.operName,
            operId: this.batchCreditBean.operId,
            acDateBegin: this.commfunc.transDateN(this.batchCreditBean.acDateBegin),
            acDateEnd: this.commfunc.transDateN(this.batchCreditBean.acDateEnd),
            operType: "3",
            pageNum: this.batchCreditBean.pageNum,
            pageSize: this.batchCreditBean.pageSize,
            first: this.first,
        };
        // delete param.acDateBegin;
        // delete param
        // param['acDateBegin'] = this.commfunc.transDateN(this.batchCreditBean.acDateBegin);
        // this.batchCreditBean.operType = "3";
        // this.batchCreditBean.groupId = this.groupId;
        this.httpService.queryBatchPreCreditDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableList = data.resultList;
                _this.total = data.total;
                _this.tableList.forEach(function (element) {
                    element.loanOfficerAdvises = _this.transMony(element.loanOfficerAdvises * 10000);
                    element.loanSystemAdvises = _this.transMony(element.loanSystemAdvises * 10000);
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
    // 金额格式转换
    BatchCustomHistory.prototype.transMony = function (param) {
        var result = "";
        if (param) {
            result = this.commfunc.transform(param) + '';
        }
        result = this.decimalPipe.transform(param, '1.2-2'); //申请金额
        return result;
    };
    // 分页
    BatchCustomHistory.prototype.paginate = function (event) {
        this.batchCreditBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.batchCreditBean.pageNum = currentPage;
        this.first = event.page * this.batchCreditBean.pageSize;
        this.queryBatchCreditList();
    };
    //页面信息查询
    BatchCustomHistory.prototype.queryViewRelations = function (resolve, notApply) {
        var _this = this;
        var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
        var params = {
            businessType: "17",
            roleId: post_name,
            viewIndex: 1,
            viewSize: 100,
        };
        console.log(params);
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.list.length > 0) {
                    var viewId_1 = [];
                    data.list.forEach(function (e) {
                        // if (e.viewName.match('卡要素')) {
                        viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                        // }
                    });
                    _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                    _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17", notApply: notApply })]);
                }
                else {
                    _this.msgs = [{ severity: 'info', summary: '错误', detail: '岗位未关联页面,请配置关联页面' }];
                }
                // let param = ""
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 个人转授信
    BatchCustomHistory.prototype.toTranslate = function (data) {
        var _this = this;
        var params = {
            batchId: data.batchId,
            serialNo: data.serialNo
        };
        this.httpService.batchPreCreditSubmissionLetter(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.reset();
                _this.queryBatchCreditList();
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 删除
    BatchCustomHistory.prototype.toDeletes = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除?',
            accept: function () {
                _this.toDelete(item);
                // let param = {
                // 	userId: this.userId,
                // 	taskId: item.taskId,
                // 	tranType: 'A0',
                // 	doResion: '4',
                // }
                // this.customeHttpService.bpmUserTaskManage(param).subscribe(data => {
                // 	if (data.returnCode.code == 'success') {
                // 		this.msgs = [];
                // 		this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                // 		// this.doUp();
                // 	} else {
                // 		this.msgs = [];
                // 		this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                // 	}
                // }, error => {
                // 	this.msgs = [];
                // 	this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                // })
            }
        });
    };
    // 关闭审批详情
    BatchCustomHistory.prototype.closeFirtproc = function () {
        this.nowTaskId = undefined;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
    };
    // 审批详情弹框回调方法
    BatchCustomHistory.prototype.creditApproveCall = function () {
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.creditApproveDisplay = false;
    };
    // 失效
    BatchCustomHistory.prototype.toUpdate = function (item) {
        var _this = this;
        var params = {
            operType: '1',
            serialNo: item.serialNo,
            state: "6"
        };
        this.httpService.vetoBatchPreCreditDetailInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.reset();
                _this.queryBatchCreditList();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 查看
    BatchCustomHistory.prototype.toApprove = function (item) {
        console.log("asda");
        // this.router.navigate(['/pages/tzb/custom/custom-group/batch-cust-query', { groupId: this.groupId, groupName: this.groupName, groupType: this.custGroupInfoBean.groupType }]);
        this.router.navigate(['/pages/tzb/custom/custom-group/batch-cust-detail', { serialNo: item.serialNo }]);
        // this.queryBatch(item, "3", "1");
    };
    // 第三方评价结果
    BatchCustomHistory.prototype.toThreeView = function (col) {
        // this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate', { groupId: col.groupId, groupName: col.groupName }]);
        this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate', { yushouxin: '1', groupId: col.groupId, custNo: col.custNo, doorId: null, custGroupView: 1, pageNum: 1, groupName: col.groupName }]);
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view/group-evaluator', { groupId: col.groupId }])
    };
    // 查询
    BatchCustomHistory.prototype.queryBatch = function (item, self, notApply) {
        var _this = this;
        var batchDetail = new Promise(function (resolve) {
            _this.queryBatchDetail(item, resolve);
        });
        var batchGroup = new Promise(function (resolve) {
            _this.queryGroupInfo(item, resolve);
        });
        Promise.all([batchDetail, batchGroup]).then(function (res) {
            var datas = {
                detailData: res[0]["detailDtas"],
                groupData: res[1]["groupDtas"],
                self: self
            };
            console.log(datas);
            _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
            _this.queryViewRelations(item, notApply);
        });
    };
    // 查询详细信息
    BatchCustomHistory.prototype.queryBatchDetail = function (item, resolve) {
        var _this = this;
        var params = {
            batchId: item.batchId
        };
        this.httpService.queryBatchPreCreditInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var datas = {
                    batchId: data.batchId,
                    operType: data.operType,
                    state: data.state,
                    groupId: data.groupId,
                    groupName: data.groupName,
                    productId: data.productId,
                    productName: data.productName,
                    guaranteeType: data.guaranteeType,
                    contractType: data.contractType,
                    endDate: data.endDate,
                    rateKind: data.rateKind,
                    returnKind: data.returnKind,
                    note: data.note,
                    operId: data.operId,
                    operName: data.operName,
                    bankId: data.bankId,
                    bankName: data.bankName,
                    acDate: data.acDate,
                    Permissioncontrol: data.permissionControler
                };
                resolve({
                    detailDtas: datas
                });
                // this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas))
                // this.queryViewRelations(item);
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 客户群信息查询queryCustGroupInfo
    BatchCustomHistory.prototype.queryGroupInfo = function (item, resolve) {
        var _this = this;
        var params = {
            "permissionFlag": "1",
            "advanceInput": "0",
            "groupType": "0",
            "pageNum": 1,
            "pageSize": 10,
            "conditionList": [
                [
                    {
                        "field": "group_id",
                        "operator": "=",
                        "value": item.groupId
                    }
                ]
            ],
        };
        this.httpService.queryCustGroupInfo(params).subscribe(function (result) {
            if (result.returnCode.code == 'success') {
                var data = result.resultList[0] || {};
                console.log("oop");
                var datas = {
                    cust_num: data.open_num || null,
                    valid_cust_num: data.valid_cust_num || null,
                    valid_cov_rate: data.valid_ratio || null,
                    crdt_cust_num: data.CRDT_CUST_NUM || null,
                    pre_crdt_amt: data.pre_credit_limit || null,
                    // crdt_cust_num:data.cust_num || null,//已授信客户数
                    pre_crdt_cust_num: data.PRE_CRDT_CUST_NUM,
                    crdt_amt: data.CRDT_AMT || null,
                    crdt_bal: data.CRDT_BAL || null,
                    loan_cust_num: data.LOAN_CUST_NUM || null,
                    // crdt_amt:data.cust_num || null,//已用信额度总和
                    CRDT_AMT_USED: data.CRDT_AMT_USED,
                    GROUP_ID: data.group_id || null,
                    GROUP_NAME: data.group_name || null,
                    GROUP_TYPE: data.group_type || null,
                    GROUP_OWNER_NAME: data.group_owner || null,
                    GROUP_LINKMANNAME: data.group_of_contacts || null,
                    GROUP_LINKMANID: data.group_of_contacts_id || null,
                    ORG_NAME: data.org_id || null,
                    ADDRESS: data.address_message || null,
                    PRODUCT_CODE: data.featured_products || null,
                    INT: data.INT || null,
                    GROUP_OWNER_ID: data.group_owner || null,
                    ORG_ID: data.create_org_id || null,
                    subGroupType: data.subGroupType || null //所属区域
                };
                resolve({
                    groupDtas: datas
                });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 增加
    BatchCustomHistory.prototype.addBatch = function () {
        var _this = this;
        var params = {
            operType: "1",
            groupId: this.groupId,
            groupName: this.groupName,
            groupType: this.groupType,
        };
        this.httpService.addBatchPreCredit(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.queryBatchCreditList();
                _this.queryBatch({ groupId: _this.groupId, batchId: data.batchId }, "1", "2");
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
        // this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17" })]);
    };
    // 删除
    BatchCustomHistory.prototype.toDelete = function (item) {
        var _this = this;
        var params = {
            operationType: '2',
            batchId: item.batchId,
            groupId: item.groupId
        };
        this.httpService.deleteBatchPreCredit(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchCreditBean.pageNum = 1;
                _this.batchCreditBean.pageSize = 10;
                _this.first = 0;
                _this.queryBatchCreditList();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 选择产品
    BatchCustomHistory.prototype.choosePro = function () {
        this.selectProductDisplay = true;
    };
    // 关闭模态框
    BatchCustomHistory.prototype.closeSetting1 = function () {
        this.selectProductDisplay = false;
    };
    // 选择产品回调
    BatchCustomHistory.prototype.productCall = function (event) {
        console.log(event);
        // this.batchCreditBean.productId = event[0].productId;
        // this.batchCreditBean.productName = event[0].productName;
        this.selectProductDisplay = false;
    };
    // 返回
    BatchCustomHistory.prototype.returnReset = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-group']);
        // window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a);
        // window.history.back();
        //  console.log('返回')
    };
    // 选择机构
    BatchCustomHistory.prototype.chooseOperName = function () {
        if (!this.isOper) {
            return;
        }
        this.personPage = true;
    };
    // 选择机构回调
    BatchCustomHistory.prototype.contacttreeCall = function (event) {
        console.log(event);
        this.batchCreditBean.bankId = event.orgId; //经办人ID
        this.batchCreditBean.bankName = event.orgName; //经办人名称
        this.orgTreeDisplay = false;
    };
    // 选择员工
    BatchCustomHistory.prototype.chooseBankName = function () {
        if (!this.isBank) {
            return;
        }
        this.orgTreeDisplay = true;
    };
    // 选则员工回掉
    BatchCustomHistory.prototype.workerCall = function (event) {
        console.log(event);
        this.batchCreditBean.operId = event[0].tellerId; //经办人ID
        this.batchCreditBean.operName = event[0].tellerName; //经办人名称
        // this.batchCreditBean.bankId = event[0].departmentId//经办人ID
        // this.batchCreditBean.bankName = event[0].tellerName//经办人名称
        this.personPage = false;
        // this.orgTreeDisplay = false;
    };
    // 关闭员工弹出框
    BatchCustomHistory.prototype.onHideClose = function () {
        this.orgTreeDisplay = false;
    };
    // 判断当前人员层级
    BatchCustomHistory.prototype.filteTabs = function () {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var isCustomerMan = commonHeader.extParam.managePermission == 'N';
        var logLevel = 0;
        if (isCustomerMan) {
            logLevel = 2;
        }
        else {
            logLevel = this.loginLevel(commonHeader.extParam.operatingLevel);
        }
        this.operatingLevel = logLevel;
        return this.operatingLevel;
        // this.filter(logLevel);
    };
    BatchCustomHistory.prototype.loginLevel = function (type) {
        var ret = 0; // 索引，对应 this.tabsRouterInfo 成员中的index
        switch (type) {
            // 支行
            case 'TEAM':
            case 'DISTRICT':
            case 'SUB_BRANCH':
            case 'DISTRICT_DT':
            case 'SUB_BRANCH_DT':
                ret = 3;
                break;
            // 分行
            case 'BRANCH':
            case 'BRANCH_DT':
                ret = 4;
                break;
            // 总行
            case 'GROUP':
            case 'GENERAL_BANK':
            case 'GENERAL_BANK_DT':
                ret = 5;
                break;
        }
        return ret;
    };
    BatchCustomHistory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch-custom-history',
            template: __webpack_require__(/*! ./batch-custom-history.component.html */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.html"),
            styles: [__webpack_require__(/*! ./batch-custom-history.component.scss */ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/batch-custom-history.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__["CreditCcmService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__["ProcessInstanceManagementService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_11__["MessageService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_8__["CreditCcmService"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_9__["ProcessInstanceManagementService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]])
    ], BatchCustomHistory);
    return BatchCustomHistory;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/bean/approvedItems.bean.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-batch-credit/batch-custom-history/bean/approvedItems.bean.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ApprovedItemsBean, BatchCreditBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedItemsBean", function() { return ApprovedItemsBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchCreditBean", function() { return BatchCreditBean; });
/*
  批量预授信
*/
var ApprovedItemsBean = /** @class */ (function () {
    function ApprovedItemsBean() {
    }
    return ApprovedItemsBean;
}());

var BatchCreditBean = /** @class */ (function () {
    function BatchCreditBean() {
        this.acDateBegin = null; //经办日期(开始)
        this.acDateEnd = null; //经办日期(结束)
    }
    return BatchCreditBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module content\">\r\n    <div class=\"ui-g-12\" style=\"height:400px;\">\r\n        <div class=\"ui-g-12\">\r\n            <label>短信模板Id（待修改）：</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"messageModelVal\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <hr>\r\n    </div>\r\n    <div class=\"ui-g-12 centerAlign\">\r\n        <!-- <button pButton type=\"button\" pButton label=\"群短信发送\" (click)=\"sendMessage()\"></button> -->\r\n        <button pButton type=\"button\" pButton label=\"返回客户群视图\" (click)=\"returnCustomView()\"></button>\r\n    </div>\r\n</div>\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 短信发生模态框 -->\r\n<p-dialog [(visible)]=\"SendMessageDisplay\" (onHide)=\"onHid()\" styleClass=\"motail\" width=\"1500\" height=\"800\" modal=\"modal\">\r\n    <app-note-model (outValue)=\"returnValue($event)\"></app-note-model>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-bottom: 100px; }\n  .content .centerAlign {\n    text-align: center; }\n  .motail {\n  min-height: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtbWVzc2FnZS1zZW5kL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxncm91cC1tZXNzYWdlLXNlbmRcXGdyb3VwLW1lc3NhZ2Utc2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQUFBO0VBRHhCO0lBR1Esa0JBQWtCLEVBQUE7RUFHMUI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2dyb3VwLW1lc3NhZ2Utc2VuZC9ncm91cC1tZXNzYWdlLXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwMHB4O1xyXG4gICAgLmNlbnRlckFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9IFxyXG59XHJcbi5tb3RhaWwge1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: GroupMessageSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMessageSendComponent", function() { return GroupMessageSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupMessageSendComponent = /** @class */ (function () {
    function GroupMessageSendComponent(routerInfo, router, confirmationService) {
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        // 控件
        this.msgs = [];
        // 链接传参
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        // 中间量
        this.messageModelVal = '';
        // 模态框
        this.SendMessageDisplay = false;
    }
    GroupMessageSendComponent.prototype.ngOnInit = function () {
        this.preSet(); //初始化
    };
    GroupMessageSendComponent.prototype.preSet = function () {
        // 初始化
        // 链接传参
        if (this.routerInfo.snapshot.params['groupId'] && this.routerInfo.snapshot.params['groupId'] != '') {
            this.groupId = this.routerInfo.snapshot.params['groupId'];
        }
        if (this.routerInfo.snapshot.params['groupName'] && this.routerInfo.snapshot.params['groupName'] != '') {
            this.groupName = this.routerInfo.snapshot.params['groupName'];
        }
    };
    GroupMessageSendComponent.prototype.sendMessage = function () {
        // 发送短信弹出模态框
        this.SendMessageDisplay = true;
    };
    GroupMessageSendComponent.prototype.returnValue = function (event) {
        this.SendMessageDisplay = event.SendMessageDisplay;
        this.messageModelVal = event.returnData.messageTempleID;
    };
    GroupMessageSendComponent.prototype.onHid = function () {
        // 关闭触发
    };
    // 其他
    GroupMessageSendComponent.prototype.returnCustomView = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '确定返回客户群视图页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName }]);
            }
        });
    };
    GroupMessageSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-message-send',
            template: __webpack_require__(/*! ./group-message-send.component.html */ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.html"),
            styles: [__webpack_require__(/*! ./group-message-send.component.scss */ "./src/app/pages/tzb/custom/custom-group/group-message-send/group-message-send.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], GroupMessageSendComponent);
    return GroupMessageSendComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/selectCustGroup.bean.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/selectCustGroup.bean.ts ***!
  \********************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12\">\r\n    <app-custom-group-query (outValue)=\"outValue($event)\"></app-custom-group-query>\r\n  </div>\r\n\r\n  <p-dialog *ngIf=\"performanceDisplay\" [(visible)]=\"performanceDisplay\" modal=\"true\" closable=\"true\">\r\n    <div class=\"ui-g-6 ui-mp-12 container-left padding-left-zero\">\r\n      <div class=\"ui-g-12 boxShadow\">\r\n        <header-title [Info]=\"title4\"></header-title>\r\n        <!-- 群存款 -->\r\n        <div class=\"ui-g-12\">\r\n          <div echarts [options]=\"option_asList\" id=\"echarts\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 ui-mp-12 container-rightA padding-right-zero\">\r\n      <div class=\"ui-g-12 boxShadow\">\r\n        <header-title [Info]=\"title6\"></header-title>\r\n        <!-- 群贷款 -->\r\n        <div class=\"ui-g-12\">\r\n          <div echarts [options]=\"option_lnList\" id=\"echarts\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <!-- msgs -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n  <tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (max-width: 1279px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n@media screen and (min-width: 1025px) {\n  .ui-ml-1,\n  .ui-ml-2,\n  .ui-ml-3,\n  .ui-ml-4,\n  .ui-ml-5,\n  .ui-ml-6,\n  .ui-ml-7,\n  .ui-ml-8,\n  .ui-ml-9,\n  .ui-ml-10,\n  .ui-ml-11,\n  .ui-ml-12 {\n    padding: .5em; }\n  .ui-ml-1 {\n    width: 8.3333%; }\n  .ui-ml-2 {\n    width: 16.6667%; }\n  .ui-ml-3 {\n    width: 25%; }\n  .ui-ml-4 {\n    width: 33.3333%; }\n  .ui-ml-5 {\n    width: 41.6667%; }\n  .ui-ml-6 {\n    width: 50%; }\n  .ui-ml-7 {\n    width: 58.3333%; }\n  .ui-ml-8 {\n    width: 66.6667%; }\n  .ui-ml-9 {\n    width: 75%; }\n  .ui-ml-10 {\n    width: 83.3333%; }\n  .ui-ml-11 {\n    width: 91.6667%; }\n  .ui-ml-12 {\n    width: 100%; } }\n.aaa {\n  position: relative;\n  /*刷新图标*/ }\n.aaa .tabelReflashIco {\n    display: inline-block;\n    background: url('refresh.png') no-repeat center;\n    background-size: 20px;\n    color: transparent;\n    cursor: pointer;\n    margin-right: 10px;\n    position: absolute;\n    width: 35px;\n    height: 23px;\n    right: 10px;\n    top: 9px;\n    font-size: 14px; }\n.aaa .tabelReflashIco:hover {\n    display: inline-block;\n    background: transparent;\n    color: #0094D2;\n    cursor: pointer;\n    font-weight: bold;\n    padding: 0px !important; }\n#linkToGroupOwnerInfo {\n  padding-bottom: 91px; }\ndl {\n  width: 95%;\n  height: 55px;\n  text-align: center;\n  padding: 0;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  margin: 0.5em 0; }\ndl dt {\n    float: left; }\ndl dd.count {\n    height: 32px;\n    font-size: 18px;\n    line-height: 38px; }\ndl dd.font {\n    font-size: 12px;\n    color: #999; }\ndl img {\n    width: 66px; }\n@media screen and (max-width: 1280px) {\n  dl {\n    height: 48px; }\n    dl img {\n      width: 56px; }\n    dl dd.count {\n      height: 27px;\n      font-size: 16px;\n      line-height: 31px; } }\nul {\n  margin: 0;\n  padding: 1em;\n  width: 100%;\n  list-style: none; }\nul li {\n    float: left;\n    width: 32.5%; }\n.btn-area {\n  text-align: right;\n  padding: 1em !important; }\n.btn-area .btn-class1 {\n    background: #f4c201; }\n.btn-area .btn-class2 {\n    background: #19b0c8; }\n.header-span {\n  float: right;\n  display: inline-block;\n  width: 60px;\n  height: 25px;\n  color: #19b0c8;\n  margin-top: -31px;\n  cursor: pointer; }\n.header-img {\n  width: 8px;\n  height: 12px;\n  margin-left: 5px; }\n.header-title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between; }\n.header-title .title-right {\n    display: flex; }\n.header-title .title-right .line {\n      width: 3px;\n      height: 22px;\n      display: inline-block;\n      background-color: #19b0c8;\n      margin-right: 13px; }\n.header-title .title-right .text {\n      flex: 1;\n      height: 20px;\n      font-size: 14px;\n      line-height: 20px;\n      display: block;\n      font-weight: bold; }\n.header-title a {\n    margin-right: 20px; }\n.btn {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n.btn button {\n    min-width: 160px; }\n.cover {\n  overflow: hidden; }\n.cover .ui-g-12,\n  .cover .ui-g-7,\n  .cover .ui-g-5 {\n    padding: 0;\n    box-sizing: border-box; }\n.cover .ui-g-12 {\n    margin: 0; }\n.cover .ui-g-7,\n  .cover .ui-g-5 {\n    margin-top: 10px; }\n.cover .ui-g-7 .ui-g-12,\n    .cover .ui-g-5 .ui-g-12 {\n      height: 100%; }\n.cover .onerow {\n    height: 250px;\n    padding: 0 5px; }\n.cover .secondrow {\n    height: 100%;\n    padding: 0 5px; }\n.cover .secondrow .total {\n      margin-left: 0 !important;\n      margin-top: 20px !important;\n      margin-bottom: 20px; }\n.grouptotal {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-size: 12px;\n  border: none !important;\n  margin-top: 7px;\n  margin-bottom: 14px;\n  margin-left: 7px; }\n.grouptotal .ui-g-3,\n  .grouptotal .ui-g-2 {\n    padding: 0;\n    text-align: center;\n    background: #F3F2F2;\n    border-bottom: 1px solid #ffffff;\n    border-left: 1px solid #ffffff;\n    padding: 15px 0 15px 0;\n    height: 55px; }\n.ui-g-12 {\n  padding: 0; }\n.btn {\n  text-align: center; }\n.btn button {\n    margin-top: 7px;\n    width: 60%; }\n.btn button:first-child {\n    margin-top: 0px; }\n:host/deep/ .ui-datatable {\n  padding: 0.5em; }\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: normal; }\n:host/deep/ #echarts > div > div:nth-child(1) {\n  padding-left: 10% !important; }\n:host/deep/ #echarts > div > div:nth-child(1) canvas {\n    width: 90% !important;\n    height: 90% !important; }\n.container {\n  overflow: hidden;\n  min-width: 1024px; }\n@media screen and (max-width: 1740px) {\n    .container {\n      font-size: 12px; }\n      .container button {\n        font-size: 12px; }\n      .container span {\n        background-size: contain; } }\n.container .container-left .huizong {\n    padding-bottom: 13px;\n    background: #fafafa;\n    display: inline-block;\n    width: 100%; }\n.container .container-left .huizong .huizong-ul {\n      margin-top: -0.5em; }\n@media screen and (max-width: 1280px) {\n    .container .container-left .huizong {\n      padding-bottom: 13px;\n      background: #fafafa;\n      display: inline-block;\n      width: 100%; }\n      .container .container-left .huizong .huizong-ul {\n        margin-top: -0.5em; } }\na,\n.img {\n  cursor: pointer; }\n.tab input {\n  border: none;\n  width: 100%; }\n.groupNumStyle {\n  color: #19b0c8; }\n.groupNumStyle:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    color: #19b0c8; }\n.container-right {\n  margin-top: -0.5em; }\n.container-right2 {\n  margin-top: 0; }\n.daiban-box {\n  height: 253px;\n  overflow: hidden; }\n@media screen and (max-width: 1280px) {\n  .daiban-box {\n    height: 221px; } }\n:host/deep/ .ui-datatable .ui-widget {\n  padding: 0.5em;\n  margin: 0;\n  padding-top: 1em; }\n:host/deep/ .ui-datatable .ui-datatable-thead > tr > th .ui-column-title {\n  padding: 0px !important;\n  height: 35px !important;\n  line-height: 35px !important; }\n:host/deep/.ui-datatable .ui-datatable-thead > tr > th {\n  padding: 0px !important; }\n:host/deep/ .ui-tabview.ui-widget {\n  padding: 0.5em !important; }\n:host/deep/ .ui-datatable .ui-datatable-thead > tr > th {\n  background-color: #d2f1ef !important;\n  height: 35px !important; }\n:host/deep/ .ui-tabview-panel.ui-widget-content {\n  padding: 1em 0.5em 0.5em; }\n:host/deep/ .ui-datatable.ui-widget {\n  padding: 0; }\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-button,\n  body .ui-datepicker-buttonpane > button {\n    height: 2.2em; } }\n.cus_chose .cont span {\n  width: 50% !important; }\n.pro_chose {\n  display: flex;\n  flex-direction: row; }\n.pro_chose .conright {\n    display: flex;\n    flex-wrap: wrap; }\n.pro_chose .conright .total {\n      display: flex;\n      flex: 1;\n      flex-direction: column; }\n.pro_chose .conright .tit {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 3px;\n      background-color: #fafafa; }\n.pro_chose .conright .tit .num {\n        width: 15%;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: 4px; }\n.pro_chose .conright .tit .cont {\n        display: flex;\n        padding: 0;\n        /* width: 87%; */\n        flex: 1; }\n.pro_chose .conright .tit span {\n        color: #0a3d54 !important;\n        width: 15%;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin-left: 4px;\n        height: 35px; }\n.pro_chose .conright .tit .w30 {\n        flex-direction: row;\n        align-items: center;\n        flex: 1; }\n.pro_chose .conright .tit .w30 input {\n          width: 40%;\n          height: 30px; }\n.pro_chose .conright .tit .w30 .until {\n          height: 21px;\n          width: 10%;\n          margin: 0 4px;\n          text-align: center; }\n.pro_chose .conright .tit .huo {\n        flex-direction: row;\n        align-items: center; }\n.pro_chose .conright .tit .huo b {\n          width: 22px;\n          height: 22px;\n          margin-left: 5%;\n          text-align: center;\n          color: #000; }\n.pro_chose .conright .tit:nth-child(2n+2) {\n      background-color: #efefef; }\n.pro_chose .conright .tit:nth-child(1) {\n      background-color: #d2f1ef; }\n.table-self {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center; }\n.text-center {\n  text-align: center; }\n.text-right {\n  text-align: right; }\n.moban-1 {\n  font-size: 21px; }\n.moban-2 {\n  position: absolute;\n  right: 36px; }\n.background-color {\n  background: #f7f7f7; }\n.templete {\n  width: 30%;\n  height: 150px;\n  margin-left: 35%;\n  margin-top: 157px; }\n.search-manage2 {\n  height: 90%; }\n.ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n.temp-right {\n  height: 400px;\n  overflow: auto; }\n.serach-c {\n  height: 433px;\n  overflow: auto; }\n.history,\n.form-control {\n  display: inline-block; }\n@media screen and (max-width: 1740px) {\n  .weihu {\n    padding-bottom: 21px !important; }\n  .blank {\n    height: 139px !important; } }\n@media screen and (max-width: 1280px) {\n  .weihu {\n    padding-bottom: 14px !important; }\n  .blank {\n    height: 132px !important; } }\n.blank {\n  height: 140px; }\n.weihu {\n  padding-bottom: 23px; }\n.weihu ul.ul {\n    width: 100%;\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n.weihu ul.ul li {\n      float: left;\n      width: 17%;\n      margin-top: 12px;\n      text-align: center; }\n.weihu dl.dl {\n    padding: 8px 0;\n    margin: 0 20px 0 15px;\n    width: 81%;\n    cursor: pointer;\n    border-radius: 5px;\n    height: 58px;\n    box-sizing: border-box; }\n.weihu dl.dl dt {\n      float: none; }\n.weihu dl.dl dd.font2 {\n      margin-left: 0; }\n.weihu .img-size-yw {\n    width: 28px; }\n.weihu .bg-blue-yw {\n    background: #d2eaed;\n    min-width: 80px; }\n.weihu .bg-green-yw {\n    background: #d5ede2; }\n.weihu .bg-yellow-yw {\n    background: #f1e9cf; }\n.weihu .bg-popul-yw {\n    background: #d3e2ed; }\n.weihu .padding-left-zero {\n    padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLWdyb3VwL215LWN1c3RvbS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktY3VzdG9tLWdyb3VwL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxteS1jdXN0b20tZ3JvdXBcXG15LWN1c3RvbS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7QUFHTDtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUNKLEVBQUE7RUFDQTtJQUNJLGNBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxXQUNKLEVBQUEsRUFBQztBQUdMO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQUEsRUFBQTtBQUZKO0lBSVEscUJBQXFCO0lBQ3JCLCtDQUFvRztJQUNwRyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixlQUFlLEVBQUE7QUFmdkI7SUFrQlEscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBQTtBQUkvQjtFQUNJLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBUG5CO0lBU1EsV0FBVyxFQUFBO0FBVG5CO0lBWVEsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtBQWR6QjtJQWlCUSxlQUFlO0lBQ2YsV0FBVyxFQUFBO0FBbEJuQjtJQXFCUSxXQUFXLEVBQUE7QUFJbkI7RUFDSTtJQUNJLFlBQVksRUFBQTtJQURoQjtNQUdRLFdBQVcsRUFBQTtJQUhuQjtNQU1RLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCLEVBQUEsRUFDcEI7QUFJVDtFQUNJLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBSnBCO0lBTVEsV0FBVztJQUNYLFlBQVksRUFBQTtBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTtBQUYzQjtJQUlRLG1CQUFtQixFQUFBO0FBSjNCO0lBT1EsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7QUFQbEM7SUFTUSxhQUFhLEVBQUE7QUFUckI7TUFXWSxVQUFVO01BQ1YsWUFBWTtNQUNaLHFCQUFxQjtNQUNyQix5QkFBeUI7TUFDekIsa0JBQWtCLEVBQUE7QUFmOUI7TUFrQlksT0FBTztNQUNQLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtBQXZCN0I7SUEyQlEsa0JBQWtCLEVBQUE7QUFJMUI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0FBSHRCO0lBS1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxnQkFBZ0IsRUFBQTtBQURwQjs7O0lBS1EsVUFBVTtJQUNWLHNCQUFzQixFQUFBO0FBTjlCO0lBU1EsU0FBUyxFQUFBO0FBVGpCOztJQWFRLGdCQUFnQixFQUFBO0FBYnhCOztNQWVZLFlBQVksRUFBQTtBQWZ4QjtJQW1CUSxhQUFhO0lBQ2IsY0FBYyxFQUFBO0FBcEJ0QjtJQXVCUSxZQUFZO0lBQ1osY0FBYyxFQUFBO0FBeEJ0QjtNQTBCWSx5QkFBeUI7TUFDekIsMkJBQTJCO01BQzNCLG1CQUFtQixFQUFBO0FBSy9CO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHVCQUF1QjtFQVd2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBbEJwQjs7SUFRUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7QUFPcEI7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUNJLGtCQUFrQixFQUFBO0FBRHRCO0lBR1EsZUFBZTtJQUNmLFVBQVUsRUFBQTtBQUpsQjtJQU9RLGVBQWUsRUFBQTtBQUl2QjtFQUdJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7QUFHdkI7RUFHWSw0QkFBMkIsRUFBQTtBQUh2QztJQUtnQixxQkFBb0I7SUFDcEIsc0JBQXFCLEVBQUE7QUFRckM7RUFFSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFDakI7SUFKSjtNQUtRLGVBQWMsRUFBQTtNQUx0QjtRQU9ZLGVBQWUsRUFBQTtNQVAzQjtRQVVZLHdCQUF3QixFQUFBLEVBQzNCO0FBWFQ7SUFlWSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7QUFsQnZCO01Bb0JnQixrQkFBa0IsRUFBQTtBQUcxQjtJQXZCUjtNQXlCZ0Isb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsV0FBVyxFQUFBO01BNUIzQjtRQThCb0Isa0JBQWtCLEVBQUEsRUFDckI7QUFNakI7O0VBRUksZUFBZSxFQUFBO0FBR25CO0VBRVEsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUluQjtFQUNJLGNBQWMsRUFBQTtBQURsQjtJQUdRLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjtBQUdMO0VBQ0ksY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsNEJBQTRCLEVBQUE7QUFHaEM7RUFDSSx1QkFBdUIsRUFBQTtBQUczQjtFQUNJLHlCQUF5QixFQUFBO0FBSTdCO0VBQ0ksb0NBQW9DO0VBQ3BDLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksd0JBQXdCLEVBQUE7QUFHNUI7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUNLOztJQUVHLGFBQ0osRUFBQSxFQUFDO0FBR0w7RUFHWSxxQkFBb0IsRUFBQTtBQU1oQztFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtBQUZ2QjtJQUlRLGFBQWE7SUFDYixlQUFlLEVBQUE7QUFMdkI7TUFPWSxhQUFhO01BQ2IsT0FBTztNQUNQLHNCQUFzQixFQUFBO0FBVGxDO01BWVksV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBO0FBaEJyQztRQW9CZ0IsVUFBVTtRQUVWLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0IsRUFBQTtBQTFCaEM7UUE2QmdCLGFBQWE7UUFDYixVQUFVO1FBQ1YsZ0JBQUE7UUFDQSxPQUFPLEVBQUE7QUFoQ3ZCO1FBb0NnQix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0FBM0M1QjtRQWlEZ0IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixPQUFPLEVBQUE7QUFuRHZCO1VBcURvQixVQUFVO1VBQ1YsWUFBWSxFQUFBO0FBdERoQztVQXlEb0IsWUFBWTtVQUNaLFVBQVU7VUFDVixhQUFhO1VBRWIsa0JBQWtCLEVBQUE7QUE3RHRDO1FBaUVnQixtQkFBbUI7UUFDbkIsbUJBQW1CLEVBQUE7QUFsRW5DO1VBb0VvQixXQUFXO1VBQ1gsWUFBWTtVQUNaLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsV0FBVyxFQUFBO0FBeEUvQjtNQTZFWSx5QkFBeUIsRUFBQTtBQTdFckM7TUFnRlkseUJBQXlCLEVBQUE7QUFLckM7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLGVBQWUsRUFBQTtBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFJZjtFQUNJLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksYUFBYTtFQUNiLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGFBQWE7RUFDYixjQUFjLEVBQUE7QUFHbEI7O0VBRUkscUJBQXFCLEVBQUE7QUFHekI7RUFDSTtJQUNJLCtCQUErQixFQUFBO0VBRW5DO0lBQ0ksd0JBQXdCLEVBQUEsRUFDM0I7QUFHTDtFQUNJO0lBQ0ksK0JBQStCLEVBQUE7RUFFbkM7SUFDSSx3QkFBd0IsRUFBQSxFQUMzQjtBQUdMO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0ksb0JBQW9CLEVBQUE7QUFEeEI7SUFHUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTLEVBQUE7QUFOakI7TUFRWSxXQUFXO01BQ1gsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtBQVg5QjtJQWVRLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQixFQUFBO0FBckI5QjtNQXVCWSxXQUFXLEVBQUE7QUF2QnZCO01BMEJZLGNBQWMsRUFBQTtBQTFCMUI7SUE4QlEsV0FBVyxFQUFBO0FBOUJuQjtJQWlDUSxtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0FBbEN2QjtJQXFDUSxtQkFBbUIsRUFBQTtBQXJDM0I7SUF3Q1EsbUJBQW1CLEVBQUE7QUF4QzNCO0lBMkNRLG1CQUFtQixFQUFBO0FBM0MzQjtJQThDUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9teS1jdXN0b20tZ3JvdXAvbXktY3VzdG9tLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC51aS1tcC0xLFxuICAudWktbXAtMixcbiAgLnVpLW1wLTMsXG4gIC51aS1tcC00LFxuICAudWktbXAtNSxcbiAgLnVpLW1wLTYsXG4gIC51aS1tcC03LFxuICAudWktbXAtOCxcbiAgLnVpLW1wLTksXG4gIC51aS1tcC0xMCxcbiAgLnVpLW1wLTExLFxuICAudWktbXAtMTIge1xuICAgIHBhZGRpbmc6IC41ZW07IH1cbiAgLnVpLW1wLTEge1xuICAgIHdpZHRoOiA4LjMzMzMlOyB9XG4gIC51aS1tcC0yIHtcbiAgICB3aWR0aDogMTYuNjY2NyU7IH1cbiAgLnVpLW1wLTMge1xuICAgIHdpZHRoOiAyNSU7IH1cbiAgLnVpLW1wLTQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTsgfVxuICAudWktbXAtNSB7XG4gICAgd2lkdGg6IDQxLjY2NjclOyB9XG4gIC51aS1tcC02IHtcbiAgICB3aWR0aDogNTAlOyB9XG4gIC51aS1tcC03IHtcbiAgICB3aWR0aDogNTguMzMzMyU7IH1cbiAgLnVpLW1wLTgge1xuICAgIHdpZHRoOiA2Ni42NjY3JTsgfVxuICAudWktbXAtOSB7XG4gICAgd2lkdGg6IDc1JTsgfVxuICAudWktbXAtMTAge1xuICAgIHdpZHRoOiA4My4zMzMzJTsgfVxuICAudWktbXAtMTEge1xuICAgIHdpZHRoOiA5MS42NjY3JTsgfVxuICAudWktbXAtMTIge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC51aS1tbC0xLFxuICAudWktbWwtMixcbiAgLnVpLW1sLTMsXG4gIC51aS1tbC00LFxuICAudWktbWwtNSxcbiAgLnVpLW1sLTYsXG4gIC51aS1tbC03LFxuICAudWktbWwtOCxcbiAgLnVpLW1sLTksXG4gIC51aS1tbC0xMCxcbiAgLnVpLW1sLTExLFxuICAudWktbWwtMTIge1xuICAgIHBhZGRpbmc6IC41ZW07IH1cbiAgLnVpLW1sLTEge1xuICAgIHdpZHRoOiA4LjMzMzMlOyB9XG4gIC51aS1tbC0yIHtcbiAgICB3aWR0aDogMTYuNjY2NyU7IH1cbiAgLnVpLW1sLTMge1xuICAgIHdpZHRoOiAyNSU7IH1cbiAgLnVpLW1sLTQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTsgfVxuICAudWktbWwtNSB7XG4gICAgd2lkdGg6IDQxLjY2NjclOyB9XG4gIC51aS1tbC02IHtcbiAgICB3aWR0aDogNTAlOyB9XG4gIC51aS1tbC03IHtcbiAgICB3aWR0aDogNTguMzMzMyU7IH1cbiAgLnVpLW1sLTgge1xuICAgIHdpZHRoOiA2Ni42NjY3JTsgfVxuICAudWktbWwtOSB7XG4gICAgd2lkdGg6IDc1JTsgfVxuICAudWktbWwtMTAge1xuICAgIHdpZHRoOiA4My4zMzMzJTsgfVxuICAudWktbWwtMTEge1xuICAgIHdpZHRoOiA5MS42NjY3JTsgfVxuICAudWktbWwtMTIge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmFhYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyrliLfmlrDlm77moIcqLyB9XG4gIC5hYWEgLnRhYmVsUmVmbGFzaEljbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL2dyb3VwL3Rvb2xiYXIvcmVmcmVzaC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMjNweDtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDlweDtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLmFhYSAudGFiZWxSZWZsYXNoSWNvOmhvdmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwMDk0RDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG5cbiNsaW5rVG9Hcm91cE93bmVySW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiA5MXB4OyB9XG5cbmRsIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwLjVlbSAwOyB9XG4gIGRsIGR0IHtcbiAgICBmbG9hdDogbGVmdDsgfVxuICBkbCBkZC5jb3VudCB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDsgfVxuICBkbCBkZC5mb250IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5OTk7IH1cbiAgZGwgaW1nIHtcbiAgICB3aWR0aDogNjZweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgZGwge1xuICAgIGhlaWdodDogNDhweDsgfVxuICAgIGRsIGltZyB7XG4gICAgICB3aWR0aDogNTZweDsgfVxuICAgIGRsIGRkLmNvdW50IHtcbiAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4OyB9IH1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgdWwgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMi41JTsgfVxuXG4uYnRuLWFyZWEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7IH1cbiAgLmJ0bi1hcmVhIC5idG4tY2xhc3MxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRjMjAxOyB9XG4gIC5idG4tYXJlYSAuYnRuLWNsYXNzMiB7XG4gICAgYmFja2dyb3VuZDogIzE5YjBjODsgfVxuXG4uaGVhZGVyLXNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6ICMxOWIwYzg7XG4gIG1hcmdpbi10b3A6IC0zMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmhlYWRlci1pbWcge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cblxuLmhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDdweCAwIDdweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgLmhlYWRlci10aXRsZSAudGl0bGUtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuaGVhZGVyLXRpdGxlIC50aXRsZS1yaWdodCAubGluZSB7XG4gICAgICB3aWR0aDogM3B4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcbiAgICAgIG1hcmdpbi1yaWdodDogMTNweDsgfVxuICAgIC5oZWFkZXItdGl0bGUgLnRpdGxlLXJpZ2h0IC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgLmhlYWRlci10aXRsZSBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuYnRuIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiAxNjBweDsgfVxuXG4uY292ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5jb3ZlciAudWktZy0xMixcbiAgLmNvdmVyIC51aS1nLTcsXG4gIC5jb3ZlciAudWktZy01IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLmNvdmVyIC51aS1nLTEyIHtcbiAgICBtYXJnaW46IDA7IH1cbiAgLmNvdmVyIC51aS1nLTcsXG4gIC5jb3ZlciAudWktZy01IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gICAgLmNvdmVyIC51aS1nLTcgLnVpLWctMTIsXG4gICAgLmNvdmVyIC51aS1nLTUgLnVpLWctMTIge1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jb3ZlciAub25lcm93IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDAgNXB4OyB9XG4gIC5jb3ZlciAuc2Vjb25kcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHg7IH1cbiAgICAuY292ZXIgLnNlY29uZHJvdyAudG90YWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLmdyb3VwdG90YWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogN3B4OyB9XG4gIC5ncm91cHRvdGFsIC51aS1nLTMsXG4gIC5ncm91cHRvdGFsIC51aS1nLTIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGM0YyRjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG4gICAgaGVpZ2h0OiA1NXB4OyB9XG5cbi51aS1nLTEyIHtcbiAgcGFkZGluZzogMDsgfVxuXG4uYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5idG4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgd2lkdGg6IDYwJTsgfVxuICAuYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMHB4OyB9XG5cbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUge1xuICBwYWRkaW5nOiAwLjVlbTsgfVxuXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cblxuOmhvc3QvZGVlcC8gI2VjaGFydHMgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCUgIWltcG9ydGFudDsgfVxuICA6aG9zdC9kZWVwLyAjZWNoYXJ0cyA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSkgY2FudmFzIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuXG4uY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiAxMDI0cHg7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc0MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cbiAgICAgIC5jb250YWluZXIgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgICAuY29udGFpbmVyIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH0gfVxuICAuY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuaHVpem9uZyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuaHVpem9uZyAuaHVpem9uZy11bCB7XG4gICAgICBtYXJnaW4tdG9wOiAtMC41ZW07IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmh1aXpvbmcge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIC5jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5odWl6b25nIC5odWl6b25nLXVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuNWVtOyB9IH1cblxuYSxcbi5pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnRhYiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmdyb3VwTnVtU3R5bGUge1xuICBjb2xvcjogIzE5YjBjODsgfVxuICAuZ3JvdXBOdW1TdHlsZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMTliMGM4OyB9XG5cbi5jb250YWluZXItcmlnaHQge1xuICBtYXJnaW4tdG9wOiAtMC41ZW07IH1cblxuLmNvbnRhaW5lci1yaWdodDIge1xuICBtYXJnaW4tdG9wOiAwOyB9XG5cbi5kYWliYW4tYm94IHtcbiAgaGVpZ2h0OiAyNTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmRhaWJhbi1ib3gge1xuICAgIGhlaWdodDogMjIxcHg7IH0gfVxuXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIC51aS13aWRnZXQge1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMWVtOyB9XG5cbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGggLnVpLWNvbHVtbi10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLy51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktdGFidmlldy51aS13aWRnZXQge1xuICBwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS10YWJ2aWV3LXBhbmVsLnVpLXdpZGdldC1jb250ZW50IHtcbiAgcGFkZGluZzogMWVtIDAuNWVtIDAuNWVtOyB9XG5cbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUudWktd2lkZ2V0IHtcbiAgcGFkZGluZzogMDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbixcbiAgYm9keSAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lID4gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuMmVtOyB9IH1cblxuLmN1c19jaG9zZSAuY29udCBzcGFuIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyB9XG5cbi5wcm9fY2hvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gIC5wcm9fY2hvc2UgLmNvbnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50b3RhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gICAgICAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IC5udW0ge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XG4gICAgICAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IC5jb250IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLyogd2lkdGg6IDg3JTsgKi9cbiAgICAgICAgZmxleDogMTsgfVxuICAgICAgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdCBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMwYTNkNTQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4OyB9XG4gICAgICAucHJvX2Nob3NlIC5jb25yaWdodCAudGl0IC53MzAge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiAxOyB9XG4gICAgICAgIC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgLnczMCBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7IH1cbiAgICAgICAgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdCAudzMwIC51bnRpbCB7XG4gICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQgLmh1byB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgICAgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdCAuaHVvIGIge1xuICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XG4gICAgLnByb19jaG9zZSAuY29ucmlnaHQgLnRpdDpudGgtY2hpbGQoMm4rMikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjsgfVxuICAgIC5wcm9fY2hvc2UgLmNvbnJpZ2h0IC50aXQ6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWY7IH1cblxuLnRhYmxlLXNlbGYge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5tb2Jhbi0xIHtcbiAgZm9udC1zaXplOiAyMXB4OyB9XG5cbi5tb2Jhbi0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzZweDsgfVxuXG4uYmFja2dyb3VuZC1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7IH1cblxuLnRlbXBsZXRlIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXRvcDogMTU3cHg7IH1cblxuLnNlYXJjaC1tYW5hZ2UyIHtcbiAgaGVpZ2h0OiA5MCU7IH1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50OyB9XG5cbi50ZW1wLXJpZ2h0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnNlcmFjaC1jIHtcbiAgaGVpZ2h0OiA0MzNweDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmhpc3RvcnksXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NDBweCkge1xuICAud2VpaHUge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMXB4ICFpbXBvcnRhbnQ7IH1cbiAgLmJsYW5rIHtcbiAgICBoZWlnaHQ6IDEzOXB4ICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLndlaWh1IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweCAhaW1wb3J0YW50OyB9XG4gIC5ibGFuayB7XG4gICAgaGVpZ2h0OiAxMzJweCAhaW1wb3J0YW50OyB9IH1cblxuLmJsYW5rIHtcbiAgaGVpZ2h0OiAxNDBweDsgfVxuXG4ud2VpaHUge1xuICBwYWRkaW5nLWJvdHRvbTogMjNweDsgfVxuICAud2VpaHUgdWwudWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7IH1cbiAgICAud2VpaHUgdWwudWwgbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogMTclO1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAud2VpaHUgZGwuZGwge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMTVweDtcbiAgICB3aWR0aDogODElO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAud2VpaHUgZGwuZGwgZHQge1xuICAgICAgZmxvYXQ6IG5vbmU7IH1cbiAgICAud2VpaHUgZGwuZGwgZGQuZm9udDIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLndlaWh1IC5pbWctc2l6ZS15dyB7XG4gICAgd2lkdGg6IDI4cHg7IH1cbiAgLndlaWh1IC5iZy1ibHVlLXl3IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDJlYWVkO1xuICAgIG1pbi13aWR0aDogODBweDsgfVxuICAud2VpaHUgLmJnLWdyZWVuLXl3IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDVlZGUyOyB9XG4gIC53ZWlodSAuYmcteWVsbG93LXl3IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFlOWNmOyB9XG4gIC53ZWlodSAuYmctcG9wdWwteXcge1xuICAgIGJhY2tncm91bmQ6ICNkM2UyZWQ7IH1cbiAgLndlaWh1IC5wYWRkaW5nLWxlZnQtemVybyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNzlweCkge1xyXG4gICAgLnVpLW1wLTEsXHJcbiAgICAudWktbXAtMixcclxuICAgIC51aS1tcC0zLFxyXG4gICAgLnVpLW1wLTQsXHJcbiAgICAudWktbXAtNSxcclxuICAgIC51aS1tcC02LFxyXG4gICAgLnVpLW1wLTcsXHJcbiAgICAudWktbXAtOCxcclxuICAgIC51aS1tcC05LFxyXG4gICAgLnVpLW1wLTEwLFxyXG4gICAgLnVpLW1wLTExLFxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbXAtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xyXG4gICAgLnVpLW1sLTEsXHJcbiAgICAudWktbWwtMixcclxuICAgIC51aS1tbC0zLFxyXG4gICAgLnVpLW1sLTQsXHJcbiAgICAudWktbWwtNSxcclxuICAgIC51aS1tbC02LFxyXG4gICAgLnVpLW1sLTcsXHJcbiAgICAudWktbWwtOCxcclxuICAgIC51aS1tbC05LFxyXG4gICAgLnVpLW1sLTEwLFxyXG4gICAgLnVpLW1sLTExLFxyXG4gICAgLnVpLW1sLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbWwtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tbC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tbC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbWwtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbWwtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbWwtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tbC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbWwtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWFhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8q5Yi35paw5Zu+5qCHKi9cclxuICAgIC50YWJlbFJlZmxhc2hJY28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9ncm91cC90b29sYmFyL3JlZnJlc2gucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmVsUmVmbGFzaEljbzpob3ZlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuI2xpbmtUb0dyb3VwT3duZXJJbmZvIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5MXB4O1xyXG59XHJcblxyXG5kbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICAgIGR0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIGRkLmNvdW50IHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgfVxyXG4gICAgZGQuZm9udCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIGRsIHtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRkLmNvdW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMi41JTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1hcmVhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAuYnRuLWNsYXNzMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxuICAgIH1cclxuICAgIC5idG4tY2xhc3MyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIG1hcmdpbi10b3A6IC0zMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWltZyB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLnRpdGxlLXJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7IC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3ZlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnVpLWctMTIsXHJcbiAgICAudWktZy03LFxyXG4gICAgLnVpLWctNSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTcsXHJcbiAgICAudWktZy01IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC51aS1nLTEyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vbmVyb3cge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kcm93IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgLnRvdGFsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdyb3VwdG90YWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWctMyxcclxuICAgIC51aS1nLTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGM0YyRjI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi51aS1nLTEyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gI2VjaGFydHMge1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgPmRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7fVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICAvLyDmu5rliqhcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWxlZnQge1xyXG4gICAgICAgIC5odWl6b25nIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7IC8vIGhlaWdodDogMjA3cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC5odWl6b25nLXVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgICAgICAgICAuaHVpem9uZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7IC8vIGhlaWdodDogMjA3cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC5odWl6b25nLXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmEsXHJcbi5pbWcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFiIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm91cE51bVN0eWxlIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLXJpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjVlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1yaWdodDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmRhaWJhbi1ib3gge1xyXG4gICAgaGVpZ2h0OiAyNTNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZGFpYmFuLWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjFweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktd2lkZ2V0IHtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIC51aS1jb2x1bW4tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktdGFidmlldy51aS13aWRnZXQge1xyXG4gICAgcGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5rWF6Imy6KGo5aS0XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXctcGFuZWwudWktd2lkZ2V0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMWVtIDAuNWVtIDAuNWVtO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLnVpLXdpZGdldCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1idXR0b24sXHJcbiAgICBib2R5IC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmU+YnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIuMmVtXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXNfY2hvc2Uge1xyXG4gICAgLmNvbnQge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5a6i5oi35Lqn5ZOB5bGe5oCn562b6YCJIGNzc1xyXG4ucHJvX2Nob3NlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLmNvbnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAudG90YWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmN2Y4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzBhM2Q1NCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1JTsgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAvKiB3aWR0aDogODclOyAqL1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGEzZDU0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH0gLy8gLmJnIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAudzMwIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC51bnRpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDRweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmh1byB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0Om50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZS1zZWxmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tb2Jhbi0xIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLm1vYmFuLTIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi8v5pCc57SiXHJcbi5iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50ZW1wbGV0ZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTdweDtcclxufVxyXG5cclxuLnNlYXJjaC1tYW5hZ2UyIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGVtcC1yaWdodCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zZXJhY2gtYyB7XHJcbiAgICBoZWlnaHQ6IDQzM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oaXN0b3J5LFxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNzQwcHgpIHtcclxuICAgIC53ZWlodSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIxcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ibGFuayB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLndlaWh1IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJsYW5rIHtcclxuICAgICAgICBoZWlnaHQ6IDEzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibGFuayB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4ud2VpaHUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIzcHg7XHJcbiAgICB1bC51bCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGwuZGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMTVweDtcclxuICAgICAgICB3aWR0aDogODElO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGQuZm9udDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLXNpemUteXcge1xyXG4gICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLmJnLWJsdWUteXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMmVhZWQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmJnLWdyZWVuLXl3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDVlZGUyO1xyXG4gICAgfVxyXG4gICAgLmJnLXllbGxvdy15dyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZTljZjtcclxuICAgIH1cclxuICAgIC5iZy1wb3B1bC15dyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzZTJlZDtcclxuICAgIH1cclxuICAgIC5wYWRkaW5nLWxlZnQtemVybyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MyCustomGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCustomGroupComponent", function() { return MyCustomGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/custGroupQuery.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/custGroupQuery.bean.ts");
/* harmony import */ var _bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/MyGroupBasefInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupBasefInfo.bean.ts");
/* harmony import */ var _bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/MyGroupTotalInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupTotalInfo.bean.ts");
/* harmony import */ var _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/selectCustGroup.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/selectCustGroup.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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








var MyCustomGroupComponent = /** @class */ (function () {
    function MyCustomGroupComponent(router, httpService, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.getHeaderList = [];
        this.selectedHeaderList = [];
        this.headerList = [];
        this.isMainHistory = false;
        this.notMainHistory = false;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_11__["tableMessage"];
        // 标题
        this.title1 = '我的客户群';
        this.title2 = '基本信息';
        this.title3 = '群业绩汇总';
        this.title4 = '主管群存款分布图';
        this.title5 = '主管群列表';
        this.title6 = '主管群贷款分布图';
        this.alListFlag = true;
        this.mesg = [];
        // 控件
        this.msgs = [];
        this.orgId = '';
        this.userId = '';
        // bean
        this.groupOwnerInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["GroupOwnerInfoBean"]();
        this.custGroupQueryBean = new _bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_5__["CustGroupQueryBean"]();
        this.myGroupBasefInfoBean = new _bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_6__["MyGroupBasefInfoBean"](); //我的客户群基本信息查询
        this.myGroupTotalInfoBean = new _bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_7__["MyGroupTotalInfoBean"](); //我的客户群总体信息查询
        this.selectCustGroupBean = new _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_8__["SelectCustGroupBean"](); //客户群查询Bean
        // 码值
        // 中间量
        this.groupOwnerFlag = true; //主管辅管切换
        this.hasChange = 1; //是否已切换过一次
        this.isMain = true; //是否主管群
        //
        this.groupList1 = [];
        this.groupList2 = [];
        this.first1 = 0;
        this.pageNum1 = 1;
        this.pageSize1 = 10;
        this.first2 = 0;
        this.pageNum2 = 1;
        this.pageSize2 = 10;
        this.isN = true;
        this.isSecond = false;
        this.conditionList = []; //查询数组
        this.starShow = true; //刷新之前展示
        this.selectedValues = [];
        this.chooseDisplay = true; //自定义表头
        this.selectedAttr = [];
        this.attrList = [];
        this.templeteDisplay = false;
        this.expCondName = '';
        this.templeteList0 = []; //模板列表
        this.templeteManagerDisplay = false; //模板dialog
        this.templeteListDialog = []; //mubanlist
        this.searchManage2 = false; //模板管理模态框
        this.CusGroupAttrOpt1 = [{
                label: '请选择', value: ''
            }]; //码值
        this.CusGroupAttrOpt2 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt3 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt4 = [{
                label: '请选择', value: ''
            }];
        this.isCountType = [
            { label: '请选择', value: '' },
            { label: '小于等于', value: '<=' },
            { label: '大于等于', value: '>=' },
        ]; //取值方式
        this.notCountType = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
            { label: '包含', value: '%%' },
        ]; //取值方式
        this.CountTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
        ]; //取值方式
        this.CountTypeLike = [
            { label: '请选择', value: '' },
            { label: '包含', value: '%%' },
        ]; //取值方式
        this.taskTypeParentId = ''; //任务类型id
        //20180609
        this.staff_display01 = false; // 选人木台眶
        this.staff_display02 = false; // 选人木台眶
        this.staff_display03 = false; // 选人木台眶
        this.isThird = false;
        this.freshFlag = true; //是否可以点击刷新按钮
        this.refreshShow = true; //是否展示刷新按钮
        this.loadingShow = {
            flag: false
        };
        this.performanceDisplay = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.groupType = this.code['GroupTypeSave'];
        this.developmentLevel = this.code['developmentLevel'];
        this.productList = this.code['productList'];
        this.littleEvent = this.code['BigEvent'];
        //10.客户群属性筛选
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    //码值
    MyCustomGroupComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MyCustomGroupComponent.prototype.ngOnInit = function () {
        this.doAdd('custGroupAttr'); //初始化查询条件
        this.doAdd('custGroupAttr'); //初始化查询条件
        this.doAdd('custGroupAttr'); //初始化查询条件
        this.preSet();
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.commonHeader = mesg;
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y') {
            this.isN = false;
            this.selectCustGroupBean['searchScope'] = '2';
            this.selectCustGroupBean['ownerId'] = '';
        }
        else {
        }
        // this.selectMyGroupAchiInfo(1);
        // this.selectMyGroupAchiInfo(0);
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'N') {
            this.refreshShow = false;
            this.starShow = false;
            this.selectMyGroupBasefInfo(1); //我的客户群基本信息查询
        }
        // this.selectMyGroupTotalInfo();//我的客户群总体信息查询
        this.pendingScheduleGroupQry(); //代办及提醒
        // this.selectCustGroup(3);//默认主管群
        // this.selectCustGroup(4);//默认主管群
        // this.tplSearch(0);//列表查询
        //列表查询
        this.queryTargetCustomerExploreList(0); //模板列表
    };
    MyCustomGroupComponent.prototype.preSet = function () {
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
        this.selectCustGroupBean.ownerId = mesg['userId']; //我的客户群总体信息查询，群主
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.groupOwnerInfoBean.groupType = '0'; //我的客户群信息查询,群类型
    };
    //刷新
    MyCustomGroupComponent.prototype.doRefresh = function () {
        if (!this.freshFlag) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '正在刷新,请稍等...' }];
            return;
        }
        this.freshFlag = false;
        this.selectMyGroupBasefInfo(2);
    };
    MyCustomGroupComponent.prototype.selectMyGroupBasefInfo = function (i) {
        var _this = this;
        // 我的客户群信息查询
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.myGroupBasefInfoBean.ownerId = mesg['userId']; //我的客户群基本信息查询，群主
        this.httpService.selectMyGroupBasefInfo(this.myGroupBasefInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.myGroupBasefInfoBean = data;
                if (i == 2) {
                    _this.starShow = false;
                }
                _this.freshFlag = true;
            }
            else {
                _this.freshFlag = true;
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.freshFlag = true;
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
    MyCustomGroupComponent.prototype.selectMyGroupAchiInfo = function (groupType) {
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
                            text: "贷款月日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        // legend: {
                        //   orient: "vertical",
                        //   left: 'left',
                        //   data: alLegendData,
                        // },
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
                            text: "存款月日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        // legend: {
                        //   orient: "vertical",
                        //   left: 'left',
                        //   data: alLegendData,
                        // },
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
    MyCustomGroupComponent.prototype.tocreategroup = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/create-custom-group']);
    };
    MyCustomGroupComponent.prototype.toQueryGroup = function () {
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
    MyCustomGroupComponent.prototype.click_alList = function (event) {
    };
    // 其他
    MyCustomGroupComponent.prototype.linkToGroupOwnerInfo = function (index) {
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
    MyCustomGroupComponent.prototype.custGroupQuery = function () {
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
                var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_HTTP_SX"] + 'ifs/visiturl.do?token_id=' + tokens + '&tranFlag=batGroup&user_id=' + _this.userId + '&consumer_id=CRM&domain_name=ywsn&url=http://10.1.39.140:8011/searchPaymentTool&bankCode=BR00A&bankCode=BR00A';
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    //群批量机构调整
    MyCustomGroupComponent.prototype.adjustment = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-org']);
    };
    MyCustomGroupComponent.prototype.groupOwnerChange = function (i) {
        // 主管群辅管群切换
        if (i == 3) {
            this.groupOwnerFlag = true;
            this.selectCustGroup(i);
        }
        if (i == 4) {
            this.groupOwnerFlag = false;
            if (this.hasChange == 1) {
                this.selectCustGroup(i);
                this.hasChange == 0;
            }
        }
    };
    MyCustomGroupComponent.prototype.toGroupView = function (col, main) {
        var a = 'groupId=' + col.groupId + ';' + 'groupName=' + col.groupName;
        var a_encode = encodeURI(a);
        window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a_encode);
        // 转到客户群视图
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: col.groupId, groupName: col.groupName,}]);
    };
    MyCustomGroupComponent.prototype.selectCustGroup = function (index) {
        var _this = this;
        // 查询客户群
        this.selectCustGroupBean.groupStatus = '1';
        if (this.isN) {
            this.selectCustGroupBean.searchScope = index;
        }
        if (index == 3) {
            this.selectCustGroupBean.pageNum = this.pageNum1;
            this.selectCustGroupBean.pageSize = this.pageSize1;
        }
        else if (index == 4) {
            this.selectCustGroupBean.pageNum = this.pageNum2;
            this.selectCustGroupBean.pageSize = this.pageSize2;
        }
        // let mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // if(mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y'){
        //   this.isN = false;
        //   this.selectCustGroupBean['searchScope'] = '2';
        // }else{
        //   this.selectCustGroupBean['ownerId'] = '';
        // }
        // this.selectCustGroupBean["ownerId"] = this.selectCustGroupBean["ownerId"];
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y') {
            this.isN = false;
            this.selectCustGroupBean['searchScope'] = '2';
            this.selectCustGroupBean['ownerId'] = '';
        }
        else {
            this.selectCustGroupBean['ownerId'] = mesg['userId']; //我的客户群总体信息查询，群主
        }
        this.selectCustGroupBean["partyClassificationTypeId"] = 0;
        this.httpService.selectCustGroup(this.selectCustGroupBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectCustGroupBean = data;
                _this.selectCustGroupBean.groupList = data.groupList;
                var contact_arr_1 = [];
                _this.selectCustGroupBean.groupList.forEach(function (item, i) {
                    contact_arr_1 = [];
                    item.contactList.forEach(function (item_2) {
                        contact_arr_1.push(item_2.roleName);
                        _this.selectCustGroupBean.groupList[i]["contactListStr"] = contact_arr_1.join(';');
                    });
                });
                if (index == 3) {
                    _this.groupList1 = _this.selectCustGroupBean.groupList;
                    _this.groupList1.forEach(function (element, i) {
                        _this.groupType.forEach(function (element2) {
                            if (element2.value == element.groupType) {
                                _this.groupList1[i].groupType = element2.label;
                            }
                        });
                    });
                    _this.groupList1.forEach(function (element, i) {
                        var arr = [];
                        if (element.contactList) {
                            element.contactList.forEach(function (element2) {
                                arr.push(element2.roleName);
                            });
                        }
                        var arr_str = arr.join(',');
                        _this.groupList1[i].contactList = arr_str;
                    });
                }
                else if (index == 4) {
                    _this.groupList2 = _this.selectCustGroupBean.groupList;
                    _this.totalNum2 = data.totalNum;
                }
                _this.adminSelect(); // 管理人员查询赋值
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
    MyCustomGroupComponent.prototype.adminSelect = function () {
        // 管理人员查询赋值
        this.selectCustGroupBean.groupList.forEach(function (item) {
            item.contactListArr = [];
            item.contactList.forEach(function (item1) {
                var temp = [];
                temp = lodash__WEBPACK_IMPORTED_MODULE_9__["clone"](item1.roleName);
                item.contactListArr.push(temp);
            });
        });
    };
    //代办及提醒
    MyCustomGroupComponent.prototype.pendingScheduleGroupQry = function () {
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
    MyCustomGroupComponent.prototype.checkAll = function () {
        this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/backlog-check-detail/whole"]);
    };
    MyCustomGroupComponent.prototype.doDeal = function (item) {
        this.commfunc.doDeal(item);
    };
    //按钮权限
    MyCustomGroupComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //分页
    MyCustomGroupComponent.prototype.paginate1 = function (event) {
        //每页显示的条数
        this.pageSize1 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum1 = currentPage;
        //调用查询的方法
        this.tplSearch(3);
    };
    //分页
    MyCustomGroupComponent.prototype.paginate2 = function (event) {
        //每页显示的条数
        this.pageSize2 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum2 = currentPage;
        //调用查询的方法
        this.tplSearch(3);
    };
    MyCustomGroupComponent.prototype.tabViewChange = function (event) {
        if (event.index == 1) {
            this.isMain = false;
        }
        else {
            this.isMain = true;
        }
    };
    //模板码值
    MyCustomGroupComponent.prototype.templeteChange = function (event, index, i, ind) {
        var _this = this;
        var taskTypeParentId = index == '1' ? '' : event.value;
        if (index == 1) {
            // this.CusGroupAttrOpt2 = [];
            // this.CusGroupAttrOpt3 = [];
        }
        else if (index == 2) {
            // this.CusGroupAttrOpt3 = [];
        }
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeParentId
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var arr_1 = 'CusGroupAttrOpt' + index;
                if (index == 3 && data.taskTypeList && data.taskTypeList.length == 0) {
                    //清空值
                    _this.conditionList[i][ind]['label'] = '';
                    _this.conditionList[i][ind]['value'] = '';
                    _this.isThird = true;
                    _this.CusGroupAttrOpt3 = _this.CusGroupAttrOpt2;
                    _this.conditionList[i][ind]['mapList'].forEach(function (item) {
                        if (item.taskTypeId == event.value) {
                            _this.conditionList[i][ind].CusGroupAttrOpt3 = [{ label: item.taskTypeName, value: item.taskTypeId }];
                            _this.conditionList[i][ind]['field'] = item.taskTypeId;
                            switch (item.taskTypeLevel) {
                                case '0':
                                    _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                                    _this.conditionList[i][ind]['special'] = 'count';
                                    break;
                                case '1':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                                    _this.conditionList[i][ind]['special'] = 'count';
                                    break;
                                case '00':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'count';
                                    break;
                                case '01':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'code';
                                    _this.conditionList[i][ind]['specialType'] = _this.groupType; //群类型
                                    break;
                                case '02':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'code';
                                    _this.conditionList[i][ind]['specialType'] = _this.developmentLevel; //开发程度
                                    break;
                                case '03':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'code';
                                    _this.conditionList[i][ind]['specialType'] = _this.productList; //主推产品
                                    break;
                                case '2':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'input';
                                    _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                                    break;
                                case '3':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                                    _this.conditionList[i][ind]['special'] = 'input';
                                    _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                                    break;
                                case '4':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                                    _this.conditionList[i][ind]['special'] = 'input';
                                    _this.conditionList[i][ind]['inputType'] = 'bank-cust';
                                    break;
                                case '5':
                                    _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                                    _this.conditionList[i][ind]['special'] = 'input';
                                    _this.conditionList[i][ind]['inputType'] = 'bank-org';
                                    break;
                                default:
                                    _this.conditionList[i][ind]['valueType'] = [];
                                    _this.conditionList[i][ind]['special'] = 'count';
                                    break;
                            }
                            // console.log(this.conditionList[i][ind]);
                        }
                    });
                    _this.conditionList[i][ind].fieldType = event.value;
                    _this.conditionList[i][ind].isThird = true;
                }
                else {
                    _this.conditionList[i][ind][arr_1] = [{
                            label: '请选择', value: ''
                        }];
                    _this.conditionList[i][ind]['mapList'] = [];
                    data.taskTypeList.forEach(function (item) {
                        _this.conditionList[i][ind]['mapList'].push(item);
                        _this.conditionList[i][ind][arr_1].push({
                            label: item.taskTypeName,
                            value: item.taskTypeId,
                        });
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
    // ``````````````````````````````````````````````````````2222222222222222222222222222222222222222222222222
    //点击或的加号(客户产品属性列表)
    MyCustomGroupComponent.prototype.doAdd = function (name) {
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
    };
    // 对象拷贝
    MyCustomGroupComponent.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //点击或的减号
    MyCustomGroupComponent.prototype.doReduce = function (i, name) {
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            this.conditionList.splice(i, 1);
        }
    };
    //点击且中的加号(客户产品属性列表)
    MyCustomGroupComponent.prototype.doAndAdd = function (i, name) {
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
    //点击且中的减号(客户产品属性列表)
    MyCustomGroupComponent.prototype.doAndReduce = function (ind, name) {
        //客户群组属性
        if (name == 'custGroupAttr') {
            if (this.conditionList[ind].length == 1) {
                this.doReduce(ind, 'custGroupAttr');
                return;
            }
            this.conditionList[ind].splice(this.conditionList[ind].length - 1, 1);
        }
    };
    MyCustomGroupComponent.prototype.checkChange = function (index) {
        if (this.selcetedValues2 && this.selcetedValues2.length > 0) {
            this.isMainHistory = index;
        }
        if (this.selcetedValues22 && this.selcetedValues22.length > 0) {
            this.notMainHistory = index;
        }
    };
    MyCustomGroupComponent.prototype.tplSearch = function (index) {
        var _this = this;
        //点击查询   页面初始化
        if (index == 1) {
            this.pageNum1 = 1;
            this.pageSize1 = 10;
            this.pageNum2 = 1;
            this.pageSize2 = 10;
        }
        var list = [];
        if (index == 1) {
            if (this.conditionList) {
                this.conditionList.forEach(function (element, i) {
                    var arr = [];
                    if (element) {
                        element.forEach(function (element2, j) {
                            if (element2.field != '' && element2.operator != '' && element2.value != '') {
                                arr.push({
                                    field: element2.field,
                                    operator: element2.operator,
                                    value: element2.value,
                                });
                            }
                        });
                    }
                    if (arr.length > 0) {
                        list.push(arr);
                    }
                });
            }
        }
        else {
            list = null;
        }
        if (list && list.length == 0) {
            list = null;
        }
        //判断是否主管群
        var isAssist = null;
        var pageNum = this.pageNum1;
        var pageSize = this.pageSize1;
        if (!this.isMain) {
            pageNum = this.pageNum2;
            pageSize = this.pageSize2;
            isAssist = true;
        }
        var dataDt;
        if (this.isMainHistory && this.chooseMonthMain && this.isMain) {
            dataDt = this.chooseMonthMain;
        }
        else if (this.notMainHistory && this.chooseMonthNotMain && !this.isMain) {
            dataDt = this.chooseMonthNotMain;
        }
        var params = {
            pageNum: pageNum,
            pageSize: pageSize,
            conditionList: list,
            isAssist: isAssist,
            dataDt: dataDt,
        };
        this.httpService.queryCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupList1 = data.resultList;
                if (!_this.isMain) {
                    _this.pageNum2 = data.pageNum;
                    _this.pageSize2 = data.pageSize;
                    _this.totalNum2 = data.totalNum;
                }
                else {
                    _this.pageNum1 = data.pageNum;
                    _this.pageSize1 = data.pageSize;
                    _this.totalNum1 = data.totalNum;
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
    //自定义表头````````````````````````````````````````````````````````````````````````````
    MyCustomGroupComponent.prototype.chooseParam = function () {
        var _this = this;
        this.chooseDisplay = !this.chooseDisplay;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: '001'
        };
        //获取表头数据可选字段
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.getHeaderList = data.taskTypeList;
                _this.getHeaderList.forEach(function (element, i) {
                    if (element.taskTypeName == "群编号") {
                        _this.selectedHeaderList[i] = i.toString();
                    }
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
    //用户列表展示登记
    MyCustomGroupComponent.prototype.addUserListShow = function () {
        var _this = this;
        if (this.selectedHeaderList.length > 20) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '所选字段不能多于20' }];
        }
        this.isdisabled = "disabled";
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var arr = [];
        this.selectedHeaderList.forEach(function (element) {
            arr.push(_this.getHeaderList[element]);
        });
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: orgID,
            createdByUserLogin: userId,
            exploreConditionObject: JSON.stringify(arr)
        };
        this.httpService.addUserListShow(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
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
    // 全选
    MyCustomGroupComponent.prototype.checkAll2 = function () {
        if (this.isAll == true) {
            var arr_2 = [];
            this.getHeaderList.forEach(function (element, i) {
                arr_2.push(i.toString());
            });
            this.selectedHeaderList = arr_2;
        }
        else {
            this.selectedHeaderList = [];
        }
    };
    //列表查询`````````````````````````````````````````````````````````````````````````````````````````````
    MyCustomGroupComponent.prototype.attrListSearch = function () {
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
                var eco_1 = JSON.parse(data.exploreConditionObject);
                if (eco_1.length != 0) {
                    _this.headerList = [];
                    for (var i = 0; i < eco_1.length; i++) {
                        eco_1.forEach(function (element, i) {
                            if (element.taskTypeName == "群编号") {
                                eco_1.splice(i, 1);
                            }
                        });
                        _this.headerList.push(eco_1[i]);
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
    MyCustomGroupComponent.prototype.saveTemplete = function () {
        this.templeteDisplay = true;
    };
    MyCustomGroupComponent.prototype.saveTemplete2 = function () {
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
                conditionList: this.conditionList
            },
            expCondName: this.expCondName,
            orgName: chName.orgName,
            userName: chName.userName,
        };
        this.httpService.createExploreCondition(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.templeteList0 = data.
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
    MyCustomGroupComponent.prototype.queryTargetCustomerExploreList = function (index) {
        var _this = this;
        this.loadingShow.flag = true;
        var params = {
            requestType: '3',
            queryScene: index,
        };
        this.httpService.queryTargetCustomerExploreList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loadingShow.flag = false;
                if (index == 0) {
                    _this.templeteList0 = data.screenTemplateList;
                }
                else {
                    _this.templeteListDialog = data.screenTemplateList;
                }
            }
            else {
                _this.loadingShow.flag = false;
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.loadingShow.flag = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //模板管理
    MyCustomGroupComponent.prototype.templeteManager = function () {
        // this.templeteManagerDisplay = true;
        // this.queryTargetCustomerExploreList(1);//模板列表
        this.searchManage2 = true;
    };
    //映射模板
    MyCustomGroupComponent.prototype.mappedTemplete = function (col, isDialog) {
        var _this = this;
        if (isDialog == 2) {
            this.templeteManagerDisplay = false;
        }
        var params = {
            requestType: '3',
            expCondId: col.screenTemplateId,
        };
        //模板详情
        this.httpService.queryExploreConditionDetail(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.conditionList = data.requestMap.conditionList;
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
    //删除模板
    //映射模板
    MyCustomGroupComponent.prototype.delTemplete = function (col, isDialog) {
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
    MyCustomGroupComponent.prototype.selectUser = function (inputType, i, ind) {
        this.i = i;
        this.ind = ind;
        if (inputType == 'bank-cust') {
            this.staff_display02 = true;
        }
        else if (inputType == 'bank-teller') {
            if (this.isN) {
                this.conditionList[this.i][this.ind]['label'] = this.chName.userName;
                this.conditionList[this.i][this.ind]['value'] = this.commonHeader.userId;
            }
            else {
                this.staff_display03 = true;
            }
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
    //模板查询重置
    MyCustomGroupComponent.prototype.resetTemplete = function () {
        this.conditionList = [];
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
        var temp = this.copyObj(conditionListMember);
        this.conditionList.push([temp]);
        this.conditionList.push([temp]);
        this.conditionList.push([temp]);
        this.templeteChange('', 1, this.conditionList.length - 1, 0);
    };
    //0609
    //选人服务
    MyCustomGroupComponent.prototype.returnInfoHide = function () {
        // this.staff_display01 = false;
    };
    MyCustomGroupComponent.prototype.returnInfo01 = function (data) {
        this.staff_display01 = false;
        if (data.hasOwnProperty('orgName')) {
            this.conditionList[this.i][this.ind]['label'] = data.orgName;
            this.conditionList[this.i][this.ind]['value'] = data.orgId;
        }
        // this.inValue = _.clone(data);
    };
    MyCustomGroupComponent.prototype.returnInfo02 = function (data) {
        this.staff_display02 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].custName;
        this.conditionList[this.i][this.ind]['value'] = data[0].custId;
        // this.inValue = _.clone(data);
    };
    MyCustomGroupComponent.prototype.returnInfo03 = function (data) {
        this.staff_display03 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].tellerName;
        this.conditionList[this.i][this.ind]['value'] = data[0].tellerId;
        // this.inValue = _.clone(data);
    };
    MyCustomGroupComponent.prototype.outValue = function (event) {
        // console.log(event);
        this.performanceDisplay = true;
        this.selectMyGroupAchiInfo(1);
        this.selectMyGroupAchiInfo(0);
    };
    MyCustomGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-custom-group',
            template: __webpack_require__(/*! ./my-custom-group.component.html */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.html"),
            styles: [__webpack_require__(/*! ./my-custom-group.component.scss */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/my-custom-group.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], MyCustomGroupComponent);
    return MyCustomGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow my-deal\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>导入方式:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{operationType | codeValuePie:operationTypeList}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow my-deal\">\r\n    <header-title [Info]=\"'群机构批量调整'\"></header-title>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"adjustmentOrgList\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'200px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群号\" [style]=\"{'width':'200px'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].groupId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群名称\" [style]=\"{'width':'200px'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].groupName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"群主\" [style]=\"{'width':'200px'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].ownerName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"原群所属机构\" [style]=\"{'width':'200px'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].orgId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"调整后群所属机构\" [style]=\"{'width':'200px'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{adjustmentOrgList[i].afterOrgId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <examine-page [IntegralInvalue]=\"integralInfo\"></examine-page>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .text-right {\n    text-align: right; }\n  :host /deep/ .account-integral-overf .ui-dialog.ui-shadow {\n  height: 500px !important; }\n  :host/deep/ .account-integral-overf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  .table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbXktZWxlbWVudC1vcmcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXG15LWVsZW1lbnQtb3JnXFxteS1lbGVtZW50LW9yZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUE0QixFQUFBO0VBRGhDO0lBR1EsaUJBQWlCLEVBQUE7RUFHekI7RUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtFQUNJLFdBQVcsRUFBQTtFQUVmO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9teS1lbGVtZW50LW9yZy9teS1lbGVtZW50LW9yZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1kZWFsIHtcclxuICAgIG1heC1oZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5hY2NvdW50LWludGVncmFsLW92ZXJmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAuYWNjb3VudC1pbnRlZ3JhbC1vdmVyZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4udGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MyElementOrg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyElementOrg", function() { return MyElementOrg; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





// import { Customtools } from "app/pages/tzb/custom/http/customUtil";

var MyElementOrg = /** @class */ (function () {
    function MyElementOrg(commfunc, routeInfo, httpService, 
    // private commonFunc: Customtools,
    fb) {
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.httpService = httpService;
        this.fb = fb;
        this.detailList = []; //基本数据
        this.nameList = [];
        this.noPromptDispaly = false;
        this.adjustmentTypeList = [];
        this.adjustmentModeList = [];
        this.consumeOverdrawQuotaType = [];
        this.adjustOrientation = [];
        this.tablelist = [];
        this.canUp = false;
        this.isHistory = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.adjustmentOrgList = []; //机构集合
        // 获取参数
        this.detailList = this.routeInfo.snapshot.params;
        this.beanExam = JSON.parse(this.routeInfo.snapshot.params.dataMap);
        // this.bean = JSON.parse(this.routeInfo.snapshot.params.dataMap)
        this.taskRate = this.routeInfo.snapshot.params['taskRate'];
        this.flag = this.routeInfo.snapshot.params['markFlag'];
        if (this.flag == '1') {
            this.isHistory = false;
        }
        else {
            this.isHistory = true;
        }
        if (this.taskRate == '1' && !this.isHistory) {
            this.canUp = true;
        }
        else {
            this.canUp = false;
        }
        this.userform = fb.group({
            partyClassificationGroupId: [''],
            orgName: [''],
            orgId: [''],
            groupName: [''],
            ownerName: [''],
            ownerId: [''],
            afterOrgName: [''],
            afterOrgId: [''],
        });
    }
    MyElementOrg.prototype.ngOnInit = function () {
        this.codeValues();
        this.operationType = this.beanExam.operationType;
        this.operationTypeList = this.code['operationTypeGroup'];
        this.adjustmentOrgList = this.beanExam.adjustmentOrgList;
    };
    //码值
    MyElementOrg.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MyElementOrg = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-element-org',
            template: __webpack_require__(/*! ./my-element-org.component.html */ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.html"),
            styles: [__webpack_require__(/*! ./my-element-org.component.scss */ "./src/app/pages/tzb/custom/custom-group/my-element-org/my-element-org.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], MyElementOrg);
    return MyElementOrg;
}());



/***/ })

}]);
//# sourceMappingURL=custom-group-custom-group-module.js.map