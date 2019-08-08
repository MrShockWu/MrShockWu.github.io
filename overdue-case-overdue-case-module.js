(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overdue-case-overdue-case-module"],{

/***/ "./src/app/@uisftech/view/graph/graph.bean.ts":
/*!****************************************************!*\
  !*** ./src/app/@uisftech/view/graph/graph.bean.ts ***!
  \****************************************************/
/*! exports provided: GraphBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphBean", function() { return GraphBean; });
var GraphBean = /** @class */ (function () {
    function GraphBean() {
    }
    return GraphBean;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/graph/graph.component.html":
/*!***********************************************************!*\
  !*** ./src/app/@uisftech/view/graph/graph.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n\t<div>\r\n\t\t<button label=\"导出\" pButton (click)=\"openHeaderClick()\"></button>\r\n\t</div>\r\n\t<div>\r\n\t\t<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum=1&scene=0303_XWZH_View\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"relationCustNo\" header=\"关联客户号码\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(col.relationCustNo)}}&pageNum=1&scene=0303_XWZH_View\" target=\"_blank\">{{col.relationCustNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"relationCustName\" header=\"关联客户名称\"></p-column>\r\n\t\t\t<!-- <p-column field=\"relationTypeParent\" header=\"关联关系类型(大类)\"></p-column>\r\n\t\t\t\t\t<p-column field=\"relationType\" header=\"关联关系类型(小类)\"></p-column> -->\r\n\t\t\t<p-column field=\"relationName\" header=\"关联关系名称\"></p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"欠款金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span *ngIf=\"!permissionCheck('X_TPGX_M|loanBal')\">**********</span>\r\n\t\t\t\t\t<span *ngIf=\"permissionCheck('X_TPGX_M|loanBal')\">\r\n\t\t\t\t\t\t{{col.loanBal}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"acceptanceOpeningAmt\"  header=\"承兑敞口(余额)\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span *ngIf=\"!permissionCheck('X_TPGX_M|acceptanceOpeningAmt')\">**********</span>\r\n\t\t\t\t\t<span *ngIf=\"permissionCheck('X_TPGX_M|acceptanceOpeningAmt')\">\r\n\t\t\t\t\t\t{{col.acceptanceOpeningAmt}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"deptBal\"  header=\"存款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span *ngIf=\"!permissionCheck('X_TPGX_M|deptBal')\">**********</span>\r\n\t\t\t\t\t<span *ngIf=\"permissionCheck('X_TPGX_M|deptBal')\">\r\n\t\t\t\t\t\t{{col.deptBal}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"mDeptAvgBal\"  header=\"存款月日均\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span *ngIf=\"!permissionCheck('X_TPGX_M|mDeptAvgBal')\">**********</span>\r\n\t\t\t\t\t<span *ngIf=\"permissionCheck('X_TPGX_M|mDeptAvgBal')\">\r\n\t\t\t\t\t\t{{col.mDeptAvgBal}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"cerdCardCrdtAmt\" header=\"贷记卡授信金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span *ngIf=\"!permissionCheck('X_TPGX_M|cerdCardCrdtAmt')\">**********</span>\r\n\t\t\t\t\t<span *ngIf=\"permissionCheck('X_TPGX_M|cerdCardCrdtAmt')\">\r\n\t\t\t\t\t\t{{col.cerdCardCrdtAmt}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t\t<!-- 分页 -->\r\n\t\t<p-paginator [first]=\"first\" rows=\"pageSize\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div echarts (chartClick)=\"echartsOn($event)\" [options]=\"options\" id=\"main\" style=\"height:600px;overflow:auto\"></div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/@uisftech/view/graph/graph.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/@uisftech/view/graph/graph.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconBtn {\n  width: 100%;\n  display: flex;\n  justify-content: space-between; }\n  .iconBtn .iscolor {\n    background: #ffc900;\n    float: right;\n    margin-top: 3px; }\n  .iconBtn .iscolor:hover {\n      background: #ffc900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHVpc2Z0ZWNoL3ZpZXcvZ3JhcGgvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxcQHVpc2Z0ZWNoXFx2aWV3XFxncmFwaFxcZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYztFQUNkLDhCQUE4QixFQUFBO0VBSGxDO0lBS1EsbUJBQW1CO0lBQ25CLFlBQVc7SUFDWCxlQUFjLEVBQUE7RUFQdEI7TUFTWSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0B1aXNmdGVjaC92aWV3L2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXggO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmlzY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/@uisftech/view/graph/graph.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@uisftech/view/graph/graph.component.ts ***!
  \*********************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _graph_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph.bean */ "./src/app/@uisftech/view/graph/graph.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;





var GraphComponent = /** @class */ (function () {
    function GraphComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.categories = [{ name: '人物' }];
        this.data = [];
        this.links = [];
        this.graphBean = new _graph_bean__WEBPACK_IMPORTED_MODULE_3__["GraphBean"]();
        this.tableData = [];
        this.pageSize = 10;
        this.first = 0;
        this.msgs = [];
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.graphBean.pageNum = 1;
        this.graphBean.pageSize = 10;
        this.graphBean.custNo = this.custNo;
        this.selectCustRelationShipList(this.graphBean);
        this.selectCustRelationShipListByCust({ custNo: this.custNo });
    };
    // 查询表格数据
    GraphComponent.prototype.selectCustRelationShipList = function (param) {
        var _this = this;
        this.httpService.selectCustRelationShipList(param).subscribe(function (data) {
            if (data.returnCode.code = 'success') {
                _this.tableData = data.infoList;
                _this.total = data.totalNum;
            }
        });
    };
    GraphComponent.prototype.paginate = function (event) {
        this.graphBean.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.graphBean.pageNum = currentPage;
        this.first = event.page * event.rows;
        this.selectCustRelationShipList(this.graphBean);
    };
    //查询拓扑图数据
    GraphComponent.prototype.selectCustRelationShipListByCust = function (param) {
        var _this = this;
        this.httpService.selectCustRelationShipListByCust(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custList = data.infoList;
                if (data.infoList && data.infoList.length > 0) {
                    for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (_this.links.length > 0) {
                            var curveness = 0.2;
                            for (var _b = 0, _c = _this.links; _b < _c.length; _b++) {
                                var i = _c[_b];
                                if (i.source == item.custName && i.target == item.relationCustName) {
                                    curveness += 0.1;
                                }
                            }
                            var links = {
                                source: item.custName,
                                target: item.relationCustName,
                                name: item.relationName,
                                lineStyle: {
                                    normal: {
                                        curveness: 0.2,
                                        width: 1,
                                        fontSize: 6,
                                        color: '#000',
                                    }
                                },
                                label: {
                                    show: true,
                                    fontSize: 10,
                                    formatter: function (item) {
                                        if (item.data.name) {
                                            return item.data.name.indexOf(',') != -1 ? item.data.name.replace(',', ' \n ') : item.data.name;
                                        }
                                        else {
                                            return '';
                                        }
                                    }
                                }
                            };
                            _this.links.push(links);
                        }
                        else {
                            var links = {
                                source: item.custName,
                                target: item.relationCustName,
                                name: item.relationName,
                                lineStyle: {
                                    normal: {
                                        curveness: 0.2,
                                        width: 1
                                    }
                                },
                                label: {
                                    show: true,
                                    fontSize: 8,
                                    formatter: function (item) {
                                        debugger;
                                        if (item.data.name) {
                                            return item.data.name.indexOf(',') != -1 ? item.data.name.replace(',', '\n ') : item.data.name;
                                        }
                                        else {
                                            return '';
                                        }
                                    }
                                }
                            };
                            _this.links.push(links);
                        }
                    }
                    console.log(_this.links);
                    console.log(_this.categories);
                    var arr = [];
                    for (var _d = 0, _e = data.infoList; _d < _e.length; _d++) {
                        var item = _e[_d];
                        debugger;
                        var nodes = {};
                        if (item.relationCustNo == _this.custNo) {
                            nodes = {
                                name: item.relationCustName,
                                category: '本人'
                            };
                        }
                        if (item.partyTypeId == '1' && item.relationCustNo != _this.custNo) {
                            nodes = {
                                name: item.relationCustName,
                                category: '个人'
                            };
                        }
                        if (item.partyTypeId == '2' && item.relationCustNo != _this.custNo) {
                            nodes = {
                                name: item.relationCustName,
                                category: '企业'
                            };
                        }
                        arr.push(nodes);
                        // this.data.push(nodes)
                    }
                    console.log(_this.data);
                    for (var i = 0; i < arr.length; i++) {
                        var flag = true;
                        for (var j = 0; j < _this.data.length; j++) {
                            if (_this.data[j].name == arr[i]['name']) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            _this.data.push(arr[i]);
                        }
                    }
                }
            }
            //渲染拓扑图
            _this.options = {
                title: {
                    x: 'right',
                    y: 'bottom'
                },
                grid: {
                    x: 10,
                    y: 10
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}:{b}'
                },
                toolbox: {
                    show: true,
                    feature: {
                        restore: { show: true },
                        magicType: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    x: 'left'
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        name: "人物关系",
                        ribbonType: false,
                        label: {
                            normal: {
                                color: '#fff'
                            },
                            position: ['50%', '50%']
                        },
                        force: {
                            repulsion: 3000,
                            edgeLength: 70
                        },
                        categories: [
                            {
                                name: '本人',
                                itemStyle: {
                                    color: '#ffed00'
                                }
                            },
                            {
                                name: '个人',
                                itemStyle: {
                                    color: '#03e7d8'
                                }
                            },
                            {
                                name: '企业',
                                itemStyle: {
                                    color: '#0eb5f7'
                                }
                            }
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 4,
                                        width: 5
                                    }
                                },
                                nodeStyle: {},
                                lineStyle: {}
                            },
                            rich: {
                                a: {
                                    width: 10
                                }
                            },
                            width: 10
                        },
                        draggable: true,
                        edgeSymbol: ['none', 'arrow'],
                        roam: true,
                        height: 5000,
                        nodeScaleRatio: 0,
                        symbolSize: 50,
                        focusNodeAdjacency: true,
                        tooltip: {
                            formatter: function (item) {
                                return item.data.name;
                            }
                        },
                        lineStyle: {
                            normal: {
                                // opacity: 0.9,
                                width: 1,
                            }
                        },
                        data: _this.data,
                        links: _this.links
                    }
                ]
            };
        });
    };
    //按钮权限
    GraphComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    // 360视图跳转
    GraphComponent.prototype.echartsOn = function (event) {
        this.custList.forEach(function (element) {
            if (element.relationCustName == event.name) {
                window.open("/#/pages/custom-view?custNo=" + element.relationCustNo + "&pageNum=1");
            }
        });
    };
    GraphComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    // 导出
    GraphComponent.prototype.openHeaderClick = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            custName: this.custName,
        };
        this.httpService.custRelationShipListDownLoad(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var fileName = data.fileName;
                var filePath = data.fileUrl;
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(fileName) + "&fileUrl=" + filePath);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GraphComponent.prototype, "custNo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GraphComponent.prototype, "custName", void 0);
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'graph-component',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/@uisftech/view/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.scss */ "./src/app/@uisftech/view/graph/graph.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"], _common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"],
            _common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/graph/graph.module.ts":
/*!******************************************************!*\
  !*** ./src/app/@uisftech/view/graph/graph.module.ts ***!
  \******************************************************/
/*! exports provided: GraphModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphModule", function() { return GraphModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph.component */ "./src/app/@uisftech/view/graph/graph.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GraphModule = /** @class */ (function () {
    function GraphModule() {
    }
    GraphModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"]
            ],
            declarations: [
                _graph_component__WEBPACK_IMPORTED_MODULE_4__["GraphComponent"]
            ],
            exports: [
                _graph_component__WEBPACK_IMPORTED_MODULE_4__["GraphComponent"]
            ],
            providers: []
        })
    ], GraphModule);
    return GraphModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/pageData.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/pageData.ts ***!
  \*************************************************************/
