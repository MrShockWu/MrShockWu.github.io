(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serial-number-serial-number-module"],{

/***/ "./src/app/pages/tzb/serial-number/bean/serial-number.bean.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/bean/serial-number.bean.ts ***!
  \********************************************************************/
/*! exports provided: SerialNumberQueryBean, SerialNumberErrorInfoBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberQueryBean", function() { return SerialNumberQueryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberErrorInfoBean", function() { return SerialNumberErrorInfoBean; });
var SerialNumberQueryBean = /** @class */ (function () {
    function SerialNumberQueryBean() {
    }
    return SerialNumberQueryBean;
}());

var SerialNumberErrorInfoBean = /** @class */ (function () {
    function SerialNumberErrorInfoBean() {
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
    }
    return SerialNumberErrorInfoBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/serial-number/http/serial-number.http.constant.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/http/serial-number.http.constant.ts ***!
  \*****************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    bpmQueryFlowNoTaskList: 'bpmQueryFlowNoTaskList',
    queryErrMessage: 'queryErrMessage',
};


/***/ }),

/***/ "./src/app/pages/tzb/serial-number/http/serial-number.http.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/http/serial-number.http.service.ts ***!
  \****************************************************************************/
/*! exports provided: SerialNumberHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberHttpService", function() { return SerialNumberHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _serial_number_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serial-number.http.constant */ "./src/app/pages/tzb/serial-number/http/serial-number.http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SerialNumberHttpService = /** @class */ (function () {
    function SerialNumberHttpService(httpService) {
        this.httpService = httpService;
    }
    //流水号审批记录查询接口
    SerialNumberHttpService.prototype.bpmQueryFlowNoTaskList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL"] + _serial_number_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].bpmQueryFlowNoTaskList, params);
    };
    //节点错误信息查询接口
    SerialNumberHttpService.prototype.queryErrMessage = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_URL1"] + _serial_number_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryErrMessage, params);
    };
    SerialNumberHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SerialNumberHttpService);
    return SerialNumberHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 流水号查询 -->\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'流水号'\"></header-title>\r\n    <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-4 text-r\">\r\n            <label>流水号:</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" readonly pInputText [(ngModel)]=\"serialNumberQueryBean.mainFlowNo\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2\">\r\n        <div class=\"ui-g-12\">\r\n            <button pButton label=\"查询\" (click)=\"bpmQueryFlowNoTaskList()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 审批轨迹 -->\r\n<div class=\"ui-g-12 boxShadow margin-t approvalTrack\">\r\n    <header-title [Info]=\"'审批轨迹'\"></header-title>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"flowNoExampleList\" scrollable=\"true\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n            <p-column [field]=\"item.label\" [header]=\"item.ch\" *ngFor=\"let item of arr1;\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                    <span class=\"tabelDetailIco\" (click)=\"showDetail(col,i)\">查看</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable> -->\r\n        <!-- 分页 -->\r\n        <!-- <p-paginator [first]=\"first\" rows=\"{{serialNumberQueryBean.pageRows}}\" totalRecords=\"{{serialNumberQueryBean.totalRows}}\"\r\n            pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate1($event)\"></p-paginator>\r\n    </div> -->\r\n    <ul>\r\n        <li *ngFor=\"let item of flowNoTaskList;let i = index;\">\r\n            <a>\r\n                <span class=\"num\" [ngStyle]=\"{'background-color': item.isException == '0' ? 'green' : 'red'}\"\r\n                    (click)=\"doClick(item)\">{{i+1}}</span>\r\n                <!-- <span class=\"num\" *ngIf=\"item.isException == '1'\" [ngStyle]=\"{'background-color': '#757575'}\" (click)=\"doClick(item)\">{{i+1}}</span> -->\r\n                <span class=\"text\">{{item.taskName}}</span>\r\n                <span class=\"text\">{{item.doTaskActorName}}</span>\r\n            </a>\r\n            <span class=\"line\" *ngIf=\"i != (flowNoTaskList.length - 1)\"></span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<!-- 报错信息 -->\r\n<div class=\"ui-g-12 boxShadow margin-t\">\r\n    <header-title [Info]=\"'报错信息'\"></header-title>\r\n    <p-dataTable [value]=\"errMessageList\" scrollable=\"true\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n        <p-column [field]=\"item.label\" [header]=\"item.ch\" *ngFor=\"let item of arr2;\"></p-column>\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator [first]=\"first\" rows=\"{{serialNumberErrorInfoBean.pageSize}}\" totalRecords=\"{{serialNumberErrorInfoBean.total}}\"\r\n        pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.text-r {\n  text-align: right; }\n.text-center {\n  text-align: center; }\n.margin-t {\n  margin-top: 10px; }\n/** 流程图 */\n.approvalTrack ul {\n  padding: 0;\n  margin: 0; }\n.approvalTrack ul li {\n    width: 15%;\n    min-width: 220px;\n    list-style: none;\n    float: left;\n    position: relative; }\n.approvalTrack ul li a {\n      width: 40%;\n      height: 100%;\n      text-align: center;\n      display: inline-block;\n      padding: 1em;\n      position: relative; }\n.approvalTrack ul li a .num {\n        display: inline-block;\n        text-align: center;\n        width: 45px;\n        height: 45px;\n        line-height: 45px;\n        border-radius: 50%;\n        background-color: #ccc;\n        cursor: pointer;\n        color: #fff;\n        margin-top: 20px; }\n.approvalTrack ul li a .text {\n        display: inline-block;\n        width: 100%; }\n.approvalTrack ul li .line {\n      content: ' ';\n      border: 1px solid #dddddd;\n      width: 50%;\n      top: 45%;\n      right: 0;\n      display: block;\n      position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3NlcmlhbC1udW1iZXIvc2VyaWFsLW51bWJlci1xdWVyeS9zZXJpYWwtbnVtYmVyLXF1ZXJ5LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R6Yi9zZXJpYWwtbnVtYmVyL3NlcmlhbC1udW1iZXItcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcc2VyaWFsLW51bWJlclxcc2VyaWFsLW51bWJlci1xdWVyeVxcc2VyaWFsLW51bWJlci1xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQixTQUFBO0FBQ0E7RUFHUSxVQUFVO0VBQ1YsU0FBUyxFQUFBO0FBSmpCO0lBTVksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQixFQUFBO0FBVjlCO01BWWdCLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osa0JBQWtCLEVBQUE7QUFqQmxDO1FBbUJvQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxnQkFBZ0IsRUFBQTtBQTVCcEM7UUErQm9CLHFCQUFxQjtRQUNyQixXQUFXLEVBQUE7QUFoQy9CO01BcUNnQixZQUFZO01BQ1oseUJBQXlCO01BQ3pCLFVBQVU7TUFDVixRQUFRO01BQ1IsUUFBUTtNQUNSLGNBQWM7TUFDZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9zZXJpYWwtbnVtYmVyL3NlcmlhbC1udW1iZXItcXVlcnkvc2VyaWFsLW51bWJlci1xdWVyeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRleHQtciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubWFyZ2luLXQge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi8qKiDmtYHnqIvlm74gKi9cbi5hcHByb3ZhbFRyYWNrIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG4gIC5hcHByb3ZhbFRyYWNrIHVsIGxpIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuYXBwcm92YWxUcmFjayB1bCBsaSBhIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5hcHByb3ZhbFRyYWNrIHVsIGxpIGEgLm51bSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gICAgICAuYXBwcm92YWxUcmFjayB1bCBsaSBhIC50ZXh0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5hcHByb3ZhbFRyYWNrIHVsIGxpIC5saW5lIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgdG9wOiA0NSU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4iLCIudGV4dC1yIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyoqIOa1geeoi+WbviAqL1xyXG4uYXBwcm92YWxUcmFjayB7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7ICAgICAgICBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.ts ***!
  \************************************************************************************/
