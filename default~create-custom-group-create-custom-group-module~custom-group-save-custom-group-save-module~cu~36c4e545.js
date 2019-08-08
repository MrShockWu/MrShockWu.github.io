(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-custom-group-create-custom-group-module~custom-group-save-custom-group-save-module~cu~36c4e545"],{

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-2 text_right\">\r\n        <label>关联可售产品:</label>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-5 overf\">\r\n        <p-tree [value]=\"select_Tproduct\" selectionMode=\"multiple\" (onNodeSelect)=\"nodeCheckQg($event)\" (onNodeExpand)=\"nodeExpendQg($event)\">\r\n        </p-tree>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-5\">\r\n        <h4>\r\n            <img src=\"assets/layout/images/titYJ.png\" />&nbsp;可选择的产品\r\n        </h4>\r\n        <div class=\"ul_box\">\r\n            <ul class=\"overf\">\r\n                <li *ngFor=\"let col of is_choose_product2;let i = index\">\r\n                    <p-checkbox [(ngModel)]=\"valueListTwo\" value=\"{{i}}\" name=\"bb\" (click)=\"listTwo()\"></p-checkbox>\r\n                    {{col.label}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"确定\" (click)=\"commit()\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n.ul_box ul li {\n  list-style-type: none;\n  white-space: nowrap; }\n\n.overf {\n  max-height: 200px;\n  overflow-y: auto; }\n\n.text_right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC9ncm91cC1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjcmVhdGUtY3VzdG9tLWdyb3VwXFxncm91cC1wcm9kdWN0XFxncm91cC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2NyZWF0ZS1jdXN0b20tZ3JvdXAvZ3JvdXAtcHJvZHVjdC9ncm91cC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bF9ib3ggdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm92ZXJmIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnRleHRfcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: GroupProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProductComponent", function() { return GroupProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupProductComponent = /** @class */ (function () {
    function GroupProductComponent(productPlatformHttpService, commfunc, httpService) {
        this.productPlatformHttpService = productPlatformHttpService;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.select_Tproduct = []; //关联可售产品
        this.iscompele = false;
        this.relationValue = []; //关联可售产品
        this.is_choose_product2 = []; //关联可售产品可选
        this.is_choose_product3 = []; //关联可售产品可选(jia)
        this.valueListTwo = []; //关联可售产品已选
        this.relationPro_list = []; //产品数组
    }
    GroupProductComponent.prototype.ngOnInit = function () {
        this.relationValue = [];
        this.product_queryg();
    };
    // 关联可售产品
    GroupProductComponent.prototype.product_queryg = function () {
        var this_ = this;
        var delData2 = function (data) {
            var arr3 = [];
            for (var _i = 0, _a = data.productLineList; _i < _a.length; _i++) {
                var key = _a[_i];
                arr3.push({
                    label: key.productLineName,
                    value: [key.productLineId, 1],
                    children: [{}]
                });
                this_.select_Tproduct = arr3;
            }
        };
        this.interfaceComFnc(this.productPlatformHttpService.productCategoryLineQueryList({}), delData2);
    };
    GroupProductComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
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
    // //关联
    // //-
    GroupProductComponent.prototype.nodeCheckQg = function (event) {
        var _this = this;
        this.valueListTwo = [];
        var this_ = this;
        var parames = {
            pageNum: 1,
            pageSize: 10000,
            productTemplateId: event.node.value[0]
        };
        this.productPlatformHttpService.findAvailableProductList(parames).subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                var arr = [];
                for (var _i = 0, _a = data.resultList; _i < _a.length; _i++) {
                    var key = _a[_i];
                    arr.push({
                        label: key.productName,
                        value: [key.productId, 0],
                        children: [{}]
                    });
                }
                this_.is_choose_product2 = arr;
                this_.is_choose_product2.forEach(function (items, i) {
                    _this.relationValue.forEach(function (iten) {
                        if (items.value[0] === iten) {
                            var k = i.toString();
                            _this.valueListTwo.push(k);
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
    //+
    GroupProductComponent.prototype.nodeExpendQg = function (event) {
        var this_ = this;
        var parames = {
            pageNum: 1,
            pageSize: 10000,
            productLineId: event.node.value[0]
        };
        var parames2 = {
            groupId: event.node.value[0]
        };
        var delData = function (data) {
            var arr = [];
            for (var _i = 0, _a = data.productGroupInfoList; _i < _a.length; _i++) {
                var key = _a[_i];
                arr.push({
                    label: key.groupName,
                    value: [key.groupId, 2],
                    children: [{}]
                });
            }
            event.node.children = arr;
        };
        var delData2 = function (data) {
            var arr = [];
            for (var _i = 0, _a = data.groupTempList; _i < _a.length; _i++) {
                var key = _a[_i];
                arr.push({
                    label: key.tplName,
                    value: [key.tplId, 3],
                });
            }
            event.node.children = arr;
        };
        if (event.node.value[1] === 1) {
            this.interfaceComFnc(this.productPlatformHttpService.productCategoryGroupInfoQueryList(parames), delData);
        }
        else if (event.node.value[1] === 2) {
            this.interfaceComFnc(this.productPlatformHttpService.pdGroupTemplateQuery(parames2), delData2);
        }
        else if (event.noed.value[1] === 3) {
        }
    };
    GroupProductComponent.prototype.listTwo = function () {
        var _this = this;
        this.is_choose_product3 = this.is_choose_product2;
        this.valueListTwo.sort(function (a, b) { return b - a; });
        this.valueListTwo.forEach(function (item) {
            var n = 0;
            _this.relationValue.forEach(function (items) {
                if (_this.is_choose_product3[item].value[0] == items) {
                    n++;
                }
            });
            if (n === 0) {
                _this.relationValue.push(_this.is_choose_product3[item].value[0]);
                _this.relationPro_list.push({
                    productCode: _this.is_choose_product3[item].value[0],
                    productName: _this.is_choose_product3[item].label
                });
            }
        });
        this.is_choose_product3.forEach(function (item, i) {
            var k = 0;
            var m = 0;
            _this.relationValue.forEach(function (items) {
                if (item.value[0] == items) {
                    k++;
                }
            });
            if (k > 0) {
                _this.valueListTwo.forEach(function (itemd) {
                    if (i == itemd) {
                        m++;
                    }
                });
                if (m == 0) {
                    _this.relationValue.forEach(function (itemsd, n) {
                        if (item.value[0] == itemsd) {
                            _this.relationValue.splice(n, 1);
                            _this.relationPro_list.splice(n, 1);
                        }
                    });
                }
            }
        });
    };
    GroupProductComponent.prototype.commit = function () {
        this.outValue.emit(this.relationPro_list);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GroupProductComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GroupProductComponent.prototype, "inValue", void 0);
    GroupProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-product',
            template: __webpack_require__(/*! ./group-product.component.html */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.html"),
            styles: [__webpack_require__(/*! ./group-product.component.scss */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.scss")],
            providers: [_product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]])
    ], GroupProductComponent);
    return GroupProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GroupProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProductModule", function() { return GroupProductModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _group_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-product.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//客户群组
var GroupProductModule = /** @class */ (function () {
    function GroupProductModule() {
    }
    GroupProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _group_product_component__WEBPACK_IMPORTED_MODULE_4__["GroupProductComponent"]
            ],
            exports: [
                _group_product_component__WEBPACK_IMPORTED_MODULE_4__["GroupProductComponent"]
            ],
            providers: []
        })
    ], GroupProductModule);
    return GroupProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~create-custom-group-create-custom-group-module~custom-group-save-custom-group-save-module~cu~36c4e545.js.map