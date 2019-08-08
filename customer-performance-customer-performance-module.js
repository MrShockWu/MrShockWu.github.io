(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-performance-customer-performance-module"],{

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 不良分布 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'不良情况   行业分布'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'不良情况   产品分布'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'不良情况   担保方式分布'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option5\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'不良情况   客户年龄分布'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip7\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option7\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip8\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option8\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9iYWRuZXNzL2JhZG5lc3MtcHJvcGVydHlEaXN0cmlidXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcYmFkbmVzc1xcYmFkbmVzcy1wcm9wZXJ0eURpc3RyaWJ1dGlvblxcYmFkbmVzcy1wcm9wZXJ0eURpc3RyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2JhZG5lc3MvYmFkbmVzcy1wcm9wZXJ0eURpc3RyaWJ1dGlvbi9iYWRuZXNzLXByb3BlcnR5RGlzdHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: BadnessPropertyDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadnessPropertyDistributionComponent", function() { return BadnessPropertyDistributionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_customer_performance_service_customer_performance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BadnessPropertyDistributionComponent = /** @class */ (function () {
    function BadnessPropertyDistributionComponent(httpService, commfunc, commonFunc, messageService, customerPerformanceService, activatedRoute) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.commonFunc = commonFunc;
        this.messageService = messageService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '截止到所选时间的最后一日，我的不良贷款发生在各行业的笔数与占比';
        this.pTooltip2 = '截止到所选时间的最后一日，我的不良贷款发生在各行业的余额与占比';
        this.pTooltip3 = '截止到所选时间的最后一日，我的不良贷款发生在各产品的笔数与占比';
        this.pTooltip4 = '截止到所选时间的最后一日，我的不良贷款发生在各产品的余额与占比';
        this.pTooltip5 = '截止到所选时间的最后一日，我的不良贷款发生在各担保方式的笔数与占比';
        this.pTooltip6 = '截止到所选时间的最后一日，我的不良贷款发生在各担保方式的余额与占比';
        this.pTooltip7 = '截止到所选时间的最后一日，我的不良贷款发生在不同年龄段客户的笔数与占比';
        this.pTooltip8 = '截止到所选时间的最后一日，我的不良贷款发生在不同年龄段客户的余额与占比';
        this.industryList = [
            { value: 'A', label: '农、林、牧、渔业' },
            { value: 'B', label: '采矿业' },
            { value: 'C', label: '制造业' },
            { value: 'D', label: '电力、热力、燃气及水生产和供应业' },
            { value: 'E', label: '建筑业' },
            { value: 'F', label: '批发和零售业' },
            { value: 'G', label: '交通运输、仓储和邮政业' },
            { value: 'H', label: '住宿和餐饮业' },
            { value: 'I', label: '信息传输、软件和信息技术服务业' },
            { value: 'J', label: '金融业' },
            { value: 'K', label: '房地产业' },
            { value: 'L', label: '租赁和商务服务业' },
            { value: 'M', label: '科学研究和技术服务业' },
            { value: 'N', label: '水利、环境和公共设施管理业' },
            { value: 'O', label: '居民服务、修理和其他服务业' },
            { value: 'P', label: '教育' },
            { value: 'Q', label: '卫生和社会工作' },
            { value: 'R', label: '文化、体育和娱乐业' },
            { value: 'S', label: '公共管理、社会保障和社会组织' },
            { value: 'T', label: '国际组织' },
            { value: 'Z', label: '其他行业' }
        ];
        this.ageList = [
            { value: '1', label: '25岁以下' },
            { value: '2', label: '25岁-35岁' },
            { value: '3', label: '35岁-45岁' },
            { value: '4', label: '45岁-55岁' },
            { value: '5', label: '55岁-65岁' },
            { value: '6', label: '65岁以上' }
        ];
        this.productList = [
            { value: '01', label: '一般贷款 ' },
            { value: '02', label: '小本贷款 ' },
            { value: '03', label: '消费贷款 ' },
            { value: '04', label: '贸易融资 ' },
            { value: '05', label: '贴现 ' },
            { value: '06', label: '时贷通 ' },
            { value: '09', label: '自助卡' }
        ];
        this.guaranteeList = [
            { value: '1201', label: '抵押' },
            { value: '1301', label: '质押' },
            { value: '1302', label: '存单质押' },
            { value: '1101', label: '保证' },
            { value: '1139', label: '保证金' },
            { value: '-1', label: '未知' },
            { value: '1001', label: '无' }
        ];
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption2({ title: '行业-新不良笔数', name: '行业', data: [0] });
        this.option2 = this.customerPerformanceService.returnOption2({ title: '行业-新不良金额', name: '行业', data: [0] });
        this.option3 = this.customerPerformanceService.returnOption2({ title: '产品-新不良笔数', name: '产品', data: [0] });
        this.option4 = this.customerPerformanceService.returnOption2({ title: '产品-新不良金额', name: '产品', data: [0] });
        this.option5 = this.customerPerformanceService.returnOption2({ title: '担保方式-新不良笔数', name: '担保方式', data: [0] });
        this.option6 = this.customerPerformanceService.returnOption2({ title: '担保方式-新不良金额', name: '担保方式', data: [0] });
        this.option7 = this.customerPerformanceService.returnOption3({ title: '新不良笔数', xAxisName: '年龄', yAxisName: '不良笔数', series: [] });
        this.option8 = this.customerPerformanceService.returnOption3({ title: '新不良金额', xAxisName: '年龄', yAxisName: '不良金额（万元）', series: [] });
    }
    BadnessPropertyDistributionComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.queryAll('CP');
                this.queryAll('HY');
                this.queryAll('DB');
                this.queryAll('NL');
            }
        }
    };
    BadnessPropertyDistributionComponent.prototype.outValue = function (event) {
        var objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.queryAll('CP');
        this.queryAll('HY');
        this.queryAll('DB');
        this.queryAll('NL');
    };
    BadnessPropertyDistributionComponent.prototype.queryAll = function (badnessType) {
        var _this = this;
        var params = {
            tellerId: this.commonHeader.userId,
            startDate: this.startDate,
            endDate: this.endDate,
            badnessType: badnessType
        };
        var configParam = {
            httpService: this.httpService,
            loadingFlag: true,
            messageFlag: false,
            inputParam: params,
            message: this.messageService,
            injectName: 'badnessDistributeQuery',
            loadingShow: this.loadingShow,
            messageInfo: '',
        };
        this.commonFunc.haddleData(configParam, function (bodyData) {
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];
            var data5 = [];
            var data6 = [];
            if (bodyData.disNumList && bodyData.disNumList.length > 0) {
                bodyData.disNumList.forEach(function (el) {
                    var dataObj = {};
                    dataObj['name'] = el.key;
                    dataObj['value'] = el.disNum;
                    data1.push(dataObj);
                    data3.push(el.key);
                    data4.push(el.disNum);
                });
            }
            if (bodyData.disAmtList && bodyData.disAmtList.length > 0) {
                bodyData.disAmtList.forEach(function (el) {
                    var dataObj = {};
                    dataObj['name'] = el.key;
                    dataObj['value'] = el.disAmt;
                    data2.push(dataObj);
                    data5.push(el.key);
                    data6.push(el.disAmt);
                });
            }
            switch (badnessType) {
                case 'CP':
                    if (data1 && data1.length != 0) {
                        data1.forEach(function (element) {
                            _this.productList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    if (data2 && data2.length != 0) {
                        data2.forEach(function (element) {
                            _this.productList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    console.log(data1);
                    _this.option1 = {
                        title: {
                            text: '行业-新不良笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data1,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    _this.option2 = {
                        title: {
                            text: '行业-新不良金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data2,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    break;
                case 'HY':
                    if (data1 && data1.length != 0) {
                        data1.forEach(function (element) {
                            _this.industryList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    if (data2 && data2.length != 0) {
                        data2.forEach(function (element) {
                            _this.industryList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    _this.option3 = {
                        title: {
                            text: '产品-新不良笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data1,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    _this.option4 = {
                        title: {
                            text: '产品-新不良金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data2,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    break;
                case 'DB':
                    if (data1 && data1.length != 0) {
                        data1.forEach(function (element) {
                            _this.guaranteeList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    if (data2 && data2.length != 0) {
                        data2.forEach(function (element) {
                            _this.guaranteeList.forEach(function (element2) {
                                if (element.name == element2.value) {
                                    element.name = element2.label;
                                }
                            });
                        });
                    }
                    _this.option5 = {
                        title: {
                            text: '担保方式-新不良笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data1,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    _this.option6 = {
                        title: {
                            text: '担保方式-新不良金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                data: data2,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c}'
                                    }
                                }
                            }
                        ]
                    };
                    break;
                case 'NL':
                    if (data3 && data3.length != 0) {
                        data3.forEach(function (element, i) {
                            _this.ageList.forEach(function (element2) {
                                if (element == element2.value) {
                                    data3[i] = element2.label;
                                }
                            });
                        });
                    }
                    if (data5 && data5.length != 0) {
                        data5.forEach(function (element, i) {
                            _this.ageList.forEach(function (element2) {
                                if (element == element2.value) {
                                    data5[i] = element2.label;
                                }
                            });
                        });
                    }
                    _this.option7 = {
                        title: {
                            text: '新不良笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        xAxis: {
                            name: '年龄',
                            type: 'category',
                            data: data3,
                            // axisLine: {
                            //     show: true,
                            //     symbol: ['none', 'arrow'],
                            //     symbolSize: [8, 8],
                            //     symbolOfffset: [0, 7]
                            // },
                            axisTick: {
                                show: false
                            }
                        },
                        yAxis: {
                            name: '不良笔数',
                            type: 'value',
                            nameGap: 20,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        series: [
                            {
                                data: data4,
                                type: 'bar',
                                legendHoverLink: true,
                                barWidth: '40',
                                barCategoryGap: '20%',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            position: 'top'
                                        }
                                    }
                                }
                            }
                        ]
                    };
                    _this.option8 = {
                        title: {
                            text: '新不良金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        xAxis: {
                            name: '年龄',
                            type: 'category',
                            data: data5,
                            // axisLine: {
                            //     show: true,
                            //     symbol: ['none', 'arrow'],
                            //     symbolSize: [8, 8],
                            //     symbolOfffset: [0, 7]
                            // },
                            axisTick: {
                                show: false
                            }
                        },
                        yAxis: {
                            name: '不良金额（万元）',
                            type: 'value',
                            nameGap: 20,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        series: [
                            {
                                data: data6,
                                type: 'bar',
                                legendHoverLink: true,
                                barWidth: '40',
                                barCategoryGap: '20%',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            position: 'top'
                                        }
                                    }
                                }
                            }
                        ]
                    };
                    break;
                default:
                    break;
            }
        });
    };
    BadnessPropertyDistributionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badness-propertyDistribution',
            template: __webpack_require__(/*! ./badness-propertyDistribution.component.html */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.html"),
            styles: [__webpack_require__(/*! ./badness-propertyDistribution.component.scss */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__["Customtools"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_customer_performance_service_customer_performance_service__WEBPACK_IMPORTED_MODULE_5__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], BadnessPropertyDistributionComponent);
    return BadnessPropertyDistributionComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 不良趋势 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'总不良'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"queryAll(1,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"queryAll(1,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"queryAll(2,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"queryAll(2,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'新不良发生情况'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"queryAll(3,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"queryAll(3,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"queryAll(4,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"queryAll(4,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'老不良清收情况'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex5 == 1}\" (click)=\"queryAll(5,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex5 == 2}\" (click)=\"queryAll(5,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option5\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <span [ngClass]=\"{'active':showIndex6 == 1}\" (click)=\"queryAll(6,1)\">日</span>\r\n                        <span [ngClass]=\"{'active':showIndex6 == 2}\" (click)=\"queryAll(6,2)\">月</span>\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- <tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9iYWRuZXNzL2JhZG5lc3MtdGVuZGN5Q2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGJhZG5lc3NcXGJhZG5lc3MtdGVuZGN5Q2hhbmdlXFxiYWRuZXNzLXRlbmRjeUNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBRzlCO0VBQ0ksY0FmZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9iYWRuZXNzL2JhZG5lc3MtdGVuZGN5Q2hhbmdlL2JhZG5lc3MtdGVuZGN5Q2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BadnessTendcyChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadnessTendcyChangeComponent", function() { return BadnessTendcyChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_pages_tzb_custom_customer_performance_service_customer_performance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BadnessTendcyChangeComponent = /** @class */ (function () {
    function BadnessTendcyChangeComponent(httpService, commfunc, commonFunc, messageService, customerPerformanceService, activatedRoute) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.commonFunc = commonFunc;
        this.messageService = messageService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.showIndex5 = 1;
        this.showIndex6 = 1;
        this.pTooltip1 = '我的不良金额：按日展示截止到当日总不良金额，按月展示自然月最后一日合计不良金额\n部门人均不良金额：按日展示截止到当日部门总不良金额/部门营销人数，按月展示自然月最后一日部门合计不良金额/部门营销人数\n我的不良率：按日展示每日不良率变化，按月展示每月最后一日不良率变化\n部门不良率：按日展示部门合计每日不良率变化，按月展示每月最后一日部门合计不良率变化';
        this.pTooltip2 = '我：按日展示每日我的不良金额在部门合计不良金额占比，按月展示每月最后一日我的不良金额在部门合计不良金额占比\n部门平均：1/部门总营销人数，计算部门内人均占比\n部门第一名：按日展示部门内不良金额最少的客户经理对应的不良金额在部门合计不良金额占比，按月同理';
        this.pTooltip3 = '我的不良金额：按日展示每日新发生不良金额，按月展示自然月内新发生不良金额\n部门人均不良金额：按日展示部门合计新发生不良金额/部门营销人数，按月展示部门自然月内新发生不良金额/部门营销人数\n我的不良笔数：按日展示每日新发生不良笔数变化，按月展示自然月内新发生不良笔数变化\n部门人均不良笔数：按日展示部门每日新发生不良笔数/部门营销人数，按月展示自然月内部门新发生不良笔数/部门营销人数';
        this.pTooltip4 = '我：按日展示每日我的新不良发生金额在部门合计新不良发生金额占比，按月展示自然月内我的新不良发生金额在部门合计新不良发生金额占比\n部门平均：1/部门总营销人数，计算部门内人均占比\n部门第一名：按日展示部门内每日新不良发生金额最少的客户经理对应的新不良金额在部门合计新不良发生金额占比，按月同理';
        this.pTooltip5 = '我的不良金额：按日展示每日不良清收金额，按月展示自然月内合计不良清收金额\n部门人均不良金额：按日展示部门合计不良清收金额/部门营销人数，按月展示部门自然月内合计不良清收金额/部门营销人数\n我的不良笔数：按日展示每日不良清收笔数变化，按月展示自然月内合计不良清收笔数变化\n部门人均不良笔数：按日展示部门每日不良清收笔数/部门营销人数，按月展示自然月内部门合计不良清收笔数/部门营销人数';
        this.pTooltip6 = '我：按日展示每日我的不良清收金额在部门合计不良清收金额占比，按月展示自然月内我的不良清收金额在部门合计不良清收金额占比\n部门平均：1/部门总营销人数，计算部门内人均占比\n部门第一名：按日展示部门内每日不良清收金额最多的客户经理对应的不良清收金额在部门合计不良清收金额占比，按月同理';
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '总不良率与金额', legend: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良率' }, { name: '部门不良率' }], xAxisData: [], yAxisName: '不良金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '不良金额在部门占比', legend: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '不良金额(万元)', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '新不良发生金额与笔数', legend: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良笔数' }, { name: '部门人均不良笔数' }], xAxisData: [], yAxisName: '占比(%)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '新不良发生金额在部门占比', legend: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '不良占比', series: [] });
        this.option5 = this.customerPerformanceService.returnOption({ title: '老不良清收金额与笔数', legend: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良笔数' }, { name: '部门人均不良笔数' }], xAxisData: [], yAxisName: '不良金额(万元)', series: [] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '老不良清收金额在部门占比', legend: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '不良占比', series: [] });
    }
    BadnessTendcyChangeComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.queryAll(0, 1);
            }
        }
    };
    BadnessTendcyChangeComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    BadnessTendcyChangeComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    BadnessTendcyChangeComponent.prototype.outValue = function (event) {
        var objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.queryAll(0, 1);
    };
    // 总不良率与金额
    // 默认查询事件
    BadnessTendcyChangeComponent.prototype.queryAll = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
        };
        var configParam = {
            httpService: this.httpService,
            loadingFlag: true,
            messageFlag: false,
            inputParam: params,
            message: this.messageService,
            injectName: 'badnessInfoQuery',
            loadingShow: this.loadingShow,
            messageInfo: '查询成功',
        };
        this.commonFunc.haddleData(configParam, function (bodyData) {
            if (bodyData) {
                var xData1_1 = []; // X轴日期--------------总不良率与金额
                var yData1_1 = []; // Y轴我的不良金额--------------总不良率与金额
                var yData2_1 = []; // Y轴部门人均不良金额--------------总不良率与金额
                var yData3_1 = []; // Y轴我的不良率--------------总不良率与金额
                var yData4_1 = []; // Y轴部门不良率--------------总不良率与金额
                var xData2_1 = []; // X轴日期--------------不良金额在部门占比
                var yData5_1 = []; // y轴我的不良金额占比--------------不良金额在部门占比
                var yData6_1 = []; // y轴部门平均不良金额占比-------------不良金额在部门占比
                var yData7_1 = []; // y轴部门第一名不良金额占比--------------不良金额在部门占比
                var xData3_1 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                var yData10_1 = [];
                var yData11_1 = [];
                var xData4_1 = [];
                var yData12_1 = [];
                var yData13_1 = [];
                var yData14_1 = [];
                var xData5_1 = [];
                var yData15_1 = [];
                var yData16_1 = [];
                var yData17_1 = [];
                var yData18_1 = [];
                var xData6_1 = [];
                var yData19_1 = [];
                var yData20_1 = [];
                var yData21_1 = [];
                if (bodyData.myBadnessList && bodyData.myBadnessList.length != 0) {
                    bodyData.myBadnessList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData1_1.push(el.hjblye);
                    });
                }
                ;
                if (bodyData.departBadnessList && bodyData.departBadnessList.length != 0) {
                    bodyData.departBadnessList.forEach(function (el) {
                        yData2_1.push(el.bjrjblje);
                    });
                }
                ;
                if (bodyData.myBadRateList && bodyData.myBadRateList.length != 0) {
                    bodyData.myBadRateList.forEach(function (el) {
                        yData3_1.push(Number(el.wdbll * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departBadAmountList && bodyData.departBadAmountList.length != 0) {
                    bodyData.departBadAmountList.forEach(function (el) {
                        yData4_1.push(Number(el.bjbll * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.myBadnessProportionList && bodyData.myBadnessProportionList.length != 0) {
                    bodyData.myBadnessProportionList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData5_1.push(Number(el.brljbljebjzb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departBadnessProportionList && bodyData.departBadnessProportionList.length != 0) {
                    bodyData.departBadnessProportionList.forEach(function (el) {
                        yData6_1.push(Number(el.bjrjbljezb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departFirstBadnessProportionList && bodyData.departFirstBadnessProportionList.length != 0) {
                    bodyData.departFirstBadnessProportionList.forEach(function (el) {
                        yData7_1.push(Number(el.bjbljedyzb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.myBadnessOccurList && bodyData.myBadnessOccurList.length != 0) {
                    bodyData.myBadnessOccurList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData8_1.push(el.xblye);
                    });
                }
                ;
                if (bodyData.departBadnessOccurList && bodyData.departBadnessOccurList.length != 0) {
                    bodyData.departBadnessOccurList.forEach(function (el) {
                        yData9_1.push(Number(el.bjrjxblfsje * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.myBadRateOccurCountList && bodyData.myBadRateOccurCountList.length != 0) {
                    bodyData.myBadRateOccurCountList.forEach(function (el) {
                        yData10_1.push(Number(el.xblbs * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departBadAmountOccurCountList && bodyData.departBadAmountOccurCountList.length != 0) {
                    bodyData.departBadAmountOccurCountList.forEach(function (el) {
                        yData11_1.push(Number(el.bjrjxblfshs * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.myBadnessOccurProportionList && bodyData.myBadnessOccurProportionList.length != 0) {
                    bodyData.myBadnessOccurProportionList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData12_1.push(Number(el.brxblfsjebjzb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departBadnessOccurProportionList && bodyData.departBadnessOccurProportionList.length != 0) {
                    bodyData.departBadnessOccurProportionList.forEach(function (el) {
                        yData13_1.push(Number(el.bjrjxblfsjezb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.departFirstBadnessOccurProportionList && bodyData.departFirstBadnessOccurProportionList.length != 0) {
                    bodyData.departFirstBadnessOccurProportionList.forEach(function (el) {
                        yData14_1.push(Number(el.bjrjxblfsjedyzb * 100).toFixed(2));
                    });
                }
                ;
                if (bodyData.myBadnessRecoverList && bodyData.myBadnessRecoverList.length != 0) {
                    bodyData.myBadnessRecoverList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData15_1.push(el.lblye);
                    });
                }
                ;
                if (bodyData.departBadnessRecoverList && bodyData.departBadnessRecoverList.length != 0) {
                    bodyData.departBadnessRecoverList.forEach(function (el) {
                        yData16_1.push(el.bjrjlblqsje);
                    });
                }
                ;
                if (bodyData.myBadRateRecoverCountList && bodyData.myBadRateRecoverCountList.length != 0) {
                    bodyData.myBadRateRecoverCountList.forEach(function (el) {
                        yData17_1.push(el.lblhsbs);
                    });
                }
                ;
                if (bodyData.departBadAmountRecoverCountList && bodyData.departBadAmountRecoverCountList.length != 0) {
                    bodyData.departBadAmountRecoverCountList.forEach(function (el) {
                        yData18_1.push(el.bjrjlblqshs);
                    });
                }
                ;
                if (bodyData.myBadnessRecoverProportionList && bodyData.myBadnessRecoverProportionList.length != 0) {
                    bodyData.myBadnessRecoverProportionList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData6_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData6_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData19_1.push(el.brlblhsjebjzb);
                    });
                }
                ;
                if (bodyData.departBadnessRecoverProportionList && bodyData.departBadnessRecoverProportionList.length != 0) {
                    bodyData.departBadnessRecoverProportionList.forEach(function (el) {
                        yData20_1.push(el.bjrjlblqsjezb);
                    });
                }
                ;
                if (bodyData.departFirstBadnessRecoverProportionList && bodyData.departFirstBadnessRecoverProportionList.length != 0) {
                    bodyData.departFirstBadnessRecoverProportionList.forEach(function (el) {
                        yData21_1.push(el.bjrjlblqsjedyzb);
                    });
                }
                ;
                if (ind == 1 || ind == 0) {
                    _this.echoParams(1, bodyData.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '总不良率与金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良率' }, { name: '部门不良率' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: [
                            {
                                name: '不良金额(万元)',
                                type: 'value',
                                nameGap: 20,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }, {
                                name: '不良率(%)',
                                type: 'value',
                                nameGap: 20,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisLabel: {
                                    formatter: '{value}%'
                                }
                            }
                        ],
                        series: [
                            {
                                name: '我的不良金额',
                                data: yData1_1,
                                type: 'line',
                                yAxisIndex: 0
                            },
                            {
                                name: '部门人均不良金额',
                                data: yData2_1,
                                type: 'line',
                                yAxisIndex: 0,
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        }
                                    }
                                }
                            },
                            {
                                name: '我的不良率',
                                data: yData3_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                            {
                                name: '部门不良率',
                                data: yData4_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                        ]
                    };
                }
                if (ind == 2 || ind == 0) {
                    _this.echoParams(2, bodyData.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '不良金额在部门占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: {
                            name: '不良占比',
                            type: 'value',
                            scale: true,
                            nameGap: 20,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        series: [
                            {
                                name: '我',
                                data: yData5_1,
                                type: 'line',
                            },
                            {
                                name: '部门平均',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData7_1,
                                type: 'line',
                            }
                        ]
                    };
                }
                if (ind == 3 || ind == 0) {
                    _this.echoParams(3, bodyData.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '新不良发生金额与笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良笔数' }, { name: '部门人均不良笔数' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: [
                            {
                                name: '不良金额(万元)',
                                type: 'value',
                                nameGap: 20,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }, {
                                name: '不良笔数',
                                type: 'value',
                                nameGap: 20,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }
                        ],
                        series: [
                            {
                                name: '我的不良金额',
                                data: yData8_1,
                                type: 'line',
                                yAxisIndex: 0
                            },
                            {
                                name: '部门人均不良金额',
                                data: yData9_1,
                                type: 'line',
                                yAxisIndex: 0,
                            },
                            {
                                name: '我的不良笔数',
                                data: yData10_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                            {
                                name: '部门人均不良笔数',
                                data: yData11_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                        ]
                    };
                }
                if (ind == 4 || ind == 0) {
                    _this.echoParams(4, bodyData.dmFlag);
                    _this.option4 = {
                        title: {
                            text: '新不良发生金额在部门占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: {
                            name: '不良占比',
                            type: 'value',
                            scale: true,
                            nameGap: 20,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        series: [
                            {
                                name: '我',
                                data: yData12_1,
                                type: 'line',
                            },
                            {
                                name: '部门平均',
                                data: yData13_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData14_1,
                                type: 'line',
                            }
                        ]
                    };
                }
                if (ind == 5 || ind == 0) {
                    _this.echoParams(5, bodyData.dmFlag);
                    _this.option5 = {
                        title: {
                            text: '老不良清收金额与笔数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我的不良金额' }, { name: '部门人均不良金额' }, { name: '我的不良笔数' }, { name: '部门人均不良笔数' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData5_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: [
                            {
                                name: '不良金额(万元)',
                                type: 'value',
                                nameGap: 20,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }, {
                                name: '不良笔数',
                                type: 'value',
                                nameGap: 20,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                            }
                        ],
                        series: [
                            {
                                name: '我的不良金额',
                                data: yData15_1,
                                type: 'line',
                                yAxisIndex: 0
                            },
                            {
                                name: '部门人均不良金额',
                                data: yData16_1,
                                type: 'line',
                                yAxisIndex: 0,
                            },
                            {
                                name: '我的不良笔数',
                                data: yData17_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                            {
                                name: '部门人均不良笔数',
                                data: yData18_1,
                                type: 'line',
                                yAxisIndex: 1
                            },
                        ]
                    };
                }
                if (ind == 6 || ind == 0) {
                    _this.echoParams(6, bodyData.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '老不良清收金额在部门占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            bottom: '5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData6_1,
                            axisLabel: {
                                rotate: 30
                            }
                        },
                        yAxis: {
                            name: '不良占比',
                            type: 'value',
                            scale: true,
                            nameGap: 20,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                        },
                        series: [
                            {
                                name: '我',
                                data: yData19_1,
                                type: 'line',
                            },
                            {
                                name: '部门平均',
                                data: yData20_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData21_1,
                                type: 'line',
                            }
                        ]
                    };
                }
            }
        });
    };
    BadnessTendcyChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badness-tendcyChange',
            template: __webpack_require__(/*! ./badness-tendcyChange.component.html */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.html"),
            styles: [__webpack_require__(/*! ./badness-tendcyChange.component.scss */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            app_pages_tzb_custom_customer_performance_service_customer_performance_service__WEBPACK_IMPORTED_MODULE_4__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], BadnessTendcyChangeComponent);
    return BadnessTendcyChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-1-1\" *ngIf=\"Property1\">\r\n        <p-dropdown [options]=\"indicatorList\" [(ngModel)]=\"indicator\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-1-1\" *ngIf=\"Property2\">\r\n        <p-dropdown [options]=\"subjectTypeList\" [(ngModel)]=\"subjectType\" (onChange)=\"subjectTypeChange()\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-1-1\" *ngIf=\"Property2\">\r\n        <p-dropdown [options]=\"targetTypeList\" [(ngModel)]=\"targetType\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-1-1\">\r\n        <p-dropdown [options]=\"queryConditionList\" [(ngModel)]=\"queryCondition\" (onChange)=\"queryConditionChange()\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-g\" *ngIf=\"Property3\">\r\n        <monthly-calendar id=\"calendar\" class=\"form-control\" [placeholder]=\"'请选择日期'\" [startTime]=\"startTime1\" (result)=\"chooseMonthMain1 = $event\" [range]=\"{before:50,after:50}\">\r\n        </monthly-calendar>\r\n        &nbsp;&nbsp;--&nbsp;&nbsp;\r\n        <monthly-calendar id=\"calendar\" class=\"form-control\" [placeholder]=\"'请选择日期'\" [startTime]=\"startTime2\" (result)=\"chooseMonthMain2 = $event\" [range]=\"{before:50,after:50}\">\r\n        </monthly-calendar>\r\n    </div>\r\n    <div class=\"ui-g-1 btn\">\r\n        <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  float: right; }\n  .btn button {\n    border-radius: 15px; }\n  .text {\n  position: relative; }\n  .text i {\n    color: #34CFE6;\n    padding: 5px; }\n  .text .box {\n    position: absolute; }\n  .ui-g-1-1 {\n  float: left;\n  padding: .5em; }\n  .ui-g-1-2 {\n  float: left;\n  padding: .5em; }\n  :host/deep/ .only-year-month-select .form-control {\n  width: 90px !important;\n  height: 22px !important;\n  line-height: 22px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9jb21tb24tbmF2L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGNvbW1vbi1uYXZcXGNvbW1vbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFJSSxZQUFZLEVBQUE7RUFKaEI7SUFFUSxtQkFBbUIsRUFBQTtFQUszQjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsY0FYVztJQVlYLFlBQVksRUFBQTtFQUpwQjtJQU9RLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUdqQjtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7RUFHakI7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9jb21tb24tbmF2L2NvbW1vbi1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4uYnRuIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIC5ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLWctMS0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxufVxyXG5cclxuLnVpLWctMS0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm9ubHkteWVhci1tb250aC1zZWxlY3QgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CommonNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonNavComponent", function() { return CommonNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonNavComponent = /** @class */ (function () {
    function CommonNavComponent(commfunc, router, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.router = router;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indicatorList = [];
        this.subjectTypeList = [];
        this.targetTypeList = [];
        this.queryConditionList = [
            { label: '近一月', value: 'recentOneMonth' },
            { label: '当前月', value: 'currentMonth' },
            { label: '上月', value: 'lastMonth' },
            { label: '近半年', value: 'recentHalfYear' },
            { label: '近一年', value: 'recentOneYear' },
            { label: '自定义', value: 'userDefined' }
        ];
        this.queryCondition = 'recentOneMonth';
        this.subjectType = '';
        this.targetType = '';
        this.indicator = '';
        this.Property3 = false;
        this.msgs = [];
    }
    CommonNavComponent.prototype.ngOnInit = function () {
        var objTemp = this.customerPerformanceService.judgeUrl();
        if (objTemp) {
            console.log(objTemp);
            this.Property1 = !objTemp.flag1;
            this.Property2 = objTemp.flag1;
            if (objTemp.arr1) {
                this.indicatorList = objTemp.arr1;
                this.indicator = 'indicators-progress';
            }
            if (objTemp.arr2) {
                this.subjectTypeList = objTemp.arr2;
            }
            if (objTemp.arr3) {
                this.targetTypeList = objTemp.arr3;
            }
            if (objTemp.value1) {
                this.subjectType = objTemp.value1;
            }
            if (objTemp.value2) {
                this.targetType = objTemp.value2;
            }
        }
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.Property3 == 'true') {
                this.Property3 = urlParams.Property3;
                this.chooseMonthMain1 = JSON.parse(urlParams.condition).startDate;
                this.chooseMonthMain2 = JSON.parse(urlParams.condition).endDate;
                this.startTime1 = JSON.parse(urlParams.condition).startDate;
                this.startTime2 = JSON.parse(urlParams.condition).endDate;
                this.queryCondition = JSON.parse(urlParams.condition).queryCondition;
            }
            else {
                this.queryCondition = urlParams.condition;
            }
            if (urlParams.flag == '1') {
                this.outValue.emit({ queryCondition: this.formQueryCondition().queryCondition, index: this.formQueryCondition().index });
            }
        }
    };
    CommonNavComponent.prototype.query = function () {
        var url = window.location.href;
        var routerInfo;
        if (this.Property1) {
            routerInfo = "" + this.indicator;
        }
        else {
            routerInfo = this.subjectType + "/" + this.targetType;
        }
        if (url.indexOf(routerInfo) != -1) {
            this.outValue.emit({ queryCondition: this.formQueryCondition().queryCondition, index: this.formQueryCondition().index });
        }
        else {
            if (routerInfo && routerInfo != '') {
                var routerLinkUrl = '/pages/tzb/custom/performance-analysis/' + routerInfo;
                var condition = void 0;
                if (this.queryCondition == 'userDefined') {
                    condition = JSON.stringify({ startDate: this.chooseMonthMain1, endDate: this.chooseMonthMain2, queryCondition: this.queryCondition });
                }
                else {
                    condition = this.queryCondition;
                }
                this.router.navigate([routerLinkUrl, { Property3: this.Property3, condition: condition, flag: 1 }]);
                // this.ngOnInit();
            }
        }
    };
    CommonNavComponent.prototype.formQueryCondition = function () {
        var index = 1, queryCondition = this.queryCondition;
        if (this.queryCondition == 'userDefined') {
            if (new Date(this.chooseMonthMain1) > new Date(this.chooseMonthMain2)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '开始日期不能大于或等于结束时间' });
                return;
            }
            index = 2;
            queryCondition = { startDate: this.chooseMonthMain1, endDate: this.chooseMonthMain2 };
        }
        return { queryCondition: queryCondition, index: index };
    };
    CommonNavComponent.prototype.subjectTypeChange = function () {
        var listObj = this.customerPerformanceService.returnListObj(this.subjectType);
        // console.log(listObj)
        if (listObj) {
            this.targetTypeList = listObj.list;
            this.targetType = listObj.value;
        }
    };
    CommonNavComponent.prototype.queryConditionChange = function () {
        if (this.queryCondition == 'userDefined') {
            this.Property3 = true;
        }
        else {
            this.Property3 = false;
            this.chooseMonthMain1 = '';
            this.chooseMonthMain2 = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonNavComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommonNavComponent.prototype, "outValue", void 0);
    CommonNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'common-nav',
            template: __webpack_require__(/*! ./common-nav.component.html */ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.html"),
            styles: [__webpack_require__(/*! ./common-nav.component.scss */ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CommonNavComponent);
    return CommonNavComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/customer-performance.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/customer-performance.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomerPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPerformanceComponent", function() { return CustomerPerformanceComponent; });
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

var CustomerPerformanceComponent = /** @class */ (function () {
    function CustomerPerformanceComponent() {
        this.title1 = '参考个人考核存款统计_对公与储蓄分离表加上外币存款。';
        this.title2 = '参考营销人员贷款结构表，仅为贷款数据，不含信用卡、贴现、垫款。';
        this.title3 = '参考FTP账户明细负债日报，FTP账户明细资产日报。';
        this.title4 = '参考授信业务风险运行监测报表，不含信用卡数据，同时增加笔数的统计。';
    }
    CustomerPerformanceComponent.prototype.ngOnInit = function () {
        var url = window.location.href;
        if (url.indexOf('/pages/tzb/custom/performance-analysis/indicators-task-query') != -1) {
            this.showClass = 1;
        }
        else if (url.indexOf('/pages/tzb/custom/performance-analysis/indicators-task-setting') != -1) {
            this.showClass = 2;
        }
        else {
            this.showClass = 0;
        }
        this.cars = [
            {
                title: '业绩分析',
                link: '/pages/tzb/custom/performance-analysis/performance-home-pages',
                flag: 0
            },
            {
                title: '任务查询',
                link: '/pages/tzb/custom/performance-analysis/indicators-task-query',
                flag: 1
            },
            {
                title: '任务设置',
                link: '/pages/tzb/custom/performance-analysis/indicators-task-setting',
                flag: 2
            }
        ];
    };
    CustomerPerformanceComponent.prototype.showHideBrief1 = function (index) {
        this.showClass = index;
    };
    CustomerPerformanceComponent.prototype.returnTop = function () {
        window.scrollTo(0, 0);
    };
    CustomerPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-performance',
            template: "\n        <div class=\"ui-g-12 boxShadow nav\">\n            <div class=\"ui-g-12 padding-0 top_items_box\">\n                <div class=\"ui-g-8 padding-0\">\n                    <span class=\"top_item\" *ngFor=\"let car of cars ; let i = index ;\" [ngClass]=\"{'active_item':showClass == car.flag}\" [routerLink]=\"[car.link]\"\n                    (click)=\"showHideBrief1(car.flag)\">\n                        <span>{{car.title}}</span>\n                    </span>\n                    <span style=\"margin-left: 15px;color: red;\">\u8BF7\u8BBE\u7F6E\u4EFB\u52A1\u76EE\u6807\u503C</span>\n                </div>\n                <div class=\"ui-g-4 padding-0 btn text-r\">\n                    \u4E1A\u7EE9\u5206\u6790\u53E3\u5F84\u8BF4\u660E:\n                    <span title=\"{{title1}}\">\n                        \u5B58\u6B3E\n                    </span>&nbsp;\n                    <span title=\"{{title2}}\">\n                        \u8D37\u6B3E\n                    </span>&nbsp;\n                    <span title=\"{{title3}}\">\n                        FTP\n                    </span>&nbsp;\n                    <span title=\"{{title4}}\">\n                        \u4E0D\u826F\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g-12 boxShadow\">\n            <router-outlet></router-outlet>\n        </div>\n        <div id=\"returnTop\" (click)=\"returnTop()\">\u8FD4\u56DE\u9876\u90E8</div>\n    ",
            styles: ["\n        #returnTop {\n            background: #ffcb05;\n            width: 40px;\n            height: 40px;\n            padding: 0.5em;\n            line-height: 20px;\n            text-align: center;\n            position: fixed;\n            bottom: 20px;\n            right: 0;\n            font-weight: 700;\n            border-radius:10px;\n            cursor: pointer;\n        }\n        .nav {\n            margin-bottom: 10px;\n        }\n        .top_items_box {\n            border-bottom: 2px solid #34CFE6;\n        }\n        .top_item {\n            cursor: pointer;\n            display: inline-block;\n            width: 80px;\n            height: 30px;\n            line-height: 30px;\n            text-align: center;\n            font-weight: bold;\n            font-size: 14px;\n            outline: 0;\n            border-top: 1px solid #e8e8e8;\n            border-left: 1px solid #e8e8e8;\n            border-right: 1px solid #e8e8e8;\n            margin-left: 12px;\n        }\n        .active_item {\n            margin-bottom: -2px;\n            border-top: 2px solid #34CFE6;\n            border-left: 2px solid #34CFE6;\n            border-right: 2px solid #34CFE6;\n            border-bottom: 2px solid #fafafa;\n            color: #171819;\n        }\n        .padding-0 {\n            padding: 0;\n        }\n        .text-r {\n            text-align: right;\n        }\n        .btn {\n            padding-right: 30px;\n        }\n        .btn span {\n            padding: 5px 10px;\n            border-radius: 15px;\n            border: 1px solid #dadada;\n            cursor: pointer;\n        }\n        .btn span:hover {\n            background: #34CFE6;\n            color: #fff;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerPerformanceComponent);
    return CustomerPerformanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/customer-performance.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/customer-performance.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomerPerformanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPerformanceModule", function() { return CustomerPerformanceModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_performance_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-performance.routing */ "./src/app/pages/tzb/custom/customer-performance/customer-performance.routing.ts");
/* harmony import */ var _customer_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-performance.component */ "./src/app/pages/tzb/custom/customer-performance/customer-performance.component.ts");
/* harmony import */ var _common_nav_common_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-nav/common-nav.component */ "./src/app/pages/tzb/custom/customer-performance/common-nav/common-nav.component.ts");
/* harmony import */ var _indicators_progress_indicators_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indicators-progress/indicators-progress.component */ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.ts");
/* harmony import */ var _indicators_analysis_indicators_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indicators-analysis/indicators-analysis.component */ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _deposit_deposit_tendcyChange_deposit_tendcyChange_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deposit/deposit-tendcyChange/deposit-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _performance_home_pages_performance_home_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./performance-home-pages/performance-home-pages.component */ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.ts");
/* harmony import */ var _loan_loan_tendcyChange_loan_tendcyChange_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loan/loan-tendcyChange/loan-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.ts");
/* harmony import */ var _loan_loan_smallClassProduct_loan_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loan/loan-smallClassProduct/loan-smallClassProduct.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.ts");
/* harmony import */ var _loan_loan_growthGuide_loan_growthGuide_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loan/loan-growthGuide/loan-growthGuide.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.ts");
/* harmony import */ var _loan_loan_increasementalTendency_loan_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loan/loan-increasementalTendency/loan-increasementalTendency.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.ts");
/* harmony import */ var _loan_loan_productCategory_loan_productCategory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loan/loan-productCategory/loan-productCategory.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _loan_loan_industryInvestment_loan_industryInvestment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loan/loan-industryInvestment/loan-industryInvestment.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_badness_badness_propertyDistribution_badness_propertyDistribution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_badness_badness_tendcyChange_badness_tendcyChange_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.ts");
/* harmony import */ var _ftp_ftp_afterDiscount_ftp_afterDiscount_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ftp/ftp-afterDiscount/ftp-afterDiscount.component */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.ts");
/* harmony import */ var _ftp_ftp_beforeDiscount_ftp_beforeDiscount_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ftp/ftp-beforeDiscount/ftp-beforeDiscount.component */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.ts");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_growthGuide_deposit_growthGuide_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_increasementalTendency_deposit_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_industryInvestment_deposit_industryInvestment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_productCategory_deposit_productCategory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_smallClassProduct_deposit_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import { AchievementTaskModule } from 'app/pages/tzb/custom/achievement-task/achievement-task.module';
// import { TzbCustomModule } from 'app/pages/tzb/custom/custom.module';
var CustomerPerformanceModule = /** @class */ (function () {
    function CustomerPerformanceModule() {
    }
    CustomerPerformanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                // AchievementTaskModule,
                _customer_performance_routing__WEBPACK_IMPORTED_MODULE_4__["CustomerPerformanceRouting"],
            ],
            declarations: [
                _customer_performance_component__WEBPACK_IMPORTED_MODULE_5__["CustomerPerformanceComponent"],
                _common_nav_common_nav_component__WEBPACK_IMPORTED_MODULE_6__["CommonNavComponent"],
                _indicators_progress_indicators_progress_component__WEBPACK_IMPORTED_MODULE_7__["IndicatorsProgressComponent"],
                _indicators_analysis_indicators_analysis_component__WEBPACK_IMPORTED_MODULE_8__["IndicatorsAnalysisComponent"],
                _deposit_deposit_tendcyChange_deposit_tendcyChange_component__WEBPACK_IMPORTED_MODULE_10__["DepositTendcyChangeComponent"],
                _performance_home_pages_performance_home_pages_component__WEBPACK_IMPORTED_MODULE_12__["PerformanceHomePagesComponent"],
                _loan_loan_growthGuide_loan_growthGuide_component__WEBPACK_IMPORTED_MODULE_15__["LoanGrowthGuideComponent"],
                _loan_loan_increasementalTendency_loan_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_16__["LoanIncreasementalTendencyComponent"],
                _loan_loan_productCategory_loan_productCategory_component__WEBPACK_IMPORTED_MODULE_17__["LoanProductCategoryComponent"],
                _loan_loan_industryInvestment_loan_industryInvestment_component__WEBPACK_IMPORTED_MODULE_19__["LoanIndustryInvestmentComponent"],
                _loan_loan_smallClassProduct_loan_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_14__["LoanSmallClassProductComponent"],
                _loan_loan_tendcyChange_loan_tendcyChange_component__WEBPACK_IMPORTED_MODULE_13__["LoanTendcyChangeComponent"],
                app_pages_tzb_custom_customer_performance_badness_badness_propertyDistribution_badness_propertyDistribution_component__WEBPACK_IMPORTED_MODULE_20__["BadnessPropertyDistributionComponent"],
                app_pages_tzb_custom_customer_performance_badness_badness_tendcyChange_badness_tendcyChange_component__WEBPACK_IMPORTED_MODULE_21__["BadnessTendcyChangeComponent"],
                _ftp_ftp_beforeDiscount_ftp_beforeDiscount_component__WEBPACK_IMPORTED_MODULE_23__["FtpBeforeDiscountComponent"],
                _ftp_ftp_afterDiscount_ftp_afterDiscount_component__WEBPACK_IMPORTED_MODULE_22__["FtpAfterDiscountComponent"],
                app_pages_tzb_custom_customer_performance_deposit_deposit_growthGuide_deposit_growthGuide_component__WEBPACK_IMPORTED_MODULE_26__["DepositGrowthGuideComponent"],
                app_pages_tzb_custom_customer_performance_deposit_deposit_increasementalTendency_deposit_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_27__["DepositIncreasementalTendencyComponent"],
                app_pages_tzb_custom_customer_performance_deposit_deposit_industryInvestment_deposit_industryInvestment_component__WEBPACK_IMPORTED_MODULE_28__["DepositIndustryInvestmentComponent"],
                app_pages_tzb_custom_customer_performance_deposit_deposit_productCategory_deposit_productCategory_component__WEBPACK_IMPORTED_MODULE_29__["DepositProductCategoryComponent"],
                app_pages_tzb_custom_customer_performance_deposit_deposit_smallClassProduct_deposit_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_30__["DepositSmallClassProductComponent"]
            ],
            exports: [
                _common_nav_common_nav_component__WEBPACK_IMPORTED_MODULE_6__["CommonNavComponent"]
            ],
            providers: [
                app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_9__["CustomerPerformanceHttpService"],
                _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_11__["CustomerPerformanceService"],
                app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_18__["Commfunc"],
                app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_24__["Customtools"],
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_25__["MessageService"]
            ]
        })
    ], CustomerPerformanceModule);
    return CustomerPerformanceModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/customer-performance.routing.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/customer-performance.routing.ts ***!
  \***************************************************************************************/
/*! exports provided: routes, CustomerPerformanceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPerformanceRouting", function() { return CustomerPerformanceRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_performance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-performance.component */ "./src/app/pages/tzb/custom/customer-performance/customer-performance.component.ts");
/* harmony import */ var _indicators_progress_indicators_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicators-progress/indicators-progress.component */ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.ts");
/* harmony import */ var _indicators_analysis_indicators_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicators-analysis/indicators-analysis.component */ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.ts");
/* harmony import */ var _performance_home_pages_performance_home_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance-home-pages/performance-home-pages.component */ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.ts");
/* harmony import */ var _loan_loan_tendcyChange_loan_tendcyChange_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loan/loan-tendcyChange/loan-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.ts");
/* harmony import */ var _loan_loan_productCategory_loan_productCategory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan/loan-productCategory/loan-productCategory.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.ts");
/* harmony import */ var _loan_loan_smallClassProduct_loan_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan/loan-smallClassProduct/loan-smallClassProduct.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.ts");
/* harmony import */ var _loan_loan_industryInvestment_loan_industryInvestment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loan/loan-industryInvestment/loan-industryInvestment.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.ts");
/* harmony import */ var _loan_loan_increasementalTendency_loan_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loan/loan-increasementalTendency/loan-increasementalTendency.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.ts");
/* harmony import */ var _loan_loan_growthGuide_loan_growthGuide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loan/loan-growthGuide/loan-growthGuide.component */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_badness_badness_propertyDistribution_badness_propertyDistribution_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-propertyDistribution/badness-propertyDistribution.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_badness_badness_tendcyChange_badness_tendcyChange_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/badness/badness-tendcyChange/badness-tendcyChange.component.ts");
/* harmony import */ var _ftp_ftp_afterDiscount_ftp_afterDiscount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ftp/ftp-afterDiscount/ftp-afterDiscount.component */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.ts");
/* harmony import */ var _ftp_ftp_beforeDiscount_ftp_beforeDiscount_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ftp/ftp-beforeDiscount/ftp-beforeDiscount.component */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_tendcyChange_deposit_tendcyChange_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_growthGuide_deposit_growthGuide_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_increasementalTendency_deposit_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_industryInvestment_deposit_industryInvestment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_productCategory_deposit_productCategory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.ts");
/* harmony import */ var app_pages_tzb_custom_customer_performance_deposit_deposit_smallClassProduct_deposit_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_task_query_task_query_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/task-query/task-query.component */ "./src/app/pages/tzb/custom/achievement-task/task-query/task-query.component.ts");






















var routes = [
    {
        path: '', component: _customer_performance_component__WEBPACK_IMPORTED_MODULE_1__["CustomerPerformanceComponent"], children: [
            { path: '', redirectTo: 'performance-home-pages', pathMatch: 'full' },
            { path: 'performance-home-pages', component: _performance_home_pages_performance_home_pages_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceHomePagesComponent"] },
            { path: 'indicators-progress', component: _indicators_progress_indicators_progress_component__WEBPACK_IMPORTED_MODULE_2__["IndicatorsProgressComponent"] },
            { path: 'indicators-analysis', component: _indicators_analysis_indicators_analysis_component__WEBPACK_IMPORTED_MODULE_3__["IndicatorsAnalysisComponent"] },
            { path: 'deposit/tendcyChange', component: app_pages_tzb_custom_customer_performance_deposit_deposit_tendcyChange_deposit_tendcyChange_component__WEBPACK_IMPORTED_MODULE_15__["DepositTendcyChangeComponent"] },
            { path: 'deposit/productCategory', component: app_pages_tzb_custom_customer_performance_deposit_deposit_productCategory_deposit_productCategory_component__WEBPACK_IMPORTED_MODULE_19__["DepositProductCategoryComponent"] },
            { path: 'deposit/smallClassProduct', component: app_pages_tzb_custom_customer_performance_deposit_deposit_smallClassProduct_deposit_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_20__["DepositSmallClassProductComponent"] },
            { path: 'deposit/savingNature', component: app_pages_tzb_custom_customer_performance_deposit_deposit_industryInvestment_deposit_industryInvestment_component__WEBPACK_IMPORTED_MODULE_18__["DepositIndustryInvestmentComponent"] },
            { path: 'deposit/increasementalTendency', component: app_pages_tzb_custom_customer_performance_deposit_deposit_increasementalTendency_deposit_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_17__["DepositIncreasementalTendencyComponent"] },
            { path: 'deposit/growthGuide', component: app_pages_tzb_custom_customer_performance_deposit_deposit_growthGuide_deposit_growthGuide_component__WEBPACK_IMPORTED_MODULE_16__["DepositGrowthGuideComponent"] },
            { path: 'loan/tendcyChange', component: _loan_loan_tendcyChange_loan_tendcyChange_component__WEBPACK_IMPORTED_MODULE_5__["LoanTendcyChangeComponent"] },
            { path: 'loan/productCategory', component: _loan_loan_productCategory_loan_productCategory_component__WEBPACK_IMPORTED_MODULE_6__["LoanProductCategoryComponent"] },
            { path: 'loan/smallClassProduct', component: _loan_loan_smallClassProduct_loan_smallClassProduct_component__WEBPACK_IMPORTED_MODULE_7__["LoanSmallClassProductComponent"] },
            { path: 'loan/industryInvestment', component: _loan_loan_industryInvestment_loan_industryInvestment_component__WEBPACK_IMPORTED_MODULE_8__["LoanIndustryInvestmentComponent"] },
            { path: 'loan/increasementalTendency', component: _loan_loan_increasementalTendency_loan_increasementalTendency_component__WEBPACK_IMPORTED_MODULE_9__["LoanIncreasementalTendencyComponent"] },
            { path: 'loan/growthGuide', component: _loan_loan_growthGuide_loan_growthGuide_component__WEBPACK_IMPORTED_MODULE_10__["LoanGrowthGuideComponent"] },
            { path: 'ftp/ftpBeforeDiscount', component: _ftp_ftp_beforeDiscount_ftp_beforeDiscount_component__WEBPACK_IMPORTED_MODULE_14__["FtpBeforeDiscountComponent"] },
            { path: 'ftp/ftpAfterDiscount', component: _ftp_ftp_afterDiscount_ftp_afterDiscount_component__WEBPACK_IMPORTED_MODULE_13__["FtpAfterDiscountComponent"] },
            { path: 'badness/tendcyChange', component: app_pages_tzb_custom_customer_performance_badness_badness_tendcyChange_badness_tendcyChange_component__WEBPACK_IMPORTED_MODULE_12__["BadnessTendcyChangeComponent"] },
            { path: 'badness/propertyDistribution', component: app_pages_tzb_custom_customer_performance_badness_badness_propertyDistribution_badness_propertyDistribution_component__WEBPACK_IMPORTED_MODULE_11__["BadnessPropertyDistributionComponent"] },
            { path: 'indicators-task-query', component: app_pages_tzb_custom_achievement_task_task_query_task_query_component__WEBPACK_IMPORTED_MODULE_21__["TaskQueryComponent"] },
            { path: 'indicators-task-setting', loadChildren: '../achievement-task/task-setting/task-setting.module#TaskSettingModule' } //任务设置
        ]
    }
];
var CustomerPerformanceRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款成长指引 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-1\">\r\n                单客户起点金额:\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansGrowingGuideAmountQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansGrowingGuideAmountQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansGrowingGuideAmountQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansGrowingGuideAmountQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"loansGrowingGuideAmountQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"loansGrowingGuideAmountQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div>\r\n                <div class=\"content2 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"loansIncrementQuery(4,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"loansIncrementQuery(4,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" pTooltip=\"贷款增量趋势-客均贷款\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div> -->\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtZ3Jvd3RoR3VpZGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcZGVwb3NpdFxcZGVwb3NpdC1ncm93dGhHdWlkZVxcZGVwb3NpdC1ncm93dGhHdWlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtZ3Jvd3RoR3VpZGUvZGVwb3NpdC1ncm93dGhHdWlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNpY0NvbG9yOiMzNENGRTYgIWRlZmF1bHQ7XHJcbi5yb3cge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DepositGrowthGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositGrowthGuideComponent", function() { return DepositGrowthGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositGrowthGuideComponent = /** @class */ (function () {
    function DepositGrowthGuideComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.msgs = [];
        this.dwFlag = '1'; // 档位
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u5B58\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5B58\u6B3E\u65E5\u5747 \n \u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u5B58\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406 \n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u5B58\u6B3E\u4F59\u989D\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5B58\u6B3E\u65E5\u5747\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u5B58\u6B3E\u65E5\u5747\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u5B58\u6B3E\u4F59\u989D\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A1/\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u6570\uFF0C\u8BA1\u7B97\u540C\u6708\u5165\u5C97\u4EBA\u5747\u5360\u6BD4";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u622A\u6B62\u5230\u6BCF\u65E5\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u591A\u7684\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u540C\u7406\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '同月入岗位存款金额', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '同月入岗存款金额占比', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '同月入岗存款客户数', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    DepositGrowthGuideComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.loansGrowingGuideAmountQuery(0, 1);
            }
        }
        // this.loansGrowingGuideProportionQuery(2, 1);
        // this.loansGrowingGuideCustQuery(3, 1);
    };
    DepositGrowthGuideComponent.prototype.query = function () {
        this.loansGrowingGuideAmountQuery(0, 1);
    };
    DepositGrowthGuideComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansGrowingGuideAmountQuery(0, 1);
    };
    DepositGrowthGuideComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositGrowthGuideComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    DepositGrowthGuideComponent.prototype.loansGrowingGuideAmountQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            dwFlag: this.dwFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.depositGrowingGuideQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                if (data.myDepositAmtList && data.myDepositAmtList.length != 0 && data.sameMonthDepositAvgAmtList && data.sameMonthDepositAvgAmtList.length != 0 && data.sameMonthDepositFristAmtList && data.sameMonthDepositFristAmtList.length != 0) {
                    data.myDepositAmtList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData1_1.push(element.depositAmt);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData1_1.push(element.depositAmt);
                        }
                    });
                    data.sameMonthDepositAvgAmtList.forEach(function (element) {
                        yData2_1.push(element.avgDepositAmt);
                    });
                    data.sameMonthDepositFristAmtList.forEach(function (element) {
                        yData3_1.push(element.fristDepositAmt);
                    });
                }
                if (data.myDepositAmtPtList && data.myDepositAmtPtList.length != 0 && data.sameMonthDepositAvgAmtPtList && data.sameMonthDepositAvgAmtPtList.length != 0 && data.sameMonthDepositFristAmtPtList && data.sameMonthDepositFristAmtPtList.length != 0) {
                    data.myDepositAmtPtList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData4_1.push(element.depositAmtPt);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData4_1.push(element.depositAmtPt);
                        }
                    });
                    data.sameMonthDepositAvgAmtPtList.forEach(function (element) {
                        yData5_1.push(Number(element.depDepositAmtPt * 100).toFixed(2));
                    });
                    data.sameMonthDepositFristAmtPtList.forEach(function (element) {
                        yData6_1.push(Number(element.depOneDepositAmtPt * 100).toFixed(2));
                    });
                }
                if (data.myDepositCustList && data.myDepositCustList.length != 0 && data.sameMonthDepositAvgCustList && data.sameMonthDepositAvgCustList.length != 0 && data.sameMonthDepositFristCustList && data.sameMonthDepositFristCustList.length != 0) {
                    data.myDepositCustList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData7_1.push(element.depositCust);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData7_1.push(element.depositCust);
                        }
                    });
                    data.sameMonthDepositAvgCustList.forEach(function (element) {
                        yData8_1.push(element.depDdepositCust);
                    });
                    data.sameMonthDepositFristCustList.forEach(function (element) {
                        yData9_1.push(element.fristDepositCust);
                    });
                }
                if (ind == '0' || ind == '1') {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '同月入岗位存款金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '同月入岗平均' }, { name: '同月入岗第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData1_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData2_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗第一名',
                                data: yData3_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        }, label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData3_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '2') {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '同月入岗存款金额占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '同月入岗平均' }, { name: '同月入岗第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData4_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData5_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData6_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '3') {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '同月入岗存款客户数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '同月入岗平均' }, { name: '同月入岗第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData7_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗平均',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData8_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入岗第一名',
                                data: yData9_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData9_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    DepositGrowthGuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-growthGuide',
            template: __webpack_require__(/*! ./deposit-growthGuide.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.html"),
            styles: [__webpack_require__(/*! ./deposit-growthGuide.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-growthGuide/deposit-growthGuide.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositGrowthGuideComponent);
    return DepositGrowthGuideComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款增量趋势 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-1\">\r\n                单客户起点金额:\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"depositIncrementQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"depositIncrementQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"depositIncrementQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"depositIncrementQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"depositIncrementQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"depositIncrementQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div>\r\n                <div class=\"content2 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"depositIncrementQuery(4,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"depositIncrementQuery(4,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" pTooltip=\"贷款增量趋势-客均贷款\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div> -->\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtaW5jcmVhc2VtZW50YWxUZW5kZW5jeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbWVyLXBlcmZvcm1hbmNlXFxkZXBvc2l0XFxkZXBvc2l0LWluY3JlYXNlbWVudGFsVGVuZGVuY3lcXGRlcG9zaXQtaW5jcmVhc2VtZW50YWxUZW5kZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtaW5jcmVhc2VtZW50YWxUZW5kZW5jeS9kZXBvc2l0LWluY3JlYXNlbWVudGFsVGVuZGVuY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4ucm93IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGJhc2ljQ29sb3I7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: DepositIncreasementalTendencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositIncreasementalTendencyComponent", function() { return DepositIncreasementalTendencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositIncreasementalTendencyComponent = /** @class */ (function () {
    function DepositIncreasementalTendencyComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.msgs = [];
        this.dwFlag = '1';
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u622A\u6B62\u5230\u5F53\u65E5\u6240\u5E26\u6765\u7684\u5B58\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u7684\u5B58\u6B3E\u65E5\u5747\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u5E26\u6765\u7684\u5B58\u6B3E\u4F59\u989D/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u622A\u6B62\u5230\u5F53\u65E5\u6240\u5E26\u6765\u7684\u5B58\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u5B58\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u7684\u5B58\u6B3E\u65E5\u5747\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u5B58\u6B3E\u65E5\u5747\u5360\u6BD4\n\u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u4E2D\u65B0\u589E\u5BA2\u6237\u5B58\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u5B58\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u5B58\u6B3E\u4F59\u989D\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u65B0\u589E\u5B58\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5185\u65B0\u589E\u5B58\u6B3E\u7684\u5BA2\u6237\u6570\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u5185\u5408\u8BA1\u622A\u6B62\u5230\u6BCF\u65E5\u65B0\u589E\u5B58\u6B3E\u5BA2\u6237\u6570/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '新增客户存款金额', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '新增客户存款金额占比', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '增量客户数', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    DepositIncreasementalTendencyComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.depositIncrementQuery(0, 1);
            }
        }
    };
    DepositIncreasementalTendencyComponent.prototype.query = function () {
        this.depositIncrementQuery(0, 1);
    };
    DepositIncreasementalTendencyComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.depositIncrementQuery(0, 1);
    };
    DepositIncreasementalTendencyComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositIncreasementalTendencyComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    DepositIncreasementalTendencyComponent.prototype.depositIncrementQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            dwFlag: this.dwFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.depositIncrementQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                if (data.myDepositList && data.myDepositList.length != 0 && data.departmentDepositList && data.departmentDepositList.length != 0 && data.brachDepositList && data.brachDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData1_1.push(element.depositAmt);
                        }
                        else if (_this.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData1_1.push(element.depositAmt);
                        }
                    });
                    data.departmentDepositList.forEach(function (element) {
                        yData2_1.push(element.depDepositAmt);
                    });
                    data.brachDepositList.forEach(function (element) {
                        yData3_1.push(element.brachDepositAmt);
                    });
                }
                if (data.myDepositProList && data.myDepositProList.length != 0 && data.departmentDepositProList && data.departmentDepositProList.length != 0 && data.departmentOneDepositProList && data.departmentOneDepositProList.length != 0) {
                    data.myDepositProList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData4_1.push(Number(element.depositAmtPt * 100).toFixed(2));
                        }
                        else if (_this.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData4_1.push(Number(element.depositAmtPt * 100).toFixed(2));
                        }
                    });
                    data.departmentDepositProList.forEach(function (element) {
                        yData5_1.push(Number(element.depDepositAmtPt * 100).toFixed(2));
                    });
                    data.departmentOneDepositProList.forEach(function (element) {
                        yData6_1.push(Number(element.depOneDepositAmtPt * 100).toFixed(2));
                    });
                }
                if (data.myCustList && data.myCustList.length != 0 && data.departmentCustList && data.departmentCustList.length != 0 && data.brachCustList && data.brachCustList.length != 0) {
                    data.myCustList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData7_1.push(element.depositCust);
                        }
                        else if (_this.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData7_1.push(element.depositCust);
                        }
                    });
                    data.departmentCustList.forEach(function (element) {
                        yData8_1.push(element.depDdepositCust);
                    });
                    data.brachCustList.forEach(function (element) {
                        yData9_1.push(element.brachDepositCust);
                    });
                }
                if (ind == '0' || ind == '1') {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '新增客户存款金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData1_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData2_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '2') {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '新增客户存款金额占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData4_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData5_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData6_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '3') {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '新增客户数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData7_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData8_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    DepositIncreasementalTendencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-increasementalTendency',
            template: __webpack_require__(/*! ./deposit-increasementalTendency.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.html"),
            styles: [__webpack_require__(/*! ./deposit-increasementalTendency.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-increasementalTendency/deposit-increasementalTendency.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositIncreasementalTendencyComponent);
    return DepositIncreasementalTendencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款储蓄性质 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-1\">\r\n                单客户起点金额:\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"depositNatureTrendQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"depositNatureTrendQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"depositNatureTrendQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"depositNatureTrendQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"depositNatureTrendQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"depositNatureTrendQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtaW5kdXN0cnlJbnZlc3RtZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGRlcG9zaXRcXGRlcG9zaXQtaW5kdXN0cnlJbnZlc3RtZW50XFxkZXBvc2l0LWluZHVzdHJ5SW52ZXN0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtaW5kdXN0cnlJbnZlc3RtZW50L2RlcG9zaXQtaW5kdXN0cnlJbnZlc3RtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DepositIndustryInvestmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositIndustryInvestmentComponent", function() { return DepositIndustryInvestmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositIndustryInvestmentComponent = /** @class */ (function () {
    function DepositIndustryInvestmentComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.dwFlag = '1';
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '我：按日展示自然月纯储蓄存款客户截止到当日所带来的存款余额，按月展示自然月纯储蓄存款客户的存款日均\n部门平均：按日展示每日部门合计纯储蓄存款客户带来的存款余额/部门总营销人数，按月则日均同理';
        this.pTooltip2 = '我：按日展示自然月纯储蓄存款客户截止到当日所带来的存款余额在部门合计纯储蓄存款客户存款余额占比，按月展示自然月纯储蓄存款客户的存款日均在部门合计纯储蓄存款客户存款日均占比\n部门平均：1/部门总营销人数，计算部门内人均占比\n部门第一名：按日展示部门中纯储蓄存款客户存款余额最高的客户经理对应的存款余额在部门合计纯储蓄存款客户存款余额中占比，按月则日均同理';
        this.pTooltip3 = '我：按日展示自然月截止到每日纯储蓄存款客户数，按月展示自然月内纯储蓄存款持有的客户数\n部门平均：按日展示部门内合计截止到每日纯储蓄存款客户数/部门总营销人数，按月同理';
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '纯储蓄客户存款金额', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '纯储蓄客户存款金额占比', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '纯储蓄客户数', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    DepositIndustryInvestmentComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.depositNatureTrendQuery(0, 1);
            }
        }
    };
    DepositIndustryInvestmentComponent.prototype.query = function () {
        this.depositNatureTrendQuery(0, 1);
    };
    DepositIndustryInvestmentComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.depositNatureTrendQuery(0, 1);
    };
    DepositIndustryInvestmentComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositIndustryInvestmentComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    DepositIndustryInvestmentComponent.prototype.depositNatureTrendQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            dwFlag: this.dwFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.depositNatureTrendQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                if (data.myDepositList && data.myDepositList.length != 0 && data.departmentDepositList && data.departmentDepositList.length != 0 && data.brachDepositList && data.brachDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData1_1.push(element.depositAmt);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData1_1.push(element.depositAmt);
                        }
                    });
                    data.departmentDepositList.forEach(function (element) {
                        yData2_1.push(element.depDepositAmt);
                    });
                    data.brachDepositList.forEach(function (element) {
                        yData3_1.push(element.brachDepositAmt);
                    });
                }
                if (data.myDepositProList && data.myDepositProList.length != 0 && data.departmentDepositProList && data.departmentDepositProList.length != 0 && data.departmentOneDepositProList && data.departmentOneDepositProList.length != 0) {
                    data.myDepositProList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData4_1.push(element.depositAmtPt);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData4_1.push(element.depositAmtPt);
                        }
                    });
                    data.departmentDepositProList.forEach(function (element) {
                        yData5_1.push(Number(element.depDepositAmtPt * 100).toFixed(2));
                    });
                    data.departmentOneDepositProList.forEach(function (element) {
                        yData6_1.push(Number(element.depOneDepositAmtPt * 100).toFixed(2));
                    });
                }
                if (data.myCustList && data.myCustList.length != 0 && data.departmentCustList && data.departmentCustList.length != 0 && data.brachCustList && data.brachCustList.length != 0) {
                    data.myCustList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData7_1.push(element.depositCust);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData7_1.push(element.depositCust);
                        }
                    });
                    data.departmentCustList.forEach(function (element) {
                        yData8_1.push(element.depDdepositCust);
                    });
                    data.brachCustList.forEach(function (element) {
                        yData9_1.push(element.brachDepositCust);
                    });
                }
                if (ind == '0' || ind == '1') {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '纯储蓄客户存款金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData1_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData2_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '2') {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '纯储蓄客户存款金额占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            // scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData4_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData5_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData6_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '3') {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '纯储蓄客户数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData7_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData8_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    DepositIndustryInvestmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-industryInvestment',
            template: __webpack_require__(/*! ./deposit-industryInvestment.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.html"),
            styles: [__webpack_require__(/*! ./deposit-industryInvestment.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-industryInvestment/deposit-industryInvestment.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositIndustryInvestmentComponent);
    return DepositIndustryInvestmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款产品类型 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label appValidation>产品类别:</label>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"bigProductList\" [(ngModel)]=\"productBigId\" (onChange)=\"changeBigType()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"smallProductList\" [(ngModel)]=\"productSmallId\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 ui-g-offset-2\">\r\n                <label appValidation>单客户起点金额:</label>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"toSmalProduct()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"depositProductTrendQuery(1,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"depositProductTrendQuery(1,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div echarts [options]=\"option4\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div echarts [options]=\"option5\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"depositProductTrendQuery(2,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"depositProductTrendQuery(2,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.btn {\n  float: right; }\n\n.btn button {\n    border-radius: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtcHJvZHVjdENhdGVnb3J5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGRlcG9zaXRcXGRlcG9zaXQtcHJvZHVjdENhdGVnb3J5XFxkZXBvc2l0LXByb2R1Y3RDYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW1CbkI7RUFJSSxZQUFZLEVBQUE7O0FBSmhCO0lBRVEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2RlcG9zaXQvZGVwb3NpdC1wcm9kdWN0Q2F0ZWdvcnkvZGVwb3NpdC1wcm9kdWN0Q2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4ucm93IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGJhc2ljQ29sb3I7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DepositProductCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositProductCategoryComponent", function() { return DepositProductCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositProductCategoryComponent = /** @class */ (function () {
    function DepositProductCategoryComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, router, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.dwFlag = '1';
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '截止到所选时间的最后一日，我的存款余额在各产品的余额与占比';
        this.pTooltip2 = '截止到所选时间的最后一日，部门合计存款余额在各产品余额与占比';
        this.pTooltip3 = '按日展示我的各产品每日存款余额的变化趋势，按月展示自然月内各产品存款日均变化趋势';
        this.pTooltip4 = "\u622A\u6B62\u5230\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u65E5\uFF0C\u6211\u7684\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\u5728\u5404\u4EA7\u54C1\u7684\u5BA2\u6237\u6570\u4E0E\u5360\u6BD4\n\u6CE8\uFF1A\u5141\u8BB8\u5355\u4E2A\u5BA2\u6237\u53EF\u540C\u65F6\u6301\u6709\u591A\u4E2A\u4EA7\u54C1\uFF0C\u6545\u5408\u8BA1\u5360\u6BD4\u6709\u53EF\u80FD\u8D85\u8FC7100%";
        this.pTooltip5 = "\u622A\u6B62\u5230\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u65E5\uFF0C\u90E8\u95E8\u5408\u8BA1\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\u5728\u5404\u4EA7\u54C1\u7684\u5BA2\u6237\u6570\u4E0E\u5360\u6BD4\n\u6CE8\uFF1A\u5141\u8BB8\u5355\u4E2A\u5BA2\u6237\u53EF\u540C\u65F6\u6301\u6709\u591A\u4E2A\u4EA7\u54C1\uFF0C\u6545\u5408\u8BA1\u5360\u6BD4\u6709\u53EF\u80FD\u8D85\u8FC7100%";
        this.pTooltip6 = '按日展示我的各产品每日持有存款客户数的变化趋势，按月展示各产品在自然月持有存款产品的客户数变化趋势';
        this.moneyGears = '1'; // 档位
        this.bigProductList = [
            { label: '请选择', value: '' },
            { label: '金添储蓄', value: 'L2011' },
            { label: '个人活期', value: 'L2012' },
            { label: '单位活期存款', value: 'L2013' },
            { label: '单位定期存款', value: 'L2014' },
            { label: '保证金存款', value: 'L2015' },
            { label: '其他存款', value: 'L2016' }
        ];
        this.moneyGearsOption = [
            { label: '请选择', value: '' }
        ];
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.codeVal();
        this.bigProductList = this.code['depositProdBigType'];
        this.bigProductList.unshift({ label: '请选择', value: '' });
        this.smallProductList1 = this.code['depositProdSmallType1'];
        this.smallProductList1.unshift({ label: '总计', value: 'total' });
        this.smallProductList1.unshift({ label: '请选择', value: '' });
        this.smallProductList2 = this.code['depositProdSmallType2'];
        this.smallProductList3 = this.code['depositProdSmallType3'];
        this.smallProductList4 = this.code['depositProdSmallType4'];
        this.smallProductList5 = this.code['depositProdSmallType5'];
        this.smallProductList6 = this.code['depositProdSmallType6'];
        //初值
        this.option1 = this.customerPerformanceService.returnOption2({ title: '我的各产品金额占比', name: '行业占比', data: [0] });
        this.option2 = this.customerPerformanceService.returnOption2({ title: '部门各产品金额占比', name: '行业占比', data: [0] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '各产品变化趋势', legend: [], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption2({ title: '我的各产品客户数占比', name: '行业占比', data: [0] });
        this.option5 = this.customerPerformanceService.returnOption2({ title: '部门各产品客户数占比', name: '行业占比', data: [0] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '各产品变化趋势', legend: [], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    DepositProductCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.urlParams = params;
        });
        // console.log(urlParams);
        if (this.urlParams && JSON.stringify(this.urlParams) != '{}') {
            if (this.urlParams.flag != '1') {
                this.depositProductQuery(); // 产品大类查询---饼图
                this.depositProductTrendQuery(0, 1);
            }
        }
        // this.loansProductTrendQuery(0, 0);
    };
    //码值
    DepositProductCategoryComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 产品大类 切换
    DepositProductCategoryComponent.prototype.changeBigType = function () {
        console.log(this.productBigId);
        switch (this.productBigId) {
            case 'L2011':
                this.smallProductList = this.smallProductList1;
                break;
            case 'L2012':
                this.smallProductList2.unshift({ label: '总计', value: 'total' });
                this.smallProductList2.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList2;
                break;
            case 'L2013':
                this.smallProductList3.unshift({ label: '总计', value: 'total' });
                this.smallProductList3.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList3;
                break;
            case 'L2014':
                this.smallProductList4.unshift({ label: '总计', value: 'total' });
                this.smallProductList4.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList4;
                break;
            case 'L2015':
                this.smallProductList5.unshift({ label: '总计', value: 'total' });
                this.smallProductList5.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList5;
                break;
            case 'L2016':
                this.smallProductList6.unshift({ label: '总计', value: 'total' });
                this.smallProductList6.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList6;
                break;
        }
    };
    DepositProductCategoryComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.depositProductQuery(); // 产品大类查询---饼图
        this.depositProductTrendQuery(0, 1);
    };
    DepositProductCategoryComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositProductCategoryComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    // 跳转产品小类
    DepositProductCategoryComponent.prototype.toSmalProduct = function () {
        if (this.productSmallId) {
            this.router.navigate(['/pages/tzb/custom/performance-analysis/deposit/smallClassProduct', { Property3: this.urlParams.Property3, condition: this.urlParams.condition, flag: this.urlParams.flag, productId: this.productBigId, smallClassProductId: this.productSmallId }]);
        }
    };
    DepositProductCategoryComponent.prototype.depositProductQuery = function () {
        var _this = this;
        var params = {
            tellerId: this.commonHeader.userId,
            dwFlag: this.dwFlag,
            startDate: this.startDate,
            endDate: this.endDate,
        };
        this.customerPerformanceHttpService.depositProductQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var data1_1 = []; // 我的各产品金额占比---饼图
                var data2_1 = []; //  部门各产品金额占比---饼图   
                var xData1_1 = []; // 我的各产品客户占比---柱状图
                var yData1_1 = [];
                var xData2_1 = []; //  部门各产品客户占比---柱状图
                var yData2_1 = [];
                if (data.myAmtList && data.myAmtList.length != 0) {
                    data.myAmtList.forEach(function (element) {
                        _this.bigProductList.forEach(function (element2) {
                            if (element.productId == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.myAmt;
                                data1_1.push(objTemp);
                            }
                        });
                    });
                }
                if (data.depAmtList && data.depAmtList.length != 0) {
                    data.depAmtList.forEach(function (element) {
                        _this.bigProductList.forEach(function (element2) {
                            if (element.productId == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.depAmt;
                                data2_1.push(objTemp);
                            }
                        });
                    });
                }
                if (data.myCustList && data.myCustList.length != 0) {
                    _this.bigProductList.forEach(function (element) {
                        data.myCustList.forEach(function (element2) {
                            if (element2.productId == element.value) {
                                xData1_1.push(element.label);
                            }
                        });
                    });
                    data.myCustList.forEach(function (element) {
                        yData1_1.push(element.myCust);
                    });
                }
                if (data.depCustList && data.depCustList.length != 0) {
                    _this.bigProductList.forEach(function (element) {
                        data.depCustList.forEach(function (element2) {
                            if (element2.productId == element.value) {
                                xData2_1.push(element.label);
                            }
                        });
                    });
                    data.depCustList.forEach(function (element) {
                        yData2_1.push(element.depCust);
                    });
                }
                _this.option1 = {
                    title: {
                        text: '我的各产品金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: data1_1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option2 = {
                    title: {
                        text: '部门各产品金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: data2_1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option4 = {
                    title: {
                        text: '我的各产品客户数占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    // legend: {
                    //     data: [{ name: '客户数变化' }, { name: '占比变化' }],
                    //     top: 'bottom',
                    //     itemGap: 20,
                    //     icon: 'line'
                    // },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData1_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '客户数',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: '客户数变化',
                            data: yData1_1,
                            type: 'bar',
                            // yAxisIndex: 0,
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top'
                                    }
                                }
                            }
                        }
                    ]
                };
                _this.option5 = {
                    title: {
                        text: '部门各产品客户数占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    // legend: {
                    //     data: [{ name: '客户数变化' }, { name: '占比变化' }],
                    //     top: 'bottom',
                    //     itemGap: 20,
                    //     icon: 'line'
                    // },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData2_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '客户数',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: '客户数变化',
                            data: yData2_1,
                            type: 'bar',
                            // yAxisIndex: 0,
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top'
                                    }
                                }
                            }
                        }
                    ]
                };
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
    DepositProductCategoryComponent.prototype.depositProductTrendQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            dwFlag: this.moneyGears,
            startDate: this.startDate,
            endDate: this.endDate,
        };
        this.customerPerformanceHttpService.depositProductTrendQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_2 = [];
                var xData2_2 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var series1_1 = [];
                var series2_1 = [];
                var data1_2 = [];
                var data2_2 = [];
                if (data.myAmtList && data.myAmtList.length != 0) {
                    data.myAmtList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                    });
                    _this.bigProductList.forEach(function (element) {
                        yData1_2 = [];
                        data.myAmtList.forEach(function (element2) {
                            element2.myProductAmt.forEach(function (element3) {
                                if (element3.productId == element.value) {
                                    data1_2.push({ name: element.label });
                                    yData1_2.push(element3.myAmt);
                                }
                            });
                        });
                        if (yData1_2 && yData1_2.length != 0) {
                            var objTemp_1 = {};
                            objTemp_1['name'] = element.label;
                            objTemp_1['type'] = 'line';
                            objTemp_1['data'] = yData1_2;
                            objTemp_1['itemStyle'] = {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == objTemp_1['data'].length - 1 || params.dataIndex == 0) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            };
                            series1_1.push(objTemp_1);
                        }
                    });
                }
                if (data.myCustList && data.myCustList.length != 0) {
                    data.myCustList.forEach(function (el) {
                        var arr = el.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                    });
                    _this.bigProductList.forEach(function (element) {
                        yData2_2 = [];
                        data.myCustList.forEach(function (element2) {
                            element2.myProductCust.forEach(function (element3) {
                                if (element3.productId == element.value) {
                                    data2_2.push({ name: element.label });
                                    yData2_2.push(element3.myCust);
                                }
                            });
                        });
                        if (yData2_2 && yData2_2.length != 0) {
                            var objTemp_2 = {};
                            objTemp_2['name'] = element.label;
                            objTemp_2['type'] = 'line';
                            objTemp_2['data'] = yData2_2;
                            objTemp_2['itemStyle'] = {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == objTemp_2['data'].length - 1 || params.dataIndex == 0) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            };
                            series2_1.push(objTemp_2);
                        }
                    });
                }
                if (ind == 0 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '各产品变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: data1_2,
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: series1_1
                    };
                }
                if (ind == 0 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '各产品变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: data2_2,
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: series2_1
                    };
                }
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
    DepositProductCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-productCategory',
            template: __webpack_require__(/*! ./deposit-productCategory.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.html"),
            styles: [__webpack_require__(/*! ./deposit-productCategory.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-productCategory/deposit-productCategory.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositProductCategoryComponent);
    return DepositProductCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款产品小类 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-1\">\r\n                <label appValidation>高级搜索:</label>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"bigProductList\" [(ngModel)]=\"productBigId\" (onChange)=\"changeBigType()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"smallProductList\" [(ngModel)]=\"productSmallId\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 ui-g-offset-2\">\r\n                <label appValidation>单客户起点金额:</label>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"depositSmallProductQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"depositSmallProductQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"depositSmallProductQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"depositSmallProductQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.btn {\n  float: right; }\n\n.btn button {\n    border-radius: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtc21hbGxDbGFzc1Byb2R1Y3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcZGVwb3NpdFxcZGVwb3NpdC1zbWFsbENsYXNzUHJvZHVjdFxcZGVwb3NpdC1zbWFsbENsYXNzUHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW1CbkI7RUFJSSxZQUFZLEVBQUE7O0FBSmhCO0lBRVEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2RlcG9zaXQvZGVwb3NpdC1zbWFsbENsYXNzUHJvZHVjdC9kZXBvc2l0LXNtYWxsQ2xhc3NQcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59XHJcbi5idG4ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DepositSmallClassProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositSmallClassProductComponent", function() { return DepositSmallClassProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositSmallClassProductComponent = /** @class */ (function () {
    function DepositSmallClassProductComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.dwFlag = '1';
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '金额变化：按日展示所选产品每日余额变化，按月展示所选产品自然月日均变化\n占比变化：按日展示所选产品每日余额在所有存款产品余额占比，按月展示所选产品存款日均在所有存款日均占比';
        this.pTooltip2 = '人数变化：按日展示所选产品每日持有客户数变化，按月展示所选产品自然月持有客户数变化\n占比变化：按日展示所选产品每日持有客户数在所有存款产品客户数占比，按月展示所选产品自然月持有客户在所有存款持有客户占比';
        this.bigProductList = [
            { label: '请选择', value: '' },
            { label: '金添储蓄', value: 'L2011' },
            { label: '个人活期', value: 'L2012' },
            { label: '单位活期存款', value: 'L2013' },
            { label: '单位定期存款', value: 'L2014' },
            { label: '保证金存款', value: 'L2015' },
            { label: '其他存款', value: 'L2016' }
        ];
        this.productBigId = this.bigProductList[0].value;
        this.productBigName = this.bigProductList[0].label;
        this.moneyGears = '';
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '金额变化趋势', legend: [], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '客户数变化趋势', legend: [], xAxisData: [], yAxisName: '客户数', series: [] });
        this.codeVal();
        this.bigProductList = this.code['depositProdBigType'];
        this.bigProductList.unshift({ label: '请选择', value: '' });
        this.smallProductList1 = this.code['depositProdSmallType1'];
        this.smallProductList1.unshift({ label: '总计', value: 'total' });
        this.smallProductList1.unshift({ label: '请选择', value: '' });
        this.smallProductList2 = this.code['depositProdSmallType2'];
        this.smallProductList3 = this.code['depositProdSmallType3'];
        this.smallProductList4 = this.code['depositProdSmallType4'];
        this.smallProductList5 = this.code['depositProdSmallType5'];
        this.smallProductList6 = this.code['depositProdSmallType6'];
    }
    DepositSmallClassProductComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.depositSmallProductQuery(0, 1);
            }
            this.productBigId = urlParams.productId;
            this.productSmallId = urlParams.smallClassProductId;
            this.changeBigType('init');
        }
    };
    DepositSmallClassProductComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.depositSmallProductQuery(0, 1);
    };
    DepositSmallClassProductComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositSmallClassProductComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    // 点击查询
    DepositSmallClassProductComponent.prototype.query = function () {
        this.depositSmallProductQuery(0, 1);
    };
    DepositSmallClassProductComponent.prototype.depositSmallProductQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        if (this.productSmallId && this.productSmallId == 'total') { //合计
            var params = {
                tellerId: this.commonHeader.userId,
                dmFlag: this.dmFlag,
                dwFlag: this.dwFlag,
                startDate: this.startDate,
                endDate: this.endDate,
                productId: this.productBigId
            };
            this.customerPerformanceHttpService.depositProductTrendQuery(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var xData1_1 = [];
                    var xData2_1 = [];
                    var yData1_2 = [];
                    var yData1_1_1 = [];
                    var yData2_1 = [];
                    var yData2_2_1 = [];
                    var yData3 = [];
                    var yData4 = [];
                    var series1_1 = [];
                    var series2_1 = [];
                    var data1_1 = [];
                    var data2_1 = [];
                    if (data.myAmtList && data.myAmtList.length != 0) {
                        data.myAmtList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                        });
                        _this.bigProductList.forEach(function (element) {
                            yData1_2 = [];
                            yData1_1_1 = [];
                            data.myAmtList.forEach(function (element2) {
                                element2.myProductAmt.forEach(function (element3) {
                                    if (element3.productId == element.value) {
                                        data1_1.push({ name: element.label });
                                        yData1_2.push(element3.myAmt);
                                        yData1_1_1.push(Number(element3.jezb * 100).toFixed(2));
                                    }
                                });
                            });
                            if (yData1_2 && yData1_2.length != 0) {
                                var length_1 = yData1_2.length;
                                var objTemp = {};
                                objTemp['name'] = '金额变化';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 0;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_1 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData1_2;
                                series1_1.push(objTemp);
                            }
                            if (yData1_1_1 && yData1_1_1.length != 0) {
                                var length_2 = yData1_1_1.length;
                                var objTemp = {};
                                objTemp['name'] = '金额占比';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 1;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_2 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData1_1_1;
                                series1_1.push(objTemp);
                            }
                        });
                        console.log(series1_1);
                    }
                    if (data.myCustList && data.myCustList.length != 0) {
                        data.myCustList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                        });
                        _this.bigProductList.forEach(function (element) {
                            yData2_1 = [];
                            yData2_2_1 = [];
                            data.myCustList.forEach(function (element2) {
                                element2.myProductCust.forEach(function (element3) {
                                    if (element3.productId == element.value) {
                                        data2_1.push({ name: element.label });
                                        yData2_1.push(element3.myCust);
                                        yData2_2_1.push(Number(element3.khszb * 100).toFixed(2));
                                    }
                                });
                            });
                            if (yData2_1 && yData2_1.length != 0) {
                                var length_3 = yData2_1.length;
                                var objTemp = {};
                                objTemp['name'] = '客户数';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 0;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_3 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData2_1;
                                series2_1.push(objTemp);
                            }
                            if (yData2_2_1 && yData2_2_1.length != 0) {
                                var length_4 = yData2_2_1.length;
                                var objTemp = {};
                                objTemp['name'] = '占比';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 1;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_4 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData2_2_1;
                                series2_1.push(objTemp);
                            }
                        });
                        console.log(series2_1);
                    }
                    var productList = _this.bigProductList.filter(function (item) {
                        return item.value == _this.productBigId;
                    });
                    if (ind == 0 || ind == 1) {
                        _this.echoParams(1, data.dmFlag);
                        var arrTemp = _this.calMax([series1_1[0].data, series1_1[1].data]); //解决echarts的双y轴重叠问题
                        _this.option1 = {
                            title: {
                                text: productList[0].label + "\u91D1\u989D\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '金额变化' }, { name: '金额占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData1_1,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '金额(万元)',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '金额占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: series1_1
                        };
                    }
                    if (ind == 0 || ind == 2) {
                        _this.echoParams(2, data.dmFlag);
                        var arrTemp = _this.calMax([series2_1[0].data, series2_1[1].data]); //解决echarts的双y轴重叠问题
                        _this.option2 = {
                            title: {
                                text: productList[0].label + "\u5BA2\u6237\u6570\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '客户数' }, { name: '占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData2_1,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '客户数',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: series2_1
                        };
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
        else {
            var params = {
                tellerId: this.commonHeader.userId,
                dmFlag: this.dmFlag,
                dwFlag: this.dwFlag,
                startDate: this.startDate,
                endDate: this.endDate,
                productId: this.productSmallId
            };
            this.customerPerformanceHttpService.depositSmallProductQuery(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var xData1_2 = [];
                    var xData2_2 = [];
                    var yData1_3 = [];
                    var yData2_3 = [];
                    var yData3_1 = [];
                    var yData4_1 = [];
                    if (data.depositProductAmtList && data.depositProductAmtList.length != 0) {
                        data.depositProductAmtList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (_this.dmFlag == 'M') {
                                xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                            else if (_this.dmFlag == 'D') {
                                xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            yData1_3.push(element.depositAmt);
                        });
                    }
                    if (data.depositProductAmtPtList && data.depositProductAmtPtList.length != 0) {
                        data.depositProductAmtPtList.forEach(function (element) {
                            yData2_3.push(Number(element.depositAmtPt * 100).toFixed(2));
                        });
                    }
                    if (data.depositProductCustList && data.depositProductCustList.length != 0) {
                        data.depositProductCustList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (_this.dmFlag == 'M') {
                                xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                            else if (_this.dmFlag == 'D') {
                                xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            yData3_1.push(element.depositCust);
                        });
                    }
                    if (data.depositProductCustPtList && data.depositProductCustPtList.length != 0) {
                        data.depositProductCustPtList.forEach(function (element) {
                            yData4_1.push(Number(element.depositCustPt * 100).toFixed(2));
                        });
                    }
                    var productList = _this.smallProductList.filter(function (item) {
                        return item.value == _this.productSmallId;
                    });
                    if (ind == 0 || ind == 1) {
                        _this.echoParams(1, data.dmFlag);
                        _this.option1 = {
                            title: {
                                text: productList[0].label + "\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '金额变化' }, { name: '金额占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData1_2,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '金额(万元)',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '金额占比',
                                    type: 'value',
                                    nameGap: 30,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '金额变化',
                                    data: yData1_3,
                                    type: 'line',
                                    yAxisIndex: 0,
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == yData1_3.length - 1 || params.dataIndex == 0) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    name: '金额占比',
                                    data: yData2_3,
                                    type: 'line',
                                    yAxisIndex: 1,
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: 'dashed'
                                            },
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == yData2_3.length - 1 || params.dataIndex == 0) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        };
                    }
                    if (ind == 0 || ind == 2) {
                        _this.echoParams(2, data.dmFlag);
                        _this.option2 = {
                            title: {
                                text: productList[0].label + "\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '客户数' }, { name: '占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData2_2,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '客户数',
                                    type: 'value',
                                    scale: true,
                                    nameGap: 30,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    }
                                }, {
                                    name: '占比',
                                    type: 'value',
                                    nameGap: 30,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '客户数',
                                    data: yData3_1,
                                    type: 'line',
                                    yAxisIndex: 0,
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == yData3_1.length - 1 || params.dataIndex == 0) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    name: '占比',
                                    data: yData4_1,
                                    type: 'line',
                                    yAxisIndex: 1,
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: 'dashed'
                                            },
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == yData4_1.length - 1 || params.dataIndex == 0) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        };
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
    };
    //码值
    DepositSmallClassProductComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DepositSmallClassProductComponent.prototype.changeBigType = function (flag) {
        if (!flag) {
            this.productSmallId = '';
        }
        switch (this.productBigId) {
            case 'L2011':
                this.smallProductList = this.smallProductList1;
                break;
            case 'L2012':
                this.smallProductList2.unshift({ label: '总计', value: 'total' });
                this.smallProductList2.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList2;
                break;
            case 'L2013':
                this.smallProductList3.unshift({ label: '总计', value: 'total' });
                this.smallProductList3.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList3;
                break;
            case 'L2014':
                this.smallProductList4.unshift({ label: '总计', value: 'total' });
                this.smallProductList4.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList4;
                break;
            case 'L2015':
                this.smallProductList5.unshift({ label: '总计', value: 'total' });
                this.smallProductList5.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList5;
                break;
            case 'L2016':
                this.smallProductList6.unshift({ label: '总计', value: 'total' });
                this.smallProductList6.unshift({ label: '请选择', value: '' });
                this.smallProductList = this.smallProductList6;
                break;
        }
    };
    //计算最大值、最小值
    DepositSmallClassProductComponent.prototype.calMax = function (arr) {
        var max = 0;
        var min = 0;
        if (arr && arr.length != 0) {
            arr.forEach(function (element) {
                element.forEach(function (element2) {
                    if (parseFloat(element2) < min) {
                        min = parseFloat(element2);
                    }
                    if (parseFloat(element2) > max) {
                        max = parseFloat(element2);
                    }
                });
            });
        }
        return [Math.floor(min / 10) * 10, Math.ceil(max / 9.5) * 10];
    };
    DepositSmallClassProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-smallClassProduct',
            template: __webpack_require__(/*! ./deposit-smallClassProduct.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.html"),
            styles: [__webpack_require__(/*! ./deposit-smallClassProduct.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-smallClassProduct/deposit-smallClassProduct.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositSmallClassProductComponent);
    return DepositSmallClassProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 存款趋势变化 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-1\">\r\n                单客户起点金额:\r\n            </div>\r\n            <div class=\"ui-g-1\">\r\n                <p-dropdown [options]=\"gearList\" [(ngModel)]=\"dwFlag\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"depositAllAmtQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"depositAllAmtQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"depositAllAmtQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"depositAllAmtQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"depositAllAmtQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"depositAllAmtQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.textColor {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtdGVuZGN5Q2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGRlcG9zaXRcXGRlcG9zaXQtdGVuZGN5Q2hhbmdlXFxkZXBvc2l0LXRlbmRjeUNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW9CbkI7RUFDSSxjQXJCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9kZXBvc2l0L2RlcG9zaXQtdGVuZGN5Q2hhbmdlL2RlcG9zaXQtdGVuZGN5Q2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59XHJcblxyXG4udGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DepositTendcyChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositTendcyChangeComponent", function() { return DepositTendcyChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepositTendcyChangeComponent = /** @class */ (function () {
    function DepositTendcyChangeComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.dwFlag = '1'; // 档位
        this.gearList = [
            { label: '0以上', value: '1' },
            { label: '大于等于1000', value: '2' },
            { label: '大于等于5000', value: '3' },
            { label: '大于等于10000', value: '4' },
            { label: '大于等于20000', value: '5' },
            { label: '大于等于50000', value: '6' },
        ];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u622A\u6B62\u5230\u5F53\u65E5\u7684\u5B58\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5B58\u6B3E\u65E5\u5747 \n \u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5B58\u6B3E\u65E5\u5747\u5728\u90E8\u95E8\u5408\u8BA1\u5B58\u6B3E\u65E5\u5747\u5360\u6BD4 \n \u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4 \n \u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u4E2D\u5B58\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u5B58\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u622A\u6B62\u5230\u6BCF\u65E5\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570 \n \u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u5185\u5408\u8BA1\u622A\u6B62\u5230\u6BCF\u65E5\u6301\u6709\u5B58\u6B3E\u5BA2\u6237\u6570/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '存款金额', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '存款金额占比', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '存款客户数', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    DepositTendcyChangeComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.depositAllAmtQuery(0, 1);
            }
        }
        // this.loansProportionQuery(2, 1);
        // this.loansCustNumQuery(3, 1);
    };
    DepositTendcyChangeComponent.prototype.query = function () {
        this.depositAllAmtQuery(0, 1);
    };
    DepositTendcyChangeComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.depositAllAmtQuery(0, 1);
    };
    DepositTendcyChangeComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    DepositTendcyChangeComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    DepositTendcyChangeComponent.prototype.depositAllAmtQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            dwFlag: this.dwFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.depositTrendQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                if (data.myDepositList && data.myDepositList.length != 0 && data.departmentDepositList && data.departmentDepositList.length != 0 && data.brachDepositList && data.brachDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData1_1.push(element.depositAmt);
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData1_1.push(element.depositAmt);
                        }
                    });
                    data.departmentDepositList.forEach(function (element) {
                        yData2_1.push(element.depDepositAmt);
                    });
                    data.brachDepositList.forEach(function (element) {
                        yData3_1.push(element.brachDepositAmt);
                    });
                }
                if (data.myDepositProList && data.myDepositProList.length != 0 && data.departmentDepositProList && data.departmentDepositProList.length != 0 && data.departmentDepositProList && data.departmentDepositProList.length != 0) {
                    data.myDepositProList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData4_1.push(Number(element.depositAmtPt * 100).toFixed(2));
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData4_1.push(Number(element.depositAmtPt * 100).toFixed(2));
                        }
                    });
                    data.departmentDepositProList.forEach(function (element) {
                        yData5_1.push(Number(element.depDepositAmtPt * 100).toFixed(2));
                    });
                    data.departmentOneDepositProList.forEach(function (element) {
                        yData6_1.push(Number(element.depOneDepositAmtPt * 100).toFixed(2));
                    });
                }
                if (data.myCustList && data.myCustList.length != 0 && data.departmentCustList && data.departmentCustList.length != 0 && data.brachCustList && data.brachCustList.length != 0) {
                    data.myCustList.forEach(function (element) {
                        if (_this.dmFlag == 'M') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            yData7_1.push(Number(element.depositCust).toFixed(2));
                        }
                        else if (_this.dmFlag == 'D') {
                            var arr = element.dt.split('-');
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            yData7_1.push(Number(element.depositCust).toFixed(2));
                        }
                    });
                    data.departmentCustList.forEach(function (element) {
                        yData8_1.push(element.depDdepositCust);
                    });
                    data.brachCustList.forEach(function (element) {
                        yData9_1.push(element.brachDepositCust);
                    });
                }
                if (ind == '0' || ind == '1') {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '存款金额',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData1_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData2_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '2') {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '存款金额占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '同部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData5_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData6_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == '0' || ind == '3') {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '存款客户数',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData7_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == yData8_1.length - 1 || params.dataIndex == 0) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    DepositTendcyChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-tendcyChange',
            template: __webpack_require__(/*! ./deposit-tendcyChange.component.html */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.html"),
            styles: [__webpack_require__(/*! ./deposit-tendcyChange.component.scss */ "./src/app/pages/tzb/custom/customer-performance/deposit/deposit-tendcyChange/deposit-tendcyChange.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DepositTendcyChangeComponent);
    return DepositTendcyChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FTP-折后 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"ftpQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"ftpQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"ftpQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"ftpQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"textColor\">\r\n            ·分行优秀线：分行同业务条线每月排名20%分位点\r\n        </div> -->\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'产品分布'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"ftpQuery(4,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"ftpQuery(4,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'成长趋势'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex5 == 1}\" (click)=\"ftpQuery(5,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex5 == 2}\" (click)=\"ftpQuery(5,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option5\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex6 == 1}\" (click)=\"ftpQuery(6,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex6 == 2}\" (click)=\"ftpQuery(6,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.textColor {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9mdHAvZnRwLWFmdGVyRGlzY291bnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcZnRwXFxmdHAtYWZ0ZXJEaXNjb3VudFxcZnRwLWFmdGVyRGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBTjlCO0VBU1EsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksY0FqQmUsRUFBQTs7QUFvQm5CO0VBQ0ksY0FyQmUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tZXItcGVyZm9ybWFuY2UvZnRwL2Z0cC1hZnRlckRpc2NvdW50L2Z0cC1hZnRlckRpc2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59XHJcblxyXG4udGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FtpAfterDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FtpAfterDiscountComponent", function() { return FtpAfterDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FtpAfterDiscountComponent = /** @class */ (function () {
    function FtpAfterDiscountComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.showIndex5 = 1;
        this.showIndex6 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u6298\u540EFTP\u5229\u5DEE\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u5408\u8BA1\u6BCF\u5929\u6298\u540EFTP\u5229\u5DEE/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406\n\u5206\u884C\u4F18\u79C0\u7EBF\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u5206\u884C\u5185\u6298\u540EFTP\u5229\u5DEE\u6392\u540D\u524D20%\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u6298\u540EFTP\u5229\u5DEE\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u6298\u540EFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u540EFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u5360\u6BD4\n\u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u90E8\u95E8\u4E2D\u6298\u540EFTP\u5229\u5DEE\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u6298\u540EFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip3 = "\u622A\u6B62\u5230\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u65E5\uFF0C\u5F53\u6708\u6211\u7684\u6298\u540EFTP\u5229\u5DEE\u5728\u5404\u4EA7\u54C1\u7684\u91D1\u989D\u4E0E\u5360\u6BD4";
        this.pTooltip4 = "\u6309\u65E5\u5C55\u793A\u6211\u7684\u5404\u4EA7\u54C1\u6BCF\u5929\u6298\u540EFTP\u5229\u5DEE\u7684\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5185\u5404\u4EA7\u54C1\u6298\u540EFTP\u5229\u5DEE\u53D8\u5316\u8D8B\u52BF";
        this.pTooltip5 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u6298\u540EFTP\u5229\u5DEE\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u540EFTP\u5229\u5DEE\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u6298\u540EFTP\u5229\u5DEE\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip6 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u6298\u540EFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u540EFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A1/\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u6570\uFF0C\u8BA1\u7B97\u540C\u6708\u5165\u5C97\u4EBA\u5747\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u6298\u540EFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u540EFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.option1 = this.customerPerformanceService.returnOption({ title: 'FTP利差-折后', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: 'FTP利差占比-折后', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比(%)', series: [] });
        this.option3 = this.customerPerformanceService.returnOption2({ title: 'FTP各产品占比-折后', name: '产品占比', data: [0] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '各产品FTP变化趋势-折后', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option5 = this.customerPerformanceService.returnOption({ title: '同月入岗FTP利差-折后', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '同月入岗FTP利差占比-折后', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
    }
    FtpAfterDiscountComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.ftpQuery(0, 1);
            }
        }
    };
    FtpAfterDiscountComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.ftpQuery(0, 1);
    };
    FtpAfterDiscountComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    FtpAfterDiscountComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    FtpAfterDiscountComponent.prototype.ftpQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
            qh: 'zh'
        };
        this.customerPerformanceHttpService.ftpQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var xData4_1 = [];
                var xData5_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                var yData10_1 = [];
                var yData11_1 = [];
                var yData12_1 = [];
                var yData13_1 = [];
                var yData14_1 = [];
                var yData15_1 = [];
                var yData16_1 = [];
                var yData17_1 = [];
                var yData18_1 = [];
                var yData19_1 = [];
                if (data.ftplcje.bmpj && data.ftplcje.bmpj.length != 0 && data.ftplcje.grlc && data.ftplcje.grlc.length != 0 && data.ftplcje.yxx && data.ftplcje.yxx.length != 0) {
                    data.ftplcje.grlc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData1_1.push(element.val);
                    });
                    data.ftplcje.bmpj.forEach(function (element) {
                        yData2_1.push(element.val);
                    });
                    data.ftplcje.yxx.forEach(function (element) {
                        yData3_1.push(element.val);
                    });
                }
                if (data.ftplcjezb.grzb && data.ftplcjezb.grzb.length != 0 && data.ftplcjezb.bmpjzb && data.ftplcjezb.bmpjzb.length != 0 && data.ftplcjezb.bmdy && data.ftplcjezb.bmdy.length != 0) {
                    data.ftplcjezb.grzb.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData4_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.ftplcjezb.bmpjzb.forEach(function (element) {
                        yData5_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.ftplcjezb.bmdy.forEach(function (element) {
                        yData6_1.push(Number(element.val * 100).toFixed(2));
                    });
                }
                if (data.gcpzb && JSON.stringify(data.gcpzb) != '{}') {
                    for (var k in data.gcpzb) {
                        var objTemp = {};
                        objTemp['name'] = data.gcpzb[k][k];
                        objTemp['value'] = data.gcpzb[k]['val'];
                        yData7.push(objTemp);
                    }
                }
                if (data.gcpbhqs.cklc && data.gcpbhqs.cklc.length != 0 && data.gcpbhqs.btdklc && data.gcpbhqs.btdklc.length != 0 && data.gcpbhqs.xbdklc && data.gcpbhqs.xbdklc.length != 0 && data.gcpbhqs.xfdklc && data.gcpbhqs.xfdklc.length != 0 && data.gcpbhqs.yhklc && data.gcpbhqs.yhklc.length != 0 && data.gcpbhqs.zzdklc && data.gcpbhqs.zzdklc.length != 0) {
                    data.gcpbhqs.cklc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData8_1.push(element.val);
                    });
                    data.gcpbhqs.btdklc.forEach(function (element) {
                        yData9_1.push(element.val);
                    });
                    data.gcpbhqs.xbdklc.forEach(function (element) {
                        yData10_1.push(element.val);
                    });
                    data.gcpbhqs.xfdklc.forEach(function (element) {
                        yData11_1.push(element.val);
                    });
                    data.gcpbhqs.yhklc.forEach(function (element) {
                        yData12_1.push(element.val);
                    });
                    data.gcpbhqs.zzdklc.forEach(function (element) {
                        yData13_1.push(element.val);
                    });
                }
                if (data.tyrzje.grlc && data.tyrzje.grlc.length != 0 && data.tyrzje.tydy && data.tyrzje.tydy.length != 0 && data.tyrzje.typj && data.tyrzje.typj.length != 0) {
                    data.tyrzje.grlc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData14_1.push(element.val);
                    });
                    data.tyrzje.typj.forEach(function (element) {
                        yData15_1.push(element.val);
                    });
                    data.tyrzje.tydy.forEach(function (element) {
                        yData16_1.push(element.val);
                    });
                }
                if (data.tyrzzb.tylczb && data.tyrzzb.tylczb.length != 0 && data.tyrzzb.typjzb && data.tyrzzb.typjzb.length != 0 && data.tyrzzb.tydyzb && data.tyrzzb.tydyzb.length != 0) {
                    data.tyrzzb.tylczb.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData17_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.tyrzzb.typjzb.forEach(function (element) {
                        yData18_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.tyrzzb.tydyzb.forEach(function (element) {
                        yData19_1.push(Number(element.val * 100).toFixed(2));
                    });
                }
                if (ind == 0 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: 'FTP利差-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            scale: true,
                            nameGap: 30,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: 'FTP利差占比-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比(%)',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData5_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData6_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 3) {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: 'FTP各产品占比-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                name: '产品占比',
                                data: yData7,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                center: ['50%', '55%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c} , {d}%'
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == 0 || ind == 4) {
                    _this.echoParams(4, data.dmFlag);
                    _this.option4 = {
                        title: {
                            text: '各产品FTP变化趋势-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '存款' }, { name: '普贷' }, { name: '小本' }, { name: '消费类贷款' }, { name: '银行卡' }, { name: '自助卡' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '存款',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData8_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '普贷',
                                data: yData9_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData9_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '小本',
                                data: yData10_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData10_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '消费类贷款',
                                data: yData11_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData11_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '银行卡',
                                data: yData12_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData12_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '自助卡',
                                data: yData13_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData13_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 5) {
                    _this.echoParams(5, data.dmFlag);
                    _this.option5 = {
                        title: {
                            text: '同月入岗FTP利差-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '同月入职平均' }, { name: '同月入职第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData4_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            scale: true,
                            nameGap: 30,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData14_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData14_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职平均',
                                data: yData15_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData15_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职第一名',
                                data: yData16_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData16_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == 0 || ind == 6) {
                    _this.echoParams(6, data.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '同月入岗FTP利差占比-折后',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我的占比' }, { name: '同月入职占比平均' }, { name: '同月入职占比第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData5_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我的占比',
                                data: yData17_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData16_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职占比平均',
                                data: yData18_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData18_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职占比第一名',
                                data: yData19_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData19_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    FtpAfterDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ftp-afterDiscount',
            template: __webpack_require__(/*! ./ftp-afterDiscount.component.html */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.html"),
            styles: [__webpack_require__(/*! ./ftp-afterDiscount.component.scss */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-afterDiscount/ftp-afterDiscount.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FtpAfterDiscountComponent);
    return FtpAfterDiscountComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FTP-折前 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"ftpQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"ftpQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"ftpQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"ftpQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"textColor\">\r\n            ·分行优秀线：分行同业务条线每月排名20%分位点\r\n        </div> -->\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'产品分布'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"ftpQuery(4,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"ftpQuery(4,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'成长趋势'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex5 == 1}\" (click)=\"ftpQuery(5,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex5 == 2}\" (click)=\"ftpQuery(5,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option5\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content1 ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex6 == 1}\" (click)=\"ftpQuery(6,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex6 == 2}\" (click)=\"ftpQuery(6,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.textColor {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9mdHAvZnRwLWJlZm9yZURpc2NvdW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGZ0cFxcZnRwLWJlZm9yZURpc2NvdW50XFxmdHAtYmVmb3JlRGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBTjlCO0VBU1EsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksY0FqQmUsRUFBQTs7QUFvQm5CO0VBQ0ksY0FyQmUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tZXItcGVyZm9ybWFuY2UvZnRwL2Z0cC1iZWZvcmVEaXNjb3VudC9mdHAtYmVmb3JlRGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4ucm93IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGJhc2ljQ29sb3I7XHJcbn1cclxuXHJcbi50ZXh0Q29sb3Ige1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FtpBeforeDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FtpBeforeDiscountComponent", function() { return FtpBeforeDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FtpBeforeDiscountComponent = /** @class */ (function () {
    function FtpBeforeDiscountComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.showIndex5 = 1;
        this.showIndex6 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u6298\u524DFTP\u5229\u5DEE\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u5408\u8BA1\u6BCF\u5929\u6298\u524DFTP\u5229\u5DEE/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u6298\u524DFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u524DFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u5360\u6BD4\n\u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u5929\u90E8\u95E8\u4E2D\u6298\u524DFTP\u5229\u5DEE\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u6298\u524DFTP\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip3 = "\u622A\u6B62\u5230\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u65E5\uFF0C\u5F53\u6708\u6211\u7684\u6298\u524DFTP\u5229\u5DEE\u5728\u5404\u4EA7\u54C1\u7684\u91D1\u989D\u4E0E\u5360\u6BD4";
        this.pTooltip4 = "\u6309\u65E5\u5C55\u793A\u6211\u7684\u5404\u4EA7\u54C1\u6BCF\u5929\u6298\u524DFTP\u5229\u5DEE\u7684\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5185\u5404\u4EA7\u54C1\u6298\u524DFTP\u5229\u5DEE\u53D8\u5316\u8D8B\u52BF";
        this.pTooltip5 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u6298\u524DFTP\u5229\u5DEE\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u524DFTP\u5229\u5DEE\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u6298\u524DFTP\u5229\u5DEE\uFF0C\u6309\u6708\u540C\u7406";
        this.pTooltip6 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u6298\u524DFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6298\u524DFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A1/\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u6570\uFF0C\u8BA1\u7B97\u540C\u6708\u5165\u5C97\u4EBA\u5747\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u6298\u524DFTP\u5229\u5DEE\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u6298\u524DFTP\u5229\u5DEE\u5360\u6BD4\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.option1 = this.customerPerformanceService.returnOption({ title: 'FTP利差-折前', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: 'FTP利差占比-折前', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比(%)', series: [] });
        this.option3 = this.customerPerformanceService.returnOption2({ title: 'FTP各产品占比-折前', name: '产品占比', data: [0] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '各产品FTP变化趋势-折前', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option5 = this.customerPerformanceService.returnOption({ title: '同月入岗FTP利差-折前', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '同月入岗FTP利差占比-折前', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
    }
    FtpBeforeDiscountComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.ftpQuery(0, 1);
            }
        }
    };
    FtpBeforeDiscountComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.ftpQuery(0, 1);
    };
    FtpBeforeDiscountComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    FtpBeforeDiscountComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    FtpBeforeDiscountComponent.prototype.ftpQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
            qh: 'zq'
        };
        this.customerPerformanceHttpService.ftpQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var xData4_1 = [];
                var xData5_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7 = [];
                var yData8_1 = [];
                var yData9_1 = [];
                var yData10_1 = [];
                var yData11_1 = [];
                var yData12_1 = [];
                var yData13_1 = [];
                var yData14_1 = [];
                var yData15_1 = [];
                var yData16_1 = [];
                var yData17_1 = [];
                var yData18_1 = [];
                var yData19_1 = [];
                if (data.ftplcje.bmpj && data.ftplcje.bmpj.length != 0 && data.ftplcje.grlc && data.ftplcje.grlc.length != 0 && data.ftplcje.yxx && data.ftplcje.yxx.length != 0) {
                    data.ftplcje.grlc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData1_1.push(element.val);
                    });
                    data.ftplcje.bmpj.forEach(function (element) {
                        yData2_1.push(element.val);
                    });
                    data.ftplcje.yxx.forEach(function (element) {
                        yData3_1.push(element.val);
                    });
                }
                if (data.ftplcjezb.grzb && data.ftplcjezb.grzb.length != 0 && data.ftplcjezb.bmpjzb && data.ftplcjezb.bmpjzb.length != 0 && data.ftplcjezb.bmdy && data.ftplcjezb.bmdy.length != 0) {
                    data.ftplcjezb.grzb.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData4_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.ftplcjezb.bmpjzb.forEach(function (element) {
                        yData5_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.ftplcjezb.bmdy.forEach(function (element) {
                        yData6_1.push(Number(element.val * 100).toFixed(2));
                    });
                }
                if (data.gcpzb && JSON.stringify(data.gcpzb) != '{}') {
                    for (var k in data.gcpzb) {
                        var objTemp = {};
                        objTemp['name'] = data.gcpzb[k][k];
                        objTemp['value'] = data.gcpzb[k]['val'];
                        yData7.push(objTemp);
                    }
                }
                if (data.gcpbhqs.cklc && data.gcpbhqs.cklc.length != 0 && data.gcpbhqs.btdklc && data.gcpbhqs.btdklc.length != 0 && data.gcpbhqs.xbdklc && data.gcpbhqs.xbdklc.length != 0 && data.gcpbhqs.xfdklc && data.gcpbhqs.xfdklc.length != 0 && data.gcpbhqs.yhklc && data.gcpbhqs.yhklc.length != 0 && data.gcpbhqs.zzdklc && data.gcpbhqs.zzdklc.length != 0) {
                    data.gcpbhqs.cklc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData8_1.push(element.val);
                    });
                    data.gcpbhqs.btdklc.forEach(function (element) {
                        yData9_1.push(element.val);
                    });
                    data.gcpbhqs.xbdklc.forEach(function (element) {
                        yData10_1.push(element.val);
                    });
                    data.gcpbhqs.xfdklc.forEach(function (element) {
                        yData11_1.push(element.val);
                    });
                    data.gcpbhqs.yhklc.forEach(function (element) {
                        yData12_1.push(element.val);
                    });
                    data.gcpbhqs.zzdklc.forEach(function (element) {
                        yData13_1.push(element.val);
                    });
                }
                if (data.tyrzje.grlc && data.tyrzje.grlc.length != 0 && data.tyrzje.tydy && data.tyrzje.tydy.length != 0 && data.tyrzje.typj && data.tyrzje.typj.length != 0) {
                    data.tyrzje.grlc.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData14_1.push(element.val);
                    });
                    data.tyrzje.typj.forEach(function (element) {
                        yData15_1.push(element.val);
                    });
                    data.tyrzje.tydy.forEach(function (element) {
                        yData16_1.push(element.val);
                    });
                }
                if (data.tyrzzb.tylczb && data.tyrzzb.tylczb.length != 0 && data.tyrzzb.typjzb && data.tyrzzb.typjzb.length != 0 && data.tyrzzb.tydyzb && data.tyrzzb.tydyzb.length != 0) {
                    data.tyrzzb.tylczb.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (_this.dmFlag == 'M') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        else if (_this.dmFlag == 'D') {
                            xData5_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        yData17_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.tyrzzb.typjzb.forEach(function (element) {
                        yData18_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.tyrzzb.tydyzb.forEach(function (element) {
                        yData19_1.push(Number(element.val * 100).toFixed(2));
                    });
                }
                if (ind == 0 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: 'FTP利差-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            scale: true,
                            nameGap: 30,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: 'FTP利差占比-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比(%)',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门平均',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData5_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData6_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 3) {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: 'FTP各产品占比-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        series: [
                            {
                                name: '产品占比',
                                data: yData7,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                center: ['50%', '55%'],
                                label: {
                                    normal: {
                                        formatter: '{b} {c} , {d}%'
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == 0 || ind == 4) {
                    _this.echoParams(4, data.dmFlag);
                    _this.option4 = {
                        title: {
                            text: '各产品FTP变化趋势-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '存款' }, { name: '普贷' }, { name: '小本' }, { name: '消费类贷款' }, { name: '银行卡' }, { name: '自助卡' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '存款',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData8_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '普贷',
                                data: yData9_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData9_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '小本',
                                data: yData10_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData10_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '消费类贷款',
                                data: yData11_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData11_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '银行卡',
                                data: yData12_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData12_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '自助卡',
                                data: yData13_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData13_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == 0 || ind == 5) {
                    _this.echoParams(5, data.dmFlag);
                    _this.option5 = {
                        title: {
                            text: '同月入岗FTP利差-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '同月入职平均' }, { name: '同月入职第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData4_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData14_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData14_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职平均',
                                data: yData15_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData15_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职第一名',
                                data: yData16_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData16_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == 0 || ind == 6) {
                    _this.echoParams(6, data.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '同月入岗FTP利差占比-折前',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我的占比' }, { name: '同月入职占比平均' }, { name: '同月入职占比第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData5_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我的占比',
                                data: yData17_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData17_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职占比平均',
                                data: yData18_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData18_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '同月入职占比第一名',
                                data: yData19_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData19_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    FtpBeforeDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ftp-beforeDiscount',
            template: __webpack_require__(/*! ./ftp-beforeDiscount.component.html */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.html"),
            styles: [__webpack_require__(/*! ./ftp-beforeDiscount.component.scss */ "./src/app/pages/tzb/custom/customer-performance/ftp/ftp-beforeDiscount/ftp-beforeDiscount.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FtpBeforeDiscountComponent);
    return FtpBeforeDiscountComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 指标分析 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow nav\" style=\"margin-top: 10px;\">\r\n        <span [ngClass]=\"{'navBarActive':showIndex0 == 1}\" (click)=\"navChange(1)\">各指标纵向比较</span>\r\n        <span [ngClass]=\"{'navBarActive':showIndex0 == 2}\" (click)=\"navChange(2)\">各指标横向比较</span>\r\n    </div>\r\n    <hr style=\"margin: 0 auto;\" />\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\" *ngIf=\"showIndex0 == 1\">\r\n        <div class=\"ui-g-6 row\">\r\n            <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"indicatorProgressGroessQuery(1,1)\">日</span>\r\n            <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"indicatorProgressGroessQuery(1,2)\">月</span>\r\n            <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            <a (click)=\"routerLink(1,1)\">成长</a>\r\n            <a (click)=\"routerLink(1,2)\">增量</a>\r\n            <a (click)=\"routerLink(1,3)\">储蓄</a>\r\n            <a (click)=\"routerLink(1,4)\">产品</a>\r\n            <a (click)=\"routerLink(1,5)\">趋势</a>\r\n            <a href=\"javascript:void(0);\">总量</a>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 row\">\r\n            <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"indicatorProgressGroessQuery(2,1)\">日</span>\r\n            <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"indicatorProgressGroessQuery(2,2)\">月</span>\r\n            <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            <a (click)=\"routerLink(2,1)\">成长</a>\r\n            <a (click)=\"routerLink(2,2)\">增量</a>\r\n            <a (click)=\"routerLink(2,3)\">行业</a>\r\n            <a (click)=\"routerLink(2,4)\">产品</a>\r\n            <a (click)=\"routerLink(2,5)\">趋势</a>\r\n            <a href=\"javascript:void(0);\">总量</a>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\" *ngIf=\"showIndex0 == 1\">\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"indicatorProgressGroessQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"indicatorProgressGroessQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(3,2)\">折后</a>\r\n                <a (click)=\"routerLink(3,1)\">折前</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"indicatorProgressGroessQuery(4,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"indicatorProgressGroessQuery(4,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(4,1)\">趋势</a>\r\n                <a (click)=\"routerLink(4,2)\">分布</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\" *ngIf=\"showIndex0 == 2\">\r\n        <div class=\"ui-g-6 row\">\r\n            <span [ngClass]=\"{'active':showIndex5 == 1}\" (click)=\"departmentProportionQuery(5,1)\">日</span>\r\n            <span [ngClass]=\"{'active':showIndex5 == 2}\" (click)=\"departmentProportionQuery(5,2)\">月</span>\r\n            <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option5\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 row\">\r\n            <span [ngClass]=\"{'active':showIndex6 == 1}\" (click)=\"departmentProportionQuery(6,1)\">日</span>\r\n            <span [ngClass]=\"{'active':showIndex6 == 2}\" (click)=\"departmentProportionQuery(6,2)\">月</span>\r\n            <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option6\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\" *ngIf=\"showIndex0 == 2\">\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex7 == 1}\" (click)=\"departmentProportionQuery(7,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex7 == 2}\" (click)=\"departmentProportionQuery(7,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip7\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option7\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <span [ngClass]=\"{'active':showIndex8 == 1}\" (click)=\"departmentProportionQuery(8,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex8 == 2}\" (click)=\"departmentProportionQuery(8,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip8\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option8\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: flex; }\n  .nav .navBarActive {\n    background: #ffcb05; }\n  .nav span {\n    border: 1px solid #dadada;\n    cursor: pointer; }\n  .nav span:nth-child(1) {\n    padding: .5em;\n    border-radius: 5px 0 0 5px/5px 0 0 5px; }\n  .nav span:nth-child(2) {\n    padding: .5em;\n    border-radius: 0 5px 5px 0/ 0 5px 5px 0; }\n  .row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n  .row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n  .row a {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 15px;\n  border: 1px solid #dadada;\n  margin-right: 5px;\n  cursor: pointer; }\n  .row a:nth-last-child(2) {\n    background: #34CFE6;\n    color: #fff; }\n  .row a:hover {\n    background: #34CFE6;\n    color: #fff; }\n  .active {\n  color: #34CFE6; }\n  .icon {\n  color: #34CFE6;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9pbmRpY2F0b3JzLWFuYWx5c2lzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGluZGljYXRvcnMtYW5hbHlzaXNcXGluZGljYXRvcnMtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFHUSxtQkFMWSxFQUFBO0VBRXBCO0lBTVEseUJBUGE7SUFRYixlQUFlLEVBQUE7RUFQdkI7SUFVUSxhQUFhO0lBQ2Isc0NBQXNDLEVBQUE7RUFYOUM7SUFjUSxhQUFhO0lBQ2IsdUNBQXVDLEVBQUE7RUFJL0M7RUFFUSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCLEVBQUE7RUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTtFQVhwQjtFQWNRLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQXJDYTtFQXNDYixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBbkJ2QjtJQXFCWSxtQkEzQ087SUE0Q1AsV0FBVyxFQUFBO0VBdEJ2QjtJQXlCWSxtQkEvQ087SUFnRFAsV0FBVyxFQUFBO0VBS3ZCO0VBQ0ksY0F0RGUsRUFBQTtFQXlEbkI7RUFDSSxjQTFEZTtFQTJEZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2luZGljYXRvcnMtYW5hbHlzaXMvaW5kaWNhdG9ycy1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNpY0NvbG9yOiMzNENGRTYgIWRlZmF1bHQ7XHJcbiRuYXZCYXJDb2xvcjojZmZjYjA1ICFkZWZhdWx0O1xyXG4kYm9yZGVyQ29sb3I6ICNkYWRhZGEgIWRlZmF1bHQ7XHJcbi5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5uYXZCYXJBY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRuYXZCYXJDb2xvcjtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweC81cHggMCAwIDVweDtcclxuICAgIH1cclxuICAgIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwLyAwIDVweCA1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: IndicatorsAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsAnalysisComponent", function() { return IndicatorsAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IndicatorsAnalysisComponent = /** @class */ (function () {
    function IndicatorsAnalysisComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, router, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex0 = 1;
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.showIndex5 = 1;
        this.showIndex6 = 1;
        this.showIndex7 = 1;
        this.showIndex8 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u91D1\u989D\u53D8\u5316\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u6C47\u603B\u5C55\u793A\u81EA\u7136\u6708\u65E5\u5747\u5B58\u6B3E\u91D1\u989D\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip2 = "\u91D1\u989D\u53D8\u5316\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u6C47\u603B\u5C55\u793A\u81EA\u7136\u6708\u65E5\u5747\u8D37\u6B3E\u91D1\u989D\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip3 = "\u91D1\u989D\u53D8\u5316\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5FTP\u6298\u540E\u5229\u5DEE\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u6C47\u603B\u5C55\u793A\u81EA\u7136\u6708\u6BCF\u6708\u5408\u8BA1FTP\u6298\u540E\u5229\u5DEE\u6536\u5165\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip4 = "\u91D1\u989D\u53D8\u5316\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D\u53D8\u5316\u8D8B\u52BF\uFF0C\u6309\u6708\u6C47\u603B\u5C55\u793A\u81EA\u7136\u6708\u6BCF\u6708\u6700\u540E\u4E00\u65E5\u5269\u4F59\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip5 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u5B58\u6B3E\u5728\u90E8\u95E8\u5408\u8BA1\u5B58\u6B3E\u4F59\u989D\u5360\u6BD4\u53D8\u5316\u3001\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65E5\u5747\u5B58\u6B3E\u5728\u90E8\u95E8\u5408\u8BA1\u65E5\u5747\u5B58\u6B3E\u5360\u6BD4\u53D8\u5316\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u767B\u5F55\u8005\u7684\u6240\u5728\u90E8\u95E8\u4E2D\uFF0C\u6309\u65E5\u8BA1\u7B97\u51FA\u5B58\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\uFF0C\u5F97\u5176\u5BF9\u5E94\u7684\u5B58\u6B3E\u4F59\u989D\uFF0C\u6838\u7B97\u51FA\u5176\u5728\u90E8\u95E8\u5408\u8BA1\u4F59\u989D\u5360\u6BD4\uFF1B\u6309\u6708\u540C\u7406";
        this.pTooltip6 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u8D37\u6B3E\u5728\u90E8\u95E8\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D\u5360\u6BD4\u53D8\u5316\u3001\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65E5\u5747\u8D37\u6B3E\u5728\u90E8\u95E8\u5408\u8BA1\u65E5\u5747\u8D37\u6B3E\u5360\u6BD4\u53D8\u5316\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u767B\u5F55\u8005\u7684\u6240\u5728\u90E8\u95E8\u4E2D\uFF0C\u6309\u65E5\u8BA1\u7B97\u51FA\u8D37\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\uFF0C\u5F97\u5176\u5BF9\u5E94\u7684\u8D37\u6B3E\u4F59\u989D\uFF0C\u6838\u7B97\u51FA\u5176\u5728\u90E8\u95E8\u5408\u8BA1\u4F59\u989D\u5360\u6BD4\uFF1B\u6309\u6708\u540C\u7406";
        this.pTooltip7 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5FTP\u6298\u540E\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1FTP\u5360\u6BD4\u53D8\u5316\u3001\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5408\u8BA1FTP\u6298\u540E\u5229\u5DEE\u5728\u90E8\u95E8\u5408\u8BA1FTP\u5360\u6BD4\u53D8\u5316\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u767B\u5F55\u8005\u7684\u6240\u5728\u90E8\u95E8\u4E2D\uFF0C\u6309\u65E5\u8BA1\u7B97\u51FAFTP\u6298\u540E\u5229\u5DEE\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\uFF0C\u5F97\u5176\u5BF9\u5E94\u7684FTP\u6298\u540E\u5229\u5DEE\uFF0C\u6838\u7B97\u51FA\u5176\u5728\u90E8\u95E8\u5408\u8BA1\u6298\u540E\u5229\u5DEE\u5360\u6BD4\uFF1B\u6309\u6708\u540C\u7406";
        this.pTooltip8 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u4E0D\u826F\u7387\u53D8\u5316\u3001\u6309\u6708\u5C55\u793A\u6BCF\u6708\u6700\u540E\u4E00\u65E5\u4E0D\u826F\u7387\u53D8\u5316\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u767B\u5F55\u8005\u7684\u6240\u5728\u90E8\u95E8\u4E2D\uFF0C\u6309\u65E5\u8BA1\u7B97\u51FA\u4E0D\u826F\u7387\u6700\u4F4E\u7684\u5BA2\u6237\u7ECF\u7406\uFF0C\u5F97\u5176\u5BF9\u5E94\u7684\u4E0D\u826F\u7387\uFF1B\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '存款变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '存款金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '贷款变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '贷款金额(万元)', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: 'FTP变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: 'FTP折后利差(元)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '不良余额变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '不良金额(万元)', series: [] });
        this.option5 = this.customerPerformanceService.returnOption({ title: '所在部门内部对比-存款占比', legend: [{ name: '我' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '存款占比', series: [] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '所在部门内部对比-贷款占比', legend: [{ name: '我' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '贷款占比', series: [] });
        this.option7 = this.customerPerformanceService.returnOption({ title: '所在部门内部对比-FTP占比', legend: [{ name: '我' }, { name: '部门第一名' }], xAxisData: [], yAxisName: 'FTP占比', series: [] });
        this.option8 = this.customerPerformanceService.returnOption({ title: '所在部门内部对比-不良占比', legend: [{ name: '我' }, { name: '部门第一名' }], xAxisData: [], yAxisName: '不良占比', series: [] });
    }
    IndicatorsAnalysisComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.taskArrangementQuery2();
            }
        }
    };
    IndicatorsAnalysisComponent.prototype.navChange = function (i) {
        this['showIndex0'] = i;
        console.log(this.showIndex0);
        if (i == 1) {
            this.taskArrangementQuery2();
        }
        else if (i == 2) {
            this.departmentProportionQuery(-1, 1);
        }
    };
    IndicatorsAnalysisComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.taskArrangementQuery2();
        // this.departmentProportionQuery(-1, 1);
    };
    IndicatorsAnalysisComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    IndicatorsAnalysisComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    IndicatorsAnalysisComponent.prototype.routerLink = function (ind, index) {
        var routerLinkUrl;
        if (ind == 1) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/growthGuide';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/increasementalTendency';
                    break;
                case 3:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/savingNature';
                    break;
                case 4:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/productCategory';
                    break;
                case 5:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/tendcyChange';
                    break;
            }
        }
        else if (ind == 2) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/growthGuide';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/increasementalTendency';
                    break;
                case 3:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/industryInvestment';
                    break;
                case 4:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/productCategory';
                    break;
                case 5:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/tendcyChange';
                    break;
            }
        }
        else if (ind == 3) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/ftp/ftpBeforeDiscount';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/ftp/ftpAfterDiscount';
                    break;
            }
        }
        else {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/badness/tendcyChange';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/badness/propertyDistribution';
                    break;
            }
        }
        this.router.navigate([routerLinkUrl, { Property3: false, condition: 'recentOneMonth', flag: 1 }]);
    };
    IndicatorsAnalysisComponent.prototype.departmentProportionQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.departmentProportionQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var xData4_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                if (data.myDepositList && data.myDepositList.length != 0 && data.departmentDepositList && data.departmentDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_1.push(Number(element.myPt * 100).toFixed(2));
                    });
                    data.departmentDepositList.forEach(function (element) {
                        yData2_1.push(Number(element.dapPt * 100).toFixed(2));
                    });
                }
                if (data.myLoansList && data.myLoansList.length != 0 && data.departmentLoansList && data.departmentLoansList.length != 0) {
                    data.myLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData3_1.push(Number(element.dkjezb_w * 100).toFixed(2));
                    });
                    data.departmentLoansList.forEach(function (element) {
                        yData4_1.push(Number(element.dkjezb_dy * 100).toFixed(2));
                    });
                }
                if (data.myFtpList && data.myFtpList.length != 0 && data.departmentFtpList && data.departmentFtpList.length != 0) {
                    data.myFtpList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData5_1.push(Number(element.val * 100).toFixed(2));
                    });
                    data.departmentFtpList.forEach(function (element) {
                        yData6_1.push(Number(element.val * 100).toFixed(2));
                    });
                }
                if (data.myBadnessList && data.myBadnessList.length != 0 && data.departmentBadnessList && data.departmentBadnessList.length != 0) {
                    data.myBadnessList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData7_1.push(Number(element.brljbljebjzb * 100).toFixed(2));
                    });
                    data.departmentBadnessList.forEach(function (element) {
                        yData8_1.push(Number(element.bjbljedyzb * 100).toFixed(2));
                    });
                }
                if (ind == -1 || ind == 5) {
                    _this.echoParams(5, data.dmFlag);
                    _this.option5 = {
                        title: {
                            text: '所在部门内部对比-存款占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '存款占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == -1 || ind == 6) {
                    _this.echoParams(6, data.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '所在部门内部对比-贷款占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '贷款占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData3_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == -1 || ind == 7) {
                    _this.echoParams(7, data.dmFlag);
                    _this.option7 = {
                        title: {
                            text: '所在部门内部对比-FTP占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: 'FTP占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData5_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData6_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
                if (ind == -1 || ind == 8) {
                    _this.echoParams(8, data.dmFlag);
                    _this.option8 = {
                        title: {
                            text: '所在部门内部对比-不良占比',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '我' }, { name: '部门第一名' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData4_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '不良占比',
                            nameGap: 30,
                            scale: true,
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name: '我',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData7_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '部门第一名',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData8_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    };
                }
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
    IndicatorsAnalysisComponent.prototype.taskArrangementQuery2 = function () {
        var _this = this;
        var yearDate = "" + this.startDate.split('-')[0];
        var monthDate = "" + this.startDate.split('-')[1];
        var params = {
            tellerId: this.commonHeader.userId,
            orgId: this.commonHeader.orgId,
            yearDate: yearDate,
            monthDate: monthDate,
            taskType: ""
        };
        this.customerPerformanceHttpService.taskArrangementQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                    data.taskArrangementList.forEach(function (element) {
                        switch (element.signType) {
                            case "1":
                                _this.depositAmt1 = element.taskAmt;
                                break;
                            case "2":
                                _this.loanAmt1 = element.taskAmt;
                                break;
                            case "3":
                                _this.ftpAmt1 = element.taskAmt;
                                break;
                            case "4":
                                _this.badnessAmt1 = element.taskAmt;
                                break;
                        }
                    });
                    _this.depositAmt1 = _this.depositAmt1 ? _this.depositAmt1 : '0.00';
                    _this.loanAmt1 = _this.loanAmt1 ? _this.loanAmt1 : '0.00';
                    _this.ftpAmt1 = _this.ftpAmt1 ? _this.ftpAmt1 : '0.00';
                    _this.badnessAmt1 = _this.badnessAmt1 ? _this.badnessAmt1 : '0.00';
                }
                var yearDate_1 = "" + _this.endDate.split('-')[0];
                var monthDate_1 = "" + _this.endDate.split('-')[1];
                var params_1 = {
                    tellerId: _this.commonHeader.userId,
                    orgId: _this.commonHeader.orgId,
                    yearDate: yearDate_1,
                    monthDate: monthDate_1,
                    taskType: ""
                };
                _this.customerPerformanceHttpService.taskArrangementQuery(params_1).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                            data.taskArrangementList.forEach(function (element) {
                                switch (element.signType) {
                                    case "1":
                                        _this.depositAmt2 = element.taskAmt;
                                        break;
                                    case "2":
                                        _this.loanAmt2 = element.taskAmt;
                                        break;
                                    case "3":
                                        _this.ftpAmt2 = element.taskAmt;
                                        break;
                                    case "4":
                                        _this.badnessAmt2 = element.taskAmt;
                                        break;
                                }
                            });
                        }
                        _this.depositAmt2 = _this.depositAmt2 ? _this.depositAmt2 : '0.00';
                        _this.loanAmt2 = _this.loanAmt2 ? _this.loanAmt2 : '0.00';
                        _this.ftpAmt1 = _this.ftpAmt1 ? _this.ftpAmt1 : '0.00';
                        _this.badnessAmt1 = _this.badnessAmt1 ? _this.badnessAmt1 : '0.00';
                        _this.indicatorProgressGroessQuery(-1, 1);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
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
    IndicatorsAnalysisComponent.prototype.indicatorProgressGroessQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.indicatorProgressGroessQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_2 = [];
                var xData2_2 = [];
                var xData3_2 = [];
                var xData4_2 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var yData3_2 = [];
                var yData4_2 = [];
                var yData5_2 = [];
                var yData6_2 = [];
                var yData7_2 = [];
                var yData8_2 = [];
                if (data.myDepositList && data.myDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_2.push(element.depositAmt);
                        if (new Date(new Date(_this.endDate).setDate(1)) < new Date(element.dt)) {
                            yData2_2.push(_this.depositAmt2);
                        }
                        else {
                            yData2_2.push(_this.depositAmt1);
                        }
                    });
                }
                if (data.myLoansList && data.myLoansList.length != 0) {
                    data.myLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData3_2.push(element.dkje_w);
                        if (new Date(new Date(_this.endDate).setDate(1)) < new Date(element.dt)) {
                            yData4_2.push(_this.loanAmt2);
                        }
                        else {
                            yData4_2.push(_this.loanAmt1);
                        }
                    });
                }
                if (data.myFtpList && data.myFtpList.length != 0) {
                    data.myFtpList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData3_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData3_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData5_2.push(element.val);
                        if (new Date(new Date(_this.endDate).setDate(1)) < new Date(element.dt)) {
                            yData6_2.push(_this.ftpAmt2);
                        }
                        else {
                            yData6_2.push(_this.ftpAmt1);
                        }
                    });
                }
                if (data.myBadnessList && data.myBadnessList.length != 0) {
                    data.myBadnessList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData4_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData4_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData7_2.push(element.blAmt);
                        if (new Date(new Date(_this.endDate).setDate(1)) < new Date(element.dt)) {
                            yData8_2.push(_this.badnessAmt2);
                        }
                        else {
                            yData8_2.push(_this.badnessAmt1);
                        }
                    });
                }
                if (ind == -1 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '存款变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '存款金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData1_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData3_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData2_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '贷款变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '贷款金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData3_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData3_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData4_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 3) {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: 'FTP变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: 'FTP折后利差(元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData5_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData5_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData6_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData6_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 4) {
                    _this.echoParams(4, data.dmFlag);
                    _this.option4 = {
                        title: {
                            text: '不良余额变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData4_2,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '不良金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData7_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData7_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData8_2,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData8_2.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
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
    IndicatorsAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'indicators-analysis',
            template: __webpack_require__(/*! ./indicators-analysis.component.html */ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.html"),
            styles: [__webpack_require__(/*! ./indicators-analysis.component.scss */ "./src/app/pages/tzb/custom/customer-performance/indicators-analysis/indicators-analysis.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], IndicatorsAnalysisComponent);
    return IndicatorsAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 主页 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-top: 10px;\">\r\n        <div class=\"ui-g-12 ui-g nav\">\r\n            <span [ngClass]=\"{'active':showIndex0 == 1}\" (click)=\"navChange(1)\">月度</span>\r\n            <span [ngClass]=\"{'active':showIndex0 == 2}\" (click)=\"navChange(2)\">年度</span>\r\n            <span style=\"flex:1;\"></span>\r\n            <!-- <span class=\"icon iconfont tzbicon-more\" (click)=\"more($event)\"></span> -->\r\n        </div>\r\n        <div class=\"ui-g-12 content\">\r\n            <ul>\r\n                <li *ngFor=\"let item of collection;let ind = index\">\r\n                    <div class=\"circle\">\r\n                        <div>\r\n                            <p>\r\n                                <span class=\"showClass1 showClass3\" *ngIf=\"Property1 && item.je1\">{{item.je1}}</span>&nbsp;&nbsp;\r\n                                <span class=\"showClass2 showClass4\" *ngIf=\"Property2 && item.je2\">{{item.je2}}</span>\r\n                            </p>\r\n                            <p>\r\n                                <span>{{item.zb}}</span>\r\n                            </p>\r\n                            <p>\r\n                                <span>{{item.label}}</span>\r\n                                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"item.desc\" tooltipPosition=\"bottom\"></i>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div class=\"ui-g-12 text-c showStyle\">\r\n                <span class=\"showClass1\" [ngClass]=\"{'showClass3':Property1}\" (click)=\"isShow(1)\">实际完成值</span>\r\n                <span class=\"showClass2\" [ngClass]=\"{'showClass4':Property2}\" (click)=\"isShow(2)\">任务目标值</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom: 10px;\">\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip7\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip8\" tooltipPosition=\"bottom\"></i>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav span, .nav .content ul li .circle div p i, .content ul li .circle div p .nav i {\n  padding: 5px;\n  cursor: pointer; }\n\n.row span, .row .content ul li .circle div p i, .content ul li .circle div p .row i {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.row a {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 15px;\n  border: 1px solid #dadada;\n  margin-right: 5px; }\n\n.row a:nth-last-child(2) {\n    background: #34CFE6;\n    color: #fff; }\n\n.row a:hover {\n    background: #34CFE6;\n    color: #fff; }\n\n.active {\n  color: #34CFE6; }\n\n.icon {\n  color: #34CFE6;\n  flex: 0;\n  text-align: right;\n  cursor: pointer; }\n\n.content ul {\n  overflow: hidden;\n  display: flex;\n  padding: 0;\n  margin: 0; }\n\n.content ul li {\n    list-style: none;\n    width: 25%; }\n\n.content ul li .circle {\n      width: 60%;\n      padding-top: 30%;\n      padding-bottom: 30%;\n      border-radius: 100%;\n      border: 1px solid #34CFE6;\n      margin: 0 auto;\n      position: relative; }\n\n.content ul li .circle div {\n        width: 70%;\n        height: 70%;\n        position: absolute;\n        left: 15%;\n        top: 15%;\n        text-align: center; }\n\n.content ul li .circle div p {\n          margin: 0;\n          height: 33%;\n          font-weight: 700;\n          padding-top: 20px;\n          box-sizing: border-box; }\n\n.content ul li .circle div p span, .content ul li .circle div p i {\n            vertical-align: top; }\n\n.content ul li .circle div p:nth-child(1) span, .content ul li .circle div p:nth-child(1) i {\n          margin-left: 8px; }\n\n.content ul li .circle div p:nth-child(2) {\n          font-size: 35px;\n          padding-top: 0;\n          color: #ffa500; }\n\n.showClass1, .showClass2 {\n  position: relative;\n  cursor: pointer; }\n\n.showClass1:before, .showClass2:before {\n    content: '\\2022';\n    position: absolute;\n    color: ccc;\n    font-size: 35px;\n    left: -16px;\n    top: -16px; }\n\n.showClass2 {\n  margin-left: 25px; }\n\n.showClass3:before {\n  color: red; }\n\n.showClass4:before {\n  color: yellow; }\n\n.text-c {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9pbmRpY2F0b3JzLXByb2dyZXNzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGluZGljYXRvcnMtcHJvZ3Jlc3NcXGluZGljYXRvcnMtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFYcEI7RUFjUSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkF6QmE7RUEwQmIsaUJBQWlCLEVBQUE7O0FBbEJ6QjtJQW9CWSxtQkE5Qk87SUErQlAsV0FBVyxFQUFBOztBQXJCdkI7SUF3QlksbUJBbENPO0lBbUNQLFdBQVcsRUFBQTs7QUFLdkI7RUFDSSxjQXpDZSxFQUFBOztBQTRDbkI7RUFDSSxjQTdDZTtFQThDZixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFFUSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBTGpCO0lBT1ksZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTs7QUFSdEI7TUFVZ0IsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLHlCQWpFRztNQWtFSCxjQUFjO01BQ2Qsa0JBQWtCLEVBQUE7O0FBaEJsQztRQWtCb0IsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFFBQVE7UUFDUixrQkFBa0IsRUFBQTs7QUF2QnRDO1VBeUJ3QixTQUFTO1VBQ1QsV0FBVztVQUNYLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsc0JBQXNCLEVBQUE7O0FBN0I5QztZQStCNEIsbUJBQW1CLEVBQUE7O0FBL0IvQztVQXVDNEIsZ0JBQWdCLEVBQUE7O0FBdkM1QztVQTJDd0IsZUFBZTtVQUNmLGNBQWM7VUFDZCxjQUFjLEVBQUE7O0FBUXRDO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFGbkI7SUFJUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVUsRUFBQTs7QUFJbEI7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFFUSxVQUFVLEVBQUE7O0FBSWxCO0VBRVEsYUFBYSxFQUFBOztBQUlyQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9pbmRpY2F0b3JzLXByb2dyZXNzL2luZGljYXRvcnMtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4kbmF2QmFyQ29sb3I6I2ZmY2IwNSAhZGVmYXVsdDtcclxuJGJvcmRlckNvbG9yOiAjZGFkYWRhICFkZWZhdWx0O1xyXG4ubmF2IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG4gICAgZmxleDogMDsgLy/lsYXlj7NcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2ljQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgc3BhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNob3dDbGFzczEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsZWZ0OiAtMTZweDtcclxuICAgICAgICB0b3A6IC0xNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvd0NsYXNzMiB7XHJcbiAgICBAZXh0ZW5kIC5zaG93Q2xhc3MxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5zaG93Q2xhc3MzIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvd0NsYXNzNCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: IndicatorsProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsProgressComponent", function() { return IndicatorsProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndicatorsProgressComponent = /** @class */ (function () {
    function IndicatorsProgressComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex0 = 1;
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u622A\u6B62\u6628\u65E5\u7684\u65E5\u5747\u5B58\u6B3E\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u5B58\u6B3E*\u5F53\u6708\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u5B58\u6B3E*\u5F53\u5E74\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip2 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u622A\u6B62\u6628\u65E5\u7684\u65E5\u5747\u8D37\u6B3E\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u8D37\u6B3E*\u5F53\u6708\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u8D37\u6B3E*\u5F53\u5E74\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip3 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u6240\u9009\u65F6\u95F4\u5185\u622A\u6B62\u6700\u540E\u4E00\u65E5\u7684FTP\u5229\u5DEE\u603B\u548C\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5FTP\u603B\u548C/\u4EFB\u52A1\u76EE\u6807\u503C\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5FTP\u603B\u548C/\u5E74\u4EFB\u52A1\u76EE\u6807\u503C\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip4 = "\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u622A\u6B62\u6240\u9009\u65F6\u95F4\u6BB5\u6700\u540E\u4E00\u65E5\u7684\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u622A\u6B62\u6240\u9009\u65F6\u95F4\u6BB5\u6700\u540E\u4E00\u65E5\u7684\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D";
        this.pTooltip5 = "\u672C\u6708\u8FDB\u5EA6\uFF1A\u672C\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u603B\u548C/\uFF08\u4EFB\u52A1\u76EE\u6807\u503C*\u5F53\u6708\u5929\u6570\uFF09\uFF0C\u65F6\u95F4\u8DE8\u6708\u9009\u62E9\u65F6\u4EE5\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u4E2A\u6708\u4F5C\u4E3A\u672C\u6708\n\u4E0A\u6708\u8FDB\u5EA6\uFF1A\u4E0A\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u603B\u548C/\uFF08\u4EFB\u52A1\u76EE\u6807\u503C*\u5F53\u6708\u5929\u6570\uFF09";
        this.pTooltip6 = "\u672C\u6708\u8FDB\u5EA6\uFF1A\u672C\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u603B\u548C/\uFF08\u4EFB\u52A1\u76EE\u6807\u503C*\u5F53\u6708\u5929\u6570\uFF09\uFF0C\u65F6\u95F4\u8DE8\u6708\u9009\u62E9\u65F6\u4EE5\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u4E2A\u6708\u4F5C\u4E3A\u672C\u6708\n\u4E0A\u6708\u8FDB\u5EA6\uFF1A\u4E0A\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u603B\u548C/\uFF08\u4EFB\u52A1\u76EE\u6807\u503C*\u5F53\u6708\u5929\u6570\uFF09";
        this.pTooltip7 = "\u672C\u6708\u8FDB\u5EA6\uFF1A\u672C\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5FTP\u603B\u548C/\u4EFB\u52A1\u76EE\u6807\u503C\uFF0C\u65F6\u95F4\u8DE8\u6708\u9009\u62E9\u65F6\u4EE5\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u4E2A\u6708\u4F5C\u4E3A\u672C\u6708\n\u4E0A\u6708\u8FDB\u5EA6\uFF1A\u4E0A\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5FTP\u603B\u548C/\u4EFB\u52A1\u76EE\u6807\u503C";
        this.pTooltip8 = "\u672C\u6708\u8FDB\u5EA6\uFF1A\u672C\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u6BCF\u65E5\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D\uFF0C\u65F6\u95F4\u8DE8\u6708\u9009\u62E9\u65F6\u4EE5\u6240\u9009\u65F6\u95F4\u7684\u6700\u540E\u4E00\u4E2A\u6708\u4F5C\u4E3A\u672C\u6708\n\u4E0A\u6708\u8FDB\u5EA6\uFF1A\u4E0A\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u6BCF\u65E5\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u6BCF\u65E5\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D";
        this.collection = [
            { label: '日均存款', desc: this.pTooltip1, je1: '', je2: '', zb: '' },
            { label: '日均贷款', desc: this.pTooltip2, je1: '', je2: '', zb: '' },
            { label: 'FTP', desc: this.pTooltip3, je1: '', je2: '', zb: '' },
            { label: '不良率', desc: this.pTooltip4, je1: '', je2: '', zb: '' }
        ];
        this.Property1 = true;
        this.Property2 = true;
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '近两月日均存款指标完成进度', legend: [{ name: '本月进度' }, { name: '上月进度' }], xAxisData: [], yAxisName: '进度', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '近两月日均贷款指标完成进度', legend: [{ name: '本月进度' }, { name: '上月进度' }], xAxisData: [], yAxisName: '进度', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '近两月FTP指标完成进度', legend: [{ name: '本月进度' }, { name: '上月进度' }], xAxisData: [], yAxisName: '进度', series: [] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '近两月不良率', legend: [{ name: '本月进度' }, { name: '上月进度' }], xAxisData: [], yAxisName: '进度', series: [] });
    }
    IndicatorsProgressComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.taskArrangementQuery(0, 1);
                this.nearlyMonthProgressQuery(-1, 0);
            }
        }
    };
    IndicatorsProgressComponent.prototype.isShow = function (i) {
        console.log(i);
        if (i == 1) {
            this.Property1 = !this.Property1;
        }
        else if (i == 2) {
            this.Property2 = !this.Property2;
        }
    };
    IndicatorsProgressComponent.prototype.more = function (event) {
        console.log('更多:', event);
    };
    IndicatorsProgressComponent.prototype.navChange = function (i) {
        this['showIndex0'] = i;
        if (i == 1) {
            this.taskArrangementQuery(-1, 1);
        }
        else if (i == 2) {
            this.taskArrangementQuery(-2, 2);
        }
    };
    IndicatorsProgressComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) { //自定义时间
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.taskArrangementQuery(0, 1);
        this.nearlyMonthProgressQuery(-1, 0);
    };
    IndicatorsProgressComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    IndicatorsProgressComponent.prototype.returnParams2 = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.nyFlag = 'Y';
        }
        else {
            this.nyFlag = 'N';
        }
    };
    IndicatorsProgressComponent.prototype.indicatorProgressQuery = function (ind, index) {
        var _this = this;
        this.returnParams2(ind, index);
        // let startDate, endDate;
        // if (this.startDate) {
        //     startDate = `${this.startDate.split('-')[0]}-${this.startDate.split('-')[1]}`;
        // }
        // if (this.endDate) {
        //     endDate = `${this.endDate.split('-')[0]}-${this.endDate.split('-')[1]}`;
        // }
        var params = {
            tellerId: this.commonHeader.userId,
            nyFlag: this.nyFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.indicatorProgressQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var je1 = data.depositAmt ? data.depositAmt : '0.00';
                var je2 = _this.depositAmt ? _this.depositAmt : '0.00';
                // if (je2 != '0') {
                //     this.collection[0]['zb'] = `${(parseFloat(je1) / parseFloat(je2) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[0]['zb'] = '0.00%';
                // }
                _this.collection[0]['zb'] = (data.depositPlan ? Number(data.depositPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[0]['je1'] = je1 + '万元';
                _this.collection[0]['je2'] = je2 + '万元';
                var je3 = data.loansAmt ? data.loansAmt : '0.00';
                var je4 = _this.loanAmt ? _this.loanAmt : '0.00';
                // if (je4 != '0') {
                //     this.collection[1]['zb'] = `${(parseFloat(je3) / parseFloat(je4) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[1]['zb'] = '0.00%';
                // }
                _this.collection[1]['zb'] = (data.loansPlan ? Number(data.loansPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[1]['je1'] = je3 + '万元';
                _this.collection[1]['je2'] = je4 + '万元';
                var je5 = data.ftpAmt ? data.ftpAmt : '0.00';
                var je6 = _this.ftpAmt ? String(parseFloat(_this.ftpAmt) / 10000) : '0.00';
                // if (je6 != '0') {
                //     this.collection[2]['zb'] = `${(parseFloat(je5) / parseFloat(je6) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[2]['zb'] = '0.00%';
                // }
                _this.collection[2]['zb'] = (data.ftpPlan ? Number(data.ftpPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[2]['je1'] = je5 + '万元';
                _this.collection[2]['je2'] = je6 + '万元';
                var je7 = data.badness ? data.badness : '0.00';
                var je8 = _this.badnessAmt ? _this.badnessAmt : '0.00';
                _this.collection[3]['je2'] = (parseFloat(je8)).toFixed(2) + '%';
                _this.collection[3]['zb'] = parseFloat(je7).toFixed(2) + '%';
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
    IndicatorsProgressComponent.prototype.taskArrangementQuery = function (ind, index) {
        var _this = this;
        var endDate;
        if (ind && ind == -2) {
            endDate = '00';
        }
        else {
            if (this.endDate) {
                endDate = "" + this.endDate.split('-')[1];
            }
        }
        var params = {
            tellerId: this.commonHeader.userId,
            orgId: this.commonHeader.orgId,
            yearDate: String(new Date().getFullYear()),
            monthDate: endDate,
            taskType: ""
        };
        this.customerPerformanceHttpService.taskArrangementQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                    data.taskArrangementList.forEach(function (element) {
                        switch (element.signType) {
                            case "1":
                                _this.depositAmt = element.taskAmt;
                                break;
                            case "2":
                                _this.loanAmt = element.taskAmt;
                                break;
                            case "3":
                                _this.ftpAmt = element.taskAmt;
                                break;
                            case "4":
                                _this.badnessAmt = element.taskAmt;
                                break;
                        }
                    });
                }
                _this.indicatorProgressQuery(0, index);
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
    IndicatorsProgressComponent.prototype.nearlyMonthProgressQuery = function (ind, index) {
        var _this = this;
        var params = {
            tellerId: this.commonHeader.userId,
            endDate: this.commfunc.transDateN(new Date())
        };
        this.customerPerformanceHttpService.nearlyMonthProgressQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var xData4_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                if (data.depositList && data.depositList.length != 0) {
                    data.depositList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        // if (data.dmFlag && data.dmFlag == 'D') {
                        //     xData1.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                        // } else if (data.dmFlag && data.dmFlag == 'M') {
                        //     xData1.push(`${arr[0]}年${arr[1]}月`);
                        // }
                        xData1_1.push(arr[2] + "\u65E5");
                        yData1_1.push(Number(element.depositDayPt * 100).toFixed(2));
                    });
                }
                if (data.lastDepositList && data.lastDepositList.length != 0) {
                    if (xData1_1 && xData1_1.length != 0) {
                        if (data.depositList.length < data.lastDepositList.length) {
                            xData1_1 = [];
                            data.lastDepositList.forEach(function (element) {
                                var arr = element.dt.split('-');
                                // if (data.dmFlag && data.dmFlag == 'D') {
                                //     xData1.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                                // } else if (data.dmFlag && data.dmFlag == 'M') {
                                //     xData1.push(`${arr[0]}年${arr[1]}月`);
                                // }
                                xData1_1.push(arr[2] + "\u65E5");
                                yData2_1.push(Number(element.depositDayPt * 100).toFixed(2));
                            });
                        }
                        else {
                            data.lastDepositList.forEach(function (element) {
                                yData2_1.push(Number(element.depositDayPt * 100).toFixed(2));
                            });
                        }
                    }
                    else {
                        data.lastDepositList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            // if (data.dmFlag && data.dmFlag == 'D') {
                            //     xData1.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                            // } else if (data.dmFlag && data.dmFlag == 'M') {
                            //     xData1.push(`${arr[0]}年${arr[1]}月`);
                            // }
                            xData1_1.push(arr[2] + "\u65E5");
                            yData2_1.push(Number(element.depositDayPt * 100).toFixed(2));
                        });
                    }
                }
                if (data.loansList && data.loansList.length != 0) {
                    data.loansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        // if (data.dmFlag && data.dmFlag == 'D') {
                        //     xData2.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                        // } else if (data.dmFlag && data.dmFlag == 'M') {
                        //     xData2.push(`${arr[0]}年${arr[1]}月`);
                        // }
                        xData2_1.push(arr[2] + "\u65E5");
                        yData3_1.push(Number(element.loansDayPt * 100).toFixed(2));
                    });
                }
                if (data.lastLoansList && data.lastLoansList.length != 0) {
                    if (xData2_1 && xData2_1.length != 0) {
                        if (data.loansList.length < data.lastLoansList.length) {
                            xData2_1 = [];
                            data.lastLoansList.forEach(function (element) {
                                var arr = element.dt.split('-');
                                // if (data.dmFlag && data.dmFlag == 'D') {
                                //     xData2.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                                // } else if (data.dmFlag && data.dmFlag == 'M') {
                                //     xData2.push(`${arr[0]}年${arr[1]}月`);
                                // }
                                xData2_1.push(arr[2] + "\u65E5");
                                yData4_1.push(Number(element.loansDayPt * 100).toFixed(2));
                            });
                        }
                        else {
                            data.lastLoansList.forEach(function (element) {
                                yData4_1.push(Number(element.loansDayPt * 100).toFixed(2));
                            });
                        }
                    }
                    else {
                        data.lastLoansList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            // if (data.dmFlag && data.dmFlag == 'D') {
                            //     xData2.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                            // } else if (data.dmFlag && data.dmFlag == 'M') {
                            //     xData2.push(`${arr[0]}年${arr[1]}月`);
                            // }
                            xData2_1.push(arr[2] + "\u65E5");
                            yData4_1.push(Number(element.loansDayPt * 100).toFixed(2));
                        });
                    }
                }
                if (data.ftpList && data.ftpList.length != 0) {
                    data.ftpList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        // if (data.dmFlag && data.dmFlag == 'D') {
                        //     xData3.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                        // } else if (data.dmFlag && data.dmFlag == 'M') {
                        //     xData3.push(`${arr[0]}年${arr[1]}月`);
                        // }
                        xData3_1.push(arr[2] + "\u65E5");
                        yData5_1.push(Number(element.FtpDayPt * 100).toFixed(2));
                    });
                }
                if (data.lastFtpList && data.lastFtpList.length != 0) {
                    if (xData3_1 && xData3_1.length != 0) {
                        if (data.ftpList.length < data.lastFtpList.length) {
                            xData3_1 = [];
                            data.lastFtpList.forEach(function (element) {
                                var arr = element.dt.split('-');
                                // if (data.dmFlag && data.dmFlag == 'D') {
                                //     xData3.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                                // } else if (data.dmFlag && data.dmFlag == 'M') {
                                //     xData3.push(`${arr[0]}年${arr[1]}月`);
                                // }
                                xData3_1.push(arr[2] + "\u65E5");
                                yData6_1.push(Number(element.FtpDayPt * 100).toFixed(2));
                            });
                        }
                        else {
                            data.lastFtpList.forEach(function (element) {
                                yData6_1.push(Number(element.FtpDayPt * 100).toFixed(2));
                            });
                        }
                    }
                    else {
                        data.lastFtpList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            // if (data.dmFlag && data.dmFlag == 'D') {
                            //     xData3.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                            // } else if (data.dmFlag && data.dmFlag == 'M') {
                            //     xData3.push(`${arr[0]}年${arr[1]}月`);
                            // }
                            xData3_1.push(arr[2] + "\u65E5");
                            yData6_1.push(Number(element.FtpDayPt * 100).toFixed(2));
                        });
                    }
                }
                if (data.badList && data.badList.length != 0) {
                    data.badList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        // if (data.dmFlag && data.dmFlag == 'D') {
                        //     xData4.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                        // } else if (data.dmFlag && data.dmFlag == 'M') {
                        //     xData4.push(`${arr[0]}年${arr[1]}月`);
                        // }
                        xData4_1.push(arr[2] + "\u65E5");
                        yData7_1.push(Number(element.wdbll * 100).toFixed(2));
                    });
                }
                if (data.lastBadList && data.lastBadList.length != 0) {
                    if (xData4_1 && xData4_1.length != 0) {
                        if (data.badList.length < data.lastBadList.length) {
                            xData4_1 = [];
                            data.lastBadList.forEach(function (element) {
                                var arr = element.dt.split('-');
                                // if (data.dmFlag && data.dmFlag == 'D') {
                                //     xData4.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                                // } else if (data.dmFlag && data.dmFlag == 'M') {
                                //     xData4.push(`${arr[0]}年${arr[1]}月`);
                                // }
                                xData4_1.push(arr[2] + "\u65E5");
                                yData8_1.push(Number(element.wdbll * 100).toFixed(2));
                            });
                        }
                        else {
                            data.lastBadList.forEach(function (element) {
                                yData8_1.push(Number(element.wdbll * 100).toFixed(2));
                            });
                        }
                    }
                    else {
                        data.lastBadList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            // if (data.dmFlag && data.dmFlag == 'D') {
                            //     xData4.push(`${arr[0]}年${arr[1]}月${arr[2]}日`);
                            // } else if (data.dmFlag && data.dmFlag == 'M') {
                            //     xData4.push(`${arr[0]}年${arr[1]}月`);
                            // }
                            xData4_1.push(arr[2] + "\u65E5");
                            yData8_1.push(Number(element.wdbll * 100).toFixed(2));
                        });
                    }
                }
                _this.option1 = {
                    title: {
                        text: '近两月日均存款指标完成进度',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '本月进度' }, { name: '上月进度' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData1_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '进度',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}%'
                            }
                        }
                    ],
                    series: [
                        {
                            name: '本月进度',
                            data: yData1_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '上月进度',
                            data: yData2_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                };
                _this.option2 = {
                    title: {
                        text: '近两月日均贷款指标完成进度',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '本月进度' }, { name: '上月进度' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData2_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '进度',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}%'
                            }
                        }
                    ],
                    series: [
                        {
                            name: '本月进度',
                            data: yData3_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '上月进度',
                            data: yData4_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                };
                _this.option3 = {
                    title: {
                        text: '近两月FTP指标完成进度',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '本月进度' }, { name: '上月进度' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData3_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '进度',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}%'
                            }
                        }
                    ],
                    series: [
                        {
                            name: '本月进度',
                            data: yData5_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData5_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '上月进度',
                            data: yData6_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData6_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                };
                _this.option4 = {
                    title: {
                        text: '近两月不良率',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '本月进度' }, { name: '上月进度' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData1_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '进度',
                            type: 'value',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}%'
                            }
                        }
                    ],
                    series: [
                        {
                            name: '本月进度',
                            data: yData7_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData7_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '上月进度',
                            data: yData8_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData8_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                };
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
    IndicatorsProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'indicators-progress',
            template: __webpack_require__(/*! ./indicators-progress.component.html */ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.html"),
            styles: [__webpack_require__(/*! ./indicators-progress.component.scss */ "./src/app/pages/tzb/custom/customer-performance/indicators-progress/indicators-progress.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], IndicatorsProgressComponent);
    return IndicatorsProgressComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-成长指引 -->\r\n<div class=\"ui-g-12\">\r\n        <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n        <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n            <header-title [Info]=\"'金额规模'\"></header-title>\r\n            <div>\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansGrowingGuideAmountQuery(1,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansGrowingGuideAmountQuery(1,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div class=\"content2 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansGrowingGuideProportionQuery(2,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansGrowingGuideProportionQuery(2,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n            <header-title [Info]=\"'客户规模'\"></header-title>\r\n            <div>\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"loansGrowingGuideCustQuery(3,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"loansGrowingGuideCustQuery(3,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n            <!-- <div>\r\n                <div class=\"content2 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"loansIncrementQuery(4,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"loansIncrementQuery(4,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" pTooltip=\"贷款增量趋势-客均贷款\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n    </div>\r\n    \r\n    <!-- msgs -->\r\n    <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tZ3Jvd3RoR3VpZGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcbG9hblxcbG9hbi1ncm93dGhHdWlkZVxcbG9hbi1ncm93dGhHdWlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tZ3Jvd3RoR3VpZGUvbG9hbi1ncm93dGhHdWlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNpY0NvbG9yOiMzNENGRTYgIWRlZmF1bHQ7XHJcbi5yb3cge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LoanGrowthGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanGrowthGuideComponent", function() { return LoanGrowthGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanGrowthGuideComponent = /** @class */ (function () {
    function LoanGrowthGuideComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u8D37\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u8D37\u6B3E\u65E5\u5747\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u8D37\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u5F53\u65E5\u7684\u8D37\u6B3E\u4F59\u989D\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u8D37\u6B3E\u65E5\u5747\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u8D37\u6B3E\u65E5\u5747\u5360\u6BD4\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u9AD8\u7684\u8D37\u6B3E\u4F59\u989D\u5728\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A1/\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u6570\uFF0C\u8BA1\u7B97\u540C\u6708\u5165\u5C97\u4EBA\u5747\u5360\u6BD4";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u622A\u6B62\u5230\u6BCF\u65E5\u5728\u8D37\u8D37\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6301\u6709\u8D37\u6B3E\u5BA2\u6237\u6570\n\u540C\u6708\u5165\u5C97\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u4E2D\u6700\u591A\u7684\u5728\u8D37\u8D37\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u540C\u7406\n\u540C\u6708\u5165\u5C97\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u5168\u884C\u4E0E\u6211\u540C\u6708\u5165\u5C97\u7684\u5BA2\u6237\u7ECF\u7406\u5408\u8BA1\u5728\u8D37\u8D37\u6B3E\u5BA2\u6237\u6570/\u540C\u6708\u5165\u5C97\u5BA2\u6237\u7ECF\u7406\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '同月入岗位贷款金额', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '同月入岗贷款金额占比', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '同月入岗贷款客户数', legend: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    LoanGrowthGuideComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.loansGrowingGuideAmountQuery(1, 1);
                this.loansGrowingGuideProportionQuery(2, 1);
                this.loansGrowingGuideCustQuery(3, 1);
            }
        }
    };
    LoanGrowthGuideComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansGrowingGuideAmountQuery(1, 1);
        this.loansGrowingGuideProportionQuery(2, 1);
        this.loansGrowingGuideCustQuery(3, 1);
    };
    LoanGrowthGuideComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanGrowthGuideComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanGrowthGuideComponent.prototype.loansGrowingGuideAmountQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansGrowingGuideAmountQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                if (data.myLoansAmountList && data.myLoansAmountList.length != 0 && data.togetherLoansAmountList && data.togetherLoansAmountList.length != 0 && data.togetherLoansAverageAmountList && data.togetherLoansAverageAmountList.length != 0) {
                    data.myLoansAmountList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_1.push(element.dkje_w);
                    });
                    data.togetherLoansAmountList.forEach(function (element) {
                        yData2_1.push(element.dkje_dy);
                    });
                    data.togetherLoansAverageAmountList.forEach(function (element) {
                        yData3_1.push(element.dkje_pj);
                    });
                }
                _this.echoParams(1, data.dmFlag);
                _this.option1 = {
                    title: {
                        text: '同月入岗位贷款金额',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '金额(万元)',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗第一名',
                            data: yData2_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗平均',
                            data: yData3_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanGrowthGuideComponent.prototype.loansGrowingGuideProportionQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansGrowingGuideProportionQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_2 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var yData3_2 = [];
                if (data.myLoansAmountPTList && data.myLoansAmountPTList.length != 0 && data.togetherLoansAmountPTList && data.togetherLoansAmountPTList.length != 0 && data.togetherLoansAverageAmountPTList && data.togetherLoansAverageAmountPTList.length != 0) {
                    data.myLoansAmountPTList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_2.push(Number(element.dkjezh_w * 100).toFixed(2));
                    });
                    data.togetherLoansAmountPTList.forEach(function (element) {
                        yData2_2.push(Number(element.dkjezh_dy * 100).toFixed(2));
                    });
                    data.togetherLoansAverageAmountPTList.forEach(function (element) {
                        yData3_2.push(Number(element.dkjezh_pj * 100).toFixed(2));
                    });
                }
                _this.echoParams(2, data.dmFlag);
                _this.option2 = {
                    title: {
                        text: '同月入岗贷款金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_2,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '占比',
                        nameGap: 30,
                        scale: true,
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗第一名',
                            data: yData2_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗平均',
                            data: yData3_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanGrowthGuideComponent.prototype.loansGrowingGuideCustQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansGrowingGuideCustQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_3 = [];
                var yData1_3 = [];
                var yData2_3 = [];
                var yData3_3 = [];
                if (data.myLoansCustList && data.myLoansCustList.length != 0 && data.togetherLoansCustList && data.togetherLoansCustList.length != 0 && data.togetherLoansAverageCustList && data.togetherLoansAverageCustList.length != 0) {
                    data.myLoansCustList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_3.push(element.dkkh_w);
                    });
                    data.togetherLoansCustList.forEach(function (element) {
                        yData2_3.push(element.dkkh_dy);
                    });
                    data.togetherLoansAverageCustList.forEach(function (element) {
                        yData3_3.push(element.dkkh_pj);
                    });
                }
                _this.echoParams(3, data.dmFlag);
                _this.option3 = {
                    title: {
                        text: '同月入岗贷款客户数',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '同月入岗第一名' }, { name: '同月入岗平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_3,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '客户数',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗第一名',
                            data: yData2_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '同月入岗平均',
                            data: yData3_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanGrowthGuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-growthGuide',
            template: __webpack_require__(/*! ./loan-growthGuide.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.html"),
            styles: [__webpack_require__(/*! ./loan-growthGuide.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-growthGuide/loan-growthGuide.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanGrowthGuideComponent);
    return LoanGrowthGuideComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-增量趋势 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"newLoansAmtQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"newLoansAmtQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"newLoansAmtProQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"newLoansAmtProQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"newLoansCustQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"newLoansCustQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div>\r\n                <div class=\"content2 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"newLoansCustQuery(4,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"newLoansCustQuery(4,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" pTooltip=\"贷款增量趋势-客均贷款\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div> -->\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4taW5jcmVhc2VtZW50YWxUZW5kZW5jeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbWVyLXBlcmZvcm1hbmNlXFxsb2FuXFxsb2FuLWluY3JlYXNlbWVudGFsVGVuZGVuY3lcXGxvYW4taW5jcmVhc2VtZW50YWxUZW5kZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4taW5jcmVhc2VtZW50YWxUZW5kZW5jeS9sb2FuLWluY3JlYXNlbWVudGFsVGVuZGVuY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4ucm93IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGJhc2ljQ29sb3I7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: LoanIncreasementalTendencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanIncreasementalTendencyComponent", function() { return LoanIncreasementalTendencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanIncreasementalTendencyComponent = /** @class */ (function () {
    function LoanIncreasementalTendencyComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.msgs = [];
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u622A\u6B62\u5230\u5F53\u65E5\u6240\u5E26\u6765\u7684\u8D37\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u7684\u8D37\u6B3E\u65E5\u5747\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u5E26\u6765\u7684\u8D37\u6B3E\u4F59\u989D/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u622A\u6B62\u5230\u5F53\u65E5\u6240\u5E26\u6765\u7684\u8D37\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u8D37\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u65B0\u589E\u5BA2\u6237\u7684\u8D37\u6B3E\u65E5\u5747\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u8D37\u6B3E\u65E5\u5747\u5360\u6BD4\n\u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4\n\u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u4E2D\u65B0\u589E\u5BA2\u6237\u8D37\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u8D37\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u65B0\u589E\u5BA2\u6237\u8D37\u6B3E\u4F59\u989D\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u622A\u6B62\u5230\u6BCF\u65E5\u65B0\u589E\u8D37\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u5185\u65B0\u589E\u6301\u6709\u8D37\u6B3E\u7684\u5BA2\u6237\u6570\n\u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u90E8\u95E8\u5185\u5408\u8BA1\u622A\u6B62\u5230\u6BCF\u65E5\u65B0\u589E\u8D37\u6B3E\u5BA2\u6237\u6570/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '新增客户贷款金额', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '新增客户贷款金额占比', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '增量客户数', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    LoanIncreasementalTendencyComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.newLoansAmtQuery(1, 1);
                this.newLoansAmtProQuery(2, 1);
                this.newLoansCustQuery(3, 1);
            }
        }
    };
    LoanIncreasementalTendencyComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.newLoansAmtQuery(1, 1);
        this.newLoansAmtProQuery(2, 1);
        this.newLoansCustQuery(3, 1);
    };
    LoanIncreasementalTendencyComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanIncreasementalTendencyComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanIncreasementalTendencyComponent.prototype.newLoansAmtQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.newLoansAmtQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                if (data.myNewdLoansList && data.myNewdLoansList.length != 0 && data.departmentNewLoansList && data.departmentNewLoansList.length != 0 && data.brachNewLoansList && data.brachNewLoansList.length != 0) {
                    data.myNewdLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_1.push(element.dkje_w);
                    });
                    data.departmentNewLoansList.forEach(function (element) {
                        yData2_1.push(element.dkje_bm);
                    });
                    data.brachNewLoansList.forEach(function (element) {
                        yData3_1.push(element.dkje_fh);
                    });
                }
                _this.echoParams(1, data.dmFlag);
                _this.option1 = {
                    title: {
                        text: '新增客户贷款金额',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '金额(万元)',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanIncreasementalTendencyComponent.prototype.newLoansAmtProQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.newLoansAmtProQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_2 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var yData3_2 = [];
                if (data.myNewLoansProList && data.myNewLoansProList.length != 0 && data.departmentNewLoansProList && data.departmentNewLoansProList.length != 0 && data.departmentOneNewLoansProList && data.departmentOneNewLoansProList.length != 0) {
                    data.myNewLoansProList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_2.push(Number(element.dkjezb_w * 100).toFixed(2));
                    });
                    data.departmentNewLoansProList.forEach(function (element) {
                        yData2_2.push(Number(element.dkjezb_bm * 100).toFixed(2));
                    });
                    data.departmentOneNewLoansProList.forEach(function (element) {
                        yData3_2.push(Number(element.dkjezb_dy * 100).toFixed(2));
                    });
                }
                _this.echoParams(2, data.dmFlag);
                _this.option2 = {
                    title: {
                        text: '新增客户贷款金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_2,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '占比',
                        nameGap: 30,
                        scale: true,
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门第一名',
                            data: yData3_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanIncreasementalTendencyComponent.prototype.newLoansCustQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.newLoansCustQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_3 = [];
                var yData1_3 = [];
                var yData2_3 = [];
                var yData3_3 = [];
                if (data.brachNewCustList && data.brachNewCustList.length != 0 && data.departmentNewCustList && data.departmentNewCustList.length != 0 && data.myNewCustList && data.myNewCustList.length != 0) {
                    data.myNewCustList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_3.push(element.dkkh_w);
                    });
                    data.departmentNewCustList.forEach(function (element) {
                        yData2_3.push(element.dkkh_bm);
                    });
                    data.brachNewCustList.forEach(function (element) {
                        yData3_3.push(element.dkkh_fh);
                    });
                }
                _this.echoParams(3, data.dmFlag);
                _this.option3 = {
                    title: {
                        text: '增量客户数',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_3,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '客户数',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanIncreasementalTendencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-increasementalTendency',
            template: __webpack_require__(/*! ./loan-increasementalTendency.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.html"),
            styles: [__webpack_require__(/*! ./loan-increasementalTendency.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-increasementalTendency/loan-increasementalTendency.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanIncreasementalTendencyComponent);
    return LoanIncreasementalTendencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-行业投向 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansIndtstryQuery(1,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansIndtstryQuery(1,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option5\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansIndtstryQueryCust(2,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansIndtstryQueryCust(2,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4taW5kdXN0cnlJbnZlc3RtZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGxvYW5cXGxvYW4taW5kdXN0cnlJbnZlc3RtZW50XFxsb2FuLWluZHVzdHJ5SW52ZXN0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4taW5kdXN0cnlJbnZlc3RtZW50L2xvYW4taW5kdXN0cnlJbnZlc3RtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LoanIndustryInvestmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanIndustryInvestmentComponent", function() { return LoanIndustryInvestmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanIndustryInvestmentComponent = /** @class */ (function () {
    function LoanIndustryInvestmentComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '截止到所选时间的最后一日，我的贷款余额在各行业的余额与占比';
        this.pTooltip2 = '截止到所选时间的最后一日，部门合计贷款余额在各行业余额与占比';
        this.pTooltip3 = '按日展示我的各行业每日贷款余额的变化趋势，按月展示自然月内各行业贷款日均变化趋势';
        this.pTooltip4 = '截止到所选时间的最后一日，我的在贷贷款客户数在各行业的客户数与占比';
        this.pTooltip5 = '截止到所选时间的最后一日，部门合计在贷贷款客户数在各行业的客户数与占比';
        this.pTooltip6 = '按日展示我的各行业每日在贷贷款客户数的变化趋势，按月展示各行业在自然月持有贷款产品的客户数变化趋势';
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption2({ title: '我的各行业占比', name: '行业占比', data: [0] });
        this.option2 = this.customerPerformanceService.returnOption2({ title: '本级累计各行业占比', name: '行业占比', data: [0] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '各行业变化趋势', legend: [], xAxisData: [], yAxisName: '贷款金额(万元)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption2({ title: '我的各行业占比', name: '行业占比', data: [0] });
        this.option5 = this.customerPerformanceService.returnOption2({ title: '本级累计各行业占比', name: '行业占比', data: [0] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '贷款金额占比', legend: [], xAxisData: [], yAxisName: '占比', series: [] });
    }
    LoanIndustryInvestmentComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.loansIndtstryQuery(1, 1);
                this.loansIndtstryQueryCust(2, 1);
            }
        }
    };
    LoanIndustryInvestmentComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansIndtstryQuery(1, 1);
        this.loansIndtstryQueryCust(2, 1);
    };
    LoanIndustryInvestmentComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanIndustryInvestmentComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanIndustryInvestmentComponent.prototype.loansIndtstryQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansIndtstryQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_1;
                var ydata = [];
                var data1 = [];
                var data2 = [];
                var ydata2 = [];
                var series = [];
                if (data.myAllIndtstryAmt && JSON.stringify(data.myAllIndtstryAmt) != '{}' && data.departmentAllIndtstryAmt && JSON.stringify(data.departmentAllIndtstryAmt) != '{}') {
                    for (var k in data.myAllIndtstryAmt) {
                        var objTemp = {};
                        objTemp['name'] = k;
                        objTemp['value'] = data.myAllIndtstryAmt[k];
                        data1.push(objTemp);
                    }
                    for (var k in data.departmentAllIndtstryAmt) {
                        var objTemp = {};
                        objTemp['name'] = k;
                        objTemp['value'] = data.departmentAllIndtstryAmt[k];
                        data2.push(objTemp);
                    }
                }
                if (data.loansIndtstryDayMap && JSON.stringify(data.loansIndtstryDayMap) != '{}') {
                    var _loop_1 = function (list) {
                        var arrTemp = [];
                        if (data.loansIndtstryDayMap[list] && data.loansIndtstryDayMap[list].length != 0) {
                            xData_1 = [];
                            data.loansIndtstryDayMap[list].forEach(function (element, i) {
                                var arr = element.dt.split('-');
                                if (data.dmFlag && data.dmFlag == 'D') {
                                    xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                                }
                                else if (data.dmFlag && data.dmFlag == 'M') {
                                    xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                                }
                                arrTemp.push(element.dkje_w);
                            });
                            var objTemp1 = {};
                            objTemp1['name'] = data.loansIndtstryDayMap[list][0][list];
                            ydata.push(objTemp1);
                            series.push({
                                name: data.loansIndtstryDayMap[list][0][list],
                                data: arrTemp,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == arrTemp.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    };
                    for (var list in data.loansIndtstryDayMap) {
                        _loop_1(list);
                    }
                }
                _this.echoParams(1, data.dmFlag);
                _this.option1 = {
                    title: {
                        text: '我的各行业占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    // color: ['#37A2DA', '#FB7293', '#9FE6B8', '#E7BCF3', '#67E0E3', '#FFDB5C'],
                    series: [
                        {
                            name: '行业占比',
                            data: data1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option2 = {
                    title: {
                        text: '本级累计各行业占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: data2,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option3 = {
                    title: {
                        text: '各行业变化趋势',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '贷款金额(万元)',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: series
                };
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
    LoanIndustryInvestmentComponent.prototype.loansIndtstryQueryCust = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansIndtstryQueryCust(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_2;
                var ydata = [];
                var data1 = [];
                var data2 = [];
                var ydata2 = [];
                var series = [];
                if (data.myAllIndtstryAmt && JSON.stringify(data.myAllIndtstryAmt) != '{}' && data.departmentAllIndtstryAmt && JSON.stringify(data.departmentAllIndtstryAmt) != '{}') {
                    for (var k in data.myAllIndtstryAmt) {
                        var objTemp = {};
                        objTemp['name'] = k;
                        objTemp['value'] = data.myAllIndtstryAmt[k];
                        data1.push(objTemp);
                    }
                    for (var k in data.departmentAllIndtstryAmt) {
                        var objTemp = {};
                        objTemp['name'] = k;
                        objTemp['value'] = data.departmentAllIndtstryAmt[k];
                        data2.push(objTemp);
                    }
                }
                if (data.loansIndtstryDayMap && JSON.stringify(data.loansIndtstryDayMap) != '{}') {
                    var _loop_2 = function (list) {
                        var arrTemp = [];
                        if (data.loansIndtstryDayMap[list] && data.loansIndtstryDayMap[list].length != 0) {
                            xData_2 = [];
                            data.loansIndtstryDayMap[list].forEach(function (element, i) {
                                var arr = element.dt.split('-');
                                if (data.dmFlag && data.dmFlag == 'D') {
                                    xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                                }
                                else if (data.dmFlag && data.dmFlag == 'M') {
                                    xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                                }
                                arrTemp.push(element.dkkh_w);
                            });
                            var objTemp1 = {};
                            objTemp1['name'] = data.loansIndtstryDayMap[list][0][list];
                            ydata.push(objTemp1);
                            series.push({
                                name: data.loansIndtstryDayMap[list][0][list],
                                data: arrTemp,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == arrTemp.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    };
                    for (var list in data.loansIndtstryDayMap) {
                        _loop_2(list);
                    }
                }
                _this.echoParams(2, data.dmFlag);
                _this.option4 = {
                    title: {
                        text: '我的各行业占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: data1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['50%', '55%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option5 = {
                    title: {
                        text: '本级累计各行业占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: data2,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['50%', '55%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option6 = {
                    title: {
                        text: '各行业变化趋势',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_2,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '贷款客户数',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: series
                };
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
    LoanIndustryInvestmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-industryInvestment',
            template: __webpack_require__(/*! ./loan-industryInvestment.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.html"),
            styles: [__webpack_require__(/*! ./loan-industryInvestment.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-industryInvestment/loan-industryInvestment.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanIndustryInvestmentComponent);
    return LoanIndustryInvestmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-产品类型 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"productList\" [(ngModel)]=\"productId\" (onChange)=\"productChange()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"smallClassProductList\" [(ngModel)]=\"smallClassProductId\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansProductTrendQuery(1,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansProductTrendQuery(1,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div echarts [options]=\"option4\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"row\">\r\n                        <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div echarts [options]=\"option5\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"content1 ui-g-12 row\">\r\n                    <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansProductTrendQuery(2,1)\">日</span>\r\n                    <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansProductTrendQuery(2,2)\">月</span>\r\n                    <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.btn button {\n  border-radius: 15px; }\n\n.padding-0 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tcHJvZHVjdENhdGVnb3J5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGxvYW5cXGxvYW4tcHJvZHVjdENhdGVnb3J5XFxsb2FuLXByb2R1Y3RDYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW9CbkI7RUFFUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2xvYW4vbG9hbi1wcm9kdWN0Q2F0ZWdvcnkvbG9hbi1wcm9kdWN0Q2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzaWNDb2xvcjojMzRDRkU2ICFkZWZhdWx0O1xyXG4ucm93IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGJhc2ljQ29sb3I7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: LoanProductCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductCategoryComponent", function() { return LoanProductCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoanProductCategoryComponent = /** @class */ (function () {
    function LoanProductCategoryComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, router, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '截止到所选时间的最后一日，我的贷款余额在各产品的余额与占比';
        this.pTooltip2 = '截止到所选时间的最后一日，部门合计贷款余额在各产品余额与占比';
        this.pTooltip3 = '按日展示我的各产品每日贷款余额的变化趋势，按月展示自然月内各产品贷款日均变化趋势';
        this.pTooltip4 = '截止到所选时间的最后一日，我的在贷贷款客户数在各产品的客户数与占比\n注：允许单个客户可同时持有多个产品，故合计占比有可能超过100%';
        this.pTooltip5 = '截止到所选时间的最后一日，部门合计在贷贷款客户数在各产品的客户数与占比\n注：允许单个客户可同时持有多个产品，故合计占比有可能超过100%';
        this.pTooltip6 = '按日展示我的各产品每日在贷贷款客户数的变化趋势，按月展示各产品在自然月持有贷款产品的客户数变化趋势';
        this.productId = '';
        this.productList = [
            { label: '请选择', value: '' },
            { label: '一般贷款', value: 'L2001' },
            { label: '小本贷款', value: 'L2002' },
            { label: 'E融卡', value: 'L2048' },
            { label: '时贷通', value: 'L2004' },
            { label: '自助卡', value: 'L2005' },
            { label: '消费信贷', value: 'L2006' },
            { label: '承兑', value: 'L2007' },
            { label: '保函', value: 'L2008' },
            { label: '贴现', value: 'L2009' },
            { label: '委托贷款', value: 'L2010' }
        ];
        this.smallClassProductList = [];
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption2({ title: '我的各产品金额占比', name: '行业占比', data: [0] });
        this.option2 = this.customerPerformanceService.returnOption2({ title: '部门各产品金额占比', name: '行业占比', data: [0] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '各产品变化趋势', legend: [], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption2({ title: '我的各产品客户数占比', name: '行业占比', data: [0] });
        this.option5 = this.customerPerformanceService.returnOption2({ title: '部门各产品客户数占比', name: '行业占比', data: [0] });
        this.option6 = this.customerPerformanceService.returnOption({ title: '各产品变化趋势', legend: [], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    LoanProductCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.urlParams = params;
        });
        // console.log(urlParams);
        if (this.urlParams && JSON.stringify(this.urlParams) != '{}') {
            if (this.urlParams.flag != '1') {
                this.loansProductPtQuery(0, 1);
                this.deploansProductPtQuery(0, 1);
                this.loansProductTrendQuery(0, 1);
            }
        }
    };
    LoanProductCategoryComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansProductPtQuery(0, 1);
        this.deploansProductPtQuery(0, 1);
        this.loansProductTrendQuery(0, 1);
    };
    LoanProductCategoryComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanProductCategoryComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanProductCategoryComponent.prototype.loansProductPtQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
            productId: ''
        };
        this.customerPerformanceHttpService.loansProductPtQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3 = [];
                if (data.myProductAmtList && data.myProductAmtList.length != 0) {
                    data.myProductAmtList.forEach(function (element) {
                        _this.productList.forEach(function (element2) {
                            if (element.lb == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.dkje_w;
                                yData1_1.push(objTemp);
                            }
                        });
                    });
                }
                if (data.myProductCustList && data.myProductCustList.length != 0) {
                    // this.productList.forEach(element => {
                    //     data.myProductCustList.forEach(element2 => {
                    //         if (element2.lb == element.value) {
                    //             xData1.push(element.label);
                    //         }
                    //     });
                    // });
                    // data.myProductCustList.forEach(element => {
                    //     yData2.push(element.dkkh_w);
                    //     yData3.push((element.dkkhzb_w * 100).toFixed(2));
                    // });
                    data.myProductCustList.forEach(function (element) {
                        _this.productList.forEach(function (element2) {
                            if (element.lb == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.dkkh_w;
                                yData2_1.push(objTemp);
                            }
                        });
                    });
                }
                _this.option1 = {
                    title: {
                        text: '我的各产品金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: yData1_1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option4 = {
                    title: {
                        text: '我的各产品客户数占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: yData2_1,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                // this.option4 = {
                //     title: {
                //         text: '我的各产品客户数占比',
                //         left: 'center',
                //         y: '10px',
                //         textStyle: {
                //             fontWeight: '500',
                //             fontSize: '16'
                //         }
                //     },
                //     // legend: {
                //     //     data: [{ name: '客户数变化' }, { name: '占比变化' }],
                //     //     top: 'bottom',
                //     //     itemGap: 20,
                //     //     icon: 'line'
                //     // },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //             type: 'cross'
                //         }
                //     },
                //     grid: {
                //         width: '80%',
                //         height: '75%',
                //         left: '10%',
                //         bottom: '10%',
                //         containLabel: true
                //     },
                //     xAxis: {
                //         type: 'category',
                //         data: xData1,
                //         axisLabel: {
                //             rotate: 30
                //         },
                //         axisTick: {
                //             show: false
                //         },
                //         axisLine: {
                //             show: false
                //         }
                //     },
                //     yAxis: [
                //         {
                //             name: '客户数',
                //             type: 'value',
                //             nameGap: 30,
                //             splitArea: {
                //                 show: true
                //             },
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 show: false
                //             }
                //         }, {
                //             name: '占比',
                //             type: 'value',
                //             nameGap: 30,
                //             splitArea: {
                //                 show: true
                //             },
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 show: false
                //             },
                //             axisLabel: {
                //                 formatter: '{value}%'
                //             }
                //         }
                //     ],
                //     series: [
                //         {
                //             name: '客户数变化',
                //             data: yData2,
                //             type: 'bar',
                //             yAxisIndex: 0,
                //             itemStyle: {
                //                 normal: {
                //                     label: {
                //                         show: true,
                //                         position: 'top'
                //                     }
                //                 }
                //             }
                //         },
                //         {
                //             name: '占比变化',
                //             data: yData3,
                //             type: 'bar',
                //             yAxisIndex: 1,
                //             itemStyle: {
                //                 normal: {
                //                     label: {
                //                         show: true,
                //                         position: 'top'
                //                     }
                //                 }
                //             }
                //         }
                //     ]
                // }
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
    LoanProductCategoryComponent.prototype.deploansProductPtQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
            productId: ''
        };
        this.customerPerformanceHttpService.deploansProductPtQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var yData3 = [];
                if (data.dptProductAmtList && data.dptProductAmtList.length != 0) {
                    _this.productList.forEach(function (element2) {
                        data.dptProductAmtList.forEach(function (element) {
                            if (element.lb == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.dkje_bm;
                                yData1_2.push(objTemp);
                            }
                        });
                    });
                }
                if (data.dptProductCustList && data.dptProductCustList.length != 0) {
                    // this.productList.forEach(element => {
                    //     data.dptProductCustList.forEach(element2 => {
                    //         if (element2.lb == element.value) {
                    //             xData1.push(element.label);
                    //         }
                    //     });
                    // });
                    // data.dptProductCustList.forEach(element => {
                    //     yData2.push(element.dkkh_bm);
                    //     yData3.push((element.dkkhzb_bm * 100).toFixed(2));
                    // });
                    _this.productList.forEach(function (element2) {
                        data.dptProductCustList.forEach(function (element) {
                            if (element.lb == element2.value) {
                                var objTemp = {};
                                objTemp['name'] = element2.label;
                                objTemp['value'] = element.dkkh_bm;
                                yData2_2.push(objTemp);
                            }
                        });
                    });
                }
                _this.option2 = {
                    title: {
                        text: '部门各产品金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: yData1_2,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                _this.option5 = {
                    title: {
                        text: '部门各产品客户数占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    series: [
                        {
                            name: '行业占比',
                            data: yData2_2,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                normal: {
                                    formatter: '{b} {c} , {d}%'
                                }
                            }
                        }
                    ]
                };
                // this.option5 = {
                //     title: {
                //         text: '部门各产品客户数占比',
                //         left: 'center',
                //         y: '10px',
                //         textStyle: {
                //             fontWeight: '500',
                //             fontSize: '16'
                //         }
                //     },
                //     // legend: {
                //     //     data: [{ name: '客户数变化' }, { name: '占比变化' }],
                //     //     top: 'bottom',
                //     //     itemGap: 20,
                //     //     icon: 'line'
                //     // },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //             type: 'cross'
                //         }
                //     },
                //     grid: {
                //         width: '80%',
                //         height: '75%',
                //         left: '10%',
                //         bottom: '10%',
                //         containLabel: true
                //     },
                //     xAxis: {
                //         type: 'category',
                //         data: xData1,
                //         axisLabel: {
                //             rotate: 30
                //         },
                //         axisTick: {
                //             show: false
                //         },
                //         axisLine: {
                //             show: false
                //         }
                //     },
                //     yAxis: [
                //         {
                //             name: '客户数',
                //             type: 'value',
                //             nameGap: 30,
                //             splitArea: {
                //                 show: true
                //             },
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 show: false
                //             }
                //         }, {
                //             name: '占比',
                //             type: 'value',
                //             nameGap: 30,
                //             splitArea: {
                //                 show: true
                //             },
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 show: false
                //             },
                //             axisLabel: {
                //                 formatter: '{value}%'
                //             }
                //         }
                //     ],
                //     series: [
                //         {
                //             name: '客户数变化',
                //             data: yData2,
                //             type: 'bar',
                //             yAxisIndex: 0,
                //             itemStyle: {
                //                 normal: {
                //                     label: {
                //                         show: true,
                //                         position: 'top'
                //                     }
                //                 }
                //             }
                //         },
                //         {
                //             name: '占比变化',
                //             data: yData3,
                //             type: 'bar',
                //             yAxisIndex: 1,
                //             itemStyle: {
                //                 normal: {
                //                     label: {
                //                         show: true,
                //                         position: 'top'
                //                     }
                //                 }
                //             }
                //         }
                //     ]
                // }
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
    LoanProductCategoryComponent.prototype.loansProductTrendQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate,
            productId: ''
        };
        this.customerPerformanceHttpService.loansProductTrendQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var yData1_3 = [];
                var yData2_3 = [];
                var series1_1 = [];
                var series2_1 = [];
                var data1_1 = [];
                var data2_1 = [];
                if (data.myAmtTrendList && data.myAmtTrendList.length != 0) {
                    data.myAmtTrendList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                    });
                    _this.productList.forEach(function (element) {
                        yData1_3 = [];
                        data.myAmtTrendList.forEach(function (element2) {
                            element2.amtList.forEach(function (element3) {
                                if (element3.lb == element.value) {
                                    data1_1.push({ name: element.label });
                                    yData1_3.push(element3.dkje_w);
                                }
                            });
                        });
                        var length = yData1_3.length;
                        if (yData1_3 && yData1_3.length != 0) {
                            var objTemp = {};
                            objTemp['name'] = element.label;
                            objTemp['type'] = 'line';
                            objTemp['itemStyle'] = {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            };
                            objTemp['data'] = yData1_3;
                            series1_1.push(objTemp);
                        }
                    });
                }
                if (data.myCustTrendList && data.myCustTrendList.length != 0) {
                    data.myCustTrendList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                    });
                    _this.productList.forEach(function (element) {
                        yData2_3 = [];
                        data.myCustTrendList.forEach(function (element2) {
                            element2.custNumList.forEach(function (element3) {
                                if (element3.lb == element.value) {
                                    data2_1.push({ name: element.label });
                                    yData2_3.push(element3.dkkh_w);
                                }
                            });
                        });
                        var length = yData2_3.length;
                        if (yData2_3 && yData2_3.length != 0) {
                            var objTemp = {};
                            objTemp['name'] = element.label;
                            objTemp['type'] = 'line';
                            objTemp['itemStyle'] = {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            };
                            objTemp['data'] = yData2_3;
                            series2_1.push(objTemp);
                        }
                    });
                    console.log(series2_1);
                }
                if (ind == 0 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: '各产品变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: data1_1,
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '金额(万元)',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: series1_1
                    };
                }
                if (ind == 0 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option6 = {
                        title: {
                            text: '各产品变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: data2_1,
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '客户数',
                            nameGap: 30,
                            scale: true,
                            splitArea: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        series: series2_1
                    };
                }
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
    LoanProductCategoryComponent.prototype.query = function () {
        if (this.smallClassProductId) {
            this.router.navigate(['/pages/tzb/custom/performance-analysis/loan/smallClassProduct', { Property3: this.urlParams.Property3, condition: this.urlParams.condition, flag: this.urlParams.flag, productId: this.productId, smallClassProductId: this.smallClassProductId }]);
        }
    };
    LoanProductCategoryComponent.prototype.productChange = function () {
        this.smallClassProductId = '';
        switch (this.productId) {
            case 'L2001':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '普通贷款', value: 'L3001' },
                    { label: '自助类贷款', value: 'L3002' },
                    { label: '分期贷款', value: 'L3003' },
                    { label: '按揭贷款', value: 'L3004' }
                ];
                break;
            case 'L2002':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '一般小本贷款', value: 'L3005' },
                    { label: '兴农贷', value: 'L3006' },
                    { label: '小本易租贷', value: 'L3007' },
                    { label: '青年置业贷款', value: 'L3008' },
                    { label: '小本自助贷款', value: 'L3009' }
                ];
                break;
            case 'L2048':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: 'E融卡', value: 'L3162' }
                ];
                break;
            case 'L2004':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '时贷通', value: 'L3011' }
                ];
                break;
            case 'L2005':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '村聚易贷.兴农卡', value: 'L3012' },
                    { label: '存贷合一卡', value: 'L3013' },
                    { label: '兴福卡', value: 'L3014' }
                ];
                break;
            case 'L2006':
                this.smallClassProductList = [
                    { label: '合计', value: 'total' },
                    { label: '薪易贷', value: 'L3015' },
                    { label: '安居贷', value: 'L3016' },
                    { label: '薪消费', value: 'L3017' },
                    { label: '房易贷', value: 'L3018' },
                    { label: '薪金贷', value: 'L3144' },
                    { label: 'e质押（个人消费）', value: 'L3152' }
                ];
                break;
            case 'L2007':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '银行承兑汇票', value: 'L3019' },
                    { label: '商业承兑汇票', value: 'L3020' }
                ];
                break;
            case 'L2008':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '保函', value: 'L3021' }
                ];
                break;
            case 'L2009':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '贴现', value: 'L3022' }
                ];
                break;
            case 'L2010':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '个人委托贷款', value: 'L3023' },
                    { label: '企业委托贷款', value: 'L3024' }
                ];
                break;
            default: this.smallClassProductList = [];
        }
    };
    LoanProductCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-productCategory',
            template: __webpack_require__(/*! ./loan-productCategory.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.html"),
            styles: [__webpack_require__(/*! ./loan-productCategory.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-productCategory/loan-productCategory.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanProductCategoryComponent);
    return LoanProductCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-产品小类 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"productList\" [(ngModel)]=\"productId\" (onChange)=\"productChange()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"smallClassProductList\" [(ngModel)]=\"smallClassProductId\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-1 btn\">\r\n                <button pButton label=\"查询\" (click)=\"loansSmallProductQuery(0,1)\"></button>\r\n            </div>\r\n        </div>\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansSmallProductQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansSmallProductQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansSmallProductQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansSmallProductQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.btn button {\n  border-radius: 15px; }\n\n.padding-0 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tc21hbGxDbGFzc1Byb2R1Y3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci1wZXJmb3JtYW5jZVxcbG9hblxcbG9hbi1zbWFsbENsYXNzUHJvZHVjdFxcbG9hbi1zbWFsbENsYXNzUHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW9CbkI7RUFFUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL2xvYW4vbG9hbi1zbWFsbENsYXNzUHJvZHVjdC9sb2FuLXNtYWxsQ2xhc3NQcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LoanSmallClassProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanSmallClassProductComponent", function() { return LoanSmallClassProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanSmallClassProductComponent = /** @class */ (function () {
    function LoanSmallClassProductComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = '金额变化：按日展示所选产品每日余额变化，按月展示所选产品自然月日均变化\n占比变化：按日展示所选产品每日余额在所有贷款产品余额占比，按月展示所选产品贷款日均在所有贷款日均占比';
        this.pTooltip2 = '人数变化：按日展示所选产品每日在贷客户数变化，按月展示所选产品自然月持有客户数变化\n占比变化：按日展示所选产品每日在贷客户数在所有贷款产品客户数占比，按月展示所选产品自然月持有客户在所有贷款持有客户占比';
        this.productList = [
            { label: '请选择', value: '' },
            { label: '一般贷款', value: 'L2001' },
            { label: '小本贷款', value: 'L2002' },
            { label: 'E融卡', value: 'L2048' },
            { label: '时贷通', value: 'L2004' },
            { label: '自助卡', value: 'L2005' },
            { label: '消费信贷', value: 'L2006' },
            { label: '承兑', value: 'L2007' },
            { label: '保函', value: 'L2008' },
            { label: '贴现', value: 'L2009' },
            { label: '委托贷款', value: 'L2010' }
        ];
        this.smallClassProductTotalList = [
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '普通贷款', value: 'L3001' },
            { label: '自助类贷款', value: 'L3002' },
            { label: '分期贷款', value: 'L3003' },
            { label: '按揭贷款', value: 'L3004' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '一般小本贷款', value: 'L3005' },
            { label: '兴农贷', value: 'L3006' },
            { label: '小本易租贷', value: 'L3007' },
            { label: '青年置业贷款', value: 'L3008' },
            { label: '小本自助贷款', value: 'L3009' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: 'E融卡', value: 'L3162' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '时贷通', value: 'L3011' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '村聚易贷.兴农卡', value: 'L3012' },
            { label: '存贷合一卡', value: 'L3013' },
            { label: '兴福卡', value: 'L3014' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '薪易贷', value: 'L3015' },
            { label: '安居贷', value: 'L3016' },
            { label: '薪消费', value: 'L3017' },
            { label: '房易贷', value: 'L3018' },
            { label: '薪金贷', value: 'L3144' },
            { label: 'e质押（个人消费）', value: 'L3152' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '银行承兑汇票', value: 'L3019' },
            { label: '商业承兑汇票', value: 'L3020' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '保函', value: 'L3021' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '贴现', value: 'L3022' },
            { label: '请选择', value: '' },
            { label: '合计', value: 'total' },
            { label: '个人委托贷款', value: 'L3023' },
            { label: '企业委托贷款', value: 'L3024' }
        ];
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '金额变化趋势', legend: [], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '客户数变化趋势', legend: [], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    LoanSmallClassProductComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.loansSmallProductQuery(0, 1);
            }
            this.productId = urlParams.productId;
            this.smallClassProductId = urlParams.smallClassProductId;
            this.productChange('init');
        }
    };
    LoanSmallClassProductComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansSmallProductQuery(0, 1);
    };
    LoanSmallClassProductComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanSmallClassProductComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanSmallClassProductComponent.prototype.loansSmallProductQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        if (this.smallClassProductId && this.smallClassProductId == 'total') { //合计
            var params = {
                tellerId: this.commonHeader.userId,
                dmFlag: this.dmFlag,
                startDate: this.startDate,
                endDate: this.endDate,
                productId: this.productId
            };
            this.customerPerformanceHttpService.loansProductTrendQuery(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var xData1_1 = [];
                    var xData2_1 = [];
                    var yData1_2 = [];
                    var yData1_1_1 = [];
                    var yData2_1 = [];
                    var yData2_2_1 = [];
                    var yData3 = [];
                    var yData4 = [];
                    var series1_1 = [];
                    var series2_1 = [];
                    var data1_1 = [];
                    var data2_1 = [];
                    if (data.myAmtTrendList && data.myAmtTrendList.length != 0) {
                        data.myAmtTrendList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                        });
                        _this.productList.forEach(function (element) {
                            yData1_2 = [];
                            yData1_1_1 = [];
                            data.myAmtTrendList.forEach(function (element2) {
                                element2.amtList.forEach(function (element3) {
                                    if (element3.lb == element.value) {
                                        data1_1.push({ name: element.label });
                                        yData1_2.push(element3.dkje_w);
                                        yData1_1_1.push(Number(element3.dkjezb_w * 100).toFixed(2));
                                    }
                                });
                            });
                            if (yData1_2 && yData1_2.length != 0) {
                                var length_1 = yData1_2.length;
                                var objTemp = {};
                                objTemp['name'] = '金额变化';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 0;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_1 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData1_2;
                                series1_1.push(objTemp);
                            }
                            if (yData1_1_1 && yData1_1_1.length != 0) {
                                var length_2 = yData1_1_1.length;
                                var objTemp = {};
                                objTemp['name'] = '金额占比变化';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 1;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_2 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData1_1_1;
                                series1_1.push(objTemp);
                            }
                        });
                        console.log(series1_1);
                    }
                    if (data.myCustTrendList && data.myCustTrendList.length != 0) {
                        data.myCustTrendList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                        });
                        _this.productList.forEach(function (element) {
                            yData2_1 = [];
                            yData2_2_1 = [];
                            data.myCustTrendList.forEach(function (element2) {
                                element2.custNumList.forEach(function (element3) {
                                    if (element3.lb == element.value) {
                                        data2_1.push({ name: element.label });
                                        yData2_1.push(element3.dkkh_w);
                                        yData2_2_1.push(Number(element3.dkkhzb_w * 100).toFixed(2));
                                    }
                                });
                            });
                            if (yData2_1 && yData2_1.length != 0) {
                                var length_3 = yData2_1.length;
                                var objTemp = {};
                                objTemp['name'] = '客户数';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 0;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_3 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData2_1;
                                series2_1.push(objTemp);
                            }
                            if (yData2_2_1 && yData2_2_1.length != 0) {
                                var length_4 = yData2_2_1.length;
                                var objTemp = {};
                                objTemp['name'] = '占比';
                                objTemp['type'] = 'line';
                                objTemp['yAxisIndex'] = 1;
                                objTemp['itemStyle'] = {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == length_4 - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                };
                                objTemp['data'] = yData2_2_1;
                                series2_1.push(objTemp);
                            }
                        });
                        console.log(series2_1);
                    }
                    var productList = _this.productList.filter(function (item) {
                        return item.value == _this.productId;
                    });
                    if (ind == 0 || ind == 1) {
                        _this.echoParams(1, data.dmFlag);
                        var arrTemp = _this.calMax([series1_1[0].data, series1_1[1].data]); //解决echarts的双y轴重叠问题
                        _this.option1 = {
                            title: {
                                text: productList[0].label + "\u91D1\u989D\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '金额变化' }, { name: '金额占比变化' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData1_1,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '金额(万元)',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '金额占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: series1_1
                        };
                    }
                    if (ind == 0 || ind == 2) {
                        _this.echoParams(2, data.dmFlag);
                        var arrTemp = _this.calMax([series2_1[0].data, series2_1[1].data]); //解决echarts的双y轴重叠问题
                        _this.option2 = {
                            title: {
                                text: productList[0].label + "\u5BA2\u6237\u6570\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '客户数' }, { name: '占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData2_1,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '客户数',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: series2_1
                        };
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
        else {
            var params = {
                tellerId: this.commonHeader.userId,
                dmFlag: this.dmFlag,
                startDate: this.startDate,
                endDate: this.endDate,
                productId: this.smallClassProductId
            };
            this.customerPerformanceHttpService.loansSmallProductQuery(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var xData1_2 = [];
                    var xData2_2 = [];
                    var yData1_3 = [];
                    var yData2_3 = [];
                    var yData3_1 = [];
                    var yData4_1 = [];
                    if (data.loansProductAmtList && data.loansProductAmtList.length != 0) {
                        data.loansProductAmtList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData1_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                            yData1_3.push(element.dkje_w);
                            yData2_3.push(Number(element.dkjezh_w * 100).toFixed(2));
                        });
                    }
                    if (data.loansProductcustList && data.loansProductcustList.length != 0) {
                        data.loansProductcustList.forEach(function (element) {
                            var arr = element.dt.split('-');
                            if (data.dmFlag && data.dmFlag == 'D') {
                                xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                            }
                            else if (data.dmFlag && data.dmFlag == 'M') {
                                xData2_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                            }
                            yData3_1.push(element.dkkh_w);
                            yData4_1.push(Number(element.dkkhzb_w * 100).toFixed(2));
                        });
                    }
                    var smallClassProductTotalList = _this.smallClassProductTotalList.filter(function (item) {
                        return item.value == _this.smallClassProductId;
                    });
                    if (ind == 0 || ind == 1) {
                        _this.echoParams(1, data.dmFlag);
                        var arrTemp = _this.calMax([yData1_3, yData2_3]); //解决echarts的双y轴重叠问题
                        _this.option1 = {
                            title: {
                                text: smallClassProductTotalList[0].label + "\u91D1\u989D\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '金额变化' }, { name: '金额占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData1_2,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '金额(万元)',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                }, {
                                    name: '金额占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '金额变化',
                                    data: yData1_3,
                                    type: 'line',
                                    yAxisIndex: 0,
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == 0 || params.dataIndex == yData1_3.length - 1) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    name: '金额占比',
                                    data: yData2_3,
                                    type: 'line',
                                    yAxisIndex: 1,
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: 'dashed'
                                            },
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == 0 || params.dataIndex == yData2_3.length - 1) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        };
                    }
                    if (ind == 0 || ind == 2) {
                        _this.echoParams(2, data.dmFlag);
                        var arrTemp = _this.calMax([yData3_1, yData4_1]); //解决echarts的双y轴重叠问题
                        console.log(arrTemp);
                        _this.option2 = {
                            title: {
                                text: smallClassProductTotalList[0].label + "\u5BA2\u6237\u6570\u53D8\u5316\u8D8B\u52BF",
                                left: 'center',
                                y: '10px',
                                textStyle: {
                                    fontWeight: '500',
                                    fontSize: '16'
                                }
                            },
                            legend: {
                                data: [{ name: '客户数' }, { name: '占比' }],
                                top: 'bottom',
                                itemGap: 20,
                                icon: 'line',
                                textStyle: {
                                    color: '#34CFE6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            grid: {
                                width: '80%',
                                height: '75%',
                                left: '10%',
                                bottom: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: xData2_2,
                                axisLabel: {
                                    rotate: 30
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: [
                                {
                                    name: '客户数',
                                    type: 'value',
                                    scale: true,
                                    nameGap: 30,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    }
                                }, {
                                    name: '占比',
                                    type: 'value',
                                    nameGap: 30,
                                    scale: true,
                                    min: arrTemp[0],
                                    max: arrTemp[1],
                                    splitNumber: 5,
                                    interval: (arrTemp[1] - arrTemp[0]) / 5,
                                    splitArea: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value}%'
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '客户数',
                                    data: yData3_1,
                                    type: 'line',
                                    yAxisIndex: 0,
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    name: '占比',
                                    data: yData4_1,
                                    type: 'line',
                                    yAxisIndex: 1,
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: 'dashed'
                                            },
                                            label: {
                                                show: true,
                                                formatter: function (params) {
                                                    if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                        return params.value;
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        };
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
    };
    LoanSmallClassProductComponent.prototype.productChange = function (flag) {
        if (!flag) {
            this.smallClassProductId = '';
        }
        switch (this.productId) {
            case 'L2001':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '普通贷款', value: 'L3001' },
                    { label: '自助类贷款', value: 'L3002' },
                    { label: '分期贷款', value: 'L3003' },
                    { label: '按揭贷款', value: 'L3004' }
                ];
                break;
            case 'L2002':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '一般小本贷款', value: 'L3005' },
                    { label: '兴农贷', value: 'L3006' },
                    { label: '小本易租贷', value: 'L3007' },
                    { label: '青年置业贷款', value: 'L3008' },
                    { label: '小本自助贷款', value: 'L3009' }
                ];
                break;
            case 'L2048':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: 'E融卡', value: 'L3162' }
                ];
                break;
            case 'L2004':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '时贷通', value: 'L3011' }
                ];
                break;
            case 'L2005':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '村聚易贷.兴农卡', value: 'L3012' },
                    { label: '存贷合一卡', value: 'L3013' },
                    { label: '兴福卡', value: 'L3014' }
                ];
                break;
            case 'L2006':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '薪易贷', value: 'L3015' },
                    { label: '安居贷', value: 'L3016' },
                    { label: '薪消费', value: 'L3017' },
                    { label: '房易贷', value: 'L3018' },
                    { label: '薪金贷', value: 'L3144' },
                    { label: 'e质押（个人消费）', value: 'L3152' }
                ];
                break;
            case 'L2007':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '银行承兑汇票', value: 'L3019' },
                    { label: '商业承兑汇票', value: 'L3020' }
                ];
                break;
            case 'L2008':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '保函', value: 'L3021' }
                ];
                break;
            case 'L2009':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '贴现', value: 'L3022' }
                ];
                break;
            case 'L2010':
                this.smallClassProductList = [
                    { label: '请选择', value: '' },
                    { label: '合计', value: 'total' },
                    { label: '个人委托贷款', value: 'L3023' },
                    { label: '企业委托贷款', value: 'L3024' }
                ];
                break;
        }
    };
    //计算最大值、最小值
    LoanSmallClassProductComponent.prototype.calMax = function (arr) {
        var max = 0;
        var min = 0;
        if (arr && arr.length != 0) {
            arr.forEach(function (element) {
                element.forEach(function (element2) {
                    if (parseFloat(element2) < min) {
                        min = parseFloat(element2);
                    }
                    if (parseFloat(element2) > max) {
                        max = parseFloat(element2);
                    }
                });
            });
        }
        return [Math.floor(min / 10) * 10, Math.ceil(max / 9.5) * 10];
    };
    LoanSmallClassProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-smallClassProduct',
            template: __webpack_require__(/*! ./loan-smallClassProduct.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.html"),
            styles: [__webpack_require__(/*! ./loan-smallClassProduct.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-smallClassProduct/loan-smallClassProduct.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanSmallClassProductComponent);
    return LoanSmallClassProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 贷款-趋势变化 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin:10px 0;\">\r\n        <header-title [Info]=\"'金额规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"loansAllAmtQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"loansAllAmtQuery(1,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip1\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option1\"></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"loansProportionQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"loansProportionQuery(2,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip2\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option2\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"textColor\">\r\n            分行优秀线：按日展示每日分行内贷款余额排名前20%的客户经理对应的贷款余额，按月则日均同理\r\n        </div> -->\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom:10px;\">\r\n        <header-title [Info]=\"'客户规模'\"></header-title>\r\n        <div>\r\n            <div class=\"content1 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"loansCustNumQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"loansCustNumQuery(3,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip3\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option3\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div>\r\n            <div class=\"content2 ui-g-12 row\">\r\n                <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"clientAverageLoansQuery(4,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"clientAverageLoansQuery(4,2)\">月</span>\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" pTooltip=\"pTooltip4\" tooltipPosition=\"bottom\"></i>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div echarts [options]=\"option4\"></div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"textColor\">\r\n            ·分行优秀线：分行同业务条线每月排名20%分位点\r\n        </div> -->\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row span {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.active {\n  color: #34CFE6; }\n\n.textColor {\n  color: #34CFE6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tdGVuZGN5Q2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXGxvYW5cXGxvYW4tdGVuZGN5Q2hhbmdlXFxsb2FuLXRlbmRjeUNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQWpCZSxFQUFBOztBQW9CbkI7RUFDSSxjQXJCZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9sb2FuL2xvYW4tdGVuZGN5Q2hhbmdlL2xvYW4tdGVuZGN5Q2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2ljQ29sb3I6IzM0Q0ZFNiAhZGVmYXVsdDtcclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG59XHJcblxyXG4udGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LoanTendcyChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanTendcyChangeComponent", function() { return LoanTendcyChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanTendcyChangeComponent = /** @class */ (function () {
    function LoanTendcyChangeComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, activatedRoute) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u81EA\u7136\u6708\u622A\u6B62\u5230\u5F53\u65E5\u7684\u8D37\u6B3E\u4F59\u989D\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u8D37\u6B3E\u65E5\u5747 \n \u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip2 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D\u5360\u6BD4\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u8D37\u6B3E\u65E5\u5747\u5728\u90E8\u95E8\u5408\u8BA1\u8D37\u6B3E\u65E5\u5747\u5360\u6BD4 \n \u90E8\u95E8\u5E73\u5747\uFF1A1/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u8BA1\u7B97\u90E8\u95E8\u5185\u4EBA\u5747\u5360\u6BD4 \n \u90E8\u95E8\u7B2C\u4E00\u540D\uFF1A\u6309\u65E5\u5C55\u793A\u6BCF\u65E5\u90E8\u95E8\u4E2D\u8D37\u6B3E\u4F59\u989D\u6700\u9AD8\u7684\u5BA2\u6237\u7ECF\u7406\u5BF9\u5E94\u7684\u8D37\u6B3E\u4F59\u989D\u5728\u90E8\u95E8\u5408\u8BA1\u8D37\u6B3E\u4F59\u989D\u4E2D\u5360\u6BD4\uFF0C\u6309\u6708\u5219\u65E5\u5747\u540C\u7406";
        this.pTooltip3 = "\u6211\uFF1A\u6309\u65E5\u5C55\u793A\u622A\u6B62\u5230\u6BCF\u65E5\u5728\u8D37\u8D37\u6B3E\u5BA2\u6237\u6570\uFF0C\u6309\u6708\u5C55\u793A\u81EA\u7136\u6708\u6301\u6709\u8D37\u6B3E\u5BA2\u6237\u6570 \n \u90E8\u95E8\u5E73\u5747\uFF1A\u6309\u65E5\u5C55\u793A\u90E8\u95E8\u5185\u5408\u8BA1\u622A\u6B62\u5230\u6BCF\u65E5\u5728\u8D37\u8D37\u6B3E\u5BA2\u6237\u6570/\u90E8\u95E8\u603B\u8425\u9500\u4EBA\u6570\uFF0C\u6309\u6708\u540C\u7406";
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '贷款金额', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '贷款金额占比', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '占比', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: '贷款客户数', legend: [{ name: '我' }, { name: '部门平均' }], xAxisData: [], yAxisName: '客户数', series: [] });
    }
    LoanTendcyChangeComponent.prototype.ngOnInit = function () {
        var urlParams;
        this.activatedRoute.params.subscribe(function (params) {
            urlParams = params;
        });
        // console.log(urlParams);
        if (urlParams && JSON.stringify(urlParams) != '{}') {
            if (urlParams.flag != '1') {
                this.loansAllAmtQuery(1, 1);
                this.loansProportionQuery(2, 1);
                this.loansCustNumQuery(3, 1);
            }
        }
    };
    LoanTendcyChangeComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) {
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.loansAllAmtQuery(1, 1);
        this.loansProportionQuery(2, 1);
        this.loansCustNumQuery(3, 1);
    };
    LoanTendcyChangeComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    LoanTendcyChangeComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    LoanTendcyChangeComponent.prototype.loansAllAmtQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansAllAmtQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                if (data.myLoansList && data.myLoansList.length != 0 && data.departLoansList && data.departLoansList.length != 0 && data.brachLoansList && data.brachLoansList.length != 0) {
                    data.myLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_1.push(element.dkje_w);
                    });
                    data.departLoansList.forEach(function (element) {
                        yData2_1.push(element.dkje_bm);
                    });
                    data.brachLoansList.forEach(function (element) {
                        yData3_1.push(element.dkje_fh);
                    });
                }
                _this.echoParams(1, data.dmFlag); //回显日\月
                _this.option1 = {
                    title: {
                        text: '贷款金额',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_1,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '金额(万元)',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_1,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_1.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanTendcyChangeComponent.prototype.loansProportionQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansProportionQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_2 = [];
                var yData1_2 = [];
                var yData2_2 = [];
                var yData3_2 = [];
                if (data.myLoansProList && data.myLoansProList.length != 0 && data.departLoansProList && data.departLoansProList.length != 0 && data.departFristLoansProList && data.departFristLoansProList.length != 0) {
                    data.myLoansProList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_2.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_2.push(Number(element.dkjezb_w * 100).toFixed(2));
                    });
                    data.departLoansProList.forEach(function (element) {
                        yData2_2.push(Number(element.dkjezb_bm * 100).toFixed(2));
                    });
                    data.departFristLoansProList.forEach(function (element) {
                        yData3_2.push(Number(element.dkjezb_dy * 100).toFixed(2));
                    });
                }
                _this.echoParams(2, data.dmFlag); //回显日\月
                _this.option2 = {
                    title: {
                        text: '贷款金额占比',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_2,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '占比',
                        nameGap: 30,
                        scale: true,
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门第一名',
                            data: yData3_2,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData3_2.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanTendcyChangeComponent.prototype.loansCustNumQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.loansCustNumQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_3 = [];
                var yData1_3 = [];
                var yData2_3 = [];
                var yData3_3 = [];
                if (data.myCustList && data.myCustList.length != 0 && data.departmentCustList && data.departmentCustList.length != 0 && data.brachCustList && data.brachCustList.length != 0) {
                    data.myCustList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData_3.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_3.push(element.dkkh_w);
                    });
                    data.departmentCustList.forEach(function (element) {
                        yData2_3.push(element.dkkh_bm);
                    });
                    data.brachCustList.forEach(function (element) {
                        yData3_3.push(element.dkkh_fh);
                    });
                }
                _this.echoParams(3, data.dmFlag); //回显日\月
                _this.option3 = {
                    title: {
                        text: '贷款客户数',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: '500',
                            fontSize: '16'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }],
                        top: 'bottom',
                        itemGap: 20,
                        icon: 'line',
                        textStyle: {
                            color: '#34CFE6'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_3,
                        axisLabel: {
                            rotate: 30
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '客户数',
                        nameGap: 30,
                        scale: true,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData1_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '部门平均',
                            data: yData2_3,
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            if (params.dataIndex == 0 || params.dataIndex == yData2_3.length - 1) {
                                                return params.value;
                                            }
                                            else {
                                                return '';
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
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
    LoanTendcyChangeComponent.prototype.clientAverageLoansQuery = function (ind, index) {
        var _this = this;
        // this.returnParams(ind, index);
        var params = {
            "startDate": "2019-03-25",
            "endDate": "2019-04-05",
            "tellerId": "10793",
            "dmFlag": "Y"
        };
        this.customerPerformanceHttpService.clientAverageLoansQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData_4 = [];
                var yData1_4 = [];
                var yData2_4 = [];
                var yData3_4 = [];
                if (data.myAverageLoansList && data.myAverageLoansList.length != 0 && data.departAverageLoansList && data.departAverageLoansList.length != 0 && data.brachAverageLoansList && data.brachAverageLoansList.length != 0) {
                    data.myAverageLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        xData_4.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        yData1_4.push(Number(element.dkje_w_average * 100).toFixed(2));
                    });
                    data.departAverageLoansList.forEach(function (element) {
                        yData2_4.push(Number(element.dkje_bm_average * 100).toFixed(2));
                    });
                    data.brachAverageLoansList.forEach(function (element) {
                        yData3_4.push(Number(element.dkje_fh_average * 100).toFixed(2));
                    });
                }
                _this.option4 = {
                    title: {
                        text: '客均贷款',
                        left: 'center',
                        y: '10px',
                        textStyle: {
                            fontWeight: 'normal'
                        }
                    },
                    legend: {
                        data: [{ name: '我' }, { name: '部门平均' }, { name: '部门第一名' }],
                        top: 'bottom'
                    },
                    grid: {
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xData_4,
                        axisLabel: {
                            rotate: 30
                        }
                    },
                    yAxis: {
                        type: 'value',
                        scale: true,
                        name: '占比(%)',
                        nameGap: 20,
                        formatter: '{value}%'
                    },
                    series: [
                        {
                            name: '我',
                            data: yData1_4,
                            type: 'line'
                        },
                        {
                            name: '部门平均',
                            data: yData2_4,
                            type: 'line'
                        },
                        {
                            name: '部门第一名',
                            data: yData3_4,
                            type: 'line'
                        },
                    ]
                };
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
    LoanTendcyChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-tendcyChange',
            template: __webpack_require__(/*! ./loan-tendcyChange.component.html */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.html"),
            styles: [__webpack_require__(/*! ./loan-tendcyChange.component.scss */ "./src/app/pages/tzb/custom/customer-performance/loan/loan-tendcyChange/loan-tendcyChange.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoanTendcyChangeComponent);
    return LoanTendcyChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 主页 -->\r\n<div class=\"ui-g-12\">\r\n    <common-nav (outValue)=\"outValue($event)\"></common-nav>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-top: 10px;\">\r\n        <div class=\"ui-g-12 ui-g nav\">\r\n            <span [ngClass]=\"{'active':showIndex0 == 1}\" (click)=\"navChange(1)\">月度</span>\r\n            <span [ngClass]=\"{'active':showIndex0 == 2}\" (click)=\"navChange(2)\">年度</span>\r\n            <span style=\"flex:1;\"></span>\r\n            <!-- <span class=\"icon iconfont tzbicon-more\" (click)=\"more($event)\"></span> -->\r\n        </div>\r\n        <div class=\"ui-g-12 content\">\r\n            <ul>\r\n                <li *ngFor=\"let item of collection;let ind = index\">\r\n                    <div class=\"circle\">\r\n                        <div>\r\n                            <p>\r\n                                <span class=\"showClass1 showClass3\" *ngIf=\"Property1 && item.je1\">{{item.je1}}</span>&nbsp;&nbsp;\r\n                                <span class=\"showClass2 showClass4\" *ngIf=\"Property2 && item.je2\">{{item.je2}}</span>\r\n                            </p>\r\n                            <p>\r\n                                <span>{{item.zb}}</span>\r\n                            </p>\r\n                            <p>\r\n                                <span>{{item.label}}</span>\r\n                                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"item.desc\" tooltipPosition=\"bottom\" [tooltipStyleClass]=\"definedTooltip\"></i>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div class=\"ui-g-12 text-c showStyle\">\r\n                <span class=\"showClass1\" [ngClass]=\"{'showClass3':Property1}\" (click)=\"isShow(1)\">实际完成值</span>\r\n                <span class=\"showClass2\" [ngClass]=\"{'showClass4':Property2}\" (click)=\"isShow(2)\">任务目标值</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" style=\"margin-bottom: 10px;\">\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <!-- <span [ngClass]=\"{'active':showIndex1 == 1}\" (click)=\"indicatorProgressGroessQuery(1,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex1 == 2}\" (click)=\"indicatorProgressGroessQuery(1,2)\">月</span> -->\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip5\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(1,1)\">成长</a>\r\n                <a (click)=\"routerLink(1,2)\">增量</a>\r\n                <a (click)=\"routerLink(1,3)\">储蓄</a>\r\n                <a (click)=\"routerLink(1,4)\">产品</a>\r\n                <a (click)=\"routerLink(1,5)\">趋势</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option1\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6 row\">\r\n                <!-- <span [ngClass]=\"{'active':showIndex2 == 1}\" (click)=\"indicatorProgressGroessQuery(2,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex2 == 2}\" (click)=\"indicatorProgressGroessQuery(2,2)\">月</span> -->\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip6\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(2,1)\">成长</a>\r\n                <a (click)=\"routerLink(2,2)\">增量</a>\r\n                <a (click)=\"routerLink(2,3)\">行业</a>\r\n                <a (click)=\"routerLink(2,4)\">产品</a>\r\n                <a (click)=\"routerLink(2,5)\">趋势</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <!-- <span [ngClass]=\"{'active':showIndex3 == 1}\" (click)=\"indicatorProgressGroessQuery(3,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex3 == 2}\" (click)=\"indicatorProgressGroessQuery(3,2)\">月</span> -->\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip7\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(3,1)\">折前</a>\r\n                <a (click)=\"routerLink(3,2)\">折后</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"ui-g-6 row\">\r\n                <!-- <span [ngClass]=\"{'active':showIndex4 == 1}\" (click)=\"indicatorProgressGroessQuery(4,1)\">日</span>\r\n                <span [ngClass]=\"{'active':showIndex4 == 2}\" (click)=\"indicatorProgressGroessQuery(4,2)\">月</span> -->\r\n                <i class=\"fa ui-icon-help\" style=\"width: 15px;height: 15px;\" [pTooltip]=\"pTooltip8\" tooltipPosition=\"bottom\"></i>\r\n                <a (click)=\"routerLink(4,1)\">趋势</a>\r\n                <a (click)=\"routerLink(4,2)\">分布</a>\r\n                <a href=\"javascript:void(0);\">总量</a>\r\n                <div class=\"ui-g-12\">\r\n                    <div echarts [options]=\"option4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <common-nav (outValue)=\"outValue($event)\"></common-nav> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav span, .nav .content ul li .circle div p i, .content ul li .circle div p .nav i {\n  padding: 5px;\n  cursor: pointer; }\n\n.row span, .row .content ul li .circle div p i, .content ul li .circle div p .row i {\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #ccc; }\n\n.row i {\n  float: right;\n  vertical-align: middle;\n  padding: 5px; }\n\n.row a {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 15px;\n  border: 1px solid #dadada;\n  margin-right: 5px;\n  cursor: pointer; }\n\n.row a:nth-last-child(2) {\n    background: #34CFE6;\n    color: #fff; }\n\n.row a:hover {\n    background: #34CFE6;\n    color: #fff; }\n\n.active {\n  color: #34CFE6; }\n\n.icon {\n  color: #34CFE6;\n  flex: 0;\n  text-align: right;\n  cursor: pointer; }\n\n.content ul {\n  overflow: hidden;\n  display: flex;\n  padding: 0;\n  margin: 0; }\n\n.content ul li {\n    list-style: none;\n    width: 25%; }\n\n.content ul li .circle {\n      width: 60%;\n      padding-top: 30%;\n      padding-bottom: 30%;\n      border-radius: 100%;\n      border: 1px solid #34CFE6;\n      margin: 0 auto;\n      position: relative; }\n\n.content ul li .circle div {\n        width: 70%;\n        height: 70%;\n        position: absolute;\n        left: 15%;\n        top: 15%;\n        text-align: center; }\n\n.content ul li .circle div p {\n          margin: 0;\n          height: 33%;\n          font-weight: 700;\n          padding-top: 20px;\n          box-sizing: border-box; }\n\n.content ul li .circle div p span, .content ul li .circle div p i {\n            vertical-align: top; }\n\n.content ul li .circle div p:nth-child(1) span, .content ul li .circle div p:nth-child(1) i {\n          margin-left: 8px; }\n\n.content ul li .circle div p:nth-child(2) {\n          font-size: 35px;\n          padding-top: 0;\n          color: #ffa500; }\n\n.showClass1, .showClass2 {\n  position: relative;\n  cursor: pointer; }\n\n.showClass1:before, .showClass2:before {\n    content: '\\2022';\n    position: absolute;\n    color: ccc;\n    font-size: 35px;\n    left: -16px;\n    top: -16px; }\n\n.showClass2 {\n  margin-left: 25px; }\n\n.showClass3:before {\n  color: red; }\n\n.showClass4:before {\n  color: yellow; }\n\n.text-c {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci1wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1ob21lLXBhZ2VzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tZXItcGVyZm9ybWFuY2VcXHBlcmZvcm1hbmNlLWhvbWUtcGFnZXNcXHBlcmZvcm1hbmNlLWhvbWUtcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUVRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFOOUI7RUFTUSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFYcEI7RUFjUSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkF6QmE7RUEwQmIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFuQnZCO0lBcUJZLG1CQS9CTztJQWdDUCxXQUFXLEVBQUE7O0FBdEJ2QjtJQXlCWSxtQkFuQ087SUFvQ1AsV0FBVyxFQUFBOztBQUt2QjtFQUNJLGNBMUNlLEVBQUE7O0FBNkNuQjtFQUNJLGNBOUNlO0VBK0NmLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUVRLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFMakI7SUFPWSxnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBOztBQVJ0QjtNQVVnQixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIseUJBbEVHO01BbUVILGNBQWM7TUFDZCxrQkFBa0IsRUFBQTs7QUFoQmxDO1FBa0JvQixVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLGtCQUFrQixFQUFBOztBQXZCdEM7VUF5QndCLFNBQVM7VUFDVCxXQUFXO1VBQ1gsZ0JBQWdCO1VBQ2hCLGlCQUFpQjtVQUNqQixzQkFBc0IsRUFBQTs7QUE3QjlDO1lBK0I0QixtQkFBbUIsRUFBQTs7QUEvQi9DO1VBdUM0QixnQkFBZ0IsRUFBQTs7QUF2QzVDO1VBMkN3QixlQUFlO1VBQ2YsY0FBYztVQUNkLGNBQWMsRUFBQTs7QUFRdEM7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUZuQjtJQUlRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVSxFQUFBOztBQUlsQjtFQUVJLGlCQUFpQixFQUFBOztBQUdyQjtFQUVRLFVBQVUsRUFBQTs7QUFJbEI7RUFFUSxhQUFhLEVBQUE7O0FBSXJCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbWVyLXBlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLWhvbWUtcGFnZXMvcGVyZm9ybWFuY2UtaG9tZS1wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNpY0NvbG9yOiMzNENGRTYgIWRlZmF1bHQ7XHJcbiRuYXZCYXJDb2xvcjojZmZjYjA1ICFkZWZhdWx0O1xyXG4kYm9yZGVyQ29sb3I6ICNkYWRhZGEgIWRlZmF1bHQ7XHJcbi5uYXYge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzaWNDb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkYmFzaWNDb2xvcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6ICRiYXNpY0NvbG9yO1xyXG4gICAgZmxleDogMDsgLy/lsYXlj7NcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2ljQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgc3BhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNob3dDbGFzczEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsZWZ0OiAtMTZweDtcclxuICAgICAgICB0b3A6IC0xNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvd0NsYXNzMiB7XHJcbiAgICBAZXh0ZW5kIC5zaG93Q2xhc3MxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5zaG93Q2xhc3MzIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvd0NsYXNzNCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PerformanceHomePagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceHomePagesComponent", function() { return PerformanceHomePagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/customer-performance/customer-performance.http.service */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts");
/* harmony import */ var _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer-performance.service */ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerformanceHomePagesComponent = /** @class */ (function () {
    function PerformanceHomePagesComponent(commfunc, customerPerformanceHttpService, customerPerformanceService, router) {
        this.commfunc = commfunc;
        this.customerPerformanceHttpService = customerPerformanceHttpService;
        this.customerPerformanceService = customerPerformanceService;
        this.router = router;
        this.msgs = [];
        this.showIndex0 = 1;
        this.showIndex1 = 1;
        this.showIndex2 = 1;
        this.showIndex3 = 1;
        this.showIndex4 = 1;
        this.startDate = this.commfunc.transDateN(new Date().setTime(new Date().getTime() - 1000 * 60 * 60 * 24 * 30));
        this.endDate = this.commfunc.transDateN(new Date());
        this.pTooltip1 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u622A\u6B62\u6628\u65E5\u7684\u65E5\u5747\u5B58\u6B3E\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u5B58\u6B3E*\u5F53\u6708\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5\u5B58\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u5B58\u6B3E*\u5F53\u5E74\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip2 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u622A\u6B62\u6628\u65E5\u7684\u65E5\u5747\u8D37\u6B3E\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u8D37\u6B3E*\u5F53\u6708\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5\u8D37\u6B3E\u4F59\u989D\u4E4B\u548C/(\u76EE\u6807\u65E5\u5747\u8D37\u6B3E*\u5F53\u5E74\u5B9E\u9645\u5929\u6570)\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip3 = "\u5B9E\u9645\u5B8C\u6210\u503C\uFF1A\u6240\u9009\u65F6\u95F4\u5185\u622A\u6B62\u6700\u540E\u4E00\u65E5\u7684FTP\u5229\u5DEE\u603B\u548C\n\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u6708\u6BCF\u65E5FTP\u603B\u548C/\u4EFB\u52A1\u76EE\u6807\u503C\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u6708\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u6708\u8BA1\u7B97\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u81EA\u7136\u5E74\u6BCF\u65E5FTP\u603B\u548C/\u5E74\u4EFB\u52A1\u76EE\u6807\u503C\uFF0C\u65F6\u95F4\u6BB5\u8DE8\u5E74\u7684\u5DF2\u9009\u62E9\u7684\u6700\u540E\u4E00\u4E2A\u81EA\u7136\u5E74\u8BA1\u7B97";
        this.pTooltip4 = "\u4EFB\u52A1\u76EE\u6807\u503C\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u3001\u5E74\u5EA6\u4EFB\u52A1\n\u6708\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u622A\u6B62\u6240\u9009\u65F6\u95F4\u6BB5\u6700\u540E\u4E00\u65E5\u7684\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D\n\u5E74\u5EA6\u5B8C\u6210\u8FDB\u5EA6\uFF1A\u622A\u6B62\u6240\u9009\u65F6\u95F4\u6BB5\u6700\u540E\u4E00\u65E5\u7684\u5F85\u8FD8\u4E0D\u826F\u91D1\u989D/\u603B\u5F85\u8FD8\u8D37\u6B3E\u4F59\u989D";
        this.pTooltip5 = "\u91D1\u989D\u53D8\u5316\uFF1A\u65E5\u5747\u5B58\u6B3E\u53D8\u5316\u8D8B\u52BF\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip6 = "\u91D1\u989D\u53D8\u5316\uFF1A\u65E5\u5747\u8D37\u6B3E\u53D8\u5316\u8D8B\u52BF\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip7 = "\u91D1\u989D\u53D8\u5316\uFF1AFTP\u6298\u540E\u5229\u5DEE\u6C47\u603B\u53D8\u5316\u8D8B\u52BF\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.pTooltip8 = "\u91D1\u989D\u53D8\u5316\uFF1A\u4E0D\u826F\u91D1\u989D\u53D8\u5316\u8D8B\u52BF\n\u6708\u6307\u6807\uFF1A\u7531\u76F4\u63A5\u4E0A\u7EA7\u8BBE\u5B9A\u7684\u6708\u5EA6\u76EE\u6807";
        this.collection = [
            { label: '日均存款', desc: this.pTooltip1, je1: '', je2: '', zb: '' },
            { label: '日均贷款', desc: this.pTooltip2, je1: '', je2: '', zb: '' },
            { label: 'FTP', desc: this.pTooltip3, je1: '', je2: '', zb: '' },
            { label: '不良率', desc: this.pTooltip4, je1: '', je2: '', zb: '' }
        ];
        this.Property1 = true;
        this.Property2 = true;
        this.commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        //初值
        this.option1 = this.customerPerformanceService.returnOption({ title: '存款变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '存款金额(万元)', series: [] });
        this.option2 = this.customerPerformanceService.returnOption({ title: '贷款变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '贷款金额(万元)', series: [] });
        this.option3 = this.customerPerformanceService.returnOption({ title: 'FTP变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: 'FTP折后利差(元)', series: [] });
        this.option4 = this.customerPerformanceService.returnOption({ title: '不良余额变化趋势', legend: [{ name: '金额变化' }, { name: '月指标' }], xAxisData: [], yAxisName: '不良金额(万元)', series: [] });
    }
    PerformanceHomePagesComponent.prototype.ngOnInit = function () {
        this.taskArrangementQuery(-1, 1);
        this.taskArrangementQuery2();
    };
    PerformanceHomePagesComponent.prototype.isShow = function (i) {
        console.log(i);
        if (i == 1) {
            this.Property1 = !this.Property1;
        }
        else if (i == 2) {
            this.Property2 = !this.Property2;
        }
    };
    PerformanceHomePagesComponent.prototype.more = function (event) {
        console.log('更多:', event);
    };
    PerformanceHomePagesComponent.prototype.navChange = function (i) {
        this['showIndex0'] = i;
        if (i == 1) {
            this.taskArrangementQuery(-1, 1);
        }
        else if (i == 2) {
            this.taskArrangementQuery(-2, 2);
        }
    };
    PerformanceHomePagesComponent.prototype.outValue = function (event) {
        var objTemp;
        if (event.index == 1) {
            objTemp = this.customerPerformanceService.returnTime(event.queryCondition, event.index);
        }
        else if (event.index == 2) { //自定义时间
            objTemp = event.queryCondition;
        }
        this.startDate = objTemp.startDate;
        this.endDate = objTemp.endDate;
        console.log('startDate:', this.startDate);
        console.log('endDate:', this.endDate);
        this.ngOnInit();
    };
    PerformanceHomePagesComponent.prototype.returnParams = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.dmFlag = 'D';
        }
        else {
            this.dmFlag = 'M';
        }
    };
    PerformanceHomePagesComponent.prototype.returnParams2 = function (ind, index) {
        this["showIndex" + ind] = index;
        if (index == 1) {
            this.nyFlag = 'Y';
        }
        else {
            this.nyFlag = 'N';
        }
    };
    PerformanceHomePagesComponent.prototype.echoParams = function (ind, flag) {
        var index;
        if (flag == 'D') {
            index = 1;
        }
        else {
            index = 2;
        }
        this["showIndex" + ind] = index;
    };
    PerformanceHomePagesComponent.prototype.routerLink = function (ind, index) {
        var routerLinkUrl;
        if (ind == 1) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/growthGuide';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/increasementalTendency';
                    break;
                case 3:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/savingNature';
                    break;
                case 4:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/productCategory';
                    break;
                case 5:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/deposit/tendcyChange';
                    break;
            }
        }
        else if (ind == 2) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/growthGuide';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/increasementalTendency';
                    break;
                case 3:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/industryInvestment';
                    break;
                case 4:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/productCategory';
                    break;
                case 5:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/loan/tendcyChange';
                    break;
            }
        }
        else if (ind == 3) {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/ftp/ftpBeforeDiscount';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/ftp/ftpAfterDiscount';
                    break;
            }
        }
        else {
            switch (index) {
                case 1:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/badness/tendcyChange';
                    break;
                case 2:
                    routerLinkUrl = '/pages/tzb/custom/performance-analysis/badness/propertyDistribution';
                    break;
            }
        }
        this.router.navigate([routerLinkUrl, { Property3: false, condition: 'recentOneMonth', flag: 1 }]);
    };
    PerformanceHomePagesComponent.prototype.indicatorProgressGroessQuery = function (ind, index) {
        var _this = this;
        this.returnParams(ind, index);
        var params = {
            tellerId: this.commonHeader.userId,
            dmFlag: this.dmFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.indicatorProgressGroessQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var xData1_1 = [];
                var xData2_1 = [];
                var xData3_1 = [];
                var xData4_1 = [];
                var yData1_1 = [];
                var yData2_1 = [];
                var yData3_1 = [];
                var yData4_1 = [];
                var yData5_1 = [];
                var yData6_1 = [];
                var yData7_1 = [];
                var yData8_1 = [];
                if (data.myDepositList && data.myDepositList.length != 0) {
                    data.myDepositList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData1_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData1_1.push(element.depositAmt);
                        if (new Date(new Date(_this.endDate).setDate(1)) <= new Date(element.dt)) {
                            yData2_1.push(_this.depositAmt2);
                        }
                        else {
                            yData2_1.push(_this.depositAmt1);
                        }
                    });
                }
                if (data.myLoansList && data.myLoansList.length != 0) {
                    data.myLoansList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData2_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData3_1.push(element.dkje_w);
                        if (new Date(new Date(_this.endDate).setDate(1)) <= new Date(element.dt)) {
                            yData4_1.push(_this.loanAmt2);
                        }
                        else {
                            yData4_1.push(_this.loanAmt1);
                        }
                    });
                }
                if (data.myFtpList && data.myFtpList.length != 0) {
                    data.myFtpList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData3_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData5_1.push(element.val);
                        if (new Date(new Date(_this.endDate).setDate(1)) <= new Date(element.dt)) {
                            yData6_1.push(_this.ftpAmt2);
                        }
                        else {
                            yData6_1.push(_this.ftpAmt1);
                        }
                    });
                }
                if (data.myBadnessList && data.myBadnessList.length != 0) {
                    data.myBadnessList.forEach(function (element) {
                        var arr = element.dt.split('-');
                        if (data.dmFlag && data.dmFlag == 'D') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708" + arr[2] + "\u65E5");
                        }
                        else if (data.dmFlag && data.dmFlag == 'M') {
                            xData4_1.push(arr[0] + "\u5E74" + arr[1] + "\u6708");
                        }
                        yData7_1.push(element.blAmt);
                        if (new Date(new Date(_this.endDate).setDate(1)) <= new Date(element.dt)) {
                            yData8_1.push(_this.badnessAmt2);
                        }
                        else {
                            yData8_1.push(_this.badnessAmt1);
                        }
                    });
                }
                if (ind == -1 || ind == 1) {
                    _this.echoParams(1, data.dmFlag);
                    _this.option1 = {
                        title: {
                            text: '存款变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData1_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '存款金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData1_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData2_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 2) {
                    _this.echoParams(2, data.dmFlag);
                    _this.option2 = {
                        title: {
                            text: '贷款变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData2_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '贷款金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData3_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData3_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData4_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData4_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 3) {
                    _this.echoParams(3, data.dmFlag);
                    _this.option3 = {
                        title: {
                            text: 'FTP变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData3_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: 'FTP折后利差(元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData5_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData5_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData6_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData6_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
                if (ind == -1 || ind == 4) {
                    _this.echoParams(4, data.dmFlag);
                    _this.option4 = {
                        title: {
                            text: '不良余额变化趋势',
                            left: 'center',
                            y: '10px',
                            textStyle: {
                                fontWeight: '500',
                                fontSize: '16'
                            }
                        },
                        legend: {
                            data: [{ name: '金额变化' }, { name: '月指标' }],
                            top: 'bottom',
                            itemGap: 20,
                            icon: 'line',
                            textStyle: {
                                color: '#34CFE6'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            width: '80%',
                            height: '75%',
                            left: '10%',
                            bottom: '10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xData4_1,
                            axisLabel: {
                                rotate: 30
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: [
                            {
                                name: '不良金额(万元)',
                                type: 'value',
                                nameGap: 30,
                                scale: true,
                                splitArea: {
                                    show: true
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            }
                        ],
                        series: [
                            {
                                name: '金额变化',
                                data: yData7_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData7_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                name: '月指标',
                                data: yData8_1,
                                type: 'line',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed'
                                        },
                                        label: {
                                            show: true,
                                            formatter: function (params) {
                                                if (params.dataIndex == 0 || params.dataIndex == yData8_1.length - 1) {
                                                    return params.value;
                                                }
                                                else {
                                                    return '';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    };
                }
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
    PerformanceHomePagesComponent.prototype.indicatorProgressQuery = function (ind, index) {
        var _this = this;
        this.returnParams2(ind, index);
        // let startDate, endDate;
        // if (this.startDate) {
        //     startDate = `${this.startDate.split('-')[0]}-${this.startDate.split('-')[1]}`;
        // }
        // if (this.endDate) {
        //     endDate = `${this.endDate.split('-')[0]}-${this.endDate.split('-')[1]}`;
        // }
        var params = {
            tellerId: this.commonHeader.userId,
            nyFlag: this.nyFlag,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.customerPerformanceHttpService.indicatorProgressQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var je1 = data.depositAmt ? data.depositAmt : '0.00';
                var je2 = _this.depositAmt ? _this.depositAmt : '0.00';
                // if (je2 != '0') {
                //     this.collection[0]['zb'] = `${(parseFloat(je1) / parseFloat(je2) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[0]['zb'] = '0.00%';
                // }
                _this.collection[0]['zb'] = (data.depositPlan ? Number(data.depositPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[0]['je1'] = je1 + '万元';
                _this.collection[0]['je2'] = je2 + '万元';
                var je3 = data.loansAmt ? data.loansAmt : '0.00';
                var je4 = _this.loanAmt ? _this.loanAmt : '0.00';
                // if (je4 != '0') {
                //     this.collection[1]['zb'] = `${(parseFloat(je3) / parseFloat(je4) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[1]['zb'] = '0.00%';
                // }
                _this.collection[1]['zb'] = (data.loansPlan ? Number(data.loansPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[1]['je1'] = je3 + '万元';
                _this.collection[1]['je2'] = je4 + '万元';
                var je5 = data.ftpAmt ? data.ftpAmt : '0.00';
                var je6 = _this.ftpAmt ? String(parseFloat(_this.ftpAmt) / 10000) : '0.00';
                // if (je6 != '0') {
                //     this.collection[2]['zb'] = `${(parseFloat(je5) / parseFloat(je6) * 100).toFixed(2)}%`;
                // } else {
                //     this.collection[2]['zb'] = '0.00%';
                // }
                _this.collection[2]['zb'] = (data.ftpPlan ? Number(data.ftpPlan * 100).toFixed(2) : '0.00') + "%";
                _this.collection[2]['je1'] = je5 + '万元';
                _this.collection[2]['je2'] = je6 + '万元';
                var je7 = data.badness ? data.badness : '0.00';
                var je8 = _this.badnessAmt ? _this.badnessAmt : '0.00';
                _this.collection[3]['je2'] = (parseFloat(je8)).toFixed(2) + '%';
                _this.collection[3]['zb'] = parseFloat(je7).toFixed(2) + '%';
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
    PerformanceHomePagesComponent.prototype.taskArrangementQuery = function (ind, index) {
        var _this = this;
        var endDate;
        if (ind && ind == -2) {
            endDate = '00';
        }
        else {
            if (this.endDate) {
                endDate = "" + this.endDate.split('-')[1];
            }
        }
        var params = {
            tellerId: this.commonHeader.userId,
            orgId: this.commonHeader.orgId,
            yearDate: String(new Date().getFullYear()),
            monthDate: endDate,
            taskType: ""
        };
        this.customerPerformanceHttpService.taskArrangementQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                    data.taskArrangementList.forEach(function (element) {
                        switch (element.signType) {
                            case "1":
                                _this.depositAmt = element.taskAmt;
                                break;
                            case "2":
                                _this.loanAmt = element.taskAmt;
                                break;
                            case "3":
                                _this.ftpAmt = element.taskAmt;
                                break;
                            case "4":
                                _this.badnessAmt = element.taskAmt;
                                break;
                        }
                    });
                }
                _this.indicatorProgressQuery(0, index);
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
    PerformanceHomePagesComponent.prototype.taskArrangementQuery2 = function () {
        var _this = this;
        var yearDate = "" + this.startDate.split('-')[0];
        var monthDate = "" + this.startDate.split('-')[1];
        var params = {
            tellerId: this.commonHeader.userId,
            orgId: this.commonHeader.orgId,
            yearDate: yearDate,
            monthDate: monthDate,
            taskType: ""
        };
        this.customerPerformanceHttpService.taskArrangementQuery(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                    data.taskArrangementList.forEach(function (element) {
                        switch (element.signType) {
                            case "1":
                                _this.depositAmt1 = element.taskAmt;
                                break;
                            case "2":
                                _this.loanAmt1 = element.taskAmt;
                                break;
                            case "3":
                                _this.ftpAmt1 = element.taskAmt;
                                break;
                            case "4":
                                _this.badnessAmt1 = element.taskAmt;
                                break;
                        }
                    });
                    _this.depositAmt1 = _this.depositAmt1 ? _this.depositAmt1 : '0.00';
                    _this.loanAmt1 = _this.loanAmt1 ? _this.loanAmt1 : '0.00';
                    _this.ftpAmt1 = _this.ftpAmt1 ? _this.ftpAmt1 : '0.00';
                    _this.badnessAmt1 = _this.badnessAmt1 ? _this.badnessAmt1 : '0.00';
                }
                var yearDate_1 = "" + _this.endDate.split('-')[0];
                var monthDate_1 = "" + _this.endDate.split('-')[1];
                var params_1 = {
                    tellerId: _this.commonHeader.userId,
                    orgId: _this.commonHeader.orgId,
                    yearDate: yearDate_1,
                    monthDate: monthDate_1,
                    taskType: ""
                };
                _this.customerPerformanceHttpService.taskArrangementQuery(params_1).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.taskArrangementList && data.taskArrangementList.length != 0) {
                            data.taskArrangementList.forEach(function (element) {
                                switch (element.signType) {
                                    case "1":
                                        _this.depositAmt2 = element.taskAmt;
                                        break;
                                    case "2":
                                        _this.loanAmt2 = element.taskAmt;
                                        break;
                                    case "3":
                                        _this.ftpAmt2 = element.taskAmt;
                                        break;
                                    case "4":
                                        _this.badnessAmt2 = element.taskAmt;
                                        break;
                                }
                            });
                        }
                        _this.depositAmt2 = _this.depositAmt2 ? _this.depositAmt2 : '0.00';
                        _this.loanAmt2 = _this.loanAmt2 ? _this.loanAmt2 : '0.00';
                        _this.ftpAmt1 = _this.ftpAmt1 ? _this.ftpAmt1 : '0.00';
                        _this.badnessAmt1 = _this.badnessAmt1 ? _this.badnessAmt1 : '0.00';
                        _this.indicatorProgressGroessQuery(-1, 1);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
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
    PerformanceHomePagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'performance-home-pages',
            template: __webpack_require__(/*! ./performance-home-pages.component.html */ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.html"),
            styles: [__webpack_require__(/*! ./performance-home-pages.component.scss */ "./src/app/pages/tzb/custom/customer-performance/performance-home-pages/performance-home-pages.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_customer_performance_customer_performance_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomerPerformanceHttpService"],
            _service_customer_performance_service__WEBPACK_IMPORTED_MODULE_3__["CustomerPerformanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PerformanceHomePagesComponent);
    return PerformanceHomePagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-performance/service/customer-performance.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: CustomerPerformanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPerformanceService", function() { return CustomerPerformanceService; });
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


var CustomerPerformanceService = /** @class */ (function () {
    function CustomerPerformanceService(commfunc) {
        this.commfunc = commfunc;
        this.list1 = [
            { label: '指标进度', value: 'indicators-progress' },
            { label: '指标分析', value: 'indicators-analysis' }
        ];
        this.list2 = [
            { label: '存款', value: 'deposit' },
            { label: '贷款', value: 'loan' },
            { label: 'FTP', value: 'ftp' },
            { label: '不良', value: 'badness' }
        ];
        this.list3 = [
            { label: '趋势变化', value: 'tendcyChange' },
            { label: '产品类别', value: 'productCategory' },
            // { label: '产品小类', value: 'smallClassProduct' },
            { label: '储蓄性质', value: 'savingNature' },
            { label: '增量趋势', value: 'increasementalTendency' },
            { label: '成长指引', value: 'growthGuide' },
        ];
        this.list4 = [
            { label: '趋势变化', value: 'tendcyChange' },
            { label: '产品类别', value: 'productCategory' },
            // { label: '产品小类', value: 'smallClassProduct' },
            { label: '行业投向', value: 'industryInvestment' },
            { label: '增量趋势', value: 'increasementalTendency' },
            { label: '成长指引', value: 'growthGuide' },
        ];
        this.list5 = [
            { label: '趋势变化', value: 'tendcyChange' },
            { label: '属性分布', value: 'propertyDistribution' }
        ];
        this.list6 = [
            { label: '折后FTP', value: 'ftpAfterDiscount' },
            { label: '折前FTP', value: 'ftpBeforeDiscount' }
        ];
    }
    CustomerPerformanceService.prototype.judgeUrl = function () {
        var url = window.location.href;
        if (url && url != '') {
            if (url.indexOf('performance-home-pages') != -1 || url.indexOf('indicators-progress') != -1) {
                return { arr1: this.list1, flag1: false };
            }
            if (url.indexOf('indicators-analysis') != -1) { //indicators-analysis
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'tendcyChange', flag1: true };
            }
            if (url.indexOf('deposit/tendcyChange') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'tendcyChange', flag1: true };
            }
            if (url.indexOf('deposit/productCategory') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'productCategory', flag1: true };
            }
            if (url.indexOf('deposit/savingNature') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'savingNature', flag1: true };
            }
            if (url.indexOf('deposit/increasementalTendency') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'increasementalTendency', flag1: true };
            }
            if (url.indexOf('deposit/growthGuide') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'growthGuide', flag1: true };
            }
            if (url.indexOf('deposit/smallClassProduct') != -1) {
                return { arr2: this.list2, arr3: this.list3, value1: 'deposit', value2: 'productCategory', flag1: true };
            }
            if (url.indexOf('loan/tendcyChange') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'tendcyChange', flag1: true };
            }
            if (url.indexOf('loan/productCategory') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'productCategory', flag1: true };
            }
            if (url.indexOf('loan/industryInvestment') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'industryInvestment', flag1: true };
            }
            if (url.indexOf('loan/increasementalTendency') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'increasementalTendency', flag1: true };
            }
            if (url.indexOf('loan/growthGuide') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'growthGuide', flag1: true };
            }
            if (url.indexOf('loan/smallClassProduct') != -1) {
                return { arr2: this.list2, arr3: this.list4, value1: 'loan', value2: 'productCategory', flag1: true };
            }
            if (url.indexOf('badness/tendcyChange') != -1) {
                return { arr2: this.list2, arr3: this.list5, value1: 'badness', value2: 'tendcyChange', flag1: true };
            }
            if (url.indexOf('badness/propertyDistribution') != -1) {
                return { arr2: this.list2, arr3: this.list5, value1: 'badness', value2: 'propertyDistribution', flag1: true };
            }
            if (url.indexOf('ftp/ftpBeforeDiscount') != -1) {
                return { arr2: this.list2, arr3: this.list6, value1: 'ftp', value2: 'ftpBeforeDiscount', flag1: true };
            }
            if (url.indexOf('ftp/ftpAfterDiscount') != -1) {
                return { arr2: this.list2, arr3: this.list6, value1: 'ftp', value2: 'ftpAfterDiscount', flag1: true };
            }
        }
    };
    CustomerPerformanceService.prototype.returnListObj = function (type) {
        switch (type) {
            case 'deposit':
                return { list: this.list3, value: 'tendcyChange' };
            case 'loan':
                return { list: this.list4, value: 'tendcyChange' };
            case 'badness':
                return { list: this.list5, value: 'tendcyChange' };
            case 'ftp':
                return { list: this.list6, value: 'ftpAfterDiscount' };
        }
    };
    CustomerPerformanceService.prototype.returnTime = function (queryCondition, index) {
        var currentDate, startDate, endDate;
        if (index == 1) {
            switch (queryCondition) {
                case 'recentOneMonth': //近一月
                    currentDate = new Date();
                    endDate = this.commfunc.transDateN(currentDate);
                    var dateTemp1 = currentDate.getTime() - 1000 * 60 * 60 * 24 * 30; //前推30天
                    startDate = this.commfunc.transDateN(new Date().setTime(dateTemp1));
                    return { startDate: startDate, endDate: endDate };
                case 'currentMonth': //当月
                    currentDate = new Date();
                    endDate = this.commfunc.transDateN(currentDate);
                    startDate = this.commfunc.transDateN(currentDate.setDate(1));
                    return { startDate: startDate, endDate: endDate };
                case 'lastMonth': //上月
                    currentDate = new Date();
                    var dateTemp = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
                    var year = dateTemp.getFullYear();
                    var month = dateTemp.getMonth();
                    if (month == 0) {
                        month = 12;
                        year = year - 1;
                    }
                    endDate = this.commfunc.transDateN(new Date(year, month + 1, 0));
                    startDate = this.commfunc.transDateN(new Date(year, month, 1));
                    return { startDate: this.transForm(startDate), endDate: this.transForm(endDate) };
                case 'recentHalfYear': //近半年
                    currentDate = new Date();
                    endDate = this.commfunc.transDateN(currentDate);
                    startDate = this.commfunc.transDateN(currentDate.setMonth(currentDate.getMonth() - 5));
                    return { startDate: this.transForm(startDate), endDate: this.transForm(endDate) };
                case 'recentOneYear': //近一年
                    currentDate = new Date();
                    endDate = this.commfunc.transDateN(currentDate);
                    startDate = this.commfunc.transDateN(currentDate.setMonth(currentDate.getMonth() - 11));
                    return { startDate: this.transForm(startDate), endDate: this.transForm(endDate) };
            }
        }
    };
    //年-月-日 转化成 年-月
    CustomerPerformanceService.prototype.transForm = function (date) {
        var arrTemp = date.split('-');
        return arrTemp[0] + "-" + arrTemp[1];
    };
    CustomerPerformanceService.prototype.returnOption = function (obj) {
        return {
            title: {
                text: obj.title,
                left: 'center',
                y: '10px',
                textStyle: {
                    fontWeight: '500',
                    fontSize: '16'
                }
            },
            legend: {
                data: obj.legend,
                top: 'bottom',
                itemGap: 20,
                icon: 'line',
                textStyle: {
                    color: '#34CFE6'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                width: '80%',
                height: '75%',
                left: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: obj.xAxisData,
                axisLabel: {
                    rotate: 30
                }
            },
            yAxis: {
                name: obj.yAxisName,
                type: 'value',
                nameGap: 30,
                splitArea: {
                    show: true
                },
            },
            series: obj.series
        };
    };
    CustomerPerformanceService.prototype.returnOption2 = function (obj) {
        return {
            title: {
                text: obj.title,
                left: 'center',
                y: '10px',
                textStyle: {
                    fontWeight: '500',
                    fontSize: '16'
                }
            },
            series: [
                {
                    name: obj.name,
                    data: obj.data,
                    type: 'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            formatter: '{b} {c} , {d}%'
                        }
                    }
                }
            ]
        };
    };
    CustomerPerformanceService.prototype.returnOption3 = function (obj) {
        return {
            title: {
                text: '新不良笔数',
                left: 'center',
                y: '10px',
                textStyle: {
                    fontWeight: 'normal'
                }
            },
            xAxis: {
                name: obj.xAxisName,
                type: 'category',
                data: obj.xAxisData,
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                name: obj.yAxisName,
                type: 'value',
                nameGap: 20,
                scale: true,
                splitArea: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
            },
            series: [
                {
                    data: obj.series,
                    type: 'bar',
                    legendHoverLink: true,
                    barWidth: '40',
                    barCategoryGap: '20%',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    }
                }
            ]
        };
    };
    CustomerPerformanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CustomerPerformanceService);
    return CustomerPerformanceService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.constant.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.constant.ts ***!
  \**************************************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/**
 * 客户经理业绩 服务名
 */
var API = {
    indicatorProgressGroessQuery: 'indicatorProgressGroessQuery',
    depositAllAmtQuery: 'depositAllAmtQuery',
    loansAllAmtQuery: 'loansAllAmtQuery',
    ftpBackQuery: 'ftpBackQuery',
    badnessQuery: 'badnessQuery',
    indicatorProgressQuery: 'indicatorProgressQuery',
    taskArrangementQuery: 'taskArrangementQuery',
    nearlyMonthProgressQuery: 'nearlyMonthProgressQuery',
    departmentProportionQuery: 'departmentProportionQuery',
    depositProportionQuery: 'depositProportionQuery',
    loansProportionQuery: 'loansProportionQuery',
    loansProductPtQuery: 'loansProductPtQuery',
    deploansProductPtQuery: 'deploansProductPtQuery',
    loansProductTrendQuery: 'loansProductTrendQuery',
    ftpProportionQuery: 'ftpProportionQuery',
    ftpQuery: 'ftpQuery',
    badnessProportionQuery: 'badnessProportionQuery',
    loansIncrementQuery: 'loansIncrementQuery',
    loansIndtstryQueryCust: 'loansIndtstryQueryCust',
    newLoansAmtQuery: 'newLoansAmtQuery',
    newLoansAmtProQuery: 'newLoansAmtProQuery',
    newLoansCustQuery: 'newLoansCustQuery',
    loansGrowingGuideAmountQuery: 'loansGrowingGuideAmountQuery',
    loansGrowingGuideProportionQuery: 'loansGrowingGuideProportionQuery',
    loansGrowingGuideCustQuery: 'loansGrowingGuideCustQuery',
    loansTrendQuery: 'loansTrendQuery',
    loansCustNumQuery: 'loansCustNumQuery',
    clientAverageLoansQuery: 'clientAverageLoansQuery',
    loansIndtstryQuery: 'loansIndtstryQuery',
    loansGrowingGuideQuery: 'loansGrowingGuideQuery',
    loansSmallProductQuery: 'loansSmallProductQuery',
    loansProductQuery: 'loansProductQuery',
    ftpLxInfoQuery: 'ftpLxInfoQuery',
    ftpLxProInfoQuery: 'ftpLxProInfoQuery',
    ftpLxProductInfoQuery: 'ftpLxProductInfoQuery',
    ftpLxSameMonthInfoQuery: 'ftpLxSameMonthInfoQuery',
    ftpLxSameMonthProInfoQuery: 'ftpLxSameMonthProInfoQuery',
    badnessInfoQuery: 'badnessInfoQuery',
    badnessDistributeQuery: 'badnessDistributeQuery',
    depositTrendQuery: 'depositTrendQuery',
    depositIncrementQuery: 'depositIncrementQuery',
    depositProductQuery: 'depositProductQuery',
    depositProductTrendQuery: 'depositProductTrendQuery',
    depositSmallProductQuery: 'depositSmallProductQuery',
    depositNatureTrendQuery: 'depositNatureTrendQuery',
    depositGrowingGuideQuery: 'depositGrowingGuideQuery',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustomerPerformanceHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPerformanceHttpService", function() { return CustomerPerformanceHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-performance.http.constant */ "./src/app/pages/tzb/custom/http/customer-performance/customer-performance.http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
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
 * 客户经理业绩 服务
 */
var CustomerPerformanceHttpService = /** @class */ (function () {
    function CustomerPerformanceHttpService(httpService) {
        this.httpService = httpService;
    }
    // 主页-每天总量查询
    CustomerPerformanceHttpService.prototype.indicatorProgressGroessQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].indicatorProgressGroessQuery, params);
    };
    // 每天存款总量查询
    CustomerPerformanceHttpService.prototype.depositAllAmtQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositAllAmtQuery, params);
    };
    // 每天贷款总量查询
    CustomerPerformanceHttpService.prototype.loansAllAmtQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansAllAmtQuery, params);
    };
    // 每天ftp折后利差查询
    CustomerPerformanceHttpService.prototype.ftpBackQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpBackQuery, params);
    };
    // 每天不良查询
    CustomerPerformanceHttpService.prototype.badnessQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].badnessQuery, params);
    };
    // 指标进度查询
    CustomerPerformanceHttpService.prototype.indicatorProgressQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].indicatorProgressQuery, params);
    };
    // 指标查询
    CustomerPerformanceHttpService.prototype.taskArrangementQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].taskArrangementQuery, params);
    };
    // 指标查询
    CustomerPerformanceHttpService.prototype.nearlyMonthProgressQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].nearlyMonthProgressQuery, params);
    };
    // 部门内部占比查询 
    CustomerPerformanceHttpService.prototype.departmentProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].departmentProportionQuery, params);
    };
    // 存款占比查询
    CustomerPerformanceHttpService.prototype.depositProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositProportionQuery, params);
    };
    // 贷款占比查询
    CustomerPerformanceHttpService.prototype.loansProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansProportionQuery, params);
    };
    // 贷款产品个人占比查询
    CustomerPerformanceHttpService.prototype.loansProductPtQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansProductPtQuery, params);
    };
    // 贷款产品部门占比查询
    CustomerPerformanceHttpService.prototype.deploansProductPtQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].deploansProductPtQuery, params);
    };
    // 贷款产品趋势查询
    CustomerPerformanceHttpService.prototype.loansProductTrendQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansProductTrendQuery, params);
    };
    // ftp占比查询
    CustomerPerformanceHttpService.prototype.ftpProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpProportionQuery, params);
    };
    // ftp查询
    CustomerPerformanceHttpService.prototype.ftpQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpQuery, params);
    };
    // 不良占比查询
    CustomerPerformanceHttpService.prototype.badnessProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].badnessProportionQuery, params);
    };
    // 贷款增量趋势查询
    CustomerPerformanceHttpService.prototype.loansIncrementQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansIncrementQuery, params);
    };
    // 贷款行业客户数
    CustomerPerformanceHttpService.prototype.loansIndtstryQueryCust = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansIndtstryQueryCust, params);
    };
    // 增量贷款金额查询
    CustomerPerformanceHttpService.prototype.newLoansAmtQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].newLoansAmtQuery, params);
    };
    // 增量贷款金额占比查询
    CustomerPerformanceHttpService.prototype.newLoansAmtProQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].newLoansAmtProQuery, params);
    };
    // 增量贷款客户数查询
    CustomerPerformanceHttpService.prototype.newLoansCustQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].newLoansCustQuery, params);
    };
    // 贷款成长指引金额查询
    CustomerPerformanceHttpService.prototype.loansGrowingGuideAmountQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansGrowingGuideAmountQuery, params);
    };
    // 贷款成长指引金额查询
    CustomerPerformanceHttpService.prototype.loansGrowingGuideProportionQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansGrowingGuideProportionQuery, params);
    };
    // 贷款成长指引金额查询
    CustomerPerformanceHttpService.prototype.loansGrowingGuideCustQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansGrowingGuideCustQuery, params);
    };
    // 贷款趋势变化查询
    CustomerPerformanceHttpService.prototype.loansTrendQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansTrendQuery, params);
    };
    // 贷款客户数查询
    CustomerPerformanceHttpService.prototype.loansCustNumQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansCustNumQuery, params);
    };
    // 贷款客均查询
    CustomerPerformanceHttpService.prototype.clientAverageLoansQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].clientAverageLoansQuery, params);
    };
    // 贷款行业投向查询
    CustomerPerformanceHttpService.prototype.loansIndtstryQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansIndtstryQuery, params);
    };
    // 贷款成长指引查询
    CustomerPerformanceHttpService.prototype.loansGrowingGuideQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansGrowingGuideQuery, params);
    };
    // 贷款产品小类查询
    CustomerPerformanceHttpService.prototype.loansSmallProductQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansSmallProductQuery, params);
    };
    // 贷款产品类别查询
    CustomerPerformanceHttpService.prototype.loansProductQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loansProductQuery, params);
    };
    // ftp利差信息
    CustomerPerformanceHttpService.prototype.ftpLxInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpLxInfoQuery, params);
    };
    // ftp利差占比信息
    CustomerPerformanceHttpService.prototype.ftpLxProInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpLxProInfoQuery, params);
    };
    // ftp各产品利差信息
    CustomerPerformanceHttpService.prototype.ftpLxProductInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpLxProductInfoQuery, params);
    };
    // ftp同月入职利差信息
    CustomerPerformanceHttpService.prototype.ftpLxSameMonthInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpLxSameMonthInfoQuery, params);
    };
    // ftp同月入职利差占比信息
    CustomerPerformanceHttpService.prototype.ftpLxSameMonthProInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].ftpLxSameMonthProInfoQuery, params);
    };
    // 不良趋势
    CustomerPerformanceHttpService.prototype.badnessInfoQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].badnessInfoQuery, params);
    };
    // 不良分布
    CustomerPerformanceHttpService.prototype.badnessDistributeQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].badnessDistributeQuery, params);
    };
    // 存款趋势查询
    CustomerPerformanceHttpService.prototype.depositTrendQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositTrendQuery, params);
    };
    // 存款增量趋势查询
    CustomerPerformanceHttpService.prototype.depositIncrementQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositIncrementQuery, params);
    };
    // 存款产品大类趋势查询
    CustomerPerformanceHttpService.prototype.depositProductTrendQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositProductTrendQuery, params);
    };
    // 存款产品大类查询
    CustomerPerformanceHttpService.prototype.depositProductQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositProductQuery, params);
    };
    // 存款产品小类查询 
    CustomerPerformanceHttpService.prototype.depositSmallProductQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositSmallProductQuery, params);
    };
    // 存款储蓄性质查询 
    CustomerPerformanceHttpService.prototype.depositNatureTrendQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositNatureTrendQuery, params);
    };
    // 存款成长指引查询
    CustomerPerformanceHttpService.prototype.depositGrowingGuideQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _customer_performance_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].depositGrowingGuideQuery, params);
    };
    CustomerPerformanceHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CustomerPerformanceHttpService);
    return CustomerPerformanceHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-performance-customer-performance-module.js.map