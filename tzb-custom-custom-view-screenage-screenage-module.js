(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tzb-custom-custom-view-screenage-screenage-module"],{

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/bean/screenage.bean.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/bean/screenage.bean.ts ***!
  \*******************************************************************************/
/*! exports provided: ScreenageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenageBean", function() { return ScreenageBean; });
var ScreenageBean = /** @class */ (function () {
    function ScreenageBean() {
    }
    return ScreenageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screenage ui-g-12\">\r\n    <!-- <header-title [Info]=\"'客户电子档案卷宗'\"></header-title> -->\r\n    <img src=\"../../../../../../assets/layout/images/custom-view/screenage/new-name.png\" alt=\"\">\r\n    <div class=\"screenage-con\">\r\n        <!-- <a *ngIf=\"judgeField('X_CUST_M_P011_P155')\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"juanzong()\"><button pButton label=\"客户电子档案\"></button></a> -->\r\n        <!-- <a *ngIf=\"judgeField('X_CUST_M_P011_P156')\" href=\"javascript:void(0);\"  (click)=\"LookBook()\"><button pButton label=\"客户电子档案\"></button></a>\r\n        <a *ngIf=\"judgeField('X_CUST_M_P011_P157')\" href=\"javascript:void(0);\"  (click)=\"ywVideo()\"><button pButton label=\"业务维度影像\"></button></a>\r\n        <a *ngIf=\"judgeField('X_CUST_M_P011_P158')\" href=\"javascript:void(0);\"  (click)=\"khVideo()\"><button pButton label=\"客户维度影像\"></button></a> -->\r\n        <a  href=\"javascript:void(0);\"  (click)=\"LookBook()\" *ngIf=\"judgeField('X_CUST_M_P011_P155')\"><button class=\"margin-kh\" pButton label=\"客户电子档案\"></button></a>\r\n        <a  href=\"javascript:void(0);\"  (click)=\"ywVideo()\" *ngIf=\"judgeField('X_CUST_M_P011_P157')\"><button  class=\"margin-kh\" pButton label=\"业务维度影像\"></button></a>\r\n        <a  href=\"javascript:void(0);\"  (click)=\"khVideo()\" *ngIf=\"judgeField('X_CUST_M_P011_P158')\"><button  class=\"margin-kh\" pButton label=\"客户维度影像\"></button></a>\r\n        <a  href=\"javascript:void(0);\"  (click)=\"khFullVideo()\"><button  class=\"margin-kh\" pButton label=\"客户全影像\"></button></a>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screenage {\n  padding: 0;\n  background-color: #fafafa;\n  height: 470px;\n  position: relative; }\n  .screenage img {\n    margin-left: 14%; }\n  .screenage .screenage-con {\n    position: absolute;\n    top: 22%;\n    left: 54%;\n    width: 155px; }\n  .screenage .margin-kh {\n    margin: 5px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9zY3JlZW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcc2NyZWVuYWdlXFxzY3JlZW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtFQUp0QjtJQU1RLGdCQUFnQixFQUFBO0VBTnhCO0lBVVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWSxFQUFBO0VBYnBCO0lBZ0JRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvc2NyZWVuYWdlL3NjcmVlbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5hZ2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JlZW5hZ2UtY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgbGVmdDogNTQlO1xyXG4gICAgICAgIHdpZHRoOiAxNTVweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW4ta2h7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ScreenageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenageComponent", function() { return ScreenageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_screenage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/screenage.bean */ "./src/app/pages/tzb/custom/custom-view/screenage/bean/screenage.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScreenageComponent = /** @class */ (function () {
    function ScreenageComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.orgId = '';
        this.userId = '';
        this.targetId = '';
        this.screenageBean = new _bean_screenage_bean__WEBPACK_IMPORTED_MODULE_2__["ScreenageBean"]();
        this.msgs = [];
        this.custNo = this.commfunc.getSessionData('custNo');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.targetId) {
            this.targetId = this.user.targetId;
        }
        // let biaozhi;
        // let a = this.targetId.split('');
        // let b = a[a.length - 1];
        // if (b == '0') {
        //   biaozhi = '01';
        // } else if (b == '1') {
        //   biaozhi = '02';
        // }
    }
    ScreenageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            _this.custAttr = data.custAttribute;
            _this.custName = data.custName;
            _this.custterm = data.custType;
            if (data.dataSourceId == 'BR00A') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN"];
                _this.biaozhi = '01';
            }
            else if (data.dataSourceId == 'BR00B') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN_C"];
                _this.biaozhi = '02';
            }
            else if (!data.dataSourceId || data.dataSourceId == '') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN"];
                _this.biaozhi = '01';
            }
            var temp = {
                clientNo: _this.custNo,
                queryManner: '1',
                emplNumber: _this.userId,
                bankFlag: _this.biaozhi
            };
            _this.httpService.BZ_0200200003301_ERS(temp).subscribe(function (data) {
                _this.path = data.url;
            });
        });
    };
    //电子档案卷宗
    ScreenageComponent.prototype.juanzong = function () {
        var _this = this;
        this.screenageBean.userId = this.userId;
        this.screenageBean.sysCode = '122';
        this.screenageBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.screenageBean.serverName = 'ywsn';
        this.screenageBean.validateType = '0';
        this.screenageBean.extraInfo = 'ywsn';
        this.screenageBean.encryptType = 'HS256';
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.httpService.tokenApply(this.screenageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.path + "&token_id=" + tokens;
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    //查看卷宗
    ScreenageComponent.prototype.LookBook = function () {
        var _this = this;
        this.screenageBean.userId = this.userId;
        this.screenageBean.sysCode = '122';
        this.screenageBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.screenageBean.serverName = 'ywsn';
        this.screenageBean.validateType = '0';
        this.screenageBean.extraInfo = 'ywsn';
        this.screenageBean.encryptType = 'HS256';
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.httpService.tokenApply(this.screenageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&khm=" + _this.custNo + "&where=JZ&urlParam=/plats/FrontController?commandType=2018013001|moduleCode=F5B41F4330C6B747C420F2289E31BE29";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    //业务维度影像
    ScreenageComponent.prototype.ywVideo = function () {
        var _this = this;
        this.screenageBean.userId = this.userId;
        this.screenageBean.sysCode = '122';
        this.screenageBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.screenageBean.serverName = 'ywsn';
        this.screenageBean.validateType = '0';
        this.screenageBean.extraInfo = 'ywsn';
        this.screenageBean.encryptType = 'HS256';
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.httpService.tokenApply(this.screenageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&khm=" + _this.custNo + "&where=YW&urlParam=/plats/FrontController?commandType=2018013001|moduleCode=F5B41F4330C6B747C420F2289E31BE29";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    //客户维度影像
    ScreenageComponent.prototype.khVideo = function () {
        var _this = this;
        this.screenageBean.userId = this.userId;
        this.screenageBean.sysCode = '122';
        this.screenageBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.screenageBean.serverName = 'ywsn';
        this.screenageBean.validateType = '0';
        this.screenageBean.extraInfo = 'ywsn';
        this.screenageBean.encryptType = 'HS256';
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.httpService.tokenApply(this.screenageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&khm=" + _this.custNo + "&where=KH&urlParam=/plats/FrontController?commandType=2018013001|moduleCode=F5B41F4330C6B747C420F2289E31BE29";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    //客户全影像
    ScreenageComponent.prototype.khFullVideo = function () {
        var session = {
            custNo: JSON.parse(atob(window.sessionStorage.getItem('custNo'))),
            commonHeader: JSON.parse(atob(window.sessionStorage.getItem('commonHeader'))),
            userName: JSON.parse(window.sessionStorage.getItem('chName')).userName
        };
        this.setCookie('session', JSON.stringify(session));
        // window.open('./assets/pages/full-video.html');
        window.open('/#/pages/tzb/custom/customer-videos');
    };
    //设置cookie
    ScreenageComponent.prototype.setCookie = function (name, value) {
        var date = new Date(); //初始化时间
        date.setTime(date.getTime() + 60 * 60 * 1000); //一个小时过期
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ';path=/'; //设置路径
    };
    //权限
    ScreenageComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
    };
    ScreenageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screenage',
            template: __webpack_require__(/*! ./screenage.component.html */ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.html"),
            styles: [__webpack_require__(/*! ./screenage.component.scss */ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ScreenageComponent);
    return ScreenageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/screenage.module.ts ***!
  \****************************************************************************/
/*! exports provided: ScreenageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenageModule", function() { return ScreenageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _screenage_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screenage.routing */ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.routing.ts");
/* harmony import */ var _screenage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screenage.component */ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //客户运营平台 http




var ScreenageModule = /** @class */ (function () {
    function ScreenageModule() {
    }
    ScreenageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _screenage_routing__WEBPACK_IMPORTED_MODULE_6__["ScreenageRouting"]
            ],
            declarations: [
                _screenage_component__WEBPACK_IMPORTED_MODULE_7__["ScreenageComponent"]
            ],
            providers: [
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CusViewHttpService"]
            ]
        })
    ], ScreenageModule);
    return ScreenageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/screenage/screenage.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, ScreenageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenageRouting", function() { return ScreenageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screenage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenage.component */ "./src/app/pages/tzb/custom/custom-view/screenage/screenage.component.ts");


var routes = [
    {
        path: '', component: _screenage_component__WEBPACK_IMPORTED_MODULE_1__["ScreenageComponent"]
    }
];
var ScreenageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=tzb-custom-custom-view-screenage-screenage-module.js.map