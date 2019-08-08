(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-videos-customer-videos-module"],{

/***/ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-videos/customer-videos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"left\">\r\n        <div id=\"main_show\">\r\n            <div class=\"x-panel-header x-unselectable\" id=\"picishuxing\" style=\"mozuserselect: none; khtmluserselect: none;text-align:center;\"\r\n                unselectable=\"on\">\r\n                <span id=\"ext-gen199\">菜单</span>\r\n            </div>\r\n\r\n            <div class=\"nav\">\r\n                <ul class=\"navlist\">\r\n                    <li *ngFor=\"let item of menuList;let i = index\" [ngClass]=\"{'active':showIndex == i}\" (click)=\"selectSerial(item,i)\">\r\n                        <div class=\"menu\">&nbsp;&nbsp;&nbsp;{{item.label}}</div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"right\">\r\n        <div class=\"content\">\r\n            <iframe name=\"iframe\" id=\"ifrmid\" align=\"left\" frameborder=\"0\" width=\"100%\" height=\"100%\" scrolling=\"yes\" [src]=\"srcUrl\"></iframe>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-videos/customer-videos.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\nhtml,\nbody {\n  height: 100%;\n  text-align: center;\n  font: 12px/1.4 Verdana, sans-serif; }\n\n.wrapper {\n  width: 100%;\n  height: 800px;\n  margin: auto;\n  text-align: center; }\n\n.left {\n  width: 8%;\n  height: 100%;\n  float: left;\n  left: 0;\n  min-height: 100%;\n  text-align: left; }\n\n.right {\n  width: 92%;\n  height: 100%;\n  float: right;\n  left: 0;\n  min-height: 100%; }\n\n#ext-gen199 {\n  font-size: 1.4rem; }\n\nul,\nol,\ndl,\nli {\n  list-style: none; }\n\ndiv {\n  color: #5789bb;\n  text-decoration: none;\n  width: 100%;\n  margin: auto 0;\n  padding: auto 0; }\n\ndiv:hover,\ndiv:active,\ndiv:focus {\n  color: #009bdf;\n  text-decoration: none; }\n\n.nav ul {\n  padding-left: 0;\n  margin: 1px 0 7px 0;\n  width: 100%;\n  font-size: 1em;\n  float: left; }\n\n.nav ul li {\n  vertical-align: center; }\n\n.nav ul li div {\n  padding: 2px 0 2px 10px;\n  color: black;\n  text-decoration: none;\n  float: left;\n  font-size: 15px; }\n\n.nav ul li div:hover {\n  background-color: #5789bb;\n  color: #fff;\n  cursor: pointer; }\n\n.nav ul .active .menu {\n  background-color: #5789bb;\n  color: #fff;\n  cursor: pointer; }\n\n.content {\n  height: 100%; }\n\niframe {\n  padding: 2em; }\n\n.tree-node-open {\n  /* background-image: url(../images/folder-open.gif); */ }\n\n.tree-node-close {\n  /* background-image: url(../images/folder.gif); */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b21lci12aWRlb3MvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b21lci12aWRlb3NcXGN1c3RvbWVyLXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQ0osRUFBQTs7QUFFQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBRWIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osT0FBTztFQUNQLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjs7OztFQUlJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25COzs7RUFHSSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxzREFBQSxFQUF1RDs7QUFHM0Q7RUFDSSxpREFBQSxFQUFrRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tZXItdmlkZW9zL2N1c3RvbWVyLXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDogMTJweC8xLjQgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIHdpZHRoOiA4JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbiNleHQtZ2VuMTk5e1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbnVsLFxyXG5vbCxcclxuZGwsXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBjb2xvcjogIzU3ODliYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBwYWRkaW5nOiBhdXRvIDA7XHJcbn1cclxuXHJcbmRpdjpob3ZlcixcclxuZGl2OmFjdGl2ZSxcclxuZGl2OmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDA5YmRmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2IHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbjogMXB4IDAgN3B4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uYXYgdWwgbGkge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdiB1bCBsaSBkaXYge1xyXG4gICAgcGFkZGluZzogMnB4IDAgMnB4IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm5hdiB1bCBsaSBkaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3ODliYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2IHVsIC5hY3RpdmUgLm1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3ODliYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi50cmVlLW5vZGUtb3BlbiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2ZvbGRlci1vcGVuLmdpZik7ICovXHJcbn1cclxuXHJcbi50cmVlLW5vZGUtY2xvc2Uge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9mb2xkZXIuZ2lmKTsgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-videos/customer-videos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: customerVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerVideosComponent", function() { return customerVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_search_custom_search_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-search/custom-search.http.service */ "./src/app/pages/tzb/custom/http/custom-search/custom-search.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var customerVideosComponent = /** @class */ (function () {
    function customerVideosComponent(sanitizer, commfunc, httpService) {
        this.sanitizer = sanitizer;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.showIndex = 0; // 默认展示菜单列表中的第一条 客户资料 
        this.menuList = [
            { label: '客户资料' },
            { label: '存贷款挂接' },
            { label: '客户凭证接收' },
            { label: '代缴费签约' },
            { label: '信用卡业务' },
            { label: '网银签约' },
            { label: '方付通签约' },
            { label: '智多薪签约' },
            { label: '综合交易' },
            { label: '现场签约' },
            { label: '工作日程' },
            { label: '客户信息修改申请' },
            { label: '征信授权' },
            { label: '现场调查信息' },
            { label: '影像补录' },
        ]; // 菜单列表
        this.msgs = [];
        this.TAB_TYPE = '02';
        this.QueryFlag = 1;
        this.UID = 'MOBILE';
        this.PWD = 'cyg';
        this.AppID = 'SF';
        this.OrgOwner = 'XD';
    }
    customerVideosComponent.prototype.ngOnInit = function () {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.Post = commonHeader.extParam.postId; // 任职岗位
        this.UserID = commonHeader.userId; // 登陆人工号
        this.UserName = chName.userName; // 登陆人姓名
        this.OrgID = commonHeader.orgId; // 登陆人所属机构ID
        this.OrgName = chName.orgName; // 登陆人所属机构名称
        this.selectSerial(this.menuList[0], 0); //默认查询第一行菜单
    };
    // 查看影像系统
    customerVideosComponent.prototype.selectSerial = function (item, i) {
        var _this = this;
        if (i == 12) { // 征信授权
            this.TAB_TYPE = '50';
        }
        else if (i == 13) { // 现场调查信息
            this.TAB_TYPE = '18';
        }
        else if (i == 14) { // 影像补录
            this.TAB_TYPE = '18';
            this.QueryFlag = 2;
        }
        this.showIndex = i; // ngClass类加给被点击的菜单
        this.flexibleValue = '';
        var fixedValue = '?UID=' + this.UID + '&PWD=' + this.PWD + '&AppID=' + this.AppID + '&UserID=' + this.UserID + '&UserName=' + this.UserName + '&OrgID=' + this.OrgID + '&OrgName=' + this.OrgName + '&OrgOwner=' + this.OrgOwner + '&QueryFlag=' + this.QueryFlag + '&Post=' + this.Post;
        var custNo = JSON.parse(this.commfunc.getSessionData('custNo'));
        var param = {
            clientNo: custNo
        };
        this.httpService.BZ_1100300008103_MP(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.seqList = data.infoList;
                _this.seqList.forEach(function (el, index) {
                    var num = index + 1;
                    _this.flexibleValue = _this.flexibleValue + '&info' + num + '=TABSORDER:' + num + ';BUSI_SERIAL_NO:IMP' + el.clientNo + ';TABNAME:' + item.label + num + ';PROSERIALNO:' + el.impSeqNo + ';OBJECTNAME:APP1009;SERIAL_TYPE:贷前;TAB_TYPE:' + _this.TAB_TYPE + ';';
                });
                var reansportValue = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CUSTOMER_VIDEOS"] + fixedValue + _this.flexibleValue;
                console.log(reansportValue);
                _this.srcUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(reansportValue);
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
    customerVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-videos',
            template: __webpack_require__(/*! ./customer-videos.component.html */ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.html"),
            styles: [__webpack_require__(/*! ./customer-videos.component.scss */ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            app_pages_tzb_custom_http_custom_search_custom_search_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomSearchHttpService"]])
    ], customerVideosComponent);
    return customerVideosComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-videos/customer-videos.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-videos/customer-videos.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerVideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerVideosModule", function() { return CustomerVideosModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_pages_tzb_custom_customer_videos_customer_videos_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/customer-videos/customer-videos.routing */ "./src/app/pages/tzb/custom/customer-videos/customer-videos.routing.ts");
/* harmony import */ var app_pages_tzb_custom_customer_videos_customer_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/customer-videos/customer-videos.component */ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_search_custom_search_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-search/custom-search.http.service */ "./src/app/pages/tzb/custom/http/custom-search/custom-search.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerVideosModule = /** @class */ (function () {
    function CustomerVideosModule() {
    }
    CustomerVideosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                app_pages_tzb_custom_customer_videos_customer_videos_routing__WEBPACK_IMPORTED_MODULE_5__["CustomerVideosRouting"]
            ],
            declarations: [
                app_pages_tzb_custom_customer_videos_customer_videos_component__WEBPACK_IMPORTED_MODULE_6__["customerVideosComponent"]
            ],
            providers: [
                app_pages_tzb_custom_http_custom_search_custom_search_http_service__WEBPACK_IMPORTED_MODULE_7__["CustomSearchHttpService"]
            ]
        })
    ], CustomerVideosModule);
    return CustomerVideosModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/customer-videos/customer-videos.routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/customer-videos/customer-videos.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, CustomerVideosRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerVideosRouting", function() { return CustomerVideosRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_customer_videos_customer_videos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/customer-videos/customer-videos.component */ "./src/app/pages/tzb/custom/customer-videos/customer-videos.component.ts");


var routes = [
    {
        path: '', component: app_pages_tzb_custom_customer_videos_customer_videos_component__WEBPACK_IMPORTED_MODULE_1__["customerVideosComponent"]
    }
];
var CustomerVideosRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=customer-videos-customer-videos-module.js.map