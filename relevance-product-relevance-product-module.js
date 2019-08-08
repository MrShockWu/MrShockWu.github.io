(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relevance-product-relevance-product-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"padding:0\">\r\n    <div class=\"ui-g-12 product-name\">\r\n        <span>\r\n            关联产品：\r\n            <button pButton type=\"button\" (click)=\"selectProduct()\" label=\"关联产品选择\" [disabled]=\"showDisabled || (marketingCampaigntType =='12' && dataSource =='01')\"></button>\r\n        </span>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [(value)]=\"dataList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column field=\"\" header=\"序号\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{i+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"productId\" header=\"产品编号\"></p-column>\r\n            <p-column field=\"productName\" header=\"产品名称\"></p-column>\r\n            <p-column field=\"\" header=\"操作\" *ngIf=\"!dataSource || dataSource!='01'\"[sortable]=\"false\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(i)\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 title-header\" *ngIf=\"marketingCampaigntType =='12'\">\r\n\t\t<div class=\"ui-g-2 cmtextlable\" style=\"padding-top:0\">\r\n\t\t\t<span appValidation>推荐产品理由：</span>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-8\" style=\"padding-top:0;padding-bottom:0\">\r\n            <!-- <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"recReasons\" (keyup)=\"nameKey('2')\"></textarea> -->\r\n            <textarea rows=\"4\" cols=\"80\" pInputTextarea [(ngModel)]=\"recReasons\" autoResize=\"autoResize\"></textarea>\r\n\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"showName1\">\r\n\t\t\t\t最大长度不能超过255！\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\"></button>\r\n        <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\"></button>\r\n        <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    </div>\r\n</div>\r\n\r\n<!-- 模态框产品树一期-->\r\n<!-- <p-dialog *ngIf=\"display\" modal=\"modal\" [(visible)]=\"display\" [responsive]=\"true\" class=\"select-tree2\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <marketing-product-tree (outValue)=\"updateCall($event)\" [inValue]=\"upInValue\"></marketing-product-tree>\r\n    </div>\r\n</p-dialog> -->\r\n<p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" (onHide)=\"closeSetting()\" modal=\"true\"\r\n    class=\"cardStatusAdjustmentProf\">\r\n    <select-product-component *ngIf=\"selectProductDisplay\" [inValue]=\"invalue\" [isCatelog]=\"isCatelog\"  (outValue)=\"updateCall($event)\"></select-product-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cmtextlable {\n  text-align: right; }\n\n.btn-switch, .product-name {\n  text-align: center; }\n\n:host/deep/ .select-tree2 .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host /deep/ .cardStatusAdjustmentProf .ui-dialog.ui-shadow {\n  height: 90% !important; }\n\n:host/deep/ .cardStatusAdjustmentProf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLWFjdGl2aXRlL3JlbGV2YW5jZS1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxtYXJrZXRpbmctYWN0aXZpdGVcXHJlbGV2YW5jZS1wcm9kdWN0XFxyZWxldmFuY2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUVJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL21hcmtldGluZy1hY3Rpdml0ZS9yZWxldmFuY2UtcHJvZHVjdC9yZWxldmFuY2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbXRleHRsYWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRuLXN3aXRjaCwucHJvZHVjdC1uYW1le1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvIC5zZWxlY3QtdHJlZTIgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAvLyB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jYXJkU3RhdHVzQWRqdXN0bWVudFByb2YgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ReleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleProductComponent", function() { return ReleProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/marketing.http.service */ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts");
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
 * 关联产品
 */
var ReleProductComponent = /** @class */ (function () {
    function ReleProductComponent(router, activatedRoute, commfunc, marketingHttpService, confirmationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commfunc = commfunc;
        this.marketingHttpService = marketingHttpService;
        this.confirmationService = confirmationService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.display = false;
        this.dataList = [];
        this.msgs = [];
        this.marketingCampaigntType = [];
        this.activiteData = {}; //接收详情数据
        this.url = [];
        this.isNext = false;
        this.showDisabled = false; //可编辑
        this.selectProductDisplay = false; //弹出框
        this.isCatelog = true;
        this.marketingCampaignId = this.activatedRoute.snapshot.params['marketingCampaignId']; //营销活动id
        this.marketingCampaigntType = this.activatedRoute.snapshot.params['marketingCampaigntType'];
        this.batchId = this.activatedRoute.snapshot.params['batchId'];
        this.secBatchId = this.activatedRoute.snapshot.params['secBatchId'];
        this.dataSource = this.activatedRoute.snapshot.params['dataSource'];
        this.flagCopy = this.activatedRoute.snapshot.params['flagCopy']; //复制和修改的标识
        // this.deId=this.activatedRoute.snapshot.params['deId'];
        this.tabPrev = this.activatedRoute.snapshot.params['tabPrev'];
    }
    ReleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dataList = [];
        });
        // this.dataList=[];
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        this.url.forEach(function (element, index) {
            if (element.label == "ReleProductComponent") {
                if (index + 1 == _this.url.length) { //判断是最后一个
                    _this.isNext = true;
                }
            }
        });
        // if (this.flagCopy) {
        // 	this.activiteData = JSON.parse(this.activatedRoute.snapshot.params['activiteData']);//接收详情的数据
        // 	if (this.activiteData.relationProductList) {
        // 		this.dataList = this.activiteData.relationProductList;
        // 	}
        // 	if (this.activiteData.statusId=='3') {//状态为已发布进行中时不给修改
        // 		this.showDisabled = true;
        // 	}else{
        // 		this.showDisabled = false;
        // 	}
        // }
        // if (this.marketingCampaignId) {
        // 	this.echoClick()
        // }
        //交叉销售--产品查询（数据来源为模型）
        if (this.marketingCampaigntType == '12') {
            this.invalue = 'advancedCatelog';
            this.queryRecommendProduct();
        }
        else if (this.marketingCampaignId) {
            this.invalue = 'catelogPage';
            this.echoClick();
        }
    };
    // 交叉销售--产品查询（数据来源为模型）
    ReleProductComponent.prototype.queryRecommendProduct = function () {
        var _this = this;
        var param = {
            batchId: this.batchId,
            secBatchId: this.secBatchId,
        };
        this.marketingHttpService.queryRecommendProduct(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.recommendProductList;
                _this.recReasons = data.recReasons;
                // this.dataSource = data.dataSource;
                if (_this.dataList == null) {
                    _this.dataList = [];
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //关联产品选择
    ReleProductComponent.prototype.selectProduct = function () {
        this.selectProductDisplay = true;
        // this.upInValue = { flag: '1' }
    };
    // 关闭模态框
    ReleProductComponent.prototype.closeSetting = function () {
        this.selectProductDisplay = false;
    };
    //关联产品-回调产品
    ReleProductComponent.prototype.updateCall = function (event) {
        this.selectProductDisplay = false;
        var productList = event;
        var arr = [];
        for (var _i = 0, productList_1 = productList; _i < productList_1.length; _i++) {
            var i = productList_1[_i];
            var array = {};
            if (i.productId != "") {
                array['productId'] = i.productId,
                    array['productName'] = i.productName,
                    arr.push(array);
                console.log(i.productId);
                console.log(this.dataList);
                if (this.marketingCampaigntType == '12') {
                    if (this.dataList.length == 0) {
                        this.dataList.push(array);
                    }
                    else {
                        for (var j = 0; j < this.dataList.length; j++) {
                            if (this.dataList[j].productId == i.productId) {
                                this.msgs = [];
                                this.msgs.push({ severity: 'error', summary: '提示', detail: '该产品已存在!' });
                                break;
                            }
                            if (j == this.dataList.length - 1) {
                                this.dataList.push(array);
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (arr.length == 0) {
            arr = [{
                    productId: '',
                    productName: '',
                }];
        }
        console.log(this.marketingCampaigntType);
        if (this.marketingCampaigntType != '12') {
            this.dataList = arr;
        }
        console.log(this.dataList);
    };
    //删除
    ReleProductComponent.prototype.toDelete = function (i) {
        this.dataList.splice(i, 1);
        this.dataList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.dataList);
    };
    //下一步
    ReleProductComponent.prototype.next = function () {
        var _this = this;
        if (this.marketingCampaigntType == '12') {
            if (!this.dataList || this.dataList == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择产品!' });
            }
            else {
                if (!this.recReasons) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请填写推荐产品理由!' });
                    return;
                }
                if (this.dataSource != '01') {
                    //更新批次列表
                    var params = {
                        batchId: this.batchId,
                        secBatchId: this.secBatchId,
                        marketingCampaignId: this.marketingCampaignId,
                        productList: this.dataList,
                        recReasons: this.recReasons,
                    };
                    this.marketingHttpService.updateBusiBatchInfo(params).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                    });
                    // 更新批次明细
                    // let parames = {
                    // 	batchId: this.batchId,
                    // 	secBatchId: this.secBatchId,
                    // 	marketingCampaignId: this.marketingCampaignId,
                    // 	productList: this.dataList,
                    // 	recReasons: this.recReasons,
                    // 	// marketStat: '02',
                    // }
                    // this.marketingHttpService.updateBusiBatchDetailInfo(parames).subscribe(data => {
                    // 	if (data.returnCode.code == 'success') {
                    // 		debugger;
                    // 		this.msgs = [];
                    // 		this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    // 	} else {
                    // 		this.msgs = [];
                    // 		this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    // 	}
                    // }, error => {
                    // 	this.msgs = [];
                    // 	this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                    // });
                }
                else {
                    var params = {
                        batchId: this.batchId,
                        secBatchId: this.secBatchId,
                        marketingCampaignId: this.marketingCampaignId,
                        recReasons: this.recReasons,
                    };
                    this.marketingHttpService.updateBusiBatchDetailInfo(params).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                    });
                }
                // if (this.isNext) {
                // 	this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail', paramSum])
                // } else {
                this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
                var navUrl_1 = '';
                var indexId_1 = '';
                this.url.forEach(function (element, index) {
                    if (element.label == "ReleProductComponent") {
                        navUrl_1 = _this.url[index + 1].url;
                        indexId_1 = _this.url[index + 1].index;
                    }
                });
                var param = {};
                if (this.flagCopy) {
                    param = {
                        marketingCampaignId: this.marketingCampaignId,
                        relationProductList: JSON.stringify(this.dataList),
                        marketingCampaigntType: this.marketingCampaigntType,
                        batchId: this.batchId,
                        dataSource: this.dataSource,
                        secBatchId: this.secBatchId,
                        flagCopy: this.flagCopy
                    };
                }
                else {
                    param = {
                        marketingCampaignId: this.marketingCampaignId,
                        batchId: this.batchId,
                        dataSource: this.dataSource,
                        secBatchId: this.secBatchId,
                        relationProductList: JSON.stringify(this.dataList),
                        marketingCampaigntType: this.marketingCampaigntType,
                    };
                }
                this.router.navigate([navUrl_1, param]); //促销手段
                this.commfunc.setSessionDataCH('index', indexId_1);
            }
        }
        else {
            var param = {
                marketingCampaignId: this.marketingCampaignId,
                relationProductList: this.dataList,
            };
            this.marketingHttpService.createCampaignProduct(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var paramSum = {
                        marketingCampaignId: _this.marketingCampaignId,
                        type: 'marking',
                        // deId:this.deId,
                        marketingCampaigntType: _this.marketingCampaigntType
                    };
                    if (_this.isNext) {
                        _this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail', paramSum]);
                    }
                    else {
                        _this.url = JSON.parse(_this.commfunc.getSessionDataCH('markingURL'));
                        var navUrl_2 = '';
                        var indexId_2 = '';
                        _this.url.forEach(function (element, index) {
                            if (element.label == "ReleProductComponent") {
                                navUrl_2 = _this.url[index + 1].url;
                                indexId_2 = _this.url[index + 1].index;
                            }
                        });
                        var param_1 = {};
                        if (_this.flagCopy) {
                            param_1 = {
                                marketingCampaignId: _this.marketingCampaignId,
                                relationProductList: JSON.stringify(_this.dataList),
                                marketingCampaigntType: _this.marketingCampaigntType,
                                flagCopy: _this.flagCopy
                            };
                        }
                        else {
                            param_1 = {
                                marketingCampaignId: _this.marketingCampaignId,
                                relationProductList: JSON.stringify(_this.dataList),
                                marketingCampaigntType: _this.marketingCampaigntType,
                            };
                        }
                        _this.router.navigate([navUrl_2, param_1]); //促销手段
                        _this.commfunc.setSessionDataCH('index', indexId_2);
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
    };
    //上一步
    ReleProductComponent.prototype.prev = function () {
        var _this = this;
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        var navUrl = '';
        var indexId = '';
        this.url.forEach(function (element, index) {
            if (element.label == "ReleProductComponent") {
                navUrl = _this.url[index - 1].url;
                indexId = _this.url[index - 1].index;
            }
        });
        var param = {};
        if (this.marketingCampaigntType != '12') {
            if (this.flagCopy) {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    marketingCampaigntType: this.marketingCampaigntType,
                    flagCopy: this.flagCopy,
                    tabPrev: 'tabUp'
                };
            }
            else {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    marketingCampaigntType: this.marketingCampaigntType,
                    tabPrev: 'tabUp'
                };
            }
        }
        else {
            debugger;
            if (this.flagCopy) {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    marketingCampaigntType: this.marketingCampaigntType,
                    batchId: this.batchId,
                    dataSource: this.dataSource,
                    secBatchId: this.secBatchId,
                    flagCopy: this.flagCopy,
                    tabPrev: 'tabUp'
                };
            }
            else {
                param = {
                    batchId: this.batchId,
                    dataSource: this.dataSource,
                    secBatchId: this.secBatchId,
                    marketingCampaignId: this.marketingCampaignId,
                    marketingCampaigntType: this.marketingCampaigntType,
                    tabPrev: 'tabUp'
                };
            }
        }
        this.router.navigate([navUrl, param]); //营销对象
        this.commfunc.setSessionDataCH('index', indexId);
    };
    //重置
    ReleProductComponent.prototype.rest = function () {
        this.dataList = [];
    };
    //详情
    ReleProductComponent.prototype.echoClick = function () {
        var _this = this;
        this.marketingHttpService.queryMarketingCampaignById({ marketingCampaignId: this.marketingCampaignId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var marketingParam = {
                    marketingObjectType: data.marketingObjectType,
                    exploreCondtionId: data.exploreCondtionId
                };
                _this.commfunc.setSessionDataCH('marketingParam', JSON.stringify(marketingParam));
                if (data.relationProductList) {
                    _this.dataList = data.relationProductList;
                }
                if (data.statusId == '3') { //状态为已发布进行中时不给修改
                    _this.showDisabled = true;
                }
                else {
                    _this.showDisabled = false;
                }
            }
        });
    };
    ReleProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'relevance-product',
            template: __webpack_require__(/*! ./relevance-product.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.html"),
            styles: [__webpack_require__(/*! ./relevance-product.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.scss")],
            providers: [_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__["MarketingHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__["MarketingHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], ReleProductComponent);
    return ReleProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ReleProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleProductModule", function() { return ReleProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _relevance_product_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relevance-product.routing */ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.routing.ts");
/* harmony import */ var _relevance_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relevance-product.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.ts");
/* harmony import */ var _marketing_product_tree_marketing_product_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../marketing-product-tree/marketing-product-tree.module */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-product-tree/marketing-product-tree.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { MarketingProductTree } from '../marketing-product-tree/marketing-product-tree.component';
var ReleProductModule = /** @class */ (function () {
    function ReleProductModule() {
    }
    ReleProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //基本要素
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _relevance_product_routing__WEBPACK_IMPORTED_MODULE_5__["ReleProductRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _marketing_product_tree_marketing_product_tree_module__WEBPACK_IMPORTED_MODULE_7__["MarketingProductTreeModule"]
            ],
            declarations: [
                _relevance_product_component__WEBPACK_IMPORTED_MODULE_6__["ReleProductComponent"],
            ],
            providers: []
        })
    ], ReleProductModule);
    return ReleProductModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.routing.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.routing.ts ***!
  \**************************************************************************************************************/
/*! exports provided: routes, ReleProductRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleProductRouting", function() { return ReleProductRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _relevance_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relevance-product.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/relevance-product/relevance-product.component.ts");


var routes = [
    { path: '', component: _relevance_product_component__WEBPACK_IMPORTED_MODULE_1__["ReleProductComponent"] }
];
var ReleProductRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=relevance-product-relevance-product-module.js.map