/*! exports provided: PageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageData", function() { return PageData; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// 放弃该代码
var PageData = /** @class */ (function (_super) {
    __extends(PageData, _super);
    function PageData(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        _this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_0__["LocalData"](_this.commfunc);
        _this.historyHelper = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryHelper"]();
        return _this;
    }
    // 页面初始化时，保存数据
    PageData.prototype.setData = function (data) {
        debugger;
        var t;
        if (data.selfDebtInfo && data.selfDebtInfo.transformRationalitList) {
            t = this.historyHelper.getCurrentImmediately(data.selfDebtInfo.transformRationalitList);
            var transformRationalit = t ? t.transformRationalit : '';
            this.setSelfDebtInfo(transformRationalit);
        }
        if (!data.overdueFinancialCondition || !data.overdueFinancialCondition.length) {
            data.overdueFinancialCondition = [{
                    bankBorrowerAmt: '0.0',
                    societyRaisingAmt: '0.0',
                    accountsPayable: '0.0',
                    debtsTotal: '0.0',
                    receivables: '0.0',
                    stocks: '0.0',
                    fixedAssets: '0.0',
                    investmentsAbroad: '0.0',
                    propertyTotal: '0.0'
                }];
        }
        t = this.historyHelper.getCurrentImmediately(data.overdueFinancialCondition);
        var overdueFinancialCondition = t ? t : null;
        this.setOverdueFinancialCondition(overdueFinancialCondition);
        if (data.realityCreditPurpose) {
            t = this.historyHelper.getCurrentImmediately(data.realityCreditPurpose);
            var realityCreditPurpose = t ? t : null;
            this.setRealityCreditPurpose(realityCreditPurpose);
        }
        if (data.overdueReasonAnalyze) {
            t = this.historyHelper.getCurrentImmediately(data.overdueReasonAnalyze);
            var overdueReasonAnalyze = t ? t : null;
            this.setOverdueReasonAnalyze(overdueReasonAnalyze);
        }
        if (data.bondsmanCondition) {
            t = this.historyHelper.getCurrentImmediately(this.fixBondsmanCondition(data.bondsmanCondition));
            var bondsmanCondition = t ? t : null;
            this.setBondsmanCondition(bondsmanCondition);
        }
        // 授信工作开展情况
        if (!data.workCarryOutCondition || !data.workCarryOutCondition.length) {
            data.workCarryOutCondition = [{
                    accessOffset: '',
                    preLoanInspectionCondition: '',
                    examineAndApproveCondition: '',
                    afterLoanInspectionCondition: ''
                }];
        }
        t = this.historyHelper.getCurrentImmediately(data.workCarryOutCondition);
        var workCarryOutCondition = t ? t : null;
        this.setWorkCarryOutCondition(workCarryOutCondition);
        if (data.clearScheme) {
            t = this.historyHelper.getCurrentImmediately(data.clearScheme);
            var clearScheme = t ? t : null;
            this.setClearScheme(clearScheme);
        }
        if (data.catenaMoralRisk) {
            t = this.historyHelper.getCurrentImmediately(data.catenaMoralRisk);
            var catenaMoralRisk = t ? t : null;
            this.setCatenaMoralRisk(catenaMoralRisk);
        }
        if (data.workEvaluteResume) {
            t = this.historyHelper.getCurrentImmediately(data.workEvaluteResume);
            var workEvaluteResume = t ? t : null;
            this.setWorkEvaluteResume(workEvaluteResume);
        }
        if (data.complianceAnalyze) {
            t = this.historyHelper.getCurrentImmediately(data.complianceAnalyze);
            var complianceAnalyze = t ? t : null;
            this.setComplianceAnalyze(complianceAnalyze);
        }
        if (data.duteousManageEvalute) {
            t = this.historyHelper.getCurrentImmediately(data.duteousManageEvalute);
            var duteousManageEvalute = t ? t : null;
            this.setDuteousManageEvalute(duteousManageEvalute);
        }
    };
    PageData.prototype.fixNumber = function (source) {
        if (source && source.length) {
            source.forEach(function (element) {
                for (var property in element) {
                    if (element.hasOwnProperty(property) && typeof element[property] == 'number') {
                        element[property] = parseFloat(element[property]).toFixed(2);
                    }
                }
            });
        }
        return source;
    };
    PageData.prototype.fixBondsmanCondition = function (source) {
        var _this = this;
        var ret = [];
        source.forEach(function (element) {
            ret.push(_this.fixNumber(element));
        });
        return ret;
    };
    // 保存模块初始化参数
    PageData.prototype.setPageInitPara = function (parameter) {
        this.localData.setTemporaryData('overdue-initdata', parameter);
    };
    // 保存全局基本信息
    PageData.prototype.setBaseInfo = function (baseInfo) {
        this.localData.setTemporaryData("overdue-baseInfo", baseInfo);
    };
    // 逾期信息
    PageData.prototype.setSelfDebtInfo = function (transformRationalit) {
        this.commfunc.setSessionDataCH("overdue-selfDebtInfo", JSON.stringify({
            transformRationalit: transformRationalit,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setOverdueFinancialCondition = function (overdueFinancialCondition) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, overdueFinancialCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-overdueFinancialCondition", JSON.stringify({
            overdueFinancialCondition: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setRealityCreditPurpose = function (realityCreditPurpose) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, realityCreditPurpose, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-realityCreditPurpose", JSON.stringify({
            realityCreditPurpose: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setOverdueReasonAnalyze = function (overdueReasonAnalyze) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, overdueReasonAnalyze, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-overdueReasonAnalyze", JSON.stringify({
            overdueReasonAnalyze: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setBondsmanCondition = function (bondsmanCondition) {
        var list = [];
        this.toolBag.copyObjectListWithSkipping(list, bondsmanCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-bondsmanCondition", JSON.stringify({
            bondsmanCondition: list,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setClearScheme = function (clearScheme) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, clearScheme, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-clearScheme", JSON.stringify({
            clearScheme: clearScheme,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setWorkCarryOutCondition = function (workCarryOutCondition) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, workCarryOutCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-workCarryOutCondition", JSON.stringify({
            workCarryOutCondition: workCarryOutCondition,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setCatenaMoralRisk = function (catenaMoralRisk) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, catenaMoralRisk, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-catenaMoralRisk", JSON.stringify({
            catenaMoralRisk: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setWorkEvaluteResume = function (workEvaluteResume) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, workEvaluteResume, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-workEvaluteResume", JSON.stringify({
            workEvaluteResume: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setComplianceAnalyze = function (complianceAnalyze) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, complianceAnalyze, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-complianceAnalyze", JSON.stringify({
            complianceAnalyze: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    PageData.prototype.setDuteousManageEvalute = function (duteousManageEvalute) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, duteousManageEvalute, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-duteousManageEvalute", JSON.stringify({
            duteousManageEvalute: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    return PageData;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_1__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/pageProcess.ts ***!
  \****************************************************************/
/*! exports provided: PageProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProcess", function() { return PageProcess; });
var PageProcess = /** @class */ (function () {
    function PageProcess() {
        // 设置此标志的原因：ngOnChanges 事件第一次执行时，获取不到数据。必须等 ngOnInit 事件执行后才可以获取到。
        this.isInit = false;
    }
    PageProcess.prototype.setInit = function () {
        this.isInit = true;
    };
    PageProcess.prototype.getInit = function () {
        return this.isInit;
    };
    return PageProcess;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/selectHelper.ts ***!
  \*****************************************************************/
/*! exports provided: SelectHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHelper", function() { return SelectHelper; });
var SelectHelper = /** @class */ (function () {
    function SelectHelper() {
    }
    SelectHelper.prototype.valueCutter = function (prefix, source) {
        return source.substring(prefix.length, source.length);
    };
    SelectHelper.prototype.getLabel = function (array, value) {
        var ret = '';
        if (array && array.length) {
            var t = array.filter(function (i) { return i.value === value; });
            if (t && t.length) {
                ret = t[0].label;
            }
        }
        return ret;
    };
    SelectHelper.prototype.getLabels = function (array, values) {
        var _this = this;
        var ret = [];
        if (array && array.length) {
            var arr = values.split(',');
            if (arr && arr.length) {
                arr.forEach(function (element) {
                    var result = _this.getLabel(array, element);
                    if (result) {
                        ret.push(result);
                    }
                });
            }
        }
        return ret;
    };
    // 筛选方式 1
    // 用于 下拉框筛选，当 第一级的value，和第二级的vlaue有直接关联的时候。（如：firstClass: "100", secondClass: "100201"）
    SelectHelper.prototype.itemsfilter = function (key, list) {
        var ret = [];
        list.forEach(function (element) {
            if (element.value.indexOf(key) === 0) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 筛选方式 2
    // 此种筛选方式，基于这样的数据结构
    // { label: '', value: '101202' }               数据字典中的数据
    // { label: '', value: '202', parent: '101' }   重构后的数据
    SelectHelper.prototype.itemsFilterByParent = function (key, list) {
        var ret = [];
        list.forEach(function (element) {
            if (element.parent == key) {
                ret.push(element);
            }
        });
        return ret;
    };
    SelectHelper.prototype.itemsFilterByParentList = function (keys, list) {
        var ret = [];
        list.forEach(function (element) {
            if (keys.indexOf(element.parent) != -1) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 筛选方式 3
    // 服务于 贷款实际用途 下拉框筛选，但筛选逻辑已经修改，此逻辑是为了参照，第一种筛选方式，进行筛选。
    // 但这导致不能直接取到 符合文档标准的value，也导致筛选过程较为别扭。所以修改 筛选方式为 第二种。
    SelectHelper.prototype.itemsfilterByListKey = function (keys, list) {
        var _this = this;
        var ret = [];
        list.forEach(function (element) {
            if (_this.isValueExist(element.value, keys)) {
                ret.push(element);
            }
        });
        return ret;
    };
    // 服务于 贷款实际用途 下拉框筛选，但筛选逻辑已经修改
    SelectHelper.prototype.isValueExist = function (key, list) {
        var ret = false;
        for (var i = 0, len = list.length; i < len; i++) {
            var element = list[i];
            if (key.indexOf(element) === 0) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    return SelectHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/common/url.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/common/url.ts ***!
  \********************************************************/
/*! exports provided: UrlTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlTool", function() { return UrlTool; });
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_bean_transform_loan_plan_bean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/bean/transform-loan-plan.bean */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/bean/transform-loan-plan.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");


var UrlTool = /** @class */ (function () {
    function UrlTool(router, commfunc, httpService, commonlyMessage) {
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.commonlyMessage = commonlyMessage;
        this.tenTypeBean = new app_pages_tzb_custom_credit_ccm_transformation_plan_bean_transform_loan_plan_bean__WEBPACK_IMPORTED_MODULE_0__["TenTypeBean"]();
        this.TZB_HTTP_XIN = '';
        this.TZB_HTTP_XIN_C = '';
        this.userId = '';
        this.targetId = '';
        this.rootLink = '';
        this.loadBasicData();
        this.getCommonHeader();
        this.getTargetId();
        this.getUserId();
        this.setRootLink();
    }
    UrlTool.prototype.getParameter = function () {
        var url = location.href; //获取url中？后面的参数
        var paras = {};
        if (url.indexOf(";") != -1) {
            var str = url.substr(1);
            var strs = str.split(";");
            for (var i = 0; i < strs.length; i++) {
                if (strs[i].indexOf("=") != -1) {
                    paras[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }
            }
        }
        for (var prop in paras) {
            if (paras.hasOwnProperty(prop)) {
                paras[prop] = decodeURI(paras[prop]);
            }
        }
        return paras;
    };
    // 转化编号
    UrlTool.prototype.linkTo = function (callback) {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        this.commfunc.createBlank(target);
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + daijiCard + "&message=&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                var url = callback(tokens, _this.userId);
                url = _this.rootLink + url;
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        }, function (error) {
            _this.commonlyMessage.logicError('调用服务失败');
        });
    };
    UrlTool.prototype.transform = function (urlType, dataId, contractNo, tranSeqNo) {
        debugger;
        // 1-转化贷款  2-风险处置
        var url = '';
        if (urlType == '1') {
            url = "/pages/tzb/custom/credit-ccm/transformation-loan-detail;contractNo=" + contractNo + ";tranSeqNo=" + tranSeqNo;
            this.router.navigate([url]);
        }
        else {
            this.linkTo(function (token, userId) {
                return "plats/FrontController?token=" + token + "&suid=" + userId + "&pk1=" + dataId + "&urlParam=/plats/FrontController?commandType=9904|ActionCode=view|ActionType=VIEW|moduleCode=27548A5263C91D89A2D6B2D8EF5061FC|moduleTable=F9B2E807758C7365FE7EE21FEABF7001|moduleName=|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FC|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7001";
            });
        }
        return url;
    };
    UrlTool.prototype.afterLoan = function (dedId) {
        var url = '';
        this.linkTo(function (token, userId) {
            return "plats/FrontController?token=" + token + "&suid=" + userId + "&pk1=" + dedId + "&urlParam=/plats/FrontController?commandType=9904|ActionCode=view|ActionType=VIEW|moduleCode=4F96913A6F1C5FED63514CF7DD5C96DC|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleName=|main_moduleCode=4F96913A6F1C5FED63514CF7DD5C96DC|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
        });
        return url;
    };
    UrlTool.prototype.annualInspection = function (urlType, dedId) {
        // 自助类贷款年检历史   010002 
        // 自助卡年检历史 010010 
        // 消费类自主卡年检历史	？
        debugger;
        var url = '';
        if (urlType == '010002') {
            this.linkTo(function (token, userId) {
                return "plats/FrontController?token=" + token + "&suid=" + userId + "&pk1=" + dedId + "&urlParam=/plats/FrontController?commandType=9904|ActionCode=view|ActionType=VIEW|moduleCode=2C17407691E007A1029B4511EA8AC142|moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|moduleName=|main_moduleCode=2C17407691E007A1029B4511EA8AC142|main_moduleTable=A0638C07DE5FFCF1F3FB627B882F1872";
            });
        }
        else if (urlType == '010010') {
            this.linkTo(function (token, userId) {
                return "plats/FrontController?token=" + token + "&suid=" + userId + "&pk1=" + dedId + "&urlParam=/plats/FrontController?commandType=9904|ActionCode=view|ActionType=VIEW|moduleCode=3A27D1EAC0048268435B836078F682AD|moduleTable=3F66FCFA4F359BC658F7802F40A3581C|moduleName=|main_moduleCode=3A27D1EAC0048268435B836078F682AD|main_moduleTable=3F66FCFA4F359BC658F7802F40A3581C";
            });
        }
        else {
            this.linkTo(function (token, userId) {
                return "plats/FrontController?token=" + token + "&suid=" + userId + "&pk1=" + dedId + "&urlParam=/plats/FrontController?commandType=9904|ActionCode=view|ActionType=VIEW|moduleCode=SDKLK54KJF34324KLFK3274AEA1A708FB|moduleTable=32FE0F7F5C9583234CE159C5B3109E23|moduleName=|main_moduleCode=SDKLK54KJF34324KLFK3274AEA1A708FB|main_moduleTable=32FE0F7F5C9583234CE159C5B3109E23";
            });
        }
        return url;
    };
    UrlTool.prototype.setRootLink = function () {
        if (this.targetId == '101010') {
            this.rootLink = this.TZB_HTTP_XIN;
        }
        else if (this.targetId == '101011') {
            this.rootLink = this.TZB_HTTP_XIN_C;
        }
    };
    UrlTool.prototype.loadBasicData = function () {
        this.TZB_HTTP_XIN = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_HTTP_XIN"];
        this.TZB_HTTP_XIN_C = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_HTTP_XIN_C"];
        // this.userId = param.userId;
        // this.targetId = param.targetId;
    };
    UrlTool.prototype.getCommonHeader = function () {
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
    };
    UrlTool.prototype.getTargetId = function () {
        this.targetId = this.commonHeader.targetId;
    };
    UrlTool.prototype.getUserId = function () {
        this.userId = this.commonHeader.userId;
    };
    return UrlTool;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" *ngIf=\"this.processId\">\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"subprocList\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"'暂无数据'\">\r\n            <p-column header=\"序号\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"doTaskActor\" header=\"审批人\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"col.workState == '0'\">{{col.taskActorsName}}</span>\r\n                    <span *ngIf=\"col.workState == '1' && (col.doTaskActorName == '' || col.doTaskActorName == undefied || col.doTaskActorName == null)\">{{col.doTaskActor}}</span>\r\n                    <span *ngIf=\"col.workState == '1' && (col.doTaskActorName != '' && col.doTaskActorName != undefied && col.doTaskActorName != null)\">{{col.doTaskActorName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"taskName\" header=\"审批阶段\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a (click)=\"viewSubprocInit(col)\" class=\"colorImport\" *ngIf=\"col.taskType == 'subproc'\">{{col.taskName}}</a>\r\n                    <span *ngIf=\"col.taskType != 'subproc'\">{{col.taskName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"updateDate\" header=\"审批日期\"></p-column>\r\n            <p-column field=\"doResult\" header=\"审批结果\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.doResult|codeValuePie:workFlowResultType}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"doRemark\" header=\"审批意见\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 50px;\n  margin-left: 10px; }\n\n.ui-g .ui-g-12 {\n  background-color: #fafafa; }\n\n.ui-g .ui-g-12 .ui-md-6 {\n  display: flex; }\n\n.ui-g .ui-g-12 label {\n  display: block;\n  width: 30%;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n\n.colorImport {\n  color: #0094D2;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9hcHByb3ZlLWhpc3RvcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxvdmVyZHVlXFxvdmVyZHVlLWNhc2VcXGFwcHJvdmUtaGlzdG9yeVxcYXBwcm92ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL292ZXJkdWUvb3ZlcmR1ZS1jYXNlL2FwcHJvdmUtaGlzdG9yeS9hcHByb3ZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udWktZyAudWktZy0xMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4udWktZyAudWktZy0xMiAudWktbWQtNiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udWktZyAudWktZy0xMiBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnVpLWcgLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xvckltcG9ydCB7XHJcbiAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApproveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveHistoryComponent", function() { return ApproveHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApproveHistoryComponent = /** @class */ (function () {
    function ApproveHistoryComponent(httpService, customService, commfunc, processInstanceManagementService) {
        this.httpService = httpService;
        this.customService = customService;
        this.commfunc = commfunc;
        this.processInstanceManagementService = processInstanceManagementService;
        this.tableData = []; //接收审批流程查询数据
        this.processId = '';
        this.totalNum = 0;
        this.mainTaskId = '';
        this.subprocDisplay = false;
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_6__["PageProcess"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__["CommonlyMessage"]();
        this.workFlowResultType = [];
        this.codeValues(); //调用方法，获取全部码值
        this.workFlowResultType = this.code['WorkFlowResultType'];
    }
    ApproveHistoryComponent.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
        this.grapParameters();
    };
    ApproveHistoryComponent.prototype.ngOnChanges = function () {
    };
    ApproveHistoryComponent.prototype.ngOnDestroy = function () {
    };
    ApproveHistoryComponent.prototype.grapParameters = function () {
        if (this.config && Object.keys(this.config).length) {
            this.processId = this.config.processId;
            this.initial();
        }
    };
    ApproveHistoryComponent.prototype.initial = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        if (this.processId) {
            // 查询审批记录
            this.bpmQueryTaskList();
        }
        else {
            this.tableData = [];
        }
    };
    // 查询(历史)审批记录
    ApproveHistoryComponent.prototype.bpmQueryTaskList = function () {
        var _this = this;
        var param = {
            processId: this.processId,
            isAllNode: false,
            curPage: 1,
            pageRows: 99,
        };
        this.customService.bpmQueryTaskList(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableData = data.pageData.result;
                _this.getSubProc();
            }
            else {
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
            }
        }, function (error) {
            _this.commonlyMessage.logicError('调用服务失败！');
        });
    };
    ApproveHistoryComponent.prototype.getSubProc = function () {
        for (var i = 0, len = this.tableData.length; i < len; i++) {
            var col = this.tableData[i];
            if (col.taskType == 'subproc') {
                this.viewSubprocInit(col);
            }
        }
    };
    // 查看子流程初始化
    ApproveHistoryComponent.prototype.viewSubprocInit = function (col) {
        this.mainTaskId = col.taskId;
        this.pageSize = 99;
        this.pageNum = 1;
        this.first = 0;
        this.viewSubproc();
    };
    // 查看子流程
    ApproveHistoryComponent.prototype.viewSubproc = function () {
        var _this = this;
        var paramSub = {
            mainTaskId: this.mainTaskId,
            isAllNode: false,
            pageRows: this.pageSize,
            curPage: this.pageNum,
        };
        this.processInstanceManagementService.queryChildTaskList(paramSub).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var subflowInstance = {};
                subflowInstance = data.pageData[0].result;
                _this.subprocList = subflowInstance ? subflowInstance[0].workList : [];
                _this.totalNum = _this.subprocList.length;
                _this.subprocDisplay = true;
            }
            else {
                _this.commonlyMessage.logicSuccess(data.returnCode.message);
            }
        }, function (error) {
            _this.commonlyMessage.logicError('调用服务失败！');
        });
    };
    // 关闭子流程审批信息
    ApproveHistoryComponent.prototype.closesubproc = function () {
        this.subprocList = [];
        this.subprocDisplay = false;
    };
    //分页
    ApproveHistoryComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        this.viewSubproc();
    };
    //码值
    ApproveHistoryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApproveHistoryComponent.prototype, "config", void 0);
    ApproveHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'approve-history',
            template: __webpack_require__(/*! ./approve-history.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.html"),
            styles: [__webpack_require__(/*! ./approve-history.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.scss")],
            providers: [app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__["MessageService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_2__["ProcessInstanceManagementService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_2__["ProcessInstanceManagementService"]])
    ], ApproveHistoryComponent);
    return ApproveHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/base/tab.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/base/tab.ts ***!
  \*******************************************************************/
/*! exports provided: OverdueCaseTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueCaseTab", function() { return OverdueCaseTab; });
var OverdueCaseTab = /** @class */ (function () {
    function OverdueCaseTab(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        // tab切换
        this.show = 0;
        // 登陆人员等级
        this.operatingLevel = 0;
        // tabs页路由跳转信息
        this.tabsRouterInfo = [];
        this.isMyOrder = false;
    }
    OverdueCaseTab.prototype.showTabs = function (index, item, param) {
        this.show = index;
        this.router.navigate([item.routerLink, param]);
    };
    //获取tabs页标题信息
    OverdueCaseTab.prototype.showTabsRouter = function () {
        this.tabsRouterInfo = [
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/credit-ifo', title: "授信信息", isAllowed: false, index: 0 },
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/overdue-reasons', title: "逾期原因分析", isAllowed: false, index: 1 },
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/topological-graph', title: "拓扑关系", isAllowed: false, index: 2 },
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/branch-approval', title: "支行层级审批意见", isAllowed: false, index: 3 },
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/branch-examination-approval', title: "分行层级审批意见", isAllowed: false, index: 4 },
            { routerLink: '/pages/tzb/custom/overdue/overdue-case/genenal-approval', title: "总行层级审批意见", isAllowed: false, index: 5 },
        ];
    };
    OverdueCaseTab.prototype.filteTabs = function () {
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
        this.filter(logLevel);
    };
    OverdueCaseTab.prototype.filter = function (level) {
        for (var i = 0, len = this.tabsRouterInfo.length; i < len; i++) {
            var element = this.tabsRouterInfo[i];
            if (element.index <= level || this.isMyOrder) {
                element.isAllowed = true;
            }
            else {
                break;
            }
        }
    };
    OverdueCaseTab.prototype.loginLevel = function (type) {
        var ret = 0; // 索引，对应 this.tabsRouterInfo 成员中的index
        switch (type) {
            case 'TEAM':
            case 'DISTRICT':
            case 'SUB_BRANCH':
            case 'DISTRICT_DT':
            case 'SUB_BRANCH_DT':
                ret = 3;
                break;
            case 'BRANCH':
            case 'BRANCH_DT':
                ret = 4;
                break;
            case 'GROUP':
            case 'GENERAL_BANK':
            case 'GENERAL_BANK_DT':
                ret = 5;
                break;
        }
        return ret;
    };
    OverdueCaseTab.prototype.loadConfig = function (config) {
        this.isMyOrder = config.isMyOrder;
    };
    return OverdueCaseTab;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 1.贷后检查 -->\r\n<div class=\"ui-g-12 part1\" *ngIf=\"componentData && componentData.length\" >\r\n    <div class=\"ui-g-12  part1_title\">贷后检查</div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"componentData\" [scrollable]=\"true\">\r\n            <p-column header=\"业务流水号\" field=\"inspectAnalyzeTaskId\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!--  href=\"{{urlTool.afterLoan(item.dedId)}}\" -->\r\n                    <a class=\"sp-link\" target=\"_blank\" (click)=\"toLink(item.dedId)\">{{item.inspectAnalyzeTaskId}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"系统推送时间\" field=\"sysPushDateDesc\">\r\n            </p-column>\r\n            <p-column header=\"货后检查时间\" field=\"taskFinishDate\">\r\n            </p-column>\r\n            <p-column header=\"实际检查方式\" field=\"inspectAnalyzeWayDesc\">\r\n            </p-column>\r\n            <p-column header=\"客户检查情况\" field=\"inspectrecordDesc\">\r\n            </p-column>\r\n            <p-column header=\"风险原因\" field=\"riskReasonDesc\">\r\n            </p-column>\r\n            <p-column header=\"经办人\" field=\"handlePsersonName\">\r\n            </p-column>\r\n            <p-column header=\"第一审批人\" field=\"firstApprovePersonName\">\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part1 {\n  background: #fff; }\n  .part1 .part1_title {\n    font-size: 15px; }\n  .part1 .tit {\n    text-align: right; }\n  .part1 .table {\n    text-align: center; }\n  .sp-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtYXBwcm92YWwvYWZ0ZXItbG9hbi1jaGVjay9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG92ZXJkdWVcXG92ZXJkdWUtY2FzZVxcYnJhbmNoLWFwcHJvdmFsXFxhZnRlci1sb2FuLWNoZWNrXFxhZnRlci1sb2FuLWNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxlQUFlLEVBQUE7RUFIdkI7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtJQVNRLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtYXBwcm92YWwvYWZ0ZXItbG9hbi1jaGVjay9hZnRlci1sb2FuLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQxIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDFfdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnNwLWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AfterLoanCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoanCheckComponent", function() { return AfterLoanCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/url */ "./src/app/pages/tzb/custom/overdue/common/url.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AfterLoanCheckComponent = /** @class */ (function () {
    // 1.贷后检查
    function AfterLoanCheckComponent(router, commfunc, httpService) {
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.componentData = [];
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_1__["PageProcess"]();
        this.dateHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__["CommonlyMessage"]();
        this.urlTool = new app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_3__["UrlTool"](this.router, this.commfunc, this.httpService, this.commonlyMessage);
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_5__["SelectHelper"]();
        this.codeValues();
    }
    AfterLoanCheckComponent.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
    };
    AfterLoanCheckComponent.prototype.ngOnChanges = function (changes) {
        if (this.pageProcess.getInit()) {
            this.grapComponentData();
        }
    };
    // 抓取数据
    AfterLoanCheckComponent.prototype.grapComponentData = function () {
        if (this.inValue && Object.keys(this.inValue).length != 0) {
            // console.log(this.inValue);
            this.componentData = this.fixData(this.inValue);
        }
        else {
            this.componentData = [];
        }
    };
    AfterLoanCheckComponent.prototype.fixData = function (list) {
        var _this = this;
        list.forEach(function (element) {
            element.sysPushDateDesc = _this.dateHelper.getDate(element.sysPushDate);
            element.inspectrecordDesc = _this.fixInspectRecord(element.inspectrecord);
            element.riskReasonDesc = _this.fixRiskReasonDesc(element.riskReason);
            element.inspectAnalyzeWayDesc = _this.selectHelper.getLabel(_this.code['inspect_analyze_way'], element.inspectAnalyzeWay);
        });
        return list;
    };
    AfterLoanCheckComponent.prototype.fixInspectRecord = function (list) {
        return this.combineString(list);
    };
    AfterLoanCheckComponent.prototype.fixRiskReasonDesc = function (list) {
        return this.combineString(list);
    };
    AfterLoanCheckComponent.prototype.combineString = function (list) {
        var ret = '';
        if (list && list.length) {
            if (list.length > 1) {
                list.forEach(function (element) {
                    ret += element.firstClassDesc + ', ' + element.secondClassDesc + '|';
                });
                ret = ret.substring(0, ret.length - 1);
            }
            else {
                ret += list[0].firstClassDesc + ', ' + list[0].secondClassDesc;
            }
        }
        return ret;
    };
    AfterLoanCheckComponent.prototype.toLink = function (dedId) {
        debugger;
        this.urlTool.afterLoan(dedId);
    };
    //码值
    AfterLoanCheckComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AfterLoanCheckComponent.prototype, "inValue", void 0);
    AfterLoanCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'after-loan-check',
            template: __webpack_require__(/*! ./after-loan-check.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.html"),
            styles: [__webpack_require__(/*! ./after-loan-check.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_6__["TransformationPlanHttpService"]])
    ], AfterLoanCheckComponent);
    return AfterLoanCheckComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/branch-approval.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/branch-approval.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: BranchApprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchApprovalModule", function() { return BranchApprovalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var _after_loan_check_after_loan_check_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./after-loan-check/after-loan-check.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/after-loan-check/after-loan-check.component.ts");
/* harmony import */ var _yearly_check_yearly_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yearly-check/yearly-check.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.ts");
/* harmony import */ var _clearance_plan_clearance_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clearance-plan/clearance-plan.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.ts");
/* harmony import */ var _credit_development_credit_development_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credit-development/credit-development.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// 页面组件
// 贷后检查

// 年检

// 逾期业务清收方案

// 授信工作开展情况

var BranchApprovalModule = /** @class */ (function () {
    function BranchApprovalModule() {
    }
    BranchApprovalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _after_loan_check_after_loan_check_component__WEBPACK_IMPORTED_MODULE_5__["AfterLoanCheckComponent"],
                _yearly_check_yearly_check_component__WEBPACK_IMPORTED_MODULE_6__["YearlyCheckComponent"],
                _clearance_plan_clearance_plan_component__WEBPACK_IMPORTED_MODULE_7__["ClearancePlanComponent"],
                _credit_development_credit_development_component__WEBPACK_IMPORTED_MODULE_8__["CreditDevelopmentComponent"]
            ],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_4__["AuthorityService"]
            ],
            exports: [
                _after_loan_check_after_loan_check_component__WEBPACK_IMPORTED_MODULE_5__["AfterLoanCheckComponent"],
                _yearly_check_yearly_check_component__WEBPACK_IMPORTED_MODULE_6__["YearlyCheckComponent"],
                _clearance_plan_clearance_plan_component__WEBPACK_IMPORTED_MODULE_7__["ClearancePlanComponent"],
                _credit_development_credit_development_component__WEBPACK_IMPORTED_MODULE_8__["CreditDevelopmentComponent"]
            ]
        })
    ], BranchApprovalModule);
    return BranchApprovalModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 part3\" *ngIf=\"clearIdea\" (keyup)=\"inputCall($event)\">\r\n    <div class=\"ui-g-12 part3_title\">逾期业务清收方案</div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\">清收思路:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea [(ngModel)]='clearIdea' disabled [rows]='5' pInputTextarea placeholder=\"回显\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\">清收措施:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea [(ngModel)]='clearScheme.clearStep' [disabled]='isDetailFlag' [rows]='5' pInputTextarea></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\">清收成效:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea [(ngModel)]='clearScheme.clearEffect' [disabled]='isDetailFlag' [rows]='5' pInputTextarea></textarea>\r\n        </div>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\"  *ngIf=\"history.historyOptions && history.historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录:</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"change($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        逾期业务清收方案\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-12\" *ngIf=\"clearIdea\">\r\n            <div class=\"ui-g-1 tit\">清收思路:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [(ngModel)]='clearIdea' disabled [rows]='5' pInputTextarea placeholder=\"回显\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">清收措施:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [(ngModel)]='history.currentHistory.clearStep' disabled [rows]='5' pInputTextarea placeholder=\"回显\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1 tit\">清收成效:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [(ngModel)]='history.currentHistory.clearEffect' disabled [rows]='5' pInputTextarea placeholder=\"回显\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part3 {\n  margin-top: 5px;\n  background: #fff; }\n  .part3 .part3_title {\n    font-size: 15px; }\n  .part3 .part3_title {\n    margin-bottom: 25px; }\n  .part3 .tit {\n    text-align: right;\n    font-size: 13px !important; }\n  .part3 .table {\n    text-align: center; }\n  .pull-right {\n  float: right; }\n  .padding-hor-0 {\n  padding-top: 0;\n  padding-bottom: 2px; }\n  :host /deep/ .ui-g-1 {\n  width: 9.3333%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtYXBwcm92YWwvY2xlYXJhbmNlLXBsYW4vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxvdmVyZHVlXFxvdmVyZHVlLWNhc2VcXGJyYW5jaC1hcHByb3ZhbFxcY2xlYXJhbmNlLXBsYW5cXGNsZWFyYW5jZS1wbGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsbUJBQW1CLEVBQUE7RUFQM0I7SUFVUSxpQkFBaUI7SUFDakIsMEJBQTBCLEVBQUE7RUFYbEM7SUFjUSxrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTtFQUV2QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvYnJhbmNoLWFwcHJvdmFsL2NsZWFyYW5jZS1wbGFuL2NsZWFyYW5jZS1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQzIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDNfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5wYXJ0M190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnBhZGRpbmctaG9yLTAge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcbjpob3N0IC9kZWVwLy51aS1nLTEge1xyXG4gICAgd2lkdGg6IDkuMzMzMyU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ClearancePlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearancePlanComponent", function() { return ClearancePlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_approval_clearance_plan_common_pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClearancePlanComponent = /** @class */ (function () {
    // 4.授信工作开展情况
    function ClearancePlanComponent(commfunc) {
        this.commfunc = commfunc;
        // 输入数据
        this.inValue = [];
        this.clearSchemeList = [];
        this.clearScheme = {
            clearStep: '',
            clearEffect: ''
        };
        this.clearIdea = '';
        this.display = false;
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_1__["HistoryInfor"]();
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__["PageProcess"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_approval_clearance_plan_common_pageCache__WEBPACK_IMPORTED_MODULE_3__["ClearSchemePageCache"](this.commfunc);
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_4__["CreditInfoData"](this.commfunc);
        this.markFlag = '';
    }
    ClearancePlanComponent.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
        this.getConfidential();
        console.log(this.history.historyOptions);
        console.log(this.markFlag);
        console.log(this.isDetailFlag);
    };
    ClearancePlanComponent.prototype.ngOnChanges = function (changes) {
        if (this.pageProcess.getInit()) {
            this.grapComponentData();
        }
    };
    // 抓取数据
    ClearancePlanComponent.prototype.grapComponentData = function () {
        this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
        if (this.inValue && this.inValue.clearSchemeList) {
            this.clearIdea = this.inValue.clearIdea;
            this.clearSchemeList = this.inValue.clearSchemeList;
            var obj = {};
            this.history.historyControl(this.clearSchemeList, obj);
            this.clearScheme = obj;
        }
    };
    ClearancePlanComponent.prototype.change = function (event) {
        this.history.historyOptionsChange(event);
    };
    ClearancePlanComponent.prototype.inputCall = function (event) {
        this.setClearScheme();
    };
    ClearancePlanComponent.prototype.setClearScheme = function () {
        this.statusKeeper.setClearScheme(this.clearScheme);
    };
    ClearancePlanComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClearancePlanComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ClearancePlanComponent.prototype, "isDetailFlag", void 0);
    ClearancePlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'clearance-plan',
            template: __webpack_require__(/*! ./clearance-plan.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.html"),
            styles: [__webpack_require__(/*! ./clearance-plan.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/clearance-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], ClearancePlanComponent);
    return ClearancePlanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/common/pageCache.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/clearance-plan/common/pageCache.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ClearSchemePageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearSchemePageCache", function() { return ClearSchemePageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ClearSchemePageCache = /** @class */ (function (_super) {
    __extends(ClearSchemePageCache, _super);
    function ClearSchemePageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    ClearSchemePageCache.prototype.setClearScheme = function (clearScheme) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, clearScheme, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-clearScheme", JSON.stringify({
            clearScheme: clearScheme,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    ClearSchemePageCache.prototype.getClearScheme = function () {
        return this.getTemporaryData("overdue-clearScheme");
    };
    ClearSchemePageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getClearScheme() ? this.getClearScheme().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return ClearSchemePageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/common/pageCache.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/common/pageCache.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreditDevelopmentPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditDevelopmentPageCache", function() { return CreditDevelopmentPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CreditDevelopmentPageCache = /** @class */ (function (_super) {
    __extends(CreditDevelopmentPageCache, _super);
    function CreditDevelopmentPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    CreditDevelopmentPageCache.prototype.setWorkCarryOutCondition = function (workCarryOutCondition) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, workCarryOutCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-workCarryOutCondition", JSON.stringify({
            workCarryOutCondition: workCarryOutCondition,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    CreditDevelopmentPageCache.prototype.getWorkCarryOutCondition = function () {
        return this.getTemporaryData("overdue-workCarryOutCondition");
    };
    CreditDevelopmentPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getWorkCarryOutCondition() ? this.getWorkCarryOutCondition().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return CreditDevelopmentPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 part4\" (keyup)=\"inputCall($event)\">\r\n    <div class=\"part4_title\">授信工作开展情况</div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color: red;font-size: 13px;\">*</span>客户准入偏差:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea maxlength=\"500\" [disabled]='isDetailFlag' [(ngModel)]='workCarryOutCondition.accessOffset' [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。1.是否符合准入，并说明原因。例如:A客户不符合准入，不符合原因及客户经理发放该笔贷款的理由。\"></textarea>\r\n            <!-- <p *ngIf=\"workCarryOutCondition.accessOffset==''&&issuccess\" style=\"color: red;\">此项必填</p> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color: red;font-size: 13px;\">*</span>贷前调查工作存在问题:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea maxlength=\"500\" [disabled]='isDetailFlag' [(ngModel)]='workCarryOutCondition.preLoanInspectionCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。1.详细说明如何在贷款前对客户情况展开调查，并说明是否存在调查偏差及偏差原因；2.以时间为轴线说明客户资产情况变化原因。\"></textarea>\r\n            <!-- <p *ngIf=\"workCarryOutCondition.preLoanInspectionCondition==''&& issuccess\" style=\"color: red;\">此项必填</p> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color: red;font-size: 13px;\">*</span>审查审批工作存在问题:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea maxlength=\"500\" [disabled]='isDetailFlag' [(ngModel)]='workCarryOutCondition.examineAndApproveCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。1.着重说明如何开展审批审查工作，如不到位，请说明不到位原因。\"></textarea>\r\n            <!-- <p *ngIf=\"workCarryOutCondition.examineAndApproveCondition==''&&issuccess\" style=\"color: red;\">此项必填</p> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color: red;font-size: 13px;\">*</span>贷后管理工作存在问题:</div>\r\n        <div class=\"ui-g-10 padding-hor-0\">\r\n            <textarea maxlength=\"500\" [disabled]='isDetailFlag' [(ngModel)]='workCarryOutCondition.afterLoanInspectionCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。1.详细说明贷后工作如何开展及信息收集情况，并对贷后成效进行评估。\"></textarea>\r\n            <!-- <p *ngIf=\"workCarryOutCondition.afterLoanInspectionCondition==''&&issuccess\" style=\"color: red;\">此项必填</p> -->\r\n        </div>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\"  *ngIf=\"history.historyOptions && history.historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录:</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"change($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        授信工作开展情况\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-12 \">\r\n            <div class=\"ui-g-1 tit\">客户准入偏差:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [disabled]='true' maxlength=\"400\" [(ngModel)]='history.currentHistory.accessOffset' [rows]='5' pInputTextarea placeholder=\"文字描述，字符不超过500，是否符合准入，并说明原因。例如:A客户不符合准入，说明不符合原因，并说明客户经理发放该笔贷款理由。\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <div class=\"ui-g-1 tit\">贷前调查工作存在问题:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [disabled]='true' maxlength=\"500\" [(ngModel)]='history.currentHistory.preLoanInspectionCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，字符不超过500，1、详细说明如何在贷款对客户情况展开调查，并说明是否存在调查偏差及偏差原因，2、以时间围轴线说明客户资产情况变化原因。\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <div class=\"ui-g-1 tit\">审查审批工作存在问题:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [disabled]='true' maxlength=\"500\" [(ngModel)]='history.currentHistory.examineAndApproveCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，字符不超过500，着重说明如果开展审批审查工作，如不到位，请说明不到位原因。\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <div class=\"ui-g-1 tit\">贷后管理工作存在问题:</div>\r\n            <div class=\"ui-g-10\">\r\n                <textarea [disabled]='true' maxlength=\"500\" [(ngModel)]='history.currentHistory.afterLoanInspectionCondition' [rows]='5' pInputTextarea placeholder=\"文字描述，字符不超过500。1、详细说明贷后工作如何开展及信息收集情况，并对贷后成效进行评估。\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part4 {\n  margin-top: 5px;\n  background: #fff; }\n  .part4 .part4_title {\n    font-size: 15px; }\n  .part4 .part4_title {\n    margin-bottom: 25px; }\n  .part4 .tit {\n    text-align: right;\n    font-size: 13px !important; }\n  .part4 .table {\n    text-align: center; }\n  .pull-right {\n  float: right; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .padding-hor-0 {\n  padding-top: 0;\n  padding-bottom: 2px; }\n  :host /deep/ .ui-g-1 {\n  width: 9.3333%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtYXBwcm92YWwvY3JlZGl0LWRldmVsb3BtZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxicmFuY2gtYXBwcm92YWxcXGNyZWRpdC1kZXZlbG9wbWVudFxcY3JlZGl0LWRldmVsb3BtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsbUJBQW1CLEVBQUE7RUFQM0I7SUFVUSxpQkFBaUI7SUFDakIsMEJBQTBCLEVBQUE7RUFYbEM7SUFjUSxrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUFFdkI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL292ZXJkdWUvb3ZlcmR1ZS1jYXNlL2JyYW5jaC1hcHByb3ZhbC9jcmVkaXQtZGV2ZWxvcG1lbnQvY3JlZGl0LWRldmVsb3BtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQ0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDRfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5wYXJ0NF90aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZGRpbmctaG9yLTAge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcbjpob3N0IC9kZWVwLy51aS1nLTEge1xyXG4gICAgd2lkdGg6IDkuMzMzMyU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CreditDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditDevelopmentComponent", function() { return CreditDevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_approval_credit_development_common_pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditDevelopmentComponent = /** @class */ (function () {
    // 4.授信工作开展情况
    function CreditDevelopmentComponent(commfunc) {
        this.commfunc = commfunc;
        this.issuccess = false;
        // 输入数据
        this.inValue = [];
        this.workCarryOutConditionList = [];
        this.workCarryOutCondition = {
            accessOffset: '',
            preLoanInspectionCondition: '',
            examineAndApproveCondition: '',
            afterLoanInspectionCondition: ''
        };
        this.display = false;
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryInfor"]();
        this.pageCode = '4'; // should be 2
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_approval_credit_development_common_pageCache__WEBPACK_IMPORTED_MODULE_3__["CreditDevelopmentPageCache"](this.commfunc);
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_4__["CreditInfoData"](this.commfunc);
        this.markFlag = '';
    }
    CreditDevelopmentComponent.prototype.ngOnInit = function () {
        this.getConfidential();
    };
    CreditDevelopmentComponent.prototype.ngOnChanges = function (changes) {
        this.grapComponentData();
    };
    // 抓取数据
    CreditDevelopmentComponent.prototype.grapComponentData = function () {
        this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
        if (this.inValue && this.inValue.length > 0) {
            this.workCarryOutConditionList = this.inValue;
            var obj = {};
            var l = this.localData.getOperatingLevel();
            // this.history.setOperatingLevel('s');
            this.history.setConfig('2', false, l);
            this.history.historyControl(this.workCarryOutConditionList, obj);
            this.workCarryOutCondition = obj;
        }
    };
    CreditDevelopmentComponent.prototype.change = function (event) {
        this.history.historyOptionsChange(event);
    };
    CreditDevelopmentComponent.prototype.inputCall = function (event) {
        if (this.workCarryOutCondition.accessOffset && this.workCarryOutCondition.preLoanInspectionCondition && this.workCarryOutCondition.afterLoanInspectionCondition && this.workCarryOutCondition.examineAndApproveCondition) {
            this.workCarryOutCondition['issuccess'] = true;
            this.issuccess = false;
        }
        else {
            this.workCarryOutCondition['issuccess'] = false;
            this.issuccess = true;
        }
        this.setWorkCarryOutCondition();
    };
    CreditDevelopmentComponent.prototype.setWorkCarryOutCondition = function () {
        this.statusKeeper.setWorkCarryOutCondition(this.workCarryOutCondition);
    };
    CreditDevelopmentComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreditDevelopmentComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreditDevelopmentComponent.prototype, "isDetailFlag", void 0);
    CreditDevelopmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-development',
            template: __webpack_require__(/*! ./credit-development.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.html"),
            styles: [__webpack_require__(/*! ./credit-development.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/credit-development/credit-development.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CreditDevelopmentComponent);
    return CreditDevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 part2\" *ngIf=\"componentData && componentData.length\" >\r\n    <div class=\"ui-g-12 part2_title\">年检</div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"componentData\" [scrollable]=\"true\">\r\n            <p-column header=\"业务流水号\" field=\"inspectAnalyzeTaskId\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!-- href=\"{{urlTool.annualInspection(ParentBusinessType, item.dedId)}}\" -->\r\n                    <a class=\"sp-link\" target=\"_blank\" (click)=\"toLink(item.dedId)\" >{{item.inspectAnalyzeTaskId}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"系统推送时间\" field=\"sysPushDateDesc\">\r\n            </p-column>\r\n            <p-column header=\"年检方式\" field=\"inspectAnalyzeWayDesc\">\r\n            </p-column>\r\n            <p-column header=\"客户检查记录\" field=\"inspectrecordDesc\">\r\n            </p-column>\r\n            <p-column header=\"年检意见\" field=\"inspectOptionDesc\">\r\n            </p-column>\r\n            <p-column header=\"年检时间\" field=\"taskFinishDate\">\r\n            </p-column>\r\n            <p-column header=\"经办人\" field=\"handlePsersonName\">\r\n            </p-column>\r\n            <p-column header=\"第一审批人\" field=\"firstApprovePersonName\">\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part2 {\n  margin-top: 5px;\n  background: #fff; }\n  .part2 .part2_title {\n    font-size: 15px; }\n  .part2 .tit {\n    text-align: right; }\n  .part2 .table {\n    text-align: center; }\n  .sp-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtYXBwcm92YWwveWVhcmx5LWNoZWNrL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxicmFuY2gtYXBwcm92YWxcXHllYXJseS1jaGVja1xceWVhcmx5LWNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsaUJBQWlCLEVBQUE7RUFQekI7SUFVUSxrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvYnJhbmNoLWFwcHJvdmFsL3llYXJseS1jaGVjay95ZWFybHktY2hlY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydDIge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC5wYXJ0Ml90aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnNwLWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: YearlyCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlyCheckComponent", function() { return YearlyCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/url */ "./src/app/pages/tzb/custom/overdue/common/url.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var YearlyCheckComponent = /** @class */ (function () {
    // 2.年检
    function YearlyCheckComponent(router, commfunc, httpService) {
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.componentData = [];
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_1__["PageProcess"]();
        this.dateHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__["CommonlyMessage"]();
        this.urlTool = new app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_3__["UrlTool"](this.router, this.commfunc, this.httpService, this.commonlyMessage);
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_5__["SelectHelper"]();
        this.codeValues();
    }
    YearlyCheckComponent.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
    };
    YearlyCheckComponent.prototype.ngOnChanges = function (changes) {
        if (this.pageProcess.getInit()) {
            this.grapComponentData();
        }
    };
    // 抓取数据
    YearlyCheckComponent.prototype.grapComponentData = function () {
        if (this.inValue && Object.keys(this.inValue).length != 0) {
            // console.log(this.inValue);
            this.componentData = this.fixData(this.inValue);
        }
        else {
            this.componentData = [];
        }
    };
    YearlyCheckComponent.prototype.fixData = function (list) {
        var _this = this;
        list.forEach(function (element) {
            element.sysPushDateDesc = _this.dateHelper.getDate(element.sysPushDate);
            element.inspectrecordDesc = _this.fixInspectRecord(element.inspectrecord);
            element.inspectOptionDesc = _this.fixInspectOption(element.inspectOption);
            element.inspectAnalyzeWayDesc = _this.selectHelper.getLabel(_this.code['yearly_inspect_analyze_way'], element.inspectAnalyzeWay);
        });
        return list;
    };
    YearlyCheckComponent.prototype.fixInspectRecord = function (list) {
        return this.combineString(list);
    };
    YearlyCheckComponent.prototype.fixInspectOption = function (list) {
        return this.combineString(list);
    };
    YearlyCheckComponent.prototype.combineString = function (list) {
        var ret = '';
        if (list && list.length) {
            if (list.length > 1) {
                list.forEach(function (element) {
                    ret += element.firstClassDesc + ', ' + element.secondClassDesc + '|';
                });
                ret = ret.substring(0, ret.length - 1);
            }
            else {
                ret += list[0].firstClassDesc + ', ' + list[0].secondClassDesc;
            }
        }
        return ret;
    };
    YearlyCheckComponent.prototype.toLink = function (dedId) {
        this.urlTool.annualInspection(this.ParentBusinessType, dedId);
    };
    //码值
    YearlyCheckComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], YearlyCheckComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], YearlyCheckComponent.prototype, "ParentBusinessType", void 0);
    YearlyCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'yearly-check',
            template: __webpack_require__(/*! ./yearly-check.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.html"),
            styles: [__webpack_require__(/*! ./yearly-check.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/yearly-check/yearly-check.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_6__["TransformationPlanHttpService"]])
    ], YearlyCheckComponent);
    return YearlyCheckComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 1.系列性/道德性风险 -->\r\n<div class=\"ui-g-12 part1\">\r\n    <div class=\"ui-g-12 part1_title\">系列性/道德性风险</div>\r\n    <div class=\"ui-g-12 padding-hor-0\">\r\n          <div class=\"ui-g-12\">关联户</div>\r\n          <div class=\"ui-g-12 table\">\r\n              <u-dataTable [value]=\"catenaMoralRisk.relePersonRisk\" [scrollable]=\"true\" (keyup)=\"inputCall($event)\">\r\n                  <p-column header=\"客户号\">\r\n                      <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          <!-- <input pInputText [disabled]='isDetailFlag' [(ngModel)]=\"item.releCustId\" (blur)=\"cusNumBlur(item, ri)\"> -->\r\n                          <div class=\"queryinputbtn\">\r\n                            <input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"item.releCustId\" />\r\n                            <div (click)=\"customerPop(ri)\" class=\"clickspan\">\r\n                                <a class=\"a-hand\">\r\n                                    <span>...</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                      </ng-template>\r\n                  </p-column>\r\n                  <p-column header=\"客户名称\" field=\"name\" >\r\n                      <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          <!-- releCustName custName -->\r\n                          <input pInputText [disabled]='true' [(ngModel)]=\"item.releCustName\">\r\n                      </ng-template>\r\n                  </p-column>\r\n                  <p-column header=\"欠贷余额（元）\" field=\"money\" >\r\n                      <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                          <!-- [disabled]='isDetailFlag || !item.releCustName' -->\r\n                          <input pInputText disabled [(ngModel)]=\"item.myBankLoanAmt\">\r\n                      </ng-template>\r\n                  </p-column>\r\n                  <p-column *ngIf=\"!isDetailFlag\">\r\n                      <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"header\">\r\n                          操作\r\n                          <!-- <img src=\"./../../../../../assets/layout/images/add_list.png\" class=\"tabel_addIcon\" (click)=\"addRelative()\"> -->\r\n                      </ng-template>\r\n                      <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <!-- <img *ngIf=\"!isDetailFlag && (catenaMoralRisk.relePersonRisk && catenaMoralRisk.relePersonRisk.length > 1)\" src=\"./../../../../../assets/layout/images/jian_list_1.png\" (click)=\"deleteRelative(ri)\"> -->\r\n                        <img src=\"./../../../../../assets/layout/images/jian_list_1.png\" (click)=\"deleteRelative(ri)\">\r\n                      </ng-template>\r\n                  </p-column>\r\n              </u-dataTable>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-hor-0\">\r\n              <div class=\"center\">\r\n                    <button pButton *ngIf=\"!isDetailFlag\" label=\"添加\" (click)='addRelative()'></button>\r\n                </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"ui-g-12 padding-hor-0\">\r\n          <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color:red;\">*</span>是否系列性风险：</div>\r\n          <div class=\"ui-g-2 padding-hor-0\" style=\"padding-left:13px;\">\r\n              <p-dropdown [disabled]='isDetailFlag' [options]='seriesRiskOption' placeholder=\"请选择\" [(ngModel)]=\"catenaMoralRisk.setRisk\" (onChange)=\"dropdownChange($event)\"></p-dropdown>\r\n              <!-- <p *ngIf=\"catenaMoralRisk.setRisk==''&& issuccess\" style=\"color: red;\">此项必填</p> -->\r\n            </div>\r\n      </div>\r\n      <div class=\"ui-g-12 padding-hor-0\">\r\n        <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color:red;\">*</span>是否道德风险：</div>\r\n        <div class=\"ui-g-2 padding-hor-0\" style=\"padding-left:13px;\">\r\n            <p-dropdown [disabled]='isDetailFlag' [options]='moralRiskOption' placeholder=\"请选择\" [(ngModel)]=\"catenaMoralRisk.moralRisk\" (onChange)=\"dropdownChange($event)\"></p-dropdown>\r\n            <!-- <p *ngIf=\"catenaMoralRisk.moralRisk==''&& issuccess\" style=\"color: red;\">此项必填</p> -->\r\n        </div>\r\n      </div>\r\n        <!-- 历史查看 -->\r\n        <div class=\"ui-g-12\" *ngIf=\"history.hasHistory && markFlag != '2' && !isDetailFlag\">\r\n            <div class=\"ui-g-3 pull-right\">\r\n                <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"history.historyOptionsChange($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n\r\n  <!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        系列性/道德性风险\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12  tabel_title\">关系户</div>\r\n            <div class=\"ui-g-12 table\">\r\n                <p-dataTable [value]=\"history.currentHistory.relePersonRisk\" [scrollable]=\"true\">\r\n                    <p-column header=\"客户号\">\r\n                        <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <input disabled pInputText [(ngModel)]=\"item.releCustId\">\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"客户名称\" field=\"name\" >\r\n                        <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <input disabled pInputText [(ngModel)]=\"item.releCustName\">\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"欠贷金额（元）\" field=\"money\" >\r\n                        <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <input disabled pInputText [(ngModel)]=\"item.myBankLoanAmt\">\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-hor-0\">\r\n            <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color:red;\">*</span>是否系列性风险：</div>\r\n            <div class=\"ui-g-2 padding-hor-0\" style=\"padding-left:13px;\">\r\n                <p-dropdown [disabled]='true' [options]='seriesRiskOption' placeholder=\"请选择\" [(ngModel)]=\"history.currentHistory.setRisk\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-hor-0\">\r\n          <div class=\"ui-g-1 tit padding-hor-0\"><span style=\"color:red;\">*</span>是否道德风险：</div>\r\n          <div class=\"ui-g-2 padding-hor-0\" style=\"padding-left:13px;\">\r\n              <p-dropdown [disabled]='true' [options]='moralRiskOption' placeholder=\"请选择\" [(ngModel)]=\"history.currentHistory.moralRisk\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"display\" header=\"客户查询\" [(visible)]=\"display\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"customerCall($event)\"></app-customer-list-center>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part1 {\n  background: #fff; }\n  .part1 .part1_title {\n    font-size: 15px; }\n  .part1 .tabel_title {\n    font-size: 13px; }\n  .part1 .risk_dropdown {\n    margin-top: 20px; }\n  .part1 .tit {\n    text-align: right; }\n  .table {\n  text-align: center; }\n  .table .tabel_addIcon {\n    vertical-align: middle; }\n  .center {\n  width: 75px;\n  margin: 0 auto; }\n  .pull-right {\n  float: right; }\n  .queryinputbtn {\n  float: left;\n  display: flex;\n  width: 100%; }\n  .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n  .queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .padding-hor-0 {\n  padding-top: 0;\n  padding-bottom: 3px; }\n  .ui-g-1 {\n  width: 14%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvYWxsLXJpc2tzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxicmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWxcXGFsbC1yaXNrc1xcYWxsLXJpc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxlQUFlLEVBQUE7RUFIdkI7SUFNUSxlQUFlLEVBQUE7RUFOdkI7SUFTUSxnQkFBZ0IsRUFBQTtFQVR4QjtJQVlRLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxzQkFBc0IsRUFBQTtFQUk5QjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFHbEI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTtFQUhmO0lBS1Esa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7RUFSbEM7SUFXUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUFFdkI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL292ZXJkdWUvb3ZlcmR1ZS1jYXNlL2JyYW5jaC1leGFtaW5hdGlvbi1hcHByb3ZhbC9hbGwtcmlza3MvYWxsLXJpc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQxIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDFfdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmVsX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5yaXNrX2Ryb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC50YWJlbF9hZGRJY29ue1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1ob3ItMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuLnVpLWctMSB7XHJcbiAgICB3aWR0aDogMTQlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AllRisksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRisksComponent", function() { return AllRisksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_all_risks_common_pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_http_overdue_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AllRisksComponent = /** @class */ (function () {
    function AllRisksComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.issuccess = false;
        this.inValue = [];
        this.catenaMoralRiskList = [];
        this.catenaMoralRisk = {
            setRisk: '',
            moralRisk: '',
            relePersonRisk: []
        }; // 系列/道德性风险
        this.msgs = [];
        //1.系列性/道德性风险
        this.seriesRiskOption = [{ label: '是', value: '1' }, { label: '否', value: '0' }];
        this.moralRiskOption = [{ label: '是', value: '1' }, { label: '否', value: '0' }];
        this.display = false;
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryInfor"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_all_risks_common_pageCache__WEBPACK_IMPORTED_MODULE_3__["AllRisksPageCache"](this.commfunc);
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_4__["CommonlyMessage"]();
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__["PageProcess"]();
        this.releCustId = '';
        this.releCustName = '';
        this.customerIndex = 0;
        this.markFlag = '';
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_7__["BranchExamApprovalData"](this.commfunc);
    }
    AllRisksComponent.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
        this.getConfidential();
    };
    AllRisksComponent.prototype.ngOnChanges = function (changes) {
        this.grapComponentData();
    };
    // 抓取数据
    AllRisksComponent.prototype.grapComponentData = function () {
        if (this.pageProcess.getInit()) {
            this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
            // 接收父页面传递来的页面
            this.catenaMoralRiskList = this.inValue;
            this.loadData();
        }
    };
    // 加载数据或恢复数据
    AllRisksComponent.prototype.loadData = function () {
        // 有数据
        if (this.inValue && this.inValue.length > 0) {
            this.catenaMoralRiskList = this.inValue;
            var obj = {};
            this.history.historyControl(this.catenaMoralRiskList, obj);
            this.catenaMoralRisk = obj;
        }
        if (!this.catenaMoralRisk || !this.catenaMoralRisk.relePersonRisk || !this.catenaMoralRisk.relePersonRisk.length) {
            if (!this.isDetailFlag) {
                this.addRelative();
            }
        }
    };
    AllRisksComponent.prototype.fixNumber = function (source) {
        if (source && source.length) {
            source.forEach(function (element) {
                for (var property in element) {
                    if (element.hasOwnProperty(property) && typeof element[property] == 'number') {
                        element[property] = parseFloat(element[property]).toFixed(2);
                    }
                }
            });
        }
        return source;
    };
    /***
     * 1.关系化表格的增加和删除列表
     */
    //添加
    AllRisksComponent.prototype.addRelative = function () {
        var arr = [{ releCustId: '', releCustName: '', myBankLoanAmt: '' }]; // releCustName custName
        if (!this.catenaMoralRisk.relePersonRisk) {
            this.catenaMoralRisk.relePersonRisk = [];
        }
        this.catenaMoralRisk.relePersonRisk = this.catenaMoralRisk.relePersonRisk.concat(arr);
        // 保存状态
        this.setCatenaMoralRisk();
    };
    //删除
    AllRisksComponent.prototype.deleteRelative = function (index) {
        if (this.catenaMoralRisk.relePersonRisk.length > 1) {
            //  使用slice等价于将数组进行一次深拷贝，重新分配存储地址
            var arr = this.catenaMoralRisk.relePersonRisk.slice(0, this.catenaMoralRisk.relePersonRisk.length);
            arr.splice(index, 1);
            this.catenaMoralRisk.relePersonRisk = arr;
            // 保存状态
            this.setCatenaMoralRisk();
        }
        else {
            var arrs = [{ releCustId: '', releCustName: '', myBankLoanAmt: '' }];
            this.catenaMoralRisk.relePersonRisk = this.catenaMoralRisk.relePersonRisk.concat(arrs);
            var arr = this.catenaMoralRisk.relePersonRisk.slice(0, this.catenaMoralRisk.relePersonRisk.length);
            arr.splice(index, 1);
            this.catenaMoralRisk.relePersonRisk = arr;
            this.setCatenaMoralRisk();
            // this.commonlyMessage.logicError('最后一项不可删除')
        }
    };
    // 输入客户号后失焦触发的事件
    AllRisksComponent.prototype.cusNumBlur = function (item, i) {
        this.catenaMoralRisk.relePersonRisk.forEach(function (element, index) {
            if (i == index) {
                element.num = item.num;
                element.name = item.num;
                element.money = item.num;
            }
        });
    };
    // 向外部传递数据
    AllRisksComponent.prototype.inputCall = function (event) {
        this.setCatenaMoralRisk();
    };
    AllRisksComponent.prototype.dropdownChange = function (event) {
        this.setCatenaMoralRisk();
    };
    AllRisksComponent.prototype.customerPop = function (index) {
        this.customerIndex = index;
        this.display = true;
    };
    AllRisksComponent.prototype.customerCall = function (event) {
        this.releCustId = event['custNo'];
        this.releCustName = event['custName'];
        this.catenaMoralRisk.relePersonRisk[this.customerIndex].releCustId = this.releCustId;
        this.catenaMoralRisk.relePersonRisk[this.customerIndex].releCustName = this.releCustName;
        this.display = false;
        this.getTableList();
        // this.setCatenaMoralRisk();
    };
    //获取客户欠贷/担保余额查询回显数据
    AllRisksComponent.prototype.getTableList = function () {
        var _this = this;
        var param = {
            // overdueCaseName: "",         //逾期案例名称
            custNo: this.releCustId //客户号(必输)
        };
        this.httpService.overdueCustLoanAmtQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var t = data.myBankLoanAmt;
                t = !isNaN(t) ? parseFloat(t).toFixed(2) : '0.00';
                _this.catenaMoralRisk.relePersonRisk[_this.customerIndex].myBankLoanAmt = t;
                _this.setCatenaMoralRisk();
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        }, function (err) {
            _this.commonlyMessage.logicError('调用失败!');
        });
    };
    AllRisksComponent.prototype.setCatenaMoralRisk = function () {
        if (this.catenaMoralRisk.setRisk && this.catenaMoralRisk.moralRisk) {
            this.catenaMoralRisk['issucess'] = true;
            this.issuccess = false;
        }
        else {
            this.catenaMoralRisk['issucess'] = false;
            this.issuccess = true;
        }
        this.statusKeeper.setCatenaMoralRisk(this.catenaMoralRisk);
    };
    AllRisksComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllRisksComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AllRisksComponent.prototype, "isDetailFlag", void 0);
    AllRisksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-risks',
            template: __webpack_require__(/*! ./all-risks.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.html"),
            styles: [__webpack_require__(/*! ./all-risks.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_overdue_http_overdue_http_service__WEBPACK_IMPORTED_MODULE_6__["OverdueHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], AllRisksComponent);
    return AllRisksComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/common/pageCache.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/common/pageCache.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AllRisksPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRisksPageCache", function() { return AllRisksPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AllRisksPageCache = /** @class */ (function (_super) {
    __extends(AllRisksPageCache, _super);
    function AllRisksPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    AllRisksPageCache.prototype.setCatenaMoralRisk = function (catenaMoralRisk) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, catenaMoralRisk, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-catenaMoralRisk", JSON.stringify({
            catenaMoralRisk: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    AllRisksPageCache.prototype.getCatenaMoralRisk = function () {
        return this.getTemporaryData("overdue-catenaMoralRisk");
    };
    AllRisksPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getCatenaMoralRisk() ? this.getCatenaMoralRisk().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return AllRisksPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/branch-examination-approval.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/branch-examination-approval.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BranchExaminationApprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchExaminationApprovalModule", function() { return BranchExaminationApprovalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var _all_risks_all_risks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-risks/all-risks.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/all-risks/all-risks.component.ts");
/* harmony import */ var _job_eval_intro_job_eval_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-eval-intro/job-eval-intro.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.ts");
/* harmony import */ var _compliance_analysis_compliance_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compliance-analysis/compliance-analysis.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.ts");
/* harmony import */ var _credit_manage_eval_credit_manage_eval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credit-manage-eval/credit-manage-eval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.ts");
/* harmony import */ var _commonBranch_common_branch_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commonBranch/common-branch.module */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/common-branch.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// 页面组件





var BranchExaminationApprovalModule = /** @class */ (function () {
    function BranchExaminationApprovalModule() {
    }
    BranchExaminationApprovalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _commonBranch_common_branch_module__WEBPACK_IMPORTED_MODULE_9__["CommonBranchModule"]
            ],
            declarations: [
                _all_risks_all_risks_component__WEBPACK_IMPORTED_MODULE_5__["AllRisksComponent"],
                _job_eval_intro_job_eval_intro_component__WEBPACK_IMPORTED_MODULE_6__["JobEvalIntroComponent"],
                _compliance_analysis_compliance_analysis_component__WEBPACK_IMPORTED_MODULE_7__["ComplianceAnalysisComponent"],
                _credit_manage_eval_credit_manage_eval_component__WEBPACK_IMPORTED_MODULE_8__["CreditManageEvalComponent"]
            ],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_4__["AuthorityService"]
            ],
            exports: [
                _all_risks_all_risks_component__WEBPACK_IMPORTED_MODULE_5__["AllRisksComponent"],
                _job_eval_intro_job_eval_intro_component__WEBPACK_IMPORTED_MODULE_6__["JobEvalIntroComponent"],
                _compliance_analysis_compliance_analysis_component__WEBPACK_IMPORTED_MODULE_7__["ComplianceAnalysisComponent"],
                _credit_manage_eval_credit_manage_eval_component__WEBPACK_IMPORTED_MODULE_8__["CreditManageEvalComponent"]
            ]
        })
    ], BranchExaminationApprovalModule);
    return BranchExaminationApprovalModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/common-branch.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/common-branch.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CommonBranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBranchModule", function() { return CommonBranchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _component_credit_actual_component_credit_actual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-credit-actual/component-credit-actual.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.ts");
/* harmony import */ var _popup_credit_person_popup_credit_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-credit-person/popup-credit-person.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CommonBranchModule = /** @class */ (function () {
    function CommonBranchModule() {
    }
    CommonBranchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"]
            ],
            declarations: [
                _component_credit_actual_component_credit_actual_component__WEBPACK_IMPORTED_MODULE_4__["ComponentCreditActual"],
                _popup_credit_person_popup_credit_person_component__WEBPACK_IMPORTED_MODULE_5__["PopupCreditPerson"]
            ],
            exports: [
                _component_credit_actual_component_credit_actual_component__WEBPACK_IMPORTED_MODULE_4__["ComponentCreditActual"]
            ]
        })
    ], CommonBranchModule);
    return CommonBranchModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\" *ngFor=\"let item of inData; let i = index\" (keyup)=\"saveData()\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\" style=\"text-align:right\">\r\n                <label>实际经办责任人:</label>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"item.personLiableName\" disabled/>\r\n                    <div class=\"clickspan\">\r\n                        <a (click)=\"chooseWorker(i)\" class=\"a-hand\">\r\n                           <span>...</span>\r\n                          </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-3\" style=\"text-align:right\">\r\n                <label>认定等级:</label>\r\n            </div>\r\n\r\n            <div class=\"ui-g-7\">\r\n                <p-dropdown [(ngModel)]=\"item.cognizanceRank\" [options]=\"dutyAffirmLevel\" [style]=\"{'width':'50%'}\" appendTo=\"body\">\r\n                </p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\" style=\"text-align:right\">\r\n                <label>认定原因:</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n                <textarea maxlength=\"1024\" [(ngModel)]='item.cognizanceReason' [rows]='5' pInputTextarea placeholder=\"文字描述,字符不超过500\"></textarea>\r\n            </div>\r\n            <div (click)=\"deleteData(i)\" style=\"text-align:left;padding-top:40px;\">\r\n                <img src=\"./../../../../../assets/layout/images/jian_list.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <!-- <div class=\"ui-g-2\">&nbsp;</div> -->\r\n    <div class=\"add\">\r\n        <button pButton label=\"添加\" (click)='addData()'></button>\r\n    </div>\r\n</div>\r\n<!-- 员工查询 -->\r\n<p-dialog *ngIf=\"isShow\" [(visible)]=\"isShow\" modal=\"modal\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"isShow\" [in-value]=\"orgId\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".queryinputbtn {\n  width: 70%;\n  float: left;\n  display: flex; }\n  .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n  .queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px; }\n  :host/deep/ .u-datatable .ui-datatable-thead > tr {\n  font-size: 14px;\n  background-color: #f0f0f0;\n  color: #005574;\n  border: none !important;\n  height: 35px !important;\n  border-bottom-width: 1px !important;\n  border-bottom-style: solid !important;\n  border-bottom-color: #e8e8e8 !important;\n  font-family: \"Microsoft YaHei\"; }\n  .ui-g-12 {\n  padding: 0; }\n  .ui-g-4 {\n  width: 49.3333%;\n  text-align: right; }\n  .ui-g-9 {\n  width: 69.5%; }\n  .ui-g-3 {\n  width: 20%; }\n  .ui-g-4 {\n  width: 40.3333%; }\n  .add {\n  width: 50%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvY29tbW9uQnJhbmNoL2NvbXBvbmVudC1jcmVkaXQtYWN0dWFsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxicmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWxcXGNvbW1vbkJyYW5jaFxcY29tcG9uZW50LWNyZWRpdC1hY3R1YWxcXGNvbXBvbmVudC1jcmVkaXQtYWN0dWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhLEVBQUE7RUFIakI7SUFLUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTtFQVJsQztJQVdRLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFJcEI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLDhCQUE4QixFQUFBO0VBR2xDO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLFVBQVU7RUFDVixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvYnJhbmNoLWV4YW1pbmF0aW9uLWFwcHJvdmFsL2NvbW1vbkJyYW5jaC9jb21wb25lbnQtY3JlZGl0LWFjdHVhbC9jb21wb25lbnQtY3JlZGl0LWFjdHVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jcmVkaXQtYWN0dWFse1xyXG4vLyAgICAgLnF1ZXJ5TmFtZXtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgICAgICAucXVlcnlOYW1lQnRue1xyXG4vLyAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuLy8gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBjb2xvcjogIzAwNTU3NDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIjtcclxufVxyXG5cclxuLnVpLWctMTIge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnVpLWctNCB7XHJcbiAgICB3aWR0aDogNDkuMzMzMyU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnVpLWctOSB7XHJcbiAgICB3aWR0aDogNjkuNSU7XHJcbn1cclxuXHJcbi51aS1nLTMge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnVpLWctNCB7XHJcbiAgICB3aWR0aDogNDAuMzMzMyU7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: ComponentCreditActual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCreditActual", function() { return ComponentCreditActual; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //码值
var ComponentCreditActual = /** @class */ (function () {
    function ComponentCreditActual(commfunc) {
        this.commfunc = commfunc;
        this.givData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inData = [{ personLiableName: "", cognizanceRank: "", cognizanceReason: "" }];
        this.isShow = false;
        this.dutyAffirmLevel = []; //等级码值
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (commonHeader.extParam.orgId) {
            this.orgId = commonHeader.extParam.orgId; //获取机构ID
        }
        this.codeValues();
    }
    //码值获取
    ComponentCreditActual.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var code = this.commfunc.codeDatas;
        this.dutyAffirmLevel = code.dutyAffirmLevel; //等级码值
    };
    ComponentCreditActual.prototype.ngOnInit = function () {
        console.log(this.inValue);
    };
    // ngOnChanges(changes: SimpleChange) {
    //   this.saveData();
    // }
    // 保存数据
    ComponentCreditActual.prototype.saveData = function () {
        this.givData.emit(this.inData);
    };
    // 添加数据
    ComponentCreditActual.prototype.addData = function () {
        var item = [{ personLiableName: "", cognizanceRank: "", cognizanceReason: "" }];
        this.inData = this.inData.concat(item);
    };
    //删除数据
    ComponentCreditActual.prototype.deleteData = function (select) {
        var arr = [];
        for (var i = 0; i < this.inData.length; i++) {
            if (i != select) {
                arr.push(this.inData[i]);
            }
        }
        this.inData = arr;
    };
    // 查询责任人
    ComponentCreditActual.prototype.chooseWorker = function (index) {
        this.isShow = true;
        this.selectData = index;
        console.log(this.selectData);
    };
    //员工查询返回
    ComponentCreditActual.prototype.perInfor = function (item) {
        this.isShow = false;
        if (item.length > 0) {
            console.log(item);
            console.log(this.selectData);
            this.inData[this.selectData]["personLiableName"] = item[0].tellerName;
            this.inData[this.selectData]["personLiableId"] = item[0].tellerId;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("givData"),
        __metadata("design:type", Object)
    ], ComponentCreditActual.prototype, "givData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentCreditActual.prototype, "inValue", void 0);
    ComponentCreditActual = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-credit-actual',
            template: __webpack_require__(/*! ./component-credit-actual.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.html"),
            styles: [__webpack_require__(/*! ./component-credit-actual.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/component-credit-actual/component-credit-actual.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], ComponentCreditActual);
    return ComponentCreditActual;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"credit-person\">\r\n    <p-dataTable [value]=\"inData\">\r\n        <p-column filed=\"\" header=\"员工名称\"> \r\n\r\n        </p-column>\r\n        <!-- <p-column filed=\"handlePsersonName\" header=\"实际经办责任人1\">\r\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n                <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"car.contactsNo\" disabled>\r\n            </ng-template>\r\n        </p-column> -->\r\n    </p-dataTable>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2\">&nbsp;</div>\r\n        <div class=\"ui-g-5\">\r\n            <button pButton label=\"添加\" (click)='addData()'></button>\r\n            <button pButton label=\"保存\" (click)='saveData()'></button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvYnJhbmNoLWV4YW1pbmF0aW9uLWFwcHJvdmFsL2NvbW1vbkJyYW5jaC9wb3B1cC1jcmVkaXQtcGVyc29uL3BvcHVwLWNyZWRpdC1wZXJzb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: PopupCreditPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupCreditPerson", function() { return PopupCreditPerson; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //码值
var PopupCreditPerson = /** @class */ (function () {
    function PopupCreditPerson(commfunc) {
        this.commfunc = commfunc;
        this.givData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dutyAffirmLevel = []; //等级码值
        this.codeValues();
    }
    PopupCreditPerson.prototype.ngOnInit = function () {
        this.inData = [
            { handlePsersonName: "", cognizanceRank: "", cognizanceReason: "" }
        ];
        // this.getData()
        this.givData.emit();
    };
    // 保存数据
    PopupCreditPerson.prototype.saveData = function () {
        console.log(this.inData);
    };
    // 添加数据
    PopupCreditPerson.prototype.addData = function () {
        var item = { handlePsersonName: "", cognizanceRank: "", cognizanceReason: "" };
        this.inData.push(item);
    };
    //码值
    PopupCreditPerson.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var code = this.commfunc.codeDatas;
        this.dutyAffirmLevel = code.dutyAffirmLevel; //等级码值
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("givData"),
        __metadata("design:type", Object)
    ], PopupCreditPerson.prototype, "givData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("inValue"),
        __metadata("design:type", Object)
    ], PopupCreditPerson.prototype, "inData", void 0);
    PopupCreditPerson = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup-credit-person',
            template: __webpack_require__(/*! ./popup-credit-person.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.html"),
            styles: [__webpack_require__(/*! ./popup-credit-person.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/commonBranch/popup-credit-person/popup-credit-person.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], PopupCreditPerson);
    return PopupCreditPerson;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/common/pageCache.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/common/pageCache.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ComplianceAnalysisPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceAnalysisPageCache", function() { return ComplianceAnalysisPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ComplianceAnalysisPageCache = /** @class */ (function (_super) {
    __extends(ComplianceAnalysisPageCache, _super);
    function ComplianceAnalysisPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    ComplianceAnalysisPageCache.prototype.setComplianceAnalyze = function (complianceAnalyze) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, complianceAnalyze, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-complianceAnalyze", JSON.stringify({
            complianceAnalyze: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    ComplianceAnalysisPageCache.prototype.getComplianceAnalyze = function () {
        return this.getTemporaryData("overdue-complianceAnalyze");
    };
    ComplianceAnalysisPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getComplianceAnalyze() ? this.getComplianceAnalyze().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return ComplianceAnalysisPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 3.合规性分析 -->\r\n<div class=\"ui-g-12 part3\">\r\n    <div class=\"ui-g-12 part3_title\">合规性分析</div>\r\n    <div class=\"ui-g-12 padding-ver-0\">\r\n        <div class=\"ui-g-1 tit padding-ver-0\"><span style=\"color: red;\">*</span>是否合规：</div>\r\n        <div class=\"ui-g-9 padding-ver-0\">\r\n            <div class=\"ui-g-2 padding-ver-0\">\r\n                <p-dropdown (onChange)=\"dropdownChange($event)\" [disabled]='isDetailFlag' [options]='complianceOption' placeholder=\"请选择\" [(ngModel)]=\"complianceAnalyze.compliance\"></p-dropdown>\r\n                <p *ngIf=\"complianceAnalyze.compliance==''&& issuccess\" style=\"color: red;\">此项必填</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-ver-0\">\r\n        <div class=\"ui-g-1 tit padding-ver-0\"><span style=\"color: red;\">*</span>情况说明：</div>\r\n        <div class=\"ui-g-9 padding-ver-0\" (keyup)=\"inputCall($event)\" style=\"padding-left:12px;\">\r\n            <textarea maxlength=\"500\" [disabled]='isDetailFlag' [(ngModel)]='complianceAnalyze.conditionExplain' [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。\"></textarea>\r\n            <p *ngIf=\"complianceAnalyze.conditionExplain==''&& issuccess\" style=\"color: red;\">此项必填</p>\r\n        </div>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"history.hasHistory && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"history.historyOptionsChange($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        合规性分析\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-1 tit\" style=\"padding-top:12px;\">是否合规：</div>\r\n        <div class=\"ui-g-11\">\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown disabled [options]='complianceOption' placeholder=\"请选择\" [(ngModel)]=\"history.currentHistory.compliance\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-1 tit\">情况说明：</div>\r\n        <div class=\"ui-g-11\" style=\"padding-left:12px;\">\r\n            <textarea disabled maxlength=\"300\" [(ngModel)]='history.currentHistory.conditionExplain' [rows]='5' pInputTextarea placeholder=\"文字描述,字符不超过300\"></textarea>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part3 {\n  margin-top: 5px;\n  background: #fff; }\n  .part3 .part3_title {\n    font-size: 15px; }\n  .part3 .tit {\n    text-align: right; }\n  .pull-right {\n  float: right; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .padding-ver-0 {\n  padding-top: 0;\n  padding-bottom: 3px; }\n  .ui-g-1 {\n  width: 14%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvY29tcGxpYW5jZS1hbmFseXNpcy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG92ZXJkdWVcXG92ZXJkdWUtY2FzZVxcYnJhbmNoLWV4YW1pbmF0aW9uLWFwcHJvdmFsXFxjb21wbGlhbmNlLWFuYWx5c2lzXFxjb21wbGlhbmNlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0EsVUFDQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvY29tcGxpYW5jZS1hbmFseXNpcy9jb21wbGlhbmNlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQzIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDNfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5oaXN0b3J5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ucGFkZGluZy12ZXItMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuLnVpLWctMXtcclxud2lkdGg6IDE0JVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ComplianceAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceAnalysisComponent", function() { return ComplianceAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_compliance_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComplianceAnalysisComponent = /** @class */ (function () {
    function ComplianceAnalysisComponent(commfunc) {
        this.commfunc = commfunc;
        this.inValue = [];
        this.issuccess = false;
        this.complianceAnalyzeList = [];
        this.complianceAnalyze = {
            compliance: '',
            conditionExplain: ''
        }; // 合规性分析
        //3.合规性分析
        this.complianceOption = [{ label: '是', value: '1' }, { label: '否', value: '0' }];
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryInfor"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_compliance_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_3__["ComplianceAnalysisPageCache"](this.commfunc);
        this.markFlag = '';
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_4__["BranchExamApprovalData"](this.commfunc);
    }
    ComplianceAnalysisComponent.prototype.ngOnInit = function () {
        this.getConfidential();
    };
    ComplianceAnalysisComponent.prototype.ngOnChanges = function (changes) {
        this.grapComponentData();
    };
    // 抓取数据
    ComplianceAnalysisComponent.prototype.grapComponentData = function () {
        this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
        if (this.inValue && this.inValue.length > 0) {
            this.complianceAnalyzeList = this.inValue;
            var obj = {};
            this.history.historyControl(this.complianceAnalyzeList, obj);
            this.complianceAnalyze = obj;
        }
    };
    // 向外部传递数据
    ComplianceAnalysisComponent.prototype.inputCall = function (event) {
        this.setComplianceAnalyze();
    };
    ComplianceAnalysisComponent.prototype.dropdownChange = function (event) {
        this.setComplianceAnalyze();
    };
    ComplianceAnalysisComponent.prototype.setComplianceAnalyze = function () {
        if (this.complianceAnalyze.compliance && this.complianceAnalyze.conditionExplain) {
            this.complianceAnalyze['issucess'] = true;
            this.issuccess = false;
        }
        else {
            this.complianceAnalyze['issucess'] = false;
            this.issuccess = true;
        }
        this.statusKeeper.setComplianceAnalyze(this.complianceAnalyze);
    };
    ComplianceAnalysisComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComplianceAnalysisComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComplianceAnalysisComponent.prototype, "isDetailFlag", void 0);
    ComplianceAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'compliance-analysis',
            template: __webpack_require__(/*! ./compliance-analysis.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.html"),
            styles: [__webpack_require__(/*! ./compliance-analysis.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/compliance-analysis/compliance-analysis.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], ComplianceAnalysisComponent);
    return ComplianceAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/common/pageCache.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/common/pageCache.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CreditManEvalPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditManEvalPageCache", function() { return CreditManEvalPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CreditManEvalPageCache = /** @class */ (function (_super) {
    __extends(CreditManEvalPageCache, _super);
    function CreditManEvalPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    CreditManEvalPageCache.prototype.setDuteousManageEvalute = function (duteousManageEvalute) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, duteousManageEvalute, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-duteousManageEvalute", JSON.stringify({
            duteousManageEvalute: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    CreditManEvalPageCache.prototype.getDuteousManageEvalute = function () {
        return this.getTemporaryData("overdue-duteousManageEvalute");
    };
    CreditManEvalPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        // console.log(this.getDuteousManageEvalute())
        var dataTimeStamp = this.getDuteousManageEvalute() ? this.getDuteousManageEvalute().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return CreditManEvalPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 4.尽职信贷管理评价 -->\r\n<div class=\"ui-g-12 part4\" (keyup)=\"inputCall($event)\">\r\n    <div class=\"ui-g-12 part4_title\">尽职信贷管理评价</div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 add_delete padding-ver-0\">\r\n            <div class=\"ui-g-2 tit padding-ver-0\">\r\n                <span><span style=\"color: red;\">*</span>内部信贷管理存在的问题简表:</span>\r\n            </div>\r\n            <div class=\"ui-g-10 question_list padding-ver-0\">\r\n                <div class=\"ui-g-12 parent-box\" *ngFor=\"let item of dutyHelper.selectedList; let i = index\" style=\"padding-left:0;\">\r\n                    <div class=\"jbDrop ui-g-2\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <p-dropdown (mouseover)=\"problemEnter(1, i, false)\" (mouseleave)=\"problemLeave(1, i)\" [disabled]='isDetailFlag' placeholder=\"请选择\"\r\n                            [options]=\"dutyHelper.optionsList[i].first\" [(ngModel)]=\"item.firstClass\" (onChange)=\"dutyChange($event, 1, i)\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"jbDrop ui-g-2\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <p-dropdown (mouseover)=\"problemEnter(2, i, false)\" (mouseleave)=\"problemLeave(2, i)\" [disabled]='isDetailFlag' placeholder=\"请选择\"\r\n                            [options]=\"dutyHelper.optionsList[i].second\" [(ngModel)]=\"item.secondClass\" (onChange)=\"dutyChange($event, 2, i)\"></p-dropdown>\r\n                    </div>\r\n                    <div *ngIf=\"item.secondClass=='0903'\" class=\"ui-g-2 padding-ver-0\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <input (mouseover)=\"problemEnter(3, i, false)\" (mouseleave)=\"problemLeave(3, i)\" pInputText [readonly]='isDetailFlag' [(ngModel)]=\"item.reasonDesc\"\r\n                            (keyup)=\"inputCall($event)\">\r\n                    </div>\r\n                    <div class=\"ui-g-2\" style=\"height:25px;padding-left:0;padding-top:3px;\" *ngIf=\"!isDetailFlag\"\r\n                        (click)=\"deleteQuest(i)\">\r\n                        <img class=\"pic\" src=\"./../../../../../assets/layout/images/jian_list.png\">\r\n                    </div>\r\n                    <div *ngIf=\"innerProblemFlag[i]\" class=\"float-box\" [ngStyle]=\"innerProblemStyle\">{{innerProblemDesc}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2\">&nbsp;</div>\r\n            <div class=\"ui-g-5 padding-ver-0\">\r\n                <button pButton *ngIf=\"!isDetailFlag\" label=\"添加\" (click)='addQuest()'></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-ver-0\">\r\n            <div class=\"ui-g-12 padding-ver-0\" style=\"padding-left:0;\">\r\n                <div class=\"ui-g-12\" *ngFor=\"let item of actualData; let i = index\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-1\" style=\"text-align:right\">\r\n                                <label>实际经办责任人:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-4\">\r\n                                <div class=\"queryinputbtn\">\r\n                                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"item.personLiableName\" disabled/>\r\n                                    <div class=\"clickspan\">\r\n                                        <a (click)=\"chooseWorker(i)\" class=\"a-hand\">\r\n                                               <span>...</span>\r\n                                              </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-1\" style=\"text-align:right\">\r\n                                <label>认定等级:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-4\">\r\n                                <p-dropdown [(ngModel)]=\"item.cognizanceRank\" [options]=\"dutyAffirmLevel\" [style]=\"{'width':'50%'}\" appendTo=\"body\" [disabled]='isDetailFlag'>\r\n                                </p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-2\" style=\"text-align:right\">\r\n                                <label>认定原因:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-9\">\r\n                                <textarea maxlength=\"500\" [(ngModel)]='item.cognizanceReason' [rows]='5' pInputTextarea placeholder=\"文字描述,字符不超过500\" [disabled]='isDetailFlag'></textarea>\r\n                            </div>\r\n                            <div (click)=\"deleteData(i)\" style=\"text-align:left;padding-top:40px;\" *ngIf=\"actualData.length > 1\" >\r\n                                <img src=\"./../../../../../assets/layout/images/jian_list.png\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2\">&nbsp;</div>\r\n                    <div class=\"ui-g-5 padding-ver-0\">\r\n                        <button pButton label=\"添加\" (click)='addData()' *ngIf=\"!isDetailFlag\"></button>\r\n                    </div>\r\n                </div>\r\n                <!-- <component-credit-actual [inValue]=\"actualData\" (givData)=\"receiveData($event)\"></component-credit-actual> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-ver-0\">\r\n            <div class=\"ui-g-12 padding-ver-0\" style=\"padding-left:0;\">\r\n                <div class=\"ui-g-12\" *ngFor=\"let item of approvalData; let i = index\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-1\" style=\"text-align:right\">\r\n                                <label>实际审批责任人:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-4\">\r\n                                <div class=\"queryinputbtn\">\r\n                                    <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"item.personLiableName\" disabled/>\r\n                                    <div class=\"clickspan\">\r\n                                        <a (click)=\"chooseWorker1(i)\" class=\"a-hand\">\r\n                                                           <span>...</span>\r\n                                                          </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-1\" style=\"text-align:right\">\r\n                                <label>认定等级:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-4\">\r\n                                <p-dropdown [(ngModel)]=\"item.cognizanceRank\" [options]=\"dutyAffirmLevel\" [style]=\"{'width':'50%'}\" appendTo=\"body\" [disabled]='isDetailFlag'>\r\n                                </p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"ui-g-6\">\r\n\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-2\" style=\"text-align:right\">\r\n                                <label>认定原因:</label>\r\n                            </div>\r\n                            <div class=\"ui-g-9\">\r\n                                <textarea maxlength=\"500\" [(ngModel)]='item.cognizanceReason' [rows]='5' pInputTextarea placeholder=\"文字描述,字符不超过500\" [disabled]='isDetailFlag'></textarea>\r\n                            </div>\r\n                            <div (click)=\"deleteData1(i)\" style=\"text-align:left;padding-top:40px;\" *ngIf=\"approvalData.length > 1\">\r\n                                <img src=\"./../../../../../assets/layout/images/jian_list.png\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2\">&nbsp;</div>\r\n                    <div class=\"ui-g-5 padding-ver-0\">\r\n                        <button pButton label=\"添加\" (click)='addData1()' *ngIf=\"!isDetailFlag\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"history.hasHistory && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"history.historyOptionsChange($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10\r\n    (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        尽职信贷管理评价\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-12 add_delete\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>内部星带管理存在的问题简表：</span>\r\n            </div>\r\n            <div class=\"ui-g-11 question_list padding-ver-0\">\r\n                <div class=\"ui-g-12 padding-ver-0 parent-box\" *ngFor=\"let item of history.currentHistory.innerManageProblems; let i = index\"\r\n                    style=\"padding-left:0;\">\r\n                    <div class=\"ui-g-2 padding-ver-0\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <p-dropdown (mouseover)=\"problemEnter(1, i, true)\" (mouseleave)=\"problemLeave(1, i)\" [disabled]='true' [options]=\"code.firstClassProblems\"\r\n                            [(ngModel)]=\"item.firstClass\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-2 padding-ver-0\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <p-dropdown (mouseover)=\"problemEnter(2, i, true)\" (mouseleave)=\"problemLeave(2, i)\" [disabled]='true' [options]=\"code.secondClassProblems\"\r\n                            [(ngModel)]=\"item.secondClass\"></p-dropdown>\r\n                    </div>\r\n                    <div *ngIf=\"item.secondClass=='0903'\" class=\"ui-g-2 padding-ver-0\" style=\"padding-left:0;padding-top:3px;\">\r\n                        <input (mouseover)=\"problemEnter(3, i, true)\" (mouseleave)=\"problemLeave(3, i)\" pInputText readonly [(ngModel)]=\"item.reasonDesc\">\r\n                    </div>\r\n                    <div class=\"ui-g-2\" style=\"height:25px;padding-left:0;padding-top:3px;\">\r\n                    </div>\r\n                    <div *ngIf=\"innerProblemFlag[i]\" class=\"float-box\" [ngStyle]=\"innerProblemStyle\">{{innerProblemDesc}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"isShow\" [(visible)]=\"isShow\" modal=\"modal\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"isShow\" [in-value]=\"orgId\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"isShow1\" [(visible)]=\"isShow1\" modal=\"modal\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"isShow1\" [in-value]=\"orgId\" (outValue)=\"perInfor1($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part4 {\n  margin-top: 5px;\n  background: #fff; }\n  .part4 .part4_title {\n    font-size: 15px;\n    margin-bottom: 5px; }\n  .part4 .tit {\n    text-align: right; }\n  .ui-g-12 {\n  padding: 0; }\n  .part4 .add_delete {\n  display: flex; }\n  .part4 .ui-g-2 {\n  width: 14%; }\n  .part4 .jbDrop {\n  width: 17.5%; }\n  .padding-ver-0 .ui-g-1 {\n  width: 14%; }\n  .padding-ver-0 .ui-g-4 {\n  width: 15%;\n  text-align: left; }\n  .pull-right {\n  float: right; }\n  .center {\n  width: 75px;\n  margin: 0 auto; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .padding-ver-0 {\n  padding-top: 0;\n  padding-bottom: 3px; }\n  .pic {\n  width: 25px;\n  height: 25px; }\n  .parent-box {\n  position: relative; }\n  .float-box {\n  position: absolute;\n  background: #fff;\n  line-height: 1.6;\n  border: 1px solid #66CCFF;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\", \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n  color: #000;\n  padding: 5px;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: auto;\n  word-break: break-all;\n  bottom: 0px;\n  left: 100%;\n  width: 78%;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\", \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n  color: #000; }\n  .queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n  .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n  .queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px; }\n  :host/deep/ .u-datatable .ui-datatable-thead > tr {\n  font-size: 14px;\n  background-color: #f0f0f0;\n  color: #005574;\n  border: none !important;\n  height: 35px !important;\n  border-bottom-width: 1px !important;\n  border-bottom-style: solid !important;\n  border-bottom-color: #e8e8e8 !important;\n  font-family: \"Microsoft YaHei\"; }\n  .ui-g-12 {\n  padding: 0; }\n  .ui-g-4 {\n  width: 49.3333%;\n  text-align: right; }\n  .ui-g-9 {\n  width: 74.5%; }\n  .ui-g-3 {\n  width: 27.5%; }\n  .ui-g-4 {\n  width: 40.3333%; }\n  .add {\n  width: 32.9%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvY3JlZGl0LW1hbmFnZS1ldmFsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxicmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWxcXGNyZWRpdC1tYW5hZ2UtZXZhbFxcY3JlZGl0LW1hbmFnZS1ldmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBTDFCO0lBUVEsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUVRLGFBQWEsRUFBQTtFQUZyQjtFQUtRLFVBQVUsRUFBQTtFQUxsQjtFQVFRLFlBQVksRUFBQTtFQUlwQjtFQUVRLFVBQVUsRUFBQTtFQUZsQjtFQUtRLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDJFQUEyRTtFQUMzRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDViwyRUFBMkU7RUFDM0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7RUFrQmY7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWEsRUFBQTtFQUhqQjtJQUtRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBO0VBUmxDO0lBV1EsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUlwQjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMsOEJBQThCLEVBQUE7RUFHbEM7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvYnJhbmNoLWV4YW1pbmF0aW9uLWFwcHJvdmFsL2NyZWRpdC1tYW5hZ2UtZXZhbC9jcmVkaXQtbWFuYWdlLWV2YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydDQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC5wYXJ0NF90aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIC50aXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWktZy0xMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGFydDQge1xyXG4gICAgLmFkZF9kZWxldGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudWktZy0yIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgfVxyXG4gICAgLmpiRHJvcCB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFkZGluZy12ZXItMCB7XHJcbiAgICAudWktZy0xIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNCB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZGRpbmctdmVyLTAge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ucGljIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucGFyZW50LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mbG9hdC1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjZDQ0ZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiXFw1RkFFXFw4RjZGXFw5NkM1XFw5RUQxXCIsIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiA3OCU7XHJcbiAgICBmb250LWZhbWlseTogXCJcXDVGQUVcXDhGNkZcXDk2QzVcXDlFRDFcIiwgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vLyAuY3JlZGl0LWFjdHVhbHtcclxuLy8gICAgIC5xdWVyeU5hbWV7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICAgICAgLnF1ZXJ5TmFtZUJ0bntcclxuLy8gICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGNvbG9yOiAjMDA1NTc0O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1pY3Jvc29mdCBZYUhlaVwiO1xyXG59XHJcblxyXG4udWktZy0xMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udWktZy00IHtcclxuICAgIHdpZHRoOiA0OS4zMzMzJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udWktZy05IHtcclxuICAgIHdpZHRoOiA3NC41JTtcclxufVxyXG5cclxuLnVpLWctMyB7XHJcbiAgICB3aWR0aDogMjcuNSU7XHJcbn1cclxuXHJcbi51aS1nLTQge1xyXG4gICAgd2lkdGg6IDQwLjMzMzMlO1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIHdpZHRoOiAzMi45JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: CreditManageEvalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditManageEvalComponent", function() { return CreditManageEvalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_helper_innerProblem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/helper/innerProblem */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/helper/innerProblem.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_credit_manage_eval_common_pageCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreditManageEvalComponent = /** @class */ (function () {
    function CreditManageEvalComponent(commfunc) {
        this.commfunc = commfunc;
        this.isShow1 = false;
        this.isShow = false;
        this.inValue = [];
        this.duteousManageEvaluteList = [];
        this.duteousManageEvalute = {
            dutyAffirmLevel: '',
            dutyAffirmReason: '',
            innerManageProblems: [],
            overduePersonLiable: []
        }; // 尽职信贷管理评价
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryInfor"]();
        this.msgs = [];
        //4.尽职信贷管理评价
        this.dutyAffirmLevel = []; // code
        this.actualData = []; //实际经办责任人
        this.approvalData = []; //实际审批责任人
        this.dutyHelper = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_helper_innerProblem__WEBPACK_IMPORTED_MODULE_3__["DuteousManageEvaluteHelper"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_credit_manage_eval_common_pageCache__WEBPACK_IMPORTED_MODULE_4__["CreditManEvalPageCache"](this.commfunc);
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_5__["CommonlyMessage"]();
        // 设置此标志的原因：ngOnChanges 事件第一次执行时，获取不到数据。必须等 ngOnInit 事件执行后才可以获取到。
        // isInit: Boolean = false;
        this.innerManageProblems = [];
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_6__["PageProcess"]();
        this.markFlag = '';
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_7__["BranchExamApprovalData"](this.commfunc);
        // ----------------------- 提示框 -------------------------
        this.innerProblemFlag = [];
        this.innerProblemStyle = { width: '30%', left: '35%', bottom: '5px' };
        this.innerProblemDesc = '';
        this.codeValues();
    }
    CreditManageEvalComponent.prototype.ngOnInit = function () {
        this.pageInit();
        this.getConfidential();
    };
    CreditManageEvalComponent.prototype.pageInit = function () {
        this.dutyHelper.loadBasicOptions(this.code.firstClassProblems, this.code.secondClassProblems);
        this.dutyAffirmLevel = this.code.dutyAffirmLevel;
        this.dutyAffirmLevel.push({ label: "请选择", value: "" });
        this.pageProcess.setInit();
    };
    CreditManageEvalComponent.prototype.ngOnChanges = function (changes) {
        this.grapComponentData();
    };
    // 抓取数据
    CreditManageEvalComponent.prototype.grapComponentData = function () {
        if (this.pageProcess.getInit()) {
            this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
            this.duteousManageEvaluteList = this.inValue;
            this.separateData(); //分离实际经办责任人和实际审批责任人
            this.loadData();
        }
    };
    CreditManageEvalComponent.prototype.loadData = function () {
        if (this.inValue && this.inValue.length > 0) {
            var obj = {};
            this.history.historyControl(this.duteousManageEvaluteList, obj);
            this.duteousManageEvalute = obj;
            this.provokeDutyChange();
            this.dutyHelper.loadSelectedList(this.duteousManageEvalute['innerManageProblems']);
        }
        else {
            // 初始化后，没有数据时，1. 恢复页面数据；
            if (this.dutyHelper.firstClass.length && this.dutyHelper.secondClass.length) {
                // 2. 新增一行；
                if (!this.dutyHelper.selectedList ||
                    this.dutyHelper.selectedList.length == 0) {
                    if (!this.isDetailFlag) {
                        this.addQuest();
                    }
                }
            }
        }
    };
    CreditManageEvalComponent.prototype.provokeDutyChange = function () {
        var _this = this;
        var arr = this.dutyHelper.selectedList;
        if (arr && arr.length > 0) {
            arr.forEach(function (element, index) {
                _this.dutyChange(null, 1, index);
            });
        }
    };
    //  -----------------------实际经办责任人和实际审批责任人----------------------
    // actualData = [];//实际经办责任人
    // approvalData = [];//实际审批责任人
    // 数据分离
    CreditManageEvalComponent.prototype.separateData = function () {
        var separateData = this.overduePersonLiable;
        this.actualData = separateData.filter(function (item) {
            return item.liableType == '1';
        });
        this.approvalData = separateData.filter(function (item) {
            return item.liableType == '2';
        });
        if (this.actualData.length == 0) {
            this.addData();
        }
        if (this.approvalData.length == 0) {
            this.addData1();
        }
    };
    // 实际经办责任人
    CreditManageEvalComponent.prototype.receiveData = function (data) {
        this.actualData = data;
        this.actualData.forEach(function (item) {
            item.liableType = "1";
        });
        this.duteousManageEvalute.overduePersonLiable = this.actualData.concat(this.actualData);
        this.setDuteousManageEvalute();
    };
    // 实际审批责任人
    CreditManageEvalComponent.prototype.receiveDataTwo = function (data) {
        this.approvalData = data;
        this.approvalData.forEach(function (item) {
            item.liableType = "2";
        });
        this.duteousManageEvalute.overduePersonLiable = this.actualData.concat(this.approvalData);
        this.setDuteousManageEvalute();
    };
    // 添加数据
    CreditManageEvalComponent.prototype.addData = function () {
        var item = { personLiableName: "", cognizanceRank: "", cognizanceReason: "", liableType: "1" };
        this.actualData.push(item);
    };
    //删除数据
    CreditManageEvalComponent.prototype.deleteData = function (select) {
        var arr = [];
        for (var i = 0; i < this.actualData.length; i++) {
            if (i != select) {
                arr.push(this.actualData[i]);
            }
        }
        this.actualData = arr;
    };
    // 查询责任人
    CreditManageEvalComponent.prototype.chooseWorker = function (index) {
        this.isShow = true;
        this.selectData = index;
    };
    //员工查询返回
    CreditManageEvalComponent.prototype.perInfor = function (item) {
        this.isShow = false;
        if (item.length > 0) {
            this.actualData[this.selectData]["personLiableName"] = item[0].tellerName;
            this.actualData[this.selectData]["personLiableId"] = item[0].tellerId;
        }
    };
    // -----------------------尽职信贷管理评价------------------------
    // 添加
    CreditManageEvalComponent.prototype.addQuest = function () {
        var ret = this.dutyHelper.add();
        if (ret) {
            this.duteousManageEvalute.innerManageProblems = this.dutyHelper.selectedList;
            this.setDuteousManageEvalute();
            this.addFlag();
        }
        else {
            this.commonlyMessage.logicError('最多只能添加三项');
        }
    };
    //删除
    CreditManageEvalComponent.prototype.deleteQuest = function (index) {
        var ret = this.dutyHelper.delete(index);
        if (ret) {
            this.duteousManageEvalute.innerManageProblems = this.dutyHelper.selectedList;
            this.setDuteousManageEvalute();
            this.deleteFlag(index);
        }
        else {
            this.dutyHelper.selectedList[0]['firstClass'] = '';
            this.dutyHelper.selectedList[0]['firstClassDesc'] = '';
            this.dutyHelper.selectedList[0]['secondClass'] = '';
            this.dutyHelper.selectedList[0]['secondClassDesc'] = '';
            this.dutyHelper.selectedList[0]['reasonDesc'] = '';
            this.dutyHelper.optionsList[0]['second'] = [];
            this.duteousManageEvalute.innerManageProblems = this.dutyHelper.selectedList;
        }
    };
    CreditManageEvalComponent.prototype.dutyChange = function (event, type, index) {
        this.dutyHelper.selectChange(type, index);
        if (type == 1) {
            this.dutyHelper.firstChange(index);
            if (event) {
                this.clearInnerProblem(index);
            }
        }
        else {
            this.dutyHelper.selectedList[index]['reasonDesc'] = '';
        }
        this.setDuteousManageEvalute();
    };
    CreditManageEvalComponent.prototype.clearInnerProblem = function (index) {
        this.dutyHelper.selectedList[index]['secondClass'] = '';
        this.dutyHelper.selectedList[index]['secondClassDesc'] = '';
        this.dutyHelper.selectedList[index]['reasonDesc'] = '';
    };
    // 向外部传递数据
    CreditManageEvalComponent.prototype.inputCall = function (event) {
        this.setDuteousManageEvalute();
    };
    CreditManageEvalComponent.prototype.dropdownChange = function (event) {
        this.setDuteousManageEvalute();
    };
    CreditManageEvalComponent.prototype.setDuteousManageEvalute = function () {
        this.duteousManageEvalute.overduePersonLiable = this.actualData.concat(this.actualData);
        this.duteousManageEvalute.overduePersonLiable = this.actualData.concat(this.approvalData);
        this.statusKeeper.setDuteousManageEvalute(this.duteousManageEvalute);
    };
    //码值
    CreditManageEvalComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    CreditManageEvalComponent.prototype.addFlag = function () {
        this.innerProblemFlag.push(false);
    };
    CreditManageEvalComponent.prototype.deleteFlag = function (index) {
        this.innerProblemFlag.splice(index, 1);
    };
    CreditManageEvalComponent.prototype.setInnerProblemStyle = function (index, isHistory) {
        var row = this.dutyHelper.selectedList[index];
        if (isHistory) {
            row = this.history.currentHistory.innerManageProblems[index];
        }
        if (row.secondClass == '0903') {
            this.innerProblemStyle = { width: '30%', left: '53%', bottom: '5px' };
        }
        else {
            this.innerProblemStyle = { width: '30%', left: '35%', bottom: '5px' };
        }
    };
    CreditManageEvalComponent.prototype.problemEnter = function (type, index, isHistory) {
        this.setInnerProblemStyle(index, isHistory);
        var row = this.dutyHelper.selectedList[index];
        if (isHistory) {
            row = this.history.currentHistory.innerManageProblems[index];
        }
        var desc = '';
        switch (type.toString()) {
            case '1':
                desc = row['firstClassDesc'];
                break;
            case '2':
                desc = row['secondClassDesc'];
                break;
            case '3':
                desc = row['reasonDesc'];
                break;
        }
        this.innerProblemDesc = desc;
        if (this.innerProblemDesc) {
            this.innerProblemFlag[index] = true;
        }
        else {
            this.innerProblemFlag[index] = false;
        }
    };
    CreditManageEvalComponent.prototype.problemLeave = function (type, index) {
        this.innerProblemFlag[index] = false;
    };
    CreditManageEvalComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    // 添加数据
    CreditManageEvalComponent.prototype.addData1 = function () {
        var item = [{ personLiableName: "", cognizanceRank: "", cognizanceReason: "", liableType: "2" }];
        this.approvalData = this.approvalData.concat(item);
    };
    //删除数据
    CreditManageEvalComponent.prototype.deleteData1 = function (select) {
        var arr = [];
        for (var i = 0; i < this.approvalData.length; i++) {
            if (i != select) {
                arr.push(this.approvalData[i]);
            }
        }
        this.approvalData = arr;
    };
    // 查询责任人
    CreditManageEvalComponent.prototype.chooseWorker1 = function (index) {
        this.isShow1 = true;
        this.selectData = index;
        console.log(this.selectData);
    };
    //员工查询返回
    CreditManageEvalComponent.prototype.perInfor1 = function (item) {
        this.isShow1 = false;
        if (item.length > 0) {
            console.log(item);
            console.log(this.selectData);
            this.approvalData[this.selectData]["personLiableName"] = item[0].tellerName;
            this.approvalData[this.selectData]["personLiableId"] = item[0].tellerId;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreditManageEvalComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("inValueTwo"),
        __metadata("design:type", Object)
    ], CreditManageEvalComponent.prototype, "overduePersonLiable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreditManageEvalComponent.prototype, "isDetailFlag", void 0);
    CreditManageEvalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-manage-eval',
            template: __webpack_require__(/*! ./credit-manage-eval.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.html"),
            styles: [__webpack_require__(/*! ./credit-manage-eval.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/credit-manage-eval/credit-manage-eval.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CreditManageEvalComponent);
    return CreditManageEvalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/helper/innerProblem.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/helper/innerProblem.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DuteousManageEvaluteHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuteousManageEvaluteHelper", function() { return DuteousManageEvaluteHelper; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");


// 尽职信贷管理评价 duteousManageEvalute
var DuteousManageEvaluteHelper = /** @class */ (function () {
    function DuteousManageEvaluteHelper() {
        this.selectedList = []; // 当前数据
        this.firstClass = []; // 一级原始数据
        this.secondClass = []; // 二级原始数据
        this.optionsList = []; // 不同下拉框的数据   [{ first: [], second: [] }, { first: [], second: [] }, { first: [], second: [] }]  长度最多为三
        this.lengthLimit = 3; // 操作限制
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_1__["SelectHelper"]();
        this.objectHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__["ObjectHelper"]();
    }
    DuteousManageEvaluteHelper.prototype.init = function () {
        this.add();
    };
    DuteousManageEvaluteHelper.prototype.add = function () {
        var ret = false;
        //if (this.selectedList.length < this.lengthLimit) {
        // let item = { firstClass: this.firstClass[0].value, secondClass: this.secondClass[0].value };
        var item = { firstClass: '', secondClass: '' };
        this.addOptionsList();
        this.selectedList.push(item);
        ret = true;
        // } 
        return ret;
    };
    //删除
    DuteousManageEvaluteHelper.prototype.delete = function (index) {
        var ret = false;
        if (this.selectedList.length > 1) {
            this.deleteOptionsList(index);
            this.selectedList.splice(index, 1);
            ret = true;
        }
        return ret;
    };
    DuteousManageEvaluteHelper.prototype.selectChange = function (type, index) {
        var row = this.selectedList[index];
        if (type == 1) {
            row['firstClassDesc'] = this.selectHelper.getLabel(this.firstClass, row['firstClass']);
        }
        else {
            row['secondClassDesc'] = this.selectHelper.getLabel(this.secondClass, row['secondClass']);
        }
    };
    DuteousManageEvaluteHelper.prototype.addOptionsList = function () {
        var obj = { first: [], second: [] };
        obj.first = this.copyList(this.firstClass);
        obj.second = this.copyList(this.secondClass);
        this.optionsList.push(obj);
    };
    DuteousManageEvaluteHelper.prototype.deleteOptionsList = function (index) {
        this.optionsList.splice(index, 1);
    };
    DuteousManageEvaluteHelper.prototype.firstChange = function (index) {
        var value = this.selectedList[index]['firstClass'];
        var row = this.optionsList[index];
        row.second = this.selectHelper.itemsfilter(value, this.copyList(this.secondClass));
    };
    // 加载初始化选项
    DuteousManageEvaluteHelper.prototype.loadBasicOptions = function (firstClass, secondClass) {
        this.firstClass = firstClass;
        this.secondClass = secondClass;
    };
    // 加载已选中的数据
    DuteousManageEvaluteHelper.prototype.loadSelectedList = function (current) {
        if (current) {
            this.selectedList = current;
            this.preLoadOptions();
        }
    };
    // 加载选项
    DuteousManageEvaluteHelper.prototype.preLoadOptions = function () {
        var _this = this;
        this.selectedList.forEach(function (element) {
            _this.addOptionsList();
        });
    };
    // 列表拷贝
    DuteousManageEvaluteHelper.prototype.copyList = function (source) {
        var _this = this;
        var ret = [];
        source.forEach(function (element) {
            var obj = {};
            _this.objectHelper.copyObject(obj, element);
            ret.push(obj);
        });
        return ret;
    };
    return DuteousManageEvaluteHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/common/pageCache.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/common/pageCache.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: JobEvalIntroPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobEvalIntroPageCache", function() { return JobEvalIntroPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JobEvalIntroPageCache = /** @class */ (function (_super) {
    __extends(JobEvalIntroPageCache, _super);
    function JobEvalIntroPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    JobEvalIntroPageCache.prototype.setWorkEvaluteResume = function (workEvaluteResume) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, workEvaluteResume, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-workEvaluteResume", JSON.stringify({
            workEvaluteResume: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    JobEvalIntroPageCache.prototype.getWorkEvaluteResume = function () {
        return this.getTemporaryData("overdue-workEvaluteResume");
    };
    JobEvalIntroPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getWorkEvaluteResume() ? this.getWorkEvaluteResume().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return JobEvalIntroPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--2.工作评价简介 -->\r\n<div class=\"ui-g-12 part2\">\r\n    <div class=\"ui-g-12 part2_title padding-ver-0\">工作评价简介</div>\r\n    <div class=\"ui-g-12 padding-ver-0\" (keyup)=\"inputCall($event)\" style=\"padding-left:18px;\">\r\n        <div class=\"ui-g-2\">\r\n            <p class=\"margin-ver-0\"><span style=\"color: red;\">*</span>支行层级成因分析是否与实际情况相符</p>\r\n        </div>\r\n        <div class=\"ui-g-1\">\r\n            <span>:</span>\r\n        </div>\r\n        <div class=\"ui-g-9\">\r\n            <textarea [disabled]='isDetailFlag' [(ngModel)]='workEvaluteResume.subbranchWorkEvaluate' [rows]='5' pInputTextarea placeholder=\"主要描述因客户自身因素造成逾期的原因、分析与核实。\"></textarea>\r\n        </div>\r\n        <p *ngIf=\"workEvaluteResume.subbranchWorkEvaluate==''&& issuccess\" style=\"color: red;\">此项必填</p>\r\n        <div class=\"ui-g-2\">\r\n            <p class=\"margin-ver-0\"><span style=\"color: red;\">*</span>内部客户准入和信贷三查审核把关核实，调查人员和审批人员尽职、能力、道德等内部因素进行简述</p>\r\n        </div>\r\n        <div class=\"ui-g-1\">\r\n            <span>:</span>\r\n        </div>\r\n        <div class=\"ui-g-9\">\r\n            <textarea [disabled]='isDetailFlag' [(ngModel)]='workEvaluteResume.approveWorkEvaluate' [rows]='5' pInputTextarea\r\n                placeholder=\"\"></textarea>\r\n        </div>\r\n        <p *ngIf=\"workEvaluteResume.approveWorkEvaluate==''&& issuccess\" style=\"color: red;\">此项必填</p>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"history.hasHistory && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"history.historyOptionsChange($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10\r\n    (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        工作评价简介\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-11 ui-g-offset-1\">\r\n            <p>支行层级成因分析是否与实际情况相符：</p>\r\n            <textarea disabled [(ngModel)]='history.currentHistory.subbranchWorkEvaluate' [rows]='5' pInputTextarea placeholder=\"主要描述对客户自身因素造成逾期的原因，分析与核实\"></textarea>\r\n            <p>内部客户准入和信贷三查审核把关核实，调查人员和审批人员尽职、能力、道德等内部因素进行简述：</p>\r\n            <textarea disabled maxlength=\"300\" [(ngModel)]='history.currentHistory.approveWorkEvaluate' [rows]='5' pInputTextarea placeholder=\"文字描述，字符不超过300\"></textarea>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part2 {\n  margin-top: 5px;\n  background: #fff; }\n  .part2 .part2_title {\n    font-size: 15px; }\n  .part2 .tit {\n    text-align: right; }\n  .pull-right {\n  float: right; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .padding-ver-0 {\n  padding-top: 0;\n  padding-bottom: 3px; }\n  .ui-g-2 {\n  width: 12.1%;\n  padding: 0; }\n  .ui-g-1 {\n  line-height: 52px;\n  width: 1.85%;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9icmFuY2gtZXhhbWluYXRpb24tYXBwcm92YWwvam9iLWV2YWwtaW50cm8vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxvdmVyZHVlXFxvdmVyZHVlLWNhc2VcXGJyYW5jaC1leGFtaW5hdGlvbi1hcHByb3ZhbFxcam9iLWV2YWwtaW50cm9cXGpvYi1ldmFsLWludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQTtFQUdkO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL292ZXJkdWUvb3ZlcmR1ZS1jYXNlL2JyYW5jaC1leGFtaW5hdGlvbi1hcHByb3ZhbC9qb2ItZXZhbC1pbnRyby9qb2ItZXZhbC1pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0MiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnBhcnQyX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy12ZXItMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi51aS1nLTIge1xyXG4gICAgd2lkdGg6IDEyLjElO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnVpLWctMSB7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgIHdpZHRoOiAxLjg1JTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: JobEvalIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobEvalIntroComponent", function() { return JobEvalIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_job_eval_intro_common_pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/base/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobEvalIntroComponent = /** @class */ (function () {
    function JobEvalIntroComponent(commfunc) {
        this.commfunc = commfunc;
        this.issuccess = false;
        this.inValue = [];
        this.workEvaluteResumeList = [];
        this.workEvaluteResume = {
            subbranchWorkEvaluate: '',
            approveWorkEvaluate: ''
        }; // 工作评价简述
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_2__["HistoryInfor"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_job_eval_intro_common_pageCache__WEBPACK_IMPORTED_MODULE_3__["JobEvalIntroPageCache"](this.commfunc);
        this.markFlag = '';
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_branch_examination_approval_base_localData__WEBPACK_IMPORTED_MODULE_4__["BranchExamApprovalData"](this.commfunc);
    }
    JobEvalIntroComponent.prototype.ngOnInit = function () {
        this.getConfidential();
    };
    JobEvalIntroComponent.prototype.ngOnChanges = function (changes) {
        this.grapComponentData();
    };
    // 抓取数据
    JobEvalIntroComponent.prototype.grapComponentData = function () {
        this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
        if (this.inValue && this.inValue.length > 0) {
            this.workEvaluteResumeList = this.inValue;
            var obj = {};
            this.history.historyControl(this.workEvaluteResumeList, obj);
            this.workEvaluteResume = obj;
        }
    };
    // 向外部传递数据
    JobEvalIntroComponent.prototype.inputCall = function (event) {
        if (this.workEvaluteResume.subbranchWorkEvaluate && this.workEvaluteResume.approveWorkEvaluate) {
            this.workEvaluteResume['issucess'] = true;
            this.issuccess = false;
        }
        else {
            this.workEvaluteResume['issucess'] = false;
            this.issuccess = true;
        }
        this.setWorkEvaluteResume();
    };
    JobEvalIntroComponent.prototype.setWorkEvaluteResume = function () {
        this.statusKeeper.setWorkEvaluteResume(this.workEvaluteResume);
    };
    JobEvalIntroComponent.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobEvalIntroComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JobEvalIntroComponent.prototype, "isDetailFlag", void 0);
    JobEvalIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'job-eval-intro',
            template: __webpack_require__(/*! ./job-eval-intro.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.html"),
            styles: [__webpack_require__(/*! ./job-eval-intro.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/job-eval-intro/job-eval-intro.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], JobEvalIntroComponent);
    return JobEvalIntroComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CreditIfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditIfoModule", function() { return CreditIfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _selfDebt_selfDebt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selfDebt/selfDebt.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.ts");
/* harmony import */ var _releDebt_releDebt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./releDebt/releDebt.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件

//页面


 // 自身债务
 //关联债务
var CreditIfoModule = /** @class */ (function () {
    function CreditIfoModule() {
    }
    CreditIfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _selfDebt_selfDebt_component__WEBPACK_IMPORTED_MODULE_5__["SelfDebt"],
                _releDebt_releDebt_component__WEBPACK_IMPORTED_MODULE_6__["ReleDebt"]
            ],
            entryComponents: [],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__["AuthorityService"]
            ],
            exports: [
                _selfDebt_selfDebt_component__WEBPACK_IMPORTED_MODULE_5__["SelfDebt"],
                _releDebt_releDebt_component__WEBPACK_IMPORTED_MODULE_6__["ReleDebt"]
            ]
        })
    ], CreditIfoModule);
    return CreditIfoModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 关联债务 -->\r\n<div class=\"ui-g-12 part2\">\r\n    <div class=\"ui-g-12 part2_title\">关联债务（元）</div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"releList\" [scrollable]=\"true\">\r\n            <p-column header=\"关联关系类型\" field=\"releRelationTypeNameDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"关联关系子类型\" field=\"releTypeNameDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"客户名称\" field=\"custName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"产品名称\" field=\"productName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"合同编号/信用卡号\" field=\"contractNumber\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <span class=\"color\">{{item.contractNumber}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"授信金额\" field=\"creditAmount\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditAmount/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"授信余额\" field=\"creditBalance\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditBalance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"起贷日期\" field=\"startCreditDate\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"止贷日期\" field=\"endCreditDate\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"共同借款人名称\" field=\"togetherBorrowList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <a target=\"_blank\" href=\"/#/pages/custom-view/general?custNo={{items.releCustId}}&pageNum=1\" *ngFor=\"let items of item.togetherBorrowList \">{{items.releCustNameDesc || items.releCustName}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"担保方式\" field=\"guaranteeTypeDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"担保人名称\" field=\"bondsmanList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <a target=\"_blank\" href=\"/#/pages/custom-view/general?custNo={{items.custNo}}&pageNum=1\" *ngFor=\"let items of item.bondsmanList \">{{items.releCustNameDesc || items.releCustName}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"是否转化\" field=\"transformLoanDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"风险处置编号\" field=\"transformshemeList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <!-- href=\"{{urlTool.transform(item.transformType, item.data_id)}}\"   traansformshemeList  -->\r\n                    <a class=\"sp-link\" target=\"_blank\" (click)=\"toLink(items.transformType, items.dataId, item.contractNumber, items.transformLoanApplyId)\" *ngFor=\"let items of item.transformshemeList \">{{items.transformLoanApplyIdDesc || items.transformLoanApplyId}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"经办人\" field=\"agentWorkNoName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"审批责任人\" field=\"approveDutyOfficerName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"主联系人\" field=\"principalLinkmanName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <!-- beloneOrgName beloneOrgNo -->\r\n            <p-column header=\"所属机构\" field=\"beloneOrgName\" [style]=\"{'width':'150px'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part1 {\n  background: #fff; }\n  .part1 .part1_title {\n    font-size: 15px; }\n  .part2 {\n  margin-top: 5px;\n  background: #fff; }\n  .part2 .part2_title {\n    font-size: 15px; }\n  .btn {\n  text-align: center;\n  margin-top: 30px; }\n  .table {\n  text-align: center; }\n  .tit {\n  text-align: right; }\n  .sp-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9jcmVkaXQtaWZvL3JlbGVEZWJ0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxjcmVkaXQtaWZvXFxyZWxlRGVidFxccmVsZURlYnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRyxnQkFBZ0IsRUFBQTtFQURuQjtJQUdPLGVBQWUsRUFBQTtFQUd2QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZwQjtJQUlRLGVBQWUsRUFBQTtFQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBO0VBRW5CO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNLLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvY3JlZGl0LWlmby9yZWxlRGVidC9yZWxlRGVidC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnBhcnQxIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAucGFydDFfdGl0bGV7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgIC5wYXJ0MntcclxuICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAucGFydDJfdGl0bGV7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgIC5idG57XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgIH1cclxuICAgLnRhYmxle1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgIC50aXR7XHJcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgfVxyXG5cclxuICAgLnNwLWxpbmsge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbi8vIDpob3N0IC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudHtcclxuLy8gICAgIGhlaWdodDogOTAlO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogI2U5ZTllOTtcclxuLy8gfVxyXG4vLyA6aG9zdCAvZGVlcC8gdGFibGV7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ReleDebt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleDebt", function() { return ReleDebt; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/url */ "./src/app/pages/tzb/custom/overdue/common/url.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//关联债务
var ReleDebt = /** @class */ (function () {
    function ReleDebt(commfunc, router, confirmationService, httpService, transformationService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.transformationService = transformationService;
        this.msgs = [];
        this.releList = []; //关联债务列表
        // 担保方式
        this.guaranteeMethod = [];
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_5__["PageProcess"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_8__["CommonlyMessage"]();
        this.urlTool = new app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_6__["UrlTool"](this.router, this.commfunc, this.transformationService, this.commonlyMessage);
        //调用方法，获取全部码值
        this.codeValues();
        // this.statusId = this.code['useStatus'];
        // this.channelType = this.code['mesgSendChanellSequ1'];
        this.guaranteeMethod = this.code['GuaranteeMethod'];
        this.urlParam = window.location.host;
    }
    ReleDebt.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
    };
    ReleDebt.prototype.ngOnChanges = function () {
        if (this.pageProcess.getInit()) {
            this.grapParameters();
        }
    };
    ReleDebt.prototype.grapParameters = function () {
        // 接收父页面传过来数据
        if (this.inValue && this.inValue.length) {
            // console.log(this.inValue)
            this.releList = this.fixedData(this.inValue);
            // console.log(this.releList)
        }
        else {
            this.releList = [];
        }
    };
    ReleDebt.prototype.fixedData = function (list) {
        var _this = this;
        list.forEach(function (element) {
            element.guaranteeTypeDesc = _this.getLabel(element.guaranteeType);
            element.transformLoanDesc = element.transformLoan == '1' ? '是' : '否';
            element.togetherBorrowList = _this.fixLinkLabel(element.togetherBorrowList, 'releCustName', 'releCustNameDesc');
            element.bondsmanList = _this.fixLinkLabel(element.bondsmanList, 'releCustName', 'releCustNameDesc');
            element.transformshemeList = _this.fixLinkLabel(element.transformshemeList, 'transformLoanApplyId', 'transformLoanApplyIdDesc');
            element.releRelationTypeNameDesc = _this.getNames(element.releList, 'releRelationTypeName');
            element.releTypeNameDesc = _this.getNames(element.releList, 'releTypeName');
        });
        return list;
    };
    ReleDebt.prototype.fixLinkLabel = function (list, origin, desc) {
        var ret = [];
        if (list && list.length) {
            list.forEach(function (element, index) {
                if (index < list.length - 1 && element[origin]) {
                    element[desc] = element[origin] + ',';
                }
                ret.push(element);
            });
        }
        return ret;
    };
    ReleDebt.prototype.getNames = function (list, nameAttr) {
        var ret = '';
        if (list && list.length) {
            list.forEach(function (element) {
                ret += element[nameAttr] ? element[nameAttr] + ',' : '';
            });
            ret = ret.substring(0, ret.length - 1);
        }
        return ret;
    };
    ReleDebt.prototype.getLabel = function (key) {
        var ret = '';
        for (var i = 0, len = this.guaranteeMethod.length; i < len; i++) {
            var element_1 = this.guaranteeMethod[i];
            if (element_1.value == key) {
                ret = element_1.label;
            }
        }
        return ret;
    };
    ReleDebt.prototype.toLink = function (transformType, dataId, contractNumber, transformLoanApplyId) {
        this.urlTool.transform(transformType, dataId, contractNumber, transformLoanApplyId);
    };
    //码值
    ReleDebt.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReleDebt.prototype, "inValue", void 0);
    ReleDebt = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "rele-debt",
            template: __webpack_require__(/*! ./releDebt.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.html"),
            styles: [__webpack_require__(/*! ./releDebt.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/releDebt/releDebt.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"],
            app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_7__["TransformationPlanHttpService"]])
    ], ReleDebt);
    return ReleDebt;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/common/pageCache.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/common/pageCache.ts ***!
  \***********************************************************************************************/
/*! exports provided: SelfDebtPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfDebtPageCache", function() { return SelfDebtPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelfDebtPageCache = /** @class */ (function (_super) {
    __extends(SelfDebtPageCache, _super);
    function SelfDebtPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    // 逾期信息
    SelfDebtPageCache.prototype.setSelfDebtInfo = function (transformRationalit) {
        this.commfunc.setSessionDataCH("overdue-selfDebtInfo", JSON.stringify({
            transformRationalit: transformRationalit,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    SelfDebtPageCache.prototype.getSelfDebtInfo = function () {
        return this.getTemporaryData("overdue-selfDebtInfo");
    };
    SelfDebtPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getSelfDebtInfo() ? this.getSelfDebtInfo().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return SelfDebtPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--自身债务  -->\r\n<div class=\"ui-g-12 part1\">\r\n    <div class=\"ui-g-12 part1_title\">自身债务（元）</div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"selfDebtList\" [scrollable]=\"true\">\r\n            <p-column header=\"产品名称\" field=\"productName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"合同编号/信用卡号\" field=\"contractNumber\" [style]=\"{'width':'200px'}\"></p-column>\r\n\r\n            <!-- <p-column header=\"币种\" field=\"currency\" [style]=\"{'width':'200px'}\">\r\n\r\n            </p-column> -->\r\n\r\n            <p-column field=\"currencySpecies\" header=\"币种\" [style]=\"{'width':'200px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{col.currencySpecies|codeValuePie:currencyOptions}}\r\n                </ng-template>\r\n              </p-column>\r\n            <p-column header=\"授信金额（元）\" field=\"creditAmount\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditAmount/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"授信余额（元）\" field=\"creditBalance\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditBalance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"起贷日期\" field=\"startCreditDate\" [style]=\"{'width':'150px'}\">\r\n                <!-- <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditBalance/1)|number:'1.2-2'}}\r\n                </ng-template> -->\r\n            </p-column>\r\n            <p-column header=\"止贷日期\" field=\"endCreditDate\" [style]=\"{'width':'150px'}\">\r\n                <!-- <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    {{(item.creditBalance/1)|number:'1.2-2'}}\r\n                </ng-template> -->\r\n            </p-column>\r\n            <p-column header=\"共同借款人名称\" field=\"togetherBorrowList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <a target=\"_blank\" href=\"/#/pages/custom-view/general?custNo={{items.releCustId}}&pageNum=1\" *ngFor=\"let items of item.togetherBorrowList \">{{items.releCustNameDesc || items.releCustName}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"担保方式\" field=\"guaranteeTypeDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"担保人名称\" field=\"bondsmanList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <a target=\"_blank\" href=\"/#/pages/custom-view/general?custNo={{items.releCustId}}&pageNum=1\" *ngFor=\"let items of item.bondsmanList \">{{items.releCustNameDesc || items.releCustName}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"是否转化\" field=\"transformLoanDesc\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"风险处置编号\" field=\"transformshemeList\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-ri=\"rowIndex\" let-item=\"rowData\">\r\n                    <!-- href=\"{{urlTool.transform(items.transformType, items.dataId, item.contractNumber, items.transformLoanApplyId)}}\" -->\r\n                    <a class=\"sp-link\" target=\"_blank\" (click)=\"toLink(items.transformType, items.dataId, item.contractNumber, items.transformLoanApplyId)\" *ngFor=\"let items of item.transformshemeList \">{{items.transformLoanApplyIdDesc || items.transformLoanApplyId}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"经办人\" field=\"agentWorkNoName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"审批责任人\" field=\"approveDutyOfficerName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"主联系人\" field=\"principalLinkmanName\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <!-- beloneOrgName beloneOrgNo -->\r\n            <p-column header=\"所属机构\" field=\"beloneOrgName\" [style]=\"{'width':'150px'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"transformRationalitFlag\">\r\n        <div class=\"ui-g-1\"><span style=\"color:red;\">*</span>转化合理性评判：</div>\r\n        <div class=\"ui-g-8\">\r\n            <textarea pInputTextarea maxlength=\"1000\" [disabled]='isDetailFlag' (keyup) = \"transformRationalitCall($event)\" [(ngModel)]=\"transformRationalitCurrent.transformRationalit\" [rows]='5' placeholder=\"文字描述，不超过500字\"></textarea>\r\n            <!-- <p *ngIf=\"transformRationalitCurrent.transformRationalit==''\" style=\"color:red;\">此项必填</p> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"transformRationalitFlag && history.historyOptions && history.historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <!-- 历史查看 -->\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\" *ngIf=\"history.historyOptions && history.historyOptions.length\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"history.historyOptionsChange($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        查看历史转化合理性评判\r\n    </p-header>\r\n    <div>\r\n        <div class=\"ui-g-2 history_dialog_label\">转化合理性评判：</div>\r\n        <div class=\"ui-g-10\">\r\n            <textarea [disabled]='true' disabled pInputTextarea maxlength=\"1000\" [(ngModel)]=\"history.currentHistory.transformRationalit\" [rows]='5'></textarea>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part1 {\n  background: #fff; }\n  .part1 .part1_title {\n    font-size: 15px; }\n  .part2 {\n  margin-top: 5px;\n  background: #fff; }\n  .part2 .part2_title {\n    font-size: 15px; }\n  .btn {\n  text-align: center;\n  margin-top: 30px; }\n  .table {\n  text-align: center; }\n  .tit {\n  text-align: right; }\n  .history_dialog_label {\n  text-align: right; }\n  .pull-right {\n  float: right; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px; }\n  .sp-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9jcmVkaXQtaWZvL3NlbGZEZWJ0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxjcmVkaXQtaWZvXFxzZWxmRGVidFxcc2VsZkRlYnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDRyxnQkFBZ0IsRUFBQTtFQURuQjtJQUdPLGVBQWUsRUFBQTtFQUd2QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZwQjtJQUlRLGVBQWUsRUFBQTtFQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBO0VBRW5CO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGlCQUFpQixFQUFBO0VBR3hCO0VBQ0ksWUFBWSxFQUFBO0VBRWhCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2UvY3JlZGl0LWlmby9zZWxmRGVidC9zZWxmRGVidC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAucGFydDEge1xyXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgIC5wYXJ0MV90aXRsZXtcclxuICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgLnBhcnQye1xyXG4gICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgIC5wYXJ0Ml90aXRsZXtcclxuICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgLmJ0bntcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgfVxyXG4gICAudGFibGV7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgLnRpdHtcclxuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICB9XHJcbiAgIC5oaXN0b3J5X2RpYWxvZ19sYWJlbHtcclxuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICB9XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNwLWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelfDebt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfDebt", function() { return SelfDebt; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var _credit_ifo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../credit-ifo.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.component.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_credit_ifo_selfDebt_common_pageCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/base/localData.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/url */ "./src/app/pages/tzb/custom/overdue/common/url.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








// import { LocalData } from "app/pages/tzb/custom/overdue/common/localData";





//自身债务
var SelfDebt = /** @class */ (function () {
    function SelfDebt(commfunc, router, confirmationService, httpService, app, transformationService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.app = app;
        this.transformationService = transformationService;
        this.guaranteeMethod = []; // 担保方式
        this.baseInfo = {};
        // 当前 转化合理性评判
        this.transformRationalitList = []; // 转化合理性评判列表
        // 当前页面显示的转化合理性评判数据
        this.transformRationalitCurrent = {
            transformRationalit: ''
        };
        this.selfDebtList = []; //自身债务列表
        this.selfDebtInfo = {};
        this.transformRationalitFlag = false; // 转化合理性评判显示标致
        this.hasBondsmanConditionFlag = false; // 担保人情况分析 显示标志
        this.currencyOptions = []; //币种
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_6__["HistoryInfor"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_credit_ifo_selfDebt_common_pageCache__WEBPACK_IMPORTED_MODULE_7__["SelfDebtPageCache"](this.commfunc);
        this.localData = new app_pages_tzb_custom_overdue_overdue_case_credit_ifo_base_localData__WEBPACK_IMPORTED_MODULE_9__["CreditInfoData"](this.commfunc);
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_8__["PageProcess"]();
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_12__["CommonlyMessage"]();
        this.urlTool = new app_pages_tzb_custom_overdue_common_url__WEBPACK_IMPORTED_MODULE_10__["UrlTool"](this.router, this.commfunc, this.transformationService, this.commonlyMessage);
        this.markFlag = '';
        //调用方法，获取全部码值
        this.codeValues();
        // this.statusId = this.code['useStatus'];
        // this.channelType = this.code['mesgSendChanellSequ1'];
        this.guaranteeMethod = this.code['GuaranteeMethod'];
        this.urlParam = window.location.host;
    }
    // 币种		1		人民币
    // 币种		100		折汇人民币
    // 币种		101		临时折人民币
    // 币种		12		英镑
    // 币种		13		港币
    // 币种		14		美元
    // 币种		27		日元
    // 币种		38		欧元
    // 币种		99		外币折美元
    SelfDebt.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
        this.getConfidential();
        // this.codeVal();
        this.currencyOptions = this.code['CURRENCY'];
    };
    SelfDebt.prototype.ngOnChanges = function () {
        this.grapParameters();
    };
    SelfDebt.prototype.grapParameters = function () {
        if (this.pageProcess.getInit()) {
            //接收父组件传值
            this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
            this.baseInfo = this.putbaseInfo;
            this.loadData();
        }
    };
    SelfDebt.prototype.loadData = function () {
        if (Object.keys(this.inValue).length != 0) {
            this.selfDebtList = this.fixedData(this.inValue.selfDebtList); // 自身债务列表
            this.transformRationalitList = this.inValue.transformRationalitList; // 转化合理性评判列表
            var l = this.localData.getOperatingLevel();
            this.history.setOperatingLevel(l);
            this.history.historyControl(this.transformRationalitList, this.transformRationalitCurrent);
            // 获取转化合理性评判显示标致
            this.grapTransformRationalitFlag();
        }
    };
    SelfDebt.prototype.fixedData = function (list) {
        var _this = this;
        list.forEach(function (element) {
            element.guaranteeTypeDesc = _this.getLabel(element.guaranteeType);
            element.transformLoanDesc = element.transformLoan == '1' ? '是' : '否';
            element.togetherBorrowList = _this.fixLinkLabel(element.togetherBorrowList, 'releCustName', 'releCustNameDesc');
            element.bondsmanList = _this.fixLinkLabel(element.bondsmanList, 'releCustName', 'releCustNameDesc');
            element.transformshemeList = _this.fixLinkLabel(element.transformshemeList, 'transformLoanApplyId', 'transformLoanApplyIdDesc');
        });
        return list;
    };
    SelfDebt.prototype.fixLinkLabel = function (list, origin, desc) {
        var ret = [];
        if (list && list.length) {
            list.forEach(function (element, index) {
                if (index < list.length - 1 && element[origin]) {
                    element[desc] = element[origin] + ',';
                }
                ret.push(element);
            });
        }
        return ret;
    };
    SelfDebt.prototype.getNames = function (list, nameAttr) {
        var ret = '';
        if (list && list.length) {
            list.forEach(function (element) {
                ret += element[nameAttr] ? element[nameAttr] + ',' : '';
            });
            ret = ret.substring(0, ret.length - 1);
        }
        return ret;
    };
    SelfDebt.prototype.getLabel = function (key) {
        var ret = '';
        for (var i = 0, len = this.guaranteeMethod.length; i < len; i++) {
            var element_1 = this.guaranteeMethod[i];
            if (element_1.value == key) {
                ret = element_1.label;
            }
        }
        return ret;
    };
    SelfDebt.prototype.grapTransformRationalitFlag = function () {
        var trans_bondsman_flag = this.localData.getTemporaryData("overdue-transformRationalit-bondsmanCondition");
        if (trans_bondsman_flag) {
            this.transformRationalitFlag = trans_bondsman_flag.transformRationalitFlag;
            this.hasBondsmanConditionFlag = trans_bondsman_flag.hasBondsmanConditionFlag;
        }
        // 2019-7-18  应罗依妮要求更改转化合理性评判显示规则，改由是否转化来判断显示
        // if(this.selfDebtList && this.selfDebtList.length >= 1){
        //     this.selfDebtList.forEach(element => {
        //         if(element.transformLoanDesc == "是"){
        //             this.transformRationalitFlag = true;
        //             }
        //     });
        // }
        // console.log(this.transformRationalitFlag);
    };
    // 转化合理性评判 keyup 事件，for other module
    SelfDebt.prototype.transformRationalitCall = function (event) {
        this.setSelfDebtInfo();
    };
    SelfDebt.prototype.setSelfDebtInfo = function () {
        this.statusKeeper.setSelfDebtInfo(this.transformRationalitCurrent.transformRationalit);
    };
    // -------------------------------------- 
    SelfDebt.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    SelfDebt.prototype.toLink = function (transformType, dataId, contractNumber, transformLoanApplyId) {
        this.urlTool.transform(transformType, dataId, contractNumber, transformLoanApplyId);
    };
    // 提交数据到父页面
    SelfDebt.prototype.ngAfterContentChecked = function () {
        // 转化合理性评判
        var param = this.transformRationalitCurrent.transformRationalit;
        this.outValue.emit(param);
    };
    //码值
    SelfDebt.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelfDebt.prototype, "putbaseInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelfDebt.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelfDebt.prototype, "isDetailFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelfDebt.prototype, "outValue", void 0);
    SelfDebt = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "self-debt",
            template: __webpack_require__(/*! ./selfDebt.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.html"),
            styles: [__webpack_require__(/*! ./selfDebt.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/selfDebt/selfDebt.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _credit_ifo_component__WEBPACK_IMPORTED_MODULE_5__["CreditIfo"]; }))),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"],
            _credit_ifo_component__WEBPACK_IMPORTED_MODULE_5__["CreditIfo"],
            app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_11__["TransformationPlanHttpService"]])
    ], SelfDebt);
    return SelfDebt;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overdue_case\">\r\n    <div class=\"ui-g-12 topMsg\">\r\n        <div class=\"ui-g-4\">\r\n            <span>客户号：</span>\r\n            <a target=\"_blank\" href=\"/#/pages/custom-view/general?custNo={{baseInfo.custNo}}&pageNum=1\"><span class=\"echo_msg\">{{baseInfo.custNo}}</span></a>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            客户名称：{{baseInfo.custName}}\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n                合同编号/信用卡号：{{baseInfo.contractNumber}}\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            逾期编号：{{baseInfo.overdueCaseAnalyzeId}}\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            任务推送时间：{{latestTaskPushDate}}\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- 逾期案例模块化 -->\r\n    <p-tabView (onChange)=\"handleChange($event)\" [activeIndex]='index'>\r\n          <p-tabPanel header=\"{{bookmark.bookmarkName}}\" *ngFor=\"let bookmark of bookmarkList\" [disabled]=\"bookmark.disabledFlag\" [cache]='true'>\r\n            <app-container-resource *ngFor=\"let item of bookmark.bookList\" [basicSourceEnName]=\"item.basicSourceEnName\" [bookmarkId]=\"bookmark.bookmarkId\"\r\n              [transferCreditData]=\"transferCreditBean\"></app-container-resource>\r\n          </p-tabPanel>\r\n        </p-tabView>\r\n    <!-- 逾期案例模块化 -->\r\n\r\n    <!-- tabs切换页  *ngIf=\"!isErrorOrEmpty\" -->\r\n    <!-- <div class=\"ui-g-12  content_case\">\r\n        <div class=\"functions\">\r\n            <span *ngFor=\"let item of overdueCaseTab.tabsRouterInfo; let i=index\" >\r\n                <a class=\"change\" *ngIf=\"item.isAllowed\"  [ngClass]=\"{'active': overdueCaseTab.show == i}\" (click)=\"apply(i, item)\">{{item.title}}</a>\r\n            </span>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n<!-- <router-outlet></router-outlet> -->\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overdue_case .topMsg div {\n  letter-spacing: 0;\n  height: 45px;\n  font-size: 15px;\n  font-weight: bold; }\n  .overdue_case .topMsg div .echo_msg {\n    color: #19b0c8; }\n  .overdue_case .content_case {\n  background: #fff; }\n  .overdue_case .content_case .functions {\n    background: #efefef;\n    padding: 5px; }\n  .overdue_case .content_case .functions .change {\n      display: inline-block;\n      font-size: 15px;\n      height: 40px;\n      line-height: 40px;\n      border-radius: 3px 3px 0 0;\n      color: #929292;\n      padding: 0px 30px;\n      font-weight: bold;\n      cursor: pointer; }\n  .overdue_case .content_case .active {\n    border: none !important;\n    background-color: #fff  !important;\n    color: #19b0c8 !important; }\n  .overdue_case .content_case .bgcolor {\n    background: #fafafa; }\n  @media screen and (max-width: 1280px) {\n    .overdue_case .content_case .functions {\n      border-bottom: 1px solid #dddddd; }\n      .overdue_case .content_case .functions .change {\n        font-size: 14px;\n        padding: 0px 15px; }\n    .overdue_case .content_case .active {\n      background-color: #e5e6e9 !important; }\n    .overdue_case .content_case .bgcolor {\n      background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG92ZXJkdWVcXG92ZXJkdWUtY2FzZVxcb3ZlcmR1ZS1jYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTVksaUJBQWlCO0VBR2pCLFlBQVk7RUFFWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFaN0I7SUFtQmdCLGNBQWEsRUFBQTtFQW5CN0I7RUF5QlEsZ0JBQWdCLEVBQUE7RUF6QnhCO0lBNEJZLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUE3QnhCO01BK0JnQixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsMEJBQTBCO01BQzFCLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQXZDL0I7SUEyQ1ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyx5QkFBeUIsRUFBQTtFQTdDckM7SUFnRFksbUJBQW9CLEVBQUE7RUFHeEI7SUFuRFI7TUFxRGdCLGdDQUFnQyxFQUFBO01BckRoRDtRQXVEb0IsZUFBZTtRQUNmLGlCQUFpQixFQUFBO0lBeERyQztNQTREZ0Isb0NBQW9DLEVBQUE7SUE1RHBEO01BK0RnQixtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2Uvb3ZlcmR1ZS1jYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJkdWVfY2FzZXtcclxuICAgIC8vIOmhtumDqOWbuuWumuS/oeaBr1xyXG4gICAgLnRvcE1zZ3tcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vIHNwYW46bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAuZWNob19tc2d7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMTliMGM4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdGFic+WIh+aNolxyXG4gICAgLmNvbnRlbnRfY2FzZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC8vIOWIh+aNolxyXG4gICAgICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNmU5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJnY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OverdueCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueCase", function() { return OverdueCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_base_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/base/tab */ "./src/app/pages/tzb/custom/overdue/overdue-case/base/tab.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageData */ "./src/app/pages/tzb/custom/overdue/common/pageData.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var _custom_credit_ccm_common_service_parent_child_comm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../custom/credit-ccm/common/service/parent-child-comm.service */ "./src/app/pages/tzb/custom/credit-ccm/common/service/parent-child-comm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import { ParentChildCommunicationService } from '../../service/parent-child-comm.service';

var OverdueCase = /** @class */ (function () {
    function OverdueCase(commfunc, router, confirmationService, httpService, route, creditCcmService, communicationService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.route = route;
        this.creditCcmService = creditCcmService;
        this.communicationService = communicationService;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        //任务推送时间
        this.latestTaskPushDate = '';
        this.custNo = "";
        this.contractNumber = "";
        this.overdueCaseAnalyzeId = "";
        this.isMyOrder = false;
        // 任务ID
        this.taskId = '';
        this.processId = '';
        this.overdueCaseTab = new app_pages_tzb_custom_overdue_overdue_case_base_tab__WEBPACK_IMPORTED_MODULE_8__["OverdueCaseTab"](this.commfunc, this.router);
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_7__["CommonlyMessage"]();
        this.pageStatus = new app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_6__["PageStatusKeeper"](this.commfunc);
        this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_9__["LocalData"](this.commfunc);
        // urlTool: UrlTool = new UrlTool();
        this.dateHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_10__["DateHelper"]();
        this.pageData = new app_pages_tzb_custom_overdue_common_pageData__WEBPACK_IMPORTED_MODULE_11__["PageData"](this.commfunc);
        //基本信息
        this.baseInfo = {
            overdueCaseAnalyzeId: '',
            overdueCaseName: '',
            custNo: '',
            custName: '',
            contractNumber: '',
            productNo: '',
            productName: ''
        };
        // 流水号
        this.mainFlowNo = '';
        this.isErrorOrEmpty = false;
        this.isNewToPage = false;
        this.isRefreshPage = false;
        // 模块化参数
        this.bookmarkList = [];
        console.log("lllll");
        this.localData.clearSessionData();
        // this.codeValues();
        this.pageStatus.generateTimeStamp();
        this.urlParam = window.location.host;
    }
    OverdueCase.prototype.ngOnInit = function () {
        //点击下一步，其他tab页取消置灰
        // this.communicationService.changeTabview.subscribe(data => {
        //     this.index = data.index;
        //     this.bookmarkList.forEach((item, inx) => {
        //         item['disabledFlag'] = false;
        //     })
        // })
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // 接收路由传参
        this.filteTabs();
        this.grapParameters();
        this.pageInit();
        // this.overdueModule();
    };
    OverdueCase.prototype.ngOnChanges = function () {
    };
    OverdueCase.prototype.grapParameters = function () {
        // let parameter = Object.keys(this.route.snapshot.params).length ? this.route.snapshot.params : this.getInitData();
        var parameter = null;
        if (Object.keys(this.route.snapshot.params).length) {
            parameter = this.route.snapshot.params;
        }
        else {
            // 页面刷新
            parameter = this.getInitData();
            this.isRefreshPage = true;
        }
        if (parameter && Object.keys(parameter).length != 0) {
            this.localData.setTemporaryData('overdue-initdata', parameter);
            // 公用
            if (parameter.from == 'reminder-do') {
                // 代办跳过来
                var param = this.localData.getTemporaryData('overdue-params-from-reminder-do');
                this.reminder = param;
                this.taskId = param.taskId;
                this.markFlag = param.markFlag;
                this.processId = param.processId;
                this.mainFlowNo = param.mainFlowNo;
                this.isDetailFlag = param.markFlag && param.markFlag == '2' ? true : false;
                if (param.dataMap) {
                    var t = JSON.parse(param.dataMap);
                    this.dataMap = t;
                    this.overdueCaseAnalyzeId = t.inspectAnalyzeTaskId || t.overdueCaseAnalyzeId;
                }
            }
            else if (parameter.param) {
                // 转化贷款
                var param = JSON.parse(parameter.param);
                this.isDetailFlag = true;
                this.custNo = param.custNo;
                this.contractNumber = param.contractNo;
            }
            else {
                // 查询列表 跳过来
                this.isDetailFlag = parameter.isDetailFlag == 'true' ? true : false;
                this.overdueCaseAnalyzeId = parameter.overdueCaseAnalyzeId;
                this.isMyOrder = true;
            }
            this.isNewToPage = true;
            this.showBaseData();
        }
    };
    OverdueCase.prototype.pageInit = function () {
        // this.operatingLevel = this.code.OperatingLevel;
        this.overdueCaseTab.loadConfig({ isMyOrder: this.isMyOrder });
        this.overdueCaseTab.showTabsRouter();
        this.overdueCaseTab.filteTabs();
    };
    OverdueCase.prototype.getInitData = function () {
        return this.localData.getTemporaryData('overdue-initdata');
    };
    //查询基本信息
    OverdueCase.prototype.showBaseData = function () {
        var _this = this;
        var param = null;
        if (this.overdueCaseAnalyzeId) {
            param = {
                overdueCaseAnalyzeId: this.overdueCaseAnalyzeId,
            };
        }
        else if (this.custNo && this.contractNumber) {
            param = {
                custNo: this.custNo,
                contractNumber: this.contractNumber
                // queryType: "x"                     
            };
        }
        this.httpService.overdueCaseDetail(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                debugger;
                //任务推送时间
                if (data.sysPushDate) {
                    _this.latestTaskPushDate = _this.dateHelper.getDate(data.sysPushDate);
                }
                // 基本信息
                _this.baseInfo['overdueCaseAnalyzeId'] = data.overdueCaseAnalyzeId; //案例编号
                // this.baseInfo['overdueCaseAnalyzeId'] = this.overdueCaseAnalyzeId;
                _this.baseInfo['overdueCaseName'] = data.overdueCaseName; //逾期案例名称
                _this.baseInfo['custNo'] = data.custNo; //客户号
                _this.baseInfo['custName'] = data.custName; //客户名称
                _this.baseInfo['contractNumber'] = data.contractNumber; //合同编号/卡号
                _this.baseInfo['productNo'] = data.productNo; //产品编号
                _this.baseInfo['productName'] = data.productName; //产品名称
                // this.pageData.setData(data);
                // this.pageData.setBaseInfo(this.baseInfo);
                _this.setBaseInfo();
                _this.apply(0, _this.overdueCaseTab.tabsRouterInfo[0]);
                _this.overdueModule();
                // 默认跳转第一个tabs标签页
            }
            else {
                _this.isErrorOrEmpty = true;
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
        }, function (err) {
            _this.isErrorOrEmpty = true;
            _this.commonlyMessage.logicError('调用失败!');
        });
    };
    // tabs标签页切换事件
    OverdueCase.prototype.apply = function (index, item) {
        var param = {
            taskId: this.taskId,
            processId: this.processId,
            baseInfo: JSON.stringify(this.baseInfo)
        };
        this.localData.setTemporaryData("overdue-confidential", {
            isDetailFlag: this.isDetailFlag ? true : false,
            operatingLevel: this.overdueCaseTab.operatingLevel,
            markFlag: this.markFlag,
            mainFlowNo: this.mainFlowNo,
            dataMap: this.dataMap,
            backUrl: this.getBackNumber()
        });
        console.log("param");
        console.log(param);
        // this.overdueCaseTab.showTabs(index, item, param);
    };
    OverdueCase.prototype.getBackNumber = function () {
        var t = this.localData.getOverdueConfidential();
        var number = -2;
        if (this.isNewToPage && !this.isRefreshPage) {
            this.isNewToPage = false;
            this.isRefreshPage = false;
        }
        else {
            number = t.backUrl && !isNaN(t.backUrl) ? parseInt(t.backUrl) : -2;
            number -= 1;
        }
        return number;
    };
    OverdueCase.prototype.setBaseInfo = function () {
        this.localData.setTemporaryData("overdue-baseInfo", this.baseInfo);
    };
    OverdueCase.prototype.ngOnDestroy = function () {
    };
    // 逾期案例模块化
    OverdueCase.prototype.overdueModule = function () {
        var _this = this;
        var overdueData = {
            isModule: '1',
            taskId: this.taskId,
            processId: this.processId,
            baseInfo: JSON.stringify(this.baseInfo),
            allowed: this.operatingLevel
        };
        this.commfunc.setSessionDataCH('overdueData', JSON.stringify(overdueData));
        this.viewId = JSON.parse(this.commfunc.getSessionDataCH('viewId'));
        var viewConfigId = [];
        var viewName = [];
        this.viewId.forEach(function (e) {
            viewConfigId.push(e.a);
            viewName.push(e.b);
        });
        var param = {
            'viewConfigId': viewConfigId,
            'viewName': viewName
        };
        this.creditCcmService.queryAllSourcesForView(param).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                var arr = data.list;
                _this.bookmarkList = [];
                if (_this.commonHeader.extParam.managePermission == 'N') {
                    if (_this.reminder.workType !== 5 && _this.reminder.workType !== 4 && _this.reminder.workType !== 7) {
                        for (var i = 0; i < arr.length; i++) {
                            if (data.list[i].bookmarkId !== '1760004') {
                                _this.bookmarkList.push(data.list[i]);
                            }
                        }
                    }
                    else {
                        _this.bookmarkList = data.list;
                    }
                }
                else {
                    _this.bookmarkList = data.list;
                }
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
                //   this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        });
    };
    // 模块化判断审批人层级
    OverdueCase.prototype.filteTabs = function () {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var isCustomerMan = commonHeader.extParam.managePermission == 'N';
        var logLevel = 0;
        if (isCustomerMan) {
            // 其他
            logLevel = 2;
        }
        else {
            logLevel = this.loginLevel(commonHeader.extParam.operatingLevel);
        }
        this.operatingLevel = logLevel;
        // this.filter(logLevel);
    };
    OverdueCase.prototype.loginLevel = function (type) {
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
    //    判断模块化层级
    // 页签切换事件
    OverdueCase.prototype.handleChange = function (event) {
        this.index = event.index;
        // if (!this.transferCreditBean.isPreview) {
        //   if ((this.bookmarkList[0].bookmarkName == '转化方案' && event.index == 0) || !(this.tabelChangeArr.length > 0 && this.tabelChangeArr.indexOf(event.index) > -1)) {
        //     this.triggerChildComponentsQuery(this.bookmarkList[event.index], this.tabFlag);
        //     this.tabelChangeArr.push(event.index);
        //   }
        // }
    };
    OverdueCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "overdue-case",
            template: __webpack_require__(/*! ./overdue-case.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.html"),
            styles: [__webpack_require__(/*! ./overdue-case.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _custom_credit_ccm_common_service_parent_child_comm_service__WEBPACK_IMPORTED_MODULE_13__["ParentChildCommunicationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_5__["OverdueHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_12__["CreditCcmService"],
            _custom_credit_ccm_common_service_parent_child_comm_service__WEBPACK_IMPORTED_MODULE_13__["ParentChildCommunicationService"]])
    ], OverdueCase);
    return OverdueCase;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.module.ts ***!
  \******************************************************************************/
/*! exports provided: OverdueCaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueCaseModule", function() { return OverdueCaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var _credit_ifo_credit_ifo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credit-ifo/credit-ifo.module */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.module.ts");
/* harmony import */ var _overdue_reasons_overdue_reasons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overdue-reasons/overdue-reasons.module */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/overdue-reasons.module.ts");
/* harmony import */ var _branch_approval_branch_approval_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch-approval/branch-approval.module */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/branch-approval.module.ts");
/* harmony import */ var _branch_examination_approval_branch_examination_approval_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branch-examination-approval/branch-examination-approval.module */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/branch-examination-approval.module.ts");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _overdue_case_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overdue-case.routing */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.routing.ts");
/* harmony import */ var _overdue_case_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overdue-case.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.ts");
/* harmony import */ var _credit_ifo_credit_ifo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./credit-ifo/credit-ifo.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.component.ts");
/* harmony import */ var _overdue_reasons_overdue_reasons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overdue-reasons/overdue-reasons.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/overdue-reasons.component.ts");
/* harmony import */ var _topological_graph_topological_graph_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topological-graph/topological-graph.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/topological-graph/topological-graph.component.ts");
/* harmony import */ var _branch_approval_branch_approval_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./branch-approval/branch-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/branch-approval.component.ts");
/* harmony import */ var _branch_examination_approval_branch_examination_approval_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./branch-examination-approval/branch-examination-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/branch-examination-approval.component.ts");
/* harmony import */ var _genenal_approval_genenal_approval_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./genenal-approval/genenal-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/genenal-approval/genenal-approval.component.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_approve_history_approve_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/approve-history/approve-history.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service */ "./src/app/pages/tzb/custom/credit-ccm/transformation-plan/http/transformation-plan.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var app_uisftech_view_graph_graph_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/@uisftech/view/graph/graph.module */ "./src/app/@uisftech/view/graph/graph.module.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_credit_container_resource_container_resource_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/credit-container-resource/container-resource.component.module */ "./src/app/pages/tzb/custom/credit-ccm/credit-container-resource/container-resource.component.module.ts");
/* harmony import */ var _credit_approve_history_credit_approve_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./credit-approve-history/credit-approve-history.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-approve-history/credit-approve-history.component.ts");
/* harmony import */ var _credit_approve_opinion_credit_approve_opinion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./credit-approve-opinion/credit-approve-opinion.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-approve-opinion/credit-approve-opinion.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_28__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件


// module模块
 // 1. 授信信息module
 // 2. 逾期原因分析module
 // 3. 支行层级审批意见module
 // 4. 分行层级审批意见module
//页面



 //逾期案例首页
 // 1.逾期案例分析
 //2.逾期原因分析
 //3.拓扑关系图
 //4.支行层级审批意见
 //5.分行层级审批意见
 //6.总行层级审批意见










// import { } "./../../../../../../app/"
// import { ContainerResourceComponent } from 'app/pages/tzb/custom/credit-ccm/credit-container-resource/container-resource.component';
// import { ContainerResourceService } from 'app/pages/tzb/custom/credit-ccm/credit-container-resource/container-resource.service';
// import { ContainerResourceDirective } from 'app/pages/tzb/custom/credit-ccm/credit-container-resource/container-resource.directive';
// import { CreditCcmModule } from "app/pages/tzb/custom/credit-ccm/credit-ccm.module"

var OverdueCaseModule = /** @class */ (function () {
    function OverdueCaseModule() {
    }
    OverdueCaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__["FrameworkModule"],
                _overdue_case_routing__WEBPACK_IMPORTED_MODULE_10__["OverdueCaseRouting"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _credit_ifo_credit_ifo_module__WEBPACK_IMPORTED_MODULE_4__["CreditIfoModule"],
                _overdue_reasons_overdue_reasons_module__WEBPACK_IMPORTED_MODULE_5__["OverdueReasonsModule"],
                _branch_approval_branch_approval_module__WEBPACK_IMPORTED_MODULE_6__["BranchApprovalModule"],
                _branch_examination_approval_branch_examination_approval_module__WEBPACK_IMPORTED_MODULE_7__["BranchExaminationApprovalModule"],
                app_uisftech_view_graph_graph_module__WEBPACK_IMPORTED_MODULE_24__["GraphModule"],
                app_pages_tzb_custom_credit_ccm_credit_container_resource_container_resource_component_module__WEBPACK_IMPORTED_MODULE_25__["ContainerResourceModule"],
                app_pages_tzb_custom_credit_ccm_credit_container_resource_container_resource_component_module__WEBPACK_IMPORTED_MODULE_25__["ContainerResourceModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_28__["BlockUIModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_28__["MultiSelectModule"],
            ],
            declarations: [
                _overdue_case_component__WEBPACK_IMPORTED_MODULE_11__["OverdueCase"],
                _credit_ifo_credit_ifo_component__WEBPACK_IMPORTED_MODULE_12__["CreditIfo"],
                _overdue_reasons_overdue_reasons_component__WEBPACK_IMPORTED_MODULE_13__["OverdueReasons"],
                _branch_approval_branch_approval_component__WEBPACK_IMPORTED_MODULE_15__["BranchApproval"],
                _credit_approve_opinion_credit_approve_opinion_component__WEBPACK_IMPORTED_MODULE_27__["CreditApproveOpinion"],
                _credit_approve_history_credit_approve_history_component__WEBPACK_IMPORTED_MODULE_26__["CreditApproveHistory"],
                _branch_examination_approval_branch_examination_approval_component__WEBPACK_IMPORTED_MODULE_16__["BranchExaminationApproval"],
                _genenal_approval_genenal_approval_component__WEBPACK_IMPORTED_MODULE_17__["GenenalApproval"],
                _topological_graph_topological_graph_component__WEBPACK_IMPORTED_MODULE_14__["TopologicalGraph"],
                app_pages_tzb_custom_overdue_overdue_case_approve_history_approve_history_component__WEBPACK_IMPORTED_MODULE_18__["ApproveHistoryComponent"],
            ],
            entryComponents: [
                _credit_ifo_credit_ifo_component__WEBPACK_IMPORTED_MODULE_12__["CreditIfo"],
                _overdue_reasons_overdue_reasons_component__WEBPACK_IMPORTED_MODULE_13__["OverdueReasons"],
                _topological_graph_topological_graph_component__WEBPACK_IMPORTED_MODULE_14__["TopologicalGraph"],
                _branch_approval_branch_approval_component__WEBPACK_IMPORTED_MODULE_15__["BranchApproval"],
                _credit_approve_opinion_credit_approve_opinion_component__WEBPACK_IMPORTED_MODULE_27__["CreditApproveOpinion"],
                _branch_examination_approval_branch_examination_approval_component__WEBPACK_IMPORTED_MODULE_16__["BranchExaminationApproval"],
                _genenal_approval_genenal_approval_component__WEBPACK_IMPORTED_MODULE_17__["GenenalApproval"],
                _credit_approve_history_credit_approve_history_component__WEBPACK_IMPORTED_MODULE_26__["CreditApproveHistory"]
            ],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_8__["AuthorityService"],
                _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_3__["OverdueHttpService"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_28__["ConfirmationService"],
                app_pages_tzb_custom_credit_ccm_transformation_plan_http_transformation_plan_http_service__WEBPACK_IMPORTED_MODULE_19__["TransformationPlanHttpService"],
                app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_20__["CreditCcmService"],
                app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_21__["ProcessInstanceManagementService"],
                app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_22__["HttpService"],
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_23__["MessageService"],
            ],
            exports: [
                app_pages_tzb_custom_overdue_overdue_case_approve_history_approve_history_component__WEBPACK_IMPORTED_MODULE_18__["ApproveHistoryComponent"]
            ]
        })
    ], OverdueCaseModule);
    return OverdueCaseModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: OverdueCaseRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueCaseRouting", function() { return OverdueCaseRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overdue_case_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overdue-case.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-case.component.ts");
/* harmony import */ var _credit_ifo_credit_ifo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-ifo/credit-ifo.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-ifo/credit-ifo.component.ts");
/* harmony import */ var _overdue_reasons_overdue_reasons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overdue-reasons/overdue-reasons.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/overdue-reasons.component.ts");
/* harmony import */ var _topological_graph_topological_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topological-graph/topological-graph.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/topological-graph/topological-graph.component.ts");
/* harmony import */ var _branch_approval_branch_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch-approval/branch-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-approval/branch-approval.component.ts");
/* harmony import */ var _branch_examination_approval_branch_examination_approval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch-examination-approval/branch-examination-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/branch-examination-approval/branch-examination-approval.component.ts");
/* harmony import */ var _genenal_approval_genenal_approval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./genenal-approval/genenal-approval.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/genenal-approval/genenal-approval.component.ts");
/* harmony import */ var _credit_approve_history_credit_approve_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credit-approve-history/credit-approve-history.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-approve-history/credit-approve-history.component.ts");
/* harmony import */ var _credit_approve_opinion_credit_approve_opinion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./credit-approve-opinion/credit-approve-opinion.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/credit-approve-opinion/credit-approve-opinion.component.ts");


 // 1.逾期案例分析
 //2.逾期原因分析
 //3.拓扑关系图
 //4.支行层级审批意见
 //5.分行层级审批意见
 //6.总行层级审批意见


var routes = [
    {
        path: '',
        component: _overdue_case_component__WEBPACK_IMPORTED_MODULE_1__["OverdueCase"],
        children: [
            // {path: '', redirectTo: 'credit-ifo', pathMatch: 'full' },
            { path: 'credit-ifo', component: _credit_ifo_credit_ifo_component__WEBPACK_IMPORTED_MODULE_2__["CreditIfo"] },
            { path: 'overdue-reasons', component: _overdue_reasons_overdue_reasons_component__WEBPACK_IMPORTED_MODULE_3__["OverdueReasons"] },
            { path: 'topological-graph', component: _topological_graph_topological_graph_component__WEBPACK_IMPORTED_MODULE_4__["TopologicalGraph"] },
            { path: 'branch-approval', component: _branch_approval_branch_approval_component__WEBPACK_IMPORTED_MODULE_5__["BranchApproval"] },
            { path: 'history', component: _credit_approve_history_credit_approve_history_component__WEBPACK_IMPORTED_MODULE_8__["CreditApproveHistory"] },
            { path: 'approve', component: _credit_approve_opinion_credit_approve_opinion_component__WEBPACK_IMPORTED_MODULE_9__["CreditApproveOpinion"] },
            { path: 'branch-examination-approval', component: _branch_examination_approval_branch_examination_approval_component__WEBPACK_IMPORTED_MODULE_6__["BranchExaminationApproval"] },
            { path: 'genenal-approval', component: _genenal_approval_genenal_approval_component__WEBPACK_IMPORTED_MODULE_7__["GenenalApproval"] },
        ]
    }
];
var OverdueCaseRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 3.担保人情况分析 -->\r\n<div class=\"ui-g-12 part3\">\r\n    <div class=\"ui-g-12 part3_title\">担保人情况分析（万元）</div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"bondsmanCondition\" [scrollable]=\"true\">\r\n            <p-column header=\"担保人客户号\" field=\"releCustId\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.releCustId'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"担保名称\" field=\"releCustName\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <!--releCustName custName-->\r\n                    <input pInputText disabled [(ngModel)]='item.releCustName'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"本行欠贷金额\" field=\"myBankLoanAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.myBankLoanAmt'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"本行担保余额\" field=\"myBankEnsureAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.myBankEnsureAmt'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"他行欠贷余额\" field=\"otherBankLoanAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input (keyup)=\"inputCall($event, i+'.otherBankLoanAmt')\" [ngClass]=\"{'ipt-vali-alert': item.otherBankLoanAmt==''}\" placeholder=\"此项必填\"  pInputText [disabled]='isDetailFlag' [(ngModel)]='item.otherBankLoanAmt'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"他行担保余额\" field=\"otherBankEnsureAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input (keyup)=\"inputCall($event, i+'.otherBankEnsureAmt')\" [ngClass]=\"{'ipt-vali-alert': item.otherBankEnsureAmt==''}\" placeholder=\"此项必填\"  pInputText [disabled]='isDetailFlag' [(ngModel)]='item.otherBankEnsureAmt'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"有无代偿能力\" field=\"insteadPayAbility\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown (onChange)=\"bondsmanChange($event)\" placeholder=\"请选择\" [disabled]='isDetailFlag'  [options]=\"insteadPayAbility\" [(ngModel)]=\"item.insteadPayAbility\"></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"有无代偿意愿\" field=\"insteadPayWill\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown (onChange)=\"bondsmanChange($event)\" placeholder=\"请选择\" [disabled]='isDetailFlag' [options]=\"insteadPayWill\" [(ngModel)]=\"item.insteadPayWill\"></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 历史查看 历史单独展示-->\r\n    <!-- <div class=\"ui-g-12\" *ngIf=\"historyOptions && historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"historyOptions\" (onChange)=\"historyOptionsChange($event)\" [(ngModel)]=\"currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n    </div> -->\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10  (onHide)=\"popupClosed()\">\r\n    <p-header>\r\n        担保人情况分析\r\n    </p-header>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"currentHistoryBondsmanCondition\" [scrollable]=\"true\">\r\n            <p-column header=\"担保人客户号\" field=\"releCustId\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.releCustId' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"担保名称\" field=\"releCustName\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.releCustName' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"本行欠贷金额（元）\" field=\"myBankLoanAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.myBankLoanAmt' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"本行担保余额（元）\" field=\"myBankEnsureAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText disabled [(ngModel)]='item.myBankEnsureAmt' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"他行欠贷余额（元）\" field=\"otherBankLoanAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText [(ngModel)]='item.otherBankLoanAmt' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"他行担保余额（元）\" field=\"otherBankEnsureAmt\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <input pInputText [(ngModel)]='item.otherBankEnsureAmt' [disabled]='true'>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"有无代偿能力\" field=\"insteadPayAbility\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown placeholder=\"请选择\"  [options]=\"insteadPayAbility\" [(ngModel)]=\"item.insteadPayAbility\" [disabled]='true'></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"有无代偿意愿\" field=\"insteadPayWill\">\r\n                <ng-template let-i=\"rowIndex\" let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown placeholder=\"请选择\" [options]=\"insteadPayWill\" [(ngModel)]=\"item.insteadPayWill\" [disabled]='true'></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part3 {\n  margin-top: 5px;\n  background: #fff; }\n  .part3 .part3_title {\n    font-size: 15px; }\n  .part3 .table {\n    text-align: center; }\n  :host /deep/ .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host /deep/ table {\n  text-align: center; }\n  :host /deep/ input {\n  min-width: auto; }\n  :host /deep/ .ui-g-1, .ui-g-2, .ui-g-3, .ui-g-4, .ui-g-5, .ui-g-6, .ui-g-7, .ui-g-8, .ui-g-9, .ui-g-10, .ui-g-11 {\n  padding: 0 0.5em; }\n  :host /deep/ .ui-datatable-scrollable-body {\n  overflow: visible; }\n  .pull-right {\n  float: right; }\n  .ipt-vali-alert {\n  border: 1px solid red; }\n  .ipt-vali-alert::-webkit-input-placeholder {\n  color: red; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9vdmVyZHVlLXJlYXNvbnMvYm9uZHNtYW4tYW5hbHlzaXMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxvdmVyZHVlXFxvdmVyZHVlLWNhc2VcXG92ZXJkdWUtcmVhc29uc1xcYm9uZHNtYW4tYW5hbHlzaXNcXGJvbmRzbWFuLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1Esa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNJLGtCQUNKLEVBQUE7RUFFQTtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGdCQUFlLEVBQUE7RUFFbkI7RUFDSyxpQkFBaUIsRUFBQTtFQUd0QjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFvQixFQUFBO0VBRXhCO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9vdmVyZHVlLXJlYXNvbnMvYm9uZHNtYW4tYW5hbHlzaXMvYm9uZHNtYW4tYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydDN7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnBhcnQzX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7IC8vIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIGlucHV0IHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC51aS1nLTEsIC51aS1nLTIsIC51aS1nLTMsIC51aS1nLTQsIC51aS1nLTUsIC51aS1nLTYsIC51aS1nLTcsIC51aS1nLTgsIC51aS1nLTksIC51aS1nLTEwLCAudWktZy0xMXtcclxuICAgIHBhZGRpbmc6MCAwLjVlbTtcclxufVxyXG46aG9zdCAvZGVlcC8gLnVpLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHkge1xyXG4gICAgIG92ZXJmbG93OiB2aXNpYmxlOyBcclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaXB0LXZhbGktYWxlcnQge1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbn1cclxuLmlwdC12YWxpLWFsZXJ0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5oaXN0b3J5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: BondsmanAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BondsmanAnalysis", function() { return BondsmanAnalysis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var _bean_overdue_reasons_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../bean/overdue-reasons.bean */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bean/overdue-reasons.bean.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_bondsman_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/formValidate */ "./src/app/pages/tzb/custom/overdue/common/formValidate.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// 3.担保人情况分析
var BondsmanAnalysis = /** @class */ (function () {
    function BondsmanAnalysis(commfunc, router, confirmationService, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.overdueReasonsBean = new _bean_overdue_reasons_bean__WEBPACK_IMPORTED_MODULE_5__["OverdueReasonsBean"]();
        // 担保人情况分析列表
        this.bondsmanConditionList = [];
        this.bondsmanCondition = [];
        this.historyBondsmanConditionList = [];
        this.hasHistory = false;
        this.currentHistoryBondsmanCondition = []; // 当前历史
        // 下拉框
        this.insteadPayAbility = []; //有无代偿能力
        this.insteadPayWill = []; //有无代偿意愿
        // 模态框
        this.display = false;
        this.historyTextInfo = []; //历史展示信息
        this.historyOptions = []; //接收历史列表 
        this.currentLevel = '';
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_bondsman_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_6__["BondsmanAnalysisPageCache"](this.commfunc);
        this.toolBag = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_7__["ObjectHelper"]();
        this.formValidate = new app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_8__["MyFormValidate"]();
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_9__["CommonlyMessage"]();
        this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_10__["LocalData"](this.commfunc);
        this.markFlag = '';
        this.codeValues(); //调用方法，获取全部码值
        // 下拉框
        this.insteadPayAbility = this.code['insteadPayAbility']; //有无代偿能力
        this.insteadPayWill = this.code['insteadPayWill']; //有无代偿意愿
    }
    BondsmanAnalysis.prototype.ngOnInit = function () {
        this.getTableList();
        this.getConfidential();
    };
    BondsmanAnalysis.prototype.ngOnChanges = function () {
        this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
        // 接收父页面传过来的参数
        if (this.inValue.length > 0) {
            this.bondsmanConditionList = this.inValue;
            var obj = [];
            obj = this.historyControl();
            this.bondsmanCondition = obj;
        }
    };
    // 提交数据到父页面(只提交逾期后的数据)
    BondsmanAnalysis.prototype.ngAfterContentChecked = function () {
        //逾期后的数据
        this.outValue.emit(this.bondsmanCondition);
    };
    //获取客户欠贷/担保余额查询回显数据
    BondsmanAnalysis.prototype.getTableList = function () {
        var _this = this;
        this.bondsmanConditionList.forEach(function (element, index) {
            var param = {
                // overdueCaseName: "",         //逾期案例名称
                custNo: element.releCustId //客户号(必输)
            };
            _this.httpService.overdueCustLoanAmtQuery(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    element["myBankLoanAmt"] = data.myBankLoanAmt; //本行欠贷余额
                    element["myBankEnsureAmt"] = data.myBankEnsureAmt; //本行担保余额
                }
                else {
                    _this.commonlyMessage.logicError(data.returnCode.message);
                }
            }, function (err) {
                _this.commonlyMessage.logicError('调用失败!');
            });
        });
    };
    BondsmanAnalysis.prototype.popupClosed = function () {
        this.currentLevel = '';
    };
    BondsmanAnalysis.prototype.historyOptionsChange = function (event) {
        this.display = true;
        this.currentLevel = event.value;
        this.currentHistoryBondsmanCondition = this.findCurrentHistory(event.value);
    };
    BondsmanAnalysis.prototype.findCurrentHistory = function (historyProcess) {
        var ret = [];
        this.historyBondsmanConditionList.forEach(function (list) {
            if (list[0].historyProcess == historyProcess) {
                ret = list.slice(0);
            }
        });
        return ret;
    };
    BondsmanAnalysis.prototype.historyControl = function () {
        var ret = [];
        if (this.bondsmanConditionList) {
            if (this.bondsmanConditionList.length == 1) {
                //this.bondsmanCondition = this.bondsmanConditionList[0];
                ret = this.bondsmanConditionList[0];
            }
            else if (this.bondsmanConditionList.length > 1) {
                this.hasHistory = true;
                var array = this.uniqueHistoryProcess();
                this.historyOptions = this.combineHistoryOptions(array);
                ret = this.assignBondsmanCondition();
            }
        }
        return ret;
    };
    BondsmanAnalysis.prototype.assignBondsmanCondition = function () {
        var _this = this;
        var ret = [];
        var array = this.sortByDesc(this.uniqueHistoryProcess());
        var currentHistoryProcess = array[0].historyProcess;
        var source = this.bondsmanConditionList;
        source.forEach(function (list) {
            var historyProcess = list[0].historyProcess;
            if (historyProcess == currentHistoryProcess) {
                //this.bondsmanCondition = list.slice(0);
                ret = list.slice(0);
            }
            else {
                _this.historyBondsmanConditionList.push(list);
            }
        });
        return ret;
    };
    BondsmanAnalysis.prototype.combineHistoryOptions = function (array) {
        var ret = [];
        for (var i = 1, len = array.length; i < len; i++) {
            var item = array[i];
            var obj = { label: '', value: '' };
            switch (item.historyProcess) {
                case '1':
                    obj.label = '客户经理';
                    obj.value = '1';
                    ret.push(obj);
                    break;
                case '2':
                    obj.label = '支行层级';
                    obj.value = '2';
                    ret.push(obj);
                    break;
                case '3':
                    obj.label = '分行层级';
                    obj.value = '3';
                    ret.push(obj);
                    break;
                case '4':
                    obj.label = '总行层级';
                    obj.value = '4';
                    ret.push(obj);
                    break;
            }
        }
        return ret;
    };
    BondsmanAnalysis.prototype.uniqueHistoryProcess = function () {
        var array = this.bondsmanConditionList;
        var ret = [];
        array.forEach(function (list) {
            var historyProcess = list[0].historyProcess;
            if (ret.indexOf(historyProcess) == -1) {
                ret.push({ historyProcess: historyProcess });
            }
        });
        return ret;
    };
    BondsmanAnalysis.prototype.sortByDesc = function (list) {
        return list.sort(function (A, B) { return B.historyProcess - A.historyProcess; });
    };
    // 将数据传递到外部
    BondsmanAnalysis.prototype.inputCall = function (event, targets) {
        var ts = targets.split('.');
        this.bondsmanCondition[ts[0]][ts[1]] = this.formValidate.onlyNumber(this.bondsmanCondition[ts[0]][ts[1]]);
        this.setBondsmanCondition();
    };
    BondsmanAnalysis.prototype.bondsmanChange = function (event) {
        this.setBondsmanCondition();
    };
    BondsmanAnalysis.prototype.setBondsmanCondition = function () {
        this.statusKeeper.setBondsmanCondition(this.bondsmanCondition);
    };
    //码值
    BondsmanAnalysis.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    BondsmanAnalysis.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BondsmanAnalysis.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BondsmanAnalysis.prototype, "isDetailFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BondsmanAnalysis.prototype, "outValue", void 0);
    BondsmanAnalysis = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "bondsman-analysis",
            template: __webpack_require__(/*! ./bondsman-analysis.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.html"),
            styles: [__webpack_require__(/*! ./bondsman-analysis.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"]])
    ], BondsmanAnalysis);
    return BondsmanAnalysis;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/common/pageCache.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/common/pageCache.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BondsmanAnalysisPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BondsmanAnalysisPageCache", function() { return BondsmanAnalysisPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BondsmanAnalysisPageCache = /** @class */ (function (_super) {
    __extends(BondsmanAnalysisPageCache, _super);
    function BondsmanAnalysisPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    // 逾期原因 
    // 贷款实际用途
    BondsmanAnalysisPageCache.prototype.setBondsmanCondition = function (bondsmanCondition) {
        var list = [];
        this.toolBag.copyObjectListWithSkipping(list, bondsmanCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-bondsmanCondition", JSON.stringify({
            bondsmanCondition: list,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    BondsmanAnalysisPageCache.prototype.getBondsmanCondition = function () {
        return this.getTemporaryData("overdue-bondsmanCondition");
    };
    BondsmanAnalysisPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getBondsmanCondition() ? this.getBondsmanCondition().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return BondsmanAnalysisPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/common/pageCache.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/common/pageCache.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LoanTablePageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanTablePageCache", function() { return LoanTablePageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoanTablePageCache = /** @class */ (function (_super) {
    __extends(LoanTablePageCache, _super);
    function LoanTablePageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    // 逾期原因 part1
    LoanTablePageCache.prototype.setOverdueFinancialCondition = function (overdueFinancialCondition) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, overdueFinancialCondition, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-overdueFinancialCondition", JSON.stringify({
            overdueFinancialCondition: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    LoanTablePageCache.prototype.getOverdueFinancialCondition = function () {
        return this.getTemporaryData("overdue-overdueFinancialCondition");
    };
    LoanTablePageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getOverdueFinancialCondition() ? this.getOverdueFinancialCondition().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    return LoanTablePageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 1.逾期原因分析 -->\r\n<div class=\"ui-g-12 part1\">\r\n    <div class=\"ui-g-12 part1_title\"><span style=\"color:red;\">*</span>财务状况(万元)</div>\r\n    <!-- 为了同行展示需要添加固定宽度 fixedWidth -->\r\n    <div class=\"ui-g-12 fixedWidth\">\r\n        <!-- 左边表格 -->\r\n        <div class=\"ui-g-4 left_table\">\r\n            <ul class=\"left_table_header\">\r\n                <li>数据时点</li>\r\n                <li>银行借款</li>\r\n                <li>社会集资</li>\r\n                <li>应付账款</li>\r\n                <li>其它负债</li>\r\n                <li>负债小计</li>\r\n            </ul>\r\n            <ul class=\"list_part\" *ngIf=\"managePermission == 'Y'\">\r\n                <li class=\"color\">贷前调查时</li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.bankBorrowerAmt\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.societyRaisingAmt\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.accountsPayable\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.debts1\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.debtsTotal\">\r\n                </li>\r\n            </ul>\r\n            <ul class=\"list_part\">\r\n                <li class=\"color\">贷款逾期后</li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.bankBorrowerAmt', 1);\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.bankBorrowerAmt.toString()==''}\" placeholder=\"此项必填\"  pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.bankBorrowerAmt\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.societyRaisingAmt', 1);\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.societyRaisingAmt.toString()==''}\" placeholder=\"此项必填\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.societyRaisingAmt\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.accountsPayable', 1);\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.accountsPayable.toString()==''}\" placeholder=\"此项必填\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.accountsPayable\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.debts1', 1)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.debts1.toString()==''}\" placeholder=\"此项必填\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.debts1\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.debtsTotal', 1)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.debtsTotal.toString()==''}\" placeholder=\"此项必填\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.debtsTotal\">\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- 右边表格 -->\r\n        <div class=\"ui-g-6 right_table\">\r\n            <ul class=\"left_table_header\">\r\n                <li class=\"color\">数据时点</li>\r\n                <li class=\"color\">应收账款</li>\r\n                <li class=\"color\">存货</li>\r\n                <li class=\"color\">固定资产</li>\r\n                <li class=\"color\">对外投资</li>\r\n                <li class=\"color\">现金及银行存款</li>\r\n                <li class=\"color\">其他资产</li>\r\n                <li class=\"color\">资产小计</li>\r\n                <!-- <li class=\"color\">权益</li> -->\r\n            </ul>\r\n            <ul class=\"list_part\" *ngIf=\"managePermission == 'Y'\">\r\n                <li class=\"color\">贷前调查时</li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.receivables\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.stocks\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.fixedAssets\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.investmentsAbroad\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.property1\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.property2\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.propertyTotal\">\r\n                </li>\r\n                <!-- <li>\r\n                    <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.rightAndInterests\">\r\n                </li> -->\r\n            </ul>\r\n            <ul class=\"list_part\">\r\n                <li class=\"color\">贷款逾期后</li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.receivables\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.receivables', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.receivables.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.stocks\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.stocks', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.stocks.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.fixedAssets\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.fixedAssets', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.fixedAssets.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.investmentsAbroad\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.investmentsAbroad', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.investmentsAbroad.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.property1\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.property1', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.property1.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.property2\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.property2', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.property2.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.propertyTotal\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.propertyTotal', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.propertyTotal.toString()==''}\" placeholder=\"此项必填\">\r\n                </li>\r\n                <!-- <li>\r\n                    <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.rightAndInterests\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.rightAndInterests', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.rightAndInterests.toString()==''}\" placeholder=\"此项必填\">\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n        <div class=\"ui-g-1 right_table\">\r\n                <ul class=\"left_table_header\">\r\n                    <li class=\"color\" style=\"width: 100%;\">权益</li>\r\n                </ul>\r\n                <ul class=\"list_part\" *ngIf=\"managePermission == 'Y'\">\r\n                    <li style=\"width: 100%;\">\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"preLoanFinancialCondition.rightAndInterests\">\r\n                    </li>\r\n                </ul>\r\n                <ul class=\"list_part\">\r\n                    <li style=\"width: 100%;\">\r\n                        <input style=\"min-width:60px;\" pInputText [disabled]='isDetailFlag' [(ngModel)]=\"overdueFinancialCondition.rightAndInterests\" (keyup)=\"inputCall($event, 'overdueFinancialCondition.rightAndInterests', 2)\" [ngClass]=\"{'ipt-vali-alert': overdueFinancialCondition.rightAndInterests.toString()==''}\" placeholder=\"此项必填\">\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n    </div>\r\n    <!-- 历史查看 历史单独展示-->\r\n    <div class=\"ui-g-12\" *ngIf=\"history.historyOptions && history.historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"change($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"history.historyOptions\" (onChange)=\"change($event)\" [(ngModel)]=\"history.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"history.display\" [(visible)]=\"history.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"history.popupClosed()\">\r\n    <p-header>\r\n        逾期后财务状况\r\n    </p-header>\r\n    <div class=\"ui-g-12 part1\">\r\n        <div class=\"ui-g-12 part1_title\">财务状况(万元)</div>\r\n        <div class=\"ui-g-12\">\r\n            <!-- 左边表格 -->\r\n            <div class=\"ui-g-12 left_table\">\r\n                <ul class=\"left_table_header\">\r\n                    <li>数据时点</li>\r\n                    <li>银行借款</li>\r\n                    <li>社会集资</li>\r\n                    <li>应付账款</li>\r\n                    <li>其它负债</li>\r\n                    <li>负债小计</li>\r\n                </ul>\r\n                <ul class=\"list_part\">\r\n                    <li class=\"color\">贷款逾期后</li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.bankBorrowerAmt\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.societyRaisingAmt\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.accountsPayable\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.debts1\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.debtsTotal\" [disabled]='true'>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <!-- 右边表格 -->\r\n            <div class=\"ui-g-12 right_table\">\r\n                <ul class=\"left_table_header\">\r\n                    <li class=\"color\">数据时点</li>\r\n                    <li class=\"color\">应收账款</li>\r\n                    <li class=\"color\">存货</li>\r\n                    <li class=\"color\">固定资产</li>\r\n                    <li class=\"color\">对外投资</li>\r\n                    <li class=\"color\">现金及银行存款</li>\r\n                    <li class=\"color\">其他资产</li>\r\n                    <li class=\"color\">资产小计</li>\r\n                </ul>\r\n                <ul class=\"list_part\">\r\n                    <li class=\"color\">贷款逾期后</li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.receivables\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.stocks\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.fixedAssets\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.investmentsAbroad\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.property1\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.property2\" [disabled]='true'>\r\n                    </li>\r\n                    <li>\r\n                        <input style=\"min-width:60px;\" disabled pInputText [(ngModel)]=\"history.currentHistory.propertyTotal\" [disabled]='true'>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"right_table\" style=\"width:13.1%;float:right;\">\r\n                <div style=\"float:right;\">\r\n                    <ul class=\"left_table_header\">\r\n                        <li class=\"color\" style=\"width: 100%;\">权益</li>\r\n                    </ul>\r\n                    <ul class=\"list_part\">\r\n                        <li style=\"width: 100%;\">\r\n                            <input style=\"min-width:60px;\" pInputText disabled [(ngModel)]=\"history.currentHistory.rightAndInterests\">\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl ></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part1 {\n  background: #fff;\n  font-size: 15px; }\n  .part1 .part1_title {\n    font-size: 15px;\n    letter-spacing: 1px; }\n  .part1 .left_table .left_table_header, .part1 .right_table .left_table_header {\n    background: #d2f1ef; }\n  .part1 .left_table .list_part .color, .part1 .right_table .list_part .color {\n    background: #d2f1ef;\n    border-top: 1px solid #fff; }\n  .part1 .left_table .list_part:nth-child(odd), .part1 .right_table .list_part:nth-child(odd) {\n    background: #ebebeb; }\n  .part1 .left_table .list_part:nth-child(even), .part1 .right_table .list_part:nth-child(even) {\n    background: #fafafa; }\n  .part1 .left_table ul, .part1 .right_table ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    height: 50px;\n    line-height: 50px; }\n  .part1 .left_table ul li, .part1 .right_table ul li {\n      list-style-type: none;\n      width: 20%;\n      text-align: center;\n      padding: 0px 5px; }\n  .part1 .left_table .right_table_two, .part1 .right_table .right_table_two {\n    height: 63px;\n    line-height: 23px;\n    /* padding-bottom: 35px; */\n    padding-top: 10px; }\n  .part1 .right_table li {\n    width: 16.66%; }\n  .fixedWidth {\n  width: 2000px; }\n  .right_table_two {\n  height: 63px;\n  line-height: 23px;\n  /* padding-bottom: 35px; */\n  padding-top: 10px !important; }\n  :host /deep/ .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host /deep/ table {\n  text-align: center; }\n  :host /deep/ input {\n  min-width: auto; }\n  :host /deep/ .ui-g-1, .ui-g-2, .ui-g-3, .ui-g-4, .ui-g-5, .ui-g-6, .ui-g-7, .ui-g-8, .ui-g-9, .ui-g-10, .ui-g-11 {\n  padding: 0 0.5em; }\n  .pull-right {\n  float: right; }\n  .ipt-vali-alert {\n  border: 1px solid red; }\n  .ipt-vali-alert::-webkit-input-placeholder {\n  color: red; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 5px; }\n  .gray {\n  background: #ebebeb; }\n  .input_hack_ie8 {\n  min-width: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9vdmVyZHVlLXJlYXNvbnMvbG9hbnRhYmxlLWFuYWx5c2lzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxvdmVyZHVlLXJlYXNvbnNcXGxvYW50YWJsZS1hbmFseXNpc1xcbG9hbnRhYmxlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUZuQjtJQUlRLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUwzQjtJQVVZLG1CQUFtQixFQUFBO0VBVi9CO0lBY2dCLG1CQUFtQjtJQUNuQiwwQkFBMEIsRUFBQTtFQWYxQztJQW1CWSxtQkFBbUIsRUFBQTtFQW5CL0I7SUFzQlksbUJBQW1CLEVBQUE7RUF0Qi9CO0lBeUJZLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUVWLFlBQVk7SUFFWixpQkFBaUIsRUFBQTtFQS9CN0I7TUFpQ2dCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0VBcENoQztJQXdDWSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUFBO0lBQ0EsaUJBQWlCLEVBQUE7RUEzQzdCO0lBZ0RZLGFBQWEsRUFBQTtFQUl6QjtFQUNJLGFBQWEsRUFBQTtFQUVqQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQUE7RUFDQSw0QkFBNEIsRUFBQTtFQUVoQztFQUNJLFdBQVcsRUFBQTtFQUdmO0VBQ0ksa0JBQ0osRUFBQTtFQUVBO0VBQ0ksZUFBZSxFQUFBO0VBR25CO0VBQ0ksZ0JBQWUsRUFBQTtFQUduQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFvQixFQUFBO0VBRXhCO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vb3ZlcmR1ZS9vdmVyZHVlLWNhc2Uvb3ZlcmR1ZS1yZWFzb25zL2xvYW50YWJsZS1hbmFseXNpcy9sb2FudGFibGUtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydDF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLnBhcnQxX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4OyBcclxuICAgIH1cclxuICAgIC8v6KGo5qC8XHJcbiAgICAubGVmdF90YWJsZSwucmlnaHRfdGFibGV7XHJcbiAgICAgICAgLmxlZnRfdGFibGVfaGVhZGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDJmMWVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdF9wYXJ0e1xyXG4gICAgICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZjFlZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0X3BhcnQ6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0X3BhcnQ6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDYzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodF90YWJsZV90d297XHJcbiAgICAgICAgICAgIGhlaWdodDogNjNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIC8qIHBhZGRpbmctYm90dG9tOiAzNXB4OyAqL1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHRfdGFibGV7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNi42NiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5maXhlZFdpZHRoe1xyXG4gICAgd2lkdGg6IDIwMDBweDtcclxufVxyXG4ucmlnaHRfdGFibGVfdHdve1xyXG4gICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMzVweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlOyAvLyBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBpbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZy0xLCAudWktZy0yLCAudWktZy0zLCAudWktZy00LCAudWktZy01LCAudWktZy02LCAudWktZy03LCAudWktZy04LCAudWktZy05LCAudWktZy0xMCwgLnVpLWctMTF7XHJcbiAgICBwYWRkaW5nOjAgMC41ZW07XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmlwdC12YWxpLWFsZXJ0IHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5pcHQtdmFsaS1hbGVydDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5ncmF5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5pbnB1dF9oYWNrX2llOCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: LoantableAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoantableAnalysis", function() { return LoantableAnalysis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var _bean_overdue_reasons_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../bean/overdue-reasons.bean */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bean/overdue-reasons.bean.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_loantable_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/formValidate */ "./src/app/pages/tzb/custom/overdue/common/formValidate.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageProcess */ "./src/app/pages/tzb/custom/overdue/common/pageProcess.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//1.贷款逾期前后列表
var LoantableAnalysis = /** @class */ (function () {
    function LoantableAnalysis(commfunc, router, confirmationService, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.overdueReasonsBean = new _bean_overdue_reasons_bean__WEBPACK_IMPORTED_MODULE_5__["OverdueReasonsBean"]();
        //Y表示非客户经理，N表示客户经理
        this.managePermission = '';
        //接收父页面传过来的参数
        // isDetailFlagInValue: Boolean; //是否查看历史
        //贷前调查时(回显不可修改)
        this.preLoanFinancialCondition = {
            bankBorrowerAmt: 0,
            societyRaisingAmt: 0,
            accountsPayable: 0,
            debtsTotal: 0,
            receivables: 0,
            stocks: 0,
            fixedAssets: 0,
            investmentsAbroad: 0,
            propertyTotal: 0,
            debts1: 0,
            property1: 0,
            property2: 0,
            rightAndInterests: 0
        };
        //贷款逾期后
        this.overdueFinancialConditionList = [];
        this.overdueFinancialCondition = {
            bankBorrowerAmt: 0,
            societyRaisingAmt: 0,
            accountsPayable: 0,
            debtsTotal: 0,
            receivables: 0,
            stocks: 0,
            fixedAssets: 0,
            investmentsAbroad: 0,
            propertyTotal: 0,
            debts1: 0,
            property1: 0,
            property2: 0,
            rightAndInterests: 0
        };
        // 模态框
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_6__["HistoryInfor"]();
        this.toolBag = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_7__["ObjectHelper"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_loantable_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_8__["LoanTablePageCache"](this.commfunc);
        this.formValidate = new app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_9__["MyFormValidate"]();
        this.pageProcess = new app_pages_tzb_custom_overdue_common_pageProcess__WEBPACK_IMPORTED_MODULE_10__["PageProcess"]();
        this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_11__["LocalData"](this.commfunc);
        this.markFlag = '';
        this.codeValues(); //调用方法，获取全部码值
        // this.statusId = this.code['useStatus'];
    }
    LoantableAnalysis.prototype.ngOnInit = function () {
        this.pageProcess.setInit();
        // 获取登录人是否是客户经理（N表示客户经理，Y表示非客户经理），贷前的列表客户经理不可查看
        this.managePermission = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission;
        this.getConfidential();
    };
    LoantableAnalysis.prototype.ngOnChanges = function () {
        this.grapParameters();
    };
    LoantableAnalysis.prototype.grapParameters = function () {
        // debugger;
        if (this.pageProcess.getInit()) {
            //接收父组件传值
            this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
            // 贷前数据firstPurpose
            if (this.managePermission == 'Y' && this.preLoanInValue && Object.keys(this.preLoanInValue).length) {
                this.preLoanFinancialCondition = this.preLoanInValue;
            }
            // 接收父页面传递来的页面
            this.overdueFinancialConditionList = this.overdueInValue;
            this.loadData();
        }
    };
    LoantableAnalysis.prototype.loadData = function () {
        // 逾期后数据
        if (this.overdueInValue.length != 0) {
            var obj = {};
            var l = this.localData.getOperatingLevel();
            this.history.setOperatingLevel(l);
            this.history.historyControl(this.overdueFinancialConditionList, obj);
            console.log(this.overdueFinancialConditionList);
            this.overdueFinancialCondition = obj;
        }
    };
    // 提交数据到父页面(只提交逾期后的数据)
    LoantableAnalysis.prototype.ngAfterContentChecked = function () {
        //逾期后的数据
        this.outValue.emit(this.overdueFinancialCondition);
    };
    LoantableAnalysis.prototype.change = function (event) {
        this.history.historyOptionsChange(event);
    };
    // ------------------------------------数据暂存 和 恢复
    // 传递数据到外部
    LoantableAnalysis.prototype.inputCall = function (event, targets, type) {
        var ts = targets.split('.');
        this[ts[0]][ts[1]] = this.formValidate.onlyNumber(this[ts[0]][ts[1]]);
        if (ts[1] != 'debtsTotal' && ts[1] != 'propertyTotal') {
            this.account(ts[1], type);
        }
        this.setOverdueFinancialCondition();
    };
    LoantableAnalysis.prototype.getTotal = function (items) {
        var ret = 0;
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var t = this.overdueFinancialCondition[item];
            t = isNaN(t) ? 0 : parseFloat(t);
            ret += t;
        }
        return ret;
    };
    LoantableAnalysis.prototype.account = function (target, type) {
        if (type == 1) {
            var items = ['bankBorrowerAmt', 'societyRaisingAmt', 'accountsPayable', 'debts1'];
            this.overdueFinancialCondition.debtsTotal = this.getTotal(items).toFixed(2);
        }
        else {
            var items = ['receivables', 'stocks', 'fixedAssets', 'investmentsAbroad', 'property1', 'property2'];
            this.overdueFinancialCondition.propertyTotal = this.getTotal(items).toFixed(2);
        }
        // rightAndInterests
        this.overdueFinancialCondition.rightAndInterests = this.overdueFinancialCondition.propertyTotal - this.overdueFinancialCondition.debtsTotal;
        this.overdueFinancialCondition.rightAndInterests = this.overdueFinancialCondition.rightAndInterests.toFixed(2);
    };
    LoantableAnalysis.prototype.setOverdueFinancialCondition = function () {
        this.statusKeeper.setOverdueFinancialCondition(this.overdueFinancialCondition);
    };
    // -------------------------------------
    LoantableAnalysis.prototype.getOperatingLevel = function () {
        var ret = '';
        var t = this.localData.getOverdueConfidential();
        if (t) {
            ret = t.operatingLevel;
        }
        return ret;
    };
    //码值
    LoantableAnalysis.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    LoantableAnalysis.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoantableAnalysis.prototype, "preLoanInValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoantableAnalysis.prototype, "overdueInValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoantableAnalysis.prototype, "isDetailFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoantableAnalysis.prototype, "outValue", void 0);
    LoantableAnalysis = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "loantable-analysis",
            template: __webpack_require__(/*! ./loantable-analysis.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.html"),
            styles: [__webpack_require__(/*! ./loantable-analysis.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"]])
    ], LoantableAnalysis);
    return LoantableAnalysis;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/overdue-reasons.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/overdue-reasons.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: OverdueReasonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueReasonsModule", function() { return OverdueReasonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _loantable_analysis_loantable_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loantable-analysis/loantable-analysis.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/loantable-analysis/loantable-analysis.component.ts");
/* harmony import */ var _reason_analysis_reason_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reason-analysis/reason-analysis.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.ts");
/* harmony import */ var _bondsman_analysis_bondsman_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bondsman-analysis/bondsman-analysis.component */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/bondsman-analysis/bondsman-analysis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//客户组件

//页面


 //逾期前后列表
 //逾期原因分析
 //担保人情况分析
var OverdueReasonsModule = /** @class */ (function () {
    function OverdueReasonsModule() {
    }
    OverdueReasonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _loantable_analysis_loantable_analysis_component__WEBPACK_IMPORTED_MODULE_5__["LoantableAnalysis"],
                _reason_analysis_reason_analysis_component__WEBPACK_IMPORTED_MODULE_6__["ReasonAnalysis"],
                _bondsman_analysis_bondsman_analysis_component__WEBPACK_IMPORTED_MODULE_7__["BondsmanAnalysis"]
            ],
            providers: [
                app_service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_3__["AuthorityService"]
            ],
            exports: [
                _loantable_analysis_loantable_analysis_component__WEBPACK_IMPORTED_MODULE_5__["LoantableAnalysis"],
                _reason_analysis_reason_analysis_component__WEBPACK_IMPORTED_MODULE_6__["ReasonAnalysis"],
                _bondsman_analysis_bondsman_analysis_component__WEBPACK_IMPORTED_MODULE_7__["BondsmanAnalysis"]
            ]
        })
    ], OverdueReasonsModule);
    return OverdueReasonsModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/common/pageCache.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/common/pageCache.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ReasonAnalysisPageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonAnalysisPageCache", function() { return ReasonAnalysisPageCache; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/pageStatus */ "./src/app/pages/tzb/custom/overdue/common/pageStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ReasonAnalysisPageCache = /** @class */ (function (_super) {
    __extends(ReasonAnalysisPageCache, _super);
    function ReasonAnalysisPageCache(commfunc) {
        var _this = _super.call(this, commfunc) || this;
        _this.commfunc = commfunc;
        return _this;
    }
    // 逾期原因 
    // 贷款实际用途
    ReasonAnalysisPageCache.prototype.setRealityCreditPurpose = function (realityCreditPurpose) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, realityCreditPurpose, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-realityCreditPurpose", JSON.stringify({
            realityCreditPurpose: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    ReasonAnalysisPageCache.prototype.getRealityCreditPurpose = function () {
        return this.getTemporaryData("overdue-realityCreditPurpose");
    };
    ReasonAnalysisPageCache.prototype.isRealityCreditPurposeChange = function (source) {
        var ret = false;
        var current = this.getRealityCreditPurpose();
        if (source && current) {
            for (var prop in current) {
                if (current.hasOwnProperty(prop)) {
                    ret = this.changeMonitor(current[prop], source[prop]);
                    if (ret) {
                        break;
                    }
                }
            }
        }
        return ret;
    };
    ReasonAnalysisPageCache.prototype.isDataNeedRollback = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getRealityCreditPurpose() ? this.getRealityCreditPurpose().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    // 风险成因
    ReasonAnalysisPageCache.prototype.isDataNeedRollback2 = function () {
        var ret = false;
        this.timeStamp = this.getTimeStamp().timeStamp;
        var dataTimeStamp = this.getOverdueReasonAnalyze() ? this.getOverdueReasonAnalyze().timeStamp : null;
        if (this.timeStamp && dataTimeStamp) {
            ret = !this.changeMonitor(this.timeStamp, dataTimeStamp);
        }
        return ret;
    };
    ReasonAnalysisPageCache.prototype.setOverdueReasonAnalyze = function (overdueReasonAnalyze) {
        var obj = {};
        this.toolBag.copyObjectWithSkipping(obj, overdueReasonAnalyze, 'historyProcess');
        this.commfunc.setSessionDataCH("overdue-overdueReasonAnalyze", JSON.stringify({
            overdueReasonAnalyze: obj,
            timeStamp: this.getTimeStamp().timeStamp
        }));
    };
    ReasonAnalysisPageCache.prototype.getOverdueReasonAnalyze = function () {
        return this.getTemporaryData("overdue-overdueReasonAnalyze");
    };
    return ReasonAnalysisPageCache;
}(app_pages_tzb_custom_overdue_common_pageStatus__WEBPACK_IMPORTED_MODULE_0__["PageStatusKeeper"]));



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/helper.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/helper.ts ***!
  \********************************************************************************************************/
/*! exports provided: HistoryHelper, RiskReasonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryHelper", function() { return HistoryHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskReasonHelper", function() { return RiskReasonHelper; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/history */ "./src/app/pages/tzb/custom/overdue/common/history.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");



// 历史纪录帮助
var HistoryHelper = /** @class */ (function () {
    function HistoryHelper() {
        // 历史纪录
        this.display = false;
        this.history = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_0__["HistoryInfor"](); // 
        this.history2 = new app_pages_tzb_custom_overdue_common_history__WEBPACK_IMPORTED_MODULE_0__["HistoryInfor"](); // 
        this.hasHistory = false;
        this.historyOptions = [];
        this.toolBag = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_1__["ObjectHelper"]();
        this.currentLevel = '';
    }
    HistoryHelper.prototype.config = function () {
        this.hasHistory = this.history.hasHistory || this.history2.hasHistory;
        this.historyOptions = this.uniqueHistoryOptions();
    };
    HistoryHelper.prototype.uniqueHistoryOptions = function () {
        var _this = this;
        var ret = [];
        this.history.historyOptions.forEach(function (item) {
            if (!_this.IsHistoryProcessExist(ret, item.value)) {
                ret.push(item);
            }
        });
        this.history2.historyOptions.forEach(function (item) {
            if (!_this.IsHistoryProcessExist(ret, item.value)) {
                ret.push(item);
            }
        });
        return ret;
    };
    HistoryHelper.prototype.IsHistoryProcessExist = function (array, historyProcess) {
        var ret = false;
        array.forEach(function (item) {
            if (item.value == historyProcess) {
                ret = true;
            }
        });
        return ret;
    };
    HistoryHelper.prototype.historyOptionsChange = function (event) {
        this.history.historyOptionsChange(event);
        this.history2.historyOptionsChange(event);
        this.display = true;
    };
    HistoryHelper.prototype.popupClosed = function () {
        this.currentLevel = '';
    };
    return HistoryHelper;
}());

// 风险成因帮助
var RiskReasonHelper = /** @class */ (function () {
    function RiskReasonHelper() {
        this.reasonList = []; // 当前数据
        this.firstClass = []; // 风险成因 一级原始数据
        this.secondClass = []; // 风险成因 二级原始数据
        this.optionsList = []; // 风险成因 动态关联 不同下拉框的数据   [{ first: [], second: [] }, { first: [], second: [] }, { first: [], second: [] }]  长度最多为三
        this.lengthLimit = 3; // 操作限制
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_2__["SelectHelper"]();
        this.objectHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_1__["ObjectHelper"]();
        this.descHolder = [false, false, false];
    }
    RiskReasonHelper.prototype.init = function () {
        this.add();
    };
    RiskReasonHelper.prototype.add = function () {
        var ret = false;
        if (!this.reasonList) {
            this.reasonList = [];
        }
        if (this.reasonList.length < this.lengthLimit) {
            this.addOptionsList();
            // let item = { firstClass: this.firstClass[0].value, secondClass: this.secondClass[0].value };
            var item = { firstClass: '', secondClass: '', firstClassDesc: '', secondClassDesc: '' };
            this.reasonList.push(item);
            ret = true;
        }
        return ret;
    };
    //删除
    RiskReasonHelper.prototype.delete = function (index) {
        var ret = false;
        if (this.reasonList.length > 1) {
            this.deleteOptionsList(index);
            this.reasonList.splice(index, 1);
            ret = true;
        }
        return ret;
    };
    RiskReasonHelper.prototype.selectChange = function (type, index) {
        var row = this.reasonList[index];
        if (type == 1) {
            row['firstClassDesc'] = this.selectHelper.getLabel(this.firstClass, row['firstClass']);
            this.descHolder[index] = false;
        }
        else {
            var desc = this.selectHelper.getLabel(this.secondClass, row['secondClass']);
            this.setDescHolder(index, desc, true);
            row['secondClassDesc'] = desc;
        }
    };
    RiskReasonHelper.prototype.setDescHolder = function (index, desc, isChange) {
        if (isChange) {
            if (desc && desc.indexOf('其他') > -1) {
                this.descHolder[index] = true;
            }
            else {
                this.descHolder[index] = false;
            }
        }
        else {
            if (desc) {
                this.descHolder[index] = true;
            }
            else {
                this.descHolder[index] = false;
            }
        }
    };
    RiskReasonHelper.prototype.addOptionsList = function () {
        var obj = { first: [], second: [] };
        obj.first = this.copyList(this.firstClass);
        obj.second = this.copyList(this.secondClass);
        this.optionsList.push(obj);
    };
    RiskReasonHelper.prototype.deleteOptionsList = function (index) {
        this.optionsList.splice(index, 1);
    };
    RiskReasonHelper.prototype.firstChange = function (index) {
        var value = this.reasonList[index]['firstClass'];
        var row = this.optionsList[index];
        row.second = this.selectHelper.itemsfilter(value, this.copyList(this.secondClass));
    };
    // 加载初始化选项
    RiskReasonHelper.prototype.loadBasicReason = function (firstClass, secondClass) {
        this.firstClass = firstClass;
        this.secondClass = secondClass;
    };
    // 加载已选中的风险成因
    RiskReasonHelper.prototype.loadRiskReason = function (riskReason) {
        this.reasonList = riskReason;
        if (this.reasonList && this.reasonList.length) {
            this.setAllDescHolder();
            this.preLoadOptions();
        }
        else {
            this.add();
        }
    };
    RiskReasonHelper.prototype.setAllDescHolder = function () {
        var _this = this;
        this.reasonList.forEach(function (element, index) {
            var desc = element.secondClassDesc;
            _this.setDescHolder(index, desc, false);
        });
    };
    // 加载选项
    RiskReasonHelper.prototype.preLoadOptions = function () {
        var _this = this;
        this.reasonList.forEach(function (element) {
            _this.addOptionsList();
        });
    };
    // 列表拷贝
    RiskReasonHelper.prototype.copyList = function (source) {
        var _this = this;
        var ret = [];
        source.forEach(function (element) {
            var obj = {};
            _this.objectHelper.copyObject(obj, element);
            ret.push(obj);
        });
        return ret;
    };
    return RiskReasonHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/realityHelper.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/realityHelper.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RealityCreditPurposeHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealityCreditPurposeHelper", function() { return RealityCreditPurposeHelper; });
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");


// 实际贷款用途
var RealityCreditPurposeHelper = /** @class */ (function () {
    function RealityCreditPurposeHelper() {
        this.objectHelper = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_0__["ObjectHelper"]();
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_1__["SelectHelper"]();
        // 初始化options选项
        this.origins = [];
        // 下拉框选中，动态变化的选项
        this.first = [];
        this.firstKey = '';
        this.second = [];
        this.secondKeys = [];
        this.third = [];
    }
    RealityCreditPurposeHelper.prototype.firstChange = function (val) {
        this.firstKey = val;
        this.second = this.selectHelper.itemsFilterByParent(val, this.copyList(this.origins[1]));
        this.getSecondKeys();
        this.third = this.selectHelper.itemsFilterByParentList(this.secondKeys, this.copyList(this.origins[2]));
    };
    RealityCreditPurposeHelper.prototype.getSecondKeys = function () {
        var _this = this;
        this.secondKeys = [];
        this.second.forEach(function (element) {
            _this.secondKeys.push(element.value);
        });
    };
    RealityCreditPurposeHelper.prototype.secondChange = function (val) {
        this.third = this.selectHelper.itemsFilterByParent(val, this.copyList(this.origins[2]));
    };
    // 加载初始化options选项
    RealityCreditPurposeHelper.prototype.loadOrigins = function (origins) {
        this.origins = origins;
        this.loadBasicOptions();
    };
    RealityCreditPurposeHelper.prototype.loadBasicOptions = function () {
        this.first = this.copyList(this.origins[0]);
        this.second = this.rebuildOrigin(this.origins[1]);
        this.origins[1] = this.rebuildOrigin(this.origins[1]);
        this.third = this.rebuildOrigin(this.origins[2]);
        this.origins[2] = this.rebuildOrigin(this.origins[2]);
    };
    RealityCreditPurposeHelper.prototype.rebuildOrigin = function (list) {
        var ret = [];
        list.forEach(function (element) {
            var obj = { label: '', value: '', parent: '' };
            obj.label = element.label.replace(/_/g, '');
            obj.value = element.value.substring(3, 6);
            obj.parent = element.value.substring(0, 3);
            ret.push(obj);
        });
        return ret;
    };
    // 列表拷贝
    RealityCreditPurposeHelper.prototype.copyList = function (source) {
        var _this = this;
        var ret = [];
        source.forEach(function (element) {
            var obj = {};
            _this.objectHelper.copyObject(obj, element);
            ret.push(obj);
        });
        return ret;
    };
    return RealityCreditPurposeHelper;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 2.输入信息 -->\r\n<div class=\"ui-g-12 part2\">\r\n    <div class=\"ui-g-12 \" *ngIf=\"managePermission == 'Y'\">\r\n        <div class=\"ui-g-2 tit\">原贷款用途：</div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-8 padding-hor-0 parent-box\">\r\n                <input (mouseover)=\"originalCreditFlag=true\" (mouseleave)=\"originalCreditFlag=false\" pInputText readonly [(ngModel)]=\"originalCreditPurposeString\">\r\n                <div *ngIf=\"originalCreditFlag && originalCreditPurposeString\" class=\"float-box\">{{originalCreditPurposeString}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0\">\r\n        <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>实际贷款用途：</div>\r\n        <div class=\"ui-g-6 parent-box\">\r\n            <div class=\"ui-g-4 padding-hor-0\">\r\n                <p-dropdown (mouseover)=\"dropEnter(0, false)\" (mouseleave)=\"dropLeave(0)\" [disabled]='isDetailFlag' placeholder=\"请选择\" [options]=\"realityHelper.first\" [(ngModel)]=\"realityCreditPurpose.firstPurpose\" (onChange)=\"realPurposeChange($event, 1)\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-hor-0\">\r\n                <p-dropdown (mouseover)=\"dropEnter(1, false)\" (mouseleave)=\"dropLeave(1)\" [disabled]='isDetailFlag' placeholder=\"请选择\" [options]=\"realityHelper.second\" [(ngModel)]=\"realityCreditPurpose.secondPurpose\" (onChange)=\"realPurposeChange($event, 2)\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-hor-0\">\r\n                <p-dropdown (mouseover)=\"dropEnter(2, false)\" (mouseleave)=\"dropLeave(2)\" *ngIf=\"realityHelper.third && realityHelper.third.length\" [disabled]='isDetailFlag' placeholder=\"请选择\" [options]=\"realityHelper.third\" [(ngModel)]=\"realityCreditPurpose.thirdPurpose\" (onChange)=\"realPurposeChange($event, 3)\"></p-dropdown>\r\n            </div>\r\n            <div *ngIf=\"realPurposeFlag\" class=\"float-box\" [ngStyle]=\"realPurposeStyle\">{{realPurposeDesc}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0\">\r\n        <div class=\"ui-g-2 tip\">贷款用途备注：</div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-8 padding-hor-0 parent-box\">\r\n                <input (mouseover)=\"CreditPurposeFlag=true\" (mouseleave)=\"CreditPurposeFlag=false\" pInputText [readonly]='isDetailFlag' [(ngModel)]=\"realityCreditPurpose.purposeRemark\" (keyup)=\"purposeRemarkCall($event)\">\r\n                <div *ngIf=\"CreditPurposeFlag && realityCreditPurpose.purposeRemark\" class=\"float-box\">{{realityCreditPurpose.purposeRemark}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0\">\r\n        <!-- <div class=\"ui-xl-2 ui-g-3 tit\"><span style=\"color: red;\">*</span>风险成因(最多选三项)：</div> -->\r\n        <div class=\"ui-g-2 tit fenxian\">\r\n            <div>\r\n                <span>\r\n                        <span style=\"color: red;\">*</span>风险成因(最多选三项)：\r\n                </span>\r\n            </div>  \r\n        </div>\r\n        <!-- <div class=\"ui-xl-6 ui-g-5 padding-hor-0\"> -->\r\n        <div class=\"ui-g-6 ui-g-5 padding-hor-0\">\r\n            <div class=\"ui-g-12 padding-top-0 padding-right-0 parent-box\" *ngFor=\"let item of riskReasonHelper.reasonList; let i = index\">\r\n                <div class=\"ui-g-4 padding-hor-0\">\r\n                        <!-- pTooltip=\"{{item.firstClassDesc}}\" tooltipPosition=\"right\" -->\r\n                    <p-dropdown (mouseover)=\"reasonEnter(1, i, false)\" (mouseleave)=\"reasonLeave(1, i)\" [disabled]='isDetailFlag' placeholder=\"请选择\" [options]=\"riskReasonHelper.optionsList[i].first\" [(ngModel)]=\"item.firstClass\" (onChange)=\"riskReasonChange($event, 1, i)\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-hor-0\">\r\n                        <!-- pTooltip=\"{{item.secondClassDesc}}\" tooltipPosition=\"right\" -->\r\n                    <p-dropdown (mouseover)=\"reasonEnter(2, i, false)\" (mouseleave)=\"reasonLeave(2, i)\" [disabled]='isDetailFlag' placeholder=\"请选择\" [options]=\"riskReasonHelper.optionsList[i].second\" [(ngModel)]=\"item.secondClass\" (onChange)=\"riskReasonChange($event, 2, i)\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-3 padding-hor-0\">\r\n                    <input (mouseover)=\"reasonEnter(3, i, false)\" (mouseleave)=\"reasonLeave(3, i)\" pInputText *ngIf=\"item.secondClass == '05004' || item.secondClassDesc.indexOf('其他')>-1\" [readonly]='isDetailFlag' [(ngModel)]=\"item.reasonDesc\" (keyup)=\"inputCall($event)\">\r\n                </div>\r\n                <div style=\"height:25px;\" *ngIf=\"!isDetailFlag && (riskReasonHelper.reasonList && riskReasonHelper.reasonList.length > 1)\" class=\"ui-g-1 padding-hor-0\" (click)=\"deteleRisk(i)\">\r\n                    <img class=\"pic\" src=\"../../../../../../../assets/layout/images/jian_list.png\" alt=\"\">\r\n                </div>\r\n                <div *ngIf=\"riskReasonFlag[i]\" class=\"float-box\" [ngStyle]=\"riskReasonStyle\">{{riskReasonDesc}}</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 padding-top-0 padding-right-0 padding-bottom-0\">\r\n            <div class=\"ui-g-2\">&nbsp;</div>\r\n            <div class=\"ui-g-6 padding-hor-0\"><button pButton *ngIf=\"!isDetailFlag\" label=\"添加\" (click)='addRisk()'></button></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"isCredit\">\r\n        <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>监管层面风险成因：</div>\r\n        <div class=\"ui-g-6 padding-left-0\">\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [disabled]='isDetailFlag' [options]=\"code.superviceRiskReason\" placeholder=\"请选择\" [(ngModel)]=\"superviceRiskReasonAnalyze.firstClass\" (onChange)=\"superViceCall()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0 padding-bottom-5\">\r\n        <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>原主要财务数据来源和确认方式说明：</div>\r\n        <div class=\"ui-g-10 padding-left-5 padding-right-0 box-height\">\r\n            <textarea [disabled]='isDetailFlag' maxlength=\"500\" [(ngModel)]='overdueReasonAnalyze.originalFinanceDataDesc' (keyup) = \"inputCall($event)\" [rows]='5' pInputTextarea placeholder=\"对原贷款调查表中上述主要财务数据的来源和核实方式进行说明\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0 padding-bottom-5\">\r\n        <div class=\"ui-g-2 tit\">财务状况变化剖析及偏差原因：</div>\r\n        <div class=\"ui-g-10 padding-left-5 padding-right-0 box-height\">\r\n            <textarea [disabled]='isDetailFlag' maxlength=\"500\" [(ngModel)]='overdueReasonAnalyze.financeChangeReason' (keyup) = \"inputCall($event)\" [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。当授信金额小于等于20万元时，财务状况变化剖析及偏差原因为非必输项。\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0 padding-bottom-5\">\r\n        <div class=\"ui-g-2 tit\">非财务状况变化剖析及偏差原因：</div>\r\n        <div class=\"ui-g-10 padding-left-5 padding-right-0 box-height\">\r\n            <textarea [disabled]='isDetailFlag' maxlength=\"500\" [(ngModel)]='overdueReasonAnalyze.notFinanceChangeReason' (keyup) = \"inputCall($event)\" [rows]='5' pInputTextarea placeholder=\"文字描述，不超过500字。当授信金额小于等于20万元时，非财务状况变化剖析及偏差原因为非必输项。\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-top-0 padding-bottom-5\">\r\n        <div class=\"ui-g-2 tit\">逾期原因分析：</div>\r\n        <div class=\"ui-g-10 padding-left-5 padding-right-0 box-height\">\r\n            <!--18050 “逾期原因分析”为本次新增字段，需求里要求“无底纹，无字数限制”，按需求修改，去掉底纹描述和字数限制 -->\r\n            <textarea [disabled]='isDetailFlag'  [(ngModel)]='overdueReasonAnalyze.overdueReasonAnalysis' (keyup) = \"inputCall($event)\" [rows]='5' pInputTextarea ></textarea>\r\n        </div>\r\n    </div>\r\n    <!-- 历史查看 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"historyHelper.historyOptions && historyHelper.historyOptions.length && markFlag != '2' && !isDetailFlag\">\r\n        <div class=\"ui-g-3 pull-right\">\r\n            <div class=\"ui-g-4 history-title\">历史记录：</div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown placeholder=\"请选择\" [options]=\"historyHelper.historyOptions\" (onChange)=\"historyHelper.historyOptionsChange($event)\" [(ngModel)]=\"historyHelper.currentLevel\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 历史信息弹出框-->\r\n<p-dialog *ngIf=\"historyHelper.display\" [(visible)]=\"historyHelper.display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"historyHelper.popupClosed()\">\r\n        <p-header>\r\n            逾期原因分析\r\n        </p-header>\r\n        <div class=\"ui-g-12 part2\">\r\n            <div class=\"ui-g-12\" *ngIf=\"managePermission == 'Y'\">\r\n                <div class=\"ui-g-2 tit\">原贷款用途：</div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-8 padding-hor-0 parent-box\">\r\n                        <input (mouseover)=\"originalCreditFlag=true\" (mouseleave)=\"originalCreditFlag=false\" readonly pInputText [(ngModel)]=\"originalCreditPurposeString\">\r\n                        <div *ngIf=\"originalCreditFlag && originalCreditPurposeString\" class=\"float-box\">{{originalCreditPurposeString}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 padding-top-0\">\r\n                <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>实际贷款用途：</div>\r\n                <div class=\"ui-g-6 parent-box\">\r\n                    <div class=\"ui-g-4 padding-hor-0\">\r\n                        <p-dropdown (mouseover)=\"dropEnter(0, true)\" (mouseleave)=\"dropLeave(0)\" [disabled]='true' [options]=\"realityHelper.first\" [(ngModel)]=\"historyHelper.history2.currentHistory.firstPurpose\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding-hor-0\">\r\n                        <p-dropdown (mouseover)=\"dropEnter(1, true)\" (mouseleave)=\"dropLeave(1)\" [disabled]='true' [options]=\"realityHelper.origins[1]\" [(ngModel)]=\"historyHelper.history2.currentHistory.secondPurpose\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding-hor-0\">\r\n                        <p-dropdown (mouseover)=\"dropEnter(2, true)\" (mouseleave)=\"dropLeave(2)\" [disabled]='true' *ngIf=\"realityHelper.origins[2] && realityHelper.origins[2].length && historyHelper.history2.currentHistory.thirdPurpose\" [options]=\"realityHelper.third\" [(ngModel)]=\"historyHelper.history2.currentHistory.thirdPurpose\"></p-dropdown>\r\n                    </div>\r\n                    <div *ngIf=\"realPurposeFlag\" class=\"float-box\" [ngStyle]=\"realPurposeStyle\">{{realPurposeDesc}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 padding-top-0\">\r\n                <div class=\"ui-g-2 tip\">贷款用途备注：</div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-8 padding-hor-0 parent-box\">\r\n                        <input (mouseover)=\"CreditPurposeFlag=true\" (mouseleave)=\"CreditPurposeFlag=false\" pInputText readonly [(ngModel)]=\"historyHelper.history2.currentHistory.purposeRemark\">\r\n                        <div *ngIf=\"CreditPurposeFlag && historyHelper.history2.currentHistory.purposeRemark\" class=\"float-box\">{{historyHelper.history2.currentHistory.purposeRemark}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 padding-top-0\">\r\n                <div class=\"ui-g-2 tit fenxian\">\r\n                    <div>\r\n                        <span>\r\n                                <span style=\"color: red;\">*</span>风险成因(最多选三项)：\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6 padding-hor-0\">\r\n                    <div  class=\"ui-g-12 padding-top-0 padding-right-0 parent-box\" *ngFor=\"let item of historyHelper.history.currentHistory.riskReason; let i = index\">\r\n                        <div class=\"ui-g-4 padding-hor-0\">\r\n                            <p-dropdown (mouseover)=\"reasonEnter(1, i, true)\" (mouseleave)=\"reasonLeave(1, i)\" [disabled]='true' [options]=\"code.firstClass\" [(ngModel)]=\"item.firstClass\"></p-dropdown>\r\n                        </div>\r\n                        <div class=\"ui-g-4 padding-hor-0\">\r\n                            <p-dropdown (mouseover)=\"reasonEnter(2, i, true)\" (mouseleave)=\"reasonLeave(2, i)\" [disabled]='true' [options]=\"code.secondClass\" [(ngModel)]=\"item.secondClass\"></p-dropdown>\r\n                        </div>\r\n                        <div class=\"ui-g-3 padding-hor-0\">\r\n                            <input (mouseover)=\"reasonEnter(3, i, true)\" (mouseleave)=\"reasonLeave(3, i)\" readonly pInputText *ngIf=\"item.reasonDesc\" [disabled]='isDetailFlag' [(ngModel)]=\"item.reasonDesc\">\r\n                        </div>\r\n                        <div *ngIf=\"riskReasonFlag[i]\" class=\"float-box\" [ngStyle]=\"riskReasonStyle\">{{riskReasonDesc}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"isCredit\" >\r\n                <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>监管层面风险成因：</div>\r\n                <div class=\"ui-g-6 padding-left-0\">\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [disabled]='true' [options]=\"code.superviceRiskReason\" [(ngModel)]=\"historySuperviceRiskReason\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>原主要财务数据来源和确认方式说明：</div>\r\n                <div class=\"ui-g-10 padding-left-5 padding-right-0\">\r\n                    <textarea maxlength=\"500\" [disabled]='true' [(ngModel)]='historyHelper.history.currentHistory.originalFinanceDataDesc' [rows]='5' pInputTextarea placeholder=\"对原贷款调查表钟上述主要财务数据的来源和核实方式进行说明\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>财务状况变化剖析及偏差原因：</div>\r\n                <div class=\"ui-g-10 padding-left-5 padding-right-0\">\r\n                    <textarea maxlength=\"500\" [disabled]='true' [(ngModel)]='historyHelper.history.currentHistory.financeChangeReason' [rows]='5' pInputTextarea placeholder=\"文字录入，字符不超过500\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 tit\"><span style=\"color: red;\">*</span>非财务状况变化剖析及偏差原因：</div>\r\n                <div class=\"ui-g-10 padding-left-5 padding-right-0\">\r\n                    <textarea maxlength=\"500\" [disabled]='true' [(ngModel)]='historyHelper.history.currentHistory.notFinanceChangeReason' [rows]='5' pInputTextarea placeholder=\"文字录入，字符不超过500\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 tit\">逾期原因分析：</div>\r\n                <div class=\"ui-g-10 padding-left-5 padding-right-0\">\r\n                    <textarea [disabled]='true' maxlength=\"500\" [(ngModel)]='historyHelper.history.currentHistory.overdueReasonAnalysis'  [rows]='5' pInputTextarea  ></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"commonlyMessage.msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".part2 {\n  margin-top: 5px;\n  background: #fff; }\n  .part2 .part2_title {\n    font-size: 15px; }\n  .part2 .tip {\n    text-align: right; }\n  .part2 .tit {\n    text-align: right; }\n  :host /deep/ .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host /deep/ table {\n  text-align: center; }\n  :host /deep/ input {\n  min-width: auto; }\n  :host /deep/ .ui-g-1,\n.ui-g-2,\n.ui-g-3,\n.ui-g-4,\n.ui-g-5,\n.ui-g-6,\n.ui-g-7,\n.ui-g-8,\n.ui-g-9,\n.ui-g-10,\n.ui-g-11 {\n  padding: 0 0.5em; }\n  .pull-right {\n  float: right; }\n  .history-title {\n  font-size: 13px;\n  text-align: right;\n  padding-top: 5px; }\n  .padding-hor-0 {\n  padding-left: 0;\n  padding-right: 7px; }\n  .padding-top-0 {\n  padding-top: 0; }\n  .padding-left-0 {\n  padding-left: 0; }\n  .padding-left-5 {\n  padding-left: 5px; }\n  .padding-right-0 {\n  padding-right: 0; }\n  .padding-bottom-0 {\n  padding-bottom: 0; }\n  .padding-bottom-5 {\n  padding-bottom: 7px; }\n  .margin-bottom-14 {\n  margin-bottom: 14px; }\n  .pic {\n  width: 25px;\n  height: 25px; }\n  .parent-box {\n  position: relative; }\n  .fenxian {\n  height: 10px; }\n  .fenxian div {\n    position: relative; }\n  .fenxian div span {\n      position: absolute;\n      right: 0px; }\n  .fenxian div span span {\n        position: unset; }\n  .float-box {\n  position: absolute;\n  background: #fff;\n  line-height: 1.6;\n  border: 1px solid #66CCFF;\n  padding: 5px;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: auto;\n  word-break: break-all;\n  bottom: 0px;\n  left: 100%;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\", \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n  color: #000;\n  width: 78%; }\n  :host /deep/ .ui-dropdown {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9vdmVyZHVlL292ZXJkdWUtY2FzZS9vdmVyZHVlLXJlYXNvbnMvcmVhc29uLWFuYWx5c2lzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcb3ZlcmR1ZVxcb3ZlcmR1ZS1jYXNlXFxvdmVyZHVlLXJlYXNvbnNcXHJlYXNvbi1hbmFseXNpc1xccmVhc29uLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsZUFBZSxFQUFBO0VBSnZCO0lBT1EsaUJBQWlCLEVBQUE7RUFQekI7SUFVUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLFdBQVcsRUFBQTtFQUdmO0VBQ0ksa0JBQ0osRUFBQTtFQUVBO0VBQ0ksZUFBZSxFQUFBO0VBR25COzs7Ozs7Ozs7OztFQVdJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBT2hCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxZQUFZLEVBQUE7RUFEaEI7SUFHUSxrQkFBa0IsRUFBQTtFQUgxQjtNQUtZLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7RUFOdEI7UUFRZ0IsZUFBZSxFQUFBO0VBSy9CO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkVBQTJFO0VBQzNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVUsRUFBQTtFQUVkO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL292ZXJkdWUvb3ZlcmR1ZS1jYXNlL292ZXJkdWUtcmVhc29ucy9yZWFzb24tYW5hbHlzaXMvcmVhc29uLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnQyIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAucGFydDJfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC50aXAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTsgLy8gYmFja2dyb3VuZDogI2U5ZTllOTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLWctMSxcclxuLnVpLWctMixcclxuLnVpLWctMyxcclxuLnVpLWctNCxcclxuLnVpLWctNSxcclxuLnVpLWctNixcclxuLnVpLWctNyxcclxuLnVpLWctOCxcclxuLnVpLWctOSxcclxuLnVpLWctMTAsXHJcbi51aS1nLTExIHtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1ob3ItMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC0wIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LTAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS01IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5waWMge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5ib3gtaGVpZ2h0IHtcclxuICAgIC8vIGhlaWdodDogOTMuNXB4O1xyXG59XHJcblxyXG4ucGFyZW50LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZlbnhpYW57XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZmxvYXQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2Q0NGRjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlxcNUZBRVxcOEY2RlxcOTZDNVxcOUVEMVwiLCBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogNzglO1xyXG59XHJcbjpob3N0IC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ReasonAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonAnalysis", function() { return ReasonAnalysis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/overdue.http.service */ "./src/app/pages/tzb/custom/overdue/http/overdue.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_helper_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/helper */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/helper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/selectHelper */ "./src/app/pages/tzb/custom/overdue/common/selectHelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_helper_realityHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/realityHelper */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/helper/realityHelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/objecthelper */ "./src/app/pages/tzb/custom/overdue/common/objecthelper.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/common/pageCache */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/common/pageCache.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/msg */ "./src/app/pages/tzb/custom/overdue/common/msg.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/formValidate */ "./src/app/pages/tzb/custom/overdue/common/formValidate.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/overdue/common/localData */ "./src/app/pages/tzb/custom/overdue/common/localData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//2.逾期原因分析
var ReasonAnalysis = /** @class */ (function () {
    function ReasonAnalysis(commfunc, router, confirmationService, httpService, cusOperationHttpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.cusOperationHttpService = cusOperationHttpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // msgs: Message[] = [];
        // overdueReasonsBean: OverdueReasonsBean = new OverdueReasonsBean();
        // 组件参数 for other module
        // 实际用途
        this.realityCreditPurposeList = [];
        this.realityCreditPurpose = {
            firstPurpose: '',
            firstPurposeName: '',
            secondPurpose: '',
            secondPurposeName: '',
            thirdPurpose: '',
            thirdPurposeName: '',
            purposeRemark: ''
        };
        // 逾期原因
        this.overdueReasonAnalyzeList = [];
        // 当前 预期原因分析
        this.overdueReasonAnalyze = {
            originalFinanceDataDesc: '',
            financeChangeReason: '',
            notFinanceChangeReason: '',
            riskReason: []
        };
        this.originalCreditPurposeString = '';
        // 风险成因 相关数据
        this.riskReasonHelper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_helper_helper__WEBPACK_IMPORTED_MODULE_5__["RiskReasonHelper"]();
        // 实际贷款用途 联动帮助类
        this.realityHelper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_helper_realityHelper__WEBPACK_IMPORTED_MODULE_7__["RealityCreditPurposeHelper"]();
        // // 历史纪录
        this.historyHelper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_helper_helper__WEBPACK_IMPORTED_MODULE_5__["HistoryHelper"]();
        this.selectHelper = new app_pages_tzb_custom_overdue_common_selectHelper__WEBPACK_IMPORTED_MODULE_6__["SelectHelper"]();
        this.toolBag = new app_pages_tzb_custom_overdue_common_objecthelper__WEBPACK_IMPORTED_MODULE_8__["ObjectHelper"]();
        this.statusKeeper = new app_pages_tzb_custom_overdue_overdue_case_overdue_reasons_reason_analysis_common_pageCache__WEBPACK_IMPORTED_MODULE_9__["ReasonAnalysisPageCache"](this.commfunc);
        this.commonlyMessage = new app_pages_tzb_custom_overdue_common_msg__WEBPACK_IMPORTED_MODULE_10__["CommonlyMessage"]();
        this.formValidate = new app_pages_tzb_custom_overdue_common_formValidate__WEBPACK_IMPORTED_MODULE_11__["MyFormValidate"]();
        // 设置此标志的原因：ngOnChanges 事件第一次执行时，获取不到数据。必须等 ngOnInit 事件执行后才可以获取到。
        this.isInit = false;
        this.managePermission = '';
        this.superviceRiskReasonAnalyze = {
            firstClass: '',
            firstClassDesc: ''
        };
        this.isCredit = false;
        this.localData = new app_pages_tzb_custom_overdue_common_localData__WEBPACK_IMPORTED_MODULE_13__["LocalData"](this.commfunc);
        this.markFlag = '';
        // 提示框相关 
        this.originalCreditFlag = false;
        this.CreditPurposeFlag = false;
        // ------------------------------提示框相关
        //realPurposeTip: SelfToolTip = new SelfToolTip();
        this.realPurposeFlag = false;
        this.realPurposeStyle = { width: '50%', left: '67%' };
        this.realPurposeDesc = '';
        // ------------------------------------------------
        this.riskReasonFlag = [
            false, false, false
        ];
        this.riskReasonStyle = { width: '50%', left: '71%', bottom: '5px' };
        this.riskReasonDesc = '';
        //调用方法，获取全部码值
        this.codeValues();
        // this.insteadPayAbility = this.code['insteadPayAbility'];//有无代偿能力
        this.getProType();
    }
    ReasonAnalysis.prototype.ngOnInit = function () {
        // 风险成因
        // this.reasonList = [{ first: this.firstOptions[0].value, second: this.secondOptions[0].value }];
        this.pageInit();
        this.setInit();
        this.getConfidential();
    };
    ReasonAnalysis.prototype.setInit = function () {
        this.isInit = true;
    };
    ReasonAnalysis.prototype.getInit = function () {
        return this.isInit;
    };
    ReasonAnalysis.prototype.pageInit = function () {
        // 获取登录人是否是客户经理（N表示客户经理，Y表示非客户经理），贷前的列表客户经理不可查看
        this.managePermission = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission;
        // 风险成因 加载基础数据
        this.riskReasonHelper.loadBasicReason(this.code.firstClass, this.code.secondClass);
        // 贷款实际用途 加载基础数据
        this.realityHelper.loadOrigins([
            this.code.realityCreditPurpose,
            this.code.realityCreditPurposeLevelTwo,
            this.code.realityCreditPurposeLevelThree
        ]);
    };
    ReasonAnalysis.prototype.ngOnChanges = function () {
        this.grapParameters();
    };
    ReasonAnalysis.prototype.grapParameters = function () {
        if (this.getInit()) {
            this.isDetailFlag = this.isDetailFlag.toString() == "true" ? true : false;
            // 接收父页面传过来的参数
            this.overdueReasonAnalyzeList = this.inValue;
            this.realityCreditPurposeList = this.realValue;
            this.historyControl();
            if (this.originValue && Object.keys(this.originValue).length > 0) {
                this.combineOriginalCreditPurpose(this.originValue);
            }
        }
    };
    ReasonAnalysis.prototype.historyControl = function () {
        // 实际贷款用途
        this.realityCreditPurposeDataCover();
        // 风险成因
        this.overdueReasonAnalyzeDataCover();
        if (this.overdueReasonAnalyzeList.length && this.realityCreditPurposeList.length) {
            this.historyHelper.config();
        }
    };
    // 提交数据到父页面(只提交逾期后的数据)
    ReasonAnalysis.prototype.ngAfterContentChecked = function () {
        //逾期后的数据
        this.outValue.emit(this.overdueReasonAnalyze);
    };
    ReasonAnalysis.prototype.overdueReasonAnalyzeDataCover = function () {
        if (this.overdueReasonAnalyzeList.length) {
            var obj = {};
            var l = this.localData.getOperatingLevel();
            this.historyHelper.history.setOperatingLevel(l);
            this.historyHelper.history.historyControl(this.overdueReasonAnalyzeList, obj);
            this.overdueReasonAnalyze = obj;
            this.loadHistorySuperviceRiskReason();
            this.loadSuperviceRiskReason();
            this.riskReasonHelper.loadRiskReason(obj["riskReason"]);
            this.setOverdueReasonAnalyze(); // 向外部导出自身债务信息
        }
        else {
            if (this.riskReasonHelper.firstClass.length &&
                this.riskReasonHelper.secondClass.length) {
                if (!this.riskReasonHelper.reasonList ||
                    this.riskReasonHelper.reasonList.length == 0) {
                    if (!this.isDetailFlag) {
                        this.addRisk();
                    }
                }
            }
        }
    };
    ReasonAnalysis.prototype.loadSuperviceRiskReason = function () {
        var temp = this.overdueReasonAnalyze.superviceRiskReasonAnalyze;
        this.superviceRiskReasonAnalyze = temp && temp.length ? temp[0] : this.superviceRiskReasonAnalyze;
    };
    ReasonAnalysis.prototype.loadHistorySuperviceRiskReason = function () {
        var t = this.historyHelper.history.currentHistory.superviceRiskReasonAnalyze;
        t = t && t.length ? t[0] : null;
        this.historySuperviceRiskReason = t ? t.firstClass : '';
    };
    ReasonAnalysis.prototype.realityCreditPurposeDataCover = function () {
        if (this.realityCreditPurposeList && this.realityCreditPurposeList.length) {
            var obj = {};
            var l = this.localData.getOperatingLevel();
            this.historyHelper.history2.setOperatingLevel(l);
            this.historyHelper.history2.historyControl(this.realityCreditPurposeList, obj);
            this.realityCreditPurpose = obj;
            this.provokeRealPurposeChange();
            this.setRealityCreditPurpose(); // 向外部导出自身债务信息
        }
    };
    ReasonAnalysis.prototype.updateRealityCreditPurpose = function (realityCreditPurpose) {
        // 1. 保存初始化数据
        this.realityCreditPurpose = realityCreditPurpose;
        this.setRealityCreditPurpose(); // 向外部导出自身债务信息
        this.provokeRealPurposeChange();
    };
    // 实际用途  --------------------------数据暂存 和 恢复
    ReasonAnalysis.prototype.realPurposeChange = function (event, type) {
        this.clearRealPurpose(type);
        this.realPurposeChangeHandle(event.value, type);
        this.setRealityCreditPurpose();
    };
    ReasonAnalysis.prototype.clearRealPurpose = function (type) {
        if (type == 1) {
            this.realityCreditPurpose.secondPurpose = '';
            this.realityCreditPurpose.secondPurposeName = '';
            this.realityCreditPurpose.thirdPurpose = '';
            this.realityCreditPurpose.thirdPurposeName = '';
        }
        else if (type == 2) {
            this.realityCreditPurpose.thirdPurpose = '';
            this.realityCreditPurpose.thirdPurposeName = '';
        }
    };
    ReasonAnalysis.prototype.realPurposeChangeHandle = function (val, type) {
        if (type == 1) {
            this.realityHelper.firstChange(val);
            this.realityCreditPurpose.firstPurposeName = this.selectHelper.getLabel(this.realityHelper.first, val);
        }
        else if (type == 2) {
            this.realityHelper.secondChange(val);
            this.realityCreditPurpose.secondPurposeName = this.selectHelper.getLabel(this.realityHelper.second, val);
        }
        else {
            this.realityCreditPurpose.thirdPurposeName = this.selectHelper.getLabel(this.realityHelper.third, val);
        }
    };
    ReasonAnalysis.prototype.purposeRemarkCall = function (event) {
        this.setRealityCreditPurpose();
    };
    ReasonAnalysis.prototype.provokeRealPurposeChange = function () {
        // 在给下拉框赋值的时候需要更改下拉框的集合
        if (this.realityCreditPurpose) {
            if (this.realityCreditPurpose.firstPurpose)
                this.realPurposeChangeHandle(this.realityCreditPurpose.firstPurpose, 1);
            if (this.realityCreditPurpose.secondPurpose)
                this.realPurposeChangeHandle(this.realityCreditPurpose.secondPurpose, 2);
            if (this.realityCreditPurpose.thirdPurpose)
                this.realPurposeChangeHandle(this.realityCreditPurpose.thirdPurpose, 3);
        }
    };
    ReasonAnalysis.prototype.setRealityCreditPurpose = function () {
        this.statusKeeper.setRealityCreditPurpose(this.realityCreditPurpose);
    };
    // -----------------------风险成因------------------------
    // 添加
    ReasonAnalysis.prototype.addRisk = function () {
        var ret = this.riskReasonHelper.add();
        if (ret) {
            this.setOverdueReasonAnalyze();
        }
        else {
            this.commonlyMessage.logicError('最多只能添加三项');
        }
    };
    //删除
    ReasonAnalysis.prototype.deteleRisk = function (index) {
        var ret = this.riskReasonHelper.delete(index);
        if (ret) {
            this.setOverdueReasonAnalyze();
        }
        else {
            this.commonlyMessage.logicError('最后一项不可删除');
        }
    };
    ReasonAnalysis.prototype.combineOriginalCreditPurpose = function (obj) {
        this.originalCreditPurposeString = this.finiteStateMachine(obj.firstPurposeName) +
            this.finiteStateMachine(obj.secondPurposeName) +
            this.finiteStateMachine(obj.thirdPurposeName) +
            obj.purposeRemark;
    };
    ReasonAnalysis.prototype.finiteStateMachine = function (inputName) {
        return inputName ? inputName + ' | ' : '';
    };
    // 风险成因  --------------------------数据暂存 和 恢复
    ReasonAnalysis.prototype.riskReasonChange = function (event, type, index) {
        this.riskReasonHelper.selectChange(type, index);
        if (type == 1) {
            this.riskReasonHelper.firstChange(index);
            if (event) {
                this.clearRiskReason(index);
            }
        }
        else {
            this.riskReasonHelper.reasonList[index]['reasonDesc'] = '';
        }
        this.setOverdueReasonAnalyze();
    };
    ReasonAnalysis.prototype.clearRiskReason = function (index) {
        this.riskReasonHelper.reasonList[index]['secondClass'] = '';
        this.riskReasonHelper.reasonList[index]['secondClassDesc'] = '';
        this.riskReasonHelper.reasonList[index]['reasonDesc'] = '';
    };
    ReasonAnalysis.prototype.inputCall = function (event) {
        this.setOverdueReasonAnalyze();
    };
    ReasonAnalysis.prototype.provokeRiskReasonChange = function () {
        var _this = this;
        var arr = this.overdueReasonAnalyze.riskReason;
        if (arr && arr.length > 0) {
            arr.forEach(function (element, index) {
                _this.riskReasonChange(null, 1, index);
                _this.riskReasonChange(null, 2, index);
            });
        }
    };
    ReasonAnalysis.prototype.superViceCall = function () {
        this.setOverdueReasonAnalyze();
    };
    ReasonAnalysis.prototype.setOverdueReasonAnalyze = function () {
        this.overdueReasonAnalyze.superviceRiskReasonAnalyze = [this.superviceRiskReasonAnalyze];
        this.overdueReasonAnalyze.riskReason = this.riskReasonHelper.reasonList;
        this.statusKeeper.setOverdueReasonAnalyze(this.overdueReasonAnalyze);
    };
    // ---------------------------------------------
    // 查询产品类型
    ReasonAnalysis.prototype.getProType = function () {
        var _this = this;
        // debugger;
        var baseInfo = this.localData.getTemporaryData('overdue-baseInfo');
        if (!baseInfo.productNo) {
            return;
        }
        var paramproType = {
            productNo: baseInfo.productNo,
        };
        this.cusOperationHttpService.queryCustProductType(paramproType).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.isCredit = data.productType == 'credit';
            }
            else {
                _this.commonlyMessage.logicError(data.returnCode.message);
            }
            _this.setConfigs();
        }, function (error) {
            _this.commonlyMessage.logicError('调用服务失败！');
            _this.setConfigs();
        });
    };
    ReasonAnalysis.prototype.setConfigs = function () {
        // overdue-transformRationalit-bondsmanCondition
        var flags = this.localData.getTemporaryData('overdue-transformRationalit-bondsmanCondition');
        flags['isCredit'] = this.isCredit;
        this.localData.setTemporaryData('overdue-transformRationalit-bondsmanCondition', flags);
    };
    //码值
    ReasonAnalysis.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        this.code = ret;
        return this.code; //code是自己声明的变量
    };
    ReasonAnalysis.prototype.getConfidential = function () {
        var confidential = this.localData.getOverdueConfidential();
        if (confidential) {
            this.markFlag = confidential.markFlag;
        }
    };
    ReasonAnalysis.prototype.setRealPurposeStyle = function (isHistory) {
        var positionFlag = false;
        if (isHistory) {
            if (this.historyHelper.history2.currentHistory.thirdPurpose) {
                positionFlag = true;
            }
        }
        else {
            if (this.realityHelper.third && this.realityHelper.third.length) {
                positionFlag = true;
            }
        }
        if (positionFlag) {
            this.realPurposeStyle = { width: '50%', left: '100%' };
        }
        else {
            this.realPurposeStyle = { width: '50%', left: '67%' };
        }
    };
    ReasonAnalysis.prototype.dropEnter = function (index, isHistory) {
        this.setRealPurposeStyle(isHistory);
        var row = this.realityCreditPurpose;
        if (isHistory) {
            row = this.historyHelper.history2.currentHistory;
        }
        var desc = '';
        switch (index.toString()) {
            case '0':
                desc = row.firstPurposeName;
                break;
            case '1':
                desc = row.secondPurposeName;
                break;
            case '2':
                desc = row.thirdPurposeName;
                break;
        }
        this.realPurposeDesc = desc;
        if (this.realPurposeDesc) {
            this.realPurposeFlag = true;
        }
        else {
            this.realPurposeFlag = false;
        }
    };
    ReasonAnalysis.prototype.dropLeave = function (index) {
        this.realPurposeFlag = false;
    };
    ReasonAnalysis.prototype.setRiskReasonStyle = function (index, isHistory) {
        var row = this.riskReasonHelper.reasonList[index];
        if (isHistory) {
            row = this.historyHelper.history.currentHistory.riskReason[index];
        }
        if (row.reasonDesc) {
            this.riskReasonStyle = { width: '50%', left: '95%', bottom: '5px' };
        }
        else {
            this.riskReasonStyle = { width: '50%', left: '71%', bottom: '5px' };
        }
    };
    ReasonAnalysis.prototype.reasonEnter = function (type, index, isHistory) {
        this.setRiskReasonStyle(index, isHistory);
        var row = this.riskReasonHelper.reasonList[index];
        if (isHistory) {
            row = this.historyHelper.history.currentHistory.riskReason[index];
        }
        var desc = '';
        switch (type.toString()) {
            case '1':
                desc = row['firstClassDesc'];
                break;
            case '2':
                desc = row['secondClassDesc'];
                break;
            case '3':
                desc = row['reasonDesc'];
                break;
        }
        this.riskReasonDesc = desc;
        if (this.riskReasonDesc) {
            this.riskReasonFlag[index] = true;
        }
        else {
            this.riskReasonFlag[index] = false;
        }
    };
    ReasonAnalysis.prototype.reasonLeave = function (type, index) {
        this.riskReasonFlag[index] = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReasonAnalysis.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReasonAnalysis.prototype, "realValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReasonAnalysis.prototype, "originValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReasonAnalysis.prototype, "isDetailFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReasonAnalysis.prototype, "outValue", void 0);
    ReasonAnalysis = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "reason-analysis",
            template: __webpack_require__(/*! ./reason-analysis.component.html */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.html"),
            styles: [__webpack_require__(/*! ./reason-analysis.component.scss */ "./src/app/pages/tzb/custom/overdue/overdue-case/overdue-reasons/reason-analysis/reason-analysis.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_12__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_overdue_http_service__WEBPACK_IMPORTED_MODULE_4__["OverdueHttpService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_12__["CusOperationHttpService"]])
    ], ReasonAnalysis);
    return ReasonAnalysis;
}());



/***/ }),

/***/ "./src/app/service/basis/authority/authority.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.config.ts ***!
  \*************************************************************/
/*! exports provided: AuthorityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityConfigService", function() { return AuthorityConfigService; });
var AuthorityConfigService = {
    'querybankOrgTree': 'querybankOrgTree'
};


/***/ }),

/***/ "./src/app/service/basis/authority/authority.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityService", function() { return AuthorityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authority_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authority.config */ "./src/app/service/basis/authority/authority.config.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.service1 */ "./src/app/@uisftech/common/service/http.service1.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorityService = /** @class */ (function () {
    function AuthorityService(httpService) {
        this.httpService = httpService;
    }
    AuthorityService.prototype.querybankOrgTree = function (params) {
        return this.httpService.ajax(app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["API"].IP + _authority_config__WEBPACK_IMPORTED_MODULE_1__["AuthorityConfigService"].querybankOrgTree, params, null);
    };
    AuthorityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AuthorityService);
    return AuthorityService;
}());



/***/ })

}]);
//# sourceMappingURL=overdue-case-overdue-case-module.js.map