/*! exports provided: SerialNumberQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberQueryComponent", function() { return SerialNumberQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_serial_number_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bean/serial-number.bean */ "./src/app/pages/tzb/serial-number/bean/serial-number.bean.ts");
/* harmony import */ var _http_serial_number_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/serial-number.http.service */ "./src/app/pages/tzb/serial-number/http/serial-number.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SerialNumberQueryComponent = /** @class */ (function () {
    function SerialNumberQueryComponent(commfunc, router, confirmationService, serialNumberHttpService, routerInfo) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.serialNumberHttpService = serialNumberHttpService;
        this.routerInfo = routerInfo;
        // flowNoExampleList: any;//流程实例
        this.flowNoTaskList = []; //审批轨迹
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格没有数据时的展示内容
        this.msgs = []; //信息提示框
        this.first = 0; //首页(分页)
        this.serialNumberQueryBean = new _bean_serial_number_bean__WEBPACK_IMPORTED_MODULE_5__["SerialNumberQueryBean"]();
        this.serialNumberErrorInfoBean = new _bean_serial_number_bean__WEBPACK_IMPORTED_MODULE_5__["SerialNumberErrorInfoBean"]();
        this.codeValues();
    }
    SerialNumberQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routerInfo.snapshot.queryParams['mainFlowNo'] && this.routerInfo.snapshot.queryParams['mainFlowNo'] != '') {
            this.serialNumberQueryBean.mainFlowNo = this.routerInfo.snapshot.queryParams['mainFlowNo'];
        }
        this.bpmQueryFlowNoTaskList(); //
        this.preSet();
        setTimeout(function () {
            _this.errMessageList = [];
        });
    };
    //码值
    SerialNumberQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //初始化
    SerialNumberQueryComponent.prototype.preSet = function () {
        // this.arr1 = [{//流程实例表头
        //     ch: '流程名称',
        //     label: 'bigClassName'
        // },{
        //     ch: '系统编码',
        //     label: 'systemCode'
        // }];
        this.arr2 = [{
                ch: '系统编号',
                label: 'targetId'
            }, {
                ch: '流水号',
                label: 'globalSeqNo'
            }, {
                ch: '错误码',
                label: 'errCode'
            }, {
                ch: '错误信息',
                label: 'errMsg'
            }];
    };
    //节点-点击
    SerialNumberQueryComponent.prototype.doClick = function (item) {
        if (item.isException == '0') {
            return false;
        }
        this.flowNo = this.serialNumberQueryBean.mainFlowNo; //当前流水号
        this.queryErrMessage(this.flowNo);
    };
    //查看审批轨迹
    // showDetail(col,i){
    //     console.log(col);
    // }
    //流水号查询审批轨迹
    SerialNumberQueryComponent.prototype.bpmQueryFlowNoTaskList = function () {
        var _this = this;
        // debugger
        // 校验
        if (this.serialNumberQueryBean.mainFlowNo) {
            if (this.serialNumberQueryBean.mainFlowNo.length < 23) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '流水号应是不小于23位的数字' }];
                return false;
            }
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '流水号不能为空' }];
            return false;
        }
        this.serialNumberHttpService.bpmQueryFlowNoTaskList(this.serialNumberQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.flowNoTaskList = [];
                if (data.pageData.result && data.pageData.result.length != 0) {
                    data.pageData.result.forEach(function (element, i) {
                        var obj = {
                            taskName: '',
                            doTaskActorName: '',
                            isException: ''
                        };
                        obj.taskName = element.taskName; //流程名称
                        obj.doTaskActorName = element.doTaskActorName; //任务处理人
                        obj.isException = element.isExcepiton; //状态
                        _this.flowNoTaskList[i] = obj;
                    });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //节点错误信息
    SerialNumberQueryComponent.prototype.queryErrMessage = function (flowNo) {
        var _this = this;
        var param = {
            globalSeqNo: flowNo,
            pageNum: this.serialNumberErrorInfoBean.pageNum,
            pageSize: this.serialNumberErrorInfoBean.pageSize
        };
        this.serialNumberHttpService.queryErrMessage(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.serialNumberErrorInfoBean.total = data.total;
                _this.errMessageList = data.valueList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //分页
    SerialNumberQueryComponent.prototype.paginate = function (event) {
        this.serialNumberErrorInfoBean.pageSize = Number(event.rows); //每页显示的条数
        var currentPage = event.page + 1; //当前页
        this.serialNumberErrorInfoBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.serialNumberErrorInfoBean.pageSize;
        this.queryErrMessage(this.flowNo); //调用查询的方法
    };
    SerialNumberQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serial-number-query',
            template: __webpack_require__(/*! ./serial-number-query.html */ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.html"),
            styles: [__webpack_require__(/*! ./serial-number-query.scss */ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _http_serial_number_http_service__WEBPACK_IMPORTED_MODULE_6__["SerialNumberHttpService"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_serial_number_http_service__WEBPACK_IMPORTED_MODULE_6__["SerialNumberHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SerialNumberQueryComponent);
    return SerialNumberQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number.componen.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number.componen.ts ***!
  \*******************************************************************/
/*! exports provided: SerialNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberComponent", function() { return SerialNumberComponent; });
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

var SerialNumberComponent = /** @class */ (function () {
    function SerialNumberComponent() {
    }
    SerialNumberComponent.prototype.ngOnInit = function () {
    };
    SerialNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serial-number',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], SerialNumberComponent);
    return SerialNumberComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number.module.ts ***!
  \*****************************************************************/
/*! exports provided: SerialNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberModule", function() { return SerialNumberModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _serial_number_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serial-number.routing */ "./src/app/pages/tzb/serial-number/serial-number.routing.ts");
/* harmony import */ var _serial_number_componen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serial-number.componen */ "./src/app/pages/tzb/serial-number/serial-number.componen.ts");
/* harmony import */ var _serial_number_query_serial_number_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serial-number-query/serial-number-query */ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SerialNumberModule = /** @class */ (function () {
    function SerialNumberModule() {
    }
    SerialNumberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _serial_number_routing__WEBPACK_IMPORTED_MODULE_4__["SerialNumberRouting"]
            ],
            declarations: [
                _serial_number_componen__WEBPACK_IMPORTED_MODULE_5__["SerialNumberComponent"],
                _serial_number_query_serial_number_query__WEBPACK_IMPORTED_MODULE_6__["SerialNumberQueryComponent"]
            ],
            exports: [],
            providers: []
        })
    ], SerialNumberModule);
    return SerialNumberModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/serial-number/serial-number.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/serial-number/serial-number.routing.ts ***!
  \******************************************************************/
/*! exports provided: routes, SerialNumberRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberRouting", function() { return SerialNumberRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _serial_number_componen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serial-number.componen */ "./src/app/pages/tzb/serial-number/serial-number.componen.ts");
/* harmony import */ var _serial_number_query_serial_number_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serial-number-query/serial-number-query */ "./src/app/pages/tzb/serial-number/serial-number-query/serial-number-query.ts");



var routes = [
    {
        path: '',
        component: _serial_number_componen__WEBPACK_IMPORTED_MODULE_1__["SerialNumberComponent"],
        children: [
            {
                path: 'serial-number-query',
                component: _serial_number_query_serial_number_query__WEBPACK_IMPORTED_MODULE_2__["SerialNumberQueryComponent"]
            },
        ]
    },
];
var SerialNumberRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=serial-number-serial-number-module.js.map